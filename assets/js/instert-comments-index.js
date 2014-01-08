/*
*<!--[Copyright-Derechos de Autor]
-
-   
- Autor de la Aplicacion: Michael Serrato
-
-
- Sitio Web: http://www.foroexpertows.host22.com/
- Twitter: @ForoExpertoWS
- o Tambien Siguenos en: https://www.twitter.com/ForoExpertoWS
- Facebook: https://www.facebook.com/ForoExperto
- correo: programador-experto97@hotmail.com
-
-->
*
*/
/* SISTEMA DE COMENTARIOS AJAX [ARCHIVO:index.php] */
$(document).on('ready',function(){
	$('#submit_coments').on('click',function(){
		var name = $('input#name_sbmt_frmc').val();
		var date = $('input#date_sbmt_frmc').val();
		var subject = $('input#subject_sbmt_frmc').val();
		var comment = $('input#comment_sbmt_frmc').val();

		var archivo = $('document_idname').val();

		if(archivo !=''){
			if(name !=''){
				if(date !=''){
					if(subject !=''){
						if(comment !=''){
							$.post(
								''+archivo+'',
								{ name: name, date: date, subject: subject, comment: comment },
								function(data){
									//$().preppend();
								},'html'
							);
							// Verificar estatus de Envio y ejecutar la Accion
							$('.alertCommentNew').fadeIn('1000', function(){
								// Estilos CSS para el Posicionamiento del Alert
							});
						}
					}
				}
			}
		}
	});
});
