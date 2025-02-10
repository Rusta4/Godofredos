document.addEventListener("DOMContentLoaded", function () {
    const deployBtn = document.getElementById("deploy-btn");

    if (deployBtn) {
        deployBtn.addEventListener("click", async function () {
            try {
                const response = await fetch("http://100.77.20.38:3000/run", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ image: "windows:10" }) // Cambia a la imagen deseada
                });

                if (!response.ok) {
                    throw new Error(`Error al desplegar: ${response.statusText}`);
                }

                const data = await response.json();
                alert(`Contenedor desplegado con éxito. ID: ${data.containerId}`);
            } catch (error) {
                console.error("Error:", error);
                alert("Error al desplegar el contenedor. Revisa la consola.");
            }
        });
    }
});
