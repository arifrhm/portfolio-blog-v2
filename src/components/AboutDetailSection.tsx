import React from "react";

const AboutDetailSection: React.FC = () => {
  return (
    <section className="py-12 bg-white" rel="main">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">About</h1>
          <h2 className="text-xl mt-4 text-gray-600">
            Hello, my name is Gita. I am dedicated and hard working person who believe in honesty and service oriented.
            From my experience for more than 10 years working in filling, handling, manipulating and finding meaning of every data,
            I can say I&apos;m expert enough.

          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center mb-12">
          <div className="w-64 h-64 bg-gray-200 rounded-full mb-8 lg:mb-0 lg:mr-8"></div>
          <div className="lg:ml-8 lg:w-2/3">
            <h2 className="text-2xl font-bold">Gita Suputra</h2>
            <p className="mt-4 text-gray-600">
              My background education is Mechanical Engineering and I like to handle value and data. Seeing every line trend helps me to understand quickly what&apos;s going on in every chart, table, or trend.
              I&apos;m very skilled in data entry, Microsoft Excel, Microsoft Word, PDF, Python, data analytics, and machine learning. I have 4 years of experience in Python, data engineering, and data science. Hiring me means you will get many services with one-time investment.
              <a href="/contact#feel-free-to-contact-me" className="text-blue-500"> contact me</a>.
            </p>
            <p className="mt-4 text-gray-600">
              gitasuputra@gmail.com
            </p>
            <p className="mt-4">
              <a href="/media/doc/CV_Andrew_Kurochkin.pdf" target="_blank" className="text-blue-500">Download my CV</a>
            </p>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="mb-12">
              <div className="text-xl font-semibold mb-4" id="education">Education</div>
              <div className="space-y-4">
                <div>
                  <span className="font-bold">Associate Mechanical Engineer</span>
                  <p className="text-gray-600">Bali State Politechnique</p>
                  <p className="text-gray-600">2006 - 2009</p>
                </div>
                <div>
                  <span className="font-bold">Data Science Certification</span>
                  <p className="text-gray-600">Tripleten</p>
                  <p className="text-gray-600">2022 - 2023</p>
                </div>
              </div>
            </div>
            <div className="mb-12">
              <div className="text-xl font-semibold mb-4" id="skills">Skills</div>
              <div className="space-y-2 text-gray-600">
                <p>Data Cleaning<br /> Data Validation<br /> Data Integration<br /> Data Manipulation<br /> Data Visualization<br /> Data Analytic<br /> Data Science<br /> Machine learning : NLP<br /> Python<br /> Excel<br /> Google Spreadsheet</p>
              </div>
            </div>
            <div className="mb-12">
              <div className="text-xl font-semibold mb-4" id="tools-frameworks">Tools & Frameworks</div>
              <div className="space-y-2 text-gray-600">
                <p>Python<br /> GCP<br /> PostgreSQL<br /> Open AI<br /> Power BI, Google Looker<br /> Scikit-Learn, pandas, Transformer, Tensorflow, Pytorch</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-12">
              <div className="text-xl font-semibold mb-4" id="work">Work</div>
              <div className="space-y-4">
                <div>
                  <span className="font-bold">Turbine Operator</span>
                  <p className="text-gray-600">Steam Driven Power Plant Paiton 9<br />2010 - 2015</p>
                </div>
                <div>
                  <span className="font-bold">Production Supervisor</span>
                  <p className="text-gray-600">Machine Gas Power Plant Arun<br />2015 - 2022</p>
                </div>
                <div>
                  <span className="font-bold">Production Supervisor</span>
                  <p className="text-gray-600">Machine Gas Power Plant Arun<br />2022 - Present</p>
                </div>
                <div>
                  <span className="font-bold">AI Developer</span>
                  <p className="text-gray-600">Freelance<br />2022 - Present</p>
                </div>
              </div>
            </div> 
            <div className="mb-12">
              <div className="text-xl font-semibold mb-4" id="links">Links</div>
              <div className="space-y-2 text-gray-600">
                <p><a href="https://github.com/gita87" className="text-blue-500">github</a><br />
                  <a href="https://www.linkedin.com/in/gita-suputra-423242219/" className="text-blue-500">linkedin</a><br />
                  <a href="/media/doc/CV_Andrew_Kurochkin.pdf" target="_blank" className="text-blue-500">download CV</a>
                </p>
              </div>
            </div>
            <div className="mb-12">
              <div className="text-xl font-semibold mb-4" id="hobbies">Hobbies</div>
              <div className="space-y-2 text-gray-600">
                <p>Meditation, Learning Saxophone</p>
              </div>
            </div>
          </div>
        </div>
        <section className="py-12">
          <div className="text-center text-2xl font-semibold mb-8">Some frames of my life when I&apos;m off work</div>
          <div className="flex space-x-4 overflow-x-auto">
            <div className="flex-shrink-0 w-80 h-80 bg-gray-200"></div>
            <div className="flex-shrink-0 w-80 h-80 bg-gray-200"></div>
            <div className="flex-shrink-0 w-80 h-80 bg-gray-200"></div>
            <div className="flex-shrink-0 w-80 h-80 bg-gray-200"></div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutDetailSection;
