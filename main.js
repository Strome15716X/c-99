var SpeechRecognition=window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();


function start()

{
    document.getElementById("textbox").innerHTML = "";
    recognition.start()
}
recognition.oneresult = function(event){

    var content= event.results[0][0].transcript;
    document.getElementById("textbbox").innerHTML= Content;
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data= document.getElementById("textbox").Value
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width:360,
    height:250,
    img_format:'png',
    png_quality:90
});
camera=document.getElementById("camera")