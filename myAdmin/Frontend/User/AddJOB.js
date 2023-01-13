console.log("hello there how are you")
const btnLogin = document.querySelector(".btn");
// const url = "http://localhost:1337/api/auth/local/register";
const title = document.getElementById("title");
const location = document.getElementById("location");
const company = document.getElementById("company");
// const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjczNTkxNTA0LCJleHAiOjE2NzYxODM1MDR9.1peuqw9k7J14a8AYkIqQRCRQ3PRDjCG8qUfQDUNnzOY";

btnLogin.addEventListener( "click", (e) => { 
    e.preventDefault();
    axios({
        method: 'post',
        url: 'http://localhost:1337/api/jobs',
        data: { "data" :{
          "title" : " math",
          "company":" pso",
          "location":"bahadurabad"
      }},
        headers: {
             "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjczNTkxNTA0LCJleHAiOjE2NzYxODM1MDR9.1peuqw9k7J14a8AYkIqQRCRQ3PRDjCG8qUfQDUNnzOY ",
            // "Content-Type": "application/json"
        }
      })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data);
    // console.log('User token', response.data.jwt);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });



});