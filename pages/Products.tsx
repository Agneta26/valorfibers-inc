
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, Activity, Cpu, 
  ArrowRight, Box, CheckCircle, Star, Settings, Shield
} from 'lucide-react';

const Products: React.FC = () => {
  const categories = [
    {
      title: "Fibre Optic Products",
      icon: <Layers className="w-10 h-10" />,
      description: "Our comprehensive range of optical fibre solutions caters to both critical backbone infrastructure and rapid deployment scenarios. We specialize in G.652.D and G.657.A2 single-mode fibres for long-haul telecommunications, alongside OM3/OM4/OM5 multi-mode solutions for high-speed data centre interconnects. All assemblies are terminated in our UK cleanroom facility, ensuring low insertion loss (<0.3dB) and high return loss (>50dB for UPC). Common applications include inter-building campus links, FTTH (Fibre to the Home) distribution, and resilient tactical field communications.",
      items: [
        "Pre-terminated Fibre Patch Leads (OS2, OM3, OM4, OM5)",
        "Tactical & Deployable Fibre Solutions",
        "Bulk Fibre Cable (Loose Tube, Tight Buffered, CST Armoured)",
        "Fibre Pigtails & Splicing Consumables",
        "Patch Panels & Wall Boxes",
        "MTP/MPO High Density Solutions"
      ]
    },
    {
      title: "Copper Cabling",
      icon: <Activity className="w-10 h-10" />,
      description: "Engineered for superior signal integrity and EMI protection, our copper cabling portfolio spans from Cat5e to Cat7a S/FTP standards. We supply solid-core infrastructure cables for permanent building runs and stranded patch cords for flexible patching. Our tactical copper range features polyurethane (PUR) jacketing for extreme abrasion resistance, oil resistance, and cold flexibility (-40°C), making it ideal for industrial control systems, outdoor surveillance, and temporary event networks requiring robust Gigabit Ethernet transmission.",
      items: [
        "Cat5e, Cat6, Cat6a, Cat7 Patch Leads",
        "Tactical Ruggedised Copper Assemblies",
        "Exterior Grade & Armoured Copper Cable",
        "Coaxial & UHD 12G-SDI Assemblies",
        "RJ45 Connectors, Modules & Faceplates",
        "Inline Couplers & Field Plugs"
      ]
    },
    {
      title: "Network Hardware",
      icon: <Cpu className="w-10 h-10" />,
      description: "To complement our passive cabling, we offer a select range of industrial-grade active networking equipment. This includes hardened media converters for extending copper networks over fibre, wide-temperature SFP/SFP+ optical transceivers compatible with major switch vendors (Cisco, HP, Juniper), and ruggedised PoE (Power over Ethernet) switches for powering remote IP cameras and access points. We also supply essential rack management solutions, including heavy-duty 19-inch enclosures, zero-U PDUs, and high-density cable management bars to maintain airflow and organization.",
      items: [
        "SFP, SFP+, XFP & QSFP Transceivers",
        "Industrial Media Converters",
        "Network Switches (PoE / Industrial)",
        "19\" Rack Cabinets & Enclosures",
        "Power Distribution Units (PDU)",
        "Cable Management & Accessories"
      ]
    }
  ];

  return (
    <div className="pt-24 bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&q=80&w=2400"
            alt="Hardware Circuitry Components"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-slate-900/90"></div>
          <div className="absolute inset-0 industrial-pattern opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-xs block mb-4">Product Catalog</span>
           <h1 className="text-5xl lg:text-7xl font-black heading-font uppercase">Hardware <span className="text-orange-600">Supply</span>.</h1>
           <p className="text-xl text-slate-300 mt-6 max-w-2xl mx-auto">
             Premium network infrastructure components, sourced from Industry Accredited manufacturers and tested for performance.
           </p>
        </div>
      </section>

      {/* Featured Spotlight */}
      <section className="py-16 bg-orange-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
           <div className="bg-orange-600 p-3 rounded-full text-white">
             <Star className="w-8 h-8" />
           </div>
           <div className="flex-grow">
             <h3 className="text-xl font-black uppercase text-slate-900">Featured: Tactical Deployable Fibre</h3>
             <p className="text-slate-600">Now stocking 4-core and 8-core military-grade tactical fibre on deployable reels. Available for next-day dispatch.</p>
           </div>
           <Link to="/contact" className="px-6 py-3 bg-slate-900 text-white font-bold uppercase tracking-widest text-xs hover:bg-orange-600 transition-colors">
             View Specs
           </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {categories.map((cat, idx) => (
            <div key={idx} className="grid lg:grid-cols-12 gap-12 items-start border-b border-slate-100 pb-24 last:border-0 last:pb-0">
              <div className="lg:col-span-5 bg-slate-50 p-10 border-t-4 border-orange-600">
                <div className="text-orange-600 mb-6">{cat.icon}</div>
                <h2 className="text-3xl font-black heading-font uppercase text-slate-900 mb-4">{cat.title}</h2>
                <p className="text-slate-600 font-medium mb-8 text-sm leading-relaxed text-justify">{cat.description}</p>
                <Link to="/contact" className="inline-flex items-center text-xs font-black uppercase tracking-widest text-slate-900 hover:text-orange-600 transition-colors">
                  Request Price List <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              
              <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
                 {cat.items.map((item, i) => (
                   <div key={i} className="flex items-start p-4 border border-slate-100 hover:border-orange-200 hover:bg-orange-50/50 transition-all rounded-sm">
                     <CheckCircle className="w-5 h-5 text-orange-600 mr-4 mt-0.5 shrink-0" />
                     <span className="font-bold text-slate-700 text-sm uppercase tracking-wide">{item}</span>
                   </div>
                 ))}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* New Section 1: Custom Fabrication */}
      <section className="py-24 bg-slate-900 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2">
                  <Settings className="w-12 h-12 text-orange-600 mb-6" />
                  <h2 className="text-3xl font-black heading-font uppercase mb-6">Custom Fabrication Lab</h2>
                  <p className="text-slate-400 text-lg leading-relaxed mb-6">
                    Off-the-shelf solutions don't always fit. Our UK fabrication lab allows us to build custom cable assemblies, metalwork, and patch panels to your exact specifications. 
                  </p>
                  <ul className="space-y-2 mb-8">
                     <li className="flex items-center font-bold"><CheckCircle className="w-4 h-4 text-orange-600 mr-2"/> Custom Breakout Lengths</li>
                     <li className="flex items-center font-bold"><CheckCircle className="w-4 h-4 text-orange-600 mr-2"/> IP-Rated Enclosure Assembly</li>
                     <li className="flex items-center font-bold"><CheckCircle className="w-4 h-4 text-orange-600 mr-2"/> Hybrid Copper/Fibre Links</li>
                  </ul>
                  <Link to="/contact" className="text-white border-b-2 border-orange-600 hover:text-orange-600 transition-colors uppercase tracking-widest font-bold text-sm">Submit Technical Drawing</Link>
               </div>
               <div className="md:w-1/2">
                  <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=1200" className="rounded-sm border-2 border-slate-700" alt="Engineer Soldering" />
               </div>
            </div>
         </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-black heading-font uppercase text-slate-900 mb-8">Quality Assurance</h2>
           <p className="max-w-3xl mx-auto text-slate-600 text-lg leading-relaxed">
             We operate under strict internal quality management systems. Every cable assembly is individually tested before dispatch, with test results available upon request. We partner only with manufacturers who meet international performance standards.
           </p>
        </div>
      </section>

      {/* New Section 2: Lifetime Warranty */}
      <section className="py-16 bg-white border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <Shield className="w-16 h-16 text-slate-900" />
            <div>
               <h3 className="text-2xl font-black heading-font uppercase text-slate-900">25-Year System Warranty</h3>
               <p className="text-slate-500 mt-2">Available on all certified end-to-end installations using Colver structured cabling products.</p>
            </div>
         </div>
      </section>

      {/* Quick Quote */}
      <section className="py-24 bg-slate-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Box className="w-16 h-16 text-orange-600 mx-auto mb-6" />
          <h2 className="text-3xl font-black text-white heading-font uppercase mb-6">Need Large Volume Pricing?</h2>
          <p className="text-slate-400 mb-10 text-lg">
            We offer trade accounts and project pricing for bulk orders. Contact our sales team for a custom quotation.
          </p>
          <Link to="/contact" className="inline-block bg-orange-600 text-white px-12 py-5 rounded-sm font-black uppercase tracking-widest shadow-lg hover:bg-white hover:text-slate-900 transition-colors">
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
