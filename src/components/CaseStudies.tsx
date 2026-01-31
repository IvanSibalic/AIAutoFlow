import { TrendingUp, Clock, DollarSign } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      company: 'TechRetail Solutions',
      industry: 'E-commerce',
      challenge: 'Manual order processing was taking 4 hours daily, causing delays and errors in order fulfillment.',
      solution: 'Implemented an intelligent order processing system that automatically extracts data from multiple channels, validates orders, and routes them to fulfillment.',
      results: [
        { icon: Clock, metric: '90%', label: 'Time Saved' },
        { icon: DollarSign, metric: '$45K', label: 'Annual Savings' },
        { icon: TrendingUp, metric: '99.7%', label: 'Accuracy Rate' },
      ],
    },
    {
      company: 'HealthFirst Clinic',
      industry: 'Healthcare',
      challenge: 'Patient appointment scheduling and follow-up reminders required dedicated staff, leading to high operational costs and missed appointments.',
      solution: 'Deployed an AI chatbot for appointment scheduling, automated reminder system, and patient query handling with seamless EHR integration.',
      results: [
        { icon: Clock, metric: '75%', label: 'Reduced Wait Time' },
        { icon: DollarSign, metric: '$60K', label: 'Annual Savings' },
        { icon: TrendingUp, metric: '40%', label: 'Fewer No-Shows' },
      ],
    },
    {
      company: 'GlobalTrade Logistics',
      industry: 'Supply Chain',
      challenge: 'Invoice processing from multiple vendors was time-consuming and error-prone, causing payment delays and vendor relationship issues.',
      solution: 'Integrated document intelligence system with OCR technology to automatically extract, validate, and process invoices from various formats.',
      results: [
        { icon: Clock, metric: '85%', label: 'Faster Processing' },
        { icon: DollarSign, metric: '$80K', label: 'Annual Savings' },
        { icon: TrendingUp, metric: '95%', label: 'Error Reduction' },
      ],
    },
  ];

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from businesses that transformed their operations with AI automation
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {study.company}
                    </h3>
                    <p className="text-blue-600 font-semibold text-lg">
                      {study.industry}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      The Challenge
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      Our Solution
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">
                    Results Achieved
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                    {study.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="bg-white rounded-xl p-6 shadow-md border-2 border-blue-100 hover:border-blue-300 transition-colors"
                      >
                        <result.icon className="text-blue-600 mb-3" size={32} />
                        <p className="text-4xl font-bold text-gray-900 mb-1">
                          {result.metric}
                        </p>
                        <p className="text-gray-600">
                          {result.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
