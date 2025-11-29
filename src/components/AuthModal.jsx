import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, onLogin }) {
    const [mode, setMode] = useState('login'); // 'login' or 'register'
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address1: '',
        address2: ''
    });
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError('');
    };

    const formatPhone = (value) => {
        return value
            .replace(/[^0-9]/g, '')
            .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
    };

    const handlePhoneChange = (e) => {
        const formatted = formatPhone(e.target.value);
        setFormData(prev => ({ ...prev, phone: formatted }));
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        const users = JSON.parse(localStorage.getItem('bongbong_users') || '[]');

        if (mode === 'register') {
            // Validation
            if (formData.name.length < 2) {
                setError('이름은 2자 이상이어야 합니다.');
                return;
            }
            if (formData.phone.length < 12) { // 010-0000-0000
                setError('올바른 전화번호를 입력해주세요.');
                return;
            }
            if (!formData.address1) {
                setError('주소를 입력해주세요.');
                return;
            }

            // Check duplicate
            if (users.find(u => u.phone === formData.phone)) {
                setError('이미 등록된 전화번호입니다.');
                return;
            }

            const newUser = {
                id: Date.now().toString(),
                name: formData.name,
                phone: formData.phone,
                address: {
                    address1: formData.address1,
                    address2: formData.address2
                },
                createdAt: new Date().toISOString()
            };

            users.push(newUser);
            localStorage.setItem('bongbong_users', JSON.stringify(users));

            // Auto login
            onLogin(newUser);
            onClose();
        } else {
            // Login
            const user = users.find(u => u.phone === formData.phone);
            if (user) {
                onLogin(user);
                onClose();
            } else {
                setError('등록되지 않은 번호입니다. 회원가입을 진행해주세요.');
            }
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-scale-in">
                <div className="bg-[#5D4E37] p-4 flex justify-between items-center text-white">
                    <h3 className="font-serif font-bold text-lg">
                        {mode === 'login' ? '로그인' : '회원가입'}
                    </h3>
                    <button onClick={onClose} className="hover:text-gray-300 transition-colors cursor-pointer">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {mode === 'register' && (
                            <div>
                                <label className="block text-sm font-medium text-[#5D4E37] mb-1">이름 *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4A853] focus:border-transparent outline-none"
                                    placeholder="홍길동"
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-[#5D4E37] mb-1">전화번호 *</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4A853] focus:border-transparent outline-none"
                                placeholder="010-0000-0000"
                                maxLength={13}
                            />
                        </div>

                        {mode === 'register' && (
                            <div>
                                <label className="block text-sm font-medium text-[#5D4E37] mb-1">배송지 주소 *</label>
                                <input
                                    type="text"
                                    name="address1"
                                    value={formData.address1}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4A853] focus:border-transparent outline-none mb-2"
                                    placeholder="기본 주소"
                                />
                                <input
                                    type="text"
                                    name="address2"
                                    value={formData.address2}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4A853] focus:border-transparent outline-none"
                                    placeholder="상세 주소"
                                />
                            </div>
                        )}

                        {error && (
                            <p className="text-[#A65D57] text-sm text-center font-medium">{error}</p>
                        )}

                        <button
                            type="submit"
                            className="w-full py-3 bg-[#5D4E37] text-white rounded-xl font-bold hover:bg-[#4A3E2C] transition-colors shadow-md mt-4 cursor-pointer"
                        >
                            {mode === 'login' ? '로그인' : '가입완료'}
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-[#5D4E37]/70">
                        {mode === 'login' ? (
                            <p>
                                처음이신가요?{' '}
                                <button
                                    onClick={() => { setMode('register'); setError(''); }}
                                    className="text-[#A65D57] font-bold hover:underline cursor-pointer"
                                >
                                    회원가입
                                </button>
                            </p>
                        ) : (
                            <p>
                                이미 회원이신가요?{' '}
                                <button
                                    onClick={() => { setMode('login'); setError(''); }}
                                    className="text-[#A65D57] font-bold hover:underline cursor-pointer"
                                >
                                    로그인
                                </button>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
