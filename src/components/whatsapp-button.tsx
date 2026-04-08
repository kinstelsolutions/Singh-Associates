"use client";
import React from "react";
import { sendGTMEvent } from '@next/third-parties/google';

export function WhatsAppButton() {
  const phoneNumber = "917007894901"; // Assuming India code +91
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      onClick={() => sendGTMEvent({ event: 'conversion', placement: 'whatsapp_widget', method: 'whatsapp' })}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-700 animate-floating"
      aria-label="Chat on WhatsApp">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8">
        <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.128.55 4.194 1.594 6.02L.153 23.518l5.63-1.479c1.745.962 3.722 1.47 5.755 1.47h.005c6.645 0 12.03-5.386 12.03-12.031C23.574 5.385 18.19 0 12.031 0zm0 21.503h-.004c-1.802 0-3.568-.485-5.115-1.402l-.367-.217-3.804.998.998-3.712-.238-.38a10.007 10.007 0 01-1.528-5.263C1.97 5.513 6.484 1.002 12.03 1.002c5.545 0 10.059 4.512 10.059 10.059.001 5.546-4.512 10.06-10.058 10.06zm5.521-7.545c-.302-.151-1.791-.884-2.068-.985-.276-.101-.477-.151-.678.151-.201.302-.779.985-.956 1.186-.176.201-.352.226-.653.075-.302-.151-1.28-.472-2.44-1.509-.902-.806-1.511-1.8-1.688-2.102-.176-.302-.019-.465.132-.616.136-.136.302-.352.453-.528.151-.176.201-.302.302-.503.1-.201.05-.377-.025-.528-.075-.151-.678-1.635-.93-2.238-.244-.582-.493-.503-.678-.513-.176-.008-.377-.008-.578-.008-.201 0-.528.075-.805.377-.276.302-1.055 1.031-1.055 2.514 0 1.483 1.08 2.916 1.231 3.117.151.201 2.126 3.245 5.151 4.55.72.311 1.281.496 1.719.635.723.23 1.382.197 1.902.12.582-.086 1.791-.73 2.043-1.434.251-.704.251-1.307.176-1.434-.076-.126-.277-.201-.579-.352z" />
      </svg>
    </a>
  );
}
