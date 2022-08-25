console.log("This is module");

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}
//After executing this, one thing to notice is, the code gets 
//executed but we still do not get the function back. To get back the function, 
//we have to make the function to behave explicitly in mod.js file.

module.exports = {
    avg: average,
    name: "Harry",
    repo: "GitHub"
}
// creating modules in the form of objects and can be accessed

// module.exports = average;

// module.exports.name = "Harry";