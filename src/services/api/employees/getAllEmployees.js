const getAllEmployees = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:8080/test/employees');

    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('content-type', 'application/json');

    xhr.withCredentials = true;

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

export default function () {
  return getAllEmployees();
}
