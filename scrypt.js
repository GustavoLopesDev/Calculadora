function number (num){
    const resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultado + num;
}
function clean(){
  document.getElementById('result').innerHTML = "";
}
function back(){
    const apagar = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = apagar.substring(0, apagar.length -1)
}
function calcule(){
    const resultado = document.getElementById('result').innerHTML;
    if(resultado){
       document.getElementById('result').innerHTML = eval(resultado);
    }
}
