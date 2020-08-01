//quiz variables
var questionCount = 0;
var S = 0;
var W = 0;
var D = 0;
var F = 0;



//disable radio buttons for each choice after selection and add to score
document.getElementById("q1W").onclick = function(){
  disableq1()
  W += 1;
  questionCount += 1;
  if (questionCount == 4){
  updateResult();
  }
}
document.getElementById("q1S").onclick = function(){
  disableq1()
  S += 1;
  questionCount += 1;
  if (questionCount == 4){
  updateResult();
  }
}
document.getElementById("q1F").onclick = function(){
  disableq1()
  F += 1;
  questionCount += 1;
  if (questionCount == 4){
  updateResult();
  }
}
document.getElementById("q1D").onclick = function(){
  disableq1()
  D += 1;
  questionCount += 1;
  if (questionCount == 4){
  updateResult();
  }
}

function disableq1(){
  document.getElementById("q1S").disabled=true;
  document.getElementById("q1W").disabled=true;
  document.getElementById("q1F").disabled=true;
  document.getElementById("q1D").disabled=true;
}

document.getElementById("q2W").onclick = function(){
  disableq2()
  W += 1;
  questionCount += 1;
  if (questionCount == 4){
  updateResult();
  }
}
document.getElementById("q2S").onclick = function(){
  disableq2()
  S += 1;
  questionCount += 1;
  if (questionCount == 4){
  updateResult();
  }
}
document.getElementById("q2F").onclick = function(){
  disableq2()
  F += 1;
  questionCount += 1;
  if (questionCount == 4){
  updateResult();
  }
}
document.getElementById("q2D").onclick = function(){
  disableq2()
  D += 1;
  questionCount += 1;
  if (questionCount == 4){
  updateResult();
  }
}

function disableq2(){
  document.getElementById("q2S").disabled=true;
  document.getElementById("q2W").disabled=true;
  document.getElementById("q2F").disabled=true;
  document.getElementById("q2D").disabled=true;
}

document.getElementById("q3W").onclick = function(){
  disableq3()
  W += 1;
  questionCount += 1;
  if (questionCount == 4){
  updateResult();
  }
}
document.getElementById("q3S").onclick = function(){
  disableq3()
  S += 1;
  questionCount += 1;
  if (questionCount == 4){
  updateResult();
  }
}
document.getElementById("q3F").onclick = function(){
  disableq3()
  F += 1;
  questionCount += 1;
  if (questionCount == 4){
  updateResult();
  }
}
document.getElementById("q3D").onclick = function(){
  disableq3()
  D += 1;
  questionCount += 1;
  if (questionCount == 4){
  updateResult();
  }
}

function disableq3(){
  document.getElementById("q3S").disabled=true;
  document.getElementById("q3W").disabled=true;
  document.getElementById("q3F").disabled=true;
  document.getElementById("q3D").disabled=true;
}

document.getElementById("q4W").onclick = function(){
  disableq4()
  W += 1;
  questionCount += 1;
  if (questionCount == 4){
  updateResult();
  }
}
document.getElementById("q4S").onclick = function(){
  disableq4()
  S += 1;
  questionCount += 1;
  if (questionCount == 4){
  updateResult();
  }
}
document.getElementById("q4F").onclick = function(){
  disableq4()
  F += 1;
  questionCount += 1;
  if (questionCount == 4){
  updateResult();
  }
}
document.getElementById("q4D").onclick = function(){
  disableq4()
  D += 1;
  questionCount += 1;
  if (questionCount == 4){
  updateResult();
  }
}

function disableq4(){
  document.getElementById("q4S").disabled=true;
  document.getElementById("q4W").disabled=true;
  document.getElementById("q4F").disabled=true;
  document.getElementById("q4D").disabled=true;
}

//calculate the result
var result = document.getElementById("resultdestination");
var resultimage = document.getElementById("resultimage");

function updateResult(){
  if (S > 2){
    result.innerHTML += "Maui, Hawaii";
    resultimage.setAttribute("src", "https://i.imgur.com/InZ31Th.jpg");
  }
  else if (W > 2){
    result.innerHTML += "Jasper National Park, Alberta, CA";
    resultimage.setAttribute("src", "https://i.imgur.com/LJbzCOi.jpg");
  }
  else if (F > 2){
    result.innerHTML += "Grand Canyon National Park, Arizona";
    resultimage.setAttribute("src", "https://i.imgur.com/gCZFUCh.jpg");
  }
  else if (D > 2){
    result.innerHTML += "Atlantis, Bahamas";
    resultimage.setAttribute("src", "https://i.imgur.com/f7Zvftg.jpg");
  }
  else if (S == 2){
    result.innerHTML += "Oahu, Hawaii";
    resultimage.setAttribute("src", "https://i.imgur.com/GZt8tYf.jpg");
  }
  else if (W == 2){
    result.innerHTML += "Quebec City, Quebec, CA";
    resultimage.setAttribute("src", "https://i.imgur.com/32pxSOf.jpg");
  }
  else if (D == 2){
    result.innerHTML += "Yosemite National Park, California";
    resultimage.setAttribute("src", "https://i.imgur.com/lK33ZTy.png");
  }
  else if (F == 2){
    result.innerHTML += "San Francisco, California";
    resultimage.setAttribute("src", "https://i.imgur.com/e8h34JC.jpg");
  }
  else{
    result.innerHTML += "Los Angeles, California";
    resultimage.setAttribute("src", "https://i.imgur.com/6p0FZvf.jpg");
  }
}

