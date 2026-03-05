'use client';

import { AppSidebar } from './AppSidebar';
import { TopBar } from './TopBar';
import { motion } from 'framer-motion';

interface DashboardShellProps {
  children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex h-screen bg-background">
      {/* SVG Grid Background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Radial Glows */}
        <div className="absolute top-0 start-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-20 -z-10" />
        <div className="absolute bottom-0 end-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-20 -z-10" />
      </div>

      {/* Sidebar */}
      <AppSidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Bar */}
        <TopBar />

        {/* Content */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex-1 overflow-y-auto relative z-10"
        >
          <div className="p-4 sm:p-6 lg:p-8">
            {children}
          </div>
        </motion.main>
      </div>
    </div>
  );
}
