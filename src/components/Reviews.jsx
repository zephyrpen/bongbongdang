import React from 'react';
import { Quote } from 'lucide-react';

export default function Reviews() {
    const reviews = [
        "인스타 블로거에서 28,000원에 판매 중인 제품!",
        "매년 다른 동네에서도 찾아오는 인기 제품",
        "시어머니께 칭찬받는 선물 아이템",
        "설 명절 선물로도 딱!"
    ];

    return (
        <section className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <span className="text-[#A65D57] font-bold tracking-widest text-sm uppercase mb-2 block">Real Reviews</span>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#5D4E37]">
                        믿고 먹는 봉봉당
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-[#F5F0E8]/30 p-6 rounded-xl relative">
                            <Quote className="text-[#D4A853]/20 absolute top-4 left-4" size={40} />
                            <p className="text-[#5D4E37] font-medium relative z-10 pt-4 pl-4">
                                "{review}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
