


const mongoose = require('mongoose');



mongoose.connect('mongodb+srv://Daniel98:Danielprogramacionweb98@devcamp.lw3rsfg.mongodb.net/?retryWrites=true&w=majority&appName=books', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});


module.exports = mongoose;