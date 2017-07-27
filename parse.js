/*jshint esversion:6, node:true*/

let output = document.getElementById('output');

const getJSON = function(url) {
    const xhr = new XMLHttpRequest();
    return new Promise( (resolve, reject) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr.responseText);
                }
            }
        };
        xhr.open('GET', url);
        xhr.send();
    });
};

function parseText(text) {
  let output_text = text;
  let newline = /\n/g;
  let space   = /\s/g;
  output_text = output_text.replace(newline, "<br>");
  output_text = output_text.replace(space, "&nbsp;");
  return output_text;
}

getJSON('text.txt')
  .then( (response) => {
    output.innerHTML = parseText(response);
  });
