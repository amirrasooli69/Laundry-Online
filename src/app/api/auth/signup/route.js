import { NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();
    console.log({ email, password });
    
    if (!email || !password) {
      return NextResponse.json(
        { status: 422 },
        { error: "لطفا اطلاعات معتبر وارد کنید" }
      );
    }

    const existingUser = await User.findOne({ email });
    if(existingUser) {
        return NextResponse.json({status:422}, {error:"این حساب کاربری وجود دارد"})
    }
    const hashedPassword = hashPassword(password);
    const newUser = await User.create({
        email: email,
        password: hashedPassword
    });
    console.log(newUser);
    return NextResponse.json({status:201}, {message:"حساب کاربری ایجاد شد"})
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { status: 500 },
      { error: "مشکلی در سرور رخ داده " }
    );
  }
}
