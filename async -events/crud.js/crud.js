// console.log('crud is started');

// // CRUD
// // C--CREATE
// // R---READ
// // U---UPDATE
// // D---DELETE


// // //  TWITTER

// //     createCountryaccountcreation
// //     ad yourr tweets

// //     // Read 

// //     _seeing other tweets

// //     // update

// //     edit your edit
// //     edit your user name or account details

// //     delete

// //     -removing your account
// //     tweet remove



// let API="https://63ae58f1ceaabafcf177e2a6.mockapi.io/student"


// // console.log(API);



// // read -(GET)

// function ReadAllData(){
//     fetch(API, {method:"GET"})
//     .then((response)=> console.log (response))
//     .then((data)=>console.log(data))
//     .catch((error)=>console.log(error));
// }

// function createData(){
//     let studentData={
        
//             "name": "narasimman",
//             "class": "b42wdtamil",
//             "state": "TamilNadu",
//             "country": "India",
//             "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgfXwf5edou0%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DgfXwf5edou0&tbnid=DHICBCLiEiY_sM&vet=12ahUKEwiXvKCluKD8AhWhi9gFHWz9DVgQMygJegUIARD3AQ..i&docid=XhcPlODsJ6WXyM&w=1280&h=720&q=vijay&hl=en&ved=2ahUKEwiXvKCluKD8AhWhi9gFHWz9DVgQMygJegUIARD3AQ",
//             "id": "1"

//     }
//     fetch(API,{
//         method:"POST",
//         body: JSON.stringify(studentData),
//         headers:{
//             "content-type":"application/json;charset=UTF-8",
//         },

//     })
  

// function updateData(){

//     let updatedStudent={

    
//     name:"Narasimma raja",
// }




// fetch(API +"/1",{
//     method:"PUT",
//     body: JSON.stringify(updatedStudent),
//     headers:{
//         "content-type":"application/json;charset=UTF-8",
//     },
// })
// .then((response)=>response.json())
// .then((data)=>console.log(data))

// .catch((error)=>console.log(error));
// }
// deleteData();

// createData();

// updateData();

// ReadAllData();



// // delete a data  -(delete)

// function deleteData(){
//     fetch(API,+"/3",{
//         method:"DELETE",
//         body: JSON.stringify(studentData),
//         headers:{
//             "content-type":"application/json;charset=UTF-8",
//         },

//     })
 
// }
// }

console.log("crud application is started")

let API = "https://63ae58eeceaabafcf177e256.mockapi.io/users"; 
console.log(API);


// Read - (GET)

function ReadAllData(){
    fetch(API, {
        method:"GET"
    })
    .then((response)=> {
        response.json()
        // console.log(response);
    })
    .then((data)=>console.log(data))
    .catch((err)=> console.log(err));
}

// Create our data - (POST)

function createData(){
    let studentData = {
       name : "santhosh",
       class : "B42WD",
       country:"India",
       image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW7NrSf4zz2rQ6Lv5YKP2ew5zexWQ-OQJsynNUMDEDxR62Wkvh76-luldt-P9k0R5oVGQ&usqp=CAU"
    }
   
    fetch(API, {
       method :"POST",
       body : JSON.stringify(studentData),
       headers:{
        "Content-type" : "application/json; charset=UTF-8",
       },
    })
    .then((response)=>{
        response.json()
        // console.log(response);
    })
    .then((data)=> console.log(data))
    .catch((err)=>console.log(err));

}

//Update our Data - (PUT)

 function updateData(){

    let updatedStudent = {
        name : "santhosh yadav",
        class :"B43WD",
    }

    fetch(API + "/1", {
        method:"PUT", 
        body:JSON.stringify(updatedStudent),
        headers:{
            "Content-type" : "application/json; charset=UTF-8",
           },
    })
    .then((response)=>{
        response.json()
        // console.log(response);
    })
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}

// delete a data - (Delete)

function deleteData(){

    fetch(API + "/3", {
        method:"DELETE", 
        headers:{
            "Content-type" : "application/json; charset=UTF-8",
        },
    })
    .then((response)=>{
        response.json();
        // console.log(response)
    })
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err));
}

//delete a data with delete function
deleteData();


// Creating a data with creataData functio
createData();

//update a data with updateData function
updateData();


// calling read function
ReadAllData();

////////////////////////Asyn-await(CRUD)///////////////////////

async function ReadAllAsync(){
    try {
        const response = await fetch(API, {
            method:"GET"
        })
        const data = await response.json(); 
        console.log(data)
    } catch (error) {
        console.log(error)   
    }
}

async function createAsyncData(){
    try {

        let studentData = {
            name : "santhosh",
            class : "B42WD",
            country:"India",
            image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW7NrSf4zz2rQ6Lv5YKP2ew5zexWQ-OQJsynNUMDEDxR62Wkvh76-luldt-P9k0R5oVGQ&usqp=CAU"
         }
         const response = await fetch(API, {
            method :"POST",
            body : JSON.stringify(studentData),
            headers:{
             "Content-type" : "application/json; charset=UTF-8",
            },
         })
         const data = await response.json();
         console.log(data)
        
    } catch (error) {
        console.log(error)  
    }
}

async function updateAsync(){
    try {
        const response = await fetch(API + "/1", {
            method:"PUT", 
            body:JSON.stringify(updatedStudent),
            headers:{
                "Content-type" : "application/json; charset=UTF-8",
               },
        })
        const data = await response.json();
        console.log(data)
        
    } catch (error) {
        console.log(error)    
    }
}

async function deleteAsync(){
    try {
        const response = await fetch(API + "/3", {
            method:"DELETE", 
            headers:{
                "Content-type" : "application/json; charset=UTF-8",
            },
        })
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)    
    }
}
// CRUD
// C --- create
// R --- read 
// U --- update 
// D --- delete 


// twitter - instagram - whatsapp - amazon - flipkart 
//   - Create 
//     - accountcreation
//     - ad your tweets 
//  - Read
//    - seeing other tweets 
//  -update 
//    - edit your edit 
//    - edit your user name or accout details
//  -delete
//    - removing your account 
//    - tweeet remove 

// async as put 
