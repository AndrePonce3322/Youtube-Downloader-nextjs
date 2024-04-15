export const qualityOptions = {
  'audio-high': {
    filter: 'audioonly',
    quality: 'highest',
    format: 'mp3',
  },
  'audio-low': {
    filter: 'audioonly',
    quality: 'lowest',
    format: 'mp3',
  },
  'video-high': {
    filter: 'videoandaudio',
    quality: 'highest',
    format: 'mp4',
  },
  'video-low': {
    filter: 'videoandaudio',
    quality: 'lowest',
    format: 'mp4',
  },
};


export const AVAILABLE_TYPING = [
  {
    filter: 'audioonly',
    quality: 'highest',
  },
  {
    filter: 'audioonly',
    quality: 'lowest',
  },
  {
    filter: 'videoandaudio',
    quality: 'highest',
  },
  {
    filter: 'videoandaudio',
    quality: 'lowest',
  }
]