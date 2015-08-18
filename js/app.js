$(document).ready(function () {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
		$('.ryu-ready').show();
		})
		.mouseleave(function() {
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		})
		.mousedown(function() {
			playHadouken();
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('ryu-cool').hide();
			$('.ryu-throwing').show();
			$('.hadouken').finish().show()
				.animate(
				{'left':'1020px'},
				500,
				function() {
					$(this).hide();
					$(this).css('left', '520px');
				}
			);
		})
		.mouseup(function() {
			$('.ryu-throwing').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').hide();
			$('.ryu-ready').show();
		});

		$(document).keydown(function(e) {
			if (e.keyCode == 88) { 
				playMoney();
				$('.ryu-still').hide();
				$('.ryu-ready').hide();
				$('.ryu-throwing').hide();
				$('.ryu-cool').show();
			}
		}).keyup(function(e) {
			if (e.keyCode == 88) {
				pauseMoney();
				$('#money')[0].pause();
				$('.ryu-cool').hide();
				$('.ryu-still').show();
			}
		})
});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function playMoney() {
	$('#money')[0].volume = 0.5;
	$('#money')[0].load();
	$('#money')[0].play();
}

function pauseMoney() {
	$('#money')[0].pause(); 
}
