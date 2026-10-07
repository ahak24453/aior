'use client';

import { useState, useEffect } from 'react';
import { 
  UtensilsCrossed, 
  Sparkles, 
  QrCode, 
  Gift, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight, 
  Globe, 
  CheckCircle2, 
  Smartphone, 
  Lock, 
  Mail, 
  User, 
  X,
  Store,
  ChevronRight,
  Monitor,
  Boxes,
  Wallet,
  Clock,
  Truck,
  TrendingUp,
  PieChart,
  Menu,
  Phone,
  KeyRound,
  Copy,
  Check,
  LayoutDashboard,
  ShoppingBag,
  CalendarDays,
  Users,
  Megaphone,
  Percent,
  Star,
  Package,
  ShoppingCart,
  BookOpen,
  Trash2,
  UserCheck,
  Puzzle,
  Settings,
  HelpCircle,
  Zap
} from 'lucide-react';

const translations = {
  en: {
    brand_tag: "The Ultimate 20-in-1 Restaurant Operating System",
    nav_platform: "Ecosystem",
    nav_modules: "All 20+ Modules",
    nav_architecture: "Architecture",
    nav_ai: "AI Intelligence",
    nav_pricing: "Pricing",
    login: "Login",
    signup: "Start Free Trial",
    badge_top: "The Ultimate 20-in-1 Restaurant Operating System",
    hero_title_1: "Replace Every Legacy Software With",
    hero_title_2: "One Intelligent AI Powerhouse.",
    hero_desc: "From Waiter POS and live kitchen orders, real-time P&L, smart inventory, recipe costing, waste tracking, to HR, supplier chains, and customer loyalty. Everything your restaurant needs in one masterpiece.",
    hero_btn_1: "Start Free 30-Day Trial →",
    hero_btn_2: "Explore All 20+ Modules",
    perk_1: "✓ 20+ Native Admin Modules",
    perk_2: "✓ Multi-Language (EN, AR, FR, RU, ES)",
    perk_3: "✓ Instant Setup & Zero Hardware Cost",
    
    tab_b2b: "🏢 Admin OS & Waiter POS (Desktop)",
    tab_b2c: "📱 Customer QR App & Loyalty (Mobile)",
    
    metric_rev: "NET REVENUE",
    metric_profit: "P&L PROFIT MARGIN",
    metric_staff: "ACTIVE WORK LOGS",
    metric_inv: "SMART INVENTORY",
    
    customer_view_title: "AIOR Immersive Customer Experience",
    customer_view_desc: "Customers auto-detect their location, scan table QR codes, browse gorgeous visual menus, order instantly, and collect rewards automatically.",
    sample_dish_1: "Truffle Wagyu Burger & Fries",
    sample_dish_2: "Artisan Wood-Fired Truffle Pizza",
    sample_points: "Earn 150 VIP Loyalty Points",

    ai_alert_title: "AI ENTERPRISE FINANCIAL & STOCK ADVISOR",
    ai_alert_text: "Food cost rose by 2.4% on poultry items. Recommended action: Auto-reallocate supplier orders to Supplier B, saving $340/mo instantly.",
    ai_action_btn: "Execute Smart AI Optimization",
    ai_action_progress: "Analyzing 14 Suppliers & Recalculating P&L...",
    ai_action_done: "✓ Optimized Successfully (Saved $340/mo & Zero Waste)",
    
    modules_section_title: "Every Single Tool Your Restaurant Will Ever Need",
    modules_section_desc: "No plugins. No third-party friction. 20 powerful modules engineered to work together in absolute harmony.",
    
    mod_1_title: "Live Dashboard & Analytics",
    mod_1_desc: "Instant overview of hourly sales, top dishes, and performance metrics.",
    mod_2_title: "Advanced Order Management",
    mod_2_desc: "Track dine-in, delivery, and pickup orders in real-time.",
    mod_3_title: "Table Reservations",
    mod_3_desc: "Manage floor plans, guest seating, and peak hours effortlessly.",
    mod_4_title: "Interactive Digital Menu",
    mod_4_desc: "Update categories, items, modifiers, and prices instantly.",
    mod_5_title: "Lightning POS & Waiter Terminal",
    mod_5_desc: "Ultra-fast checkout and table-side ordering for waiters.",
    mod_6_title: "Customer CRM",
    mod_6_desc: "Build comprehensive database of guest preferences and history.",
    mod_7_title: "Loyalty & Rewards Program",
    mod_7_desc: "Keep customers returning with points, tiers, and wallet passes.",
    mod_8_title: "Automated Marketing",
    mod_8_desc: "Launch SMS & email campaigns targeting inactive or VIP guests.",
    mod_9_title: "Offers & Campaigns",
    mod_9_desc: "Create flash sales, happy hours, and promo codes seamlessly.",
    mod_10_title: "Customer Reviews & Ratings",
    mod_10_desc: "Monitor feedback and turn reviews into brand reputation.",
    mod_11_title: "Smart Inventory Control",
    mod_11_desc: "Real-time stock deduction with low-level automated alerts.",
    mod_12_title: "Purchases & Stock Receiving",
    mod_12_desc: "Manage purchase orders, invoices, and stock deliveries.",
    mod_13_title: "Supplier Management Hub",
    mod_13_desc: "Compare supplier prices, contacts, and delivery performance.",
    mod_14_title: "Recipe Costing & Engineering",
    mod_14_desc: "Calculate exact food cost percentage per dish automatically.",
    mod_15_title: "Waste Management",
    mod_15_desc: "Track kitchen spoilage and waste to protect your profit margin.",
    mod_16_title: "Staff Attendance & HR",
    mod_16_desc: "Work log-in/out, shift scheduling, and payroll tracking.",
    mod_17_title: "Financials & P&L Reports",
    mod_17_desc: "Automated profit and loss statements, cash flow, and tax logs.",
    mod_18_title: "Integrations Hub",
    mod_18_desc: "Connect payment gateways, delivery aggregators, and accounting.",
    mod_19_title: "Granular Settings",
    mod_19_desc: "Configure tax rates, currencies, operating hours, and taxes.",
    mod_20_title: "24/7 Help & Support",
    mod_20_desc: "Instant AI assistance and priority human support whenever needed.",

    arch_main_title: "Unified Multi-Device Architecture",
    arch_main_desc: "Desktop power for management and mobile elegance for customers and floor staff.",
    
    pricing_title: "Predictable, Transparent Pricing",
    pricing_desc: "One simple plan unlocking all 20+ modules for single locations or global franchises.",
    plan_monthly: "Monthly Plan",
    per_month: "/ location / month",
    plan_yearly: "Annual Plan",
    per_year: "/ location / month (Billed annually)",
    save_badge: "Save $78/year — 2 Months Free",
    select_plan: "Choose Plan & Start Trial",

    modal_login_title: "Login to Your Account",
    modal_signup_title: "Create Your Account",
    account_type_label: "Account Type",
    type_restaurant: "Restaurant Owner",
    type_client: "Client / Customer",
    email_label: "Email Address",
    pass_label: "Password",
    pass_confirm_label: "Confirm Password",
    name_label: "Restaurant Name",
    fullname_label: "Full Name",
    mobile_label: "Mobile Number",
    userid_label: "Generated User ID Code",
    preferred_lang_label: "Preferred Language",
    submit_login: "Login to Dashboard",
    submit_signup: "Complete Registration",

    footer_tagline: "The world's most advanced AI Restaurant Operating System. Replacing legacy fragmentation with absolute unity.",
    copyright: "© 2026 AIOR Inc. All rights reserved."
  },
  fr: {
    brand_tag: "Le Système d'Exploitation Ultime Tout-en-Un",
    nav_platform: "Écosystème",
    nav_modules: "Les 20+ Modules",
    nav_architecture: "Architecture",
    nav_ai: "Intelligence IA",
    nav_pricing: "Tarifs",
    login: "Connexion",
    signup: "Essai Gratuit",
    badge_top: "Le Système d'Exploitation Ultime Tout-en-Un",
    hero_title_1: "Remplacez tout logiciel obsolète par",
    hero_title_2: "Un Moteur IA Ultra-Puissant.",
    hero_desc: "Du POS serveur aux commandes en direct, P&L en temps réel, inventaire intelligent, coûts des recettes, gestion du gaspillage, RH et fidélité client. Tout en un.",
    hero_btn_1: "Essai gratuit de 30 jours →",
    hero_btn_2: "Explorer les 20+ modules",
    perk_1: "✓ 20+ Modules Admin Natifs",
    perk_2: "✓ Multilingue (FR, EN, AR, RU, ES)",
    perk_3: "✓ Configuration instantanée",
    
    tab_b2b: "🏢 Admin OS & POS Serveur (Desktop)",
    tab_b2c: "📱 App Client & Fidélité (Mobile)",
    
    metric_rev: "REVENU NET",
    metric_profit: "MARGE P&L",
    metric_staff: "JOURNAUX ACTIFS",
    metric_inv: "INVENTAIRE INTELLIGENT",
    
    customer_view_title: "Expérience Client Immersive AIOR",
    customer_view_desc: "Les clients détectent leur position, scannent le QR code, parcourent le menu visuel et gagnent des récompenses instantanément.",
    sample_dish_1: "Burger Wagyu Truffé & Frites",
    sample_dish_2: "Pizza Artisanale au Feu de Bois",
    sample_points: "Gagnez 150 Points VIP",

    ai_alert_title: "CONSEILLER FINANCIER & STOCK IA",
    ai_alert_text: "Le coût des aliments a augmenté de 2.4%. Action recommandée : Réaffecter automatiquement les commandes au Fournisseur B, économie de 340$/mois.",
    ai_action_btn: "Exécuter l'Optimisation IA",
    ai_action_progress: "Analyse de 14 fournisseurs et recalcul du P&L...",
    ai_action_done: "✓ Optimisé avec succès (Économie 340$/mois)",
    
    modules_section_title: "Tous les Outils Dont Votre Restaurant Aura Jamais Besoin",
    modules_section_desc: "Pas de plugins tiers. 20 modules puissants conçus pour fonctionner en parfaite harmonie.",
    
    mod_1_title: "Tableau de Bord & Analytique",
    mod_1_desc: "Aperçu instantané des ventes horaires et des performances.",
    mod_2_title: "Gestion Avancée des Commandes",
    mod_2_desc: "Suivez sur place, en livraison et à emporter en temps réel.",
    mod_3_title: "Réservations de Tables",
    mod_3_desc: "Gérez les plans de salle, les invités et les heures de pointe.",
    mod_4_title: "Menu Numérique Interactif",
    mod_4_desc: "Mettez à jour les catégories, plats et prix instantanément.",
    mod_5_title: "POS Éclair & Terminal Serveur",
    mod_5_desc: "Encaissement ultra-rapide et prise de commande à table.",
    mod_6_title: "CRM Client",
    mod_6_desc: "Base de données complète des préférences et historique.",
    mod_7_title: "Programme de Fidélité",
    mod_7_desc: "Fidélisez avec des points, des niveaux et un portefeuille.",
    mod_8_title: "Marketing Automatisé",
    mod_8_desc: "Lancez des campagnes SMS/Email ciblées.",
    mod_9_title: "Offres & Campagnes",
    mod_9_desc: "Créez des ventes flash, happy hours et codes promo.",
    mod_10_title: "Avis & Notes Clients",
    mod_10_desc: "Surveillez les retours et renforcez votre réputation.",
    mod_11_title: "Contrôle Intelligent des Stocks",
    mod_11_desc: "Déduction en temps réel et alertes de stock bas.",
    mod_12_title: "Achats & Réception",
    mod_12_desc: "Gérez bons de commande, factures et livraisons.",
    mod_13_title: "Hub Fournisseurs",
    mod_13_desc: "Comparez les prix et performances des fournisseurs.",
    mod_14_title: "Coûts & Ingénierie des Recettes",
    mod_14_desc: "Calculez le coût alimentaire exact par plat automatiquement.",
    mod_15_title: "Gestion du Gaspillage",
    mod_15_desc: "Suivez les pertes en cuisine pour protéger vos marges.",
    mod_16_title: "Présence & RH",
    mod_16_desc: "Pointage, plannings et suivi de la paie.",
    mod_17_title: "Rapports Financiers & P&L",
    mod_17_desc: "États de profits et pertes automatisés et flux de trésorerie.",
    mod_18_title: "Hub d'Intégrations",
    mod_18_desc: "Connectez paiements, agrégateurs de livraison et compta.",
    mod_19_title: "Paramètres Avancés",
    mod_19_desc: "Configurez taxes, devises, horaires et rôles.",
    mod_20_title: "Support 24/7",
    mod_20_desc: "Assistance IA instantanée et support prioritaire.",

    arch_main_title: "Architecture Multi-Appareils Unifiée",
    arch_main_desc: "Puissance desktop pour la gestion et élégance mobile pour clients et serveurs.",
    
    pricing_title: "Tarification Transparente et Prévisible",
    pricing_desc: "Un plan unique débloquant les 20+ modules pour un ou plusieurs établissements.",
    plan_monthly: "Plan Mensuel",
    per_month: "/ établissement / mois",
    plan_yearly: "Plan Anuel",
    per_year: "/ établissement / mois (Facturé an)",
    save_badge: "Économisez 78$ / an — 2 Mois Gratuits",
    select_plan: "Choisir le plan & Démarrer",

    modal_login_title: "Connexion à votre compte",
    modal_signup_title: "Créer Votre Compte",
    account_type_label: "Type de Compte",
    type_restaurant: "Propriétaire de Restaurant",
    type_client: "Client / Consommateur",
    email_label: "Adresse Email",
    pass_label: "Mot de Passe",
    pass_confirm_label: "Confirmer le mot de passe",
    name_label: "Nom du Restaurant",
    fullname_label: "Nom Complet",
    mobile_label: "Numéro de Mobile",
    userid_label: "Code d'Identifiant Généré",
    preferred_lang_label: "Langue Préférée",
    submit_login: "Se Connecter",
    submit_signup: "Finaliser l'Inscription",

    footer_tagline: "Le système d'exploitation IA le plus avancé au monde pour restaurants.",
    copyright: "© 2026 AIOR Inc. Tous droits réservés."
  },
  ru: {
    brand_tag: "Система управления рестораном «Все в одном»",
    nav_platform: "Экосистема",
    nav_modules: "Все 20+ модулей",
    nav_architecture: "Архитектура",
    nav_ai: "ИИ Аналитика",
    nav_pricing: "Цены",
    login: "Войти",
    signup: "Начать триал",
    badge_top: "Идеальная экосистема для управления рестораном",
    hero_title_1: "Замените весь устаревший софт",
    hero_title_2: "Мощной платформой на базе ИИ.",
    hero_desc: "От POS терминалов и живых заказов до P&L в реальном времени, умного склада, техкарт, HR и программы лояльности. Всё в одном решении.",
    hero_btn_1: "Начать 30 дней бесплатно →",
    hero_btn_2: "Изучить 20+ модулей",
    perk_1: "✓ 20+ встроенных модулей",
    perk_2: "✓ Мультиязычность",
    perk_3: "✓ Быстрый запуск",
    
    tab_b2b: "🏢 Админ панель и POS (ПК)",
    tab_b2c: "📱 QR-меню и лояльность (Смартфон)",
    
    metric_rev: "ЧИСТАЯ ВЫРУЧКА",
    metric_profit: "МАРЖА P&L",
    metric_staff: "АКТИВНЫЕ СМЕНЫ",
    metric_inv: "УМНЫЙ СКЛАД",
    
    customer_view_title: "Интерактивный опыт клиентов AIOR",
    customer_view_desc: "Гости сканируют QR-код на столе, просматривают визуальное меню, делают заказ и автоматически копят бонусы.",
    sample_dish_1: "Бургер с трюфельным Вагю",
    sample_dish_2: "Пицца с трюфелем из дровяной печи",
    sample_points: "Получите 150 VIP-баллов",

    ai_alert_title: "ИИ СОВЕТНИК ПО ФИНАНСАМ И СКЛАДУ",
    ai_alert_text: "Себестоимость птицы выросла на 2.4%. Рекомендация: перенаправить заказы Поставщику B, экономя $340/мес.",
    ai_action_btn: "Запустить ИИ-оптимизацию",
    ai_action_progress: "Анализ 14 поставщиков и пересчет P&L...",
    ai_action_done: "✓ Успешно оптимизировано (Экономия $340/мес)",
    
    modules_section_title: "Все необходимые инструменты для вашего ресторана",
    modules_section_desc: "Никаких сторонних плагинов. 20 мощных модулей, работающих в идеальной гармонии.",
    
    mod_1_title: "Дашборд и аналитика",
    mod_1_desc: "Обзор продаж по часам и ключевых метрик в реальном времени.",
    mod_2_title: "Управление заказами",
    mod_2_desc: "Заказы в зале, на вынос и доставка в единой системе.",
    mod_3_title: "Бронирование столов",
    mod_3_desc: "Управление схемой зала, гостями и пик-часами.",
    mod_4_title: "Интерактивное меню",
    mod_4_desc: "Мгновенное обновление категорий, позиций и цен.",
    mod_5_title: "Быстрая POS-система",
    mod_5_desc: "Молниеносный расчет и прием заказов у столика.",
    mod_6_title: "CRM клиентов",
    mod_6_desc: "База данных предпочтений и истории гостей.",
    mod_7_title: "Программа лояльности",
    mod_7_desc: "Баллы, уровни и цифровой кошелек для удержания гостей.",
    mod_8_title: "Автомаркетинг",
    mod_8_desc: "SMS и email рассылки для VIP-гостей и спящей базы.",
    mod_9_title: "Акции и скидки",
    mod_9_desc: "Создание счастливых часов, флеш-распродаж и промокодов.",
    mod_10_title: "Отзывы и рейтинги",
    mod_10_desc: "Мониторинг обратной связи для улучшения репутации.",
    mod_11_title: "Умный контроль склада",
    mod_11_desc: "Списание в реальном времени и алерты о низких остатках.",
    mod_12_title: "Закупки и приемка",
    mod_12_desc: "Заказы на поставку, накладные и контроль поставок.",
    mod_13_title: "Хаб поставщиков",
    mod_13_desc: "Сравнение цен и эффективности работы поставщиков.",
    mod_14_title: "Калькуляция техкарт",
    mod_14_desc: "Точный расчет себестоимости каждого блюда.",
    mod_15_title: "Учет списаний и потерь",
    mod_15_desc: "Отслеживание порчи продуктов в кухне.",
    mod_16_title: "Персонал и HR",
    mod_16_desc: "Учет рабочего времени, графики и расчет зарплаты.",
    mod_17_title: "Финансы и отчеты P&L",
    mod_17_desc: "Автоматический отчет о прибылях и убытках, кэшфлоу.",
    mod_18_title: "Интеграции",
    mod_18_desc: "Подключение платежных шлюзов и служб доставки.",
    mod_19_title: "Гибкие настройки",
    mod_19_desc: "Настройка налогов, валют, часов работы и ролей.",
    mod_20_title: "Поддержка 24/7",
    mod_20_desc: "ИИ-помощник и приоритетная поддержка.",

    arch_main_title: "Единая мультиплатформенная архитектура",
    arch_main_desc: "Мощь ПК для управления и элегантность смартфонов для гостей и персонала.",
    
    pricing_title: "Простые и прозрачные цены",
    pricing_desc: "Один тариф открывает все 20+ модулей для одного или сети заведений.",
    plan_monthly: "Месячный план",
    per_month: "/ филиал / месяц",
    plan_yearly: "Годовой план",
    per_year: "/ филиал / месяц (оплата за год)",
    save_badge: "Экономия $78/год — 2 месяца в подарок",
    select_plan: "Выбрать план и начать",

    modal_login_title: "Вход в аккаунт",
    modal_signup_title: "Создать аккаунт",
    account_type_label: "Тип аккаунта",
    type_restaurant: "Владелец ресторана",
    type_client: "Клиент / Покупатель",
    email_label: "Электронная почта",
    pass_label: "Пароль",
    pass_confirm_label: "Подтвердите пароль",
    name_label: "Название ресторана",
    fullname_label: "Полное имя",
    mobile_label: "Номер мобильного",
    userid_label: "Сгенерированный код ID",
    preferred_lang_label: "Предпочитаемый язык",
    submit_login: "Войти в панель",
    submit_signup: "Завершить регистрацию",

    footer_tagline: "Современная операционная система для ресторанного бизнеса.",
    copyright: "© 2026 AIOR Inc. Все права защищены."
  },
  ar: {
    brand_tag: "النظام الشامل والأقوى عالمياً لإدارة المطاعم",
    nav_platform: "النظام المتكامل",
    nav_modules: "جميع الوحدات (20+)",
    nav_architecture: "هيكلية النظام",
    nav_ai: "الذكاء الاصطناعي",
    nav_pricing: "الأسعار",
    login: "تسجيل الدخول",
    signup: "ابدأ 30 يوماً مجاناً",
    badge_top: "النظام الشامل والأقوى عالمياً لإدارة المطاعم (20 نظاماً في منصة واحدة)",
    hero_title_1: "استبدل كل البرامج القديمة والمشتتة بـ",
    hero_title_2: "محرك ذكاء اصطناعي واحد خارق.",
    hero_desc: "من نقاط البيع (POS) ونقاط النادل، تقارير الأرباح والخسائر (P&L) لحظياً، المخزون الذكي، تكلفة الوصفات بدقة، إدارة الهدر، الموارد البشرية، الموردين، وحتى ولاء العملاء. كل ما يحتاجه مطعمك في أداة واحدة تحبس الأنفاس.",
    hero_btn_1: "ابدأ تجربتك المجانية لمدة 30 يوماً ←",
    hero_btn_2: "استكشف جميع الوحدات الـ 20+",
    perk_1: "✓ أكثر من 20 وحدة تشغيلية أساسية",
    perk_2: "✓ يدعم العربية، الفرنسية، الروسية، الإسبانية والإنجليزية",
    perk_3: "✓ إعداد فوري دون الحاجة لأجهزة معقدة",
    
    tab_b2b: "🏢 لوحة الآدمن ونقاط البيع POS (كمبيوتر Desktop)",
    tab_b2c: "📱 تطبيق الزبون وقوائم QR والولاء (هاتف Mobile)",
    
    metric_rev: "صافي الإيرادات اليومية",
    metric_profit: "هامش أرباح P&L",
    metric_staff: "سجلات الموظفين النشطة",
    metric_inv: "المخزون الذكي المؤتمت",
    
    customer_view_title: "تجربة الزبون الاستثنائية مع AIOR",
    customer_view_desc: "يتعرف الزبائن على موقعهم تلقائياً، يمسحون كود الـ QR على الطاولة، يتصفحون المنيو المرئي الفاخر، يطلبون بلمسة، ويكسبون نقاط الولاء والمكافآت فوراً.",
    sample_dish_1: "برجر واغيو بالكمأة والبطاطس المقرمشة",
    sample_dish_2: "بيتزا إيطالية أصلية بالحطب والكمأة",
    sample_points: "اكسب 150 نقطة ولاء VIP فوراً",

    ai_alert_title: "مستشار الذكاء الاصطناعي المالي والمخزوني المؤسسي",
    ai_alert_text: "ارتفعت تكلفة الدواجن بنسبة 2.4% هذا الأسبوع. الإجراء المقترح من الذكاء الاصطناعي: تحويل طلبات التوريد تلقائياً إلى المورد البديل لتوفير 340$ شهرياً فوراً.",
    ai_action_btn: "تنفيذ التحسين الذكي الشامل",
    ai_action_progress: "جارٍ تحليل أسعار 14 مورداً وإعادة حساب تقارير P&L...",
    ai_action_done: "✓ تمت الأتمتة بنجاح (تم توفير 340$ شهرياً وبدون أي هدر)",
    
    modules_section_title: "كل أداة سيحتاجها مطعمك على الإطلاق — مجتمعة في مكان واحد",
    modules_section_desc: "لا توجد برامج خارجية متفرقة ولا تكاليف إضافية. 20 وحدة برمجية فائقة التطور مصممة لتعمل معاً بتناغم مطلق.",
    
    mod_1_title: "لوحة التحكم والتحليلات الحية",
    mod_1_desc: "نظرة شاملة فورية للمبيعات بالساعة، الأطباق الأكثر طلباً، ومؤشرات الأداء.",
    mod_2_title: "إدارة الطلبات المتقدمة",
    mod_2_desc: "تتبع طلبات الصالة، التوصيل الخارجي، والاستلام في منصة واحدة وبدقة فائقة.",
    mod_3_title: "إدارة الحجوزات والطاولات",
    mod_3_desc: "تنظيم مخطط الصالة، حجوزات الزبائن، والتحكم بأوقات الذروة باحترافية.",
    mod_4_title: "قائمة الطعام الرقمية (المنيو)",
    mod_4_desc: "تحديث الأقسام، الأصناف، الإضافات، والأسعار في كافة الفروع بضغطة زر.",
    mod_5_title: "نقاط البيع السريعة وواجهة النادل",
    mod_5_desc: "سرعة فائقة في إتمام المدفوعات وطلب النادل مباشرة من الطاولة.",
    mod_6_title: "إدارة علاقات العملاء CRM",
    mod_6_desc: "قاعدة بيانات ضخمة تفصيلية لتوثيق تفضيلات الزبائن وزياراتهم السابقة.",
    mod_7_title: "برامج الولاء والمكافآت",
    mod_7_desc: "نظام نقاط ومستويات ومحفظة رقمية تضمن عودة الزبائن مراراً وتكراراً.",
    mod_8_title: "التسويق والحملات الآلية",
    mod_8_desc: "إطلاق حملات رسائل نصية وبريد إلكتروني مستهدفة للزبائن غير النشطين أو الـ VIP.",
    mod_9_title: "العروض والحملات الترويجية",
    mod_9_desc: "إنشاء عروض لفترة محدودة، ساعات سعيدة، وأكواد خصم مخصصة بكل سهولة.",
    mod_10_title: "إدارة التقييمات والآراء",
    mod_10_desc: "مراقبة آراء الزبائن وتحويل التقييمات الإيجابية لشهرة واسعة لعلامتك.",
    mod_11_title: "إدارة المخزون الذكية",
    mod_11_desc: "خصم تلقائي للمكونات مع تنبيهات فورية عند قرب نفاد أي صنف.",
    mod_12_title: "إدارة المشتريات والاستلام",
    mod_12_desc: "متابعة أوامر الشراء، فواتير الموردين، وإدخال البضائع للمخازن بدقة.",
    mod_13_title: "منصة إدارة الموردين",
    mod_13_desc: "مقارنة أسعار الموردين، تقييم سرعة التوريد، والاحتفاظ ببيانات الاتصال.",
    mod_14_title: "حساب تكاليف الوصفات (Recipe Costing)",
    mod_14_desc: "معرفة نسبة تكلفة الطعام (Food Cost) لكل طبق بدقة ملليمترية لتعظيم الأرباح.",
    mod_15_title: "إدارة الهدر وتقليل الخسائر",
    mod_15_desc: "تسجيل المفقودات والتالف في المطبخ لحماية هوامش الربح بدقة.",
    mod_16_title: "الموظفون والموارد البشرية HR",
    mod_16_desc: "تسجيل الحضور والانصراف (Work Logs)، الجداول الزمنية، وحساب الرواتب.",
    mod_17_title: "المالية وتقارير الأرباح P&L",
    mod_17_desc: "قوائم الدخل والأرباح والخسائر التلقائية، التدفق النقدي، والتقارير الضريبية.",
    mod_18_title: "منصة التكاملات الشاملة",
    mod_18_desc: "الربط مع بوابات الدفع، تطبيقات التوصيل الشهيرة، وأنظمة المحاسبة.",
    mod_19_title: "الإعدادات المتقدمة والشاملة",
    mod_19_desc: "ضبط الضرائب، العملات، أوقات العمل، وصلاحيات الموظفين بدقة تامة.",
    mod_20_title: "المساعدة والدعم الفني 24/7",
    mod_20_desc: "مساعد ذكي فوري ودعم بشري فني على مدار الساعة لخدمة أعمالك دون انقطاع.",

    arch_main_title: "هيكلية متكاملة تدعم جميع الأجهزة",
    arch_main_desc: "قوة الحاسوب لإدارة المؤسسة، وأناقة الهواتف الذكية للزبائن وفرق الخدمة في الصالة.",
    
    pricing_title: "خطط أسعار شفافة مصممة للنمو السريع",
    pricing_desc: "باقة واحدة شاملة تفتح لك جميع الوحدات الـ 20+ سواء كنت مطعماً منفرداً أو مجموعة عالمية.",
    plan_monthly: "الباقة الشهرية الشاملة",
    per_month: "/ الفرع / شهرياً",
    plan_yearly: "الباقة السنوية (الأكثر توفيراً)",
    per_year: "/ الفرع / شهرياً (تُدفع سنوياً)",
    save_badge: "وفر 78$ سنوياً — شهران مجاناً تماماً",
    select_plan: "اختر الباقة وابدأ الآن",

    modal_login_title: "تسجيل الدخول إلى حسابك",
    modal_signup_title: "إنشاء حساب جديد",
    account_type_label: "نوع الحساب",
    type_restaurant: "صاحب مطعم",
    type_client: "زبون / عميل",
    email_label: "البريد الإلكتروني",
    pass_label: "كلمة المرور",
    pass_confirm_label: "تأكيد كلمة المرور",
    name_label: "اسم المطعم",
    fullname_label: "الاسم الكامل",
    mobile_label: "رقم الهاتف المحمول",
    userid_label: "كود معرف المستخدم الفريد",
    preferred_lang_label: "اللغة المفضلة",
    submit_login: "الدخول للوحة التحكم",
    submit_signup: "إتمام التسجيل",

    footer_tagline: "نظام التشغيل الذكي الأقوى عالمياً للمطاعم. نجمع المالية، نقاط البيع، المخزون، والذكاء الاصطناعي في منصة واحدة أسطورية.",
    copyright: "© 2026 AIOR Inc. جميع الحقوق محفوظة."
  },
  es: {
    brand_tag: "El Sistema Operativo Todo en Uno Definitivo",
    nav_platform: "Ecosistema",
    nav_modules: "Los 20+ Módulos",
    nav_architecture: "Arquitectura",
    nav_ai: "Inteligencia IA",
    nav_pricing: "Precios",
    login: "Iniciar Sesión",
    signup: "Prueba Gratuita",
    badge_top: "El Sistema Operativo Todo en Uno Definitivo",
    hero_title_1: "Reemplaza cualquier software obsoleto con",
    hero_title_2: "Un Motor de IA Ultra-Potente.",
    hero_desc: "Desde TPV de camareros y pedidos en vivo, P&L en tiempo real, inventario inteligente, costos de recetas, gestión de desperdicios, RRHH y lealtad. Todo en uno.",
    hero_btn_1: "Prueba gratis de 30 días →",
    hero_btn_2: "Explorar los 20+ módulos",
    perk_1: "✓ 20+ Módulos Admin Nativos",
    perk_2: "✓ Multilingüe (ES, EN, AR, RU, FR)",
    perk_3: "✓ Configuración instantánea",
    
    tab_b2b: "🏢 Admin OS & TPV Camareros (Desktop)",
    tab_b2c: "📱 App Clientes & Lealtad (Mobile)",
    
    metric_rev: "INGRESOS NETOS",
    metric_profit: "MARGEN P&L",
    metric_staff: "TURNOS ACTIVOS",
    metric_inv: "INVENTARIO INTELIGENTE",
    
    customer_view_title: "Experiencia de Cliente Inmersiva AIOR",
    customer_view_desc: "Los clientes detectan su ubicación, escanean el QR, ven el menú visual y ganan recompensas al instante.",
    sample_dish_1: "Hamburguesa Wagyu Trufada y Patatas",
    sample_dish_2: "Pizza Artesanal al Horno de Leña",
    sample_points: "Gana 150 Puntos VIP",

    ai_alert_title: "ASESOR FINANCIERO Y DE STOCK IA",
    ai_alert_text: "El costo de alimentos subió un 2.4%. Acción recomendada: Reasignar pedidos al Proveedor B automáticamente, ahorrando $340/mes.",
    ai_action_btn: "Ejecutar Optimización IA",
    ai_action_progress: "Analizando 14 proveedores y recalculando P&L...",
    ai_action_done: "✓ Optimizado con éxito (Ahorro $340/mes)",
    
    modules_section_title: "Todas las Herramientas que Tu Restaurante Necesitará",
    modules_section_desc: "Sin plugins de terceros. 20 potentes módulos diseñados para trabajar en perfecta armonía.",
    
    mod_1_title: "Panel y Analítica en Vivo",
    mod_1_desc: "Resumen instantáneo de ventas por hora y métricas.",
    mod_2_title: "Gestión Avanzada de Pedidos",
    mod_2_desc: "Sigue pedidos en sala, para llevar y delivery en tiempo real.",
    mod_3_title: "Reservas de Mesas",
    mod_3_desc: "Gestiona planos de sala y horas pico sin esfuerzo.",
    mod_4_title: "Menú Digital Interactivo",
    mod_4_desc: "Actualiza categorías, platos y precios al instante.",
    mod_5_title: "TPV Rápido y Terminal de Camarero",
    mod_5_desc: "Cobro ultrarrápido y toma de pedidos en mesa.",
    mod_6_title: "CRM de Clientes",
    mod_6_desc: "Base de datos completa de preferencias e historial.",
    mod_7_title: "Programa de Lealtad",
    mod_7_desc: "Retén clientes con puntos, niveles y monedero digital.",
    mod_8_title: "Marketing Automatizado",
    mod_8_desc: "Lanza campañas de SMS y correo electrónico segmentadas.",
    mod_9_title: "Ofertas y Campañas",
    mod_9_desc: "Crea ventas flash, happy hours y códigos promocionales.",
    mod_10_title: "Reseñas y Calificaciones",
    mod_10_desc: "Monitorea opiniones y potencia tu reputación de marca.",
    mod_11_title: "Control Inteligente de Inventario",
    mod_11_desc: "Deducción de stock en tiempo real y alertas automáticas.",
    mod_12_title: "Compras y Recepción de Stock",
    mod_12_desc: "Gestiona órdenes de compra, facturas y entregas.",
    mod_13_title: "Centro de Proveedores",
    mod_13_desc: "Compara precios, contactos y rendimiento de proveedores.",
    mod_14_title: "Costos e Ingeniería de Recetas",
    mod_14_desc: "Calcula el costo exacto de alimentos por plato automáticamente.",
    mod_15_title: "Gestión de Desperdicios",
    mod_15_desc: "Rastrea mermas en cocina para proteger tus márgenes.",
    mod_16_title: "Asistencia y RRHH",
    mod_16_desc: "Registro de turnos, horarios y control de nómina.",
    mod_17_title: "Informes Financieros y P&L",
    mod_17_desc: "Estados de pérdidas y ganancias automatizados y flujo de caja.",
    mod_18_title: "Centro de Integraciones",
    mod_18_desc: "Conecta pasarelas de pago, delivery y contabilidad.",
    mod_19_title: "Ajustes Granulares",
    mod_19_desc: "Configura tasas de impuestos, monedas y horarios.",
    mod_20_title: "Soporte 24/7",
    mod_20_desc: "Asistencia de IA instantánea y soporte humano prioritario.",

    arch_main_title: "Arquitectura Multi-Dispositivo Unificada",
    arch_main_desc: "Poder de escritorio para la gerencia y elegancia móvil para clientes y personal.",
    
    pricing_title: "Precios Transparentes y Predecibles",
    pricing_desc: "Un plan simple que desbloquea los 20+ módulos para locales únicos o franquicias.",
    plan_monthly: "Plan Mensuel",
    per_month: "/ local / mes",
    plan_yearly: "Plan Anual",
    per_year: "/ local / mes (Facturación anual)",
    save_badge: "Ahorra $78/año — 2 Meses Gratis",
    select_plan: "Elegir plan y comenzar",

    modal_login_title: "Iniciar Sesión en tu Cuenta",
    modal_signup_title: "Crear tu Cuenta",
    account_type_label: "Tipo de Cuenta",
    type_restaurant: "Propietario de Restaurante",
    type_client: "Cliente / Consommador",
    email_label: "Correo Electrónico",
    pass_label: "Contraseña",
    pass_confirm_label: "Confirmar Contraseña",
    name_label: "Nombre del Restaurante",
    fullname_label: "Nombre Completo",
    mobile_label: "Número de Móvil",
    userid_label: "Código de ID de Usuario Generado",
    preferred_lang_label: "Idioma Preferido",
    submit_login: "Iniciar Sesión en el Panel",
    submit_signup: "Completar Registro",

    footer_tagline: "El sistema operativo de IA para restaurantes más avanzado del mundo.",
    copyright: "© 2026 AIOR Inc. Todos los derechos reservados."
  }
};

type Language = 'en' | 'fr' | 'ru' | 'ar' | 'es';
type TranslationKey = keyof typeof translations.en;

export default function UltimateRestaurantPlatform() {
  const [lang, setLang] = useState<Language>('en');
  const [authModal, setAuthModal] = useState<'none' | 'login' | 'signup'>('none');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [previewTab, setPreviewTab] = useState<'b2b' | 'b2c'>('b2b');
  const [aiState, setAiState] = useState<'idle' | 'processing' | 'done'>('idle');

  const [accountType, setAccountType] = useState<'restaurant' | 'client'>('restaurant');
  const [userIdCode, setUserIdCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (authModal === 'signup') {
      const randomId = 'USR-' + Math.floor(100000 + Math.random() * 900000);
      setUserIdCode(randomId);
      setPassword('');
      setConfirmPassword('');
      setCopied(false);
    }
  }, [authModal]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(userIdCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const t = (key: TranslationKey): string => {
    return translations[lang]?.[key] || translations['en'][key] || key;
  };

  const isRtl = lang === 'ar';

  const handleAiAction = () => {
    setAiState('processing');
    setTimeout(() => {
      setAiState('done');
    }, 1200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authModal === 'signup' && password !== confirmPassword) {
      alert(lang === 'ar' ? 'كلمات المرور غير متطابقة! يرجى التأكد.' : 'Passwords do not match! Please check.');
      return;
    }
    alert(lang === 'ar' ? 'تم بنجاح! مرحباً بك في لوحة التحكم الخاصة بك.' : 'Success! Welcome to your dashboard.');
    setAuthModal('none');
  };

  const moduleIcons = [
    <LayoutDashboard className="w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />,
    <ShoppingBag className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />,
    <CalendarDays className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />,
    <UtensilsCrossed className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />,
    <Store className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform duration-300" />,
    <Users className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform duration-300" />,
    <Gift className="w-6 h-6 text-rose-400 group-hover:scale-110 transition-transform duration-300" />,
    <Megaphone className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />,
    <Percent className="w-6 h-6 text-violet-400 group-hover:scale-110 transition-transform duration-300" />,
    <Star className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
    <Package className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform duration-300" />,
    <ShoppingCart className="w-6 h-6 text-indigo-300 group-hover:scale-110 transition-transform duration-300" />,
    <Truck className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform duration-300" />,
    <BookOpen className="w-6 h-6 text-emerald-300 group-hover:scale-110 transition-transform duration-300" />,
    <Trash2 className="w-6 h-6 text-red-400 group-hover:scale-110 transition-transform duration-300" />,
    <UserCheck className="w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform duration-300" />,
    <BarChart3 className="w-6 h-6 text-fuchsia-400 group-hover:scale-110 transition-transform duration-300" />,
    <Puzzle className="w-6 h-6 text-lime-400 group-hover:scale-110 transition-transform duration-300" />,
    <Settings className="w-6 h-6 text-slate-300 group-hover:scale-110 transition-transform duration-300" />,
    <HelpCircle className="w-6 h-6 text-amber-300 group-hover:scale-110 transition-transform duration-300" />,
  ];

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="bg-[#030305] text-gray-100 font-sans min-h-screen selection:bg-indigo-600 selection:text-white relative overflow-x-hidden">
      
      {/* خلفية جمالية متدرجة حديثة */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-transparent blur-[160px] rounded-full pointer-events-none"></div>

      {/* الهيدر العلوي */}
      <header className="sticky top-0 z-40 bg-[#030305]/80 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5 shadow-xl shadow-indigo-500/20 flex items-center justify-center">
              <div className="w-full h-full bg-[#030305] rounded-[14px] flex items-center justify-center">
                <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-white via-indigo-200 to-purple-400 bg-clip-text text-transparent">AI</span>
              </div>
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white">AIOR<span className="text-indigo-400">.Restaurant</span></span>
              <span className="block text-[8px] text-gray-400 uppercase tracking-widest">{t('brand_tag')}</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse text-xs font-bold text-gray-400">
            <a href="#platform" className="hover:text-white transition-colors">{t('nav_platform')}</a>
            <a href="#modules" className="hover:text-white transition-colors">{t('nav_modules')}</a>
            <a href="#architecture" className="hover:text-white transition-colors">{t('nav_architecture')}</a>
            <a href="#ai-section" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5 bg-indigo-950/40 px-3.5 py-2 rounded-full border border-indigo-500/30 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              {t('nav_ai')}
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">{t('nav_pricing')}</a>
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-3 rtl:space-x-reverse">
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value as Language)}
              className="bg-gray-900/90 border border-white/15 text-gray-200 text-xs font-bold rounded-xl px-3 py-2.5 focus:outline-none focus:border-indigo-500 cursor-pointer shadow-sm"
            >
              <option value="en">🇺🇸 EN</option>
              <option value="fr">🇫🇷 FR</option>
              <option value="ru">🇷🇺 RU</option>
              <option value="ar">🇸🇦 AR</option>
              <option value="es">🇪🇸 ES</option>
            </select>

            <button 
              onClick={() => setAuthModal('login')}
              className="hidden sm:inline-block text-xs font-bold text-gray-300 hover:text-white px-3 py-2 cursor-pointer transition-colors"
            >
              {t('login')}
            </button>

            <button 
              onClick={() => setAuthModal('signup')}
              className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:scale-105 active:scale-95 text-white px-4 py-2.5 rounded-xl text-xs font-black shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
            >
              {t('signup')}
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden bg-gray-900 border border-white/10 p-2.5 rounded-xl text-gray-300 hover:text-white cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-gray-900 border-b border-white/10 px-6 py-4 space-y-3 shadow-2xl">
            <a href="#platform" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-bold text-gray-300 hover:text-white py-1">{t('nav_platform')}</a>
            <a href="#modules" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-bold text-gray-300 hover:text-white py-1">{t('nav_modules')}</a>
            <a href="#architecture" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-bold text-gray-300 hover:text-white py-1">{t('nav_architecture')}</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-bold text-gray-300 hover:text-white py-1">{t('nav_pricing')}</a>
            <button onClick={() => { setAuthModal('login'); setMobileMenuOpen(false); }} className="w-full text-left text-xs font-bold text-indigo-400 py-1">{t('login')}</button>
          </div>
        )}
      </header>

      {/* البانر الرئيسي (Hero Section) */}
      <section className="relative pt-24 pb-32 overflow-hidden px-4">
        <div className="max-w-7xl mx-auto text-center space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-950/80 via-purple-950/50 to-gray-900 border border-indigo-500/40 px-5 py-2 rounded-full text-xs font-black text-indigo-300 shadow-2xl backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-indigo-400 animate-spin" />
            <span>{t('badge_top')}</span>
          </div>

          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
            <span>{t('hero_title_1')}</span> <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              {t('hero_title_2')}
            </span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto font-medium leading-relaxed">
            {t('hero_desc')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 max-w-md mx-auto sm:max-w-none">
            <button 
              onClick={() => setAuthModal('signup')}
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:scale-105 active:scale-95 text-white px-8 py-4 rounded-2xl font-black text-xs sm:text-sm shadow-2xl shadow-indigo-600/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t('hero_btn_1')}</span>
            </button>
            <a 
              href="#modules"
              className="w-full sm:w-auto bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] active:scale-95 text-gray-200 px-8 py-4 rounded-2xl font-bold text-xs sm:text-sm transition-all text-center backdrop-blur-md"
            >
              {t('hero_btn_2')}
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-400 font-bold pt-4">
            <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-indigo-400" /> {t('perk_1')}</span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-purple-400" /> {t('perk_2')}</span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> {t('perk_3')}</span>
          </div>
        </div>

        {/* تبويبات المعاينة التفاعلية B2B / B2C */}
        <div className="flex justify-center my-8">
          <div className="bg-gray-900/90 p-1.5 rounded-2xl border border-white/15 flex items-center gap-2 shadow-2xl backdrop-blur-xl">
            <button 
              onClick={() => setPreviewTab('b2b')}
              className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-2 ${previewTab === 'b2b' ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30' : 'text-gray-400 hover:text-white'}`}
            >
              <Monitor className="w-4 h-4" /> {t('tab_b2b')}
            </button>
            <button 
              onClick={() => setPreviewTab('b2c')}
              className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-2 ${previewTab === 'b2c' ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30' : 'text-gray-400 hover:text-white'}`}
            >
              <Smartphone className="w-4 h-4" /> {t('tab_b2c')}
            </button>
          </div>
        </div>

        {/* لوحة العرض الحية */}
        <div id="platform" className="max-w-6xl mx-auto bg-[#07070F]/95 rounded-[32px] p-6 sm:p-10 shadow-2xl shadow-indigo-950/80 border border-white/10 text-white backdrop-blur-2xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {previewTab === 'b2b' && (
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 text-xs text-gray-400 gap-3">
                <span className="font-black text-white flex items-center gap-2.5 text-sm">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span> 
                  AIOR ADMIN OS & WAITER POS
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3.5 py-1.5 rounded-xl text-[10px] font-black">● 20 MODULES SYNCED</span>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-6">
                <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/[0.08] hover:border-indigo-500/30 transition-all">
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider">{t('metric_rev')}</p>
                  <p className="text-xl sm:text-2xl font-black text-emerald-400 mt-2">$48,250.00</p>
                </div>
                <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/[0.08] hover:border-indigo-500/30 transition-all">
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider">{t('metric_profit')}</p>
                  <p className="text-xl sm:text-2xl font-black text-white mt-2">31.2% Net</p>
                </div>
                <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/[0.08] hover:border-indigo-500/30 transition-all">
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider">{t('metric_staff')}</p>
                  <p className="text-xl sm:text-2xl font-black text-blue-400 mt-2">18 Staff Active</p>
                </div>
                <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/[0.08] hover:border-indigo-500/30 transition-all">
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider">{t('metric_inv')}</p>
                  <p className="text-xl sm:text-2xl font-black text-amber-400 mt-2">Zero Waste</p>
                </div>
              </div>

              <div id="ai-section" className="bg-gradient-to-r from-indigo-950/70 via-purple-950/60 to-gray-900 border border-indigo-500/40 p-6 rounded-2xl text-xs sm:text-sm text-purple-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-2xl">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <span className="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-black p-3.5 rounded-2xl text-sm shadow-lg">🤖</span>
                  <div>
                    <h4 className="font-black text-white text-xs uppercase tracking-widest mb-1">{t('ai_alert_title')}</h4>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-medium">{t('ai_alert_text')}</p>
                  </div>
                </div>
                <button 
                  onClick={handleAiAction}
                  disabled={aiState !== 'idle'}
                  className={`whitespace-nowrap px-6 py-3.5 rounded-xl font-black text-xs transition-all shadow-xl cursor-pointer ${
                    aiState === 'done' ? 'bg-emerald-600 text-white cursor-default' : aiState === 'processing' ? 'bg-purple-800 text-white animate-pulse cursor-wait' : 'bg-white text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {aiState === 'idle' && t('ai_action_btn')}
                  {aiState === 'processing' && t('ai_action_progress')}
                  {aiState === 'done' && t('ai_action_done')}
                </button>
              </div>
            </div>
          )}

          {previewTab === 'b2c' && (
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 text-xs text-gray-400 gap-3">
                <span className="font-black text-white flex items-center gap-2.5 text-sm">
                  <span className="w-3 h-3 rounded-full bg-indigo-500 animate-ping"></span> 
                  {t('customer_view_title')}
                </span>
              </div>
              <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/[0.08]">
                  <span className="text-[10px] text-indigo-400 font-black uppercase">Best Seller</span>
                  <h5 className="font-black text-sm text-white mt-1">{t('sample_dish_1')}</h5>
                  <span className="text-xs text-emerald-400 font-bold mt-1 block">$18.50</span>
                </div>
                <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/[0.08]">
                  <span className="text-[10px] text-indigo-400 font-black uppercase">Chef Special</span>
                  <h5 className="font-black text-sm text-white mt-1">{t('sample_dish_2')}</h5>
                  <span className="text-xs text-emerald-400 font-bold mt-1 block">$22.00</span>
                </div>
                <div className="bg-gradient-to-br from-purple-950/60 to-gray-900 p-5 rounded-2xl border border-purple-500/40">
                  <p className="text-[10px] text-purple-300 font-black uppercase">VIP Loyalty Wallet</p>
                  <p className="text-base font-black text-white mt-1">{t('sample_points')}</p>
                </div>
              </div>
              <p className="text-xs text-gray-300 font-medium">{t('customer_view_desc')}</p>
            </div>
          )}
        </div>
      </section>

      {/* جميع الوحدات الـ 20 */}
      <section id="modules" className="py-28 bg-[#040408] border-t border-white/[0.08] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">{t('modules_section_title')}</h2>
            <p className="text-gray-400 text-base sm:text-lg mt-4 font-medium">{t('modules_section_desc')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t('mod_1_title'), desc: t('mod_1_desc') },
              { title: t('mod_2_title'), desc: t('mod_2_desc') },
              { title: t('mod_3_title'), desc: t('mod_3_desc') },
              { title: t('mod_4_title'), desc: t('mod_4_desc') },
              { title: t('mod_5_title'), desc: t('mod_5_desc') },
              { title: t('mod_6_title'), desc: t('mod_6_desc') },
              { title: t('mod_7_title'), desc: t('mod_7_desc') },
              { title: t('mod_8_title'), desc: t('mod_8_desc') },
              { title: t('mod_9_title'), desc: t('mod_9_desc') },
              { title: t('mod_10_title'), desc: t('mod_10_desc') },
              { title: t('mod_11_title'), desc: t('mod_11_desc') },
              { title: t('mod_12_title'), desc: t('mod_12_desc') },
              { title: t('mod_13_title'), desc: t('mod_13_desc') },
              { title: t('mod_14_title'), desc: t('mod_14_desc') },
              { title: t('mod_15_title'), desc: t('mod_15_desc') },
              { title: t('mod_16_title'), desc: t('mod_16_desc') },
              { title: t('mod_17_title'), desc: t('mod_17_desc') },
              { title: t('mod_18_title'), desc: t('mod_18_desc') },
              { title: t('mod_19_title'), desc: t('mod_19_desc') },
              { title: t('mod_20_title'), desc: t('mod_20_desc') },
            ].map((mod, idx) => (
              <div key={idx} className="bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 rounded-3xl border border-white/[0.08] hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300 group shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-950/80 to-purple-950/40 border border-indigo-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {moduleIcons[idx]}
                </div>
                <h3 className="text-base font-black text-white mb-2">{mod.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* هيكلية النظام (Architecture) */}
      <section id="architecture" className="py-28 bg-[#030305] border-t border-white/[0.08] px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">{t('arch_main_title')}</h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto font-medium">{t('arch_main_desc')}</p>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-start">
            <div className="bg-white/[0.02] p-8 rounded-3xl border border-white/[0.08] hover:border-indigo-500/30 transition-all">
              <span className="text-indigo-400 font-black text-xs uppercase bg-indigo-500/10 px-3 py-1 rounded-md">01 / Management</span>
              <h3 className="text-white font-black text-xl mt-4 mb-3">Restaurant Admin OS</h3>
              <p className="text-gray-400 text-xs leading-relaxed font-medium">Full desktop administrative control over P&L, inventory, HR, suppliers, recipes, and global store settings.</p>
            </div>
            <div className="bg-white/[0.02] p-8 rounded-3xl border border-white/[0.08] hover:border-purple-500/30 transition-all">
              <span className="text-purple-400 font-black text-xs uppercase bg-purple-500/10 px-3 py-1 rounded-md">02 / Floor Staff</span>
              <h3 className="text-white font-black text-xl mt-4 mb-3">Waiter POS & Work Logs</h3>
              <p className="text-gray-400 text-xs leading-relaxed font-medium">Rapid table-side ordering terminal for waiters and instant attendance punch-in/out for HR.</p>
            </div>
            <div className="bg-white/[0.02] p-8 rounded-3xl border border-white/[0.08] hover:border-emerald-500/30 transition-all">
              <span className="text-emerald-400 font-black text-xs uppercase bg-emerald-500/10 px-3 py-1 rounded-md">03 / Customers</span>
              <h3 className="text-white font-black text-xl mt-4 mb-3">Mobile QR Experience</h3>
              <p className="text-gray-400 text-xs leading-relaxed font-medium">GPS branch discovery, interactive visual menus, instant table ordering, and loyalty wallet rewards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* خطط الأسعار (Pricing) */}
      <section id="pricing" className="py-28 bg-[#040408] border-t border-white/[0.08] px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">{t('pricing_title')}</h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 font-medium">{t('pricing_desc')}</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/[0.02] p-8 rounded-3xl border border-white/[0.08] flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-white">{t('plan_monthly')}</h3>
              <div className="my-6">
                <span className="text-5xl font-black text-white">$39</span> 
                <span className="text-gray-400 text-xs font-bold block mt-1">{t('per_month')}</span>
              </div>
              <ul className="space-y-3.5 text-xs text-gray-300 mb-6 font-bold">
                <li>✓ All 20+ Admin & POS Modules</li>
                <li>✓ Real-time P&L & Financial Suite</li>
                <li>✓ Smart Inventory & Recipe Costing</li>
              </ul>
            </div>
            <button onClick={() => setAuthModal('signup')} className="w-full bg-white/10 hover:bg-white/20 text-white font-black py-3.5 rounded-2xl text-xs transition-all cursor-pointer">
              {t('select_plan')}
            </button>
          </div>

          <div className="bg-gradient-to-b from-indigo-950/70 to-white/[0.02] p-8 rounded-3xl border-2 border-indigo-500/60 shadow-2xl relative flex flex-col justify-between">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase">
              Most Popular
            </div>
            <div>
              <h3 className="text-2xl font-black text-white">{t('plan_yearly')}</h3>
              <div className="my-6">
                <span className="text-5xl font-black text-white">$32.50</span> 
                <span className="text-gray-400 text-xs font-bold block mt-1">{t('per_year')}</span>
                <span className="inline-block bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-black px-3.5 py-1.5 rounded-xl mt-3">{t('save_badge')}</span>
              </div>
              <ul className="space-y-3.5 text-xs text-gray-300 mb-6 font-bold">
                <li>✓ Everything in Monthly Plan</li>
                <li>✓ Advanced AI P&L Forecasting</li>
                <li>✓ Dedicated Priority 24/7 Support</li>
              </ul>
            </div>
            <button onClick={() => setAuthModal('signup')} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 text-white font-black py-3.5 rounded-2xl text-xs shadow-xl shadow-indigo-600/40 transition-all cursor-pointer">
              {t('select_plan')}
            </button>
          </div>
        </div>
      </section>

      {/* نافذة تسجيل الدخول / التسجيل المنبثقة (Auth Modal) مع تصحيح الاتجاهات RTL */}
      {authModal !== 'none' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-white/10 rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setAuthModal('none')}
              className="absolute top-4 start-4 text-gray-400 hover:text-white bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-lg sm:text-xl font-black text-white mb-2 mt-4 sm:mt-0">
              {authModal === 'login' ? t('modal_login_title') : t('modal_signup_title')}
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              {authModal === 'login' ? "Enter your credentials to access your dashboard." : "Fill in your details below to create your account."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-[11px] font-bold text-gray-300 mb-1">{t('preferred_lang_label')}</label>
                <div className="relative">
                  <Globe className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <select 
                    value={lang} 
                    onChange={(e) => setLang(e.target.value as Language)}
                    className="w-full bg-gray-950 border border-white/10 rounded-xl py-3 ps-10 pe-4 text-xs text-white focus:outline-none focus:border-indigo-500 cursor-pointer"
                  >
                    <option value="en">🇺🇸 English</option>
                    <option value="fr">🇫🇷 Français</option>
                    <option value="ru">🇷🇺 Русский</option>
                    <option value="ar">🇸🇦 العربية</option>
                    <option value="es">🇪🇸 Español</option>
                  </select>
                </div>
              </div>

              {authModal === 'signup' && (
                <div>
                  <label className="block text-[11px] font-bold text-gray-300 mb-1">{t('account_type_label')}</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setAccountType('restaurant')}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        accountType === 'restaurant' ? 'bg-indigo-600 border-indigo-500 text-white shadow-md' : 'bg-gray-950 border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      {t('type_restaurant')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setAccountType('client')}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        accountType === 'client' ? 'bg-indigo-600 border-indigo-500 text-white shadow-md' : 'bg-gray-950 border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      {t('type_client')}
                    </button>
                  </div>
                </div>
              )}

              {authModal === 'signup' && accountType === 'restaurant' && (
                <div>
                  <label className="block text-[11px] font-bold text-gray-300 mb-1">{t('name_label')}</label>
                  <div className="relative">
                    <Store className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input type="text" required placeholder="La Table d'Or Restaurant" className="w-full bg-gray-950 border border-white/10 rounded-xl py-3 ps-10 pe-4 text-xs text-white focus:outline-none focus:border-indigo-500" />
                  </div>
                </div>
              )}

              {authModal === 'signup' && (
                <div>
                  <label className="block text-[11px] font-bold text-gray-300 mb-1">{t('fullname_label')}</label>
                  <div className="relative">
                    <User className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input type="text" required placeholder="John Doe" className="w-full bg-gray-950 border border-white/10 rounded-xl py-3 ps-10 pe-4 text-xs text-white focus:outline-none focus:border-indigo-500" />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-bold text-gray-300 mb-1">{t('email_label')}</label>
                <div className="relative">
                  <Mail className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input type="email" required placeholder="user@example.com" className="w-full bg-gray-950 border border-white/10 rounded-xl py-3 ps-10 pe-4 text-xs text-white focus:outline-none focus:border-indigo-500" />
                </div>
              </div>

              {authModal === 'signup' && (
                <div>
                  <label className="block text-[11px] font-bold text-gray-300 mb-1">{t('mobile_label')}</label>
                  <div className="relative">
                    <Phone className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input type="tel" required placeholder="+1 (555) 000-0000" className="w-full bg-gray-950 border border-white/10 rounded-xl py-3 ps-10 pe-4 text-xs text-white focus:outline-none focus:border-indigo-500" />
                  </div>
                </div>
              )}

              {authModal === 'signup' && (
                <div>
                  <label className="block text-[11px] font-bold text-gray-300 mb-1">{t('userid_label')}</label>
                  <div className="relative flex items-center">
                    <KeyRound className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input 
                      type="text" 
                      readOnly 
                      value={userIdCode} 
                      className="w-full bg-gray-950 border border-white/10 rounded-xl py-3 ps-10 pe-24 text-xs text-indigo-400 font-mono font-bold focus:outline-none" 
                    />
                    <button
                      type="button"
                      onClick={handleCopyCode}
                      className="absolute end-2 bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-300 border border-indigo-500/30 px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-bold text-gray-300 mb-1">{t('pass_label')}</label>
                <div className="relative">
                  <Lock className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input 
                    type="password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••" 
                    className="w-full bg-gray-950 border border-white/10 rounded-xl py-3 ps-10 pe-4 text-xs text-white focus:outline-none focus:border-indigo-500" 
                  />
                </div>
              </div>

              {authModal === 'signup' && (
                <div>
                  <label className="block text-[11px] font-bold text-gray-300 mb-1">{t('pass_confirm_label')}</label>
                  <div className="relative">
                    <Lock className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input 
                      type="password" 
                      required 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••" 
                      className="w-full bg-gray-950 border border-white/10 rounded-xl py-3 ps-10 pe-4 text-xs text-white focus:outline-none focus:border-indigo-500" 
                    />
                  </div>
                </div>
              )}

              <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 active:scale-95 text-white py-3.5 rounded-xl font-black text-xs transition-all shadow-lg shadow-indigo-600/30 cursor-pointer mt-2">
                {authModal === 'login' ? t('submit_login') : t('submit_signup')}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* الفوتر */}
      <footer className="bg-[#030305] border-t border-white/[0.08] py-12 text-center text-xs text-gray-400 px-4">
        <div className="max-w-7xl mx-auto space-y-3">
          <p className="font-bold text-gray-300">{t('footer_tagline')}</p>
          <p>{t('copyright')}</p>
        </div>
      </footer>

    </div>
  );
}
