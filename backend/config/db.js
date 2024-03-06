const mongoose = require("mongoose");

const dbUser = process.env.DB_USER;
const dbPassord = process.env.DB_PASSWORD;

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassord}@cluster0.3w9bbyf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
            );

            console.log('Conectou ao banco');

            return dbConn
    } catch (err) {
        console.log(err)
    }   
};

conn() 

module.exports = conn


