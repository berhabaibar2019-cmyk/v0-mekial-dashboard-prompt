import { useQuery } from '@tanstack/react-query';
import { DashboardStats } from '../types/dashboard';
import {
  TrendingUp,
  ShoppingCart,
  Package,
  Coins,
} from '@hugeicons/react';

const MOCK_DASHBOARD_DATA: DashboardStats = {
  kpis: [
    {
      id: '1',
      label: 'إجمالي المبيعات',
      value: 45230,
      change: 12.5,
      trend: 'up',
      icon: <ShoppingCart size={24} />,
    },
    {
      id: '2',
      label: 'عدد الفواتير',
      value: 1240,
      change: 8.2,
      trend: 'up',
      icon: <Coins size={24} />,
    },
    {
      id: '3',
      label: 'المنتجات',
      value: 3458,
      change: -2.1,
      trend: 'down',
      icon: <Package size={24} />,
    },
    {
      id: '4',
      label: 'معدل النمو',
      value: 24.8,
      change: 5.3,
      trend: 'up',
      icon: <TrendingUp size={24} />,
    },
  ],
  recentTransactions: [
    {
      id: '1',
      date: '2024-01-15 14:30',
      description: 'بيع منتجات',
      amount: 1250.00,
      type: 'sale',
      status: 'completed',
    },
    {
      id: '2',
      date: '2024-01-15 13:45',
      description: 'شراء مخزون',
      amount: 5000.00,
      type: 'purchase',
      status: 'completed',
    },
    {
      id: '3',
      date: '2024-01-15 12:20',
      description: 'إرجاع منتجات',
      amount: 350.00,
      type: 'return',
      status: 'pending',
    },
    {
      id: '4',
      date: '2024-01-15 11:10',
      description: 'دفع فاتورة',
      amount: 3200.00,
      type: 'payment',
      status: 'completed',
    },
    {
      id: '5',
      date: '2024-01-15 10:00',
      description: 'بيع منتجات',
      amount: 890.50,
      type: 'sale',
      status: 'completed',
    },
  ],
  salesData: [
    { date: 'الأحد', sales: 4000 },
    { date: 'الاثنين', sales: 3000 },
    { date: 'الثلاثاء', sales: 2000 },
    { date: 'الأربعاء', sales: 2780 },
    { date: 'الخميس', sales: 1890 },
    { date: 'الجمعة', sales: 2390 },
    { date: 'السبت', sales: 3490 },
  ],
  categoryData: [
    { name: 'إلكترونيات', value: 45 },
    { name: 'ملابس', value: 25 },
    { name: 'أغذية', value: 20 },
    { name: 'أخرى', value: 10 },
  ],
};

export function useDashboardStats() {
  return useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: async () => {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      return MOCK_DASHBOARD_DATA;
    },
  });
}
