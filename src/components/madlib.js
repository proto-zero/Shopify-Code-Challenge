import { useState } from "react";
import './genie.css';

function Genie() {
    const [userPrompt, setUserPrompt] = useState("");
    const [result1, setResult1] = useState("");
    const [result2, setResult2] = useState("");
    const [result3, setResult3] = useState("");

    const data1 = {
        prompt: `Halloween costume from ${userPrompt}`,
        temperature: 0.5, 
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    };

    const data2 = {
        prompt: `Job title of someone who works in ${userPrompt}`,
        temperature: 0.5, 
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    };

    const data3 = {
        prompt: `catchphrase of a ${userPrompt}`,
        temperature: 0.5, 
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    };
    
    async function handleSubmit1(e) {
        e.preventDefault();
        const sendToApi = await fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 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`,
            },
            body: JSON.stringify(data1),
        });
        const response = await sendToApi.json();
        setResult1(response.choices[0].text);
        setUserPrompt("");
    }

    async function handleSubmit2(e) {
        e.preventDefault();
        const sendToApi = await fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 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`,
            },
            body: JSON.stringify(data2),
        });
        const response = await sendToApi.json();
        setResult2(response.choices[0].text);
        setUserPrompt("");
    }

    async function handleSubmit3(e) {
        e.preventDefault();
        const sendToApi = await fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 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`,
            },
            body: JSON.stringify(data3),
        });
        const response = await sendToApi.json();
        setResult3(response.choices[0].text);
        setUserPrompt("");
    }


    return (
        <div className="main-container">
            <div className="app-container">
                <div className="title-container">
                    <div className="title">
                        <h1>MadLib Generator</h1>
                    </div>
                </div>
                <div className="madlib-container">
                    <div className="user-input">
                        USER INPUT
                        <form onSubmit={handleSubmit1}>
                            <p>name a time period</p>
                            <input
                                type="text"
                                placeholder="Renaissance"
                                onChange={(e) => setUserPrompt(e.target.value)}
                            />
                            <button>submit</button>
                        </form>
                        <form onSubmit={handleSubmit2}>
                           <p>name a location</p>
                           <input
                                type="text"
                                placeholder="Space"
                                onChange={(e) => setUserPrompt(e.target.value)}
                            />
                            <button>submit</button>
                        </form>
                        <form onSubmit={handleSubmit3}>
                            <p>name an animal</p>
                            <input
                                type="text"
                                placeholder="Cat"
                                onChange={(e) => setUserPrompt(e.target.value)}
                            />
                            <button>submit</button>
                        </form>
                    </div>
                    <div className="results-container">
                        SCRIPT
                        <p>Ted: Barney, what did you do with my {result1}</p>
                        <p>Barney: Ted, you don't need that anymore. Tonight we're dressing up as {result2}s. It's gonna be {result3}!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Genie;