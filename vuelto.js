let factura = parseInt(prompt('Ingrese el valor de la factura a pagar:'));
let dinero = parseInt(prompt('Ingrese el total pagado por el cliente'));
let alg = 0;
let diferencia = dinero - factura;
let cambio = diferencia;
let billete50 = 0;
let billete20 = 0;
let billete10 = 0;
let billete5 = 0;
let billete1 = 0;

while (diferencia > 0) {
    if (diferencia - 50 >= 0) {
        billete50++;
        diferencia = diferencia -50;
        console.log(`${billete50} Billete/s de USD $50`);
    }
    else if (diferencia -20 >= 0) {
        for (alg = 0; alg <= diferencia; alg = alg+20) {
            billete20++;
            diferencia = diferencia - 20;
        }
        console.log(`${billete20} Billete/s de USD $20`);
    }
    else if (diferencia - 10 >= 0) {
        for (alg = 0; alg <= diferencia; alg = alg+10) {
            billete10++;
            diferencia = diferencia - 10;
        }
        console.log(`${billete10} Billete/s de USD $10`);
    }
    else if (diferencia - 5 >= 0) {
        for (alg = 0; alg <= diferencia; alg = alg+5) {
            billete5++;
            diferencia = diferencia - 5;
        }
        console.log(`${billete5} Billete/s de USD $5`);
    }
    else if (diferencia - 1 >= 0) {
        for (alg = 0; alg = diferencia; alg = alg+1) {
            billete1++;
            diferencia = diferencia - 1;
        }
        console.log(`${billete1} Billete/s de USD $1`);
    }
    
}
console.log(`El vuelto total a devolver en USD es: ${cambio}`)
