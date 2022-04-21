let pass = "";

export const emailValidator = (email: string) => {
    // const re = /\S+@\S+\.\S+/;
  
    if (!email || email.length <= 0) return 'Email cannot be empty.';
    // if (!re.test(email)) return 'Ooops! We need a valid email address.';
  
    return '';
};
  
export const passwordValidator = (password: string) => {
pass = password
if (!password || String(password).length <= 0) return 'Password cannot be empty.';

return '';
};

export const confPasswordValidator = (confPassword: string) => {
    if (confPassword != pass) return 'Password must be the same.';
    
    return '';
};

export const nameValidator = (name: string) => {
if (!name || name.length <= 0) return 'Name cannot be empty.';

return '';
};

export const lastNameValidator = (name: string) => {
    if (!name || name.length <= 0) return 'Last Name cannot be empty.';
    
    return '';
};