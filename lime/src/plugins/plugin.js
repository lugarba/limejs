goog.provide('lime.Plugin');

goog.require('lime.Node');

/**
* Plugin
* @param {lime.Node} node Node to extend with the plugin.
* @constructor
*/
lime.Plugin = function(node) {
    this.node_ = node;
};

lime.Plugin.prototype.extendFunction = function(oldFunction, newFunction, opt_addToFront){
    var addToFront = !!opt_addToFront;
    var node = this.node_;
    return function(){
        if (addToFront)
            newFunction.apply(node, arguments);
        
        var result = oldFunction.apply(node, arguments);
        
        if (!addToFront)
            newFunction.apply(node, arguments);
        return result;
    }
};


