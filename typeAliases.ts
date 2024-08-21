// by using the key word type we define new type (data type) for example 

type myString = string

// and specify like 

const someFn = (name: myString):myString =>{
  return ""
}

// the above fn is same as the below fn

const someOtherfn = (name: string):string =>{
  return ""
}

// also consider otehr example 

type myObjType = {}

const objTypeFn = (objArg : myObjType):string=>{
  return ""
}

// this is just for the simplcity, readability and the maitainability

type myUserType = {
  name: string;
  age: number;
  isPlaced: boolean;
}

// the , or ; in the type defiction is just a style if we want to we don't want to use both we can just ignore

const myUserTypeFn = (user: myUserType):myUserType => {
  return {
    name: 'some name',
    age: 22,
    isPlaced: true
  }
}

const user1 ={
  name: 'user1',
  age: 22, 
  isPlaced: true
}
const user2 ={
  name: 'user2',
  age: 22, 
  isPlaced: true,
  newProperty: "this object will allowed to pass in the fn"
}

myUserTypeFn(user1) 


export {}