import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/collections/CollectionRama.module.css';
interface CollectionProps {
  Collection: Collection
}

export function ArtCollectionItem({ Collection }: CollectionProps) {
  return (
    <Link key={Collection.id} className={`p-2 my-5 cursor-pointer ${styles.perspective}`} href={`/collections/${Collection.slug || Collection.id}`}>
      <div className="transition-[transform_1s,shadow] duration-700 ease-in-out shadow-[10px_10px_5px_0px_rgba(210,215,211)] hover:scale-110  hover:shadow-[10px_10px_10px_0px_rgba(210,215,211)] hover:bg-white hover:z-10 h-0 pb-[100%] relative rounded-lg overflow-hidden">
        <Image className="object-cover object-center w-full h-full absolute top-0 bottom-0 left-0 right-0" src={`${Collection.image}`} alt={`${Collection.title_en}`} width={Collection.image_width} height={Collection.image_height} />
      </div>
      <div className="text-sm text-left pt-5 min-h-[60px] flex flex-col justify-center">
        <p className='font-bold text-base'>{Collection.artist?.name_en !== "" && Collection.artist?.name_en ? Collection.artist?.name_en : Collection.artist?.name_th}</p>
        <p className="text-sm text-left">{Collection.title_en !== "-" && Collection.title_en ? Collection.title_en : Collection.title_th}{Collection.title_en === "" && Collection.title_th === "" ? "Untitled":""} , {Collection.year !== null ? Collection.year : "Not Have Year"}</p>
      </div>
      {/* {Collection.year !== 0 && Collection.year ? <p className='text-sm text-center'>({Collection.year})</p> : <p className="invisible">()</p>} */}
    </Link>
  )
}
