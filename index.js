/**
* @author Jack Considine <jackconsidine3@gmail.com>
* @package portfolio1.0.0
* 2017-08-14
*/

var mongoose = require("mongoose");
var schema = mongoose.Schema;


/**
 * Utility for creating a model while abstracting boilerplate code
 * @param  {String} modelName   The name of the model that will be saved into the db
 * @param  {Object} modelObject The object schema
 * @return {Model}     a model ready to be exported
 */
function createModel(modelName, modelObject) {
  var thisSchema = new schema(modelObject);
  var nameModel = mongoose.model(modelName, thisSchema);
  return nameModel;
}

module.exports.createModel = createModel;

