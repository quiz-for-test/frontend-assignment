import tranFormJson from "@/services/tranformJson";
import { ResponseJson } from "@/utils/response";

const GET = async () => {
  const response = await fetch("https://dummyjson.com/users");
  const posts = await response.json();
  const result = await tranFormJson(posts);
  return ResponseJson(200, result);
};

export { GET };
