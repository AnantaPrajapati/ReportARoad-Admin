
import RatingTable from "@/components/ui/rating/RatingTable";
import { getRatingandFeedback } from "./action";

export default async function Page(){
  const data = await getRatingandFeedback();
  // console.log("ratingfeedbacks =", data);
  return (
    <RatingTable tableData={data}/>
  )
} 