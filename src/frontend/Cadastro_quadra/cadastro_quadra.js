window.onload = () =>{
    //Campo CEP
    var tecla;
    let campoCEP = document.getElementById("campoCEP");
    let msgCEP = document.getElementById("msgCEP");
    campoCEP.addEventListener("input", ()=>{
        if(campoCEP.value.length>8){
            let inputText = campoCEP.value;
            campoCEP.value = inputText.substring(0,inputText.length-1);
            msgCEP.style.display = "";
        }
        else{
            msgCEP.style.display = "none";
        }
    })
  /**************************************************/

  //Campo Checkboxes
  var checkBoxes = document.querySelectorAll(".form-check-input");
  let btnConfirmar = document.getElementById("botaoConfirmar")
  var passou=-1;
  var passados=[];
  btnConfirmar.addEventListener("click", ()=>{
    checkBoxes.forEach(function(el) {
        passou = passou+1;
        console.log("passou")
        if(el.checked) {
            passados.push(passou);
        }
        });
      console.log(passados);
    
    
  })
  





}