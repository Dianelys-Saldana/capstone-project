from config.dbconfig import pg_config
import psycopg2
from model.user import UsersDAO
from fastapi.encoders import jsonable_encoder as jsonify

class BaseUsers:
    def __init__ (self):
        connection_url = "dbname=%s user=%s password=%s port=%s host=%s" % (pg_config["database"], pg_config["username"], pg_config["password"], pg_config["port"], pg_config["host"])
        self.conn = psycopg2.connect(connection_url)

    async def build_row_dict(self, row):
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

    async def createUser(self, uFirstName, uLastName, uEmail, uPassword, usertype, phone):
        dao = UsersDAO()
        checkUser = dao.getUserInfo(uEmail)
        if checkUser is None:
            uId = dao.createUser(uFirstName, uLastName, uEmail, uPassword, usertype, phone)
            result = self.build_row_dict((uId,uEmail, uPassword, uFirstName, uLastName, usertype, phone))
            return jsonify({
                    'status' : "Success",
                    'body': result
                })
        else:
            return jsonify("Error"), 401
    
    def login(self, uEmail, uPassword):
        dao = UsersDAO()
        user = dao.getUserInfo(uEmail)
        print("HELLLLLLOOOOO",user)
        if user:    
            check = user[0][2]
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