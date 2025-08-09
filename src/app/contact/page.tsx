import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sherzodbek Akhmadjonov.",
};

/**
 * Contact page. Provides ways to reach out via email and social links.
 */
export default function ContactPage() {
  return (
    <div className="py-16 max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-muted-foreground">
        Whether you have a project in mind, want to collaborate, or just want to chat,
        I’d love to hear from you. Reach out through any of the channels below and I’ll
        get back to you as soon as I can.
      </p>
      <div className="space-y-4">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:sherzodbek@akhmadjonov.xyz" className="underline">
            sherzodbek@akhmadjonov.xyz
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/sherzodbekakhmadjonov/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            linkedin.com/in/sherzodbekakhmadjonov
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/akhmadjonovsherzod"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            github.com/akhmadjonovsherzod
          </a>
        </p>
      </div>
    </div>
  );
}