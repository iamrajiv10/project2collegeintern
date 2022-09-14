const internModel= require("../model/internModel")
const collegeModel= require("../model/collegeModel")


//-----------------------------creating intern------------------------------------------

const intern= async function(req,res){
    try {
    
    let data= req.body

    let collegeName = data.collegeName
    if(!collegeName) return res.status(400).send({status:false,message:"collegeName is  required"})
    let collegeNameis = await collegeModel.findOne({name: collegeName});
    if (!collegeNameis) return res.send({status: false, msg:"alisha ka clg ni hai ${collegeName}"})
    //data.collegeId = collegeNameis._id;

    let {name, mobile, email}=data
    if(Object.keys(data).length===0) return res.status(400).send({status:false,message:"please fill the required field"})
    if(!name) return res.status(400).send({status:false, message:"name required"})
    if(!mobile) return res.status(400).send({status:false,message:"Mobile no is required"})
    if(!email) return res.status(400).send({status:false,message:"email is required"})

    //if(!collegeName) return res.status(400).send({status:false,message:"collegeName is  required"})
    let saveData= await internModel.create(data)
    return res.status(201).send({status:true,data:saveData})

} catch (error) {
    return res.status(500).send({status:false, message:error.message})
}
}





module.exports={intern}