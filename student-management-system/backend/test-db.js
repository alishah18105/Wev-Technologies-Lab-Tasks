const pool = require("./db");

pool.query("SELECT NOW()", (err, result) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Database connected successfully!");
        console.log(result.rows[0]);
    }

    pool.end();
});