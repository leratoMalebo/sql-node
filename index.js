import express from 'express';
import {getGreetings, addGreeting} from './db.js'

const app = express();


//http://localhost:4006/api/greetings

//get all the greetings

app.get('/api/greetings', async (req, res) =>{
const greetings= await getGreeting();
console.log(greetings);
res.json({
    greetings
   })
});

//create a  route to add a greeting
//?

app.post('/api/greeting', (req, res)=>{

 const greeting=req.body.greeting;
 const language=req.body.language;

 res.json({
    language,
    greeting
 }

 )
})

const PORT = process.env.PORT || 4006;
app.listen(PORT, () => console.log(`started on port : ${PORT}`) )
//ends here