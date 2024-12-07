import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"
import Image from "next/image"
import img1 from "@/assets/img1.jpeg"
import img2 from "@/assets/img2.jpeg"
import img3 from "@/assets/img3.jpeg"
import img4 from "@/assets/img4.jpeg"
import { Navbar } from '@/components/navbar';


export function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-primary/80">
          <div className="container px-4 md:px-6 text-center text-primary-foreground">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Effortless Document Summarization
              </h1>
              <p className="max-w-[700px] mx-auto text-lg md:text-xl">
                Unlock the power of AI-driven document summarization. Streamline your research, save time, and stay
                informed.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="/summarize"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-primary px-8 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <RocketIcon className="mr-2 h-4 w-4" />
                  Try Now
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Introduction</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Streamline Your Research with Summarizer
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Summarizer is a powerful document summarization tool that uses advanced AI algorithms to quickly and
                  accurately summarize long documents, saving you time and effort. Whether you're a researcher, student,
                  or professional, Summarizer can help you stay informed and focused.
                </p>
              </div>
              <div className="flex w-full h-[25em] overflow-hidden rounded-lg object-cover object-center sm:w-full lg:order-last">
                <Image
                  src={img1}
                  alt="Introduction"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex w-full h-[25em] overflow-hidden rounded-lg object-cover object-center sm:w-full lg:order-last">
                <Image
                  src={img2}
                  alt="How It Works"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">How It Works</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Unlock the Power of AI-Driven Summarization
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Summarizer uses advanced natural language processing and machine learning algorithms to quickly and
                  accurately summarize long documents, extracting the key points and insights. Simply upload your
                  document, and Summarizer will provide a concise summary, allowing you to quickly grasp the essential
                  information.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Unlock the Power of Summarizer
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Summarizer offers a range of powerful features to help you streamline your research and stay informed.
                  From lightning-fast document summarization to customizable output, Summarizer is designed to fit
                  seamlessly into your workflow.
                </p>
                <ul className="grid gap-4">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Accurate and concise document summaries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Customizable summary length and format</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Intuitive user interface and easy-to-use platform</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Secure and private document storage</span>
                  </li>
                </ul>
              </div>
              <div className="flex w-full h-[25em] overflow-hidden rounded-lg object-cover object-center sm:w-full lg:order-last">
                <Image
                  src={img3}
                  alt="How It Works"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied customers and learn how Summarizer has transformed their research and
                  productivity.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <h3 className="text-xl font-bold">Olivia Martin</h3>
                    <p className="text-muted-foreground">
                      "Summarizer has been a game-changer for my research. The summaries are accurate and concise, saving
                      me hours of reading time."
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <h3 className="text-xl font-bold">Michael Johnson</h3>
                    <p className="text-muted-foreground">
                      "As a busy professional, I rely on Summarizer to keep me informed on the latest industry trends and
                      developments. It&apos;s an essential tool in my workflow."
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <h3 className="text-xl font-bold">Emily Nguyen</h3>
                    <p className="text-muted-foreground">
                      &quot;I&apos;m impressed by the level of detail and accuracy in the Summarizer summaries. It&apos;s helped me stay
                      on top of my coursework and research projects.&quot;
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-full h-[25em] overflow-hidden rounded-lg object-cover object-center sm:w-full lg:order-last">
                <Image
                  src={img4}
                  alt="Testimonials"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Streamline Your Research?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Sign up for Summarizer today and start unlocking the power of AI-driven document summarization.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By signing up, you agree to our{" "}
                  <Link href="#" className="underline underline-offset-2" prefetch={false}>
                    Terms of Service
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">Copyright &copy; 2024 Summarizer. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground" prefetch={false}>
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}



function RocketIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}