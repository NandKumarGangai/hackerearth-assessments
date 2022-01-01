# phablecare-assesment  
GITHUB: https://github.com/NandKumarGangai/phablecare-assesment

Local setup:
Clone this repository.  
Install packages in both client and server directory.  
In server folder you need to pass some environment variables for database url, port number, JWT secret, SALT value for bcrypt and DB name.  
Create a `.env` file and mention above values.
```
PORT=<>
SALT=<>
JWT_SECRET=<>
MONGO_DB_URI=<>
DB_NAME=<>
```
In client folder in `package.json` I added proxy value for backend server url.
If you want to override it and environment variable as below in `.env` file and access it using `process.env.REACT_APP_SERVER_HOST`.
```
REACT_APP_SERVER_HOST=<server url here>
```
