//splitting out attack steps into units - combine into attack function

types{
  punch={damage:2,stamina:1,text:console.log('You punch the enemy')}
}

enemyStamina(enemy,staminaSpend){
return enemy.stamina = enemy.stamina - staminaSpend
}

playerStamina(player,staminaSpend){
return player.stamina = player.stamina - staminaSpend
}

compareAttack(player,type,target){
if (playerStamina > enemyStamina){
  doDamage(enemy);
} else doDamage(player)
}

doDamage(damage, target){
return target.health = target.health - damage;
}


//movement units and actions below, including examples rooms:

var roomOne = {
  name:'roomOne',
  north:'roomTwo',
  east:false,
  west:false,
  south:false
}

var roomTwo = {
  name:'roomTwo',
  north:'roomOne',
  east:'roomThree',
  west:false,
  south:false
}

var roomThree = {
  name:'roomThree',
  north:'roomTwo',
  east:false,
  west:false,
  south:false
}

myLocation = roomOne

function setTarget(location,target){
//REMINDER: remove logs once logging system is setup
console.log('moving to '+location[target])
return target = location[target]
}

function movePlayer(target){
return myLocation = window[target]
}

roomReal(target){
if (target != undefined){
return target
}
else throw error //write error handling at some point please
}

function moveValid(location, target){
if (location[target]){
return true
}
else false
}

function move(location, target){
if (moveValid(location, target)){
movePlayer(setTarget(location,target))
} else console.log('You cannot go that way!')
}

function teleport(target){
movePlayer(target)
}

//basic look function (this is silly - change this plz)

function look(myLocation){
console.log('east '+myLocation.east)
console.log('west '+myLocation.west)
console.log('north '+myLocation.north)
console.log('south '+myLocation.south)
}
