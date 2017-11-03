//shape - square (mouse up)
	show(text_length);
	show(length);
	show(text_depth);
	show(depth);
	
	hide(text_diameter);
	hide(diameter);

	if (upholstery.value != "leather"){
		show(uphStyle);
		show(price_uphStyle);
	}
	
	show(legs);
	show(price_legs);
	show(storage);
	show(price_storage);
	show(tuftTop);
	show(price_tuftTop);
	show(tuftRail);
	show(price_tuftRail);
	show(grid);
	show(price_grid);
	show(topOrDouble);
	show(price_topOrDouble);
	show(nails);
	show(price_nails);

//shape - round (mouse up)
	hide(text_length);
	hide(length);
	hide(text_depth);
	hide(depth);
	
	show(text_diameter);
	show(diameter);

	if (upholstery.value != "leather"){
		show(uphStyle);
		show(price_uphStyle);
	}

	show(legs);
	show(price_legs);

	storage.value = "Off";
	hide(storage);
	hide(price_storage);

	show(tuftTop);
	show(price_tuftTop);
	show(tuftRail);
	show(price_tuftRail);
	show(grid);
	show(price_grid);
	show(topOrDouble);
	show(price_topOrDouble);
	show(nails);
	show(price_nails);




