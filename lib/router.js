Router.configure({
  routeControllerNameConverter: "camelCase",
  notFoundTemplate: '404'
})

Router.route('/', function () {      //Route is the path after the url
  this.render('Home');               //'home' refers to the home template
}, {
  name: 'Home'                       //name is an arbitrary value. Useful for helpers
});

Router.route('/signUp', function () {      //Route is the path after the url
  this.render('signUp');               //'home' refers to the home template
}, {
  name: 'signUp'                       //name is an arbitrary value. Useful for helpers
});
