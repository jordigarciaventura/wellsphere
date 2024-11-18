import { Button } from "@/components/ui/button";
import Image from "next/image";
import "./style.css";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <div className="container">
        <div className="content-wrapper">
          <div className="image-wrapper">
            <Image
              src="/assets/welcome.svg"
              alt="Welcome illustration"
              width={450}
              height={450}
              className="image"
              priority
            />
          </div>
          <div className="text-button-wrapper">
            <div className="text-content">
              <h1 className="heading">Welcome to WellSphere</h1>
              <p className="paragraph">
                Discover amazing features and boost your productivity with our
                innovative application.
              </p>
            </div>
            <div className="button-wrapper">
              <Button
                className="get-started-button"
                aria-label="Get Started with WellSphere"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
