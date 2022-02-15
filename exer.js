//  function run(){
//     var x = document.getElementById("input_word").value;

 
//     let sorted = () => (x)
//     .split("")
//     .sort()
//     .join("");


//     document.getElementById("output").innerHTML = sorted(x); 
 
//   }


function myFunc(){
  var a = document.getElementById("input_word").value;

  let sorted = () => (a)
  .split("")
  .sort()
  .join("");

  document.getElementById("output").innerHTML = sorted(a);

}