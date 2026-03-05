'use client';

import { motion } from 'framer-motion';
import { sectionVariants, staggerContainer } from '@/lib/animations';
import { PageHeader } from '@/components/shared/PageHeader';
import { PluginCard } from './PluginCard';
import { PLUGINS } from '../data/plugins';
import { Input } from '@/components/ui/input';
import { Search } from '@hugeicons/react';
import { useState } from 'react';

export function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPlugins = PLUGINS.filter(
    (plugin) =>
      plugin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plugin.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plugin.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="space-y-8"
    >
      {/* Header */}
      <PageHeader
        title="متجر الإضافات"
        subtitle="اكتشف وفعّل الإضافات المتقدمة لتطوير عملك"
      />

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="relative"
      >
        <Search
          size={18}
          className="absolute start-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
        />
        <Input
          type="text"
          placeholder="ابحث عن إضافات..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="ps-10"
        />
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        className="text-sm text-muted-foreground"
      >
        يوجد {filteredPlugins.length} إضافة متاحة
      </motion.div>

      {/* Plugin Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredPlugins.map((plugin, idx) => (
          <PluginCard key={plugin.id} plugin={plugin} index={idx} />
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredPlugins.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-muted-foreground">لم يتم العثور على إضافات</p>
        </motion.div>
      )}
    </motion.div>
  );
}
