
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Bot, Zap } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AIChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Colver Logistics AI online. How can I assist with your cable specification or RFQ today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    // Safety check for API Key - Vercel will need this in Environment Variables
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      setMessages(prev => [...prev, { role: 'assistant', content: "System Error: API Configuration missing. Please contact support." }]);
      return;
    }

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // Re-initialize inside call to ensure fresh environment access
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are the Technical Support AI for Colver Network Ltd, a distributor of HEAVY UNDERGROUND CABLES. 
        Your tone: Professional, technical, efficient, and authoritative.
        Key Product Knowledge:
        - High Voltage (HV) 11kV to 132kV XLPE/SWA cables.
        - Submarine Power Links for offshore energy.
        - Compliance: IEC 60502, BS 6622, IEEE standards.
        - Logistics: Global export from Houston, TX.
        - Services: Custom cutting, drum spooling, site delivery.
        
        Answer this user question about heavy cables: ${userMessage}`,
      });

      const aiResponse = response.text || "I processed your request but couldn't generate a text summary. Please contact logistics@colvernetwork.com.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Gemini API Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Connection timed out. Our technical team is available at +1 (800) CABLE-OPS for immediate project support." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-slate-950 text-orange-600 rounded-sm flex items-center justify-center shadow-2xl hover:bg-orange-600 hover:text-white transition-all z-[60] border-2 border-orange-600 group"
        aria-label="Toggle AI Support"
      >
        {isOpen ? <X className="w-8 h-8" /> : <Zap className="w-8 h-8 group-hover:scale-110 transition-transform" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[350px] sm:w-[450px] h-[550px] bg-white rounded-sm shadow-2xl border-2 border-slate-900 flex flex-col z-[60] overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-slate-950 p-5 text-white flex items-center justify-between border-b-4 border-orange-600">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-600 p-2 rounded-sm">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-black heading-font uppercase tracking-widest text-sm">Logistics Bot v2.4</span>
                <span className="text-[10px] font-bold text-orange-500 uppercase">System Status: Optimal</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-orange-500" aria-label="Close Chat"><X className="w-5 h-5" /></button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 bg-slate-50 industrial-pattern opacity-95">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-3 rounded-sm text-sm font-semibold shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-white text-slate-900 border border-slate-200'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-5 py-3 rounded-sm shadow-sm border border-slate-200">
                  <Loader2 className="w-5 h-5 text-orange-600 animate-spin" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t-2 border-slate-100">
            <div className="flex items-center space-x-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about cable specs..."
                className="flex-grow px-4 py-3 bg-slate-100 border-2 border-transparent rounded-sm focus:border-orange-600 transition-all outline-none font-bold text-sm"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading || !input.trim()}
                className="bg-slate-950 text-orange-600 p-3 rounded-sm hover:bg-orange-600 hover:text-white disabled:opacity-50 transition-all"
                aria-label="Send Message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatButton;
