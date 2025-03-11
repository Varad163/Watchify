import { NextResponse } from "next/server";
import Movies from "@/components/movies";







export async function GET() {
    return NextResponse.json({ message: "Movies API is working!" });
}

//.
export async function POST(request: Request) {
    const data = await request.json();
    return NextResponse.json({ message: "Movie added!", data });
}
