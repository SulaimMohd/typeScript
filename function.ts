function  addByTwo(num : number):number{
  return num +2
}

function neverReturnFn(msg : string):never{
  throw new Error('This is the erro')
}

function voidReturnFn(msg : string):void{
  return 
}
// in the function argument the type of the variable should be specified else it will assigne as the any for the arguemnt and the function return type 


const arrowFn = (isPlaced : boolean = true):boolean =>{
  return true
}

// above fun is example for arrow fuction and how assign a default value

export {}