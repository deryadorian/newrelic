var assert = require('assert');

$browser.get('https://www.domain.com).then(function(){
  return $browser.findElement($driver.By.className('search-list-container')).then(function(element){
    return element.findElement($driver.By.tagName('li')).then(function(element){
     	return element.getAttribute('att01').then(function(text){
        	assert.equal("text2beequal", text, not found"");
      });
    });
  });
});
