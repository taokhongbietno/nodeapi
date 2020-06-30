'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../bd')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM tblhanghoa'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM tblhanghoa WHERE id = ?'
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let id = req.params.id;
        let sql = 'UPDATE tblhanghoa SET ? WHERE id = ?'
        db.query(sql, [data, id], (err, response) => {
            if (err) throw err
            res.json({ message: 'Update success!' })
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO tblhanghoa SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({ message: 'Insert success!' })
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM tblhanghoa WHERE id = ?'
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json({
                message: 'Delete success!',
            })
        })
    },

    exGet: (req, res) => {
        let sql = 'SELECT tblhanghoa.tenHangHoa , tblhanghoa.soLuong FROM tblhanghoa'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },

    find: (req, res) => {
        let sql = 'SELECT * FROM tblhanghoa WHERE tblhanghoa.id = ?'
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },

    createTopic: (req, res) => {
        var a = []
        var i
        let sql = 'SELECT * FROM tbluser'
        var ARR = []
        db.query(sql, (err, response) => {
            if (err) throw err
            // for (i = 0; i < 20; i++) {

            // }
            ARR =response
        })
        // console.loga
        res.json(ARR)
    }


}