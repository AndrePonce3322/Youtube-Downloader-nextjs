'use client';

import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { Input } from '../ui/input';

export default function InputSearchVideo() {
  const router = useRouter();

  const onHandleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      search: { value: string };
    };

    const search = target.search.value;
    if (!search) return router.push('/');
    router.push(`/search?q=${search}`);
  };

  return (
    <form action='/search' onSubmit={onHandleSubmit}>
      <Input
        type='search'
        placeholder='Buscar'
        className='w-[450px]'
        name='search'
      />
    </form>
  );
}
