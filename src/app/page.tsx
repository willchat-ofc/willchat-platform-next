"use client";

import { DataTableDemo } from "@/components/DataTable";
import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";
import { useGlobalChatsContext } from "@/context/globalChatContext";
import { useEffect, useState } from "react";
import { CircularProgress, Skeleton } from "@mui/material";

export default function Home() {
  const { chats, setChats } = useGlobalChatsContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/get-all-chats", {
        method: "GET",
      });

      setChats(await response.json());
      setIsLoading(false);
    };

    fetchData();
  }, [setChats, setIsLoading]);

  return (
    <main className="flex flex-col h-screen">
      <Header />
      <section className="w-full h-full flex">
        <SideBar />
        {isLoading ? (
          <CircularProgress className="m-auto" size={80} />
        ) : (
          <DataTableDemo data={chats} />
        )}
      </section>
    </main>
  );
}
