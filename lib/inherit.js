function inherit(klass, features) {
  var newObject = null;
  if (features === undefined) {
    features = klass;
    klass = Object;
    newObject = {};
  } else {
    var ctor = function ConstructorWrapper() {};
    ctor.prototype = klass.prototype;
    newObject = new ctor();
  }

  // constructor not supplied, create pass-through ctor
  if (features.constructor === Object) {
    features.constructor = function () {
      if (klass !== Object) {
        return klass.apply(this, arguments);
      }
    };
  }

  features.constructor.prototype = newObject;
  util.update(features.constructor.prototype, features);
  features.constructor.__super__ = klass;
  return features.constructor;
}

modules.exports = inherit;
