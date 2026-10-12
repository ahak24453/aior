'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { Wrench, ArrowLeft, ShieldAlert, Sparkles, Globe, ChevronDown, Sun, Moon, Check } from 'lucide-react';

/* ============================================================
   TRANSLATIONS — 5 languages
   ============================================================ */
const en = {
  badge: "Under Maintenance",
  title: "The Menu Builder is under maintenance",
  desc: "We're applying scheduled improvements to this module. Please check back soon.",
  backBtn: "Back to Dashboard",
  support: "Need help? Contact our support team.",
  themeLabel: "Toggle theme",
  langLabel: "Change language",
  close: "Close",
} as const;

type Shape = Record<keyof typeof en, string>;

const fr: Shape = {
  badge: "En maintenance",
  title: "Le constructeur de menu est en maintenance",
  desc: "Nous appliquons des améliorations planifiées à ce module. Revenez bientôt.",
  backBtn: "Retour au tableau de bord",
  support: "Besoin d'aide ? Contactez notre support.",
  themeLabel: "Changer de thème",
  langLabel: "Changer de langue",
  close: "Fermer",
};

const ru: Shape = {
  badge: "На обслуживании",
  title: "Конструктор меню на обслуживании",
  desc: "Мы вносим плановые улучшения в этот модуль. Загляните позже.",
  backBtn: "Назад в панель",
  support: "Нужна помощь? Свяжитесь с поддержкой.",
  themeLabel: "Сменить тему",
  langLabel: "Сменить язык",
  close: "Закрыть",
};

const ar: Shape = {
  badge: "تحت الصيانة",
  title: "قسم بناء المنيو تحت الصيانة",
  desc: "نقوم بتحسينات مجدولة على هذه الوحدة. يرجى العودة قريباً.",
  backBtn: "العودة إلى لوحة التحكم",
  support: "تحتاج مساعدة؟ تواصل مع فريق الدعم.",
  themeLabel: "تبديل المظهر",
  langLabel: "تغيير اللغة",
  close: "إغلاق",
};

const es: Shape = {
  badge: "En mantenimiento",
  title: "El constructor de menú está en mantenimiento",
  desc: "Estamos aplicando mejoras programadas a este módulo. Vuelve pronto.",
  backBtn: "Volver al panel",
  support: "¿Necesitas ayuda? Contacta con soporte.",
  themeLabel: "Cambiar tema",
  langLabel: "Cambiar idioma",
  close: "Cerrar",
};

const translations = { en, fr, ru, ar, es };
type Language = keyof typeof translations;
type TranslationKey = keyof typeof en;

const LANGS: { code: Language; label: string; short: string; flag: string }[] = [
  { code: 'en', label: 'English', short: 'EN', flag: '🇺🇸' },
  { code: 'fr', label: 'Français', short: 'FR', flag: '🇫🇷' },
  { code: 'ru', label: 'Русский', short: 'RU', flag: '🇷🇺' },
  { code: 'ar', label: 'العربية', short: 'AR', flag: '🇸🇦' },
  { code: 'es', label: 'Español', short: 'ES', flag: '🇪🇸' },
];

/* ============================================================
   THEME
   ============================================================ */
function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  useEffect(() => {
    const saved = (localStorage.getItem('theme') as 'light' | 'dark' | null) ?? 'dark';
    setTheme(saved);
    document.documentElement.classList.toggle('dark', saved === 'dark');
  }, []);
  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      document.documentElement.classList.toggle('dark', next === 'dark');
      return next;
    });
  }, []);
  return { theme, toggle };
}

/* ============================================================
   LANGUAGE SWITCHER
   ============================================================ */
function LangSwitcher({ lang, setLang, t }: { lang: Language; setLang: (l: Language) => void; t: (k: TranslationKey) => string }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const selected = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); btnRef.current?.focus(); }
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={wrapRef}>
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={t('langLabel')}
        title={t('langLabel')}
        className="flex items-center gap-1.5 bg-[rgb(var(--panel-2))] border border-[rgb(var(--line)/0.12)] text-[rgb(var(--fg))] text-xs font-bold rounded-xl px-2.5 py-2.5 hover:border-[rgb(var(--line)/0.3)] transition cursor-pointer"
      >
        <Globe className="w-3.5 h-3.5 opacity-60" aria-hidden />
        <span aria-hidden>{selected.flag}</span>
        <span>{selected.short}</span>
        <ChevronDown className={`w-3 h-3 opacity-60 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden />
      </button>

      {open && (
        <div role="menu" className="absolute end-0 mt-2 w-44 bg-[rgb(var(--panel))] border border-[rgb(var(--line)/0.12)] rounded-2xl p-1.5 shadow-2xl z-30">
          {LANGS.map((l) => (
            <button
              key={l.code}
              role="menuitemradio"
              aria-checked={lang === l.code}
              onClick={() => { setLang(l.code); setOpen(false); btnRef.current?.focus(); }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                lang === l.code
                  ? 'bg-indigo-500/15 text-indigo-500'
                  : 'text-[rgb(var(--muted))] hover:bg-[rgb(var(--panel-2))] hover:text-[rgb(var(--fg))]'
              }`}
            >
              <span className="text-sm" aria-hidden>{l.flag}</span>
              <span>{l.label}</span>
              {lang === l.code && <Check className="w-3.5 h-3.5 ms-auto" aria-hidden />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function MenuBuilderMaintenance({ backHref = '/dashboard' }: { backHref?: string }) {
  const [lang, setLang] = useState<Language>('en');
  const { theme, toggle } = useTheme();
  const rtl = lang === 'ar';

  const t = useMemo<(k: TranslationKey) => string>(
    () => (k) => translations[lang][k] ?? translations.en[k],
    [lang]
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
  }, [lang, rtl]);

  return (
    <div
      dir={rtl ? 'rtl' : 'ltr'}
      className="min-h-screen flex items-center justify-center px-4 py-16 bg-[rgb(var(--bg))] text-[rgb(var(--fg))] overflow-x-clip"
    >
      <style>{`
        :root { --bg:247 248 250; --panel:255 255 255; --panel-2:244 245 248; --fg:10 12 20; --muted:92 100 112; --line:0 0 0; }
        .dark { --bg:5 6 10; --panel:11 13 20; --panel-2:15 17 25; --fg:243 244 246; --muted:156 163 175; --line:255 255 255; }
        @keyframes softBounce { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-6px) } }
        .soft-bounce { animation: softBounce 2.4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .soft-bounce { animation: none !important; } }
      `}</style>

      <div className="relative w-full max-w-2xl bg-[rgb(var(--panel))] border border-[rgb(var(--line)/0.1)] rounded-[2.5rem] px-6 sm:px-8 md:px-12 pt-20 pb-10 md:pb-12 shadow-2xl text-center overflow-hidden">

        {/* corner controls */}
        <div className="absolute top-5 sm:top-6 end-5 sm:end-6 z-20 flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={t('themeLabel')}
            title={t('themeLabel')}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-[rgb(var(--panel-2))] border border-[rgb(var(--line)/0.12)] text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] transition cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" aria-hidden /> : <Moon className="w-4 h-4" aria-hidden />}
          </button>
          <LangSwitcher lang={lang} setLang={setLang} t={t} />
        </div>

        {/* decorative blurs */}
        <div className="absolute -top-24 -end-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden />
        <div className="absolute -bottom-24 -start-24 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden />

        {/* icon */}
        <div className="relative mx-auto w-20 h-20 rounded-3xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30 mb-8">
          <Wrench className="w-9 h-9 soft-bounce" aria-hidden />
          <span className="absolute -bottom-1 -end-1 w-7 h-7 bg-amber-400 rounded-full border-2 border-[rgb(var(--panel))] flex items-center justify-center text-white shadow-sm">
            <Sparkles className="w-3.5 h-3.5" aria-hidden />
          </span>
        </div>

        {/* badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-500 text-[11px] font-black uppercase tracking-wider mb-4 border border-indigo-500/20">
          <ShieldAlert className="w-3.5 h-3.5" aria-hidden />
          <span>{t('badge')}</span>
        </div>

        {/* title */}
        <h1 className="text-2xl md:text-3xl font-black tracking-tight mb-4">
          {t('title')}
        </h1>

        {/* description */}
        <p className="text-[13px] md:text-sm text-[rgb(var(--muted))] font-medium leading-relaxed max-w-lg mx-auto mb-8">
          {t('desc')}
        </p>

        {/* action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={backHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 active:scale-95 text-white px-8 py-3.5 rounded-2xl text-sm font-black shadow-lg shadow-indigo-600/30 transition-all"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" aria-hidden />
            <span>{t('backBtn')}</span>
          </Link>
        </div>

        {/* footer */}
        <p className="text-[11px] text-[rgb(var(--muted))] font-semibold mt-10">
          {t('support')}
        </p>
      </div>
    </div>
  );
}
