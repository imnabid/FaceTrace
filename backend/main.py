from fastapi import FastAPI
from typing import List
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

origins = [
   'http://localhost:3000',
   'http://localhost'
   
]

app.add_middleware(
    CORSMiddleware,
    allow_origins= origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# class People(BaseModel):
#     id: int
#     name: str
#     age: int
#     gender: str

people_data = [
  
            
    {
        "id": 1,
       
        "name": "Ram Sharma",
        "age": 25,
        "gender": "Male",
        "status": "Accept",
        "description": "Sita Shrestha went missing from her home on January 10, 2023. On the day of April 15, 2023, Gopal Rai mysteriously disappeared from his residence, leaving behind a sense of concern and worry among family and friends. His absence has sparked great distress within the community. The outfit he was last observed wearing comprised a distinctive blue jacket coupled with selfie jeans, providing potential identifiers for those aiding in the search. In moments as distressing as this, swift action is imperative. Immediate contact with local law enforcement and the dissemination of all pertinent information surrounding Gopal Rai's disappearance are crucial steps toward instigating an earnest investigation. The cooperation of the community in sharing any relevant details or sightings could significantly contribute to the collective efforts aimed at swiftly locating and ensuring the safe return of Gopal Rai to his loved ones.",
        "informerName": "Ram Prasad Shrestha",
        "informerRelation": "Acquaintance",
        "informerContactno": "987-654-3210",
         "image": "http://127.0.0.1:8000/static/Images/nepaliwoman.png",
        "citizenship": "http://127.0.0.1:8000/static/Images/nepaliwoman.png",
    },
    {
        "id": 2,
        "image": "http://127.0.0.1:8000/static/Images/nepalilady.jpg",
        "name": "Sita Shrestha",
        "age": 30,
        "gender": "Female",
        "status": "Accept",
        "description": "Hari Thapa went missing from his home on February 20, 2023. On the day of April 15, 2023, Gopal Rai mysteriously disappeared from his residence, leaving behind a sense of concern and worry among family and friends. His absence has sparked great distress within the community. The outfit he was last observed wearing comprised a distinctive blue jacket coupled with selfie jeans, providing potential identifiers for those aiding in the search. In moments as distressing as this, swift action is imperative. Immediate contact with local law enforcement and the dissemination of all pertinent information surrounding Gopal Rai's disappearance are crucial steps toward instigating an earnest investigation. The cooperation of the community in sharing any relevant details or sightings could significantly contribute to the collective efforts aimed at swiftly locating and ensuring the safe return of Gopal Rai to his loved ones.",
        "informerName": "Gita Thapa",
        "informerRelation": "Wife",
        "informerContactno": "987-654-3210",
        "citizenship": "http://127.0.0.1:8000/static/Images/citizenship.png",
    },
    {
        "id": 3,
        "image": "http://127.0.0.1:8000/static/Images/nepaliman.jpg",
        "name": "Sita Kumari",
        "age": 95,
        "gender": "Female",
        "status": "Accept",
        "description": "On the day of April 15, 2023, Gopal Rai mysteriously disappeared from his residence, leaving behind a sense of concern and worry among family and friends. His absence has sparked great distress within the community. The outfit he was last observed wearing comprised a distinctive blue jacket coupled with selfie jeans, providing potential identifiers for those aiding in the search. In moments as distressing as this, swift action is imperative. Immediate contact with local law enforcement and the dissemination of all pertinent information surrounding Gopal Rai's disappearance are crucial steps toward instigating an earnest investigation. The cooperation of the community in sharing any relevant details or sightings could significantly contribute to the collective efforts aimed at swiftly locating and ensuring the safe return of Gopal Rai to his loved ones.",
        "informerName": "Hema Rai",
        "informerRelation": "Sister-in-law",
        "informerContactno": "987-654-3210",
        "citizenship": "http://127.0.0.1:8000/static/Images/citizenship.png",
    },
    {
        "id": 4,
        "image": "http://127.0.0.1:8000/static/Images/nepaligirl.jpg",
        "name": "Radha Thapa",
        "age": 28,
        "gender": "Female",
        "status": "Accept",
        "description": "On the day of April 15, 2023, Gopal Rai mysteriously disappeared from his residence, leaving behind a sense of concern and worry among family and friends. His absence has sparked great distress within the community. The outfit he was last observed wearing comprised a distinctive blue jacket coupled with selfie jeans, providing potential identifiers for those aiding in the search. In moments as distressing as this, swift action is imperative. Immediate contact with local law enforcement and the dissemination of all pertinent information surrounding Gopal Rai's disappearance are crucial steps toward instigating an earnest investigation. The cooperation of the community in sharing any relevant details or sightings could significantly contribute to the collective efforts aimed at swiftly locating and ensuring the safe return of Gopal Rai to his loved ones.",
        "informerName": "Shyam Singh",
        "informerRelation": "Brother",
        "informerContactno": "987-654-3210",
        "citizenship": "http://127.0.0.1:8000/static/Images/citizenship.png",
    }


        
]  


@app.post("/accept-person/")
async def accept_person(id:dict[str, int]):
  print(id)


# @app.post("/simulate-post/")
# async def simulate_post():
#     people_data = model_config["json_schema_extra"]["People"]
#     people_list = [People(**person) for person in people_data]
#     return await create_people(people_list)



@app.get("/simulate-post/")
async def simulate_post():
   
    return  people_data
