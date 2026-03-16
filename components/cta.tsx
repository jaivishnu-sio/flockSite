export function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form */}
          <div>
            <span className="text-sm font-semibold text-[#00C9B7] uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-primary">
              Partner With Flock
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Ready to transform your children&apos;s ministry? Join hundreds of
              churches already using Flock to raise the next generation in
              faith.
            </p>

            <form className="mt-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium mb-2 text-primary"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-primary"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium mb-2 text-primary"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-primary"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-primary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-primary"
                  placeholder="john@church.org"
                />
              </div>

              <div>
                <label
                  htmlFor="church"
                  className="block text-sm font-medium mb-2 text-primary"
                >
                  Church / Organization
                </label>
                <input
                  type="text"
                  id="church"
                  name="church"
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-primary"
                  placeholder="Grace Community Church"
                />
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium mb-2 text-primary"
                >
                  Your Role
                </label>
                <select
                  id="role"
                  name="role"
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-primary"
                >
                  <option value="">Select your role</option>
                  <option value="pastor">Pastor</option>
                  <option value="ministry-leader">
                    Children&apos;s Ministry Leader
                  </option>
                  <option value="volunteer">Volunteer</option>
                  <option value="parent">Parent</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-primary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none text-primary"
                  placeholder="Tell us about your church and ministry needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-semibold hover:bg-primary/90 transition-colors"
              >
                Send Message
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:pt-16">
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Contact Information
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Have questions? We&apos;d love to hear from you. Reach out to
                  our team and we&apos;ll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Email</p>
                    <a
                      href="mailto:hello@flockministry.org"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      hello@flockministry.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Phone</p>
                    <a
                      href="tel:+18005551234"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      (800) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Office</p>
                    <p className="text-muted-foreground">
                      123 Ministry Lane
                      <br />
                      Nashville, TN 37203
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-border">
                <p className="text-sm font-medium mb-4 text-primary">Follow Us</p>
                <div className="flex items-center gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
