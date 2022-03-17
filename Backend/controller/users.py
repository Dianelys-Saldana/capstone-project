from config.dbconfig import pg_config
import psycopg2
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
            "phone" : row[6]
        }
        return result

    def createUser(self, json):
        uFirstName = json["uFirstName"]
        uLastName = json["uLastName"]
        uEmail = json["uEmail"]
        uPassword = json['uPassword']
        usertype = json['usertype']
        phone = json['phone']
        dao = UsersDAO()
        checkUser = dao.getUserInfo(uEmail)
        if checkUser is None:
            uId = dao.createUser(uFirstName, uLastName, uEmail, uPassword, usertype, phone)
            result = self.build_row_dict((uId,uFirstName, uLastName, uEmail, usertype, phone))
            return jsonify({
                    'status' : "Success",
                    'body': result
                })
        else:
            return jsonify("Error"), 401
    
    def login(self, json):
        uEmail = json["uEmail"]
        uPassword = json['uPassword']
        dao = UsersDAO()
        user = dao.getUserInfo(uEmail)
        if user:    
            check = user[0][4]
            if check==uPassword:
                return jsonify({
                    'status' : "Success",
                    'body': {
                        'uid': user[0][0],
                        'uEmail': user[0][3]
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