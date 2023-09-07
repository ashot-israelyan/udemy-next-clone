import myUser from '@/app/actions/getUser';
import ProfileComponent from '@/app/user/ProfileComponent';

export default async function page() {
  const user = await myUser();

  return (
    <ProfileComponent
      name={user?.name}
      email={user?.email}
      userId={user?.id}
    />
  );
}
