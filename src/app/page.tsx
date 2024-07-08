"use client";

import { DataTableDemo } from "@/components/DataTable";
import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";
import { useGlobalChatsContext } from "@/context/globalChatContext";
import { useEffect } from "react";

export default function Home() {
  const { chats, setChats } = useGlobalChatsContext();

  const fetchData = async () => {
    const response = await fetch("/api/get-all-chats", {
      method: "GET",
    });

    setChats(await response.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex flex-col h-screen">
      <Header />
      <section className="w-full h-full flex">
        <SideBar />
        <DataTableDemo data={chats} reloadChats={fetchData} />
      </section>
    </main>
  );
}
