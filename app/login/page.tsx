'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { 
  Mail, 
  Lock, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

// تهيئة عميل Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// قاموس الترجمات المحدث
const translations = {
  en: {
    tag: "Unified Restaurant & Customer Ecosystem",
    title: "Welcome Back to AIOR",
    subtitle: "Sign in to access your dashboard.",
    registerPrompt: "Don't have an account?",
    registerLink: "Register here",
    email: "Business / Personal Email",
    password: "Password",
    forgotPassword: "Forgot password?",
    submitBtn: "Sign In",
    loading: "Authenticating & Routing...",
    successTitle: "Welcome Back!",
    successMsg: "Authentication successful. Redirecting to your portal...",
    dashboardBtn: "Go to Portal →",
    loginError: "Invalid email or password. Please try again."
  },
  fr: {
    tag: "Écosystème Unifié Restaurant & Client",
    title: "Bon retour sur AIOR",
    subtitle: "Connectez-vous pour accéder à votre tableau de bord.",
    registerPrompt: "Vous n'avez pas de compte ?",
    registerLink: "Inscrivez-vous",
    email: "E-mail Professionnel / Personnel",
    password: "Mot de passe",
    forgotPassword: "Mot de passe oublié ?",
    submitBtn: "Se connecter",
    loading: "Authentification...",
    successTitle: "Bon retour !",
    successMsg: "Authentification réussie. Redirection vers votre portail...",
    dashboardBtn: "Aller au Portail →",
    loginError: "E-mail ou mot de passe invalide."
  },
  es: {
    tag: "Ecosistema Unificado de Restaurantes",
    title: "Bienvenido de nuevo a AIOR",
    subtitle: "Inicia sesión para acceder a tu panel.",
    registerPrompt: "¿No tienes una cuenta?",
    registerLink: "Regístrate aquí",
    email: "Correo Electrónico",
    password: "Contraseña",
    forgotPassword: "¿Olvidaste tu contraseña?",
    submitBtn: "Iniciar sesión",
    loading: "Autenticando...",
    successTitle: "¡Bienvenido de nuevo!",
    successMsg: "Autenticación exitosa. Redirigiendo...",
    dashboardBtn: "Ir al Portal →",
    loginError: "Correo o contraseña inválidos."
  },
  ar: {
    tag: "النظام البيئي المتكامل للمطاعم والعملاء",
    title: "مرحباً بعودتك إلى AIOR",
    subtitle: "سجل الدخول للوصول إلى لوحة التحكم الخاصة بك.",
    registerPrompt: "ليس لديك حساب؟",
    registerLink: "أنشئ حساباً جديداً",
    email: "البريد الإلكتروني للعمل / الشخصي",
    password: "كلمة المرور",
    forgotPassword: "هل نسيت كلمة المرور؟",
    submitBtn: "تسجيل الدخول",
    loading: "جاري التحقق وتوجيه الحساب...",
    successTitle: "أهلاً بك مجدداً!",
    successMsg: "تم تسجيل الدخول بنجاح. جاري توجيهك إلى بوابتك المخصصة...",
    dashboardBtn: "الانتقال للبوابة ←",
    loginError: "البريد الإلكتروني أو كلمة المرور غير صحيحة."
  }
};

export default function LoginPage() {
  const router = useRouter();
  const [lang, setLang] = useState<'en' | 'fr' | 'es' | 'ar'>('en');
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [redirectPath, setRedirectPath] = useState('/');

  const t = translations[lang];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      // 1. تسجيل الدخول عبر Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (authError) throw authError;
      const userId = authData.user?.id;
      if (!userId) throw new Error("User ID not found");

      // 2. جلب دور المستخدم (Role) من جدول profiles
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', userId)
        .single();

      if (profileError) throw profileError;

      // 3. تحديد المسار بناءً على نوع الحساب
      let destination = '/client'; // القيمة الافتراضية للزبون
      if (profileData.role === 'owner') {
        destination = '/admin'; // لوحة تحكم صاحب المطعم
      }

      setRedirectPath(destination);
      setLoading(false);
      setSuccess(true);

      // توجيه تلقائي بعد ثانيتين
      setTimeout(() => {
        router.push(destination);
      }, 1500);

    } catch (error: any) {
      console.error("Login error:", error.message);
      setErrorMessage(t.loginError);
      setLoading(false);
    }
  };

  return (
    <div 
      dir={lang === 'ar' ? 'rtl' : 'ltr'} 
      className="min-h-screen bg-[#030305] text-gray-100 font-sans antialiased flex flex-col justify-between relative overflow-x-hidden selection:bg-indigo-600 selection:text-white"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-pink-600/5 blur-[160px] rounded-full pointer-events-none"></div>

      {/* HEADER */}
      <header className="w-full border-b border-white/[0.08] bg-[#030305]/90 backdrop-blur-2xl z-20 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5 shadow-xl shadow-indigo-500/20 group-hover:scale-105 transition-transform flex items-center justify-center">
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
              {t.registerPrompt} <Link href="/register" className="text-indigo-400 hover:underline">{t.registerLink}</Link>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-xl w-full mx-auto px-4 py-16 relative z-10 my-auto">
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-indigo-950/70 border border-indigo-500/30 px-4 py-1.5 rounded-full text-xs font-black text-indigo-300 backdrop-blur-md shadow-lg shadow-indigo-500/10">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span>{t.tag}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">{t.title}</h1>
          <p className="text-gray-400 text-xs sm:text-sm font-medium">{t.subtitle}</p>
        </div>

        {success ? (
          <div className="bg-[#07070F] border border-emerald-500/40 p-10 sm:p-14 rounded-3xl text-center space-y-6 shadow-2xl backdrop-blur-2xl">
            <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-3xl flex items-center justify-center mx-auto border border-emerald-500/30 shadow-xl shadow-emerald-500/10">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-black text-white">{t.successTitle}</h3>
            <p className="text-gray-300 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">{t.successMsg}</p>
            <Link href={redirectPath} className="inline-block mt-6 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white font-black px-10 py-4 rounded-2xl text-xs shadow-xl shadow-indigo-600/30 hover:scale-105 transition-all">
              {t.dashboardBtn}
            </Link>
          </div>
        ) : (
          <div className="bg-[#07070F]/90 border border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-2xl">
            {errorMessage && (
              <div className="mb-6 bg-rose-950/50 border border-rose-500/30 p-4 rounded-2xl flex items-center gap-3 text-rose-300 text-xs font-bold">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* EMAIL */}
              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300 mb-2">{t.email}</label>
                <div className="relative">
                  <Mail className="absolute inset-y-0 start-4 my-auto w-4 h-4 text-gray-500" />
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 ps-11 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300">{t.password}</label>
                  <a href="#" className="text-[11px] font-bold text-indigo-400 hover:underline">{t.forgotPassword}</a>
                </div>
                <div className="relative">
                  <Lock className="absolute inset-y-0 start-4 my-auto w-4 h-4 text-gray-500" />
                  <input 
                    type="password" 
                    name="password"
                    required
                    placeholder="••••••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 ps-11 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                  />
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button 
                type="submit"
                disabled={loading}
                className="w-full mt-2 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-black py-4.5 rounded-2xl text-xs sm:text-sm shadow-xl shadow-indigo-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    {t.loading}
                  </span>
                ) : (
                  <>
                    {t.submitBtn} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/[0.08] text-center sm:hidden text-xs text-gray-400 font-bold">
              {t.registerPrompt} <Link href="/register" className="text-indigo-400 hover:underline">{t.registerLink}</Link>
            </div>
          </div>
        )}
      </main>

      <footer className="w-full py-8 border-t border-white/[0.05] text-center text-xs text-gray-600 font-bold relative z-10">
        <p>© 2026 AIOR Inc. Global Enterprise Authentication System.</p>
      </footer>
    </div>
  );
}