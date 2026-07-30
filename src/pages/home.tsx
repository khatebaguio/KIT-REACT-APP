import Header from "@/components/common/header";
import { Footer } from "@/components/common/footer";

export default function Home() {
  return (
    <>
      <main className="flex-1 page-main">
        <div className="page-container">
          
          <Header />

          <div className="content-grid">
            
            <div className="content-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px', height: '100%' }}>
              <div className="image-container">
                <img 
                  src="/khay.jpg" 
                  alt="Khate Charmeille" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            <div className="content-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '24px', paddingTop: '75px' }}>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#666', margin: 0 }}>Welcome to my space — Thanks for visiting ! (khate)</p>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#1a1a1a', margin: '16px 0 0' }}>HI, I'M <span style={{ color: '#581c25' }}>KHATE</span></h2>
                <p style={{ fontSize: '0.95rem', color: '#444', margin: '12px 0 0' }}>I'm a 20 year old college student. I enjoy learning new things, exploring new ideas, and challenging myself to grow every day. In my free time, I love dancing, watching K-dramas, traveling, and listening to music..</p>
              </div>

              <div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <a href="/about" style={{ backgroundColor: '#581c25', color: '#fff', padding: '8px 18px', borderRadius: '20px', fontSize: '0.8rem', textDecoration: 'none' }}>About Me</a>
                  <a href="/hobbies" style={{ backgroundColor: '#e3d5c6', color: '#333', padding: '8px 18px', borderRadius: '20px', fontSize: '0.8rem', textDecoration: 'none', border: '1px solid #d5c4b0' }}>My Hobbies</a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}