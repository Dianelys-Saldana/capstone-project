const url = "http://127.0.0.1:8000/"; // Modify?

export const Server = {
    getUsers,
    signUp,
    login,
    userAuth,
    getUserData,
    getRoles,
    // getRooms,
    // addNewRoom,
    // updateRoom,
    // deleteRoom,
    // getMeetings,
    // isDepartment,
    // bookMeeting,
    // bookUnavailable,
    // getUserMeetings,
    // deleteMeeting,
    // getTop10Rooms,
    // getTop10Users,
    // getTop5Hours,
    // getUserTopRoom,
    // getTopBookedUser, 
    // updateUser,
    // updateMeeting,
};

//User
function getUsers() {
    return fetch(url + "/users").then(receivedData => receivedData.json());
}
function getUserData(uid: any) {
    return fetch(url + "/users/" + uid).then(receivedData => receivedData.json());
}
function login(data: any) {
    const req = {
        method: 'post',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: data
    };
    return fetch(url + "/users/login", req).then(receivedData => receivedData.json());
}

function signUp(data: any) {
    const req = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: data
    };
    return fetch(url + "/users", req).then(response => response.json());
}

//Room
const rooms = "/room";
function getRooms() {
    return fetch(url + rooms).then(response => response.json());
}
function addNewRoom(data: any) {
    const req = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: data
    };
    return fetch(url + rooms, req).then(response => response.json());
}
function updateRoom(data: any, rmId: any) {
    const req = {
        method: 'put',
        headers: { 'Content-Type': 'applications/json' },
        body: data
    };
    return fetch(url + rooms + "/" + rmId, req).then(response => response.json());
}
function deleteRoom(room: any) {
    const req = {
        method: 'delete'
    };
    return fetch(url + rooms + "/" + room, req).then(response => response.json());
}
function updateUser(uid: any, data: any){
    const req = {
        method: 'put',
        headers: {'Content-Type':'application/json'},
        body: data 
    };
    return fetch(url + "/users/"+uid,req).then(response => response.json());
}
// Meeting

function getMeetings() {
    const req = {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch(url + "/meetings").then(receivedData => receivedData.json());
}

function bookMeeting(data: any) {
    const req = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    return fetch(url + "/meetings", req).then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      if ('not_invited' in data){
        alert("Successfully created meetings, but the following people could not be invited: " + data["not_invited"]);
      }
      else{
        alert("Successfully created meeting with all invitees!");
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert(error);
    });
}

function bookUnavailable(data: any) {
    const req = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    return fetch(url + "/user-unavailable/" + data["uid"], req).then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert("Successfully marked time as unavailable!");
        })
        .catch((error) => {
            console.error('Error:', error);
            alert(error);
        });
}

function userAuth() {

    return fetch(url + "/users").then(response => response.json());
}

function isDepartment(uid: any) {
    return fetch(url + "/isDepartment?uid=" + uid).then(response => response.json());
}

function getUserMeetings(uid: any){
    return fetch(url + "/user-meetings?uid=" + uid).then(response => response.json());
}

function getTop10Rooms(){
    return fetch(url + "/statistics/top10mostbookedrooms").then(response => response.json());
}

function getTop10Users(){
    return fetch(url + "/statistics/top10mostbookedusers").then(response => response.json());
}
function getTop5Hours(){
    return fetch(url + "/statistics/top5busiesthours").then(response => response.json());
}

function getUserTopRoom(uid: any){
    return fetch(url + "/statistics/most-used-room?uid=" + uid).then(response => response.json());
}

function getTopBookedUser(uid: any){
    return fetch(url + "/statistics/most-booked-user?uid=" + uid).then(response => response.json());
}


function getRoles(){
    return fetch(url + "/roles").then(response => response.json());
}

function deleteMeeting(mid: any){
    const req = {
        method: 'DELETE',
    };
    return fetch(url + "/meetings/" + mid, req).then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert("Successfully deleted meeting!");
      })
      .catch((error) => {
        console.error('Error:', error);
        alert(error);
      });
}

function updateMeeting(mid: any, data: any){
    const req = {
        method: 'PUT',
        headers: {'Content-Type':'application/json'}, 
        body: JSON.stringify(data)
    };
    return fetch(url + "/meetings/" + mid, req).then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert("Successfully update meeting!");
      })
      .catch((error) => {
        console.error('Error:', error);
        alert(error);
      });
}

export default Server