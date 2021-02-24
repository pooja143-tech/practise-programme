/* GET login page. */
exports.login = function(req, res) {
    res.render('home', { title: 'Hello World' });
};


exports.auth = function(req, res) {
    var input = JSON.parse(JSON.stringify(req.body));
    console.log(input);

    req.getConnection(function(err, connection) {
        var query = connection.query("SELECT * FROM login_tbl WHERE username = ? and pwd = ?", [input.username, input.password], function(err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            console.log(rows, rows.length);
            if (rows && rows.length == 1) {
                res.redirect('/customer_table')
            } else {
                res.render('login', { page_title: "Customers - Node.js", data: rows });
            }

        });

        //console.log(query.sql);
    })
};
exports.logout = function(req, res) {
    res.redirect('/login')
        // res.render('login', { title: '' });
};




// /* GET Signup */
// exports.signup = function(req, res) {
//     req.getConnection(function(err, connection) {
//         res.render('signup', {
//             title: 'Signup Page',
//             message: req.write('signupMessage')
//         })
//         res.redirect('/signup');
//     })
// };


/* GET Profile page. */
// router.get('/profile', function(req, res, next) {
//     res.render('profile', {
//         title: 'Profile Page',
//         user: req.user,
//         avatar: gravatar.url(req.user.email, {
//             s: '100',
//             r: 'x',
//             d: 'retro'
//         }, true)
//     });