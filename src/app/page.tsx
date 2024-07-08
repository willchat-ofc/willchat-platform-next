"use client";

import { DataTableDemo } from "@/components/DataTable";
import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";
import { useGlobalChatsContext } from "@/context/globalChatContext";
import { useEffect } from "react";

export default function Home() {
  const { chats, setChats } = useGlobalChatsContext();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/get-all-chats", {
        method: "GET",
      });

      setChats(await response.json());
    };

    fetchData();
  }, [setChats]);

  return (
    <main className="flex flex-col h-screen">
      <Header />
      <section className="w-full h-full flex">
        <SideBar />
        <DataTableDemo data={chats} />
      </section>
    </main>
  );
}
