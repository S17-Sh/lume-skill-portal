
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Award, Brain, CheckCircle, ArrowRight, Zap, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-lume-green to-lume-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Product Suite
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Comprehensive solutions for the entire learning journey - from skill acquisition to certification and employment readiness.
          </p>
        </div>
      </section>

      {/* LUME Vocational Platform */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-lume-green rounded-xl flex items-center justify-center mr-4">
                  <BookOpen className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">LUME Vocational Platform</h2>
                  <p className="text-gray-600">Next-Generation Learning Management System</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-8">
                Our flagship LMS combines intuitive design with powerful AI capabilities to create 
                engaging learning experiences that adapt to each learner's needs and pace.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-lume-green mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Modular UI Design</h4>
                    <p className="text-gray-600">Customizable interface that adapts to your organization's branding and workflow</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-lume-green mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">GenAI Content Creation</h4>
                    <p className="text-gray-600">AI-powered content generation for courses, assessments, and learning materials</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-lume-green mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">MS 365 Integration</h4>
                    <p className="text-gray-600">Seamless integration with Microsoft Office suite for enhanced productivity</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-lume-green mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Rich File Support</h4>
                    <p className="text-gray-600">Support for multimedia content including videos, interactive simulations, and documents</p>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-lume-green hover:bg-green-700 text-white">
                <Link to="/contact">
                  Request Demo <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-lume-light-green to-white rounded-2xl border-2 border-lume-green/20 flex items-center justify-center">
                <div className="text-center">
                  <BookOpen size={80} className="text-lume-green mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">Interactive Learning Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LUME Certification Engine */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-lume-blue rounded-xl flex items-center justify-center mr-4">
                  <Award className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">LUME Certification Engine</h2>
                  <p className="text-gray-600">Assessment & Certificate Platform</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-8">
                Transform how you assess and certify skills with our intelligent platform that provides 
                reliable, scalable, and secure certification processes with blockchain verification.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-lume-green mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Blockchain Certificates</h4>
                    <p className="text-gray-600">Secure, verifiable digital certificates with blockchain technology</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-lume-green mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Assessment Engine</h4>
                    <p className="text-gray-600">AI-powered assessments that adapt to skill levels and provide detailed analytics</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-lume-green mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Eligibility Checker</h4>
                    <p className="text-gray-600">Automated verification of prerequisites and qualification requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-lume-green mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Multilingual Support</h4>
                    <p className="text-gray-600">Global accessibility with support for multiple languages and regions</p>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-lume-blue hover:bg-blue-700 text-white">
                <Link to="/contact">
                  Learn More <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div className="lg:order-1 relative">
              <div className="w-full h-96 bg-gradient-to-br from-lume-light-blue to-white rounded-2xl border-2 border-lume-blue/20 flex items-center justify-center">
                <div className="text-center">
                  <Award size={80} className="text-lume-blue mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">Certification Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LUME Skill Engine */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-lume-green rounded-xl flex items-center justify-center mr-4">
                  <Brain className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">LUME Skill Engine</h2>
                  <p className="text-gray-600">AI-Powered Skill Intelligence Platform</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-8">
                Our AI-powered skill intelligence platform dynamically maps learning outcomes, assessments, 
                and job-role competencies to help organizations track skill gaps and build role-readiness at scale.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-lume-green mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Dynamic Skill Mapping</h4>
                    <p className="text-gray-600">Real-time mapping of learning outcomes to job competencies and market demands</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-lume-green mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Personalized Learning Paths</h4>
                    <p className="text-gray-600">AI-recommended training paths tailored to individual skill gaps and career goals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-lume-green mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Employment Alignment</h4>
                    <p className="text-gray-600">Connect training directly to employment outcomes and workforce readiness</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-lume-green mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Workforce Capability at Scale</h4>
                    <p className="text-gray-600">Build organizational capability with comprehensive skill gap analysis and planning</p>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-lume-green hover:bg-green-700 text-white">
                <Link to="/contact">
                  Learn More <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-lume-light-green to-white rounded-2xl border-2 border-lume-green/20 flex items-center justify-center">
                <div className="text-center">
                  <Brain size={80} className="text-lume-green mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">Skill Intelligence Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-lume-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Integrated Platform Benefits
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              When all components work together, the whole becomes greater than the sum of its parts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-gray-200 shadow-lg bg-white">
              <CardHeader className="text-center">
                <Zap className="mx-auto text-lume-green mb-4" size={48} />
                <CardTitle className="text-xl font-bold text-gray-900">Seamless Workflow</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">
                  Learners move smoothly from learning to assessment to certification without switching platforms
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg bg-white">
              <CardHeader className="text-center">
                <Users className="mx-auto text-lume-blue mb-4" size={48} />
                <CardTitle className="text-xl font-bold text-gray-900">Unified Analytics</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">
                  Complete visibility into learning progress, skill development, and certification outcomes
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg bg-white">
              <CardHeader className="text-center">
                <Globe className="mx-auto text-lume-yellow mb-4" size={48} />
                <CardTitle className="text-xl font-bold text-gray-900">Global Scale</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">
                  Deploy consistent training and certification programs across multiple regions and languages
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lume-green to-lume-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience LUME?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            See how our integrated platform can transform your organization's approach to skill development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-lume-yellow text-black hover:bg-yellow-400 font-semibold">
              <Link to="/contact">
                Schedule Demo <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lume-green">
              <Link to="/case-study">
                View Case Study
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
