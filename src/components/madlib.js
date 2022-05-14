import { useState } from "react";
import './genie.css';

function Genie() {
    const [userPrompt, setUserPrompt] = useState("");
    const [promptArray, setPromptArray] = useState(["name a band", "name a book", "name an album"]);
    const [result, setResult] = useState(["the beatles", "that one time in amsterdam", "metal gear 20th anniversary metal gear music collection"]);

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
            Authorization: `Bearer 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`,
            },
            body: JSON.stringify(data),
        });
        const response = await sendToApi.json();
        const newResponse = response.choices[0].text;
        setResult(result => [...result, newResponse]);
        setPromptArray(promptArray => [...promptArray, userPrompt])
        setUserPrompt("");
    }

    function testyTest() {
        setPromptArray(promptArray => [...promptArray, userPrompt])
        setResult(result => [...result, userPrompt]);
    }

    let size = result.length;

    let resultArray = (
        <div>
            {promptArray.reverse().map((prompt, i) => (
                <div>
                    <div className="prompt">
                        <p key={prompt}>{prompt}</p>
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
                        <h1>MadLib Generator</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Genie;