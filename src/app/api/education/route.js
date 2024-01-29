export async function GET(request) {
    return Response.json([
      {
        degree: "B.S. Computer Science",
        school: "Cal Poly SLO",
        graduationYear: "2024"
      },
    ]);
  }