'use client';

import { useChat } from '@ai-sdk/react';
import { useState, type FormEvent } from 'react';

export default function Chatbot() {
  const { messages, sendMessage, error, status } = useChat({
    onError(chatError) {
      console.error('Chat request failed:', chatError);
    },
  });
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const isSending = status === 'submitted' || status === 'streaming';

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = input.trim();
    if (!text || isSending) return;

    setInput('');
    void sendMessage({ text });
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <section
          aria-label="Portfolio assistant"
          className="flex h-96 w-80 flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-2xl"
        >
          <header className="flex items-center justify-between bg-blue-600 p-3 text-white">
            <h2 className="font-bold">AI Assistant</h2>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="rounded px-1 text-xl leading-none hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
            >
              &times;
            </button>
          </header>

          <div className="flex flex-1 flex-col gap-2 overflow-y-auto bg-gray-50 p-3 text-black">
            {messages.length === 0 && (
              <p className="mt-4 text-center text-sm text-gray-500">
                Hi! Ask me anything about Eden&apos;s professional experience.
              </p>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[85%] rounded-lg p-2 text-sm ${
                  message.role === 'user'
                    ? 'self-end bg-blue-100 text-blue-900'
                    : 'self-start bg-gray-200 text-gray-800'
                }`}
              >
                <span className="mb-1 block text-xs font-bold">
                  {message.role === 'user' ? 'You' : 'AI'}
                </span>
                {message.parts.map((part, index) =>
                  part.type === 'text' ? (
                    <span key={`${message.id}-${index}`}>{part.text}</span>
                  ) : null
                )}
              </div>
            ))}
          </div>

          {error && (
            <p
              role="alert"
              className="border-t border-red-200 bg-red-50 p-3 text-center text-sm font-bold text-red-600"
            >
              Chat error: {error.message}
            </p>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex gap-2 border-t border-gray-200 bg-white p-2"
          >
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type a question..."
              aria-label="Message"
              disabled={isSending}
              className="flex-1 rounded-md border border-gray-300 p-2 text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100"
            />
            <button
              type="submit"
              disabled={!input.trim() || isSending}
              className="rounded-md bg-blue-600 px-3 py-2 text-sm font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
            >
              {isSending ? 'Sending...' : 'Send'}
            </button>
          </form>
        </section>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <span aria-hidden="true">💬</span>
        </button>
      )}
    </div>
  );
}
