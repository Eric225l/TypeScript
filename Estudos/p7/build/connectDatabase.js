import { Pool } from "pg";
let pool = new Pool({
    connectionString: process.env.DATABASE_URL || " ",
    ssl: true
});
export async function connectionDatabase() {
    try {
        let client = await pool.connect();
        const result = await client.query("SELECT NOW()");
        console.log(result.rows[0].now);
        return client;
    }
    catch (err) {
        console.log(`ERRO de conexão com o banco: ${err}`);
        throw err;
    }
}
connectionDatabase();
//# sourceMappingURL=connectDatabase.js.map