$(function () {
	$('.galeria .contenedor-imagen').on('click' , function(){
		$('#modal').modal;
		var ruta_imagen=($(this).find('img').attr('src'));
		$('#imagen-modal').attr('src',ruta_imagen);
	});
	/* para que desaparesca la imagen al hacer un click en otro lado , cerrar el modal*/
	$('#modal').on('click' , function(){
		$('#modal').modal('hide');
	});

})