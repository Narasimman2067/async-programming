    //eror removing 

    let projectCompletion=60;
// console.log("progress started")
let promise= new Promise(
    (accept,reject)=>{
        setTimeout(()=>{
        if(projectCompletion >=75)
        {
            accept("you are complete the project")
        }
        else{
            reject('sorry ,you have to complete the project')
        }
        
    },1000)
    console.log("progress started")
}
)
var newPromise= new Promise((accept, reject) => {
    setTimeout(()=>{
        accept(25);
    },3000)
    
})

    
    promise
    .then((resultValue)=>{
    console.log(resultValue);
    }).catch((error)=>{
        console.log(error);
    })

    newPromise
    .then
    







