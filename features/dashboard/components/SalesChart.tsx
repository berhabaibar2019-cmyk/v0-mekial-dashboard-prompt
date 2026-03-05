'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useDashboardStats } from '../hooks/useDashboardStats';

interface SalesChartProps {
  index?: number;
}

export function SalesChart({ index = 0 }: SalesChartProps) {
  const { data } = useDashboardStats();

  if (!data) {
    return (
      <motion.div
        className="ring-1 ring-foreground/10 bg-card rounded-xl p-6 h-80 flex items-center justify-center"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: index * 0.1 }}
      >
        <p className="text-muted-foreground">جاري التحميل...</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="ring-1 ring-foreground/10 bg-card rounded-xl p-6 col-span-1 md:col-span-2"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.1 }}
    >
      <h3 className="text-lg font-semibold text-foreground mb-6">
        مبيعات الأسبوع
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data.salesData}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis
            dataKey="date"
            stroke="var(--muted-foreground)"
            style={{ fontSize: '12px' }}
          />
          <YAxis stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--card)',
              border: `1px solid var(--border)`,
              borderRadius: '8px',
              color: 'var(--foreground)',
            }}
            cursor={{ fill: 'var(--accent)', opacity: 0.1 }}
          />
          <Bar
            dataKey="sales"
            fill="var(--accent)"
            radius={[8, 8, 0, 0]}
            animationDuration={800}
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
