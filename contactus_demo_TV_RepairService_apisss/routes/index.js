 /* GET login page. */
 exports.index = function(req, res) {
     res.render('index', { title: 'Hello world' });
 };


 exports.save = function(req, res) {

     var input = JSON.parse(JSON.stringify(req.body));

     console.log(input.date)
     req.getConnection(function(err, connection) {

         var data = {

             username: input.username,
             password: input.password,
             mobile: input.mobile


         };

         var query = connection.query("INSERT INTO contact set ? ", data, function(err, rows) {

             if (err)
                 console.log("Error inserting : %s ", err);

             res.redirect('/');
             // res.send(data)
         });

         // console.log(query.sql); get raw query

     });
 };