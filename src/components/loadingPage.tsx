"use client";

import { useCvStore } from "@/stores/cvStore";
import { PropsWithChildren } from "react";
import { Loading } from "./loading";

export type LoadingPageProps = PropsWithChildren;

export function LoadingPage({ children }: LoadingPageProps) {
  const { data, isLoading } = useCvStore();
  if (isLoading && !data) {
    return <Loading />;
  }
  return children;
}
