'use client';

import { useState } from 'react';

export default function CustomerDashboardPage() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center py-0 md:py-8 px-0 md:px-4 font-sans antialiased">
      
      {/* Mobile App Container Frame */}
      <div className="w-full max-w-md bg-white md:rounded-[40px] shadow-2xl overflow-hidden flex flex-col relative min-h-screen md:min-h-[850px] border border-gray-100">
        
        {/* TOP STATUS / HEADER BAR */}
        <div className="px-6 pt-5 pb-3 flex items-center justify-between bg-white z-10 sticky top-0 border-b border-gray-50">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-600 bg-clip-text text-transparent">AIOR</span>
            <span className="text-[9px] uppercase font-bold tracking-wider text-gray-400">ALL IN ONE RESTAURANT</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 text-xs font-bold text-gray-800 bg-gray-50 px-2.5 py-1.5 rounded-full border border-gray-200">
              <span>📍</span>
              <span>New York, USA</span>
              <span className="text-gray-400 text-[10px]">▼</span>
            </div>
            <div className="relative p-2 bg-gray-50 rounded-full border border-gray-200 cursor-pointer">
              <span className="text-sm">🔔</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* MAIN SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto pb-24 space-y-6 px-6 pt-3">
          
          {/* SEARCH BAR */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for restaurants, cuisines, offers..." 
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-10 pr-12 py-3 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-indigo-600 transition-colors"
            />
            <span className="absolute left-3.5 top-3.5 text-gray-400 text-sm">🔍</span>
            <span className="absolute right-3.5 top-3.5 text-gray-500 text-sm cursor-pointer bg-white p-1 rounded-xl shadow-xs border border-gray-100">⚙️</span>
          </div>

          {/* HERO BANNER */}
          <div className="bg-gradient-to-r from-rose-50 via-purple-50 to-indigo-50 p-5 rounded-3xl border border-indigo-100 relative overflow-hidden flex items-center justify-between">
            <div className="absolute -right-4 -bottom-4 w-36 h-36 bg-purple-400/20 rounded-full blur-2xl pointer-events-none" />
            <div className="z-10 max-w-[60%]">
              <span className="inline-block bg-white/80 text-rose-600 font-bold text-[10px] px-2.5 py-1 rounded-full shadow-xs mb-2">
                ❤️ Good food, Great rewards
              </span>
              <h2 className="text-xl font-black text-gray-900 tracking-tight leading-snug">
                Eat. Earn. Enjoy.
              </h2>
              <p className="text-[11px] text-gray-500 mt-1 leading-relaxed font-medium">
                Discover the best restaurants, earn points and enjoy exclusive rewards.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <button className="bg-indigo-600 text-white font-bold text-[10px] px-3.5 py-2 rounded-xl shadow-md shadow-indigo-600/20">
                  Explore Restaurants
                </button>
                <button className="bg-white text-gray-700 font-bold text-[10px] px-3 py-2 rounded-xl border border-gray-200 shadow-xs">
                  How it works
                </button>
              </div>
            </div>
            <div className="z-10 w-32 h-32 rounded-2xl overflow-hidden shadow-md border-2 border-white">
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&auto=format&fit=crop&q=80" 
                alt="Delicious Salad" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* POINTS & REWARDS WIDGET */}
          <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl shadow-xs border border-indigo-100">
                🎁
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Your Points</p>
                <p className="text-xl font-black text-gray-900 mt-0.5">1,240</p>
                <p className="text-[10px] text-gray-500 font-medium">Available Points</p>
              </div>
            </div>
            <div className="border-l border-gray-100 pl-4 w-40">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-bold text-gray-400">Next Reward</span>
                <span className="text-[10px] font-black text-indigo-600">1,000 pts</span>
              </div>
              <p className="text-xs font-bold text-gray-900 truncate">Free Dessert</p>
              <div className="w-full bg-gray-100 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-indigo-600 h-full rounded-full w-3/4" />
              </div>
              <p className="text-[9px] text-gray-400 text-right mt-1 font-medium">240 pts to go</p>
            </div>
          </div>

          {/* QUICK CATEGORIES */}
          <div className="grid grid-cols-5 gap-2 text-center">
            <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg shadow-xs group-hover:bg-purple-100 transition-colors">
                📍
              </div>
              <span className="text-[11px] font-bold text-gray-700">Nearby</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-lg shadow-xs group-hover:bg-rose-100 transition-colors">
                🏷️
              </div>
              <span className="text-[11px] font-bold text-gray-700">Offers</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg shadow-xs group-hover:bg-amber-100 transition-colors">
                ⭐
              </div>
              <span className="text-[11px] font-bold text-gray-700">Favorites</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg shadow-xs group-hover:bg-emerald-100 transition-colors">
                📅
              </div>
              <span className="text-[11px] font-bold text-gray-700">Reservations</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg shadow-xs group-hover:bg-indigo-100 transition-colors">
                🎁
              </div>
              <span className="text-[11px] font-bold text-gray-700">Rewards</span>
            </div>
          </div>

          {/* EXCLUSIVE OFFERS SECTION */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider">Exclusive Offers</h3>
              <span className="text-xs text-indigo-600 font-bold cursor-pointer hover:underline">View All</span>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
              {/* Offer Card 1 */}
              <div className="min-w-[170px] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex-shrink-0 relative group">
                <div className="h-28 overflow-hidden relative">
                  <span className="absolute top-2 left-2 bg-emerald-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-md z-10 shadow-xs">20% OFF</span>
                  <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300&auto=format&fit=crop&q=80" alt="Offer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-xs text-gray-900 truncate">La Bella Italia</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">20% off on all orders</p>
                  <p className="text-[9px] text-gray-400 mt-2 font-medium">Valid until May 20, 2025</p>
                </div>
              </div>

              {/* Offer Card 2 */}
              <div className="min-w-[170px] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex-shrink-0 relative group">
                <div className="h-28 overflow-hidden relative">
                  <span className="absolute top-2 left-2 bg-indigo-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-md z-10 shadow-xs">2X POINTS</span>
                  <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=300&auto=format&fit=crop&q=80" alt="Offer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-xs text-gray-900 truncate">Sushi House</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">Double points on your next order</p>
                  <p className="text-[9px] text-gray-400 mt-2 font-medium">Valid until May 18, 2025</p>
                </div>
              </div>

              {/* Offer Card 3 */}
              <div className="min-w-[170px] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex-shrink-0 relative group">
                <div className="h-28 overflow-hidden relative">
                  <span className="absolute top-2 left-2 bg-amber-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-md z-10 shadow-xs">HAPPY HOUR</span>
                  <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=300&auto=format&fit=crop&q=80" alt="Offer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-xs text-gray-900 truncate">The Grill Spot</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">Happy Hour 5PM - 7PM</p>
                  <p className="text-[9px] text-gray-400 mt-2 font-medium">Valid every day</p>
                </div>
              </div>
            </div>
          </div>

          {/* POPULAR RESTAURANTS SECTION */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider">Popular Restaurants</h3>
              <span className="text-xs text-indigo-600 font-bold cursor-pointer hover:underline">View All</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              
              {/* Restaurant Card 1 */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group cursor-pointer">
                <div className="h-32 relative overflow-hidden">
                  <span className="absolute top-2 left-2 bg-emerald-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-md z-10">20% OFF</span>
                  <button className="absolute top-2 right-2 w-7 h-7 bg-white/80 rounded-full flex items-center justify-center text-xs shadow-xs text-rose-500 z-10">❤️</button>
                  <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&auto=format&fit=crop&q=80" alt="Restaurant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-xs text-gray-900 flex items-center gap-1 truncate">
                    La Bella Italia <span className="text-blue-500 text-[10px]">✔</span>
                  </h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">Italian • $$</p>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-50 text-[10px]">
                    <span className="font-bold text-gray-800">⭐ 4.6 <span className="text-gray-400 font-normal">(128)</span></span>
                    <span className="text-gray-400">📍 0.4 km</span>
                  </div>
                </div>
              </div>

              {/* Restaurant Card 2 */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group cursor-pointer">
                <div className="h-32 relative overflow-hidden">
                  <span className="absolute top-2 left-2 bg-indigo-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-md z-10">2X POINTS</span>
                  <button className="absolute top-2 right-2 w-7 h-7 bg-white/80 rounded-full flex items-center justify-center text-xs shadow-xs text-rose-500 z-10">❤️</button>
                  <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=300&auto=format&fit=crop&q=80" alt="Restaurant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-xs text-gray-900 flex items-center gap-1 truncate">
                    Sushi House <span className="text-blue-500 text-[10px]">✔</span>
                  </h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">Sushi • $$$</p>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-50 text-[10px]">
                    <span className="font-bold text-gray-800">⭐ 4.7 <span className="text-gray-400 font-normal">(96)</span></span>
                    <span className="text-gray-400">📍 0.6 km</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* TRIAL BANNER */}
          <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-white p-4 rounded-2xl border border-indigo-100 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-sm shadow-md">👑</div>
              <div>
                <h4 className="font-black text-gray-900 text-xs">You have 30 days left in your free trial!</h4>
                <p className="text-[10px] text-gray-500 mt-0.5">Enjoy all features and start earning rewards.</p>
              </div>
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 rounded-xl text-xs shadow-md shadow-indigo-600/20 transition-all">
              Upgrade Now
            </button>
          </div>

        </div>

        {/* BOTTOM APP NAVIGATION BAR */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-2.5 flex justify-between items-center z-20 shadow-lg">
          <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-indigo-600' : 'text-gray-400'}`}>
            <span className="text-lg">🏠</span>
            <span className="text-[10px] font-bold">Home</span>
          </button>
          <button onClick={() => setActiveTab('explore')} className={`flex flex-col items-center gap-1 ${activeTab === 'explore' ? 'text-indigo-600' : 'text-gray-400'}`}>
            <span className="text-lg">🧭</span>
            <span className="text-[10px] font-bold">Explore</span>
          </button>
          <button onClick={() => setActiveTab('scan')} className="relative -top-3 bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-indigo-600/30 text-lg">
            📷
          </button>
          <button onClick={() => setActiveTab('activity')} className={`flex flex-col items-center gap-1 ${activeTab === 'activity' ? 'text-indigo-600' : 'text-gray-400'}`}>
            <span className="text-lg">⏰</span>
            <span className="text-[10px] font-bold">Activity</span>
          </button>
          <button onClick={() => setActiveTab('profile')} className={`flex flex-col items-center gap-1 ${activeTab === 'profile' ? 'text-indigo-600' : 'text-gray-400'}`}>
            <span className="text-lg">👤</span>
            <span className="text-[10px] font-bold">Profile</span>
          </button>
        </div>

      </div>
    </div>
  );
}