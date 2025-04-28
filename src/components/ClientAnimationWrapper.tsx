"use client";

import { ReactNode } from "react";

export default function ClientAnimationWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return <main>{children}</main>;
}
