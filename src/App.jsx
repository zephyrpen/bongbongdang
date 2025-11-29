import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Gallery from './components/Gallery';
import ProductInfo from './components/ProductInfo';
import Reviews from './components/Reviews';
import OrderSection from './components/OrderSection';
import PaymentInfo from './components/PaymentInfo';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import { Check } from 'lucide-react';

function App() {
  const [user, setUser] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState(null); // { ...orderData }
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('bongbong_currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('bongbong_currentUser', JSON.stringify(userData));
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('bongbong_currentUser');
  };

  const handleOrderSubmit = (orderData) => {
    setOrderConfirmation(orderData);
  };

  const confirmOrder = () => {
    // Here you would typically send data to a server
    setIsOrderComplete(true);
    setOrderConfirmation(null);
    // Scroll to payment info or show success message
  };

  const scrollToOrder = () => {
    const section = document.getElementById('order-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] font-sans text-[#5D4E37]">
      <Header
        user={user}
        onLoginClick={() => setIsAuthModalOpen(true)}
        onLogout={handleLogout}
      />

      <main>
        <Hero onOrderClick={scrollToOrder} />
        <Intro />
        <Gallery />
        <ProductInfo />
        <Reviews />
        <OrderSection
          user={user}
          onLoginClick={() => setIsAuthModalOpen(true)}
          onOrderSubmit={handleOrderSubmit}
        />
        <PaymentInfo />
      </main>

      <Footer />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
      />

      {/* Order Confirmation Modal */}
      {orderConfirmation && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-scale-in">
            <div className="bg-[#5D4E37] p-4 text-white font-bold text-lg text-center">
              주문 정보 확인
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500">주문자</span>
                  <span className="font-medium">{orderConfirmation.name}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500">연락처</span>
                  <span className="font-medium">{orderConfirmation.phone}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500">주소</span>
                  <span className="font-medium text-right">{orderConfirmation.address} {orderConfirmation.detailAddress}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500">수량</span>
                  <span className="font-medium">{orderConfirmation.quantity}개</span>
                </div>
                <div className="flex justify-between pt-2 text-lg font-bold text-[#A65D57]">
                  <span>총 결제금액</span>
                  <span>{orderConfirmation.totalPrice.toLocaleString()}원</span>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setOrderConfirmation(null)}
                  className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300 transition-colors cursor-pointer"
                >
                  취소
                </button>
                <button
                  onClick={confirmOrder}
                  className="flex-1 py-3 bg-[#5D4E37] text-white rounded-xl font-bold hover:bg-[#4A3E2C] transition-colors shadow-md cursor-pointer"
                >
                  주문확정
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Order Complete Modal */}
      {isOrderComplete && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-scale-in text-center p-8">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#5D4E37] mb-2">주문이 완료되었습니다! 🎉</h3>
            <p className="text-gray-500 mb-8">
              아래 계좌로 입금해주시면<br />확인 후 빠르게 배송해드리겠습니다.
            </p>

            <div className="bg-[#F5F0E8] p-4 rounded-xl mb-8">
              <p className="text-sm text-gray-500 mb-1">우리은행</p>
              <p className="text-lg font-bold text-[#5D4E37] mb-2">1002-952-8638-45</p>
              <p className="text-sm text-gray-500">예금주: 전봉영</p>
            </div>

            <button
              onClick={() => setIsOrderComplete(false)}
              className="w-full py-3 bg-[#5D4E37] text-white rounded-xl font-bold hover:bg-[#4A3E2C] transition-colors shadow-md cursor-pointer"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
