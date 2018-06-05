var Basejqx = {
    GetLocalizationObject: function () {

        // Inicializar el objeto de localización.
        var localizationobj = {};

        // Traducciones del paginador.
        localizationobj.pagergotopagestring = "Ir a página:";
        localizationobj.pagershowrowsstring = "Mostrar:";
        localizationobj.pagerrangestring = " de ";
        localizationobj.pagernextbuttonstring = "Siguiente";
        localizationobj.pagerpreviousbuttonstring = "Anterior";

        // Traducciones del ordenador
        localizationobj.sortascendingstring = "Ordenar Ascendente";
        localizationobj.sortdescendingstring = "Ordenar Descendente";
        localizationobj.sortremovestring = "Eliminar Ordenamiento";

        // Traducciones del agrupador
        localizationobj.groupsheaderstring = "Arrastre una columna aquí para agrupar";
        localizationobj.groupbystring = "Agrupar por esta columna",
		localizationobj.groupremovestring = "Remover de la agrupación",

        // Traducciones para el filtrado
		localizationobj.filterclearstring = "Limpiar";
        localizationobj.filterstring = "Filtrar";
        localizationobj.filtershowrowstring = "Mostrar registros donde:";
        localizationobj.filtershowrowdatestring = "Show rows where la fecha:";
        localizationobj.filterorconditionstring = "O";
        localizationobj.filterandconditionstring = "Y";
        localizationobj.filterselectallstring = "(Seleccionar Todo)";
        localizationobj.filterchoosestring = "Por favor seleccione:";
        localizationobj.filterselectstring = "Seleccione filtro",

        // Agregar los operadores de filtrado.
		localizationobj.filterstringcomparisonoperators = ['Vacío', 'No Vacío', 'Contiene', 'No Contiene', 'Comienza con',
														   'Termina con', 'Igual a', 'Nulo', 'No Nulo'];
        localizationobj.filternumericcomparisonoperators = ['Igual a', 'Diferente a', 'Menor que', 'Menor o Igual que', 'Mayor que',
															'Mayor o Igual que'];
        localizationobj.filterdatecomparisonoperators = ['Igual a', 'Diferente a', 'Menor que', 'Menor o Igual que', 'Mayor que',
														 'Mayor o Igual que', 'Nulo', 'No Nulo'];
        localizationobj.filterbooleancomparisonoperators = ['Igual a', 'Diferente a'];

        // Localización de símbolos
        localizationobj.firstDay = 1;
        localizationobj.percentsymbol = "%";
        localizationobj.currencysymbol = "¢";
        localizationobj.currencysymbolposition = "before";
        localizationobj.decimalseparator = ".";
        localizationobj.thousandsseparator = ",";
        localizationobj.twoDigitYearMax = 2029;

        // Traducción del texto "hoy"
        localizationobj.todaystring = "Hoy";

        // Traducción de Días.
        localizationobj.days = {
            // full day names
            names: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            // abbreviated day names
            namesAbbr: ["Dom", "Lun", "Mar", "Mier", "Jue", "Vie", "Sab"],
            // shortest day names
            namesShort: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"]
        };

        // Traducción de Meses
        localizationobj.months = {
            // full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
            names: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre", ""],
            // abbreviated month names
            namesAbbr: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic", ""]
        };

        // Establecer los patrones
        localizationobj.patterns = {
            // Fecha corta
            d: "dd/MM/yyyy",
            // Fecha larga
            D: "dddd dd MMMM yyyy",
            // Hora corta
            t: "h:mm tt",
            // Hora larga
            T: "h:mm:ss tt",
            // Fecha larga, hora pequeña
            f: "dddd dd MMMM  yyyy h:mm tt",
            // Fecha larga, hora larga
            F: "dddd dd MMMM yyyy h:mm:ss tt",
            // Patrón de Día/Mes
            M: "dd MMMM",
            // Patró de Mes/Año
            Y: "MMMM yyyy",
        };

        // Indicadores AM y PM
        localizationobj.AM = ["AM", "am", "AM"];
        localizationobj.PM = ["PM", "pm", "PM"];
        localizationobj.eras = [{ name: "A.C.", start: null, offset: 0 }];

        // Traducciones misceláneas.
        localizationobj.validationstring = "El valor ingresado no es válido.";
        localizationobj.emptydatastring = "No hay datos que desplegar";
        localizationobj.loadtext = "Cargando...";
        localizationobj.clearstring = "Limpiar";

        // Retornar el objeto
        return localizationobj;
    },

    // Actualiza las condiciones de filtros que estarán disponibles.
    UpdateFilterConditions: function (type, defaultConditions) {
        // Establecer los operadores de comparación de strings
        var stringComparisonOperators = ['EMPTY', 'NOT_EMPTY', 'CONTAINS', 'DOES_NOT_CONTAIN', 'STARTS_WITH',
										  'ENDS_WITH', 'EQUAL', 'NULL', 'NOT_NULL'];

        // Establecer los operadores de comparación numéricos.
        var numericComparisonOperators = ['EQUAL', 'NOT_EQUAL', 'LESS_THAN', 'LESS_THAN_OR_EQUAL', 'GREATER_THAN',
										  'GREATER_THAN_OR_EQUAL'];
		
        // Establecer los operadores de comparación de fechas
        var dateComparisonOperators = ['EQUAL', 'NOT_EQUAL', 'LESS_THAN', 'LESS_THAN_OR_EQUAL', 'GREATER_THAN',
									   'GREATER_THAN_OR_EQUAL', 'NULL', 'NOT_NULL'];

        // Establecer los operadores de comparación booleanos.
        var booleanComparisonOperators = ['EQUAL', 'NOT_EQUAL'];

        // Dependiendo del tipo de filtro que se esté aplicando
        switch (type) {
            // Si es un filtro de strings.
            case 'stringfilter':
                return stringComparisonOperators;

                // Si es un filtro numérico.
            case 'numericfilter':
                return numericComparisonOperators;

                // Si es un filtro de fechas.
            case 'datefilter':
                return dateComparisonOperators;

                // Si es un filtro booleando.
            case 'booleanfilter':
                return booleanComparisonOperators;
        }
    },

    CenterWindow: function(windowName) {
        var winHeight = $(window).height();
        var winWidth = $(window).width();
        var posX = (winWidth / 2) - ($(windowName).width() / 2) + $(window).scrollLeft();
        var posY = (winHeight / 2) - ($(windowName).height() / 2) + $(window).scrollTop();
        $(windowName).jqxWindow({ position: { x: posX, y: posY } });
    }
};

$.jqx.theme = 'darkblue';//'bootstrap';
