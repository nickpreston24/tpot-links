export function urlExists(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.status < 400);
    }
  };
  xhr.open("HEAD", url);
  xhr.send();
}

urlExists(someUrl, function (exists) {
  console.log('"%s" exists?', someUrl, exists);
});
