const url = "http://127.0.0.1:8000";

export const Server = {
    login,
    signup,
    editProfile,
    deleteProfile,
    addProfessional,
    createAppointment,
    viewAppointments,
    addConditions,
    manageAppointments,
};

//User
function login(data: any){
    const req = {
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        body: data
    };
    return fetch(url + "/login", req).then(response => response.json());
}
function signup(data: any){
    const req = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: data
    };
    return fetch(url+"/signup", req).then(response => response.json());
}
function editProfile(data: any){
    const req = {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: data
    };
    return fetch(url+"/profile", req).then(response => response.json());
}
function deleteProfile(data: any){
    const req = {
        method: 'delete',
        headers: {'Content-Type': 'application/json'},
        body: data
    };
    return fetch(url+"/profile", req).then(response => response.json());
}
function addProfessional(data: any){
    const req = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: data
    };
    return fetch(url+"/profile", req).then(response => response.json());
}
function createAppointment(data: any){
    const req = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: data
    };
    return fetch(url+"/appointments", req).then(response => response.json());
}
function viewAppointments(data: any){
    const req = {
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        body: data
    };
    return fetch(url+"/appointments", req).then(response => response.json());
}
function addConditions(data: any){
    const req = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: data
    };
    return fetch(url+"/profile", req).then(response => response.json());
}
function manageAppointments(data: any){
    const req = {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: data
    };
    return fetch(url+"/prof/appointments", req).then(response => response.json());
}

