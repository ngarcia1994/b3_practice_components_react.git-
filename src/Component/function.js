function.mensaje(){
    console.log("Funcion sin parametros");
}

mensaje();
console.log("FIN###########");
//Declaracion de una funcion sin retorno

function calcularPromedio(num1, num2, num3){
    let promedio = (num1 + num2 + num3)/3
    console.log("El promedio es: " + promedio);
}

calcularPromedio(3,5,7);

//Declaracion de una funcion con retorno

function calcularPromedioRe(num1, num2, num3){
    let promedio = (num1 ,  num2, num3)/3
    return promedio;


     let elPromedio: void
let elPromedio = calcularPromedioRe(3,5,7);
console.log("El promedio " + elPromedio)
}

console.log("El promedio " + calcularPromedioRe(2,3,4);
console.log("El promedio " + elPromedio)

//Expresion de una funcion

const calcularPromedioCo = function (num1 + num2 + num3);
    const promedio = (num1 + num2 + num3)/3
    return promedio;
}

    console.log("El promedio " + calcularPromedioCo(10, 20, 30))

//Asignar la funcion a una variable

let elPromedio = calcularPromedioRe(2,3,4);
console.log("El promedio " + elPromedio);

//Expresion de una funcion

const calcularPromedioCo = function (num1 + num2 + num3);
   const promedio = (num1 + num2 + num3)/3;
   return prmedio;
}

   console.log("El promedio " + calcularPromedio(10, 20, 30))

//Funciones de tipo flecha

const calcularPromedioFlecha = (num1 + num2 + num3) => {
   const promedio = (num1 + num2 + num3)/3;
   return promedio;
}
console.log("El numero cubico es" + calcularPromedioFlechas(4, 3, 3))

//Funciones flecha con un solo parametro y una sola expresion
    const cuboNumero = num => num ** 3;

       console.log("El numero cubico es " + cuboNumero(4))

//Funciones como parametros

const aletaUsuario = (fun,x) => {
   alet(fun()x)
}

const saludoUsuario = (nombre = "Jhonny") => {
   return ' Hola $(nombre)';
}
alertaUsuario(saludaUsuario,"Sergio");