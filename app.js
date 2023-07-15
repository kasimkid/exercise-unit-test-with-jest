// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function (dolarValue)
{
    let yenValue = Math.round(dolarValue *127. / 1.2 );
    return yenValue;
}

const fromYenToPound = function ()
{
    let poundValue = Math.round(yenValue * 0.8 / 127.9 );
    return poundValue;
}




const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };




















