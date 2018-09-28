function loadFurniture (furniture, id) {
  return io3d.furniture.get(id).then(function (result) {
    furniture.set(result.data3d)
  })
}

var renderer = new THREE.WebGLRenderer()
var scene = new THREE.Scene()
var cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)

var furniture = new io3d.aFrame.three.Data3dView({parent: scene})
loadFurniture(furniture, '79ffe149-df05-41c3-888a-24f9b785f1a8')

//document.body.appendChild(renderer.domElement)

requestAnimationFrame(function render() {
  renderer.render(scene, cam)
  requestAnimationFrame(render)
})
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
function changeVolumeGuitar(){
     var currentVolume= document.getElementById("guitar").getAttribute("sound", "volume")
     console.log(currentVolume.volume)
     if (currentVolume.volume == 20){
        document.getElementById("guitar").setAttribute("sound","volume","0")}
    else{
        document.getElementById("guitar").setAttribute("sound","volume","20")
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
function changeVolumeHorseLamp(){
     var currentVolume= document.getElementById("horseLamp").getAttribute("sound", "volume")
     console.log(currentVolume.volume)
     if (currentVolume.volume == 20){
        document.getElementById("horseLamp").setAttribute("sound","volume","0")}
    else{
        document.getElementById("horseLamp").setAttribute("sound","volume","20")
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
function changeVolumeTelevision(){
    console.log("Im in the tv!!!!")
     var currentVolume= document.getElementById("television").getAttribute("sound", "volume")
     console.log(currentVolume.volume)
     if (currentVolume.volume == 10){
        document.getElementById("television").setAttribute("sound","volume","0")}
    else{
        document.getElementById("television").setAttribute("sound","volume","10")
    }
}
// function clicked() {
//     console.log('i was clicked!!')
// }