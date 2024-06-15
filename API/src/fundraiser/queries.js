const getFunds = 'SELECT * FROM fundraisers'
const findFundById = 'SELECT * FROM fundraisers WHERE id = $1'
const findFundByName = 'SELECT * FROM fundraisers WHERE name = $1';
const insertFund = 'INSERT INTO fundraisers (name, description, total, end_date) VALUES ($1, $2, $3, $4) RETURNING id';
const deleteFundByName = 'DELETE FROM fundraisers WHERE name = $1';




module.exports = {
    getFunds,
    findFundById,
    findFundByName,
    insertFund,
    deleteFundByName,
}