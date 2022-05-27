function saludo(){
    alert("HOLA MUNDO ESTO ES JS")
}

function suma(){
    var A;
    var B;
    var SUMA;

    alert("ESTE SISTEMA REALIZA UNA SUMA CON DOS VALORES INGRESADOS POR EL USUARIO")

    A = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
    B = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"));

    SUMA = A + B;

    alert("EL RESULTADO DE LA SUMA ES: " + SUMA)
}

function operaciones(){
    var a;
    var b;
    var c;
    var d;
    var e;
    var f;

    alert("ESTE SISTEMA REALIZA LA SUMA, RESTA, MULTIPLICACION Y DIVISION DE DOS VALORES INGRESADOS POR EL USUARIO")

    a = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
    b = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"));

    c = a + b;
    d = a - b;
    e = a * b;
    f = a / b;

    alert("EL RESULTADO DE LA SUMA ES: " + c)
    alert("EL RESULTADO DE LA RESTA ES: " + d)
    alert("EL RESULTADO DE LA MULTIPLICACION ES: " + e)
    alert("EL RESULTADO DE LA DIVISION ES: " + f)
    }

function numeroMayor(){
    var a;
    var b;

    alert("ESTE SISTEMA DETERMINARA CUAL ES EL MAYOR DE DOS VALORES INGRESADOS POR EL USUARIO")

    a = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
    b = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"));



    if (a >= b){
    alert("EL NUMERO MAYOR ES: " + a)
    }else
    alert("EL NUMERO MAYOR ES: " + b)
    }

function numeroMenor(){
    var a;
    var b;
    var c;
    var menor;

    alert("ESTE SISTEMA DETERMINARA EL MENOR DE TRES NUMEROS INGRESADOS POR EL USUARIO")

    a = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
    b = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"));
    c = parseInt(prompt("POR FAVOR INGRESE EL TERCER VALOR"));

    if (a<=b && a<=c){
        menor= a;

    }else if (b<=a && b<=c) {
        menor= b;

    }else{
        menor= c;

    }
    alert("EL NUMERO MENOR ES: " + menor)
    }

function numeroPar(){
    var a;

    alert("ESTE SISTEMA DETERMINARA SI UN NUMERO ES PAR O IMPAR")

    a = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));

    if (a%2==0){
        alert("EL NUMERO ES PAR")

    }else
        alert("EL NUMERO ES IMPAR")
    }
function cuadrado(){
    var a;
    var b;

    alert("ESTE SISTEMA LE AYUDARA A SABER EL CUADRADO DE UN NUMERO INGRESADO POR EL USUARIO")

    a = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));


    b = (a * a)

    alert("EL CUADRADO DEL NUMERO INGRESADO ES: " + b);
    }

function area(){
    var a;
    var b;
    var c;

    alert("ESTE SISTEMA DETERMINARA EL AREA DE UN TRIANGULO")

    a = parseInt(prompt("POR FAVOR INGRESE LA BASE DEL TRIANGULO"));
    b = parseInt(prompt("POR FAVOR INGRESE LA ALTURA DEL TRIANGULO"));

    c = ((a * b) / 2)

    alert("EL AREA DEL TRIANGULO ES: " + c);
}

function centimetros(){
    var a;
    var b;

    alert("ESTE SISTEMA DETERMINARA LOS CENTIMETROS QUE HAY EN UNA CANTIDAD DE METROS DADA POR EL USUARIO")

    a = parseInt(prompt("POR FAVOR INGRESE LA CANTIDAD EN METROS"));

    b = (a * 100)

    alert("LA CANTIDAD DE CENTIMETROS ES: " + b);
    }

function edad(){
    var a;
    var b;

    alert("ESTE SISTEMA DETERMINARA EL AÑO DE NACIMIENTO DE UN USUARIO INGRESANDO SU EDAD")

    a = parseInt(prompt("POR FAVOR INGRESE SU EDAD"));

    b = (2022 - a)

    alert("EL USUARIO NACIO EN EL AÑO: " + b);
}

function ganancias(){
    var c;
    var a;
    var g;
    var ga;
    var gt;

    alert("ESTE SISTEMA CALCULARA LAS GANANCIAS DE UNA INVERSION HECHA POR EL USUARIO")

    c = parseInt(prompt("POR FAVOR INGRESE EL CAPITAL A INVERTIR"));
    b = parseInt(prompt("POR FAVOR INGRESE EL NUMERO DE AÑOS"));

    ga = ((c * 0.023) * 12)
    g = (ga * a)
    gt = (c + g)

    alert("LA CANTIDAD A GANAR ES DE: " + g);
    alert("LA SUMA DE LAS GANANCIAS Y EL CAPITAL INVERTIDO ES DE: " + gt);
}

function promedio(){
    var nom;
    var n1;
    var n2;
    var n3;
    var n4;
    var n5;
    var n6;
    var n7;
    var p;

    alert("ESTE SISTEMA LE AYUDARA A SABER EL PROMEDIO DE UN ALUMNO Y SI ESTE APROBO O NO LA MATERIA DE INGLES")

    nom = parseInt(prompt("POR FAVOR INGRESE EL NOMBRE DEL ALUMNO"));
    n1 = parseInt(prompt("POR FAVOR INGRESE LA PRIMERA CALIFICACION"));
    n2 = parseInt(prompt("POR FAVOR INGRESE LA SEGUNDA CALIFICACION"));
    n3 = parseInt(prompt("POR FAVOR INGRESE LA TERCERA CALIFICACION"));
    n4 = parseInt(prompt("POR FAVOR INGRESE LA CUARTA CALIFICACION"));
    n5 = parseInt(prompt("POR FAVOR INGRESE LA QUINTA CALIFICACION"));
    n6 = parseInt(prompt("POR FAVOR INGRESE LA SEXTA CALIFICACION"));
    n7 = parseInt(prompt("POR FAVOR INGRESE LA SEPTIMA CALIFICACION"));

    p = ((n1 + n2 + n3 + n4 + n5 + n6 + n7) / 7)

    if (p <= 6.2) {

        alert("EL ALUMNO REPROBO CON: " + p);
        
    }else 
        alert("EL ALUMNO APROBO CON: " + p);
}

function manzanas(){
    var k;
    var p;
    var d;
    var pt;

    alert("ESTE SISTEMA CALCULARA EL TOTAL DE SU COMPRA Y APLICARA UN DESCUENTO SEGUN CORRESPONDA")

    k = parseInt(prompt("POR FAVOR INGRESE LA CANTIDAD DE KILOS DE MANZANA QUE DESEA COMPRAR"));

    p = (k *4500)

    if (k<=2 ){
        d = 0;

    }else if (k<=5) {
        d = (p * 0.10);

    }else if (k<=10) {
        d = (p * 0.15);

    }else if (k>10) {
        d = (p * 0.20);
    }
    pt = (p - d)
    alert("EL VALOR BASE DE SU COMPRA ES DE: " + p)
    alert("EL DESCUENTO APLICADO ES DE: " + d)
    alert("EL TOTAL A PAGAR ES DE: " + pt);
}