export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="text-[clamp(3rem,10vw,8rem)] font-display text-foreground text-center mb-24 lg:mb-36 uppercase tracking-wide" data-testid="text-about-headline">
          Reframing Life and Learning Together
        </h2>

        {/* Main Philosophy with exact copy from requirements */}
        <div className="space-y-6 text-base lg:text-lg text-muted-foreground leading-[1.7] max-w-3xl mx-auto">
          <p data-testid="text-about-description">
            Unravelling the conditioning of my youth,
            I've spent my life questioning the systems we take for granted - 
            The labels, roles and paradigms that separate us from ourselves and each other.
          </p>
          
          <p>
            I've chosen instead to stitch something new:
            A life guided by purpose, presence, and the quiet knowing within.
            It's easy to follow rules when discipline is your compass.
            Being disciplined to follow your inner compass - 
            That takes courage.
          </p>
          
          <p>
            For 15 years, I managed construction projects,
            Following guidelines that often felt hollow.
            As an architect, I built according to code - 
            But found myself yearning to build with soul.
            So I stopped following rules,
            And started following rhythm.
          </p>
          
          <p>
            Our bodies carry wisdom.
            Our senses speak, if we slow down enough to listen.
            We thrive not in rigidity, but in curiosity -
            In the spaces where life breathes between the lines.
          </p>
          
          <p>
            I haven't seen a Western doctor in 25 years.
            Yoga and dance have been my medicine -
            Practices that open the heart and restore the body's balance.
          </p>
          
          <p>
            During pregnancy, I trusted my intuition.
            No tests, no interventions - only peace.
            I gave birth to my son in my Winnipeg home, 
            Still under construction.
            Since then, he has been my greatest teacher - 
            A catalyst for my own awakening.
          </p>
          
          <p>
            I started making my own clothes at 11,
            Reinventing myself through fibre.
            Over the past few years,
            I've deepened this practice and crafted my wardrobe - 
            Knitting, stitching, braiding and knotting
            The seasons of motherhood and womanhood
            Into wearable story and sacred expression.
          </p>
          
          <p className="text-foreground font-semibold">
            My vision is a circle -
            A space where families uplift one another,
            Where mentorship leads to meaningful projects,
            And projects become sustainable businesses.
            Where joy and purpose guide daily life,
            And design is rooted in resonance, harmony, and beauty.
          </p>
          
          <p>
            Basu Embodied Craft Studio is the living form of this vision:
            A space to learn through making, moving and sharing - 
            Where education becomes life itself.
          </p>
          
          <p>
            My focus now is on passing wisdom 
            To young women through Beyond the Material:
            Friday night workshops that blend creativity with community.
            Upcycle your wardrobe. Harness your creative flow. Awaken your signature style.
            Gather. Craft. Reimagine. Celebrate
          </p>
          
          <p>
            Our systems are broken -
            But we don't need to outsource care, creativity, or connection.
            Everything we need is already here - 
            If we choose to design our lives around it.
          </p>
        </div>
      </div>
    </section>
  );
}
