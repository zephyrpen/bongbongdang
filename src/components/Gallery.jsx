import React, { useState } from 'react';
import { X } from 'lucide-react';
import img1 from '../assets/images/ssanghwa1.jpg';
import img2 from '../assets/images/ssanghwa2.jpg';
import img3 from '../assets/images/ssanghwa3.jpg';
import img4 from '../assets/images/ssanghwa4.jpg';

const images = [img1, img2, img3, img4];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-5xl">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#5D4E37] mb-12 text-center">
                    갤러리
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="aspect-square overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02]"
                            onClick={() => setSelectedImage(img)}
                        >
                            <img
                                src={img}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Enlarged"
                        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
}
