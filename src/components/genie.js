import { useState } from "react";
import './style.css';

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

    function testytest() {
        setPromptArray(promptArray => [...promptArray, userPrompt])
        setResult(result => [...result, userPrompt]);
    }

    let resultArray = (
        <div>
            {promptArray.reverse().map((prompt, i) => (
                <div>
                    <div className="prompt">
                        <p key={prompt}>{prompt}</p>
                    </div>
                    <div className="results">
                        <p key={i}>{result[result.length - (i + 1)]}</p>
                    </div>
                </div>   
            ))}
        </div>
    )


    return (
        <div className="main-container">
            <div className="genie-container">
                <div className="title-container">
                    <div className="title">
                        <h1>Internet AI Genie</h1>
                    </div>
                </div>
                <div className="user-container">
                    <div className="user-input">
                        <h2>Ask of the Internet Genie...</h2>
                        <form className="form" onSubmit={testytest}>
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