import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function SignupSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in your name and email.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Thank you!",
          description: result.message || "We'll be in touch soon.",
        });
        
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        toast({
          title: "Signup Error",
          description: result.error || "Something went wrong. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Signup error:', error);
      toast({
        title: "Connection Error",
        description: "Please check your internet connection and try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="signup" className="py-[160px] bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="text-[56px] font-bold text-white text-center mb-8" data-testid="text-signup-headline">
          Join the Circle
        </h2>

        {/* Subcopy */}
        <p className="text-[20px] text-[#CCCCCC] text-center max-w-[560px] mx-auto mb-16" data-testid="text-signup-description">
          Let's connect. Sign up below to explore mentorship, events, and community.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-[480px] mx-auto">
          {/* Name Input */}
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Name"
            required
            className="w-full text-[20px] p-5 bg-black border border-[#333333] text-white rounded-md mb-8 focus:outline-none focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00] transition-all"
            data-testid="input-name"
          />

          {/* Email Input */}
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="Email"
            required
            className="w-full text-[20px] p-5 bg-black border border-[#333333] text-white rounded-md mb-8 focus:outline-none focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00] transition-all"
            data-testid="input-email"
          />

          {/* Message Textarea */}
          <textarea
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            placeholder="Message / Interest"
            rows={5}
            className="w-full text-[20px] p-5 bg-black border border-[#333333] text-white rounded-md mb-12 resize-none focus:outline-none focus:border-[#FF4D00] focus:ring-2 focus:ring-[#FF4D00] transition-all"
            data-testid="textarea-message"
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#FF4D00] text-white text-[20px] font-bold uppercase py-5 rounded-md hover:bg-black hover:text-[#FF4D00] hover:border-2 hover:border-[#FF4D00] transition-all duration-300"
            data-testid="button-submit"
          >
            {isSubmitting ? "SENDING..." : "SIGN UP"}
          </button>
        </form>
      </div>
    </section>
  );
}