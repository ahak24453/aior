'use client';

import { useState, useEffect, useRef, useMemo, useCallback, type FormEvent } from 'react';
import {
  UtensilsCrossed, Plus, Trash2, Edit3, Globe, Moon, Sun, ChevronDown,
  Check, X, Sparkles, DollarSign, Image as ImageIcon, Eye, ArrowLeft, Save, AlertCircle
} from 'lucide-react';

/* ============================================================
   TRANSLATIONS — 5 Languages
   ============================================================ */
const en = {
  badge: "Menu Management",
  title: "Menu Builder",
  subtitle: "Organize your categories, dishes, prices, and live availability in real time.",
  addCategory: "Add Category",
  addDish: "Add Dish",
  categoryName: "Category Name",
  dishName: "Dish Name",
  price: "Price",
  description: "Description",
  imageUrl: "Image URL",
  available: "Available",
  unavailable: "Sold Out",
  actions: "Actions",
  save: "Save Changes",
  cancel: "Cancel",
  edit: "Edit",
  delete: "Delete",
  backDashboard: "Back to Dashboard",
  langLabel: "Change language",
  themeLabel: "Toggle theme",
  noItems: "No dishes added yet in this category.",
  modalAddCategory: "Create New Category",
  modalAddDish: "Add New Dish",
  categoryPlaceholder: "e.g., Appetizers, Burgers, Drinks",
  dishPlaceholder: "e.g., Truffle Burger",
  descPlaceholder: "Brief description of ingredients...",
  successSaved: "Changes saved successfully!",
} as const;

type Shape = Record<keyof typeof en, string>;

const fr: Shape = {
  badge: "Gestion du menu",
  title: "Constructeur de menu",
  subtitle: "Organisez vos catégories, plats, prix et disponibilité en temps réel.",
  addCategory: "Ajouter une catégorie",
  addDish: "Ajouter un plat",
  categoryName: "Nom de la catégorie",
  dishName: "Nom du plat",
  price: "Prix",
  description: "Description",
  imageUrl: "URL de l'image",
  available: "Disponible",
  unavailable: "Épuisé",
  actions: "Actions",
  save: "Enregistrer",
  cancel: "Annuler",
  edit: "Modifier",
  delete: "Supprimer",
  backDashboard: "Retour au tableau de bord",
  langLabel: "Changer de langue",
  themeLabel: "Changer de thème",
  noItems: "Aucun plat ajouté dans cette catégorie.",
  modalAddCategory: "Créer une nouvelle catégorie",
  modalAddDish: "Ajouter un nouveau plat",
  categoryPlaceholder: "ex: Entrées, Burgers, Boissons",
  dishPlaceholder: "ex: Burger Truffe",
  descPlaceholder: "Brève description des ingrédients...",
  successSaved: "Modifications enregistrées avec succès !",
};

const ru: Shape = {
  badge: "Управление меню",
  title: "Конструктор меню",
  subtitle: "Организуйте категории, блюда, цены и доступность в реальном времени.",
  addCategory: "Добавить категорию",
  addDish: "Добавить блюдо",
  categoryName: "Название категории",
  dishName: "Название блюда",
  price: "Цена",
  description: "Описание",
  imageUrl: "URL изображения",
  available: "Доступно",
  unavailable: "Нет в наличии",
  actions: "Действия",
  save: "Сохранить",
  cancel: "Отмена",
  edit: "Изменить",
  delete: "Удалить",
  backDashboard: "Назад в панель",
  langLabel: "Сменить язык",
  themeLabel: "Сменить тему",
  noItems: "В этой категории пока нет блюд.",
  modalAddCategory: "Создать новую категорию",
  modalAddDish: "Добавить новое блюдо",
  categoryPlaceholder: "например, Закуски, Бургеры",
  dishPlaceholder: "например, Трюфельный бургер",
  descPlaceholder: "Краткое описание ингредиентов...",
  successSaved: "Изменения успешно сохранены!",
};

const ar: Shape = {
  badge: "إدارة المنيو",
  title: "بناء وتعديل القائمة",
  subtitle: "قم بتنظيم الأقسام، الأطباق، الأسعار وحالة التوفر لزبائنك لحظياً.",
  addCategory: "إضافة قسم جديد",
  addDish: "إضافة طبق",
  categoryName: "اسم القسم",
  dishName: "اسم الطبق",
  price: "السعر",
  description: "الوصف",
  imageUrl: "رابط الصورة",
  available: "متوفر",
  unavailable: "غير متوفر",
  actions: "الإجراءات",
  save: "حفظ التغييرات",
  cancel: "إلغاء",
  edit: "تعديل",
  delete: "حذف",
  backDashboard: "العودة إلى لوحة التحكم",
  langLabel: "تغيير اللغة",
  themeLabel: "تبديل المظهر",
  noItems: "لا توجد أطباق مضافة في هذا القسم بعد.",
  modalAddCategory: "إنشاء قسم جديد",
  modalAddDish: "إضافة طبق جديد",
  categoryPlaceholder: "مثال: مقبلات، برجر، مشروبات",
  dishPlaceholder: "مثال: برجر بالكمأة",
  descPlaceholder: "وصف مختصر للمكونات...",
  successSaved: "تم حفظ التغييرات بنجاح!",
};

const es: Shape = {
  badge: "Gestión de menú",
  title: "Constructor de menú",
  subtitle: "Organiza tus categorías, platos, precios y disponibilidad en tiempo real.",
  addCategory: "Añadir categoría",
  addDish: "Añadir plato",
  categoryName: "Nombre de categoría",
  dishName: "Nombre del plato",
  price: "Precio",
  description: "Descripción",
  imageUrl: "URL de imagen",
  available: "Disponible",
  unavailable: "Agotado",
  actions: "Acciones",
  save: "Guardar cambios",
  cancel: "Cancelar",
  edit: "Editar",
  delete: "Eliminar",
  backDashboard: "Volver al panel",
  langLabel: "Cambiar idioma",
  themeLabel: "Cambiar tema",
  noItems: "No hay platos añadidos en esta categoría.",
  modalAddCategory: "Crear nueva categoría",
  modalAddDish: "Añadir nuevo plato",
  categoryPlaceholder: "ej: Entrantes, Hamburguesas, Bebidas",
  dishPlaceholder: "ej: Hamburguesa Trufada",
  descPlaceholder: "Breve descripción de los ingredientes...",
  successSaved: "¡Cambios guardados con éxito!",
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

interface Dish {
  id: string;
  name: string;
  price: number;
  description: string;
  available: boolean;
  image: string;
}

interface Category {
  id: string;
  name: string;
  items: Dish[];
}

/* ============================================================
   THEME HOOK
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
   LANG SWITCHER COMPONENT
   ============================================================ */
function LangSwitcher({ lang, setLang, t }: { lang: Language; setLang: (l: Language) => void; t: (k: TranslationKey) => string }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const selected = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  return (
    <div className="relative" ref={wrapRef}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={t('langLabel')}
        className="flex items-center gap-1.5 bg-[rgb(var(--panel-2))] border border-[rgb(var(--line)/0.12)] text-[rgb(var(--fg))] text-xs font-bold rounded-xl px-3 py-2.5 hover:border-[rgb(var(--line)/0.3)] transition cursor-pointer"
      >
        <Globe className="w-3.5 h-3.5 opacity-60" aria-hidden />
        <span aria-hidden>{selected.flag}</span>
        <span>{selected.short}</span>
        <ChevronDown className={`w-3 h-3 opacity-60 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden />
      </button>

      {open && (
        <div className="absolute end-0 mt-2 w-44 bg-[rgb(var(--panel))] border border-[rgb(var(--line)/0.12)] rounded-2xl p-1.5 shadow-2xl z-30">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                lang === l.code ? 'bg-indigo-500/15 text-indigo-500' : 'text-[rgb(var(--muted))] hover:bg-[rgb(var(--panel-2))] hover:text-[rgb(var(--fg))]'
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
   MAIN MENU BUILDER PAGE
   ============================================================ */
export default function MenuBuilderPage({ backHref = '/dashboard' }: { backHref?: string }) {
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

  // Sample initial state for categories & dishes
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 'cat-1',
      name: 'Burgers & Grills',
      items: [
        { id: 'item-1', name: 'Truffle Angus Burger', price: 18.50, description: 'Double angus patty, truffle mayo, aged cheddar.', available: true, image: '' },
        { id: 'item-2', name: 'Crispy Chicken Burger', price: 15.00, description: 'Spicy crispy chicken breast, coleslaw, special sauce.', available: true, image: '' },
      ],
    },
    {
      id: 'cat-2',
      name: 'Beverages',
      items: [
        { id: 'item-3', name: 'Artisan Lemonade', price: 5.50, description: 'Fresh squeezed lemons, mint leaves, sparkling water.', available: false, image: '' },
      ],
    },
  ]);

  const [activeTab, setActiveTab] = useState<string>(categories[0]?.id ?? '');
  const [showCatModal, setShowCatModal] = useState(false);
  const [showDishModal, setShowDishModal] = useState(false);
  const [newCatName, setNewCatName] = useState('');
  
  // Dish form state
  const [dishName, setDishName] = useState('');
  const [dishPrice, setDishPrice] = useState('');
  const [dishDesc, setDishDesc] = useState('');
  const [dishImage, setDishImage] = useState('');
  const [toast, setToast] = useState(false);

  const triggerToast = () => {
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  const handleAddCategory = (e: FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim()) return;
    const newCat: Category = {
      id: 'cat-' + Date.now(),
      name: newCatName.trim(),
      items: [],
    };
    setCategories([...categories, newCat]);
    setActiveTab(newCat.id);
    setNewCatName('');
    setShowCatModal(false);
    triggerToast();
  };

  const handleAddDish = (e: FormEvent) => {
    e.preventDefault();
    if (!dishName.trim() || !dishPrice) return;
    const newDish: Dish = {
      id: 'item-' + Date.now(),
      name: dishName.trim(),
      price: parseFloat(dishPrice) || 0,
      description: dishDesc.trim(),
      available: true,
      image: dishImage.trim(),
    };
    setCategories(categories.map(c => c.id === activeTab ? { ...c, items: [...c.items, newDish] } : c));
    setDishName(''); setDishPrice(''); setDishDesc(''); setDishImage('');
    setShowDishModal(false);
    triggerToast();
  };

  const toggleAvailability = (catId: string, itemId: string) => {
    setCategories(categories.map(c => {
      if (c.id !== catId) return c;
      return {
        ...c,
        items: c.items.map(i => i.id === itemId ? { ...i, available: !i.available } : i)
      };
    }));
  };

  const deleteDish = (catId: string, itemId: string) => {
    setCategories(categories.map(c => {
      if (c.id !== catId) return c;
      return { ...c, items: c.items.filter(i => i.id !== itemId) };
    }));
  };

  const currentCategory = categories.find(c => c.id === activeTab) ?? categories[0];

  return (
    <div dir={rtl ? 'rtl' : 'ltr'} className="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--fg))] font-sans antialiased pb-20">
      <style>{`
        :root { --bg:247 248 250; --panel:255 255 255; --panel-2:244 245 248; --fg:10 12 20; --muted:92 100 112; --line:0 0 0; }
        .dark { --bg:5 6 10; --panel:11 13 20; --panel-2:15 17 25; --fg:243 244 246; --muted:156 163 175; --line:255 255 255; }
      `}</style>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-6 start-1/2 -translate-x-1/2 z-50 bg-emerald-500 text-white px-5 py-3 rounded-2xl text-xs font-black shadow-xl flex items-center gap-2 animate-bounce">
          <Sparkles className="w-4 h-4" aria-hidden />
          <span>{t('successSaved')}</span>
        </div>
      )}

      {/* HEADER */}
      <header className="border-b border-[rgb(var(--line)/0.08)] bg-[rgb(var(--panel)/0.8)] backdrop-blur-xl sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a href={backHref} className="w-10 h-10 rounded-xl bg-[rgb(var(--panel-2))] border border-[rgb(var(--line)/0.12)] flex items-center justify-center text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] transition">
              <ArrowLeft className="w-4 h-4 rtl:rotate-180" aria-hidden />
            </a>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase text-indigo-500 tracking-wider bg-indigo-500/10 px-2.5 py-0.5 rounded-full">{t('badge')}</span>
              </div>
              <h1 className="text-lg sm:text-xl font-black tracking-tight">{t('title')}</h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label={t('themeLabel')}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-[rgb(var(--panel-2))] border border-[rgb(var(--line)/0.12)] text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] transition cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" aria-hidden /> : <Moon className="w-4 h-4" aria-hidden />}
            </button>
            <LangSwitcher lang={lang} setLang={setLang} t={t} />
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
        {/* Subtitle & Actions Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <p className="text-sm text-[rgb(var(--muted))] font-medium max-w-xl">{t('subtitle')}</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowCatModal(true)}
              className="bg-[rgb(var(--panel-2))] border border-[rgb(var(--line)/0.12)] hover:border-indigo-500/40 text-[rgb(var(--fg))] px-4 py-3 rounded-2xl text-xs font-black transition flex items-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4 text-indigo-500" aria-hidden />
              <span>{t('addCategory')}</span>
            </button>
            <button
              onClick={() => setShowDishModal(true)}
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 active:scale-95 text-white px-5 py-3 rounded-2xl text-xs font-black shadow-lg shadow-indigo-600/25 transition flex items-center gap-2 cursor-pointer"
            >
              <UtensilsCrossed className="w-4 h-4" aria-hidden />
              <span>{t('addDish')}</span>
            </button>
          </div>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 border-b border-[rgb(var(--line)/0.08)]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-3 rounded-2xl text-xs font-black whitespace-nowrap transition cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-[rgb(var(--panel))] border border-[rgb(var(--line)/0.12)] text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]'
              }`}
            >
              {cat.name} <span className="opacity-75 ms-1.5">({cat.items.length})</span>
            </button>
          ))}
        </div>

        {/* DISHES LIST */}
        <div className="bg-[rgb(var(--panel))] border border-[rgb(var(--line)/0.1)] rounded-[2.5rem] p-6 sm:p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[rgb(var(--line)/0.08)]">
            <h2 className="text-xl font-black">{currentCategory?.name}</h2>
            <span className="text-xs text-[rgb(var(--muted))] font-bold">{currentCategory?.items.length} items</span>
          </div>

          {currentCategory?.items.length === 0 ? (
            <div className="py-16 text-center">
              <UtensilsCrossed className="w-12 h-12 text-[rgb(var(--muted))] mx-auto opacity-40 mb-3" aria-hidden />
              <p className="text-sm text-[rgb(var(--muted))] font-medium">{t('noItems')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentCategory?.items.map((dish) => (
                <div
                  key={dish.id}
                  className="bg-[rgb(var(--panel-2))] border border-[rgb(var(--line)/0.08)] rounded-2xl p-5 flex items-start gap-4 transition hover:border-indigo-500/30"
                >
                  <div className="w-16 h-16 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 overflow-hidden border border-indigo-500/20">
                    {dish.image ? (
                      <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
                    ) : (
                      <UtensilsCrossed className="w-6 h-6 text-indigo-500" aria-hidden />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-black truncate">{dish.name}</h3>
                      <span className="text-sm font-black text-indigo-500">${dish.price.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-[rgb(var(--muted))] font-medium mt-1 line-clamp-2">{dish.description}</p>
                    
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-[rgb(var(--line)/0.06)]">
                      <button
                        onClick={() => toggleAvailability(currentCategory.id, dish.id)}
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full cursor-pointer transition ${
                          dish.available
                            ? 'bg-emerald-500/15 text-emerald-500 border border-emerald-500/30'
                            : 'bg-rose-500/15 text-rose-500 border border-rose-500/30'
                        }`}
                      >
                        {dish.available ? t('available') : t('unavailable')}
                      </button>
                      
                      <button
                        onClick={() => deleteDish(currentCategory.id, dish.id)}
                        aria-label={t('delete')}
                        className="text-[rgb(var(--muted))] hover:text-rose-500 transition cursor-pointer p-1"
                      >
                        <Trash2 className="w-4 h-4" aria-hidden />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* MODAL: ADD CATEGORY */}
      {showCatModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[rgb(var(--panel))] border border-[rgb(var(--line)/0.12)] rounded-3xl max-w-sm w-full p-6 shadow-2xl relative">
            <button onClick={() => setShowCatModal(false)} aria-label={t('cancel')} className="absolute top-4 end-4 text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]">
              <X className="w-4 h-4" aria-hidden />
            </button>
            <h3 className="text-lg font-black mb-4">{t('modalAddCategory')}</h3>
            <form onSubmit={handleAddCategory} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[rgb(var(--muted))] mb-1.5">{t('categoryName')}</label>
                <input
                  required
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                  placeholder={t('categoryPlaceholder')}
                  className="w-full bg-[rgb(var(--panel-2))] border border-[rgb(var(--line)/0.12)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="flex gap-2 pt-2">
                <button type="button" onClick={() => setShowCatModal(false)} className="flex-1 bg-[rgb(var(--panel-2))] text-xs font-bold py-3 rounded-xl cursor-pointer">{t('cancel')}</button>
                <button type="submit" className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black py-3 rounded-xl cursor-pointer">{t('save')}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD DISH */}
      {showDishModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[rgb(var(--panel))] border border-[rgb(var(--line)/0.12)] rounded-3xl max-w-md w-full p-6 shadow-2xl relative">
            <button onClick={() => setShowDishModal(false)} aria-label={t('cancel')} className="absolute top-4 end-4 text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]">
              <X className="w-4 h-4" aria-hidden />
            </button>
            <h3 className="text-lg font-black mb-4">{t('modalAddDish')}</h3>
            <form onSubmit={handleAddDish} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[rgb(var(--muted))] mb-1.5">{t('dishName')}</label>
                <input
                  required
                  value={dishName}
                  onChange={(e) => setDishName(e.target.value)}
                  placeholder={t('dishPlaceholder')}
                  className="w-full bg-[rgb(var(--panel-2))] border border-[rgb(var(--line)/0.12)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[rgb(var(--muted))] mb-1.5">{t('price')} ($)</label>
                <input
                  required
                  type="number"
                  step="0.01"
                  value={dishPrice}
                  onChange={(e) => setDishPrice(e.target.value)}
                  placeholder="14.99"
                  className="w-full bg-[rgb(var(--panel-2))] border border-[rgb(var(--line)/0.12)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[rgb(var(--muted))] mb-1.5">{t('description')}</label>
                <textarea
                  value={dishDesc}
                  onChange={(e) => setDishDesc(e.target.value)}
                  placeholder={t('descPlaceholder')}
                  rows={2}
                  className="w-full bg-[rgb(var(--panel-2))] border border-[rgb(var(--line)/0.12)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[rgb(var(--muted))] mb-1.5">{t('imageUrl')} (Optional)</label>
                <input
                  value={dishImage}
                  onChange={(e) => setDishImage(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full bg-[rgb(var(--panel-2))] border border-[rgb(var(--line)/0.12)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="flex gap-2 pt-2">
                <button type="button" onClick={() => setShowDishModal(false)} className="flex-1 bg-[rgb(var(--panel-2))] text-xs font-bold py-3 rounded-xl cursor-pointer">{t('cancel')}</button>
                <button type="submit" className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black py-3 rounded-xl cursor-pointer">{t('save')}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
