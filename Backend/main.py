from fastapi import FastAPI
from pydantic import BaseModel
# from flask import request
from controller.users import BaseUsers

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

app = FastAPI()

@app.get("/", tags=["MediFast"])
async def home():
    return {"message" : "Hello World"}

@app.get("/profile", tags=["MediFast"])
async def profile():
    return {"message" : "Profile"}

@app.get("/login", tags=["MediFast"])
async def login(user: UserLogin):
    BaseUsers().login(user.email, user.password)

@app.post("/signup", tags=["MediFast"])
async def signup(user: User):
    BaseUsers().createUser(user.uFirstName, user.uLastName, user.uEmail, user.uPassword, user.usertype, user.phone)
    return "YEY"

@app.put("/editprofile", tags=["MediFast"])
async def editProfile():
    return {"message" : "Put"}

@app.delete("/deleteprofile", tags=["MediFast"])
async def delete():
    return {"message" : "Delete"}