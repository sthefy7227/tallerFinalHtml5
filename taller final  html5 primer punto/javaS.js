function obtenerdatos()
	{
		var nombresf = document.getElementById("nombres").value;
        var apellidosf = document.getElementById("apellidos").value;
        var correof = document.getElementById("correo").value;
        var asuntof = document.getElementById("asunto").value;
        var mensajef = document.getElementById("mensaje").value;
        if(nombresf==""){
            alert("debe escribir su nombre")
        }
        else if(apellidosf==""){
            alert("debe escribir su apellido")
        }
        else if(correof==""){
            alert("debe escribir el correo")
        }
        else if(asuntof==""){
            alert("debe escribir el asunto")
        }
        else if(mensajef==""){
            alert("debe escribir el mensaje")
        }
        else{
            console.log("Nombre: ",nombresf);
            console.log("Apellido: ",apellidosf);
            console.log("Correo: ", correof);
            console.log("Asunto: ",asuntof);
            console.log("Mensaje: ",mensajef);
        }
        

	}
        