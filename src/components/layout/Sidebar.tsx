import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

const Sidebar = ({ collapsed = false, onToggle = () => {} }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
    onToggle();
  };

  const menuItems = [
    { icon: <LayoutDashboard size={24} />, label: "Dashboard", href: "/" },
    { icon: <Users size={24} />, label: "Clientes", href: "/clients" },
    {
      icon: <ClipboardList size={24} />,
      label: "Ordens de Serviço",
      href: "/service-orders",
    },
    { icon: <Settings size={24} />, label: "Configurações", href: "/settings" },
  ];

  return (
    <div
      className={`h-screen bg-background border-r transition-all duration-300 flex flex-col justify-between ${
        isCollapsed ? "w-[80px]" : "w-[280px]"
      }`}
    >
      <div>
        {/* Logo Area */}
        <div className="p-4 border-b flex items-center justify-between">
          {!isCollapsed && (
            <span className="text-xl font-bold text-primary">ServiceOS</span>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleToggle}
            className="ml-auto"
          >
            {isCollapsed ? (
              <ChevronRight size={20} />
            ) : (
              <ChevronLeft size={20} />
            )}
          </Button>
        </div>

        {/* Navigation Menu */}
        <nav className="p-2">
          <TooltipProvider>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {isCollapsed ? (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-center"
                        >
                          {item.icon}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="right">{item.label}</TooltipContent>
                    </Tooltip>
                  ) : (
                    <Button variant="ghost" className="w-full justify-start">
                      {item.icon}
                      <span className="ml-3">{item.label}</span>
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          </TooltipProvider>
        </nav>
      </div>

      {/* Footer/Logout Area */}
      <div className="p-4 border-t">
        {isCollapsed ? (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" className="w-full justify-center">
                <LogOut size={24} />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">Sair</TooltipContent>
          </Tooltip>
        ) : (
          <Button variant="ghost" className="w-full justify-start">
            <LogOut size={24} />
            <span className="ml-3">Sair</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
