var move = {
        moveSlow: function () {
            console.log('moving slow');
        },
        moveFast: function() {
        		console.log('moving fast')
        }
    };

var speak = {
      say: function(words){
          console.log(this.name+' says '+words)
      }
}

function NPC(name, type, stats) {
  this.type = type || 'Thing';
  this.name = name || 'Mysterious ' + this.type;
  this.stats = stats || {health:'10',stamina:'10',sanity:'10'}; //this needs redoing - see main.js for examples
}

function person(name, type, stats) {
  this.dept = 'engineering';
	this.base = NPC;
	this.base(name, type, stats);
   Object.assign(     // Merge our 'behaviour' objects
        this,
        move,
        speak
        );
}

var sam = new person();








//would want to wrap all behavioural functions into a module so as to prevent them being called, except during
//object creation

var voice = function (state) {
    var noise = state.noise || 'grunt';

    return {
        voice: function () {
            console.log(state.name + ' says ' + noise);
        }
    };
};

var move = function (state) {
    return {
        moveSlowly: function () {
            console.log(state.name + ' is moving slowly');
        },
        moveQuickly: function () {
            console.log(state.name + ' is moving quickly');
        }
    };
};

var stats = function (state) {
    return {
        getState: function () {
            return state;
        }
    };
};

//likewise, all object (npc) factories must be wrapped in a module
var npc = function(){
	 var type = 'npc'
   return
}

var person = function (name, age) {
    var state = {
        name: name,
        age: age,
        noise: 'Hello'
    };

    return Object.assign(     // Merge our 'behaviour' objects
        {},
        voice(state),
        move(state),
        stats(state) //exposing entity state for now, may remove at later date
    );

};
person.prototype = new npc();

var rabbit = function (name, colour) {
    var state = {
        name: name,
        colour: colour
    };

    return Object.assign(
        {},
        move(state)
    );
};

//same as above - wrap this please

var object = function(name, type){

}

//testing

var fred = person('Fred', 42);
fred.voice();        // outputs: Fred says Hello
fred.moveSlowly();   // outputs: Fred is moving slowly

var snowy = rabbit('Snowy', 'white');
snowy.moveSlowly();  // outputs: Snowy is moving slowly
snowy.moveQuickly(); // outputs: Snowy is moving quickly

var x = fred.getState()
console.log(x.name);
console.log(fred)
console.log(person())
snowy.voice();       // ERROR: snowy.speak is not a function
