'use client'
import { FormatsVideoContext } from "@/context/formats";
import { useContext } from "react";

export default function useVideoFormats() {
  const { formats } = useContext(FormatsVideoContext);
  return formats;
}
