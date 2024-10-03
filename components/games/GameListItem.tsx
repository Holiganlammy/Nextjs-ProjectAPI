import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/games/CollectionRama.module.css';
import { Button } from '../ui/button';
interface CollectionProps {
  Collection: Games
}
export function GameListItem({ Collection }: CollectionProps) {
  return (
    <Link key={Collection.id} className={`p-2 my-2 cursor-pointer ${styles.perspective}`} href={`/collections/${Collection.title || Collection.id}`}>
      <div className="transition-[transform_1s,shadow] duration-700 ease-in-out shadow-[10px_10px_5px_0px_rgba(210,215,211)] hover:scale-110  hover:shadow-[10px_10px_10px_0px_rgba(210,215,211)] hover:bg-white hover:z-10 h-0 pb-[55%] pr-[100%] relative rounded-lg overflow-hidden">
        <Image className="object-cover object-center w-full h-full absolute top-0 bottom-0 left-0 right-0" src={`${Collection.thumbnail}`} alt={`${Collection.title}`} width={500} height={500} />
      </div>
      <div className='text-sm text-left pt-5 flex justify-between'>
        <div className="">
          <p className='font-bold text-base'>{Collection.title}</p>
          <p className="text-sm text-left">{Collection.genre} , {Collection.platform !== null ? Collection.platform : "Not Have Platform"}</p>
        </div>
        <div>
          <Button className='max-w-[70px] text-xs'>Free Game</Button>
        </div>
      </div>
      {/* {Collection.year !== 0 && Collection.year ? <p className='text-sm text-center'>({Collection.year})</p> : <p className="invisible">()</p>} */}
    </Link>
  )
}
