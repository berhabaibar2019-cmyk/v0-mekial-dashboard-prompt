export interface KPI {
  id: string;
  label: string;
  value: number;
  change: number;
  trend: 'up' | 'down';
  icon: React.ReactNode;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'sale' | 'purchase' | 'return' | 'payment';
  status: 'completed' | 'pending' | 'failed';
}

export interface DashboardStats {
  kpis: KPI[];
  recentTransactions: Transaction[];
  salesData: Array<{
    date: string;
    sales: number;
  }>;
  categoryData: Array<{
    name: string;
    value: number;
  }>;
}

export interface LowStockAlert {
  productId: string;
  productName: string;
  currentStock: number;
  minStock: number;
}
