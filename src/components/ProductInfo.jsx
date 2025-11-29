import React from 'react';
import { Package, Leaf, Coffee } from 'lucide-react';

export default function ProductInfo() {
    return (
        <section className="py-20 px-4 bg-[#F5F0E8]">
            <div className="container mx-auto max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Info Card 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#A65D57]">
                        <div className="flex items-center gap-3 mb-4 text-[#A65D57]">
                            <Package size={24} />
                            <h4 className="font-serif font-bold text-xl">제품 정보</h4>
                        </div>
                        <ul className="space-y-2 text-[#5D4E37]/80">
                            <li><span className="font-bold text-[#5D4E37]">용량:</span> 450g (650~700ml 용기 가득)</li>
                            <li><span className="font-bold text-[#5D4E37]">포장:</span> 위생 비닐팩</li>
                            <li><span className="font-bold text-[#5D4E37]">보관:</span> 냉장 보관 권장</li>
                        </ul>
                    </div>

                    {/* Info Card 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#5D4E37]">
                        <div className="flex items-center gap-3 mb-4 text-[#5D4E37]">
                            <Leaf size={24} />
                            <h4 className="font-serif font-bold text-xl">원재료</h4>
                        </div>
                        <p className="text-sm text-[#5D4E37]/60 mb-2">98% 이상 국산 재료</p>
                        <p className="text-[#5D4E37]/80 leading-relaxed">
                            백작약, 숙지황, 황기, 대추, 당귀, 천궁, 감초, 계피, 생강
                            <br />
                            <span className="text-xs text-[#5D4E37]/60">+ 땅콩분태, 깨, 대추, 잣</span>
                        </p>
                    </div>

                    {/* Info Card 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#D4A853]">
                        <div className="flex items-center gap-3 mb-4 text-[#D4A853]">
                            <Coffee size={24} />
                            <h4 className="font-serif font-bold text-xl">음용 방법</h4>
                        </div>
                        <ul className="space-y-2 text-[#5D4E37]/80">
                            <li>뜨거운 물 150ml에</li>
                            <li>밥스푼 <span className="font-bold text-[#D4A853]">2스푼</span> 정도</li>
                            <li className="text-sm text-[#5D4E37]/60">기호에 따라 진하게/연하게 조절하세요</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
