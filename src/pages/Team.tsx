
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      bio: "Former VP of Learning Technology at Microsoft with 15+ years in EdTech and AI. Led digital transformation initiatives across Fortune 500 companies.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612e1e8?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Chief Technology Officer",
      bio: "PhD in Computer Science from Stanford. Former Principal Engineer at Google AI. Expert in machine learning and scalable system architecture.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "Priya Patel",
      role: "Chief Product Officer",
      bio: "Former Head of Product at Coursera. 12+ years building user-centered learning platforms that serve millions of learners globally.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "James Thompson",
      role: "Chief Revenue Officer",
      bio: "Former VP Sales at Salesforce Education. Built and scaled B2B sales teams across enterprise EdTech and SaaS companies.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    }
  ];

  const advisors = [
    {
      name: "Dr. Elena Vasquez",
      role: "Education Advisor",
      bio: "Former UNESCO Director of Digital Learning. 20+ years in global education policy and workforce development.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Robert Kim",
      role: "Technology Advisor",
      bio: "Former CTO at Khan Academy. Pioneer in scalable educational technology and adaptive learning systems.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-lume-blue to-lume-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            World-class experts in education, technology, and human development working together to transform the future of learning.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our founding team brings together decades of experience from leading technology and education companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-4 group-hover:scale-105 transition-transform">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{member.name}</CardTitle>
                  <p className="text-lume-blue font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <Button size="sm" variant="outline" className="border-lume-blue text-lume-blue hover:bg-lume-blue hover:text-white">
                      <Linkedin size={16} className="mr-1" />
                      LinkedIn
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-white">
                      <Mail size={16} className="mr-1" />
                      Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Advisors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry veterans who guide our strategic direction and product development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-24 h-24 rounded-full overflow-hidden mb-4 group-hover:scale-105 transition-transform">
                    <img 
                      src={advisor.image} 
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{advisor.name}</CardTitle>
                  <p className="text-lume-green font-semibold">{advisor.role}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700">{advisor.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Culture & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that great products come from great teams working with shared purpose
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-lume-blue rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation First</h3>
              <p className="text-gray-700">
                We constantly push boundaries to create solutions that didn't exist before, 
                always with the learner's success in mind.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lume-green rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Impact</h3>
              <p className="text-gray-700">
                Every decision we make is guided by our commitment to democratizing 
                access to quality learning and skill development worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lume-yellow rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-black text-2xl font-bold">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Human-Centered</h3>
              <p className="text-gray-700">
                Technology serves people, not the other way around. We design with empathy 
                and deep understanding of human learning needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-gradient-to-r from-lume-blue to-lume-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent who share our passion for transforming education and human potential
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-lume-yellow text-black hover:bg-yellow-400 font-semibold">
              <Link to="/contact">
                View Open Positions
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lume-blue">
              <Link to="/contact">
                Partner With Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
