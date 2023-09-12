import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const {
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
    } = body;

    const sesstion = await getServerSession(req);
    if (!sesstion) {
      return NextResponse.json(
        { error: "وارد حساب کاربری شوید" },
        { status: 401 }
      );
    }

    const user = await User.find({ email: sesstion.user.email });
    console.log(user);
    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 404 }
      );
    }
    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !realState ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "اطلاعات معتبر وارد کنید" },
        { status: 400 }
      );
    }
    const newProfile = await Profile.create({
      title,
      description,
      location,
      phone,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
      price: +price,
      userId: new Types.ObjectId(user._id),
      userId: new Types.ObjectId(user._id),
    });
    console.log(newProfile);
    return NextResponse.json({ message: "آگهی ثبت شد" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
