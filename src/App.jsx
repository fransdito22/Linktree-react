import ParticlesBg from "particles-bg";
import "./App.css";
import profileImg from "./assets/profile.JPG";

function App() {
  return (
    <>
      <div>
        <ParticlesBg type="cobweb" bg={true} />
        <div className="p-5 sm:p-10 md:p-20 pb-3 pt-10 min-w-fit flex flex-col items-center justify-center bg-neutral-900 opacity-95">
          <div className="avatar mb-4 flex justify-center items-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 flex justify-center items-center">
              <img
                className="w-full h-full rounded-full p-2 text-center"
                src={profileImg}
                alt="Avatar"
              />
            </div>
          </div>
          {/* Nama dan Deskripsi */}
          <h1 className="text-xl sm:text-2xl font-bold text-white">FRANS</h1>
          <p className="text-white mb-6">Welcome to my Linktree!</p>

          {/* Daftar Link */}
          <div className="flex flex-col w-full max-w-xs space-y-4">
            <a
              href="https://github.com/fransdito22"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-400 rounded-md p-3 hover:text-black hover:bg-red-300"
            >
              Visit My GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/frans-dito-244921261/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 rounded-md p-3 hover:text-black hover:bg-blue-300"
            >
              Check My LinkedIn
            </a>
            <a
              href="https://www.instagram.com/frns_dito/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-400 rounded-md p-3 hover:text-black hover:bg-orange-300"
            >
              Follow Me on Instagram
            </a>
            <a
              href="https://web.facebook.com/dito.ardiansyah.33"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 rounded-md p-3 hover:text-black hover:bg-blue-600"
            >
              See More on Facebook
            </a>
          </div>
          <p className="p-3 mt-10 mb-0 text-center">© 2023 FRNSS. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default App;