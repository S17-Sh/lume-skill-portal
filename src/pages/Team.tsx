
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Team = () => {
  const leadershipMembers = [
    {
      name: "Lika Jain",
      image: "/lovable-uploads/lika-jain.jpg",
      description: "Seasoned corporate strategy & finance professional with experience in Education, Telecom, Media, and Consumer Tech"
    },
    {
      name: "Anil Ambati", 
      image: "/lovable-uploads/anil-ambati.jpg",
      description: "Accomplished sales professional with expertise in Private & Government Business across sectors"
    },
    {
      name: "Shivani Karkal",
      image: "/lovable-uploads/shivani-karkal.jpg", 
      description: "Dynamic business strategist with experience in Retail, Edtech & Skilling"
    }
  ];

  const contributors = [
    {
      name: "CD1: Dinesh",
      image: "/lovable-uploads/cd1-dinesh.jpg"
    },
    {
      name: "CD2: Santosh", 
      image: "/lovable-uploads/cd2-santosh.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-lume-blue to-lume-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Leadership
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-4">
            Seasoned team with cumulative experience of 120+ years
          </p>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Diverse group of experts with deep domain knowledge, global experience, and a shared commitment to innovation.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadershipMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-4 group-hover:scale-105 transition-transform">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{member.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Core Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated contributors who drive our mission forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contributors.map((contributor, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-24 h-24 rounded-full overflow-hidden mb-4 group-hover:scale-105 transition-transform">
                    <img 
                      src={contributor.image} 
                      alt={contributor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{contributor.name}</CardTitle>
                </CardHeader>
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
