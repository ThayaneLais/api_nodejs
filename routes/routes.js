var api = require('../config/database');

module.exports = (app) => {
    app.get('/api/medicamentos', (req, res) => {
        var Meds = api.Mongoose.model('medicamentos', api.MedSchema, 'medicamentos');
        Meds.find({}).lean().exec(
            function(e, meds) {
                res.send(meds);
            }
        )
        
    });
}

