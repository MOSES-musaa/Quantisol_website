import { useState, FormEvent } from "react";
import SEO from "@/components/SEO";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  if (
    !formData.name.trim() ||
    !formData.email.trim() ||
    !formData.message.trim()
  ) {
    toast.error("Please fill in all required fields.");
    return;
  }

  setSending(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const contentType = response.headers.get("content-type");

if (!contentType?.includes("application/json")) {
  const text = await response.text();

  console.error("Non-JSON response:", {
    status: response.status,
    response: text,
  });

  throw new Error(
    `Server returned an unexpected response (${response.status}).`
  );
}

const data = await response.json();

if (!response.ok) {
  throw new Error(data.message || "Failed to send message.");
}
    toast.success("Your message has been sent successfully.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  } catch (error) {
    console.error("Contact form submission error:", error);

    toast.error(
      error instanceof Error
        ? error.message
        : "Unable to send your message. Please try again."
    );
  } finally {
    setSending(false);
  }
};

  return (
    <main>
      <SEO
        title="Contact Us — Get a Quote"
        description="Contact Quantsol Consultants Limited for Quantity Surveying, Project Management & Facilities Management services in Kenya. Call 0712 504 467."
        path="/contact"
      />
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="section-container">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Contact Us</span>
            <div className="gold-line mt-4 mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground max-w-3xl">
              Let's Start a Conversation
            </h1>
            <p className="text-primary-foreground/60 text-lg mt-6 max-w-2xl">
              Ready to discuss your next project? Reach out to us and let's explore how we can deliver value together.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <ScrollReveal>
              <SectionHeader label="Get in Touch" title="Send Us a Message" align="left" />
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="text-xs font-semibold tracking-widest uppercase text-accent mb-2 block">Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b border-input py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your full name"
                    maxLength={100}
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold tracking-widest uppercase text-accent mb-2 block">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b border-input py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="your@email.com"
                    maxLength={255}
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold tracking-widest uppercase text-accent mb-2 block">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-transparent border-b border-input py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your phone number"
                    maxLength={20}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold tracking-widest uppercase text-accent mb-2 block">Message *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-transparent border-b border-input py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell us about your project..."
                    rows={4}
                    maxLength={1000}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2 bg-gold text-primary-foreground px-10 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-accent/90 transition-colors disabled:opacity-50 w-full sm:w-auto"
                >
                  {sending ? "Sending..." : "Send Message"}
                  <Send size={14} />
                </button>
              </form>
            </ScrollReveal>

            {/* Info */}
            <div>
              <ScrollReveal>
                <SectionHeader label="Our Office" title="Contact Information" align="left" />
                <div className="flex flex-col gap-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-4">Location</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">Sigona Suites 502B, Kikuyu</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">Kikuyu Nderi Road, Kikuyu Town</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">P.O. BOX 755 - 00517, Uhuru Gardens</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-accent" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-sm font-semibold mb-4">Phone</h4>
                      <a href="tel:0798770275" className="text-sm text-muted-foreground hover:text-accent transition-colors block">0798 770 275</a>
                      <a href="tel:0712504467" className="text-sm text-muted-foreground hover:text-accent transition-colors block">0712 504 467</a>
                      <a href="tel:0711201331" className="text-sm text-muted-foreground hover:text-accent transition-colors block">0711 201 331</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-4">Email</h4>
                      <a href="mailto:info@quantsol.co.ke" className="text-sm text-muted-foreground hover:text-accent transition-colors">info@quantsol.co.ke</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">WhatsApp</h4>
                      <a
                        href="https://wa.me/254712504467"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-accent hover:underline"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Map */}
              <ScrollReveal delay={0.2}>
                <div className="w-full aspect-[16/9] bg-surface overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.17!2d36.6600!3d-1.2450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sKikuyu%2C+Kenya!5e0!3m2!1sen!2ske!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Quantsol location"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
