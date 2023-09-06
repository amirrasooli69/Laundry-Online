import DashboardSidbar from "@/layout/DashboardSidbar"; 
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function Dashboardlayout({children}) {
    const session = await getServerSession(authOptions)
    if(!session) redirect("/signin");
    return (
        <DashboardSidbar>
            {children}
        </DashboardSidbar>
    );
}

export default Dashboardlayout;