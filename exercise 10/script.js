let rand = Math.random()
let first, second, third;

//0 0.33 0.66 1
//  let generate the first word
rand = Math.random()
if (rand < 0.33) {
    first = "crazy"
}
else if (rand < 0.66 && rand > 0.33) {
    first = "amazing"
}
else {
    first = "fire"
}

// let generate the second word
rand = Math.random()
if (rand < 0.33) {
    second = "Engine"
}
else if (rand < 0.66 && rand > 0.33) {
    second = "Food"
}
else {
    second = "garments"
}

// let generate the third word
rand = Math.random()
if (rand < 0.33) {
    third = "borz"
}
else if (rand < 0.66 && rand > 0.33) {
    third = "limited"
}
else {
    third = "Hub"
}
console.log(rand)
console.log(`${first} ${second} ${third}`)