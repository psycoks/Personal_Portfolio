import {
  Github,
  Mail,
  BookOpen,
  Code2,
  Trophy,
  GraduationCap,
  Instagram,
  X,
  Phone,
  Linkedin,
  Briefcase,
  FolderGit2,
  Award,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col items-center text-center">
            <img
              src="kunal sharma.jpg"
              alt="Kunal Sharma"
              className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6 object-cover"
            />
            <h1 className="text-4xl font-bold mb-4">Kunal Sharma</h1>
            <p className="text-xl mb-6">Computer Science Student at SRM University, Delhi-NCR</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/psycoks"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/kunal-sharma-35882a28b"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.threads.net/@__sharma__7777"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/KunalSharm25378"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </a>
              <a href="tel:+917015128139" className="hover:text-blue-200 transition-colors">
                <Phone className="w-6 h-6" />
              </a>
              <a
                href="mailto:kunal090206@gmail.com"
                className="hover:text-blue-200 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-center">
            <p className="mb-6">
              Hello! I'm a passionate Computer Science Engineering student at SRM University,
              Delhi-NCR. I am dedicated to writing clean, independent code and solving real-world
              problems.
            </p>
            <p>
              With a strong foundation in computer science concepts and hands-on experience, I am
              motivated, adaptable, and aiming for a career as a software engineer and tech
              entrepreneur.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start">
              <Briefcase className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-xl mb-1">Core Volunteer</h3>
                <p className="text-blue-600 font-medium mb-1">University Tech Fest</p>
                <p className="text-gray-500 text-sm mb-4">Sonipat, India | Remote/On-site</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    Managed data structures for event operations and assisted with system
                    administration.
                  </li>
                  <li>Maintained accurate records and handled filing for smooth logistics.</li>
                  <li>
                    Fostered collaboration through effective decision-making and adaptability.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <FolderGit2 className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-xl mb-3">Aura - E-commerce</h3>
              <p className="text-gray-600 text-sm">
                Developed a responsive makeup e-commerce platform featuring user-friendly product
                catalog browsing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <FolderGit2 className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-xl mb-3">LinkedIn Clone</h3>
              <p className="text-gray-600 text-sm">
                Built a front-end replica of the professional networking site, showcasing strong
                UI/UX design skills.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <FolderGit2 className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-xl mb-3">Interactive Tic-Tac-Toe</h3>
              <p className="text-gray-600 text-sm">
                Programmed a logic-based web application capable of managing game states and
                win/draw conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <Code2 className="w-10 h-10 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold mb-3">Programming</h3>
              <p className="text-gray-600 text-sm">Python, C, Java, JavaScript, SQL, HTML</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <BookOpen className="w-10 h-10 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold mb-3">Technical Skills</h3>
              <p className="text-gray-600 text-sm">
                Web Development, Data Structures, Code Optimization, System Administration
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <GraduationCap className="w-10 h-10 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold mb-3">Soft Skills</h3>
              <p className="text-gray-600 text-sm">
                Event Management, Decision-Making, Team Collaboration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Languages */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <Award className="w-6 h-6 mr-3 text-blue-600" />
                Certifications
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-blue-600 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>Freedom with AI Masterclass</strong> &{' '}
                    <strong>Generative AI Mastermind</strong> (UTOPIIC)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-blue-600 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>The AI Revolution</strong> (Outskill & Moneycontrol)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-blue-600 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>AI for All</strong> (Intel & Digital India)
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-blue-600" />
                Languages
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium">
                  English
                </span>
                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium">
                  Hindi
                </span>
                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium">
                  German (Basic)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start">
              <Trophy className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-xl mb-1">
                  Bachelor of Technology (B.Tech) in Computer Science and Engineering
                </h3>
                <p className="text-gray-600 mb-1">SRM University - Sonipat, Haryana, India</p>
                <p className="text-gray-500 text-sm">Expected Graduation: 07/2027</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-lg mx-auto text-center">
            <p className="text-gray-600 mb-6">
              I'm always interested in connecting with fellow students and learning from others.
              Feel free to reach out!
            </p>
            <div className="space-y-4">
              <a
                href="tel:+917015128139"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                +91 7015128139
              </a>
              <p className="text-sm text-gray-500">Available on WhatsApp at the same number</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Kunal Sharma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;