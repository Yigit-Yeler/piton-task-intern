import { imgUrls } from './constants/imgUrls';

import AchievementSection from './components/AchievementsSection';
import PromotionSection from './components/PromotionSection';
import ProposalFormSection from './components/ProposalFormSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <img
        src={imgUrls.HERO_SECTION_IMG}
        alt="Vercel Logo"
        className="w-full"
      />

      <PromotionSection />

      <AchievementSection />

      <ProposalFormSection />

    </main>
  );
}
