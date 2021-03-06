module.exports = function($) {

  var routes = {};

  // Adds a route for: a GET to /tests. Will return new static data
  routes['/tests|get'] = $.mockjax({
    url: '/tests',
    dataType: 'json',
    type: 'get',
    responseTime: 200,
    response: function() {
      this.responseText = {
        foo: 555,
        bar: 'real',
        obj: {
          a: 99,
          b: 'new val',
          c: {
            d: false
          }
        }
      };
    }
  });

  // Adds a route for: a POST to /tests. Will echo the request data
  routes['/tests|post'] = $.mockjax({
    url: '/tests',
    dataType: 'json',
    type: 'post',
    responseTime: 100,
    response: function(settings) {
      this.responseText = settings.data;
    }
  });

  // Adds a route for: a POST to /test2. Will echo the request data
  routes['/test2|post'] = $.mockjax({
    url: '/test2',
    dataType: 'json',
    type: 'post',
    responseTime: 100,
    response: function(settings) {
      this.responseText = settings.data;
    }
  });
  return routes;
}
