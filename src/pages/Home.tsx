import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-neutral-100">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-neutral-900/30" />
        <div className="relative text-center text-white space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold animate-fade-up">
            Discover Tomorrow's Stars Today
          </h1>
          <p className="text-xl md:text-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Join the most prestigious talent hunt competition, running strong since 2018
          </p>
          <div className="flex justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/process" className="btn-primary inline-flex items-center gap-2">
              Learn More <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '500+', label: 'Talents Discovered' },
              { number: '6', label: 'Successful Seasons' },
              { number: '50M+', label: 'Prize Pool' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-2 animate-fade-up"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="font-serif text-4xl md:text-5xl font-semibold text-accent">
                  {stat.number}
                </div>
                <div className="text-neutral-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Winners Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Featured Winners</h2>
          <p className="section-subtitle text-center">
            Meet some of our exceptional talents who took their dreams to the next level
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { year: '2023', name: 'Sarah Chen', category: 'Music Production' },
              { year: '2022', name: 'Michael Ross', category: 'Digital Art' },
              { year: '2021', name: 'Emma Thompson', category: 'Game Development' },
            ].map((winner, index) => (
              <div
                key={index}
                className="premium-card animate-fade-up"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="h-48 bg-neutral-200 rounded-md mb-4" />
                <div className="space-y-2">
                  <div className="text-sm text-accent font-medium">{winner.year} Winner</div>
                  <h3 className="font-serif text-xl font-semibold">{winner.name}</h3>
                  <p className="text-neutral-600">{winner.category}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/winners" className="btn-primary inline-flex items-center gap-2">
              View All Winners <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;