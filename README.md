# Piano With William

An application to learn/practice piano built with a React front end and a Rails back end. 

## Description

This application allows a user to create a username and password that is hashed and secure with the bcrypt gem. The user can navigatee through different features/paths with the help of React Router. The virtual paino feature uses the web audio framework tone.js to render piano sounds as the CSS keyboard is played with computer keyboard keystrokes. A user can also buy premium online follow along videos that I made to learn new songs. Private classes are also availble to sign up for. The user is able to see all their classes in the calendar section. As an admin, when I log in, I am able to do all CRUD operations to change the online classes.

I used a Rails back end because it follows convention over configuration making the coding process a lot cleaner. There is a lot that goes on under the hood in Active Record that allows authorization, authentication, and validation to not require a lot of code. It is also fairly straightforward to deploy applications with a Rails backend.  I used React as a front end becuase it creates quick single page applications that can be organized nicely into components. It also allows for a quick web application as it uses the virtual DOM when state is updated and re-rendering everything in the real DOM. 

Some challenges I faced were creating the virtual piano and thinking of a way to make a calendar. The virutal keyboard was difficult becuase I made custom keyboards for each scale. I didn't want to have one full sized keyboard and have the key strokes be all over the place and not simulating natural path playing a piano on a computer keyboard. Regarding the calendar, I am currently looking into methods that will allow me to visually show previous and past classes on a calendar. 

Demo the project here --> (Heroku apps go to sleep after not being used so it may take 30 seconds to load) --> https://piano-with-william.herokuapp.com/

Video walkthrough here --> https://www.youtube.com/watch?v=lEkoSBJE8Cw

