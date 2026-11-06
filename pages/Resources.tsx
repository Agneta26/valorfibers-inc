
import React from 'react';
import { HelpCircle, Book, FileText, Download, Shield, FileCheck, ChevronDown, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources: React.FC = () => {
  return (
    <div className="pt-24 bg-slate-50">
       {/* Hero */}
       <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2400"
            alt="Technical Documentation"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900/80"></div>
          <div className="absolute inset-0 industrial-pattern opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-xs block mb-4">Knowledge Base</span>
           <h1 className="text-5xl lg:text-7xl font-black heading-font uppercase mb-6">Technical <span className="text-orange-600">Resources</span>.</h1>
           <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
             Access our repository of technical specifications, installation guides, and industry compliance documents. Designed for engineers and project managers.
           </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
        
        {/* Technical Library - Downloads */}
        <section className="grid lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <FileText className="w-8 h-8 text-orange-600" />
                <h2 className="text-3xl font-black heading-font uppercase text-slate-900">Technical Library</h2>
              </div>
              
              <div className="bg-white border border-slate-200 shadow-sm rounded-sm overflow-hidden">
                 <div className="p-6 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                    <h3 className="font-bold uppercase text-slate-700 text-sm tracking-widest">Datasheets & Specifications</h3>
                    <Link to="/contact" className="text-orange-600 text-xs font-black uppercase hover:underline">Request Full Access</Link>
                 </div>
                 <div className="divide-y divide-slate-100">
                    {[
                      { title: "Tactical Fibre Optic Cable (Mil-Spec)", size: "2.4 MB", date: "Rev 2024.1" },
                      { title: "Heavy Duty Cat6a S/FTP Armoured", size: "1.8 MB", date: "Rev 2023.4" },
                      { title: "MTP/MPO High Density Panels", size: "3.1 MB", date: "Rev 2024.2" },
                      { title: "Deployable Reel Systems User Manual", size: "5.2 MB", date: "Rev 2023.1" },
                      { title: " CPR Fire Rating Declaration of Performance", size: "0.9 MB", date: "Rev 2024.1" }
                    ].map((doc, i) => (
                      <div key={i} className="p-5 flex items-center justify-between hover:bg-slate-50 group cursor-pointer transition-colors">
                         <div className="flex items-center">
                            <FileCheck className="w-5 h-5 text-slate-400 mr-4 group-hover:text-orange-600 transition-colors" />
                            <div>
                               <div className="font-bold text-slate-800 text-sm group-hover:text-orange-600 transition-colors">{doc.title}</div>
                               <div className="text-xs text-slate-400 mt-1">Version: {doc.date}</div>
                            </div>
                         </div>
                         <div className="flex items-center">
                            <span className="text-xs text-slate-400 mr-4 font-mono">{doc.size}</span>
                            <Download className="w-4 h-4 text-slate-300 group-hover:text-slate-900" />
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Sidebar: Compliance & Certifications */}
           <div className="space-y-8">
              <div className="bg-slate-900 text-white p-8 rounded-sm relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10"><Shield className="w-32 h-32" /></div>
                 <h3 className="text-xl font-black heading-font uppercase mb-4 relative z-10">Compliance Center</h3>
                 <p className="text-slate-400 text-sm mb-6 relative z-10 leading-relaxed">
                   Colver Network Ltd adheres to strict international standards for manufacturing and quality management.
                 </p>
                 <ul className="space-y-3 relative z-10">
                    <li className="flex items-center text-sm font-bold"><Shield className="w-4 h-4 text-orange-600 mr-3" /> ISO 9001:2015</li>
                    <li className="flex items-center text-sm font-bold"><Shield className="w-4 h-4 text-orange-600 mr-3" /> ISO 14001 (Environmental)</li>
                    <li className="flex items-center text-sm font-bold"><Shield className="w-4 h-4 text-orange-600 mr-3" /> Def Stan 61-12 Part 4</li>
                    <li className="flex items-center text-sm font-bold"><Shield className="w-4 h-4 text-orange-600 mr-3" /> CPR Euroclass B2ca</li>
                 </ul>
                 <button className="mt-8 w-full py-3 border border-white/20 text-xs font-black uppercase hover:bg-orange-600 hover:border-orange-600 transition-all">
                    Download Certificates
                 </button>
              </div>

              <div className="bg-orange-50 p-8 border border-orange-100 rounded-sm">
                 <h3 className="text-lg font-black heading-font uppercase text-slate-900 mb-3">Engineering Tools</h3>
                 <ul className="space-y-4">
                    <li>
                       <a href="#" className="flex items-center group">
                          <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm shadow-sm text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                             <Wrench className="w-4 h-4" />
                          </div>
                          <span className="ml-3 text-sm font-bold text-slate-700 group-hover:text-orange-600 transition-colors">Cable Loss Calculator</span>
                       </a>
                    </li>
                    <li>
                       <a href="#" className="flex items-center group">
                          <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm shadow-sm text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                             <Book className="w-4 h-4" />
                          </div>
                          <span className="ml-3 text-sm font-bold text-slate-700 group-hover:text-orange-600 transition-colors">Fibre Colour Code Chart</span>
                       </a>
                    </li>
                 </ul>
              </div>
           </div>
        </section>

        {/* Engineering Guides / Whitepapers */}
        <section>
          <div className="flex items-center justify-between mb-10">
             <div className="flex items-center space-x-4">
               <Book className="w-8 h-8 text-orange-600" />
               <h2 className="text-3xl font-black heading-font uppercase text-slate-900">Engineering Guides</h2>
             </div>
             <Link to="/contact" className="hidden md:inline-flex items-center font-bold text-sm text-slate-500 hover:text-orange-600">
               View All Guides <ChevronDown className="ml-1 w-4 h-4 -rotate-90" />
             </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             {[
               {
                 tag: "Installation",
                 title: "Best Practices for Tactical Fibre Deployment",
                 desc: "A guide to deploying temporary fibre links in harsh environments, including bend radius management and connector care."
               },
               {
                 tag: "Standards",
                 title: "Understanding CPR Fire Ratings",
                 desc: "Navigating the Construction Products Regulation (CPR) and selecting the correct Euroclass cable for your building project."
               },
               {
                 tag: "Technology",
                 title: "Single-mode vs Multi-mode: A 2025 Perspective",
                 desc: "Technical analysis of when to specify OS2 vs OM4/OM5 in modern high-bandwidth campus networks."
               }
             ].map((guide, i) => (
               <div key={i} className="group cursor-pointer">
                  <div className="h-48 bg-slate-200 mb-6 overflow-hidden relative">
                     <div className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] font-black uppercase px-3 py-1 tracking-widest">{guide.tag}</div>
                     {/* Placeholder gradient for abstract representation */}
                     <div className={`w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 group-hover:scale-105 transition-transform duration-700 opacity-90`}></div>
                  </div>
                  <h3 className="text-xl font-black heading-font uppercase text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">{guide.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{guide.desc}</p>
                  <span className="text-xs font-bold uppercase text-slate-400 flex items-center group-hover:text-slate-900 transition-colors">
                     Read Article <ChevronDown className="ml-1 w-3 h-3 -rotate-90" />
                  </span>
               </div>
             ))}
          </div>
        </section>

        {/* FAQ Accordion Style */}
        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-10 h-10 text-orange-600 mx-auto mb-4" />
            <h2 className="text-3xl font-black heading-font uppercase text-slate-900">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
             {[
               { q: "Do you supply custom cable lengths?", a: "Yes, we offer a cut-to-length service for bulk cable and manufacture bespoke pre-terminated assemblies to your exact specification in our UK facility." },
               { q: "Are your products compliant for MOD use?", a: "We supply a range of Def Stan compliant cables and tactical fibre solutions specifically designed for defence applications. Please contact us for specific NATO Stock Numbers (NSN)." },
               { q: "What is your standard lead time?", a: "Stock items are available for next-day UK delivery. Custom assemblies typically have a 3-5 day turnaround, depending on volume and complexity. Emergency fabrication is available." },
               { q: "Do you provide on-site termination?", a: "Yes, our Engineering Services division deploys qualified technicians for on-site splicing, termination, and OTDR testing across the UK and Europe." },
               { q: "Can you ship internationally?", a: "Absolutely. We have a dedicated export logistics team familiar with Incoterms and customs documentation for shipping outside the UK/EU." }
             ].map((item, i) => (
               <div key={i} className="border border-slate-200 bg-white rounded-sm overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                     <h4 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{item.q}</h4>
                     <ChevronDown className="w-5 h-5 text-slate-400" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
                     {item.a}
                  </div>
               </div>
             ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Resources;
