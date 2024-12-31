import React, { useState, useEffect } from "react";
import DashboardLayout from "./layout/DashboardLayout";
import MetricsGrid from "./dashboard/MetricsGrid";
import PerformanceCharts from "./dashboard/PerformanceCharts";
import ServiceOrderList from "./service-orders/ServiceOrderList";
import ClientForm from "./clients/ClientForm";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const Home = () => {
  const [isClientFormOpen, setIsClientFormOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="space-y-6 bg-background p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Painel</h1>
          <Button onClick={() => setIsClientFormOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Novo Cliente
          </Button>
        </div>

        <MetricsGrid />

        <PerformanceCharts />

        <ServiceOrderList />

        <ClientForm
          open={isClientFormOpen}
          onClose={() => setIsClientFormOpen(false)}
        />
      </div>
    </DashboardLayout>
  );
};

export default Home;
