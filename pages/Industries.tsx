
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Server, Radio, Building2, Tent, Wifi, Scale, ArrowRight } from 'lucide-react';

const Industries: React.FC = () => {
  const sectors = [
    {
      title: "Defence & Government",
      icon: <Shield className="w-12 h-12" />,
      description: "We supply approved cabling infrastructure for MOD sites and secure government facilities. Our solutions include ruggedised tactical fibre and secure enclosures designed for deployed environments.",
      image: "https://images.unsplash.com/photo-1595333552093-68f44d852136?auto=format&fit=crop&q=80&w=1200", // Soldier/Tactical
      compliance: "Def Stan 61-12"
    },
    {
      title: "Data Centres",
      icon: <Server className="w-12 h-12" />,
      description: "High-density fibre solutions (MTP/MPO) and pre-terminated assemblies for rapid deployment in hyperscale and colocation data centres. We ensure low-latency performance and organized cable management.",
      image: "https://images.unsplash.com/photo-1558491944-be6151e1c752?auto=format&fit=crop&q=80&w=1200", // Server Aisle
      compliance: "TIA-942"
    },
    {
      title: "Broadcast & AV",
      icon: <Radio className="w-12 h-12" />,
      description: "From stadium links to outside broadcast (OB) trucks, we provide robust fibre and copper solutions capable of handling 4K/8K uncompressed video streams in challenging field conditions.",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?auto=format&fit=crop&q=80&w=1200", // Broadcast camera/Equipment
      compliance: "SMPTE 311M"
    },
    {
      title: "Temporary & Deployable",
      icon: <Tent className="w-12 h-12" />,
      description: "Specialist reusable cable systems for festivals, events, and emergency response. Featuring deployable reels and heavy-duty connectors designed for repeated mating and harsh handling.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200", // Event/Stage lighting
      compliance: "IP67 Rated"
    },
    {
      title: "Commercial & Enterprise",
      icon: <Building2 className="w-12 h-12" />,
      description: "Structured cabling for office fit-outs and campus backbones. We supply Cat6/Cat6a systems and fibre uplinks ensuring reliable connectivity for modern business operations.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200", // Modern Office
      compliance: "ISO/IEC 11801"
    }
  ];

  return (
    <div className="pt-24 bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 border-b border-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2400"
            alt="Industry Skyline Night"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-slate-900/90"></div>
          <div className="absolute inset-0 industrial-pattern opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-xs block mb-4">Vertical Markets</span>
           <h1 className="text-5xl lg:text-7xl font-black heading-font uppercase">Industries & <span className="text-orange-600">Sectors</span>.</h1>
           <p className="text-xl text-slate-300 mt-6 max-w-3xl mx-auto">
             Tailored connectivity solutions for specialized operational environments.
           </p>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {sectors.map((sector, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
               <div className="lg:w-1/2 relative group w-full">
                  <div className="absolute -inset-4 bg-orange-600/10 transform rotate-2 transition-transform group-hover:rotate-0 rounded-sm"></div>
                  <div className="relative h-[450px] w-full overflow-hidden rounded-sm shadow-2xl">
                    <img 
                        src={sector.image} 
                        alt={sector.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 bg-slate-900/90 text-white px-6 py-3 font-bold text-xs uppercase tracking-widest border-t-2 border-orange-600">
                        Primary Std: {sector.compliance}
                    </div>
                  </div>
               </div>
               <div className="lg:w-1/2 space-y-8">
                  <div className="w-16 h-16 bg-slate-100 flex items-center justify-center text-orange-600 rounded-sm">
                    {sector.icon}
                  </div>
                  <h2 className="text-4xl font-black heading-font uppercase text-slate-900">{sector.title}</h2>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed">
                    {sector.description}
                  </p>
                  
                  <ul className="space-y-3 border-t border-slate-100 pt-6">
                    <li className="flex items-center text-sm font-bold text-slate-500">
                        <ArrowRight className="w-4 h-4 text-orange-600 mr-3" /> Dedicated Project Management
                    </li>
                    <li className="flex items-center text-sm font-bold text-slate-500">
                        <ArrowRight className="w-4 h-4 text-orange-600 mr-3" /> Specialized Product Inventory
                    </li>
                  </ul>

                  <Link to="/contact" className="inline-block mt-4 bg-slate-900 text-white px-8 py-4 font-black uppercase tracking-widest text-xs hover:bg-orange-600 transition-colors rounded-sm shadow-lg">
                    Enquire About This Sector
                  </Link>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Future Readiness */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-3xl font-black heading-font uppercase text-slate-900 mb-6">Future Readiness: 5G & IoT</h2>
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                    The industrial landscape is changing. With the rise of 5G private networks and Industrial IoT (IIoT), your cabling infrastructure must handle massive data throughput. Colver specializes in high-bandwidth backhaul solutions ensuring you are ready for the next decade of connectivity.
                  </p>
                  <div className="flex gap-4">
                     <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-bold uppercase rounded-sm shadow-sm">Wi-Fi 7 Ready</span>
                     <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-bold uppercase rounded-sm shadow-sm">100G Ethernet</span>
                  </div>
               </div>
               <div className="flex justify-center relative">
                  <div className="absolute inset-0 bg-orange-600 blur-[100px] opacity-10"></div>
                  <Wifi className="w-64 h-64 text-slate-900 opacity-10" />
               </div>
            </div>
         </div>
      </section>

      {/* Regulatory Compliance Grid */}
      <section className="py-24 bg-slate-900 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Scale className="w-16 h-16 text-orange-600 mx-auto mb-6" />
            <h2 className="text-3xl font-black heading-font uppercase mb-6">Regulatory Compliance</h2>
            <p className="max-w-3xl mx-auto text-slate-400 mb-12">
               We understand the specific legal and safety requirements of different sectors, from CPR Fire Ratings for construction to Def Stan requirements for military hardware.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               <div className="p-6 border border-slate-700 hover:border-orange-600 transition-colors bg-slate-950/50">
                  <div className="font-bold text-orange-500 mb-2">Construction</div>
                  <div className="text-sm font-mono text-slate-300">CPR Euroclass B2ca</div>
               </div>
               <div className="p-6 border border-slate-700 hover:border-orange-600 transition-colors bg-slate-950/50">
                  <div className="font-bold text-orange-500 mb-2">Marine</div>
                  <div className="text-sm font-mono text-slate-300">DNV-GL Approved</div>
               </div>
               <div className="p-6 border border-slate-700 hover:border-orange-600 transition-colors bg-slate-950/50">
                  <div className="font-bold text-orange-500 mb-2">Rail</div>
                  <div className="text-sm font-mono text-slate-300">LUL Section 12</div>
               </div>
               <div className="p-6 border border-slate-700 hover:border-orange-600 transition-colors bg-slate-950/50">
                  <div className="font-bold text-orange-500 mb-2">Defence</div>
                  <div className="text-sm font-mono text-slate-300">Def Stan 61-12</div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Industries;
