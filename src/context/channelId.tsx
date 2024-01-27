'use client';

import { createContext, useState } from 'react';

export const ChannelIdContext = createContext({
  channelId: '',
  setChannelId: (id: string) => {},
});

export default function ChannelIdProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [channelId, setChannelId] = useState('');

  return (
    <ChannelIdContext.Provider value={{ channelId, setChannelId }}>
      {children}
    </ChannelIdContext.Provider>
  );
}
