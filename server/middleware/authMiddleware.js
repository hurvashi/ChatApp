const jwt = require('jsonwebtoken');

const authMiddleware = (req,res,next)=> {

    const token = header('Authorization');
    if(!token){
        return res.status(400).json({msg:'No token,Authorization denied'})
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
    }


module.exports = authMiddleware;