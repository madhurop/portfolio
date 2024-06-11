import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const Gemini = () => {
  const [inputValue, setInputValue] = useState('');
  const [textData, setTextData] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    console.log(inputValue);
    run(inputValue);
  };
  const genAI = new GoogleGenerativeAI('AIzaSyBPiy1hPDukalpYbqp0IETaSjDLSbse5bI');

  
    async function run(inputValue) {
      try {
        // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        // const prompt = 'Write a story about a magic backpack.';

        const result = await model.generateContent(inputValue);
        const response = await result.response;
        const text = await response.text();
        console.log(text);
        setTextData(text)
      } catch (error) {
        console.error('Error generating content:', error);
      }
    }

    
  


  return (
    <div className='bg-orange-400 h-screen'>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange} className='m-5'
      />
      <button className='bg-white m-5' onClick={handleClick}>Log Input</button>
        <p className="">{textData}</p>
    </div>
  );
};

export default Gemini;
