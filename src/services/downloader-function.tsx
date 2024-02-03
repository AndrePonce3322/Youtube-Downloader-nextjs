import { Requirements } from '@/types/video-props';

export const download = async ({ url, filter, quality }: Requirements) => {
  // Make petition to the server
  const response = await fetch('/api/download', {
    method: 'POST',
    body: JSON.stringify({ url, filter, quality }),
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

// import { Requirements } from '@/types/video-props';
// import axios, {
//   AxiosProgressEvent,
//   AxiosRequestConfig,
//   AxiosResponse,
// } from 'axios';

import { Subject } from 'rxjs';
export const progress$ = new Subject<number>();

// export const download = async ({ url, filter, quality }: Requirements) => {
//   const config: AxiosRequestConfig = {
//     // Configuración de la petición y descarga
//     method: 'POST',
//     url: '/api/download',
//     data: { url, filter, quality },
//     responseType: 'blob',
//     onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
//       if (progressEvent.total !== undefined) {
//         const percentCompleted = Math.round(
//           (progressEvent.loaded * 100) / progressEvent.total
//         );
//         progress$.next(percentCompleted);
//       }
//     },
//   };

//   try {
//     // Descargar el video
//     const response: AxiosResponse<Blob> = await axios(config);
//     const blobUrl = window.URL.createObjectURL(response.data);
//     const a = document.createElement('a');
//     a.href = blobUrl;
//     a.download = 'video.mp4';
//     document.body.appendChild(a);
//     a.click();
//     a.remove();
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };
