const mongoose = require('mongoose');

const FilmsModel = new mongoose.Schema({
	
	nom: String,
    realisateur: String,
	annee: String,
	createdAt:{
        type:Date,
        default: new Date()
    }
	
});

module.exports = mongoose.model(
	'films', FilmsModel, 'Films');
