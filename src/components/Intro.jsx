import React from 'react';

export default function Intro() {
    const items = [
        { icon: "⚡", text: "한 게 없는데 피로하다" },
        { icon: "🤧", text: "늘 감기 기운이 있다" },
        { icon: "🥶", text: "손발이 차다" },
        { icon: "☕", text: "커피 말고 다른 차를 마시고 싶다" }
    ];

    return (
        <section className="py-20 px-4 bg-[#F5F0E8]">
            <div className="container mx-auto max-w-4xl text-center">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#5D4E37] mb-12">
                    이런 분께 추천해요
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center gap-4 text-left border border-[#5D4E37]/10"
                        >
                            <span className="text-4xl">{item.icon}</span>
                            <span className="text-lg text-[#5D4E37] font-medium">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
