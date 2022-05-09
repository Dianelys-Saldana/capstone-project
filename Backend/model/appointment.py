from config.dbconfig import pg_config
import psycopg2
from fastapi.encoders import jsonable_encoder as jsonify

class AppointmentDAO:
    def __init__ (self):
        connection_url = "dbname=%s user=%s password=%s port=%s host=%s" % (pg_config["database"], pg_config["username"], pg_config["password"], pg_config["port"], pg_config["host"])
        self.conn = psycopg2.connect(connection_url)

    def createAppointment(self, userId, pId, officeId, day, starttime, endtime):
        cursor = self.conn.cursor()
        query = "insert into appointment (userid, pid, officeid, day, starttime, endtime) values (%s,%s,%s,%s,%s, %s) returning aid;"
        cursor.execute(query, (userId, pId, officeId, day, starttime, endtime,))
        aid = cursor.fetchone()[0]
        self.conn.commit()
        self.conn.close()
        return aid
    
    def lookupAppointments(self, userId, pId, officeId, day):
        cursor = self.conn.cursor()
        query = "select * from appointment"
        result = cursor.execute(query)
        self.conn.commit()
        self.conn.close()
        return jsonify(result)
    
    def getAppointmentInfo(self, userId, pId, officeId, day, starttime, endtime):
        cursor = self.conn.cursor()
        query = "select * from appointment where userid=%s and pid=%s and officeid=%s and day=%s and starttime=%s and endtime=%s"
        result=cursor.execute(query, (userId, pId, officeId, day, starttime, endtime,))
        self.conn.commit()
        self.conn.close()
        return jsonify(result)
    
    def editAppointment(self, aId, userId, pId, officeId, day, starttime, endtime):
        cursor = self.conn.cursor()
        query = "update appointment set userid=%s, pid=%s, officeid=%s, day=%s, starttime=%s, endtime=%s where aid=%s"
        cursor.execute(query, (userId, pId, officeId, day, starttime, endtime, aId,))
        self.conn.commit()
        self.conn.close()
        return True
    
    def deleteAppointment(self, aid):
        cursor = self.conn.cursor()
        query = "delete from appointment where aid=%s"
        cursor.execute(query, (aid,))
        affectedRows = cursor.rowcount
        self.conn.commit()
        self.conn.close()
        return affectedRows != 0