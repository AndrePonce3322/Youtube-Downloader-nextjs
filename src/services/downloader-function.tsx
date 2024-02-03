import { Requirements } from '@/types/video-props';
import axios, {
  AxiosProgressEvent,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

// Progress observable
import { Subject } from 'rxjs';
export const progress$ = new Subject<number>();

export const download = async ({
  url,
  filter,
  quality,
  format,
  musicName,
}: Requirements) => {
  return new Promise<string>(async (resolve, reject) => {
    const config: AxiosRequestConfig = {
      // Configuración de la petición y descarga
      method: 'POST',
      url: '/api/download',
      data: { url, filter, quality },
      responseType: 'blob',
      onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
        if (progressEvent.total !== undefined) {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          progress$.next(percentCompleted);
        }
      },
    };

    try {
      // Descargar el video
      const response: AxiosResponse<Blob> = await axios(config);
      const blobUrl = window.URL.createObjectURL(response.data);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `${musicName}.${format}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      resolve('Descarga completada');
    } catch (error) {
      reject('Error al descargar');
    }
  });
};
