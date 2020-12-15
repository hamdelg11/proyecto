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
