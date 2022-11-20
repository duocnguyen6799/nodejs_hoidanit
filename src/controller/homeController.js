
let getHomeRoute = (req, res) => {
    return res.render('index.ejs')
};

module.exports = [
    getHomeRoute
];