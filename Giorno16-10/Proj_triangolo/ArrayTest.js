function sommaNumArray(arrayToSum)
{
    if(Array.isArray(arrayToSum)==false)
        console.log('non è un array!');

    var somma = 0;
    for(i = 0; i< arrayToSum.length; i++)
    {
        if(typeof(arrayToSum[i])==='number')
            somma += arrayToSum[i];
    }
    return somma;
}
var myArray = [12, 'ciao', 5, false, null];
console.log(typeof(myArray));

console.log('la somma è: '+sommaNumArray(myArray));