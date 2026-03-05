'use client';

import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Plus } from '@hugeicons/react';

export default function BranchesPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="الفروع"
        subtitle="إدارة فروع المتجر والمستودعات"
        action={
          <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus size={18} />
            فرع جديد
          </Button>
        }
      />
      <div className="ring-1 ring-foreground/10 bg-card rounded-xl p-12 text-center">
        <p className="text-muted-foreground">سيتم إضافة ميزات إدارة الفروع قريباً</p>
      </div>
    </div>
  );
}
