import React, { useState } from 'react';
import { Send } from 'lucide-react';
import toast from 'react-hot-toast';

interface ContactFormProps {
  configuration: {
    model: string;
    center: string;
    alarmType: string;
    modules: string[];
    profile: string;
  };
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ configuration, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      toast.error('Kontaktformuläret är inte konfigurerat korrekt.');
      return;
    }

    const messageContent = {
      embeds: [{
        title: 'Ny förfrågan om personlarm',
        color: 0x0099ff,
        fields: [
          {
            name: 'Kontaktinformation',
            value: `**Namn:** ${formData.name}\n**Email:** ${formData.email}\n**Telefon:** ${formData.phone}\n**Företag:** ${formData.company}`,
          },
          {
            name: 'Vald konfiguration',
            value: `**Modell:** ${configuration.model}\n**Larmcentral:** ${configuration.center}\n**Larmtyp:** ${configuration.alarmType}\n**Moduler:** ${configuration.modules.join(', ') || 'Inga'}\n**Användningsprofil:** ${configuration.profile}`,
          },
          {
            name: 'Meddelande',
            value: formData.message || 'Inget meddelande',
          }
        ],
        timestamp: new Date().toISOString(),
      }]
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageContent),
      });

      if (response.ok) {
        toast.success('Tack för din förfrågan! Vi kontaktar dig inom kort.');
        onClose();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error('Det gick inte att skicka meddelandet. Försök igen senare.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <h3 className="text-2xl font-bold mb-4">Kontakta säkerhetsrådgivare</h3>
        <p className="text-gray-600 mb-6">
          Fyll i dina kontaktuppgifter så kontaktar en säkerhetsrådgivare dig inom kort.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Namn *
              </label>
              <input
                type="text"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Företag *
              </label>
              <input
                type="text"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E-post *
              </label>
              <input
                type="email"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telefon *
              </label>
              <input
                type="tel"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Meddelande
            </label>
            <textarea
              rows={4}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Avbryt
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
            >
              <Send className="w-4 h-4 mr-2" />
              Skicka förfrågan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;