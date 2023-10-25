const express = require("express");
const recordRoutes = express.Router();
const FilmsController = require("../controllers/FilmsController")


recordRoutes.route("/films").get(FilmsController.getFilms);
recordRoutes.route("/films/:id").get(FilmsController.getFilm);
recordRoutes.route("/films/:id").put(FilmsController.updateFilm);
recordRoutes.route("/films/:id").delete(FilmsController.deleteFilm);
recordRoutes.route("/addFilm").post(FilmsController.addFilms);





module.exports = recordRoutes;