import React from 'react';
import { Leaf, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-neutral-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white">
              <Leaf size={18} />
            </span>
            <span className="text-lg font-semibold tracking-wide">Aurelia Tea</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#collections" className="text-neutral-700 hover:text-neutral-900 transition-colors">Collections</a>
            <a href="#craft" className="text-neutral-700 hover:text-neutral-900 transition-colors">Craft</a>
            <a href="#contact" className="text-neutral-700 hover:text-neutral-900 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm shadow-sm hover:shadow transition-all">
              Visit Atelier
            </button>
            <button aria-label="Cart" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
