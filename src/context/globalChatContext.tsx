"use client";

import { Chat } from "@/models/chat";
import { createContext, useContext, useState } from "react";

interface ChatContextProps {
  chats: Chat[];
  setChats: React.Dispatch<React.SetStateAction<Chat[]>>;
}

const GlobalChatContext = createContext<ChatContextProps>({
  chats: [],
  setChats: () => {},
});

export const GlobalChatWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  let [chats, setChats] = useState<Chat[]>([]);

  return (
    <GlobalChatContext.Provider value={{ chats, setChats }}>
      {children}
    </GlobalChatContext.Provider>
  );
};

export const useGlobalChatsContext = () => {
  return useContext(GlobalChatContext);
};
