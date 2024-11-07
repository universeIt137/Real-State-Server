const phoneModel = require("../model/contactPhoneModel");

exports.phoneNumberUpload = async (req,res)=>{
    try {
        let reqBody = req.body;
        let data = await phoneModel.create(reqBody);
        return res.status(201).json({
            status : "success",
            message: "Phone number uploaded successfully",
            data : data,
        });
    } catch (error) {
        return res.status(500).json({
            status : "fail",
            message: "Failed to upload phone number",
            error : error,
        })
    }
}