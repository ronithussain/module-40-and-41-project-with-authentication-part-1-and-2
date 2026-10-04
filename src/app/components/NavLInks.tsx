import Link from "next/link";

interface INavs {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}
const NavLInks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs: INavs[] = data.data;

  const filterNavs = navs.filter((f) => f.scrapable === true);

  console.log(filterNavs);
  return (
    <div className="flex justify-center gap-3 mt-5 font-semibold text-md sm:text-xl">
      <Link href="/">হোম</Link>
      {filterNavs.map((n, i) => (
        <Link key={i} href={n.slug}>
          {n.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLInks;
