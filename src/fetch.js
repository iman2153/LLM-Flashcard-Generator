async function fetchData(prompt,apiKey) {
    const predefinedContext = 'write in a json format: ';
    const updatedPrompt = `${predefinedContext} ${prompt}`;
  
    try {
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: updatedPrompt,
          max_tokens: 40
        }),
      });
  
      const data = await response.json();
      return data.choices?.[0]?.text?.trim() || '';
    } catch (error) {
      console.error(error);
      return '';
    }
  }
export default fetchData;