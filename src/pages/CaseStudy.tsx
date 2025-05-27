
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Users, Clock, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-lume-blue to-lume-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-lume-yellow text-black font-semibold px-4 py-2">
            Case Study
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            POSH Training Proof of Concept
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            How LUME's integrated platform delivered comprehensive workplace safety training 
            and certification for a global enterprise client.
          </p>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Summary</h2>
              <p className="text-lg text-gray-700 mb-6">
                A Fortune 500 technology company needed to implement comprehensive Prevention of Sexual 
                Harassment (POSH) training across their global workforce of 50,000+ employees across 
                15 countries, with mandatory certification requirements and compliance tracking.
              </p>
              <p className="text-lg text-gray-700">
                Using LUME's integrated platform, we delivered a complete solution that combined 
                learning content, assessment, and certification into a seamless experience that 
                achieved 98% completion rates within the required timeframe.
              </p>
            </div>
            <div>
              <Card className="border-0 shadow-lg bg-lume-light-blue">
                <CardHeader>
                  <CardTitle className="text-lume-blue">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Users className="text-lume-blue mr-2" size={20} />
                    <span className="text-gray-700">50,000+ Employees</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-lume-blue mr-2" size={20} />
                    <span className="text-gray-700">6 Week Deployment</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="text-lume-blue mr-2" size={20} />
                    <span className="text-gray-700">98% Completion Rate</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="text-lume-blue mr-2" size={20} />
                    <span className="text-gray-700">15 Languages</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Compliance Requirements</h3>
                  <p className="text-gray-700">
                    Mandatory training for all employees with strict certification requirements 
                    and government compliance deadlines across multiple jurisdictions.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Scale & Complexity</h3>
                  <p className="text-gray-700">
                    Deploy to 50,000+ employees across 15 countries with different legal requirements, 
                    languages, and cultural considerations.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Time Constraints</h3>
                  <p className="text-gray-700">
                    Complete deployment, training, and certification within 8 weeks to meet 
                    regulatory deadlines and avoid penalties.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Tracking & Reporting</h3>
                  <p className="text-gray-700">
                    Real-time progress tracking, detailed analytics, and comprehensive reporting 
                    for legal and HR compliance purposes.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">⚠️</div>
                  <p className="text-gray-600 font-semibold">Complex Compliance Challenge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The LUME Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrated platform approach leveraging all three LUME components for seamless delivery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* LUME Vocational Platform */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-lume-blue rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">📚</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Learning Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-lume-green mr-2 mt-1" size={16} />
                    <span className="text-gray-700">Multilingual content delivery in 15 languages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-lume-green mr-2 mt-1" size={16} />
                    <span className="text-gray-700">Interactive modules with scenario-based learning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-lume-green mr-2 mt-1" size={16} />
                    <span className="text-gray-700">Mobile-responsive design for global access</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-lume-green mr-2 mt-1" size={16} />
                    <span className="text-gray-700">Progress tracking and engagement analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* LUME Certification Engine */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-lume-green rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">🏆</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Assessment & Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-lume-green mr-2 mt-1" size={16} />
                    <span className="text-gray-700">Adaptive assessments based on local regulations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-lume-green mr-2 mt-1" size={16} />
                    <span className="text-gray-700">Automated certification upon successful completion</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-lume-green mr-2 mt-1" size={16} />
                    <span className="text-gray-700">Digital certificates with blockchain verification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-lume-green mr-2 mt-1" size={16} />
                    <span className="text-gray-700">Compliance reporting and audit trails</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Integration Benefits */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-lume-yellow rounded-xl flex items-center justify-center mb-4">
                  <span className="text-black text-2xl">🔗</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Platform Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-lume-green mr-2 mt-1" size={16} />
                    <span className="text-gray-700">Single sign-on with existing HR systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-lume-green mr-2 mt-1" size={16} />
                    <span className="text-gray-700">Real-time sync with employee databases</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-lume-green mr-2 mt-1" size={16} />
                    <span className="text-gray-700">Automated notifications and reminders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-lume-green mr-2 mt-1" size={16} />
                    <span className="text-gray-700">Executive dashboard for C-suite visibility</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-lume-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Outstanding Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The integrated LUME platform delivered exceptional outcomes across all key metrics
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-lume-blue mb-2">98%</div>
              <p className="text-gray-700 font-semibold">Completion Rate</p>
              <p className="text-sm text-gray-600 mt-1">vs. 72% industry average</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-lume-green mb-2">6</div>
              <p className="text-gray-700 font-semibold">Weeks to Deploy</p>
              <p className="text-sm text-gray-600 mt-1">vs. 12 weeks originally planned</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-lume-yellow mb-2">$2.3M</div>
              <p className="text-gray-700 font-semibold">Cost Savings</p>
              <p className="text-sm text-gray-600 mt-1">vs. traditional solutions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-lume-blue mb-2">4.8/5</div>
              <p className="text-gray-700 font-semibold">User Satisfaction</p>
              <p className="text-sm text-gray-600 mt-1">employee feedback score</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Key Success Factors
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Made It Work</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-lume-blue rounded-full mt-3 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Integrated Platform Approach</h4>
                    <p className="text-gray-700">Single platform eliminated data silos and reduced complexity</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-lume-green rounded-full mt-3 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Rapid Deployment Capability</h4>
                    <p className="text-gray-700">Pre-built templates and automation enabled fast rollout</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-lume-yellow rounded-full mt-3 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-time Analytics</h4>
                    <p className="text-gray-700">Immediate visibility into progress and bottlenecks</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Client Feedback</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "LUME's integrated approach was exactly what we needed. Instead of managing multiple 
                  vendors and platforms, we had one solution that handled everything from content 
                  delivery to certification. The results exceeded our expectations."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-lume-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">JD</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Jane Doe</p>
                    <p className="text-gray-600">VP of Human Resources</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lume-blue to-lume-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Training Programs?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            See how LUME's integrated platform can deliver exceptional results for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-lume-yellow text-black hover:bg-yellow-400 font-semibold">
              <Link to="/contact">
                Schedule Demo <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lume-blue">
              <Link to="/products">
                Explore Platform
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudy;
