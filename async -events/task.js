let projectcompletion=90;
let promise=new Promise(
    (accept,reject)=>{
        if(projectcompletion<=80)
        {
            reject("you have to complete the project")
        }
        else{
            accept('you are complete the project')
        }
        
    }

    )
    console.log(promise)




