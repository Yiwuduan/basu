import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  parentEmail: string;
  selectedOption: number | null; // To store the selected image card option (1-4)
  fridayAvailability: boolean;
  notes: string;
  collaborationComfort: boolean;
  monthlyMembership: boolean;
  inquiries: string;
}

export default function SignupSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    parentEmail: '',
    selectedOption: null,
    fridayAvailability: false,
    notes: '',
    collaborationComfort: false,
    monthlyMembership: false,
    inquiries: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof FormData, value: string | boolean | number | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 1 && formData.selectedOption === null) {
      toast({
        title: "Please select an option",
        description: "Please select one of the options to continue.",
        variant: "destructive"
      });
      return;
    }
    setStep(step + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.parentEmail) {
      toast({
        title: "Email required",
        description: "Please provide your email address to join our circle.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would connect to an email service
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Welcome to the Circle",
        description: "Thank you for joining our circle. We'll be in touch soon.",
      });
      
      setFormData({
        parentEmail: '',
        selectedOption: null,
        fridayAvailability: false,
        notes: '',
        collaborationComfort: false,
        monthlyMembership: false,
        inquiries: ''
      });
      setStep(1);
    } catch (error) {
      console.error('Signup error:', error);
      toast({
        title: "Submission Error",
        description: "Please check your internet connection and try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Updated quiz questions with 4 image card options
  const quizQuestions = [
    {
      step: 1,
      title: "What draws you to the Basu Embodied Craft Studio?",
      fields: []
    }
  ];

  return (
    <section id="signup" className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-center mb-4 lg:mb-8" data-testid="text-signup-headline">
          Join Our Circle
        </h2>

        {/* Subcopy with exact copy */}
        <p className="text-base lg:text-lg text-center text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-signup-description">
          Rooted in the belief that education should emerge from lived experience, the studio brings together craft, movement, and collaboration as tools for personal and collective transformation.
        </p>
        
        <p className="text-base lg:text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="text-signup-description-2">
          Here, making becomes a form of knowing. Whether through fibre arts, embodied practices, or creative dialogue, participants are invited to slow down, reconnect with their intuition, and engage with their hands, hearts, and minds. The studio nurtures curiosity, resilience, and community - offering an alternative to systems that separate thinking from doing, self from world.
        </p>
        
        <p className="text-base lg:text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="text-signup-description-3">
          This is education as life itself - tactile, relational, and purpose-driven.
        </p>

        {/* Progress Indicator */}
        <div className="flex justify-center items-center gap-3 mb-12">
          {[1, 2].map((s) => (
            <div
              key={s}
              className={`h-2 rounded-full transition-all duration-300 ${
                s === step 
                  ? 'w-16 bg-[#AD2E2C]' 
                  : s < step 
                  ? 'w-12 bg-[#AD2E2C]/50' 
                  : 'w-12 bg-stone-300'
              }`}
              data-testid={`progress-step-${s}`}
            />
          ))}
        </div>

        {/* Quiz Steps */}
        {step === 1 && (
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-6 text-center">What draws you to the Basu Embodied Craft Studio?</h3>
            <p className="text-base lg:text-lg text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Select the option that best describes your interest in our studio
            </p>
            
            {/* Image Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { id: 1, title: "Embodied Learning", description: "Hands-on crafting and mindful practices that connect mind, body, and creativity", icon: "🎨" },
                { id: 2, title: "Collaborative Environment", description: "Group activities that build community through shared creative experiences", icon: "🤝" },
                { id: 3, title: "Personal Growth", description: "Individual creative expression for self-discovery and confidence", icon: "🧘" },
                { id: 4, title: "Alternative Education", description: "Learning beyond traditional systems that values experience and intuition", icon: "🌱" }
              ].map((option, index) => (
                <div
                  key={option.id}
                  onClick={() => handleInputChange('selectedOption', option.id)}
                  className={`cursor-pointer rounded-2xl border border-white/40 p-6 transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden bg-[#F0ECD9] text-[#282D35] shadow-xl ${
                    formData.selectedOption === option.id
                      ? 'border-[#AD2E2C] scale-[1.02] shadow-2xl bg-[#F0ECD9] ring-2 ring-[#AD2E2C]'
                      : 'hover:border-[#AD2E2C]'
                  }`}
                >
                  <div className="relative z-10 flex items-start space-x-4">
                    <div className="text-3xl bg-white/50 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-md">{option.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground mb-2 bg-white/50 backdrop-blur-md px-3 py-2 rounded-lg inline-block shadow-md">{option.title}</h4>
                      <p className="text-base text-muted-foreground bg-white/50 backdrop-blur-md px-3 py-2 rounded-lg mt-2 inline-block shadow-md">{option.description}</p>
                    </div>
                    <div className="flex items-center z-20">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        formData.selectedOption === option.id 
                          ? 'border-[#AD2E2C] bg-[#AD2E2C]/90' 
                          : 'border-[#AD2E2C] bg-[#F0ECD9]'
                      }`}>
                        {formData.selectedOption === option.id && (
                          <div className="w-3 h-3 rounded-full bg-white"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <button
                onClick={handleNext}
                disabled={formData.selectedOption === null}
                className={`px-8 py-3 rounded-lg font-medium transition-colors bg-gradient-to-r from-[#AD2E2C] to-[#AD2E2C] text-foreground hover:from-[#AD2E2C] hover:to-[#AD2E2C] ${
                  formData.selectedOption === null
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:from-[#AD2E2C] hover:to-[#AD2E2C]'
                }`}
                data-testid="button-next-1"
              >
                CONTINUE
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-6 text-center">Stay Connected</h3>
            <p className="text-base lg:text-lg text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Enter your email to join our circle and receive updates
            </p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-base lg:text-lg font-medium text-foreground mb-2">Your Email</label>
                <input
                  type="email"
                  value={formData.parentEmail}
                  onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full text-base py-3 px-4 bg-stone-50 border border-stone-300 text-foreground rounded-lg focus:ring-2 focus:ring-[#AD2E2C] focus:border-[#AD2E2C] transition-all"
                  data-testid="input-parent-email"
                />
              </div>
              
              <div>
                <label className="block text-base lg:text-lg font-medium text-foreground mb-2">Any additional inquiries? Please share any questions or concerns you have.</label>
                <textarea
                  value={formData.inquiries}
                  onChange={(e) => handleInputChange('inquiries', e.target.value)}
                  placeholder="Please share any questions or concerns you have..."
                  rows={3}
                  className="w-full text-base py-3 px-4 bg-stone-50 border border-stone-300 text-foreground rounded-lg focus:ring-2 focus:ring-[#AD2E2C] focus:border-[#AD2E2C] transition-all resize-y"
                  data-testid="textarea-inquiries"
                />
              </div>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="fridayAvailability"
                  checked={formData.fridayAvailability}
                  onChange={(e) => handleInputChange('fridayAvailability', e.target.checked)}
                  className="mt-1 mr-3 h-5 w-5 text-[#AD2E2C] rounded focus:ring-[#AD2E2C]"
                  data-testid="checkbox-friday-availability"
                />
                <label htmlFor="fridayAvailability" className="text-base text-foreground">
                  I confirm that the participant is available Friday evenings (4-9pm) for the workshop sessions.
                </label>
              </div>
              
              <div>
                <label className="block text-base lg:text-lg font-medium text-foreground mb-2">Any notes?</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  placeholder="Any allergies, accessibility needs, or other information we should know?"
                  rows={2}
                  className="w-full text-base py-3 px-4 bg-stone-50 border border-stone-300 text-foreground rounded-lg focus:ring-2 focus:ring-[#AD2E2C] focus:border-[#AD2E2C] transition-all resize-y"
                  data-testid="textarea-notes"
                />
              </div>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="collaborationComfort"
                  checked={formData.collaborationComfort}
                  onChange={(e) => handleInputChange('collaborationComfort', e.target.checked)}
                  className="mt-1 mr-3 h-5 w-5 text-[#AD2E2C] rounded focus:ring-[#AD2E2C]"
                  data-testid="checkbox-collaboration-comfort"
                />
                <label htmlFor="collaborationComfort" className="text-base text-foreground">
                  I'm comfortable with my child collaborating with others on creative projects.
                </label>
              </div>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="monthlyMembership"
                  checked={formData.monthlyMembership}
                  onChange={(e) => handleInputChange('monthlyMembership', e.target.checked)}
                  className="mt-1 mr-3 h-5 w-5 text-[#AD2E2C] rounded focus:ring-[#AD2E2C]"
                  data-testid="checkbox-monthly-membership"
                />
                <label htmlFor="monthlyMembership" className="text-base text-foreground font-medium">
                  I'm interested in the $50/month membership for ongoing access to workshops and work opportunities.
                </label>
              </div>
              
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="bg-stone-200 text-foreground font-medium px-8 py-3 rounded-lg hover:bg-stone-300 transition-colors"
                  data-testid="button-back-2"
                >
                  BACK
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.parentEmail}
                  className="bg-[#AD2E2C] text-foreground font-medium px-8 py-3 rounded-lg hover:bg-foreground hover:text-[#AD2E2C] border-2 border-[#AD2E2C] transition-colors"
                  data-testid="button-submit"
                >
                  {isSubmitting ? "SUBMITTING..." : "JOIN THE CIRCLE"}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
