import React from 'react';
import logo from './assets/Enigma-logo.jpeg'
import './index.css';

const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">{title}</h2>
    {subtitle && <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const StatCard = ({ icon, number, label }) => (
  <div className="bg-white rounded-2xl shadow-md p-8 text-center flex flex-col items-center justify-center transition-transform hover:-translate-y-1 duration-300">
    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 text-purple-600">
      {icon}
    </div>
    <div className="text-4xl font-extrabold text-gray-900 mb-2">{number}</div>
    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{label}</div>
  </div>
);

const EventCard = ({ image, title, date, link }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
    <div className="h-56 bg-gray-200 w-full relative">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="flex items-center text-gray-500 mb-8">
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-base font-medium">{date}</span>
      </div>
      <a href={link} className="mt-auto inline-flex items-center text-purple-600 font-bold hover:text-pink-500 transition-colors">
        View Details
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </div>
);

const TeamCard = ({ image, name, role, linkedIn, github }) => (
  <div className="bg-white rounded-2xl shadow-md p-8 text-center flex flex-col items-center transition-transform hover:-translate-y-1 duration-300">
    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-purple-50">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
    <p className="text-sm font-medium text-purple-600 mb-6">{role}</p>
    <div className="flex items-center justify-center space-x-4">
      <a href={linkedIn} className="text-gray-400 hover:text-purple-600 transition-colors">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>
      <a href={github} className="text-gray-400 hover:text-gray-900 transition-colors">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
    </div>
  </div>
);

const Navbar = () => (
  <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <path d="M25 20 L65 20 L55 35 L15 35 Z" fill="#000" />
          <path d="M20 42 L55 42 L45 57 L10 57 Z" fill="url(#grad1)" />
          <path d="M15 65 L60 65 L50 80 L5 80 Z" fill="#000" />
          <path d="M55 35 L85 35 L90 30" stroke="#000" strokeWidth="4" fill="none" />
          <rect x="85" y="25" width="8" height="8" fill="#000" transform="rotate(45 89 29)" />
          <path d="M45 57 L75 57 L80 62" stroke="#000" strokeWidth="4" fill="none" />
          <rect x="76" y="58" width="8" height="8" fill="#000" transform="rotate(45 80 62)" />
          <path d="M50 80 L80 80 L85 75" stroke="#000" strokeWidth="4" fill="none" />
          <rect x="81" y="71" width="8" height="8" fill="#000" transform="rotate(45 85 75)" />
        </svg>
        <span className="font-display font-black text-2xl tracking-widest text-[#0a0a0a]">
          ENIGMA
        </span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center space-x-10">
        {['ABOUT', 'EVENTS', 'TEAM', 'CONNECT'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-[13px] font-bold text-gray-600 hover:text-gray-900 tracking-widest transition-colors">
            {item}
          </a>
        ))}
      </div>

      {/* Right side CTA & Dark mode */}
      <div className="flex items-center space-x-6">
        <button className="text-gray-400 hover:text-gray-900 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
        </button>
        <button className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-sm shadow-md hover:shadow-lg hover:opacity-90 transition-all">
          Join Connect <span className="ml-1 text-lg leading-none">↗</span>
        </button>
      </div>
    </div>
  </nav>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 flex items-center justify-center overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Pink/Purple Subtle Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <img src={logo} alt="" />

          <h1 className="text-6xl md:text-[5.5rem] leading-[1.05] font-extrabold tracking-tight text-gray-900 mb-8">
            Encoding<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Tomorrow.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            The official Computer Science & Engineering association where innovation meets excellence. Join our community of builders, thinkers, and digital pioneers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto inline-flex items-center justify-center">
              Explore Our Events
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
            <button className="px-8 py-4 rounded-full bg-white text-gray-900 font-bold text-lg shadow-sm border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all w-full sm:w-auto">
              Learn More
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Student" />
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Student" />
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Student" />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-purple-600 flex items-center justify-center text-[10px] font-bold text-white z-10 shadow-sm">
                +100
              </div>
            </div>
            <span className="text-sm font-medium text-gray-500 max-w-[150px] text-center sm:text-left leading-tight">
              joined by the best engineering students
            </span>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="About Enigma"
            subtitle="We are the premier Computer Science and Engineering association dedicated to fostering innovation, technical excellence, and a collaborative student community."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <StatCard
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
              number="100+"
              label="Members"
            />
            <StatCard
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>}
              number="50+"
              label="Events Hosted"
            />
            <StatCard
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>}
              number="50+"
              label="Workshops Conducted"
            />
          </div>
        </div>
      </section>

      {/* 3. EVENTS & WORKSHOPS SECTION */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="Our Events & Workshops"
            subtitle="Discover our latest technical sessions, hackathons, and community meetups."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 mb-16">
            <EventCard
              image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              title="Tech Symposium 2026"
              date="October 15, 2026"
              link="#"
            />
            <EventCard
              image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              title="Web3 Developers Bootcamp"
              date="November 02, 2026"
              link="#"
            />
            <EventCard
              image="https://images.unsplash.com/photo-1550305080-400ce61b4ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              title="AI & Machine Learning Summit"
              date="December 10, 2026"
              link="#"
            />
          </div>
          <div className="text-center">
            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg shadow-md hover:shadow-lg hover:opacity-90 transition-all inline-flex items-center">
              View All Events
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* 4. TEAM SECTION */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The passionate minds driving Enigma forward."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <TeamCard
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              name="Sarah Jenkins"
              role="President"
              linkedIn="#"
              github="#"
            />
            <TeamCard
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              name="David Chen"
              role="Vice President"
              linkedIn="#"
              github="#"
            />
            <TeamCard
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              name="Emily Rodriguez"
              role="Technical Lead"
              linkedIn="#"
              github="#"
            />
            <TeamCard
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              name="James Wilson"
              role="Events Coordinator"
              linkedIn="#"
              github="#"
            />
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="Get In Touch"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12 items-center">
            <div className="text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Let's build the future together.</h3>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Whether you have a question about our upcoming events, want to partner with us, or just want to say hi, we'd love to hear from you. Drop us a message and our team will get back to you shortly.
              </p>
              <div className="space-y-6">
                <div className="flex items-center text-gray-600">
                  <svg className="w-6 h-6 mr-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span className="font-medium">contact@enigma-cse.org</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-6 h-6 mr-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className="font-medium">Computer Science Block, Tech Campus</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg shadow-md hover:shadow-lg hover:opacity-90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="col-span-1">
              <h2 className="text-3xl font-extrabold tracking-tight mb-6">ENIGMA</h2>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                Encoding Tomorrow. We are dedicated to building a community of passionate technocrats, developers, and innovators.
              </p>
            </div>

            <div className="col-span-1 md:pl-10">
              <h3 className="text-lg font-bold mb-6 text-gray-100 uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Events & Workshops</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Meet The Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-lg font-bold mb-6 text-gray-100 uppercase tracking-wider">Connect With Us</h3>
              <div className="flex space-x-5">
                <a href="#" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
            <p>© 2026 Enigma CSE Association. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
