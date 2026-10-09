import { Mail, MapPin, Phone } from 'lucide-react';
import { useEffect } from 'react';
import { CONTACT_INFO } from '../config/store';

function ContactPage() {
  useEffect(() => {
    document.title = 'Contact | AbdePerfumes';
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
      <div className="rounded-[28px] border border-neutral-200 bg-white p-8 shadow-luxe">
        <p className="text-xs uppercase tracking-[0.25em] text-[#C8A96A]">Contact</p>
        <h1 className="mt-3 font-display text-5xl text-[#111111]">Parlons de votre prochain parfum</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-[22px] bg-[#F8F5F0] p-5">
            <Mail className="text-[#C8A96A]" />
            <h2 className="mt-4 text-lg font-medium text-[#111111]">E-mail</h2>
            <p className="mt-2 text-sm text-neutral-600">{CONTACT_INFO.email}</p>
          </div>
          <div className="rounded-[22px] bg-[#F8F5F0] p-5">
            <Phone className="text-[#C8A96A]" />
            <h2 className="mt-4 text-lg font-medium text-[#111111]">Téléphone</h2>
            <p className="mt-2 text-sm text-neutral-600">{CONTACT_INFO.phone}</p>
          </div>
          <div className="rounded-[22px] bg-[#F8F5F0] p-5">
            <MapPin className="text-[#C8A96A]" />
            <h2 className="mt-4 text-lg font-medium text-[#111111]">Localisation</h2>
            <p className="mt-2 text-sm text-neutral-600">Morocco</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
