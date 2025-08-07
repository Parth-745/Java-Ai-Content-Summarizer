import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, FileText, Clock, CheckCircle, AlertCircle, ArrowRight, Sparkles, Zap, Target } from 'lucide-react';

function HomePage() {
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    
    // Navigate to summarize page with URL as query parameter
    navigate(`/summarize?url=${encodeURIComponent(url)}`);
  };

  const exampleUrls = [
    "https://techcrunch.com/2024/01/15/ai-breakthrough-content-creation",
    "https://reuters.com/technology/artificial-intelligence-industry-growth",
    "https://bbc.com/news/technology-ai-content-revolution"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ArticleAI</h1>
              <p className="text-sm text-gray-600">AI-Powered News Summarizer</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Powered by Advanced AI Technology
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform News Articles into
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 block">
              Actionable Insights
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Save time and stay informed with AI-powered summaries. Get key points, detailed analysis, 
            and thought-provoking questions from any news article in seconds.
          </p>
        </div>

        {/* URL Input Form */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-teal-600"></div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="url" className="block text-lg font-semibold text-gray-800 mb-4">
                  Enter Article URL
                </label>
                <div className="relative">
                  <Link className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="url"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://example.com/news-article"
                    className="w-full pl-14 pr-6 py-5 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-lg placeholder-gray-400"
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={!url.trim()}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-bold py-5 px-8 rounded-2xl hover:from-blue-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FileText className="w-6 h-6" />
                Analyze Article
                <ArrowRight className="w-6 h-6" />
              </button>
            </form>

            {/* Example URLs */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-sm font-medium text-gray-600 mb-4">Try these example articles:</p>
              <div className="space-y-2">
                {exampleUrls.map((exampleUrl, index) => (
                  <button
                    key={index}
                    onClick={() => setUrl(exampleUrl)}
                    className="block w-full text-left text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors truncate"
                  >
                    {exampleUrl}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              title: "Lightning Fast",
              description: "Get comprehensive summaries in under 10 seconds",
              icon: Zap,
              color: "from-yellow-500 to-orange-500"
            },
            {
              title: "Multiple Formats",
              description: "Brief summaries, detailed analysis, key points & questions",
              icon: FileText,
              color: "from-blue-500 to-purple-500"
            },
            {
              title: "Smart Analysis",
              description: "Extract the most important insights automatically",
              icon: Target,
              color: "from-green-500 to-teal-500"
            },
            {
              title: "Always Accurate",
              description: "Advanced AI ensures high-quality, reliable summaries",
              icon: CheckCircle,
              color: "from-pink-500 to-red-500"
            }
          ].map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h3>
            <p className="text-lg text-gray-600">Simple, fast, and intelligent article analysis</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Paste URL",
                description: "Simply paste any news article URL into the input field above"
              },
              {
                step: "02", 
                title: "AI Analysis",
                description: "Our advanced AI reads and analyzes the entire article content"
              },
              {
                step: "03",
                title: "Get Insights",
                description: "Receive summaries, key points, and questions in multiple formats"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg">
                  {item.step}
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "50K+", label: "Articles Analyzed" },
            { number: "99.9%", label: "Accuracy Rate" },
            { number: "< 10s", label: "Average Processing Time" },
            { number: "24/7", label: "Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">ArticleAI</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Transforming how you consume news with cutting-edge AI technology. 
                Stay informed, save time, and gain deeper insights.
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-gray-400">
                © 2025 ArticleAI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;