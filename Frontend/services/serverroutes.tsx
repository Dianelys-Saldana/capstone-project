const url = "http://127.0.0.1:8000";

export const Server = {
    login,
    signup,
    /*
    editProfile,
    deleteProfile,
    addProfessional,
    createAppointment,
    viewAppointments,
    addConditions,
     */
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