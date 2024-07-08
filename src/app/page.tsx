"use client";

import { Chat, DataTableDemo } from "@/components/DataTable";
import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<Chat[]>([]);

  const fetchData = async () => {
    const response = await fetch("/api/get-all-chats", {
      method: "GET",
    });

    setData(await response.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex flex-col h-screen">
      <Header />
      <section className="w-full h-full flex">
        <SideBar />
        <DataTableDemo data={data} reloadChats={fetchData} />
      </section>
    </main>
  );
}
