// Toma los datos para enviarlos por correo

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    var nombre = document.getElementById('exampleInputName1').value;
    var correo = document.getElementById('exampleInputEmail1').value;
    var avisoPrivacidad = document.getElementById('exampleCheck1').checked;

    // Mostrar los datos en la consola
    console.log("Nombre: " + nombre);
    console.log("Correo Electrónico: " + correo);
    console.log("Aceptó aviso de privacidad: " + avisoPrivacidad);
});