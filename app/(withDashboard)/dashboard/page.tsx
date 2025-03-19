// import authOption from "@/utils/authOption/authOption";
// import { getServerSession } from "next-auth";
import Image from "next/image";


const DashboardPage = async() => {
//   const session =await getServerSession(authOption)

  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Welcome To Dashboard Page

      </h1>
      <Image
            src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?t=st=1710130697~exp=1710134297~hmac=f1b21d9c1823a0657d339c256a1c4ad8301168480e35b35aeba5106568a21010&w=740"
            width={500}
            height={200}
            alt="login page"
            className="w-full h-auto"
          />
    </div>
  );
};

export default DashboardPage;
