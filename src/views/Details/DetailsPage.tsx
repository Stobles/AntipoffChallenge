import { useNavigate, useParams } from "react-router-dom";
import { useGetUserQuery } from "../../features/users/api/userApi";
import { MailIcon } from "lucide-react";

export const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) navigate(-1);

  const { data } = useGetUserQuery({ id: id ? Number(id) : 0 });

  const name = data?.data?.first_name + " " + data?.data?.last_name;

  return (
    <div className="flex flex-col w-full">
      {data ? (
        <>
          <div className="w-full bg-background">
            <div className="flex flex-col lg:flex-row items-center gap-6 w-full max-w-[1200px] mx-auto pb-6 px-4">
              <div className="w-[100px] lg:w-[190px] h-[100px] lg:h-[190px]">
                <img
                  className="w-full h-full object-cover object-center rounded-full overflow-hidden"
                  src={data.data?.avatar}
                  alt="avatar"
                />
              </div>
              <h1 className="text-primary-foreground text-4xl lg:text-6xl">
                {name}
              </h1>
            </div>
          </div>

          <div className="w-full max-w-[1200px] mx-auto mt-6 text-lg flex flex-col-reverse px-2 md:grid grid-cols-details grid-rows-details">
            <div className="col-span-1 row-span-full">
              <p className="my-3 mt-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Adipiscing at in tellus integer feugiat scelerisque. Neque
                convallis a cras semper auctor. Phasellus vestibulum lorem sed
                risus ultricies. Pharetra pharetra massa massa ultricies mi quis
                hendrerit dolor magna. Id velit ut tortor pretium. Mauris nunc
                congue nisi vitae suscipit tellus mauris. Sit amet nisl suscipit
                adipiscing bibendum. Lectus proin nibh nisl condimentum id. Id
                ornare arcu odio ut sem. Nec tincidunt praesent semper feugiat.
                Velit ut tortor pretium viverra suspendisse potenti nullam ac.
                Proin libero nunc consequat interdum. Risus sed vulputate odio
                ut enim. Velit sed ullamcorper morbi tincidunt. Feugiat nisl
                pretium fusce id velit ut tortor pretium viverra. Risus quis
                varius quam quisque id diam vel.
              </p>
              <p className="my-3">
                Facilisi nullam vehicula ipsum a. In egestas erat imperdiet sed
                euismod nisi porta lorem mollis. Rhoncus dolor purus non enim
                praesent elementum facilisis. Hendrerit gravida rutrum quisque
                non tellus orci. Dui nunc mattis enim ut tellus elementum
                sagittis vitae. Maecenas ultricies mi eget mauris pharetra et.
                Odio euismod lacinia at quis. Nunc sed id semper risus in
                hendrerit. Eros in cursus turpis massa tincidunt. Pretium
                viverra suspendisse potenti nullam ac tortor vitae.
              </p>
            </div>
            <div className="flex mb-4 md:mb-0 md:px-2 gap-2 col-span-1">
              <MailIcon />
              <a href={`mailto:${data.data?.email}`}>{data.data?.email}</a>
            </div>
          </div>
        </>
      ) : (
        "Буба"
      )}
    </div>
  );
};
