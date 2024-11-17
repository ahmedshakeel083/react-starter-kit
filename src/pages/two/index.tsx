import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Card from "@/components/common/card";
import { Button } from "@/components/ui/button";
import { lists } from "@/lib/constants/lists";

export default function Two() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-[33%] h-screen">
        <h1 className="bg-red-700 text-white px-5 py-5 rounded-t-lg text-lg flex flex-row gap-3 justify-start items-center">
          <ArrowLeft
            className="hover:bg-white hover:text-red-600 rounded-md cursor-pointer"
            width={30}
            height={30}
            onClick={() => navigate("/", { replace: true })}
          />
          My Reports
        </h1>
        {lists.map((item) => (
          <Card
            title={item.title}
            description={item.description}
            status={item.status}
          />
        ))}
        <div className="w-full flex justify-end items-center">
          <Button
            variant="primary"
            className="w-1/2 text-lg"
            onClick={() => navigate("/three")}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
