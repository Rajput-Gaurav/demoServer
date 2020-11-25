// import model:
const electroSchema = require('../models/electronicsSchema');

exports.create = (req, res) => {
    // create instance of schema:
    const elecSchema = new electroSchema(req.body);

    elecSchema.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(500).json({
            msg:"Error on adding data"
        });
    });
};

exports.findAll = (req, res) => {

    electroSchema.find()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(500).json({
            msg:"Error on getting data"
        });
    });
};

exports.findOne = (req, res) => {
    electroSchema.findById(req.params.id)
    .then(data => {
        if(!data){
            return res.status(404).json({
                msg:"Data not found with id" +req.params.id
            })
        }
        res.json(data);
    })
    .catch(err => {
        if(err.kind === 'ObjectId'){
            return res.status(404).json({
                msg:"data not found with id" +req.params.id
            })
        }
        return res.status(500).json({
            msg:"Error on retriving data with id" +req.params.id
        });
    });
};

exports.update = (req, res) => {
    electroSchema.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(data => {
        if(!data){
            return res.status(404).json({
                msg:"data not update with id" +req.params.id
            })
        }
        res.json(data);
    })
    .catch(err => {
        if(err.kind === 'ObjectId'){
            return res.status(404).json({
                msg:"data not update with id" +req.params.id
            });
        }
        return res.status(500).json({
            msg:"Error on updating data with id" +req.params.id
        });
    });
};

exports.delete = (req, res) => {
    electroSchema.findByIdAndRemove(req.params.id)
    .then(data => {
        if(!data){
            return res.status(404).json({
                msg:"data not deleted!" +req.params.id
            });
        }
        res.json({msg:"data deleted!"});
    })
    .catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound'){
            return res.status(404).json({
                msg:"data not deleted with id" +req.params.id
            });
        }
        return res.status(500).json({
            msg:"could not delete data with id" +req.params.id
        });
    });
};