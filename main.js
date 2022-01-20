

let backpack = []

backpack.push("sword")
backpack.push("shield")
backpack.push("food")
backpack.push("trees")
backpack.push("ckicken")

//backpack.shift()
backpack.splice(0,1)

let furCoat = "furr coat"

backpack.push(furCoat)

backpack.pop()

let itemCount = backpack.length

backpack.push('stuff','flit', 'blanket', 'toothbrush')

//console.log(backpack, itemCount)

let backpack2 = backpack.splice(2,5)

// for ( let i = 0; i < backpack.length; i++ )
// {   
    
//     console.log(` this is the item in the backpack ${backpack[i]}`)}

// for ( let i = 0 ; i <= backpack2.length -1; i++){
//     console.log(backpack2[i])
// }

// for (let i = 0; i <3; i++)
// {
//     console.log(backpack[i])
// }

// if ( )

// What is the final value of guessMe?

let guessMe = 54

while (guessMe < 100) {
    console.log('..............', guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        console.log("guessme is divisable by 4 or 5. Added 25")
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        console.log("guess me is diviale by 3. - 27")
        guessMe -= 27
    } else {
        console.log("adding 3")
        guessMe += 3
    }
    guessMe += 22
    console.log(   ` added 22, guess me is now ${guessMe}`)
}

console.log(`final value ${guessMe}`)