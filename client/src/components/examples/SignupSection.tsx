import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import SignupSection from '../SignupSection';

export default function SignupSectionExample() {
  return (
    <TooltipProvider>
      <SignupSection />
      <Toaster />
    </TooltipProvider>
  );
}