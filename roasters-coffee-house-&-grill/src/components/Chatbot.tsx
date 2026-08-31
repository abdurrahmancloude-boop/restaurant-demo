import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, MapPin, Phone, Compass, Info } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ChatMessage } from '../types';

interface ChatbotProps {
  onNavigate: (id: string) => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-welcome',
      sender: 'assistant',
      text: 'Welcome to Roasters Coffee House & Grill. How can we help?',
      timestamp: 'Just now',
      quickActions: ['Menu', 'Location', 'Contact', 'About'],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const processQuery = (rawQuery: string) => {
    const q = rawQuery.trim().toLowerCase();
    let reply = '';
    let quickActions: string[] | undefined = undefined;

    if (q.includes('location') || q.includes('where') || q.includes('address') || q.includes('direction')) {
      reply = `Roasters Coffee House & Grill is located at ${RESTAURANT_INFO.fullAddress}.`;
      quickActions = ['Contact', 'Menu'];
    } else if (q.includes('contact') || q.includes('phone') || q.includes('call') || q.includes('number')) {
      reply = `You can call Roasters directly at ${RESTAURANT_INFO.phoneDisplay}.`;
      quickActions = ['Location', 'Menu'];
    } else if (q.includes('menu') || q.includes('food') || q.includes('drink') || q.includes('coffee') || q.includes('grill')) {
      reply = `Our offerings include Coffee, Grill, Breakfast, Main Dishes, Desserts, and Drinks. Please check the Menu section or call us at ${RESTAURANT_INFO.phoneDisplay} for details.`;
      quickActions = ['Location', 'Contact'];
    } else if (q.includes('about') || q.includes('who') || q.includes('experience')) {
      reply = `${RESTAURANT_INFO.name} offers coffee house specialties and grill dining in ${RESTAURANT_INFO.area}, ${RESTAURANT_INFO.city}, Pakistan.`;
      quickActions = ['Location', 'Contact'];
    } else if (q.includes('facebook') || q.includes('instagram') || q.includes('social') || q.includes('page')) {
      reply = `Connect with us on Facebook (${RESTAURANT_INFO.facebookFollowers}) and Instagram (${RESTAURANT_INFO.instagramFollowers}).`;
      quickActions = ['Menu', 'Contact'];
    } else {
      // Prompt Rule: If asked about unknown information:
      // "Please contact Roasters directly for the latest information."
      reply = 'Please contact Roasters directly for the latest information.';
      quickActions = ['Contact', 'Location', 'Menu'];
    }

    return { reply, quickActions };
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend !== undefined ? textToSend : input).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (textToSend === undefined) setInput('');

    // Process answer using strict knowledge boundary
    setTimeout(() => {
      const { reply, quickActions } = processQuery(query);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        quickActions,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 300);
  };

  const handleQuickAction = (action: string) => {
    if (action === 'Menu') {
      onNavigate('menu');
      handleSend('What is on the Menu?');
    } else if (action === 'Location') {
      onNavigate('contact');
      handleSend('Where are you located?');
    } else if (action === 'Contact') {
      onNavigate('contact');
      handleSend('How can I contact Roasters?');
    } else if (action === 'About') {
      onNavigate('about');
      handleSend('Tell me about Roasters');
    } else {
      handleSend(action);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          id="chatbot-trigger-btn"
          onClick={() => setIsOpen(true)}
          className="liquid-glass-dark group relative flex items-center gap-3 px-5 py-3.5 rounded-full text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          aria-label="Open Roasters Assistant"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <MessageSquare className="w-4 h-4 text-white" />
          <span className="text-xs uppercase tracking-wider font-medium font-sans">
            Roasters Assistant
          </span>
        </button>
      )}

      {/* Assistant Window */}
      {isOpen && (
        <div
          id="chatbot-window"
          className="w-[90vw] sm:w-[380px] h-[520px] rounded-3xl bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/15 shadow-2xl flex flex-col overflow-hidden text-white animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          {/* Header */}
          <div className="p-4 bg-[#111111]/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white font-instrument text-lg">
                R
              </div>
              <div>
                <h4 className="text-sm font-medium">Roasters Assistant</h4>
                <p className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  Online
                </p>
              </div>
            </div>

            <button
              id="chatbot-close-btn"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-light">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-white text-neutral-950 font-medium rounded-tr-none'
                      : 'bg-white/5 text-neutral-200 rounded-tl-none border border-white/10'
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                </div>

                <span className="text-[10px] text-neutral-500 font-mono mt-1 px-1">
                  {msg.timestamp}
                </span>

                {/* Quick actions if any */}
                {msg.quickActions && msg.quickActions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {msg.quickActions.map((qa) => (
                      <button
                        key={qa}
                        onClick={() => handleQuickAction(qa)}
                        className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-[11px] text-neutral-300 hover:text-white transition-all cursor-pointer font-mono"
                      >
                        {qa === 'Menu' && <Compass className="w-3 h-3 inline mr-1 text-orange-400" />}
                        {qa === 'Location' && <MapPin className="w-3 h-3 inline mr-1 text-red-400" />}
                        {qa === 'Contact' && <Phone className="w-3 h-3 inline mr-1 text-emerald-400" />}
                        {qa === 'About' && <Info className="w-3 h-3 inline mr-1 text-blue-400" />}
                        {qa}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#111111]/80 backdrop-blur-md border-t border-white/10 flex items-center gap-2"
          >
            <input
              id="chatbot-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Roasters..."
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-white/30"
            />
            <button
              id="chatbot-send-btn"
              type="submit"
              disabled={!input.trim()}
              className="w-9 h-9 rounded-full bg-white text-neutral-950 flex items-center justify-center hover:bg-neutral-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5 text-black" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
