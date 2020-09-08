simple todo list 

Setup

Clone this repo to your desktop and run npm install to install all the dependencies.
its required runnig api adress as environment variables (example inside .env file you can edit it or give yourself)
(api repo = https://github.com/hosmanoglu/Api)  

Usage 

After you clone this repo to your desktop, go to its root directory and run npm install to install its dependencies.

Then set api adress env file (or set environment variables )
you can run npm start to start the application. You will then be able to access it at http://localhost:8080

Test

After you clone this repo to your desktop, go to its root directory and run npm install to install its dependencies.
its required google chrome.
Then set api adress env file (or set environment variables )
you can run npm test to test the application.

for debuggin better delete /test/index.test.ts  line 21  otherwise chrome run without any window

Docker 

building image:  docker build -t todo .

docker file has line RUN npm test and test require api adress 
you can set .env file or comment RUN npm test line

run image:   

docker run  -p hostport:8080 -e api=(api adress) todo
