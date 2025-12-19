import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, Building, MessageSquare } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`${t.requestQuote} - ${formData.product || t.customSolution}`);
    const body = encodeURIComponent(`
${t.fullName}: ${formData.name}
${t.email}: ${formData.email}
${t.company}: ${formData.company}
${t.phone}: ${formData.phone}
${t.productInterest}: ${formData.product || t.customSolution}

${t.message}:
${formData.message}
    `);
    
    window.location.href = `mailto:mail@giulianimetalli.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            {t.contactTitle}
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            {t.contactDescription}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.fullName} *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-4 border border-black rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
                      placeholder={t.yourName}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.email} *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-4 border border-black rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
                      placeholder={t.yourEmail}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.company}
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-4 border border-black rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
                      placeholder={t.companyName}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.phone}
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-4 border border-black rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
                      placeholder="+39 123 456 7890"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.productInterest}
                </label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-black rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
                >
                  <option value="">{t.selectProduct}</option>
                  <option value={t.mod2mForkAttachment}>{t.mod2mForkAttachment}</option>
                  <option value={t.mod3mForkAttachment}>{t.mod3mForkAttachment}</option>
                  <option value={t.mod2mForkAttachmentBlade}>{t.mod2mForkAttachmentBlade}</option>
                  <option value={t.mod3mForkAttachmentBlade}>{t.mod3mForkAttachmentBlade}</option>
                  <option value={t.mod2mForkAttachmentGripper}>{t.mod2mForkAttachmentGripper}</option>
                  <option value={t.mod3mForkAttachmentGrippers}>{t.mod3mForkAttachmentGrippers}</option>
                  <option value={t.mod2mForkAttachmentOctopus}>{t.mod2mForkAttachmentOctopus}</option>
                  <option value={t.mod4mShovelAttachment}>{t.mod4mShovelAttachment}</option>
                  <option value={t.otherProducts}>{t.otherProducts}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.message} *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-black" />
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-4 border border-black rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none text-lg"
                    placeholder={t.messageDescription}
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-5 px-8 rounded-lg hover:bg-black transition-colors font-semibold text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>{t.sendRequest}</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;