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

/* function dodajeElement(niz,element) {
    niz.push(element);
    return niz;
}

console.log(dodajeElement([4,8,9,7],5)) */


// 21. Napiši funkciju koja dodaje element na početak niza.

/* function dodajeElement(niz,element) {
    niz.unshift(element);
    return niz;
}

console.log(dodajeElement([4,8,9,7],5))
 */
// 22. Napiši funkciju koja uklanja poslednji element iz niza.

/* function uklanjaPoslednjiElement(niz) {
    niz.pop();
    return niz;
}

console.log(uklanjaPoslednjiElement([4,8,9,7]))
 */
// 23. Napiši funkciju koja uklanja prvi element iz niza.

/* function uklanjaPrviElement(niz) {
    niz.shift();
    return niz;
}

console.log(uklanjaPrviElement([4,8,9,7]))

// 24. Napiši funkciju koja spaja dva niza.

function spojiNizove(niz1,niz2) {
    return niz1.concat(niz2);
    
}

console.log(spojiNizove([4,8,9,7],[3,5,4]))


// 25. Napiši funkciju koja sortira niz u rastućem redosledu.

function sortirajteNiz(niz) {
    return niz.sort((a,b)=>a-b);
    
}

console.log(sortirajteNiz([4,8,9,7,3,5]))

// 26. Napiši funkciju koja sortira niz u opadajućem redosledu.

function sortirajteOpadajuciNiz(niz) {
    return niz.sort((a,b)=>b-a);
    
}

console.log(sortirajteOpadajuciNiz([4,8,9,7,3,5])) 

// 27. Napiši funkciju koja preokreće niz.

function preokreniNiz(niz) {
    //preokrece niz tako sto prvi postaje poslednji, drugi postaje pretposlednji, itd...//
    return niz.reverse();
    
}

console.log(preokreniNiz([4,8,9,7,3,5]))  */

// 28. Napiši funkciju koja vraća niz svih parnih brojeva iz datog niza.

function izdvojiParneBrojeve(niz) {

    return niz.filter(broj => broj%2 === 0)
    
}

console.log(izdvojiParneBrojeve([4,8,9,7,3,5])) 
console.log(izdvojiParneBrojeve([10, 15, 20, 25, 30]))

// 29. Napiši funkciju koja vraća niz svih neparnih brojeva iz datog niza.

function izdvojiNeparneBrojeve(niz) {

    return niz.filter(broj => broj%2 === 1)
    
}

console.log(izdvojiNeparneBrojeve([4,8,9,7,3,5])) 
console.log(izdvojiNeparneBrojeve([10, 15, 20, 25, 30]))

// 30. Napiši funkciju koja vraća broj pojavljivanja određenog elementa u nizu.


function brojacElementaNiza(niz,element) {

    return niz.reduce((brojac, trenutniElement) => {
        return trenutniElement === element ? brojac + 1 : brojac;
    }, 0)    
}

console.log(brojacElementaNiza([4,8,9,7,3,5,8,7,8], 8)) 
console.log(brojacElementaNiza([true,false,true,true,],true))


