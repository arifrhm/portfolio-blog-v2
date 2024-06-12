import React from "react";

const AboutDetailSection: React.FC = () => {
  return (
    <section className="py-12 bg-white" rel="main">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">About</h1>
          <h2 className="text-xl mt-4 text-gray-600">
            I am a data scientist and a researcher. My passion is working with hidden pattern recognition, data mining, and dataviz.
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center mb-12">
          <div className="w-48 h-48 bg-gray-200 rounded-full mb-8 lg:mb-0 lg:mr-8"></div>
          <div className="lg:ml-8">
            <h2 className="text-2xl font-bold">Andrew Kurochkin</h2>
            <p className="mt-4 text-gray-600">
              My goal is to optimize world processes by using data. If you are interested in cooperation or would like to discuss anything, please 
              <a href="/contact#feel-free-to-contact-me" className="text-blue-500"> contact me</a>.
            </p>
            <p className="mt-4 text-gray-600">
              Lviv, Ukraine<br />
              me(at)andrewkurochkin.com
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
                  <span className="font-bold">Data science / Master&apos;s degree</span>
                  <p className="text-gray-600">Ukrainian Catholic University (UCU)</p>
                  <p className="text-gray-600">2018 - 2020</p>
                </div>
                <div>
                  <span className="font-bold">Software engineer / Bachelor&apos;s degree</span>
                  <p className="text-gray-600">National University &quot;Lviv Polytechnics&quot;</p>
                  <p className="text-gray-600">2015 - 2017</p>
                </div>
                <div>
                  <span className="font-bold">Software engineer / Associate&apos;s degree</span>
                  <p className="text-gray-600">TC NU &quot;Lviv Polytechnics&quot;</p>
                  <p className="text-gray-600">2011 - 2015</p>
                </div>
              </div>
            </div>
            <div className="mb-12">
              <div className="text-xl font-semibold mb-4" id="skills">Skills</div>
              <div className="space-y-2 text-gray-600">
                <p>Computational Social Science<br /> Behavior Analysis<br /> System Design<br /> Research<br /> Negotiation<br /> Communication<br /> Presentation<br /> Data Analytics<br /> Programming<br /> Problem Solving<br /> Database Design<br /> Data Visualization<br /> Team Organizing<br /> Leadership</p>
              </div>
            </div>
            <div className="mb-12">
              <div className="text-xl font-semibold mb-4" id="tools-frameworks">Tools & Frameworks</div>
              <div className="space-y-2 text-gray-600">
                <p>python, R<br /> GCP, AWS<br /> UNIX / Linux<br /> BQ, ETL, postgreSQL, MySQL<br /> BI (Looker, etc)<br /> openCV, scikit-learn, numpy, pandas, ggplot<br /> GIT, CI/CD, jira<br /> MTurk, A/B testing<br /> Math Modeling</p>
              </div>
            </div>
            <div className="mb-12">
              <div className="text-xl font-semibold mb-4" id="hobbies">Hobbies</div>
              <div className="space-y-2 text-gray-600">
                <p><a href="https://t.me/s/film1319" target="blank" className="text-blue-500">film photo</a>, box, vinyl</p>
              </div>
            </div>
            <div className="mb-12">
              <div className="text-xl font-semibold mb-4" id="links">Links</div>
              <div className="space-y-2 text-gray-600">
                <p><a href="https://github.com/SanGreel" className="text-blue-500">github</a><br />
                  <a href="https://www.linkedin.com/in/sangreel/" className="text-blue-500">linkedin</a><br />
                  <a href="/media/doc/CV_Andrew_Kurochkin.pdf" target="_blank" className="text-blue-500">download CV</a>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-12">
              <div className="text-xl font-semibold mb-4" id="work">Work</div>
              <div className="space-y-4">
                <div>
                  <span className="font-bold">Teaching Assistant</span>
                  <p className="text-gray-600">National University of Kyiv-Mohyla Academy<br />01/2022 - present</p>
                </div>
                <div>
                  <span className="font-bold">Tech Lead</span>
                  <p className="text-gray-600">Capgemini<br />11/2021 - 11/2022</p>
                </div>
                <div>
                  <span className="font-bold">Data Engineer</span>
                  <p className="text-gray-600">Lohika<br />11/2017 - 11/2021</p>
                </div>
                <div>
                  <span className="font-bold">Data Scientist & Researcher</span>
                  <p className="text-gray-600">Palo Alto Insight<br />02/2018 - 04/2018</p>
                </div>
                <div>
                  <span className="font-bold">Principal Developer</span>
                  <p className="text-gray-600">Headliner<br />10/2015 - 11/2017</p>
                </div>
                <div>
                  <span className="font-bold">Full-Stack Web Developer</span>
                  <p className="text-gray-600">Freelancer<br />01/2011 - 10/2015</p>
                </div>
              </div>
            </div>
            <div className="mb-12">
              <div className="text-xl font-semibold mb-4" id="other-activities">Other Activities</div>
              <div className="space-y-4 text-gray-600">
                <p>Lecturer and Mentor at National University of Kyiv-Mohyla Academy</p>
                <p>Conducted course “Computational Social Science” at Ukrainian Catholic University</p>
                <p>Best presentation award at <a href="https://waset.org/computational-social-science-conference-in-december-2020-in-amsterdam" target="_blank" className="text-blue-500">ICCSS 2020: XIV. International Conference on Computational Social Science</a></p>
                <p>Poster at <a href="https://iriss.stanford.edu/css/conferences/2020-conference-computational-sociology/agenda" target="_blank" className="text-blue-500">Stanford 2020 Conference on Computational Sociology</a></p>
                <p>Program committee member in the <a href="https://facebook.com/groups/morning.lohika" target="_blank" className="text-blue-500">“Morning at Lohika”</a> tech talks, 2018-2019</p>
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
