var Module = (function () {

  var privateMethod = function () {
    // private
  };

  var someMethod = function () {
    // public
  };

  var anotherMethod = function () {
    // public
  };

  return {
    someMethod: someMethod,
    anotherMethod: anotherMethod
  };

})();



Player vs multiple enemies
Combat occurs in a single room

If hostile enemy in same room object as player, at end of turn loop, combat occurs.

player.attack = function(attack-type (i.e. hit, kick, weapon use, etc), stamina)
if(stamina < player.stats.stamina){
  player.stats.stamina = player.stats.stamina - stamina
    if(stamina>enemy.stamina){
      damage = lookuptable.attack-type + any other effects
      enemy.health = enemy.health - damage
      }
      else{
      damage = lookuptable.enemy.attack-type + any other effects
      player.health = player.health - damage
      }
  }
  else {
    console.log("you don't have that much stamina, stamina: "+player.stats.stamina)

  }
