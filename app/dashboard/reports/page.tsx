'use client';

import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="التقارير"
        subtitle="التقارير والإحصائيات التفصيلية"
        action={
          <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus size={18} />
            تقرير جديد
          </Button>
        }
      />
      <div className="ring-1 ring-foreground/10 bg-card rounded-xl p-12 text-center">
        <p className="text-muted-foreground">سيتم إضافة ميزات التقارير قريباً</p>
      </div>
    </div>
  );
}
