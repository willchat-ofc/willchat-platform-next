"use client";

import { createContext, useContext, useState } from "react";

interface Context {
  test: string;
}

const AppContext = createContext<Context>({ test: "Hello" });

export const AppWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  let [state, setState] = useState<Context>({ test: "hello" });

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
