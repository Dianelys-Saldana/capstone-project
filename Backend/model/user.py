from config.dbconfig import pg_config
from fastapi.encoders import jsonable_encoder as jsonify
import psycopg2

class UsersDAO:
    def __init__ (self):
        connection_url = "dbname=%s user=%s password=%s port=%s host=%s" % (pg_config["database"], pg_config["username"], pg_config["password"], pg_config["port"], pg_config["host"])
        self.conn = psycopg2.connect(connection_url)
    
    async def createUser(self, uFirstName, uLastName, uEmail, uPassword, usertype, phone):
        cursor = self.conn.cursor()
        query = "insert into users (email, password, uFirstName, uLastName, usertype) values (%s,%s,%s,%s,%s) returning userId;"
        cursor.execute(query, (uFirstName, uLastName, uEmail, uPassword, usertype, phone))
        uid = cursor.fetchone()[0]
        self.conn.commit()
        self.conn.close()
        return uid
    
    def getUserInfo(self, email):
        cursor = self.conn.cursor()
        query = "select * from users where email = %s;"
        result = cursor.execute(query, (email,))
        return jsonify(result)