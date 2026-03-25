export const MessageBubble = ({ role, content }) => {
  const isUser = role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fadeIn`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-3 ${
          isUser
            ? 'bg-gradient-to-r from-green-500 to-cyan-400 text-white'
            : 'bg-white/5 text-white border border-white/10'
        }`}
      >
        {!isUser && (
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-cyan-400 flex items-center justify-center">
              <span className="text-xs font-bold">KP</span>
            </div>
            <span className="text-xs text-white/60">Kieran</span>
          </div>
        )}
        <div className="whitespace-pre-wrap break-words text-sm leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
};
