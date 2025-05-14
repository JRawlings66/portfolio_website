function Contact() {
    return (
      <div className="min-h-screen bg-gray-900 bg-cover bg-center text-white px-6 py-20 flex flex-col items-center justify-center" style={{backgroundImage: `url('/gradient-bg.png')`,}}>
        {/*header*/}
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg text-center max-w-xl mb-10 text-gray-200">
          Have a question, collaboration idea, or job oppurtunity you think I would be suited for? Fill out the form below, or connect with me through one of my links!
        </p>

        {/*form*/}
        <form action="https://formspree.io/f/INSERT-FORM-ID-HERE" method="POST" className="bg-black bg-opacity-60 p-8 rounded-lg w-full max-w-md space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input type="text" name="name" id="name" required
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input type="email" name="email" id="email" required
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea name="message" id="message" rows="4" required
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <button type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition">
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-10 flex gap-6 text-lg">
          <a href="mailto:jacobrawlings66@gmail.com" className="hover:text-blue-400 transition" title="Opens your default email app">Email</a>
          <a href="https://github.com/jrawlings66" className="hover:text-blue-400 transition" title="My public repositories">GitHub</a>
          <a href="https://linkedin.com/in/jacob-rawlings-84b81a19b/" className="hover:text-blue-400 transition">LinkedIn</a>
        </div>
      </div>
    );
  }
  
export default Contact;
  