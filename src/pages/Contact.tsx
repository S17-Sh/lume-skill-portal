
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, MapPin, Linkedin, Twitter, Phone, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      organization: '',
      inquiryType: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-lume-blue to-lume-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to transform your organization's approach to learning and skill development? Let's start the conversation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Send us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="organization">Organization</Label>
                      <Input
                        id="organization"
                        type="text"
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type *</Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="demo">Product Demo</SelectItem>
                          <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                          <SelectItem value="media">Media Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your needs, goals, or questions..."
                        className="mt-1"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-lume-blue hover:bg-blue-700 text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <Mail className="mr-2 text-lume-blue" size={24} />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">General Inquiries:</p>
                  <a href="mailto:info@lumeglobal.ai" className="text-lume-blue hover:underline font-semibold">
                    info@lumeglobal.ai
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <MapPin className="mr-2 text-lume-green" size={24} />
                    Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    LUME Global.AI<br />
                    845 United Nations Plaza, Apt 10A<br />
                    New York, NY 10017<br />
                    Lewes, Delaware, USA
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <MessageSquare className="mr-2 text-lume-yellow" size={24} />
                    Connect With Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <a 
                      href="#" 
                      className="flex items-center text-gray-700 hover:text-lume-blue transition-colors"
                    >
                      <Linkedin className="mr-3" size={20} />
                      LinkedIn
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center text-gray-700 hover:text-lume-blue transition-colors"
                    >
                      <Twitter className="mr-3" size={20} />
                      Twitter/X
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-lume-blue to-lume-green text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                  <p className="mb-4 text-blue-100">
                    For urgent inquiries or technical support, we're here to help you get started quickly.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-lume-blue"
                  >
                    Schedule Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about LUME
            </p>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-lume-blue pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                How quickly can we implement LUME in our organization?
              </h3>
              <p className="text-gray-700">
                Implementation timelines vary based on your requirements, but most organizations 
                can be up and running within 2-4 weeks with our guided onboarding process.
              </p>
            </div>

            <div className="border-l-4 border-lume-green pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Can LUME integrate with our existing systems?
              </h3>
              <p className="text-gray-700">
                Yes! LUME is designed for seamless integration with popular HR, LMS, and business 
                systems including Microsoft 365, Salesforce, and many others.
              </p>
            </div>

            <div className="border-l-4 border-lume-yellow pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                What kind of support do you provide?
              </h3>
              <p className="text-gray-700">
                We provide comprehensive support including onboarding, training, technical support, 
                and ongoing customer success management to ensure your success with LUME.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
