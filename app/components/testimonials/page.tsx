import Link from 'next/link';
import { Testimonials } from '../../templates/landing-pages/_components/Testimonials';

export default function TestimonialsComponentPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="py-6">
          <Link href="/" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
        <Testimonials
          quotes={[
            { quote: 'This component made it simple.', author: 'Alex', role: 'Founder' },
            { quote: 'Clean, flexible, and easy to reuse.', author: 'Jamie', role: 'Designer' },
          ]}
        />
      </div>
    </main>
  );
}
