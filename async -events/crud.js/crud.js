// // console.log('crud is started');

// // // CRUD
// // // C--CREATE
// // // R---READ
// // // U---UPDATE
// // // D---DELETE


// // // //  TWITTER

// // //     createCountryaccountcreation
// // //     ad yourr tweets

// // //     // Read 

// // //     _seeing other tweets

// // //     // update

// // //     edit your edit
// // //     edit your user name or account details

// // //     delete

// // //     -removing your account
// // //     tweet remove



// // let API="https://63ae58f1ceaabafcf177e2a6.mockapi.io/student"


// // // console.log(API);



// // // read -(GET)

// // function ReadAllData(){
// //     fetch(API, {method:"GET"})
// //     .then((response)=> console.log (response))
// //     .then((data)=>console.log(data))
// //     .catch((error)=>console.log(error));
// // }

// // function createData(){
// //     let studentData={
        
// //             "name": "narasimman",
// //             "class": "b42wdtamil",
// //             "state": "TamilNadu",
// //             "country": "India",
// //             "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgfXwf5edou0%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DgfXwf5edou0&tbnid=DHICBCLiEiY_sM&vet=12ahUKEwiXvKCluKD8AhWhi9gFHWz9DVgQMygJegUIARD3AQ..i&docid=XhcPlODsJ6WXyM&w=1280&h=720&q=vijay&hl=en&ved=2ahUKEwiXvKCluKD8AhWhi9gFHWz9DVgQMygJegUIARD3AQ",
// //             "id": "1"

// //     }
// //     fetch(API,{
// //         method:"POST",
// //         body: JSON.stringify(studentData),
// //         headers:{
// //             "content-type":"application/json;charset=UTF-8",
// //         },

// //     })
  

// // function updateData(){

// //     let updatedStudent={

    
// //     name:"Narasimma raja",
// // }




// // fetch(API +"/1",{
// //     method:"PUT",
// //     body: JSON.stringify(updatedStudent),
// //     headers:{
// //         "content-type":"application/json;charset=UTF-8",
// //     },
// // })
// // .then((response)=>response.json())
// // .then((data)=>console.log(data))

// // .catch((error)=>console.log(error));
// // }
// // deleteData();

// // createData();

// // updateData();

// // ReadAllData();



// // // delete a data  -(delete)

// // function deleteData(){
// //     fetch(API,+"/3",{
// //         method:"DELETE",
// //         body: JSON.stringify(studentData),
// //         headers:{
// //             "content-type":"application/json;charset=UTF-8",
// //         },

// //     })
 
// // }
// // }

// console.log("crud application is started")

// let API = "https://63ae58eeceaabafcf177e256.mockapi.io/users"; 
// console.log(API);


// // Read - (GET)

// function ReadAllData(){
//     fetch(API, {
//         method:"GET"
//     })
//     .then((response)=> {
//         response.json()
//         // console.log(response);
//     })
//     .then((data)=>console.log(data))
//     .catch((err)=> console.log(err));
// }

// // Create our data - (POST)

// function createData(){
//     let studentData = {
//        name : "santhosh",
//        class : "B42WD",
//        country:"India",
//        image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW7NrSf4zz2rQ6Lv5YKP2ew5zexWQ-OQJsynNUMDEDxR62Wkvh76-luldt-P9k0R5oVGQ&usqp=CAU"
//     }
   
//     fetch(API, {
//        method :"POST",
//        body : JSON.stringify(studentData),
//        headers:{
//         "Content-type" : "application/json; charset=UTF-8",
//        },
//     })
//     .then((response)=>{
//         response.json()
//         // console.log(response);
//     })
//     .then((data)=> console.log(data))
//     .catch((err)=>console.log(err));

// }

// //Update our Data - (PUT)

//  function updateData(){

//     let updatedStudent = {
//         name : "santhosh yadav",
//         class :"B43WD",
//     }

//     fetch(API + "/1", {
//         method:"PUT", 
//         body:JSON.stringify(updatedStudent),
//         headers:{
//             "Content-type" : "application/json; charset=UTF-8",
//            },
//     })
//     .then((response)=>{
//         response.json()
//         // console.log(response);
//     })
//     .then((data)=>console.log(data))
//     .catch((err)=>console.log(err))
// }

// // delete a data - (Delete)

// function deleteData(){

//     fetch(API + "/3", {
//         method:"DELETE", 
//         headers:{
//             "Content-type" : "application/json; charset=UTF-8",
//         },
//     })
//     .then((response)=>{
//         response.json();
//         // console.log(response)
//     })
//     .then((data)=>console.log(data))
//     .catch((err)=>console.log(err));
// }

// //delete a data with delete function
// deleteData();


// // Creating a data with creataData functio
// createData();

// //update a data with updateData function
// updateData();


// // calling read function
// ReadAllData();

// ////////////////////////Asyn-await(CRUD)///////////////////////

// async function ReadAllAsync(){
//     try {
//         const response = await fetch(API, {
//             method:"GET"
//         })
//         const data = await response.json(); 
//         console.log(data)
//     } catch (error) {
//         console.log(error)   
//     }
// }

// async function createAsyncData(){
//     try {

//         let studentData = {
//             name : "santhosh",
//             class : "B42WD",
//             country:"India",
//             image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW7NrSf4zz2rQ6Lv5YKP2ew5zexWQ-OQJsynNUMDEDxR62Wkvh76-luldt-P9k0R5oVGQ&usqp=CAU"
//          }
//          const response = await fetch(API, {
//             method :"POST",
//             body : JSON.stringify(studentData),
//             headers:{
//              "Content-type" : "application/json; charset=UTF-8",
//             },
//          })
//          const data = await response.json();
//          console.log(data)
        
//     } catch (error) {
//         console.log(error)  
//     }
// }

// async function updateAsync(){
//     try {
//         const response = await fetch(API + "/1", {
//             method:"PUT", 
//             body:JSON.stringify(updatedStudent),
//             headers:{
//                 "Content-type" : "application/json; charset=UTF-8",
//                },
//         })
//         const data = await response.json();
//         console.log(data)
        
//     } catch (error) {
//         console.log(error)    
//     }
// }

// async function deleteAsync(){
//     try {
//         const response = await fetch(API + "/3", {
//             method:"DELETE", 
//             headers:{
//                 "Content-type" : "application/json; charset=UTF-8",
//             },
//         })
//         const data = await response.json();
//         console.log(data)
//     } catch (error) {
//         console.log(error)    
//     }
// }
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


document.addEventListener("DOMContentLoaded", ()=>{
    const addBtn = document.querySelector("#new-stud-btn"); 
    const studentForm = document.querySelector(".add-student-form"); 
    const studentList = document.querySelector("#student-list"); 
    let addStudent = false;
    const API_URL = "http://localhost:3000/students"; 

// This will render a individual student card
function renderStudents(stud) {
        const studDiv = document.createElement("div"); 
        studDiv.className = "card";
        studDiv.innerHTML += `
      <img src= "${stud.image}" alt="${stud.name}" class="stud-avatar" />
       <h2>${stud.name}</h2>
       <p><span>class : </span>${stud.class}</p>
       <p><span>country : </span>${stud.country}</p>
       <p>${stud.like}</p>
       <button data-id =${stud.id} class="like-btn">Likes</button>
       <button data-id ='${stud.id}' class="delete-btn">Delete</button>
      `
    studentList.appendChild(studDiv);
}

// the below function will loop through all the student details
// and render the student card function
function renderAllStudents (students) {
    studentList.innerHTML ="";
    students.forEach(student => {
        renderStudents(student); 
    });   
}
// fetching the api for student details 
fetch(API_URL, {
    method:"GET"
})
.then((response)=>response.json())
.then((data)=>renderAllStudents(data))



addBtn.addEventListener("click", ()=>{
    // change the variable to true and false 
    //false -> true
    addStudent = !addStudent

   if(addStudent) {
    studentForm.style.display = "block"
    addBtn.textContent = "Add and close"
   } else {
    studentForm.style.display = "none"
    addBtn.textContent = "Add Student"
   }
})
// adding a data
studentForm.addEventListener("click", (event)=>{
    let studentName = document.getElementsByClassName("input-text")[0].value
    let studentImage = document.getElementsByClassName("input-text")[1].value
    let studentClass = document.getElementsByClassName("input-text")[2].value
    let studentCountry = document.getElementsByClassName("input-text")[3].value
   
   let data = {
      name: studentName,
      image: studentImage,
      class : studentClass,
      country : studentCountry
    }
    event.preventDefault();
    if(event.target.name === "submit"){
        // api call post 
        fetch(API_URL, {
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response)=>response.json())
        .then((student)=>renderStudents(student))
        .catch((err)=>console.log(err))
    }
}); 


// target the student list 
// you have delete it

studentList.addEventListener("click", (event)=>{
    event.preventDefault();
  if(event.target.className ==="like-btn") {
    let id = event.target.dataset.id
    let likes = parseInt(event.target.previousElementSibling.innerHTML)
    likes++;
    event.target.previousElementSibling.innerText = `${likes}`
    let data = {
        like:likes
    }

    fetch(`${API_URL}/${id}`, {
        method :"PATCH",
        body:JSON.stringify(data),
        headers :{
            "Content-Type":"application/json"
        }
    })

  }
  else if (event.target.className === "delete-btn"){

     let id = event.target.dataset.id
     let parent = event.target.parentNode
     // delete functionality in fetch
     fetch(`${API_URL}/${id}`, {
        method:"DELETE", 
        headers:{
            "Content-Type":"application/json"
        },
     })
     .then(()=>parent.remove())
     .catch((err)=>console.log(err))
  } 
  console.log("finished")
})


})

















