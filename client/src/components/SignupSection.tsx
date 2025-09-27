import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Mail, Send, Shield, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function SignupSection() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    childName: '',
    childAge: '',
    message: '',
    newsletter: false,
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      toast({
        title: "Privacy Agreement Required",
        description: "Please agree to our privacy policy to continue.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.parentName || !formData.email || !formData.childName) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in your name, email, and child's name.",
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
        body: JSON.stringify({
          parentName: formData.parentName,
          email: formData.email,
          childName: formData.childName,
          childAge: formData.childAge || null,
          message: formData.message || null,
          newsletter: formData.newsletter
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Thank you for your interest!",
          description: result.message || "We'll be in touch soon with more details about the workshop.",
        });
        
        // Reset form
        setFormData({
          parentName: '',
          email: '',
          childName: '',
          childAge: '',
          message: '',
          newsletter: false,
          privacy: false
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
    <section id="signup" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Join Our Community</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Begin This Journey?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Share your interest in the workshop and tell us about your child. 
            We'll connect with you to discuss how this experience can support their unique learning journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 border-card-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="parentName" className="text-foreground font-medium">
                      Parent/Guardian Name *
                    </Label>
                    <Input
                      id="parentName"
                      type="text"
                      value={formData.parentName}
                      onChange={(e) => handleInputChange('parentName', e.target.value)}
                      placeholder="Your full name"
                      required
                      className="mt-2"
                      data-testid="input-parent-name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="mt-2"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="childName" className="text-foreground font-medium">
                      Child's Name *
                    </Label>
                    <Input
                      id="childName"
                      type="text"
                      value={formData.childName}
                      onChange={(e) => handleInputChange('childName', e.target.value)}
                      placeholder="Your child's name"
                      required
                      className="mt-2"
                      data-testid="input-child-name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="childAge" className="text-foreground font-medium">
                      Child's Age
                    </Label>
                    <Input
                      id="childAge"
                      type="number"
                      min="10"
                      max="15"
                      value={formData.childAge}
                      onChange={(e) => handleInputChange('childAge', e.target.value)}
                      placeholder="Age (10-15)"
                      className="mt-2"
                      data-testid="input-child-age"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Tell Us About Your Interest
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="What draws you to this workshop? What are your hopes for your child's learning experience?"
                    rows={4}
                    className="mt-2"
                    data-testid="textarea-message"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
                      data-testid="checkbox-newsletter"
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="newsletter" className="text-sm font-normal text-foreground cursor-pointer">
                        Send me updates about future workshops and learning opportunities
                      </Label>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="privacy"
                      checked={formData.privacy}
                      onCheckedChange={(checked) => handleInputChange('privacy', checked as boolean)}
                      data-testid="checkbox-privacy"
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="privacy" className="text-sm font-normal text-foreground cursor-pointer">
                        I agree to the privacy policy and understand my information will be used to contact me about this workshop *
                      </Label>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 text-lg"
                  data-testid="button-submit-signup"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Express Interest
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-6">
            <Card className="p-6 border-card-border">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">What Happens Next?</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>1. We'll review your application</p>
                    <p>2. Schedule a studio visit for fit assessment</p>
                    <p>3. Discuss class packages and schedule</p>
                    <p>4. Begin the learning journey together</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-card-border">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Privacy & Safety</h3>
                  <p className="text-sm text-muted-foreground">
                    Your information is kept confidential and used only to contact you about this workshop. 
                    We respect your family's privacy and safety.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-card-border bg-gradient-to-br from-accent/10 to-primary/5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Our Commitment</h3>
                  <p className="text-sm text-muted-foreground">
                    Every child deserves to learn in an environment that honors their curiosity, 
                    creativity, and authentic self-expression.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}