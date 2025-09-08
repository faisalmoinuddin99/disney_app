import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    border-radius: 12px;
    background-color: #f4f4f9;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h2`
    font-size: 22px;
    margin-bottom: 15px;
    color: #333;
    text-align: center;
`;

const OutputText = styled.pre`
    white-space: pre-wrap;
    word-wrap: break-word;
    font-size: 18px;
    line-height: 1.5;
    color: #555;
`;

const Input = styled.input`
    width: 48%;
    padding: 10px;
    margin: 5px 1%;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
`;

const Button = styled.button`
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    background-color: #4a90e2;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #357ab8;
    }
`;

// Loader Animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #4a90e2;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: 20px auto;
`;

export const N8N = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(false);

    const callWebhook = async () => {
        if (!firstName || !lastName) {
            alert("Please enter both first name and last name!");
            return;
        }

        setLoading(true);
        setOutput(""); // clear previous output

        try {
            const PROD_URL = `https://undatable-unregally-carmina.ngrok-free.app/webhook/6f7b288e-1efe-4504-a6fd-660931327269?first_name=${firstName}&last_name=${lastName}`;

            const response = await fetch(PROD_URL, {
                method: "GET",
                headers: {
                    "ngrok-skip-browser-warning": "true",
                },
            });

            const contentType = response.headers.get("content-type");

            if (contentType && contentType.includes("application/json")) {
                const data = await response.json();
                setOutput(data.output);
            } else {
                const text = await response.text();
                setOutput(text);
            }
        } catch (error) {
            console.error("Error fetching webhook:", error);
            setOutput("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <Title>Webhook Output</Title>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <Button onClick={callWebhook}>Generate Custom Poem</Button>
            {loading ? <Loader /> : <OutputText>{output}</OutputText>}
        </Container>
    );
};
