import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Us</h1>

          <div className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=500&width=1000"
              alt="Team photo"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              We're a team of passionate individuals dedicated to creating exceptional products that help our customers
              succeed.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card rounded-xl p-4 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=200&width=200&text=Team Member ${i}`}
                      alt={`Team member ${i}`}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-medium text-lg">Team Member {i}</h3>
                  <p className="text-sm text-muted-foreground">Position</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

