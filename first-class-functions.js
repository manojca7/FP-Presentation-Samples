function makeFakeAjaxCall(callback) {
  console.log('Making XHR call to http://myserver.com/some/rest/endpoint');
  // Need to fake the async behaviour of xhr
  setTimeout(function () {
    var json = {event: 'JS User Group'};
    console.log('xhr returning', json);
    callback(json);
  }, 1000);
}

function getEventFromServer(callback) {
  return makeFakeAjaxCall(function (json) {
    return callback(json);
  });
}

function myCallback(json) {
  console.log('Executing myCallback got event ' + json.event);
}

getEventFromServer(myCallback);