// tuple is nothing but an array with strict form. In typle the the are finate and it highly strinct for the type of the data and order matters

type myTuple = [string, number]

const tupeVar : myTuple = ["This is the string", 33]

// intresting fact push method cannot catch the type , this is what I mean

tupeVar[3] = 'some element' // this is error but 
tupeVar.push('some new element') // this is not an problem kinda bug I think -_^ 

