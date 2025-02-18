// Create web server
// 1. Load express
// 2. Create an express server
// 3. Load comments.json
// 4. Create a route for /comments
// 5. Read comments.json and send it as a response
// 6. Start the server
// 7. Test the server using Postman

var express = require('express');
var app = express();
var fs = require('fs');

app.get('/comments', function(req, res) {
  fs.readFile('comments.json', 'utf8', function(err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});

// Test the server using Postman
// 1. Open Postman
// 2. Enter the URL http://localhost:3000/comments
// 3. Select GET method
// 4. Click on Send
// 5. You should see the comments.json data in the response