
import tunnelURL from './global.js'

const fetch = require("node-fetch")

export function getGroupMembers(groupID){
  var members  
  //place tunnelURL here 
    fetch("//localhost:3000/api/grouplikelist/6052aa27f8da823a7ea3edce/members")
      
    .then((response) => response.json())

    .then((responseData) => {
      //alert(JSON.stringify(responseData));
      return JSON.parse(responseData);
    })
    .catch(error => console.log('Error'));
  }

  