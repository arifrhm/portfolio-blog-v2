import React from 'react';

export function ContactSection() {
    return (
        <section className="pt-12 s-hire_me relative">
            <div className="ctr mx-auto max-w-6xl px-4 py-8">
                <div className="box-title mb-8 flex items-center space-x-2">
                    <h1 className="text-3xl font-bold">Contact</h1>
                    <div className="shrink-0 w-0.5 bg-zinc-600" style={{ height: '76px' }}></div>
                    <h2 className="text-xl">New connections open the door to new opportunities.</h2>
                </div>

                <div className="bl-info mb-8">
                    <div className="title text-2xl font-semibold">Contact me</div>
                </div>

                <div className="bl-question flex flex-col lg:flex-row">
                    <div className="c-l flex-1 mb-8 lg:mb-0 lg:mr-8">
                        <div className="box p-6 bg-gray-100 rounded-lg shadow-md">
                            <h2 id="feel-free-to-contact-me" className="text-2xl font-semibold">
                                Feel free to contact me
                                <a
                                    className="anchorjs-link text-gray-600 hover:text-gray-900"
                                    href="#feel-free-to-contact-me"
                                    aria-label="Anchor"
                                    data-anchorjs-icon=""
                                    style={{ font: '1em / 1 anchorjs-icons', paddingLeft: '0.375em' }}
                                ></a>
                            </h2>
                            <p className="mt-4">
                                If you are interested in cooperation or would like to discuss anything, please contact me.
                                <br />
                                <br />
                                You can involve me in your project as a data scientist or a consultant by emailing to{' '}
                                <b>gitasuputra@gmail.com</b> or fill in the contact form below.
                            </p>
                        </div>

                        <section className="s-form mt-8">
                            <div className="box-form p-6 bg-gray-100 rounded-lg shadow-md">
                                <form id="form_contact">
                                    <div className="flex flex-wrap -mx-2 mb-4">
                                        <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
                                            <input
                                                className="name w-full p-3 border border-gray-300 rounded"
                                                type="text"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="w-full lg:w-1/2 px-2">
                                            <input
                                                className="mail w-full p-3 border border-gray-300 rounded"
                                                type="text"
                                                placeholder="Your E-mail"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <textarea
                                            className="message w-full p-3 border border-gray-300 rounded"
                                            placeholder="Message"
                                        ></textarea>
                                    </div>
                                    <p className="help text-red-500 mb-4"></p>
                                    <input
                                        className="btn-send w-full p-3 bg-black text-white rounded cursor-pointer hover:bg-gray-900"
                                        type="submit"
                                        value="Send"
                                    />
                                </form>
                            </div>

                            <div className="bl-report mt-4" id="report_contact">
                                <span className="title text-xl font-semibold">Thank You!</span>
                                <p></p>
                            </div>
                        </section>
                    </div>

                    <div className="c-r flex-1">
                        <div className="box p-6 bg-gray-100 rounded-lg shadow-md mb-8">
                            <h2 id="cv" className="text-2xl font-semibold">
                                CV
                                <a
                                    className="anchorjs-link text-gray-600 hover:text-gray-900"
                                    href="#cv"
                                    aria-label="Anchor"
                                    data-anchorjs-icon=""
                                    style={{ font: '1em / 1 anchorjs-icons', paddingLeft: '0.375em' }}
                                ></a>
                            </h2>
                            <a
                                href="https://bit.ly/CV-Gita-Suputra"
                                target="_blank"
                                className="red-underline text-blue-500 hover:underline"
                            >
                                Download PDF
                            </a>
                        </div>

                        <div className="box p-6 bg-gray-100 rounded-lg shadow-md">
                            <h2 id="links" className="text-2xl font-semibold">
                                Links
                                <a
                                    className="anchorjs-link text-gray-600 hover:text-gray-900"
                                    href="#links"
                                    aria-label="Anchor"
                                    data-anchorjs-icon=""
                                    style={{ font: '1em / 1 anchorjs-icons', paddingLeft: '0.375em' }}
                                ></a>
                            </h2>
                            <a
                                href="https://www.linkedin.com/in/gita-suputra-423242219/"
                                className="block text-blue-500 hover:underline"
                            >
                                LinkedIn
                            </a>
                            <a href="https://github.com/gita87" className="block text-blue-500 hover:underline">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
