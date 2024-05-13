/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7QZkAksiKu7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"
import NewsDialog from "@/components/news/dialog";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const initialData: { title: string; description: string; image: string } = {
    title: "",
    description: "",
    image: "",
  };
  const [data, setData] = useState(initialData);
  const [newsData, setNewsData] = useState([]);

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleAdd = () => {
    
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Latest News</h1>
        <NewsDialog
          buttonLabel="Add News"
          data={data}
          setData={setData}
          newsData={newsData}
          setNewsData={setNewsData}
          handleChange={(e)=>handleChange(e)}
          handleAdd={handleAdd}
        />
        {/* <Link
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="#"
        >
          Add News
        </Link> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg overflow-hidden shadow-sm dark:bg-gray-950">
          <Image
            alt="News Image"
            className="w-full h-48 object-cover"
            height={400}
            src="/placeholder.svg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width={600}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">
              Exciting New Product Launch
            </h3>
            <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
              Our team is thrilled to announce the launch of our latest product,
              designed to revolutionize the industry. Learn more about the
              features and benefits.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-sm dark:bg-gray-950">
          <Image
            alt="News Image"
            className="w-full h-48 object-cover"
            height={400}
            src="/placeholder.svg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width={600}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">
              Company Expands to New Markets
            </h3>
            <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
              We are excited to share that our company is expanding its reach to
              new markets, bringing our innovative solutions to more customers
              around the world.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-sm dark:bg-gray-950">
          <Image
            alt="News Image"
            className="w-full h-48 object-cover"
            height={400}
            src="/placeholder.svg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width={600}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">
              Sustainability Initiatives Launched
            </h3>
            <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
              We are proud to announce the launch of our new sustainability
              initiatives, aimed at reducing our environmental impact and
              promoting eco-friendly practices.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-sm dark:bg-gray-950">
          <Image
            alt="News Image"
            className="w-full h-48 object-cover"
            height={400}
            src="/placeholder.svg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width={600}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">
              Introducing Our New Leadership Team
            </h3>
            <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
              We are excited to welcome our new leadership team, who will be
              guiding the company towards even greater success. Learn more about
              their backgrounds and vision.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-sm dark:bg-gray-950">
          {/* <img
            alt="News Image"
            className="w-full h-48 object-cover"
            height={400}
            src="/placeholder.svg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width={600}
          /> */}
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">
              Celebrating Our Company Milestone
            </h3>
            <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
              We are thrilled to celebrate a major milestone in our
              company&apos;s history. Join us as we reflect on our journey and
              look forward to the exciting future ahead.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-sm dark:bg-gray-950">
          <Image
            alt="News Image"
            className="w-full h-48 object-cover"
            height={400}
            src="/placeholder.svg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width={600}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">
              Innovative Solutions for Our Customers
            </h3>
            <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
              Our team has been working hard to develop new and innovative
              solutions to better serve our customers. Discover how our latest
              products and services can benefit your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
