import PageLayout from "@/components/common/page-layout";
import ChangePasswordForm from "@/components/settings/profile/change-password-form";
import EditProfileForm from "@/components/settings/profile/edit-profile-form";
import ProfileHeader from "@/components/settings/profile/profile-header";

const Profile = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <ProfileHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <EditProfileForm />
          <ChangePasswordForm />
        </div>
      </div>
    </PageLayout>
  );
};

export default Profile;
