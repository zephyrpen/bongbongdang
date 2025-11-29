import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#5D4E37] text-[#F5F0E8]/60 py-12 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-serif font-bold text-[#F5F0E8] mb-4">봉봉당</h2>
                <p className="mb-8">겨울 한철만 맛볼 수 있는 수제 쌍화차입니다 💛</p>

                <div className="text-sm space-y-1">
                    <p>판매자: 전봉영</p>
                    <p>문의: 010-XXXX-XXXX</p>
                </div>

                <div className="mt-8 pt-8 border-t border-[#F5F0E8]/10 text-xs">
                    &copy; {new Date().getFullYear()} BongBongDang. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
