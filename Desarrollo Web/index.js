{let users = [];
let idRegistred= [];

let boton = document.getElementById("btn");
let inputName = document.getElementById("name");
let inputLastName = document.getElementById("lastName");
let inputDate = document.getElementById("fecha");
let inputEmail = document.getElementById("email");
let inputID = document.getElementById("ID");
let tabla =document.getElementById("tabla");

let name = inputName.value;
let lastName = inputLastName.value;
let date = inputDate.value;
let email = inputEmail.value;
let id = inputID.value;

const paintTable=()=>{
    tabla.innerHTML = ''
    users.forEach(user => {
        tabla.innerHTML +=
        `<tr>
            <td>${user.id}</td>
            <td>${user.nombre}</td>
            <td>${user.apellido}</td>
            <td>${user.email}</td>
            <td>${user.birthday}</td>
        </tr>`
    });
}




boton.onclick = ()=> {

    if(inputName.value.length == 0 || inputLastName.value.length == 0 || inputDate.value.length == 0 ||   inputID.value.length == 0 || inputEmail.value.length == 0 ){
        alert('TODOS LOS CAMPOS DEBEN ESTAR LLENOS')
    }else if(idRegistred.includes(inputID.value)){
            alert(`identificacion ${inputID.value} ya esta registrada` )

    }else{
        let user = {
            "nombre": inputName.value,
            "apellido": inputLastName.value,
            "birthday": inputDate.value,
            "email":inputEmail.value,
            "id":inputID.value
        };
       idRegistred.push(user.id) 
       users.push(user)
       paintTable()
       alert(`Usuario ${user.nombre} creado exitosamente!`)
       console.log(users);
        
        
    }

    
};}