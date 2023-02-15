/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 
let jonSnowAttack = 25;
let jaimieLannisterAttack = 35;

if(jonSnowAttack > jaimieLannisterAttack) {
    console.log("Jon Snow is more beefy")
} else if (jonSnowAttack === jaimieLannisterAttack){
    console.log("Equaly strong")
} else {
    console.log("jaime is the og")
}

let jonSnowHealth = 100
let jonSnowDefense = 0

if (jonSnowHealth <= jaimieLannisterAttack){
    console.log("Jon Snow has been slain")
} else {
    console.log(`jon's health is down to ${jonSnowHealth}`)
}

jonSnowDefense += 25
if (jonSnowHealth <= jaimieLannisterAttack) {
    console.log("Jon Snow has been slain ")
} else {
    jonSnowHealth -= jaimieLannisterAttack - jonSnowDefense;
    console.log("Jon's heath is down to : " + jonSnowHealth)
}

if (jonSnowHealth + 50 > 100) {
    jonSnowHealth = 100;
} else {
    jonSnowHealth += 50;
}

console.log(jonSnowHealth)

let coinLandsHeads = false; 


 if (coinLandsHeads) {
    console.log("The fight continues!!")
 } else {
    console.log("Jon runs away")
 }

//  if (coinLandsHeads !== false) {
//     console.log("The fight continues!!")
//  } else {
//     console.log("Jon runs away")
//  }

for (let i = 0; i <= 5; i++) {
    if (jonSnowHealth <= 0) {
        console.log("Jon has been slain")
    } else {
        jonSnowHealth -= jaimieLannisterAttack - jonSnowDefense
        console.log(`Jon's health is now ${jonSnowHealth}`)
    }
}

while (jonSnowHealth > 0) {
    jonSnowHealth -= jaimieLannisterAttack - jonSnowDefense
    if (jonSnowHealth <= 0) {
        console.log("He's finally dead")
    } else {
        console.log(`Jon's health is now ${jonSnowHealth}`)
    }
}

if (jonSnowAttack > 25 && jonSnowAttack < 75) {
    console.log("Jon is mid level beast")
}

if (jaimieLannisterAttack  > 25 || jaimieLannisterAttack < 75) {
    console.log("he's strong if he ate his wheeties")
} else {
    console.log("Jon is mid level beast")
}