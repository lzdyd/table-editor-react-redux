const getAllEmployees = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.setRequestHeader("Authorization", "Basic " + btoa('admin' + ":" + 'admin'));

    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('content-type', 'application/json');

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject(Error(xhr.statusText));
      }
    };

    xhr.onerror = () => {
      reject(Error('Network error'));
    };

    xhr.send();
  });
};

export default function (url) {
  return getAllEmployees(url);
}
