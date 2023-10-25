const mongoose = require("mongoose");
const Db = process.env.DB_URL;
mongoose.connect(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Correctement connecté à MongoDB.');
})
.catch(err => {
  console.error('Erreur avec la connection à MongoDB:', err);
});