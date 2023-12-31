from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from motor.motor_asyncio import AsyncIOMotorClient
from passlib.hash import bcrypt

import logging 

 
app = FastAPI()

logging.basicConfig(level=logging.ERROR)
logger = logging.getLogger(__name__)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MONGO_DB_URL = "mongodb://127.0.0.1/myLoginRegisterDB"
MONGO_DB_NAME = "police"  


client = AsyncIOMotorClient(MONGO_DB_URL)
db = client[MONGO_DB_NAME]

class UserDetails(BaseModel):
    firstnameuser: str
    lastnameuser: str
    addressuser: str
    numberuser: str
    relation:str

class PersonDetails(BaseModel):
    firstname: str
    lastname: str
    age: str
    gender: str
    address: str
    
    citizenshipnumber: str
    number: str
    moredetails: str
    municipality:str 
    wardno:str
    lastlocation:str
    date:str

@app.post("/submit-form")
async def submit_form(user_details: UserDetails, person_details: PersonDetails):
    
    user_details_collection = db["user_details"]
    person_details_collection = db["person_details"]
    print(PersonDetails)
    await user_details_collection.insert_one(user_details.dict())
    await person_details_collection.insert_one(person_details.dict())

    return {"status": "Form submitted successfully"}
class UserRegistration(BaseModel):
    name:str
    email:str
    password:str
    repassword:str
    batch_id:str


class UserLogin(BaseModel):
    email: str
    password: str
    batch_id:str
   



from fastapi import HTTPException

from fastapi import HTTPException

@app.post("/register")
async def register(user_data: UserRegistration):
    try:
       
        if user_data.batch_id and user_data.batch_id[0].isalpha() and user_data.batch_id[-1].isdigit():
            existing_user = await db["users"].find_one({"email": user_data.email})

            if existing_user:
                raise HTTPException(status_code=400, detail="User with this email already registered")

            hashed_password = bcrypt.hash(user_data.password)

            new_user = {
                "name": user_data.name,
                "email": user_data.email,
                "password": hashed_password,
                "repassword": user_data.repassword,
                "batch_id": user_data.batch_id
            }

            result = await db['users'].insert_one(new_user)

            new_user["_id"] = str(result.inserted_id)

            return {"message": "Registration successful", "user": new_user}
        else:
            raise HTTPException(status_code=400, detail="Invalid batch ID format")

    except HTTPException as he:
       
        if "User with this email already registered" in str(he.detail):
            return {"message": "User with this email already registered"}

        return {"message": "An error occurred during registration"}

    except Exception as e:
        logger.exception(f"An error occurred during registration: {e}")
        raise HTTPException(status_code=500, detail="An error occurred during registration.")

@app.post("/login")
async def login(user_data: UserLogin):
    try:
        logger.info(f"Received Login Request for user: {user_data.email}")

        user = await db['users'].find_one({"email": user_data.email})

        if user and 'password' in user:
            stored_password = user['password']
            logger.info(f"Stored Hashed Password: {stored_password}")

            try:
                if bcrypt.verify(user_data.password, stored_password):
                  
                    if user_data.batch_id == user.get("batch_id"):
                        logger.info("Login successful")

                        user["_id"] = str(user["_id"])
                        return {"message": "Login successful", "user": user}
                    else:
                        logger.warning("Provided batch ID does not match the registered batch ID")
                        raise HTTPException(status_code=401, detail="Invalid batch ID")
                else:
                    logger.warning("Password verification failed")
                    raise HTTPException(status_code=401, detail="Invalid credentials")
            except ValueError:
                logger.error("Invalid bcrypt hash")
                raise HTTPException(status_code=401, detail="Invalid bcrypt hash")

        logger.warning(f"Login failed for user: {user_data.email}")
        raise HTTPException(status_code=401, detail="Invalid credentials")

    except HTTPException as he:
        logger.warning(f"HTTPException during login: {he}")
        raise he

    except Exception as e:
        logger.exception(f"An error occurred during login: {e}")
        raise HTTPException(status_code=500, detail="An error occurred during login.")
