function Home() {
    return (
        <div className="min-h-screen bg-gray-900 text-white px-6 py-12 flex flex-col items-center justify-center text-center">
          {/*hero header*/}
          <section className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold">Hey, I’m Jacob!</h1>
            <p className="text-xl text-gray-300">
              BCIS. Developer. Software & Database Design.
            </p>
          </section>

          {/*about me*/}
          <section className="max-w-4xl text-lg leading-relaxed space-y-6">
            <p>
              <strong>I’m a recent Computer Information Systems grad with a passion for game development, data design, and building things that matter.</strong>
            </p>
            <p>
              I love creating small games or mobile apps just for fun, and I’ve got a solid handle on database and data warehouse design — it’s one of the areas where I feel the most confident technically.
            </p>
            <p>
              I'm especially interested in using tech to help solve real-world problems, like healthcare, environmentally sustainable technology, or education. I care a lot about doing meaningful work, and I’ll always bring curiosity and a drive to learn to every project.
            </p>
            <p>
              Outside of tech, I like to make music and art too!
            </p>
          </section>

          {/*cta buttons*/}
          <section className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="/projects" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition">
              View Projects
            </a>
            <a href="/contact" className="inline-block bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition">
              Contact Me
            </a>
            <a href="/games" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition">
              My Games
            </a>
          </section>
        </div>
      );
  }
  
  export default Home;
  