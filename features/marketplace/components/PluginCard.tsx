'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { Star, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Plugin } from '../types/plugin';
import { useState } from 'react';

interface PluginCardProps {
  plugin: Plugin;
  index: number;
}

export function PluginCard({ plugin, index }: PluginCardProps) {
  const [isActivating, setIsActivating] = useState(false);

  const handleActivate = async () => {
    setIsActivating(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsActivating(false);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      transition={{ delay: index * 0.1 }}
      className="ring-1 ring-foreground/10 bg-card rounded-xl p-6 hover:ring-accent/30 hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {plugin.name}
          </h3>
          <span className="inline-block px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
            {plugin.category}
          </span>
        </div>

        {plugin.isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-600"
          >
            <Check size={18} />
          </motion.div>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 flex-1">
        {plugin.description}
      </p>

      {/* Features */}
      <div className="space-y-2 mb-6">
        {plugin.features.slice(0, 2).map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {feature}
          </div>
        ))}
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-6">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.floor(plugin.rating) ? 'fill-accent text-accent' : 'text-muted'}
            />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">
          ({plugin.reviews})
        </span>
      </div>

      {/* Price and Action */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">السعر</p>
          <p className="text-lg font-bold text-accent">
            {plugin.price.toLocaleString('ar-DZ')} د.ج
          </p>
        </div>

        <Button
          onClick={handleActivate}
          disabled={plugin.isActive || isActivating}
          className={`gap-2 ${
            plugin.isActive
              ? 'bg-muted text-muted-foreground hover:bg-muted'
              : 'bg-accent text-accent-foreground hover:bg-accent/90'
          }`}
        >
          {isActivating ? 'جاري...' : plugin.isActive ? 'مفعل' : 'تفعيل'}
        </Button>
      </div>
    </motion.div>
  );
}
