// let stars = 5;
// if (stars === 5) {
//     console.log("You are premium user!")
// }


// const danUNedelji = "ponedeljak";
// if(danUNedelji === "ponedeljak") {
//     console.log("Ne volim ponedeljak!")
// } else if(danUNedelji === "utorak") {
//     console.log("Ne volim utorak!")
// } else if(danUNedelji === "subota") {
//     console.log("Oboyavam subotu!")
// }


// for (let i=1;i<=10;i++) {
//     console.log(i);
// }

// ispisi sve brojeve od 20 do 30 pomnozene sa 2

// for (let i=20; i<=30; i++) {
//     console.log (i*2);
// }

// ispisi sve neparne brojeve od 45 do 10 unazad

// for (let i=45; i>=10; i=i-2) {
//     console.log(i);
// }



// ispisi svaki treci broj od 12 do 21 

/* // for (let i=12; i<=21; i=i+3) {
//     console.log(i);
// } */


// Write a function that takes an integer minutes and converts it to seconds.


// const convert = minutes => minutes*60;
// let minutes=5;
// let seconds=convert(minutes);{
//     console.log(`${minutes} minuta je ${seconds} sekundi.`)
// }

// 1. Napiši funkciju koja vraća zbir dva broja.

// function zbir (a, b){
//     const rezultat = a + b;
//     console.log(rezultat);
// }
// zbir(3,9);

// function zbir(a,b){
//     return a+b;
// }
//     zbir ();


// 2. Napiši funkciju koja oduzima dva broja.

// function razlika(a,b){
//     const rezultat=a-b;
//     console.log(rezultat);
// }

// razlika(59,36)

// 3. Napiši funkciju koja množi dva broja.

// function proizvod(a,b){
//     const rezultat=a*b;
//     console.log(rezultat);
// }
// proizvod (489,256)

// function proizvod(a,b){
//     return a*b;
// }
// proizvod (489,256)

// 4. Napiši funkciju koja deli dva broja.

// function kolicnik(a,b){
//     const rezultat=a/b;
//     console.log(rezultat);
// }
// kolicnik (25,5)


// 5. Napiši funkciju koja vraća ostatak pri deljenju dva broja.
 

    // function ostatak(a,b){
    //     return a%b;
    // }
    // ostatak(26,5)

// 6. Napiši funkciju koja vraća kvadrat broja.

// function kvadrat(a){
//     return a**2
// }

// kvadrat(5)


// 7. Napiši funkciju koja vraća kub broja.

// function kub(a){
//     return a**3;
// }
// kub(5)


// 8. Napiši funkciju koja vraća najveći od dva broja.

/* function veciBroj(a,b) {
    if( a>b ) {
        return a;
    } 
    else {
        return b;
}
}
console.log(veciBroj(3,7)); */



/* function veciBroj(a,b) {
    return ( a>b ) ? a : b;
}
console.log(veciBroj(3,7)); */


/* function veciBroj(a,b){
    return Math.max(a,b)
}
console.log(veciBroj(3,7));
 */

// 9. Napiši funkciju koja vraća najmanji od dva broja.

/* function manjiBroj(a,b){
    if(a<b){
        return a;
    }
    else {
        return b;
    }
}
console.log(manjiBroj(3,7)); */

/* function manjiBroj(a,b){
    return (a<b) ? a : b;
}
console.log(manjiBroj(3,7));
 */

/* function manjiBroj(a,b){
    return Math.min(a,b)
}
console.log(manjiBroj(3,7));
 */

// 10. Napiši funkciju koja proverava da li je broj paran.

/* function paranBroj(a){
    return a % 2 === 0
}
console.log(paranBroj(7));
console.log(paranBroj(4));
console.log(paranBroj(32847));
console.log(paranBroj(1145863));
console.log(paranBroj(15));
 */



// 11. Napiši funkciju koja proverava da li je broj neparan.

/* function paranBroj(a){
    return a % 2 === 1
}
console.log(paranBroj(7));
console.log(paranBroj(4));
console.log(paranBroj(32847));
console.log(paranBroj(1145863));
console.log(paranBroj(15));
 */
// 12. Napiši funkciju koja vraća zbir elemenata niza.

/* function zbirElemenata(niz) {
    let zbir=0
    for (let i=0; i<niz.length; i++) {
        zbir += niz[i];
    }
    return zbir;
}

console.log(zbirElemenata([4,7,9,2,11,45,67]));
console.log(zbirElemenata([4,7,4,9,88,202,57])); */





// 13. Napiši funkciju koja vraća proizvod elemenata niza.

// function proizvodElemenata(niz) {
//     let proizvod=1
//     for (let i=0; i<niz.length; i++) {
//         proizvod *= niz[i];
//     }
//     return proizvod;
// }

// console.log(proizvodElemenata([4,7,9,2,11,45,67]));
// console.log(proizvodElemenata([4,7,4,9,88,202,57]));


// 14. Napiši funkciju koja vraća najveći broj u nizu.

/* function najveciBroj (niz) {
    if (niz.length===0){
        return null
    }
    return Math.max(...niz)
}

console.log(najveciBroj([5,8,-4,7])) */


// 15. Napiši funkciju koja vraća najmanji broj u nizu.

/* function najmanjiBroj (niz) {
    if (niz.length===0){
        return null
    }
    return Math.min(...niz)
}
 */
/* console.log(najmanjiBroj([5,8,-4,7]))
 */

// 16. Napiši funkciju koja vraća prvi element niza.

/* function prviElement(niz) {
    if (niz.length===0) {
        return null
    }
    return niz[0]
}

console.log(prviElement([4,8,9,7])) */



// 17. Napiši funkciju koja vraća poslednji element niza.

/* function poslednjiElement(niz) {
    if (niz.length===0) {
        return null
    }
    return niz[niz.length-1]
}

console.log(poslednjiElement([4,8,9,7])) */

// 18. Napiši funkciju koja vraća dužinu niza.

/* function duzinaNiza(niz) {
    if (niz.length===0) {
        return null
    }
    return niz.length
}

console.log(duzinaNiza([4,8,9,7])) */


// 19. Napiši funkciju koja proverava da li niz sadrži određeni element.

/* function sadrziElement(niz,element) {
        return niz.includes(element);
    }

console.log(sadrziElement([4,8,9,7], 5))
 */

// 20. Napiši funkciju koja dodaje element na kraj niza.

function dodajeElement(niz,element) {
    niz.push(element);
    return niz;
}

console.log(dodajeElement([4,8,9,7],5))


// 21. Napiši funkciju koja dodaje element na početak niza.
// 22. Napiši funkciju koja uklanja poslednji element iz niza.
// 23. Napiši funkciju koja uklanja prvi element iz niza.
// 24. Napiši funkciju koja spaja dva niza.
// 25. Napiši funkciju koja sortira niz u rastućem redosledu.
// 26. Napiši funkciju koja sortira niz u opadajućem redosledu.
// 27. Napiši funkciju koja preokreće niz.
// 28. Napiši funkciju koja vraća niz svih parnih brojeva iz datog niza.
// 29. Napiši funkciju koja vraća niz svih neparnih brojeva iz datog niza.
// 30. Napiši funkciju koja vraća broj pojavljivanja određenog elementa u nizu.
