import React, { useState, useEffect } from 'react';
import { LogOut } from 'lucide-react';

export default function Header({ user, onLoginClick, onLogout }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#F5F0E8]/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <h1 className="text-2xl font-serif font-bold text-[#5D4E37]">
                    봉봉당
                    <span className="text-xs font-sans font-normal ml-2 text-[#5D4E37]/70">수제 쌍화차</span>
                </h1>

                <div>
                    {user ? (
                        <div className="flex items-center gap-4">
                            <span className="hidden md:inline text-[#5D4E37] font-medium">{user.name}님</span>
                            <button
                                onClick={onLogout}
                                className="flex items-center gap-1 text-sm text-[#5D4E37] hover:text-[#A65D57] transition-colors"
                            >
                                <LogOut size={18} />
                                <span className="hidden sm:inline">로그아웃</span>
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={onLoginClick}
                            className="px-4 py-2 bg-[#5D4E37] text-[#F5F0E8] rounded-full text-sm font-medium hover:bg-[#5D4E37]/90 transition-all shadow-md hover:shadow-lg cursor-pointer"
                        >
                            로그인 / 회원가입
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
}
