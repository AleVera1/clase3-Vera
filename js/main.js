let var1,result
let var2 = 2000

for (i = 0; i < 2; i++)  {
  if(i == 0) {
    var1 = parseInt(prompt("Indique la cantidad de productos que quiere"));
    console.log("Ingresaste la cantidad de: " + var1 + " productos.");
  }
  else {
    result = var1 * var2;
    console.log("El precio total sera: " + result + " pesos.")
  }
}

let ingreso = prompt("Ingresa el color que quieras: \n 1- Blanco \n 2- Dorado \n 3- Negro \n 4- Azul \n Cuando termine ingrese ESC")

if (ingreso == "ESC") console.log("Terminaste. Gracias por comprar!.");

while (ingreso != "ESC") {
  switch (ingreso) {
    case "1":
      console.log("Seleccionaste color Blanco")
      break;
    case "2":
      console.log("Seleccionaste color Dorado")
      break;
    case "3":
      console.log("Seleccionaste color Negro")
      break;
    case "4":
      console.log("Seleccionaste color Azul")
      break;
  
    default:
      console.log("Opción no valida")
      break;
  }
  ingreso = prompt("Ingresa el color que quieras: \n 1- Blanco \n 2- Dorado \n 3- Negro \n 4- Azul \n Cuando termine ingrese ESC");
  if (ingreso == "ESC") console.log("Terminaste. Gracias por comprar!.");
}