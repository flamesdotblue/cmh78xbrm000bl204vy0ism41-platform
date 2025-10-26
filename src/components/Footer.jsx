import React from 'react';
import { Instagram, Twitter, Facebook, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white">
                <Leaf size={18} />
              </span>
              <span className="text-lg font-semibold tracking-wide">Aurelia Tea</span>
            </div>
            <p className="mt-4 max-w-sm text-neutral-700">
              An atelier for rare teas and rituals. Based in Kyoto and London, shipping worldwide.
            </p>
            <div className="mt-4 flex items-center gap-3 text-neutral-600">
              <a href="#" aria-label="Instagram" className="p-2 rounded-full hover:bg-neutral-100">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-full hover:bg-neutral-100">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-full hover:bg-neutral-100">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900">Visit</h4>
            <ul className="mt-4 space-y-2 text-neutral-700">
              <li>Kyoto Atelier — Gion District</li>
              <li>London Salon — Marylebone</li>
              <li>By appointment only</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900">Join our circle</h4>
            <p className="mt-2 text-neutral-700">Releases, tastings, and seasonal dispatches.</p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm outline-none focus:border-neutral-400"
              />
              <button className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} Aurelia Tea. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-800">Privacy</a>
            <a href="#" className="hover:text-neutral-800">Terms</a>
            <a href="#" className="hover:text-neutral-800">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
