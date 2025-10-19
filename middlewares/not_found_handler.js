const not_fount_handler  = (req,res)=>{
    return res.status(404).json({ 
        success: false,
        message:`the request ${req.method} with the url${req.url} was not found `
    }) 

}
export default not_fount_handler