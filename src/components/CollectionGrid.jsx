import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const teas = [
  {
    name: 'Imperial Matcha',
    note: 'First-flush, stone-milled, shade-grown',
    desc: 'A velvety umami depth with whipped crema and a brisk jade finish.',
    image:
      'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1974&auto=format&fit=crop',
    badge: 'Ceremonial',
    rating: 5,
  },
  {
    name: 'Golden Oolong',
    note: 'High-mountain, lightly oxidized, hand-rolled',
    desc: 'Fragrant orchid aromatics with a honeyed, buttery palate.',
    image:
      'https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?q=80&w=1974&auto=format&fit=crop',
    badge: 'Limited Release',
    rating: 5,
  },
  {
    name: 'Jasmine Pearls',
    note: 'Night-bloom infused, hand-scented, spring pick',
    desc: 'Delicate florals unfurl into a silken, lingering sweetness.',
    image:
      'https://images.unsplash.com/photo-1542451313056-b7c8e626645f?q=80&w=1974&auto=format&fit=crop',
    badge: 'Heritage',
    rating: 4,
  },
];

const Rating = ({ value = 5 }) => (
  <div className="flex items-center gap-1 text-amber-500">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={16} className={i < value ? 'fill-amber-400 text-amber-400' : 'text-amber-300'} />
    ))}
  </div>
);

const CollectionGrid = () => {
  return (
    <section id="collections" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Signature Collections</h2>
            <p className="mt-3 text-neutral-700 max-w-2xl">
              Curated leaves from storied terroirs. Each lot is traceable and crafted in diminutive quantities for peak expression.
            </p>
          </div>
          <a href="#" className="hidden sm:inline text-sm text-emerald-700 hover:text-emerald-800">View all releases →</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teas.map((t, idx) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={t.image} alt={t.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute left-3 top-3 rounded-full bg-neutral-900/80 px-3 py-1 text-xs text-white">
                  {t.badge}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">{t.name}</h3>
                    <p className="text-sm text-neutral-600">{t.note}</p>
                  </div>
                  <Rating value={t.rating} />
                </div>
                <p className="mt-3 text-neutral-700">{t.desc}</p>
                <div className="mt-5 flex items-center gap-3">
                  <button className="inline-flex flex-1 items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800 transition-colors">
                    View Details
                  </button>
                  <button className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm hover:shadow-sm transition-all">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div id="craft" className="mt-20 rounded-2xl border border-emerald-200/60 bg-emerald-50/50 p-8">
          <h3 className="text-2xl font-semibold text-neutral-900">Our Craft</h3>
          <p className="mt-3 max-w-3xl text-neutral-700">
            We partner with multigenerational growers who practice organic and regenerative cultivation. Leaves are hand-harvested and finished in micro-lots—pan-fired, sun-withered, and gently rolled—to preserve terroir and nuance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
