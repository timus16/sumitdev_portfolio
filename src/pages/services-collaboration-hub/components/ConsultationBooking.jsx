import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ConsultationBooking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: '',
    projectBudget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const availableDates = [
    { value: '2025-07-29', label: 'Tomorrow - July 29' },
    { value: '2025-07-30', label: 'Wednesday - July 30' },
    { value: '2025-07-31', label: 'Thursday - July 31' },
    { value: '2025-08-01', label: 'Friday - August 1' },
    { value: '2025-08-04', label: 'Monday - August 4' }
  ];

  const availableTimes = [
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' },
    { value: '17:00', label: '5:00 PM' }
  ];

  const serviceOptions = [
    { value: 'wordpress', label: 'WordPress Development' },
    { value: 'seo', label: 'Technical SEO' },
    { value: 'performance', label: 'Performance Optimization' },
    { value: 'maintenance', label: 'Website Maintenance' },
    { value: 'consultation', label: 'General Consultation' }
  ];

  const budgetOptions = [
    { value: '25000-50000', label: '₹25,000 - ₹50,000' },
    { value: '50000-100000', label: '₹50,000 - ₹1,00,000' },
    { value: '100000-250000', label: '₹1,00,000 - ₹2,50,000' },
    { value: '250000+', label: '₹2,50,000+' },
    { value: 'discuss', label: 'Let\'s discuss' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceInterest: '',
        projectBudget: '',
        message: ''
      });
      setSelectedDate('');
      setSelectedTime('');
    }, 3000);
  };

  if (showSuccess) {
    return (
      <div className="bg-card border border-border rounded-xl p-6 shadow-floating text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2 font-headline">Consultation Booked!</h3>
        <p className="text-text-secondary mb-4 font-body">
          Thank you for booking a consultation. I'll send you a calendar invite and preparation materials shortly.
        </p>
        <div className="bg-surface rounded-lg p-4">
          <div className="flex items-center justify-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Calendar" size={16} className="text-secondary" />
              <span className="font-medium text-text-primary font-body">
                {availableDates.find(d => d.value === selectedDate)?.label}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-secondary" />
              <span className="font-medium text-text-primary font-body">
                {availableTimes.find(t => t.value === selectedTime)?.label}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-floating">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-success to-accent rounded-lg flex items-center justify-center">
          <Icon name="Calendar" size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-text-primary font-headline">Book Free Consultation</h3>
          <p className="text-sm text-text-secondary font-body">30-minute discovery call</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            required
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Phone Number"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            required
          />
          <Input
            label="Company Name"
            type="text"
            placeholder="Your company"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Service Interest"
            placeholder="Select service"
            options={serviceOptions}
            value={formData.serviceInterest}
            onChange={(value) => handleInputChange('serviceInterest', value)}
            required
          />
          <Select
            label="Project Budget"
            placeholder="Select budget range"
            options={budgetOptions}
            value={formData.projectBudget}
            onChange={(value) => handleInputChange('projectBudget', value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Preferred Date"
            placeholder="Select date"
            options={availableDates}
            value={selectedDate}
            onChange={setSelectedDate}
            required
          />
          <Select
            label="Preferred Time"
            placeholder="Select time"
            options={availableTimes}
            value={selectedTime}
            onChange={setSelectedTime}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2 font-headline">
            Project Details (Optional)
          </label>
          <textarea
            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent resize-none font-body"
            rows={4}
            placeholder="Tell me about your project, goals, and any specific challenges you're facing..."
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
          />
        </div>

        <div className="bg-surface rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={20} className="text-secondary mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-1 font-headline">What to Expect</h4>
              <ul className="text-sm text-text-secondary space-y-1 font-body">
                <li>• Free 30-minute consultation call</li>
                <li>• Discussion of your project requirements</li>
                <li>• Initial recommendations and next steps</li>
                <li>• No obligation or pressure to proceed</li>
              </ul>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          variant="default"
          fullWidth
          loading={isSubmitting}
          iconName="Calendar"
          iconPosition="left"
          className="bg-success hover:bg-success/90 text-success-foreground"
        >
          {isSubmitting ? 'Booking Consultation...' : 'Book Free Consultation'}
        </Button>
      </form>
    </div>
  );
};

export default ConsultationBooking;