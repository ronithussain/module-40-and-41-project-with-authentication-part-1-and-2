import MainNews from "./components/MainNews";
import MostRead from "./components/MostRead";
import NewsCard from "./components/NewsCard";

interface OtherSections {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}
const HomePage = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;

  const otherSections: OtherSections[] = sections.slice(1);
  // console.log(otherSections);
  return (
    <div>
      <div>
        
        <div className=" px-4 grid grid-cols-1 md:grid-cols-3 mt-4 gap-6">
          {/* news section */}
          <div className="col-span-1 md:col-span-2 order-2 md:order-1">
            <MainNews news={mainNews} />
            <div className="mt-4 grid gap-4">
              {otherSections.map((os) => (
                <div key={os.curationId}>
                  <h2 className="border-b-2 border-red-700 mb-2 font-bold ">
                    {os.title}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {os.articles.map((news) => (
                      <NewsCard key={news.id} news={news} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* most read section */}
          <div className=" col-span-1 order-1 md:order-2">
            <MostRead/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
