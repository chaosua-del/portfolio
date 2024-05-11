"use client";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { getQueryClient } from "@/lib";
import { theme } from "@/shared/theme";
import { ChildrenProps } from "@/shared/types";

const Providers = ({ children }: ChildrenProps) => {
  const queryClient = getQueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ColorModeScript initialColorMode="light" />
        <ReactQueryDevtools initialIsOpen={false} />
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </QueryClientProvider>
    </>
  );
};

export default Providers;
