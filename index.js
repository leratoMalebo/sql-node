import express from 'express';
import { addGreeting, getGreetings, deleteGreeting, deleteGreetingByLangage, updateLangage } from './db.js';
const app = express()
//
app.use(express.json());
app.use(express.static('public'));
const PORT = process.env.PORT || 4008;
app.listen(PORT, ()=> console.log(`started on : ${PORT}`))
// create the greetings api
//get greetngs
app.get('/api/greetings', async (req, res)=> {
    const greetings = await getGreetings();
    console.log(greetings)
    res.json({
        greetings
    })
})
// riwu
// add greetngs
app.post('/api/greetings', async (req, res)=> {
    const langage = req.body.langage
    const greeting = req.body.greeting
    // add langage
    await addGreeting(langage, greeting);
    res.json({
        status: 'Success',
        message: `greeting '${greeting}' added for ${langage}`
        // langage, 
        // greeting
    })
})
// endpont for update
app.post('/api/greetings/edt', async (req, res)=> {
    const langage = req.body.langage
    const greeting = req.body.greeting
    // add langage
    await addGreeting(langage, greeting);
    res.json({
        status: 'Success',
        message: `greeting '${greeting}' added for ${langage}`
        // langage, 
        // greeting
    })  
})
// console.log('start')
// console.log('end')