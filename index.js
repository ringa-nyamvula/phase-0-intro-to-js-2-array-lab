// Write your solution here!
const cats =["Milo", "Otis", "Garfield"]

function destructivelyAppendCat (name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
    const dog=[...cats,name]
    return dog
}
function prependCat(name){
    const cow=[name,...cats]
    return cow
}
function removeLastCat(){
    const goat= cats.slice(0,-1)
    return goat
}
function removeFirstCat(){
    const lion= cats.slice(1)
    return lion
}
