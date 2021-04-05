function postString() {
  postAndLog('simple string');
}

function postObject() {
  postAndLog({ event: 'testEvent', eventName: 'testEvent', data: 'some test data' });
}

function postSampleUrl() {
  postAndLog({ event: 'externalLink', eventName: 'externalLink', href: 'https://dev1userfileupload.blob.core.windows.net/filetest1/3ipok4_20200901091408354.jpg?sp=r&st=2021-04-05T13:17:25Z&se=2021-04-05T21:17:25Z&spr=https&sv=2020-02-10&sr=b&sig=x4Kw20FyRsxrxT4Gz4D0x5xSihnsPzGVhUXqbfYNAdI%3D' });
}

function putInLocalStorage() {
  localStorage.setItem('nohs:openExternal', 'https://dev1userfileupload.blob.core.windows.net/filetest1/3ipok4_20200901091408354.jpg?sp=r&st=2021-04-05T13:17:25Z&se=2021-04-05T21:17:25Z&spr=https&sv=2020-02-10&sr=b&sig=x4Kw20FyRsxrxT4Gz4D0x5xSihnsPzGVhUXqbfYNAdI%3D');
}

function removeFromLocalStorage() {
  localStorage.removeItem('nohs:openExternal');
}

function postAndLog(data) {
  if (window && window.parent) {
    window.parent.postMessage(data, '*');
    console.log('posted: ', data);
  } else {
    console.warn('did not post, window or window.parent was unavailable');
  }
}

var externalLinkHander = function(e) {
  if (window.parent) {
    console.log(e);
    console.log(e.currentTarget);
    if (e.currentTarget.href) {
      e.preventDefault();
      var data = { event: 'externalLink', eventName: 'externalLink', href: e.currentTarget.href };
      postAndLog(data);
    }
  } else {
    console.warn('did not post, window.parent was unavailable')
  }
}

var classname = document.getElementsByClassName('external-link');
for (var i = 0; i < classname.length; i++) {
  classname[i].removeEventListener('click', externalLinkHander, false);
  classname[i].addEventListener('click', externalLinkHander, false);
}