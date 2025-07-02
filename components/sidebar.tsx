"use client"

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { Home, LogOut } from "lucide-react"

function SidebarMenuIconButton({ icon: Icon, text, tooltip }: { icon: any; text: string; tooltip: string }) {
  const { state } = useSidebar();
  return (
    <SidebarMenuButton
      tooltip={tooltip}
      className={
        state === "collapsed"
          ? "justify-center items-center flex flex-col h-12 w-12 mx-auto"
          : ""
      }
    >
      <Icon className={state === "collapsed" ? "mx-auto mb-0.5" : "mr-2"} />
      {state !== "collapsed" && <span>{text}</span>}
    </SidebarMenuButton>
  );
}

export default function AppSidebar() {
  return (
    <SidebarProvider defaultOpen={false}>
      <Sidebar
        className="bg-sidebar text-sidebar-foreground border-r border-sidebar-border min-h-screen"
        collapsible="icon"
      >
        {/* Botón para colapsar/desplegar */}
        <div className="flex items-center justify-center px-2 py-4 border-b border-sidebar-border">
          <SidebarTrigger />
        </div>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuIconButton icon={Home} text="Inicio" tooltip="Inicio" />
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuIconButton icon={LogOut} text="Cerrar sesión" tooltip="Cerrar sesión" />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}
