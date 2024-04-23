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

    // Construir el objeto de datos para enviar a Mailchimp
    // var data = {
    //     email_address: correo,
    //     status: 'subscribed',
    //     merge_fields: {
    //         FNAME: nombre
    //     }
    // };

    // Convertir el objeto de datos a JSON
    // var jsonData = JSON.stringify(data);

    // Hacer la solicitud a la API de Mailchimp
    // fetch('https://<DC>.api.mailchimp.com/3.0/lists/<LIST_ID>/members', {
    //     method: 'POST',
    //     headers: {
    //         'Authorization': 'Basic ' + btoa('anystring:' + '111c48a1c77b8186db7732a5e788c523-us18'),
    //         'Content-Type': 'application/json'
    //     },
    //     body: jsonData
    // })
    // .then(response => {
    //     if (response.ok) {
    //         console.log('¡Suscripción exitosa!');
    //     } else {
    //         console.error('Error al suscribirse:', response.statusText);
    //     }
    // })
    // .catch(error => console.error('Error en la solicitud:', error));
});
