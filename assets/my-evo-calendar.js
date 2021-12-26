let state = '';
let check = localStorage.getItem('active');
if (check === 'enabled') {
	$('#calendar').evoCalendar({
		theme: 'Midnight Blue',
		format: 'mm/dd/yyyy',
		titleFormat: 'MM yyyy',
		eventHeaderFormat: 'DD, M d yyyy',
		todayHighlight: true,
	});
	state = 'Royal Navy';
	});
	state = 'Midnight Blue';
} else {
	$('#calendar').evoCalendar({
		theme: 'Royal Navy',
		format: 'mm/dd/yyyy',
		titleFormat: 'MM yyyy',
		eventHeaderFormat: 'DD, M d yyyy',
		todayHighlight: true,
	});
	state = 'Royal Navy';
}

function setNavy() {
	$('#calendar').evoCalendar('setTheme', 'Royal Navy');
}
function setMidnight() {
	$('#calendar').evoCalendar('setTheme', 'Midnight Blue');
}

$('#toggle').click(function () {
	console.log('toggle');
	if (state === 'Midnight Blue') {
		setNavy();
		state = 'Royal Navy';
	} else {
		setMidnight();
		state = 'Midnight Blue';
	}
});
$.ajax({
	url: '/assets/event.json',
	dataType: 'json',
	type: 'get',
	cache: false,
	success: the_function,
});
function the_function(reponse) {
	$('#calendar').evoCalendar('addCalendarEvent', reponse.myEvents);
}
