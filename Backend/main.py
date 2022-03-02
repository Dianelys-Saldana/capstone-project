from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def home():
    return {"message" : "Hello World"}

@app.get("/profile")
def profile():
    return {"message" : "Profile"}

@app.post("/signup")
def signup():
    return {"message" : "Post"}

@app.put("/editprofile")
def editProfile():
    return {"message" : "Put"}

@app.delete("/delete")
def delete():
    return {"message" : "Delete"}