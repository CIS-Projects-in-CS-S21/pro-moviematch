import tunnelURL from './../common/global.js'

export function getGroupLikeList(groupID){
    //place tunnelURL here 
    return fetch("http://localhost:3000/api/grouplikelist/6052aa27f8da823a7ea3edce/members", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        members: members
      })
    })
    .then((response) => response.json())

    .then((responseData) => {
      //alert(JSON.stringify(responseData));
      return responseData;
    })
    .catch(error => alert('Error'));
  }