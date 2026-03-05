'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { AlertTriangle01Icon, Close01Icon } from '@hugeicons/react';
import { useState } from 'react';

const LOW_STOCK_ITEMS = [
  {
    productId: '1',
    productName: 'هاتف ذكي',
    currentStock: 3,
    minStock: 10,
  },
  {
    productId: '2',
    productName: 'سماعات رأس',
    currentStock: 5,
    minStock: 15,
  },
];

export function LowStockAlert() {
  const [isVisible, setIsVisible] = useState(LOW_STOCK_ITEMS.length > 0);

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="ring-1 ring-yellow-500/30 bg-yellow-500/10 rounded-lg p-4 mb-6 border border-yellow-500/20"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <AlertTriangle01Icon
            size={20}
            className="text-yellow-600 mt-0.5 flex-shrink-0"
          />

          <div className="flex-1">
            <h4 className="text-sm font-semibold text-yellow-600 mb-2">
              تنبيهات المخزون المنخفض
            </h4>

            <div className="space-y-1">
              {LOW_STOCK_ITEMS.map((item) => (
                <p key={item.productId} className="text-sm text-yellow-700">
                  {item.productName}: المتاح {item.currentStock} من {item.minStock}
                </p>
              ))}
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsVisible(false)}
          className="text-yellow-600 hover:text-yellow-700 flex-shrink-0"
        >
          <Close01Icon size={18} />
        </motion.button>
      </div>
    </motion.div>
  );
}
