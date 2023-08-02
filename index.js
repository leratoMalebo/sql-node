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
// add greetings
app.post('/api/greetings', async (req, res)=> {
    const language = req.body.language
    const greeting = req.body.greeting
    // add langage
    await addGreeting(language, greeting);
    res.json({
        status: 'Success',
        message: `greeting '${greeting}' added for ${language}`
        // langage, 
        // greeting
    })
})

//
// endpont for update
app.post('/api/greetings/edt', async (req, res)=> {
    const language = req.body.language;
    const greeting = req.body.greeting;
    const id=req.body.id;
    // add langage
    await updateLangage(language, greeting,id);
    res.json({
        status: 'Success',
        message: `greeting '${greeting}' updated for ${language}`
    })  
})
//delete Greeting by id
app.post('/api/greetings/edt', async (req, res)=> {
    const id=req.body.id;
    // add langage
    await deleteGreeting(id);
    res.json({
        status: 'Success',
        message: `greeting with ${id} deleted`
    })  
})

//delete Greeting By Langage
app.post('/api/greetings/edt', async (req, res)=> {
    const language=req.body.language;
    // add langage
    await deleteGreeting(language);
    res.json({
        status: 'Success',
        message: `greeting with ${language} deleted`
    })  
})
// console.log('start')
// console.log('end')