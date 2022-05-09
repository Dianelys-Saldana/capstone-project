export const Auth = {
    login,
    isLogged,
    getUId,
    logout
};

function isLogged() {
    const isLogged = localStorage.getItem('isLogged');
    if(isLogged) return true;
    else return false;
}

function login(logged: any, email: any, uid: any){
    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('isLogged', JSON.stringify(logged));
    localStorage.setItem('uid', uid);
}

function getUId() {
    return localStorage.getItem('uid') || "";
}

function logout(){
    localStorage.removeItem('email');
    localStorage.removeItem('uid');
    localStorage.removeItem('isLogged');
}

export default Auth