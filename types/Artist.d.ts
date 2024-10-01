interface Artist {
  id: number;
  image?: string;
  image_width?: number;
  image_height?: number;
  name_en: string;
  name_th: string;
  slug?: string;
  born_at: number;
  dead_at: number;
  national_artist_majors: national_artist[];
}

interface ComponentArtistProps {
  artist: Artist[];
}

interface ArtistDetail {
  id: number;
  image?: string;
  slug?: string;
  name_th: string;
  name_en: string;
  born_at?: string;
  born_place?: string;
  dead_at?: string;
  address?: string;
  phone?: string;
  email?: string;
  facebook?: string;
  website?: string;
  remark?: string;
  group: string;
  group_display: string[];
  national_artist_year: number;
  educations: education[];
  national_artist_majors: national_artist[];
  awards: awards[];
  solo_exhibitions?: solo_exhibitions[];
  group_exhibitions?: group_exhibitions[];
  related_links?: related_links[];
  books?: books[];
}

interface education {
  start_year?: number;
  end_year?: number;
  title_th?: string;
  title_en?: string;
}

interface national_artist {
  field_display: string;
  field: string;
  year: number;
}

interface awards {
  start_year?: number;
  end_year?: number;
  title_th?: string;
  title_en?: string;
}

interface solo_exhibitions {
  start_year?: number;
  end_year?: number;
  title_th?: string;
  title_en?: string;
}

interface group_exhibitions {
  start_year?: number;
  end_year?: number;
  title_th?: string;
  title_en?: string;
}

interface related_links {
  image?: string;
  image_width?: number;
  image_height?: number;
  url?: string;
  caption?: string;
}

interface ComponentArtistDetailProps {
  artistDetail?: ArtistDetail | null;
}

interface books {
  id: number | string;
  image?: string;
  image_width?: number;
  image_height?: number;
  file?: string;
  book_type?: string;
  book_type_display?: string;
  number?: string;
  title_en?: string;
  title_th?: string;
  year?: number;
  place_en?: string;
  place_th?: string;
  exhibition_type?: string;
  exhibition_type_display?: string;
}
