const mongoose = require('mongoose')

const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    decricao: String

})

const homeModel = mongoose.model('Home', HomeSchema)

class Home{
    
}
module.exports = home;