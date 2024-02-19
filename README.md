# WM-NoSQL-Social-Network-API


## Table of Contents
* [Description](#description)
* [Installation](#installation-instructions)
* [Usage](#usage-instructions)
* [Video Walkthrough](#video)
* [Contributing](#contribution-guidelines)
* [Questions](#questions)
* [Credits](#credits)


## Description <a name="description"></a> 
I have built an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. I used Express.js for routing, a MongoDB database, adn the Mongoose ODM.

## Installation <a name="installation-instructions"></a>
git clone this repository and then:

```md
npm i
```

## Usage <a name="usage-instructions"></a>
npm run start and then do all your testing with Insomnia or a similar application.

```md 
npm run start
```

## Video Walkthrough <a name = "video"></a>

The walkthrough video can be found here: [https://drive.google.com/file/d/13AdkQ8SUlaMRPfwAA5ykOTLaXdumQa_h/view?usp=sharing](https://drive.google.com/file/d/13AdkQ8SUlaMRPfwAA5ykOTLaXdumQa_h/view?usp=sharing).  

## Contributing <a name="contribution-guidelines"></a>
Please reach out at the contact below for any suggestions. Thanks!

## Questions <a name="questions">
Please feel free to reach out to me with questions or suggestions for this app.<br>
My GitHub user name is wmason1997 and here is my profile: [https://github.com/wmason1997](https://github.com/wmason1997).<br>
My email is williamcmason1997@gmail.com

## Credits

I referenced the following page for email address validation: [https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax](https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax).

I had a tutoring session with Jacob Carver on 02/17/2024 and they helped me to see the similarities between the mini project (student ~ user, courses ~ thoughts, etc.) and this assignment.

AskBCS Assistance
Charles helped me to realize I needed a leading / in my router.use() lines in my routes/api/index.js. Thank you, Charles!

Quinton pointed out a relic of my mini-project code that was causing errors in my thought creation route. I had not been exporting the Thought model and instead was still accidentally exporting the Course model. Thank you, Quinton!

Xpert Learning Assistant
Xpert helped me to realize my getThoughts() method in thoughtController.js needed to be populating with 'username' rather than 'users' and with various other debugging issues.