const request = require('request');
const fs = require('fs')

const myArgs = process.argv.slice(2); // Holds url and path
const url = myArgs[0];
const path = myArgs[1];


    request(url, (error, response, body) => {
      fetcher(url, path, body);
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
});
// }), );  //Content to write to file

const fetcher = function(url, path, body){
  fs.writeFile(path, body, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log("Downloaded and saved", body.length, "bytes to ./writeToMe.html.")
    //file written successfully
  })
}






// request('https://www.google.com/fdsafsafsa.html.', (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });