//objectos
/*
var frutas1 ={
    fruta1: "manzanas",
    fruta2: "mango",
    fruta3: "pera",
}
document.write("object "+frutas1.fruta3+ "<br>");

//arreglo
var frutas2 =[
    "piña",
    "mango",
    "pera"
]
document.write("arreglo"+frutas2[1]);
*/

/*
var frutas1 ={
    fruta1: "manzanas",
    fruta2: "mango",
    fruta3: "pera"
}
    //para recorrer el objecto
    for (pro in frutas1) {
        document.write("Propiedad: "+pro +"=>" +frutas1[pro]+ "<br>");
    }
*/
/*
var products ={}
Object.defineProperty(products, "fruta1", {value: "manzana", writable}
//products.fruta1 = "pera";
document.write(products.fruta1);
*/

//EJERCICIO 5
var productos ={
    nombre: [],
    presentacion: [],
    valor: []
}
for ( index = 0; index < 2; index++) {
    productos.nombre[index] = prompt("Digite producto: ");
    productos.presentacion[index] = prompt("Digite producto: ");
    productos.valor[index] = prompt("Digite producto: ");
}

for (pro in productos) {
    document.write("Propiedad: "+pro +"=>" +productos[pro]+ "<br>");
}
document.write("<table>");
for (i=0; i<3;i++) {

document.write("<table>")