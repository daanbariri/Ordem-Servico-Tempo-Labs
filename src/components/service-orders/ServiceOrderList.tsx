import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Filter } from "lucide-react";
import ServiceOrderForm from "./ServiceOrderForm";

interface ServiceOrder {
  id: string;
  client: string;
  description: string;
  status: "pending" | "in_progress" | "completed" | "cancelled";
  priority: "low" | "medium" | "high";
  technician: string;
  scheduledDate: string;
}

interface ServiceOrderListProps {
  orders?: ServiceOrder[];
  onCreateOrder?: () => void;
}

const ServiceOrderList = ({
  orders = [
    {
      id: "OS001",
      client: "João Silva",
      description: "Manutenção de Computador",
      status: "pending",
      priority: "high",
      technician: "Carlos Técnico",
      scheduledDate: "2024-02-20",
    },
    {
      id: "OS002",
      client: "Maria Santos",
      description: "Instalação de Software",
      status: "in_progress",
      priority: "medium",
      technician: "Ana Técnica",
      scheduledDate: "2024-02-21",
    },
    {
      id: "OS003",
      client: "Pedro Oliveira",
      description: "Configuração de Rede",
      status: "completed",
      priority: "low",
      technician: "Roberto Técnico",
      scheduledDate: "2024-02-19",
    },
  ],
  onCreateOrder = () => {},
}: ServiceOrderListProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const getStatusColor = (status: string) => {
    const colors = {
      pending: "bg-yellow-100 text-yellow-800",
      in_progress: "bg-blue-100 text-blue-800",
      completed: "bg-green-100 text-green-800",
      cancelled: "bg-red-100 text-red-800",
    };
    return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      low: "bg-green-100 text-green-800",
      medium: "bg-yellow-100 text-yellow-800",
      high: "bg-red-100 text-red-800",
    };
    return (
      colors[priority as keyof typeof colors] || "bg-gray-100 text-gray-800"
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Ordens de Serviço</h2>
        <Button onClick={() => setIsFormOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Nova OS
        </Button>
      </div>

      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Buscar ordem de serviço..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="w-[200px]">
          <Select
            value={statusFilter}
            onValueChange={(value) => setStatusFilter(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os Status</SelectItem>
              <SelectItem value="pending">Pendente</SelectItem>
              <SelectItem value="in_progress">Em Andamento</SelectItem>
              <SelectItem value="completed">Concluído</SelectItem>
              <SelectItem value="cancelled">Cancelado</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Prioridade</TableHead>
              <TableHead>Técnico</TableHead>
              <TableHead>Data Agendada</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.client}</TableCell>
                <TableCell>{order.description}</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={getStatusColor(order.status)}
                  >
                    {order.status === "pending"
                      ? "Pendente"
                      : order.status === "in_progress"
                        ? "Em Andamento"
                        : order.status === "completed"
                          ? "Concluído"
                          : "Cancelado"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={getPriorityColor(order.priority)}
                  >
                    {order.priority === "low"
                      ? "Baixa"
                      : order.priority === "medium"
                        ? "Média"
                        : "Alta"}
                  </Badge>
                </TableCell>
                <TableCell>{order.technician}</TableCell>
                <TableCell>{order.scheduledDate}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Editar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <ServiceOrderForm
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </div>
  );
};

export default ServiceOrderList;
