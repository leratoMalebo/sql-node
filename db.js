import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';
​
const db = await sqlite.open({
    filename: './101.db',
    driver: sqlite3.Database
});
​
​
await db.migrate()
​
​
​
export async function getGreetings(){
    const result = await db.all(`select * from greetings`);
    return result   
}
​
// sync
// const result = await getGreetings()
// console.log(result)
​
​
// async
// getGreetings()
// .then(result => {
​
//     console.log(result)
// });
​
​
// const count_results = await db.all(`select count(*) as count from greetings`);
// console.log(count_results);
​
​
// add greetng to the table
export async function addGreeting(langage, greeting){
​
    //sql statement type - insert
    const sql = `insert into greetings (langage, greeting) values (?, ?)`
​
    await db.run(sql, [langage, greeting]);
​
}
​
//delete by id
​
export async function deleteGreeting(id){
    const sql = `delete from greetings where id = ?`
    await db.run(sql, [id])
}   
​
// delete langage by langage
export async function deleteGreetingByLangage(langage){
    const sql = `delete from greetings where langage = ? `
    await db.run(sql, [langage])
}
​
// do update the langage
export async function updateLangage(langage, greeting, id){
    const sql = `update greetings set langage= ?, greeting=? where id= ?`
    await db.run(sql, [langage, greeting, id])
}
​
const result1 = await getGreetings()
console.log(result1)
console.log("===========================================")
​
​
// add langage
// await addGreeting('venda', 'Ndaa');
​
// delete by id
// await deleteGreeting(8);
​
// call delete by langage
// await deleteGreetingByLangage('english')
​
// pdate langage
​
​
// await updateLangage('venda', 'Aahh', '14')
​
console.log("===========================================")
​
const result2 = await getGreetings()
console.log(result2)