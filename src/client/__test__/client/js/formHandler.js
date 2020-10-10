function handleSubmit(event) {
    event.preventDefault()

      // check what text was put into the form field
      let formText = document.getElementById('name').value
      Client.checkForName(formText)
      console.log("::: Form Submitted :::");
      }

    fetch('http://localhost:8080/test',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({ url })
    })
 .then(res => res.json())
 .then (function(res){
 

     document.getElementById('results').innerHTML = data.message
     document.getElementById('nlp-text').innerHTML = res.text;
     document.getElementById('polarity').innerHTML = res.polarity;
     document.getElementById('polarity_confidence').innerHTML = res.polarity_confidence;
     document.getElementById('subjectivity').innerHTML = res.subjectivity;
     document.getElementById('subjectivity_confidence').innerHTML = res.subjectivity_confidence;
     console.log(res);

 })


export{handleSubmit}