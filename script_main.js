//otto script_main

//show upholstery
if (discountType.value === "new" || discountType.value === "refer"){
	show(upholstery);
}

//upholstery switch uhh yeahhh
	switch(upholstery.value){
		case 'fabric' :
		//fab inc pricing
			if (fabGrade.value === "select"){
				price_fabInc.value = 0;
			}

			if (fabGrade.value != "select"){
				price_fabInc.value = 
					(fabGrade.value - 1) *
					prices[location.value].otto_fabInc;
			}

		break;

		case 'leather' :

		uphStyle.value = "uph";
		hide(uphStyle);
		
		//leather inc pricing
			switch(leatherGrade.value){
				case 'select' :
					price_leatherInc.value = 0;
				break;

				case 'A' :
					price_leatherInc.value = 
						prices[location.value].otto_fabInc * 53;
				break;

				case 'B' :
					price_leatherInc.value = 
						prices[location.value].otto_fabInc * 66;
				break;

				case 'C' :
					price_leatherInc.value = 
						prices[location.value].otto_fabInc * 80;
				break;

				case 'D' :
					price_leatherInc.value = 
						prices[location.value].otto_fabInc * 94;
				break;

				case 'E' :
					price_leatherInc.value = 
						prices[location.value].otto_fabInc * 109;
				break;
			//close leather pricing switch
			}

		break;

		case 'com' :
		//inc pricing
			if (totalSize == 0 && diameter == 0){
				price_comInc.value = 0;
			}

			if (totalSize != 0 || diameter != 0){
				price_comInc.value = Math.round(calc_baseAndSize_gr1 * 0.78);
			}

		break;
	//close upholstery switch
	}

//shape & sizing

	if (shape.value === "Off"){
		calc_baseAndSize_gr1 = 0;
	}

	if (shape.value != "Off"){
		show(subtotal);
	}	

	switch(shape.value){
		case 'square' :
			//sizing
				if (totalSize > 0 && totalSize <= 63){
					calc_baseAndSize_gr1 = prices[location.value].otto_63;
				}

				if (totalSize > 63 && totalSize <= 75){
					calc_baseAndSize_gr1 = prices[location.value].otto_75;
				}

				if (totalSize > 75 && totalSize <= 87){
					calc_baseAndSize_gr1 = prices[location.value].otto_87;
				}

				if (totalSize > 87 && totalSize <= 99){
					calc_baseAndSize_gr1 = prices[location.value].otto_99;
				}

				if (totalSize > 99 && totalSize <= 111){
					calc_baseAndSize_gr1 = prices[location.value].otto_111;
				}

				if (totalSize > 111)
					//open 111
					{
					
						var exInches = totalSize - 111;
						var exCost;

						if (exInches > 0 && exInches <= 10){
								exCost = prices[location.value].exLength_fab;
							}

							if (exInches > 10 && exInches <= 20){
								exCost = prices[location.value].exLength_fab * 2;
							}

							if (exInches > 20 && exInches <= 30){
								exCost = prices[location.value].exLength_fab * 3;
							}

							if (exInches > 30 && exInches <= 40){
								exCost = prices[location.value].exLength_fab * 4;
							}

							if (exInches > 40 && exInches <= 50){
								exCost = prices[location.value].exLength_fab * 5;
							}

							if (exInches > 50){
								exCost = 0;
								app.alert("Too large! Get custom quote.");
							}
						


						calc_baseAndSize_gr1 = prices[location.value].otto_111 + exCost;

					//close 111	
					}


		break;

		case 'round' :
			//sizing
				if (diameter <= 30){
					calc_baseAndSize_gr1 = prices[location.value].otto_round30;
				}

				if (diameter > 30 && diameter <= 36){
					calc_baseAndSize_gr1 = prices[location.value].otto_round36;
				}

				if (diameter > 36 && diameter <= 42){
					calc_baseAndSize_gr1 = prices[location.value].otto_round42;
				}

				if (diameter > 42){
				//open 42
					var exInches = diameter - 42;
					var exCost;

			
					if (exInches > 0 && exInches <= 10){
						exCost = prices[location.value].exLength_fab;
					}

					if (exInches > 10 && exInches <= 20){
						exCost = prices[location.value].exLength_fab * 2;
					}

					if (exInches > 20 && exInches <= 30){
						exCost = prices[location.value].exLength_fab * 3;
					}

					if (exInches > 30){
						exCost = 0;
						app.alert("Too large! Get custom quote.");
					}


					calc_baseAndSize_gr1 = prices[location.value].otto_round42 + exCost;

				//close 42
				}

		break;
	//close shape switch
	}

//upholstery style (uph, skirt, slip)
	if(upholstery.value != "leather"){

		switch(uphStyle.value){
			case 'uph' :
				price_uphStyle.value = 0;
			break;

			case 'skirtPocket' :
				price_uphStyle.value = Math.round(prices[location.value].skirt_pocket / 2);
			break;

			case 'skirtWaterfall' :
				price_uphStyle.value = Math.round(calc_baseAndSize_gr1 * prices[location.value].skirt_waterfall);
			break;

			case 'slipPocket' :
				price_uphStyle.value = Math.round(calc_baseAndSize_gr1 * prices[location.value].slip_pocket);

			break;

			case 'slipWaterfall' :
				price_uphStyle.value = Math.round(calc_baseAndSize_gr1 * prices[location.value].slip_waterfall);
			
			break;
		//close uphStyle switch
		}
	//close if
	}

//storage
	if (shape.value === "square" && storage.value === "Yes"){
			price_storage.value = prices[location.value].otto_storage;
	} else {
			price_storage.value = 0;
	}

//tuftTop switch
	switch(tuftTop.value){
		case 'plain' :
			price_tuftTop.value = 0;
		break;

		case 'button' :
			price_tuftTop.value = Math.round(prices[location.value].bTuft / 2);
		break;

		case 'blind' :
			price_tuftTop.value = Math.round(prices[location.value].bTuft / 2);
		break;

		case 'diamond' :
			price_tuftTop.value = prices[location.value].dTuft * calc_baseAndSize_gr1;
		break;
	//close tuftTop switch
	}

//tuftRail switch
	switch(tuftRail.value){
		case 'plain' :
			price_tuftRail.value = 0;
		break;

		case 'kenzie' :
			price_tuftRail.value = Math.round(prices[location.value].bTuft / 2);
		break;
	//close tuftRail switch
	}

//grid
	if (grid.value === "Yes"){
			price_grid.value = Math.round(prices[location.value].grid / 2);
	} else {
			price_grid.value = 0;
	}

//legs switch
	switch(legs.value){
		case 'std' :
			price_legs.value = 0;
		break;

		case 'wBase1' :
			price_legs.value = Math.round(prices[location.value].wBase_cl1 / 2);
		break;

		case 'wBase2' :
			price_legs.value = Math.round(prices[location.value].wBase_cl2 / 2);
		break;

		case 'metal1' :
			price_legs.value = prices[location.value].metalLegs_cl1;
		break;

		case 'metal2' :
			price_legs.value = prices[location.value].metalLegs_cl2;
		break;
	//close legs switch
	}

//top or double stitch
	if (topOrDouble.value === "Yes"){
			price_topOrDouble.value = Math.round(prices[location.value].topstitch / 2);
	} else {
			price_topOrDouble.value = 0;
	}

//nails switch
	switch(nails.value){
		case 'none' :
			price_nails.value = 0;
		break;

		case 1 :
			price_nails.value = prices[location.value].nailheads;
		break;

		case 2 :
			price_nails.value = prices[location.value].nailheads * 2;
		break;

		case 3 :
			price_nails.value = prices[location.value].nailheads * 3;
		break;

		case 4 :
			price_nails.value = prices[location.value].nailheads * 4;
		break;
	//close nails switch
	}

