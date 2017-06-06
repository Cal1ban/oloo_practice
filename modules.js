//revealing module pattern

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


Module.someMethod();


var ModuleTwo = (function (Module) {

    Module.extension = function () {
        // another method!
    };

    return Module;

})(Module || {});


Module.extension();
