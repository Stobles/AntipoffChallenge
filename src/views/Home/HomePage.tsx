import { useState } from "react";
import { useGetUsersQuery } from "@/features/users/api/userApi";
import { Card } from "./components/Card";
import { Pagination } from "./components/Pagination";
import { LoaderCircle } from "lucide-react";

export const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useGetUsersQuery({
    page: currentPage,
    per_page: 8,
  });

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 items-center bg-background text-foreground pt-8 pb-12 mb-6">
        <h1 className="text-5xl md:text-6xl text-center px-2">Наша команда</h1>
        <p className="max-w-[800px] text-center text-base md:text-lg px-2">
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся на их плечи, и умеющие находить выход из любых, даже самых
          сложных ситуаций.
        </p>
      </div>
      {isLoading ? (
        <div className="flex justify-center text-center w-full h-full">
          <LoaderCircle className="animate-spin" size={40} />
        </div>
      ) : (
        <>
          {data ? (
            <div className="w-full max-w-[1200px]  mx-auto px-2 mb-5">
              <div className="min-h-[510px] mb-4">
                <ul className="w-full flex flex-wrap justify-center gap-3">
                  {data?.data.map((user) => (
                    <li key={user.id}>
                      <Card user={user} />
                    </li>
                  ))}
                </ul>
              </div>
              {data && (
                <Pagination
                  currentPage={currentPage}
                  pagesCount={data.total_pages}
                  setCurrentPage={setCurrentPage}
                />
              )}
            </div>
          ) : (
            <div>Пользователи не найдены</div>
          )}
        </>
      )}
    </div>
  );
};
