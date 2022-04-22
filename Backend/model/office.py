from Backend.config.dbconfig import pg_config
import psycopg2

class OfficeDAO:
    def __init__ (self):
        connection_url = "dbname=%s user=%s password=%s port=%s host=%s" % (pg_config["database"], pg_config["username"], pg_config["password"], pg_config["port"], pg_config["host"])
        self.conn = psycopg2.connect(connection_url)

    def createOffice(self, owner, location, services):
        cursor = self.conn.cursor()
        query = "insert into office (owner, location, services) values (%s,%s,%s) returning userId;"
        cursor.execute(query, (owner, location, services))
        oid = cursor.fetchone()[0]
        self.conn.commit()
        self.conn.close()
        return oid