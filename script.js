document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registro");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        
        const nombre = document.getElementById("name").value;
        const apellido = document.getElementById("lastname").value;
        const fechaNacimiento = document.getElementById("birthdate").value;

        const formData = {
            nombre,
            apellido,
            fechaNacimiento
        };


        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {

            console.log("Respuesta del servidor:", data);
        })
        .catch(error => {

            console.error("Error:", error);
        });
    });
});