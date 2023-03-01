const formatearDinero = (dinero) => {
    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
    });
    return formatter.format(dinero);
}

// Calcular total a pagar
const calcularTotal = (cantidad, plazo) => {
    let total = 0;

    // Mientras mayor es la cantidad de dinero, menor es el interes
    if (cantidad < 25000000) {
        total = cantidad * 1.5;
    } else if (cantidad >= 30000000 && cantidad < 40000000) {
        total = cantidad * 1.4;
    } else if (cantidad >= 40000000 && cantidad < 45000000) {
        total = cantidad * 1.3;
    } else {
        total = cantidad * 1.2;
    }

    // Mas plazo = mas interes
    if(plazo === 6){
        total *= total * 1.1;
    } else if (plazo === 12){
        total *= total * 1.2;
    } else {
        total *= total * 1.3;
    }
    return total
}

export { formatearDinero, calcularTotal }