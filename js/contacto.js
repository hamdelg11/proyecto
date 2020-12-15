//Para recibir el submit
document.querySelector(".form-contacto").addEventListener("submit", submitForm);

function submitForm(e)
{
  e.preventDefault();
  
  //Para obtener el valor de los input
  let nombre = document.querySelector(".nombre").value;
  let email = document.querySelector(".email").value;
  let mensaje = document.querySelector(".mensaje").value;
  
  saveContactInfo(nombre, email, mensaje);
  
  document.querySelector(".form-contacto").reset(); 
}

//Para guardar información del contacto

function   saveContactInfo(nombre, email, mensaje)
{
  let newContactInfo = contactInfo.push();
  
  newContactInfo.set({
    nombre: nombre,
    email: email,
    mensaje: mensaje,
  });
}

//Para enviar la información del e-mail
function sendEmail(nombre, email, mensaje)
{
  Email.send({
    Host: "smtp.gmail.com",
    Username: 'pinateriavenados@gmail.com',
    Password: "nfxocpoaztilzmmf",
    To: 'pinateriavenados@gmail.com',
    From: 'pinateriavenados@gmail.com',
    Subject: '${nombre} te ha enviado un mensaje',
    Body: 'Nombre: ${nombre} <br> Email: ${email} <br> Mensaje: ${mensaje}',
  }).then((mensaje) => alert("El correo se ha enviado con éxito"))
}
