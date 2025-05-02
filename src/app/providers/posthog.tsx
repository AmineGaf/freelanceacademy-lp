"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";

const PixelTracker = dynamic(() => import("./meta"), { ssr: false });

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "", {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  });
}



export default function PHProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <div>
      
    <PostHogProvider client={posthog}>
      <QueryClientProvider client={queryClient}>
        <PixelTracker />
        {children}
      </QueryClientProvider>
    </PostHogProvider>
    </div>
  );
}
