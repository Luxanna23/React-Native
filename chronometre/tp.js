// Écrivez une fonction fibGenerator qui renvoie un objet générateur qui produit la  séquence de Fibonacci .

// La  séquence de Fibonacci  est définie par la relation .Xn = Xn-1 + Xn-2

// Les premiers numéros de la série sont 0, 1, 1, 2, 3, 5, 8, 13.


/**
* const gen = fibGenerator();
* gen.next().value; // 0
* gen.next().value; // 1
* gen.next().value; // 1
* gen.next().value; // 2
* gen.next().value; // 3
* gen.next().value; // 5
* gen.next().value; // 8
* gen.next().value; // 13
*/

var fibGenerator = function*(m,n){
    yield a = 0;
    yield b = 1;
    if (n === 0){
        yield n;
    }
    else if{
        yield fibGenerator(n-1) + fibGenerator(n-2);
    }
    else{
        yield fibGenerator(n-1) + fibGenerator(n-2);
    }
}

const gen = fibGenerator();
console.log(gen.next().value); 