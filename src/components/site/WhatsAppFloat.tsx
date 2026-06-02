const WHATSAPP_URL =
  "https://wa.me/351936241316?text=" +
  encodeURIComponent("Olá! Gostaria de mais informações sobre a carta de condução na A1 Norte.");

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar connosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/30 transition-transform hover:scale-110 md:h-16 md:w-16"
    >
      <svg viewBox="0 0 32 32" fill="white" className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true">
        <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.8 5.5 2.1 7.9L.3 31.6l7.9-2.1c2.3 1.3 5 1.9 7.8 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.5c-2.5 0-4.9-.7-7-1.9l-.5-.3-4.7 1.2 1.3-4.6-.3-.5c-1.4-2.2-2.1-4.7-2.1-7.3 0-7.3 6-13.2 13.3-13.2s13.2 5.9 13.2 13.2-5.9 13.4-13.2 13.4zm7.3-9.9c-.4-.2-2.4-1.2-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.6-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.3.1-.5 0-.7 0-.2-.9-2.2-1.3-3-.3-.8-.7-.7-.9-.7H10c-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.3 0 1.9 1.4 3.8 1.6 4.1.2.3 2.8 4.3 6.8 6 4 1.7 4 1.1 4.7 1 .7-.1 2.4-1 2.7-1.9.3-1 .3-1.8.2-1.9 0-.1-.3-.2-.7-.4z" />
      </svg>
    </a>
  );
}