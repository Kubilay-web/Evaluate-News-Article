



let API=`${API_KEY}&of=json&txt=${Text}&lang=en`
let URL = 'https://api.meaningcloud.com/sentiment-2.1?key=';

let API_KEY = process.env.API_KEY;
console.log(`API key: ${API_KEY}`)

document.getElementById('generate').addEventListener('click', performAction);


function performAction(e) {
    event.preventDefault()


    let Text = document.getElementById('text').value;
    console.log(Text);

    getData(URL,API)

        .then(function (data) {
            console.log(data);


            postData('http://localhost:8000/addText', { userResponse:Text,Inıp:data.sentence_list.inip,Endp:data.sentence_list.endp,Bop:data.sentence_list.bop,Confidence:data.sentence_list.confidence,ScoreTag:data.sentence_list.score_tag,Agreement:data.sentence_list.agreement })

            updateUI()
        })
};

//POST DATA
const getData = async (URL,API) => {

    const response = await fetch(URL+API)
    console.log(response);
  
    try {
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("error", error);
    }
  };
  
  
  
  // Async POST
  const postData = async (url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    try {
  
      const newData = await response.json();
      console.log(newData);
      return newData;
    }
    catch (error) {
      console.log('Error', error);
    }
  }
  
  
  const updateUI = async () => {
    const request = await fetch('http://localhost:8000/all');
    try {
      const allData = await request.json();
     
      document.getElementById('inip').innerHTML ="inip: " + allData.inip;
      document.getElementById('endp').innerHTML ="endp: " + allData.endp;
      document.getElementById('bop').innerHTML ="bop: " + allData.bop;
      document.getElementById('confidence').innerHTML ="confidence: " + allData.confidence;
      document.getElementById('score_tag').innerHTML ="score_tag: " + allData.score_tag;
      document.getElementById('agreement').innerHTML ="agreement: " + allData.agreement;
  
    } catch (error) {
      console.log("error", error);
    }
  }
  
export{performAction}
