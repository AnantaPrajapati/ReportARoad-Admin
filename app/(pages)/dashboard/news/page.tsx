/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7QZkAksiKu7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import NewsDialog from "@/components/news/dialog";
import Image from "next/image";
import { getNews } from "./action";
import DeleteNewsDialog from "@/components/news/deletedialog";
// import { useEffect } from "react";
// import mongoose from "mongoose";
// import { News } from "./schema";

export default async function Page() {
  // const [data, setData] = useState();
  const news = await getNews();
  console.log("news", news);


  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Latest News</h1>
        <NewsDialog
          buttonLabel="Add News"
        />
        {/* <Link
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="#"
        >
          Add News
        </Link> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {news?.map((element) => (
          <div className="bg-white rounded-lg overflow-hidden shadow-sm dark:bg-gray-950" key={element?._id}>
            {String(element?.image).includes('.jpg' || ".png") && (
              <Image
                alt="News Image"
                className="w-full h-48 object-cover"
                height={400}
                src={element?.image}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
            )}
            {String(element?.image).includes('.mov') && (
              <video src={element.image} controls height={400}
                style={{
                  aspectRatio: "500/270",
                  objectFit: "contain",
                }}
                width={600}></video>
            )}


            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                {element?.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 line-clamp-b 2">
                {element?.desc}
              </p>
            </div>
            <DeleteNewsDialog buttonLabel="Delete" _id={element?._id} />
          </div>))}
      </div>
    </div>
  );
}