import { Requirements } from '@/types/video-props';

export const download = async () => {
  const requirements: Requirements = {
    url: 'https://www.youtube.com/watch?v=HzKmEgrR4Vk',
    filter: 'videoonly',
    quality: 'highest',
  };

  // Make petition to the server
  const response = await fetch('/api/download', {
    method: 'POST',
    body: JSON.stringify(requirements),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const blob = await response.blob();
  const blobUrl = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = blobUrl;
  a.download = 'audio.mp3';
  document.body.appendChild(a);
  a.click();
  a.remove();
};
