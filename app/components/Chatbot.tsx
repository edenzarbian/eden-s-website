'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';

export default function Chatbot() {
  const { messages, sendMessage, error } = useChat({
    onError(error) {
      console.error('Chat request failed:', error);
    },
  });
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <span className="font-bold">AI Assistant</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-2 bg-gray-50 text-black">
            {messages.length === 0 && (
              <div className="text-gray-500 text-sm text-center mt-4">
                Hi! Ask me anything about Eden&apos;s professional experience.
              </div>
            )}
            {messages.map((m) => (
              <div
                key={m.id}
                className={`p-2 rounded-lg max-w-[85%] text-sm ${m.role === 'user' ? 'bg-blue-100 self-end text-blue-900' : 'bg-gray-200 self-start text-gray-800'}`}
              >
                <span className="font-bold block text-xs mb-1">
                  {m.role === 'user' ? 'You' : 'AI'}
                </span>
                {m.parts.map((part, index) =>
                  part.type === 'text' ? (
                    <span key={`${m.id}-${index}`}>{part.text}</span>
                  ) : null
                )}
              </div>
            ))}
          </div>
          {error && (
            <p className="text-sm text-red-600 font-bold p-4 text-center border-t border-red-200 bg-red-50">
              Chat error: {error.message}
            </p>
          )}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const text = input.trim();

              if (!text) return;

              setInput('');
              void sendMessage({ text });
            }}
            className="p-2 bg-white border-t border-gray-200 flex gap-2"
          >
            <input
              className="flex-1 p-2 border border-gray-300 rounded-md text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={input}
              placeholder="Type a question..."
              onChange={(event) => setInput(event.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-bold hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        </div>
      ) : (
        /* Floating Chat Bubble Button */
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center text-2xl hover:bg-blue-700 transition-colors"
        >
          💬
        </button>
      )}
    </div>
  );
}
