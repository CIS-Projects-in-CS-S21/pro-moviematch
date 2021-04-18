import tunnelURL from './../common/global.js'

function getGroupList(groupID){
    return fetch(tunnelURL + "/api/grouplikelist/:id/members", {
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