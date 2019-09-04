function init() {
	$("input[type=number]").on("input", update);
	$("select").change(update);

	update();
}

function get_number(id, max) {
  var str = $("#" + id).val();
  if (str === "") return 0;
  var num = +str;
  if (isNaN(num)) num = 0;
  num = Math.min(Math.max(Math.floor(num), 0), max);
  $("#" + id).val(num);
  return num;
}



function update() {
	var lv				= get_number("input_lv", 9999)
	var luck			= get_number("input_luck", 9999)
	var mode			= get_number("mode", 9999)
	var flagship		= get_number("flagship", 9999)
	var medium			= get_number("medium", 9999)
	var searchlight		= get_number("searchlight", 9999)
	var flare			= get_number("flare", 9999)
	var lookout			= get_number("lookout", 9999)
	
	var e_searchlight	= get_number("e_searchlight", 9999)
	var e_flare			= get_number("e_flare", 9999)
	
	var main_cal 		= 0
	
	if (luck<50) {
		main_cal = 0.75 * Math.sqrt(lv) + 15 + luck
	}
	else {
		main_cal = 0.8 * Math.sqrt(lv) + 65 + Math.sqrt(luck - 50)
	}
	friend_cal = flagship + medium + searchlight + flare + lookout
	enemy_cal = e_searchlight + e_flare
	main_cal = Math.trunc(main_cal + friend_cal - enemy_cal) / mode * 100
	$("p.result").text(main_cal.toFixed(2)+"%");
	
}

init();