function fAffiche(){
  var nb1 = document.getElementById("firstNumber").value;
  var nb2 = document.getElementById("secondNumber").value;
  if((nb1 == '' || nb2 == '') || (isNaN(nb1) || isNaN(nb2))){
      alert('saisir un nombre');
  }
    else{
      var result = parseFloat(nb1) % parseFloat(nb2);
      alert(result);
    }
  }
document.getElementById('submit').addEventListener("click",fAffiche);
