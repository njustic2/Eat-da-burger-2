// Connect to the Object Relational Model ===============================================================================
var orm = require("../config/orm.js");

// A variable to hold of the connections ================================================================================
var burger = {
	
// Uses the orm to connect and manipulate the data ======================================================================
	selectAll: function(callback) {
    	orm.selectAll("burgers", function(res) {
      	callback(res);
    	});
  	},

  	insertOne: function(columns, values, callback) {
    	orm.insertOne("burgers", columns, values, function(res) {
      	callback(res);
    	});
  	},

  	updateOne: function(values, condition, callback) {
    	orm.updateOne("burgers", values, condition, function(res) {
      	callback(res);
    	});
  	},
};

// Exports the burger varaible ==========================================================================================
module.exports = burger;