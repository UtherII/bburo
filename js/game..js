console.log("Démarrage de BBURO...");

let editorMode = true;
let currentLevel = 0;
let levels = [];

function startup() {
  
}

function changeLevel(){
  if (editorMode) {
    let level = document.getElementById("lvl-selector").value;
    loadLevel(level)
  }
}