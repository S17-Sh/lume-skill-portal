
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
            About LUME GLOBAL INC
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're redefining how the skills are built, assessed and linked to job opportunities using intelligent technology.
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
                LUME Global Inc. is a SkillTech company on a mission to transform how nations and enterprises 
                build human capital. Headquartered in the US with a growing presence across India, the Middle East, 
                and Africa, we develop AI-powered platforms that enable large-scale skilling, workforce development, 
                and institutional learning.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our flagship product, LUME, serves as the digital infrastructure for ministries, corporates, 
                industry bodies, and universities looking to deliver high-impact learning and skilling programs.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                At LUME Global, we work at the intersection of policy, technology, and outcomes — empowering 
                institutions to deliver measurable change through scalable, intelligent systems.
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
                  To illuminate every learner's and workforce's path with intelligent, scalable skilling 
                  tools that bridge the gap between learning and employment.
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
                  A future where everyone can access personalized, outcome-oriented skill development 
                  and career mobility.
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
                  We are driven by innovation, accessibility, excellence, and user-centered design. 
                  We build technology that empowers — not complicates.
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
              Our Story: From Fragmentation to Integration journeys
            </h2>
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
                  LUME powers skilling at national and enterprise scale — enabling millions of learners 
                  to upskill, certify, and transition into jobs that match their competencies.
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
