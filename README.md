ReadMe

How to config ,install and run:

config:
Config your mongo db connection 
Go mongodb altes press connect -- connect your application
paste that string to db.js mongodb: “...” ( Remember to change password )

install:
-cd main folder
-npm i ( install server )
-cd client
-npm i ( install client )
-cd .. ( back to main folder )

Run:
-npm run dev ( we write script in package.json to concurrently run client and sever together ) 
- react open on localhost:3000, mongo connected on :5000
