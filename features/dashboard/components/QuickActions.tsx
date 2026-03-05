'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import {
  ShoppingCart02Icon,
  Package01Icon,
  Settings01Icon,
  Plus01Icon,
} from '@hugeicons/react';
import { Button } from '@/components/ui/button';

const QUICK_ACTIONS = [
  {
    id: '1',
    label: 'بيع جديد',
    icon: ShoppingCart02Icon,
    color: 'bg-blue-500/10 text-blue-600 hover:bg-blue-500/20',
  },
  {
    id: '2',
    label: 'إضافة مخزون',
    icon: Package01Icon,
    color: 'bg-green-500/10 text-green-600 hover:bg-green-500/20',
  },
  {
    id: '3',
    label: 'إنشاء فاتورة',
    icon: Plus01Icon,
    color: 'bg-purple-500/10 text-purple-600 hover:bg-purple-500/20',
  },
  {
    id: '4',
    label: 'تقرير سريع',
    icon: Settings01Icon,
    color: 'bg-orange-500/10 text-orange-600 hover:bg-orange-500/20',
  },
];

export function QuickActions() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {QUICK_ACTIONS.map((action) => {
        const Icon = action.icon;
        return (
          <motion.div
            key={action.id}
            variants={fadeUp}
          >
            <Button
              variant="outline"
              className={`w-full h-24 flex flex-col items-center justify-center gap-2 ${action.color} border-0`}
            >
              <Icon size={24} />
              <span className="text-xs font-medium text-center">
                {action.label}
              </span>
            </Button>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
