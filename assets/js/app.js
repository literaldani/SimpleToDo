

/* No se coloca li en el selector principal porque jQuery solo funciona con los elementos ya creados, de esta forma se explica que se ejecute en todos los ul que ya existen, pero en los li que estaran dentro */
$("ul").on("click","li", function () {
	console.log("click en li");
	$(this).toggleClass("tachado");
})

$("ul").on("click","span",function (e) {
	// Esto Hace que se ejecute en el elemento por encima de donde estoy parado (parent)
	$(this).parent().fadeOut(500, function () {
		$(this).remove();
	});
	// Esto evita que se propague el evento en los elementos padres
	e.stopPropagation();
})

$("#textbox").on("keypress", function (e) {
	// console.log(e.which);

	if (e.which === 13) {
		var texto = $(this).val()
		$(this).val("");
		$("ul").append("<li><span>X</span> " + texto + "</li>")
		// console.log($(this).val());
	}

})