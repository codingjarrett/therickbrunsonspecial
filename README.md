# therickbrunsonspecial
This is the repository for the nineteenth bootcamp challenge (text editor).
The Rick Brunson Special

## Description
The Rick Brunson Special is a text editor that runs in the browser. This is a single-page application that meets the Progressive Web Applications (PWA) criteria. The app features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser, and it also functions offline. The application is built with an existing application and implements methods for getting and storing data to an IndexedDB database.

## User Story
As a developer, I want to create notes or code snippets with or without an internet connection, so that I can reliably retrieve them for later use.

Acceptance Criteria
* When I open my application in my editor, I should see a client server folder structure
* When I run npm run start from the root directory, my application should start up the backend and serve the client
* When I run the text editor application from my terminal, my JavaScript files have been bundled using webpack
* When I run my webpack plugins, I have a generated HTML file, service worker, and a manifest file
* When I use next-gen JavaScript in my application, the text editor still functions in the browser without errors
* When I open the text editor, IndexedDB has immediately created a database storage
* When I enter content and subsequently click off of the DOM window, the content in the text editor has been saved with IndexedDB
* When I reopen the text editor after closing it, the content in the text editor has been retrieved from our IndexedDB
* When I click on the Install button, I download my web application as an icon on my desktop
* When I load my web application, I have a registered service worker using workbox
* When I register a service worker, I have my static assets pre-cached upon loading along with subsequent pages and static assets
* When I deploy to Heroku, I have proper build scripts for a webpack application

## Mock-Up
[Insert mock-up images or video here]

## Installation
* Clone the repository to your local machine
* Run npm install to install the necessary packages
* Run npm run start to start the application
* Open your browser and navigate to http://localhost:3000

## Credits
This application was developed by Jarrett Jennings.

## License
This project is licensed under the MIT License.