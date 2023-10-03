const User = require("./database/model/users")

const user =async (req,res)=>{
    let records = await User.findAll()
    records = records.map((record)=>{
        return record.dataValues
    })
    // console.log(a);
    res.render("index", {records })
}

const addUser = async(req,res)=>{
   try {
    const {first_name,last_name,age} = req.body

    // res.send({first_name,last_name,age})

    await User.create({first_name,last_name,age})
    res.send('Data saved successfully')
   } catch (error) {
    console.log(error);
   }
    


}

module.exports={
    user,
    addUser
}