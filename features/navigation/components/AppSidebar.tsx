'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import {
  ShoppingCart02Icon,
  Package01Icon,
  ShoppingBag02Icon,
  Coins01Icon,
  Building02Icon,
  BarChartSquare02Icon,
  Settings01Icon,
  Puzzle01Icon,
  SidebarLeft01Icon,
  Menu01Icon,
} from '@hugeicons/react';
import { SidebarNavItem } from './SidebarNavItem';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { LogoIcon } from '@/components/shared/LogoIcon';

const NAV_GROUPS = [
  {
    title: 'الرئيسية',
    items: [
      {
        label: 'لوحة التحكم',
        href: '/dashboard',
        icon: <ShoppingCart02Icon size={20} />,
      },
    ],
  },
  {
    title: 'العمليات',
    items: [
      {
        label: 'نقطة البيع',
        href: '/dashboard/pos',
        icon: <ShoppingCart02Icon size={20} />,
      },
      {
        label: 'المخزون',
        href: '/dashboard/inventory',
        icon: <Package01Icon size={20} />,
      },
      {
        label: 'المشتريات',
        href: '/dashboard/purchases',
        icon: <ShoppingBag02Icon size={20} />,
      },
    ],
  },
  {
    title: 'المالية والتقارير',
    items: [
      {
        label: 'المحاسبة',
        href: '/dashboard/accounting',
        icon: <Coins01Icon size={20} />,
      },
      {
        label: 'التقارير',
        href: '/dashboard/reports',
        icon: <BarChartSquare02Icon size={20} />,
      },
    ],
  },
  {
    title: 'الإدارة',
    items: [
      {
        label: 'الفروع',
        href: '/dashboard/branches',
        icon: <Building02Icon size={20} />,
      },
      {
        label: 'المتجر الإضافي',
        href: '/dashboard/marketplace',
        icon: <Puzzle01Icon size={20} />,
      },
      {
        label: 'الإعدادات',
        href: '/dashboard/settings',
        icon: <Settings01Icon size={20} />,
      },
    ],
  },
];

export function AppSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ width: 256 }}
      animate={{ width: isCollapsed ? 80 : 256 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={cn(
        'hidden md:flex flex-col h-screen bg-sidebar border-e border-border overflow-hidden',
        'relative z-50'
      )}
    >
      {/* Logo Area */}
      <div className="px-4 py-5 border-b border-border flex items-center justify-between">
        <motion.div
          animate={{ width: isCollapsed ? 0 : 'auto', opacity: isCollapsed ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <LogoIcon className="w-8 h-8" />
        </motion.div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="h-8 w-8 p-0"
              >
                <motion.div
                  animate={{ rotate: isCollapsed ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <SidebarLeft01Icon size={18} />
                </motion.div>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="start" className="text-xs">
              {isCollapsed ? 'توسيع' : 'تصغير'}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Trial Status */}
      <motion.div
        animate={{ opacity: isCollapsed ? 0 : 1, display: isCollapsed ? 'none' : 'block' }}
        transition={{ duration: 0.3 }}
        className="px-4 py-3 mx-2 mt-4 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20"
      >
        <p className="text-xs font-semibold text-accent">النسخة التجريبية</p>
        <p className="text-xs text-muted-foreground mt-1">باقي 27 يوم</p>
      </motion.div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-6 space-y-6">
        {NAV_GROUPS.map((group, groupIndex) => (
          <div key={groupIndex}>
            <motion.h3
              animate={{ opacity: isCollapsed ? 0 : 1, display: isCollapsed ? 'none' : 'block' }}
              transition={{ duration: 0.3 }}
              className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
            >
              {group.title}
            </motion.h3>
            <div className="space-y-1">
              {group.items.map((item, itemIndex) => (
                <SidebarNavItem
                  key={itemIndex}
                  icon={item.icon}
                  label={item.label}
                  href={item.href}
                  isActive={pathname === item.href}
                  isCollapsed={isCollapsed}
                  badge={
                    item.href === '/dashboard/inventory' ? 3 : undefined
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* User Dropdown */}
      <motion.div
        animate={{ opacity: isCollapsed ? 0 : 1, display: isCollapsed ? 'none' : 'block' }}
        transition={{ duration: 0.3 }}
        className="px-4 py-4 border-t border-border"
      >
        <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-muted/40 transition-colors">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent">
            أ
          </div>
          <div className="flex-1 text-start">
            <p className="text-sm font-medium text-foreground">أحمد علي</p>
            <p className="text-xs text-muted-foreground">admin@mekial.com</p>
          </div>
        </button>
      </motion.div>
    </motion.aside>
  );
}
