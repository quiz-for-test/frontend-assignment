export const ResponseJson = (
  status: number,
  data: Record<string, unknown>,
  message: string = "ok"
) => {
  const dataRes = {
    message,
    data,
  };
  return new Response(JSON.stringify(dataRes), {
    status: status,
    headers: { "Content-Type": "application/json" },
  });
};
