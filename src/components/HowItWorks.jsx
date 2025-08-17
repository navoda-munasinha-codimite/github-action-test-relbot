function HowItWorks() {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#14213d] mb-6">
            ⚡ How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Streamline your release process with automated note generation in just a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Step 1 */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#14213d] text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-2xl font-semibold text-[#14213d]">Comment on PR</h3>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Simply type <code className="bg-slate-200 px-2 py-1 rounded text-[#14213d] font-mono">/note</code> in any pull request comment to trigger the release note generation process.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                👤
              </div>
              <div className="flex-1">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <p className="text-slate-700">
                    <span className="font-semibold">@developer:</span> /note
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Step 2 */}
          <div className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-slate-600">Processing Google Doc template...</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-slate-600">Generating release notes...</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-slate-600">Uploading to Google Drive...</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#14213d] text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-2xl font-semibold text-[#14213d]">Automated Processing</h3>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              The GitHub Action automatically processes your Google Doc template, extracts relevant information from the PR, and generates comprehensive release notes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Step 3 */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#14213d] text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-2xl font-semibold text-[#14213d]">Share & Collaborate</h3>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Generated release notes are automatically uploaded to Google Drive and shared with all PR commenters, ensuring everyone stays informed.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#14213d]">📄 Release Notes v2.1.0</span>
                <span className="text-sm text-slate-500">Shared</span>
              </div>
              <div className="bg-green-50 border border-green-200 p-3 rounded">
                <p className="text-green-800 text-sm">
                  ✅ Successfully shared with 3 team members
                </p>
              </div>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm">👨‍💻</div>
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm">👩‍💻</div>
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-sm">👨‍💼</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-[#14213d] to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            🎯 Why Teams Love It
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="text-3xl">⏱️</div>
              <h4 className="text-xl font-semibold">Save Time</h4>
              <p className="text-blue-100">Reduce manual release note creation from hours to minutes</p>
            </div>
            <div className="space-y-3">
              <div className="text-3xl">🎯</div>
              <h4 className="text-xl font-semibold">Stay Consistent</h4>
              <p className="text-blue-100">Use templates to maintain professional, standardized documentation</p>
            </div>
            <div className="space-y-3">
              <div className="text-3xl">🤝</div>
              <h4 className="text-xl font-semibold">Improve Collaboration</h4>
              <p className="text-blue-100">Automatic sharing keeps everyone in the loop</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
