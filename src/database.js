const mongoose = require('mongoose');

const URI = 'mongodb.//localhost/portfolio';

mongoose.connect(URI)
    .then(db => console.log('DB ia connected'))
    .catch(err => console.error(err));

module.exports = mongoose;