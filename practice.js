// console.log(name);
    // var name = 'Asika';
    // variable change nahune case ma use const 
    //reasign  garne case ma use let

    // let name;
    // console.log(name);
    // name = "Ashika";
    // console.log(name = "Ashika");
    
    // var name;//Initialize
    // console.log(name);
    // name = "Ashika";
    // console.log(name = "Ashika");
    
   //temporor dead zone = read and console bata aaune error (gap )

   // closure
   //function call huda console name garna khojxa tya nabhete si outer function ma herxa tya poni bhetena bhane global ma gayara khojxa
   // main function le child ko function call garna paudaina


   //    function Name (){
//     let name = "Ashika"
//      function getname(){
//        console.log(name)
     
// }
// getname();
//    }
//    Name();
   
//  function fetchData(){
// fetch ('https://pcampus.edu.np/').then(function(){ //then bhitra function close garna paidaina 
//     console.log(Response)
// })
//  }
//  fetchData();

 
fetch('https://dummyjson.com/products/1')// yehi website ma gayara get all users garerw each lai assign garne is the task for today
.then(res => res.json())
.then((json) =>{ 
 let images = json.images;
 console.log(images[2]);

})
            