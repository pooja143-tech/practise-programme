/*
 * GET users listing.
 */

exports.list = function(req, res) {

    req.getConnection(function(err, connection) {

        var query = connection.query('SELECT * FROM customer_table', function(err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);


            res.send({ "data": rows })


        });

        //console.log(query.sql);
    });

};

exports.add = function(req, res) {
    res.render('add_customer_table', { page_title: "Add TV-Customers - Node.js" });
};

exports.edit = function(req, res) {

    var id = req.params.id;

    req.getConnection(function(err, connection) {

        var query = connection.query('SELECT * FROM customer_table  WHERE id = ?', [id], function(err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            //  res.render('edit_customer_table', { page_title: "Edit TV-Customer - Node.js", data: rows });
            res.send(data)

        });

        //console.log(query.sql);
    });
};

/*Save the customer*/
exports.save = function(req, res) {

    var input = JSON.parse(JSON.stringify(req.body));

    console.log("Hari Input==>", input)
    req.getConnection(function(err, connection) {

        var data = {

            name: input.name,
            address: input.address,
            phone: input.phone,
            date: input.date,
            problem: input.problem,
            complaint_resolution: input.complaint_resolution

        };

        var query = connection.query("INSERT INTO customer_table set ? ", data, function(err, rows) {

            if (err)
                console.log("Error inserting : %s ", err);

            // res.redirect('/customer_table');
            res.send(data)
        });

        // console.log(query.sql); get raw query

    });
};

exports.save_edit = function(req, res) {

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;

    req.getConnection(function(err, connection) {
        console.log(data)
        var data = {

            name: input.name,
            address: input.address,
            phone: input.phone,
            date: input.date,
            problem: input.problem,
            complaint_resolution: input.complaint_resolution


        };

        connection.query("UPDATE customer_table set ? WHERE id = ? ", [data, id], function(err, rows) {

            if (err)
                console.log("Error Updating : %s ", err);

            // res.redirect('/customer_table');
            res.send(data)
        });
    });
};


exports.delete_customer_table = function(req, res) {

    var id = req.params.id;

    req.getConnection(function(err, connection) {
        // var data = {

        //     name: input.name,
        //     address: input.address,
        //     phone: input.phone,
        //     date: input.date,
        //     problem: input.problem,
        //     complaint_resolution: input.complaint_resolution


        // };
        connection.query("DELETE FROM customer_table  WHERE id = ? ", [id], function(err, rows) {

            if (err)
                console.log("Error deleting : %s ", err);

            // res.redirect('/customer_table');
            res.send({ "data": rows })

        });

    });
};