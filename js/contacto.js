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
document.querySelector(".form-contacto").addEventListener("submit", submitForm);

function submitForm(e)
{
  e.preventDefault();
  
  //Para obtener el valor de los input
  let nombre = document.querySelector(".nombre").value;
  let email = document.querySelector(".email").value;
  let mensaje = document.querySelector(".mensaje").value;
  console.log(nombre, email, mensaje);
  
  saveContactInfo(nombre, email, mensaje);
  
  document.querySelector(".form-contacto").reset();
  
  sendEmail(nombre, email, mensaje);
}

//Para guardar información del contacto
function saveContactInfo(nombre, email, mensaje)
{
  let newContactInfo = contactInfo.push();
  
  newContactInfo.set({
    nombre: nombre,
    email: email,
    mensaje: mensaje,
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
    let mensaje = info[infoData].mensaje;
    console.log(nombre, email, mensaje);
  }
}

recuperarInfo();
  
//Para enviar la información del e-mail
function sendEmail(nombre, email, mensaje)
{
  Email.send({
    Host: "smtp.gmail.com",
    Username: 'pinateriavenados@gmail.com',
    Password: "eryuhgzlbqtkbbod",
    To: "pinateriavenados@gmail.com",
    From: `${email}`,
    Subject: `${nombre} te ha enviado un mensaje`,
    Body: `Nombre: ${nombre} <br> Email: ${email} <br> Mensaje: ${mensaje}`,
  }).then((mensaje) => alert("El correo se ha enviado con éxito"));
}
