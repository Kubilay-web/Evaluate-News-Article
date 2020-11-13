
const { urlChecker } = require("./urlChecker");

function handleSubmit(event) {
    event.preventDefault();
 
    let formText = document.getElementById('name').value;
    console.log("::: Form Submitted :::", event)
  
    if (urlChecker(formText)) {
        
    postData(formText)
    .then(function(res) {
        console.log('client side response', res);
        document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById('text').innerHTML = `Text: ${res.text}`;
    })
}
}
const postData = async(url = '') => {
    const response = await fetch('http://localhost:8088/test', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "url": url }),       
    });
    try {
        const newData = await response.json();
        console.log(newData)
        return newData
    } catch (error) {
        console.log("error", error);
    }
}
export { handleSubmit }
