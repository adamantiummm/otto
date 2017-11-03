//new uphStyle script

if (upholstery.value != "Off" && shape.value != "Off"){

	switch(uphStyle.value){
		case 'uph' :

			if (shape.value === "square"){
				//show storage
				show(storage);
				show(price_storage);
			}

			show(legs);
			show(price_legs);
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
			
		break;

		case 'skirtPocket' :
			//show legs
			show(legs);
			show(price_legs);

			//show storage
			show(storage);
			show(price_storage);

			//show tuftTop
			show(tuftTop);
			show(price_tuftTop);

			//set tuftRail to plain and hide
			if (tuftRail.value != "plain"){
					app.alert = ("Side rails cannot have detail when there is a skirt!");
					tuftRail.value = "plain";
					
			}
			hide(tuftRail);
			hide(price_tuftRail);


			//set nails to none and hide
			if (nails.value != "none"){
					app.alert = ("There is nowhere to put nails when there is a skirt!");
					nails.value = "none";
					
			}
			hide(nails);
			hide(price_nails);

		break;

		case 'skirtWaterfall' :
			//show legs
			show(legs);
			show(price_legs);

			//show storage
			show(storage);
			show(price_storage);

			//show tuftTop
			show(tuftTop);
			show(price_tuftTop);

			//set tuftRail to plain and hide
			if (tuftRail.value != "plain"){
					app.alert = ("Side rails cannot have detail when there is a skirt!");
					tuftRail.value = "plain";
					
			}
			hide(tuftRail);
			hide(price_tuftRail);


			//set nails to none and hide
			if (nails.value != "none"){
					app.alert = ("There is nowhere to put nails when there is a skirt!");
					nails.value = "none";
					
			}
			hide(nails);
			hide(price_nails);

		break;

		case 'slipPocket' :
			//show legs
			show(legs);
			show(price_legs);

			//hide storage
			if (storage.value === "Yes"){
					app.alert = ("Slipcovers cannot be made with storage!");
					storage.value = "Off";
					
			}
			hide(storage);
			hide(price_storage);

			//set tuftTop to plain and hide
			if (tuftTop.value != "plain"){
					app.alert = ("Slipcovers cannot have tufting!");
					tuftTop.value = "plain";
					
			}
			hide(tuftTop);
			hide(price_tuftTop);

			//set tuftRail to plain and hide
			if (tuftRail.value != "plain"){
					app.alert = ("Side rails cannot have detail when there is a slipcover/skirt!");
					tuftRail.value = "plain";
					
			}
			hide(tuftRail);
			hide(price_tuftRail);


			//set nails to none and hide
			if (nails.value != "none"){
					app.alert = ("Slipcovers cannot have nailheads!");
					nails.value = "none";
					
			}
			hide(nails);
			hide(price_nails);

		break;

		case 'slipWaterfall' :
			//show legs
			show(legs);
			show(price_legs);

			//hide storage
			if (storage.value === "Yes"){
					app.alert = ("Slipcovers cannot be made with storage!");
					storage.value = "Off";
					
			}
			hide(storage);
			hide(price_storage);

			//set tuftTop to plain and hide
			if (tuftTop.value != "plain"){
					app.alert = ("Slipcovers cannot have tufting!");
					tuftTop.value = "plain";
					
			}
			hide(tuftTop);
			hide(price_tuftTop);

			//set tuftRail to plain and hide
			if (tuftRail.value != "plain"){
					app.alert = ("Side rails cannot have detail when there is a slipcover/skirt!");
					tuftRail.value = "plain";
					
			}
			hide(tuftRail);
			hide(price_tuftRail);


			//set nails to none and hide
			if (nails.value != "none"){
					app.alert = ("Slipcovers cannot have nailheads!");
					nails.value = "none";
					
			}
			hide(nails);
			hide(price_nails);

		break;
	}

}


