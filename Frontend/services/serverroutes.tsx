const url = "http://127.0.0.1:8000/";

export const Server = {
    signUp,
    login,
    updateUser,
    deleteUser,
    getUserData,
    bookAppointment,
    getAppointments,
    deleteAppointment,
    updateAppointment,
};

//User
function signUp(data: any) {
    const req = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: data
    };
    return fetch(url + "/signup", req).then(response => response.json());
}
function login(data: any) {
    const req = {
        method: 'get',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: data
    };
    return fetch(url + "/login", req).then(receivedData => receivedData.json());
}
function updateUser(data: any){
    const req = {
        method: 'put',
        headers: {'Content-Type':'application/json'},
        body: data 
    };
    return fetch(url + "/editprofile",req).then(response => response.json());
}
function deleteUser(uemail: any){
    const req = {
        method: 'delete',
        headers: {'Content-Type':'application/json'},
        body: uemail
    };
    return fetch(url+"deleteprofile", req).then(response => response.json());
}
function getUserData(uid: any) {
    const req = {
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        body: uid
    }
    return fetch(url + "/profile", req).then(receivedData => receivedData.json());
}

// Appointments
function bookAppointment(data: any) {
    const req = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    return fetch(url + "/appointments", req).then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert("Successfully created appointment!");
    })
    .catch((error) => {
      console.error('Error:', error);
      alert(error);
    });
}
function getAppointments(data: any) {
    const req = {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
        body: data
    };
    return fetch(url + "/appointments", req).then(receivedData => receivedData.json());
}
function deleteAppointment(mid: any){
    const req = {
        method: 'delete',
        body: mid
    };
    return fetch(url + "/appointments", req).then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert("Successfully deleted appointment!");
      })
      .catch((error) => {
        console.error('Error:', error);
        alert(error);
      });
}
function updateAppointment(mid: any, data: any){
    const req = {
        method: 'put',
        headers: {'Content-Type':'application/json'}, 
        body: JSON.stringify(data)
    };
    return fetch(url + "/appointments", req).then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert("Successfully updated appointment!");
      })
      .catch((error) => {
        console.error('Error:', error);
        alert(error);
      });
}

export default Server