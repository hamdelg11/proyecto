const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
const valor = urlParams.get('num');

myFunction(valor);

 var nombre, cantidad;  

 function myFunction(valor) {  
   switch (valor) {
     case "1":
       document.frmcompra.f1t1.value = "cara de papa";
       document.frmcompra.f1t2.value = 250.00;
       document.getElementById("fiu").style.backgroundImage = "url('https://i.pinimg.com/564x/c0/96/30/c09630d1ce8ff6107875a3d15344eb8b.jpg')";
       break;
     case "2":
       document.frmcompra.f1t1.value = "corona virus";
       document.frmcompra.f1t2.value = 275.00;
       document.getElementById("fiu").style.backgroundImage = "url('https://i.pinimg.com/564x/d2/18/bd/d218bd994932215dcb9e006c92eca90b.jpg')";
       break;
     case "3":
       document.frmcompra.f1t1.value = "cubetazo";
       document.frmcompra.f1t2.value = 265.00;
       document.getElementById("fiu").style.backgroundImage = "url('https://i.pinimg.com/564x/63/9c/aa/639caa71b0e5f8fb05488cf26c75d1a5.jpg')";
       break;
     case "4":
       document.frmcompra.f1t1.value = "pavo real";
       document.frmcompra.f1t2.value = 280.00;
     document.getElementById("fiu").style.backgroundImage = "url('https://i.pinimg.com/564x/b1/d3/d4/b1d3d48553d7f35f81ad5d9e92d95d86.jpg')";
       break;
     case "5":
       document.frmcompra.f1t1.value = "alebrije";
       document.frmcompra.f1t2.value = 275.00;
       document.getElementById("fiu").style.backgroundImage = "url('https://i.pinimg.com/564x/f1/f8/9a/f1f89a48ad952a3ca9852020cb59bc0a.jpg')";
       break;
     case "6":
       document.frmcompra.f1t1.value = "piñata navideña";
       document.frmcompra.f1t2.value = 255.00;
       document.getElementById("fiu").style.backgroundImage = "url('https://i.pinimg.com/564x/d1/0d/ba/d10dba9a380c865d9c387cec5c94286f.jpg')";
       break;
     case "7":
       document.frmcompra.f1t1.value = "saquen el esposo";
       document.frmcompra.f1t2.value = 290.00;
       document.getElementById("fiu").style.backgroundImage = "url('https://image.mmradio.com/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/pinata_1.jpg')";
       break;
     case "8":
       document.frmcompra.f1t1.value = "mujer de vida galante";
       document.frmcompra.f1t2.value = 300.00;
       document.getElementById("fiu").style.backgroundImage = "url('https://i.pinimg.com/564x/cc/af/52/ccaf52d2fee15df103cba6ecefef480e.jpg')";
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
  let direccion = document.querySelector(".direccion").value;
  let x1 = document.querySelector(".x1").value;
  let pinata = document.querySelector(".pina").value;
  let precio = document.querySelector(".precio").value;
  let targ = document.querySelector(".targ").value;
  console.log(nombre, email, x1);
  
  saveContactInfo(nombre, email, direccion, x1, pinata, precio, targ);
  
  document.querySelector(".form-compra").reset();
  
  sendEmail(nombre, email, direccion, x1, pinata, precio, targ);
}

//Para guardar información del contacto
function saveContactInfo(nombre, email, direccion, x1, pinata, precio, targ)
{
  let newContactInfo = contactInfo.push();
  
  newContactInfo.set({
    nombre: nombre,
    email: email,
   direccion: direccion,
    x1: x1,
   pinata: pinata,
   precio: precio,
   targ: targ,
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
    let direccion = info[infoData].direccion;
    let x1 = info[infoData].x1;
    let pinata = info[infoData].pinata;
    let precio = info[infoData].precio;
    let targ = info[infoData].targ;
    console.log(nombre, email, x1, pinata, precio, targ);
  }
}

recuperarInfo();
  
//Para enviar la información del e-mail
function sendEmail(nombre, email, direccion, x1, pinata, precio, targ)
{
  Email.send({
    SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
    Host: "smtp.gmail.com",
    Username: 'pinateriavenados@gmail.com',
    Password: "nfxocpoaztilzmmf",
    To: "pinateriavenados@gmail.com",
    From: "pinateriavenados@gmail.com",
    Subject: `${nombre} te ha enviado un mensaje`,
    Body: `Nombre del cliente: ${nombre} <br> Email del cliente: ${email} <br> Direccion del cliente: ${direccion} <br> Piñata: ${pinata} <br> Precio: $${precio} <br> Cantidad de piñatas: ${x1} <br> Numero De La Targeta: ${targ}`,
  }).then((x1) => alert("El correo se ha enviado con éxito"));
}
