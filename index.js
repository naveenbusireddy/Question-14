var object1 = {
    name : "Ram",
    age : 25,
    yuga : "Treta",
    power : 2500
};
var object2 = {
    name : "Krishna",
    age : 31,
    yuga : "Dwapar",
    power : 2325
};

function line() {
    console.log(`-----------------------------------------------------`);
}

function calculateMoreAge() {
    if(object1.age === object2.age)
    {
        console.log(`Both have same age:\n Name : ${object1.name}, Age: ${object1.age}\n Name : ${object2.name}, Age: ${object2.age} `)
    }
    else if(object1.age > object2.age)
    {
        console.log(`Person have more age:\n Name: ${object1.name} \n Age: ${object1.age} `);
    }
    else {
        console.log(`Person have more age:\n Name: ${object2.name} \n Age: ${object2.age} `);
    }
}

function calculateMorePower() {

    if(object1.power > object2.power)
    {
        console.log(`Person have more power:\n Name: ${object1.name} \n Power: ${object1.power} `);
    }
    else if(object1.power === object2.power)
    {
        console.log(`Both Person have Same power:\n Name: ${object1.name} \n Power: ${object1.power}\n Name: ${object2.name} \n Power: ${object2.power} `);
    } 
    else {
        console.log(`Person have more power:\n Name: ${object2.name} \n Power: ${object2.power} `);
    }
}

function calculateMoreCharacterPower() {
    var namePowerObj1 = `${object1.name.length}`
    var namePowerObj2 = `${object2.name.length}`

    if(((namePowerObj1*35)+object1.power) === ((namePowerObj2*35)+object2.power))
    {
        console.log(`Both Persons have same power based on character in name:\n Name: ${object1.name}, Name-Power: ${namePowerObj1*35}\n Name: ${object2.name}, Name-Power: ${namePowerObj2*35} `);
    }
    else if(((namePowerObj1*35)+object1.power) > ((namePowerObj2*35)+object2.power))
    {
        console.log(`Person have more power based on character in name:\n Name: ${object1.name} \n Name-Power: ${namePowerObj1*35} `);
    }
    else {
        console.log(`Person have more power based on character in name:\n Name: ${object2.name} \n Name-Power: ${namePowerObj2*35} `);
    }
}

calculateMoreAge();
line();
calculateMorePower();
line();
calculateMoreCharacterPower();