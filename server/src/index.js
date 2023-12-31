import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(cors());
//Better practice would not to be having password in here, only here like this for simplicity
mongoose.connect("mongodb+srv://killianhedou:<password>@recipes.yazivlj.mongodb.net/recipes?retryWrites=true&w=majority");

app.listen(3001, () => console.log('Server Started'));