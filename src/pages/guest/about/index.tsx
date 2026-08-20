import { CardDataSection } from "@/components/features/about/card-data-section";
import { ProfileSection } from "@/components/features/about/profile-section";

export default function AboutPage() {
  return (
    <main className="flex-1 page-main bg-white min-h-[80vh] py-8 pb-16">
      {/* The main container wrapper */}
      <div className="page-container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* The big card container wrapper has been removed. 
          Now, the grid applies directly here, making it clean and borderless on the page background! */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 items-center w-full">
          <CardDataSection />
          <ProfileSection />
        </div>

      </div>
    </main>
  );
}