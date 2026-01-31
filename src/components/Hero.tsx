import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-6">
            <Sparkles className="text-blue-600 mr-2" size={20} />
            <span className="text-blue-600 text-sm font-medium">AI-Powered Business Automation</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Business
            <span className="block text-blue-600 mt-2">With Intelligent Automation</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We help small and medium businesses streamline operations, reduce costs, and accelerate growth through cutting-edge AI automation solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg border-2 border-blue-600"
            >
              Learn More
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">50%</h3>
              <p className="text-gray-600">Average Cost Reduction</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">10x</h3>
              <p className="text-gray-600">Faster Processing Time</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">99%</h3>
              <p className="text-gray-600">Accuracy Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
