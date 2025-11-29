import React, { useState, useEffect } from 'react';
import { Minus, Plus, CreditCard } from 'lucide-react';

export default function OrderSection({ user, onLoginClick, onOrderSubmit }) {
    const [quantity, setQuantity] = useState(1);
    const [orderInfo, setOrderInfo] = useState({
        name: '',
        phone: '',
        address: '',
        detailAddress: ''
    });

    const PRICE_PER_UNIT = 17500;
    const SHIPPING_COST = 3000;
    const FREE_SHIPPING_THRESHOLD = 3;

    useEffect(() => {
        if (user) {
            setOrderInfo({
                name: user.name || '',
                phone: user.phone || '',
                address: user.address?.address1 || '',
                detailAddress: user.address?.address2 || ''
            });
        }
    }, [user]);

    const handleQuantityChange = (delta) => {
        const newQty = Math.max(1, Math.min(10, quantity + delta));
        setQuantity(newQty);
    };

    const productTotal = quantity * PRICE_PER_UNIT;
    const shipping = quantity >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
    const total = productTotal + shipping;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user) {
            onLoginClick();
            return;
        }
        onOrderSubmit({
            ...orderInfo,
            quantity,
            totalPrice: total,
            shippingFee: shipping
        });
    };

    return (
        <section id="order-section" className="py-20 px-4 bg-[#F5F0E8]">
            <div className="container mx-auto max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-[#5D4E37] p-6 text-center">
                    <h3 className="text-2xl font-serif font-bold text-[#F5F0E8]">주문하기</h3>
                    <p className="text-[#F5F0E8]/70 text-sm mt-1">회원 전용 특별 혜택</p>
                </div>

                <div className="p-8">
                    {/* Price Info */}
                    <div className="bg-[#F5F0E8]/50 p-6 rounded-xl mb-8 border border-[#5D4E37]/10">
                        <div className="flex justify-between mb-2 text-[#5D4E37]">
                            <span>1팩 (450g)</span>
                            <span className="font-bold">17,500원</span>
                        </div>
                        <div className="flex justify-between mb-2 text-[#5D4E37]/70 text-sm">
                            <span>배송료</span>
                            <span>3,000원 (3팩 이상 무료)</span>
                        </div>
                        {quantity >= FREE_SHIPPING_THRESHOLD && (
                            <div className="text-[#A65D57] text-sm font-bold text-right">
                                ✨ 무료배송 적용됨!
                            </div>
                        )}
                    </div>

                    {!user ? (
                        <div className="text-center py-10">
                            <p className="text-[#5D4E37] mb-6">로그인 후 주문 가능합니다.</p>
                            <button
                                onClick={onLoginClick}
                                className="px-8 py-3 bg-[#5D4E37] text-white rounded-full font-medium hover:bg-[#4A3E2C] transition-colors shadow-md cursor-pointer"
                            >
                                로그인 / 회원가입
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* User Info */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#5D4E37] mb-1">주문자 이름</label>
                                    <input
                                        type="text"
                                        value={orderInfo.name}
                                        onChange={(e) => setOrderInfo({ ...orderInfo, name: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4A853] focus:border-transparent outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#5D4E37] mb-1">연락처</label>
                                    <input
                                        type="tel"
                                        value={orderInfo.phone}
                                        onChange={(e) => setOrderInfo({ ...orderInfo, phone: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4A853] focus:border-transparent outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#5D4E37] mb-1">배송지 주소</label>
                                    <input
                                        type="text"
                                        value={orderInfo.address}
                                        onChange={(e) => setOrderInfo({ ...orderInfo, address: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4A853] focus:border-transparent outline-none mb-2"
                                        placeholder="기본 주소"
                                        required
                                    />
                                    <input
                                        type="text"
                                        value={orderInfo.detailAddress}
                                        onChange={(e) => setOrderInfo({ ...orderInfo, detailAddress: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4A853] focus:border-transparent outline-none"
                                        placeholder="상세 주소"
                                    />
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            {/* Quantity */}
                            <div className="flex items-center justify-between">
                                <span className="font-medium text-[#5D4E37]">수량</span>
                                <div className="flex items-center gap-4 bg-gray-50 rounded-full px-4 py-2 border border-gray-200">
                                    <button
                                        type="button"
                                        onClick={() => handleQuantityChange(-1)}
                                        className="p-1 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
                                        disabled={quantity <= 1}
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className="font-bold text-lg w-8 text-center">{quantity}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleQuantityChange(1)}
                                        className="p-1 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
                                        disabled={quantity >= 10}
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Total */}
                            <div className="bg-[#5D4E37]/5 p-6 rounded-xl space-y-2">
                                <div className="flex justify-between text-[#5D4E37]/80">
                                    <span>상품금액</span>
                                    <span>{productTotal.toLocaleString()}원</span>
                                </div>
                                <div className="flex justify-between text-[#5D4E37]/80">
                                    <span>배송비</span>
                                    <span>
                                        {shipping === 0 ? <span className="text-[#A65D57]">무료</span> : `${shipping.toLocaleString()}원`}
                                    </span>
                                </div>
                                <div className="flex justify-between text-xl font-bold text-[#5D4E37] pt-2 border-t border-[#5D4E37]/10">
                                    <span>총 결제금액</span>
                                    <span>{total.toLocaleString()}원</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-[#A65D57] text-white rounded-xl text-lg font-bold hover:bg-[#8E4C46] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <CreditCard size={20} />
                                주문하기
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
