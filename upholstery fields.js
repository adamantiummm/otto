//upholstery - fabric (mouse up)
	show(shape);

	show(fabGrade);
	show(price_fabInc);


	setZero(price_comInc);
	hide(price_comInc);

	if (shape.value != "Off"){

		show(tuftTop);
		show(price_tuftTop);

		show(tuftRail);
		show(price_tuftRail);

		show(grid);
		show(price_grid);

		show(legs);
		show(price_legs);

		show(topOrDouble);
		show(price_topOrDouble);

		show(uphStyle);
		show(price_uphStyle);

		show(nails);
		show(price_nails);
	}


//upholstery - leather (mouse up)
	show(shape);

	fabGrade.value = "select";
	setZero(price_fabInc);
	hide(fabGrade);
	hide(price_fabInc);

	show(leatherGrade);
	show(price_leatherInc);

	setZero(price_comInc);
	hide(price_comInc);

	if (shape.value != "Off"){

		show(tuftTop);
		show(price_tuftTop);

		show(tuftRail);
		show(price_tuftRail);

		show(grid);
		show(price_grid);

		show(legs);
		show(price_legs);

		show(topOrDouble);
		show(price_topOrDouble);

		uphStyle.value = "uph";
		hide(uphStyle);
		hide(price_uphStyle);

		show(nails);
		show(price_nails);
	}

//upholstery - com (mouse up)
	show(shape);

	fabGrade.value = "select";
	setZero(price_fabInc);
	hide(fabGrade);
	hide(price_fabInc);

	leatherGrade.value = "select";
	setZero(price_leatherInc);
	hide(leatherGrade);
	hide(price_leatherInc);

	show(price_comInc);

	if (shape.value != "Off"){

		show(tuftTop);
		show(price_tuftTop);

		show(tuftRail);
		show(price_tuftRail);

		show(grid);
		show(price_grid);

		show(legs);
		show(price_legs);

		show(topOrDouble);
		show(price_topOrDouble);

		show(uphStyle);
		show(price_uphStyle);

		show(nails);
		show(price_nails);
	}









