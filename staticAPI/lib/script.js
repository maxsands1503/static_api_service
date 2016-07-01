exports = module.exports = {}

exports.accessFirst = function(input){
  var result = [];
  for(var i = 0; i < input.length; i++){
    result.push(input[i].user_data.first_name)
  }
  return result
}
exports.accessLast = function (input){
  var result = [];
  for(var i = 0; i < input.length; i++){
    result.push(input[i].user_data.last_name)
  }
  return result
}
exports.userStatus = function(input){
  var result = [];
  for(var i = 0; i < input.length; i++){
    if(input[i].user_data.active === 1)
    result.push(input[i].user_data.first_name + " " +input[i].user_data.last_name)
  }
  return result
}
