const jwt = require("jsonwebtoken");

const authentication=(req,res,next)=>{
try{
    if(!req.body.authorization){
      
        res.status(403).json(`Forbidden`)
    }
const token=req.body.authorization.split('').pop();
console.log(token);
jwt.verify(token,process.env.SECRET,(err,result)=>{
    if (err) {
        res.status(403).json({
          success: false,
          message: `The token is invalid or expired`,
        });
      } else {
        req.token = result;
        next();
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Server Error`,
      err: err.message,
    });
  }
};

module.exports = authentication;
