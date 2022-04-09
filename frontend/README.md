# Link for the website

https://wmdd4936-gwatanabe00.herokuapp.com/

# Instructions for building and running the project;

step 1: cd backend/
step 2: npm install
step 3: cd frontend/
step 4: npm install
step 5: cd ../
step 6: npm install

In case you want to open the application on your local, do the followings.
npm run frontend
npm run backend

# Description of the App

This is a weather app where you can search for the location's weather you want.
Current weather and weekly weather is availble.
Once you login, you have the option to pick you favorite/ frequently seen location to
add to you favorite list.

# Features I'm proud of

1. Getting real-time weather from external API
2. Login function
3. Create account function
4. Add location to user's favorite list

# How to use

1. Create an account
2. Login
3. Search for the location you want
4. If you want to add that location to your favorites, press "add to list" button.
5. If you want to add more locations, repeat the 4) flow.
6. If you want to submit your favorite list, press the "Update favorite list" button.
7. Go to your profile, and you'll see all the locations you added to you favorite.
8. If you click on the loaction you saved, you'll be able to see the current weather of that location.

# API documentation

1. 'api/vi/profile/' GET
   This API gets all the users registered in this application
   Response format is JSON

2. 'api/vi/profile/' POST
   This API posts the body from the client side to create user accounts
   Response format is JSON

https://wmdd4936-gwatanabe00.herokuapp.com/api/v1/profile/

{
"userName": "Jon",
"email": "jon@email.com",
"password": "test123"
}

3. 'api/vi/profile/:id' GET
   This API get one user registered in this application by the id
   Response format is JSON

4. 'api/vi/profile/:id' PUT
   This API updates the user information. In this app, this is used to add locations to users favorite list.
   Response format is JSON

https://wmdd4936-gwatanabe00.herokuapp.com/api/v1/profile/62510c29bff2674fc8701760

{
"favorite": ["Tokyo", "Saitama", "Chiba", "Osaka"]
}

5. '/api/v1/login' POST
   This API is used to check whether the body that contains the user information matches the user information on the database.
   If it matches, the user can login to the app.
   Response format is JSON

https://wmdd4936-gwatanabe00.herokuapp.com/api/v1/login

{
"email": "gabe@mail.com",
"password": "gabriel"
}

# References

debounce
https://www.npmjs.com/package/debounce

moment
https://momentjs.com/

open weather API
https://openweathermap.org/api

react router dom
https://v5.reactrouter.com/web/guides/quick-start

https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b
