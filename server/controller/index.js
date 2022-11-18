let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) =>{
    res.render('index', { title: 'HomePage' });
};

module.exports.displayAboutPage = (req, res, next)=> {
    res.render('index', { title: 'About' });
  }

module.exports.displayProjectPage = (req, res, next)=> {
    res.render('index', { title: 'Projects' });
  }

module.exports.displayContactPage = (req, res, next)=> {
    res.render('index', { title: 'Contact Me' });
  }