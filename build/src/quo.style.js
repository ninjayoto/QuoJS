/*
  QuoJS 2.2.0
  (c) 2011, 2012 Javi Jiménez Villar (@soyjavi)
  http://quojs.tapquo.com
*/

(function($$) {
  var _computedStyle, _existsClass;
  $$.fn.addClass = function(name) {
    return this.each(function() {
      if (!_existsClass(name, this.className)) {
        this.className += " " + name;
        return this.className = this.className.trim();
      }
    });
  };
  $$.fn.removeClass = function(name) {
    return this.each(function() {
      if (!name) {
        return this.className = "";
      } else {
        if (_existsClass(name, this.className)) {
          return this.className = this.className.replace(name, " ").replace(/\s+/g, " ").trim();
        }
      }
    });
  };
  $$.fn.toggleClass = function(name) {
    return this.each(function() {
      if (_existsClass(name, this.className)) {
        return this.className = this.className.replace(name, " ");
      } else {
        this.className += " " + name;
        return this.className = this.className.trim();
      }
    });
  };
  $$.fn.hasClass = function(name) {
    return _existsClass(name, this[0].className);
  };
  $$.fn.style = function(property, value) {
    if (!value) {
      return this[0].style[property] || _computedStyle(this[0], property);
    } else {
      return this.each(function() {
        return this.style[property] = value;
      });
    }
  };
  _existsClass = function(name, className) {
    var classes;
    classes = className.split(/\s+/g);
    return classes.indexOf(name) >= 0;
  };
  _computedStyle = function(element, property) {
    return document.defaultView.getComputedStyle(element, "")[property];
  };
})(Quo);
