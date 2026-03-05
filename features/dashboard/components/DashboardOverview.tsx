'use client';

import { motion } from 'framer-motion';
import { sectionVariants } from '@/lib/animations';
import { PageHeader } from '@/components/shared/PageHeader';
import { LowStockAlert } from './LowStockAlert';
import { KpiCard } from './KpiCard';
import { SalesChart } from './SalesChart';
import { CategoryChart } from './CategoryChart';
import { QuickActions } from './QuickActions';
import { RecentTransactions } from './RecentTransactions';
import { useDashboardStats } from '../hooks/useDashboardStats';
import { Button } from '@/components/ui/button';

// Get Arabic date
function getArabicDate() {
  const date = new Date();
  const formatter = new Intl.DateTimeFormat('ar-DZ', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return formatter.format(date);
}

export function DashboardOverview() {
  const { data, isLoading } = useDashboardStats();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-muted-foreground">جاري التحميل...</p>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="space-y-8"
    >
      {/* Page Header */}
      <PageHeader
        title="مرحباً، أحمد"
        subtitle={getArabicDate()}
      />

      {/* Low Stock Alert */}
      <LowStockAlert />

      {/* KPI Cards */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.kpis.map((kpi, idx) => (
          <KpiCard key={kpi.id} kpi={kpi} index={idx} />
        ))}
      </motion.div>

      {/* Charts Row */}
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SalesChart index={4} />
        <CategoryChart index={5} />
      </motion.div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">
          إجراءات سريعة
        </h3>
        <QuickActions />
      </div>

      {/* Recent Transactions */}
      <RecentTransactions index={6} />
    </motion.div>
  );
}
