import React from "react";
import { Card } from "@/components/ui/card";
import {
  TrendingUp,
  Users,
  ClipboardList,
  Clock,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
  trendUp?: boolean;
}

interface MetricsGridProps {
  metrics?: MetricCardProps[];
}

const MetricCard = ({
  title,
  value,
  icon,
  trend,
  trendUp = true,
}: MetricCardProps) => {
  return (
    <Card className="p-6 bg-white">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          {trend && (
            <p
              className={`text-sm ${trendUp ? "text-green-600" : "text-red-600"}`}
            >
              {trend}
            </p>
          )}
        </div>
        <div className="p-2 bg-primary/10 rounded-full">{icon}</div>
      </div>
    </Card>
  );
};

const MetricsGrid = ({ metrics }: MetricsGridProps) => {
  const defaultMetrics = [
    {
      title: "Total de OS",
      value: "156",
      icon: <ClipboardList className="h-6 w-6 text-primary" />,
      trend: "+12.5% este mês",
      trendUp: true,
    },
    {
      title: "Clientes Ativos",
      value: "84",
      icon: <Users className="h-6 w-6 text-primary" />,
      trend: "+5.2% este mês",
      trendUp: true,
    },
    {
      title: "OS Pendentes",
      value: "23",
      icon: <AlertCircle className="h-6 w-6 text-primary" />,
      trend: "-2.1% este mês",
      trendUp: false,
    },
    {
      title: "OS Concluídas",
      value: "133",
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
      trend: "+8.3% este mês",
      trendUp: true,
    },
    {
      title: "Tempo Médio",
      value: "2.5h",
      icon: <Clock className="h-6 w-6 text-primary" />,
      trend: "-0.5h este mês",
      trendUp: true,
    },
    {
      title: "Faturamento",
      value: "R$ 45.2K",
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      trend: "+15.3% este mês",
      trendUp: true,
    },
  ];

  const displayMetrics = metrics || defaultMetrics;

  return (
    <div className="w-full bg-background p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayMetrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  );
};

export default MetricsGrid;
