import FollowingBar from '@/components/FollowingBar';
import PostList from '@/components/PostList';
import SideBar from '@/components/SideBar';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    redirect('/auth/signin');
  }
  return (
    <section className='w-rull flex max-w-[850px] flex-col p-4 md:flex-row'>
      <div className='w-full basis-3/4'>
        <FollowingBar />
        <PostList />
      </div>
      <div className='basis-1/4'>
        <SideBar user={user} />
      </div>
    </section>
  );
}
