import connection from '../configs/connectDB'


let getHomepage = (req, res) => {

    let data = [];
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            console.log('>>>> mysql check');
            console.log(results); // results contains rows returned by server

            results.map((row) => {
                data.push({
                    id: row.id,
                    email: row.email,
                    address: row.address,
                    firstName: row.firstName,
                    lastName: row.lastName
                })
            })
            return res.render('index.ejs', {
                dataUser: JSON.stringify(data)
            })
        }
    )
    return res.render('index.ejs')
};

let getAboutPage = (req, res) => {
    return res.send('This is about page! Waiting to watch WC2022')
}

// export default getHomepage;
module.exports = {
    getHomepage,
    getAboutPage
}