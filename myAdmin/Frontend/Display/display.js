console.log("job table is connected");
const fetbtn = document.getElementById("fetch");

fetbtn.addEventListener("click",(e)=>{

e.preventDefault();

axios({
    method: 'get',
    url: 'http://localhost:1337/api/jobs',
//     data: { "data" :{
//       "title" : " math",
//       "company":" pso",
//       "location":"bahadurabad"
//   }},
    headers: {
         "Authorization":"Bearer 12f0d8a8796059806fc306c639de9dec3c7706146ed70d6ddce974e9603a22d4fe4102f23a46fddd9905a523074bf5ff2547e676942a3ffeb0bffc57aac999827e1b33b51b0af5565d199fd6ee5f9e2c22f0fcef9b2ffab7149ff3ee721d4bc4e506248b56de9cfd195c3c375c7f1afbd564960b5b6ed888870d1b275ef49f5d",
        // "Content-Type": "application/json"
    }
  })
.then(response => {
console.log( response.data);

})
.catch(error => {
// Handle error.
console.log('An error occurred:', error.response);
});


})
