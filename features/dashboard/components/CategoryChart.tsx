'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';
import { useDashboardStats } from '../hooks/useDashboardStats';

const COLORS = [
  'var(--accent)',
  'var(--primary)',
  'var(--muted)',
  'var(--border)',
];

interface CategoryChartProps {
  index?: number;
}

export function CategoryChart({ index = 0 }: CategoryChartProps) {
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
      className="ring-1 ring-foreground/10 bg-card rounded-xl p-6 col-span-1"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.1 }}
    >
      <h3 className="text-lg font-semibold text-foreground mb-6">
        المبيعات حسب الفئة
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data.categoryData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            animationDuration={800}
          >
            {data.categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--card)',
              border: `1px solid var(--border)`,
              borderRadius: '8px',
              color: 'var(--foreground)',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
