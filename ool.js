//behavioural utility function is defined

var voice = {
        noise: state.noise || 'grunt';
        voice: function () {
            console.log(state.name + ' says ' + noise);
        }
    };
};

//base object is defined

var Task = {
  value: '1234',
	setID: function(ID) { this.id = ID; },
	outputID: function() { console.log( this.id ); }
};

// make `XYZ` delegate to `Task`
var XYZ = Object.create( Task );

Object.assign(XYZ, voice); //merge in some behaviour method

XYZ.prepareTask = function(ID,Label) {
	this.setID( ID );
	this.label = Label;
};

XYZ.outputTaskDetails = function() {
	this.outputID();
};

//will show '1234' as defined in the original object 'Task'
console.log(XYZ.value);
