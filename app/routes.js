var Nerd = require('./models/nerd');

module.exports = function(app) {
    // server routes    =================================================
    // handle things like api calls
    // authentication routes

    app.get('/api/nerds', function(req, res) {
        // return res.send('hello world');
        Nerd.find({}, function(err, nerds) {

            // if there is an error retrieving, send the error.
            if(err) return res.send(err);

            res.json(nerds); // return all nerds in JSON format
        });
    });

    app.post('/api/nerds', function(req, res) {
        var newNerd = new Nerd(req.body);
        newNerd.save(function(err, nerd) {
            res.json(nerd);
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)


    // frontend routes =================================================
    // rute to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html');  // load our public/index.html file
    });
};
