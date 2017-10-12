export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.timing = 500;

  this.get('logins');
  this.get('logins/:id');

  this.get('logins/:id', function(schema, request){
    return schema.logins.findBy({password: request.params.id});
  });
  
  this.get('signups');
  
  this.passthrough('/signups', ['post']);
  //this.get('logins/:id')

  //this.get('dashboards');
  this.get('books');
  this.get('books/:id');

  this.del('books/:id', function(db,request)
  {
    var id = request.params.id;
    let book = db.books.find(id);
    return {};
  });

  this.post('books');

  this.put('books/:id', function(schema, request) {
    let base = JSON.parse(request.requestBody);
    base.book.id = request.params.id;
    return base;
  });
}
