import Image from "next/image";
import Link from "next/link";

interface IBodyItem {
  type: "text" | "image" | "subheading";
  text?: string;
  url?: string;
  width?: number;
  height?: number;
  caption?: string | null;
  altText?: string;
}

interface INewsDetails {
  id: string;
  title: string;
  description: {
    blocks: {
      type: string;
      model: {
        blocks: {
          type: string;
          model: {
            text: string;
          };
        }[];
      };
    }[];
  };
  imageUrl: string;
  firstPublished: string;
  lastPublished: string;
  topics: {
    id: string;
    name: string;
  }[];
  tags: string[];
  body: IBodyItem[];
  text: string;
  wordCount: number;
  source: string;
  sourceUrl: string;
}

const NewsDetailsPage = async ({params,}: {params: Promise<{ newsId: string }>;}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const result = await res.json();
  const newsDetails: INewsDetails = result.data;

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">

      {/* Topics */}
      <div className="flex flex-wrap gap-2 mb-5">
        {newsDetails.topics.map((topic) => (
          <span
            key={topic.id}
            className="rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-600"
          >
            {topic.name}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
        {newsDetails.title}
      </h1>

      {/* Description */}
      <div className="mt-5 text-lg md:text-xl leading-relaxed text-gray-600">
        {newsDetails.description.blocks.map((block, index) =>
          block.model.blocks.map((item, itemIndex) => (
            <p key={`${index}-${itemIndex}`}>
              {item.model.text}
            </p>
          ))
        )}
      </div>

      {/* Meta information */}
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-y py-4 text-sm text-gray-500">
        <span>
          Published:{" "}
          {new Date(newsDetails.firstPublished).toLocaleDateString("bn-BD", {
            dateStyle: "long",
          })}
        </span>

        <span>•</span>

        <span>{newsDetails.wordCount} words</span>

        <span>•</span>

        <span>{newsDetails.source}</span>
      </div>

      {/* Main Image */}
      <div className="relative mt-8 overflow-hidden rounded-2xl">
        <Image
          src={newsDetails.imageUrl}
          alt={newsDetails.title}
          width={1200}
          height={675}
          className="h-auto w-full object-cover"
          priority
        />
      </div>

      {/* Main Image Caption */}
      <p className="mt-2 text-sm text-gray-500">
        {newsDetails.body.find((item) => item.type === "image")?.altText}
      </p>

      {/* Article Body */}
      <article className="mt-10">

        {newsDetails.body.map((item, index) => {

          {/* Text */}
          if (item.type === "text" && item.text) {
            return (
              <p
                key={index}
                className="mb-6 text-lg leading-8 text-gray-800"
              >
                {item.text}
              </p>
            );
          }

          {/* Subheading */}
          if (item.type === "subheading" && item.text) {
            return (
              <h2
                key={index}
                className="mt-10 mb-5 border-l-4 border-red-600 pl-4 text-2xl md:text-3xl font-bold text-gray-900"
              >
                {item.text}
              </h2>
            );
          }

          {/* Additional Image */}
          if (item.type === "image" && item.url) {
            return (
              <figure key={index} className="my-10">

                <Image
                  src={item.url}
                  alt={item.altText || newsDetails.title}
                  width={item.width || 800}
                  height={item.height || 450}
                  className="w-full rounded-xl object-cover"
                />

                {item.caption && (
                  <figcaption className="mt-2 text-sm text-gray-500">
                    {item.caption}
                  </figcaption>
                )}

              </figure>
            );
          }

          return null;
        })}

      </article>

      {/* Tags */}
      <div className="mt-12 border-t pt-6">

        <h3 className="mb-3 text-lg font-semibold">
          Tags
        </h3>

        <div className="flex flex-wrap gap-2">
          {newsDetails.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-700"
            >
              #{tag}
            </span>
          ))}
        </div>

      </div>

      {/* Source */}
      <div className="mt-8 rounded-xl bg-gray-50 p-5">

        <p className="text-sm text-gray-500">
          Source
        </p>

        <p className="mt-1 font-semibold">
          {newsDetails.source}
        </p>

        <Link
          href={newsDetails.sourceUrl}
          target="_blank"
          className="mt-3 inline-block text-sm font-medium text-red-600 hover:underline"
        >
          Read original article →
        </Link>

      </div>

    </main>
  );
};

export default NewsDetailsPage;