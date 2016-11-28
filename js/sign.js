function validarCorreo (){
 var correo = $('email').val();
 var caracteres = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
 if (correo === null || correo.length===0){ // El campo no debe estar vacío.
 	$(".input-field:eq(1)").append("<span>El campo no puede estar vacío</span>");
			return false;
}
}