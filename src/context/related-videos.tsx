'use client'

import { RelatedVideos } from "@/types/related-video"

import { createContext, useState } from "react"

interface RelatedVideosContextType {
  relatedVideos: RelatedVideos[];
  setRelatedVideos: React.Dispatch<React.SetStateAction<RelatedVideos[]>>;
}

const defaultValues = {
  relatedVideos: {} as RelatedVideos[],
  setRelatedVideos: () => { },
}

export const RelatedVideosContext = createContext<RelatedVideosContextType>(defaultValues);

// Provider
export const RelatedVideosProvider = ({ children }: { children: React.ReactNode }) => {
  const [relatedVideos, setRelatedVideos] = useState<RelatedVideos[]>(defaultValues.relatedVideos);

  return (
    <RelatedVideosContext.Provider value={{ relatedVideos, setRelatedVideos }}>
      {children}
    </RelatedVideosContext.Provider>
  )
}