const {Sequelize,DataTypes} = require("sequelize")

const dbConnect = require("../dbConnect")

const User = dbConnect.define("user",{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type:DataTypes.INTEGER
    },
    first_name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    last_name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    age:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

User.sync({alter:true})

module.exports = User
