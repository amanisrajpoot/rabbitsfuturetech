'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/917300313898"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] transition-colors duration-300 hover:shadow-xl hover:shadow-[#25D366]/20"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Chat with us on WhatsApp"
        >
            <MessageCircle className="h-8 w-8 fill-current" />
            <span className="sr-only">Chat with us on WhatsApp</span>
        </motion.a>
    )
}
