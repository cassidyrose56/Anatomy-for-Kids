const mongoose = require('mongoose')

const MONGO_URI = 'mongodb+srv://cassidyrose56:9umdNsycRGEwaDbV@cluster0.6fihegb.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'anatomyForKids'
  })

const db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error:"))
db.once('open', () => console.log('Connected to database'))

const Schema = mongoose.Schema;

const bodySchema = new Schema({
    name: String,
    classification: String,
    purpose: String,
    parts: String
})

const Body = mongoose.model('Body', bodySchema);
// console.log(Body.find({}))

module.exports = {
  Body
}

