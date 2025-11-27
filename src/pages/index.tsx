import { Button } from "@heroui/react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Make&nbsp;</span>
          <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
          <br />
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </div>
        </div>

        <div className="flex gap-3">
          <a
            href={siteConfig.links.docs}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button variant="primary">Documentation</Button>
          </a>
          <a
            href={siteConfig.links.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button variant="tertiary">
              <GithubIcon size={20} />
              GitHub
            </Button>
          </a>
        </div>

        <div className="mt-8">
          <div className="border border-default-200 rounded-lg px-4 py-2">
            <span>
              Get started by editing{" "}
              <code className="text-primary">pages/index.tsx</code>
            </span>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
