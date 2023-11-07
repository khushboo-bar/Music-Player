let progress = document.getElementById("progress");
let song = document.getElementById("song");
let playBtn = document.getElementById("play");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(playBtn.classList.contains("fa-pause")){
        song.pause();
        playBtn.classList.remove("fa-pause");
        playBtn.classList.add("fa-play");
    }

    else{
        song.play();
        playBtn.classList.add("fa-pause");
        playBtn.classList.remove("fa-play");
    }
}
if(song.play){
    setInterval(() => {
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    playBtn.classList.add("fa-pause");
    playBtn.classList.remove("fa-play");
}