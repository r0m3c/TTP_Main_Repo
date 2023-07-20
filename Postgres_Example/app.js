const { Client } = require("pg");

(async () => {
    const client = new Client({
        host: "localhost",
        database: "mydatabase",
    });
    
    await client.connect();
    // const resultSet = await client.query("SELECT * FROM meals");
    const resultSet = await client.query(`INSERT INTO meals (food) VALUES ('pizza')`);
    
    console.log(resultSet.rows);
    
    await client.end();
})();