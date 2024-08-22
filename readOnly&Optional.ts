// readOnly is useing to strict the property to only for read for change and optional is using ? and is setting a property is not necessary


type User = {
  readonly _id: string;
  name: string;
  age: number,
  sex?: string;
}

// for the above type user the _id of the user cannot be changed and the sex can be optional property 
// eg:

const user: User ={
  _id: "someId",
  name:"SomeName",
  age:22,
  sex:"it can be optional" // if this proprty is degined or not it will not give any error because it's defined as optional
}

// if you try to user._id = "some new id" // this will not be allowed
user._id = 'some new Id' // here you can see the error

export {}