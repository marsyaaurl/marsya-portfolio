import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "a41bed2c-f15c-4967-8899-2d88c55559e1",
          name: formState.name,
          email: formState.email,
          message: formState.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Failed to send message: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Web3Forms submission error:", error);
      alert("An error occurred while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/40 w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

        {/* Left Side: Contact Information */}
        <div className="flex-grow lg:w-[40%] flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-5xl font-black text-foreground">Contact Me</h2>
            <span className="text-md font-bold tracking-wider text-muted-foreground">I'm open to work!</span>
          </div>

          <div className="flex flex-col gap-5 mt-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-sm">
                <Mail size={20} className="bg-transparent" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</h4>
                <a href="mailto:marsyaaurelia@example.com" className="text-base font-bold text-foreground hover:underline">
                  marsyaaurelia@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary text-secondary-foreground flex items-center justify-center shadow-sm">
                <MapPin size={20} className="bg-transparent" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Location</h4>
                <p className="text-base font-bold text-foreground">Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Message Form */}
        <div className="flex-grow lg:w-[60%]">
          <div className="p-8 rounded-3xl glass-card border border-white/50 relative">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-name" className="text-sm font-bold text-foreground/80">Name</label>
                <input
                  id="form-name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-border/60 bg-white/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/40 transition-all duration-200 text-sm font-medium"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-email" className="text-sm font-bold text-foreground/80">Email</label>
                <input
                  id="form-email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-border/60 bg-white/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/40 transition-all duration-200 text-sm font-medium"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-message" className="text-sm font-bold text-foreground/80">Message</label>
                <textarea
                  id="form-message"
                  required
                  rows="4"
                  placeholder="Type your message here..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-border/60 bg-white/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/40 transition-all duration-200 text-sm font-medium resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="w-full flex items-center justify-center gap-2 mt-2 bg-foreground text-background font-bold py-3.5 rounded-2xl hover:bg-foreground/90 transition-all duration-200 shadow-md shadow-foreground/10 disabled:opacity-85"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin"></span>
                ) : submitted ? (
                  <>
                    <CheckCircle2 size={18} />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;
