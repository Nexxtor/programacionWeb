const Person = require('../../models/Person');

module.exports.getId = (req,res) =>{
    Person.find({ username: req.params.username}, function (err, docs) {
        if (err) res.status(500).json(err);
        else res.status(200).json(docs);
    });
}

module.exports.getAll = (req,res) =>{
    
}

module.exports.create = (req,res) =>{
    let insertPerson =  new Person({
        name: req.body.name,
        lastname: req.body.lastname,
        age: req.body.age
    });

    insertPerson
        .save()
        .then((newPerson)=>{
            res.status(200).json(newPerson)
        })
        .catch((err) => {
            res.status(500).json(err);
        })
}

module.exports.update = (req,res) =>{
    
}

module.exports.delete = (req,res) =>{
    
}