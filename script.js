/* Agenda tab data + rendering */

(function(){
var V="King Abdullah Cultural Center";
var D=[
{l:"Day 1",d:"Monday, September 07, 2026",s:[
["07:00 AM","1h 30m","Registration",0,"",V],
["08:30 AM","1m","Conference Opening Ceremony",0,"",V],
["08:35 AM","10m","Official Opening Address",0,"Eng. Omar Bin Mishbab Al Qahtani",V],
["08:45 AM","15m","Transforming Corrosion Management Through Artificial Intelligence",0,"Abdulaziz M. Alaskar",""],
["09:00 AM","1h","Panel Discussion",0,"Abdullah Al Abri, Mohammed Al-Ghamdi, Zuhair Adam Mohammed, Eng. Ali Akesh",V],
["10:00 AM","15m","Sponsor Recognition",0,"",V],
["10:15 AM","45m","Exhibition Inauguration and Morning Break",0,"",V],
["11:00 AM","","Advancing Asset Integrity Through Intelligent, Data-Driven NDT",1,"Mohammed Abufour",""],
["11:00 AM","","Research works to RC standards and Specifications",2,"Turki Mesfer AlOtaibi",""],
["11:00 AM","","Fabrication-Induced Intergranular Cracking of UNS N08020 Flanges in Sulfuric Acid Alkylation Service",3,"Hussain Dawki",""],
["11:30 AM","","From Data to Decisions: Wireless IIoT-Driven Corrosion Monitoring",1,"Mohammed Abdul Hafeez",""],
["11:30 AM","","Impact of Switching from Phosphate to AVT Amine Treatment on Magnetite Stability and Reliability of an MP Steam Waste Heat Boiler",2,"Muazu Mohammed",""],
["11:30 AM","","Integrity Impact of external environmental chloride on non-insulated 304SS Piping and Equipment",3,"Hamad Alalwani",""],
["12:00 PM","1h","Break",0,"",""],
["01:00 PM","","Impact of insulation without coating and associated chloride stress corrosion cracking",1,"Mohammad Abass Bhat",""],
["01:00 PM","","Inspection Challenges in Sea Water Concrete Structures and New Technology Adaption",2,"Saad AlShehri",""],
["01:00 PM","29m","A Review of Industrial Failures in GRP Piping and Pipeline Applications: Causes & Lessons Learned",3,"Rashed Alhajri",""],
["01:30 PM","","Probabilistic Fitness-for-Service Assessment of Localized External Degradation Using API 579 and Monte Carlo Simulation",1,"Yousof Al-Dosry, P.E.",""],
["01:30 PM","","Cathodic Protection of Reinforced Concrete Piles in Sabkha Environment",2,"Wasim Idris Baig",""],
["01:30 PM","","RTR Composite Piping Design and Installation Best Practices and its Inspection Challenges",3,"Abdulaziz Asiri",""],
["02:15 PM","","Introduction to Thermal Insulative Coatings",1,"Munzir Khan",""],
["02:15 PM","","International and Regional Cathodic Protection Standards: A Comparative Study",2,"Saad Almaaesab",""],
["02:15 PM","","Management of change (MOC) for refractory reliability and thermal processing asset integrity",3,"Manabendra Maity",""],
["02:45 PM","","Case Study for Corrosion Under Insulation in Dummy Leg Support.",1,"Faris Alkhanjaf",""],
["02:45 PM","","Impact of Coated Well Casings on Cathodic Protection Current Distribution in Mixed Coating Systems",2,"Prantosh Naha",""],
["02:45 PM","","Metallurgical Investigation of a Chlorine Drying Column Failure Resulting Loss of Primary Containment",3,"Saeed Kadasah",""]
]},
{l:"Day 2",d:"Tuesday, September 08, 2026",s:[
["08:00 AM","1h","Excellent Anti-carburization & Anti-Coking Materials Alloy Used in Cracking Furnaces By NPA CO.",0,"Wei Lijuan, Wu He",V],
["09:00 AM","","Online Robotic Technologies A Paradigm Shift in Tank Inspection and Integrity Assurance",1,"Qasem Fandem",""],
["09:00 AM","","Plant Power Against Corrosion: Eco-Friendly Protection of Mild Steel in H₂SO₄",2,"Prof. Aisha Al-Moubaraki",""],
["09:00 AM","","ICCP System for Concrete Structures: Design Considerations",3,"Dr. Zia Chaudhary",""],
["09:30 AM","","Corrosion Control and Rehabilitation of Transportation structures",1,"Safare Mohammed",""],
["09:30 AM","","Failure Analysis of Furnace Radiant Section Inlet Manifold (RIM) Flanges",2,"Abdalaziz Bokari",""],
["09:30 AM","","PCCP-CCP Pipe Inspection (Online Offline)",3,"Mohammed Imtiyaz Ali",""],
["10:15 AM","","Chloride-Induced Stress Corrosion Cracking Risk Mitigation",1,"Ahmed Aboforn",""],
["10:15 AM","","Advancing Sustainable Desalination: Industrial Validation of Non-Metallic Materials for High-Performance Systems",2,"Asma Al-Husaiki",""],
["10:15 AM","","Temper Bead Welding as PWHT Alternative for 1.25%Cr-Mo Convection Coil’s Weldment",3,"Anas Alghamdi",""],
["10:45 AM","","Uncovering and Mitigating the Hidden Threat of Stress Corrosion Cracking",1,"Rohit Kardile",""],
["10:45 AM","","Investigating Novel Ionic Liquids For Corrosion Inhibition Via Electrochemical Techniques",2,"Lina Alharthi",""],
["10:45 AM","","Sigma Phase Embrittlement of Sulfuric acid converter",3,"Omar Allafi",""],
["11:15 AM","","Compositional and Structural Analysis of Deposits in a Natural Gas Transmission Pipeline",1,"Hussam Alhakim",""],
["11:15 AM","","Corrosion Inhibition of Steel in Acidic Medium Using Artemisia Herba-Alba Plant Extract",2,"Awatif Al Essa",""],
["11:15 AM","","Reliability Improvement for Sweet Cooling Water",3,"Sultan Al-Shammary",""],
["11:45 AM","","Case Study: Failure analyses evaporator tubes for Tail Gas boiler",1,"Ashok Kumar",""],
["11:45 AM","","Enhancing Internal Corrosion Protection Using Advanced Thermoplastic Lining Technologies",2,"Ahmed Alharbi",""],
["11:45 AM","","Modeling based control of the sodium phosphate ratio for enhanced reliability in high pressure steam generation.",3,"Kamal Syed Haider",""],
["12:15 PM","45m","Prayer Break",0,"",""],
["01:00 PM","1h","Predictive Maintenance of Breather and Pilot Valves via Smart Sensing by PROTEGO CO.",0,"Dr. Davies Michael",""],
["02:00 PM","1h","Lunch",0,"",""]
]},
{l:"Day 3",d:"Wednesday, September 09, 2026",s:[
["08:00 AM","1h","Duo Coat Inorganic Corrosion Protection",0,"Ben Van Wyk",V],
["09:00 AM","","Leak detection using Digital Acoustics Camera Based on Acoustic Emissions NDT",1,"Anas Al Ghamdi",""],
["09:00 AM","","From Established Monitoring and Control to Breakthrough Deposit Insight: Proactive Corrosion and Deposit Risk Management in Cooling Water Systems",2,"Mohammad Al-Shaikh Khaleel",""],
["09:00 AM","","Reducing Lifecycle Costs Through Proven CUI Mitigation",3,"Altaf Rahman",""],
["09:30 AM","","A Review of High Temperature Hydrogen Attack: Attack Mechanism, Mechanical Property Degradation, Remaining Life, Fitness for Service and Nondestructive Examination",1,"Ajwan Alghamdi",""],
["09:30 AM","","FFS and Asset Life Extension Strategy in a Flare Seal Drum",2,"Vajid Abdulkareem",""],
["09:30 AM","","Beyond the Barrier: Utilizing Chemo-absorption bonding to Eliminate Corrosion Permanently",3,"Omar Obaid",""],
["10:15 AM","","Key C.P Design Factors of Plant Facility Structures",1,"Ahamed Ansari A",""],
["10:15 AM","","Smart Alginate–Chitosan Microcapsules for Advanced Corrosion Protection in Acidic Media",2,"Naif Alarifi",""],
["10:15 AM","","Root Cause Failure Analysis of Duplex Stainless Steel Pump Discharge Line",3,"Awais Manzoor",""],
["10:45 AM","","Best Practices for Tanks CP Design and Construction",1,"Ahamed Rasmi",""],
["10:45 AM","","Computational Investigation of Turbulent Flow-Accelerated Corrosion",2,"Malik Al-Abed Allah",""],
["10:45 AM","","Failure Analysis of Pyrolysis Furnace PQE Inlet Castings",3,"Abdulaziz Alharbi",""],
["11:15 AM","","Metallurgical Analysis of High-Pressure Reactor Tubes",1,"Faris Al Adainan",""],
["11:15 AM","","Innovative Integrity Solutions for Hydrogen Service Leaks",2,"Ahmed Alrhily",""],
["11:15 AM","","Challenges of caustic stress corrosion cracking and practical solutions",3,"Mohamed Shaaban",""],
["11:45 AM","","Online Inspection of damaged and deteriorated concrete structure SW PIT",1,"Talha Ayub",""],
["11:45 AM","","Saqil Technology",2,"Maria Alhaboudal",""],
["11:45 AM","","Global Adoption Status of CUI Monitoring and Recent Use Cases",3,"Syed Maqsud Syed",""],
["12:15 PM","1h","Lunch",0,"",""]
]}];
var day=0,trk=1,root=document.getElementById("ag-root");
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!==undefined)e.textContent=x;return e;}
function tabs(cls,labels,cur,fn){
  var w=el("div","ag-tabs "+cls);w.setAttribute("role","tablist");
  labels.forEach(function(t,i){var b=el("button","",t);b.type="button";b.setAttribute("role","tab");
    b.setAttribute("aria-selected",i===cur?"true":"false");b.onclick=function(){fn(i);};w.appendChild(b);});
  return w;
}
function render(){
  root.textContent="";
  root.appendChild(tabs("days",D.map(function(x){return x.l;}),day,function(i){day=i;render();}));
  root.appendChild(tabs("tracks",["Track 1","Track 2","Track 3"],trk-1,function(i){trk=i+1;render();}));
  root.appendChild(el("div","ag-date",D[day].d+" — Track "+trk));
  D[day].s.forEach(function(s){
    if(s[3]!==0&&s[3]!==trk)return;
    var r=el("div","ag-item"+(s[3]===0?" common":""));
    var t=el("div","ag-time",s[0]);t.appendChild(el("small","",s[1]||"30m"));
    var b=el("div");b.appendChild(el("div","ag-title",s[2]));
    var m=el("div","ag-meta");
    if(s[3]===0)m.appendChild(el("span","badge","All Tracks"));
    if(s[5])m.appendChild(document.createTextNode(s[5]));
    if(m.childNodes.length)b.appendChild(m);
    if(s[4])b.appendChild(el("div","ag-spk",s[4]));
    r.appendChild(t);r.appendChild(b);root.appendChild(r);
  });
}
render();
})();

/* Gallery lightbox */

(function(){
var g=document.querySelector(".gal"),lb=document.getElementById("lb");
if(!g||!lb)return;
var bs=[].slice.call(g.querySelectorAll("button")),im=lb.querySelector("img"),c=lb.querySelector(".lb-c"),cur=0;
function show(i){cur=(i+bs.length)%bs.length;var s=bs[cur].querySelector("img");im.src=s.src;im.alt=s.alt;c.textContent=(cur+1)+" / "+bs.length;}
function open(i){show(i);lb.classList.add("open");document.body.style.overflow="hidden";}
function close(){lb.classList.remove("open");document.body.style.overflow="";}
bs.forEach(function(b,i){b.onclick=function(){open(i);};});
lb.querySelector(".lb-x").onclick=close;
lb.querySelector(".lb-p").onclick=function(){show(cur-1);};
lb.querySelector(".lb-n").onclick=function(){show(cur+1);};
lb.onclick=function(e){if(e.target===lb)close();};
document.addEventListener("keydown",function(e){if(!lb.classList.contains("open"))return;
 if(e.key==="Escape")close();else if(e.key==="ArrowLeft")show(cur-1);else if(e.key==="ArrowRight")show(cur+1);});
})();

/* Mobile nav toggle */

(function(){
  var btn=document.querySelector(".nav-toggle"),nav=document.getElementById("site-nav");
  if(!btn||!nav)return;
  btn.onclick=function(){
    var open=nav.classList.toggle("open");
    btn.setAttribute("aria-expanded",open?"true":"false");
  };
  nav.querySelectorAll("a").forEach(function(a){
    a.addEventListener("click",function(){
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded","false");
    });
  });
})();
