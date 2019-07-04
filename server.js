// const path = require('path');

// const sql = require('mssql');

// const cookieParser = require('cookie-parser');

// const express = require('express');
// const app = express();
// const router = express.Router();

// const dbConfig = {
//     user: 'dicoding',
//     password: 'D1coding',
//     server: 'custom-dicoding-01-db.database.windows.net',
//     database: 'custom-dicoding-01-db',
//     options: {
//         encrypt: true
//     }
// }

// app.set('views', path.join(__dirname, 'public'));
// app.set('view engine', 'pug');

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// router.get('/', async (req, res) => {
//     let result = await fetchDataUsers();

//     if (result != null) {
//         res.render('index', 
//             { 'result': result.recordset }
//         );
//     }
//     else {
//         res.end("Error Query Data !");
//     }
// });

// router.post('/', async (req, res) => {
//     if(req.body.userName.length > 0 && req.body.userEmail.length > 0 && req.body.userJob.length > 0) {
//         let result = await insertDataUsers(req.body.userName, req.body.userEmail, req.body.userJob);

//         if(result != null) {
//             res.redirect('/');
//         }
//         else {
//             res.end("Error Insert Data !")
//         }
//     }
//     else {
//         res.end("Isian form tidak lengkap !");
//     }
// });

// let fetchDataUsers = async () => {
//     let pool;

//     try {
//         pool = await sql.connect(dbConfig);

//         let result = await pool.request()
//             .query('SELECT * FROM [dbo].[WebUsers]');

//         return result;
//     }
//     catch (err) {
//         console.log(err);
//         return null;
//     }
//     finally {
//         if(pool != null) {
//             sql.close();
//         }
//     }
// }

// let insertDataUsers = async (userName, userEmail, userJob) => {
//     let pool;

//     try {
//         pool = await sql.connect(dbConfig);

//         let result = await pool.request()
//             .input('input_userName', sql.NVarChar, userName)
//             .input('input_userEmail', sql.NVarChar, userEmail)
//             .input('input_userJob', sql.NVarChar, userJob)
//             .query('INSERT INTO [dbo].[WebUsers] (Name, Email, Job, Date) VALUES ' +
//                 '(@input_userName, @input_userEmail, @input_userJob, GETUTCDATE());');

//         return result;
//     }
//     catch (err) {
//         console.log(err);
//         return null;
//     }
//     finally {
//         if(pool != null) {
//             sql.close();
//         }
//     }
// }

// app.use('/', router);
// app.listen(process.env.port || 8080);

const path = require('path');

const sql = require('mssql');

const cookieParser = require('cookie-parser');

const express = require('express');
const app = express();
const router = express.Router();

const port = process.env.port || 3000;

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

router.get('/', (req, res) => {
    res.send('Hello Azure !');
})

app.use('/', router);
app.listen(port, () => console.log('Server is running on port ' + port));