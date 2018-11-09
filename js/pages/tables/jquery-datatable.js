$(function () {
		var numCols = ($("#tabla_facturas").find("tr")[0].cells.length) - 4;
		var tablaGestion = $("#tabla_facturas").DataTable({
            responsive: true,
			dom: "Blfrtip",
			buttons: ["copy"],
			//"slengthMenu": true,
			"searching": true,
			"lengthChange": false,
			"order": [[numCols + 1, "asc"], [numCols, "desc"]],
			"language": {
				"sProcessing": "Procesando...",
				"sLengthMenu": "Mostrar _MENU_",
				"sZeroRecords": "No se encontraron resultados",
				"sEmptyTable": "Ningún dato disponible en esta tabla",
				"sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
				"sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
				"sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
				"sInfoPostFix": "",
				"sSearch": "Buscar:",
				"sUrl": "",
				"sInfoThousands": ",",
				"sLoadingRecords": "Cargando...",
				"oPaginate": {
				  "sFirst": "Primero",
				  "sLast": "Último",
				  "sNext": "Siguiente",
				  "sPrevious": "Anterior"
				},
				buttons: {
					copy: "Copiar"
				}
			}
		});
		
		
		var filaOpciones = $('<div class="row"></div>');
		var colMostrar = $('<div id="colMostrar" class="col-xs-12 col-sm-6"></div>');
		var colFiltro = $('<div id="colFiltro" class="col-xs-12 col-sm-4"></div>');

		$("#tabla_facturas_length").appendTo(colMostrar);
		$("#tabla_facturas_filter").appendTo(colFiltro);

		filaOpciones.append(colMostrar);
		filaOpciones.append(colFiltro);


		$("#tabla_facturas_wrapper").prepend(filaOpciones);

		var filaRegistros = $('<div class="row"></div>');
		var colInfo = $('<div id="colInfo" class="col-xs-12 col-sm-6"></div>');
		var colPaginacion = $('<div id="colPaginacion" class="col-xs-12 col-sm-6"></div>');

		$("#tabla_facturas_info").appendTo(colInfo);
		$("#tabla_facturas_paginate").appendTo(colPaginacion);

		filaRegistros.prepend(colInfo);
		filaRegistros.append(colPaginacion);

		$("#tabla_facturas_wrapper").append(filaRegistros);
	
			  
		//Exportable table
		$('.js-exportable').DataTable({
			dom: 'Bfrtip',
			responsive: true,
			buttons: [
				'copy', 'csv', 'excel', 'pdf', 'print'
			]
		});
});