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
interface CollectionArtist{
  id: number;
  image:string;
  image_width:number;
  image_height:number;
  slug:string;
  name_en?:string;
  name_th?:string;
}

interface GameListDetail {
  id: number;
  title:string;
  thumbnail: string;
  thumbnail_width?: number;
  thumbnail_height?: number;
  status?: string;
  short_description?: string;
  description?: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  minimum_system_requirements: minimum_system_requirements;
  screenshots: Screenshot[];
}

interface minimum_system_requirements{
     os?: string,
     processor?: string,
     memory?: string,
     graphics?: string,
     storage?: string
}
interface Screenshot{
  id:number,
  image:string
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

interface GameListSearch{
  q: string;
  platformGame?: string;
  years: number[];
  artist_first_Alphabet:string;
  genre:string;
  sort:string;
  National?:boolean;
}
