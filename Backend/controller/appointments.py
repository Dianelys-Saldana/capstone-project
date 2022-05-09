from unittest import result
from config.dbconfig import pg_config
import psycopg2
from model.appointment import AppointmentDAO
from fastapi.encoders import jsonable_encoder as jsonify

class BaseAppointments:
    def __init__ (self):
        connection_url = "dbname=%s user=%s password=%s port=%s host=%s" % (pg_config["database"], pg_config["username"], pg_config["password"], pg_config["port"], pg_config["host"])
        self.conn = psycopg2.connect(connection_url)

    def build_row_dict(self, row):
        result = {
            "aId": row[0],
            "userId": row[1],
            "pId": row[2],
            "officeId": row[3],
            "day": row[4],
            "starttime": row[5],
            "endtime": row[6],
        }
        return result
    
    def createAppointment(self, userId, pId, officeId, day, starttime, endtime):
        dao = AppointmentDAO()
        aid = dao.createAppointment(userId, pId, officeId, day, starttime, endtime)
        result = self.build_row_dict((aid, userId, pId, officeId, day, starttime, endtime))
        return jsonify({
                'status': "Success",
                'body': result
        })
    
    def lookupAppointments(self, userId, pId, officeId, day, starttime, endtime):
        dao = AppointmentDAO()
        return
    
    def editAppointment(self, userId, pId, officeId, day, starttime, endtime):
        dao = AppointmentDAO()
        return
    
    def deleteAppointment(self, aid):
        dao = AppointmentDAO()
        return
    
    