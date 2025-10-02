import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert">
          <h1>Privacy Policy</h1>
          <p>
            This website provides information about Sri Lakshmi Venkateshwara Swamy Temple and its activities.
            We do not collect personal information unless you voluntarily share it with us via contact forms or
            donations. Any shared information is used solely for temple-related communications and services.
          </p>
          <h2>Donations</h2>
          <p>
            Donations are processed through the official channels of Shri Lakshmi Venkateshwara Swami Charitable Trust.
            Please contact the temple office for receipts or questions related to transactions.
          </p>
          <h2>Contact</h2>
          <p>
            Address: Shri Lakshmi Venkateshwara Swami Charitable Trust, Gottikere, Turuvekere Taluq, Tumkur Dist.
            Karnataka - 572 227. Phone: 08139 - 200504 | Mobile: 63639 95694.
          </p>
          <p>For any privacy-related queries, please reach out to the temple office.</p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
