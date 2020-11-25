// import Schema:
const postModel = require('../models/postSchema');

exports.create = (req, res) => {

    const postmodel = new postModel(req.body);

    // save a customer in the mongodb:
    postmodel.save()
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
    postModel.find()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(500).json({
            msg:"Error on getAll data"
        });
    });
};

exports.findOne = (req, res) => {
    postModel.findById(req.params.dataId)
    .then(data => {
        if(!data){
            return res.status(404).json({
                msg:"PostData not found with id" +req.params.dataId
            })
        }
        res.json(data);
    })
    .catch(err => {
        if(err.kind === 'ObjectId'){
            return res.status(404).json({
                msg:"Postdata not found with id" +req.params.dataId
            });
        }
        return res.status(500).json({
            msg:"Error retriving data with id" +req.params.dataId
        });
    });
};

exports.update = (req, res) => {
    postModel.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then(data => {
        if(!data){
            return res.status(404).json({
                msg:"PostData not found with id" +req.params.dataId
            })
        }
        res.json(data);
    })
    .catch(err => {
        if(err.kind === 'ObjectId'){
            return res.status(404).json({
                msg:"PostData not found with id" +req.params.dataId
            });
        }
        return res.status(500).json({
            msg:"Error updating data with id" +req.params.dataId
        });
    });
};

exports.delete = (req, res) => {
    postModel.findByIdAndRemove(req.params.dataId)
    .then(data => {
        if(!data){
            return res.status(404).json({
                msg:"data not fount with id" +req.params.dataId
            });
        }
        res.json({msg:"Data deleted!"});
    })
    .catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound'){
            return res.status(404).json({
                msg: "data not found with id" +req.params.dataId
            });
        }
        return res.status(500).json({
            msg: "could not delete data with id" + req.params.dataId
        });
    });
};