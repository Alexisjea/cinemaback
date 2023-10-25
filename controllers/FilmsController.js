const FilmsModel = require("../models/FilmsModel")
const mongoose = require("mongoose");
const {ObjectId} = mongoose.Types

const  getFilms = (async (req,res)=> {
    const films = await FilmsModel.find();
    res.status(200).json(films);
})

const addFilms = async (req, res) => {
    const newFilm = new FilmsModel(req.body);
  
    try {
        await newFilm.save();
        res.json(newFilm);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const getFilm = ( (req, res) => {
    let id = req.params.id;
    let objectId = new ObjectId(id)
    console.log(objectId)
   // const film =  FilmsModel.findById(objectId).select("nom");
   FilmsModel.findById(objectId).then((film) => {             
    if (film) {                 
        res.status(200).json(film);             
    } else {                 
        res.status(404).json({ message: "ras le bol film pas trouvé" });             
    }         
})         
.catch((error) => {             
    res.status(500).json({ message: error });});
    
});

const updateFilm = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedFilm = await FilmsModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedFilm) {
            return res.status(404).json({ message: 'Film not found' });
        }
        res.json(updatedFilm);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
};

const deleteFilm = async (req, res) => {
    let {id} = req.params;
    try{
        let film = await FilmsModel.findByIdAndDelete(id);
        if (!film) {
            return res.status(404).json({ message: 'Film introuvable' });
        }
        res.status(200).json({ message: 'Film suprimmé' });
    } catch (err) {
          res.status(500).json({message : err.message});
    }
};



module.exports = {getFilms , addFilms, getFilm, updateFilm, deleteFilm}