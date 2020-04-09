var Nerd = require('./models/nerd');
var ObjectId = require('mongoose').Types.ObjectId; 

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

    app.get('/api/nerds/:id', function(req, res) {
        id = req.params.id;

        Nerd.findById(id, function(err, nerd) {
            if(err) res.send(err);
            
            res.json(nerd);
        });
    });

    app.patch('/api/nerds/:id', function(req, res) {
        id = req.params.id;
        update = req.body;

        Nerd.findByIdAndUpdate(id, update, function(err, nerd) {
            if(err) return res.send(err);

            res.json({
                status: 'success',
                data: 'Record updated successfully'
            });
        });
    });

    app.delete('/api/nerds/:id', function(req, res) {
        id = req.params.id;

        Nerd.findByIdAndDelete(id, function(err, nerd) {
            if(err) return res.send(err);

            res.json({
                status: 'success',
                data: 'Record deleted successfully'
            });
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
