import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Form from "./Form";

const Add = async () => {
  const data = await getServerSession(authOptions);

  return (
    <>
      <section className="my-16 max-w-xl px-6 mx-auto">
        <Form />
      </section>
    </>
  );
};

export default Add;
