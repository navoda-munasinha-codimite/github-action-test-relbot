function Hero() {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#14213d] mb-6">
          🚀 Release Note Bot
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
          Automate your release notes with Google Docs templates. 
          Generate, upload, and share development release notes seamlessly with your team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#14213d] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a202c] hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md">
            📋 Get Started
          </button>
          <button className="border-2 border-[#14213d] text-[#14213d] bg-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md">
            📖 Learn More
          </button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl mb-3">📝</div>
            <h3 className="text-lg font-semibold text-[#14213d] mb-2">Google Docs Integration</h3>
            <p className="text-slate-600">Use your existing Google Docs templates for consistent release notes</p>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-3">📤</div>
            <h3 className="text-lg font-semibold text-[#14213d] mb-2">Auto Upload & Share</h3>
            <p className="text-slate-600">Automatically upload to Google Drive and share with PR commenters</p>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-3">⚙️</div>
            <h3 className="text-lg font-semibold text-[#14213d] mb-2">GitHub Action Ready</h3>
            <p className="text-slate-600">Trigger with `/note` command in PR comments for seamless workflow</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
