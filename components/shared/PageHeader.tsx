'use client';

import { motion } from 'framer-motion';
import { sectionVariants } from '@/lib/animations';
import { ArrowLeft } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  breadcrumbs?: string[];
}

export function PageHeader({
  title,
  subtitle,
  action,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="space-y-6"
    >
      {/* Breadcrumb */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground overflow-x-auto pb-2">
          {breadcrumbs.map((crumb, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              {idx > 0 && <ArrowLeft size={16} />}
              <span>{crumb}</span>
            </motion.div>
          ))}
        </div>
      )}

      {/* Header Content */}
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1 min-w-0">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl font-bold text-foreground text-pretty"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-sm text-muted-foreground mt-2 text-pretty"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {action && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex-shrink-0"
          >
            {action}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
