function addByTwo(num) {
    return num + 2;
}
function neverReturnFn(msg) {
    throw new Error('This is the erro');
}
function voidReturnFn(msg) {
    return;
}
// in the function argument the type of the variable should be specified else it will assigne as the any for the arguemnt and the function return type 
var arrowFn = function (isPlaced) {
    if (isPlaced === void 0) { isPlaced = true; }
    return true;
};
// above fun is example for arrow fuction and how assign a default value
