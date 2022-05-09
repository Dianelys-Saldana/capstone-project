from fastapi import FastAPI
from pydantic import BaseModel
from controller.users import BaseUsers
from controller.appointments import BaseAppointments

class User(BaseModel):
    uFirstName: str
    uLastName: str
    uEmail: str
    uPassword: str
    usertype: str
    phone: str

class UserLogin(BaseModel):
    email: str
    password: str

class UserUpdate(BaseModel):
    uFirstName: str
    uLastName: str
    uEmail: str
    uPassword: str

class Appointment(BaseModel):
    userid: str
    pid: str
    officeid: str
    day: str
    starttime: str
    endtime: str

app = FastAPI()

@app.get("/", tags=["MediFast"])
async def home():
    return {"message" : "Welcome to MediFast"}

#User
@app.get("/profile", tags=["MediFast"])
async def profile(user: User):
    BaseUsers.getUser(user.uEmail)
    return {"message" : "Profile"}

@app.get("/login", tags=["MediFast"])
async def login(user: UserLogin):
    BaseUsers().login(user.email, user.password)

@app.post("/signup", tags=["MediFast"])
async def signup(user: User):
    BaseUsers().createUser(user.uFirstName, user.uLastName, user.uEmail, user.uPassword, user.usertype, user.phone)
    return {"message" : "Account Created!"}

@app.put("/editprofile", tags=["MediFast"])
async def editProfile(user: UserUpdate):
    userId = BaseUsers().getUserID(user.uEmail)
    BaseUsers().updateUser(userId, user.uFirstName, user.uLastName, user.uEmail, user.uPassword)
    return {"message" : "Edit Account"}

@app.delete("/deleteprofile", tags=["MediFast"])
async def delete(user : User):
    BaseUsers.deleteUser(user.uEmail)
    return {"message" : "Delete Account"}

#Appointment
@app.get("/appointments", tags=["MediFast"])
def lookupAppointments(aid: Appointment):
    BaseAppointments.lookupAppointments()
    return {"message" : "Appointments"}

@app.post("/appointments", tags=["MediFast"])
def createAppointments(aid: Appointment):
    BaseAppointments.createAppointment(aid.userid, aid.pid, aid.officeid, aid.day, aid.starttime, aid.endtime)
    return {"message" : "Appointments"}

@app.put("/appointments", tags=["MediFast"])
def editAppointments(aid: Appointment):
    BaseAppointments.editAppointment()
    return {"message" : "Appointments"}

@app.delete("/appointments", tags=["MediFast"])
def deleteAppointments(aid: Appointment):
    BaseAppointments.deleteAppointment()
    return {"message":"Appointments"}

#Professional
@app.post("/professional", tags=["MediFast"])
def createProfessional():
    return {"message":"Professional"}
@app.get("/professional", tags=["MediFast"])
def getProfessional():
    return {"message":"Professional"}
@app.put("/professional", tags=["MediFast"])
def updateProfessional():
    return {"message":"Professional"}
@app.delete("/professional", tags=["MediFast"])
def deleteProfessional():
    return {"message":"Professional"}

#UserInfo
@app.post("/userinfo", tags=["MediFast"])
def addUserInfo():
    return {"message":"UserInfo"}
@app.get("/userinfo", tags=["MediFast"])
def getUserInfo():
    return {"message":"UserInfo"}
@app.put()("/userinfo", tags=["MediFast"])
def updateUserInfo():
    return {"message":"UserInfo"}
@app.delete()("/userinfo", tags=["MediFast"])
def deleteUserInfo():
    return {"message":"UserInfo"}

#Office
@app.post("/office", tags=["MediFast"])
def addOffice():
    return {"message":"Office"}
@app.get("/office", tags=["MediFast"])
def addOffice():
    return {"message":"Office"}
@app.put("/office", tags=["MediFast"])
def addOffice():
    return {"message":"Office"}
@app.delete("/office", tags=["MediFast"])
def addOffice():
    return {"message":"Office"}