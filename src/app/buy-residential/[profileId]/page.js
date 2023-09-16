import Profile from "@/models/Profile";
import DetailsPage from "@/template/DetailsPage";
import connectDB from "@/utils/connectDB";


async function ProfileDetails({params : {profileId}}) {

    await connectDB();
    const profile = await Profile.findOne({_id: profileId})
    console.log(profile)

    if(!profile) return <h3>مشکلی رخ داده است</h3>
    return (
        <div>
            <DetailsPage data={profile}/>
        </div>
    );
}

export default ProfileDetails;