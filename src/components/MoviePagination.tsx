"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export default function PaginationControls({
  currentPage,
  totalPages,
  baseUrl,
}: PaginationControlsProps) {
  const router = useRouter();

  if (totalPages <= 1) {
    return null;
  }

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", page.toString());
    const cleanBaseUrl = baseUrl.split("?")[0];
    router.push(`${cleanBaseUrl}?${params.toString()}`, { scroll: false });
  };
  // const handlePageChange = (page: number) => {
  //   const newUrl = `${baseUrl}&page=${page}`;
  //   router.push(newUrl);
  // };

  // const handlePageChange = (page: number) => {
  //   const params = new URLSearchParams(window.location.search);
  //   params.set("page", page.toString());
  //   router.push(`/genre/?${params.toString()}`, { scroll: false }); // Prevents full page reload
  // };

  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>
        )}

        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          if (
            pageNumber === 1 ||
            pageNumber === totalPages ||
            (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
          ) {
            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  href="#"
                  isActive={pageNumber === currentPage}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          } else if (
            (pageNumber === currentPage - 2 && currentPage > 3) ||
            (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
          ) {
            return <PaginationEllipsis key={pageNumber} />;
          }
          return null;
        })}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
