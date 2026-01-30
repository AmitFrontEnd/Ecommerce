import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "support@ecommerce.com",
      link: "mailto:support@ecommerce.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Ludhiana, Punjab, India",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="text-center space-y-4 mb-12">
          <Badge className="mx-auto bg-blue-600 text-white">Get in Touch</Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-slate-900 to-blue-600 dark:from-slate-100 dark:to-blue-400 bg-clip-text text-transparent">
            Let's Talk
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="group block p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/60 backdrop-blur hover:border-blue-200 dark:hover:border-blue-500/40 hover:shadow-lg hover:bg-blue-50/50 dark:hover:bg-blue-500/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-500/15 text-blue-600 dark:text-blue-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                      {info.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                      {info.details}
                    </p>
                  </div>
                </div>
              </a>
            ))}

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-500/10 dark:to-indigo-500/10">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm">
                Response Time
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                We typically respond within 24 hours on business days.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/70 backdrop-blur shadow-lg">
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="h-11 rounded-xl border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="h-11 rounded-xl border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="How can we help?"
                    required
                    className="h-11 rounded-xl border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 sm:py-16 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "What's your shipping policy?",
              a: "We offer free shipping on orders above ₹500. Delivery usually takes 5-7 business days.",
            },
            {
              q: "Do you accept returns?",
              a: "Yes! We accept returns within 30 days of purchase in original condition.",
            },
            {
              q: "How can I track my order?",
              a: "You'll receive a tracking link via email after your order ships.",
            },
            {
              q: "What payment methods do you accept?",
              a: "We accept all major credit/debit cards, UPI, and digital wallets.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800"
            >
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                {faq.q}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
