import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import images from "@/lib/images";

interface Section {
  heading?: string;
  paragraphs: string[];
}

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  metaDescription: string;
  sections: Section[];
}

const articles: Article[] = [
  {
    slug: "cost-overruns-kenya-construction",
    title: "Why Kenyan Construction Projects Overrun, and How to Stop It Happening to Yours",
    excerpt: "Most cost overruns aren't caused by one dramatic event. They build up quietly, and the fixes are less complicated than people think.",
    metaDescription: "Practical guide to preventing cost overruns on Kenyan construction projects, from feasibility and cost planning to variations and monthly reporting.",
    image: images.bgBoqReview,
    category: "Cost Management",
    author: "Quantsol Editorial",
    date: "March 4, 2026",
    readTime: "7 min read",
    sections: [
      {
        paragraphs: [
          "Every year, industry bodies in Kenya publish more or less the same headline. A large share of both public and private construction projects finish over budget, and a stubborn minority finish so far over budget that they end up in court. On a multi-billion shilling development, even a modest slip can wipe out the developer's margin and leave the contractor chasing final account for years.",
          "The frustrating thing is that most overruns are not caused by one dramatic event. They build up quietly, from decisions made months before the first block is laid. If you understand where the risk actually enters the project, you can design most of it out at concept stage. Below is a plain look at what tends to go wrong on Kenyan sites, and the working habits that keep the good ones on budget.",
        ],
      },
      {
        heading: "The problem starts before the site does",
        paragraphs: [
          "The single biggest driver of overrun in our experience is a design that isn't ready when the project goes to tender. Drawings are still being marked up, the structural engineer is still resolving foundations, and the developer is still deciding on finishes. A Bill of Quantities produced from an incomplete design will always contain generous provisional sums, and those sums almost always grow.",
          "Closely behind that is unrealistic programming. A client asks for a ten-storey block in twelve months because their financier wants it, the contractor agrees because they want the job, and nobody stops to price the acceleration. Six months in, the programme slips and everyone acts surprised.",
          "The third quiet killer is procurement culture. Kenyan tenders still often go to the lowest bidder rather than the most competent one. A contractor who has priced 15% below the market will find that money somewhere, usually in variations, defects, or a request for extension of time.",
        ],
      },
      {
        heading: "What actually keeps a project on budget",
        paragraphs: [
          "The projects we see land within three or four per cent of their contract sum tend to share the same habits. First, they invest in a real feasibility and elemental cost plan before design freezes. The plan sets the ceiling, and the design team is asked to design to it rather than the other way round.",
          "Second, they produce a properly measured BoQ priced against current Nairobi and upcountry rates, not rates copy-pasted from a project completed three years ago. Steel and cement have moved too much for that shortcut to be safe.",
          "Third, they run their project under a recognised form of contract, usually JBC in the private sector or FIDIC where a financier requires it, and they administer it strictly. That means instructions in writing, variations priced before they're executed, and a monthly cost report on the client's desk without fail.",
        ],
      },
      {
        heading: "A worked example",
        paragraphs: [
          "Take a typical Nairobi apartment block with a contract sum of Ksh 400 million. On a poorly controlled project, provisional sums of about Ksh 60 million might quietly swell to Ksh 95 million, variations add another Ksh 25 million, and the contractor lodges a claim for prolongation costs on top. The developer ends up around 20% over budget and roughly six months late.",
          "The same block, run with a live cost plan and monthly reporting, tends to close at Ksh 410 to 420 million. The difference isn't magic. It's just that every commitment was priced, authorised and recorded before it hit the site.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "If you're planning a project and want to avoid the classic traps, three moves matter more than anything else. Bring in a BORAQS-registered quantity surveyor before the design is complete. Insist on a written cost report every month against an approved budget. And treat variations as decisions to be authorised in advance, not surprises to be discovered at final account.",
          "None of this is exotic. It's simply the discipline that separates the projects that finish quietly from the ones that end up in the news. If you'd like to talk through where your project sits on that spectrum, get in touch with the team.",
        ],
      },
    ],
  },
  {
    slug: "reading-a-boq",
    title: "How to Read a Bill of Quantities Without Getting Lost",
    excerpt: "A plain guide for developers and first-time clients on what a BoQ actually contains and how to use it to keep control of your project.",
    metaDescription: "Learn how to read a Bill of Quantities in Kenya, including preliminaries, provisional sums, PC sums, and the monthly reports every developer should demand.",
    image: images.bgDigitalEstimation,
    category: "Client Guides",
    author: "Quantsol Editorial",
    date: "February 18, 2026",
    readTime: "6 min read",
    sections: [
      {
        paragraphs: [
          "The first time most Kenyan developers open a Bill of Quantities, they close it again pretty quickly. Two hundred pages of measured items, cryptic preambles, and blocks of provisional sums can look like a foreign language. But once you understand how a BoQ is put together, it stops being intimidating and starts being the most useful cost-control tool you own.",
          "This guide walks through what's actually in the document, which parts matter most, and the habits that let a non-technical client stay in charge of the money.",
        ],
      },
      {
        heading: "How the document is organised",
        paragraphs: [
          "A standard BoQ follows the order in which a building is built. It opens with preliminaries, which cover the contractor's site setup, insurance, supervision and general attendance. Then it moves through substructure, superstructure, finishes, services, and finally external works.",
          "Each section lists measured quantities of work with a rate against each item, and the section totals roll up to a summary page at the front. When someone quotes you a contract sum, they're quoting the figure on that summary page.",
        ],
      },
      {
        heading: "The parts most clients miss",
        paragraphs: [
          "Preliminaries usually sit between eight and fifteen per cent of the contract sum on a typical Kenyan project. Clients often skim them because they don't relate to a visible piece of the building, but they're the first place a contractor absorbs risk. If preliminaries look unusually low, be suspicious rather than pleased.",
          "Provisional sums are placeholders for work that hasn't been fully designed yet. They must be spent against actual quotations and reconciled at final account. Prime cost sums are similar, but they cover specific items like ironmongery or kitchen fittings where the client wants to choose the exact supplier later. Both categories quietly become the biggest source of overrun on badly run projects, because nobody is watching them.",
        ],
      },
      {
        heading: "Three habits that protect you",
        paragraphs: [
          "Ask your quantity surveyor to walk you through the summary page and explain any figure that surprises you. A good QS will happily spend an hour doing this. If yours won't, that's a signal worth acting on.",
          "Insist that every variation is priced against BoQ rates before it's instructed. Once work has been built, you've lost your negotiating position. Once it's been built without a written instruction, you've often lost it twice.",
          "Request a monthly cost report that compares work done, work certified, and remaining commitments against the contract sum. This one document, read for ten minutes a month, will catch almost every problem while it's still small.",
        ],
      },
      {
        heading: "When to ask for a second opinion",
        paragraphs: [
          "If your project value is above Ksh 100 million, or if you're working with a first-time contractor, it's worth having an independent QS review the BoQ before you sign. Rates can be checked against current market data, quantities can be spot-measured against the drawings, and the preliminaries can be benchmarked against comparable projects.",
          "That review usually costs a fraction of one per cent of the contract sum. On the projects we've reviewed, it's paid for itself many times over. If you'd like a review of a BoQ you've been handed, our team is happy to take a look. You can see the kind of work we do on the portfolio page.",
        ],
      },
    ],
  },
  {
    slug: "affordable-housing-programme",
    title: "Kenya's Affordable Housing Programme: What It Means for Developers",
    excerpt: "The Housing Levy, the Affordable Housing Act, and where private developers actually fit into the pipeline.",
    metaDescription: "An overview of Kenya's Affordable Housing Programme, its compliance requirements, and how developers can participate through PPPs and private social housing.",
    image: images.projectHousing,
    category: "Policy & Markets",
    author: "Quantsol Editorial",
    date: "January 27, 2026",
    readTime: "8 min read",
    sections: [
      {
        paragraphs: [
          "The Affordable Housing Programme is now the single biggest driver of construction activity in the country. Backed by the Affordable Housing Act and part-funded by the Housing Levy, it aims to deliver hundreds of thousands of units through a mix of public delivery, public-private partnerships and private social housing schemes.",
          "For developers, the opportunity is real. So is the compliance layer. This is a quick guide to what the programme actually requires, and where private capital fits into it.",
        ],
      },
      {
        heading: "What the programme is trying to do",
        paragraphs: [
          "At its core, the programme targets unit typologies that most private developers don't naturally build. One, two and three-bedroom units at controlled sale prices, delivered at scale in dense urban settings and in county towns that historically haven't seen much formal housing.",
          "That combination of small units, controlled prices and public accountability is what makes the delivery model different from a typical Nairobi apartment scheme. Every shilling has to be traceable, and the audit trail matters as much as the concrete.",
        ],
      },
      {
        heading: "How compliance works in practice",
        paragraphs: [
          "Projects delivered under the programme have to be procured openly, designed by registered professionals, and cost-verified independently. The State Department for Housing and the Affordable Housing Board have made it clear that schemes that cut corners on cost transparency will not be gazetted, and won't qualify for offtake.",
          "In practice, that means the quantity surveyor is no longer just a cost accountant. They sit at the centre of feasibility modelling, testing whether a site can actually deliver units at the mandated price point given current material and labour costs. They also hold the audit trail that the Board and, eventually, the Auditor-General will review.",
        ],
      },
      {
        heading: "Where private developers fit in",
        paragraphs: [
          "There are three practical routes. The first is direct participation in a PPP, usually as part of a consortium with a contractor and a financier. The second is private social housing built to programme standards and sold into the offtake pipeline. The third is providing serviced land or infrastructure into a scheme delivered by another party.",
          "Each route has a different risk profile. PPPs offer the largest scale but require the longest concession periods and the most sophisticated financial modelling. Private social housing is faster to market but depends on the offtake mechanism working as designed. Land and infrastructure deals are the simplest, but the returns are more modest.",
        ],
      },
      {
        heading: "What to do before you commit",
        paragraphs: [
          "Build a compliant team early. A registered architect, a BORAQS-registered QS, a project manager with public-sector experience, and a contractor pre-qualified with the National Construction Authority. Get the feasibility and cost plan right at concept stage, because retrofitting compliance into a design that's already been priced is painful and expensive.",
          "If you're thinking about entering the programme, or you've been approached to join a consortium, we've supported clients on both PPP and affordable delivery routes. You can see examples on our portfolio, and the team is happy to walk you through the numbers.",
        ],
      },
    ],
  },
  {
    slug: "site-supervision-that-works",
    title: "What Good Site Supervision Actually Looks Like",
    excerpt: "Beyond the site meeting minutes, the daily habits that separate well-run Kenyan sites from the ones that quietly drift.",
    metaDescription: "Practical guide to effective site supervision in Kenya, covering look-ahead programmes, joint measurement, and the paper trail that prevents disputes.",
    image: images.bgSiteSupervision,
    category: "Project Management",
    author: "Quantsol Editorial",
    date: "January 9, 2026",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "Every project has a weekly site meeting. Every project also has minutes. What separates a well-run Kenyan site from a struggling one is almost never the meeting itself. It's the daily practice in between, and it's surprisingly easy to spot from the gate.",
        ],
      },
      {
        heading: "A live programme, not a printed one",
        paragraphs: [
          "Good supervision starts with a rolling four-week look-ahead that's updated every Monday and posted where the whole team can see it. When the site foreman, the contractor's QS, and the consultant's team are all reading the same look-ahead, delays get flagged in days rather than months.",
          "A Gantt chart printed on day one and pinned to the wall for the rest of the project is a warning sign, not a plan. Programmes need to breathe.",
        ],
      },
      {
        heading: "Joint measurement, every month",
        paragraphs: [
          "On a healthy site, work is measured jointly by the contractor's QS and the consultant QS every month, against the BoQ, before any interim certificate is issued. Photographs are dated, materials on site are counted, and defects are logged with a target close-out date.",
          "This routine removes almost all of the friction that would otherwise surface at final account. The alternative, where each side measures separately and then argues about the difference, is how six-month disputes are born.",
        ],
      },
      {
        heading: "A clean paper trail",
        paragraphs: [
          "The least glamorous habit is also the most important. Instructions in writing. RFIs answered within 48 hours. Variations priced before they're executed. A single shared drive where the latest drawing revision lives, and where an old revision can never be mistaken for a current one.",
          "When a project ends up in dispute, it's almost always because one of these habits was skipped. When a project ends quietly and on budget, all three have usually been kept without much drama.",
        ],
      },
      {
        heading: "What to check on your next site visit",
        paragraphs: [
          "Ask to see this week's look-ahead. Ask for the last interim measurement sheet. Ask to see the site instruction book, and check whether the last three instructions are actually signed. If any of these questions produces awkward silence, you've found where your risk is hiding.",
        ],
      },
    ],
  },
  {
    slug: "material-price-volatility",
    title: "Managing Material Price Volatility in a Shifting Market",
    excerpt: "Steel, cement and imported finishes have moved sharply in the last 24 months. Here's how to protect margins without stalling the project.",
    metaDescription: "How Kenyan developers and contractors can manage volatility in steel, cement and imported material prices using fluctuation clauses, early procurement and contingency.",
    image: images.heroImg,
    category: "Cost Management",
    author: "Quantsol Editorial",
    date: "December 12, 2025",
    readTime: "6 min read",
    sections: [
      {
        paragraphs: [
          "The last two years have been unusually turbulent for Kenyan construction materials. Reinforcement steel, cement, aluminium sections and imported finishes have all seen double-digit swings in either direction, driven by a mix of shilling movement, global commodity cycles, and shipping costs through Mombasa.",
          "For a fixed-price contract, that volatility lands squarely on the contractor. For a cost-reimbursable one, it lands on the developer. Either way, ignoring it doesn't make it go away.",
        ],
      },
      {
        heading: "Fluctuations clauses, properly written",
        paragraphs: [
          "The most defensible tool in the Kenyan market is a fluctuations clause tied to a published index. The KNBS construction input price index is the reference most professionals will accept without argument, and JBC contracts include a workable framework for applying it.",
          "The clause needs to specify which items are covered, which index is used, and how often adjustments are calculated. A vague clause is worse than none at all, because it invites disputes at every certificate.",
        ],
      },
      {
        heading: "Early procurement of long-lead items",
        paragraphs: [
          "Where a fluctuations clause isn't practical, early procurement of the biggest cost items usually is. Order and pay for reinforcement, structural steel and imported finishes early in the programme, then store them properly on site or in a bonded warehouse.",
          "This does two things. It locks the price at a point the developer can control, and it removes the risk of a shipping delay pushing the whole programme sideways. The carrying cost of holding materials is almost always smaller than the cost of buying them under pressure three months later.",
        ],
      },
      {
        heading: "A ring-fenced materials reserve",
        paragraphs: [
          "Set aside a specific portion of the contingency, usually three to five per cent of the contract sum, ring-fenced for price movement. Release it only against evidence, either invoices or index-based adjustments. This turns an unmanaged risk into a managed one, and it stops the general contingency from being quietly drained by material creep before real emergencies happen.",
        ],
      },
      {
        heading: "What not to do",
        paragraphs: [
          "The response we see most often, and the one that causes the most damage, is silence at contract stage followed by a heated renegotiation halfway through construction. By that point, the contractor is committed, the developer's finance is drawn down, and neither side has any real leverage. The tools above cost almost nothing to write in at the start. They cost everyone plenty when they're left out.",
        ],
      },
    ],
  },
  {
    slug: "jbc-vs-fidic",
    title: "JBC or FIDIC? Choosing the Right Contract for Your Kenyan Project",
    excerpt: "The two contract families that cover almost every serious project in Kenya, and how to pick the one that fits yours.",
    metaDescription: "A practical comparison of JBC and FIDIC contracts for Kenyan construction projects, covering payment, disputes, and when each is the right choice.",
    image: images.bgBoqReview,
    category: "Contracts",
    author: "Quantsol Editorial",
    date: "November 30, 2025",
    readTime: "7 min read",
    sections: [
      {
        paragraphs: [
          "Almost every serious construction project in Kenya runs on one of two contract families. The Joint Building Council forms, known as JBC, dominate the private sector and most institutional work. The FIDIC suite, particularly the Red Book and Yellow Book, shows up on donor-funded, infrastructure and cross-border projects. Both work well when used correctly, and both cause headaches when they're used carelessly.",
          "Here's a practical look at how to choose between them.",
        ],
      },
      {
        heading: "Where JBC fits",
        paragraphs: [
          "JBC forms are written for the Kenyan legal and professional context. They reference the Architects and Quantity Surveyors Act, they assume BORAQS-registered professionals in the traditional roles, and they use terminology that local courts and arbitrators are comfortable with. For a private apartment block, a school extension, a hotel or a bank fit-out, JBC is usually the natural choice.",
          "The forms give the client's team, particularly the architect and QS, clear roles in certifying payment, valuing variations, and issuing extensions of time. That familiarity is a real advantage when something goes wrong.",
        ],
      },
      {
        heading: "Where FIDIC fits",
        paragraphs: [
          "FIDIC is the international standard, and it turns up whenever an international financier is involved. World Bank, African Development Bank, and most bilateral donors default to it. FIDIC is also common on large infrastructure projects, industrial plants, and design-build contracts where the contractor takes design responsibility.",
          "The Red Book covers traditional build-only contracts. The Yellow Book covers design-build. The Silver Book is for turnkey EPC arrangements where the contractor accepts most of the risk. Each has its place, and mixing them up at tender stage is a common and expensive mistake.",
        ],
      },
      {
        heading: "The practical differences",
        paragraphs: [
          "JBC leans on the architect as contract administrator. FIDIC introduces the Engineer, a separate role with defined duties and a stronger obligation to act impartially. On a small residential job, the JBC model is simpler and cheaper to run. On a complex civil works project with multiple stakeholders, the FIDIC framework is worth the extra overhead.",
          "Dispute resolution also differs. JBC typically routes disputes through arbitration under Kenyan law. FIDIC uses a Dispute Adjudication Board, which resolves issues while the project is still running rather than after it's finished. On long infrastructure contracts, that matters a great deal.",
        ],
      },
      {
        heading: "A quick way to choose",
        paragraphs: [
          "If the client is a private Kenyan entity, the design team is local, and the project is a building rather than infrastructure, JBC will almost always be the right answer. If there's international financing, cross-border consultants, or a design-build scope, FIDIC will usually make more sense.",
          "The wrong contract can still work if it's administered well, but it makes every routine decision harder. If you're not sure which suits your project, our team advises clients on contract selection before tender documents go out. You can start that conversation on the contact page.",
        ],
      },
    ],
  },
  {
    slug: "what-a-quantity-surveyor-does",
    title: "What a Quantity Surveyor Actually Does (For People Who've Never Hired One)",
    excerpt: "If you've never worked with a QS before, the job title doesn't help much. Here's what one actually does on your project.",
    metaDescription: "A plain-English explanation of what a quantity surveyor does in Kenya, from pre-contract cost planning to final account and dispute resolution.",
    image: images.bgDigitalEstimation,
    category: "Client Guides",
    author: "Quantsol Editorial",
    date: "November 12, 2025",
    readTime: "6 min read",
    sections: [
      {
        paragraphs: [
          "If you've never built anything before, the title \"Quantity Surveyor\" doesn't tell you much. It sounds like someone who counts things, and technically that's part of it, but the counting is the easy part. What a QS actually does is protect your money from the moment you start thinking about a building to the moment you accept the final account.",
          "Here's the job in plain language, split across the two halves of a project.",
        ],
      },
      {
        heading: "Before construction starts",
        paragraphs: [
          "In the pre-contract phase, the QS builds the financial spine of the project. It starts with a feasibility study, which tests whether your idea can actually be delivered at the price you've assumed. Then comes a cost plan, which allocates budget across the different elements of the building. Then a Bill of Quantities, which turns the design into measured items priced at current market rates.",
          "When tenders are called, the QS evaluates them, checks arithmetic, and interrogates suspiciously low or high bids. On a well-run project, the tender evaluation report is often the most useful document the client will read, because it explains not just who was cheapest but which contractor is most likely to actually finish the job.",
        ],
      },
      {
        heading: "Once construction is underway",
        paragraphs: [
          "During construction, the QS values the work each month, agrees interim payments with the contractor, and prices any variations that come up. This is the daily grind of cost management, and it's where the value is either created or lost. A good QS catches drift early, when it can still be corrected with a small design change. A weak QS notices it at final account, when everyone's committed.",
          "Alongside the numbers, the QS keeps the paper trail that protects you if anything goes wrong. Instructions, RFIs, variation orders, extensions of time, and eventually the final account. If a dispute ever reaches arbitration, this file is what the arbitrator will read.",
        ],
      },
      {
        heading: "What good looks like",
        paragraphs: [
          "A good QS reports to you every month in language you can actually understand. They flag risk before it becomes cost. They tell you what you can't afford, even when you'd rather not hear it. And they leave you at the end of the project with a set of documents that would stand up to scrutiny by an auditor or a court.",
          "If you're thinking about hiring one, look for BORAQS registration, ask for references from clients whose projects have actually completed, and ask to see a redacted monthly cost report from a live job. The quality of that one document tells you almost everything you need to know.",
        ],
      },
    ],
  },
  {
    slug: "cost-of-building-a-home-nairobi",
    title: "The Real Cost of Building a Home in Nairobi Today",
    excerpt: "What a modest bungalow, a family home, and a high-end villa actually cost to build in and around Nairobi right now.",
    metaDescription: "Current benchmark costs for building a home in Nairobi, from bungalows to high-end villas, plus the hidden costs most first-time developers miss.",
    image: images.projectRiverside,
    category: "Client Guides",
    author: "Quantsol Editorial",
    date: "October 22, 2025",
    readTime: "7 min read",
    sections: [
      {
        paragraphs: [
          "One of the questions we hear most often from first-time home builders is the simplest, and it doesn't have a simple answer. What does it actually cost to build a house in Nairobi? The honest answer depends on the finishes you choose, the plot you build on, and how tightly the project is run. But we can give you working numbers that are close enough to plan against.",
        ],
      },
      {
        heading: "The three benchmark ranges",
        paragraphs: [
          "For a modest three-bedroom bungalow with standard finishes, on a serviced plot in a Nairobi satellite town like Kikuyu, Kitengela or Ruiru, current build costs sit around Ksh 45,000 to 60,000 per square metre. A 150 square metre bungalow lands in the region of Ksh 7 million to 9 million for the building alone.",
          "A family home in the middle range, four to five bedrooms with better finishes and some architectural character, typically prices between Ksh 65,000 and 90,000 per square metre. On 280 square metres, that's roughly Ksh 18 million to 25 million.",
          "At the high end, a villa in Karen, Runda or Kitisuru with imported finishes, custom joinery and full landscaping easily runs from Ksh 120,000 per square metre upwards. On 450 square metres, you're looking at Ksh 55 million and up.",
        ],
      },
      {
        heading: "The costs that catch people out",
        paragraphs: [
          "The building itself is only part of the number. First-time home builders are consistently surprised by what sits around it. Boundary walls and gates. Boreholes and water storage. Solar and backup power. Landscaping and driveways. Professional fees. Statutory approvals. Connection fees for water, power and sewer.",
          "Together, these can add anywhere from 15% to 30% on top of the pure building cost. On the family-home example above, that's Ksh 3 million to 7 million that most spreadsheets don't include on day one.",
        ],
      },
      {
        heading: "Where the money really goes",
        paragraphs: [
          "Inside the building, the biggest cost centres are usually finishes and services. Kitchens, bathrooms, floor finishes, joinery, electrical and mechanical services often add up to more than the entire structure. Two houses of the same size can differ by 30% or more purely on the finishes package.",
          "This is where value engineering pays off. Choosing locally available finishes over imported ones, standardising bathroom layouts so you can repeat the same specification, and buying in bulk during a single procurement window can shave real money off the final bill without visibly cheapening the house.",
        ],
      },
      {
        heading: "How to plan realistically",
        paragraphs: [
          "Before you buy the plot, get a rough cost plan built against the size and standard of house you actually want. Include the site works, the fees and the connections. Add a contingency of 10%. If the plot and the plan don't fit inside your budget with that contingency in place, adjust one of them now rather than later.",
          "If you'd like a proper cost plan for a home you're thinking about, that's exactly the kind of work our team handles. Have a look at the services page for details.",
        ],
      },
    ],
  },
  {
    slug: "feasibility-studies",
    title: "Feasibility Studies: The Step Most Developers Skip and Regret",
    excerpt: "The cheapest work you'll ever do on a project is deciding not to build the wrong version of it.",
    metaDescription: "Why feasibility studies matter for Kenyan property developments, and what a good one should cover before design commits any real money.",
    image: images.projectOffice,
    category: "Development",
    author: "Quantsol Editorial",
    date: "October 5, 2025",
    readTime: "6 min read",
    sections: [
      {
        paragraphs: [
          "If there's one part of a project that developers underinvest in, it's the feasibility study. The reasoning is usually the same. The land is bought, the idea is exciting, and paying a consultant to tell you whether it makes sense feels like an unnecessary detour. So the team skips straight to design, and the problem gets discovered eighteen months later, when the numbers stop working.",
          "The cheapest work you'll ever do on a project is deciding not to build the wrong version of it. That's the job a feasibility study does.",
        ],
      },
      {
        heading: "What a real feasibility study covers",
        paragraphs: [
          "A proper study answers four questions. What can actually be built on this site under the current zoning and physical constraints? What will it cost to build, at today's rates? What will it earn, either as sale value or as rental income over a defined holding period? And what does the resulting cash flow look like once financing, taxes and voids are properly modelled?",
          "The output isn't a glossy brochure. It's a spreadsheet you can actually stress-test, plus a written commentary that flags the assumptions the numbers rest on. If the study can't tell you what happens when interest rates rise 200 basis points or when the sale programme slips six months, it hasn't done its job.",
        ],
      },
      {
        heading: "The classic mistakes",
        paragraphs: [
          "The first is optimistic pricing. Developers assume they'll achieve the top end of the market's current sale range, and they assume the top end will hold for the full sale period. Both assumptions have been wrong more often than they've been right in recent years.",
          "The second is understating build cost. The BoQ hasn't been drawn up yet, so a rate per square metre gets plugged in. If that rate is stale by even 10%, the projected margin can vanish entirely.",
          "The third is ignoring soft costs. Professional fees, marketing, legal, financing and NHIF-type levies together often add up to more than 10% of the project value. Leaving them out of the model doesn't make them go away.",
        ],
      },
      {
        heading: "Using the study to make a decision",
        paragraphs: [
          "A good feasibility study gives you three possible answers, not one. Yes, build it. No, don't. Or yes, but only if we redesign in a specific direction. The third answer is the most valuable, because it turns a stalled project into a workable one.",
          "The rule of thumb we use is straightforward. If the numbers only work with everything going right, the project isn't feasible. If they still work when a couple of things go wrong, it is. Everything in between is a management decision about how much risk you're willing to carry.",
        ],
      },
    ],
  },
  {
    slug: "understanding-preliminaries",
    title: "Understanding Preliminaries: Where 10% of Your Budget Really Goes",
    excerpt: "Preliminaries look boring on a BoQ. They're where the contractor absorbs risk, which makes them one of the most important sections in the document.",
    metaDescription: "A clear explanation of construction preliminaries in Kenya, what they cover, and why they matter for cost control on any project.",
    image: images.bgSiteSupervision,
    category: "Cost Management",
    author: "Quantsol Editorial",
    date: "September 18, 2025",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "In almost every BoQ meeting we run with a new client, the same page gets skimmed over. Preliminaries. The client's eye drifts down to the concrete rates because those feel more real. But preliminaries are usually eight to fifteen per cent of the contract sum, and they're where the contractor absorbs the risk of running the site. Understanding them properly is one of the quickest wins a developer can have.",
        ],
      },
      {
        heading: "What's actually in there",
        paragraphs: [
          "Preliminaries cover everything the contractor needs to run the site without being tied to a specific measured item. Site offices, ablutions, storage, hoarding, temporary services, watchmen, cleaning, safety equipment, insurance premiums, performance bonds, site supervision staff, and general attendance for sub-contractors.",
          "Some of these are fixed costs that don't change if the project runs longer. Others are time-related, which means they cost more if the project overruns. That distinction matters when you get to prolongation claims later, so it's worth confirming which category each item sits in at tender stage.",
        ],
      },
      {
        heading: "Reading them like a professional",
        paragraphs: [
          "A healthy preliminaries figure on a Nairobi apartment block sits somewhere between eight and twelve per cent of the contract sum. On a small residential job it can climb to fifteen. On a large repetitive scheme like an affordable housing block, it can drop closer to seven.",
          "If a tender comes in with preliminaries at four per cent, don't celebrate. The work still has to be done, so the cost is hiding somewhere else in the bill, usually in inflated measured rates. If preliminaries come in at twenty per cent, ask why. It's often a contractor pricing in risk they don't want to say out loud.",
        ],
      },
      {
        heading: "Where they cause disputes",
        paragraphs: [
          "The two commonest fights over preliminaries are prolongation and acceleration. Prolongation is where the project overruns and the contractor claims the time-related preliminaries for the extra period. Acceleration is where the client asks for the project to be finished faster than the contract allows, and the contractor claims the extra resources needed to do it.",
          "Both are legitimate claims if they're properly evidenced. Both are impossible to argue about calmly if the preliminaries section was vague at tender stage. The prevention is a well-structured preliminaries schedule, agreed jointly, with fixed and time-related components clearly separated.",
        ],
      },
    ],
  },
  {
    slug: "provisional-and-pc-sums",
    title: "Provisional Sums and Prime Cost Sums, Demystified",
    excerpt: "These two little phrases in your BoQ are quietly responsible for a large share of every cost overrun on record.",
    metaDescription: "Understand provisional sums and prime cost sums in Kenyan BoQs, and how to control them so they don't turn into cost overruns.",
    image: images.bgBoqReview,
    category: "Cost Management",
    author: "Quantsol Editorial",
    date: "September 3, 2025",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "If you look through a Bill of Quantities long enough, you'll notice two phrases turning up in odd corners. \"Provisional sum\" and \"Prime cost sum\". They sound similar, they behave differently, and together they're quietly responsible for a large share of every cost overrun on record. It's worth spending five minutes understanding them properly.",
        ],
      },
      {
        heading: "Provisional sums",
        paragraphs: [
          "A provisional sum is a placeholder in the BoQ for work that hasn't been fully designed yet. The QS knows something will need to be built there, but the drawings aren't detailed enough to measure it, so a lump sum is included with a note explaining what it covers.",
          "The classic example is external works. At tender stage, the landscaping might not be designed, but a paved apron, a boundary wall and some planting will clearly be needed. So a provisional sum sits in the bill until a proper design and quotation replace it.",
          "The rule is simple. A provisional sum should never be spent as it stands. It must be expended against actual work priced at market rates, with a quotation or measured account behind it. Anything left over comes back to the client. Anything short is a variation.",
        ],
      },
      {
        heading: "Prime cost sums",
        paragraphs: [
          "A prime cost sum, usually written PC sum, is different. It's a placeholder for a specific supplied item the client wants to choose later. Ironmongery, kitchen appliances, a lift installation, a bespoke joinery package. The QS allocates a budget so the tender can be priced, and the actual supplier is selected during construction.",
          "The contractor gets an agreed profit and attendance percentage on top of the PC sum. When the actual invoice comes in, the difference between the budget and the real cost is settled as a variation.",
        ],
      },
      {
        heading: "How they cause overruns",
        paragraphs: [
          "The mechanism is the same for both. At tender stage, the sums look modest. Nobody's really scrutinising them, because they're not \"real\" costs yet. During construction, the actual designs and quotations come in higher than the placeholder, and by the time everyone notices, the increases have already been committed.",
          "On a Ksh 500 million project with Ksh 80 million of provisional and PC sums, a 25% slippage on those items alone adds Ksh 20 million to the bill. That's a common outcome on poorly monitored jobs.",
        ],
      },
      {
        heading: "How to keep control",
        paragraphs: [
          "Ask your QS to schedule every provisional and PC sum on a single page, updated monthly. Each row should show the original allowance, the current expected cost, and the reconciled position once quotations are in. Read that page every month. It's the single most useful early-warning signal a developer has, and it takes about five minutes.",
        ],
      },
    ],
  },
  {
    slug: "choosing-a-contractor",
    title: "How to Choose the Right Contractor in Kenya",
    excerpt: "The lowest tender isn't the cheapest project. Here's what to actually look at when you're picking a builder.",
    metaDescription: "How to evaluate and select a construction contractor in Kenya, including NCA registration, references, financial capacity, and tender interrogation.",
    image: images.projectMoran,
    category: "Procurement",
    author: "Quantsol Editorial",
    date: "August 20, 2025",
    readTime: "7 min read",
    sections: [
      {
        paragraphs: [
          "Every experienced developer will tell you the same thing. The lowest tender is almost never the cheapest project. Choosing a contractor on price alone is one of the most reliable ways to end up in a dispute, and yet it remains the default on a surprising share of Kenyan jobs.",
          "Here's a working framework for making the decision properly.",
        ],
      },
      {
        heading: "Start with registration",
        paragraphs: [
          "The National Construction Authority classifies contractors by category and financial capacity. NCA 1 handles the largest projects, and the scale drops from there. Confirm that a contractor's registration category actually covers the size of your project. If they're stretching two categories above their normal range, that's a red flag worth taking seriously.",
          "Confirm their annual return is filed and their registration is current. This is public information and it takes ten minutes to check.",
        ],
      },
      {
        heading: "Verify with references, not brochures",
        paragraphs: [
          "Ask for three completed projects of comparable value and complexity, and actually call the clients. The question that matters isn't \"would you recommend them?\", because most clients will say yes to avoid conflict. The question is \"what surprised you about working with them?\" That answer is usually revealing.",
          "Visit at least one live site. Watch how the site is organised. Look at the safety equipment, the material storage, the state of the site office. A tidy site under active management tells you far more than a printed capability statement.",
        ],
      },
      {
        heading: "Check the financials",
        paragraphs: [
          "The single most common cause of contractor failure in Kenya isn't incompetence. It's cash flow. A contractor who has priced too tight, or whose previous project is delaying their payment, will start slowing your job in month three. Ask for audited accounts. Ask what other projects they're running concurrently. If they can't or won't share this, that's your answer.",
        ],
      },
      {
        heading: "Interrogate the tender",
        paragraphs: [
          "A good tender evaluation looks at more than the bottom line. Item-by-item rate comparison against market benchmarks flags where a contractor has front-loaded or back-loaded their pricing. A programme review shows whether their proposed durations are actually achievable with the resources they're claiming. A methodology statement tells you whether they've thought about your site or just copied text from their last submission.",
          "Sometimes the second or third lowest tender is the one that finishes on budget, because the lowest bidder has priced in a fight. Your QS should be flagging that at evaluation stage, not after the contract has been awarded.",
        ],
      },
      {
        heading: "The final test",
        paragraphs: [
          "Before you sign, sit across the table from the person who will actually run your project. Not the sales director. The site agent. Ask them to walk you through the first six weeks. If they can do it credibly, in detail, without notes, you've probably found your contractor. If they can't, you've dodged a problem.",
        ],
      },
    ],
  },
  {
    slug: "value-engineering",
    title: "Value Engineering Without Cutting Corners",
    excerpt: "Done well, value engineering saves money without visibly cheapening the building. Done badly, it's just cost-cutting with a nicer name.",
    metaDescription: "How to apply value engineering to Kenyan construction projects to reduce cost without compromising quality or long-term performance.",
    image: images.projectSchoolLane,
    category: "Cost Management",
    author: "Quantsol Editorial",
    date: "August 5, 2025",
    readTime: "6 min read",
    sections: [
      {
        paragraphs: [
          "\"Value engineering\" is one of those phrases that gets used in two very different ways. Done well, it's the discipline of getting the same functional outcome for less money. Done badly, it's cost-cutting dressed up in a nicer name, and the building suffers for it. The difference matters, because the wrong approach usually costs more over the life of the building than it saved on day one.",
        ],
      },
      {
        heading: "Where the real savings live",
        paragraphs: [
          "The biggest opportunities are almost always structural and geometric, and they only exist early in design. A slab depth reduced by 25mm across a 5,000 square metre building saves a genuinely large amount of concrete and reinforcement. A slightly rationalised column grid can eliminate an entire set of beams. A revised floor-to-floor height can save an extra storey's worth of façade.",
          "None of these are visible in the finished building. All of them require the structural engineer, architect and QS to sit down together before design freezes. Miss that window and the same conversations become expensive.",
        ],
      },
      {
        heading: "Where the fake savings live",
        paragraphs: [
          "The savings that tend to come back and bite are almost always in the specification. Cheaper waterproofing that fails in two years and takes half the ground floor with it. Undersized air conditioning that runs constantly and burns power. Thin ironmongery that breaks. Cheap paints that need repainting during the defects period.",
          "The rule of thumb is straightforward. Cut cost on things you can replace easily and don't rely on. Don't cut cost on things that are embedded in the building or that carry consequences if they fail.",
        ],
      },
      {
        heading: "A practical checklist",
        paragraphs: [
          "Before signing off a value engineering exercise, ask four questions of every proposed change. Does this reduce the building's functional performance in any way that matters to the user? Does it increase the cost of operating or maintaining the building? Does it shorten the working life of any element? And does it create a warranty or insurance gap?",
          "If the honest answer to any of those is yes, the saving needs to be interrogated properly, not just recorded and moved past. The good exercises we run tend to find savings between three and seven per cent of the contract sum without touching any of those four points. When someone claims fifteen per cent, that's usually a sign of one of the failure modes above.",
        ],
      },
    ],
  },
  {
    slug: "retention-defects-final-account",
    title: "Retention, Defects Liability, and the Final Account",
    excerpt: "What actually happens after practical completion, and why the last five per cent of the money causes so much of the friction.",
    metaDescription: "Understand how retention money, the defects liability period, and the final account work on Kenyan construction contracts.",
    image: images.projectHacienda,
    category: "Contracts",
    author: "Quantsol Editorial",
    date: "July 22, 2025",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "Most developers focus on the money going out during construction. It's the last five per cent that tends to cause the most trouble. Retention, defects liability and final account are the three mechanisms that govern the closing chapter of a project, and understanding them properly saves everyone a great deal of grief.",
        ],
      },
      {
        heading: "Retention",
        paragraphs: [
          "Retention is the portion of each interim payment that the client holds back as security for defects and for the final account. On a standard JBC contract, it's usually five per cent of the value of work done, up to a cap of two and a half per cent of the contract sum.",
          "At practical completion, half of the retention is released to the contractor. The remaining half is held through the defects liability period, and released only once all defects have been rectified and the final account is agreed.",
        ],
      },
      {
        heading: "Defects liability period",
        paragraphs: [
          "The defects liability period is the window after practical completion during which the contractor remains responsible for fixing defects that emerge in the finished works. Six months is standard on smaller projects. Twelve months is more common on larger buildings and public works.",
          "This isn't a warranty on individual components. That comes from the manufacturers separately. It's specifically the contractor's obligation to return to site and fix workmanship problems at their own cost. A defects list is issued at the start of the period, updated as new items appear, and closed out at the end with a certificate of making good.",
        ],
      },
      {
        heading: "Final account",
        paragraphs: [
          "The final account reconciles everything. The contract sum, all agreed variations, all provisional and PC sum reconciliations, any fluctuations, any liquidated damages, and any loss and expense claims. When it's signed, the last of the retention is released and the contract ends.",
          "The reason final accounts drag on for months, sometimes years, is almost always the same. Variations weren't priced when they were instructed, so both sides are negotiating from memory rather than from record. The prevention is monthly discipline during construction, not a heroic effort at the end.",
        ],
      },
    ],
  },
  {
    slug: "ppp-housing",
    title: "Public-Private Partnerships in Kenyan Housing: What Actually Works",
    excerpt: "PPPs are the delivery model behind most large affordable housing schemes in Kenya. Here's how the mechanics actually work.",
    metaDescription: "How Public-Private Partnerships work for housing delivery in Kenya, including concession structures, offtake and cost verification.",
    image: images.projectHousing,
    category: "Policy & Markets",
    author: "Quantsol Editorial",
    date: "July 8, 2025",
    readTime: "8 min read",
    sections: [
      {
        paragraphs: [
          "Public-Private Partnerships have become the delivery model of choice for most large affordable housing projects in Kenya. The theory is elegant. Government provides land and offtake, a private consortium provides capital, design and construction, and everyone shares the risk and the reward. In practice, the mechanics are more complicated, and the projects that work well share a small set of characteristics.",
        ],
      },
      {
        heading: "How the structure actually works",
        paragraphs: [
          "A typical PPP housing scheme starts with a Special Purpose Vehicle set up by the private consortium. The SPV signs a project agreement with the contracting authority, usually a State Department or a county government, that grants it the right to build and either sell or lease units on public land for a defined period.",
          "The SPV raises debt and equity, appoints the design and construction team, and delivers the project. Revenue comes from either direct sales to qualifying buyers or from an offtake arrangement where the public partner takes the units. The concession period runs long enough for the SPV to service its debt and return equity, at which point the assets typically revert to the public partner.",
        ],
      },
      {
        heading: "Where the risk really sits",
        paragraphs: [
          "The formal risk matrix in a PPP agreement runs to dozens of pages. In practice, three risks matter more than all the others combined. Construction cost risk, which sits with the SPV. Offtake risk, which is shared depending on the structure. And political and regulatory risk, which is nominally shared but almost always ends up back with the private partner.",
          "The projects that succeed are the ones where these three risks have been priced honestly at financial close. The ones that struggle usually got optimistic on one of them, most often offtake.",
        ],
      },
      {
        heading: "The role of independent cost verification",
        paragraphs: [
          "Every serious PPP requires independent cost verification. The public partner needs to know that construction costs claimed by the SPV are real and defensible. Financiers need the same assurance. This is where the quantity surveyor becomes central, sitting between the SPV, the contractor and the lender, holding the audit trail that everyone else relies on.",
          "On a well-structured PPP, the cost verification report is issued monthly and reconciled against a fixed elemental cost plan. Deviations are flagged and explained in writing. This discipline is what makes the difference between a project that closes on time and one that stalls in dispute.",
        ],
      },
      {
        heading: "What to know before you enter one",
        paragraphs: [
          "If you're considering joining a housing PPP, three things matter more than the headline unit count. First, the offtake mechanism. If the public partner isn't taking the units, who is, and at what price? Second, the payment mechanism. When exactly does the SPV get paid, and against which milestones? Third, the exit. What happens if the concession runs into political change or macroeconomic disruption?",
          "Get honest answers on those three points before committing capital, and get them in the project agreement, not in a letter of comfort. Our team has advised on both the technical and cost verification sides of PPP projects. You can start that conversation on the contact page.",
        ],
      },
    ],
  },
  {
    slug: "sustainable-construction-kenya",
    title: "Sustainable Construction in Kenya: What It Costs and What It Saves",
    excerpt: "Green building doesn't have to mean expensive imports and glossy certifications. Here's what actually pays back in the Kenyan climate.",
    metaDescription: "Practical sustainable construction strategies for Kenya, including passive design, water reuse, solar, and their real cost and payback.",
    image: images.projectAeroclub,
    category: "Sustainability",
    author: "Quantsol Editorial",
    date: "June 24, 2025",
    readTime: "7 min read",
    sections: [
      {
        paragraphs: [
          "Sustainable construction in Kenya has a marketing problem. The word conjures up expensive imported systems, glossy certifications, and a premium the developer will never earn back. In reality, a lot of what makes a building sustainable in the Kenyan climate is cheap, well-understood, and pays back within a few years. The challenge is knowing which measures actually work here and which are marketing.",
        ],
      },
      {
        heading: "Passive design comes first",
        paragraphs: [
          "The most powerful sustainability decisions are made before any equipment is specified. Building orientation, window-to-wall ratios, roof overhangs, cross-ventilation and thermal mass reduce the amount of cooling and lighting a building needs in the first place. On a well-designed office in Nairobi, these choices can cut operational energy demand by thirty to forty per cent at essentially no capital cost.",
          "Coastal projects need a different approach. Salt-laden air, higher humidity and stronger direct sun demand tighter attention to material selection and shading. What works in Karen won't necessarily work in Nyali.",
        ],
      },
      {
        heading: "Water is often the bigger win",
        paragraphs: [
          "In much of Kenya, water is a more binding constraint than energy. Rainwater harvesting, greywater reuse for landscape irrigation, and low-flow fittings usually pay back faster than most energy measures. The capital cost is modest, and the operational saving is direct, particularly on sites with unreliable municipal supply.",
          "A simple 20 cubic metre rainwater tank on a Nairobi home typically pays back its installed cost within three or four years, and provides genuine resilience during dry seasons.",
        ],
      },
      {
        heading: "Solar, sensibly sized",
        paragraphs: [
          "Solar photovoltaics have dropped in price to the point where a rooftop PV system on a commercial building in Kenya usually pays back inside seven years, sometimes faster. The trap is oversizing. A PV system designed for peak load rather than average load costs a great deal more and rarely delivers proportionally more value.",
          "The right sizing exercise looks at the building's actual load profile against the diurnal solar curve, and matches the array to the hours where consumption and generation overlap. A properly sized system might be smaller than the roof allows, and that's often the right answer.",
        ],
      },
      {
        heading: "Certifications, honestly",
        paragraphs: [
          "EDGE, LEED and Green Star all have their place. If your building is going to be leased to an international tenant who values certification, the premium can be recovered in rent. If it isn't, the certification cost may exceed the direct value it creates.",
          "Our advice to clients is to design to the standard, apply the measures that pay back, and pursue the certificate only where it earns its keep. Most of the sustainability value is captured either way.",
        ],
      },
    ],
  },
  {
    slug: "interim-payment-certificates",
    title: "Interim Payment Certificates: What Every Developer Should Understand",
    excerpt: "The monthly certificate is the single most important routine document on a construction project. Here's how to read one properly.",
    metaDescription: "How interim payment certificates work on Kenyan construction contracts, what they include, and how developers should review them each month.",
    image: images.bgDigitalEstimation,
    category: "Contracts",
    author: "Quantsol Editorial",
    date: "June 10, 2025",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "On a running construction project, one document arrives in your inbox every month and quietly decides whether the job stays on track. The interim payment certificate. It's usually two or three pages, and most clients skim it before authorising payment. Learning to read it properly is one of the highest-leverage habits a developer can build.",
        ],
      },
      {
        heading: "What's actually on the certificate",
        paragraphs: [
          "A typical certificate shows the contract sum, the total value of work executed to date, the value of materials on site not yet incorporated, the amount of previously certified payments, the retention held, and the net sum now due. Beneath these headlines sits a section-by-section measurement, usually aligned to the BoQ, showing where the work has actually happened this month.",
          "The QS values the work jointly with the contractor before the certificate is issued. The architect or contract administrator then formally certifies it, and the client releases payment within the period the contract specifies, typically fourteen or twenty-one days.",
        ],
      },
      {
        heading: "What to check every month",
        paragraphs: [
          "Compare cumulative work done to the programme. If certified value is running well ahead of programmed progress, the contractor may be front-loading. If it's running behind, the project is slipping. Either signal is worth a conversation before you sign.",
          "Look at materials on site. This is money paid for materials the contractor has bought but not yet built into the works. It's normal, but it should never grow without limit. If it starts creeping up month on month, ask why.",
          "Review the running total of variations. Variations tend to sneak in without much fanfare, and it's the certificate that shows their cumulative impact on the contract sum. A variations total drifting upwards without corresponding written orders is a warning sign.",
        ],
      },
      {
        heading: "The relationship with cash flow",
        paragraphs: [
          "For most developers, the certificates are also the primary link between the site and their financing. A late or incorrect certificate can trigger a delay in drawdown, which cascades into a payment delay for the contractor, which slows the site. That loop happens more often than it should, and it almost always starts with a certificate that wasn't reviewed properly on the client side.",
          "Set a routine. Every month, in the same week, the certificate arrives, the QS provides a short covering memo, and the developer signs off within seventy-two hours. It's a small investment in structure that saves a great deal of drama later.",
        ],
      },
    ],
  },
  {
    slug: "managing-design-changes",
    title: "Managing Design Changes Without Blowing the Budget",
    excerpt: "Every project has changes. The successful ones price them before they happen. The struggling ones price them at final account.",
    metaDescription: "How to manage design changes and variations on Kenyan construction projects without losing cost control or programme.",
    image: images.projectMayfairFitout,
    category: "Project Management",
    author: "Quantsol Editorial",
    date: "May 28, 2025",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "There's a myth in construction that a well-run project doesn't have changes. It's not true. Every project has changes, because reality on site rarely matches the drawing exactly, and because clients discover what they actually want part-way through. The projects that finish on budget aren't the ones without changes. They're the ones that priced each change before it happened.",
        ],
      },
      {
        heading: "The mechanics of a variation",
        paragraphs: [
          "A variation is any instructed change to the scope, quality or timing of the works. Under a JBC contract, only the contract administrator can issue one, and it should be in writing. The QS values it, ideally against BoQ rates where the work is similar, or at a fair market rate where it isn't. The contractor executes it, and it flows through into the next interim certificate.",
          "That sequence, in that order, is what protects both sides. When any step is skipped, the argument gets postponed rather than avoided.",
        ],
      },
      {
        heading: "Why the sequence breaks",
        paragraphs: [
          "The commonest failure is verbal instructions. A client walks the site, mentions a change to the site agent, and the contractor implements it without a written order. Three months later, when the value shows up on a certificate, the client disputes it. Nobody's really lying. There just isn't a record.",
          "The second failure is pricing after execution. Once work has been built, the contractor holds all the leverage, because the alternative is undoing it. Rates negotiated in this position are almost always higher than rates negotiated before execution.",
        ],
      },
      {
        heading: "A workable discipline",
        paragraphs: [
          "Agree at the start of the project that no change is executed without a written variation order and an agreed price. Give the QS twenty-four to forty-eight hours to price it. If the change is genuinely urgent, price it provisionally on a target cost basis with a firm ceiling, and reconcile later.",
          "Keep a variations register that's updated weekly and reviewed monthly. It should show, for every variation, the description, the value, the effect on programme, and whether it's been executed. This one document, kept diligently, is worth more than any contract clause when a dispute is looming.",
        ],
      },
    ],
  },
  {
    slug: "nca-registration",
    title: "The NCA and What Contractor Registration Actually Guarantees",
    excerpt: "National Construction Authority registration is a starting point, not a warranty. Here's what the categories mean and what to check beyond them.",
    metaDescription: "What NCA registration means for Kenyan contractors, what the categories cover, and what developers should verify beyond the registration itself.",
    image: images.projectHacienda,
    category: "Procurement",
    author: "Quantsol Editorial",
    date: "May 14, 2025",
    readTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "The National Construction Authority publishes a register of contractors ranked by financial capacity and specialisation. It's the first check most developers make, and rightly so. But the register is a starting point, not a warranty, and understanding what it does and doesn't guarantee helps you use it well.",
        ],
      },
      {
        heading: "What the categories mean",
        paragraphs: [
          "NCA categories run from one down to eight for building works, with parallel scales for civil, electrical, mechanical and specialist works. Category NCA 1 covers the largest projects, with no upper limit on contract value. Category NCA 8 covers small works, typically below Ksh 5 million. The categorisation is based on a mix of paid-up capital, technical staff, past performance and equipment holding.",
          "When a contractor is registered in a given category, they're formally permitted to tender for projects within that category's value bracket. Some categories also require specific technical certifications for specialist works.",
        ],
      },
      {
        heading: "What registration doesn't guarantee",
        paragraphs: [
          "Registration confirms that a contractor met the criteria at the point of application or renewal. It doesn't confirm that they're currently financially healthy, that their key staff still work there, or that their last five projects finished well. Registration also doesn't verify that the contractor has the specific experience relevant to your project type.",
          "A contractor registered NCA 3 for buildings might have built ten office blocks and no hospitals. If you're building a hospital, that's important information, and it isn't in the register.",
        ],
      },
      {
        heading: "What to check yourself",
        paragraphs: [
          "Confirm the registration is current by checking directly on the NCA portal. Ask for the annual return and the last audited accounts. Get a list of the last five completed projects with client contacts. Verify the technical staff listed on the registration are actually still employed and available for your project.",
          "None of these checks are exotic, and none of them take long. But collectively they close the gap between what NCA registration formally guarantees and what you actually need to know before you sign a contract.",
        ],
      },
    ],
  },
  {
    slug: "facilities-management-after-handover",
    title: "Facilities Management: The Chapter That Starts After Handover",
    excerpt: "The building's cost curve doesn't end at practical completion. Over its life, operating and maintaining it costs more than building it.",
    metaDescription: "Why facilities management matters for property owners in Kenya, and how planned maintenance and asset management protect long-term value.",
    image: images.projectBankFitout,
    category: "Facilities Management",
    author: "Quantsol Editorial",
    date: "April 30, 2025",
    readTime: "6 min read",
    sections: [
      {
        paragraphs: [
          "For a typical commercial building in Kenya, the total cost of construction is a fraction of what the owner will spend operating and maintaining it over its life. Studies place the long-term operational and maintenance costs at somewhere between two and four times the original build cost, depending on the building type and how well it's run. Yet facilities management still tends to be an afterthought on most projects, and the cost of that afterthought is real.",
        ],
      },
      {
        heading: "What facilities management actually covers",
        paragraphs: [
          "Facilities management is the discipline of keeping a building performing after handover. It covers planned preventive maintenance of mechanical, electrical and plumbing systems, cleaning and hygiene, security, waste management, energy monitoring, space planning, and vendor management for everything from lift servicing to landscape maintenance.",
          "Done well, it extends the life of the building, reduces unplanned failures, and keeps operating costs predictable. Done poorly, it turns a good building into a source of continuous small emergencies, each one more expensive than it needed to be.",
        ],
      },
      {
        heading: "The handover moment",
        paragraphs: [
          "The most important facilities management decision is often made at handover. If the operations team receives a complete set of as-built drawings, equipment manuals, warranty documents, testing certificates and a planned maintenance schedule, they can run the building properly from day one. If they receive a bunch of keys and a phone number for the contractor, they'll spend the next two years learning the building the hard way.",
          "A structured handover, sometimes called soft landings, bridges the gap between the construction team and the operations team. It's one of the highest-return activities on any project, and it usually costs a rounding error compared to what it saves.",
        ],
      },
      {
        heading: "Planned versus reactive maintenance",
        paragraphs: [
          "A building on planned preventive maintenance typically spends significantly less on maintenance over its life than a building run reactively. The mechanism is straightforward. Servicing an air conditioning unit annually costs a few thousand shillings. Replacing it after failure costs several hundred thousand, plus whatever business disruption happens in the meantime.",
          "The same logic applies to lifts, generators, water systems, roofing and external works. A written planned maintenance schedule, with clear responsibilities and a budget, pays for itself many times over.",
        ],
      },
      {
        heading: "Getting the model right",
        paragraphs: [
          "There are three broad models. In-house teams, single-provider outsourcing, or a managing agent coordinating specialist contractors. Each has its place, and the right choice depends on the size and complexity of the portfolio. What matters more than the model is that someone owns the outcome, reports on it monthly, and holds the budget accountable to the plan.",
          "If you'd like a facilities management strategy built for a building you own or manage, that's part of the work we do. Have a look at the services page for details.",
        ],
      },
    ],
  },
];

const faqs = [
  {
    q: "What does a quantity surveyor do that an architect or engineer can't?",
    a: "The architect designs the building. The engineer makes sure it stands up. The QS makes sure the money works, from feasibility all the way through to final account. It's a specialised financial and contractual role that protects your budget at every stage, and it's a legal requirement on any project of meaningful size in Kenya.",
  },
  {
    q: "How early should I bring a QS onto a project?",
    a: "Ideally at the very start, before the design is complete. The earliest cost decisions are the most important ones, and once the design has committed to a particular structural approach or a particular finish level, the QS is working within constraints rather than shaping them. Early involvement almost always pays for itself several times over.",
  },
  {
    q: "What's the difference between a cost estimate, a cost plan, and a BoQ?",
    a: "A cost estimate is a rough order-of-magnitude figure produced at concept stage, usually per square metre. A cost plan breaks that figure down by building element and sets a target for each. A Bill of Quantities is the fully measured, itemised document produced from developed drawings and used to procure a contractor. Each one builds on the last.",
  },
  {
    q: "Are BORAQS registration and NCA registration the same thing?",
    a: "No. BORAQS registers individual professionals under the Architects and Quantity Surveyors Act, Cap 525. It's the licence that lets a QS sign off on statutory documents. NCA registration is for contractors, and it categorises their financial and technical capacity to undertake works. A well-run project usually needs both.",
  },
  {
    q: "Can Quantsol work on projects outside Nairobi?",
    a: "Yes. We've delivered projects across Kenya and in Rwanda, from residential developments in Nairobi and its satellite towns to institutional works in the coastal region and civil works in the north-east. Our portfolio page has examples of the range.",
  },
];

const InsightsPage = () => {
  const [selected, setSelected] = useState<Article | null>(null);

  if (selected) {
    const related = articles.filter((a) => a.slug !== selected.slug && a.category === selected.category).slice(0, 3);
    const fallbackRelated = articles.filter((a) => a.slug !== selected.slug).slice(0, 3);
    const relatedList = related.length > 0 ? related : fallbackRelated;

    return (
      <main>
        <SEO
          title={`${selected.title} — Quantsol Insights`}
          description={selected.metaDescription}
          path="/insights"
        />
        <article className="pt-32 md:pt-40 pb-24 md:pb-32">
          <div className="section-container max-w-3xl">
            <button
              onClick={() => { setSelected(null); window.scrollTo(0, 0); }}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold hover:text-accent transition-colors mb-16 md:mb-20"
            >
              <ArrowLeft size={14} /> Back to Insights
            </button>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold block">{selected.category}</span>
            <div className="gold-line mt-6 mb-8" />
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-balance mb-8 md:mb-10 leading-[1.15]">
              {selected.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground mb-12 md:mb-16">
              <span className="inline-flex items-center gap-2"><User size={12} /> {selected.author}</span>
              <span className="inline-flex items-center gap-2"><Calendar size={12} /> {selected.date}</span>
              <span className="inline-flex items-center gap-2"><Clock size={12} /> {selected.readTime}</span>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden mb-14 md:mb-16">
              <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
            </div>
            <div className="space-y-12 md:space-y-14">
              {selected.sections.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-6 leading-snug">
                      {section.heading}
                    </h2>
                  )}
                  <div className="space-y-6 md:space-y-7">
                    {section.paragraphs.map((p, j) => (
                      <p key={j} className="text-base md:text-lg leading-[1.8] text-foreground/85">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Internal links */}
            <div className="mt-20 md:mt-24 p-8 md:p-10 bg-surface border-l-2 border-gold">
              <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-5">Related Pages</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
                <Link to="/services" className="text-foreground hover:text-accent transition-colors">Our Services</Link>
                <Link to="/portfolio" className="text-foreground hover:text-accent transition-colors">Project Portfolio</Link>
                <Link to="/about" className="text-foreground hover:text-accent transition-colors">About Quantsol</Link>
                <Link to="/contact" className="text-foreground hover:text-accent transition-colors">Contact the Team</Link>
              </div>
            </div>

            <div className="mt-16 md:mt-20 pt-10 md:pt-12 border-t border-border">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-accent/90 transition-colors"
              >
                Discuss Your Project <ArrowRight size={14} />
              </Link>
            </div>

            {/* Related articles */}
            {relatedList.length > 0 && (
              <div className="mt-20 md:mt-24">
                <h3 className="text-sm font-semibold tracking-widest uppercase text-gold mb-8">Keep Reading</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedList.map((r) => (
                    <button
                      key={r.slug}
                      onClick={() => { setSelected(r); window.scrollTo(0, 0); }}
                      className="text-left group"
                    >
                      <div className="aspect-[16/10] overflow-hidden mb-4">
                        <img src={r.image} alt={r.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      </div>
                      <p className="text-[10px] font-mono tracking-widest text-accent uppercase mb-3">{r.category}</p>
                      <h4 className="text-sm font-semibold leading-snug group-hover:text-accent transition-colors">{r.title}</h4>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
    );
  }


  return (
    <main>
      <SEO
        title="Insights — Kenyan Construction, Cost Management & Development"
        description="Practical articles and market commentary on quantity surveying, project management, contracts and property development in Kenya, written by the Quantsol team."
        path="/insights"
      />
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="section-container">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Insights</span>
            <div className="gold-line mt-4 mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground max-w-3xl">
              Notes from Kenya's Built Environment
            </h1>
            <p className="text-primary-foreground/70 text-lg mt-6 max-w-2xl leading-relaxed">
              A monthly series of notes on how projects actually get built, priced, and delivered in Kenya. Written for developers, contractors, and institutional clients who want the working version rather than the marketing one.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <ScrollReveal key={a.slug} delay={(i % 3) * 0.08}>
                <button
                  onClick={() => { setSelected(a); window.scrollTo(0, 0); }}
                  className="group text-left w-full h-full flex flex-col bg-card card-hover overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 bg-navy/80 text-primary-foreground text-[10px] font-mono tracking-wider px-3 py-1 uppercase">
                      {a.category}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-[11px] text-muted-foreground mb-3">
                      <span className="inline-flex items-center gap-1.5"><Calendar size={11} />{a.date}</span>
                      <span className="inline-flex items-center gap-1.5"><Clock size={11} />{a.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight mb-3 group-hover:text-accent transition-colors leading-snug">
                      {a.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {a.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold tracking-widest uppercase group-hover:gap-3 transition-all">
                      Read Article <ArrowRight size={12} />
                    </span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface">
        <div className="section-container max-w-3xl">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Common Questions</span>
            <div className="gold-line mt-4 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
              Answers to the questions we hear most
            </h2>
          </ScrollReveal>
          <div className="flex flex-col gap-8">
            {faqs.map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="border-l-2 border-gold pl-6">
                  <h3 className="text-lg font-semibold mb-3">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">Have a question we haven't answered? Ask the team directly.</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-8 py-3 text-xs font-semibold tracking-widest uppercase hover:bg-accent/90 transition-colors"
              >
                Get in Touch <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* JSON-LD FAQ schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </main>
  );
};

export default InsightsPage;
