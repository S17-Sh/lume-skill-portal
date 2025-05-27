
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-lume-blue to-lume-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About LUME Global.AI
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're reshaping how the world learns, assesses skills, and connects talent with opportunity through intelligent technology.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                LUME is a next-generation skilling company that's revolutionizing learning, assessment, 
                and talent readiness. We believe that every individual has unique potential waiting to be unlocked.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our platform combines cutting-edge AI with deep educational expertise to create 
                seamless learning journeys that transform careers and empower organizations to build 
                future-ready workforces.
              </p>
              <Button asChild className="bg-lume-blue hover:bg-blue-700">
                <Link to="/team">Meet Our Team</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-lume-light-blue to-lume-light-green rounded-2xl flex items-center justify-center">
                <Users size={120} className="text-lume-blue opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-lume-blue rounded-xl flex items-center justify-center mb-4">
                  <Target className="text-white" size={28} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">
                  To illuminate every individual's potential with smart, scalable, 
                  AI-powered skilling tools that bridge the gap between learning and employment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-lume-green rounded-xl flex items-center justify-center mb-4">
                  <Eye className="text-white" size={28} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">
                  A world where skill development is accessible, personalized, and directly 
                  connected to meaningful career opportunities for everyone, everywhere.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-lume-yellow rounded-xl flex items-center justify-center mb-4">
                  <Heart className="text-black" size={28} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Our Values</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">
                  Innovation, accessibility, excellence, and human-centered design drive 
                  everything we do. We believe technology should empower, not complicate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From fragmented systems to integrated journeys
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="border-l-4 border-lume-blue pl-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h3>
                <p className="text-gray-700 mb-4">
                  Traditional learning and assessment systems were fragmented, inefficient, and failed to connect 
                  skill development with real-world employment needs. Organizations struggled with disconnected 
                  platforms, manual processes, and limited insights into workforce capabilities.
                </p>
              </div>

              <div className="border-l-4 border-lume-green pl-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Solution</h3>
                <p className="text-gray-700 mb-4">
                  LUME was born from the vision to create an integrated ecosystem where learning, assessment, 
                  and certification work seamlessly together. Built by experts in education, technology infrastructure, 
                  and human-centered design, our platform addresses the complete skill development lifecycle.
                </p>
              </div>

              <div className="border-l-4 border-lume-yellow pl-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Impact</h3>
                <p className="text-gray-700 mb-4">
                  Today, LUME powers skill development for organizations worldwide, helping millions of learners 
                  transform their careers through intelligent, personalized learning experiences that directly 
                  connect to employment opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lume-blue to-lume-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Shaping the Future of Work
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of the movement that's transforming how the world develops and validates skills
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-lume-yellow text-black hover:bg-yellow-400 font-semibold">
              <Link to="/contact">
                Partner With Us
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lume-blue">
              <Link to="/team">
                Meet the Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
