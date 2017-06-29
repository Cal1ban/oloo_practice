//for saving - create maps in excel, save as tab seperated value (TSV), then access from local folder on initial load

//save changes to this .tsv (or .txt or whatever) in Local Storage, using the local storage API

//On load check if there is a save in Local Storage. If there is, use that map data. Otherwise, load locally.



var initialiseGame = function(){
var CurrentRoom = save.room || FirstRoom

mainLoop();
}

function mainLoop(){
getInput();
calculateState();
requestImage();
requestAudio();
}


var getInput = function(){
  get user input
  parse input
  publish to eventbus
}

var calculateState = function(){
    check eventbus
    run events
    etc.
}

// use pubsub pattern here

var requestImage = function(){
  get current image
  store current image
  render current images
}

var requestAudio = function(){
  get current audio
  store current audio
  render current audio
}
