import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface ClientFormProps {
  open?: boolean;
  onClose?: () => void;
}

const ClientForm = ({ open = true, onClose = () => {} }: ClientFormProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-white max-w-[600px] max-h-[800px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Cadastro de Cliente</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="personal">Dados Pessoais</TabsTrigger>
            <TabsTrigger value="history">Histórico de Serviços</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    placeholder="Digite o nome completo"
                    defaultValue="João Silva"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="document">CPF/CNPJ</Label>
                  <Input
                    id="document"
                    placeholder="Digite o CPF ou CNPJ"
                    defaultValue="123.456.789-00"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Digite o e-mail"
                    defaultValue="joao@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    placeholder="Digite o telefone"
                    defaultValue="(11) 99999-9999"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Endereço</Label>
                <Input
                  id="address"
                  placeholder="Digite o endereço completo"
                  defaultValue="Rua Exemplo, 123"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">Cidade</Label>
                  <Input
                    id="city"
                    placeholder="Digite a cidade"
                    defaultValue="São Paulo"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">Estado</Label>
                  <Input
                    id="state"
                    placeholder="Digite o estado"
                    defaultValue="SP"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="zipCode">CEP</Label>
                  <Input
                    id="zipCode"
                    placeholder="Digite o CEP"
                    defaultValue="12345-678"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Observações</Label>
                <Textarea
                  id="notes"
                  placeholder="Observações adicionais sobre o cliente"
                  className="min-h-[100px]"
                  defaultValue="Cliente preferencial"
                />
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card className="p-4">
              <div className="space-y-4">
                <div className="border rounded p-3">
                  <h3 className="font-medium">OS #1234 - Concluída</h3>
                  <p className="text-sm text-gray-600">Data: 01/01/2024</p>
                  <p className="text-sm">Manutenção preventiva realizada</p>
                </div>

                <div className="border rounded p-3">
                  <h3 className="font-medium">OS #1235 - Concluída</h3>
                  <p className="text-sm text-gray-600">Data: 15/01/2024</p>
                  <p className="text-sm">Troca de peças</p>
                </div>

                <div className="border rounded p-3">
                  <h3 className="font-medium">OS #1236 - Em andamento</h3>
                  <p className="text-sm text-gray-600">Data: 30/01/2024</p>
                  <p className="text-sm">Instalação de equipamento</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <DialogFooter className="sm:justify-end">
          <Button variant="outline" onClick={onClose} className="mr-2">
            Cancelar
          </Button>
          <Button
            type="submit"
            onClick={() => {
              // Handle form submission
              onClose();
            }}
          >
            Salvar Cliente
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ClientForm;
