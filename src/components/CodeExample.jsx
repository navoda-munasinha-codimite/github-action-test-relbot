function CodeExample() {
  const workflowCode = `name: Release Note Bot
on:
  issue_comment:
    types: [created]

jobs:
  generate-release-notes:
    if: github.event.issue.pull_request && contains(github.event.comment.body, '/note')
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        
      - name: Generate Release Notes
        uses: navoda-munasinha-codimite/release-note-bot@v1
        with:
          google-docs-template-id: \${{ secrets.GOOGLE_DOCS_TEMPLATE_ID }}
          google-drive-folder-id: \${{ secrets.GOOGLE_DRIVE_FOLDER_ID }}
          google-service-account: \${{ secrets.GOOGLE_SERVICE_ACCOUNT }}
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}`;

  const secretsCode = `# Required GitHub Secrets
GOOGLE_DOCS_TEMPLATE_ID=1abc123def456...
GOOGLE_DRIVE_FOLDER_ID=1xyz789ghi012...
GOOGLE_SERVICE_ACCOUNT={"type":"service_account",...}
GITHUB_TOKEN=ghp_xxxxxxxxxxxx (auto-generated)`;

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#14213d] mb-6">
            💻 Implementation Guide
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Get started in minutes with our simple GitHub Action workflow
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Workflow File */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-[#14213d] text-white rounded-lg flex items-center justify-center">
                📄
              </div>
              <h3 className="text-2xl font-semibold text-[#14213d]">
                Workflow Configuration
              </h3>
            </div>
            <p className="text-slate-600 mb-4">
              Create <code className="bg-slate-100 px-2 py-1 rounded text-[#14213d] font-mono text-sm">.github/workflows/release-notes.yml</code> in your repository:
            </p>
            <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm text-slate-100">
                <code>{workflowCode}</code>
              </pre>
            </div>
          </div>

          {/* Setup Steps */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-[#14213d] text-white rounded-lg flex items-center justify-center">
                ⚙️
              </div>
              <h3 className="text-2xl font-semibold text-[#14213d]">
                Setup Steps
              </h3>
            </div>

            {/* Step 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-200">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#14213d] text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-sm">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-[#14213d] mb-2">Google Service Account</h4>
                  <p className="text-slate-600">
                    Create a Google Cloud service account with Google Docs and Drive API access
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-200">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#14213d] text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-sm">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-[#14213d] mb-2">Prepare Template</h4>
                  <p className="text-slate-600">
                    Create your Google Docs template with placeholders for release information
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-200">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#14213d] text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-sm">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-[#14213d] mb-2">Configure Secrets</h4>
                  <p className="text-slate-600">
                    Add the required secrets to your GitHub repository settings
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-200">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#14213d] text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-sm">
                  4
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-[#14213d] mb-2">Test It Out</h4>
                  <p className="text-slate-600">
                    Comment <code className="bg-slate-200 px-2 py-1 rounded text-sm font-mono text-[#14213d]">/note</code> on any PR to trigger the action
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secrets Configuration */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-[#14213d] text-white rounded-lg flex items-center justify-center">
              🔐
            </div>
            <h3 className="text-2xl font-semibold text-[#14213d]">
              Required Secrets
            </h3>
          </div>
          <p className="text-slate-600 mb-4">
            Add these secrets in your repository settings → Secrets and variables → Actions:
          </p>
          <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm text-green-400">
              <code>{secretsCode}</code>
            </pre>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-slate-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">🚀</div>
            <h4 className="font-semibold text-[#14213d] mb-2">Easy Setup</h4>
            <p className="text-slate-600 text-sm">One-time configuration, lifetime benefits</p>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">🔧</div>
            <h4 className="font-semibold text-[#14213d] mb-2">Customizable</h4>
            <p className="text-slate-600 text-sm">Use your own Google Docs templates</p>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="font-semibold text-[#14213d] mb-2">Fast Execution</h4>
            <p className="text-slate-600 text-sm">Generate notes in under 30 seconds</p>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">🔒</div>
            <h4 className="font-semibold text-[#14213d] mb-2">Secure</h4>
            <p className="text-slate-600 text-sm">Google service account authentication</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-[#14213d] text-white rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started? 🎉</h3>
            <p className="text-blue-100 mb-6">
              Copy the workflow file above and start automating your release notes today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#14213d] px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                📚 View Documentation
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#14213d] transition-colors">
                🔗 GitHub Repository
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CodeExample;
