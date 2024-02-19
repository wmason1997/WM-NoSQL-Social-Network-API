# WM-NoSQL-Social-Network-API


## Table of Contents
* [Description](#description)
* [Installation](#installation-instructions)
* [Usage](#usage-instructions)
* [Deployed Application](#deployed-application)
* [Screenshots](#screenshots)
* [Contributing](#contribution-guidelines)
* [Tests](#tests)
* [Questions](#questions)
* [Credits](#credits)


## Description <a name="description"></a> 
I have built an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. I used Express.js for routing, a MongoDB database, adn the Mongoose ODM.

## Installation <a name="installation-instructions"></a>
git clone this repository, run npm i

## Usage <a name="usage-instructions"></a>
npm run start and then do all your testing with Insomnia or a similar application.

## Deployed Application <a name = "deployed-application"></a>


## Screenshots <a name = "screenshots"></a>
  

## Contributing <a name="contribution-guidelines"></a>
Be respectful.

## Tests <a name="tests"></a> 
N/A

## Questions <a name="questions">
Please feel free to reach out to me with questions or suggestions for this app.<br>
My GitHub user name is wmason1997 and here is my profile: [https://github.com/wmason1997](https://github.com/wmason1997).<br>
My email is williamcmason1997@gmail.com

## Credits

https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax

I had a tutoring session with Jacob Carver on 02/17/2024 and they helped me to see the similarities between the mini project (student ~ user, courses ~ thoughts, etc.) and this assignment.

AskBCS Assistance
Charles helped me to realize I needed a leading / in my router.use() lines in my routes/api/index.js. Thank you, Charles!

Quinton pointed out a relic of my mini-project code that was causing errors in my thought creation route. I had not been exporting the Thought model and instead was still accidentally exporting the Course model.

Xpert Learning Assistance

Xpert helped me to realize my getThoughts() method in thoughtController.js needed to be populating with 'username' rather than 'users'