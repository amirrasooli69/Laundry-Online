import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import MyProfilesPage from "@/template/MyProfilesPage";

async function Myprofiles() {
  await connectDB();
  const sesstion = await getServerSession(authOptions);

  const [user] = await User.aggregate([
    { $match: { email: sesstion.user.email } },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
  // console.log(user);
  return <MyProfilesPage profiles={user.profiles} />;
}

export default Myprofiles;
