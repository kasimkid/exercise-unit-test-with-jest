const fromEuroToDollar = function (valueEuro)
{
    let dolarValue = valueEuro * 1.2
    return dolarValue;
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




















