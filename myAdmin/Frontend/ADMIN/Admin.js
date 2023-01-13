
const btnLogin = document.querySelector(".btn");

const email = document.getElementById("email");
const password = document.getElementById("Password");

btnLogin.addEventListener( "click", (e) => { 
    e.preventDefault();
    
    axios({
        method: 'post',
        url: 'http://localhost:1337/api/auth/local',
        data: {
            // "username": "saif khan yousfzai",
            "identifier" : email.value,
            "password" :password.value
        },
        headers: {
            "Authorization": "Bearer 22ca23ffd2e99420a6ec964e773c4011b17eb212eb3f3913a94eb3ce840662c3bd33523a4f9a2f34c1700234091460bc68216cc77b997b7b8dc8048886c932e8b470dcd41d4fd28dd91d802032ed0d65df59b19c498e8444b9cea3f22cd6236af70c98129b81ec33f86721df8c8ac928c0c501221938425285cccbee353cf0ff",
            "Content-Type": "application/json"
        }
      })
  .then(response => {
 
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });



});