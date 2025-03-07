import bcrypt from 'bcrypt';

export const hashPassword = async(password)=>{

    //formula of saltRound number_of_iterations = 2 * 10 ---> 1024 iteration 
    try {
        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(password, saltRound);
        return hashedPassword;
    } catch (error) {
        console.log(error);
    }
    
}

export const comparePassword = async (password,hashedPassword)=>{
    try {
        return bcrypt.compare(password, hashedPassword);
    } catch (error) {
        console.log(error);
    }
}