import { useState } from "react";
import './style.css';

function Genie() {
    const [userPrompt, setUserPrompt] = useState("");
    const [result1, setResult1] = useState("_____");
    const [result2, setResult2] = useState("_____");
    const [result3, setResult3] = useState("_____");

    const apiKey = process.env.REACT_APP_API_KEY;

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
            Authorization: `Bearer ${apiKey}`,
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
            Authorization: `Bearer ${apiKey}`,
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
            Authorization: `Bearer ${apiKey}`,
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
                        <h1>Script Generator</h1>
                    </div>
                </div>
                <div className="script-container">
                    <div className="user-input">
                        <h2>Answer the questions to fill in the blanks in the script.</h2>
                        <div>name a time period</div>
                        <form onSubmit={handleSubmit1}>
                            <input
                                type="text"
                                placeholder="Renaissance"
                                onChange={(e) => setUserPrompt(e.target.value)}
                            />
                            <button>submit</button>
                        </form>
                        <div>name a location</div>
                        <form onSubmit={handleSubmit2}>
                           <input
                                type="text"
                                placeholder="Space"
                                onChange={(e) => setUserPrompt(e.target.value)}
                            />
                            <button>submit</button>
                        </form>
                        <div>name of an animal</div>
                        <form onSubmit={handleSubmit3}>
                            <input
                                type="text"
                                placeholder="Cat"
                                onChange={(e) => setUserPrompt(e.target.value)}
                            />
                            <button>submit</button>
                        </form>
                    </div>
                    <div className="script-result">
                        <h2>SCRIPT</h2>
                        <div>Ted</div>
                        <div>Barney, what did you do with my {result1}</div><br />
                        <div>Barney</div> 
                        <div>Ted, you don't need that anymore. Tonight we're dressing up as {result2}s. It's gonna be {result3}!</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Genie;