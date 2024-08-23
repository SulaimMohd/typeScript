// enum is shortform for enumaration. this feature will help to create set named constant for eg

enum somConstatnts {
  CONSTANT1, 
  CONSTANT2, 
  CONSTANT3
}

// if you dont assigne value then first will get 0 next 1 next 2 etc

// if you want to assign then

enum somFmousConsts {
  PI = 3.14,
  R = 8.22,
  G = 9.8
}

// we can accest the values like an accessing from the objet

let someVar = somFmousConsts.PI // this is it 

export {}