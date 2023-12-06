var numeros = [10,7,12,56,34,76,123,76,45];
var numeroMayor = numeros[0]
for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMayor) {
        numeroMayor = numeros[i];
    }
}
console.log("El número mayor es: " + numeroMayor);
document.write("El número mayor es: " + numeroMayor)
