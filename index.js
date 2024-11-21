const submit = document.querySelector('#submit')


submit.addEventListener('click', () =>{
    let fname=document.querySelector('#fname')
    let lname=document.querySelector('#lname')
    let email=document.querySelector('#email')
    let gender=document.querySelector('#gender')

    let formData = {fname,lname,email,gender}

    fetch('https://bscs3b-crud-api-yvd4.onrender.com/api/members',{
        method:'POST',
        body: JSON.stringify(formData),
        headers:{
            'Content-Type':'application/json',
        }
    })
})






//id selector
const content=document.querySelector("#content")

//loading page
window.addEventListener("load", () =>{
    getUsers()
})

function getUsers(){
    let html=""
    fetch("https://bscs3b-crud-api-yvd4.onrender.com/api/members" , {mode: "cors"}) //online
   // fetch("https://bscs3a-3.onrender.com" , {mode: "cors"}) 
    .then((response) =>{
        console.log(response)
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        data.forEach((element) =>{
            html += `<li>${element.first_name} ${element.last_name}</li>`
        })

        content.innerHTML = html
    })
    .catch((error) =>{
        console.log(error)
    })

}