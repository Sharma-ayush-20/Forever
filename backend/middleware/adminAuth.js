import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try {
        //check token
        const {token} = req.headers;

        //check token is present or not
        if(!token){
            return res.json({
                success: false,
                message: "Not Authorized Login Again"
            })
        }

        //check details of token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // token_decode => email + password
        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({
                success: false,
                message: "Not Authorized Login Again"
            })
        }   

        next();
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message,
        })
    }
}

export default adminAuth;