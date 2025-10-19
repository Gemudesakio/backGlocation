const error_handler = (error,req,res)=>{
    console.log(error);
    
    return res.status(500).json({
        success: false,
        message: `Something went wrong with your request. ${req.method} with the url ${req.url}`,
        error: error.message             
    
    } )
}
export default error_handler