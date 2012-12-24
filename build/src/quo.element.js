/*
  QuoJS 2.2.0
  (c) 2011, 2012 Javi Jiménez Villar (@soyjavi)
  http://quojs.tapquo.com
*/

(function($$) {
  $$.fn.attr = function(name, value) {
    if ($$.toType(name) === "string" && value === void 0) {
      return this[0].getAttribute(name);
    } else {
      return this.each(function() {
        return this.setAttribute(name, value);
      });
    }
  };
  $$.fn.data = function(name, value) {
    return this.attr("data-" + name, value);
  };
  $$.fn.val = function(value) {
    if ($$.toType(value) === "string") {
      return this.each(function() {
        return this.value = value;
      });
    } else {
      if (this.length > 0) {
        return this[0].value;
      } else {
        return null;
      }
    }
  };
  $$.fn.show = function() {
    return this.style("display", "block");
  };
  $$.fn.hide = function() {
    return this.style("display", "none");
  };
  $$.fn.height = function() {
    var offset;
    offset = this.offset();
    return offset.height;
  };
  $$.fn.width = function() {
    var offset;
    offset = this.offset();
    return offset.width;
  };
  $$.fn.offset = function() {
    var bounding;
    bounding = this[0].getBoundingClientRect();
    return {
      left: bounding.left + window.pageXOffset,
      top: bounding.top + window.pageYOffset,
      width: bounding.width,
      height: bounding.height
    };
  };
  $$.fn.remove = function() {
    return this.each(function() {
      if (this.parentNode != null) {
        return this.parentNode.removeChild(this);
      }
    });
  };
})(Quo);
