import React from "react";
import Image from "next/image";

const portfolioItems = [
  {
    title: "Instruct AI to create a chart",
    description:
      "Developed an AI tool that automatically generates charts based on user input data. This tool simplifies the process of creating visual data representations.",
    date: "2024",
    imageUrl: "/Instruct AI to create a chart.jpeg",
  },
  {
    title: "Build machine learning model to find Question-Answers similarity with Bert and Transformer",
    description:
      "Implemented a machine learning model using BERT and Transformer architecture to find similarity between questions and answers, enhancing the accuracy of query responses.",
    date: "2024",
    imageUrl: "/Build machine learning model to find Question-Answers similarity with Bert and Transformer.jpeg",
  },
  {
    title: "FB Prophet model for Future Earning Prediction",
    description:
      "Used Facebook's Prophet model to predict future earnings. This model helps businesses to forecast revenue with higher accuracy and plan accordingly.",
    date: "2024",
    imageUrl: "/FB Prophet model for Future Earning Prediction.jpeg",
  },
  {
    title: "CRM: Customer Segmentation Google Looker Studio",
    description:
      "Developed customer segmentation analysis using Google Looker Studio, providing valuable insights into customer behavior and preferences.",
    date: "2024",
    imageUrl: "/CRM - Customer Segmentation Google Looker Studio.jpeg",
  },
  {
    title: "CRM: Customer Segmentation Exploration Analysis",
    description:
      "Conducted an in-depth exploration analysis of customer segmentation, allowing for more personalized marketing strategies and improved customer retention.",
    date: "2024",
    imageUrl: "/CRM - Customer Segmentation Exploration Analysis.jpeg",
  },
  {
    title: "Excel Dashboard Daily Report",
    description:
      "Created an automated Excel dashboard for daily reporting, streamlining the process of data visualization and decision-making for businesses.",
    date: "2024",
    imageUrl: "/Excel Dashboard Daily Report.jpeg",
  },
];

const PortfolioSection: React.FC = () => {
  return (
    <section className="pt-20 py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="box-title mb-8 flex items-center space-x-2">
          <h1 className="text-3xl font-bold text-gray-100">Portfolio</h1>
          <div className="shrink-0 w-0.5 bg-gray-400" style={{ height: '76px' }}></div>
          <h2 className="flex-auto self-stretch my-auto text-lg text-gray-300">
            My works in software & data engineering, data science and researches.
          </h2>
        </div>
        <div className="text-center mb-8">
          <span className="text-xl font-semibold text-gray-100">Tag filter:</span>
          <div className="mt-2 space-x-2">
            {["#all", "#ML", "#API", "#C", "#phantomJS", "#dashboard", "#NASM", "#web project", "#data", "#recommendation system", "#arduino", "#bot", "#statistics", "#CRM", "#own product", "#assembler", "#data engineering", "#web scraping", "#hardware", "#hard problem"].map(tag => (
              <button key={tag} className="tag text-gray-300">{tag}</button>
            ))}
          </div>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <a href="#" className="block">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="object-cover"
                /> 
              </a>
              <div className="p-4">
                <a href="#" className="block text-xl font-semibold mb-2 text-gray-100">
                  {item.title}
                </a>
                <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
                  <span>{item.date}</span>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
