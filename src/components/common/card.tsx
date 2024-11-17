import { ArrowBigRight } from "lucide-react";
import { Badge } from "../ui/badge";

type CardProps = {
  title: string,
  description: string,
  status: string
}

export default function Card({title, description, status }: CardProps) {
  return (
    <div className="p-5 bg-white border border-white rounded-lg -mt-1 flex flex-row justify-start items-center gap-4 hover:bg-gray-50 hover:border-gray-100">
      <ArrowBigRight />
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-secondary">{description}</p>
        </div>
        {status === "Success" && <Badge>{status}</Badge>}
        {status === "Failed" && <Badge variant="destructive">{status}</Badge>}
        {status === "Pending" && <Badge variant="secondary">{status}</Badge>}
      </div>
    </div>
  )
}