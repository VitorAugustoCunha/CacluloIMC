function calcularIMC(){
    let alturaInput = document.getElementById("alturaInput").value;
    let pesoInput = document.getElementById("pesoInput").value;
    let calculo = pesoInput/(alturaInput*alturaInput);
    let divA = document.getElementById("dentro");
        if(calculo < 18.5){
            divA.className = "alert alert-danger"
            document.getElementById("dentro").innerHTML = "Seu IMC é " + calculo + "<br>Classificação: Abaixo do peso";    
        }
        else if(calculo >= 18.6 & calculo <= 24.9){
            divA.className = "alert alert-success"
            document.getElementById("dentro").innerHTML = "Seu IMC é " + calculo + "<br>Classificação: Peso ideal";    
        }
        else if(calculo > 25 & calculo < 29.9){
            divA.className = "alert alert-warning"
            document.getElementById("dentro").innerHTML = "Seu IMC é " + calculo + "<br>Classificação: Levemente acima do pes";    
        }
        else if(calculo > 30 & calculo < 34.9){
            divA.className = "alert alert-danger"
            document.getElementById("dentro").innerHTML = "Seu IMC é " + calculo + "<br>Classificação: Obesidade grau I";    
        }
        else if(calculo > 35 & calculo < 39.9){
            divA.className = "alert alert-danger"
            document.getElementById("dentro").innerHTML = "Seu IMC é " + calculo + "<br>Classificação: Obesidade grau II (severa)";    
        }
        else if(calculo > 40){
            divA.className = "alert alert-danger"
            document.getElementById("dentro").innerHTML = "Seu IMC é " + calculo + "<br>Classificação: Obesidade grau III (mórbida)";    
        }
}
function limpar(){
    let divA = document.getElementById("dentro");
    let alturaInput = document.getElementById("alturaInput").value = null;
    let pesoInput = document.getElementById("pesoInput").value = null;
    divA.className = "hide"
}