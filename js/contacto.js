// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDmU_V3mZPvctzf1eVcEgY_lpo0GhdXwXY",
    authDomain: "proyecto-e6a0a.firebaseapp.com",
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
    nombre : nombre,
    email : email,
    mensaje : mensaje,
  });
}

//Para enviar la información del e-mail
function sendEmail(nombre, email, mensaje)
{
  Email.send({
    Host : "smtp.gmail.com",
    Username : 'pinateriavenados@gmail.com',
    Password : "nfxocpoaztilzmmf",
    To : 'pinateriavenados@gmail.com',
    From : 'pinateriavenados@gmail.com',
    Subject : '${nombre} te ha enviado un mensaje',
    Body : 'Nombre: ${nombre} <br> Email: ${email} <br> Mensaje: ${mensaje}'
  }).then((mensaje) => alert("El correo se ha enviado con éxito"));
}
