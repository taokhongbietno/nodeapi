'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../bd')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM tbluser'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM tbluser WHERE id = ?'
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let id = req.params.id;
        let sql = 'UPDATE tbluser SET ? WHERE id = ?'
        db.query(sql, [data, id], (err, response) => {
            if (err) throw err
            res.json({ message: 'Update success!' })
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO tbluser SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({ message: 'Insert success!' })
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM tbluser WHERE id = ?'
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json({ message: 'Delete success!' })
        })
    },

    add1000: (req, res) => {
        var DB = []
        for (let step = 800; step < 1200; step++) {
            DB.push([
                step,
                'trung',
                'e10adc3949ba59abbe56e057f20f883e',
                'trung',
                22,
                'male',
                'tra vinh',
                '2020-06-01T07:38:27.000Z',
                1
            ])
        }
        console.log(DB)

        let data = DB;
        let sql = 'INSERT INTO tbluser VALUES ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({ message: 'Insert success!' })
        })
    },
}