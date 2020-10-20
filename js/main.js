function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://devjr.netlify.app/?utm_campaign=cadastro_campinas_tech_talents_1_fase&utm_medium=email&utm_source=RD+Station#ourcourses/");
    window.location.href = "https://devjr.netlify.app/?utm_campaign=cadastro_campinas_tech_talents_1_fase&utm_medium=email&utm_source=RD+Station#ourcourses";
}

function trocar(elemento){
    elemento.innerHTML = "Falei para não passar o mouse XD";
    //document.getElementById("mousemove").innerHTML = "Não passe o mouse aqui";
    //alert("trocar texto");
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)

}







/*
function soma(n1, n2){
    return n1 + n2;
}


var validar = 0;

function validaIdade(idade){
    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}


var idade = prompt("Qual sua idade?");
validaIdade(idade)
console.log(validar);
*/




/*
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var d = new Date();
alert(d.getHours());
alert(d.getMinutes());
*/


/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/


/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/


/*
var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/



/*
var frutas = [{nome: "maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);


var fruta = {nome: "maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/



//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop("laranja");
//console.log(lista.length);



//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" / "))



//var nome="Rosie Botelho";
//var idade= 27;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert( nome + " tem " + idade + " anos " );
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
