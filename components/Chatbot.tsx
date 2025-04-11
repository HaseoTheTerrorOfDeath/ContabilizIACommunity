'use client';

import { useState } from 'react';
import axios from 'axios';

export default function Chatbot() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: 'assistant', content: 'Olá! Como posso te ajudar hoje?' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const response = await axios.post('/api/gpt-4', { message: input });
      const botReply = { role: 'assistant', content: response.data.response };
      setMessages(prev => [...prev, botReply]);
    } catch (err) {
      console.error(err);
      const errorReply = { role: 'assistant', content: 'Erro ao enviar mensagem. Tente novamente.' };
      setMessages(prev => [...prev, errorReply]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">ContabilizIA Chatbot 🤖</h1>

      <div className="bg-white rounded-lg shadow p-6 w-full max-w-2xl flex flex-col space-y-4 overflow-y-auto h-96">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-lg ${msg.role === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-200 self-start'}`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      <div className="flex mt-6 w-full max-w-2xl">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          type="text"
          placeholder="Digite sua mensagem..."
          className="flex-1 border border-gray-300 rounded-l-lg p-3 focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg p-3"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

