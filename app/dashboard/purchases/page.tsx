'use client';

import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Plus } from '@hugeicons/react';

export default function PurchasesPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="المشتريات"
        subtitle="إدارة أوامر الشراء والموردين"
        action={
          <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus size={18} />
            أمر شراء جديد
          </Button>
        }
      />
      <div className="ring-1 ring-foreground/10 bg-card rounded-xl p-12 text-center">
        <p className="text-muted-foreground">سيتم إضافة ميزات المشتريات قريباً</p>
      </div>
    </div>
  );
}
