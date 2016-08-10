var Browser = require("Zombie");

Browser.localhost('example.com', 3000);

describe('User visits new listings page', function(){
  var browser = new Browser();

  it('should have a link to a new listings form', function(next){
    browser.visit('/listings', function(err) {
      expect(browser.success).toBe(true);
      browser.clickLink("Add new.", function(){
      expect(browser.location.pathname).toBe("/listings/new");
      expect(browser.html("body")).toContain('Add details below...');
      next();
    });
    });
  });

  it('should have a form to fill in', function(next){
    browser.visit('/listings/new', function(err) {
      browser.fill('title', 'Cosy Country Home');
      browser.fill('description', 'Three bedroom house in the country');
      browser.fill('price', '150');
      browser.pressButton('Add.', function(){
      expect(browser.html("body")).toContain('Abode sweet Abode!');
      expect(browser.location.pathname).toBe("/listings");
      next();
      });
    });
  });


});