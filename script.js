let daialog = document.getElementById("daialog");

let submit = document.getElementById("submit");
let text = document.getElementById("text");

let htmlString = "<div></div>"
let test = ()=>{
  daialog.style.display="block";
  let pass = document.getElementById("pass").value;
if (pass< 2000){
  for (let i = 1; i <= pass; i++) {

    htmlString += `<div><h1>بحبك يا وردة.${i}<h1></div>`


   }
 text.innerHTML=htmlString;

}else{
  htmlString += `<div><h1>انا عارف انك هتعملي الحركة دي التاب هيهنج<h1></div>`

  text.innerHTML=htmlString;

}
}
submit.addEventListener("click",test);
