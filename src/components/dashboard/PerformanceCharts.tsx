import React, { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  BarChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface PerformanceChartsProps {
  monthlyData?: Array<{
    month: string;
    completedOrders: number;
    revenue: number;
  }>;
  techniciansData?: Array<{
    name: string;
    completedOrders: number;
    avgCompletionTime: number;
  }>;
}

const PerformanceCharts = ({
  monthlyData = [
    { month: "Jan", completedOrders: 45, revenue: 15000 },
    { month: "Feb", completedOrders: 52, revenue: 17500 },
    { month: "Mar", completedOrders: 48, revenue: 16200 },
    { month: "Apr", completedOrders: 58, revenue: 19800 },
    { month: "May", completedOrders: 63, revenue: 21500 },
    { month: "Jun", completedOrders: 57, revenue: 19200 },
  ],
  techniciansData = [
    { name: "Carlos", completedOrders: 28, avgCompletionTime: 2.5 },
    { name: "Ana", completedOrders: 32, avgCompletionTime: 2.2 },
    { name: "Roberto", completedOrders: 25, avgCompletionTime: 2.8 },
    { name: "Julia", completedOrders: 30, avgCompletionTime: 2.4 },
  ],
}: PerformanceChartsProps) => {
  return (
    <Card className="p-6 bg-white w-full h-[400px]">
      <Tabs defaultValue="monthly" className="h-full">
        <TabsList className="mb-4">
          <TabsTrigger value="monthly">Desempenho Mensal</TabsTrigger>
          <TabsTrigger value="technicians">Desempenho por Técnico</TabsTrigger>
        </TabsList>

        <TabsContent value="monthly" className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={monthlyData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="completedOrders"
                name="Ordens Concluídas"
                stroke="#2563eb"
                activeDot={{ r: 8 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="revenue"
                name="Receita (R$)"
                stroke="#16a34a"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </TabsContent>

        <TabsContent value="technicians" className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={techniciansData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="completedOrders"
                name="Ordens Concluídas"
                fill="#2563eb"
              />
              <Bar
                dataKey="avgCompletionTime"
                name="Tempo Médio (h)"
                fill="#16a34a"
              />
            </BarChart>
          </ResponsiveContainer>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default PerformanceCharts;
