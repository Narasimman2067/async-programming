function welcomeGuest(name, callback){
    console.log(`hi ${name} welcome to our company`)
    callback(name)

}
function OrdersFromGuest(name, callback){
    console.log("my order are...")
    callback(name)
}
function dispatch(name,callback){
    console.log(`your orders are dispatched ${name}`)
    callback(name)
}
function greeting(){
    console.log("thank you...")
}
function registerinHotel(nem, fn){
    console.log(`hi ${nem} your registeration is succesfully submitted`)
    setTimeout(()=>{
        fn(nem)
        },1000)
       
    
    // setTimeout(welcomeGuest(),5000)
    // OrdersFromGuest();
    }
    function welcome(){
            console.log ('welcome to the future...')
    }

    registerinHotel("narasimman", (name)=>{
        welcomeGuest(name,(name) =>{
            OrdersFromGuest(name,(name)=>{
                dispatch(name,()=>{
                    greeting();
                    welcome();
                })
            })
        })
    });


    function register(name) {
        console.log(name)
    }
 function pickuparoduct(product,fn){
    console.log(`your product is ${product}`)
 }

 function noOfProduct(no, fn){
    console.log (` the number is product  ${no}`)
    fn()
 }
































// registerinHotel("narasimman", setTimeout((name)=>{
// welcomeGuest(name, (name)=>{
//     OrdersFromGuest(name, (name)=>{
//         dispatch(name, (name)=>{
//             greeting()
//         })
//     })
// })
// },5000));














