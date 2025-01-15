import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { route } from "@/config/site";
import LanguageMenuItems from "@/features/language/components/LanguageMenuItems";
import ClientThemeToggleButton from "@/features/theme/components/ClientThemeToggleButton";
import ThemeIcon from "@/features/theme/components/ThemeIcon";
import { Link } from "@/i18n/routing";
import {
  CheckCircle,
  Cloud,
  Globe,
  Heart,
  List,
  MessageCircle,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Quicksand } from "next/font/google";
import Image from "next/image";

const quicksand = Quicksand({ subsets: ["latin"] });

interface Props {
  params: { locale: string };
}

export default async function LandingPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  const t = await getTranslations("Components.language-select");

  return (
    <div className="flex w-full flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="mr-4 flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <Image
                src="/assets/icon.svg"
                width={32}
                height={32}
                alt="Daisy Logo"
              />
              <span className="inline-block font-bold">Daisy</span>
            </Link>
            <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
              <Link href="#features">Features</Link>
              <Link href="#about">About</Link>
              <Link href="#pricing">Pricing</Link>
              <Link href="#security">Security</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  {/* <button className="flex w-full items-center gap-4 px-4 py-3 text-left focus:outline-none"> */}
                  <button>
                    <Globe className="size-5" />
                  </button>
                  {/* <span className="">{t("language")}</span> */}
                  {/* </button> */}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuLabel>{t("language")}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <LanguageMenuItems />
                </DropdownMenuContent>
              </DropdownMenu>
              <ClientThemeToggleButton>
                <ThemeIcon className="size-5" />
              </ClientThemeToggleButton>
            </div>

            <Link href={route.welcome}>
              <Button size="sm">Get started</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="mx-auto w-full max-w-6xl py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">
              <div className="flex max-w-xl flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Meet Daisy: Your All-in-One AI-Powered Personal Assistant
                  </h1>
                  <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                    Daisy is more than just an app – it's your personal
                    companion designed to help you thrive.
                  </p>
                </div>
                <Button size="lg">Download Now</Button>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/daisy.svg"
                  width={400}
                  height={600}
                  alt="Daisy App Dashboard"
                  className="max-w-56 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full bg-primary/25 py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose Daisy?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <FeatureCard
                icon={<List className="mb-4 h-10 w-10 text-primary" />}
                title="Task Management Made Simple"
                description="Stay on top of your to-do list with smart reminders and notifications that keep you organized and focused."
                image="/placeholder.svg?height=200&width=350"
              />
              <FeatureCard
                icon={<MessageCircle className="mb-4 h-10 w-10 text-primary" />}
                title="Journaling for Clarity"
                description="Reflect on your day, track your emotions, and build mindfulness habits with ease."
                image="/placeholder.svg?height=200&width=350"
              />
              <FeatureCard
                icon={<Heart className="mb-4 h-10 w-10 text-primary" />}
                title="Mental Health Support"
                description="Need someone to talk to? Daisy offers a safe, judgment-free space for meaningful conversations and actionable advice."
                image="/placeholder.svg?height=200&width=350"
              />
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="w-full space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Your Trusted Pocket Coach
                </h2>
                <p className="max-w-lg text-gray-600 dark:text-gray-400 md:text-lg lg:text-xl">
                  Daisy combines the intelligence of AI with a compassionate
                  touch, acting as your personal coach, trainer, and
                  cheerleader. From helping you set goals to celebrating your
                  milestones, Daisy is always in your corner.
                </p>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Personalized Guidance
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Daisy gets to know you—your goals, habits, and
                      preferences— offering tailored advice to enhance your
                      routine, improve wellness, and unlock personal growth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Daisy Personalized Guidance"
                  className="rounded-xl object-cover shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full bg-primary/25 py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Choose Your Daisy Plan
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <PricingCard
                title="Basic"
                price="$9.99"
                description="Perfect for getting started with Daisy"
                features={[
                  "Task Management",
                  "Basic Journaling",
                  "Daily Check-ins",
                  "Limited AI Interactions",
                ]}
              />
              <PricingCard
                title="Pro"
                price="$19.99"
                description="Unlock Daisy's full potential"
                features={[
                  "Advanced Task Management",
                  "Unlimited Journaling",
                  "Personalized Insights",
                  "Unlimited AI Interactions",
                  "Goal Tracking",
                ]}
                highlighted={true}
              />
              <PricingCard
                title="Enterprise"
                price="Custom"
                description="Tailored solutions for your organization"
                features={[
                  "All Pro Features",
                  "Custom Integrations",
                  "Dedicated Support",
                  "Team Collaboration Tools",
                  "Advanced Analytics",
                ]}
              />
            </div>
          </div>
        </section>
        <section id="security" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <Cloud className="h-16 w-16 text-primary" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Seamless, Secure, and Always Synced
                </h2>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your data is stored securely in the cloud and synchronized
                  across all your devices, ensuring you can access Daisy
                  wherever you go.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Daisy Cloud Sync"
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Take charge of your life with Daisy
              </h2>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Because your journey to better living starts today.
              </p>
              <Button size="lg">Download Daisy Now</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Daisy AI. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, image }) {
  return (
    <div className="flex flex-col items-center text-center">
      {icon}
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-4 text-gray-500 dark:text-gray-400">{description}</p>
      <Image
        src={image || "/placeholder.svg"}
        width={350}
        height={200}
        alt={title}
        className="rounded-lg object-cover"
      />
    </div>
  );
}

function PricingCard({
  title,
  price,
  description,
  features,
  highlighted = false,
}) {
  return (
    <div
      className={`flex flex-col rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800 ${highlighted ? "ring-2 ring-primary" : ""}`}
    >
      <h3 className="mb-2 text-center text-2xl font-bold">{title}</h3>
      <div className="mb-4 text-center">
        <span className="text-4xl font-bold">{price}</span>
        {price !== "Custom" && (
          <span className="text-gray-500 dark:text-gray-400">/month</span>
        )}
      </div>
      <p className="mb-6 text-center text-gray-500 dark:text-gray-400">
        {description}
      </p>
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`mt-auto ${highlighted ? "bg-primary hover:bg-primary/90" : ""}`}
      >
        {highlighted ? "Get Started" : "Choose Plan"}
      </Button>
    </div>
  );
}
