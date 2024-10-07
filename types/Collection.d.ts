interface Games {
  id: number | string;
  title?: string;
  thumbnail?: string;
  thumbnail_width?: number;
  thumbnail_height?: number;
  short_description?:string;
  game_url?: string;
  genre?: string;
  platform:string;
  publisher: string;
  developer: string;
  release_date?: string;
  freetogame_profile_url?:string
  // artist?:CollectionArtist;
}
// "id": 582,
// "title": "Tarisland",
// "thumbnail": "https://www.freetogame.com/g/582/thumbnail.jpg",
// "short_description": "A cross-platform MMORPG developed by Level Infinite and Published by Tencent.",
// "game_url": "https://www.freetogame.com/open/tarisland",
// "genre": "MMORPG",
// "platform": "PC (Windows)",
// "publisher": "Tencent",
// "developer": "Level Infinite",
// "release_date": "2024-06-22",
// "freetogame_profile_url": "https://www.freetogame.com/tarisland"
interface CollectionArtist{
  id: number;
  image:string;
  image_width:number;
  image_height:number;
  slug:string;
  name_en?:string;
  name_th?:string;
}

interface CollectionDetail {
  id: number;
  image?: string;
  image_width?: number;
  image_height?: number;
  work_type?: string;
  received_at?: string;
  current_status?: string;
  acquirement?: string;
  title_en: string;
  title_th: string;
  year: number;
  year_2: number;
  technique_display: string;
  other_technique_th: string;
  other_technique_en: string;
  size: string;
  size_measurement: string;
  size_with_frame: string;
  size_with_frame_measurement: string;
  slug?:string;
  artist?: CollectionArtist;
  exhibitions: CollectionExhibition[];
}


interface CollectionAnother{
  id:number;
  image:string;
  slug?:string;
  title_th:string;
  title_en:string;
  image_width:number
  image_height:number
  name_en:string;
  name_th:string;
  year:number;
  year_2:number;
  technique_th:string
  technique_en:string
}

interface CollectionExhibition {
  id?: number;
  image?: string;
  image_width?: number;
  image_height?: number;
  year?: number;
  title_th?: string;
  title_en?: string;
  place?: string;
  description?: string;
  art_collection?: string;
}

interface CollectionSearch{
  q: string;
  platformGame?: string;
  years: number[];
  artist_first_Alphabet:string;
  sort: string;
  National?:boolean;
}
