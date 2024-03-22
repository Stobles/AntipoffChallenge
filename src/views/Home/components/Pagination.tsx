import { Dispatch } from "react";
import { Button } from "../../../components/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Pagination = ({
  currentPage,
  pagesCount,
  setCurrentPage,
}: {
  currentPage: number;
  pagesCount: number;
  setCurrentPage: Dispatch<React.SetStateAction<number>>;
}) => {
  const pageNumbers = [...Array(pagesCount + 1).keys()].slice(1);

  const onPrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const onNextPage = () => {
    if (currentPage < pagesCount) setCurrentPage((prev) => prev + 1);
  };
  return (
    <nav>
      <ul className="flex justify-center md:justify-end gap-4">
        <li className="page-item">
          <Button onClick={onPrevPage} variant="ghost" size="icon">
            <ChevronLeft size={22} />
          </Button>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`flex items-center cursor-pointer ${
              currentPage == pgNumber ? "underline" : ""
            } `}
            onClick={() => setCurrentPage(pgNumber)}
          >
            {pgNumber}
          </li>
        ))}
        <li className="page-item">
          <Button onClick={onNextPage} variant="ghost" size="icon">
            <ChevronRight size={22} />
          </Button>
        </li>
      </ul>
    </nav>
  );
};
