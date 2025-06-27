import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {

    const {token} = req.headers;

    if(!token){
        return res.json({
            success: false,
            message: 'Not Authorized Login Again',
        })
    }

    
}

export default authUser