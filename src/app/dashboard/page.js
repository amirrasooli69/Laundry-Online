import DashboardPage from "@/template/DashboardPage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

async function Dashboard() {
    await connectDB();
    const sesstion = await getServerSession(authOptions);
    const user = await User.findOne({email: sesstion.user.email});
    return <DashboardPage createdAt={user.createdAt}/>
}

export default Dashboard;