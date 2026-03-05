'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ShoppingCart,
  Package,
  ShoppingBag,
  Coins,
  Building,
  BarChart,
  Settings,
  Puzzle,
  Menu,
} from '@hugeicons/react';
import { cn } from '@/lib/utils';
import { LogoIcon } from '@/components/shared/LogoIcon';

const NAV_GROUPS = [
  {
    title: 'الرئيسية',
    items: [
      {
        label: 'لوحة التحكم',
        href: '/dashboard',
        icon: <Menu size={20} />,
      },
    ],
  },
  {
    title: 'العمليات',
    items: [
      {
        label: 'نقطة البيع',
        href: '/dashboard/pos',
        icon: <ShoppingCart size={20} />,
      },
      {
        label: 'المخزون',
        href: '/dashboard/inventory',
        icon: <Package size={20} />,
      },
      {
        label: 'المشتريات',
        href: '/dashboard/purchases',
        icon: <ShoppingBag size={20} />,
      },
    ],
  },
  {
    title: 'المالية والتقارير',
    items: [
      {
        label: 'المحاسبة',
        href: '/dashboard/accounting',
        icon: <Coins size={20} />,
      },
      {
        label: 'التقارير',
        href: '/dashboard/reports',
        icon: <BarChart size={20} />,
      },
    ],
  },
  {
    title: 'الإدارة',
    items: [
      {
        label: 'الفروع',
        href: '/dashboard/branches',
        icon: <Building size={20} />,
      },
      {
        label: 'المتجر الإضافي',
        href: '/dashboard/marketplace',
        icon: <Puzzle size={20} />,
      },
      {
        label: 'الإعدادات',
        href: '/dashboard/settings',
        icon: <Settings size={20} />,
      },
    ],
  },
];

export function MobileSidebarNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-sidebar">
      {/* Logo Area */}
      <div className="px-4 py-5 border-b border-border flex items-center justify-between">
        <LogoIcon className="w-8 h-8" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-6">
        {NAV_GROUPS.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h3 className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {group.title}
            </h3>
            <div className="space-y-1">
              {group.items.map((item, itemIndex) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={itemIndex}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors',
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-muted/40 hover:text-foreground'
                    )}
                  >
                    <div className="flex items-center justify-center w-5 h-5 flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* User Area */}
      <div className="px-4 py-4 border-t border-border">
        <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-muted/40 transition-colors">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent">
            أ
          </div>
          <div className="flex-1 text-start">
            <p className="text-sm font-medium text-foreground">أحمد علي</p>
            <p className="text-xs text-muted-foreground">admin@mekial.com</p>
          </div>
        </button>
      </div>
    </div>
  );
}
