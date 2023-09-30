let canvas;
let ctx;
let buro = {}

function loadFile(evt) {
    let file    = evt.target.files[0];
    let imgData = URL.createObjectURL(file);
    let img = new Image();
    img.onload = () => {
        if (img.naturalWidth != 1920 || img.naturalHeight != 1080) {
            alert("Les images doivent avoir une définition de 1920x1080")
        }
        else {
            canvas.style.backgroundImage = "url(" + imgData + ")";
            buro={name:"", areas:[]};        
        }
    }
    img.onerror = () => {
        alert("impossible de charger l'image"); 
    }
    img.src = imgData;
 }



 window.onload = () => {
    canvas = document.getElementById("main");
    ctx = canvas.getContext("2d");
 
    document.getElementById("file").onchange = loadFile;
    console.log("Init terminé");
}

