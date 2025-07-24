// src/pages/Landing.tsx

import React, { useState, useEffect } from 'react';
import { CheckSquare, Clock, Target, Star, User, Plus, Calendar, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, CardContent, Header, Nav, Section, Span, H1, H2, P, Div, Footer } from '../lib/dev-container';
import { useAuth } from '../components/auth/AuthProvider';
import type { ComponentRegistryId } from '../registry/componentRegistry';

// Helper functions to ensure type safety for dynamic IDs
const getStatCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['stat-card-0', 'stat-card-1', 'stat-card-2', 'stat-card-3'];
  return ids[index] || 'noID';
};

const getFeatureCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['feature-card-0', 'feature-card-1', 'feature-card-2', 'feature-card-3'];
  return ids[index] || 'noID';
};

const getBenefitCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['benefit-card-0', 'benefit-card-1', 'benefit-card-2', 'benefit-card-3'];
  return ids[index] || 'noID';
};

const getWorkflowStepId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['workflow-step-0', 'workflow-step-1', 'workflow-step-2', 'workflow-step-3'];
  return ids[index] || 'noID';
};

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: <CheckSquare className="w-8 h-8 text-green-500" />,
      title: "Smart Task Management",
      description: "Create, organize, and track your tasks with intelligent categorization and priority levels"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Time Tracking",
      description: "Monitor time spent on tasks and get insights into your productivity patterns"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: "Goal Setting",
      description: "Set deadlines, milestones, and track progress towards your objectives"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: "Analytics Dashboard",
      description: "Visualize your productivity with detailed reports and performance metrics"
    }
  ];

  const stats = [
    { label: "Tasks Completed", value: "10K+" },
    { label: "Active Users", value: "2.5K" },
    { label: "Time Saved", value: "40%" },
    { label: "Success Rate", value: "95%" }
  ];

  const benefits = [
    {
      title: "Boost Productivity",
      description: "Increase your daily output by up to 40% with smart task organization",
      color: "from-green-400 to-green-600"
    },
    {
      title: "Reduce Stress",
      description: "Never forget important tasks with intelligent reminders and notifications",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Track Progress",
      description: "Visualize your achievements and stay motivated with progress tracking",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Team Collaboration",
      description: "Share tasks and collaborate effectively with team members",
      color: "from-orange-400 to-orange-600"
    }
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "Create Tasks",
      description: "Add your tasks with descriptions, priorities, and due dates"
    },
    {
      step: "2",
      title: "Organize",
      description: "Categorize tasks and set up your personalized workflow"
    },
    {
      step: "3",
      title: "Execute",
      description: "Work through your tasks with focus and track your progress"
    },
    {
      step: "4",
      title: "Analyze",
      description: "Review your performance and optimize your productivity"
    }
  ];

  return (
    <Container componentId="landing-page-root">
      <Div 
        devId="main-wrapper" 
        devName="Main Wrapper" 
        devDescription="Main page wrapper with gradient background"
        className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900"
      >
      {/* Header */}
      <Header 
        devId="main-header" 
        devName="Main Header" 
        devDescription="Primary site header with navigation"
        className="container mx-auto px-4 py-6"
      >
        <Nav 
          devId="main-nav" 
          devName="Main Navigation" 
          devDescription="Primary navigation bar"
          className="flex items-center justify-between"
        >
          <Div 
            devId="logo-section" 
            devName="Logo Section" 
            devDescription="Company logo and brand name"
            className="flex items-center space-x-2"
          >
            <Div devId="noID" className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
              <CheckSquare className="w-5 h-5 text-white" />
            </Div>
            <Span 
              devId="brand-name" 
              devName="Brand Name" 
              devDescription="TaskFlow brand name"
              className="text-xl font-bold text-white"
            >
              TaskFlow
            </Span>
          </Div>
          <Div 
            devId="nav-actions" 
            devName="Navigation Actions" 
            devDescription="Navigation buttons and user menu"
            className="flex items-center space-x-4"
          >
            <Button 
              devId="features-button" 
              devName="Features Button" 
              devDescription="Link to features section"
              variant="ghost" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </Button>
            {isAuthenticated ? (
              <Div 
                devId="user-section" 
                devName="User Section" 
                devDescription="Authenticated user welcome area"
                className="flex items-center space-x-4"
              >
                <Span 
                  devId="welcome-message" 
                  devName="Welcome Message" 
                  devDescription="Welcome message for authenticated user"
                  className="text-gray-300"
                >
                  Welcome, {user?.name?.split(' ')[0]}!
                </Span>
                <Link to="/dashboard">
                  <Button 
                    devId="nav-dashboard-button"
                    devName="Navigation Dashboard Button"
                    devDescription="Dashboard button in navigation header for authenticated users"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
              </Div>
            ) : (
              <Div 
                devId="auth-buttons" 
                devName="Authentication Buttons" 
                devDescription="Login and register buttons for unauthenticated users"
                className="flex items-center space-x-2"
              >
                <Link to="/login">
                  <Button 
                    devId="nav-login-button"
                    devName="Navigation Login Button"
                    devDescription="Login button in navigation header"
                    variant="ghost" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button 
                    devId="nav-register-button"
                    devName="Navigation Register Button"
                    devDescription="Get started button in navigation header"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Get Started
                  </Button>
                </Link>
              </Div>
            )}
          </Div>
        </Nav>
      </Header>

      {/* Hero Section */}
      <Container componentId="hero-section">
        <Section 
          devId="hero-content" 
          devName="Hero Content" 
          devDescription="Main hero Section with title and call-to-action"
          className="container mx-auto px-4 py-20 text-center"
        >
          <Div 
            devId="hero-content-wrapper" 
            devName="Hero Content Wrapper" 
            devDescription="Animated wrapper for hero content"
            className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <H1 
              devId="hero-title" 
              devName="Hero Title" 
              devDescription="Main hero title showcasing task management"
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Master Your 
              <Span 
                devId="tasks-highlight" 
                devName="Tasks Highlight" 
                devDescription="Highlighted Tasks text in gradient"
                className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
              >
                {' '}Tasks
              </Span>
            </H1>
            <P 
              devId="hero-description" 
              devName="Hero Description" 
              devDescription="Hero Section description explaining the task management benefits"
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Transform your productivity with intelligent task management. Organize, prioritize, 
              and complete your work with ease using our powerful task tracking system.
            </P>
            <Div 
              devId="hero-cta-buttons" 
              devName="Hero CTA Buttons" 
              devDescription="Call-to-action buttons in hero Section"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {isAuthenticated ? (
                <Link to="/dashboard">
                  <Button 
                    devId="hero-start-organizing"
                    devName="Start Organizing Button"
                    devDescription="Primary call-to-action button for starting task organization"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Go to Dashboard
                  </Button>
                </Link>
              ) : (
                <Link to="/register">
                  <Button 
                    devId="hero-start-organizing"
                    devName="Start Organizing Button"
                    devDescription="Primary call-to-action button for starting task organization"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Start Organizing
                  </Button>
                </Link>
              )}
              <Button 
                devId="hero-learn-more-button"
                devName="Learn More Button"
                devDescription="Secondary button to learn more about features"
                variant="outline"
                className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                <Target className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Stats Section */}
      <Container componentId="stats-section">
        <Section 
          devId="stats-content" 
          devName="Stats Content" 
          devDescription="Statistics Section showing productivity metrics"
          className="container mx-auto px-4 py-12"
        >
          <Div 
            devId="stats-grid" 
            devName="Stats Grid" 
            devDescription="Grid container for statistics cards"
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                devId={getStatCardId(index)}
                devName={`${stat.label} Stat Card`}
                devDescription={`Statistical card showing ${stat.label}: ${stat.value}`}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
              >
                <CardContent devId="noID"  className="p-0">
                  <Div devId="noID" className="text-2xl font-bold text-white mb-2">{stat.value}</Div>
                  <Div devId="noID" className="text-gray-400">{stat.label}</Div>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Features Section */}
      <Container componentId="features-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Powerful Task Management Features</H2>
            <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
              Everything you need to stay organized and boost your productivity
            </P>
          </Div>
          <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                devId={getFeatureCardId(index)}
                devName={`${feature.title} Feature Card`}
                devDescription={`Feature card highlighting ${feature.title}: ${feature.description}`}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="mb-4">{feature.icon}</Div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <P devId="noID" className="text-gray-400">{feature.description}</P>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Benefits Section */}
      <Container componentId="benefits-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Why Choose TaskFlow?</H2>
            <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their productivity
            </P>
          </Div>
          <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                devId={getBenefitCardId(index)}
                devName={`${benefit.title} Benefit Card`}
                devDescription={`Benefit card highlighting ${benefit.title}: ${benefit.description}`}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all group"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className={`w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <CheckSquare className="w-6 h-6 text-white" />
                  </Div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <P devId="noID" className="text-gray-400">{benefit.description}</P>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Workflow Section */}
      <Container componentId="workflow-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Simple 4-Step Workflow</H2>
            <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
              Get started in minutes with our intuitive task management process
            </P>
          </Div>
          <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <Div key={index} devId={getWorkflowStepId(index)} className="text-center">
                <Div devId="noID" className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </Div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <P devId="noID" className="text-gray-400">{step.description}</P>
              </Div>
            ))}
          </Div>
        </Section>
      </Container>

      {/* CTA Section */}
      <Container componentId="cta-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-12 text-center border border-indigo-500/30">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</H2>
            <P devId="noID" className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users who have transformed their task management with TaskFlow
            </P>
            <Div devId="noID" className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                devId="cta-start-free"
                devName="Start Free Button"
                devDescription="Primary CTA button to start using TaskFlow for free"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Start Free Today
                </span>
              </Button>
              <Button 
                devId="cta-schedule-demo"
                devName="Schedule Demo Button"
                devDescription="Secondary CTA button to schedule a demo"
                variant="outline"
                className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Schedule Demo
                </span>
              </Button>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Footer */}
      <Footer 
        devId="main-footer" 
        devName="Main Footer" 
        devDescription="Site footer with links and copyright"
        className="container mx-auto px-4 py-8 border-t border-white/10"
      >
        <Div devId="noID" className="flex flex-col md:flex-row justify-between items-center">
          <Div devId="noID" className="text-gray-400 mb-4 md:mb-0">
            © 2024 TaskFlow. Built for productivity enthusiasts.
          </Div>
          <Div devId="noID" className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
          </Div>
        </Div>
      </Footer>
      </Div>
    </Container>
  );
};