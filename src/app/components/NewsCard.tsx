import Image from "next/image";
import Link from "next/link";
interface INews {
  id: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
}
const NewsCard = ({ news }: { news: INews }) => {
  // console.log(news);
  return (
    <div>
      <Link href={`/news-details/${news.id}`}>
        <div className="card bg-base-100 shadow-sm rounded-none">
          <figure>
            <Image
              src={news.imageUrl}
              width={600}
              height={600}
              alt={news.imageUrl}
            ></Image>
          </figure>
          <div className="card-body px-2">
            <p className="font-semibold text-red-700 text-lg">
              {news.category}
            </p>
            <h2 className="card-title">{news.title}</h2>
            <p>{news.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
