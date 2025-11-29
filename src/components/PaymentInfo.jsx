import React from 'react';
import { Copy, Check } from 'lucide-react';

export default function PaymentInfo() {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("1002-952-8638-45");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-2xl text-center">
                <h3 className="text-2xl font-serif font-bold text-[#5D4E37] mb-8">
                    계좌이체 결제 안내
                </h3>

                <div className="bg-[#F5F0E8] p-8 rounded-2xl inline-block w-full max-w-md border border-[#5D4E37]/10">
                    <p className="text-[#5D4E37]/70 text-sm mb-2">입금 계좌</p>
                    <div className="text-xl font-bold text-[#5D4E37] mb-1">우리은행 1002-952-8638-45</div>
                    <div className="text-[#5D4E37] mb-6">예금주: 전봉영</div>

                    <button
                        onClick={handleCopy}
                        className="flex items-center justify-center gap-2 mx-auto px-6 py-2 bg-white border border-[#5D4E37]/20 rounded-full text-[#5D4E37] hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                        {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
                        {copied ? "복사되었습니다" : "계좌번호 복사"}
                    </button>
                </div>

                <div className="mt-8 space-y-2 text-sm text-[#5D4E37]/60">
                    <p>⚠️ 주문자명과 입금자명을 동일하게 해주세요</p>
                    <p>⚠️ 입금 확인 후 순차 발송됩니다</p>
                </div>
            </div>
        </section>
    );
}
