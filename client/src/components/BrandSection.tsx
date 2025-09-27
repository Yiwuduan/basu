import { Badge } from '@/components/ui/badge';

export default function BrandSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Large Typography Background - Inspired by reference */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-[20vw] font-serif font-bold text-muted/5 select-none leading-none">
          Amanda
        </div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge variant="secondary" className="mb-8">Educational Innovator</Badge>
        
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
          A <span className="text-primary">Learning Facilitator</span><br />
          Based in Creative<br />
          <span className="bg-gradient-to-r from-[#ff6b35] to-[#ff4500] bg-clip-text text-transparent">
            Community
          </span>
        </h2>
        
        <div className="max-w-2xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Transforming education into something deeper—where learning becomes authentic 
            self-expression, where children thrive through curiosity and creative practice, 
            and where mentorship creates lasting impact.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Badge variant="outline" className="px-4 py-2">Alternative Education</Badge>
            <Badge variant="outline" className="px-4 py-2">Creative Mentorship</Badge>
            <Badge variant="outline" className="px-4 py-2">Embodied Learning</Badge>
            <Badge variant="outline" className="px-4 py-2">Authentic Expression</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}