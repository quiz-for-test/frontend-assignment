import { ResponseJson } from "@/utils/response";

const GET = async () => {
  const response = await fetch("https://dummyjson.com/users");
  const posts = await response.json();
  return ResponseJson(200, posts);
};

export { GET };
