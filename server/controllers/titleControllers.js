const { json } = require("express");
const Title = require("../model/title");

module.exports = {

    //READ ALL
    findAll: (req, res) => {
        Title.find()
            .then((titles) => {
                return res.json(titles)
            })
            .catch(err => res.json(err))
    },

    //CREATE
    createTitle: (req, res) => {
        console.log(req.body);
        Title.create(req.body)
            .then( newTitle => {
                console.log("DB Success created new Title!");
                return res.json(newTitle)
            })
            .catch(err => {
                console.log("DB ERROR creating Title!");
                return res.json(err)
            })
    },

    //READ ONE
    findeOne: (req, res) => {
        console.log(req.params);
        Title.findById(req.params.id)
            .then(title => res.json(title))
            .catch(err => res.json(err))
    },

    //UPDATE
    updateOneTitle: (req, res) => {
        console.log("UPDATE id:", req.params.id);
        console.log("UPDATE OBJ:", req.body);
        Title.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
            .then(updatedTitle => res.json(updatedTitle))
            .catch(err => res.json(err))
    },

    //DELETE
    deleteTitleByID: (req, res) => {
        console.log(req.params.id);
        Title.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }
}