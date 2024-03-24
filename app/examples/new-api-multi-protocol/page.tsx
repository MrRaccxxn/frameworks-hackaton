import type { Metadata } from "next";
import Link from "next/link";
import { fetchMetadata } from "frames.js/next";

import { createDebugUrl } from "../../debug";
import { currentURL, vercelURL } from "../../utils";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "New api example",
    description: "This is a new api example",
    other: {
      ...(await fetchMetadata(
        new URL(
          "/examples/new-api-multi-protocol/frames",
          vercelURL() || "http://localhost:3000",
        ),
      )),
    },
  };
}

export default async function Home() {
  const url = currentURL("/examples/new-api-multi-protocol");

  return (
    <div>
      Multi-protocol example
      <Link href={createDebugUrl(url)} className="underline">
        Debug
      </Link>
    </div>
  );
}
