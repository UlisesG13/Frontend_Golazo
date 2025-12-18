import React, { useState } from 'react';

// --- IMPORTS: ORGANISMOS ---
import ProductFilterSidebar from '../components/organism/ProductFilterSideBar.jsx';
import ProductSortBar from '../components/organism/ProductSortbar.jsx';

// --- IMPORTS: SHARED ---
import ProductCard from '../../Shared/components/molecules/ProductCard.jsx';
import Footer from '../../Shared/components/organism/Footer.jsx';
import Navbar from '../../Shared/components/organism/Navbar.jsx';

export default function ProductsPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Mock Data
    const PRODUCTS = [
        { id: 1, name: 'Adidas Predator 2025 Elite', price: 1400, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2088f1dc34464c299939ce2674251102_9366/Predator_24_Elite_Low_Firm_Ground_Boots_Black_IG7766_22_model.jpg', badges: ['New'] },
        { id: 2, name: 'Nike Zoom Mercurial Vapor 15', price: 1850, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7f39423c-3965-4f40-b6a9-80436d4001d9/calzado-de-futbol-high-superfly-10-elite-mercurial-dream-speed-fg-L001bp.png', badges: ['Sale'] },
        { id: 3, name: 'Puma Future Ultimate FG', price: 1200, image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107355/01/sv01/fnd/MEX/fmt/png/Tenis-de-futbol-FUTURE-ULTIMATE-FG/AG-para-hombre', badges: [] },
        { id: 4, name: 'Mizuno Alpha Japan', price: 2100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8X3z-cT8S5h4T-pW9yP_QpXqO_k_E5_Jk_w&s', badges: ['Hot'] },
        { id: 5, name: 'Adidas X Crazyfast', price: 1350, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e461148466649738096af50005d5d88_9366/X_Crazyfast.3_Firm_Ground_Boots_White_GY7428_22_model.jpg', badges: [] },
        { id: 6, name: 'Nike Phantom GX II', price: 1600, image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto/4f89f50e-a602-40a2-b91a-7b06822c92d0/calzado-de-futbol-low-phantom-gx-2-academy-lv8-mg-rP3S07.png', badges: ['New'] },
    ];

    return (
        <>
            <style>{`
                html, body {
                    background-color: #ffffff !important;
                    margin: 0;
                    padding: 0;
                }
            `}</style>

            <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
                
                <Navbar />

                {/* MODIFICADO: Agregué 'mt-8' para separar el contenido del Navbar */}
                <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-10 py-12 mt-12 bg-white">
                    
                    <div className="mb-8 pt-2">
                        <div className="text-xs text-gray-400 mb-2 flex gap-2">
                            <span className="hover:text-black cursor-pointer">Home</span> / 
                            <span className="hover:text-black cursor-pointer">Calzado</span> / 
                            <span className="text-black font-medium">Fútbol</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black">
                            Tenis Fútbol Soccer
                        </h1>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 relative items-start">
                        
                        {isSidebarOpen && (
                            <div 
                                className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity" 
                                onClick={() => setIsSidebarOpen(false)} 
                            />
                        )}

                        <div className="flex-shrink-0 lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] lg:overflow-y-auto z-10 bg-white">
                            <ProductFilterSidebar 
                                isOpen={isSidebarOpen} 
                                onClose={() => setIsSidebarOpen(false)} 
                            />
                        </div>

                        <div className="flex-1 w-full bg-white z-0">
                            <ProductSortBar 
                                totalResults={PRODUCTS.length} 
                                onToggleSidebar={() => setIsSidebarOpen(true)} 
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 auto-rows-fr pb-12">
                                {PRODUCTS.map((product) => (
                                    <div key={product.id} className="h-full">
                                        <ProductCard
                                            name={product.name}
                                            price={product.price}
                                            image={product.image}
                                            badges={product.badges}
                                        />
                                    </div>
                                ))}
                            </div>
                            
                            <div className="flex justify-center items-center gap-2 border-t border-gray-100 pt-8">
                                <button className="w-10 h-10 flex items-center justify-center border border-black bg-black text-white rounded hover:opacity-80 transition font-medium">1</button>
                                <button className="w-10 h-10 flex items-center justify-center border border-gray-200 hover:border-black rounded transition font-medium">2</button>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer />
                
            </div>
        </>
    );
}