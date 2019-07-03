const path = require('path');

const sql = require('mssql');

const cookieParser = require('cookie-parser');

const express = require('express');
const app = express();
const router = express.Router();

const dbConfig = {
    user: 'dicoding',
    password: 'D1coding',
    server: 'custom-dicoding-01-db.database.windows.net',
    database: 'custom-dicoding-01-db',
    options: {
        encrypt: true
    }
}

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

router.get('/', async (req, res) => {
    let result = await fetchDataUsers();

    // res.end(JSON.stringify(result));

    res.render('index', 
        { 'result': result.recordset }
    );
});

let fetchDataUsers = async () => {
    let pool;

    try {
        pool = await sql.connect(dbConfig);

        let result = await pool.request()
            .query('SELECT * FROM [dbo].[WebUsers]')

        return result;
    }
    catch (err) {
        console.log(err);
    }
    finally {
        if(pool != null) {
            sql.close();
        }
    }
}

app.use('/', router);
app.listen(process.env.port || 3000);