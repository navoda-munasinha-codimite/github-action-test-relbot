function Footer() {
  return (
    <footer className="bg-slate-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">🚀 Release Note Bot</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Automate your development workflow with intelligent release note generation. 
              Seamlessly integrate with Google Docs and GitHub Actions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  📚 Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  💻 GitHub Repository
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  🐛 Report Issues
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  ⭐ Feature Requests
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  🎯 Getting Started
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  🔧 Configuration Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  📝 Template Examples
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  ❓ FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 Release Note Bot. Open source project for the developer community.
            </p>
            <p className="text-slate-400 text-sm">
              Developed by <span className="text-white font-semibold">Navoda</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
