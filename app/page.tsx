'use client';

import { useState, useEffect, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';
import {
  Store, Sparkles, ArrowRight, Globe, CheckCircle2, X, Menu, Mail, Lock,
  User, Phone, KeyRound, Copy, Check, Loader2, Monitor, Boxes, PieChart,
  Clock, Truck, Gift, Star, Quote, ShieldCheck, Zap, ChevronDown, Eye, EyeOff,
  TrendingUp, QrCode, Wallet, Users, ChevronRight, Play,
} from 'lucide-react';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const translations = {
  en: {
    brand_tag: "All-In-One Restaurant Operations OS",
    nav_features: "Modules", nav_how: "How it Works", nav_pricing: "Pricing",
    login: "Login", signup: "Start Free Trial",
    hero_badge: "The all-in-one operating system for modern restaurants",
    hero_title_1: "Run your entire restaurant",
    hero_title_2: "from one powerful platform.",
    hero_desc: "POS, inventory, finance, staff, suppliers, and live P&L — alongside beautiful digital menus and automated loyalty. Everything your venue needs, in one place.",
    hero_cta: "Start 30-day free trial", hero_demo: "Explore modules",
    hero_note: "No credit card required · Cancel anytime",
    trust_label: "Trusted by modern restaurants & cafés in 40+ countries",
    stat_1_value: "12K+", stat_1_label: "Active venues",
    stat_2_value: "38%", stat_2_label: "Lower food costs",
    stat_3_value: "99.9%", stat_3_label: "Uptime SLA",
    stat_4_value: "24/7", stat_4_label: "Human support",
    feat_title: "One suite. Every operation.",
    feat_subtitle: "Replace a dozen disconnected tools with a single, elegant platform built for hospitality.",
    feat_1_title: "Smart POS & Digital Menus", feat_1_desc: "Lightning-fast point of sale with real-time digital table menus and QR ordering.",
    feat_2_title: "Inventory Control", feat_2_desc: "Automatic stock tracking with low-stock alerts and precise recipe costing.",
    feat_3_title: "Finance & Live P&L", feat_3_desc: "Real-time profit & loss, expense tracking, and revenue reports at your fingertips.",
    feat_4_title: "Staff & Attendance", feat_4_desc: "Shifts, clock-ins, payroll-ready timesheets, and performance in one view.",
    feat_5_title: "Supplier Management", feat_5_desc: "Purchase orders, vendor invoices, and delivery schedules — fully streamlined.",
    feat_6_title: "Automated Loyalty", feat_6_desc: "Turn casual guests into lifetime VIPs with points, rewards, and digital wallets.",
    how_title: "Live in minutes, not months",
    how_subtitle: "No hardware. No installs. Launch your entire operation in three simple steps.",
    how_1_title: "Create your account", how_1_desc: "Sign up free and set up your restaurant profile in under two minutes.",
    how_2_title: "Add menu, team & suppliers", how_2_desc: "Import your menu, invite staff, and connect inventory and suppliers.",
    how_3_title: "Go live & grow", how_3_desc: "Start selling, watch live P&L, and turn guests into loyal regulars.",
    testi_title: "Loved by operators worldwide",
    testi_1_text: "We replaced five different apps with one. Our food cost dropped 40% in the first quarter.",
    testi_1_name: "Sofia Marchetti", testi_1_role: "Owner · Osteria Nova",
    testi_2_text: "The live P&L and inventory alerts changed how we run every single shift.",
    testi_2_name: "Youssef El Amrani", testi_2_role: "GM · Dar Tajine",
    testi_3_text: "Setup took an afternoon. Loyalty alone brought back 2,000 returning guests.",
    testi_3_name: "Elena Petrova", testi_3_role: "Director · Nord Kitchen",
    pricing_title: "One plan. Everything included.",
    pricing_subtitle: "Start with 30 days free — no credit card, no commitment.",
    popular: "Most popular", plan_name: "All-In-One Pro", price_amount: "$99",
    per_month: "/ month after trial",
    plan_desc: "Full access to every operations module, unlimited branches, and 24/7 support.",
    feature_check: "POS, Inventory, Finance & P&L",
    plan_f2: "Unlimited staff accounts", plan_f3: "Supplier & purchase management",
    plan_f4: "Automated loyalty wallet", plan_f5: "Priority 24/7 support",
    select_plan: "Start free trial now",
    cta_title: "Ready to run smarter?",
    cta_desc: "Join thousands of venues managing everything on one platform.",
    cta_button: "Start free trial", cta_note: "30 days free · No credit card",
    modal_login_title: "Welcome back", modal_signup_title: "Create your account",
    modal_login_sub: "Enter your credentials to access your dashboard.",
    modal_signup_sub: "Fill in your details to create your account.",
    account_type_label: "Account type", type_restaurant: "Restaurant owner", type_client: "Client / customer",
    email_label: "Email address", pass_label: "Password", pass_confirm_label: "Confirm password",
    name_label: "Restaurant name", fullname_label: "Full name", mobile_label: "Mobile number",
    userid_label: "Your unique user ID", preferred_lang_label: "Preferred language",
    submit_login: "Login to dashboard", submit_signup: "Complete registration",
    err_pass_mismatch: "Passwords do not match.", err_generic: "Something went wrong. Please try again.",
    success_signup: "Account created successfully!", success_login: "Logged in successfully!",
    copied: "Copied", copy: "Copy",
    no_account_text: "Don't have an account?", create_one_link: "Create one",
    have_account_text: "Already have an account?", login_here_link: "Login here",
    footer_text: "The all-in-one operating system for modern restaurants and franchises.",
    footer_rights: "All rights reserved.", footer_product: "Product", footer_company: "Company", footer_legal: "Legal",
  },
  fr: {
    brand_tag: "OS d'exploitation tout-en-un pour restaurant",
    nav_features: "Modules", nav_how: "Fonctionnement", nav_pricing: "Tarifs",
    login: "Connexion", signup: "Essai gratuit",
    hero_badge: "Le système d'exploitation tout-en-un des restaurants modernes",
    hero_title_1: "Gérez tout votre restaurant",
    hero_title_2: "depuis une seule plateforme.",
    hero_desc: "POS, stocks, finances, personnel, fournisseurs et P&L en direct — avec de superbes menus numériques et une fidélité automatisée. Tout ce dont votre établissement a besoin, au même endroit.",
    hero_cta: "Démarrer l'essai gratuit de 30 jours", hero_demo: "Explorer les modules",
    hero_note: "Aucune carte requise · Annulable à tout moment",
    trust_label: "Adopté par des restaurants et cafés modernes dans plus de 40 pays",
    stat_1_value: "12K+", stat_1_label: "Établissements actifs",
    stat_2_value: "38%", stat_2_label: "Coûts alimentaires réduits",
    stat_3_value: "99,9%", stat_3_label: "SLA de disponibilité",
    stat_4_value: "24/7", stat_4_label: "Support humain",
    feat_title: "Une suite. Toutes vos opérations.",
    feat_subtitle: "Remplacez une dizaine d'outils dispersés par une seule plateforme élégante conçue pour l'hôtellerie-restauration.",
    feat_1_title: "POS intelligent & menus numériques", feat_1_desc: "Point de vente ultra-rapide avec menus numériques en temps réel et commande par QR.",
    feat_2_title: "Contrôle des stocks", feat_2_desc: "Suivi automatique des stocks, alertes de rupture et calcul précis du coût des recettes.",
    feat_3_title: "Finances & P&L en direct", feat_3_desc: "Compte de résultat en temps réel, suivi des dépenses et rapports de revenus.",
    feat_4_title: "Personnel & présence", feat_4_desc: "Quarts, pointages, feuilles de paie et performance en une seule vue.",
    feat_5_title: "Gestion des fournisseurs", feat_5_desc: "Bons de commande, factures fournisseurs et plannings de livraison simplifiés.",
    feat_6_title: "Fidélité automatisée", feat_6_desc: "Transformez vos clients occasionnels en VIP à vie avec points, récompenses et portefeuilles.",
    how_title: "Opérationnel en minutes, pas en mois",
    how_subtitle: "Aucun matériel. Aucune installation. Lancez toute votre activité en trois étapes.",
    how_1_title: "Créez votre compte", how_1_desc: "Inscrivez-vous gratuitement et configurez votre profil en moins de deux minutes.",
    how_2_title: "Ajoutez menu, équipe & fournisseurs", how_2_desc: "Importez votre menu, invitez le personnel et connectez stocks et fournisseurs.",
    how_3_title: "Lancez-vous & développez", how_3_desc: "Vendez, suivez votre P&L en direct et fidélisez vos clients.",
    testi_title: "Adoré par les exploitants du monde entier",
    testi_1_text: "Nous avons remplacé cinq applications par une seule. Notre coût alimentaire a chuté de 40%.",
    testi_1_name: "Sofia Marchetti", testi_1_role: "Propriétaire · Osteria Nova",
    testi_2_text: "Le P&L en direct et les alertes de stock ont changé notre façon de gérer chaque service.",
    testi_2_name: "Youssef El Amrani", testi_2_role: "Directeur · Dar Tajine",
    testi_3_text: "Configuration en un après-midi. La fidélité seule a ramené 2 000 clients.",
    testi_3_name: "Elena Petrova", testi_3_role: "Directrice · Nord Kitchen",
    pricing_title: "Une offre. Tout inclus.",
    pricing_subtitle: "Commencez avec 30 jours gratuits — sans carte, sans engagement.",
    popular: "Le plus choisi", plan_name: "Tout-en-Un Pro", price_amount: "$99",
    per_month: "/ mois après l'essai",
    plan_desc: "Accès complet à tous les modules, succursales illimitées et support 24/7.",
    feature_check: "POS, Stocks, Finances & P&L",
    plan_f2: "Comptes employés illimités", plan_f3: "Gestion des fournisseurs & achats",
    plan_f4: "Portefeuille de fidélité automatisé", plan_f5: "Support prioritaire 24/7",
    select_plan: "Démarrer l'essai gratuit",
    cta_title: "Prêt à gérer plus intelligemment ?",
    cta_desc: "Rejoignez des milliers d'établissements qui gèrent tout sur une seule plateforme.",
    cta_button: "Démarrer l'essai gratuit", cta_note: "30 jours gratuits · Sans carte",
    modal_login_title: "Bon retour", modal_signup_title: "Créez votre compte",
    modal_login_sub: "Saisissez vos identifiants pour accéder à votre tableau de bord.",
    modal_signup_sub: "Remplissez vos informations pour créer votre compte.",
    account_type_label: "Type de compte", type_restaurant: "Propriétaire de restaurant", type_client: "Client / consommateur",
    email_label: "Adresse email", pass_label: "Mot de passe", pass_confirm_label: "Confirmer le mot de passe",
    name_label: "Nom du restaurant", fullname_label: "Nom complet", mobile_label: "Numéro de mobile",
    userid_label: "Votre identifiant unique", preferred_lang_label: "Langue préférée",
    submit_login: "Se connecter", submit_signup: "Finaliser l'inscription",
    err_pass_mismatch: "Les mots de passe ne correspondent pas.", err_generic: "Une erreur est survenue. Veuillez réessayer.",
    success_signup: "Compte créé avec succès !", success_login: "Connexion réussie !",
    copied: "Copié", copy: "Copier",
    no_account_text: "Vous n'avez pas de compte ?", create_one_link: "Créer un compte",
    have_account_text: "Vous avez déjà un compte ?", login_here_link: "Connectez-vous",
    footer_text: "Le système d'exploitation tout-en-un des restaurants et franchises modernes.",
    footer_rights: "Tous droits réservés.", footer_product: "Produit", footer_company: "Entreprise", footer_legal: "Légal",
  },
  ru: {
    brand_tag: "Все-в-одном ОС для ресторанов",
    nav_features: "Модули", nav_how: "Как это работает", nav_pricing: "Цены",
    login: "Войти", signup: "Пробный период",
    hero_badge: "Единая операционная система для современных ресторанов",
    hero_title_1: "Управляйте всем рестораном",
    hero_title_2: "с одной мощной платформы.",
    hero_desc: "POS, склад, финансы, персонал, поставщики и P&L в реальном времени — вместе с красивым цифровым меню и авто-лояльностью. Всё в одном месте.",
    hero_cta: "Начать 30 дней бесплатно", hero_demo: "Посмотреть модули",
    hero_note: "Без карты · Отмена в любой момент",
    trust_label: "Нам доверяют современные рестораны и кафе в 40+ странах",
    stat_1_value: "12K+", stat_1_label: "Активных заведений",
    stat_2_value: "38%", stat_2_label: "Снижение расходов",
    stat_3_value: "99,9%", stat_3_label: "Доступность",
    stat_4_value: "24/7", stat_4_label: "Поддержка",
    feat_title: "Одна система. Все операции.",
    feat_subtitle: "Замените десяток разрозненных сервисов одной элегантной платформой для ресторанов.",
    feat_1_title: "Умный POS и цифровое меню", feat_1_desc: "Молниеносная касса с цифровым меню и заказом по QR-коду.",
    feat_2_title: "Контроль запасов", feat_2_desc: "Автоматический учёт остатков, оповещения и точная калькуляция блюд.",
    feat_3_title: "Финансы и P&L", feat_3_desc: "Отчёт о прибылях и убытках в реальном времени, расходы и доходы.",
    feat_4_title: "Персонал и посещаемость", feat_4_desc: "Смены, отметки, табели для зарплаты и эффективность в одном окне.",
    feat_5_title: "Управление поставщиками", feat_5_desc: "Заказы, счета поставщиков и графики поставок — без лишних усилий.",
    feat_6_title: "Автоматическая лояльность", feat_6_desc: "Превращайте гостей в постоянных VIP с бонусами и кошельками.",
    how_title: "Запуск за минуты, а не месяцы",
    how_subtitle: "Без оборудования и установок. Запустите всё в три шага.",
    how_1_title: "Создайте аккаунт", how_1_desc: "Зарегистрируйтесь бесплатно и настройте профиль менее чем за две минуты.",
    how_2_title: "Добавьте меню, команду и поставщиков", how_2_desc: "Импортируйте меню, пригласите сотрудников, подключите склад.",
    how_3_title: "Запускайтесь и растите", how_3_desc: "Продавайте, следите за P&L и превращайте гостей в постоянных.",
    testi_title: "Нас любят рестораторы по всему миру",
    testi_1_text: "Мы заменили пять приложений одним. Расходы на продукты упали на 40%.",
    testi_1_name: "София Маркетти", testi_1_role: "Владелец · Osteria Nova",
    testi_2_text: "Живой P&L и оповещения о запасах изменили каждую смену.",
    testi_2_name: "Юссеф Эль Амрани", testi_2_role: "Управляющий · Dar Tajine",
    testi_3_text: "Настройка заняла вечер. Одна лояльность вернула 2000 гостей.",
    testi_3_name: "Елена Петрова", testi_3_role: "Директор · Nord Kitchen",
    pricing_title: "Один тариф. Всё включено.",
    pricing_subtitle: "Начните с 30 дней бесплатно — без карты и обязательств.",
    popular: "Популярный", plan_name: "Все-в-одном Про", price_amount: "$99",
    per_month: "/ месяц после триала",
    plan_desc: "Полный доступ ко всем модулям, неограниченные филиалы и поддержка 24/7.",
    feature_check: "POS, склад, финансы и P&L",
    plan_f2: "Неограниченные аккаунты персонала", plan_f3: "Управление поставщиками и закупками",
    plan_f4: "Автоматический кошелёк лояльности", plan_f5: "Приоритетная поддержка 24/7",
    select_plan: "Начать бесплатно",
    cta_title: "Готовы работать умнее?",
    cta_desc: "Присоединяйтесь к тысячам заведений на одной платформе.",
    cta_button: "Начать бесплатно", cta_note: "30 дней бесплатно · Без карты",
    modal_login_title: "С возвращением", modal_signup_title: "Создайте аккаунт",
    modal_login_sub: "Введите данные для входа в панель.",
    modal_signup_sub: "Заполните данные для создания аккаунта.",
    account_type_label: "Тип аккаунта", type_restaurant: "Владелец ресторана", type_client: "Клиент / покупатель",
    email_label: "Электронная почта", pass_label: "Пароль", pass_confirm_label: "Подтвердите пароль",
    name_label: "Название ресторана", fullname_label: "Полное имя", mobile_label: "Номер мобильного",
    userid_label: "Ваш уникальный ID", preferred_lang_label: "Предпочитаемый язык",
    submit_login: "Войти в панель", submit_signup: "Завершить регистрацию",
    err_pass_mismatch: "Пароли не совпадают.", err_generic: "Что-то пошло не так. Попробуйте снова.",
    success_signup: "Аккаунт успешно создан!", success_login: "Вход выполнен!",
    copied: "Скопировано", copy: "Копировать",
    no_account_text: "Нет аккаунта?", create_one_link: "Создать",
    have_account_text: "Уже есть аккаунт?", login_here_link: "Войти",
    footer_text: "Единая операционная система для современных ресторанов и сетей.",
    footer_rights: "Все права защищены.", footer_product: "Продукт", footer_company: "Компания", footer_legal: "Правовое",
  },
  ar: {
    brand_tag: "النظام الشامل لإدارة وتشغيل المطاعم",
    nav_features: "الوحدات", nav_how: "كيف يعمل", nav_pricing: "الأسعار",
    login: "تسجيل الدخول", signup: "ابدأ مجاناً",
    hero_badge: "نظام التشغيل المتكامل للمطاعم العصرية",
    hero_title_1: "أدر مطعمك بالكامل",
    hero_title_2: "من منصة واحدة قوية.",
    hero_desc: "نقاط البيع، المخزون، المالية، الموظفون، الموردون وتحليلات الأرباح الفورية — مع منيو رقمي أنيق وبرنامج ولاء تلقائي. كل ما يحتاجه مطعمك في مكان واحد.",
    hero_cta: "ابدأ 30 يوماً مجاناً", hero_demo: "استكشف الوحدات",
    hero_note: "بدون بطاقة ائتمانية · إلغاء في أي وقت",
    trust_label: "يثق بنا مطاعم ومقاهٍ عصرية في أكثر من 40 دولة",
    stat_1_value: "+12K", stat_1_label: "منشأة نشطة",
    stat_2_value: "38%", stat_2_label: "انخفاض تكاليف الطعام",
    stat_3_value: "99.9%", stat_3_label: "جهوزية النظام",
    stat_4_value: "24/7", stat_4_label: "دعم بشري",
    feat_title: "منظومة واحدة. كل العمليات.",
    feat_subtitle: "استغن عن عشرات الأدوات المتناثرة بمنصة واحدة أنيقة مبنية لقطاع الضيافة.",
    feat_1_title: "نقاط بيع ذكية ومنيو رقمي", feat_1_desc: "كاشير فائق السرعة مع منيو رقمي فوري وطلب عبر أكواد QR.",
    feat_2_title: "إدارة المخزون", feat_2_desc: "تتبع تلقائي للمخزون مع تنبيهات النقص وحساب دقيق لتكلفة الوصفات.",
    feat_3_title: "المالية والأرباح الفورية", feat_3_desc: "تقارير أرباح وخسائر لحظية، تتبع المصروفات، وتقارير الإيرادات.",
    feat_4_title: "الموظفون والحضور", feat_4_desc: "الورديات، تسجيل الحضور، كشوف رواتب جاهزة، ومتابعة الأداء في شاشة واحدة.",
    feat_5_title: "إدارة الموردين", feat_5_desc: "أوامر الشراء، فواتير الموردين، وجداول التوريد بسلاسة تامة.",
    feat_6_title: "ولاء تلقائي", feat_6_desc: "حوّل زوارك العاديين إلى عملاء VIP دائمين بنقاط ومكافآت ومحافظ رقمية.",
    how_title: "انطلق في دقائق لا شهور",
    how_subtitle: "بدون أجهزة. بدون تثبيت. أطلق عملك بالكامل في ثلاث خطوات.",
    how_1_title: "أنشئ حسابك", how_1_desc: "سجّل مجاناً وأنشئ ملف مطعمك في أقل من دقيقتين.",
    how_2_title: "أضف المنيو والفريق والموردين", how_2_desc: "استورد منيوك، ادعُ موظفيك، واربط المخزون والموردين.",
    how_3_title: "انطلق وطوّر", how_3_desc: "ابدأ البيع، تابع أرباحك لحظياً، وحوّل الزوار إلى عملاء دائمين.",
    testi_title: "محبوب من أصحاب المطاعم حول العالم",
    testi_1_text: "استبدلنا خمس تطبيقات بواحدة. انخفضت تكلفة الطعام لدينا بنسبة 40%.",
    testi_1_name: "صوفيا ماركيتي", testi_1_role: "مالكة · Osteria Nova",
    testi_2_text: "تقارير الأرباح الفورية وتنبيهات المخزون غيّرت طريقة إدارتنا لكل وردية.",
    testi_2_name: "يوسف العمراني", testi_2_role: "مدير عام · Dar Tajine",
    testi_3_text: "الإعداد استغرق ظهيرة واحدة. برنامج الولاء وحده أعاد 2000 زبون.",
    testi_3_name: "إيلينا بتروفا", testi_3_role: "مديرة · Nord Kitchen",
    pricing_title: "باقة واحدة. كل شيء مشمول.",
    pricing_subtitle: "ابدأ بـ 30 يوماً مجاناً — بدون بطاقة وبدون التزام.",
    popular: "الأكثر اختياراً", plan_name: "الباقة الشاملة الاحترافية", price_amount: "$99",
    per_month: "/ شهرياً بعد التجربة",
    plan_desc: "وصول كامل لجميع الوحدات، فروع غير محدودة، ودعم على مدار الساعة.",
    feature_check: "نقاط البيع، المخزون، المالية والأرباح",
    plan_f2: "حسابات موظفين غير محدودة", plan_f3: "إدارة الموردين والمشتريات",
    plan_f4: "محفظة ولاء تلقائية", plan_f5: "دعم ذو أولوية 24/7",
    select_plan: "ابدأ التجربة المجانية الآن",
    cta_title: "جاهز لإدارة أذكى؟",
    cta_desc: "انضم لآلاف المنشآت التي تدير كل شيء من منصة واحدة.",
    cta_button: "ابدأ التجربة المجانية", cta_note: "30 يوماً مجاناً · بدون بطاقة",
    modal_login_title: "مرحباً بعودتك", modal_signup_title: "أنشئ حسابك",
    modal_login_sub: "أدخل بياناتك للدخول إلى لوحة التحكم.",
    modal_signup_sub: "املأ بياناتك لإنشاء حسابك.",
    account_type_label: "نوع الحساب", type_restaurant: "صاحب مطعم", type_client: "زبون / عميل",
    email_label: "البريد الإلكتروني", pass_label: "كلمة المرور", pass_confirm_label: "تأكيد كلمة المرور",
    name_label: "اسم المطعم", fullname_label: "الاسم الكامل", mobile_label: "رقم الهاتف",
    userid_label: "معرّف المستخدم الفريد", preferred_lang_label: "اللغة المفضلة",
    submit_login: "الدخول للوحة التحكم", submit_signup: "إتمام التسجيل",
    err_pass_mismatch: "كلمتا المرور غير متطابقتين.", err_generic: "حدث خطأ ما. حاول مرة أخرى.",
    success_signup: "تم إنشاء الحساب بنجاح!", success_login: "تم تسجيل الدخول بنجاح!",
    copied: "تم النسخ", copy: "نسخ",
    no_account_text: "ليس لديك حساب؟", create_one_link: "أنشئ حساباً",
    have_account_text: "لديك حساب بالفعل؟", login_here_link: "سجل دخولك",
    footer_text: "نظام التشغيل المتكامل للمطاعم والسلاسل العصرية.",
    footer_rights: "جميع الحقوق محفوظة.", footer_product: "المنتج", footer_company: "الشركة", footer_legal: "قانوني",
  },
  es: {
    brand_tag: "SO integral de operaciones para restaurantes",
    nav_features: "Módulos", nav_how: "Cómo funciona", nav_pricing: "Precios",
    login: "Iniciar sesión", signup: "Prueba gratis",
    hero_badge: "El sistema operativo integral para restaurantes modernos",
    hero_title_1: "Administra todo tu restaurante",
    hero_title_2: "desde una sola plataforma.",
    hero_desc: "POS, inventario, finanzas, personal, proveedores y P&L en vivo — junto a menús digitales y lealtad automatizada. Todo en un solo lugar.",
    hero_cta: "Iniciar prueba de 30 días", hero_demo: "Explorar módulos",
    hero_note: "Sin tarjeta · Cancela cuando quieras",
    trust_label: "Con la confianza de restaurantes y cafés en más de 40 países",
    stat_1_value: "12K+", stat_1_label: "Locales activos",
    stat_2_value: "38%", stat_2_label: "Menos costes de comida",
    stat_3_value: "99,9%", stat_3_label: "Disponibilidad",
    stat_4_value: "24/7", stat_4_label: "Soporte humano",
    feat_title: "Una suite. Todas tus operaciones.",
    feat_subtitle: "Reemplaza una docena de herramientas dispersas con una sola plataforma elegante.",
    feat_1_title: "POS inteligente y menús digitales", feat_1_desc: "Punto de venta ultrarrápido con menús digitales en vivo y pedidos por QR.",
    feat_2_title: "Control de inventario", feat_2_desc: "Seguimiento automático de stock, alertas de falta y coste preciso de recetas.",
    feat_3_title: "Finanzas y P&L en vivo", feat_3_desc: "Pérdidas y ganancias en tiempo real, gastos e informes de ingresos.",
    feat_4_title: "Personal y asistencia", feat_4_desc: "Turnos, fichajes, nóminas listas y rendimiento en una sola vista.",
    feat_5_title: "Gestión de proveedores", feat_5_desc: "Órdenes de compra, facturas y entregas totalmente simplificadas.",
    feat_6_title: "Lealtad automatizada", feat_6_desc: "Convierte clientes ocasionales en VIP de por vida con puntos y monederos.",
    how_title: "En marcha en minutos, no meses",
    how_subtitle: "Sin hardware ni instalaciones. Lanza tu operación en tres pasos.",
    how_1_title: "Crea tu cuenta", how_1_desc: "Regístrate gratis y configura tu perfil en menos de dos minutos.",
    how_2_title: "Añade menú, equipo y proveedores", how_2_desc: "Importa tu menú, invita al personal y conecta inventario y proveedores.",
    how_3_title: "Sal en vivo y crece", how_3_desc: "Vende, sigue tu P&L en vivo y fideliza a tus clientes.",
    testi_title: "Amado por operadores de todo el mundo",
    testi_1_text: "Reemplazamos cinco apps por una. Nuestro coste de comida cayó un 40%.",
    testi_1_name: "Sofia Marchetti", testi_1_role: "Propietaria · Osteria Nova",
    testi_2_text: "El P&L en vivo y las alertas de stock cambiaron cada turno.",
    testi_2_name: "Youssef El Amrani", testi_2_role: "Gerente · Dar Tajine",
    testi_3_text: "La configuración tomó una tarde. Solo la lealtad trajo 2.000 clientes.",
    testi_3_name: "Elena Petrova", testi_3_role: "Directora · Nord Kitchen",
    pricing_title: "Un plan. Todo incluido.",
    pricing_subtitle: "Empieza con 30 días gratis — sin tarjeta ni compromiso.",
    popular: "Más popular", plan_name: "Todo en Uno Pro", price_amount: "$99",
    per_month: "/ mes tras la prueba",
    plan_desc: "Acceso completo a todos los módulos, sucursales ilimitadas y soporte 24/7.",
    feature_check: "POS, Inventario, Finanzas y P&L",
    plan_f2: "Cuentas de personal ilimitadas", plan_f3: "Gestión de proveedores y compras",
    plan_f4: "Monedero de lealtad automatizado", plan_f5: "Soporte prioritario 24/7",
    select_plan: "Iniciar prueba gratis",
    cta_title: "¿Listo para gestionar mejor?",
    cta_desc: "Únete a miles de locales que gestionan todo en una sola plataforma.",
    cta_button: "Iniciar prueba gratis", cta_note: "30 días gratis · Sin tarjeta",
    modal_login_title: "Bienvenido de nuevo", modal_signup_title: "Crea tu cuenta",
    modal_login_sub: "Introduce tus datos para acceder a tu panel.",
    modal_signup_sub: "Completa tus datos para crear tu cuenta.",
    account_type_label: "Tipo de cuenta", type_restaurant: "Propietario de restaurante", type_client: "Cliente / consumidor",
    email_label: "Correo electrónico", pass_label: "Contraseña", pass_confirm_label: "Confirmar contraseña",
    name_label: "Nombre del restaurante", fullname_label: "Nombre completo", mobile_label: "Número de móvil",
    userid_label: "Tu ID de usuario único", preferred_lang_label: "Idioma preferido",
    submit_login: "Entrar al panel", submit_signup: "Completar registro",
    err_pass_mismatch: "Las contraseñas no coinciden.", err_generic: "Algo salió mal. Inténtalo de nuevo.",
    success_signup: "¡Cuenta creada con éxito!", success_login: "¡Sesión iniciada!",
    copied: "Copiado", copy: "Copiar",
    no_account_text: "¿No tienes cuenta?", create_one_link: "Crea una",
    have_account_text: "¿Ya tienes cuenta?", login_here_link: "Inicia sesión",
    footer_text: "El sistema operativo integral para restaurantes y franquicias modernas.",
    footer_rights: "Todos los derechos reservados.", footer_product: "Producto", footer_company: "Empresa", footer_legal: "Legal",
  },
};

type Language = 'en' | 'fr' | 'ru' | 'ar' | 'es';
type TranslationKey = keyof typeof translations.en;

const LANGS: { code: Language; label: string; short: string; flag: string }[] = [
  { code: 'en', label: 'English', short: 'EN', flag: '🇺🇸' },
  { code: 'fr', label: 'Français', short: 'FR', flag: '🇫🇷' },
  { code: 'ru', label: 'Русский', short: 'RU', flag: '🇷🇺' },
  { code: 'ar', label: 'العربية', short: 'AR', flag: '🇸🇦' },
  { code: 'es', label: 'Español', short: 'ES', flag: '🇪🇸' },
];

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}>
      {children}
    </div>
  );
}

export default function AllInOneRestaurantPlatform() {
  const [lang, setLang] = useState<Language>('en');
  const [authModal, setAuthModal] = useState<'none' | 'login' | 'signup'>('none');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [showPass, setShowPass] = useState(false);

  const [accountType, setAccountType] = useState<'restaurant' | 'client'>('restaurant');
  const [userIdCode, setUserIdCode] = useState('');
  const [copied, setCopied] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [restaurantName, setRestaurantName] = useState('');

  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setAuthModal('none'); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    setFormError(''); setFormSuccess(''); setShowPass(false);
    if (authModal === 'signup') {
      setUserIdCode('USR-' + Math.floor(100000 + Math.random() * 900000));
      setEmail(''); setPassword(''); setConfirmPassword('');
      setFullName(''); setMobileNumber(''); setRestaurantName('');
      setAccountType('restaurant'); setCopied(false);
    } else if (authModal === 'login') {
      setEmail(''); setPassword('');
    }
  }, [authModal]);

  const t = (key: TranslationKey): string => translations[lang]?.[key] || translations.en[key] || key;
  const isRtl = lang === 'ar';

  const handleCopyCode = () => {
    navigator.clipboard.writeText(userIdCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(''); setFormSuccess('');

    if (authModal === 'signup' && password !== confirmPassword) {
      setFormError(t('err_pass_mismatch'));
      return;
    }
    setLoading(true);
    try {
      if (authModal === 'signup') {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
              mobile_number: mobileNumber,
              account_type: accountType,
              user_id_code: userIdCode,
              preferred_language: lang,
              restaurant_name: accountType === 'restaurant' ? restaurantName : null,
            },
          },
        });
        if (error) throw error;
        setFormSuccess(t('success_signup'));
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        setFormSuccess(t('success_login'));
      }
      setTimeout(() => setAuthModal('none'), 1100);
    } catch (err: any) {
      setFormError(err?.message || t('err_generic'));
    } finally {
      setLoading(false);
    }
  };

  const features = [
    { icon: Monitor, c: 'indigo', t: 'feat_1_title', d: 'feat_1_desc' },
    { icon: Boxes, c: 'violet', t: 'feat_2_title', d: 'feat_2_desc' },
    { icon: PieChart, c: 'emerald', t: 'feat_3_title', d: 'feat_3_desc' },
    { icon: Clock, c: 'amber', t: 'feat_4_title', d: 'feat_4_desc' },
    { icon: Truck, c: 'pink', t: 'feat_5_title', d: 'feat_5_desc' },
    { icon: Gift, c: 'blue', t: 'feat_6_title', d: 'feat_6_desc' },
  ] as const;

  const colorMap: Record<string, string> = {
    indigo: 'bg-indigo-500/10 text-indigo-400 ring-indigo-500/20',
    violet: 'bg-violet-500/10 text-violet-400 ring-violet-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-400 ring-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-400 ring-amber-500/20',
    pink: 'bg-pink-500/10 text-pink-400 ring-pink-500/20',
    blue: 'bg-blue-500/10 text-blue-400 ring-blue-500/20',
  };

  const steps = [
    { icon: User, t: 'how_1_title', d: 'how_1_desc' },
    { icon: Users, t: 'how_2_title', d: 'how_2_desc' },
    { icon: TrendingUp, t: 'how_3_title', d: 'how_3_desc' },
  ] as const;

  const inputBase = "w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 ps-11 pe-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20 transition";
  const iconInput = "absolute start-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none";

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'}
      className="bg-[#05060A] text-gray-100 font-sans min-h-screen overflow-x-hidden scroll-smooth selection:bg-indigo-600 selection:text-white">

      <style>{`
        @keyframes floaty { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
        @keyframes shimmer { 0% { background-position: -200% 0 } 100% { background-position: 200% 0 } }
        .anim-float { animation: floaty 6s ease-in-out infinite; }
        .gradient-text { background-size: 200% auto; animation: shimmer 6s linear infinite; }
      `}</style>

      {/* ============ HEADER ============ */}
      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#05060A]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
          <a href="#" className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-600/30">
              <Store className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="text-sm sm:text-lg font-black tracking-tight text-white">All-In-One<span className="text-indigo-400">.Restaurant</span></span>
              <span className="hidden sm:block text-[9px] text-gray-500 uppercase tracking-[0.2em] font-bold">{t('brand_tag')}</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-9 text-[13px] font-bold text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">{t('nav_features')}</a>
            <a href="#how" className="hover:text-white transition-colors">{t('nav_how')}</a>
            <a href="#pricing" className="hover:text-white transition-colors">{t('nav_pricing')}</a>
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Lang dropdown */}
            <div className="relative" ref={langRef}>
              <button onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 bg-white/[0.04] border border-white/10 text-gray-200 text-[11px] sm:text-xs font-bold rounded-xl px-2 py-2 hover:border-white/20 transition cursor-pointer">
                <Globe className="w-3.5 h-3.5 text-gray-400" />
                <span>{LANGS.find(l => l.code === lang)?.short}</span>
                <ChevronDown className={`w-3 h-3 text-gray-500 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute end-0 mt-2 w-44 bg-[#0B0D14] border border-white/10 rounded-2xl p-1.5 shadow-2xl shadow-black/50 z-50">
                  {LANGS.map(l => (
                    <button key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition ${lang === l.code ? 'bg-indigo-500/15 text-indigo-300' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
                      <span className="text-sm">{l.flag}</span>
                      <span>{l.label}</span>
                      {lang === l.code && <Check className="w-3.5 h-3.5 ms-auto" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login button */}
            <button onClick={() => setAuthModal('login')}
              className="text-[11px] sm:text-xs font-bold text-gray-300 hover:text-white px-1.5 sm:px-2 py-2 cursor-pointer transition-colors shrink-0">
              {t('login')}
            </button>

            {/* Signup button */}
            <button onClick={() => setAuthModal('signup')}
              className="bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-black shadow-lg shadow-indigo-600/25 transition-all cursor-pointer shrink-0">
              {t('signup')}
            </button>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden bg-white/[0.04] border border-white/10 p-2 rounded-xl text-gray-300 hover:text-white cursor-pointer shrink-0">
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0B0D14] border-b border-white/10 px-6 py-4 space-y-1">
            {[['#features', 'nav_features'], ['#how', 'nav_how'], ['#pricing', 'nav_pricing']].map(([h, k]) => (
              <a key={h} href={h} onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-bold text-gray-300 hover:text-white py-2">{t(k as TranslationKey)}</a>
            ))}
          </div>
        )}
      </header>

      {/* ============ HERO ============ */}
      <section className="relative pt-16 sm:pt-24 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 start-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/15 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-40 end-10 w-[300px] h-[300px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-indigo-950/60 border border-indigo-500/25 px-4 py-2 rounded-full text-[11px] sm:text-xs font-bold text-indigo-300 shadow-xl">
              <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>{t('hero_badge')}</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
              {t('hero_title_1')} <br />
              <span className="gradient-text bg-gradient-to-r from-indigo-400 via-violet-300 to-pink-400 bg-clip-text text-transparent">
                {t('hero_title_2')}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              {t('hero_desc')}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-8 max-w-md mx-auto sm:max-w-none">
              <button onClick={() => setAuthModal('signup')}
                className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 active:scale-95 text-white px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer">
                <span>{t('hero_cta')}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180 shrink-0" />
              </button>
              <a href="#features"
                className="w-full sm:w-auto bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] active:scale-95 text-gray-200 px-8 py-4 rounded-2xl font-bold text-sm transition-all text-center flex items-center justify-center gap-2">
                <Play className="w-4 h-4" /> {t('hero_demo')}
              </a>
            </div>
            <p className="mt-4 text-[11px] text-gray-500 font-semibold">{t('hero_note')}</p>
          </Reveal>

          {/* Dashboard mockup */}
          <Reveal delay={320}>
            <div className="relative mx-auto mt-16 max-w-4xl anim-float">
              <div className="absolute -inset-6 bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-amber-400/10 blur-3xl rounded-[2.5rem] pointer-events-none" />
              <div className="relative rounded-2xl border border-white/10 bg-[#0A0C12]/95 backdrop-blur-xl shadow-2xl shadow-black/60 overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 h-10 border-b border-white/[0.06] bg-white/[0.02]">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  <div className="mx-auto flex items-center gap-1.5 text-[10px] text-gray-500 bg-white/[0.03] border border-white/[0.06] rounded-md px-3 py-1">
                    <Lock className="w-2.5 h-2.5" /> app.allinone.restaurant
                  </div>
                </div>
                <div className="grid grid-cols-12 min-h-[280px]">
                  <aside className="hidden sm:flex col-span-3 lg:col-span-2 flex-col gap-1 border-e border-white/[0.06] p-3 bg-white/[0.01]">
                    <div className="flex items-center gap-2 mb-3 px-1">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center">
                        <Store className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-[10px] font-black text-white">Dashboard</span>
                    </div>
                    {['POS', 'Inventory', 'Finance', 'Staff', 'Suppliers', 'Loyalty'].map((x, i) => (
                      <div key={x} className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[10px] font-semibold ${i === 0 ? 'bg-indigo-500/15 text-indigo-300' : 'text-gray-500'}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" /> {x}
                      </div>
                    ))}
                  </aside>
                  <main className="col-span-12 sm:col-span-9 lg:col-span-10 p-3 sm:p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-start">
                        <div className="text-[11px] font-black text-white">Today's Overview</div>
                        <div className="text-[9px] text-gray-500">Live · updated just now</div>
                      </div>
                      <div className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { l: 'Revenue', v: '$4,820', d: '+12%' },
                        { l: 'Orders', v: '312', d: '+8%' },
                        { l: 'Food cost', v: '28%', d: '-4%' },
                      ].map(s => (
                        <div key={s.l} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5 text-start">
                          <div className="text-[8px] text-gray-500 font-bold uppercase tracking-wide">{s.l}</div>
                          <div className="text-sm font-black text-white mt-0.5">{s.v}</div>
                          <div className="text-[8px] font-bold text-emerald-400">{s.d}</div>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                      <div className="flex items-end gap-1.5 h-20">
                        {[40, 65, 50, 80, 60, 95, 72, 88, 55, 70, 92, 78].map((h, i) => (
                          <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-indigo-600/40 to-violet-400/80" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <p className="mt-12 text-[11px] uppercase tracking-[0.2em] font-bold text-gray-500">{t('trust_label')}</p>
          </Reveal>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="border-y border-white/[0.06] bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            ['stat_1_value', 'stat_1_label'], ['stat_2_value', 'stat_2_label'],
            ['stat_3_value', 'stat_3_label'], ['stat_4_value', 'stat_4_label'],
          ].map(([v, l], i) => (
            <Reveal key={v} delay={i * 70} className="text-center">
              <div className="text-3xl sm:text-4xl font-black bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">{t(v as TranslationKey)}</div>
              <div className="text-[11px] sm:text-xs text-gray-500 font-bold mt-1.5">{t(l as TranslationKey)}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section id="features" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-[11px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-3">
              <Zap className="w-3.5 h-3.5" /> {t('nav_features')}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">{t('feat_title')}</h2>
            <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">{t('feat_subtitle')}</p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <Reveal key={f.t} delay={i * 60}>
                <div className="group relative h-full bg-gradient-to-b from-white/[0.04] to-transparent p-6 rounded-3xl border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ring-1 ${colorMap[f.c]} group-hover:scale-110 transition-transform`}>
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{t(f.t as TranslationKey)}</h3>
                  <p className="text-gray-400 text-[13px] leading-relaxed">{t(f.d as TranslationKey)}</p>
                  <ChevronRight className="absolute top-6 end-6 w-4 h-4 text-gray-600 opacity-0 group-hover:opacity-100 rtl:rotate-180 transition-opacity" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section id="how" className="py-20 sm:py-28 px-4 bg-gray-950/40 border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">{t('how_title')}</h2>
            <p className="text-gray-400 text-sm sm:text-base mt-4">{t('how_subtitle')}</p>
          </Reveal>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="hidden md:block absolute top-8 start-[16%] end-[16%] h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0" />
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 120} className="relative text-center">
                <div className="relative z-10 w-16 h-16 mx-auto rounded-2xl bg-[#0B0D14] border border-indigo-500/30 flex items-center justify-center mb-5 shadow-xl shadow-indigo-600/10">
                  <s.icon className="w-6 h-6 text-indigo-400" />
                  <span className="absolute -top-2 -end-2 w-6 h-6 rounded-full bg-indigo-600 text-white text-[11px] font-black flex items-center justify-center border-2 border-[#05060A]">{i + 1}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{t(s.t as TranslationKey)}</h3>
                <p className="text-gray-400 text-[13px] leading-relaxed max-w-xs mx-auto">{t(s.d as TranslationKey)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">{t('testi_title')}</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[1, 2, 3].map((n, i) => (
              <Reveal key={n} delay={i * 90}>
                <div className="h-full bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] rounded-3xl p-6 flex flex-col">
                  <Quote className="w-7 h-7 text-indigo-500/40 mb-4 rtl:scale-x-[-1]" />
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, k) => <Star key={k} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed flex-1">{t(`testi_${n}_text` as TranslationKey)}</p>
                  <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/[0.06]">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white text-xs font-black">
                      {(t(`testi_${n}_name` as TranslationKey)).split(' ').map(w => w[0]).join('').slice(0, 2)}
                    </div>
                    <div className="text-start">
                      <div className="text-xs font-bold text-white">{t(`testi_${n}_name` as TranslationKey)}</div>
                      <div className="text-[10px] text-gray-500">{t(`testi_${n}_role` as TranslationKey)}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section id="pricing" className="py-20 sm:py-28 px-4 border-y border-white/[0.06] bg-gray-950/40">
        <Reveal className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">{t('pricing_title')}</h2>
          <p className="text-gray-400 text-sm mt-4">{t('pricing_subtitle')}</p>
        </Reveal>

        <Reveal delay={100} className="max-w-md mx-auto">
          <div className="relative bg-gradient-to-b from-indigo-950/60 to-[#0B0D14] p-7 sm:p-8 rounded-3xl border-2 border-indigo-500/40 shadow-2xl shadow-indigo-900/30 overflow-hidden">
            <div className="absolute top-0 end-0 bg-indigo-500 text-white text-[10px] font-black px-4 py-1.5 rounded-es-2xl">{t('popular')}</div>
            <div className="absolute -top-16 -end-16 w-40 h-40 bg-indigo-500/20 blur-3xl rounded-full" />

            <h3 className="text-xl font-black text-white relative">{t('plan_name')}</h3>
            <div className="my-6 relative">
              <span className="text-5xl font-black text-white">{t('price_amount')}</span>
              <span className="text-gray-400 text-xs block mt-1">{t('per_month')}</span>
            </div>
            <p className="text-[13px] text-gray-300 mb-6 leading-relaxed relative">{t('plan_desc')}</p>

            <ul className="space-y-3 text-[13px] text-gray-200 mb-8 border-t border-white/10 pt-6 relative">
              {['feature_check', 'plan_f2', 'plan_f3', 'plan_f4', 'plan_f5'].map(k => (
                <li key={k} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t(k as TranslationKey)}</span>
                </li>
              ))}
            </ul>

            <button onClick={() => setAuthModal('signup')}
              className="relative w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 active:scale-95 text-white font-black py-4 rounded-xl text-sm shadow-xl shadow-indigo-600/30 transition-all cursor-pointer">
              {t('select_plan')}
            </button>
          </div>
        </Reveal>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="py-20 sm:py-24 px-4">
        <Reveal className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-indigo-950/70 via-[#0B0D14] to-violet-950/50 p-10 sm:p-14 text-center">
            <div className="absolute -top-24 start-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative">
              <ShieldCheck className="w-10 h-10 text-indigo-400 mx-auto mb-5" />
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">{t('cta_title')}</h2>
              <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-xl mx-auto">{t('cta_desc')}</p>
              <button onClick={() => setAuthModal('signup')}
                className="mt-8 bg-white text-[#05060A] hover:bg-gray-100 active:scale-95 px-8 py-4 rounded-2xl font-black text-sm shadow-xl transition-all inline-flex items-center gap-2 cursor-pointer">
                {t('cta_button')} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
              <p className="mt-4 text-[11px] text-gray-500 font-semibold">{t('cta_note')}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-white/[0.06] bg-[#04050A] px-4 pt-14 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center">
                  <Store className="w-5 h-5 text-white" />
                </div>
                <span className="font-black text-white">All-In-One<span className="text-indigo-400">.Restaurant</span></span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed max-w-xs">{t('footer_text')}</p>
            </div>
            {[
              ['footer_product', ['POS', 'Inventory', 'Finance', 'Loyalty']],
              ['footer_company', ['About', 'Careers', 'Blog', 'Contact']],
              ['footer_legal', ['Privacy', 'Terms', 'Security', 'SLA']],
            ].map(([title, items]) => (
              <div key={title as string}>
                <h4 className="text-xs font-black text-white uppercase tracking-wider mb-4">{t(title as TranslationKey)}</h4>
                <ul className="space-y-2.5">
                  {(items as string[]).map(it => (
                    <li key={it}><a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">{it}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-gray-500">© 2026 All-In-One Restaurant. {t('footer_rights')}</p>
            <div className="flex items-center gap-4">
              <Globe className="w-4 h-4 text-gray-600" />
              <QrCode className="w-4 h-4 text-gray-600" />
              <Wallet className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
      </footer>

      {/* ============ AUTH MODAL ============ */}
      {authModal !== 'none' && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setAuthModal('none')}>
          <div onClick={e => e.stopPropagation()}
            className="bg-[#0B0D14] border border-white/10 rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl shadow-black/60 max-h-[92vh] overflow-y-auto">
            <button onClick={() => setAuthModal('none')}
              className="absolute top-4 end-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 w-8 h-8 rounded-full flex items-center justify-center transition cursor-pointer">
              <X className="w-4 h-4" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center mb-5 shadow-lg shadow-indigo-600/30">
              <Store className="w-6 h-6 text-white" />
            </div>

            <h3 className="text-xl font-black text-white mb-1.5">
              {authModal === 'login' ? t('modal_login_title') : t('modal_signup_title')}
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              {authModal === 'login' ? t('modal_login_sub') : t('modal_signup_sub')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Language */}
              <div>
                <label className="block text-[11px] font-bold text-gray-300 mb-1.5">{t('preferred_lang_label')}</label>
                <div className="relative">
                  <Globe className={iconInput} />
                  <select value={lang} onChange={e => setLang(e.target.value as Language)}
                    className={`${inputBase} appearance-none cursor-pointer`}>
                    {LANGS.map(l => <option key={l.code} value={l.code} className="bg-[#0B0D14]">{l.flag} {l.label}</option>)}
                  </select>
                  <ChevronDown className="absolute end-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              {authModal === 'signup' && (
                <div>
                  <label className="block text-[11px] font-bold text-gray-300 mb-1.5">{t('account_type_label')}</label>
                  <div className="grid grid-cols-2 gap-2">
                    {(['restaurant', 'client'] as const).map(type => (
                      <button key={type} type="button" onClick={() => setAccountType(type)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${accountType === type ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/30' : 'bg-white/[0.03] border-white/10 text-gray-400 hover:text-white'}`}>
                        {type === 'restaurant' ? t('type_restaurant') : t('type_client')}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {authModal === 'signup' && accountType === 'restaurant' && (
                <div>
                  <label className="block text-[11px] font-bold text-gray-300 mb-1.5">{t('name_label')}</label>
                  <div className="relative">
                    <Store className={iconInput} />
                    <input type="text" required value={restaurantName} onChange={e => setRestaurantName(e.target.value)}
                      placeholder="La Table d'Or" className={inputBase} />
                  </div>
                </div>
              )}

              {authModal === 'signup' && (
                <div>
                  <label className="block text-[11px] font-bold text-gray-300 mb-1.5">{t('fullname_label')}</label>
                  <div className="relative">
                    <User className={iconInput} />
                    <input type="text" required value={fullName} onChange={e => setFullName(e.target.value)}
                      placeholder="John Doe" className={inputBase} />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-bold text-gray-300 mb-1.5">{t('email_label')}</label>
                <div className="relative">
                  <Mail className={iconInput} />
                  <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="user@example.com" className={inputBase} />
                </div>
              </div>

              {authModal === 'signup' && (
                <div>
                  <label className="block text-[11px] font-bold text-gray-300 mb-1.5">{t('mobile_label')}</label>
                  <div className="relative">
                    <Phone className={iconInput} />
                    <input type="tel" required value={mobileNumber} onChange={e => setMobileNumber(e.target.value)}
                      placeholder="+1 555 000 0000" className={inputBase} />
                  </div>
                </div>
              )}

              {authModal === 'signup' && (
                <div>
                  <label className="block text-[11px] font-bold text-gray-300 mb-1.5">{t('userid_label')}</label>
                  <div className="relative">
                    <KeyRound className={iconInput} />
                    <input type="text" readOnly value={userIdCode}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 ps-11 pe-24 text-sm text-indigo-400 font-mono font-bold focus:outline-none" />
                    <button type="button" onClick={handleCopyCode}
                      className="absolute end-2 top-1/2 -translate-y-1/2 bg-indigo-500/15 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/30 px-2.5 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer">
                      {copied ? <><Check className="w-3.5 h-3.5 text-emerald-400" /><span className="text-emerald-400">{t('copied')}</span></>
                        : <><Copy className="w-3.5 h-3.5" /><span>{t('copy')}</span></>}
                    </button>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-bold text-gray-300 mb-1.5">{t('pass_label')}</label>
                <div className="relative">
                  <Lock className={iconInput} />
                  <input type={showPass ? 'text' : 'password'} required value={password} onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••" className={`${inputBase} pe-11`} />
                  <button type="button" onClick={() => setShowPass(!showPass)}
                    className="absolute end-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 cursor-pointer">
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {authModal === 'signup' && (
                <div>
                  <label className="block text-[11px] font-bold text-gray-300 mb-1.5">{t('pass_confirm_label')}</label>
                  <div className="relative">
                    <Lock className={iconInput} />
                    <input type="password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
                      placeholder="••••••••" className={inputBase} />
                  </div>
                  {confirmPassword && password !== confirmPassword && (
                    <p className="text-[10px] text-rose-400 mt-1.5">{t('err_pass_mismatch')}</p>
                  )}
                </div>
              )}

              {formError && (
                <div className="flex items-start gap-2 bg-rose-500/10 border border-rose-500/25 rounded-xl px-3.5 py-2.5">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span className="text-[11px] text-rose-300 font-semibold">{formError}</span>
                </div>
              )}
              {formSuccess && (
                <div className="flex items-start gap-2 bg-emerald-500/10 border border-emerald-500/25 rounded-xl px-3.5 py-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-[11px] text-emerald-300 font-semibold">{formSuccess}</span>
                </div>
              )}

              <button type="submit" disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 active:scale-95 text-white py-3.5 rounded-xl font-black text-sm transition-all shadow-lg shadow-indigo-600/30 cursor-pointer mt-2 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                <span>{authModal === 'login' ? t('submit_login') : t('submit_signup')}</span>
              </button>
            </form>

            {/* Toggle between Login and Signup */}
            <div className="mt-5 text-center text-xs text-gray-400">
              {authModal === 'login' ? (
                <>
                  {t('no_account_text')}{' '}
                  <button type="button" onClick={() => setAuthModal('signup')}
                    className="text-indigo-400 font-bold hover:underline cursor-pointer">
                    {t('create_one_link')}
                  </button>
                </>
              ) : (
                <>
                  {t('have_account_text')}{' '}
                  <button type="button" onClick={() => setAuthModal('login')}
                    className="text-indigo-400 font-bold hover:underline cursor-pointer">
                    {t('login_here_link')}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
