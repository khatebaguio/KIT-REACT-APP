import { CardDataSection } from "@/components/features/about/card-data-section";
import { ProfileSection } from "@/components/features/about/profile-section";

export default function AboutPage() {
  return (
    <main className="flex-1 page-main bg-white min-h-[80vh] py-8 pb-16">
      <div className="page-container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', alignItems: 'center' }}>
          <CardDataSection />
          <ProfileSection />
        </div>
      </div>
    </main>
  );
}