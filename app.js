
const TasaCambio = 1300;


let history = [];

function convertCurrency(pesos) {
    return pesos / TasaCambio;
}



function showMainMenu() {
    while (true) {
        const option = prompt(
            "Menú Principal:\n\n" +
            "1) Divisa (pesos a dolares)\n" +
            "2) Salir\n\n" +
            "Ingrese una opción:"
        );

       
        if (option === null) {
            
            return;
        }

        const selectedOption = parseInt(option);

        if (isNaN(selectedOption) || selectedOption < 1 || selectedOption > 2) {
            alert("Opción inválida. Por favor ingrese 1 o 2.");
            continue;
        }

        switch (selectedOption) {
            case 1:
                handleCurrencyConversion();
                break;
            case 2:
                return;
        }
    }
}
function handleCurrencyConversion() {
    let pesos;
    
    while (true) {
        const input = prompt("Ingrese la cantidad en Pesos Argentinos a convertir a USD:");
        
        if (input === null) {
            
            return;
        }
        
        pesos = parseFloat(input.replace(',', '.'));
        
        if (isNaN(pesos) || pesos <= 0) {
            alert("Cantidad inválida. Por favor ingrese un número mayor que cero.");
            continue;
        }
        
        break;
    }
    
    const dollars = convertCurrency(pesos);
    const resultMessage = `${pesos.toFixed(2)} ARS = ${dollars.toFixed(2)} USD`;
    alert(resultMessage);
    
    
    history.push({
        tipo: 'divisa',
        entrada: `${pesos.toFixed(2)} ARS`,
        salida: `${dollars.toFixed(2)} USD`,
        fecha: new Date().toLocaleString()
    });
}
function main()
 {
    alert("Bienvenido al Conversor de Divisas");
    alert(`hecho por Escalante Facundo`)
    showMainMenu();
    
    console.log("Historial de operaciones:");
    console.log(history);
}



main();