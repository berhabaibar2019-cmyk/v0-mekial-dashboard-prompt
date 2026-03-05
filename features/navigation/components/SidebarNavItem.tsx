'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SidebarNavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
  isCollapsed: boolean;
  badge?: number | string;
}

export function SidebarNavItem({
  icon,
  label,
  href,
  isActive,
  isCollapsed,
  badge,
}: SidebarNavItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles = 'relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group';
  const activeStyles = isActive
    ? 'bg-primary text-primary-foreground border-e-2 border-accent'
    : 'text-muted-foreground hover:bg-muted/40 hover:text-foreground';

  const itemContent = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, activeStyles)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center w-6 h-6 flex-shrink-0">
        {icon}
      </div>

      {!isCollapsed && (
        <motion.span
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 'auto' }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ duration: 0.2 }}
          className="text-sm font-medium whitespace-nowrap overflow-hidden"
        >
          {label}
        </motion.span>
      )}

      {badge && !isCollapsed && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="ms-auto flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold"
        >
          {badge}
        </motion.span>
      )}

      {badge && isCollapsed && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-0 end-0 w-2 h-2 rounded-full bg-red-500"
        />
      )}
    </motion.div>
  );

  if (isCollapsed) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={href} className="w-full">
              {itemContent}
            </Link>
          </TooltipTrigger>
          <TooltipContent side="start" className="text-xs">
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <Link href={href} className="w-full">
      {itemContent}
    </Link>
  );
}
