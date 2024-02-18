# WM-NoSQL-Social-Network-API

## Credits

https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax

## AskBCS Assistance
Charles helped me to realize I needed a leading / in my router.use() lines in my routes/api/index.js. Thank you, Charles!

Quinton pointed out a relic of my mini-project code that was causing errors in my thought creation route. I had not been exporting the Thought model and instead was still accidentally exporting the Course model.

## Xpert Learning Assistance

Xpert helped me to realize my getThoughts() method in thoughtController.js needed to be populating with 'username' rather than 'users'