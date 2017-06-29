//AI controller will have a series of abstract strategies it can choose from based on the game state
//Since all entities will have an 'interface' (they all code to specific specifications - i.e. all have an
// 'attack' method if they can attack, which takes certain specific params and spits out specific return vals -
//but can do it's own thing inside the method depending on how it attacks etc.)


defensive(){
  entity.defend()
}

offensive(){
  entity.attack()
}

cautious(){
  entity.avoid()
}

// etc.

var attackInterface = {

isAttackable:

}

spawnEnemy(){
  entity.isAttackable
}

spawn(name,entity){
name = Object.create(entity);
}

spawnType(type){
  get_type={
    'enemy':spawnEnemy(attackable=true,moveable=true,useable=false),
    'item':spawnItem(attackable=false,moveable=false,useable=true)
}
    get_type[type]
}

//step 1: object type, step 2: does object exist? What are it's interfaces? step 3: does the found object implement correctly?
//basic idea is the AI director should be able to decide it needs anything, say a magic item with ice powers, and
//makes this request "i need any item which implements the 'magic' and 'ice' interfaces" and have some random item
//of that type returned

//some object type
var enemy = {
  attack:attacks(),
  speak:speaks()
}
//some interface
var attackable= {
  attack:attacks()
}
//check if the object uses all the methods specified on the interface
function checkInterface(object,interfaceObj){
for (propertyName in interfaceObj){
  if (object[propertyName]){console.log('implements '+propertyName)}
  else console.log('does not use interface')
  }
}
