//instantiate object for input
function initInput(x){
  y = {}
  return x
}

//split the string into an array of word (sperated by spaces)
function input(x){
console.log('running input')
  return x.split(" "); //[hit,enemy,with,sword]
}

//do something with the input and add result to input object
function getFirst(x){

actions[i]
  y.first = x[0]
return x
}
//do something with the input and add result to input object
function getSecond(x){
  y.second = x[1]
return x
}
//do something with the input and add result to input object
function getThird(x){
  y.third = x[2]
return y
}

var string = "hit enemy with sword"

//parse function
function parse(x){
  return getThird(getSecond(getFirst(initInput(input(x)))))
}

inputObj = parse(string)
//will need to parse each word to get something like the below
inputObj.noun = "sword"
inputObj.action = "hit"
inputObj.target = "enemy"






//object collects lists of possible words (i.e. the game dictionary) - these are strings but could be anything (even functions)

actions = {
  punch : 'punch',
  swing : 'swing'
}

target = {
  wolf : 'wolf',
  bear : 'bear',
  enemy : 'enemy'
}

subject = {
  weapon : 'weapon',
  fist : 'fist',
  axe : 'axe'
}


//instantiate object for input
function initInput(x){
  y = {}
  return x
}

//split the string into an array of word (sperated by spaces)
function input(x){
console.log('running input')
  return x.split(" ");
}

//find any actions words and add to inputObject
function getFirst(x){
    for (item in x) {
      if (actions[x[item]]){
  	     y.actions = actions[x[item]]
  	  }
    }
  return x}

//find any subjects (i.e. items) words and add to inputObject
function getSecond(x){
    for (item in x) {
      if (subject[x[item]]){
  	     y.subject = subject[x[item]]
  	  }
    }
  return x}

//find any target words and add to inputObject
function getThird(x){
    for (item in x) {
      if (target[x[item]]){
  	     y.target = target[x[item]]
  	  }
    }
    //return inputObject, now complete
  return y}

//an example input string
var string = "swing at enemy with axe"

//parse function
function parse(x){
  return getThird(getSecond(getFirst(initInput(input(x)))))
}

//spits out an actions object based on the string fed in
parse(string)


//FYI - this entire funtion needs to be put into a module as it creates a global object called 'y'
//Ideally this will be set to the module, so it's parseModule.y (or whatever I end up calling it - not y)


//Generally, this needs to be abstracted away. So have a parameter (maybe an array) which lists the dictionaries
//I want to look at (i.e. dictionaryList = ['actions','subject','target','some_future_dictionary']) then I have a generic iterative
//function which says 'for dictionaryList.length do parse()' then each parse() call performs the parse operation
//using a different dictionary

//something like the below:

function getItem(list, x){
    for (item in x) {
      if (list[x[item]]){
  	     y[list] = target[x[item]]
  	  }
    }
    //return inputObject, now complete
  return y}

for dictionaryList.length do parse(dictionaryList[i].value)

parse(list, x){
    return getItem(list, x)
}

//so you have a dictionaryList array ['actions','subjects','specialItems','rudewords'] ... whatever

//you're saying for every item in the dictionaryList array, take the value of that entry (i.e. 'actions' first)
//then feed that into parse()

//parse is firing as parse('actions',x) where x is the string you have as input (i.e. ['my','input','string'])
//it then feeds both straight into getItem

//getItem is firing again as getItem('actions',['my','input','string'])
//It's saying for each item in the input array x, see if the entry correspond to an entry in the list 'action'
//if it does, then add then create an entry in the input object y using the name of the dictionary ('actions' in this case)

//The result should be an object y with keyword entires for all the dictionaries that where words were found
//and with the value of the found word as the value of the keyword entry

//i.e. y.actions = 'punch' & y.rudeword = 'fucker'
