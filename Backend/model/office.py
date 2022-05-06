from Backend.config.dbconfig import pg_config
import psycopg2

class OfficeDAO:
    def __init__ (self):
        connection_url = "dbname=%s user=%s password=%s port=%s host=%s" % (pg_config["database"], pg_config["username"], pg_config["password"], pg_config["port"], pg_config["host"])
        self.conn = psycopg2.connect(connection_url)

    def createOffice(self, owner, location, services, officehours, insurance):
        cursor = self.conn.cursor()
        query = "insert into office (owner, location, services, officehours, insurance) values (%s,%s,%s,%s,%s) returning oid;"
        cursor.execute(query, (owner, location, services, officehours, insurance,))
        oid = cursor.fetchone()[0]
        self.conn.commit()
        self.conn.close()
        return oid
    
    def getOffice(self, owner):
        cursor = self.conn.cursor()
        query = "select * from office where owner = %s"
        result = cursor.execute(query, (owner,))
        self.conn.commit()
        self.conn.close()
        return result
    
    def updateOffice(self, oid, owner, location, services, officehours, insurance):
        cursor = self.conn.cursor()
        query = "update office set owner=%s, location=%s, services=%s, officehours=%s, insurance=%s where oid=%s"
        cursor.execute(query, (owner,location,services,officehours,insurance,oid,))
        self.conn.commit()
        self.conn.close()
        return True
    
    def deleteOffice(self, oid):
        cursor = self.conn.cursor()
        query = "delete from office where oid=%s"
        cursor.execute(query, (oid,))
        affectedRows = cursor.rowcount
        self.conn.commit()
        self.conn.close()
        return affectedRows != 0