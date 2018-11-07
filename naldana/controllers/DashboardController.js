'use strict';

var Menu = require('./../models/Menu');

var dashboard = {};

dashboard.home = function (req, res) {
    res.render('admin/dashboard', {
        title: 'Admin Your Site'
    });
};

dashboard.new = function (req, res) {
    console.log("->>>>>>>>>>>>>",req.xhr);
    let body = req.body,
        menu = new Menu({
            name: body.name,
            href: body.link
        });

    Menu.findOne({
        name: body.menu
    }, function (err, doc) {
        if (err) res.status(500).end(err);
        doc.options.push(menu);
        doc.save(() => {
            if(req.xhr) {
                res.json(menu);
            }else{
                res.redirect('/dashboard');
            }
        });

    });

};

dashboard.getOneMenu=function(req, res){
    console.log(req);
    Menu.findOne({name:req.params.id}, function(err, menu){
        if(err) res.status(500).end(err);
        res.json(menu);
    });
}

module.exports = dashboard;