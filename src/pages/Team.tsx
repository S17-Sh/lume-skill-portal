
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Team = () => {
  const leadershipMembers = [
    {
      name: "Ashish Jhalani",
      title: "Advisor & Investor",
      image: "/lovable-uploads/1151322c-7dab-4ffc-964e-32a776e2ed99.png",
      description: "Senior advisor and investor with a keen eye for scalable ventures. Ashish brings strategic foresight, financial acumen, and hands-on experience supporting high-growth companies through critical inflection points."
    },
    {
      name: "Lika Jain", 
      title: "Founder",
      image: "/lovable-uploads/3f137d77-58df-4cda-9e2d-591c3c0f532f.png",
      description: "Visionary leader with a proven track record in corporate strategy and finance across Education, Telecom, Media, and Consumer Tech. Lika brings deep cross-sectoral expertise and a bold vision to drive innovation and impact through technology."
    },
    {
      name: "Anil Gopinath",
      title: "Fractional CTO",
      image: "/lovable-uploads/0b609230-bf43-4ba0-a525-212a375196ec.png",
      description: "Seasoned engineering leader with over two decades of experience, Anil has shaped product and technology roadmaps at startups and giants like AWS and Yahoo. He brings deep technical insight and startup agility to power our product vision."
    },
    {
      name: "Shivani Karkal",
      title: "VP - Sales & Client Success",
      image: "/lovable-uploads/eac4cdac-d012-4cc3-9fc7-08417224a940.png", 
      description: "Dynamic business strategist leading sales and client delivery with a sharp focus on revenue growth and execution. With experience across Retail, EdTech, and Skilling, she drives market expansion and successful product rollouts across diverse client ecosystems."
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
            We're a mission-driven team with expertise across technology, education, and business strategy.
          </p>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            United by a shared commitment to innovation and transforming the future of work through intelligent skilling infrastructure.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {leadershipMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-4 group-hover:scale-105 transition-transform flex-shrink-0">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{member.name}</CardTitle>
                  <p className="text-lume-green font-semibold">{member.title}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-50">
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
                We challenge the status quo to build solutions learners actually need.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lume-green rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Impact</h3>
              <p className="text-gray-700">
                We design for inclusivity and accessibility to bridge global skill gaps.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lume-yellow rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-black text-2xl font-bold">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Human-Centered</h3>
              <p className="text-gray-700">
                We build empathetic, intuitive tools that work for real people.
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
            <Button asChild size="lg" className="bg-lume-yellow text-black hover:bg-yellow-300 hover:text-black font-semibold transition-colors">
              <Link to="/contact">
                View Open Positions
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-lume-blue font-semibold transition-colors">
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
