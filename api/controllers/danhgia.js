'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')
const { throws } = require('assert')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM DANHGIA'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM DANHGIA WHERE ID = ?'
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    detailsp: (req, res) => {
        let sql = 'SELECT * FROM DANHGIA WHERE MASP = ?'
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    update: (req, res) => {
        let data = req.body;
        let MASP = data.MASP;
        let MAKH = data.MAKH;
        let SOSAO = data.SOSAO;
        if(!MASP){
            return res.json({
                message: 'Mã Sản Phẩm không được rỗng'
            });
        }
        if(!MAKH){
            return res.json({
                message: 'Mã Khách Hàng không được rỗng'
            });
        }
        if(!SOSAO){
            return res.json({
                message: 'Số Sao không được rỗng'
            });
        }
        let sql = 'UPDATE DANHGIA SET ? WHERE ID = ?'
        db.query(sql, [data, req.params.id], (err, response) => {
            if (err) throw err
            res.json(data)
        })
    },
    store: (req, res) => {
        let data = req.body;
        let MASP = data.MASP;
        let MAKH = data.MAKH;
        let SOSAO = data.SOSAO;
        if(!MASP){
            return res.json({
                message: 'Mã Sản Phẩm không được rỗng'
            });
        }
        if(!MAKH){
            return res.json({
                message: 'Mã Khách Hàng không được rỗng'
            });
        }
        if(!SOSAO){
            return res.json({
                message: 'Số Sao không được rỗng'
            });
        }

        let sql = 'INSERT INTO DANHGIA SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json(data)
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM DANHGIA WHERE ID = ?'
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json({message: 'Xoá thành công'})
        })
    }
}