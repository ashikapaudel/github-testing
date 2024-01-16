//then

// let myPromise = new Promise((ok,error)=>{
    

//    setTimeout(()=>{ok("I am resolvedddd")},5000)
//    ok("I hereeee to ")


// })


// myPromise.then(function (data){
//     console.log(data);

// })

// 

// async function getData(){
//     let data = await myPromise;// when we use await we make the function async
//     console.log(result);
//     console.log("Hi How are you")
// }
// getData();



//when using then if function should be called by .then and 
//variable should be called by variable .then

// let myPromise= new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve("Iam practicing javascript:")},
//     3000)
//     resolve("Iam done.")

// })
//1.>  myPromise.then(function(result){
//     console.log(result);
//  })

// 2.> async function getdata(){
//       letdata = await myPromise;
//     // console.log(getdata);
//     console.log("Hi How are you:")
// }
// getdata();


  Promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{

        resolve("Iam happy")
    },2000)
    console.log("How are you:")
})

   //Using then


    // Promise.then(function(result){
    //    console.log("Hey whats up?");

    // }) 


    //using await
    function happy(){
    console.log("Iam very happy:");
    }
    async function getdata(){
        try{
        constdata = await Promise;
        console.log("Excuse Me!");
        happy();
    }catch(error){
        console.log("Wanna Know me", error)
     }finally{
     console.log("Iam debug, catch me:");
    }
    console.log("Coding is all about searching");
   }
    getdata();
