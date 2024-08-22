// Array 
// to define a variable type as array

const nums = [2, 3, 5] // it will assign by default we all know '_'

// how ever 

type myArrayType = number[] 
// or 
type otherMethod = Array<number> // both are the same

// union 
// it's making a variable vulrable to more than one types like number, strint etc

let  unionTypeVariable : number | string;    // when defining union the types are separated by |

// if we try to 

unionTypeVariable.toLocaleLowerCase() // this is will not allow becuse the variable is still not stick in to one 

// but 
function convertToLowercse(){
  if((typeof unionTypeVariable === 'string')){
    unionTypeVariable.toLocaleLowerCase() // this will allow because here he made sure that the unionVariable is string
  }else{
    unionTypeVariable.toFixed() // if condition is separated the strings if there is more then the more if else is needed type script is intelligent '_'
  }
}

// Array unition type wish means more than one type in array 

let myArray : Array<(number | string)>;

myArray = ['it can be string', 22 , 'or number']

// it can also define like

let otherArray : (number| string) [];
otherArray = ['this is is also true']


// some weired practice array of array

let arrayOfArray: Array<Array<number>> = [[1, 2,], [3, 4]]

// or array of array of number or string

let arrayOfArrayNumberOrString : Array<(string | Array<number>)> = ['array can containe string', [1, 2, 4], 'or the array of numbers']

// this is also define like 

let otherWayOfDefinition : (string| number[])[] = ['this is the string', [1, 2, 3], 'and this is the array of number']

// inheriting the new type from the previous defintion 

type type1 = {
  property: string;
}
type type2 = {
  otherProperty : number
}

type type3 = type1 & type2 & {newPropery: string} // 'Addig other property is possible but is not a good practice said by hitesh choudary type1 & type2 okay but the 3rd addition'

const newVar : type3 = {
  property:'somenewPropery',
  otherProperty:22,
  newPropery:'some new porperty'
}
