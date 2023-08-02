import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';


const db = await sqlite.open({
    filename: './101.db',
    driver: sqlite3.Database
});


await db.migrate()



export async function getGreetings(){
    const result = await db.all(`select * from greetings`);
    return result   
}

// sync
// const result = await getGreetings()
// console.log(result)​
// async
// getGreetings()
// .then(result => {

//     console.log(result)
// });


// const count_results = await db.all(`select count(*) as count from greetings`);
// console.log(count_results);


// add greetng to the table
export async function addGreeting(language, greeting){

    //sql statement type - insert
    const sql = `insert into greetings (language, greeting) values (?, ?)`

    await db.run(sql, [language, greeting]);

}

//delete by id

export async function deleteGreeting(id){
    const sql = `delete from greetings where id = ?`
    await db.run(sql, [id])
}   

// delete langage by langage
export async function deleteGreetingByLangage(language){
    const sql = `delete from greetings where language = ? `
    await db.run(sql, [language])
}

// do update the langage
export async function updateLangage(language, greeting, id){
    const sql = `update greetings set language= ?, greeting=? where id= ?`
    await db.run(sql, [language, greeting, id])
}

const result1 = await getGreetings()
console.log(result1);
console.log("===========================================");

// add langage
// await addGreeting('venda', 'Ndaa');

// delete by id
// await deleteGreeting(8);

// call delete by langage
// await deleteGreetingByLangage('english')

// pdate langage


// await updateLangage('venda', 'Aahh', '14')

console.log("===========================================")

const result2 = await getGreetings()
console.log(result2)