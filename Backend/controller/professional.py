from config.dbconfig import pg_config
import psycopg2
from model.professionals import ProfessionalDAO
from fastapi.encoders import jsonable_encoder as jsonify
from controller.users import BaseUsers

class BaseProfessionals:
    def __init__(self):
        connection_url = "dbname=%s user=%s password=%s port=%s host=%s" % (pg_config["database"], pg_config["username"], pg_config["password"], pg_config["port"], pg_config["host"])
        self.conn = psycopg2.connect(connection_url)
    
    def build_row_dict(self, row):
        result = {
            "pid" : row[0],
            "profession" : row[1],
            "userid" : row[2],
            "yearsexp" : row[3],
        }
        return result
    
    def addProfessional(self, profession, email, yearsexp):
        dao = ProfessionalDAO()
        uBas = BaseUsers()
        uid = uBas.getUserID(email)
        pid = dao.addProfessional(profession, uid, yearsexp)
        result = self.build_row_dict((pid, profession, uid, yearsexp))
        return jsonify({
            "status": "Success",
                "body": result
        })
    
    

            
