const mongoose = require('mongoose');

const connectdb = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Conectado: ${conn.connection.host}');
    } catch (error) {
        console.error('Error: ${error.message}');
        process.exit(1);
    }
};

module.exports = connectdb;