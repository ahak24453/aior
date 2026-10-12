'use client';

import { useState, useEffect, useRef, useMemo, useCallback, type ReactNode, type FormEvent } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import {
  Store, Sparkles, ArrowRight, Globe, CheckCircle2, X, Menu, Mail, Lock, User, Phone,
  KeyRound, Copy, Check, Loader2, Monitor, Boxes, PieChart, Clock, Truck, Gift, Star, Quote,
  ShieldCheck, Zap, ChevronDown, Eye, EyeOff, Users, ChevronRight, Play, UtensilsCrossed,
  Smartphone, Moon, Sun, ArrowUp, Cookie, Plus, Minus, AlertCircle, ArrowLeft,
} from 'lucide-react';

/* ============================================================
   SUPABASE
   ============================================================ */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';
const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
});

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const en = {
  brand_tag: "All-In-One Restaurant OS",
  nav_features: "Modules", nav_platform: "Platform", nav_pricing: "Pricing", nav_faq: "FAQ",
  login: "Login", signup: "Start Free Trial", skip: "Skip to content",

  hero_badge: "The all-in-one operating system for modern restaurants",
  hero_title_1: "Run your entire restaurant", hero_title_2: "from one powerful platform.",
  hero_desc: "POS, inventory, finance, staff, suppliers and live P&L — plus a beautiful guest app for menus, reservations and loyalty. Everything your venue needs, in one place.",
  hero_cta: "Start 30-day free trial", hero_demo: "Explore modules", hero_note: "No credit card required · Cancel anytime",
  trust_label: "Trusted by modern restaurants & cafés in 40+ countries",

  stat_1_label: "Active venues", stat_2_label: "Lower food costs", stat_3_label: "Uptime SLA", stat_4_label: "Human support",

  feat_title: "One suite. Every operation.",
  feat_subtitle: "Replace a dozen disconnected tools with a single, elegant platform built for hospitality.",
  feat_1_title: "Smart POS & Digital Menus", feat_1_desc: "Lightning-fast point of sale with real-time digital menus and QR ordering.",
  feat_2_title: "Inventory Control", feat_2_desc: "Automatic stock tracking with low-stock alerts and precise recipe costing.",
  feat_3_title: "Finance & Live P&L", feat_3_desc: "Real-time profit & loss, expenses and revenue reports at your fingertips.",
  feat_4_title: "Staff & Attendance", feat_4_desc: "Shifts, clock-in/out, payroll-ready timesheets and performance in one view.",
  feat_5_title: "Supplier & Kitchen Invoices", feat_5_desc: "Purchase orders, vendor invoices and delivery schedules — fully streamlined.",
  feat_6_title: "Menu Builder & Loyalty", feat_6_desc: "Design menus in minutes and turn guests into lifetime VIPs with rewards.",

  plat_title: "Two apps. One system.",
  plat_subtitle: "A powerful back office for your team, and a delightful app for your guests.",
  plat_team_title: "For your team",
  plat_team_1: "Clock in / clock out with live attendance", plat_team_2: "Shift scheduling & roles", plat_team_3: "Tasks, checklists & performance",
  plat_guest_title: "For your guests",
  plat_guest_1: "Digital menu, photos & prices", plat_guest_2: "Reservations & opening hours", plat_guest_3: "Discounts, points & loyalty wallet",

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

  compare_title: "Why teams switch to us",
  compare_col_feature: "Capability", compare_col_us: "All-In-One", compare_col_them: "Typical stack",
  compare_1: "POS, inventory & finance in one place", compare_2: "Team attendance & clock-in/out",
  compare_3: "Guest app: menu, reservations & loyalty", compare_4: "Live P&L without spreadsheets",
  compare_5: "One login for the whole team",

  roi_title: "Estimate your monthly savings",
  roi_subtitle: "Move the sliders to see how much a smarter operation is worth.",
  roi_tables: "Tables", roi_ticket: "Avg. ticket", roi_days: "Open days / month",
  roi_revenue: "Est. monthly revenue", roi_saving: "Est. monthly savings",
  roi_note: "Based on an average 8% efficiency gain. Illustrative only.",

  pricing_title: "One plan. Everything included.",
  pricing_subtitle: "Start with 30 days free — no credit card, no commitment.",
  popular: "Most popular", plan_name: "All-In-One Pro", price_amount: "$99",
  per_month: "/ month after trial",
  plan_desc: "Full access to every operations module, unlimited branches, and 24/7 support.",
  feature_check: "POS, Inventory, Finance & P&L", plan_f2: "Unlimited staff accounts",
  plan_f3: "Supplier & purchase management", plan_f4: "Automated loyalty wallet", plan_f5: "Priority 24/7 support",
  select_plan: "Start free trial now",

  faq_title: "Frequently asked questions",
  faq_1_q: "Do I need special hardware?", faq_1_a: "No. It runs in any browser on phones, tablets and computers.",
  faq_2_q: "Can each staff member have their own login?", faq_2_a: "Yes. Invite unlimited team members with roles, and they clock in and out from their own account.",
  faq_3_q: "Is there a guest-facing app?", faq_3_a: "Yes — every venue gets a public page with menu, hours, reservations and loyalty.",
  faq_4_q: "How long is the free trial?", faq_4_a: "30 days, full access, no credit card required.",
  faq_5_q: "Can I cancel anytime?", faq_5_a: "Yes. Cancel in one click — no contracts.",

  cta_title: "Ready to run smarter?", cta_desc: "Join thousands of venues managing everything on one platform.",
  cta_button: "Start free trial", cta_note: "30 days free · No credit card",

  modal_login_title: "Welcome back", modal_signup_title: "Create your account",
  modal_login_sub: "Enter your credentials to access your dashboard.",
  modal_signup_sub: "Fill in your details to create your account.",
  forgot_title: "Reset your password", forgot_sub: "We'll email you a secure reset link.",
  account_type_label: "Account type", type_restaurant: "Restaurant owner", type_client: "Client / customer",
  email_label: "Email address", pass_label: "Password", pass_confirm_label: "Confirm password",
  name_label: "Restaurant name", fullname_label: "Full name", mobile_label: "Mobile number",
  userid_label: "Your unique user ID", preferred_lang_label: "Preferred language",
  submit_login: "Login to dashboard", submit_signup: "Complete registration",
  forgot_link: "Forgot password?", send_reset: "Send reset link", back_to_login: "Back to login",
  or_continue: "or continue with", continue_google: "Google", continue_apple: "Apple",
  terms_agree: "I agree to the", terms_link: "Terms", and_word: "and", privacy_link: "Privacy Policy",
  strength_weak: "Weak", strength_fair: "Fair", strength_good: "Good", strength_strong: "Strong",
  check_email: "Account created! Check your email to confirm.", reset_sent: "Reset link sent — check your inbox.",
  err_pass_mismatch: "Passwords do not match.", err_bad_credentials: "Invalid email or password.",
  err_email_used: "This email is already registered.", err_email_invalid: "Please enter a valid email.",
  err_email_unconfirmed: "Please confirm your email first.", err_pass_short: "Password must be at least 8 characters.",
  err_too_many: "Too many attempts. Try again shortly.", err_network: "Network error. Check your connection.",
  err_generic: "Something went wrong. Please try again.", err_terms: "Please accept the terms to continue.",
  success_signup: "Account created successfully!", success_login: "Logged in successfully!",
  copied: "Copied", copy: "Copy",
  no_account_text: "Don't have an account?", create_one_link: "Create one",
  have_account_text: "Already have an account?", login_here_link: "Login here",

  cookie_text: "We use cookies to improve your experience.",
  cookie_accept: "Accept", cookie_decline: "Decline",
  back_to_top: "Back to top", theme_toggle: "Toggle theme", close: "Close", menu: "Menu",

  mock_dashboard: "Dashboard", mock_today: "Today's Overview", mock_live: "Live",
  mock_updated: "updated just now", mock_revenue: "Revenue", mock_orders: "Orders", mock_foodcost: "Food cost",

  footer_text: "The all-in-one operating system for modern restaurants and franchises.",
  footer_rights: "All rights reserved.", footer_product: "Product", footer_company: "Company", footer_legal: "Legal",
} as const;

type Shape = Record<keyof typeof en, string>;

const fr: Shape = {
  brand_tag: "OS Tout-en-Un pour Restaurant",
  nav_features: "Modules", nav_platform: "Plateforme", nav_pricing: "Tarifs", nav_faq: "FAQ",
  login: "Connexion", signup: "Essai Gratuit", skip: "Aller au contenu",
  hero_badge: "Le système d'exploitation tout-en-un des restaurants modernes",
  hero_title_1: "Gérez tout votre restaurant", hero_title_2: "depuis une seule plateforme.",
  hero_desc: "POS, stocks, finances, personnel, fournisseurs et P&L en direct — avec une superbe app client pour menus, réservations et fidélité.",
  hero_cta: "Démarrer l'essai de 30 jours", hero_demo: "Explorer les modules", hero_note: "Aucune carte requise · Annulable à tout moment",
  trust_label: "Adopté par des restaurants modernes dans plus de 40 pays",
  stat_1_label: "Établissements actifs", stat_2_label: "Coûts alimentaires réduits", stat_3_label: "Disponibilité SLA", stat_4_label: "Support humain",
  feat_title: "Une suite. Toutes vos opérations.", feat_subtitle: "Remplacez une dizaine d'outils par une seule plateforme élégante.",
  feat_1_title: "POS & menus numériques", feat_1_desc: "Caisse ultra-rapide avec menus en temps réel et commande QR.",
  feat_2_title: "Contrôle des stocks", feat_2_desc: "Suivi automatique, alertes de rupture et coût des recettes.",
  feat_3_title: "Finances & P&L en direct", feat_3_desc: "Résultat en temps réel, dépenses et rapports de revenus.",
  feat_4_title: "Personnel & présence", feat_4_desc: "Quarts, pointage, feuilles de paie et performance.",
  feat_5_title: "Fournisseurs & factures", feat_5_desc: "Bons de commande, factures fournisseurs et livraisons simplifiés.",
  feat_6_title: "Menus & fidélité", feat_6_desc: "Créez vos menus en minutes et fidélisez vos clients.",
  plat_title: "Deux apps. Un système.", plat_subtitle: "Un back-office puissant pour votre équipe, une app agréable pour vos clients.",
  plat_team_title: "Pour votre équipe", plat_team_1: "Pointage entrée/sortie en direct", plat_team_2: "Plannings & rôles", plat_team_3: "Tâches, checklists & performance",
  plat_guest_title: "Pour vos clients", plat_guest_1: "Menu numérique, photos & prix", plat_guest_2: "Réservations & horaires", plat_guest_3: "Réductions, points & fidélité",
  how_title: "Opérationnel en minutes", how_subtitle: "Aucun matériel. Aucune installation. Trois étapes.",
  how_1_title: "Créez votre compte", how_1_desc: "Inscrivez-vous gratuitement en moins de deux minutes.",
  how_2_title: "Ajoutez menu, équipe & fournisseurs", how_2_desc: "Importez votre menu, invitez le personnel, connectez les stocks.",
  how_3_title: "Lancez-vous & développez", how_3_desc: "Vendez, suivez votre P&L et fidélisez vos clients.",
  testi_title: "Adoré par les exploitants du monde entier",
  testi_1_text: "Nous avons remplacé cinq applications par une seule. Notre coût alimentaire a chuté de 40%.",
  testi_1_name: "Sofia Marchetti", testi_1_role: "Propriétaire · Osteria Nova",
  testi_2_text: "Le P&L en direct et les alertes de stock ont changé chaque service.",
  testi_2_name: "Youssef El Amrani", testi_2_role: "Directeur · Dar Tajine",
  testi_3_text: "Configuration en un après-midi. La fidélité seule a ramené 2 000 clients.",
  testi_3_name: "Elena Petrova", testi_3_role: "Directrice · Nord Kitchen",
  compare_title: "Pourquoi nous choisir", compare_col_feature: "Fonctionnalité", compare_col_us: "Tout-en-Un", compare_col_them: "Stack classique",
  compare_1: "POS, stocks & finances réunis", compare_2: "Présence & pointage de l'équipe", compare_3: "App client : menu, réservations & fidélité",
  compare_4: "P&L en direct sans tableurs", compare_5: "Un seul login pour toute l'équipe",
  roi_title: "Estimez vos économies mensuelles", roi_subtitle: "Bougez les curseurs pour voir la valeur.",
  roi_tables: "Tables", roi_ticket: "Ticket moyen", roi_days: "Jours / mois",
  roi_revenue: "Revenu mensuel est.", roi_saving: "Économies mensuelles est.", roi_note: "Base : gain d'efficacité moyen de 8%.",
  pricing_title: "Une offre. Tout inclus.", pricing_subtitle: "30 jours gratuits — sans carte, sans engagement.",
  popular: "Le plus choisi", plan_name: "Tout-en-Un Pro", price_amount: "$99", per_month: "/ mois après l'essai",
  plan_desc: "Accès complet à tous les modules, succursales illimitées et support 24/7.",
  feature_check: "POS, Stocks, Finances & P&L", plan_f2: "Comptes employés illimités", plan_f3: "Gestion fournisseurs & achats",
  plan_f4: "Portefeuille de fidélité automatisé", plan_f5: "Support prioritaire 24/7", select_plan: "Démarrer l'essai gratuit",
  faq_title: "Questions fréquentes",
  faq_1_q: "Faut-il du matériel spécial ?", faq_1_a: "Non. Ça tourne dans tout navigateur, sur téléphone, tablette et ordinateur.",
  faq_2_q: "Chaque employé a-t-il son login ?", faq_2_a: "Oui. Invitez un nombre illimité de membres avec rôles, et ils pointent depuis leur compte.",
  faq_3_q: "Y a-t-il une app pour les clients ?", faq_3_a: "Oui — chaque établissement a une page publique avec menu, horaires, réservations et fidélité.",
  faq_4_q: "Combien de temps dure l'essai ?", faq_4_a: "30 jours, accès complet, sans carte.",
  faq_5_q: "Puis-je annuler ?", faq_5_a: "Oui, en un clic — sans engagement.",
  cta_title: "Prêt à gérer plus intelligemment ?", cta_desc: "Rejoignez des milliers d'établissements sur une seule plateforme.",
  cta_button: "Démarrer l'essai gratuit", cta_note: "30 jours gratuits · Sans carte",
  modal_login_title: "Bon retour", modal_signup_title: "Créez votre compte",
  modal_login_sub: "Saisissez vos identifiants pour accéder au tableau de bord.",
  modal_signup_sub: "Remplissez vos informations pour créer votre compte.",
  forgot_title: "Réinitialiser le mot de passe", forgot_sub: "Nous vous enverrons un lien sécurisé.",
  account_type_label: "Type de compte", type_restaurant: "Propriétaire", type_client: "Client / consommateur",
  email_label: "Email", pass_label: "Mot de passe", pass_confirm_label: "Confirmer le mot de passe",
  name_label: "Nom du restaurant", fullname_label: "Nom complet", mobile_label: "Mobile",
  userid_label: "Votre identifiant unique", preferred_lang_label: "Langue préférée",
  submit_login: "Se connecter", submit_signup: "Finaliser l'inscription",
  forgot_link: "Mot de passe oublié ?", send_reset: "Envoyer le lien", back_to_login: "Retour",
  or_continue: "ou continuer avec", continue_google: "Google", continue_apple: "Apple",
  terms_agree: "J'accepte les", terms_link: "Conditions", and_word: "et", privacy_link: "Confidentialité",
  strength_weak: "Faible", strength_fair: "Moyen", strength_good: "Bon", strength_strong: "Fort",
  check_email: "Compte créé ! Vérifiez votre email.", reset_sent: "Lien envoyé — vérifiez vos emails.",
  err_pass_mismatch: "Les mots de passe ne correspondent pas.", err_bad_credentials: "Email ou mot de passe invalide.",
  err_email_used: "Cet email est déjà utilisé.", err_email_invalid: "Email invalide.",
  err_email_unconfirmed: "Confirmez d'abord votre email.", err_pass_short: "Minimum 8 caractères.",
  err_too_many: "Trop de tentatives. Réessayez.", err_network: "Erreur réseau.", err_generic: "Une erreur est survenue.",
  err_terms: "Acceptez les conditions.", success_signup: "Compte créé !", success_login: "Connexion réussie !",
  copied: "Copié", copy: "Copier",
  no_account_text: "Pas de compte ?", create_one_link: "Créer un compte", have_account_text: "Déjà un compte ?", login_here_link: "Connectez-vous",
  cookie_text: "Nous utilisons des cookies pour améliorer votre expérience.", cookie_accept: "Accepter", cookie_decline: "Refuser",
  back_to_top: "Haut de page", theme_toggle: "Changer de thème", close: "Fermer", menu: "Menu",
  mock_dashboard: "Tableau de bord", mock_today: "Aperçu du jour", mock_live: "En direct", mock_updated: "mis à jour",
  mock_revenue: "Revenu", mock_orders: "Commandes", mock_foodcost: "Coût food",
  footer_text: "Le système d'exploitation tout-en-un des restaurants modernes.", footer_rights: "Tous droits réservés.",
  footer_product: "Produit", footer_company: "Entreprise", footer_legal: "Légal",
};

const ru: Shape = {
  brand_tag: "Все-в-одном ОС для ресторанов",
  nav_features: "Модули", nav_platform: "Платформа", nav_pricing: "Цены", nav_faq: "FAQ",
  login: "Войти", signup: "Пробный период", skip: "К контенту",
  hero_badge: "Единая операционная система для современных ресторанов",
  hero_title_1: "Управляйте всем рестораном", hero_title_2: "с одной мощной платформы.",
  hero_desc: "POS, склад, финансы, персонал, поставщики и P&L в реальном времени — плюс приложение для гостей: меню, брони, лояльность.",
  hero_cta: "Начать 30 дней бесплатно", hero_demo: "Посмотреть модули", hero_note: "Без карты · Отмена в любой момент",
  trust_label: "Нам доверяют рестораны в 40+ странах",
  stat_1_label: "Активных заведений", stat_2_label: "Снижение расходов", stat_3_label: "Доступность", stat_4_label: "Поддержка",
  feat_title: "Одна система. Все операции.", feat_subtitle: "Замените десяток сервисов одной платформой.",
  feat_1_title: "POS и цифровое меню", feat_1_desc: "Молниеносная касса с меню и заказом по QR.",
  feat_2_title: "Контроль запасов", feat_2_desc: "Учёт остатков, оповещения и калькуляция блюд.",
  feat_3_title: "Финансы и P&L", feat_3_desc: "Отчёт о прибылях в реальном времени, расходы и доходы.",
  feat_4_title: "Персонал и посещаемость", feat_4_desc: "Смены, отметки, табели и эффективность.",
  feat_5_title: "Поставщики и счета", feat_5_desc: "Заказы, счета и графики поставок.",
  feat_6_title: "Меню и лояльность", feat_6_desc: "Создавайте меню за минуты и удерживайте гостей.",
  plat_title: "Два приложения. Одна система.", plat_subtitle: "Мощный бэк-офис для команды и приятное приложение для гостей.",
  plat_team_title: "Для команды", plat_team_1: "Отметки прихода/ухода", plat_team_2: "Смены и роли", plat_team_3: "Задачи и эффективность",
  plat_guest_title: "Для гостей", plat_guest_1: "Меню, фото и цены", plat_guest_2: "Брони и часы работы", plat_guest_3: "Скидки, бонусы и кошелёк",
  how_title: "Запуск за минуты", how_subtitle: "Без оборудования и установок. Три шага.",
  how_1_title: "Создайте аккаунт", how_1_desc: "Бесплатная регистрация за две минуты.",
  how_2_title: "Добавьте меню и команду", how_2_desc: "Импортируйте меню, пригласите сотрудников, подключите склад.",
  how_3_title: "Запускайтесь и растите", how_3_desc: "Продавайте, следите за P&L, удерживайте гостей.",
  testi_title: "Нас любят рестораторы",
  testi_1_text: "Мы заменили пять приложений одним. Расходы упали на 40%.", testi_1_name: "София Маркетти", testi_1_role: "Владелец · Osteria Nova",
  testi_2_text: "Живой P&L и оповещения изменили каждую смену.", testi_2_name: "Юссеф Эль Амрани", testi_2_role: "Управляющий · Dar Tajine",
  testi_3_text: "Настройка заняла вечер. Лояльность вернула 2000 гостей.", testi_3_name: "Елена Петрова", testi_3_role: "Директор · Nord Kitchen",
  compare_title: "Почему выбирают нас", compare_col_feature: "Возможность", compare_col_us: "Всё-в-одном", compare_col_them: "Обычный набор",
  compare_1: "POS, склад и финансы вместе", compare_2: "Учёт посещаемости", compare_3: "Приложение для гостей",
  compare_4: "P&L без таблиц", compare_5: "Один вход для команды",
  roi_title: "Оцените экономию", roi_subtitle: "Двигайте ползунки.", roi_tables: "Столы", roi_ticket: "Средний чек", roi_days: "Дней / мес",
  roi_revenue: "Выручка в месяц", roi_saving: "Экономия в месяц", roi_note: "Средний прирост эффективности 8%.",
  pricing_title: "Один тариф. Всё включено.", pricing_subtitle: "30 дней бесплатно — без карты.",
  popular: "Популярный", plan_name: "Все-в-одном Про", plan_amount: "$99", plan_amount_alt: "", price_amount: "$99", per_month: "/ месяц после триала",
  plan_desc: "Полный доступ, неограниченные филиалы, поддержка 24/7.",
  feature_check: "POS, склад, финансы и P&L", plan_f2: "Неограниченные аккаунты", plan_f3: "Поставщики и закупки",
  plan_f4: "Кошелёк лояльности", plan_f5: "Приоритетная поддержка", select_plan: "Начать бесплатно",
  faq_title: "Частые вопросы",
  faq_1_q: "Нужно оборудование?", faq_1_a: "Нет. Работает в браузере на телефоне, планшете и ПК.",
  faq_2_q: "У каждого сотрудника свой вход?", faq_2_a: "Да. Приглашайте команду и ведите учёт.",
  faq_3_q: "Есть приложение для гостей?", faq_3_a: "Да — публичная страница с меню, часами, бронями.",
  faq_4_q: "Сколько длится триал?", faq_4_a: "30 дней, полный доступ.",
  faq_5_q: "Можно отменить?", faq_5_a: "Да, в один клик.",
  cta_title: "Готовы работать умнее?", cta_desc: "Присоединяйтесь к тысячам заведений.",
  cta_button: "Начать бесплатно", cta_note: "30 дней · Без карты",
  modal_login_title: "С возвращением", modal_signup_title: "Создайте аккаунт",
  modal_login_sub: "Введите данные для входа.", modal_signup_sub: "Заполните данные.",
  forgot_title: "Сброс пароля", forgot_sub: "Пришлём ссылку для сброса.",
  account_type_label: "Тип аккаунта", type_restaurant: "Владелец", type_client: "Клиент",
  email_label: "Эл. почта", pass_label: "Пароль", pass_confirm_label: "Подтвердите пароль",
  name_label: "Название ресторана", fullname_label: "Полное имя", mobile_label: "Телефон",
  userid_label: "Ваш ID", preferred_lang_label: "Язык",
  submit_login: "Войти", submit_signup: "Завершить",
  forgot_link: "Забыли пароль?", send_reset: "Отправить", back_to_login: "Назад",
  or_continue: "или через", continue_google: "Google", continue_apple: "Apple",
  terms_agree: "Принимаю", terms_link: "Условия", and_word: "и", privacy_link: "Конфиденциальность",
  strength_weak: "Слабый", strength_fair: "Средний", strength_good: "Хороший", strength_strong: "Надёжный",
  check_email: "Аккаунт создан! Проверьте почту.", reset_sent: "Ссылка отправлена.",
  err_pass_mismatch: "Пароли не совпадают.", err_bad_credentials: "Неверный вход.", err_email_used: "Email занят.",
  err_email_invalid: "Неверный email.", err_email_unconfirmed: "Подтвердите email.", err_pass_short: "Минимум 8 символов.",
  err_too_many: "Слишком много попыток.", err_network: "Ошибка сети.", err_generic: "Что-то пошло не так.",
  err_terms: "Примите условия.", success_signup: "Аккаунт создан!", success_login: "Вход выполнен!",
  copied: "Скопировано", copy: "Копировать",
  no_account_text: "Нет аккаунта?", create_one_link: "Создать", have_account_text: "Уже есть аккаунт?", login_here_link: "Войти",
  cookie_text: "Мы используем cookies.", cookie_accept: "Принять", cookie_decline: "Отклонить",
  back_to_top: "Наверх", theme_toggle: "Тема", close: "Закрыть", menu: "Меню",
  mock_dashboard: "Панель", mock_today: "Обзор дня", mock_live: "Онлайн", mock_updated: "обновлено",
  mock_revenue: "Выручка", mock_orders: "Заказы", mock_foodcost: "Себестоимость",
  footer_text: "Единая ОС для современных ресторанов.", footer_rights: "Все права защищены.",
  footer_product: "Продукт", footer_company: "Компания", footer_legal: "Правовое",
} as unknown as Shape;

const ar: Shape = {
  brand_tag: "النظام الشامل لإدارة وتشغيل المطاعم",
  nav_features: "الوحدات", nav_platform: "المنصة", nav_pricing: "الأسعار", nav_faq: "الأسئلة",
  login: "تسجيل الدخول", signup: "ابدأ مجاناً", skip: "تخطَّ إلى المحتوى",
  hero_badge: "نظام التشغيل المتكامل للمطاعم العصرية",
  hero_title_1: "أدر مطعمك بالكامل", hero_title_2: "من منصة واحدة قوية.",
  hero_desc: "نقاط البيع، المخزون، المالية، الموظفون، الموردون وتحليلات الأرباح الفورية — مع تطبيق أنيق لزبائنك: المنيو، الحجوزات والولاء.",
  hero_cta: "ابدأ 30 يوماً مجاناً", hero_demo: "استكشف الوحدات", hero_note: "بدون بطاقة · إلغاء في أي وقت",
  trust_label: "يثق بنا مطاعم ومقاهٍ في أكثر من 40 دولة",
  stat_1_label: "منشأة نشطة", stat_2_label: "انخفاض تكاليف الطعام", stat_3_label: "جهوزية النظام", stat_4_label: "دعم بشري",
  feat_title: "منظومة واحدة. كل العمليات.", feat_subtitle: "استغن عن عشرات الأدوات بمنصة واحدة أنيقة.",
  feat_1_title: "نقاط بيع ومنيو رقمي", feat_1_desc: "كاشير فائق السرعة مع منيو رقمي وطلب عبر QR.",
  feat_2_title: "إدارة المخزون", feat_2_desc: "تتبع تلقائي مع تنبيهات النقص وحساب تكلفة الوصفات.",
  feat_3_title: "المالية والأرباح", feat_3_desc: "تقارير أرباح وخسائر لحظية ومصروفات وإيرادات.",
  feat_4_title: "الموظفون والحضور", feat_4_desc: "ورديات، تسجيل حضور وانصراف، ورواتب وأداء.",
  feat_5_title: "الموردون وفواتير المطبخ", feat_5_desc: "أوامر شراء، فواتير موردين، وجداول توريد بسلاسة.",
  feat_6_title: "بناء المنيو والولاء", feat_6_desc: "صمّم منيوك في دقائق وحوّل الزوار إلى عملاء دائمين.",
  plat_title: "تطبيقان. نظام واحد.", plat_subtitle: "لوحة تحكم قوية لفريقك، وتطبيق ممتع لزبائنك.",
  plat_team_title: "لفريقك", plat_team_1: "تسجيل حضور وانصراف فوري", plat_team_2: "جدولة الورديات والأدوار", plat_team_3: "المهام وقوائم الإنجاز والأداء",
  plat_guest_title: "لزبائنك", plat_guest_1: "منيو رقمي بالصور والأسعار", plat_guest_2: "الحجوزات وأوقات العمل", plat_guest_3: "التخفيضات والنقاط ومحفظة الولاء",
  how_title: "انطلق في دقائق", how_subtitle: "بدون أجهزة ولا تثبيت. ثلاث خطوات.",
  how_1_title: "أنشئ حسابك", how_1_desc: "سجّل مجاناً وأنشئ ملف مطعمك في دقيقتين.",
  how_2_title: "أضف المنيو والفريق", how_2_desc: "استورد منيوك، ادعُ موظفيك، واربط المخزون.",
  how_3_title: "انطلق وطوّر", how_3_desc: "ابدأ البيع وتابع أرباحك وحوّل الزوار لعملاء دائمين.",
  testi_title: "محبوب من أصحاب المطاعم",
  testi_1_text: "استبدلنا خمس تطبيقات بواحدة، وانخفضت تكلفة الطعام 40%.", testi_1_name: "صوفيا ماركيتي", testi_1_role: "مالكة · Osteria Nova",
  testi_2_text: "تقارير الأرباح الفورية غيّرت طريقة إدارتنا لكل وردية.", testi_2_name: "يوسف العمراني", testi_2_role: "مدير عام · Dar Tajine",
  testi_3_text: "الإعداد استغرق ظهيرة. الولاء وحده أعاد 2000 زبون.", testi_3_name: "إيلينا بتروفا", testi_3_role: "مديرة · Nord Kitchen",
  compare_title: "لماذا يختاروننا", compare_col_feature: "الميزة", compare_col_us: "الشامل", compare_col_them: "الأنظمة التقليدية",
  compare_1: "POS والمخزون والمالية معاً", compare_2: "حضور الفريق وتسجيل الدخول", compare_3: "تطبيق الزبون: منيو وحجوزات وولاء",
  compare_4: "أرباح فورية بلا جداول", compare_5: "دخول واحد لكل الفريق",
  roi_title: "احسب وفرك الشهري", roi_subtitle: "حرّك المؤشرات لترى القيمة.", roi_tables: "الطاولات", roi_ticket: "متوسط الفاتورة", roi_days: "أيام العمل / شهر",
  roi_revenue: "الإيراد الشهري المتوقع", roi_saving: "الوفر الشهري المتوقع", roi_note: "بناءً على تحسين كفاءة بنسبة 8% تقريباً.",
  pricing_title: "باقة واحدة. كل شيء مشمول.", pricing_subtitle: "ابدأ بـ 30 يوماً مجاناً — بدون بطاقة.",
  popular: "الأكثر اختياراً", plan_name: "الباقة الشاملة الاحترافية", price_amount: "$99", per_month: "/ شهرياً بعد التجربة",
  plan_desc: "وصول كامل لجميع الوحدات، فروع غير محدودة، ودعم 24/7.",
  feature_check: "نقاط البيع والمخزون والمالية", plan_f2: "حسابات موظفين غير محدودة", plan_f3: "إدارة الموردين والمشتريات",
  plan_f4: "محفظة ولاء تلقائية", plan_f5: "دعم ذو أولوية", select_plan: "ابدأ التجربة المجانية",
  faq_title: "الأسئلة الشائعة",
  faq_1_q: "هل أحتاج أجهزة خاصة؟", faq_1_a: "لا. يعمل في أي متصفح على الهاتف واللوحي والحاسوب.",
  faq_2_q: "هل لكل موظف حساب خاص؟", faq_2_a: "نعم. ادعُ فريقك بأدوار، ويسجلون حضورهم من حساباتهم.",
  faq_3_q: "هل هناك تطبيق للزبائن؟", faq_3_a: "نعم — صفحة عامة لكل مطعم فيها المنيو والأوقات والحجوزات والولاء.",
  faq_4_q: "كم تدوم التجربة؟", faq_4_a: "30 يوماً بوصول كامل وبدون بطاقة.",
  faq_5_q: "هل يمكن الإلغاء؟", faq_5_a: "نعم، بنقرة واحدة وبدون التزام.",
  cta_title: "جاهز لإدارة أذكى؟", cta_desc: "انضم لآلاف المنشآت التي تدير كل شيء من منصة واحدة.",
  cta_button: "ابدأ التجربة المجانية", cta_note: "30 يوماً مجاناً · بدون بطاقة",
  modal_login_title: "مرحباً بعودتك", modal_signup_title: "أنشئ حسابك",
  modal_login_sub: "أدخل بياناتك للدخول إلى لوحة التحكم.", modal_signup_sub: "املأ بياناتك لإنشاء حسابك.",
  forgot_title: "إعادة تعيين كلمة المرور", forgot_sub: "سنرسل لك رابطاً آمناً.",
  account_type_label: "نوع الحساب", type_restaurant: "صاحب مطعم", type_client: "زبون / عميل",
  email_label: "البريد الإلكتروني", pass_label: "كلمة المرور", pass_confirm_label: "تأكيد كلمة المرور",
  name_label: "اسم المطعم", fullname_label: "الاسم الكامل", mobile_label: "رقم الهاتف",
  userid_label: "معرّف المستخدم الفريد", preferred_lang_label: "اللغة المفضلة",
  submit_login: "الدخول للوحة التحكم", submit_signup: "إتمام التسجيل",
  forgot_link: "نسيت كلمة المرور؟", send_reset: "إرسال الرابط", back_to_login: "رجوع",
  or_continue: "أو تابع باستخدام", continue_google: "جوجل", continue_apple: "آبل",
  terms_agree: "أوافق على", terms_link: "الشروط", and_word: "و", privacy_link: "سياسة الخصوصية",
  strength_weak: "ضعيفة", strength_fair: "متوسطة", strength_good: "جيدة", strength_strong: "قوية",
  check_email: "تم إنشاء الحساب! تحقق من بريدك.", reset_sent: "تم إرسال الرابط — تحقق من بريدك.",
  err_pass_mismatch: "كلمتا المرور غير متطابقتين.", err_bad_credentials: "بريد أو كلمة مرور خاطئة.",
  err_email_used: "البريد مسجّل مسبقاً.", err_email_invalid: "بريد غير صالح.",
  err_email_unconfirmed: "أكّد بريدك أولاً.", err_pass_short: "كلمة المرور 8 أحرف على الأقل.",
  err_too_many: "محاولات كثيرة، أعد المحاولة.", err_network: "خطأ في الشبكة.", err_generic: "حدث خطأ ما.",
  err_terms: "وافق على الشروط للمتابعة.", success_signup: "تم إنشاء الحساب!", success_login: "تم تسجيل الدخول!",
  copied: "تم النسخ", copy: "نسخ",
  no_account_text: "ليس لديك حساب؟", create_one_link: "أنشئ حساباً", have_account_text: "لديك حساب؟", login_here_link: "سجّل دخولك",
  cookie_text: "نستخدم الكوكيز لتحسين تجربتك.", cookie_accept: "موافق", cookie_decline: "رفض",
  back_to_top: "للأعلى", theme_toggle: "تبديل المظهر", close: "إغلاق", menu: "القائمة",
  mock_dashboard: "لوحة التحكم", mock_today: "نظرة اليوم", mock_live: "مباشر", mock_updated: "محدّث الآن",
  mock_revenue: "الإيراد", mock_orders: "الطلبات", mock_foodcost: "تكلفة الطعام",
  footer_text: "نظام التشغيل المتكامل للمطاعم والسلاسل العصرية.", footer_rights: "جميع الحقوق محفوظة.",
  footer_product: "المنتج", footer_company: "الشركة", footer_legal: "قانوني",
};

const es: Shape = {
  brand_tag: "SO Todo en Uno para Restaurantes",
  nav_features: "Módulos", nav_platform: "Plataforma", nav_pricing: "Precios", nav_faq: "FAQ",
  login: "Iniciar sesión", signup: "Prueba gratis", skip: "Ir al contenido",
  hero_badge: "El sistema operativo integral para restaurantes modernos",
  hero_title_1: "Administra todo tu restaurante", hero_title_2: "desde una sola plataforma.",
  hero_desc: "POS, inventario, finanzas, personal, proveedores y P&L en vivo — más una app para tus clientes: menú, reservas y lealtad.",
  hero_cta: "Iniciar prueba de 30 días", hero_demo: "Explorar módulos", hero_note: "Sin tarjeta · Cancela cuando quieras",
  trust_label: "Con la confianza de restaurantes en más de 40 países",
  stat_1_label: "Locales activos", stat_2_label: "Menos costes", stat_3_label: "Disponibilidad", stat_4_label: "Soporte humano",
  feat_title: "Una suite. Todas tus operaciones.", feat_subtitle: "Reemplaza una docena de herramientas por una sola plataforma.",
  feat_1_title: "POS y menús digitales", feat_1_desc: "Punto de venta ultrarrápido con menús y pedidos por QR.",
  feat_2_title: "Control de inventario", feat_2_desc: "Stock automático, alertas y coste de recetas.",
  feat_3_title: "Finanzas y P&L", feat_3_desc: "Pérdidas y ganancias en tiempo real, gastos e ingresos.",
  feat_4_title: "Personal y asistencia", feat_4_desc: "Turnos, fichajes, nóminas y rendimiento.",
  feat_5_title: "Proveedores y facturas", feat_5_desc: "Órdenes, facturas y entregas simplificadas.",
  feat_6_title: "Menús y lealtad", feat_6_desc: "Crea menús en minutos y fideliza clientes.",
  plat_title: "Dos apps. Un sistema.", plat_subtitle: "Un back-office potente para tu equipo y una app para tus clientes.",
  plat_team_title: "Para tu equipo", plat_team_1: "Fichaje de entrada/salida", plat_team_2: "Turnos y roles", plat_team_3: "Tareas y rendimiento",
  plat_guest_title: "Para tus clientes", plat_guest_1: "Menú digital, fotos y precios", plat_guest_2: "Reservas y horarios", plat_guest_3: "Descuentos, puntos y monedero",
  how_title: "En marcha en minutos", how_subtitle: "Sin hardware. Tres pasos.",
  how_1_title: "Crea tu cuenta", how_1_desc: "Regístrate gratis en menos de dos minutos.",
  how_2_title: "Añade menú y equipo", how_2_desc: "Importa tu menú, invita al personal, conecta inventario.",
  how_3_title: "Sal y crece", how_3_desc: "Vende, sigue tu P&L y fideliza clientes.",
  testi_title: "Amado por operadores",
  testi_1_text: "Reemplazamos cinco apps por una. El coste de comida cayó un 40%.", testi_1_name: "Sofia Marchetti", testi_1_role: "Propietaria · Osteria Nova",
  testi_2_text: "El P&L en vivo cambió cada turno.", testi_2_name: "Youssef El Amrani", testi_2_role: "Gerente · Dar Tajine",
  testi_3_text: "La configuración tomó una tarde. La lealtad trajo 2.000 clientes.", testi_3_name: "Elena Petrova", testi_3_role: "Directora · Nord Kitchen",
  compare_title: "Por qué nos eligen", compare_col_feature: "Capacidad", compare_col_us: "Todo en Uno", compare_col_them: "Stack típico",
  compare_1: "POS, inventario y finanzas juntos", compare_2: "Asistencia y fichaje", compare_3: "App de cliente: menú y reservas",
  compare_4: "P&L en vivo sin hojas", compare_5: "Un login para todo el equipo",
  roi_title: "Estima tu ahorro", roi_subtitle: "Mueve los controles.", roi_tables: "Mesas", roi_ticket: "Ticket medio", roi_days: "Días / mes",
  roi_revenue: "Ingreso mensual est.", roi_saving: "Ahorro mensual est.", roi_note: "Basado en un 8% de eficiencia.",
  pricing_title: "Un plan. Todo incluido.", pricing_subtitle: "30 días gratis — sin tarjeta.",
  popular: "Más popular", plan_name: "Todo en Uno Pro", price_amount: "$99", per_month: "/ mes tras la prueba",
  plan_desc: "Acceso completo, sucursales ilimitadas y soporte 24/7.",
  feature_check: "POS, Inventario, Finanzas y P&L", plan_f2: "Cuentas ilimitadas", plan_f3: "Proveedores y compras",
  plan_f4: "Monedero de lealtad", plan_f5: "Soporte prioritario", select_plan: "Iniciar prueba gratis",
  faq_title: "Preguntas frecuentes",
  faq_1_q: "¿Necesito hardware?", faq_1_a: "No. Funciona en cualquier navegador.",
  faq_2_q: "¿Cada empleado tiene login?", faq_2_a: "Sí. Invita a tu equipo con roles y fichan desde su cuenta.",
  faq_3_q: "¿Hay app para clientes?", faq_3_a: "Sí — página pública con menú, horarios y reservas.",
  faq_4_q: "¿Cuánto dura la prueba?", faq_4_a: "30 días, acceso completo.",
  faq_5_q: "¿Puedo cancelar?", faq_5_a: "Sí, con un clic.",
  cta_title: "¿Listo para gestionar mejor?", cta_desc: "Únete a miles de locales.",
  cta_button: "Iniciar prueba gratis", cta_note: "30 días gratis · Sin tarjeta",
  modal_login_title: "Bienvenido", modal_signup_title: "Crea tu cuenta",
  modal_login_sub: "Introduce tus datos.", modal_signup_sub: "Completa tus datos.",
  forgot_title: "Restablecer contraseña", forgot_sub: "Te enviaremos un enlace.",
  account_type_label: "Tipo de cuenta", type_restaurant: "Propietario", type_client: "Cliente",
  email_label: "Correo", pass_label: "Contraseña", pass_confirm_label: "Confirmar contraseña",
  name_label: "Nombre del restaurante", fullname_label: "Nombre completo", mobile_label: "Móvil",
  userid_label: "Tu ID único", preferred_lang_label: "Idioma",
  submit_login: "Entrar", submit_signup: "Completar registro",
  forgot_link: "¿Olvidaste la contraseña?", send_reset: "Enviar enlace", back_to_login: "Volver",
  or_continue: "o continúa con", continue_google: "Google", continue_apple: "Apple",
  terms_agree: "Acepto los", terms_link: "Términos", and_word: "y", privacy_link: "Privacidad",
  strength_weak: "Débil", strength_fair: "Media", strength_good: "Buena", strength_strong: "Fuerte",
  check_email: "¡Cuenta creada! Revisa tu correo.", reset_sent: "Enlace enviado.",
  err_pass_mismatch: "Las contraseñas no coinciden.", err_bad_credentials: "Credenciales inválidas.",
  err_email_used: "Email ya registrado.", err_email_invalid: "Email inválido.",
  err_email_unconfirmed: "Confirma tu email.", err_pass_short: "Mínimo 8 caracteres.",
  err_too_many: "Demasiados intentos.", err_network: "Error de red.", err_generic: "Algo salió mal.",
  err_terms: "Acepta los términos.", success_signup: "¡Cuenta creada!", success_login: "¡Sesión iniciada!",
  copied: "Copiado", copy: "Copiar",
  no_account_text: "¿Sin cuenta?", create_one_link: "Crear una", have_account_text: "¿Ya tienes cuenta?", login_here_link: "Inicia sesión",
  cookie_text: "Usamos cookies para mejorar tu experiencia.", cookie_accept: "Aceptar", cookie_decline: "Rechazar",
  back_to_top: "Arriba", theme_toggle: "Tema", close: "Cerrar", menu: "Menú",
  mock_dashboard: "Panel", mock_today: "Resumen de hoy", mock_live: "En vivo", mock_updated: "actualizado",
  mock_revenue: "Ingresos", mock_orders: "Pedidos", mock_foodcost: "Coste comida",
  footer_text: "El sistema operativo integral para restaurantes modernos.", footer_rights: "Todos los derechos reservados.",
  footer_product: "Producto", footer_company: "Empresa", footer_legal: "Legal",
};

const locales = { en, fr, ru, ar, es };
type Language = keyof typeof locales;
type TranslationKey = keyof typeof en;
const LANGS: { code: Language; label: string; short: string; flag: string }[] = [
  { code: 'en', label: 'English', short: 'EN', flag: '🇺🇸' },
  { code: 'fr', label: 'Français', short: 'FR', flag: '🇫🇷' },
  { code: 'ru', label: 'Русский', short: 'RU', flag: '🇷🇺' },
  { code: 'ar', label: 'العربية', short: 'AR', flag: '🇸🇦' },
  { code: 'es', label: 'Español', short: 'ES', flag: '🇪🇸' },
];
const isRtl = (l: Language) => l === 'ar';
type T = (k: TranslationKey) => string;

/* ============================================================
   HOOKS
   ============================================================ */
function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setInView(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

function useCounter(target: number, start: boolean, decimals = 0, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setVal(target); return; }
    let raf = 0; const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      setVal(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return val.toFixed(decimals);
}

function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  useEffect(() => {
    const saved = (localStorage.getItem('theme') as 'light' | 'dark' | null) ?? 'dark';
    setTheme(saved);
    document.documentElement.classList.toggle('dark', saved === 'dark');
  }, []);
  const toggle = useCallback(() => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      document.documentElement.classList.toggle('dark', next === 'dark');
      return next;
    });
  }, []);
  return { theme, toggle };
}

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return p;
}

function useScrolled(threshold = 600) {
  const [s, setS] = useState(false);
  useEffect(() => {
    const onScroll = () => setS(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return s;
}

function useLockBody(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [active]);
}

function useFocusTrap<T extends HTMLElement>(active: boolean) {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (!active) return;
    const el = ref.current; if (!el) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    const sel = 'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])';
    const nodes = () => Array.from(el.querySelectorAll<HTMLElement>(sel)).filter((n) => n.offsetParent !== null);
    nodes()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const list = nodes(); if (!list.length) return;
      const first = list[0], last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); prevFocus?.focus?.(); };
  }, [active]);
  return ref;
}

function passwordStrength(pw: string): 1 | 2 | 3 | 4 {
  let s = 0;
  if (pw.length >= 8) s++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) s++;
  if (/\d/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw) && pw.length >= 10) s++;
  return Math.max(1, Math.min(s, 4)) as 1 | 2 | 3 | 4;
}

/* ============================================================
   SHARED UI
   ============================================================ */
const inputBase = 'w-full bg-[rgb(var(--panel-2))] border border-[rgb(var(--line)/0.12)] rounded-xl py-3 ps-11 pe-4 text-sm text-[rgb(var(--fg))] placeholder:text-[rgb(var(--muted))]/70 focus:outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20 transition';
const iconCls = 'absolute start-3.5 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50 pointer-events-none';

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}>
      {children}
    </div>
  );
}

function Counter({ to, decimals = 0, suffix = '', label }: { to: number; decimals?: number; suffix?: string; label: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const val = useCounter(to, inView, decimals);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl font-black bg-gradient-to-b from-[rgb(var(--fg))] to-[rgb(var(--muted))] bg-clip-text text-transparent tabular-nums">{val}{suffix}</div>
      <div className="text-[11px] sm:text-xs text-[rgb(var(--muted))] font-bold mt-1.5">{label}</div>
    </div>
  );
}

function LangSwitcher({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onClick = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);
  return (
    <div className="relative" ref={ref}>
      <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-haspopup="menu"
        className="flex items-center gap-1 bg-[rgb(var(--panel-2))] border border-[rgb(var(--line)/0.12)] text-[rgb(var(--fg))] text-xs font-bold rounded-xl px-2.5 py-2.5 hover:border-[rgb(var(--line)/0.3)] transition cursor-pointer">
        <Globe className="w-3.5 h-3.5 opacity-60" aria-hidden />
        <span>{LANGS.find((l) => l.code === lang)?.short}</span>
        <ChevronDown className={`w-3 h-3 opacity-60 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden />
      </button>
      {open && (
        <div role="menu" className="absolute end-0 mt-2 w-44 bg-[rgb(var(--panel))] border border-[rgb(var(--line)/0.12)] rounded-2xl p-1.5 shadow-2xl z-50">
          {LANGS.map((l) => (
            <button key={l.code} role="menuitem" onClick={() => { setLang(l.code); setOpen(false); }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition ${lang === l.code ? 'bg-indigo-500/15 text-indigo-500' : 'text-[rgb(var(--muted))] hover:bg-[rgb(var(--panel-2))] hover:text-[rgb(var(--fg))]'}`}>
              <span className="text-sm" aria-hidden>{l.flag}</span><span>{l.label}</span>
              {lang === l.code && <Check className="w-3.5 h-3.5 ms-auto" aria-hidden />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ThemeToggle({ label }: { label: string }) {
  const { theme, toggle } = useTheme();
  return (
    <button type="button" onClick={toggle} aria-label={label} title={label}
      className="w-9 h-9 flex items-center justify-center rounded-xl bg-[rgb(var(--panel-2))] border border-[rgb(var(--line)/0.12)] text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] transition cursor-pointer">
      {theme === 'dark' ? <Sun className="w-4 h-4" aria-hidden /> : <Moon className="w-4 h-4" aria-hidden />}
    </button>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[rgb(var(--line)/0.1)] rounded-2xl overflow-hidden bg-[rgb(var(--panel))]">
      <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 p-5 text-start cursor-pointer">
        <span className="text-sm font-bold text-[rgb(var(--fg))]">{q}</span>
        {open ? <Minus className="w-4 h-4 text-indigo-500 shrink-0" aria-hidden /> : <Plus className="w-4 h-4 text-indigo-500 shrink-0" aria-hidden />}
      </button>
      {open && <p className="px-5 pb-5 text-[13px] text-[rgb(var(--muted))] leading-relaxed">{a}</p>}
    </div>
  );
}

function CookieBanner({ t }: { t: T }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { if (!localStorage.getItem('cookie-ok')) setVisible(true); }, []);
  if (!visible) return null;
  const close = (v: string) => { localStorage.setItem('cookie-ok', v); setVisible(false); };
  return (
    <div className="fixed bottom-20 sm:bottom-4 inset-x-0 z-50 p-3 sm:p-4">
      <div className="max-w-3xl mx-auto bg-[rgb(var(--panel))] border border-[rgb(var(--line)/0.12)] rounded-2xl shadow-2xl p-4 flex flex-col sm:flex-row items-center gap-3">
        <Cookie className="w-5 h-5 text-indigo-500 shrink-0" aria-hidden />
        <p className="text-xs text-[rgb(var(--muted))] flex-1 text-center sm:text-start">{t('cookie_text')}</p>
        <div className="flex gap-2 shrink-0">
          <button type="button" onClick={() => close('declined')} className="text-xs font-bold text-[rgb(var(--muted))] px-3 py-2 rounded-xl hover:text-[rgb(var(--fg))] cursor-pointer">{t('cookie_decline')}</button>
          <button type="button" onClick={() => close('accepted')} className="text-xs font-black bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl cursor-pointer">{t('cookie_accept')}</button>
        </div>
      </div>
    </div>
  );
}

function Field({ id, label, icon, children }: { id: string; label: string; icon: ReactNode; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] font-bold text-[rgb(var(--muted))] mb-1.5">{label}</label>
      <div className="relative">{icon}{children}</div>
    </div>
  );
}

const GoogleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"/><path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z"/></svg>
);
const AppleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M16.36 12.79c-.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.62-1.7-3.19-1.73-1.36-.14-2.65.8-3.34.8-.69 0-1.75-.78-2.88-.76-1.48.02-2.85.86-3.61 2.18-1.54 2.67-.39 6.62 1.11 8.79.73 1.06 1.6 2.25 2.74 2.21 1.1-.05 1.52-.71 2.85-.71 1.33 0 1.7.71 2.87.69 1.19-.02 1.94-1.08 2.67-2.14.84-1.23 1.19-2.42 1.21-2.48-.03-.01-2.32-.89-2.34-3.53ZM14.2 6.3c.6-.73 1.01-1.75.9-2.76-.87.03-1.92.58-2.55 1.31-.56.65-1.05 1.68-.92 2.67.97.08 1.96-.49 2.57-1.22Z"/></svg>
);

/* ============================================================
   AUTH MODAL
   ============================================================ */
type Mode = 'none' | 'login' | 'signup' | 'forgot';
type AccountType = 'restaurant' | 'client';

const mapError = (msg: string): TranslationKey => {
  if (/invalid login/i.test(msg)) return 'err_bad_credentials';
  if (/already registered/i.test(msg)) return 'err_email_used';
  if (/email not confirmed/i.test(msg)) return 'err_email_unconfirmed';
  if (/valid email/i.test(msg)) return 'err_email_invalid';
  if (/rate limit|too many/i.test(msg)) return 'err_too_many';
  if (/network|fetch/i.test(msg)) return 'err_network';
  if (/at least|password/i.test(msg)) return 'err_pass_short';
  return 'err_generic';
};

function AuthModal({ mode, setMode, lang, setLang, t }: { mode: Mode; setMode: (m: Mode) => void; lang: Language; setLang: (l: Language) => void; t: T }) {
  const router = useRouter();
  const open = mode !== 'none';
  useLockBody(open);
  const trapRef = useFocusTrap<HTMLDivElement>(open);

  const [loading, setLoading] = useState(false);
  const [errorKey, setErrorKey] = useState<TranslationKey | null>(null);
  const [successKey, setSuccessKey] = useState<TranslationKey | null>(null);

  const [accountType, setAccountType] = useState<AccountType>('restaurant');
  const [userIdCode, setUserIdCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [agree, setAgree] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [restaurantName, setRestaurantName] = useState('');

  useEffect(() => {
    setErrorKey(null); setSuccessKey(null); setShowPass(false);
    if (mode === 'signup') {
      const rnd = typeof crypto !== 'undefined' && crypto.getRandomValues
        ? crypto.getRandomValues(new Uint32Array(1))[0].toString(36).slice(0, 6).toUpperCase()
        : Math.random().toString(36).slice(2, 8).toUpperCase();
      setUserIdCode('USR-' + rnd);
      setEmail(''); setPassword(''); setConfirm(''); setFullName(''); setMobile(''); setRestaurantName('');
      setAccountType('restaurant'); setAgree(true); setCopied(false);
    } else if (mode === 'login' || mode === 'forgot') {
      setEmail(''); setPassword('');
    }
  }, [mode]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMode('none'); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [setMode]);

  const copyCode = async () => {
    try { await navigator.clipboard.writeText(userIdCode); }
    catch {
      const el = document.createElement('textarea'); el.value = userIdCode;
      document.body.appendChild(el); el.select(); document.execCommand('copy'); el.remove();
    }
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault(); setErrorKey(null); setSuccessKey(null);
    if (mode === 'signup' && password.length < 8) return setErrorKey('err_pass_short');
    if (mode === 'signup' && password !== confirm) return setErrorKey('err_pass_mismatch');
    if (mode === 'signup' && !agree) return setErrorKey('err_terms');

    setLoading(true);
    try {
      if (mode === 'signup') {
        const { data, error } = await supabase.auth.signUp({
          email, password,
          options: {
            data: {
              full_name: fullName, mobile_number: mobile, account_type: accountType,
              user_id_code: userIdCode, preferred_language: lang,
              restaurant_name: accountType === 'restaurant' ? restaurantName : null,
            },
          },
        });
        if (error) throw error;
        if (!data.session) setSuccessKey('check_email');
        else { setSuccessKey('success_signup'); setTimeout(() => { setMode('none'); router.push('/dashboard'); }, 800); }
      } else if (mode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        setSuccessKey('success_login');
        setTimeout(() => { setMode('none'); router.push('/dashboard'); }, 700);
      } else {
        const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/auth/reset` });
        if (error) throw error;
        setSuccessKey('reset_sent');
        setTimeout(() => setMode('login'), 1400);
      }
    } catch (err) {
      setErrorKey(mapError((err as { message?: string })?.message ?? ''));
    } finally {
      setLoading(false);
    }
  };

  const oauth = async (provider: 'google' | 'apple') => {
    await supabase.auth.signInWithOAuth({ provider, options: { redirectTo: `${window.location.origin}/auth/callback` } });
  };

  if (!open) return null;
  const err = errorKey;
  const strength = passwordStrength(password);
  const sLabels: TranslationKey[] = ['strength_weak', 'strength_fair', 'strength_good', 'strength_strong'];
  const sColors = ['bg-rose-500', 'bg-amber-500', 'bg-yellow-400', 'bg-emerald-500'];

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setMode('none')}>
      <div ref={trapRef} role="dialog" aria-modal="true"
        aria-label={mode === 'login' ? t('modal_login_title') : mode === 'signup' ? t('modal_signup_title') : t('forgot_title')}
        onClick={(e) => e.stopPropagation()}
        className="bg-[rgb(var(--panel))] border border-[rgb(var(--line)/0.12)] rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl max-h-[92vh] overflow-y-auto">
        <button type="button" onClick={() => setMode('none')} aria-label={t('close')}
          className="absolute top-4 end-4 text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] bg-[rgb(var(--panel-2))] w-8 h-8 rounded-full flex items-center justify-center transition cursor-pointer">
          <X className="w-4 h-4" aria-hidden />
        </button>

        {mode === 'forgot' && (
          <button type="button" onClick={() => setMode('login')} className="flex items-center gap-1.5 text-xs font-bold text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] mb-4 cursor-pointer">
            <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" aria-hidden /> {t('back_to_login')}
          </button>
        )}

        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center mb-5 shadow-lg shadow-indigo-600/30">
          <Store className="w-6 h-6 text-white" aria-hidden />
        </div>

        <h3 className="text-xl font-black text-[rgb(var(--fg))] mb-1.5">
          {mode === 'login' ? t('modal_login_title') : mode === 'signup' ? t('modal_signup_title') : t('forgot_title')}
        </h3>
        <p className="text-xs text-[rgb(var(--muted))] mb-6">
          {mode === 'login' ? t('modal_login_sub') : mode === 'signup' ? t('modal_signup_sub') : t('forgot_sub')}
        </p>

        <form onSubmit={submit} className="space-y-4">
          {mode !== 'forgot' && (
            <div>
              <label htmlFor="lang" className="block text-[11px] font-bold text-[rgb(var(--muted))] mb-1.5">{t('preferred_lang_label')}</label>
              <div className="relative">
                <Globe className={iconCls} aria-hidden />
                <select id="lang" value={lang} onChange={(e) => setLang(e.target.value as Language)} className={`${inputBase} appearance-none cursor-pointer`}>
                  {LANGS.map((l) => <option key={l.code} value={l.code}>{l.flag} {l.label}</option>)}
                </select>
                <ChevronDown className="absolute end-3.5 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50 pointer-events-none" aria-hidden />
              </div>
            </div>
          )}

          {mode === 'signup' && (
            <>
              <div>
                <label className="block text-[11px] font-bold text-[rgb(var(--muted))] mb-1.5">{t('account_type_label')}</label>
                <div className="grid grid-cols-2 gap-2">
                  {(['restaurant', 'client'] as const).map((type) => (
                    <button key={type} type="button" onClick={() => setAccountType(type)} aria-pressed={accountType === type}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition cursor-pointer ${accountType === type ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-[rgb(var(--panel-2))] border-[rgb(var(--line)/0.12)] text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]'}`}>
                      {type === 'restaurant' ? t('type_restaurant') : t('type_client')}
                    </button>
                  ))}
                </div>
              </div>

              {accountType === 'restaurant' && (
                <Field id="resto" label={t('name_label')} icon={<Store className={iconCls} aria-hidden />}>
                  <input id="resto" required value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)} placeholder="La Table d'Or" className={inputBase} autoComplete="organization" />
                </Field>
              )}

              <Field id="fullname" label={t('fullname_label')} icon={<User className={iconCls} aria-hidden />}>
                <input id="fullname" required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="John Doe" className={inputBase} autoComplete="name" />
              </Field>
            </>
          )}

          <Field id="email" label={t('email_label')} icon={<Mail className={iconCls} aria-hidden />}>
            <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="user@example.com" className={inputBase} autoComplete="email" />
          </Field>

          {mode === 'signup' && (
            <Field id="mobile" label={t('mobile_label')} icon={<Phone className={iconCls} aria-hidden />}>
              <input id="mobile" type="tel" required value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="+1 555 000 0000" className={inputBase} autoComplete="tel" inputMode="tel" />
            </Field>
          )}

          {mode === 'signup' && (
            <div>
              <label htmlFor="uid" className="block text-[11px] font-bold text-[rgb(var(--muted))] mb-1.5">{t('userid_label')}</label>
              <div className="relative">
                <KeyRound className={iconCls} aria-hidden />
                <input id="uid" readOnly value={userIdCode} className="w-full bg-[rgb(var(--panel-2))] border border-[rgb(var(--line)/0.12)] rounded-xl py-3 ps-11 pe-24 text-sm text-indigo-500 font-mono font-bold focus:outline-none" />
                <button type="button" onClick={copyCode} className="absolute end-2 top-1/2 -translate-y-1/2 bg-indigo-500/15 hover:bg-indigo-500/30 text-indigo-500 border border-indigo-500/30 px-2.5 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1 transition cursor-pointer">
                  {copied ? <><Check className="w-3.5 h-3.5 text-emerald-500" aria-hidden /><span className="text-emerald-500">{t('copied')}</span></> : <><Copy className="w-3.5 h-3.5" aria-hidden /><span>{t('copy')}</span></>}
                </button>
              </div>
            </div>
          )}

          {mode !== 'forgot' && (
            <div>
              <label htmlFor="pw" className="block text-[11px] font-bold text-[rgb(var(--muted))] mb-1.5">{t('pass_label')}</label>
              <div className="relative">
                <Lock className={iconCls} aria-hidden />
                <input id="pw" type={showPass ? 'text' : 'password'} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className={`${inputBase} pe-11`} autoComplete={mode === 'login' ? 'current-password' : 'new-password'} />
                <button type="button" onClick={() => setShowPass((s) => !s)} aria-label="Toggle password"
                  className="absolute end-3.5 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 cursor-pointer">
                  {showPass ? <EyeOff className="w-4 h-4" aria-hidden /> : <Eye className="w-4 h-4" aria-hidden />}
                </button>
              </div>
              {mode === 'signup' && password && (
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1 h-1 rounded-full bg-[rgb(var(--line)/0.15)] overflow-hidden">
                    <div className={`h-full transition-all ${sColors[strength - 1]}`} style={{ width: `${(strength / 4) * 100}%` }} />
                  </div>
                  <span className="text-[10px] font-bold text-[rgb(var(--muted))]">{t(sLabels[strength - 1])}</span>
                </div>
              )}
            </div>
          )}

          {mode === 'signup' && (
            <Field id="pw2" label={t('pass_confirm_label')} icon={<Lock className={iconCls} aria-hidden />}>
              <input id="pw2" type="password" required value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="••••••••" className={inputBase} autoComplete="new-password" />
            </Field>
          )}

          {mode === 'login' && (
            <div className="text-end">
              <button type="button" onClick={() => setMode('forgot')} className="text-[11px] font-bold text-indigo-500 hover:underline cursor-pointer">{t('forgot_link')}</button>
            </div>
          )}

          {mode === 'signup' && (
            <label className="flex items-start gap-2.5 text-[11px] text-[rgb(var(--muted))] cursor-pointer">
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5 accent-indigo-600" />
              <span>{t('terms_agree')} <a href="/terms" className="text-indigo-500 hover:underline">{t('terms_link')}</a> {t('and_word')} <a href="/privacy" className="text-indigo-500 hover:underline">{t('privacy_link')}</a></span>
            </label>
          )}

          {err && (
            <div role="alert" className="flex items-start gap-2 bg-rose-500/10 border border-rose-500/25 rounded-xl px-3.5 py-2.5">
              <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" aria-hidden />
              <span className="text-[11px] text-rose-500 font-semibold">{t(err)}</span>
            </div>
          )}
          {successKey && (
            <div role="status" className="flex items-start gap-2 bg-emerald-500/10 border border-emerald-500/25 rounded-xl px-3.5 py-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" aria-hidden />
              <span className="text-[11px] text-emerald-500 font-semibold">{t(successKey)}</span>
            </div>
          )}

          <button type="submit" disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 active:scale-95 text-white py-3.5 rounded-xl font-black text-sm transition shadow-lg shadow-indigo-600/30 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60">
            {loading && <Loader2 className="w-4 h-4 animate-spin" aria-hidden />}
            <span>{mode === 'login' ? t('submit_login') : mode === 'signup' ? t('submit_signup') : t('send_reset')}</span>
          </button>
        </form>

        {mode !== 'forgot' && (
          <>
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-[rgb(var(--line)/0.12)]" />
              <span className="text-[10px] font-bold text-[rgb(var(--muted))] uppercase">{t('or_continue')}</span>
              <div className="flex-1 h-px bg-[rgb(var(--line)/0.12)]" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button type="button" onClick={() => oauth('google')} className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[rgb(var(--line)/0.12)] bg-[rgb(var(--panel-2))] text-xs font-bold text-[rgb(var(--fg))] hover:border-[rgb(var(--line)/0.3)] transition cursor-pointer">
                <GoogleIcon /> {t('continue_google')}
              </button>
              <button type="button" onClick={() => oauth('apple')} className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[rgb(var(--line)/0.12)] bg-[rgb(var(--panel-2))] text-xs font-bold text-[rgb(var(--fg))] hover:border-[rgb(var(--line)/0.3)] transition cursor-pointer">
                <AppleIcon /> {t('continue_apple')}
              </button>
            </div>
          </>
        )}

        {mode !== 'forgot' && (
          <div className="mt-5 text-center text-xs text-[rgb(var(--muted))]">
            {mode === 'login' ? (
              <>{t('no_account_text')} <button type="button" onClick={() => setMode('signup')} className="text-indigo-500 font-bold hover:underline cursor-pointer">{t('create_one_link')}</button></>
            ) : (
              <>{t('have_account_text')} <button type="button" onClick={() => setMode('login')} className="text-indigo-500 font-bold hover:underline cursor-pointer">{t('login_here_link')}</button></>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   MAIN PAGE
   ============================================================ */
export default function AllInOneRestaurantPlatform() {
  const [lang, setLang] = useState<Language>('en');
  const [mode, setMode] = useState<Mode>('none');
  const [mobileOpen, setMobileOpen] = useState(false);
  const rtl = isRtl(lang);

  const t = useMemo<T>(() => (k) => locales[lang]?.[k] ?? locales.en[k] ?? k, [lang]);

  const progress = useScrollProgress();
  const showBackTop = useScrolled(600);

  const [tables, setTables] = useState(20);
  const [ticket, setTicket] = useState(25);
  const [days, setDays] = useState(26);
  const revenue = tables * ticket * 3 * days;
  const saving = Math.round(revenue * 0.08);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
  }, [lang, rtl]);

  const stats = useMemo(() => ([
    { to: 12, suffix: 'K+', label: 'stat_1_label' as TranslationKey },
    { to: 38, suffix: '%', label: 'stat_2_label' as TranslationKey },
    { to: 99.9, suffix: '%', decimals: 1, label: 'stat_3_label' as TranslationKey },
    { to: 24, suffix: '/7', label: 'stat_4_label' as TranslationKey },
  ]), []);

  const features = [
    { icon: Monitor, c: 'indigo', t: 'feat_1_title', d: 'feat_1_desc' },
    { icon: Boxes, c: 'violet', t: 'feat_2_title', d: 'feat_2_desc' },
    { icon: PieChart, c: 'emerald', t: 'feat_3_title', d: 'feat_3_desc' },
    { icon: Clock, c: 'amber', t: 'feat_4_title', d: 'feat_4_desc' },
    { icon: Truck, c: 'pink', t: 'feat_5_title', d: 'feat_5_desc' },
    { icon: Gift, c: 'blue', t: 'feat_6_title', d: 'feat_6_desc' },
  ] as const;
  const colorMap: Record<string, string> = {
    indigo: 'bg-indigo-500/10 text-indigo-500 ring-indigo-500/20',
    violet: 'bg-violet-500/10 text-violet-500 ring-violet-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-600 ring-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-600 ring-amber-500/20',
    pink: 'bg-pink-500/10 text-pink-500 ring-pink-500/20',
    blue: 'bg-blue-500/10 text-blue-500 ring-blue-500/20',
  };

  return (
    <div dir={rtl ? 'rtl' : 'ltr'} className="bg-[rgb(var(--bg))] text-[rgb(var(--fg))] min-h-screen overflow-x-clip selection:bg-indigo-600 selection:text-white">
      <style>{`
        :root { --bg:247 248 250; --panel:255 255 255; --panel-2:244 245 248; --fg:10 12 20; --muted:92 100 112; --line:0 0 0; }
        .dark { --bg:5 6 10; --panel:11 13 20; --panel-2:15 17 25; --fg:243 244 246; --muted:156 163 175; --line:255 255 255; }
        @keyframes floaty { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
        @keyframes shimmer { 0% { background-position: -200% 0 } 100% { background-position: 200% 0 } }
        .anim-float { animation: floaty 6s ease-in-out infinite; }
        .gradient-text { background-size: 200% auto; animation: shimmer 6s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .anim-float, .gradient-text { animation: none !important; }
          html { scroll-behavior: auto !important; }
        }
      `}</style>

      {/* scroll progress */}
      <div className="fixed top-0 inset-x-0 h-0.5 z-[60]" aria-hidden>
        <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500" style={{ width: `${progress}%` }} />
      </div>

      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:start-2 focus:z-[70] focus:bg-indigo-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">{t('skip')}</a>

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-[rgb(var(--line)/0.08)] bg-[rgb(var(--bg)/0.8)] backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-[4.5rem] sm:h-20 flex items-center justify-between gap-2">
          <a href="#" className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-600/30">
              <Store className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden />
            </div>
            <div className="leading-tight">
              <span className="text-sm sm:text-lg font-black tracking-tight">All-In-One<span className="text-indigo-500">.Restaurant</span></span>
              <span className="hidden sm:block text-[9px] text-[rgb(var(--muted))] uppercase tracking-[0.2em] font-bold">{t('brand_tag')}</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-9 text-[13px] font-bold text-[rgb(var(--muted))]">
            <a href="#features" className="hover:text-[rgb(var(--fg))] transition-colors">{t('nav_features')}</a>
            <a href="#platform" className="hover:text-[rgb(var(--fg))] transition-colors">{t('nav_platform')}</a>
            <a href="#pricing" className="hover:text-[rgb(var(--fg))] transition-colors">{t('nav_pricing')}</a>
            <a href="#faq" className="hover:text-[rgb(var(--fg))] transition-colors">{t('nav_faq')}</a>
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <ThemeToggle label={t('theme_toggle')} />
            <LangSwitcher lang={lang} setLang={setLang} />
            <button onClick={() => setMode('login')} className="hidden sm:inline-block text-[11px] sm:text-xs font-bold text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] px-1.5 py-2 cursor-pointer">{t('login')}</button>
            <button onClick={() => setMode('signup')} className="bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white px-3 sm:px-4 py-2.5 rounded-xl text-[11px] sm:text-xs font-black shadow-lg shadow-indigo-600/25 transition cursor-pointer">{t('signup')}</button>
            <button onClick={() => setMobileOpen((o) => !o)} aria-label={t('menu')} aria-expanded={mobileOpen} className="lg:hidden bg-[rgb(var(--panel-2))] border border-[rgb(var(--line)/0.12)] p-2 rounded-xl cursor-pointer">
              {mobileOpen ? <X className="w-4 h-4" aria-hidden /> : <Menu className="w-4 h-4" aria-hidden />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <nav className="lg:hidden bg-[rgb(var(--panel))] border-b border-[rgb(var(--line)/0.12)] px-6 py-4">
            {[['#features', 'nav_features'], ['#platform', 'nav_platform'], ['#pricing', 'nav_pricing'], ['#faq', 'nav_faq']].map(([h, k]) => (
              <a key={h} href={h} onClick={() => setMobileOpen(false)} className="block text-sm font-bold text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] py-2">{t(k as TranslationKey)}</a>
            ))}
            <button onClick={() => { setMode('login'); setMobileOpen(false); }} className="block text-sm font-bold text-indigo-500 py-2 cursor-pointer">{t('login')}</button>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="main" className="relative pt-16 sm:pt-24 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/15 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--line)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--line)/0.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/25 px-4 py-2 rounded-full text-[11px] sm:text-xs font-bold text-indigo-500">
              <Sparkles className="w-4 h-4 shrink-0" aria-hidden /><span>{t('hero_badge')}</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08]">
              {t('hero_title_1')} <br />
              <span className="gradient-text bg-gradient-to-r from-indigo-500 via-violet-400 to-pink-500 bg-clip-text text-transparent">{t('hero_title_2')}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}><p className="mt-6 text-[rgb(var(--muted))] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-medium leading-relaxed">{t('hero_desc')}</p></Reveal>
          <Reveal delay={240}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-8">
              <button onClick={() => setMode('signup')} className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 active:scale-95 text-white px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-indigo-600/30 transition flex items-center justify-center gap-2 cursor-pointer">
                {t('hero_cta')} <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden />
              </button>
              <a href="#features" className="w-full sm:w-auto bg-[rgb(var(--panel-2))] border border-[rgb(var(--line)/0.12)] hover:border-[rgb(var(--line)/0.3)] active:scale-95 px-8 py-4 rounded-2xl font-bold text-sm transition flex items-center justify-center gap-2">
                <Play className="w-4 h-4" aria-hidden /> {t('hero_demo')}
              </a>
            </div>
            <p className="mt-4 text-[11px] text-[rgb(var(--muted))] font-semibold">{t('hero_note')}</p>
          </Reveal>

          <Reveal delay={320}>
            <div className="relative mx-auto mt-16 max-w-4xl anim-float">
              <div className="absolute -inset-6 bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-amber-400/10 blur-3xl rounded-[2.5rem] pointer-events-none" />
              <div className="relative rounded-2xl border border-[rgb(var(--line)/0.12)] bg-[rgb(var(--panel))] shadow-2xl overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 h-10 border-b border-[rgb(var(--line)/0.08)]">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" /><span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" /><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  <div className="mx-auto flex items-center gap-1.5 text-[10px] text-[rgb(var(--muted))] border border-[rgb(var(--line)/0.08)] rounded-md px-3 py-1"><Lock className="w-2.5 h-2.5" aria-hidden /> app.allinone.restaurant</div>
                </div>
                <div className="grid grid-cols-12 min-h-[280px]">
                  <aside className="hidden sm:flex col-span-3 lg:col-span-2 flex-col gap-1 border-e border-[rgb(var(--line)/0.08)] p-3">
                    <div className="flex items-center gap-2 mb-3 px-1">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center"><Store className="w-3.5 h-3.5 text-white" aria-hidden /></div>
                      <span className="text-[10px] font-black">{t('mock_dashboard')}</span>
                    </div>
                    {['POS', 'Inventory', 'Finance', 'Staff', 'Suppliers', 'Loyalty'].map((x, i) => (
                      <div key={x} className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[10px] font-semibold ${i === 0 ? 'bg-indigo-500/15 text-indigo-500' : 'text-[rgb(var(--muted))]'}`}><span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />{x}</div>
                    ))}
                  </aside>
                  <main className="col-span-12 sm:col-span-9 lg:col-span-10 p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-start"><div className="text-[11px] font-black">{t('mock_today')}</div><div className="text-[9px] text-[rgb(var(--muted))]">{t('mock_updated')}</div></div>
                      <div className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />{t('mock_live')}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[{ l: 'mock_revenue', v: '$4,820', d: '+12%' }, { l: 'mock_orders', v: '312', d: '+8%' }, { l: 'mock_foodcost', v: '28%', d: '-4%' }].map((s) => (
                        <div key={s.l} className="rounded-xl border border-[rgb(var(--line)/0.08)] p-2.5 text-start">
                          <div className="text-[8px] text-[rgb(var(--muted))] font-bold uppercase">{t(s.l as TranslationKey)}</div>
                          <div className="text-sm font-black mt-0.5">{s.v}</div>
                          <div className="text-[8px] font-bold text-emerald-500">{s.d}</div>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl border border-[rgb(var(--line)/0.08)] p-3">
                      <div className="flex items-end gap-1.5 h-20">
                        {[40, 65, 50, 80, 60, 95, 72, 88, 55, 70, 92, 78].map((h, i) => (
                          <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-indigo-600/40 to-violet-500/80" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={380}><p className="mt-12 text-[11px] uppercase tracking-[0.2em] font-bold text-[rgb(var(--muted))]">{t('trust_label')}</p></Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-[rgb(var(--line)/0.08)] bg-[rgb(var(--panel)/0.5)]">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, i) => <Reveal key={s.label} delay={i * 70}><Counter to={s.to} suffix={s.suffix} decimals={s.decimals} label={t(s.label)} /></Reveal>)}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-[11px] font-black text-indigo-500 uppercase tracking-[0.2em] mb-3"><Zap className="w-3.5 h-3.5" aria-hidden />{t('nav_features')}</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">{t('feat_title')}</h2>
            <p className="text-[rgb(var(--muted))] text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">{t('feat_subtitle')}</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <Reveal key={f.t} delay={i * 60}>
                <div className="group relative h-full bg-[rgb(var(--panel))] p-6 rounded-3xl border border-[rgb(var(--line)/0.1)] hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ring-1 ${colorMap[f.c]} group-hover:scale-110 transition-transform`}><f.icon className="w-6 h-6" aria-hidden /></div>
                  <h3 className="text-lg font-bold mb-2">{t(f.t)}</h3>
                  <p className="text-[rgb(var(--muted))] text-[13px] leading-relaxed">{t(f.d)}</p>
                  <ChevronRight className="absolute top-6 end-6 w-4 h-4 opacity-0 group-hover:opacity-100 rtl:rotate-180 transition-opacity" aria-hidden />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM */}
      <section id="platform" className="py-20 sm:py-28 px-4 bg-[rgb(var(--panel)/0.4)] border-y border-[rgb(var(--line)/0.08)]">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">{t('plat_title')}</h2>
            <p className="text-[rgb(var(--muted))] text-sm sm:text-base mt-4">{t('plat_subtitle')}</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { Icon: Users, title: 'plat_team_title', items: ['plat_team_1', 'plat_team_2', 'plat_team_3'], grad: 'from-indigo-600 to-violet-500' },
              { Icon: Smartphone, title: 'plat_guest_title', items: ['plat_guest_1', 'plat_guest_2', 'plat_guest_3'], grad: 'from-amber-500 to-pink-500' },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 100}>
                <div className="h-full bg-[rgb(var(--panel))] border border-[rgb(var(--line)/0.1)] rounded-3xl p-7">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${card.grad} flex items-center justify-center mb-5`}><card.Icon className="w-6 h-6 text-white" aria-hidden /></div>
                  <h3 className="text-xl font-black mb-5">{t(card.title as TranslationKey)}</h3>
                  <ul className="space-y-3">
                    {card.items.map((it) => <li key={it} className="flex items-center gap-2.5 text-sm text-[rgb(var(--muted))]"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" aria-hidden />{t(it as TranslationKey)}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">{t('how_title')}</h2>
            <p className="text-[rgb(var(--muted))] text-sm sm:text-base mt-4">{t('how_subtitle')}</p>
          </Reveal>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="hidden md:block absolute top-8 start-[16%] end-[16%] h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
            {[{ i: 'how_1_title', d: 'how_1_desc', I: Users }, { i: 'how_2_title', d: 'how_2_desc', I: UtensilsCrossed }, { i: 'how_3_title', d: 'how_3_desc', I: Zap }].map((s, idx) => (
              <Reveal key={s.i} delay={idx * 120} className="relative text-center">
                <div className="relative z-10 w-16 h-16 mx-auto rounded-2xl bg-[rgb(var(--panel))] border border-indigo-500/30 flex items-center justify-center mb-5">
                  <s.I className="w-6 h-6 text-indigo-500" aria-hidden />
                  <span className="absolute -top-2 -end-2 w-6 h-6 rounded-full bg-indigo-600 text-white text-[11px] font-black flex items-center justify-center border-2 border-[rgb(var(--bg))]">{idx + 1}</span>
                </div>
                <h3 className="text-base font-bold mb-2">{t(s.i as TranslationKey)}</h3>
                <p className="text-[rgb(var(--muted))] text-[13px] leading-relaxed max-w-xs mx-auto">{t(s.d as TranslationKey)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-28 px-4 bg-[rgb(var(--panel)/0.4)] border-y border-[rgb(var(--line)/0.08)]">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14"><h2 className="text-3xl sm:text-4xl font-black tracking-tight">{t('testi_title')}</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[1, 2, 3].map((n, i) => (
              <Reveal key={n} delay={i * 90}>
                <div className="h-full bg-[rgb(var(--panel))] border border-[rgb(var(--line)/0.1)] rounded-3xl p-6 flex flex-col">
                  <Quote className="w-7 h-7 text-indigo-500/40 mb-4 rtl:-scale-x-100" aria-hidden />
                  <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, k) => <Star key={k} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden />)}</div>
                  <p className="text-[rgb(var(--muted))] text-sm leading-relaxed flex-1">{t(`testi_${n}_text` as TranslationKey)}</p>
                  <div className="flex items-center gap-3 mt-6 pt-5 border-t border-[rgb(var(--line)/0.08)]">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white text-xs font-black">{t(`testi_${n}_name` as TranslationKey).split(' ').map((w) => w[0]).join('').slice(0, 2)}</div>
                    <div className="text-start"><div className="text-xs font-bold">{t(`testi_${n}_name` as TranslationKey)}</div><div className="text-[10px] text-[rgb(var(--muted))]">{t(`testi_${n}_role` as TranslationKey)}</div></div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON + ROI */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-6">{t('compare_title')}</h2>
            <div className="overflow-hidden rounded-2xl border border-[rgb(var(--line)/0.1)]">
              <div className="grid grid-cols-[1fr_auto_auto] text-[11px] font-black uppercase tracking-wide bg-[rgb(var(--panel-2))]">
                <div className="p-3 text-[rgb(var(--muted))]">{t('compare_col_feature')}</div>
                <div className="p-3 text-indigo-500 text-center">{t('compare_col_us')}</div>
                <div className="p-3 text-[rgb(var(--muted))] text-center">{t('compare_col_them')}</div>
              </div>
              {[1, 2, 3, 4, 5].map((r) => (
                <div key={r} className="grid grid-cols-[1fr_auto_auto] text-xs border-t border-[rgb(var(--line)/0.08)]">
                  <div className="p-3 text-[rgb(var(--muted))]">{t(`compare_${r}` as TranslationKey)}</div>
                  <div className="p-3 flex justify-center"><CheckCircle2 className="w-4 h-4 text-emerald-500" aria-hidden /></div>
                  <div className="p-3 flex justify-center"><X className="w-4 h-4 text-rose-500/70" aria-hidden /></div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">{t('roi_title')}</h2>
            <p className="text-[rgb(var(--muted))] text-sm mb-6">{t('roi_subtitle')}</p>
            <div className="space-y-5 bg-[rgb(var(--panel))] border border-[rgb(var(--line)/0.1)] rounded-2xl p-6">
              {[
                { label: 'roi_tables', val: tables, set: setTables, min: 5, max: 120, suf: '' },
                { label: 'roi_ticket', val: ticket, set: setTicket, min: 5, max: 200, suf: '$' },
                { label: 'roi_days', val: days, set: setDays, min: 10, max: 31, suf: '' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between text-xs font-bold mb-2"><label htmlFor={s.label}>{t(s.label as TranslationKey)}</label><span className="text-indigo-500">{s.suf}{s.val}</span></div>
                  <input id={s.label} type="range" min={s.min} max={s.max} value={s.val} onChange={(e) => s.set(Number(e.target.value))} className="w-full accent-indigo-600 cursor-pointer" />
                </div>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[rgb(var(--line)/0.08)]">
                <div><div className="text-[10px] text-[rgb(var(--muted))] font-bold uppercase">{t('roi_revenue')}</div><div className="text-lg font-black">${revenue.toLocaleString()}</div></div>
                <div><div className="text-[10px] text-[rgb(var(--muted))] font-bold uppercase">{t('roi_saving')}</div><div className="text-lg font-black text-emerald-500">${saving.toLocaleString()}</div></div>
              </div>
              <p className="text-[10px] text-[rgb(var(--muted))]">{t('roi_note')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 sm:py-28 px-4 border-y border-[rgb(var(--line)/0.08)] bg-[rgb(var(--panel)/0.4)]">
        <Reveal className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">{t('pricing_title')}</h2>
          <p className="text-[rgb(var(--muted))] text-sm mt-4">{t('pricing_subtitle')}</p>
        </Reveal>
        <Reveal delay={100} className="max-w-md mx-auto">
          <div className="relative bg-[rgb(var(--panel))] p-7 sm:p-8 rounded-3xl border-2 border-indigo-500/40 shadow-2xl overflow-hidden">
            <div className="absolute top-0 end-0 bg-indigo-500 text-white text-[10px] font-black px-4 py-1.5 rounded-es-2xl">{t('popular')}</div>
            <h3 className="text-xl font-black relative">{t('plan_name')}</h3>
            <div className="my-6 relative"><span className="text-5xl font-black">{t('price_amount')}</span><span className="text-[rgb(var(--muted))] text-xs block mt-1">{t('per_month')}</span></div>
            <p className="text-[13px] text-[rgb(var(--muted))] mb-6 leading-relaxed relative">{t('plan_desc')}</p>
            <ul className="space-y-3 text-[13px] mb-8 border-t border-[rgb(var(--line)/0.1)] pt-6 relative">
              {['feature_check', 'plan_f2', 'plan_f3', 'plan_f4', 'plan_f5'].map((k) => (
                <li key={k} className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" aria-hidden /><span>{t(k as TranslationKey)}</span></li>
              ))}
            </ul>
            <button onClick={() => setMode('signup')} className="relative w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 active:scale-95 text-white font-black py-4 rounded-xl text-sm shadow-xl transition cursor-pointer">{t('select_plan')}</button>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 sm:py-28 px-4">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-black tracking-tight">{t('faq_title')}</h2></Reveal>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((n, i) => <Reveal key={n} delay={i * 60}><FAQItem q={t(`faq_${n}_q` as TranslationKey)} a={t(`faq_${n}_a` as TranslationKey)} /></Reveal>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 px-4">
        <Reveal className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] border border-[rgb(var(--line)/0.1)] bg-gradient-to-br from-indigo-600/10 via-transparent to-violet-600/10 p-10 sm:p-14 text-center">
            <ShieldCheck className="w-10 h-10 text-indigo-500 mx-auto mb-5" aria-hidden />
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">{t('cta_title')}</h2>
            <p className="text-[rgb(var(--muted))] text-sm sm:text-base mt-4 max-w-xl mx-auto">{t('cta_desc')}</p>
            <button onClick={() => setMode('signup')} className="mt-8 bg-[rgb(var(--fg))] text-[rgb(var(--bg))] hover:opacity-90 active:scale-95 px-8 py-4 rounded-2xl font-black text-sm shadow-xl transition inline-flex items-center gap-2 cursor-pointer">
              {t('cta_button')} <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden />
            </button>
            <p className="mt-4 text-[11px] text-[rgb(var(--muted))] font-semibold">{t('cta_note')}</p>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[rgb(var(--line)/0.08)] bg-[rgb(var(--panel)/0.5)] px-4 pt-14 pb-24 sm:pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center"><Store className="w-5 h-5 text-white" aria-hidden /></div>
                <span className="font-black">All-In-One<span className="text-indigo-500">.Restaurant</span></span>
              </div>
              <p className="text-xs text-[rgb(var(--muted))] leading-relaxed max-w-xs">{t('footer_text')}</p>
            </div>
            {[['footer_product', ['POS', 'Inventory', 'Finance', 'Loyalty']], ['footer_company', ['About', 'Careers', 'Blog', 'Contact']], ['footer_legal', ['Privacy', 'Terms', 'Security', 'SLA']]].map(([title, items]) => (
              <div key={title as string}>
                <h4 className="text-xs font-black uppercase tracking-wider mb-4">{t(title as TranslationKey)}</h4>
                <ul className="space-y-2.5">{(items as string[]).map((it) => <li key={it}><a href="#" className="text-xs text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] transition-colors">{it}</a></li>)}</ul>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-[rgb(var(--line)/0.08)] text-center sm:text-start">
            <p className="text-[11px] text-[rgb(var(--muted))]">© 2026 All-In-One Restaurant. {t('footer_rights')}</p>
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-[rgb(var(--bg)/0.9)] backdrop-blur-xl border-t border-[rgb(var(--line)/0.1)]">
        <button onClick={() => setMode('signup')} className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black py-3.5 rounded-xl text-sm cursor-pointer">{t('signup')}</button>
      </div>

      {/* Back to top */}
      {showBackTop && (
        <button type="button" aria-label={t('back_to_top')} title={t('back_to_top')}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-36 sm:bottom-8 end-4 sm:end-8 z-40 w-11 h-11 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-600/30 flex items-center justify-center active:scale-95 transition cursor-pointer">
          <ArrowUp className="w-5 h-5" aria-hidden />
        </button>
      )}

      <CookieBanner t={t} />
      <AuthModal mode={mode} setMode={setMode} lang={lang} setLang={setLang} t={t} />
    </div>
  );
                       }
