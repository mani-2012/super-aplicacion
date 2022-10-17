var SpeechRecognition=window.webkitSpeechRecognition;
var consola=new SpeechRecognition();
function future(){
    document.getElementById("flor").innerHTML="";
    consola.start();

}
consola.onresult=function(avion){
    console.log(avion);
    elfin=avion.results[0][0].transcript;
    document.getElementById("flor").innerHTML=elfin;
    if (elfin=="Toma mi foto"){
        perfil();
    }
    }
    function perfil(){
        var tijeras=window.speechSynthesis;
        sony="toma tu foto en 3, 2, 1,";
        var musica=new SpeechSynthesisUtterance(sony);
        tijeras.speak(musica);
        Webcam.attach(camara);
        setTimeout(function(){
            lapiz();
            mouse();
        },4000);
    }
    Webcam.set({
        height:250,
        width:360,
        image_format:'png',
        png_quality:90
    });
    camara=document.getElementById("camara");
    function lapiz(){
        Webcam.snap(function(tu_mejor_foto){
            document.getElementById("foto").innerHTML='<img id="papel" src="'+tu_mejor_foto+'">';

        })
    }
    function mouse(){
        carga=document.getElementById("only");
        guardada=document.getElementById("papel").src;
        carga.href=guardada;
        carga.click();    
    }