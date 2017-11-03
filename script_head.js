//otto script_head

//functions
	var show = function(field){
		field.display = display.visible;
	};

	var hide = function(field){
		field.display = display.hidden;
	};

	var setZero = function(field){
		if (field.value != 0){
			field.value = 0;
		}
	};

//variables

	var discountType = getField("discountType");
	var location = getField("pricingLocation");

	var shape = getField("shape");

	var length = getField("length");
	var depth = getField("depth");
	var totalSize;
		if (length.value === "" || depth.value === ""){
			totalSize = 0;
		} else {
			totalSize = length.value + depth.value;
		}


	var diameter = getField("diameter");

	var upholstery = getField("upholstery");

	var fabGrade = getField("fabric.grade");
	var leatherGrade = getField("leather.grade");

	var storage = getField("storage");
	var tuftTop = getField("tuftTop");
	var tuftRail = getField("tuftRail");
	var grid = getField("grid");
	var legs = getField("legs");
	var topOrDouble = getField("topOrDouble");
	var uphStyle = getField("uphStyle");
	var nails = getField("nails");

	
	var text_length = getField("text_length");
	var text_depth = getField("text_depth");
	var text_diameter = getField("text_diameter");

	
	var price_fabInc = getField("price_fabInc");
	var price_leatherInc = getField("price_leatherInc");
	var price_comInc = getField("price_comInc");

	var price_storage = getField("price_storage");
	var price_tuftTop = getField("price_tuftTop");
	var price_tuftRail = getField("price_tuftRail");
	var price_grid = getField("price_grid");
	var price_legs = getField("price_legs");
	var price_topOrDouble = getField("price_topOrDouble");
	var price_uphStyle = getField("price_uphStyle");
	var price_nails = getField("price_nails");

	var calc_baseAndSize_gr1;

	var subtotal = getField("subtotal");




