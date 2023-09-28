<?

		// Dirección de mail a la que se envía el mensaje
		$sendto  = 'josesoria.94@gmail.com'; 
		// Asunto del mensaje
		$subject = "Formulario de contacto"; 
	
		// Contenido del mensaje
		// El caracter \n indica un salto de línea
		$corps="Nombre: ".$_REQUEST['nombre']."\n".
		"Email: ".$_REQUEST['email']."\n".
		"Comentarios: ".$_REQUEST['comentarios']."\n"."\n";
	
		// Datos de quien envía el mensaje, para poder responder al mismo mensaje recibido
		$From = "From: ".$_REQUEST['nombre']." <".$_REQUEST['email'].">\n";
		$From .= "Reply-To: ".$_REQUEST['nombre']." <".$_REQUEST['email'].">\n";

		// Comando para enviar el mail 
		@mail($sendto,$subject,$corps,$From);

		// Comando para redirigir al usuario a otra página
		header("Location: index.html");

?>