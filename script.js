//4 задание

function areaOfARectangle(a,b){
    if(a,b){
        let s1 = a*b;
        console.log(`площадь прямоугольника ${s1}`);
    }
}

areaOfARectangle(4, 5)

function squareArea(a){
    if(a){
        let s2 = 4*a;
        console.log(`площадь квадрата ${s2}`);
    }
}

squareArea(7)

//5 задание

function perfectNumber(num) {
    let c = 0
    for(let i = 1; i <= num/2; i++){
        if(num % i == 0){
            c += i
        }
    }

    if(c === num && c !== 0){
        console.log("Совершенное число")
    }else{
        console.log("Не совершенное число")
    }
    
}

perfectNumber(6);

// 6 задание

let num1 = +prompt("min");
let num2 = +prompt("max");
let num3 = [];

for(let i = num1; i < num2+1; i++){
    num3.push(i)
}

console.log(num3)

let result = num3.find (function number(num3) {
    let c = 0
    for(let i = 1; i <= num3/2; i++){
        if(num3 % i == 0){
            c += i
        }
    }

    if(c === num3){
        console.log(`Совершенное число: ${num3}`)
    }
})