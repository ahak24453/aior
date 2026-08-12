'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { 
  User, 
  Store, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Lock, 
  Upload, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  FileText,
  Clock,
  AlertCircle
} from 'lucide-react';

// تهيئة عميل Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// قاموس الترجمات للغات الأربع بشكل دقيق
const translations = {
  en: {
    tag: "Unified Restaurant & Customer Ecosystem",
    title: "Create Your AIOR Account",
    subtitle: "Select your account type below to get started instantly.",
    loginPrompt: "Already have an account?",
    loginLink: "Login here",
    ownerTab: "Restaurant Owner",
    customerTab: "Customer & Loyalty",
    fullName: "Full Name",
    ownerName: "Owner Full Name",
    restaurantName: "Restaurant Commercial Name",
    email: "Business / Personal Email",
    phone: "Phone Number",
    country: "Country",
    city: "City",
    timezone: "Timezone & Live Clock",
    language: "Platform Language",
    birthDate: "Birthdate",
    referralCode: "Referral Code (Optional)",
    contractUpload: "Commercial Contract / License (PDF/Image)",
    dragDrop: "Drag and drop your contract here, or",
    browse: "browse files",
    supports: "Supports PDF, PNG, JPG (Max 15MB)",
    password: "Password",
    confirmPassword: "Confirm Password",
    terms: "I agree to AIOR's",
    termsLink: "Terms of Service",
    privacyLink: "Privacy Policy",
    submitOwner: "Initialize Restaurant Enterprise OS",
    submitCustomer: "Create Customer Account",
    loading: "Configuring Global Ecosystem...",
    successTitle: "Welcome to AIOR!",
    successOwnerMsg: "Your account has been successfully created. Our verification team is reviewing your commercial contract and will activate your full suite within 15 minutes.",
    successCustomerMsg: "You can now explore local restaurants, book tables, and earn loyalty points.",
    dashboardBtn: "Go to Dashboard →",
    passwordMismatch: "Passwords do not match!"
  },
  fr: {
    tag: "Écosystème Unifié Restaurant & Client",
    title: "Créez votre compte AIOR",
    subtitle: "Sélectionnez votre type de compte pour commencer.",
    loginPrompt: "Vous avez déjà un compte ?",
    loginLink: "Connectez-vous",
    ownerTab: "Propriétaire de Restaurant",
    customerTab: "Client & Fidélité",
    fullName: "Nom complet",
    ownerName: "Nom du Propriétaire",
    restaurantName: "Nom Commercial du Restaurant",
    email: "E-mail Professionnel / Personnel",
    phone: "Numéro de téléphone",
    country: "Pays",
    city: "Ville",
    timezone: "Fuseau horaire & Heure",
    language: "Langue de la plateforme",
    birthDate: "Date de naissance",
    referralCode: "Code de parrainage (Optionnel)",
    contractUpload: "Contrat Commercial / Licence (PDF/Image)",
    dragDrop: "Glissez-déposez votre contrat ici, ou",
    browse: "parcourir",
    supports: "Supporte PDF, PNG, JPG (Max 15Mo)",
    password: "Mot de passe",
    confirmPassword: "Confirmer le mot de passe",
    terms: "J'accepte les",
    termsLink: "Conditions d'utilisation",
    privacyLink: "Politique de confidentialité",
    submitOwner: "Initialiser l'OS Restaurant",
    submitCustomer: "Créer un compte client",
    loading: "Configuration de l'écosystème...",
    successTitle: "Bienvenue sur AIOR !",
    successOwnerMsg: "Votre compte a été créé. Notre équipe vérifie votre contrat commercial (activation sous 15 min).",
    successCustomerMsg: "Vous pouvez désormais explorer les restaurants et cumuler des points.",
    dashboardBtn: "Aller au Tableau de bord →",
    passwordMismatch: "Les mots de passe ne correspondent pas !"
  },
  es: {
    tag: "Ecosistema Unificado de Restaurantes",
    title: "Crea tu cuenta de AIOR",
    subtitle: "Selecciona tu tipo de cuenta para comenzar al instante.",
    loginPrompt: "¿Ya tienes una cuenta?",
    loginLink: "Inicia sesión",
    ownerTab: "Dueño de Restaurante",
    customerTab: "Cliente y Lealtad",
    fullName: "Nombre Completo",
    ownerName: "Nombre del Propietario",
    restaurantName: "Nombre Comercial del Restaurante",
    email: "Correo Electrónico",
    phone: "Número de Teléfono",
    country: "País",
    city: "Ciudad",
    timezone: "Zona Horaria y Hora",
    language: "Idioma de la Plataforma",
    birthDate: "Fecha de Nacimiento",
    referralCode: "Código de Referido (Opcional)",
    contractUpload: "Contrato Comercial / Licencia (PDF/Imagen)",
    dragDrop: "Arrastra y suelta tu contrato aquí, o",
    browse: "examinar archivos",
    supports: "Soporta PDF, PNG, JPG (Máx 15MB)",
    password: "Contraseña",
    confirmPassword: "Confirmar Contraseña",
    terms: "Acepto los",
    termsLink: "Términos de Servicio",
    privacyLink: "Política de Privacidad",
    submitOwner: "Inicializar Sistema de Restaurante",
    submitCustomer: "Crear Cuenta de Cliente",
    loading: "Configurando Ecosistema...",
    successTitle: "¡Bienvenido a AIOR!",
    successOwnerMsg: "Tu cuenta ha sido creada. Verificaremos tu contrato y activaremos tu suite en 15 minutos.",
    successCustomerMsg: "Ya puedes explorar restaurantes locales y ganar puntos de lealtad.",
    dashboardBtn: "Ir al Panel →",
    passwordMismatch: "¡Las contraseñas no coinciden!"
  },
  ar: {
    tag: "النظام البيئي المتكامل للمطاعم والعملاء",
    title: "أنشئ حسابك على منصة AIOR",
    subtitle: "اختر نوع الحساب أدناه للبدء الفوري بكل احترافية.",
    loginPrompt: "لديك حساب بالفعل؟",
    loginLink: "تسجيل الدخول",
    ownerTab: "صاحب مطعم",
    customerTab: "زبون وولاء",
    fullName: "الاسم الكامل",
    ownerName: "اسم صاحب المطعم",
    restaurantName: "اسم المطعم حسب السجل التجاري",
    email: "البريد الإلكتروني للعمل / الشخصي",
    phone: "رقم الهاتف",
    country: "البلد",
    city: "المدينة",
    timezone: "المنطقة الزمنية والتوقيت الحي",
    language: "لغة عرض المنصة",
    birthDate: "تاريخ الميلاد",
    referralCode: "كود الإحالة (اختياري)",
    contractUpload: "صورة العقد التجاري أو الترخيص (PDF أو صور)",
    dragDrop: "اسحب وأفلت عقد المطعم هنا، أو",
    browse: "تصفح الملفات",
    supports: "يدعم صيغ PDF, PNG, JPG بحد أقصى 15 ميجابايت",
    password: "كلمة المرور",
    confirmPassword: "تأكيد كلمة المرور",
    terms: "أوافق على",
    termsLink: "شروط الخدمة",
    privacyLink: "سياسة الخصوصية",
    submitOwner: "بدء تشغيل النظام المؤسسي للمطعم",
    submitCustomer: "إنشاء حساب زبون",
    loading: "جاري تهيئة النظام البيئي العالمي...",
    successTitle: "أهلاً بك في عالم AIOR!",
    successOwnerMsg: "تم إنشاء حسابك بنجاح. فريق المراجعة لدينا يقوم الآن بالتحقق من العقد التجاري وسيتم تفعيل النظام بالكامل خلال 15 دقيقة.",
    successCustomerMsg: "يمكنك الآن استكشاف المطاعم المحلية وحجز الطاولات وكسب نقاط الولاء.",
    dashboardBtn: "الانتقال لوحة التحكم ←",
    passwordMismatch: "كلمات المرور غير متطابقة!"
  }
};

const countryToTimezone: Record<string, string> = {
  "Morocco": "Africa/Casablanca",
  "United States": "America/New_York",
  "United Kingdom": "Europe/London",
  "United Arab Emirates": "Asia/Dubai",
  "Saudi Arabia": "Asia/Riyadh",
  "France": "Europe/Paris",
  "Spain": "Europe/Madrid",
  "Germany": "Europe/Berlin",
  "Canada": "America/Toronto",
  "Australia": "Australia/Sydney",
  "Egypt": "Africa/Cairo",
  "Qatar": "Asia/Qatar",
  "Kuwait": "Asia/Kuwait",
  "Italy": "Europe/Rome",
  "Japan": "Asia/Tokyo",
  "Brazil": "America/Sao_Paulo",
  "Turkey": "Europe/Istanbul",
  "Other": "UTC"
};

const globalCountries = Object.keys(countryToTimezone);

export default function RegisterPage() {
  const [lang, setLang] = useState<'en' | 'fr' | 'es' | 'ar'>('en');
  const [accountType, setAccountType] = useState<'customer' | 'owner'>('owner');
  const [currentTime, setCurrentTime] = useState<string>('');
  const [passwordError, setPasswordError] = useState(false);
  
  const [customerForm, setCustomerForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    referralCode: '',
    birthDate: '',
    password: '',
    confirmPassword: '',
  });

  const [ownerForm, setOwnerForm] = useState({
    ownerName: '',
    restaurantName: '',
    email: '',
    phone: '',
    country: 'Morocco',
    city: 'Casablanca',
    timezone: 'Africa/Casablanca',
    contractFile: null as File | null,
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const timer = setInterval(() => {
      try {
        const now = new Date();
        setCurrentTime(now.toLocaleTimeString(lang === 'ar' ? 'ar-SA' : 'en-US', { timeZone: ownerForm.timezone }));
      } catch {
        setCurrentTime(new Date().toLocaleTimeString());
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [lang, ownerForm.timezone]);

  const handleCustomerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerForm({ ...customerForm, [e.target.name]: e.target.value });
  };

  const handleOwnerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'country') {
      const updatedTz = countryToTimezone[value] || 'UTC';
      setOwnerForm(prev => ({
        ...prev,
        country: value,
        timezone: updatedTz
      }));
    } else {
      setOwnerForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setOwnerForm({ ...ownerForm, contractFile: e.target.files[0] });
    }
  };

  // دالة الإرسال المحدثة والمربوطة بـ Supabase
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const currentPass = accountType === 'owner' ? ownerForm.password : customerForm.password;
    const currentConfirm = accountType === 'owner' ? ownerForm.confirmPassword : customerForm.confirmPassword;

    if (currentPass !== currentConfirm) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
    setLoading(true);

    try {
      if (accountType === 'owner') {
        // 1. إنشاء المستخدم في Supabase Auth
        const { data: authData, error: authError } = await supabase.auth.signUp({
          email: ownerForm.email,
          password: ownerForm.password,
        });

        if (authError) throw authError;
        const userId = authData.user?.id;
        if (!userId) throw new Error("User ID not found");

        // 2. رفع عقد المطعم إلى Supabase Storage
        let contractUrl = '';
        if (ownerForm.contractFile) {
          const fileExt = ownerForm.contractFile.name.split('.').pop();
          const fileName = `${userId}-${Math.random()}.${fileExt}`;
          const { error: uploadError } = await supabase.storage
            .from('contracts')
            .upload(fileName, ownerForm.contractFile);
            
          if (!uploadError) {
            const { data: publicUrlData } = supabase.storage.from('contracts').getPublicUrl(fileName);
            contractUrl = publicUrlData.publicUrl;
          }
        }

        // 3. إنشاء المطعم في جدول restaurants
        const { data: restaurantData, error: restError } = await supabase
          .from('restaurants')
          .insert({
            name: ownerForm.restaurantName,
            slug: ownerForm.restaurantName.toLowerCase().replace(/\s+/g, '-'),
          })
          .select('id')
          .single();

        if (restError) throw restError;
        const restaurantId = restaurantData.id;

        // 4. إدخال البيانات في جدول profiles مع إعدادات الاشتراك والتجربة 30 يوم
        const { error: profileError } = await supabase
          .from('profiles')
          .insert({
            id: userId,
            email: ownerForm.email,
            full_name: ownerForm.ownerName,
            phone_number: ownerForm.phone,
            role: 'owner',
            restaurant_id: restaurantId,
            timezone: ownerForm.timezone,
            payment_status: 'trial',
            plan_cycle: 'monthly',
          });

        if (profileError) throw profileError;

      } else {
        // تسجيل حساب الزبون (Customer)
        const { data: authData, error: authError } = await supabase.auth.signUp({
          email: customerForm.email,
          password: customerForm.password,
        });

        if (authError) throw authError;
        const userId = authData.user?.id;
        if (!userId) throw new Error("User ID not found");

        const { error: profileError } = await supabase
          .from('profiles')
          .insert({
            id: userId,
            email: customerForm.email,
            full_name: customerForm.fullName,
            phone_number: customerForm.phone,
            role: 'customer',
            restaurant_id: null,
            payment_status: 'active',
          });

        if (profileError) throw profileError;
      }

      setLoading(false);
      setSuccess(true);

    } catch (error: any) {
      console.error("Error during registration:", error.message);
      alert(error.message || "حدث خطأ أثناء التسجيل، يرجى المحاولة لاحقاً.");
      setLoading(false);
    }
  };

  return (
    <div 
      dir={lang === 'ar' ? 'rtl' : 'ltr'} 
      className="min-h-screen bg-[#030305] text-gray-100 font-sans antialiased flex flex-col justify-between relative overflow-x-hidden selection:bg-indigo-600 selection:text-white"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-pink-600/5 blur-[160px] rounded-full pointer-events-none"></div>

      <header className="w-full border-b border-white/[0.08] bg-[#030305]/90 backdrop-blur-2xl z-20 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5 shadow-xl shadow-indigo-500/20 flex items-center justify-center">
              <div className="w-full h-full bg-[#030305] rounded-[14px] flex items-center justify-center">
                <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-white via-indigo-200 to-purple-400 bg-clip-text text-transparent">AI</span>
              </div>
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">AIOR</span>
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center bg-gray-900/90 border border-white/10 rounded-xl p-1 shadow-inner">
              {(['en', 'fr', 'es', 'ar'] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 text-[11px] font-bold uppercase rounded-lg transition-all cursor-pointer ${
                    lang === l ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <div className="hidden sm:block text-xs text-gray-400 font-bold border-s border-white/10 ps-4">
              {t.loginPrompt} <Link href="/login" className="text-indigo-400 hover:underline">{t.loginLink}</Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl w-full mx-auto px-4 py-16 relative z-10 my-auto">
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-indigo-950/70 border border-indigo-500/30 px-4 py-1.5 rounded-full text-xs font-black text-indigo-300 backdrop-blur-md shadow-lg shadow-indigo-500/10">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span>{t.tag}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">{t.title}</h1>
          <p className="text-gray-400 text-xs sm:text-sm font-medium">{t.subtitle}</p>
        </div>

        {success ? (
          <div className="bg-[#07070F] border border-emerald-500/40 p-10 sm:p-14 rounded-3xl text-center space-y-6 shadow-2xl backdrop-blur-2xl">
            <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-3xl flex items-center justify-center mx-auto border border-emerald-500/30 shadow-xl shadow-emerald-500/10">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-black text-white">{t.successTitle}</h3>
            <p className="text-gray-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
              {accountType === 'owner' ? t.successOwnerMsg : t.successCustomerMsg}
            </p>
            <Link href="/" className="inline-block mt-6 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white font-black px-10 py-4 rounded-2xl text-xs shadow-xl shadow-indigo-600/30 hover:scale-105 transition-all">
              {t.dashboardBtn}
            </Link>
          </div>
        ) : (
          <div className="bg-[#07070F]/90 border border-white/10 p-6 sm:p-12 rounded-3xl shadow-2xl backdrop-blur-2xl">
            <div className="grid grid-cols-2 gap-3 p-1.5 bg-gray-900/90 rounded-2xl border border-white/5 mb-8">
              <button
                type="button"
                onClick={() => setAccountType('owner')}
                className={`flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                  accountType === 'owner' 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30 scale-[1.02]' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Store className="w-4 h-4" /> {t.ownerTab}
              </button>
              <button
                type="button"
                onClick={() => setAccountType('customer')}
                className={`flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                  accountType === 'customer' 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30 scale-[1.02]' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <User className="w-4 h-4" /> {t.customerTab}
              </button>
            </div>

            {passwordError && (
              <div className="mb-6 bg-rose-950/50 border border-rose-500/30 p-4 rounded-2xl flex items-center gap-3 text-rose-300 text-xs font-bold">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>{t.passwordMismatch}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {accountType === 'customer' && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300 mb-2">{t.fullName}</label>
                    <div className="relative">
                      <User className="absolute inset-y-0 start-4 my-auto w-4 h-4 text-gray-500" />
                      <input 
                        type="text" 
                        name="fullName"
                        required
                        placeholder="John Doe"
                        value={customerForm.fullName}
                        onChange={handleCustomerChange}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 ps-11 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300 mb-2">{t.email}</label>
                      <div className="relative">
                        <Mail className="absolute inset-y-0 start-4 my-auto w-4 h-4 text-gray-500" />
                        <input 
                          type="email" 
                          name="email"
                          required
                          placeholder="john@example.com"
                          value={customerForm.email}
                          onChange={handleCustomerChange}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 ps-11 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300 mb-2">{t.phone}</label>
                      <div className="relative">
                        <Phone className="absolute inset-y-0 start-4 my-auto w-4 h-4 text-gray-500" />
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          placeholder="+1 (555) 019-2834"
                          value={customerForm.phone}
                          onChange={handleCustomerChange}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 ps-11 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300 mb-2">{t.birthDate}</label>
                      <div className="relative">
                        <Calendar className="absolute inset-y-0 start-4 my-auto w-4 h-4 text-gray-500" />
                        <input 
                          type="date" 
                          name="birthDate"
                          required
                          value={customerForm.birthDate}
                          onChange={handleCustomerChange}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 ps-11 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300 mb-2">{t.referralCode}</label>
                      <div className="relative">
                        <Sparkles className="absolute inset-y-0 start-4 my-auto w-4 h-4 text-gray-500" />
                        <input 
                          type="text" 
                          name="referralCode"
                          placeholder="VIP2026"
                          value={customerForm.referralCode}
                          onChange={handleCustomerChange}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 ps-11 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium uppercase"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300 mb-2">{t.password}</label>
                      <div className="relative">
                        <Lock className="absolute inset-y-0 start-4 my-auto w-4 h-4 text-gray-500" />
                        <input 
                          type="password" 
                          name="password"
                          required
                          placeholder="••••••••••••"
                          value={customerForm.password}
                          onChange={handleCustomerChange}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 ps-11 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300 mb-2">{t.confirmPassword}</label>
                      <div className="relative">
                        <Lock className="absolute inset-y-0 start-4 my-auto w-4 h-4 text-gray-500" />
                        <input 
                          type="password" 
                          name="confirmPassword"
                          required
                          placeholder="••••••••••••"
                          value={customerForm.confirmPassword}
                          onChange={handleCustomerChange}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 ps-11 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {accountType === 'owner' && (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300 mb-2">{t.ownerName}</label>
                      <div className="relative">
                        <User className="absolute inset-y-0 start-4 my-auto w-4 h-4 text-gray-500" />
                        <input 
                          type="text" 
                          name="ownerName"
                          required
                          placeholder="Ahmad Al-Mansoor"
                          value={ownerForm.ownerName}
                          onChange={handleOwnerChange}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 ps-11 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300 mb-2">{t.restaurantName}</label>
                      <div className="relative">
                        <Store className="absolute inset-y-0 start-4 my-auto w-4 h-4 text-gray-500" />
                        <input 
                          type="text" 
                          name="restaurantName"
                          required
                          placeholder="Le Gourmet Palace LLC"
                          value={ownerForm.restaurantName}
                          onChange={handleOwnerChange}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 ps-11 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300 mb-2">{t.email}</label>
                      <div className="relative">
                        <Mail className="absolute inset-y-0 start-4 my-auto w-4 h-4 text-gray-500" />
                        <input 
                          type="email" 
                          name="email"
                          required
                          placeholder="management@legourmet.com"
                          value={ownerForm.email}
                          onChange={handleOwnerChange}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 ps-11 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300 mb-2">{t.phone}</label>
                      <div className="relative">
                        <Phone className="absolute inset-y-0 start-4 my-auto w-4 h-4 text-gray-500" />
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          placeholder="+971 4 555 0192"
                          value={ownerForm.phone}
                          onChange={handleOwnerChange}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 ps-11 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300 mb-2">{t.country}</label>
                      <div className="relative">
                        <MapPin className="absolute inset-y-0 start-4 my-auto w-4 h-4 text-gray-500" />
                        <select 
                          name="country"
                          value={ownerForm.country}
                          onChange={handleOwnerChange}
                          className="w-full bg-gray-900 border border-white/10 rounded-2xl px-4 py-3.5 ps-11 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium cursor-pointer"
                        >
                          {globalCountries.map(c => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300 mb-2">{t.city}</label>
                      <div className="relative">
                        <MapPin className="absolute inset-y-0 start-4 my-auto w-4 h-4 text-gray-500" />
                        <input 
                          type="text" 
                          name="city"
                          required
                          placeholder="Casablanca / New York"
                          value={ownerForm.city}
                          onChange={handleOwnerChange}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 ps-11 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300 mb-2">{t.timezone}</label>
                      <div className="relative">
                        <Clock className="absolute inset-y-0 start-4 my-auto w-4 h-4 text-indigo-400" />
                        <input 
                          type="text" 
                          readOnly
                          value={`${ownerForm.timezone} (${currentTime || 'Loading...'})`}
                          className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-4 py-3.5 ps-11 text-[11px] text-indigo-300 font-bold cursor-not-allowed"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300 mb-2">{t.contractUpload}</label>
                    <div className="relative border-2 border-dashed border-white/15 rounded-3xl p-6 text-center hover:border-indigo-500/50 transition-all bg-white/[0.01] group cursor-pointer">
                      <input 
                        type="file" 
                        accept=".pdf,image/*"
                        required
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Upload className="w-6 h-6" />
                        </div>
                        {ownerForm.contractFile ? (
                          <p className="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                            <FileText className="w-4 h-4" /> {ownerForm.contractFile.name} (Ready)
                          </p>
                        ) : (
                          <>
                            <p className="text-xs text-gray-300 font-bold">{t.dragDrop} <span className="text-indigo-400 underline">{t.browse}</span></p>
                            <p className="text-[10px] text-gray-500">{t.supports}</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300 mb-2">{t.password}</label>
                      <div className="relative">
                        <Lock className="absolute inset-y-0 start-4 my-auto w-4 h-4 text-gray-500" />
                        <input 
                          type="password" 
                          name="password"
                          required
                          placeholder="••••••••••••"
                          value={ownerForm.password}
                          onChange={handleOwnerChange}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 ps-11 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300 mb-2">{t.confirmPassword}</label>
                      <div className="relative">
                        <Lock className="absolute inset-y-0 start-4 my-auto w-4 h-4 text-gray-500" />
                        <input 
                          type="password" 
                          name="confirmPassword"
                          required
                          placeholder="••••••••••••"
                          value={ownerForm.confirmPassword}
                          onChange={handleOwnerChange}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 ps-11 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-3 rtl:space-x-reverse pt-2">
                <input 
                  type="checkbox" 
                  required
                  id="terms"
                  className="w-4 h-4 rounded border-white/20 bg-gray-900 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                />
                <label htmlFor="terms" className="text-xs text-gray-400 font-medium cursor-pointer">
                  {t.terms} <a href="#" className="text-indigo-400 underline">{t.termsLink}</a> and <a href="#" className="text-indigo-400 underline">{t.privacyLink}</a>.
                </label>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full mt-4 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-black py-4.5 rounded-2xl text-xs sm:text-sm shadow-xl shadow-indigo-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    {t.loading}
                  </span>
                ) : (
                  <>
                    {accountType === 'owner' ? t.submitOwner : t.submitCustomer} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </main>

      <footer className="w-full py-8 border-t border-white/[0.05] text-center text-xs text-gray-600 font-bold relative z-10">
        <p>© 2026 AIOR Inc. Global Enterprise Registration System.</p>
      </footer>
    </div>
  );
}