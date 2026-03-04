import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <img 
                  src="/images/saheeli-logo.svg" 
                  alt="Saheeli Counselling" 
                  className="h-10 w-auto"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white">Saheeli Counselling</h3>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Professional mental health services dedicated to helping you achieve emotional well-being and personal growth.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-primary-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-primary-400 transition-colors">
                  Blog & Resources
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-sm hover:text-primary-400 transition-colors">
                  Client Testimonials
                </Link>
              </li>
              <li>
                <Link href="/book-appointment" className="text-sm hover:text-primary-400 transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/mental-health-counseling" className="text-sm hover:text-primary-400 transition-colors">
                  Mental Health Counseling
                </Link>
              </li>
              <li>
                <Link href="/services/couples-therapy" className="text-sm hover:text-primary-400 transition-colors">
                  Couples Therapy
                </Link>
              </li>
              <li>
                <Link href="/services/anxiety-management" className="text-sm hover:text-primary-400 transition-colors">
                  Anxiety Management
                </Link>
              </li>
              <li>
                <Link href="/services/child-counseling" className="text-sm hover:text-primary-400 transition-colors">
                  Child Counseling
                </Link>
              </li>
              <li>
                <Link href="/services/grief-loss-support" className="text-sm hover:text-primary-400 transition-colors">
                  Grief & Loss Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/place/Oval+Fertility/@17.4214518,78.4459674,17z/data=!4m10!1m2!2m1!1soval+fertility+hyderabad!3m6!1s0x3bcb97b60ea871c9:0xa209182db70d8e48!8m2!3d17.4214085!4d78.4485162!15sChhvdmFsIGZlcnRpbGl0eSBoeWRlcmFiYWSSARBmZXJ0aWxpdHlfY2xpbmlj4AEA!16s%2Fg%2F11y_gxl78q?entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  2nd Floor, Sattva Signature Tower, Oval Fertility, Banjara Hills Rd Number 1, Hyderabad, Telangana 500034
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+918008231699" className="text-sm hover:text-primary-400 transition-colors">
                  +91 800 823 1699
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:Gudurisunayana@gmail.com" className="text-sm hover:text-primary-400 transition-colors">
                  Gudurisunayana@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm font-medium text-white mb-1">Office Hours:</p>
              <p className="text-sm text-gray-400">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-sm text-gray-400">Sat: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 flex items-center">
              © {currentYear} Saheeli Counselling. Made with{' '}
              <Heart className="h-4 w-4 text-red-500 mx-1 fill-current" /> for better mental health.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-primary-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
