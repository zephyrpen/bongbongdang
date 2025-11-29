import React from 'react';
import { ChevronDown } from 'lucide-react';
import heroImg from '../assets/images/ssanghwa2.jpg'; // Using the close-up cup image which might be ssanghwa2 based on my copy order (uploaded_image_1)

export default function Hero({ onOrderClick }) {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImg}
                    alt="수제 쌍화차"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#F5F0E8]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 animate-fade-in-up">
                <span className="inline-block py-1 px-3 rounded-full bg-[#D4A853]/90 text-white text-sm font-medium mb-4 backdrop-blur-sm">
                    겨울 한정 판매
                </span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight drop-shadow-lg">
                    정성 가득<br />수제 쌍화차
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-8 font-light drop-shadow-md">
                    98% 이상 국산 재료로 만든<br className="md:hidden" /> 건강한 겨울 선물
                </p>
                <button
                    onClick={onOrderClick}
                    className="px-8 py-3 bg-[#A65D57] text-white rounded-full text-lg font-medium hover:bg-[#8E4C46] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                >
                    주문하기
                </button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/80">
                <ChevronDown size={32} />
            </div>
        </section>
    );
}
