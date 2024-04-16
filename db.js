const mongoose = require('mongoose');
const mongoURI = 'mongodb://canteen:11111616@ac-ihwcx7o-shard-00-00.nd2so5w.mongodb.net:27017,ac-ihwcx7o-shard-00-01.nd2so5w.mongodb.net:27017,ac-ihwcx7o-shard-00-02.nd2so5w.mongodb.net:27017/canteenmern?ssl=true&replicaSet=atlas-1086r6-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log('Connected to MongoDB');
        
        // Once connected, we perform additional operations here
        // Accessing the collection and fetching data
        const collection = mongoose.connection.db.collection('food_items');
        const data = await collection.find({}).toArray();
        console.log();
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectToMongoDB;
