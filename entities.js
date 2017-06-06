//handler function for words. Words are submitted and checked. Once checked valid words are pushed to their
//correct event handlers. I.E. player enter "punch enemy". This is parsed into "punch" and "enemy". Punch is
//recognised as a valid attack and pushed to the attack handler (as below). "Enemy" would be used with the attack
//handler (i.e. x=attack type, y=target)

//utility functions

//builds any entity and adds to list
var buildEntity = function(objType, objName=objType.name){
  let x = objType
  get_type={
    "ROOM":function(){baseObjects.ROOMLIST[objName] = Object.create(x);},

    "NPC":function(){baseObjects.NPCLIST[objName] = Object.create(x);},

    "ITEM":function(){baseObjects.ITEMLIST[objName] = Object.create(x);}
  }
  return get_type[x.type]()
}

//ceate function to assign properties to entities
var assignProperties = function(){
Object.assign(baseObjects.NPCLIST[objName],person_stats)
}

//generic action sets

var player_actions={
  attack: function(x="attack",y="all your might!"){
    if(this.status == "alive") console.log("You "+x+" the enemy with "+y)
    else console.log("You are "+this.status+" and cannot "+x)
  },
  look: function(x=CurrentRoom){
    if(x) console.log("You look around the "+x.name+". "+get_desc[x.desc])
    else console.log("You can't see anything ... wierd")
  }
}

var npc_actions={
  attack: function(x="attacks",y="all their might!"){
    if(this.status == "alive") console.log("The "+this.name+" "+x+" you with "+y)
    else console.log("The "+this.name+" is "+this.status+" and cannot "+x)
  },
  move: function(){
    console.log('moving')
  }
}

var npc_speech={
  speak: function(){
    console.log('Hello')
  }
}

var effects={
  someEffect: function(){
    console.log("This is a contextual effect for"+this.name)
  }
}

//generic stat sets

var person_stats={
  name:"human",
  type:"person",
  stats:{
    health:5,
    stamina:5,
    sanity:8
  }
}

var small_animal_stats={
  name:"small creature",
  type:"small_animal",
  stats:{
    health:3,
    stamina:6,
    sanity:9
  }
}

var big_animal_stats={
  name:"large creature",
  type:"big_animal",
  stats:{
    health:3,
    stamina:6,
    sanity:9
  }
}

var small_horror_stats={
  name:"nameless horror",
  type:"small_horror",
  stats:{
    health:4,
    stamina:10,
    sanity:10
  }
}

//base objects
var baseObjects = (function () {

var NPC = {
  type: "NPC",
  status: "alive",
  alignment: "friendly",
  inventory: "",
  name:"Thing",
  stats: {
    health:10,
    stamina:10,
    sanity:10
  }
};

var ITEM = {
  type: "ITEM",
  immobile:true,
  name:"Generic Item",
};

var ROOM = {
  type:"ROOM",
  desc:'1',
  name:"Generic Location",
  directions:[0,0,0,0] //1 = accessible direction, [n,e,s,w]
};

var PLAYER = {
  type: "PLAYER",
  status: "alive",
  inventory: "",
  name: "you",
  stats: {
    health:10,
    stamina:10,
    sanity:10
  }
};

var ROOMLIST ={};
var NPCLIST ={};
var ITEMLIST ={};

return {
  NPCLIST: NPCLIST,
  ITEMLIST: ITEMLIST,
  ROOMLIST: ROOMLIST,
  PLAYER: PLAYER,
  ROOM: ROOM,
  ITEM: ITEM,
  NPC: NPC
};

})();
//sub objects

var PERSON = Object.create(baseObjects.NPC);
Object.assign(PERSON,
              npc_actions,
              npc_speech,
              person_stats
              );

var ANIMAL = Object.create(baseObjects.NPC);
Object.assign(ANIMAL,
              npc_actions,
              );

//concrete objects

// someMethod.call(anotherScope, arg1, arg1); -> use if I need it, probably won't though
/*
var buildEntity = function(buildType, name=buildType.name){
let x = buildType

return roomMaster = Object.create.call(baseObjects, this.x,{});

      Object.assign(roomMaster,
                    TestRoom);
};
*/

TestRoom = Object.create(baseObjects.ROOM,{
  directions: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: [0,0,1,1]
  },
  desc: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 2
  }});

roomList = {}
  Object.assign(roomList, TestRoom)

DeadMan = Object.create(PERSON,{
    status: {
      writable: true,
      configurable: true,
      value: 'dead'
    },
    inventory: {
      writable: true,
      configurable: true,
      value: 'some ham sandwiches'
    }});

// alternative to above - DeadMan.status = "dead"
//                        DeadMan.name = "dead man"
//                        DeadMan.inventory = "some ham sandwiches"

LiveMan = Object.create(PERSON,{

  }); Object.assign(LiveMan,
              person_stats,
              );

Fox = Object.create(ANIMAL,{

  }); Object.assign(Fox,
              small_animal_stats,
              );

Player = Object.create(baseObjects.PLAYER,{
  status: {
    writable: true,
    configurable: true,
    value: 'alive'
  }}); Object.assign(Player,
              player_actions,
              );

//have variable keep track of the current room 'CurrentRoom'. Look method automatically defaults to that.

var CurrentRoom = TestRoom //probs something like CurrentRoom = this.room (with this being the mainloop context?)

//scene module (change to desc_list as better descriptor?)
  var get_desc = {
    '1': 'A room with a view',
    '2': 'More room to view',
    '3': 'A dark dark house, on a dark dark hill',
    'undefined': 'Hard to make out clearly'
  };
