You are an expert full-stack developer, UI/UX designer, and performance optimization specialist. Your task is to generate two separate but visually identical portfolio websites using modern frameworks, following the exact specifications below. Do not combine the projects. Generate the complete file structure, configuration, components, routing, and styling from scratch. Handle all framework-specific setup internally.

**Execution Order & Project Architecture**
- Create a root directory containing exactly two subfolders: NextJS and Astro
- First, fully implement the Next.js project inside the NextJS folder. Ensure it uses the App Router architecture with the project structure placed directly at the root of that folder, meaning no src directory should be created or used
- Once the Next.js implementation is complete and verified, implement the Astro project inside the Astro folder using standard Astro routing and configuration
- Both projects must operate independently but output identical visual designs, spacing, typography, and component behavior

**Tech Stack & Component Configuration**
- Use Tailwind CSS as the foundational styling engine in both projects
- Integrate shadcn/ui for component architecture, properly configured for each framework's constraints
- Utilize Radix UI primitives extensively throughout the UI and map them to shadcn components where applicable
- Use react-icons and lucide-react for all iconography across both projects
- Only use framer-motion or gsap if strictly necessary for complex scroll-triggered reveals or micro-interactions. Prioritize native CSS transitions and Tailwind animation utilities for better performance
- Ensure full accessibility compliance, keyboard navigation, and semantic HTML structure

**Global Layout & Shared Components (Required on Every Page)**
- Sticky floating navbar positioned at the top-right of the viewport, with smooth scroll behavior and active state indicators
- Responsive footer with consistent layout, copyright info, quick links, and social anchors
- Collapsible sidebar that toggles open and closed, containing primary navigation, quick filters, or supplementary portfolio metadata
- Custom right-click context menu that overrides the native browser menu, featuring relevant actions like navigation shortcuts, theme toggle, and quick contact
- Implement a shared layout wrapper in each framework that injects these global components consistently without layout shift

**Page Specifications**
- Home: Feature a prominent, visually rich Hero section with layered typography, skill highlights, project previews, and clear call-to-action elements
- Personal Details: Structured resume-style layout displaying experience timeline, education, certifications, technical stack, and achievements. Use Radix-based tabs, accordions, or data cards to keep it dense but highly scannable
- Contact: Fully functional contact form with validation, direct email and phone links, social profiles, availability indicator, and subtle micro-interactions
- About This Site: Explains the dual-framework architecture, design philosophy, navigation instructions, tech stack credits, and version changelog section
- All pages must share identical routing structure patterns adapted to each framework's conventions

**Design System & Aesthetic Directives**
- Explicitly avoid minimalism. The design must be compact, information-dense, and modern
- Use layered cards, subtle gradients, controlled glassmorphism, strategic depth, clear visual boundaries, and purposeful contrast
- Maintain a premium portfolio aesthetic with strong typography hierarchy, consistent spacing rhythm, and polished hover/focus states
- Ensure the layout feels tightly structured and visually rich without becoming cluttered
- Guarantee identical visual output across both frameworks by strictly adhering to the same token values, component sizing, and spacing rules

**Mobile Responsiveness & Performance Optimization**
- Enforce a mobile-first responsive strategy with fluid breakpoints, touch-friendly tap targets, and adaptive layouts for the sidebar, navbar, and grid structures
- Optimize for maximum page speed: implement code splitting, lazy-load below-the-fold content, use next/image or Astro image optimization, defer non-critical JavaScript, minimize bundle size, and leverage CSS over JS animations wherever possible
- Ensure fast initial load times, minimal Cumulative Layout Shift, and efficient resource caching strategies appropriate to each framework

**AI Execution & Output Requirements**
- Generate the complete directory structure and all necessary files for both projects in the specified order
- Handle framework-specific routing, Tailwind configuration, shadcn setup, and Radix UI integration correctly for Next.js and Astro respectively
- Provide realistic mock content, placeholder assets, and fully functional component logic instead of empty templates
- Ensure both projects are production-ready, fully responsive, and optimized for Core Web Vitals
- Output clear, step-by-step instructions on how to install dependencies, configure environment variables, and run both projects locally after generation
- Do not skip configuration steps. Every file should be complete, functional, and ready to render without manual patching
- Do not include any code blocks or terminal commands in your response. Let the AI coding app handle the actual file generation and execution

Proceed with generating the complete implementation following these directives exactly.
