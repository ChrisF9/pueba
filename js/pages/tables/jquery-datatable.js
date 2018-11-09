$(function () {
	var numCols = ($("#tabla_facturas").find("tr")[0].cells.length) - 4;
			  var tablaGestion = $("#tabla_facturas").DataTable({
			   
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
	
			  
    //Exportable table
    $('.js-exportable').DataTable({
        dom: 'Bfrtip',
        responsive: true,
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
});