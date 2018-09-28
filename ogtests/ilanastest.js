const SCENE = document.querySelector('a-scene')
function changeVolumeComputer(){
     var currentVolume= document.getElementById("computer").getAttribute("sound", "volume")
     console.log(currentVolume.volume)
     if (currentVolume.volume == 10){
        document.getElementById("computer").setAttribute("sound","volume","0")}
    else{
        document.getElementById("computer").setAttribute("sound","volume","10")
    }
}
function changeVolumeRecordPlayer(){
     var currentVolume= document.getElementById("recordPlayer").getAttribute("sound", "volume")
     console.log(currentVolume.volume)
     if (currentVolume.volume == 10){
        document.getElementById("recordPlayer").setAttribute("sound","volume","0")}
    else{
        document.getElementById("recordPlayer").setAttribute("sound","volume","10")
    }
}
function changeVolumeGuitar(){
     var currentVolume= document.getElementById("guitar").getAttribute("sound", "volume")
     console.log(currentVolume.volume)
     if (currentVolume.volume == 10){
        document.getElementById("guitar").setAttribute("sound","volume","0")}
    else{
        document.getElementById("guitar").setAttribute("sound","volume","10")
    }
}
function changeVolumeTelevision(){
     var currentVolume= document.getElementById("television").getAttribute("sound", "volume")
     console.log(currentVolume.volume)
     if (currentVolume.volume == 10){
        document.getElementById("television").setAttribute("sound","volume","0")}
    else{
        document.getElementById("television").setAttribute("sound","volume","10")
    }
}
function changeVolumePiano(){
     var currentVolume= document.getElementById("piano").getAttribute("sound", "volume")
     console.log(currentVolume.volume)
     if (currentVolume.volume == 10){
        document.getElementById("piano").setAttribute("sound","volume","0")}
    else{
        document.getElementById("piano").setAttribute("sound","volume","10")
    }
}




