import React, { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Plus, Search } from "lucide-react";
import ClientForm from "./ClientForm";

interface Client {
  id: string;
  name: string;
  document: string;
  email: string;
  phone: string;
  totalOrders: number;
  status: "active" | "inactive";
}

const Clients = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const clients: Client[] = [
    {
      id: "1",
      name: "João Silva",
      document: "123.456.789-00",
      email: "joao@email.com",
      phone: "(11) 99999-9999",
      totalOrders: 5,
      status: "active",
    },
    {
      id: "2",
      name: "Maria Santos",
      document: "987.654.321-00",
      email: "maria@email.com",
      phone: "(11) 88888-8888",
      totalOrders: 3,
      status: "active",
    },
    {
      id: "3",
      name: "Pedro Oliveira",
      document: "456.789.123-00",
      email: "pedro@email.com",
      phone: "(11) 77777-7777",
      totalOrders: 0,
      status: "inactive",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 bg-background p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Clientes</h1>
          <Button onClick={() => setIsFormOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Novo Cliente
          </Button>
        </div>

        <div className="flex gap-4 items-center mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar cliente..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>CPF/CNPJ</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Total de OS</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell className="font-medium">{client.name}</TableCell>
                  <TableCell>{client.document}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>{client.phone}</TableCell>
                  <TableCell>{client.totalOrders}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        client.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {client.status === "active" ? "Ativo" : "Inativo"}
                    </span>
                  </TableCell>
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

        <ClientForm open={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    </DashboardLayout>
  );
};

export default Clients;
