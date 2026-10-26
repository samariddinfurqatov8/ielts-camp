import React, { useState } from 'react';
import { Menu, X, Shield, ArrowRight, Phone } from 'lucide-react';
import { Logo } from './Logo.js';

interface NavbarProps {
  onOpenRegister: (courseId?: number) => void;
  onOpenAdmin: () => void;
  isAdminLoggedIn?: boolean;
  phone?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenRegister,
  onOpenAdmin,
  isAdminLoggedIn,
  phone = '+998 97 482 06 26',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cleanPhone = phone.replace(/[^\d+]/g, '');

  const navLinks = [
    { label: 'Bosh sahifa', href: '#hero' },
    { label: 'Kurslar', href: '#courses' },
    { label: 'Ustozlar', href: '#teachers' },
    { label: 'Dars jadvali', href: '#schedule' },
    { label: 'Markaz haqida', href: '#about' },
    { label: 'Savol-javob', href: '#faq' },
    { label: 'Aloqa', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 text-slate-900 transition-all shadow-xs">
      {/* Top quick banner */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden sm:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Yangi qabul ochildi · Ingliz tili / CEFR va Tarix
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${cleanPhone}`}
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>Admin: {phone}</span>
            </a>
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <Shield className="w-3 h-3 text-red-400" />
              <span>{isAdminLoggedIn ? 'Admin Panel' : 'Admin kirish'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          {/* Brand Logo with red circle */}
          <a
            href="#hero"
            className="flex items-center group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-lg p-1"
          >
            <Logo size="md" />
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-red-600 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-red-600 after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${cleanPhone}`}
              className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-red-600 border border-slate-200 hover:border-red-200 bg-slate-50 hover:bg-red-50/50 rounded-xl transition-all flex items-center gap-2"
              title="Administratorga qo‘ng‘iroq qilish"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>{phone}</span>
            </a>

            <button
              onClick={() => onOpenRegister()}
              className="px-5 py-2.5 text-sm font-bold text-white bg-red-600 hover:bg-red-700 active:scale-[0.98] rounded-xl shadow-md shadow-red-600/25 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Kursga yozilish</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${cleanPhone}`}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
              title="Qo‘ng‘iroq qilish"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={onOpenAdmin}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              title="Admin"
            >
              <Shield className="w-5 h-5 text-red-600" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={`tel:${cleanPhone}`}
              className="w-full py-2.5 text-center text-sm font-semibold text-slate-800 border border-slate-300 rounded-xl bg-slate-50 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-red-600" />
              <span>Admin: {phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-3 text-center text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-md shadow-red-600/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Kursga yozilish</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full py-2 text-center text-xs text-slate-600 hover:text-slate-900 flex items-center justify-center gap-1.5"
            >
              <Shield className="w-3.5 h-3.5 text-red-600" />
              <span>{isAdminLoggedIn ? 'Administrator Boshqaruv Paneli' : 'Administrator tizimiga kirish'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
