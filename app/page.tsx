import getAllCourses from '@/app/actions/getAllCourses';
import SliderMain from '@/app/(components)/SliderMain';
import CourseComponent from '@/app/(components)/CourseComponent';

const images = [
  '/a.jpg',
  'b.jpg'
];

interface HomeProps {
  searchParams: string;
}

export default async function Home({ searchParams }: HomeProps) {
  const courses = await getAllCourses(searchParams);

  return (
    <main className="w-[100%]">
      <SliderMain images={images} />

      <div>
        <div className="flex flex-wrap px-8">
          {courses.map(item => (
            <CourseComponent
              key={item.id}
              data={item}
              currentUser={null}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
