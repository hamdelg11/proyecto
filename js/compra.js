const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
const valor = urlParams.get('num');

myFunction(valor);

 var nombre, cantidad;  

 function myFunction(valor) {  
   switch (valor) {
     case "1":
       nombre = "cara de papa";
       cantidad = 250.00;
       document.getElementById("nombre").innerHTML = nombre;
       document.getElementById("cantidad").innerHTML = cantidad; 
       break;
     case "2":
       nombre = "corona virus";
       cantidad = 275.00;
       document.getElementById("nombre").innerHTML = nombre;
       document.getElementById("cantidad").innerHTML = cantidad; 
       break;
     case "3":
       nombre = "cubetazo";
       cantidad = 265.00;
       document.getElementById("nombre").innerHTML = nombre;
       document.getElementById("cantidad").innerHTML = cantidad; 
       break;
     case "4":
       nombre = "pavo real";
       cantidad = 280.00;
       document.getElementById("nombre").innerHTML = nombre;
       document.getElementById("cantidad").innerHTML = cantidad; 
       break;
     case "5":
       nombre = "alebrije";
       cantidad = 275.00;
       document.getElementById("nombre").innerHTML = nombre;
       document.getElementById("cantidad").innerHTML = cantidad; 
       break;
     case "6":
       nombre = "piñata navideña";
       cantidad = 255.00;
       document.getElementById("nombre").innerHTML = nombre;
       document.getElementById("cantidad").innerHTML = cantidad; 
       break;
     case "7":
       nombre = "saquen el esposo";
       cantidad = 290.00;
       document.getElementById("nombre").innerHTML = nombre;
       document.getElementById("cantidad").innerHTML = cantidad; 
       break;
     case "8":
       nombre = "mujer de vida galante";
       cantidad = 300.00;
       document.getElementById("nombre").innerHTML = nombre;
       document.getElementById("cantidad").innerHTML = cantidad; 
       break;
     default:
       alert("No existe esa piñata");

       break;
   }

 }    
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDmU_V3mZPvctzf1eVcEgY_lpo0GhdXwXY",
    authDomain: "proyecto-e6a0a.firebaseapp.com",
    databaseURL: "https://proyecto-e6a0a-default-rtdb.firebaseio.com",
    projectId: "proyecto-e6a0a",
    storageBucket: "proyecto-e6a0a.appspot.com",
    messagingSenderId: "614525944794",
    appId: "1:614525944794:web:d28945d3515a02a17636e3"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Colección de contactos
let contactInfo = firebase.database().ref("info");

//Para recibir el submit
document.querySelector(".form-compra").addEventListener("submit", submitForm);

function submitForm(e)
{
  e.preventDefault();
  
  //Para obtener el valor de los input
  let nombre = document.querySelector(".nombre").value;
  let email = document.querySelector(".email").value;
  let x1 = document.querySelector(".x1").value;
  console.log(nombre, x1, mensaje);
  
  saveContactInfo(nombre, email, x1);
  
  document.querySelector(".form-compra").reset();
  
  sendEmail(nombre, email, x1);
}

//Para guardar información del contacto
function saveContactInfo(nombre, email, x1)
{
  let newContactInfo = contactInfo.push();
  
  newContactInfo.set({
    nombre: nombre,
    email: email,
    x1: x1,
  });
  
  recuperarInfo();
}

//Para recuperar la información del contacto
function recuperarInfo()
{
  let ref = firebase.database().ref("info");
  ref.on("value", getDatos);
}

function getDatos(datos)
{
  let info = datos.val();
  let keys = Object.keys(info);
  
  for(let i = 0; i < keys.length; i++)
  {
    let infoData = keys[i];
    let nombre = info[infoData].nombre;
    let email = info[infoData].email;
    let x1 = info[infoData].x1;
    console.log(nombre, email, x1);
  }
}

recuperarInfo();
  
//Para enviar la información del e-mail
function sendEmail(nombre, email, x1)
{
  Email.send({
    Host: "smtp.gmail.com",
    Username: 'pinateriavenados@gmail.com',
    Password: "nfxocpoaztilzmmf",
    To: "pinateriavenados@gmail.com",
    From: "pinateriavenados@gmail.com",
    Subject: `${nombre} te ha enviado un mensaje`,
    Body: `Nombre: ${nombre} <br> Email: ${email} <br> Cantidad de piñatas: ${x1}`,
  }).then((x1) => alert("El correo se ha enviado con éxito"));
}