import { useState } from "react";
import './style.css';

function Genie() {
    const [userPrompt, setUserPrompt] = useState("");
    const [promptArray, setPromptArray] = useState(["What should I have for dinner?", "Name a book.", "What's your favorite album?"]);
    const [result, setResult] = useState(["A sandwich and a salad.", "Hadji Murad.", "Tron Legacy OST."]);

    const apiKey = process.env.REACT_APP_API_KEY;

    console.log(apiKey);

    const data = {
        prompt: userPrompt,
        temperature: 0.5, 
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    };
    
    async function handleSubmit(e) {
        e.preventDefault();
        const sendToApi = await fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify(data),
        });
        const response = await sendToApi.json();
        const newResponse = response.choices[0].text;
        setResult(result => [...result, newResponse]);
        setPromptArray(promptArray => [...promptArray, userPrompt])
        setUserPrompt("");
    }

    let size = result.length;

    let resultArray = (
        <div>
            {promptArray.reverse().map((prompt, i) => (
                <div className="result-array">
                    <div className="prompt">
                        <li key={prompt}>{prompt}</li>
                    </div>
                    <div className="results">
                        <p key={i}>{result[size - (i + 1)]}</p>
                    </div>
                </div>   
            ))}
        </div>
    )


    return (
        <div className="main-container">
            <div className="app-container">
                <div className="title-container">
                    <div className="title">
                        <h1>Internet AI Genie</h1>
                    </div>
                </div>
                <div className="user-container">
                    <div className="user-input">
                        <h2>Ask of the Internet Genie...</h2>
                        <form className="form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={userPrompt}
                                placeholder="Name my band?"
                                onChange={(e) => setUserPrompt(e.target.value)}
                            />
                            <button type="submit">Submit Question</button>
                        </form>
                     </div>
                    <div className="results-container">
                        <h2>...Receive an answer</h2>
                        {resultArray}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Genie;