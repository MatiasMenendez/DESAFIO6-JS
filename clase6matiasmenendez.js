/*Simulador de presupuesto de plancha de metal*/

/*Variables*/
let tipoDeMaterial = prompt ('Material: hierro, inoxidable o bronce')
let medida1 = Number (prompt ('Indicar ancho del material (ejemplo 100 o 3000)')) /1000
let medida2 = Number (prompt ('Indicar ancho del material (ejemplo 100 o 1500)')) /1000
let espesor = Number (prompt ('Indicar espesor en numeros ( ejemplo 0.7 o 2)'))
var valorDolar = 108
var pesoEspecifico = 7.2

const inoxidable = new Material('inoxidable', 1300, true, 7.2, medida1, medida2, espesor);
const hierro = new Material('hierro', 330, true, 7.2, medida1, medida2, espesor);
const bronce = new Material('bronce', 500, false, 7,2, medida1, medida2, espesor);

/*Funcion encargada de hacer la cuenta del valor de la plancha de metal (con los valores dados a los objetos)*/
function verificarStockHierro(){
    if (hierro.disponibilidad == true){
        alert('Tenemos material para realizar el trabajo')
    }
    else if (hierro.disponibilidad == false){
        alert('No contamos con material para realizar el trabajo, por favor contactarse mas adelante')
    }
}

function verificarStockInoxidable(){
    if (inoxidable.disponibilidad == true){
        alert('Tenemos material para realizar el trabajo')
    }
    else if (inoxidable.disponibilidad == false){
        alert('No contamos con material para realizar el trabajo, por favor contactarse mas adelante')
    }
}

function verificarStockBronce(){
    if (bronce.disponibilidad == true){
        alert('Tenemos material para realizar el trabajo')
    }
    else if (bronce.disponibilidad == false){
        alert('No contamos con material para realizar el trabajo, por favor contactarse mas adelante')
    }
}

function calcularPresupuesto(){
    if (tipoDeMaterial === 'hierro'){{
    let precioHierro = hierro.medida1 * hierro.medida2 * hierro.espesor * hierro.pesoEspecifico * hierro.precioPorKilo;
    alert(precioHierro + 'pesos')
    let precioDolarH = hierro.medida1 * hierro.medida2 * hierro.espesor * hierro.pesoEspecifico * hierro.precioPorKilo / valorDolar;
    alert(precioDolarH + 'dolares')}
    verificarStockHierro();}

    else if(tipoDeMaterial === 'inoxidable'){
    let precioInoxidable = inoxidable.medida1 * inoxidable.medida2 * inoxidable.espesor * inoxidable.pesoEspecifico * inoxidable.precioPorKilo;
    alert(precioInoxidable + 'pesos')
    let precioDolarI = inoxidable.medida1 * inoxidable.medida2 * inoxidable.espesor * inoxidable.pesoEspecifico * inoxidable.precioPorKilo / valorDolar;
    alert(precioDolarI + 'dolares')}

    else if(tipoDeMaterial === 'bronce'){{
        let precioBronce = bronce.medida1 * bronce.medida2 * bronce.espesor * bronce.pesoEspecifico * bronce.precioPorKilo;
        alert(precioBronce + 'pesos')
        let precioDolarB = bronce.medida1 * bronce.medida2 * bronce.espesor * bronce.pesoEspecifico * bronce.precioPorKilo / valorDolar;
        alert(precioDolarB + 'dolares')}
        verificarStockBronce();}
}

calcularPresupuesto();



/*Arrays*/

/*Mostrar precio en orden numerico*/
console.log('Lista de materiales en orden de precio')
const materiales = [{ nombre: hierro, precioPorKilo: 330, disponibilidad:true},
                    { nombre: inoxidable, precioPorKilo: 1300, disponibilidad:true},
                    { nombre: bronce, precioPorKilo: 500, disponibilidad:false}
];
materiales.sort(function (a, b) {
    if (a.precioPorKilo > b.precioPorKilo) {
      return 1;
    }
    if (a.precioPorKilo < b.precioPorKilo) {
      return -1;
    }
    return 0;
  });
  console.log(materiales)

/*Muestra desde la array de arriba todos los materiales que tenemos y su precio por kilo (forma desordenada) */
console.log('Lista de materiales con precio correspondiente en orden del codigo')
for (const material of materiales){
    console.log(material.nombre);
    console.log(material.precioPorKilo);
}

/*Muestra el material mas economico en stock*/
console.log('Detalles del material mas economico en stock')
const buscarMaterialEconomico = materiales.find(material => material.precioPorKilo === 330);
console.log(buscarMaterialEconomico);








