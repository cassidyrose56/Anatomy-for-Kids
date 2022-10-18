const mongoose = require('mongoose')

const MONGO_URI = 'mongodb+srv://cassidyrose56:9umdNsycRGEwaDbV@cluster0.6fihegb.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'anatomyForKids'
  })
    // .then(() => console.log('Connected to Mongo DB.'))
    // .catch(err => console.log(err));

const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

const Schema = mongoose.Schema;

const bodySchema = new Schema({
    name: String,
    classification: String,
    purpose: String,
    parts: String
})

const Body = mongoose.model('body', bodySchema);

module.exports = {
  Body
}

