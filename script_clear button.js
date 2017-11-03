//hide fields

hide(upholstery);
hide(fabGrade);
hide(price_fabInc);
hide(leatherGrade);
hide(price_leatherInc);
hide(price_comInc);

hide(shape);
hide(text_length);
hide(length);
hide(text_depth);
hide(depth);
hide(text_diameter);
hide(diameter);

hide(uphStyle);
hide(price_uphStyle);
hide(legs);
hide(price_legs);
hide(storage);
hide(price_storage);
hide(tuftTop);
hide(price_tuftTop);
hide(tuftRail);
hide(price_tuftRail);
hide(grid);
hide(price_grid);
hide(topOrDouble);
hide(price_topOrDouble);
hide(nails);
hide(price_nails);

hide(subtotal);


//discount type box
	var result = app.response({
		cQuestion: "Type N for NEW / R for REPEAT-REFER",
		cTitle: "New Or Repeat"});

	result = result.toLowerCase();

	switch(result){
		case 'n' :
			discountType.value = "new";
		break;

		case 'r' :
			discountType.value = "refer";
		break;

		default:
			app.alert("Error: Press clear again & type N or R");
		break;
		
	//close switch
	}


