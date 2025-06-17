
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Award, Brain, Users, Globe, Zap, CheckCircle, Calendar, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-lume-green via-green-600 to-lume-blue py-24">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-lume-yellow text-black font-semibold px-4 py-2">
              🚀 Powering the Future of Work
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Intelligent Skilling Infrastructure
              <span className="block text-lume-yellow">for a Smarter Workforce</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              From learning to certification, we power the future of work with AI-driven platforms 
              for skill development, assessment, and talent readiness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-lume-yellow text-black font-semibold hover:bg-yellow-300 hover:text-black transition-colors">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-lume-green font-semibold hover:bg-gray-100 hover:text-lume-blue transition-colors">
                <Link to="/contact">
                  <Calendar className="mr-2" size={20} />
                  Schedule a Call
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-lume-green font-semibold transition-colors">
                <Link to="/products">
                  Explore Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-lume-yellow rounded-full opacity-20"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-12 h-12 bg-white rounded-full opacity-20"></div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See LUME in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our intuitive platform that transforms learning into measurable career outcomes
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-lume-light-green to-gray-100 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <Badge className="bg-lume-green text-white">Live Demo</Badge>
                </div>
                <div className="aspect-video bg-gradient-to-br from-lume-green to-lume-blue rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-semibold mb-2">Interactive Dashboard Preview</h3>
                    <p className="text-green-100">Coming Soon - Full Platform Demo</p>
                  </div>
                </div>
              </div>
            </div>
            <Button asChild className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-lume-green text-white hover:bg-lume-blue font-semibold transition-colors px-8 py-3">
              <Link to="/contact">
                Request Live Demo <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-8 bg-lume-light-green border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lume-green font-semibold text-lg">
            Trusted by educators, governments, and global enterprises
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Product Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for the entire learning journey - from skill acquisition to certification
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* LUME Vocational Platform */}
            <Card className="border border-gray-200 shadow-lg bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-lume-green rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="text-white" size={28} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">LUME Vocational Platform</CardTitle>
                <CardDescription className="text-gray-600">
                  Next-generation LMS with AI-powered content creation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-lume-green mr-2" size={16} />
                    Modular UI & MS 365 Integration
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-lume-green mr-2" size={16} />
                    GenAI Content Creation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-lume-green mr-2" size={16} />
                    Rich Media Support
                  </li>
                </ul>
                <Button asChild className="w-full bg-lume-green text-white hover:bg-lume-blue transition-colors">
                  <Link to="/products">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* LUME Certification Engine */}
            <Card className="border border-gray-200 shadow-lg bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-lume-blue rounded-xl flex items-center justify-center mb-4">
                  <Award className="text-white" size={28} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">LUME Certification Engine</CardTitle>
                <CardDescription className="text-gray-600">
                  Assessment & certificate platform with blockchain verification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-lume-green mr-2" size={16} />
                    Blockchain Certificates
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-lume-green mr-2" size={16} />
                    Assessment Engine
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-lume-green mr-2" size={16} />
                    Multilingual Support
                  </li>
                </ul>
                <Button asChild className="w-full bg-lume-blue text-white hover:bg-lume-green transition-colors">
                  <Link to="/products">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* LUME Skill Engine */}
            <Card className="border border-gray-200 shadow-lg bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-lume-green rounded-xl flex items-center justify-center mb-4">
                  <Brain className="text-white" size={28} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">LUME Skill Engine</CardTitle>
                <CardDescription className="text-gray-600">
                  AI-powered skill intelligence for workforce capability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-lume-green mr-2" size={16} />
                    Dynamic Skill Mapping
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-lume-green mr-2" size={16} />
                    Personalized Learning Paths
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-lume-green mr-2" size={16} />
                    Employment Alignment
                  </li>
                </ul>
                <Button asChild className="w-full bg-lume-green text-white hover:bg-lume-blue transition-colors">
                  <Link to="/products">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why LUME Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why LUME?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              LUME stands for Learning, Upskilling, Mastery, and Employment. 
              We illuminate pathways that turn potential into purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-lume-green to-lume-blue rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Learning</h3>
              <p className="text-gray-600">Foundational knowledge acquisition with AI-powered personalization</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-lume-green to-lume-yellow rounded-2xl flex items-center justify-center mb-6">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Upskilling</h3>
              <p className="text-gray-600">Continuous skill development aligned with industry demands</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-lume-yellow to-lume-green rounded-2xl flex items-center justify-center mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mastery</h3>
              <p className="text-gray-600">Deep expertise validation through comprehensive assessment</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-lume-green to-lume-blue rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Employment</h3>
              <p className="text-gray-600">Career readiness and talent marketplace connection</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lume-green to-lume-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Workforce?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join organizations worldwide who trust LUME to power their skilling infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-lume-yellow text-black font-semibold hover:bg-yellow-300 hover:text-black transition-colors">
              <Link to="/contact">
                Schedule Demo <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-lume-green font-semibold transition-colors">
              <Link to="/products">
                Explore Solutions
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
