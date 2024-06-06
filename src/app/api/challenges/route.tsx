import { NextRequest, NextResponse } from "next/server";
import { challenges } from "../../../utils/data";

export function GET(request: NextRequest) {
  return NextResponse.json(challenges, { status: 200 });
}
