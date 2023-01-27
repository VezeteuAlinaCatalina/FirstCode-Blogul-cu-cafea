require('../models/database');
const Category = require('../models/Category');
const articles = require('../models/article');

/**
 * GET /
 * Homepage
 */
exports.homepage = async(req,res) => {
  res.render('main',{ title:'Blogul cu cafea'} )
};
exports.acasa = async(req,res) => {
  res.render('acasa',{ title:'Acasa'} )
};
exports.blog = async(req,res) => {
  res.render('blog',{ title:'Blog', articles:articles} )
};
exports.contact = async(req,res) => {
  res.render('contact',{ title:'Contact'} )
};
exports.trimis = async(req,res) => {
  res.render('trimis',{ title:'Trimis'} )
};
exports.adauga = async(req,res) => {
  res.render('adauga',{ title:'Adauga'} )
};

