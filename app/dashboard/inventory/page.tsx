'use client';

import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Plus01Icon } from '@hugeicons/react';

export default function InventoryPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="المخزون"
        subtitle="إدارة المنتجات والأصناف"
        action={
          <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus01Icon size={18} />
            إضافة منتج
          </Button>
        }
      />
      <div className="ring-1 ring-foreground/10 bg-card rounded-xl p-12 text-center">
        <p className="text-muted-foreground">سيتم إضافة ميزات المخزون قريباً</p>
      </div>
    </div>
  );
}
