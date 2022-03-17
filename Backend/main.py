from fastapi import FastAPI, Request
from flask import request
from controller.users import BaseUsers

app = FastAPI()

@app.get("/")
async def home():
    return {"message" : "Hello World"}

@app.get("/profile")
def profile():
    return {"message" : "Profile"}

@app.get("/login")
def login():
    BaseUsers().login(request.json)

@app.post("/signup")
def signup():
    BaseUsers().createUser(request.json)
    return {"message" : "Post"}

@app.put("/editprofile")
def editProfile():
    return {"message" : "Put"}

@app.delete("/delete")
def delete():
    return {"message" : "Delete"}