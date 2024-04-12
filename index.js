const display=document.getElementById("display");
// let btns = document.querySelectorAll("button");
// let buttonArray = Array.from(btns);

function taptodisplay(inp){
    display.value +=inp;
}
function cleardisplay(){
    display.value ="";
}
function calculate(){
  try{
    display.value= eval(display.value);
    console.log(display.value)
  }
  catch(err)
  {
    console.log(err);
    display.value="error";

  }
}
function changetheam(){
 
    document.getElementById("calculator").style.backgroundColor="blue";
  
}
const togle=document.getElementById("togle");
const body= document.getElementById("body");
 
 
togle.onclick=function () {
  togle.classList.toggle('active');
  body.classList.toggle('active');
  
}
