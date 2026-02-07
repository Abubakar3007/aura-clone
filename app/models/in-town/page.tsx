import Layout from '@/app/components/layout/Layout';
import SplitGenderSection from '@/app/components/models/SplitGenderSection';
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationNext, PaginationLink } from "@/app/components/ui/pagination";
import { Grid2x2 } from 'lucide-react';
import Link from 'next/link';
const InTown = () => {
  return (
    <Layout>
      <SplitGenderSection />
      <Pagination className="py-6">
        <PaginationContent className="gap-3 text-sm text-gray-300">

          {/* Previous */}
          <PaginationItem>
            <PaginationPrevious asChild className="text-neutral-400/80 font-normal transition-all hover:bg-transparent hover:text-black cursor-pointer">
              <Link href="/" />
            </PaginationPrevious>
          </PaginationItem>

          {/* Center Grid Icon */}
          <PaginationItem>
            <PaginationLink
              href="#"
              className="text-neutral-400/80 transition-all hover:bg-transparent font-normal hover:text-black"
            >
              <Grid2x2 className="w-4 h-4" />
            </PaginationLink>
          </PaginationItem>

          {/* Next */}
          <PaginationItem>
            <PaginationNext asChild className="text-neutral-400/80 transition-all font-normal hover:bg-transparent hover:text-black cursor-pointer">
              <Link href="/" />
            </PaginationNext>
          </PaginationItem>

        </PaginationContent>
      </Pagination>
    </Layout>
  )
};
export default InTown;