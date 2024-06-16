function hello() {
    //Instrucciones
    console.log("hello");
}

var motivate = function() { 
    console.log("Just do it"); 
};

var esPar = (x) => {
    return x % 2 == 0;
};

var saludar = (nombre = "Néstor") => {
    console.log(`Hola ${nombre}, que guapo eres!`);
};

var pass = (x) => {
    console.log("EJECUNTANDO X");
    x();
};

let triangulo =  function(n = 5)    {
    let cadena = '';
    for(let i = 0 ; i < n ;i++){
        cadena += "*";
        console.log(cadena);
    }
};

let triangulo2 =  function(n = 5)    {
    for(let i = 1 ; i <= n ;i++){
        console.log("*".repeat(i));
    }
};


let triangulo3 =  function(n = 5)    {
    
    for(let i = 1 ; i <= n ;i++){
        var cadAux = "";
        for(let j = 1; j <= i ; j++){
            cadAux += "*";
        }
        console.log(cadAux);
    }
};

let semiRombo =  function(n = 5)    {
    let cadena = '';
    for(let i = 0 ; i < n ;i++){
        cadena += "*";
        console.log(cadena);
    }

    for(let i = n -1 ; i >= 0 ;i--){
        cadena = cadena.substr(0,i);
        console.log(cadena);
    }
};




var fizzBuxx = (arrg) => {
    for(let i = 0; i < arrg.length ; i++){
        if( arrg[i] % 5 == 0 && arrg[i] % 3 == 0 ){
            console.log("FizzBuzz");
        }else if(arrg[i] % 5 == 0 ){
            console.log("Buzz");
        }else if(arrg[i] % 3 == 0 ) {
            console.log("Fizz");
        } else {
            console.log(arrg[i]);
        }
    }
};

var juan = (x) => {
    var  _str = ((x % 3 == 0) ? "Fizz": "") + ((x % 5 == 0) ? "Buzz": "") + (( x% 3 == 0 || x % 5 == 0 )? "" :x) 
    console.log(_str);
};
