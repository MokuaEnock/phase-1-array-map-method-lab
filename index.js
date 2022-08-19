const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

/* const titleCased = () => {
  return tutorials
}
 */


let sent = "What is NaN and how Can we Check for it";

function title(sent){
  let t = sent.split(" ");
  for(let i of t){
    let h = i[0].toUpperCase()
    let k = i.replace(i[0], h)
    console.log(k.toString())
  }
}


function titlle(sent){
  let st = sent.split(" ")
  let stt = st.map(w=> w[0].toUpperCase() + w.substring(1)).join(" ").toString()
  
}

const titleCased = () => {
  return tutorials.map(tutorial =>{
    return tutorial.split(" ").map(w=>w[0].toUpperCase() + w.substring(1)).join(" ").toString()
  })
}

