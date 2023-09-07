import CourseComponent from '@/app/(components)/CourseComponent';
import getAllCourses from '@/app/actions/getAllCourses';
import myUser from '@/app/actions/getUser';

interface HomeProps {
  searchParams: string;
}

export default async function page({ searchParams }: HomeProps) {
  const courses = await getAllCourses(searchParams);
  const currentUser = await myUser();

  return (
    <div className="p-12 flex gap-2 flex-wrap">
      {courses.map(item => (
        <CourseComponent data={item} key={item.id} currentUser={currentUser} />
      ))}
    </div>
  );
}
