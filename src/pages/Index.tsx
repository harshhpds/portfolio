import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import FloatingSocials from '@/components/FloatingSocials';
import ParticleBackground from '@/components/ParticleBackground';
import FloatingElements from '@/components/FloatingElements';

export default function Index() {
  return (
    <div className="relative">
      <ParticleBackground />
      <FloatingElements />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <FloatingSocials />
    </div>
  );
}