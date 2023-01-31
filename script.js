let names = ["Json", "Het", "Sam", "Utsav", "jane"]

names.forEach(element => {
    if (element.startsWith('j') || element.startsWith('J')) {
        console.log(`Goodbye ${element}`)
    } else {
        console.log(`Hello ${element}`)
    }
});