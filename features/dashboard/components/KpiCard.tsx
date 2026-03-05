'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { ArrowUp, ArrowDown } from '@hugeicons/react';
import { KPI } from '../types/dashboard';

interface KpiCardProps {
  kpi: KPI;
  index: number;
}

export function KpiCard({ kpi, index }: KpiCardProps) {
  const trendColor = kpi.trend === 'up' ? 'text-green-500' : 'text-red-500';
  const trendBgColor =
    kpi.trend === 'up' ? 'bg-green-500/10' : 'bg-red-500/10';

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      transition={{ delay: index * 0.1 }}
      className="ring-1 ring-foreground/10 bg-card rounded-xl p-6 hover:ring-accent/30 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-accent">
          {kpi.icon}
        </div>

        <div className={`flex items-center gap-1 px-2 py-1 rounded-md ${trendBgColor}`}>
          {kpi.trend === 'up' ? (
            <ArrowUp size={16} className={trendColor} />
          ) : (
            <ArrowDown size={16} className={trendColor} />
          )}
          <span className={`text-xs font-semibold ${trendColor}`}>
            {Math.abs(kpi.change)}%
          </span>
        </div>
      </div>

      <h3 className="text-sm font-medium text-muted-foreground mb-2">
        {kpi.label}
      </h3>

      <p className="text-2xl font-bold text-foreground">
        {kpi.value.toLocaleString('ar-DZ')}
      </p>
    </motion.div>
  );
}
