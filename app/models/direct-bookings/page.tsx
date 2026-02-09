"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Layout from "@/app/components/layout/Layout";
import ModelGrid from "@/app/components/models/ModelGrid";

function DirectBookingsContent() {
  const searchParams = useSearchParams();

  const gender = searchParams.get("gender") as
    | "women"
    | "men"
    | null;

  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="container xl:px-0 px-6">
          <ModelGrid filter={gender || "all"} />
        </div>
      </section>
    </Layout>
  );
}

export default function DirectBookings() {
  return (
    <Suspense fallback={<div />}>
      <DirectBookingsContent />
    </Suspense>
  );
}