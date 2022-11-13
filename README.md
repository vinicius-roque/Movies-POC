# Movie - POC

A simple movie organizer. Save the movies you've watched or want to watch.

## About

This is a backend project with which many people can manage their favorite movies. Below are the implemented features:

- Save a movie
- It can be watched or not watched
- Save which stream the movie belongs to 
- See, update and delete your movies

By using this app any user can see which movies they've been watching and track/save your favorites.

## Technologies
The following tools and frameworks were used in the construction of the project:<br>
<p>
  <img style='margin: 5px; height: 30px' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'>
  <img style='margin: 5px; height: 30px' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'>
  <img style='margin: 5px; height: 30px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"/>
  <img style='margin: 5px; height: 30px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"/>
</p>

## How to run

1. Clone this repository
2. Install all dependencies 
```bash
npm i
```
3. Create a .env file and fill information based in the .env.example file (you can use localhost for the POSTGRES_HOST)
4. Create a database in Postgres connection
5. Populate the database by running the commands within dump.sql file

In order to run it locally, run:

```bash
npm run dev
```
### Request

`POST /movies/`

  Body: 
        {
            "name": "It, a coisa",
            "streaming": "Netflix",
            "genre": "Horror",
            "status": "Not watched"
        }

### Response

    HTTP/1.1 201 CREATED
    Status: 201 CREATED

## Get all saved movies

### Request

`GET /movies`

### Response

    HTTP/1.1 200 OK
    Status: 200 OK

    data: [
              {
                "id": 1,
                "name": "It, a coisa",
                "streaming": "Netflix",
                "genre": "Horror",
                "status": "Not watched"
              },
              {
                "id": 2,
                "name": "Supeman",
                "streaming": "HBO Max",
                "genre": "Action",
                "status": "Watched"
              }
          ]

## Delete a movie with the corresponding id 

### Request

`DELETE /movies/:id`

### Response

    HTTP/1.1 202 Accepted
    Status: 202 Accepted

    data: "Accepted"

## Refresh all data of a saved movie

### Request

`PUT /movies/:id`

    Body: 
        {
            "name": "It, a coisa 2",
            "streaming": "Netflix",
            "genre": "Horror",
            "status": "Watched"
        }
        
### Response

    HTTP/1.1 202 ACCEPTED
    Status: 202 ACCEPTED
