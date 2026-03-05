'use client';

import { usePathname } from 'next/navigation';
import { Search, Bell, Menu, X } from '@hugeicons/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MobileSidebarNav } from './MobileSidebarNav';

function BreadcrumbNav() {
  const pathname = usePathname();
  const segments = pathname
    .split('/')
    .filter(Boolean)
    .slice(1); // Remove 'dashboard'

  const breadcrumbs = [
    { label: 'اللوحة الرئيسية', href: '/dashboard' },
    ...segments.map((segment, idx) => {
      const href = `/dashboard/${segments.slice(0, idx + 1).join('/')}`;
      const label = segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      return { label, href };
    }),
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto">
      {breadcrumbs.map((breadcrumb, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.05 }}
          className="flex items-center gap-2"
        >
          {idx > 0 && (
            <span className="text-muted-foreground text-sm">/</span>
          )}
          <a
            href={breadcrumb.href}
            className={cn(
              'text-sm whitespace-nowrap transition-colors',
              idx === breadcrumbs.length - 1
                ? 'text-foreground font-medium'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {breadcrumb.label}
          </a>
        </motion.div>
      ))}
    </div>
  );
}

export function TopBar() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 h-14 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between h-full px-4 gap-4">
          {/* Start (Right) - Mobile Menu + Breadcrumb */}
          <div className="flex items-center gap-4 flex-1">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 p-0 border-l border-border">
                <MobileSidebarNav />
              </SheetContent>
            </Sheet>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="hidden sm:block"
            >
              <BreadcrumbNav />
            </motion.div>
          </div>

          {/* Center - Search */}
          <motion.div
            animate={{
              width: isSearchFocused ? '300px' : '200px',
            }}
            transition={{ duration: 0.3 }}
            className="hidden sm:flex items-center gap-2 relative"
          >
            <Search
              size={16}
              className="absolute start-3 text-muted-foreground pointer-events-none"
            />
            <Input
              type="text"
              placeholder="بحث سريع..."
              className="ps-8 h-8 bg-muted/40 border-0 focus:bg-muted/60 text-sm"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </motion.div>

          {/* End (Left) - Notifications, Plan, Avatar */}
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative">
                    <Bell size={18} />
                    <span className="absolute top-1 end-1 w-2 h-2 rounded-full bg-red-500" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>إشعارات</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div className="hidden sm:block px-2 py-1 rounded-md bg-muted/40 text-xs font-medium text-accent">
              خطة النمو
            </div>

            <button className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent hover:bg-accent/30 transition-colors">
              أ
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
