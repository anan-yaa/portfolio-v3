import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroLeft } from './components/sections/HeroLeft';
import { HeroRight } from './components/sections/HeroRight';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { TechTicker } from './components/ui/TechTicker';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';
import { EducationSection } from './components/sections/EducationSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { AchievementsSection } from './components/sections/AchievementsSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative font-sans selection:bg-neo-yellow selection:text-black">
      <Header />
      
      <main className="flex-1 flex flex-col lg:flex-row relative">
        <HeroLeft />
        
        {/* Desktop Divider */}
        <div className="hidden lg:block w-1 bg-black absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-10" />
        
        {/* Mobile Divider */}
        <div className="block lg:hidden h-1 w-full bg-black z-10" />
        
        <HeroRight />
      </main>

      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <TechTicker />
      <EducationSection />
      <CertificationsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
