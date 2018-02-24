console.log(6 === 4 + 2)

console.log(6 === add(2, 4))

function add(a,b){
    return a+b
}

console.log(2 === subtract(5,3))
function subtract(a,b){
    return a-b
}
console.log(8 === multiply(2,4))
function multiply(a,b){
    return a*b
}
console.log(10 === divide(20,2))
function divide(a,b){
    return a/b
}

console.log( 64 === square(8))
function square(a){
    return a*a
}


assert(6, add(4,2), "shit broke")
function assert( expected, actual, message){
if (expected === actual) {
    return true
}
console.log(message)
}


module.exports = {
    assert: function(expected, actual, message = "Test"){
        if (expected === actual) {
            console.log("good"+message)
        }else {
            diff = util.inspect(expected) + "\n   " + util.inspect(actual);
            conole.log("poop"+message+"\n   Assertion failed no match\n   "+diff);
        }
    },
    assert_true: function(actual, message) {

    },
    assert_false: function(actual, message){

    }
}