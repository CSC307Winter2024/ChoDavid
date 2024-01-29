export async function GET(request) {
  return Response.json([
    {
      title: "Project 1",
      desc: "A description for this project"
    },
    {
      title: "Project 2",
      desc: "A description for this project"
    },
    {
      title: "Project 3",
      desc: "A description for this project"
    },
    {
      title: "Project 4",
      desc: "A description for this project"
    },
  ]);
}