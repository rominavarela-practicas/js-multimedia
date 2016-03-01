
// init
var video = document.getElementById("imageCaptureVideo");
var button = document.getElementById("imageCaptureButton");
var canvas = document.getElementById("imageCaptureCanvas");

var conf = { "video": true },
    errBack = function(error) {
      console.log("Video capture error: ", error.code);
    };

navigator._getUserMedia= navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
window._URL = window.URL || window.webkitURL;

if(navigator._getUserMedia && window._URL)
{
    navigator._getUserMedia(conf, function(stream){
        video.src = window._URL.createObjectURL(stream);
        video.play();
    }, errBack);

    button.onclick= function()
    {
        console.log("hello");
        canvas.getContext("2d").drawImage(video, 0, 0, 640, 480);

        /*
        // canvas to image
        var image = new Image();
      	image.src = canvas.toDataURL("image/png");
      	return image;
        */
    }
}
else
  console.log("Err: not supported");
