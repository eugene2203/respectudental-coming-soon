export interface Specialization {
    slug: string;
    title: string;
    img: string;
    alt: string;
    text: string;       // краткий текст для карточки на /services
    content: {
        intro: string;
        sections: {
            heading: string;
            body: string;
        }[];
        clinicalNote: string;
    };
}

export const specializations: Specialization[] = [
    {
        slug: 'crown-and-bridge',
        title: 'Crown & Bridge',
        img: '/images/services-page/img-1.png',
        alt: 'Zirconia crown and bridge restoration example',
        text: 'Premium restorations using high-translucency zirconia and hand-layered porcelain for natural esthetics.',
        content: {
            intro: 'Our Crown & Bridge department delivers high-precision fixed restorations engineered for long-term functional stability and exceptional esthetic outcomes. From single-unit anterior crowns to multi-span posterior bridges, every case is approached with the same commitment to marginal accuracy and material excellence.',
            sections: [
                {
                    heading: 'Material Selection',
                    body: 'We work with a curated portfolio of proven materials: multi-layered high-translucency zirconia (HT-ZrO₂) for full-contour restorations requiring both strength and esthetics; IPS e.max Press and e.max CAD for anterior veneers, crowns, and inlays; and layered porcelain-fused-to-zirconia (PFZ) for cases demanding maximum shade characterization. All zirconia is sintered in calibrated furnaces to manufacturer specifications to ensure consistent density and translucency values.',
                },
                {
                    heading: 'CAD/CAM Milling & Marginal Accuracy',
                    body: 'Every restoration is digitally designed using 3Shape Dental System and milled on high-precision 5-axis milling units. Our standard marginal gap target is ≤50 µm — verified for each case under 8× magnification before dispatch. Full-contour restorations are checked for proximal contacts and occlusal clearance prior to glazing or staining.',
                },
                {
                    heading: 'Layering & Characterization',
                    body: 'For cases requiring maximum esthetic depth — anterior rehabilitations, smile makeovers, implant-supported crowns in the visible zone — our senior technicians perform cut-back and hand-layering using IPS e.max Ceram or Creation CC porcelain. Surface characterization, internal staining, and glaze application are applied to replicate the optical gradients of natural dentition.',
                },
                {
                    heading: 'Prescription Submission Guidelines',
                    body: 'For optimal results, provide digital scans in STL/PLY format or high-quality PVS impressions with an accurate bite registration. Include shade selection (VITA Classical or VITA 3D-Master), adjacent tooth photographs under natural lighting, and a clear indication of the preparation finish line. Rush cases (3-day delivery) are available upon prior arrangement.',
                },
            ],
            clinicalNote: 'All Crown & Bridge restorations include a QC checklist covering marginal fit, contact points, occlusion, shade, and surface texture before dispatch. We encourage pre-case consultations for complex multi-unit cases or patients with significant parafunction.',
        },
    },
    {
        slug: 'implant-restorations',
        title: 'Implant Restorations',
        img: '/images/services-page/img-2.png',
        alt: 'Custom dental implant abutment restoration',
        text: 'Custom abutments and screw-retained solutions for all major implant systems with high precision fit.',
        content: {
            intro: 'Implant-supported restorations demand precision at every level — from the implant-abutment interface to the final occlusal surface. Our implant department specializes in custom abutment fabrication and implant-supported prosthetics compatible with all major implant systems, delivered with the exact tolerances that osseointegration-level accuracy requires.',
            sections: [
                {
                    heading: 'Compatible Implant Systems',
                    body: 'We work with all major implant platforms including Nobel Biocare (NobelActive, Replace CC), Straumann (BL, BLT, TL), Zimmer Biomet, Dentsply Sirona (Ankylos, Xive), Osstem, MIS, and others. For systems not listed, contact us with the manufacturer reference before case submission and we will confirm compatibility.',
                },
                {
                    heading: 'Custom Abutments: Titanium & Zirconia',
                    body: 'CAD/CAM-milled titanium custom abutments provide the most reliable implant-abutment interface, ideal for all soft tissue heights and posterior regions. Zirconia abutments (or titanium-base hybrid abutments) are recommended for the anterior zone where metal-free esthetics are critical. All custom abutments are milled to direct connect specifications — no scanning body required for digital submissions.',
                },
                {
                    heading: 'Screw-Retained vs. Cement-Retained',
                    body: 'We fabricate both screw-retained and cement-retained implant crowns. For single-unit anterior and posterior cases where retrievability is a priority, screw-retained restorations on pre-milled titanium bases (Ti-Bases) are our recommended approach. Access openings are sealed with PTFE tape and composite. Cement-retained crowns are indicated when emergence profile or implant angulation makes screw access impractical.',
                },
                {
                    heading: 'Full-Arch Implant Prosthetics',
                    body: 'Our full-arch department fabricates implant-supported bridges for All-on-4, All-on-6, and other multi-unit protocols in milled titanium, cobalt-chrome, and monolithic zirconia frameworks. We include a verification jig stage for all full-arch cases to confirm passive fit before the final restoration is designed. Acrylic-veneered and monolithic zirconia full-arch options are both available.',
                },
            ],
            clinicalNote: 'Please provide the implant system, connection type, scan body used, emergence profile preference, and desired restoration type (screw-retained or cement-retained) with each implant case prescription. Intraoral scan files with scan body in place are preferred over conventional impressions for all implant cases.',
        },
    },
    {
        slug: 'digital-workflow',
        title: 'Digital Workflow',
        img: '/images/services-page/img-3.png',
        alt: 'Digital dental workflow with 3Shape scanner',
        text: 'Seamless integration with 3Shape, iTero, and Medit scanners for faster turnaround and better accuracy.',
        content: {
            intro: 'A fully digital submission workflow reduces turnaround times, eliminates impression distortion, and enables real-time case communication. Respect U Dental Lab is equipped to receive, process, and fabricate restorations entirely within a digital pipeline — from scan receipt to final milling.',
            sections: [
                {
                    heading: 'Compatible Intraoral Scanners',
                    body: 'We accept digital submissions from all major intraoral scanning systems: 3Shape TRIOS (all generations), Dentsply Sirona Primescan and Cerec Omnicam, Medit i700 and i900, Align Technology iTero Element (all generations), Carestream CS 3600/3700, and 3M True Definition. Files must be exported in open STL, PLY, or OBJ format.',
                },
                {
                    heading: 'Digital Submission Process',
                    body: 'Export STL files for the prepared arch, opposing arch, and buccal bite registration. Include a completed digital prescription with shade, restoration type, material preference, and any special notes. Our team confirms receipt and reviews scan quality within 2 business hours, contacting you immediately if any clarification is needed before fabrication begins.',
                },
                {
                    heading: 'CAD Design Preview & Approval',
                    body: 'For complex cases, we can share a 3D design preview for clinician approval before milling — reducing the risk of remakes. Design approval turnaround is typically same-day. Once approved, milling proceeds without delay. This step is standard for full-arch cases and available on request for single-unit anterior esthetic cases.',
                },
                {
                    heading: 'Turnaround Advantages',
                    body: 'Digital cases bypass the 24-hour delay associated with physical impression shipping. Standard turnaround for single-unit digital cases is 3–5 business days from scan receipt. Rush 2-day options are available for straightforward single-unit cases at a surcharge. Full-arch and complex cases follow standard timelines regardless of submission method.',
                },
            ],
            clinicalNote: 'For best scan quality: ensure adequate soft tissue retraction, good lighting, and isolation for preparation scans. For implant cases, always include the scan body in the final scan. If you encounter scan quality issues, our team is available by phone to troubleshoot before you dismiss the patient.',
        },
    },
    {
        slug: 'removable-prosthetics',
        title: 'Removable Prosthetics',
        img: '/images/services-page/img-4.png',
        alt: 'Removable partial denture prosthetic',
        text: 'Durable dentures, partials, and Valplast solutions designed for maximum comfort and long-term stability.',
        content: {
            intro: 'Our removable prosthetics department combines traditional craftsmanship with modern materials to deliver complete and partial dentures that balance esthetics, function, and patient comfort. Each case is fabricated to the clinician\'s specifications, with particular attention to occlusal balance and phonetics.',
            sections: [
                {
                    heading: 'Complete Dentures',
                    body: 'We fabricate both conventional and immediate complete dentures using premium PMMA denture base resins and cross-linked acrylic teeth (Ivoclar SR Vivodent, Dentsply Portrait IPN). A teeth arrangement try-in stage is included as standard protocol for all full denture cases, allowing clinician and patient approval of esthetics, midline, and occlusal plane before final processing.',
                },
                {
                    heading: 'Removable Partial Dentures',
                    body: 'Cast cobalt-chrome (CoCr) partial frameworks are fabricated using CAD/CAM-designed and investment-cast frameworks with rests, clasps, and connectors designed to the clinician\'s treatment plan. Occlusal rests and guide planes should be prepared in advance of impression taking. Valplast and other flexible thermoplastic partials (BioFlex, TCS) are also available for metal-free or clasp-free clinical requirements.',
                },
                {
                    heading: 'Implant-Supported Overdentures',
                    body: 'For patients with two or more implants, implant-supported overdentures provide superior retention and stability compared to conventional full dentures. We fabricate overdentures with Locator, ball attachment, or bar-retained systems depending on the clinician\'s implant placement plan. All attachment housings are processed at the correct vertical dimension of occlusion.',
                },
                {
                    heading: 'Repair, Reline & Rebase Services',
                    body: 'We offer chairside and laboratory relines (hard and soft), complete denture rebases, tooth additions, clasp repairs, and fracture repairs. Standard reline turnaround is 2 business days. Please send the denture with a final impression in the existing prosthesis and note any required vertical dimension changes.',
                },
            ],
            clinicalNote: 'Accurate jaw relation records are the single most important factor for a successful denture outcome. For complete dentures, please include centric relation and vertical dimension of occlusion records, a facebow transfer where possible, and clear shade and mold selection with each case submission.',
        },
    },
    {
        slug: 'orthodontics',
        title: 'Orthodontics',
        img: '/images/services-page/img-5.png',
        alt: 'Clear aligner orthodontic appliance',
        text: 'Custom clear aligner manufacturing and orthodontic appliances tailored to specific clinical treatment plans.',
        content: {
            intro: 'Our orthodontic appliance laboratory provides precision-fabricated clear aligners, retainers, and functional appliances for orthodontic and restorative clinicians. Each appliance is manufactured from clinical-grade materials with tight dimensional tolerances to ensure predictable tooth movement and long-term patient compliance.',
            sections: [
                {
                    heading: 'Custom Clear Aligners',
                    body: 'We fabricate custom clear aligner series from digital models using 0.75 mm or 1.0 mm Zendura FLX thermoformable sheets — the same material used in premium branded aligner systems. Staging and movement sequencing can be performed by our in-lab digital planning team or provided by the clinician as an STL series. Cases with up to 30 aligners per arch are routinely processed. Rush same-week fabrication is available for short-series cases.',
                },
                {
                    heading: 'Retainers',
                    body: 'Essix (vacuum-formed) and Hawley retainers are fabricated from digital or physical models. For post-orthodontic retention, we recommend 1.0 mm Zendura or Duran Plus material for Essix-style retainers for superior long-term durability. Bonded (fixed) lingual retainers are also available — specify arch, canine-to-canine or extended, and wire gauge preference.',
                },
                {
                    heading: 'Functional & Orthopedic Appliances',
                    body: 'We fabricate a range of removable functional appliances including Twin Block, MARA, Herbst modifications, palatal expanders, and bite turbos. All functional appliances are fabricated per the clinician\'s construction bite and treatment objectives. Please include detailed specifications or a completed prescription form for all functional appliance cases.',
                },
                {
                    heading: 'Digital Model Services',
                    body: 'We offer high-resolution DLP resin model printing (50-micron layer resolution) for study models, aligner fabrication bases, and records. Models are printed directly from submitted STL files. Physical models can also be scanned in-lab for cases where intraoral scans were not obtained chairside.',
                },
            ],
            clinicalNote: 'For clear aligner cases, high-quality STL files of the initial dentition are essential. Ensure full arch coverage including second molars, adequate soft tissue registration, and no scan artifacts. For functional appliance cases, provide an accurate construction bite taken at the intended jaw position.',
        },
    },
    {
        slug: 'custom-esthetics',
        title: 'Custom Esthetics',
        img: '/images/services-page/img-6.png',
        alt: 'Custom shade matching for dental esthetics',
        text: 'Personalized shade matching and diagnostic wax-ups to ensure predictable results for complex cases.',
        content: {
            intro: 'Complex esthetic cases — full-mouth rehabilitations, smile makeovers, anterior zone reconstructions — require meticulous pre-treatment planning and close collaboration between clinician and laboratory. Our Custom Esthetics service offers the diagnostic tools and technical expertise to deliver predictable, high-impact results for your most demanding patients.',
            sections: [
                {
                    heading: 'Diagnostic Wax-Ups',
                    body: 'A diagnostic wax-up is the foundation of any complex esthetic case. Our technicians sculpt the proposed restoration in wax on articulated stone models, establishing tooth proportions, arch form, smile line, and occlusal plane before a single preparation is made. The wax-up can be used chairside to fabricate a bis-acryl or silicone-based mock-up, allowing the patient to preview the result in the mouth before committing to irreversible preparation.',
                },
                {
                    heading: 'Shade Matching & Communication',
                    body: 'We recommend submitting natural-light photographs using a standardized shade tab protocol: VITA 3D-Master tabs photographed alongside the target tooth in identical lighting conditions. For challenging cases involving tetracycline staining, fluorosis, or isolated dark teeth, we offer a case consultation with our senior esthetic technician before case acceptance to align clinical expectations with technically achievable outcomes.',
                },
                {
                    heading: 'Veneer & Anterior Rehabilitation',
                    body: 'Porcelain veneers (IPS e.max Press, minimum 0.3 mm for feldspathic; 0.5 mm for pressed) are fabricated using the press-and-characterize technique for maximum translucency. For full-smile rehabilitations involving 6–10+ anterior units, we include a try-in stage at bisque bake phase for in-mouth shade verification and adjustments before final glazing.',
                },
                {
                    heading: 'Full-Mouth Rehabilitation',
                    body: 'Full-mouth rehabilitation cases — those involving significant changes to vertical dimension of occlusion, extensive crown-lengthening, or multiple quadrant restorations — are accepted as priority cases with dedicated technician assignment. These require an initial consultation call, complete diagnostic records (mounted models, full photographic series, CBCT if relevant), and a clearly defined restorative plan before case acceptance.',
                },
            ],
            clinicalNote: 'For any esthetic case involving four or more anterior restorations, we strongly recommend a pre-case consultation with our esthetic department. Predictable outcomes depend on alignment between the clinician\'s treatment goals, the patient\'s expectations, and the laboratory\'s technical approach — a 15-minute conversation at the planning stage prevents significant issues at delivery.',
        },
    },
];

export function getSpecializationBySlug(slug: string): Specialization | undefined {
    return specializations.find((s) => s.slug === slug);
}

export function getAllSpecializationSlugs(): string[] {
    return specializations.map((s) => s.slug);
}