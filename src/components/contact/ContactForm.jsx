import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '../common/Button';

// NOTE: To connect with Formspree, set your form endpoint URL here or via import.meta.env.VITE_FORMSPREE_ENDPOINT
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || '';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please include a message.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message must be at least 15 characters long.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    // If Formspree endpoint is configured
    if (FORMSPREE_ENDPOINT) {
      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus('success');
          setStatusMessage('Thank you! Your message has been sent successfully.');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatus('error');
          setStatusMessage('Failed to deliver message. Please reach out directly via email.');
        }
      } catch {
        setStatus('error');
        setStatusMessage('Network error occurred. Please contact me directly via email.');
      }
    } else {
      // Graceful local handling when backend email service is not yet configured
      setTimeout(() => {
        setStatus('success');
        setStatusMessage(
          'Message received! (Form endpoint is currently in demo mode; you can also reach me directly at ayanshyadav252@gmail.com).'
        );
        setFormData({ name: '', email: '', message: '' });
      }, 700);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Name Input */}
      <div>
        <label
          htmlFor="contact-name"
          className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
        >
          Your Name <span className="text-sky-500">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          disabled={status === 'submitting'}
          placeholder="e.g. Alex Chen"
          className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-[#10141e] border transition-colors focus:outline-none ${
            errors.name
              ? 'border-rose-500 dark:border-rose-500 focus:ring-1 focus:ring-rose-500'
              : 'border-slate-200 dark:border-slate-800 focus:border-sky-500 dark:focus:border-sky-400'
          } text-slate-900 dark:text-slate-100 placeholder:text-slate-400`}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-rose-500 font-mono">{errors.name}</p>
        )}
      </div>

      {/* Email Input */}
      <div>
        <label
          htmlFor="contact-email"
          className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
        >
          Email Address <span className="text-sky-500">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          disabled={status === 'submitting'}
          placeholder="e.g. alex@example.com"
          className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-[#10141e] border transition-colors focus:outline-none ${
            errors.email
              ? 'border-rose-500 dark:border-rose-500 focus:ring-1 focus:ring-rose-500'
              : 'border-slate-200 dark:border-slate-800 focus:border-sky-500 dark:focus:border-sky-400'
          } text-slate-900 dark:text-slate-100 placeholder:text-slate-400`}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-rose-500 font-mono">{errors.email}</p>
        )}
      </div>

      {/* Message Input */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
        >
          Message <span className="text-sky-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          disabled={status === 'submitting'}
          placeholder="Discussing software roles, system architecture, or full-stack projects..."
          className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-[#10141e] border transition-colors focus:outline-none resize-y ${
            errors.message
              ? 'border-rose-500 dark:border-rose-500 focus:ring-1 focus:ring-rose-500'
              : 'border-slate-200 dark:border-slate-800 focus:border-sky-500 dark:focus:border-sky-400'
          } text-slate-900 dark:text-slate-100 placeholder:text-slate-400`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-rose-500 font-mono">{errors.message}</p>
        )}
      </div>

      {/* Status Notifications */}
      {status === 'success' && (
        <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
          <span>{statusMessage}</span>
        </div>
      )}

      {status === 'error' && (
        <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-xs text-rose-800 dark:text-rose-300 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 dark:text-rose-400 mt-0.5" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={status === 'submitting'}
        icon={status === 'submitting' ? Loader2 : Send}
        iconPosition="right"
        className="w-full justify-center"
      >
        {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
      </Button>

      <p className="text-[11px] font-mono text-slate-400 text-center pt-1">
        Direct inbox: <a href="mailto:hsayanhsy252@gmail.com" className="text-sky-500 hover:underline">hsayanhsy252@gmail.com</a>
      </p>
    </form>
  );
}
