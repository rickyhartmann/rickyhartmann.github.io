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

function postAndLog(data) {
  if (window && window.parent) {
    window.parent.postMessage(data, '*');
    console.log('posted: ', data);
  } else {
    console.warn('did not post, window or window.parent was unavailable');
  }
}