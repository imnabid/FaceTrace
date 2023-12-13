from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from motor.motor_asyncio import AsyncIOMotorClient
from passlib.hash import bcrypt
 
app = FastAPI()


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
class PersonDetails(BaseModel):
    firstname: str
    lastname: str
    age: str
    citizenshipnumber: str
    number: str
    moredetails: str
    gender: str  # Make sure this matches the frontend
    selectedDistrict: str  # Make sure this matches the frontend
    selectedMunicipality: str
    date:str  # Make sure this matches the frontend

@app.post("/submit-form")
async def submit_form(user_details: UserDetails, person_details: PersonDetails):
    
    user_details_collection = db["user_details"]
    person_details_collection = db["person_details"]

    await user_details_collection.insert_one(user_details.dict())
    await person_details_collection.insert_one(person_details.dict())

    return {"status": "Form submitted successfully"}

# Model for user registration
class UserRegistration(BaseModel):
    name:str
    email:str
    password:str
    repassword:str
    branch:str

# Model for user login
class UserLogin(BaseModel):
    email: str
    password: str
   



from fastapi import HTTPException

@app.post("/register")
async def register(user_data: UserRegistration):
    try:
        # Check if a user with the provided email already exists
        existing_user = await db["users"].find_one({"email": user_data.email})
        
        if existing_user:
            # User already registered
            raise HTTPException(status_code=400, detail="User with this email already registered")

        # Hash the password before saving it to the database
        hashed_password = bcrypt.hash(user_data.password)

        # Create a new user with the hashed password
        new_user = {
            "name": user_data.name,
            "email": user_data.email,
            "password": hashed_password,
            "repassword": user_data.repassword,
            "branch": user_data.branch
        }

        # Save the new user to the database
        result = await db['users'].insert_one(new_user)

        # Convert ObjectId to string for serialization
        new_user["_id"] = str(result.inserted_id)

        return {"message": "Registration successful", "user": new_user}

    except HTTPException as he:
        # Handle HTTPExceptions separately (e.g., log and return a response)
        return {"message": "User with this email already registered"}

    except Exception as e:
        # Log the error or handle it as needed
        logger.exception(f"An error occurred during registration: {e}")
        raise HTTPException(status_code=500, detail="An error occurred during registration.")

@app.post("/login")
async def login(user_data: UserLogin):
    print(f"Received Login Request for user: {user_data.email}")

    user = await db['users'].find_one({"email": user_data.email})
    
    if user and 'password' in user:
        stored_password = user['password']
        print(f"Stored Hashed Password: {stored_password}")  # Debugging line

        try:
            if bcrypt.verify(user_data.password, stored_password):
                print("Login successful")
                # Convert ObjectId to string for serialization
                user["_id"] = str(user["_id"])
                return {"message": "Login successful", "user": user}
        except ValueError:
            print("Invalid bcrypt hash")

    print(f"Login failed for user: {user_data.email}")  # Debugging line
    raise HTTPException(status_code=401, detail="Invalid credentials")