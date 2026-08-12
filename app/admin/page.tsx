'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  CalendarDays, 
  UtensilsCrossed, 
  Store, 
  Users, 
  Gift, 
  Megaphone, 
  Percent, 
  Star, 
  Package, 
  ShoppingCart, 
  Truck, 
  BookOpen, 
  Trash2, 
  UserCheck, 
  BarChart3, 
  Wallet, 
  Settings, 
  Puzzle, 
  HelpCircle, 
  LogOut,
  ChevronDown, 
  Search, 
  Bell, 
  MessageSquare,
  Crown,
  Globe
} from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // حالات التحكم في اللغة والقائمة المنسدلة للغات
  const [currentLang, setCurrentLang] = useState('en');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  const selectedLanguage = languages.find(l => l.code === currentLang) || languages[0];

  return (
    <div 
      className="min-h-screen bg-gray-50/60 flex font-sans antialiased text-gray-900" 
      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
    >
      
      {/* SIDEBAR */}
      <aside className={`w-72 bg-white border-${currentLang === 'ar' ? 'l' : 'r'} border-gray-100 flex flex-col justify-between hidden lg:flex sticky top-0 h-screen z-30 overflow-y-auto`}>
        <div>
          {/* Brand Logo */}
          <div className="p-6 pb-4 border-b border-gray-50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-xl font-black tracking-tighter text-gray-900 flex items-center gap-1">
                AI<span className="text-indigo-600">OR</span>
              </div>
            </div>
          </div>

          {/* Restaurant Selector Card */}
          <div className="mx-4 mt-4 p-3 bg-gray-50/80 border border-gray-100 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-gray-100/80 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                BV
              </div>
              <div>
                <h2 className="text-xs font-black text-gray-900">Bella Vista Restaurant</h2>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Owner</p>
              </div>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </div>

          {/* Navigation Menu */}
          <nav className="p-4 space-y-1 text-xs">
            <Link href="/admin" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-indigo-50/80 text-indigo-600 font-bold transition-all">
              <LayoutDashboard className="w-4 h-4" /> {currentLang === 'ar' ? 'لوحة التحكم' : currentLang === 'fr' ? 'Tableau de bord' : currentLang === 'es' ? 'Tablero' : 'Dashboard'}
            </Link>
            <Link href="/admin/orders" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-gray-600 hover:bg-gray-50 font-bold transition-all">
              <ShoppingBag className="w-4 h-4" /> {currentLang === 'ar' ? 'الطلبات' : currentLang === 'fr' ? 'Commandes' : currentLang === 'es' ? 'Pedidos' : 'Orders'}
            </Link>
            <Link href="/admin/reservations" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-gray-600 hover:bg-gray-50 font-bold transition-all">
              <CalendarDays className="w-4 h-4" /> {currentLang === 'ar' ? 'الحجوزات' : currentLang === 'fr' ? 'Réservations' : currentLang === 'es' ? 'Reservas' : 'Reservations'}
            </Link>
            <Link href="/admin/menu" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-gray-600 hover:bg-gray-50 font-bold transition-all">
              <UtensilsCrossed className="w-4 h-4" /> {currentLang === 'ar' ? 'قائمة الطعام' : currentLang === 'fr' ? 'Menu' : currentLang === 'es' ? 'Menú' : 'Menu'}
            </Link>
            <Link href="/admin/pos" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-gray-600 hover:bg-gray-50 font-bold transition-all">
              <Store className="w-4 h-4" /> POS
            </Link>
            <Link href="/admin/customers" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-gray-600 hover:bg-gray-50 font-bold transition-all">
              <Users className="w-4 h-4" /> {currentLang === 'ar' ? 'العملاء' : currentLang === 'fr' ? 'Clients' : currentLang === 'es' ? 'Clientes' : 'Customers'}
            </Link>
            <Link href="/admin/loyalty" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-gray-600 hover:bg-gray-50 font-bold transition-all">
              <Gift className="w-4 h-4" /> {currentLang === 'ar' ? 'الولاء والمكافآت' : currentLang === 'fr' ? 'Fidélité' : currentLang === 'es' ? 'Fidelidad' : 'Loyalty & Rewards'}
            </Link>
            <Link href="/admin/marketing" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-gray-600 hover:bg-gray-50 font-bold transition-all">
              <Megaphone className="w-4 h-4" /> {currentLang === 'ar' ? 'التسويق' : currentLang === 'fr' ? 'Marketing' : currentLang === 'es' ? 'Marketing' : 'Marketing'}
            </Link>
            <Link href="/admin/offers" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-gray-600 hover:bg-gray-50 font-bold transition-all">
              <Percent className="w-4 h-4" /> {currentLang === 'ar' ? 'العروض والحملات' : currentLang === 'fr' ? 'Offres' : currentLang === 'es' ? 'Ofertas' : 'Offers & Campaigns'}
            </Link>
            <Link href="/admin/reviews" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-gray-600 hover:bg-gray-50 font-bold transition-all">
              <Star className="w-4 h-4" /> {currentLang === 'ar' ? 'التقييمات' : currentLang === 'fr' ? 'Avis' : currentLang === 'es' ? 'Reseñas' : 'Reviews'}
            </Link>

            <div className="pt-3 pb-1 border-t border-gray-100 my-2"></div>

            <Link href="/admin/inventory" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-gray-600 hover:bg-gray-50 font-bold transition-all">
              <Package className="w-4 h-4" /> {currentLang === 'ar' ? 'المخزون' : currentLang === 'fr' ? 'Inventaire' : currentLang === 'es' ? 'Inventario' : 'Inventory'}
            </Link>
            <Link href="/admin/purchases" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-gray-600 hover:bg-gray-50 font-bold transition-all">
              <ShoppingCart className="w-4 h-4" /> {currentLang === 'ar' ? 'المشتريات' : currentLang === 'fr' ? 'Achats' : currentLang === 'es' ? 'Compras' : 'Purchases'}
            </Link>
            <Link href="/admin/suppliers" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-gray-600 hover:bg-gray-50 font-bold transition-all">
              <Truck className="w-4 h-4" /> {currentLang === 'ar' ? 'الموردون' : currentLang === 'fr' ? 'Fournisseurs' : currentLang === 'es' ? 'Proveedores' : 'Suppliers'}
            </Link>
            <Link href="/admin/recipes" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-gray-600 hover:bg-gray-50 font-bold transition-all">
              <BookOpen className="w-4 h-4" /> {currentLang === 'ar' ? 'الوصفات والتكاليف' : currentLang === 'fr' ? 'Recettes' : currentLang === 'es' ? 'Recetas' : 'Recipes & Costing'}
            </Link>
            <Link href="/admin/waste" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-gray-600 hover:bg-gray-50 font-bold transition-all">
              <Trash2 className="w-4 h-4" /> {currentLang === 'ar' ? 'إدارة الهدر' : currentLang === 'fr' ? 'Gaspillage' : currentLang === 'es' ? 'Desperdicios' : 'Waste Management'}
            </Link>

            <div className="pt-3 pb-1 border-t border-gray-100 my-2"></div>

            <Link href="/admin/staff" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-gray-600 hover:bg-gray-50 font-bold transition-all">
              <UserCheck className="w-4 h-4" /> {currentLang === 'ar' ? 'الموظفون والموارد البشرية' : currentLang === 'fr' ? 'Personnel' : currentLang === 'es' ? 'Personal' : 'Staff & HR'}
            </Link>
            <Link href="/admin/reports" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-gray-600 hover:bg-gray-50 font-bold transition-all">
              <BarChart3 className="w-4 h-4" /> {currentLang === 'ar' ? 'التقارير والتحليلات' : currentLang === 'fr' ? 'Rapports' : currentLang === 'es' ? 'Informes' : 'Reports & Analytics'}
            </Link>
            <Link href="/admin/finances" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-gray-600 hover:bg-gray-50 font-bold transition-all">
              <Wallet className="w-4 h-4" /> {currentLang === 'ar' ? 'المالية' : currentLang === 'fr' ? 'Finances' : currentLang === 'es' ? 'Finanzas' : 'Finances'}
            </Link>
            <Link href="/admin/settings" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-gray-600 hover:bg-gray-50 font-bold transition-all">
              <Settings className="w-4 h-4" /> {currentLang === 'ar' ? 'الإعدادات' : currentLang === 'fr' ? 'Paramètres' : currentLang === 'es' ? 'Configuración' : 'Settings'}
            </Link>
            <Link href="/admin/integrations" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-gray-600 hover:bg-gray-50 font-bold transition-all">
              <Puzzle className="w-4 h-4" /> {currentLang === 'ar' ? 'التكاملات' : currentLang === 'fr' ? 'Intégrations' : currentLang === 'es' ? 'Integraciones' : 'Integrations'}
            </Link>
            <Link href="/admin/help" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-gray-600 hover:bg-gray-50 font-bold transition-all">
              <HelpCircle className="w-4 h-4" /> {currentLang === 'ar' ? 'المساعدة والدعم' : currentLang === 'fr' ? 'Aide' : currentLang === 'es' ? 'Ayuda' : 'Help & Support'}
            </Link>
            <Link href="/logout" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-rose-600 hover:bg-rose-50 font-bold transition-all mt-1">
              <LogOut className="w-4 h-4" /> {currentLang === 'ar' ? 'تسجيل الخروج' : currentLang === 'fr' ? 'Déconnexion' : currentLang === 'es' ? 'Cerrar sesión' : 'Logout'}
            </Link>
          </nav>
        </div>

        {/* Free Trial Box */}
        <div className="p-4 m-4 bg-gradient-to-b from-purple-50/50 to-indigo-50/50 rounded-3xl border border-indigo-100/60 shadow-2xs space-y-3">
          <div className="flex items-center gap-2">
            <Crown className="w-4 h-4 text-indigo-600" />
            <div>
              <p className="text-xs font-black text-gray-900">Your Free Trial</p>
              <p className="text-[10px] text-indigo-600 font-bold">30 days remaining</p>
            </div>
          </div>
          <div className="w-full bg-gray-200/80 h-1.5 rounded-full overflow-hidden">
            <div className="bg-indigo-600 h-full w-[70%] rounded-full"></div>
          </div>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-xl text-xs shadow-md shadow-indigo-600/20 transition-all cursor-pointer">
            Upgrade Plan
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* TOP NAVBAR */}
        <header className="h-20 bg-white border-b border-gray-100 px-8 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-4 w-96">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder={currentLang === 'ar' ? 'ابحث عن أي شيء...' : currentLang === 'fr' ? 'Rechercher...' : currentLang === 'es' ? 'Buscar...' : 'Search anything...'} 
                className="w-full bg-gray-50 border border-gray-200/80 rounded-2xl pl-10 pr-12 py-2.5 text-xs focus:outline-none focus:border-indigo-600 transition-colors"
              />
              <Search className={`absolute ${currentLang === 'ar' ? 'right-3.5' : 'left-3.5'} top-3 w-4 h-4 text-gray-400`} />
              <span className={`absolute ${currentLang === 'ar' ? 'left-3.5' : 'right-3.5'} top-2 bg-gray-200/60 text-gray-500 font-bold text-[10px] px-1.5 py-0.5 rounded-md`}>K</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Notifications Button */}
            <button className="w-10 h-10 rounded-2xl bg-gray-50 border border-gray-200/60 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-all relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full"></span>
            </button>

            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 h-10 px-3 rounded-2xl bg-gray-50 border border-gray-200/60 text-xs font-bold text-gray-700 hover:bg-gray-100 transition-all cursor-pointer"
              >
                <span>{selectedLanguage.flag}</span>
                <span className="hidden sm:inline">{selectedLanguage.label}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </button>

              {isLangOpen && (
                <div className={`absolute ${currentLang === 'ar' ? 'left-0' : 'right-0'} mt-2 w-40 bg-white rounded-2xl border border-gray-100 shadow-xl py-2 z-50`}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-xs font-bold transition-all hover:bg-gray-50 ${currentLang === lang.code ? 'text-indigo-600 bg-indigo-50/50' : 'text-gray-700'}`}
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="w-10 h-10 rounded-2xl bg-gray-50 border border-gray-200/60 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-all">
              <MessageSquare className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200/60 p-1.5 pl-3 rounded-2xl">
              <div className="text-right">
                <p className="text-xs font-black text-gray-900">Alex Johnson</p>
              </div>
              <div className="w-9 h-9 rounded-xl overflow-hidden bg-indigo-600 text-white font-bold flex items-center justify-center text-xs shadow-xs">
                AJ
              </div>
            </div>
          </div>
        </header>

        {/* DYNAMIC PAGE CONTENT */}
        <main className="p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>

    </div>
  );
}