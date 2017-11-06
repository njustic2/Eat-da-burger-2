// Connect to the connection.js file ======================================================================================
var connection = require("./connection.js");

// Helper functions for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function sendObject(ob) {
  var arr = [];

  for (var key in ob) {
      arr.push(key + "=" + ob[key]);
  }
	return arr.toString();
}

// A variable to hold the Object Relational Models ========================================================================
var orm = {
	
// An ORM that selects all of the table info ==============================================================================
	selectAll: function(burgers, callback){
		var queryString = "SELECT * FROM " + burgers + ";"
		connection.query(queryString, function(err, result){
			if (err){
				throw err;
			}
			callback(result);
			console.log("Result", result)
		});
	},

// An ORM that inserts data into one table entry ===========================================================================	
	insertOne: function(table, columns, values, callback){
		var queryString = "INSERT INTO " + table;		
		queryString += "(";
		queryString += columns.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(values.length);
		queryString += ") ";

		console.log("queryString", queryString);
		connection.query(queryString, values, function(err, result) {
			if (err) {
				throw err;
      		};
      		callback(result);
      	});
	},

// An ORM that updates one table entry ===================================================================================
	updateOne: function(burgers, values, condition, callback) {
    	var queryString = "UPDATE " + burgers;
	    queryString += " SET ";
	    queryString += sendObject(values);
	    queryString += " WHERE ";
	    queryString += condition;

	    console.log("queryString", queryString)
    	connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
      		}
      		callback(result);
    	});
	}
};

// Export the Object Relational Models ===================================================================================
module.exports = orm;