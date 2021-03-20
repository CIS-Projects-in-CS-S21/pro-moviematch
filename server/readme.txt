Commands to know:

npm run start
npm install mongoose
npm install express
npm install mongoDB

Recourses (optional)
Postman 
    For doing CRUD operations to server and seeing results
MonboDB Compass
    Easy GUI to see database

To run server:
    1) Create .env file within server folder.
    2) In .env create PORT and CONNECT.
    3) Set port to what port you wish for.
    4) Connect is provided by database by going to mongoDB Atlas entering moviematch project
        click on 'Connect' when prompted click to appliation then copy. In .env past to and assign
        to 'CONNECT'. Please conntact member of moviematch if unable to connect.
    5) In command prompt cd to server folder
    6) Run 'npm run start'
    7) If succesfull should return 'Server is running on port ....' port being the one you set it to.


To test:
    Using Postman create new tab and select POST. In field enter http://localhost:<port>/api/<route>
    Click 'Body' then 'raw' change to JSON. Enter information manually and hit send
