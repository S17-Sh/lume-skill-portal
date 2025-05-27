
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Award, Brain, Users, Globe, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-lume-blue via-blue-700 to-lume-green py-24">
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
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              From learning to certification, we power the future of work with AI-driven platforms 
              for skill development, assessment, and talent readiness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-lume-yellow text-black hover:bg-yellow-400 font-semibold">
                <Link to="/products">
                  Explore Products <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lume-blue">
                <Link to="/contact">
                  Partner With Us
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

      {/* Trust Banner */}
      <section className="py-8 bg-lume-light-blue border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lume-blue font-semibold text-lg">
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
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-lume-blue rounded-xl flex items-center justify-center mb-4 group-hover:bg-lume-green transition-colors">
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
                <Button asChild className="w-full bg-lume-blue hover:bg-blue-700">
                  <Link to="/products">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* LUME Certification Engine */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-lume-green rounded-xl flex items-center justify-center mb-4 group-hover:bg-lume-blue transition-colors">
                  <Award className="text-white" size={28} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">LUME Certification Engine</CardTitle>
                <CardDescription className="text-gray-600">
                  Comprehensive assessment and certification platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-lume-green mr-2" size={16} />
                    Smart Assessment Engine
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-lume-green mr-2" size={16} />
                    Automated Certification Flow
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-lume-green mr-2" size={16} />
                    Multilingual Support
                  </li>
                </ul>
                <Button asChild className="w-full bg-lume-green hover:bg-green-700">
                  <Link to="/products">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* LUME Skill Graph */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-lume-yellow rounded-xl flex items-center justify-center mb-4 group-hover:bg-lume-blue transition-colors">
                  <Brain className="text-black" size={28} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">LUME Skill Graph</CardTitle>
                <CardDescription className="text-gray-600">
                  AI-powered skill mapping and intelligence engine
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="mb-4 bg-lume-yellow text-black">Coming Soon</Badge>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-lume-green mr-2" size={16} />
                    AI Skill Mapping
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-lume-green mr-2" size={16} />
                    Career Path Intelligence
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-lume-green mr-2" size={16} />
                    Talent Analytics
                  </li>
                </ul>
                <Button asChild className="w-full bg-lume-yellow text-black hover:bg-yellow-400">
                  <Link to="/contact">Join Beta</Link>
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
            <div className="text-center group">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-lume-blue to-lume-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Learning</h3>
              <p className="text-gray-600">Foundational knowledge acquisition with AI-powered personalization</p>
            </div>

            <div className="text-center group">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-lume-green to-lume-yellow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Upskilling</h3>
              <p className="text-gray-600">Continuous skill development aligned with industry demands</p>
            </div>

            <div className="text-center group">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-lume-yellow to-lume-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mastery</h3>
              <p className="text-gray-600">Deep expertise validation through comprehensive assessment</p>
            </div>

            <div className="text-center group">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-lume-blue to-lume-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Employment</h3>
              <p className="text-gray-600">Career readiness and talent marketplace connection</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lume-blue to-lume-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Workforce?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join organizations worldwide who trust LUME to power their skilling infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-lume-yellow text-black hover:bg-yellow-400 font-semibold">
              <Link to="/contact">
                Schedule Demo <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lume-blue">
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
