import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1974&auto=format&fit=crop"
          alt="Tea ceremony"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[78vh] items-center py-20">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900"
            >
              Rare leaves. Revered rituals. Refined taste.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-neutral-700"
            >
              Aurelia sources single-origin teas from storied gardens, crafted in small lots for unparalleled aroma and nuance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#collections"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-white hover:bg-neutral-800 transition-colors"
              >
                Explore Collections
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-neutral-900 hover:shadow-sm transition-all"
              >
                Join the Circle
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
