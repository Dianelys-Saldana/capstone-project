from Backend.config.dbconfig import pg_config
import psycopg2

class AppointmentDAO:
    def __init__ (self):
        connection_url = "dbname=%s user=%s password=%s port=%s host=%s" % (pg_config["database"], pg_config["username"], pg_config["password"], pg_config["port"], pg_config["host"])
        self.conn = psycopg2.connect(connection_url)

    def createAppointment(self, userId, pId, officeId, day, starttime, endtime):
        cursor = self.conn.cursor()
        query = "insert into appointment (userId, pId, officeId, day, starttime, endtime) values (%s,%s,%s,%s,%s) returning userId;"
        cursor.execute(query, (userId, pId, officeId, day, starttime, endtime))
        aid = cursor.fetchone()[0]
        self.conn.commit()
        self.conn.close()
        return aid