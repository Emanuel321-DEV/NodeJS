# NodeJS API using Express and MongoDB
 
API created in Node.js, it performs CRUD operations on People, saving the data in a MongoDB database.  

## Requirements
 - Node
 - yarn or npm
 - git
 - mongodb

 ## Get Started
```bash
  ## Clone the repository
  $ git clone <URL>

  ## Install all dependencies
  $ yarn ## or 'npm i'

  ## In the .env file, enter your mongodb connection string
  $ MONGO_URI=<yourmongouri>

  ## Run the project
  yarn start 

  ## Use an API client to test the endpoints, the base url is ## http://localhost:3000/person 
```

## POST

- Request Body
    - name: string;
    - salary: number;
    - approved: boolean

## GET

- Request Params
    - id: string;

## PATCH    
- Request Params
    - id: string;
  <br>
- Request Body
    - name: string;
    - salary: number;
    - approved: boolean

## DELETE

- Request Params
    - id: string;