import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { full_name, email, phone } = await request.json();

    if (!full_name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const baseUrl = `https://api.baserow.io/api/database/rows/table/${process.env.BASEROW_TABLE_ID}`;
    const headers = {
      Authorization: `Token ${process.env.BASEROW_API_TOKEN}`,
      "Content-Type": "application/json",
    };

    // Check if email already exists
    const checkResponse = await fetch(
      `${baseUrl}/?user_field_names=true&filter__email__equal=${encodeURIComponent(email)}`,
      { headers }
    );

    if (!checkResponse.ok) {
      console.error("Baserow check error:", await checkResponse.text());
      return NextResponse.json(
        { error: "Failed to check existing submission" },
        { status: 500 }
      );
    }

    const existing = await checkResponse.json();

    if (existing.count > 0) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    // Insert new row
    const response = await fetch(`${baseUrl}/?user_field_names=true`, {
      method: "POST",
      headers,
      body: JSON.stringify({ full_name, email, phone }),
    });

    if (!response.ok) {
      console.error("Baserow API error:", await response.text());
      return NextResponse.json(
        { error: "Failed to save submission" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
