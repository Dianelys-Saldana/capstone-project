from config.dbconfig import pg_config
from fastapi.encoders import jsonable_encoder as jsonify
import psycopg2

class ProfessionalDAO:
    def __init__(self):
        connection_url = "dbname=%s user=%s password=%s port=%s host=%s" % (pg_config["database"], pg_config["username"], pg_config["password"], pg_config["port"], pg_config["host"])
        self.conn = psycopg2.connect(connection_url)
    
    def addProfessional(self, profession, uid):
        cursor = self.conn.cursor()
        query = "insert into professionals (profession, userid) values (%s,%s) returning pid;"
        cursor.execute(query, (profession, uid,))
        pid = cursor.fetchone()[0]
        self.conn.commit()
        self.conn.close()
        return pid
    
    def getProfessional(self, profession):
        cursor = self.conn.cursor()
        query = "select * from professionals where profession = %s"
        result = cursor.execute(query, (profession,))
        self.conn.commit()
        self.conn.close()
        return jsonify(result)
    
    def updateProfessional(self, profession, uid):
        cursor = self.conn.cursor()
        query = "update professionals set profession = %s where userid = %s"
        cursor.execute(query, (profession, uid,))
        self.conn.commit()
        self.conn.close()
        return True

    def deleteProfessional(self, pid):
        cursor = self.conn.cursor()
        query = "delete from professionals where pid = %s"
        cursor.execute(query, (pid,))
        affectedRows = cursor.rowcount
        self.conn.commit()
        self.conn.close()
        return affectedRows != 0