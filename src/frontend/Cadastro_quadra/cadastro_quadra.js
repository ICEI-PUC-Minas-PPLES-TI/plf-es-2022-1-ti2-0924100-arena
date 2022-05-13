var diaSemana="";
var controleDia= 0;
var arreyDias= [];
function calendar(mois){

        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getYear();
    
        if(year<=200)
        {
                year += 1900;
        }
        months = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez');
        days_in_month = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    
        var moisaujorduiu = month;
    
        month = mois;
    
        //ano bissesto, muda dia fevereiro
        if(year%4 == 0 && year!=1900)
        {
                days_in_month[1]=29;
        }
    
    
        total = days_in_month[month]; //days month
    
        var date_today = day+' '+months[month]+' '+year;//22 ouctober 2014
    
        beg_j = date; //today date
    
        if(month > 0) { 
            soma = 0;
            for(var m=0; m<month; m++) {
                soma += days_in_month[m];
            }
            beg_j.setDate(soma+1);
        }
        else {
            beg_j.setDate(1);
        }
    
    
        if(beg_j.getDate()==2) //1
        {
                beg_j=setDate(0);
        }
        beg_j = beg_j.getDay();
    
        document.write('<table class="cal_calendar"><tr><th colspan="7">'+months[mois]+' '+year+'</th></tr><br>');
        document.write('<tr class="cal_d_weeks"><th>D</th><th>S</th><th>T</th><th>Q</th><th>Q</th><th>S</th><th>S</th></tr><tr>'); 
        week = 0;
    
        for(i=1;i<=beg_j;i++)
        {
                var beforemonth = months[month-1]; 
    
               
                week++;
        }
        for(i=-5;i<=total;i++)
        {       
                if(i>0){
                        if(controleDia % 7 == 0){
                                diaSemana = "sab";
                                console.log(diaSemana);
                        }
                        if(controleDia % 7 == 1){
                                diaSemana = "dom";
                                console.log(diaSemana);
                        }
                        if(controleDia % 7 == 2){
                                diaSemana = "seg";
                                console.log(diaSemana);
                        }
                        if(controleDia % 7 == 3){
                                diaSemana = "ter";
                                console.log(diaSemana);
                        }
                        if(controleDia % 7 == 4){
                                diaSemana = "qua";
                                console.log(diaSemana);
                        }
                        if(controleDia % 7 == 5){
                                diaSemana = "qui";
                                console.log(diaSemana);
                        }
                        if(controleDia % 7 == 6){
                                diaSemana = "sex";
                                console.log(diaSemana);
                        }
                        
                }
                else{
                        diaSemana="";
                }
                if(i<1){
                        if(week==0)
                {
                    
                }
    
                if(day==i && moisaujorduiu==month) //si le jour = le jour de aujordhui est si le mois = mois aujordui 
                {
                        
                    
                }
                //les autre jours
                else
                {
                        
                    document.write("<td class= '' ><div class ='divday " +diaSemana+ "' onclick='open_popup(\""+i+" "+months[month]+"\")' href='#'>"+" " +"</div></td>");
                }
                week++;
                if(week==7)
                {
                        document.write('</tr>');
                        week=0;
                }
                }else{
                if(week==0)
                {
                        document.write("<tr class ='linha'>");
                }
    
                if(day==i && moisaujorduiu==month) //si le jour = le jour de aujordhui est si le mois = mois aujordui 
                {
    
                    document.write("<td class= 'linhas' ><b><div class ='divtoday " +diaSemana+ "' onclick='open_popup(\""+i+" "+months[month]+"\")' href='#'>"+i+"</div><b></td>"); //day of today

                }
                //les autre jours
                else
                {
    
                    document.write("<td class= 'linhas' ><div class ='divday " +diaSemana+"' id='"+i+months[month]+ "" + "' onclick='open_popup(\""+i+" "+months[month]+"\")' href='#'>"+i+"</div></td>");
                }
                week++;
                if(week==7)
                {
                        document.write('</tr>');
                        week=0;
                }}
                if(i>0){
                        controleDia= controleDia+1;
                        
                }
                
        }
    
            //pour les jour du prochain mois
    
             for(i=1;week!=0;i++)
            {
                    var nextmonth = months[month+1];
                    document.write('<td class= "linhas"><div class ="divday">'+" "+'</td>');
                    week++;
                    if(week==7)
                    {
                            document.write('</tr>');
                            week=0;
                    }
            }
        document.write('</table>');
    }
    function open_popup(stringClasse){
        stringClasse = stringClasse.split(" ").join("");
        let classeQueDesejoAlterar = document.getElementById(stringClasse);
        console.log(stringClasse)
        classeQueDesejoAlterar.style.background = '#990847';
    }
    function sabado(){
            var classDia = document.querySelectorAll(".sab");
            for(let i=0; i<classDia.length; i++){
                document.getElementsByClassName("sab")[i].style.background = "#990847";
            }
    }
    function segunda(){
        var classDia = document.querySelectorAll(".seg");
        for(let i=0; i<classDia.length; i++){
            document.getElementsByClassName("seg")[i].style.background = "#990847";
        }
}
function terca(){
        var classDia = document.querySelectorAll(".ter");
        for(let i=0; i<classDia.length; i++){
            document.getElementsByClassName("ter")[i].style.background = "#990847";
        }
}
function quarta(){
        var classDia = document.querySelectorAll(".qua");
        for(let i=0; i<classDia.length; i++){
            document.getElementsByClassName("qua")[i].style.background = "#990847";
        }
}
function quinta(){
        var classDia = document.querySelectorAll(".qui");
        for(let i=0; i<classDia.length; i++){
            document.getElementsByClassName("qui")[i].style.background = "#990847";
        }
}
function sexta(){
        var classDia = document.querySelectorAll(".sex");
        for(let i=0; i<classDia.length; i++){
            document.getElementsByClassName("sex")[i].style.background = "#990847";
        }
}
function domingo(){
        var classDia = document.querySelectorAll(".dom");
        for(let i=0; i<classDia.length; i++){
            document.getElementsByClassName("dom")[i].style.background = "#990847";
        }
}






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
