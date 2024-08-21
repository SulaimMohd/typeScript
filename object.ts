
let user ={
  name: "some name",
  age: 23,
  isPlaced: false
}
const somFunction = ({name: string,age: number, isPlaced:boolean}): {name:string, age:number, isPlaced:boolean}=>{
  return {
    name: 'SomeName',
    age:22,
    isPlaced: false
  }
}

somFunction({name:"someName", age:22, isPlaced:true, newProperty:"This is not allowed"})
// but
const newObj = {
  name:'some name',
  age:22,
  isPlaced:false,
  newProperty: 'This is will allow'
}
somFunction(newObj)

// this is due broder use of object but when we passing the directly it will stick into the defintion to avoid that we can use type aliases
// check the type.ts file




export {}