import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/918377996001"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed right-5 top-1/2 -translate-y-1/2 
      bg-green-500 text-white p-4 rounded-full 
      shadow-lg hover:scale-110 transition-all duration-300 z-50"
        >
            <FaWhatsapp size={26} />
        </a>
    );
};

export default WhatsAppButton;
