
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Users, Clock, TrendingUp, Award, Globe, Zap } from 'lucide-react';
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
            Oman Energy & Minerals Sector: National-Scale Workforce Certification
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            How LUME's integrated platform delivered scalable digital infrastructure for 
            vocational training and competency-based certification across industrial job roles.
          </p>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Summary</h2>
            <p className="text-lg text-gray-700 mb-6">
              A leading industrial certification body in Oman, responsible for workforce development 
              in the Energy and Mineral sector, required a scalable digital infrastructure to deliver 
              vocational training and competency-based certification across various industrial job roles.
            </p>
            <p className="text-lg text-gray-700">
              With LUME, they transformed fragmented systems into a cohesive platform that supported 
              national skilling standards and future-ready job readiness.
            </p>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Infrastructure</h3>
                  <p className="text-gray-700">
                    Required a scalable digital infrastructure to deliver vocational training and 
                    competency-based certification across various industrial job roles in the 
                    Energy and Minerals sector.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">System Integration</h3>
                  <p className="text-gray-700">
                    The existing system lacked integration between learning delivery and certification, 
                    making it difficult to manage skill pathways and compliance at scale.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Competency Alignment</h3>
                  <p className="text-gray-700">
                    Need to align training and testing with specific competency frameworks 
                    for industrial job roles while maintaining quality and consistency.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assessment</h3>
                  <p className="text-gray-700">
                    Deliver controlled assessments that ensure fairness and thorough evaluation 
                    while maintaining certification standards across the sector.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">⚙️</div>
                  <p className="text-gray-600 font-semibold">Industrial Training Challenge</p>
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
              Modular skilling suite approach leveraging integrated platforms for seamless delivery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* LUME Vocational Platform */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-lume-blue rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">📚</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">LUME Vocational Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-lume-green mr-2 mt-1" size={16} />
                    <span className="text-gray-700">Industry-specific courses for role-based training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-lume-green mr-2 mt-1" size={16} />
                    <span className="text-gray-700">Multimedia content delivery capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-lume-green mr-2 mt-1" size={16} />
                    <span className="text-gray-700">MS 365 integration for seamless workflow</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-lume-green mr-2 mt-1" size={16} />
                    <span className="text-gray-700">GenAI-assisted content creation</span>
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
                <CardTitle className="text-xl font-bold text-gray-900">LUME Certification Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-lume-green mr-2 mt-1" size={16} />
                    <span className="text-gray-700">Personalized evaluation workflows</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-lume-green mr-2 mt-1" size={16} />
                    <span className="text-gray-700">Blockchain-backed digital certificates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Competency Framework */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-lume-yellow rounded-xl flex items-center justify-center mb-4">
                  <span className="text-black text-2xl">⚙️</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Competency Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-lume-green mr-2 mt-1" size={16} />
                    <span className="text-gray-700">Training aligned with client competency frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-lume-green mr-2 mt-1" size={16} />
                    <span className="text-gray-700">Testing matched to framework requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-lume-green mr-2 mt-1" size={16} />
                    <span className="text-gray-700">Fairness and thorough evaluation ensured</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-lume-green mr-2 mt-1" size={16} />
                    <span className="text-gray-700">Quality standards maintained across sector</span>
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
              Outstanding Outcomes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The integrated LUME platform delivered transformational results across all key areas
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-lume-blue mb-2">
                <TrendingUp className="mx-auto mb-2" size={48} />
                Improvement
              </div>
              <p className="text-gray-700 font-semibold">Better Skilling outcomes</p>
              <p className="text-sm text-gray-600 mt-1">for the workforce</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-lume-green mb-2">
                <Zap className="mx-auto mb-2" size={48} />
                Reduced
              </div>
              <p className="text-gray-700 font-semibold">Administrative Overhead</p>
              <p className="text-sm text-gray-600 mt-1">for training and certification logistics</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-lume-yellow mb-2">
                <Clock className="mx-auto mb-2" size={48} />
                Real-time
              </div>
              <p className="text-gray-700 font-semibold">Progress Visibility</p>
              <p className="text-sm text-gray-600 mt-1">via stakeholder dashboards</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-lume-blue mb-2">
                <Award className="mx-auto mb-2" size={48} />
                Replicable
              </div>
              <p className="text-gray-700 font-semibold">Model Created</p>
              <p className="text-sm text-gray-600 mt-1">for future skilling initiatives</p>
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
                    <h4 className="font-semibold text-gray-900">Modular Platform Integration</h4>
                    <p className="text-gray-700">Seamless integration between learning delivery and certification</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-lume-green rounded-full mt-3 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Industry-Specific Content</h4>
                    <p className="text-gray-700">Role-based training aligned with sector requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-lume-yellow rounded-full mt-3 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Controlled Assessment Process</h4>
                    <p className="text-gray-700">Batch delivery ensuring quality and fairness</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Client Impact</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "LUME's modular skilling suite transformed our approach to workforce development 
                  in the Energy and Minerals sector. The integration between training and certification 
                  has enabled us to scale our operations while maintaining the highest quality standards."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-lume-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">AM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ahmad Al-Mahmood</p>
                    <p className="text-gray-600">Director of Workforce Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-lume-light-green p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">National Impact</h3>
              <p className="text-lg text-gray-700">
                This case showcases how LUME's integrated platforms can enable rapid, standardized 
                skilling and certification at a national or sectoral level—supporting workforce 
                transformation in industrial economies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lume-blue to-lume-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Industrial Training?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            See how LUME's modular skilling suite can deliver exceptional results for your sector
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
