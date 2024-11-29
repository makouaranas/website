import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p>WhatsApp</p>
              <p>Phone</p>
              <p>Email</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link to="/legal" className="block hover:text-blue-400">Legal Texts</Link>
              <Link to="/safety" className="block hover:text-blue-400">Safety</Link>
              <Link to="/insurance" className="block hover:text-blue-400">Insurance</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-blue-400">Facebook</a>
              <a href="#" className="block hover:text-blue-400">Instagram</a>
              <a href="#" className="block hover:text-blue-400">YouTube</a>
              <a href="#" className="block hover:text-blue-400">TikTok</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Payment Methods</h3>
            <div className="space-y-2">
              <p>Visa/MasterCard</p>
              <p>PayPal</p>
              <p>Bank Transfer</p>
              <p>Cash Options</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}