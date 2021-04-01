var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML=video.volume *100 +"%"
});


document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

// Playback Speed (Slower)
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate = video.playbackRate * .95;
	console.log("New speed is "+video.playbackRate)
});

// Playback Speed (Faster)
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate = video.playbackRate / .95;
	console.log("New speed is "+video.playbackRate)
});

// Volume Slider
document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing Volume");
	console.log(this.value)
	video.volume = this.value /100;
	document.querySelector("#volume").innerHTML=video.volume *100 +"%"
});

// Old School
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS");
	video.classList.add("oldSchool")
});

// Modern
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Remving CSS");
	video.classList.remove("oldSchool")
});

// Mute/Unmute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		console.log("Unmuted");
		document.querySelector("#mute").innerHTML="Mute";
		video.muted = false;
	}
	else if (video.muted ==false) {
		console.log("Muted");
		video.muted = true;
		document.querySelector("#mute").innerHTML="Unmute";
	}
});

// Skip ahead 15 sec
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime+= 15
	console.log(video.currentTime)
	if (video.currentTime>= video.duration) {
		video.currentTime=0
		video.play()
	}
	console.log(video.currentTime)

});