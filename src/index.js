const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect("mongodb+srv://GabProg:programmer@clustergabprog-7en34.mongodb.net/Library?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json());
app.use(routes);

app.listen(3000);
