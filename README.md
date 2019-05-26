# PhoneBook-App:

It's a single page react app ( smooth and responsive one ), that simulate multiple page app with react-router mode. It use mongoDB database and cloudinary for save contacts photo and data. Also, facebook account kit for login system with phone ( verification included ).

App contains next pages (which switch with react-router):

    Landing page : to login to the app
    A dashboard showing :
        contacts
        create contact    
        search
        Log out

## Contacts ( in Dashboard )

It's a starting page which show all user's contacts with short list of data (photo, name, first name, phone). In online connection data takes from mongoDB database storage and put into Redux global storage.

## Create a contact

Input form is able to create new user and store data into mongoDB storage and Redux storage. All fields pass validation and you need to fill ALL FIELDS. If user didn't set a photo, at contact form will show default image and with a view an alphabetical listing of contacts.
So, when you create contact, click add contact button then you will be redirected to contacts page.


## Search ( in Dashboard )

This page allows to search contacts by first letters of the name or last name. It dynamically shows contacts list


## Edit or delete some of contacts properties :

To edit the following contact properties: name, last name, description you only need to click on the contact's card a redux-from ( for form handling ) will appear to perform the desiring action.

## Pagination:

pagination i limit 15 contacts only in one page ( so if you create 20 contacts:  remaining 5 will be in page 2 )


## Used technologies:

Front-End: react/redux
Back-End: express.js (node.js)
Database: mongoDB database

other tools:

redux-form ( for form handling )
cloudinary ( for images server )
netlify ( react hosting )
heroku ( express server hosting )

PhoneBook app server is hosted in heroku : https://wafaphonebook.herokuapp.com/
react app is on netlify : https://wafaphonebook.netlify.com/


to run the app: server side : npm run server --> in server you need to create dev.js file in config folder to make environment variables ( to run the app locally ).
        client side : npm run start


Here you can checkout final version and test the app : https://wafaphonebook.netlify.com/


# Enjoy!
