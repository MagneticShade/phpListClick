"use strict"
async function start(){
    let departments=await fetch("php/requests/getDepartments.php"
    ).then(result=>{
       return result.json()
    }).then(result=>{
        return result
    })
    for(let department of departments){
        let li=document.createElement("li");
        li.textContent=department.name;
        document.getElementById("department").appendChild(li);
        li.addEventListener("click",function(){
            getOffice(department.id)
        })
    }
}

async function getOffice(id){
    let offices = await fetch("php/requests/getOffice.php?"+ new URLSearchParams({
        "id":id
    }
    )).then(result=>{
        return result.json()
     }).then(result=>{
         return result
     })
     let office_doc=document.getElementById("office")
     office_doc.replaceChildren(" ")
     for(let office of offices){
        let li=document.createElement("li");
        li.textContent=office.name;
        office_doc.appendChild(li);
        li.addEventListener("click",function(){
            getWorker(office.id)
        })
    }
}

async function getWorker(id){
    let workers = await fetch("php/requests/getWorker.php?"+ new URLSearchParams({
        "id":id
    }
    )).then(result=>{
        return result.json()
     }).then(result=>{
         return result
     })
     let worker_doc=document.getElementById("worker")
     worker_doc.replaceChildren(" ")

     for(let worker of workers){
        let li=document.createElement("li");
        li.textContent=worker.name;
        worker_doc.appendChild(li);
        
    }
}

start()