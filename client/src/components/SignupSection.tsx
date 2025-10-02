import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Check } from 'lucide-react';
import craftImage from '@assets/IMG_0856_1758972649085.jpeg';
import mentorshipImage from '@assets/IMG_4089_1758972710503.jpeg';
import communityImage from '@assets/IMG_2125_1758972710502.jpeg';
import creativeImage from '@assets/IMG_4045_1758972710502.jpeg';

interface FormData {
  learningApproach: string;
  participationReason: string;
  childName: string;
  childAge: string;
  parentName: string;
  email: string;
  visionMessage: string;
}

export default function SignupSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    learningApproach: '',
    participationReason: '',
    childName: '',
    childAge: '',
    parentName: '',
    email: '',
    visionMessage: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const learningApproaches = [
    { 
      id: 'craft', 
      label: 'Hands-On Craft & Making', 
      image: craftImage,
      description: 'Learning through tangible creation'
    },
    { 
      id: 'mentorship', 
      label: 'Deep Mentorship', 
      image: mentorshipImage,
      description: 'Guided one-on-one relationships'
    },
    { 
      id: 'community', 
      label: 'Community Learning', 
      image: communityImage,
      description: 'Growing together in circles'
    },
    { 
      id: 'creative', 
      label: 'Creative Expression', 
      image: creativeImage,
      description: 'Embodied and artistic exploration'
    }
  ];

  const participationReasons = [
    { 
      id: 'alternative', 
      label: 'Seeking Alternatives to Traditional School',
      image: craftImage,
      description: 'Looking beyond conventional education'
    },
    { 
      id: 'connection', 
      label: 'Building Meaningful Connections', 
      image: communityImage,
      description: 'Finding community and belonging'
    },
    { 
      id: 'skills', 
      label: 'Developing Real-World Skills', 
      image: mentorshipImage,
      description: 'Practical, embodied learning'
    },
    { 
      id: 'joy', 
      label: 'Bringing Joy Back to Learning', 
      image: creativeImage,
      description: 'Rediscovering wonder and curiosity'
    }
  ];

  const handleSelectOption = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 1 && !formData.learningApproach) {
      toast({
        title: "Please select an option",
        description: "Choose the learning approach that resonates with you.",
        variant: "destructive"
      });
      return;
    }
    if (step === 2 && !formData.participationReason) {
      toast({
        title: "Please select an option",
        description: "Tell us what brings you to this work.",
        variant: "destructive"
      });
      return;
    }
    if (step === 3 && (!formData.childName || !formData.childAge)) {
      toast({
        title: "Required fields missing",
        description: "Please provide your child's information.",
        variant: "destructive"
      });
      return;
    }
    setStep(step + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.parentName || !formData.email || !formData.visionMessage) {
      toast({
        title: "Required fields missing",
        description: "Please complete all required fields.",
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
          title: "Welcome to the Circle",
          description: "Thank you for sharing your vision. We'll be in touch soon.",
        });
        
        setFormData({
          learningApproach: '',
          participationReason: '',
          childName: '',
          childAge: '',
          parentName: '',
          email: '',
          visionMessage: ''
        });
        setStep(1);
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
    <section id="signup" className="py-8 md:py-16 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:block">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white text-center mb-3 md:mb-6 lg:mb-8" data-testid="text-signup-headline">
          Join Our Circle
        </h2>

        {/* Subcopy */}
        <p className="text-base md:text-xl text-[#CCCCCC] text-center max-w-[640px] mx-auto mb-6 md:mb-16" data-testid="text-signup-description">
          We're looking for families who share our vision of joyful, embodied, and connected learning. Let's explore if we're aligned.
        </p>

        {/* Progress Indicator */}
        <div className="flex justify-center items-center gap-3 mb-6 md:mb-16">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-2 rounded-full transition-all duration-300 ${
                s === step 
                  ? 'w-16 bg-[#FF4D00]' 
                  : s < step 
                  ? 'w-12 bg-[#FF4D00]/50' 
                  : 'w-12 bg-[#333333]'
              }`}
              data-testid={`progress-step-${s}`}
            />
          ))}
        </div>

        {/* Step 1: Learning Approach */}
        {step === 1 && (
          <div className="max-w-4xl mx-auto flex-1 flex flex-col md:block">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 md:mb-12" data-testid="text-question-1">
              What learning approach resonates with you?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-4 md:mb-12 flex-1 md:flex-none">
              {learningApproaches.map((approach) => (
                <button
                  key={approach.id}
                  onClick={() => handleSelectOption('learningApproach', approach.id)}
                  className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 group ${
                    formData.learningApproach === approach.id
                      ? 'border-[#FF4D00] scale-[1.02]'
                      : 'border-[#333333] hover:border-[#FF4D00]/50'
                  }`}
                  data-testid={`option-approach-${approach.id}`}
                >
                  <div className="aspect-[3/2] md:aspect-[4/3] relative">
                    <img
                      src={approach.image}
                      alt={approach.label}
                      className={`w-full h-full object-cover transition-all duration-300 ${
                        formData.learningApproach === approach.id ? '' : 'grayscale'
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all" />
                    {formData.learningApproach === approach.id && (
                      <div className="absolute top-2 right-2 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 bg-[#FF4D00] rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="p-3 md:p-6 bg-[#111111]">
                    <h4 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">{approach.label}</h4>
                    <p className="text-sm md:text-base text-[#999999]">{approach.description}</p>
                  </div>
                </button>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleNext}
                disabled={!formData.learningApproach}
                className="bg-[#FF4D00] text-white text-sm md:text-lg font-bold uppercase px-8 md:px-16 py-2.5 md:py-5 rounded-lg border-2 border-[#FF4D00] cta-transition hover:bg-black hover:text-[#FF4D00] disabled:opacity-30 disabled:hover:bg-[#FF4D00] disabled:hover:text-white"
                data-testid="button-next-1"
              >
                CONTINUE
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Participation Reason */}
        {step === 2 && (
          <div className="max-w-4xl mx-auto flex-1 flex flex-col md:block">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 md:mb-12" data-testid="text-question-2">
              What brings you to this work?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-4 md:mb-12 flex-1 md:flex-none">
              {participationReasons.map((reason) => (
                <button
                  key={reason.id}
                  onClick={() => handleSelectOption('participationReason', reason.id)}
                  className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 group ${
                    formData.participationReason === reason.id
                      ? 'border-[#FF4D00] scale-[1.02]'
                      : 'border-[#333333] hover:border-[#FF4D00]/50'
                  }`}
                  data-testid={`option-reason-${reason.id}`}
                >
                  <div className="aspect-[3/2] md:aspect-[4/3] relative">
                    <img
                      src={reason.image}
                      alt={reason.label}
                      className={`w-full h-full object-cover transition-all duration-300 ${
                        formData.participationReason === reason.id ? '' : 'grayscale'
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all" />
                    {formData.participationReason === reason.id && (
                      <div className="absolute top-2 right-2 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 bg-[#FF4D00] rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="p-3 md:p-6 bg-[#111111]">
                    <h4 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">{reason.label}</h4>
                    <p className="text-sm md:text-base text-[#999999]">{reason.description}</p>
                  </div>
                </button>
              ))}
            </div>
            <div className="flex justify-center gap-3 md:gap-4">
              <button
                onClick={() => setStep(1)}
                className="bg-[#111111] text-white text-sm md:text-lg font-bold uppercase px-6 md:px-12 py-2.5 md:py-5 rounded-lg border-2 border-[#333333] cta-transition hover:border-[#FF4D00]"
                data-testid="button-back-2"
              >
                BACK
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.participationReason}
                className="bg-[#FF4D00] text-white text-sm md:text-lg font-bold uppercase px-8 md:px-16 py-2.5 md:py-5 rounded-lg border-2 border-[#FF4D00] cta-transition hover:bg-black hover:text-[#FF4D00] disabled:opacity-30 disabled:hover:bg-[#FF4D00] disabled:hover:text-white"
                data-testid="button-next-2"
              >
                CONTINUE
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Child Information */}
        {step === 3 && (
          <div className="max-w-[560px] mx-auto flex-1 flex flex-col md:block">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 md:mb-12" data-testid="text-question-3">
              Tell us about your child
            </h3>
            <div className="space-y-4 md:space-y-6 mb-4 md:mb-12 flex-1 md:flex-none">
              <input
                type="text"
                value={formData.childName}
                onChange={(e) => handleInputChange('childName', e.target.value)}
                placeholder="Child's Name"
                required
                className="w-full text-base md:text-xl py-3 md:py-5 px-4 md:px-6 bg-[#111111] border border-[#333333] text-white rounded-lg input-focus transition-all"
                data-testid="input-child-name"
              />
              <input
                type="text"
                value={formData.childAge}
                onChange={(e) => handleInputChange('childAge', e.target.value)}
                placeholder="Child's Age"
                required
                className="w-full text-base md:text-xl py-3 md:py-5 px-4 md:px-6 bg-[#111111] border border-[#333333] text-white rounded-lg input-focus transition-all"
                data-testid="input-child-age"
              />
            </div>
            <div className="flex justify-center gap-3 md:gap-4">
              <button
                onClick={() => setStep(2)}
                className="bg-[#111111] text-white text-sm md:text-lg font-bold uppercase px-6 md:px-12 py-2.5 md:py-5 rounded-lg border-2 border-[#333333] cta-transition hover:border-[#FF4D00]"
                data-testid="button-back-3"
              >
                BACK
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.childName || !formData.childAge}
                className="bg-[#FF4D00] text-white text-sm md:text-lg font-bold uppercase px-8 md:px-16 py-2.5 md:py-5 rounded-lg border-2 border-[#FF4D00] cta-transition hover:bg-black hover:text-[#FF4D00] disabled:opacity-30 disabled:hover:bg-[#FF4D00] disabled:hover:text-white"
                data-testid="button-next-3"
              >
                CONTINUE
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Parent Info & Vision */}
        {step === 4 && (
          <form onSubmit={handleSubmit} className="max-w-[560px] mx-auto flex-1 flex flex-col md:block">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 md:mb-12" data-testid="text-question-4">
              Share your vision with us
            </h3>
            <div className="space-y-4 md:space-y-6 mb-4 md:mb-12 flex-1 md:flex-none">
              <input
                type="text"
                value={formData.parentName}
                onChange={(e) => handleInputChange('parentName', e.target.value)}
                placeholder="Your Name"
                required
                className="w-full text-base md:text-xl py-3 md:py-5 px-4 md:px-6 bg-[#111111] border border-[#333333] text-white rounded-lg input-focus transition-all"
                data-testid="input-parent-name"
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Email Address"
                required
                className="w-full text-base md:text-xl py-3 md:py-5 px-4 md:px-6 bg-[#111111] border border-[#333333] text-white rounded-lg input-focus transition-all"
                data-testid="input-email"
              />
              <textarea
                value={formData.visionMessage}
                onChange={(e) => handleInputChange('visionMessage', e.target.value)}
                placeholder="Tell us about your hopes for your child's learning journey. What does joyful, embodied education mean to you? How do you envision being part of our community?"
                rows={4}
                required
                className="w-full text-base md:text-xl py-3 md:py-5 px-4 md:px-6 bg-[#111111] border border-[#333333] text-white rounded-lg resize-none input-focus transition-all leading-relaxed"
                data-testid="textarea-vision"
              />
              <p className="text-[16px] text-[#999999] italic text-center">
                We read every message carefully to ensure alignment with our vision of learning.
              </p>
            </div>
            <div className="flex justify-center gap-3 md:gap-4">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="bg-[#111111] text-white text-sm md:text-lg font-bold uppercase px-6 md:px-12 py-2.5 md:py-5 rounded-lg border-2 border-[#333333] cta-transition hover:border-[#FF4D00]"
                data-testid="button-back-4"
              >
                BACK
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !formData.parentName || !formData.email || !formData.visionMessage}
                className="bg-[#FF4D00] text-white text-xs md:text-lg font-bold uppercase px-6 md:px-16 py-2.5 md:py-5 rounded-lg border-2 border-[#FF4D00] cta-transition hover:bg-black hover:text-[#FF4D00] disabled:opacity-30 disabled:hover:bg-[#FF4D00] disabled:hover:text-white"
                data-testid="button-submit"
              >
                {isSubmitting ? "SENDING..." : "JOIN THE CIRCLE"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
