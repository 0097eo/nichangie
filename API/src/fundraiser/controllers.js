const pool = require('../../db')
const queries = require('./queries')

const getFunds = (req, res) => {
    pool.query(queries.getFunds, (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const findFundById = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(queries.findFundById, [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const findFundByName = (req, res) => {
    const name = req.params.name;

    pool.query(queries.findFundByName, [name], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const addNewFund = (req, res) => {
    const {name, description, total, end_date} = req.body

    //check if the name exists
    pool.query(queries.findFundByName, [name], (error, results) => {
        if (error) {
            throw error;
        }
        if (results.rows.length > 0) {
            res.status(400).send('Fund already exists')
        } else {
            pool.query(queries.insertFund, [name, description, total, end_date], (error, results) => {
                if (error) {
                    throw error;
                }
                res.status(201).send(`Fund added with ID: ${results.rows[0].id}`)
            })
        }
    })
};

const deleteFundByName = (req, res) => {
    const name = req.params.name;

    pool.query(queries.deleteFundByName, [name], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json({ message: 'Fund deleted successfully' });
    });
};



module.exports = {
    getFunds,
    findFundById,
    findFundByName,
    addNewFund,
    deleteFundByName,
}