'use client'

import { createContext, useState } from "react";

interface videoFormat {
  filter: string;
  quality: string;
  fileLength: string;
}

interface FormatsVideoContextType {
  formats: videoFormat[];
  setFormats: React.Dispatch<React.SetStateAction<videoFormat[]>>;
}

const defaultValues = {
  formats: {} as videoFormat[],
  setFormats: () => { },
}

export const FormatsVideoContext = createContext<FormatsVideoContextType>(defaultValues);

// Provider
export const FormatsVideoProvider = ({ children }: { children: React.ReactNode }) => {
  const [formats, setFormats] = useState<videoFormat[]>({} as videoFormat[]);

  return (
    <FormatsVideoContext.Provider value={{ formats, setFormats }}>
      {children}
    </FormatsVideoContext.Provider>
  )
}
