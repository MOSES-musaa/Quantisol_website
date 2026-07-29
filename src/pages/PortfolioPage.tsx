import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import SiteGallery from "@/components/SiteGallery";
import images from "@/lib/images";

interface Project {
  name: string;
  client: string;
  status: string;
  image: string;
  isRestricted?: boolean;
  isTilisi?: boolean;
}

const projects: Project[] = [
  { name: "Maisha Development — Tilisi", client: "Nirma Holdings Ltd", status: "Ongoing", image: images.tilisi4, isTilisi: true },
  { name: "Spring Valley Residential Development", client: "Rushmore Investment Ltd", status: "Ongoing", image: images.projectRiverside },
  { name: "Kyuna 39", client: "Mucyo & Hope", status: "Design", image: images.projectHousing },
  { name: "Kigali Office Block Development", client: "Mayfair Rwanda Ltd", status: "Award", image: images.projectOffice },
  { name: "Office Fitout Mayfair Centre", client: "Mayfair Kenya Ltd", status: "Ongoing", image: images.projectMayfairFitout },
  { name: "School Lane Apartments", client: "Panorama Ltd", status: "Design", image: images.projectSchoolLane },
  { name: "KDF Accommodation Housing — PPP & Affordable", client: "CREC 10", status: "Ongoing", image: "/placeholder.svg", isRestricted: true },
  { name: "Aeroclub Kitchen", client: "Aeroclub EA", status: "Design", image: images.projectAeroclub },
  { name: "Kitchen & Ablution Block", client: "Loreto Convent", status: "Ongoing", image: images.projectLoreto },
  { name: "Various Bank Fitouts (BoQ)", client: "Prime Bank", status: "Ongoing", image: images.projectBankFitout },
  { name: "New Rehema House Fitout", client: "NFDK", status: "Ongoing", image: "/placeholder.svg", isRestricted: true },
  { name: "Hacienda Michael", client: "Njau Ngacha Family", status: "Ongoing", image: images.projectHacienda },
  { name: "Moran Hotel", client: "Centcrete Ltd", status: "Award", image: images.projectMoran },
  { name: "Masalani Works", client: "DMS", status: "Ongoing", image: "/placeholder.svg", isRestricted: true },
];

const clients = [
  "Prime Bank Ltd", "Mayfair Insurance", "Zep-Re (PTA Reinsurance)", "Aero Club of East Africa",
  "Lab & Allied Ltd", "Kabarak University", "Loreto Convent Schools", "Gelian Hotel Machakos",
  "Nirma Holdings Ltd", "Shelter Solutions Ltd", "Kria Developers Ltd", "Centcrete Ltd",
];

const PortfolioPage = () => {
  return (
    <main>
      <SEO
        title="Portfolio — Construction Projects Kenya"
        description="Explore Quantsol's portfolio of 25+ construction and real estate projects across Kenya worth over Ksh 30 Billion, including KDF Housing, Tilisi, and more."
        path="/portfolio"
      />
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="section-container">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Portfolio</span>
            <div className="gold-line mt-4 mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground max-w-3xl">
              Our Project Portfolio
            </h1>
            <p className="text-primary-foreground/70 text-lg mt-6 max-w-2xl leading-relaxed">
              The Portfolio presented highlights a selection of the sites and assignments currently being handled by our team. It
              provides an overview of our ongoing involvements across various sectors and showcasing  our commitment to delivering professional consultancy services.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ScrollReveal key={i} delay={(i % 3) * 0.1}>
                <div className={`group overflow-hidden card-hover bg-card ${p.isTilisi ? "md:col-span-2 lg:col-span-3" : ""}`}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                  {p.isRestricted ? (
                    <div className="w-full h-full bg-navy flex items-center justify-center p-6 text-center">
                      <div>
                        <div className="gold-line mx-auto mb-4" />
                        <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-gold mb-2">Restricted Project</p>
                        <p className="text-xs text-primary-foreground/60 max-w-xs">
                          Site imagery withheld due to the sensitive nature of this engagement.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                  )}
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs font-mono tracking-wider px-3 py-1 ${
                        p.status === "Complete" ? "bg-accent/90 text-primary-foreground" : "bg-navy/80 text-primary-foreground"
                      }`}>
                        {p.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-semibold tracking-tight mb-2">{p.name}</h3>
                    <p className="text-xs text-muted-foreground">{p.client}</p>
                  </div>
                  {p.isTilisi && (
                    <div className="px-6 pb-6 space-y-6">
                      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold">Site Progress</p>
                      <SiteGallery siteName="Tilisi" images={images.tilisi} />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader label="Trusted By" title="Our Clients" description="We are proud to have worked with leading organizations across East Africa." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((c, i) => (
              <ScrollReveal key={i} delay={(i % 4) * 0.05}>
                <div className="bg-card p-6 text-center text-sm font-medium text-muted-foreground">
                  {c}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-center">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground mb-4">
              Let's Build Something <span className="text-gold">Remarkable</span>
            </h2>
            <p className="text-primary-foreground/60 max-w-xl mx-auto mb-8">
              Ready to start your next project? We'd love to discuss how we can deliver value for you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-10 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-accent/90 transition-colors"
            >
              Start a Conversation <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
