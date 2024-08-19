import Link from 'next/link';
import React from 'react';

const Table = () => {
  return (
    <div className='flex flex-col py-2 px-2 gap-2 text-center'>
      <Link className='border-[1px] border-black w-[100px]' href="/leaves?id=1">Demo</Link>
      <Link className='border-[1px] border-black w-[100px]' href="/leaves?id=2">Dummy</Link>
      <Link className='border-[1px] border-black w-[100px]' href="/leaves?id=3">Sample</Link>
    </div>
  );
}

export default Table;
