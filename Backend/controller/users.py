import json
from config.dbconfig import pg_config
import psycopg2
from werkzeug.security import generate_password_hash, check_password_hash
from model.user import UsersDAO
from fastapi.encoders import jsonable_encoder as jsonify

class BaseUsers:
    def __init__ (self):
        connection_url = "dbname=%s user=%s password=%s port=%s host=%s" % (pg_config["database"], pg_config["username"], pg_config["password"], pg_config["port"], pg_config["host"])
        self.conn = psycopg2.connect(connection_url)

    def build_row_dict(self, row):
        result = {
            "userId" : row[0],
            "email" : row[1],
            "password" : row[2],
            "uFirstName" : row[3],
            "uLastName" : row[4],
            "usertype" : row[5],
            "phone" : row[6],
        }
        return result

    def createUser(self, uFirstName, uLastName, uEmail, uPassword, usertype, phone):
        dao = UsersDAO()
        checkUser = dao.getUserInfo(uEmail)
        hash_uPassword = generate_password_hash(uPassword, method='sha256')
        if checkUser is None:
            uId = dao.createUser(uFirstName, uLastName, uEmail, hash_uPassword, usertype, phone)
            result = self.build_row_dict((uId, uEmail, hash_uPassword, uFirstName, uLastName, usertype, phone))
            return jsonify({
                    "status": "Success",
                    "body": result
                    })
        else:
            return jsonify("Error"), 401
   
    def login(self, uEmail, uPassword):
        dao = UsersDAO()
        user = dao.getUserInfo(uEmail)
        if user:    
            check = user[0][2]
            if check_password_hash(check, uPassword):
                return jsonify({
                    'status' : "Success",
                    'body': {
                        'uid': user[0][0],
                        'uFirstName' : user[0][3],
                        'uLastName' : user[0][4],
                        'uEmail': user[0][1]
                    }
                }), 200
            else:
                return jsonify({
                    'status' : "Error",
                    'message': 'Wrong email or password '
                }), 404
        else:
                return jsonify({
                    'status' : "Error",
                    'message': 'Wrong email or password '
                }), 404

    def deletion_confirmation():
        confirm = True
        return confirm

    def delete(self, uEmail):
        dao = UsersDAO
        user = dao.getUserInfo(uEmail)
        confirm = self.deletion_confirmation()
        if confirm:
            result = dao.deleteUser(user[0][0])
            if result:
                return jsonify("ACCOUNT DELETED"), 200
            else:
                return jsonify("NOT FOUND"), 404
   
    def updateUser(self, uid, uFirstName, uLastName, uEmail, uPassword):
        dao = UsersDAO()
        if True:
            dao.updateUser(uid, uFirstName, uLastName, uEmail, uPassword)
            return jsonify({
                'status' : "Success",
                'message' : 'Sucessful update'
            }), 200
        # else:
        #     return jsonify({
        #             'status' : "Error",
        #             'message': 'Wrong email or password '
        #         }), 404
   
    def checkIfProfessional(self, uid):
        dao = UsersDAO()
        urole = dao.checkIfProfessional(uid)
        if urole:
            return jsonify("APPROVED"), 200
        else:
            return jsonify("ACCESS DENIED"), 401