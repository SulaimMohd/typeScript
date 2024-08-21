"use strict";
// by using the key word type we define new type (data type) for example 
Object.defineProperty(exports, "__esModule", { value: true });
// and specify like 
var someFn = function (name) {
    return "";
};
// the above fn is same as the below fn
var someOtherfn = function (name) {
    return "";
};
var objTypeFn = function (objArg) {
    return "";
};
// the , or ; in the type defiction is just a style if we want to we don't want to use both we can just ignore
var myUserTypeFn = function (user) {
    return {
        name: 'some name',
        age: 22,
        isPlaced: true
    };
};
var user1 = {
    name: 'user1',
    age: 22,
    isPlaced: true
};
var user2 = {
    name: 'user2',
    age: 22,
    isPlaced: true,
    newProperty: "this object will allowed to pass in the fn"
};
myUserTypeFn(user1); // because it is match with the user type
myUserTypeFn(user2);
