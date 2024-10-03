import CollectionDetailData from "./CollectionDetailData";

export default function Page({ params }: { params: { slug: string; id: number } }) {
  return (
    <div>
      <CollectionDetailData params={params} />
    </div>
  );
}
