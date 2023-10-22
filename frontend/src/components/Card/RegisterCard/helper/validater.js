import toast from 'react-hot-toast'

export async function userValidate(values){
    const errors = userVerify({},values);
    return errors;
}

function userVerify(error = {},values){
    if(!values.FirstName){
        error.FirstName = toast.error("First Name required");
    }else{
        if(!values.LastName){
            error.LastName = toast.error("Last Name required");
        }else {
            if(!values.email){
               error.email = toast.error("Email required");
            }else {
                if(values.email.includes(" ")){
                    error.email = toast.error('Invalid Email');
                }else{
                    if(!values.password){
                        error.password = toast.error("Password required");
                   }else if(values.password.includes(" ")){
                        error.password = toast.error('Wrong Password');
                   }else if(values.password.length < 6){
                        error.password = toast.error('Password Must be more than 6 character long');
                   }else if(values.password.length < 6){
                        error.password = toast.error('Password Must be more than 6 character long');
                   }
                }
            }
        }
    }

    return error;
}