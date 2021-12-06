document.querySelector("#play").addEventListener("click", function() {
	console.log("play");
	let video = document.querySelector("#switch-video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("pause");
	let video = document.querySelector("#switch-video");
	video.pause();
});

document.querySelector("#forward").addEventListener("click", function() {
	let video = document.querySelector("#switch-video");
	if (video.currentTime + 15 < video.duration) {
		video.currentTime += 15;
	}
	else {
		video.currentTime = 0;
		video.pause();
	}
});

document.querySelector("#backward").addEventListener("click", function() {
	let video = document.querySelector("#switch-video");
	if (video.currentTime - 15 >= 0) {
		video.currentTime -= 15;
	}
	else {
		video.currentTime = 0;
	}
});