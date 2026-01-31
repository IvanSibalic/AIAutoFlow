import { Bot, FileText, MessageSquare, BarChart3 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: 'Intelligent Process Automation',
      description: 'Automate repetitive tasks and workflows with AI-powered bots that learn from your business processes. From data entry to invoice processing, we handle it all.',
      features: ['Workflow automation', 'Document processing', 'Data extraction', 'Task scheduling'],
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbot Solutions',
      description: 'Deploy smart chatbots that handle customer inquiries 24/7, provide instant support, and qualify leads automatically. Improve customer satisfaction while reducing support costs.',
      features: ['24/7 customer support', 'Lead qualification', 'Multi-language support', 'CRM integration'],
    },
    {
      icon: FileText,
      title: 'Document Intelligence',
      description: 'Extract, analyze, and process documents automatically using advanced OCR and natural language processing. Transform unstructured data into actionable insights.',
      features: ['OCR & data extraction', 'Contract analysis', 'Invoice processing', 'Compliance checking'],
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Leverage machine learning to forecast trends, predict customer behavior, and optimize business decisions. Turn your data into competitive advantage.',
      features: ['Sales forecasting', 'Customer behavior analysis', 'Inventory optimization', 'Risk assessment'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI automation solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                <service.icon className="text-blue-600" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Not sure which solution is right for you?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
