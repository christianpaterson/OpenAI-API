const API_KEY = "#";
const response = document.querySelector("#answer p");

async function fetchData() {
  let prompt = document.querySelector("#prompt-input").value;
  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      prompt: `${prompt}`,
    }),
  });
  const data = await response.json();
  response.innerHTML = data;
}

fetchData();