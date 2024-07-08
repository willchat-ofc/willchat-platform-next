"use client";

import { Chat, DataTableDemo } from "@/components/DataTable";
import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<Chat[]>([]);

  // const data: Chat[] = [
  //   {
  //     id: "m5gr84i1",
  //     createdAt: "15/10/2004",
  //   },
  // ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/get-all-chats", {
        method: "GET",
      });

      setData(await response.json());
    };

    fetchData();
  }, []);

  return (
    <main className="flex flex-col h-screen">
      <Header />
      <section className="w-full h-full flex">
        <SideBar />
        <DataTableDemo data={data} />
      </section>
    </main>
  );
}
