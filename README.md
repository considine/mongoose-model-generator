# mongoose-model-generator
This is a tool that allows you to generate a mongoose model quickly 
without typing boiler plate code. All you need to do is enter the model itself:
## example
module.exports = require("./utils/createModel").createModel("tracker", 
{
    name : {type : String, required : true},
    lastname : String,
    age : number
});


this will export a model with the schema that was entered as the second argument, with the name of the collection being the first


