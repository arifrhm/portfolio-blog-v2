import React from "react";
import Image from "next/image";

const portfolioItems = [
  {
    title: "Data Engineering in Ad Tech enterprise",
    description:
      "I’ve been working for a big Ad Tech enterprise (manages ~$2B in media spend and deploys campaigns in 70 markets, clients portfolio including: Google, Viber, etc). The company had a huge amount of...",
    date: "2017-2022",
    readTime: "11 min read",
    imageUrl: "/media/img/post/preview/m_2p5x_1.png",
  },
  {
    title: "AI for hiring — recommendation system for recruiters",
    description:
      "This is a recommendation system for recruiters that estimates how new candidates suit available vacancies. It was developed for a real IT company based on their data after consulting experts. The...",
    date: "2017",
    readTime: "5 min read",
    imageUrl: "/media/img/post/preview/m_2p5x_2.png",
  },
  {
    title: "Panacea. CRM for city Ambulance",
    description:
      "This project, Panacea, is a system aimed at storing data about city ambulance calls, building flexible dashboards, statistics and people search. BackgroundOnce, in 2015 Lviv Governor visited Lviv main ambulance...",
    date: "2015-2018",
    readTime: "4 min read",
    imageUrl: "/media/img/post/preview/m_2p5x_3.png",
  },
  // Add more items as needed
];

const PortfolioSection: React.FC = () => {
  return (
    <section className="pt-20 py-12">
      <div className="container mx-auto px-4">
        <div className="container mx-auto box-title mb-8 flex items-center space-x-2">
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <div className="shrink-0 w-0.5 bg-zinc-600" style={{ height: '76px' }}></div>
          <h2 className="flex-auto self-stretch my-auto text-lg">
            My works in software & data engineering, data science and
            researches.
          </h2>
        </div>
        <div className="text-center mb-8">
          <span className="text-xl font-semibold">Tag filter:</span>
          <div className="mt-2 space-x-2">
            <button className="tag">#all</button>
            <button className="tag">#ML</button>
            <button className="tag">#API</button>
            <button className="tag">#C</button>
            <button className="tag">#phantomJS</button>
            <button className="tag">#dashboard</button>
            <button className="tag">#NASM</button>
            <button className="tag">#web project</button>
            <button className="tag">#data</button>
            <button className="tag">#recommendation system</button>
            <button className="tag">#arduino</button>
            <button className="tag">#bot</button>
            <button className="tag">#statistics</button>
            <button className="tag">#CRM</button>
            <button className="tag">#own product</button>
            <button className="tag">#assembler</button>
            <button className="tag">#data engineering</button>
            <button className="tag">#web scraping</button>
            <button className="tag">#hardware</button>
            <button className="tag">#hard problem</button>
          </div>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <a href="#" className="block">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="object-cover"
                />{" "}
              </a>
              <div className="p-4">
                <a href="#" className="block text-xl font-semibold mb-2">
                  {item.title}
                </a>
                <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                  <span>{item.date}</span>
                  <span>{item.readTime}</span>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
