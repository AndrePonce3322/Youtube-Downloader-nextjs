'use client';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export default function RadioGroupForDialog({
  onValueChange,
}: {
  onValueChange: (e: string) => void;
}) {
  return (
    <RadioGroup defaultValue='audio-high' onValueChange={onValueChange}>
      <h6 className='font-medium text-sm mb-2 -mt-1 md:mt-0'>Audio</h6>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='audio-high' id='r1' />
        <Label htmlFor='r1'>Alto {'(720p)'}</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='audio-low' id='r2' />
        <Label htmlFor='r2'>Estandar {'(480p)'}</Label>
      </div>

      <h6 className='font-medium text-sm mt-3 mb-2'>Video</h6>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='video-high' id='r3' />
        <Label htmlFor='r3'>Alto {'(720p)'} </Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='video-low' id='r4' />
        <Label htmlFor='r4'>Estandar {'(480p)'}</Label>
      </div>
    </RadioGroup>
  );
}