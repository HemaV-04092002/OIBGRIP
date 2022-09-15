function Temp() {
    function celToFah(c) {
        if(!isNaN(c)){
       var f = Math.round((c * (9/5)) + 32);
       return f;
        }
    }
 
    function fahToCel(f) {
        if(!isNaN(f)){
       var c = Math.round((f - 32) * (5/9));
       return c;
        }
    }
 
    
    var sel = document.getElementById("temp");
    var value = sel.options[sel.selectedIndex].value;
 
   
    var numberT = document.getElementById("t").value;
 
    var result;
    
    if (value == 1) {
       result = celToFah(numberT);
       document.getElementById("result").innerHTML =  result + " "+ "Fahrenheit";
    } else {
       result = fahToCel(numberT);
       document.getElementById("result").innerHTML =  result +" "+ "Celsius";
    }
    
 }