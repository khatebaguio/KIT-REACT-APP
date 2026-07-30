import Header from "@/components/common/header";
import { Footer } from "@/components/common/footer";

export default function About() {
  return (
    <>
      <main className="flex-1 page-main">
        <div className="page-container">
          
          <Header />

          <div className="content-grid">
            
            <div className="content-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '24px' }}>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#666', margin: 0 }}>Welcome to my space — Thanks for visiting ! (khate)</p>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#1a1a1a', margin: '16px 0 0' }}>ABOUT <span style={{ color: '#581c25' }}>ME</span></h2>
                <p style={{ fontSize: '0.95rem', color: '#444', margin: '12px 0 0' }}>Want to stay connected? You can find my social media accounts below, where I share updates, interests, and a little more about myself.</p>
              </div>

              <div>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#333', marginBottom: '10px' }}>Welcome to my Social Media Accounts</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <a href="https://www.facebook.com/khate.baguio.14" target="_blank" rel="noreferrer" style={{ backgroundColor: '#581c25', color: '#fff', padding: '8px 18px', borderRadius: '20px', fontSize: '0.8rem', textDecoration: 'none' }}>Facebook</a>
                  <a href="https://www.instagram.com/khay.eille/" target="_blank" rel="noreferrer" style={{ backgroundColor: '#e3d5c6', color: '#333', padding: '8px 18px', borderRadius: '20px', fontSize: '0.8rem', textDecoration: 'none' }}>Instagram</a>
                  <a href="https://www.tiktok.com/@xoxokahte" target="_blank" rel="noreferrer" style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '8px 18px', borderRadius: '20px', fontSize: '0.8rem', textDecoration: 'none' }}>TikTok</a>
                </div>
              </div>
            </div>

            <div className="content-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px', height: '100%' }}>
              <div className="image-container">
                <img src="/kitlyn.jpg" alt="Khate" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}