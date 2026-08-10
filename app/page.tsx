'use client';

import { useState } from 'react';

const translations = {
    en: {
        nav_platform: "Platform",
        nav_solutions: "Solutions",
        nav_ai: "AI Intelligence",
        nav_pricing: "Pricing",
        nav_resources: "Resources",
        login: "Login",
        start_trial: "Start Free Trial",
        badge_top: "#1 Restaurant Operating System",
        hero_title_1: "Run Your Restaurant.",
        hero_title_2: "Grow Your Business.",
        hero_desc: "The all-in-one operating system combining POS, Inventory, KDS, CRM, Staff HR, and AI Insights. Everything your restaurant needs in one powerful platform.",
        hero_btn_1: "Start Your Free 30-Day Trial →",
        hero_btn_2: "Explore Architecture",
        perk_1: "✓ 30-Day Free Trial",
        perk_2: "✓ No credit card required",
        perk_3: "✓ Cancel Anytime",
        metric_rev: "Revenue",
        metric_orders: "Orders",
        metric_staff: "Active Staff",
        metric_inv: "Inventory",
        preview_ops: "⚡ Operations: 42 Reservations | 18 Active Kitchen Orders",
        preview_ai: "\"Chicken inventory may run low by tomorrow peak hours. Purchase recommendation prepared.\"",
        trusted_text: "Designed for modern restaurants of every size",
        arch_badge: "Unified Architecture",
        arch_title: "One Platform. Every Restaurant Operation.",
        arch_desc: "A complete ecosystem connecting your front-of-house, back-of-house, and intelligence layers.",
        layer_operate: "Operate",
        layer_operate_desc: "POS, Tables, Orders, Reservations, KDS, Stations, Printer Routing.",
        layer_manage: "Manage",
        layer_manage_desc: "QR Menu, Modifiers, Inventory, Purchasing, Recipes, Costing, Staff HR.",
        layer_grow: "Grow",
        layer_grow_desc: "Customer 360, Loyalty, Cashback, Campaigns, Happy Hour, Push Notifications.",
        layer_understand: "Understand",
        layer_understand_desc: "Advanced Analytics, Reports, Forecasting, AI Business Coach Insights.",
        rewards_badge: "Viral Customer Acquisition",
        rewards_title: "Turn Everyday Customer Actions Into Rewards",
        rewards_desc: "Supercharge retention and word-of-mouth marketing with automated social sharing, reviews, and birthday triggers built right into the platform.",
        rew_ig_title: "📸 Instagram Story Rewards",
        rew_ig_desc: "Customers get instant cashback when they tag your restaurant in their stories.",
        rew_google_title: "⭐ Google Review Rewards",
        rew_google_desc: "Drive 5-star ratings automatically by offering discounts on verified feedback.",
        rew_bday_title: "🎂 Birthday & Referral Programs",
        rew_bday_desc: "Automated birthday treats and referral bonuses that fill tables on weekdays.",
        rew_cash_title: "🎁 Cashback & Tiers",
        rew_cash_desc: "Customizable loyalty points and cashback tiers to keep regulars coming back.",
        ai_badge: "Artificial Intelligence Core",
        ai_section_title: "Your Restaurant Has an AI Business Assistant",
        ai_section_desc: "AIOR doesn’t just store data; it works for you. From predicting stock shortages and analyzing staff productivity to creating automated campaigns.",
        ai_bullet_1: "✓ Automated Revenue & Demand Forecasting",
        ai_bullet_2: "✓ Smart Inventory Waste Prediction",
        ai_bullet_3: "✓ Customer Churn Detection & VIP Alerts",
        ai_log_title: "AIOR_COACH_FEED // LIVE LOGS",
        ai_log_1: "\"Your Tuesday lunch campaign generated 32% more returning customers. Consider extending it.\"",
        ai_log_2: "\"Sarah hasn't visited in 45 days. Automatic cashback reward generated to drive re-engagement.\"",
        pricing_title: "Choose the plan that’s right for you",
        pricing_desc: "Simple, transparent pricing. Start with a 30-day free trial.",
        plan_monthly: "Monthly Plan",
        per_month: "/month",
        p_f1: "✓ All Core Features & POS",
        p_f2: "✓ AI Insights Included",
        p_f3: "✓ 30-Day Free Trial",
        plan_yearly: "Yearly Plan",
        per_year: "/year",
        py_f1: "✓ All Core & Enterprise Features",
        py_f2: "✓ Advanced AI Forecasting & Coach",
        py_f3: "✓ Priority Support 24/7",
        py_f4: "✓ 2 Months Free + 30-Day Trial",
        most_popular: "Most Popular",
        get_started: "Get Started",
        footer_prod: "Product",
        f_pos: "POS & KDS",
        f_menu: "QR Menu",
        f_inv: "Inventory",
        f_loyalty: "Loyalty & CRM",
        footer_comp: "Company",
        f_about: "About Us",
        f_careers: "Careers",
        f_contact: "Contact",
        footer_res: "Resources",
        f_docs: "Documentation",
        f_help: "Help Center",
        f_blog: "Blog",
        footer_legal: "Legal",
        f_privacy: "Privacy Policy",
        f_terms: "Terms of Service",
        f_security: "Security",
        copyright: "© 2026 AIOR — All In One Restaurant. All rights reserved."
    },
    fr: {
        nav_platform: "Plateforme",
        nav_solutions: "Solutions",
        nav_ai: "Intelligence IA",
        nav_pricing: "Tarifs",
        nav_resources: "Ressources",
        login: "Connexion",
        start_trial: "Essai Gratuit",
        badge_top: "#1 Système d'Exploitation pour Restaurant",
        hero_title_1: "Gérez Votre Restaurant.",
        hero_title_2: "Développez Votre Entreprise.",
        hero_desc: "Le système d'exploitation tout-en-un combinant POS, Inventaire, KDS, CRM, RH et IA. Tout ce dont votre restaurant a besoin sur une seule plateforme.",
        hero_btn_1: "Essai gratuit de 30 jours →",
        hero_btn_2: "Explorer l'architecture",
        perk_1: "✓ Essai gratuit de 30 jours",
        perk_2: "✓ Aucune carte de crédit requise",
        perk_3: "✓ Annulation à tout moment",
        metric_rev: "Revenus",
        metric_orders: "Commandes",
        metric_staff: "Personnel Actif",
        metric_inv: "Inventaire",
        preview_ops: "⚡ Opérations : 42 Réservations | 18 Commandes cuisine en direct",
        preview_ai: "\"L'inventaire du poulet pourrait baisser demain. Recommandation d'achat préparée.\"",
        trusted_text: "Conçu pour les restaurants modernes de toutes tailles",
        arch_badge: "Architecture Unifiée",
        arch_title: "Une Plateforme. Chaque Opération de Restaurant.",
        arch_desc: "Un écosystème complet connectant votre salle, votre cuisine et vos couches d'intelligence.",
        layer_operate: "Opérer",
        layer_operate_desc: "POS, Tables, Commandes, Réservations, KDS, Postes, Routage imprimantes.",
        layer_manage: "Gérer",
        layer_manage_desc: "Menu QR, Modificateurs, Inventaire, Achats, Recettes, Coûts, RH.",
        layer_grow: "Croître",
        layer_grow_desc: "Client 360, Fidélité, Cashback, Campagnes, Happy Hour, Notifications push.",
        layer_understand: "Comprendre",
        layer_understand_desc: "Analytique avancée, Rapports, Prévisions, Insights du Coach IA.",
        rewards_badge: "Acquisition Virale de Clients",
        rewards_title: "Transformez les Actions Quotidiennes en Récompenses",
        rewards_desc: "Optimisez la fidélisation et le marketing de bouche-à-oreille grâce au partage social automatisé et aux anniversaires.",
        rew_ig_title: "📸 Récompenses Story Instagram",
        rew_ig_desc: "Les clients reçoivent du cashback instantané lorsqu'ils taguent votre restaurant.",
        rew_google_title: "⭐ Récompenses Avis Google",
        rew_google_desc: "Obtenez des notes 5 étoiles en offrant des réductions sur avis vérifiés.",
        rew_bday_title: "🎂 Anniversaires & Parrainage",
        rew_bday_desc: "Cadeaux d'anniversaire automatisés et bonus de parrainage pour remplir les tables.",
        rew_cash_title: "🎁 Cashback & Paliers",
        rew_cash_desc: "Points de fidélité personnalisables pour faire revenir vos habitués.",
        ai_badge: "Cœur d'Intelligence Artificielle",
        ai_section_title: "Votre Restaurant a un Assistant Commercial IA",
        ai_section_desc: "AIOR ne stocke pas seulement des données ; il travaille pour vous. De la prévision des pénuries à l'analyse de productivité.",
        ai_bullet_1: "✓ Prévision automatisée des revenus et de la demande",
        ai_bullet_2: "✓ Prédiction intelligente du gaspillage",
        ai_bullet_3: "✓ Détection du taux d'attrition et alertes VIP",
        ai_log_title: "AIOR_COACH_FEED // JOURNAUX EN DIRECT",
        ai_log_1: "\"Votre campagne du mardi a généré 32% de clients récurrents en plus. Prolongez-la.\"",
        ai_log_2: "\"Sarah n'est pas venue depuis 45 jours. Récompense de cashback générée.\"",
        pricing_title: "Choisissez le plan qui vous convient",
        pricing_desc: "Tarifs simples et transparents. Commencez par un essai de 30 jours.",
        plan_monthly: "Plan Mensuel",
        per_month: "/mois",
        p_f1: "✓ Toutes les fonctionnalités et POS",
        p_f2: "✓ Insights IA inclus",
        p_f3: "✓ Essai gratuit de 30 jours",
        plan_yearly: "Plan Annuel",
        per_year: "/an",
        py_f1: "✓ Fonctionnalités Core & Enterprise",
        py_f2: "✓ Prévisions IA avancées",
        py_f3: "✓ Support prioritaire 24/7",
        py_f4: "✓ 2 mois offerts + Essai de 30 jours",
        most_popular: "Le plus populaire",
        get_started: "Commencer",
        footer_prod: "Produit",
        f_pos: "POS & KDS",
        f_menu: "Menu QR",
        f_inv: "Inventaire",
        f_loyalty: "Fidélité & CRM",
        footer_comp: "Entreprise",
        f_about: "À propos",
        f_careers: "Carrières",
        f_contact: "Contact",
        footer_res: "Ressources",
        f_docs: "Documentation",
        f_help: "Centre d'aide",
        f_blog: "Blog",
        footer_legal: "Légal",
        f_privacy: "Politique de confidentialité",
        f_terms: "Conditions d'utilisation",
        f_security: "Sécurité",
        copyright: "© 2026 AIOR — All In One Restaurant. Tous droits réservés."
    },
    es: {
        nav_platform: "Plataforma",
        nav_solutions: "Soluciones",
        nav_ai: "Inteligencia IA",
        nav_pricing: "Precios",
        nav_resources: "Recursos",
        login: "Iniciar Sesión",
        start_trial: "Prueba Gratuita",
        badge_top: "#1 Sistema Operativo para Restaurantes",
        hero_title_1: "Gestiona Tu Restaurante.",
        hero_title_2: "Haz Crecer Tu Negocio.",
        hero_desc: "El sistema operativo todo en uno que combina TPV, Inventario, KDS, CRM, RRHH y análisis de IA. Todo lo que tu restaurante necesita.",
        hero_btn_1: "Prueba gratis de 30 días →",
        hero_btn_2: "Explorar arquitectura",
        perk_1: "✓ Prueba gratuita de 30 días",
        perk_2: "✓ Sin tarjeta de crédito requerida",
        perk_3: "✓ Cancela en cualquier momento",
        metric_rev: "Ingresos",
        metric_orders: "Pedidos",
        metric_staff: "Personal Activo",
        metric_inv: "Inventario",
        preview_ops: "⚡ Operaciones: 42 Reservas | 18 Pedidos de cocina activos",
        preview_ai: "\"El inventario de pollo puede bajar mañana. Recomendación de compra preparada.\"",
        trusted_text: "Diseñado para restaurantes modernos de todos los tamaños",
        arch_badge: "Arquitectura Unificada",
        arch_title: "Una Plataforma. Cada Operación de Restaurante.",
        arch_desc: "Un ecosistema completo que conecta tu sala, cocina y capas de inteligencia.",
        layer_operate: "Operar",
        layer_operate_desc: "TPV, Mesas, Pedidos, Reservas, KDS, Estaciones, Enrutamiento de impresoras.",
        layer_manage: "Gestionar",
        layer_manage_desc: "Menú QR, Modificadores, Inventario, Compras, Recetas, Costos, RRHH.",
        layer_grow: "Crecer",
        layer_grow_desc: "Cliente 360, Lealtad, Cashback, Campañas, Hora feliz, Notificaciones push.",
        layer_understand: "Comprender",
        layer_understand_desc: "Analítica avanzada, Informes, Pronósticos, Insights del Entrenador IA.",
        rewards_badge: "Adquisición Viral de Clientes",
        rewards_title: "Convierte Acciones Cotidianas en Recompensas",
        rewards_desc: "Potencia la retención y el marketing boca a boca con compartir social automatizado y cumpleaños.",
        rew_ig_title: "📸 Recompensas Story Instagram",
        rew_ig_desc: "Los clientes obtienen cashback instantáneo cuando etiquetan tu restaurante.",
        rew_google_title: "⭐ Recompensas Reseña Google",
        rew_google_desc: "Consigue valoraciones de 5 estrellas ofreciendo descuentos por feedback verificado.",
        rew_bday_title: "🎂 Cumpleaños y Referidos",
        rew_bday_desc: "Regalos de cumpleaños automatizados y bonos de referidos para llenar mesas.",
        rew_cash_title: "🎁 Cashback y Niveles",
        rew_cash_desc: "Puntos de lealtad personalizables para mantener a tus clientes habituales.",
        ai_badge: "Núcleo de Inteligencia Artificial",
        ai_section_title: "Tu Restaurante Tiene un Asistente Comercial de IA",
        ai_section_desc: "AIOR no solo almacena datos; trabaja para ti. Desde predecir escasez de stock hasta analizar la productividad del personal.",
        ai_bullet_1: "✓ Pronóstico automatizado de ingresos y demanda",
        ai_bullet_2: "✓ Predicción inteligente de mermas e inventario",
        ai_bullet_3: "✓ Detección de abandono y alertas VIP",
        ai_log_title: "AIOR_COACH_FEED // REGISTROS EN VIVO",
        ai_log_1: "\"Tu campaña del martes generó un 32% más de clientes recurrentes. Considere ampliarla.\"",
        ai_log_2: "\"Sarah no ha visitado en 45 días. Recompensa de cashback generada para re-engagement.\"",
        pricing_title: "Elige el plan adecuado para ti",
        pricing_desc: "Precios simples y transparentes. Comienza con una prueba de 30 días.",
        plan_monthly: "Plan Mensual",
        per_month: "/mes",
        p_f1: "✓ Todas las funciones y TPV",
        p_f2: "✓ Insights de IA incluidos",
        p_f3: "✓ Prueba gratuita de 30 días",
        plan_yearly: "Plan Anual",
        per_year: "/año",
        py_f1: "✓ Funciones Core y Enterprise",
        py_f2: "✓ Pronósticos de IA avanzados",
        py_f3: "✓ Soporte prioritario 24/7",
        py_f4: "✓ 2 meses gratis + Prueba de 30 días",
        most_popular: "Más Popular",
        get_started: "Empezar",
        footer_prod: "Producto",
        f_pos: "TPV y KDS",
        f_menu: "Menú QR",
        f_inv: "Inventario",
        f_loyalty: "Lealtad y CRM",
        footer_comp: "Empresa",
        f_about: "Sobre Nosotros",
        f_careers: "Carreras",
        f_contact: "Contacto",
        footer_res: "Recursos",
        f_docs: "Documentación",
        f_help: "Centro de Ayuda",
        f_blog: "Blog",
        footer_legal: "Legal",
        f_privacy: "Política de Privacidad",
        f_terms: "Términos de Servicio",
        f_security: "Seguridad",
        copyright: "© 2026 AIOR — All In One Restaurant. Todos los derechos reservados."
    }
};

export default function Home() {
  const [lang, setLang] = useState('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = (key) => {
    return translations[lang]?.[key] || translations['en'][key] || key;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white text-gray-900 font-sans antialiased">
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-tight text-black">AIOR</span>
            <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest text-gray-500 border-l pl-2 border-gray-300">Restaurant OS</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <a href="#platform" className="hover:text-black transition">{t('nav_platform')}</a>
            <a href="#solutions" className="hover:text-black transition">{t('nav_solutions')}</a>
            <a href="#ai-section" className="hover:text-brandPrimary transition font-semibold text-brandPrimary">{t('nav_ai')}</a>
            <a href="#pricing" className="hover:text-black transition">{t('nav_pricing')}</a>
            <a href="#resources" className="hover:text-black transition">{t('nav_resources')}</a>
          </nav>

          <div className="flex items-center space-x-4">
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value)} 
              className="bg-gray-50 border border-gray-200 text-gray-700 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-brandPrimary"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
            </select>

            <a href="#" className="hidden sm:inline-block text-sm font-semibold text-gray-700 hover:text-black">{t('login')}</a>
            <a href="#" className="hidden lg:inline-block bg-brandPrimary text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-md hover:opacity-90 transition">{t('start_trial')}</a>

            <button onClick={toggleMobileMenu} className="md:hidden p-2 text-gray-600 hover:text-black focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className={`md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <a href="#platform" onClick={toggleMobileMenu} className="block text-sm font-medium text-gray-700 hover:text-black py-1">{t('nav_platform')}</a>
          <a href="#solutions" onClick={toggleMobileMenu} className="block text-sm font-medium text-gray-700 hover:text-black py-1">{t('nav_solutions')}</a>
          <a href="#ai-section" onClick={toggleMobileMenu} className="block text-sm font-semibold text-brandPrimary py-1">{t('nav_ai')}</a>
          <a href="#pricing" onClick={toggleMobileMenu} className="block text-sm font-medium text-gray-700 hover:text-black py-1">{t('nav_pricing')}</a>
          <a href="#resources" onClick={toggleMobileMenu} className="block text-sm font-medium text-gray-700 hover:text-black py-1">{t('nav_resources')}</a>
          <div className="pt-4 flex flex-col space-y-2">
            <a href="#" className="text-center text-sm font-semibold text-gray-700 py-2 border border-gray-200 rounded-xl">{t('login')}</a>
            <a href="#" className="text-center bg-brandPrimary text-white py-2.5 rounded-xl text-sm font-semibold shadow-md">{t('start_trial')}</a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-slate-50/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-200/60 px-3 py-1 rounded-full text-xs font-semibold text-brandPrimary">
                <span>{t('badge_top')}</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
                <span>{t('hero_title_1')}</span> <br />
                <span className="text-brandPrimary">{t('hero_title_2')}</span>
              </h1>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {t('hero_desc')}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                <a href="#" className="bg-brandPrimary text-white text-center px-7 py-3.5 rounded-xl font-semibold shadow-lg hover:opacity-90 transition">
                  {t('hero_btn_1')}
                </a>
                <a href="#architecture" className="border border-gray-300 text-center px-7 py-3.5 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition">
                  {t('hero_btn_2')}
                </a>
              </div>

              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-gray-200/60 text-xs text-gray-500 font-medium">
                <div>{t('perk_1')}</div>
                <div>{t('perk_2')}</div>
                <div>{t('perk_3')}</div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative bg-gray-900 rounded-2xl p-5 shadow-2xl border border-gray-800 text-white">
                <div className="flex items-center justify-between pb-3 border-b border-gray-800 text-xs text-gray-400">
                  <span className="font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> AIOR Restaurant OS — Dashboard Preview
                  </span>
                  <span className="bg-purple-500/20 text-purple-300 px-2.5 py-0.5 rounded text-[10px]">AI Coach Active</span>
                </div>
                
                <div className="grid grid-cols-4 gap-2 my-4 text-center">
                  <div className="bg-gray-800/80 p-2.5 rounded-xl border border-gray-700/50">
                    <p className="text-[9px] text-gray-400">{t('metric_rev')}</p>
                    <p className="text-xs font-bold text-emerald-400">$32,540</p>
                  </div>
                  <div className="bg-gray-800/80 p-2.5 rounded-xl border border-gray-700/50">
                    <p className="text-[9px] text-gray-400">{t('metric_orders')}</p>
                    <p className="text-xs font-bold text-white">1,248</p>
                  </div>
                  <div className="bg-gray-800/80 p-2.5 rounded-xl border border-gray-700/50">
                    <p className="text-[9px] text-gray-400">{t('metric_staff')}</p>
                    <p className="text-xs font-bold text-blue-400">24 On Duty</p>
                  </div>
                  <div className="bg-gray-800/80 p-2.5 rounded-xl border border-gray-700/50">
                    <p className="text-[9px] text-gray-400">{t('metric_inv')}</p>
                    <p className="text-xs font-bold text-amber-400">86% Optimal</p>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700/50 flex items-center justify-between text-xs">
                    <span className="text-gray-300">⚡ Operations: <strong>42 Reservations</strong> | <strong>18 Active Kitchen Orders</strong></span>
                    <span className="text-emerald-400 font-semibold">+14%</span>
                  </div>
                  <div className="bg-brandPrimary/15 border border-brandPrimary/30 p-3 rounded-xl text-xs text-purple-200 flex items-start space-x-2">
                    <span className="text-brandPrimary font-bold">🤖 AI:</span>
                    <span>{t('preview_ai')}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUSTED TEXT */}
      <section className="py-10 border-y border-gray-100 bg-gray-50/50 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{t('trusted_text')}</p>
      </section>

      {/* ARCHITECTURE SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="architecture">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brandPrimary font-semibold text-xs uppercase tracking-widest bg-brandPrimary/10 px-3 py-1 rounded-full">{t('arch_badge')}</span>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mt-3">{t('arch_title')}</h2>
          <p className="text-gray-600 text-sm mt-2">{t('arch_desc')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">01</div>
            <h3 className="font-bold text-gray-900">{t('layer_operate')}</h3>
            <p className="text-xs text-gray-600">{t('layer_operate_desc')}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">02</div>
            <h3 className="font-bold text-gray-900">{t('layer_manage')}</h3>
            <p className="text-xs text-gray-600">{t('layer_manage_desc')}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 font-bold flex items-center justify-center text-xs">03</div>
            <h3 className="font-bold text-gray-900">{t('layer_grow')}</h3>
            <p className="text-xs text-gray-600">{t('layer_grow_desc')}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-xs">04</div>
            <h3 className="font-bold text-gray-900">{t('layer_understand')}</h3>
            <p className="text-xs text-gray-600">{t('layer_understand_desc')}</p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT REWARDS SECTION */}
      <section className="py-20 bg-gray-50 border-y border-gray-200/60" id="platform">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-rose-600 font-semibold text-xs uppercase tracking-widest bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">{t('rewards_badge')}</span>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">{t('rewards_title')}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{t('rewards_desc')}</p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-rose-600 font-bold text-sm mb-1">{t('rew_ig_title')}</div>
                <p className="text-xs text-gray-600">{t('rew_ig_desc')}</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-amber-600 font-bold text-sm mb-1">{t('rew_google_title')}</div>
                <p className="text-xs text-gray-600">{t('rew_google_desc')}</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-purple-600 font-bold text-sm mb-1">{t('rew_bday_title')}</div>
                <p className="text-xs text-gray-600">{t('rew_bday_desc')}</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-blue-600 font-bold text-sm mb-1">{t('rew_cash_title')}</div>
                <p className="text-xs text-gray-600">{t('rew_cash_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI INTELLIGENCE SECTION */}
      <section className="py-20 bg-gray-900 text-white" id="ai-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-brandPrimary font-semibold text-xs uppercase tracking-widest bg-brandPrimary/10 px-3 py-1 rounded-full">{t('ai_badge')}</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{t('ai_section_title')}</h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{t('ai_section_desc')}</p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>{t('ai_bullet_1')}</li>
                <li>{t('ai_bullet_2')}</li>
                <li>{t('ai_bullet_3')}</li>
              </ul>
            </div>
            <div className="lg:col-span-6 bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-xl space-y-4">
              <div className="text-xs text-gray-400 font-mono">{t('ai_log_title')}</div>
              <div className="bg-gray-900 p-4 rounded-xl border border-gray-800 text-xs text-purple-300">{t('ai_log_1')}</div>
              <div className="bg-gray-900 p-4 rounded-xl border border-gray-800 text-xs text-amber-300">{t('ai_log_2')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-20 bg-white border-t border-gray-100" id="pricing">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">{t('pricing_title')}</h2>
          <p className="text-gray-600 text-sm mt-2">{t('pricing_desc')}</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900">{t('plan_monthly')}</h3>
              <div className="my-4">
                <span className="text-4xl font-extrabold">$29</span> <span className="text-gray-500 text-sm">{t('per_month')}</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li>{t('p_f1')}</li>
                <li>{t('p_f2')}</li>
                <li>{t('p_f3')}</li>
              </ul>
            </div>
            <a href="#" className="w-full bg-gray-200 text-gray-900 text-center font-semibold py-3 rounded-xl hover:bg-gray-300 transition">{t('get_started')}</a>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border-2 border-brandPrimary shadow-lg relative flex flex-col justify-between">
            <span className="absolute -top-3 right-8 bg-brandPrimary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">{t('most_popular')}</span>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{t('plan_yearly')}</h3>
              <div className="my-4">
                <span className="text-4xl font-extrabold">$290</span> <span className="text-gray-500 text-sm">{t('per_year')}</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li>{t('py_f1')}</li>
                <li>{t('py_f2')}</li>
                <li>{t('py_f3')}</li>
                <li className="text-brandPrimary font-semibold">{t('py_f4')}</li>
              </ul>
            </div>
            <a href="#" className="w-full bg-brandPrimary text-white text-center font-semibold py-3 rounded-xl hover:opacity-90 transition">{t('get_started')}</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-12 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-gray-900 mb-4">{t('footer_prod')}</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-black">{t('f_pos')}</a></li>
              <li><a href="#" className="hover:text-black">{t('f_menu')}</a></li>
              <li><a href="#" className="hover:text-black">{t('f_inv')}</a></li>
              <li><a href="#" className="hover:text-black">{t('f_loyalty')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">{t('footer_comp')}</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-black">{t('f_about')}</a></li>
              <li><a href="#" className="hover:text-black">{t('f_careers')}</a></li>
              <li><a href="#" className="hover:text-black">{t('f_contact')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">{t('footer_res')}</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-black">{t('f_docs')}</a></li>
              <li><a href="#" className="hover:text-black">{t('f_help')}</a></li>
              <li><a href="#" className="hover:text-black">{t('f_blog')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">{t('footer_legal')}</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-black">{t('f_privacy')}</a></li>
              <li><a href="#" className="hover:text-black">{t('f_terms')}</a></li>
              <li><a href="#" className="hover:text-black">{t('f_security')}</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs">
          <div>{t('copyright')}</div>
        </div>
      </footer>
    </div>
  );
}