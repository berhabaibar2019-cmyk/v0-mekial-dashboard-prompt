'use client';

import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function AccountingPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="المحاسبة"
        subtitle="الحسابات والفواتير والنفقات"
        action={
          <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus size={18} />
            فاتورة جديدة
          </Button>
        }
      />
      <div className="ring-1 ring-foreground/10 bg-card rounded-xl p-12 text-center">
        <p className="text-muted-foreground">سيتم إضافة ميزات المحاسبة قريباً</p>
      </div>
    </div>
  );
}
