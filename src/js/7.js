function getBase64FromUrl(url) {
  return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';
      xhr.onload = function() {
          if (this.status === 200) {
              const reader = new FileReader();
              reader.onload = function() {
                  resolve(reader.result);
              };
              reader.onerror = function(error) {
                  reject(error);
              };
              reader.readAsDataURL(xhr.response);
          } else {
              reject(new Error('Failed to load image'));
          }
      };
      xhr.onerror = function(error) {
          reject(error);
      };
      xhr.send();
  });
}

getBase64FromUrl('https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8')
  .then(console.log)
  .catch(console.error);
