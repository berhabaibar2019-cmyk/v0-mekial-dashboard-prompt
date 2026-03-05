'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { useDashboardStats } from '../hooks/useDashboardStats';
import { Transaction } from '../types/dashboard';

const transactionTypeLabels: Record<Transaction['type'], string> = {
  sale: 'بيع',
  purchase: 'شراء',
  return: 'إرجاع',
  payment: 'دفع',
};

const statusLabels: Record<Transaction['status'], string> = {
  completed: 'مكتملة',
  pending: 'قيد الانتظار',
  failed: 'فشلت',
};

const statusColors: Record<Transaction['status'], string> = {
  completed: 'bg-green-500/10 text-green-700',
  pending: 'bg-yellow-500/10 text-yellow-700',
  failed: 'bg-red-500/10 text-red-700',
};

interface RecentTransactionsProps {
  index?: number;
}

export function RecentTransactions({ index = 0 }: RecentTransactionsProps) {
  const { data } = useDashboardStats();

  if (!data) {
    return (
      <motion.div
        className="ring-1 ring-foreground/10 bg-card rounded-xl p-6"
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
      className="ring-1 ring-foreground/10 bg-card rounded-xl p-6 col-span-full"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.1 }}
    >
      <h3 className="text-lg font-semibold text-foreground mb-6">
        آخر العمليات
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-start ps-0 py-3 font-semibold text-muted-foreground">
                التاريخ والوقت
              </th>
              <th className="text-start ps-4 py-3 font-semibold text-muted-foreground">
                الوصف
              </th>
              <th className="text-start ps-4 py-3 font-semibold text-muted-foreground">
                النوع
              </th>
              <th className="text-start ps-4 py-3 font-semibold text-muted-foreground">
                الحالة
              </th>
              <th className="text-end pe-0 py-3 font-semibold text-muted-foreground">
                المبلغ
              </th>
            </tr>
          </thead>
          <tbody>
            {data.recentTransactions.map((transaction, idx) => (
              <motion.tr
                key={transaction.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="border-b border-border/50 hover:bg-muted/20 transition-colors"
              >
                <td className="ps-0 py-4 text-foreground">
                  {transaction.date}
                </td>
                <td className="ps-4 py-4 text-foreground">
                  {transaction.description}
                </td>
                <td className="ps-4 py-4 text-foreground">
                  {transactionTypeLabels[transaction.type]}
                </td>
                <td className="ps-4 py-4">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-medium ${
                      statusColors[transaction.status]
                    }`}
                  >
                    {statusLabels[transaction.status]}
                  </span>
                </td>
                <td className="pe-0 py-4 text-end font-semibold text-foreground">
                  {transaction.amount.toLocaleString('ar-DZ')} د.ج
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
