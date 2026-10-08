import NewsCard from "@/app/components/NewsCard";
import { notFound } from "next/navigation";

interface INews {
  id: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
}
interface IPromiseProps {
  params: Promise<{ categoryId: string }>;
};

const CategoryPage = async ({ params }: IPromiseProps) => {
  const { categoryId } = await params;
  // console.log(categoryId);

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );
  const data = await res.json();
  const categoryNews: INews[] = data.data;

  if(!categoryNews){
    notFound()
  }
//   console.log(categoryNews);

  return (
    <div className="mt-4">
      <h1 className="text-2xl font-bold border-b-2 border-red-600 mb-2">
        {data.title}{" "}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
