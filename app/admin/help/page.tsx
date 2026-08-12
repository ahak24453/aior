'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Wrench, ArrowLeft, ArrowRight, ShieldAlert, Sparkles, Globe, ChevronDown } from 'lucide-react';

export default function MaintenancePage() {
  const [lang, setLang] = useState('en');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  const selectedLanguage = languages.find(l => l.code === lang) || languages[0];

  // نصوص الترجمة للغات الأربع
  const translations = {
    en: {
      badge: "Under Maintenance",
      title: "We are building something amazing for you!",
      description: "This section of your restaurant management suite is currently undergoing scheduled enhancements and updates. We're working around the clock to bring you an extraordinary experience.",
      backBtn: "Back to Dashboard",
      support: "Need urgent assistance? Check our help center."
    },
    ar: {
      badge: "تحت الصيانة",
      title: "نحن نبني شيئاً مذهلاً لأجلك!",
      description: "هذا القسم من نظام إدارة المطعم يخضع حالياً لتحسينات وتحديثات جدولية. نعمل بكل جهد لتقديم تجربة استثنائية قريباً.",
      backBtn: "العودة إلى لوحة التحكم",
      support: "تحتاج مساعدة عاجلة؟ تواصل مع مركز الدعم."
    },
    fr: {
      badge: "En maintenance",
      title: "Nous construisons quelque chose d'incroyable pour vous !",
      description: "Cette section de votre suite de gestion de restaurant fait actuellement l'objet d'améliorations et de mises à jour planifiées. Nous travaillons sans relâche.",
      backBtn: "Retour au tableau de bord",
      support: "Besoin d'aide urgente ? Consultez notre centre d'aide."
    },
    es: {
      badge: "En mantenimiento",
      title: "¡Estamos construyendo algo increíble para ti!",
      description: "Esta sección de su sistema de gestión de restaurantes está actualmente bajo mejoras y actualizaciones programadas. Trabajamos duro para ofrecerle lo mejor.",
      backBtn: "Volver al tablero",
      support: "¿Necesitas ayuda urgente? Visita nuestro centro de ayuda."
    }
  };

  const t = translations[lang as keyof typeof translations] || translations.en;
  const isRtl = lang === 'ar';

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-2xl w-full bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-indigo-50/50 text-center relative overflow-hidden">
        
        {/* Language Switcher at Top Corner */}
        <div className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} z-20`}>
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-gray-50 border border-gray-200/60 text-xs font-bold text-gray-700 hover:bg-gray-100 transition-all cursor-pointer shadow-xs"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-600" />
              <span>{selectedLanguage.flag}</span>
              <span className="hidden sm:inline">{selectedLanguage.label}</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>

            {isLangOpen && (
              <div className={`absolute ${isRtl ? 'left-0' : 'right-0'} mt-2 w-40 bg-white rounded-2xl border border-gray-100 shadow-xl py-2 z-30`}>
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setIsLangOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-xs font-bold transition-all hover:bg-gray-50 ${lang === l.code ? 'text-indigo-600 bg-indigo-50/50' : 'text-gray-700'}`}
                  >
                    <span className="text-base">{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Decorative background blur shapes */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

        {/* Icon Header */}
        <div className="relative mx-auto w-20 h-20 rounded-3xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-8 transform hover:scale-105 transition-transform duration-300">
          <Wrench className="w-9 h-9 animate-bounce" />
          <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-amber-400 rounded-full border-2 border-white flex items-center justify-center text-white shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-black uppercase tracking-wider mb-4 border border-indigo-100/60">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>{t.badge}</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight mb-4">
          {t.title}
        </h1>

        {/* Description */}
        <p className="text-xs md:text-sm text-gray-500 font-bold leading-relaxed max-w-lg mx-auto mb-8">
          {t.description}
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/admin"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-2xl text-xs font-black shadow-lg shadow-indigo-600/25 transition-all cursor-pointer hover:-translate-y-0.5"
          >
            {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            <span>{t.backBtn}</span>
          </Link>
        </div>

        {/* Footer info */}
        <p className="text-[10px] text-gray-400 font-bold mt-10">
          {t.support}
        </p>

      </div>
    </div>
  );
}