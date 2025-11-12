export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gradient mb-6">
            Chronic Fatigue Protocol
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
            Phase 1 Complete: Foundation & Layout ✓
          </p>
          <div className="max-w-3xl mx-auto text-left bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">What&apos;s Built So Far:</h2>
            <ul className="space-y-2 text-neutral-700">
              <li>✓ Next.js 15 with TypeScript</li>
              <li>✓ Tailwind CSS with custom design system</li>
              <li>✓ Battery Logo component (Modern Slim design)</li>
              <li>✓ Pillar Icons (using Lucide)</li>
              <li>✓ Navigation with scroll effects & backdrop blur</li>
              <li>✓ Footer with all links</li>
              <li>✓ UI Components (Button, Card, Input, Badge)</li>
              <li>✓ Animation utilities (Framer Motion)</li>
            </ul>
            <p className="mt-6 text-sm text-neutral-600">
              Next up: Homepage sections (Hero, Pillars, Newsletter CTA, etc.)
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
