'use client';

import { PageHeader } from '@/components/shared/PageHeader';

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="الإعدادات"
        subtitle="إدارة إعدادات التطبيق والحساب"
      />
      <div className="ring-1 ring-foreground/10 bg-card rounded-xl p-12 text-center">
        <p className="text-muted-foreground">سيتم إضافة ميزات الإعدادات قريباً</p>
      </div>
    </div>
  );
}
