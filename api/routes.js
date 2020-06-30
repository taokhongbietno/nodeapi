'use strict';
module.exports = function (app) {
  var userCtrl = require('./controllers/UsersController');

  // todoList Routes
  app.route('/user')
    .get(userCtrl.get)
    .post(userCtrl.store);


  app.route('/thamngan')
    .post(userCtrl.add1000);

  app.route('/user/:id')
    .get(userCtrl.detail)
    .put(userCtrl.update)
    .delete(userCtrl.delete);

  var hangHoaCtrl = require('./controllers/HangHoaCntroller')

  // todoList Routes
  app.route('/hangHoa')
    .get(hangHoaCtrl.get)
    .post(hangHoaCtrl.store);

  app.route('/hangHoa/:id')
    .get(hangHoaCtrl.detail)
    .put(hangHoaCtrl.update)
    .delete(hangHoaCtrl.delete);

  app.route('/slname')
    .get(hangHoaCtrl.exGet)

  app.route('/find/:id')
    .get(hangHoaCtrl.find)

  app.route('/createTopic')
    .get(hangHoaCtrl.createTopic)

};