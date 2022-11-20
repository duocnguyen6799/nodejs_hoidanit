
let getHomepage = (req, res) => {
    return res.render('index.ejs');
};

let getAboutPage = (req, res) => {
    return res.send('This is about page! Waiting to watch WC2022')
}

// export default getHomepage;
module.exports = {
    getHomepage,
    getAboutPage
}