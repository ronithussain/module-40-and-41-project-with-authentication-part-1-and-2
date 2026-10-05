import Image from "next/image";
interface INews {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}
const MainNews = ({ news }: { news: INews[] }) => {
  const [firstNews, ...otherNews] = news;
//   console.log(firstNews, otherNews);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <Image
            src={firstNews.imageUrl}
            width={600}
            height={600}
            alt={firstNews.imageUrl}
          ></Image>
        </figure>
        <div className="card-body">
          <p className="font-semibold text-red-700 text-lg">
            {firstNews.category}
          </p>
          <h2 className="card-title">{firstNews.title}</h2>
          <p>{firstNews.description}</p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-sm rounded-md">
        {otherNews.slice(0,5).map((other) => (
          <div key={other.id}>
            <div className="border border-gray-300 px-2 py-4">
              <p className="font-semibold text-red-700 text-lg">
                {firstNews.category}
              </p>
              <p>{other.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
