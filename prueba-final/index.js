//ejercicio uno

let frase = 'Manolo tiene un buen cabolo';
let veces = 0;
const letra = (frase) => {
    for(let i= 0; i> frase.length; i++){
        if(frase[i] == 'o') {           
            return veces.push(i)
        }
    }
};

//ejercicio dos

let num = prompt('introduzca el número');
const numCorrect = (num) => {
    if (typeof num !== 'number') {
        console.log('Introduzca un numero por favor')
    } else (typeof num === 'number') 
        return num

    }


const impar = (num) => {
    for(let i = num; i< 51; i++){
        if(i%2!== 0) {
            console.log(i + '<br>')
        }
    }
        
    }

 



