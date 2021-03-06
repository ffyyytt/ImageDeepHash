var el = x => document.getElementById(x);
var detectBtn = document.querySelector("#analyze-button");
var upload1 = null;
var upload2 = null;

function showPicker() {
  $("#file-input").click();
}

function showPicker2() {
  $("#file-input2").click();
}

function clear() {
  $('#image-display').empty(); // removes upload img
  $('#upload-label').empty(); //removes upload img's filename
  $('#result-content').remove();   //remove result div (image + labels ...)
  upload1 = null;
}

function clear2() {
  $('#image-display2').empty();
  $('#upload-label2').empty(); 
  $('#result-content').remove();
  upload2 = null;
}

// Upload image
function showPicked(input) {
  console.log('Click 1');
  var extension = input.files[0].name.split(".")[1].toLowerCase();
  var reader = new FileReader();

  reader.onload = function(e) {
    clear();
    el("upload-label").innerHTML = input.files[0].name;
    var file_url = e.target.result

    if(extension === "jpg" || extension === "jpeg" || extension === "png"){
      var img_html = '<img id="upload-image" src="' + file_url + '" style="display: block;margin-left: auto;margin-right: auto;width: 600px; height: 480px"/>';
      $('#image-display').html(img_html); // replaces previous img
    }  
    upload1 = true;

  };

  if (upload1 !== true && upload2 === true){
    detectBtn.removeAttribute("disabled");
  }
  reader.readAsDataURL(input.files[0]);
}

function showPicked2(input) {
  console.log('Click 2');
  var extension = input.files[0].name.split(".")[1].toLowerCase();
  var reader = new FileReader();

  reader.onload = function(e) {
    clear2();
    el("upload-label2").innerHTML = input.files[0].name;
    var file_url = e.target.result

    if(extension === "jpg" || extension === "jpeg" || extension === "png"){
      var img_html = '<img id="upload-image2" src="' + file_url + '" style="display: block;margin-left: auto;margin-right: auto;width: 600px; height: 480px"/>';
      $('#image-display2').html(img_html); // replaces previous img
    }  
    upload2 = true;

  };
  
  if (upload1 === true && upload2 !== true){
    detectBtn.removeAttribute("disabled");
  }

  reader.readAsDataURL(input.files[0]);
}