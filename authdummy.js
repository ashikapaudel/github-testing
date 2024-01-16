// fetch('https://dummyjson.com/auth/login', {
//   method: 'POST',  // used to send data to the server
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
    
//     username: 'Ashika',
//     password: 'Hellohi',
//     // expiresInMins: 60, // optional
//   })
// })
// .then(res => res.json())
// .then(console.log);
            
fetch('https://dummyjson.com/auth/me', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer /* YOUR_TOKEN_HERE */', 
  }, 
})
.then(res => res.json())
.then(console.log);
            