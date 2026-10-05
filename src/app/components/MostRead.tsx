
interface MostNews {
    id:string,
    title:string
}
const MostRead = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read')
    const data = await res.json()
    const mostNews:MostNews[] = data.data;
    // console.log(mostNews);
    return (
        <div className="card bg-base-100 p-4 border border-gray-300 rounded-md grid gap-4">
            <h1 className="text-xl font-bold mb-2">সর্বাধিক পঠিত</h1>
            {
                mostNews.map((mNews,i) => <div className="flex gap-x-3" key={mNews.id}>
                    <span className="font-bold text-xl text-red-600">{i + 1}</span><h2 className="font-semibold">{mNews.title}</h2>
                </div>)
            }
        </div>
    );
};

export default MostRead;