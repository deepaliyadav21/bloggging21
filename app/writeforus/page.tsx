'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, FileText, Users, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoMdHome } from 'react-icons/io';
import { IoImages } from 'react-icons/io5';
import { FaCommentAlt, FaPhoneAlt, FaPen } from 'react-icons/fa';

export default function WriteForUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    content: '',
    experience: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Reach Thousands",
      description: "Your content will be seen by our growing community of engaged readers"
    },
    {
      icon: <Award className="w-6 h-6 text-green-600" />,
      title: "Build Authority",
      description: "Establish yourself as an expert in your field and build your personal brand"
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-600" />,
      title: "Quality Content",
      description: "We maintain high editorial standards to ensure valuable content for our readers"
    }
  ];

  const guidelines = [
    "Original content only - no plagiarism",
    "Minimum 800 words per article",
    "Include relevant images and examples",
    "Proper grammar and spelling",
    "Add value to our community",
    "Follow our editorial guidelines"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-green-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* LEFT: Navigation */}
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <IoMdHome className="text-2xl text-white" />
                <span className="text-white font-bold">Home</span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/categories" className="text-white hover:text-blue-600 transition-colors flex items-center space-x-1">
                  <FaCommentAlt />
                  <span>Blogs</span>
                </Link>
                <Link href="/trending" className="text-white hover:text-blue-600 transition-colors flex items-center space-x-2">
                  <IoImages className="text-2xl" />
                  <span>Gallery</span>
                </Link>
                <Link href="/leaderboard" className="text-white hover:text-blue-600 transition-colors flex items-center space-x-2">
                  <FaPhoneAlt className="text-xl" />
                  <span>Contact Us</span>
                </Link>
                <Link href="/writeforus" className="text-white hover:text-blue-600 transition-colors flex items-center space-x-2">
                  <FaPen className="text-xl" />
                  <span>Write For Us</span>
                </Link>
              </nav>
            </div>

            {/* RIGHT: Language, Notification, Profile */}
            <div className="flex items-center space-x-6">
              
              {/* Language Switcher */}
              <div className="flex items-center space-x-2 text-white text-sm">
                <span>Language</span>
                <label className="flex items-center space-x-1">
                  <input type="radio" name="language" className="accent-white" />
                  <span>हिंदी</span>
                </label>
                <label className="flex items-center space-x-1 bg-green-500 text-white px-2 py-1 rounded-full font-semibold">
                  <input type="radio" name="language" checked className="accent-white" />
                  <span>English</span>
                </label>
              </div>

              {/* Bell Icon */}
              <FaBell className="text-white text-xl cursor-pointer" />

              {/* User Profile */}
              <div className="flex items-center space-x-2 text-white">
                <FaUserCircle className="text-2xl" />
                <span>Deepali Yadav</span>
              </div>
            </div>

          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Write For Us</span>
        </div>

        {/* Back Button */}
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="text-gray-600 hover:text-blue-600">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FaPen className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Write For Us</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Share your knowledge and expertise with our community. We're always looking for passionate writers to contribute valuable content.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Submission Form */}
            <Card className="border-0 bg-white shadow-sm mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="h-5 w-5 text-blue-600" />
                  <span>Submit Your Article</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Article Title *
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter your article title"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="technology">Technology</option>
                      <option value="business">Business & Entrepreneurship</option>
                      <option value="health">Health & Lifestyle</option>
                      <option value="education">Science & Education</option>
                      <option value="creative">Creative Arts</option>
                      <option value="general">General Discussion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Writing Experience
                    </label>
                    <Input
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="Brief description of your writing background"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Article Content *
                    </label>
                    <Textarea
                      name="content"
                      value={formData.content}
                      onChange={handleChange}
                      placeholder="Write your article here or provide an outline..."
                      className="min-h-48 resize-none"
                      required
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      Minimum 800 words. You can also send us a detailed outline and we'll get back to you.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Article
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Benefits */}
            <Card className="border-0 bg-white shadow-sm">
              <CardHeader>
                <CardTitle>Why Write For Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Guidelines */}
            <Card className="border-0 bg-white shadow-sm">
              <CardHeader>
                <CardTitle>Submission Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {guidelines.map((guideline, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{guideline}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Have questions about our submission process? We're here to help!
                </p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Email:</span>
                    <span className="text-blue-600 ml-1">writers@letsdiskuss.com</span>
                  </div>
                  <div>
                    <span className="font-medium">Response Time:</span>
                    <span className="ml-1">Within 48 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}