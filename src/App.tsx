/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [quoteContext, setQuoteContext] = useState<string>('');

  const scrollToContact = useCallback((context?: string) => {
    if (context) {
      setQuoteContext(context);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#070708] text-white">
        <Navbar onRequestQuote={() => scrollToContact()} />
        <main className="flex-1">
          <Hero onStartProject={() => scrollToContact()} />
          <About />
          <Services
            onSelectService={(serviceTitle) =>
              scrollToContact(`Service Inquiry: ${serviceTitle}`)
            }
          />
          <Portfolio
            onRequestSimilar={(projectTitle) =>
              scrollToContact(`Similar Production to: ${projectTitle}`)
            }
          />
          <Pricing
            onSelectQuoteContext={(planLabel) => scrollToContact(planLabel)}
          />
          <Contact
            preselectedContext={quoteContext}
            onClearContext={() => setQuoteContext('')}
          />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
