// interFace is very similar to the type but still there are differece. It can reopen. It inherited using extends key wokrd also. Type is is used for flexible types like union. It is similar to the interface in the java but it can directly use to give type as the object and also use to extend the calss 


interface MyInterface {
  name: string,
  age: number
  isMarried: boolean
}

const obj : MyInterface = {
  name: 'name',
  age: 22, 
  isMarried: false
}

class myClass implements MyInterface{
  name: string
  age: number
  isMarried: boolean
  constructor(name: string,age: number,isMarried: boolean){
    this.name = name
    this.age = age
    this.isMarried = isMarried
  }
}

// in type script interface can also make as type of an object it can inherit using extends key word also impliement to the class using the impleiment 

interface interFace2 {
  someProperty: string
}
interface interFace1 extends interFace2{
  someOtherProperty: number
}

class class1 implements interFace1{
  someOtherProperty: number
  someProperty: string
  constructor(
    someOtherProperty: number,
    somePrperty: string
  ){
    this.someOtherProperty = someOtherProperty
    this.someProperty = somePrperty
  }
}