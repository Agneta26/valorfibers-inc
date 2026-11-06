
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, 
  Activity, Layers, Radio, Truck, 
  Cpu, Repeat, Boxes, Building2, Globe, CheckCircle2, Leaf, Handshake
} from 'lucide-react';

const ScrollReveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(ref.current!);
      }
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const Home: React.FC = () => {
  const fallbackImg = "https://images.unsplash.com/photo-1558491944-be6151e1c752?auto=format&fit=crop&q=80&w=2000";
  
  const productCategories = [
    { 
      title: "Fibre Optic", 
      icon: <Layers className="w-6 h-6" />, 
      desc: "Tactical, armoured, and bulk fibre spools for any terrain.",
      img: "https://images.unsplash.com/photo-1520697517384-95d66fa40b33?auto=format&fit=crop&q=80&w=800" // Fiber optics macro
    },
    { 
      title: "Network Hardware", 
      icon: <Cpu className="w-6 h-6" />, 
      desc: "SFP transceivers, media converters, and rack equipment.",
      img: "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&q=80&w=800" // Circuit board/Hardware
    },
    { 
      title: "Copper Cabling", 
      icon: <Activity className="w-6 h-6" />, 
      desc: "Cat5e to Cat7 patch leads and ruggedised copper assemblies.",
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800" // Ethernet cables
    },
    { 
      title: "Deployable Systems", 
      icon: <Truck className="w-6 h-6" />, 
      desc: "Tactical reels for military and broadcast field operations.",
      img: "https://images.unsplash.com/photo-1626071537708-5527a20c90c7?auto=format&fit=crop&q=80&w=800" // Military/Tactical gear context
    },
    { 
      title: "Enclosures", 
      icon: <Boxes className="w-6 h-6" />, 
      desc: "Patch panels, wall boxes, and splicing distribution.",
      img: "https://images.unsplash.com/photo-1563770095-39d468f9a51d?auto=format&fit=crop&q=80&w=800" // Server rack/Enclosure
    },
    { 
      title: "Bespoke Solutions", 
      icon: <Repeat className="w-6 h-6" />, 
      desc: "Custom cable termination and assembly services.",
      img: "https://images.unsplash.com/photo-1581092334651-ddf26f9a09d0?auto=format&fit=crop&q=80&w=800" // Engineer working
    }
  ];

  const industries = [
    { title: "Defence & Government", img: "https://images.unsplash.com/photo-1595333552093-68f44d852136?auto=format&fit=crop&q=80&w=1200", icon: <ShieldCheck /> }, // Soldier in gear
    { title: "Data Centres", img: "https://images.unsplash.com/photo-1558491944-be6151e1c752?auto=format&fit=crop&q=80&w=1200", icon: <Globe /> }, // Server aisle
    { title: "Broadcast & AV", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200", icon: <Radio /> }, // Camera lens/Studio
    { title: "Commercial", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200", icon: <Building2 /> }, // Modern office
    { title: "Industrial", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200", icon: <Boxes /> } // Factory floor
  ];

  return (
    <div className="overflow-hidden bg-white selection:bg-orange-100">
      {/* Hero: Tactical Military Deployment Image */}
      <section className="relative h-screen flex items-center bg-slate-900 overflow-hidden pt-24 group">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509095662758-a2884c781079?auto=format&fit=crop&q=80&w=2400" 
            alt="Dark Server Fibre Optic Background" 
            className="w-full h-full object-cover brightness-[0.3] contrast-[1.2] transition-transform duration-[12000ms] ease-out scale-[1.05] group-hover:scale-110"
            onError={(e) => (e.currentTarget.src = fallbackImg)}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
          <div className="absolute inset-0 industrial-pattern opacity-10 pointer-events-none"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-10 space-y-10">
              <ScrollReveal>
                <div className="inline-flex items-center space-x-3 bg-orange-600 px-5 py-2 rounded-sm mb-6 shadow-2xl">
                  <ShieldCheck className="text-white w-5 h-5" />
                  <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Military-Grade Connectivity</span>
                </div>
                
                <h1 className="text-6xl lg:text-9xl font-black text-white heading-font tracking-tighter leading-[0.9] uppercase mb-4">
                  Colver Network <br/><span className="text-orange-600 text-glow">Limited</span>.
                </h1>
                
                <p className="text-lg lg:text-2xl text-slate-200 mt-8 mb-12 leading-relaxed font-bold max-w-3xl border-l-8 border-orange-600 pl-8 drop-shadow-2xl">
                  UK-based specialists in fibre optic, copper cabling, and network hardware. delivering mission-critical infrastructure for Defence, Government, and Commercial sectors since 1995.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link to="/products" className="group/btn bg-orange-600 text-white px-10 py-5 rounded-sm font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all shadow-xl">
                    View Products
                    <ArrowRight className="ml-4 w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                  <Link to="/contact" className="bg-white/5 text-white border-2 border-white/20 px-10 py-5 rounded-sm font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all backdrop-blur-lg">
                    Speak to an Engineer
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Workflow Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", desc: "Technical requirements gathering and site analysis." },
                { step: "02", title: "Specification", desc: "Product selection and custom cable design." },
                { step: "03", title: "Deployment", desc: "Logistics, supply, and on-site installation." },
                { step: "04", title: "Commissioning", desc: "Rigorous testing, certification, and handover." }
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 100} className="border-t-4 border-slate-200 pt-8 hover:border-orange-600 transition-colors cursor-default group">
                   <div className="text-6xl font-black text-slate-100 group-hover:text-slate-900 transition-colors mb-4 heading-font">{item.step}</div>
                   <h3 className="text-xl font-black uppercase text-slate-900 mb-2">{item.title}</h3>
                   <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                </ScrollReveal>
              ))}
           </div>
        </div>
      </section>

      {/* Intro Section with Stats */}
      <section className="py-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal>
              <span className="text-orange-600 font-black uppercase tracking-[0.5em] text-xs block mb-4">Company Overview</span>
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 heading-font uppercase leading-none mb-8">Precision <span className="text-orange-600">Connectivity</span>.</h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                Colver Network Ltd operates at the forefront of network infrastructure. We supply high-performance cabling products, deliver professional installations, and provide technical consultancy services across the UK and internationally.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                 <div>
                    <div className="text-4xl font-black text-slate-900 heading-font mb-2">30+</div>
                    <div className="text-xs uppercase font-bold text-slate-500 tracking-widest">Years Experience</div>
                 </div>
                 <div>
                    <div className="text-4xl font-black text-slate-900 heading-font mb-2">500+</div>
                    <div className="text-xs uppercase font-bold text-slate-500 tracking-widest">Major Projects</div>
                 </div>
                 <div>
                    <div className="text-4xl font-black text-slate-900 heading-font mb-2">100%</div>
                    <div className="text-xs uppercase font-bold text-slate-500 tracking-widest">Compliance Rate</div>
                 </div>
                 <div>
                    <div className="text-4xl font-black text-slate-900 heading-font mb-2">Global</div>
                    <div className="text-xs uppercase font-bold text-slate-500 tracking-widest">Supply Chain</div>
                 </div>
              </div>

              <Link to="/about" className="inline-block mt-12 text-slate-900 font-black uppercase tracking-widest border-b-2 border-orange-600 hover:text-orange-600 transition-colors pb-1">
                Read More About Us
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200} className="relative h-[500px]">
              <div className="absolute top-0 right-0 w-3/4 h-full bg-slate-200 rounded-sm transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1558491944-be6151e1c752?auto=format&fit=crop&q=80&w=1200" 
                alt="Server Room Connectivity" 
                className="w-full h-full object-cover rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 relative z-10"
                onError={(e) => (e.currentTarget.src = fallbackImg)}
              />
              <div className="absolute bottom-8 -left-8 bg-slate-900 text-white px-8 py-6 font-black heading-font uppercase tracking-widest z-20 shadow-xl">
                Est. 1995
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Capabilities with Images */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 heading-font uppercase tracking-tighter">Core <span className="text-orange-600">Capabilities</span></h2>
            <p className="text-slate-500 mt-4 font-medium max-w-2xl mx-auto">Providing end-to-end network solutions from component supply to final commissioning.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((item, i) => (
              <Link to="/products" key={i} className="h-full">
                <ScrollReveal delay={i * 50} className="relative h-[400px] group overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-slate-900/80 group-hover:bg-slate-900/60 transition-colors duration-500"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col items-start text-white">
                     <div className="w-12 h-12 bg-orange-600 flex items-center justify-center text-white mb-6 rounded-sm shadow-lg">
                       {item.icon}
                     </div>
                     <h3 className="text-2xl font-black heading-font uppercase mb-3 tracking-tight">{item.title}</h3>
                     <p className="text-slate-300 text-sm font-medium leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                       {item.desc}
                     </p>
                     <div className="mt-auto">
                        <span className="text-white text-xs font-black uppercase tracking-widest flex items-center border-b-2 border-orange-600 pb-1 w-fit">
                          Explore <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-2 transition-transform" />
                        </span>
                     </div>
                  </div>
                </ScrollReveal>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Infinite Marquee Industries - NEW COOLER SCROLLING */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
         <div className="absolute inset-0 industrial-pattern opacity-10 pointer-events-none"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10 text-center">
            <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-xs block mb-4">Sectors We Serve</span>
            <h2 className="text-5xl lg:text-6xl font-black heading-font uppercase">Industrial <span className="text-orange-600">Impact</span>.</h2>
         </div>

         {/* Infinite Slider */}
         <div className="relative w-full overflow-hidden">
            <div className="flex w-[200%] animate-marquee hover:[animation-play-state:paused]">
               {[...industries, ...industries].map((ind, i) => (
                 <div key={i} className="w-[300px] md:w-[450px] h-[550px] shrink-0 mx-4 relative group overflow-hidden rounded-sm border border-slate-800 cursor-pointer">
                    <img src={ind.img} alt={ind.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 w-full z-20">
                       <div className="w-12 h-12 bg-orange-600 flex items-center justify-center text-white mb-4 shadow-lg rounded-sm transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                         {ind.icon}
                       </div>
                       <h3 className="text-3xl font-black heading-font uppercase mb-2 transform group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-lg">{ind.title}</h3>
                       <Link to="/industries" className="text-xs font-bold uppercase tracking-widest text-orange-500 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                         View Sector <ArrowRight className="ml-2 w-3 h-3" />
                       </Link>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* NEW SECTION 1: Sustainability */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <div className="flex items-center space-x-3 mb-6">
                    <Leaf className="w-8 h-8 text-orange-600" />
                    <span className="font-black heading-font uppercase text-xl">Sustainability Commitment</span>
                 </div>
                 <h2 className="text-4xl font-black heading-font uppercase text-slate-900 mb-6">Green <span className="text-orange-600">Infrastructure</span>.</h2>
                 <p className="text-slate-600 font-medium leading-relaxed mb-6">
                   Colver Network Ltd is dedicated to reducing the carbon footprint of network deployment. We utilize LSZH (Low Smoke Zero Halogen) materials, recyclable cable reels, and optimized logistics to minimize waste.
                 </p>
                 <ul className="space-y-3">
                   {["100% Recyclable Drum Packaging", "RoHS Compliant Materials", "Carbon-Neutral Shipping Options"].map((item, i) => (
                     <li key={i} className="flex items-center text-slate-700 font-bold text-sm">
                       <CheckCircle2 className="w-5 h-5 text-orange-600 mr-3" /> {item}
                     </li>
                   ))}
                 </ul>
              </div>
              <div className="relative">
                 <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200" className="w-full h-[400px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700" alt="Green Energy" />
                 <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 shadow-xl max-w-xs">
                    <div className="text-4xl font-black text-orange-600 heading-font">ISO 14001</div>
                    <div className="text-xs font-bold uppercase tracking-widest mt-2">Environmental Management Standards Aligned</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* NEW SECTION 2: Partners */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <Handshake className="w-12 h-12 text-slate-900 mx-auto mb-6" />
           <h2 className="text-3xl font-black heading-font uppercase text-slate-900 mb-12">Strategic Technology Partners</h2>
           <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale">
              {["Cisco", "Corning", "CommScope", "Prysmian Group", "Belden", "Fluke Networks"].map((brand, i) => (
                 <div key={i} className="text-2xl font-black heading-font text-slate-400 uppercase tracking-tighter hover:text-orange-600 transition-colors cursor-default">
                    {brand}
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-orange-600 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-black text-white heading-font uppercase mb-8">Ready to Upgrade Your Infrastructure?</h2>
          <p className="text-white/90 text-lg font-medium mb-10 max-w-2xl mx-auto">
            Contact our UK-based engineering team for bespoke quotations and technical advice.
          </p>
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-12 py-5 rounded-sm font-black uppercase tracking-widest shadow-2xl hover:bg-white hover:text-slate-900 transition-colors">
            Contact Us Today
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
