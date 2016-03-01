navigator.webkitGetUserMedia =
  navigator.webkitGetUserMedia ||
  navigator.getUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia ||
  navigator.oGetUserMedia;


var julius = undefined;
var running = false;
var state = document.getElementById("juliusState");
var button = document.getElementById("juliusControlButton");
var output = document.getElementById("juliusOutput");

if(!navigator.webkitGetUserMedia)
    console.log("Err: not supported");
else
{
    julius = new Julius("juliusjs/dist/voxforge/sample.dfa","juliusjs/dist/voxforge/sample.dict",
                        {pathToWorker:"lib/juliusjs/dist/worker.js", transfer:true /*echo effect*/});

    julius.audio.context.onstatechange = function()
    {
      state.textContent= julius.audio.context.state;
    }

    julius.onrecognition = function(transcript)
  	{
      output.textContent = transcript;
	  }

    button.onclick= function()
    {
        console.log(julius)
        if(running)
          julius.audio.context.resume();
        else
          julius.audio.context.suspend();
        running= !running;
    }
}
