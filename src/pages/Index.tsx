import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificatesSection from '@/components/CertificatesSection';
import ContactSection from '@/components/ContactSection';
import FloatingSocials from '@/components/FloatingSocials';
import ParticleBackground from '@/components/ParticleBackground';
import FloatingElements from '@/components/FloatingElements';
import Navigation from '@/components/Navigation';

export default function Index() {
  return (
    <div className="relative">
      <ParticleBackground />
      <FloatingElements />
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
      <FloatingSocials />
    </div>
  );
}