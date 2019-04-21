const express = require('express');
const router = express.Router();
const sql = require('mysql');

const connection = sql.createConnection({
    host: 'remotemysql.com',
    user: 'fW8VOkrTuV',
    password: 'YOEsvfpmjm',
    database: 'fW8VOkrTuV'
})

router.post('/postData', (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let registrationDate = req.body.registrationDate;
    let jobTitle = req.body.jobTitle;

    connection.query(`insert into Empoyees_Anna_Yurchenko(firstName, lastName, registrationDate, jobTitle) values ('${firstName}', '${lastName}', '${registrationDate}', '${jobTitle}')`, function(err, result){
        if(err){
            return res.status(err.status || 500).json(err);
        }
        return res.json(result);
    })
})

router.get('/getData', (req, res) => {
    connection.query(`select * from Empoyees_Anna_Yurchenko`, function(err, result){
        if(err){
            return res.status(err.status || 500).json(err);
        }
        return res.json(result);
    })
})

router.delete('/:id', (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let registrationDate = req.body.registrationDate;
    let jobTitle = req.body.jobTitle;

    let idToDelete = req.params.id.toString();
    connection.query(`delete from Empoyees_Anna_Yurchenko where ID=${idToDelete}`, function(err, result){
        if(err){
            return res.status(err.status || 500).json(err);
        }
        return res.json(result);
    })
})

router.put('/updateData/:id', (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let registrationDate = req.body.registrationDate;
    let jobTitle = req.body.jobTitle;

    let idToUpdate = req.params.id.toString();

    connection.query(`update Empoyees_Anna_Yurchenko set firstName='${firstName}', lastName='${lastName}', registrationDate='${registrationDate}', jobTitle='${jobTitle}' where ID=${idToUpdate}`, function(err, result){
        if(err){
            return res.status(err.status || 500).json(err);
        }
        return res.json(result);
    })
})

module.exports = router;