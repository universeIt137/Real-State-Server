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
};

exports.phoneNumberUpdate = async (req,res)=>{
    try {
        let reqBody = req.body;
        let id = req.params.id;
        let data = await phoneModel.findByIdAndUpdate(id, reqBody, {new: true});
        if(!data){
            return res.status(404).json({
                status : "fail",
                message: "Phone number not found",
            })
        }
        return res.status(200).json({
            status : "success",
            message: "Phone number updated successfully",
            data : data,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status : "fail",
            message: "Failed to update phone number",
            error : error,
        })
    }
}

exports.phoneNumberDelete = async (req,res)=>{
    try {
        let id = req.params.id;
        let data = await phoneModel.findByIdAndDelete(id);
        if(!data){
            return res.status(404).json({
                status : "fail",
                message: "Phone number not found",
            })
        }
        return res.status(200).json({
            status : "success",
            message: "Phone number deleted successfully",
            data : data,
        });
    } catch (error) {
        return res.status(500).json({
            status : "fail",
            message: "Failed to delete phone number",
            error : error,
        })
    }
};

exports.phoneNumberList = async (req,res)=>{
    try {
        let data = await phoneModel.find({});
        return res.status(200).json({
            status : "success",
            message: "Phone number list fetched successfully",
            data : data,
        });
    } catch (error) {
        return res.status(500).json({
            status : "fail",
            message: "Failed to fetch phone number list",
            error : error,
        })
    }
};

exports.phoneNumberById = async (req,res)=>{
    try {
        let id = req.params.id;
        let data = await phoneModel.findById(id);
        if(!data){
            return res.status(404).json({
                status : "fail",
                message: "Phone number not found",
            })
        }
        return res.status(200).json({
            status : "success",
            message: "Phone number fetched successfully",
            data : data,
        });
    } catch (error) {
        return res.status(500).json({
            status : "fail",
            message: "Failed to fetch phone number",
            error : error,
        })
    }
}