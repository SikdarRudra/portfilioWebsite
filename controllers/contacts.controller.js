import Contact from "../models/contacts.model.js"

export const createContact = async(req,res)=>{
    try {
        const {name ,email, message,contact }= req.body
        if(Object.values({name ,email, message}).some((field)=>!field)){
            return res.status(400).json({
                success:false,
                message:"please fill all the fields to send message"
            })
        }
        await Contact.create({
            name,email,message,contact
        })
        return res.status(201).json({
            success:true,
            message:"meaasge sent successfully... Thank You"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export const getAllContactsForAdmin = async(req,res)=>{
    try {
        const allContacts = await Contact.find().sort({createdAt:-1})
        return res.status(200).json({
            success:true,
            count:allContacts.length,
            allContacts
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}