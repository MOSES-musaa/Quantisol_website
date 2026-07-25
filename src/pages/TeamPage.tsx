import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import wamalwaIMG from "@/assets/wamalwa.jpeg";
import NgechuIMG from "@/assets/ngechu.jpg";
import KaruguIMG from "@/assets/karugu.jpg";
import WendoIMG from "@/assets/wendo.jpg";
import JosephIMG from "@/assets/joseph.jpg";
import MichaelIMG from "@/assets/michael.jpeg";
import ObediIMG from "@/assets/obedi.jpg";



const directors = [
  {
    name: "QS Michael Ngacha",
    position: "Director",
    qualifications: "Bachelor of Quantity Surveying (Honors)",
    registration: "BORAQS Registered (Q860)",
    extra: "Certificate in Basic Engineering Draughting",
    image: MichaelIMG,
  },
  {
    name: "QS Huria Karugu",
    position: "Director",
    qualifications: "Bachelor of Quantity Surveying (Honors)",
    registration: "BORAQS Registered (Q840)",
    extra: "Diploma in Project Management",
    image: KaruguIMG,
  },
  {
    name: "QS Humphrey Ngechu",
    position: "Director",
    qualifications: "Bachelor of Quantity Surveying (Honors)",
    registration: "BORAQS Registered (Q865)",
    extra: "CPA (K), PRINCE2 Foundation",
    image: NgechuIMG,
  },
];

const staff = [
  { name: "OBEDI W. NGACHA", role: "Administrator", qualification: "Bachelor of Commerce (Honors)", image: ObediIMG },
  { name: "SAMMY W. CHONGE", image: wamalwaIMG, role: "Assistant QS", qualification: "Bachelor of Quantity Surveying (Honors)" },
  { name: "JOSEPH M. GATHAMBI", image: JosephIMG, role: "Assistant QS", qualification: "Bachelor of Quantity Surveying (Honors)" },
  { name: "MOSES K. KAGWE", role: "Senior QS", qualification: "Bachelor of Quantity Surveying (Honors)" },
  { name: "JENNIFER W. WENDO", image: WendoIMG, role: "Assistant QS", qualification: "Bachelor of Quantity Surveying (Honors)" },
  { name: "BRIAN K. KARIUKI", role: "Assistant QS", qualification: "Bachelor of Quantity Surveying (Honors)" },
];

const legacyMembers = [
  {
    name: "PAUL W. MATHENGE",
    role: "Assistant QS",
    qualification: "Bachelor of Quantity Surveying (Honors)",
    tribute: "A dedicated professional whose commitment to excellence left a lasting impact on our team and the projects we deliver.",
  },
];

const TeamPage = () => {
  return (
    <main>
      <SEO
        title="Our Team — Registered Quantity Surveyors"
        description="Meet the BORAQS-registered Quantity Surveyors and construction professionals behind Quantsol Consultants Limited."
        path="/team"
      />
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="section-container">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Our Team</span>
            <div className="gold-line mt-4 mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground max-w-3xl">
              Meet the People Behind Our Success
            </h1>
            <p className="text-primary-foreground/60 text-lg mt-6 max-w-2xl">
              A team of highly skilled and passionate professionals committed to delivering excellence in every project we undertake.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Directors */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeader label="Leadership" title="Board of Directors" description="Each Director is a BORAQS-registered Quantity Surveyor with a strong academic background in Quantity Surveying and proven project experience." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {directors.map((d, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="bg-card card-hover p-8 text-center">
                  <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden bg-surface flex items-center justify-center">
  {d.image ? (
    <img
      src={d.image}
      alt={d.name}
      className="w-full h-full object-cover"
    />
  ) : (
    <span className="text-2xl font-bold text-accent">
      {d.name
        .split(" ")
        .map(n => n[0])
        .join("")
        .slice(0, 2)}
    </span>
  )}
</div>
                  <h3 className="text-lg font-semibold tracking-tight mb-1">{d.name}</h3>
                  <span className="text-xs font-semibold tracking-widest uppercase text-accent">{d.position}</span>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-1">{d.qualifications}</p>
                    <p className="text-xs font-medium text-accent">{d.registration}</p>
                    {d.extra && <p className="text-xs text-muted-foreground mt-1">{d.extra}</p>}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader label="Our People" title="Professional Staff" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {staff.map((s, i) => (
              <ScrollReveal key={i} delay={(i % 4) * 0.1}>
                <div className="bg-card p-6 text-center card-hover">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden bg-surface flex items-center justify-center">
                    {s.image ? (
                      <img
                        src={s.image}
                        alt={s.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-xl font-bold text-accent">
                        {s.name
                          .split(" ")
                          .map(n => n[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-semibold mb-1">{s.name}</h4>
                  <span className="text-xs text-accent">{s.role}</span>
                  {s.qualification && <p className="text-xs text-muted-foreground mt-2">{s.qualification}</p>}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Members */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeader label="In Memoriam" title="Our Legacy Members" description="Honoring the professionals who contributed to our journey and left an indelible mark on our firm." />
          <div className="max-w-lg mx-auto">
            {legacyMembers.map((m, i) => (
              <ScrollReveal key={i}>
                <div className="bg-card p-8 text-center border border-accent/20">
                  <div className="w-20 h-20 bg-surface rounded-full mx-auto mb-4 flex items-center justify-center border border-accent/30">
                    <span className="text-lg font-bold text-accent">
                      {m.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold mb-1">{m.name}</h4>
                  <span className="text-xs text-accent">{m.role}</span>
                  {m.qualification && <p className="text-xs text-muted-foreground mt-1">{m.qualification}</p>}
                  <p className="text-sm text-muted-foreground/80 mt-4 italic leading-relaxed">{m.tribute}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Work With <span className="text-accent">Experienced Professionals</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Our team is ready to bring expertise and dedication to your next project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-10 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-accent/90 transition-colors"
            >
              Contact Our Team <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default TeamPage;
