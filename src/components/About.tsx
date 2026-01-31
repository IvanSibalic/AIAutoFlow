import { Target, Users, Zap, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About AI AutoFlow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to make advanced AI automation accessible to every business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Empowering Businesses Through Innovation
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded by a team of AI researchers and business automation experts, AI AutoFlow specializes in delivering intelligent automation solutions that transform how businesses operate.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We understand that small and medium businesses face unique challenges. That's why we've developed scalable, cost-effective AI solutions that deliver enterprise-level results without the enterprise price tag.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our approach combines cutting-edge machine learning, natural language processing, and computer vision technologies to create automation systems that learn, adapt, and improve over time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <Target className="text-blue-600 mb-4" size={40} />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h4>
              <p className="text-gray-700">
                Democratize AI automation to help businesses of all sizes compete in the digital age.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl">
              <Users className="text-gray-700 mb-4" size={40} />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h4>
              <p className="text-gray-700">
                15+ years combined experience in AI, machine learning, and business process optimization.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <Zap className="text-blue-600 mb-4" size={40} />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Fast Results</h4>
              <p className="text-gray-700">
                See measurable improvements in efficiency within the first 30 days of implementation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl">
              <Shield className="text-gray-700 mb-4" size={40} />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Secure & Reliable</h4>
              <p className="text-gray-700">
                Enterprise-grade security with 99.9% uptime guarantee for all automation systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
