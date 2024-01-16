//settime out use to call back  
//await
//axios= link bhitra gayarw hit hanerw load garna time lagne bhayara , yesle user lai promise garxa ki
        //ahile time lagxa tw aafno kam gardai gar ma bhayapoxi 
        //async await le promise lai handle garxa,async await use nagare poxi promise garxa pending bhanerw  
         // await use garirako xa bhane nabirsi try catch block banaune.
        
        
        
        const axios = require('axios')//Make a request for a user
        function getEkantipurData(){
           let response = axios.get('https://ekantipur.com/')
           .then(function(response){
            console.log(response);
            console.log("Waiting for you....");
         })
          
         function delay(){
            console.log("Iam delayed");
            let promise = new promise((resolve,reject) =>{
            setTimeout(() =>{
                console.log("Iam delayed too");
                resolve("Iam resolved");
            },5.000);
         })
         return promise;
         }
           
           function fast(){
            console.log("Iam fast");
           }
           async function run(){
            try{
                let response = await delay();
               //  let response = await delay();
                console.log(response);
                fast();
           }catch(err){
            console.log("Iam error" , err)
           }
        //    delay();
        //    fast();
           console.log("Information of Ekantipurr news");
        }

        getEkantipurData();//call function



        function delay(ms) {
         return new Promise((resolve) => {
           setTimeout(resolve, ms);
         });
       }
      }
       



      //  async function exampleAsyncFunction() {
      //    console.log("Start of the first async function");
       
      //    try {
      //      // Set a delay of 2000 milliseconds (2 seconds)
      //      await delay(2000);
      //      console.log("After waiting for 2 seconds");
       
      //      // Simulate another asynchronous operation
      //      await anotherAsyncOperation();
      //    } catch (error) {
      //      console.error("Caught an error:", error.message);
      //    } finally {
      //      console.log("Finally block executed, regardless of success or failure.");
      //    }
       
      //    console.log("End of the first async function");
      //  }
       
      //  async function anotherAsyncOperation() {
      //    console.log("Start of another async operation");
       
      //    try {
      //      // Set a delay of 1500 milliseconds (1.5 seconds)
      //      await delay(1500);
      //      console.log("After waiting for 1.5 seconds");
      //    } catch (error) {
      //      console.error("Caught an error in anotherAsyncOperation:", error.message);
      //    } finally {
      //      console.log("Finally block in anotherAsyncOperation executed.");
      //    }
       
      //    console.log("End of another async operation");
      //  }
       
      //  // Call the first asynchronous function
      //  exampleAsyncFunction();