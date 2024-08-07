import React from "react";
import Image from 'next/image';

const AboutDetailSection: React.FC = () => {
  return (
    <section className="pt-20 py-12 bg-white dark:bg-gray-900" rel="main">
      <div className="container mx-auto px-4">
        <div className="box-title mb-8 flex items-center space-x-2">
          <h1 className="text-3xl font-bold dark:text-white">About</h1>
          <div className="shrink-0 w-0.5 bg-zinc-600 dark:bg-zinc-400" style={{ height: '76px' }}></div>
          <h2 className="text-xl dark:text-gray-300">I am a data scientist and researcher with a passion for uncovering hidden patterns,
            data mining, and data visualization.</h2>
        </div>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold dark:text-white">About</h1>
          <h2 className="text-xl mt-4 text-gray-600 dark:text-gray-400">
            Hello, my name is Gita. I am a dedicated and hard-working person who believes in honesty and service-oriented work.
            With over 10 years of experience in handling, manipulating, and analyzing data, I consider myself an expert.

          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center mb-12">
          <div className="w-64 h-64 bg-gray-200 dark:bg-gray-700 rounded-full mb-8 lg:mb-0 lg:mr-8 overflow-hidden flex items-center justify-center">
            <Image
              src="/gita_profile_pic.jpg" // Replace with the path to your image
              alt="Description of image"
              width={256}
              height={256}
              className="object-cover"
            />
          </div>
          <div className="lg:ml-8 lg:w-2/3">
            <h2 className="text-2xl font-bold dark:text-white">Gita Suputra</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              My background is in Mechanical Engineering, and I have a keen interest in handling and analyzing data. I quickly understand trends and insights from charts, tables, and data visualizations.
              I am skilled in data entry, Microsoft Excel, Microsoft Word, PDF, Python, data analytics, and machine learning. With 4 years of experience in Python, data engineering, and data science, hiring me means you will benefit from a wide range of services with a single investment.
              <a href="/contact#feel-free-to-contact-me" className="text-blue-500 dark:text-blue-300"> contact me</a>.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              gitasuputra@gmail.com
            </p>
            <p className="mt-4">
              <a href="https://bit.ly/CV-Gita-Suputra" target="_blank" className="text-blue-500 dark:text-blue-300">Download my CV</a>
            </p>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="mb-12">
              <div className="text-xl font-semibold mb-4 dark:text-white" id="education">Education</div>
              <div className="space-y-4">
                <div>
                  <span className="font-bold dark:text-white">Associate Mechanical Engineer</span>
                  <p className="text-gray-600 dark:text-gray-400">Bali State Politechnique</p>
                  <p className="text-gray-600 dark:text-gray-400">2006 - 2009</p>
                </div>
                <div>
                  <span className="font-bold dark:text-white">Data Science Certification</span>
                  <p className="text-gray-600 dark:text-gray-400">Tripleten</p>
                  <p className="text-gray-600 dark:text-gray-400">2022 - 2023</p>
                </div>
              </div>
            </div>
            <div className="mb-12">
              <div className="text-xl font-semibold mb-4 dark:text-white" id="skills">Skills</div>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>Data Cleaning<br /> Data Validation<br /> Data Integration<br /> Data Manipulation<br /> Data Visualization<br /> Data Analytic<br /> Data Science<br /> Machine Learning: NLP<br /> Python<br /> Excel<br /> Google Spreadsheet</p>
              </div>
            </div>
            <div className="mb-12">
              <div className="text-xl font-semibold mb-4 dark:text-white" id="tools-frameworks">Tools & Frameworks</div>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>Python<br /> GCP<br /> PostgreSQL<br /> Open AI<br /> Power BI, Google Looker<br /> Scikit-Learn, pandas, Transformer, TensorFlow, PyTorch</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-12">
              <div className="text-xl font-semibold mb-4 dark:text-white" id="work">Work</div>
              <div className="space-y-4">
                <div>
                  <span className="font-bold dark:text-white">Turbine Operator</span>
                  <p className="text-gray-600 dark:text-gray-400">Steam Driven Power Plant Paiton 9<br />2010 - 2015</p>
                </div>
                <div>
                  <span className="font-bold dark:text-white">Production Supervisor</span>
                  <p className="text-gray-600 dark:text-gray-400">Machine Gas Power Plant Arun<br />2015 - 2022</p>
                </div>
                <div>
                  <span className="font-bold dark:text-white">Production Supervisor</span>
                  <p className="text-gray-600 dark:text-gray-400">Machine Gas Power Plant Arun<br />2022 - Present</p>
                </div>
                <div>
                  <span className="font-bold dark:text-white">AI Developer</span>
                  <p className="text-gray-600 dark:text-gray-400">Freelance<br />2022 - Present</p>
                </div>
              </div>
            </div>
            <div className="mb-12">
              <div className="text-xl font-semibold mb-4 dark:text-white" id="links">Links</div>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p><a href="https://github.com/gita87" className="text-blue-500 dark:text-blue-300">GitHub</a><br />
                  <a href="https://www.linkedin.com/in/gita-suputra-423242219/" className="text-blue-500 dark:text-blue-300">LinkedIn</a><br />
                  <a href="https://bit.ly/CV-Gita-Suputra" target="_blank" className="text-blue-500 dark:text-blue-300">Download CV</a>
                </p>
              </div>
            </div>
            <div className="mb-12">
              <div className="text-xl font-semibold mb-4 dark:text-white" id="hobbies">Hobbies</div>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>Meditation, Learning Saxophone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetailSection;
