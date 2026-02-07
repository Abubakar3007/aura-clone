"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Layout from "@/app/components/layout/Layout";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <Layout>
      <section className="flex items-center justify-center bg-background pt-20">
        <div className="container-editorial text-center">
          <p className="text-uppercase text-muted-foreground mb-4">
            Error 404
          </p>

          <h1 className="heading-hero text-foreground mb-6">
            Page Not
            <br />
            Found
          </h1>

          <p className="text-editorial max-w-md mx-auto mb-10">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <Link href="/" className="btn-primary inline-flex gap-3">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
}