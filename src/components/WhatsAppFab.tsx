import { MessageCircle } from 'lucide-react';

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/548883372"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-black text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-[2000]"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}