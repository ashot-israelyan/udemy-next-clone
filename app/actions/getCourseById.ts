import prisma from '../lib/prismadb';

interface IParams {
  courseId?: string;
}

export default async function getCurseById(params: IParams) {
  const { courseId } = params;

  const course = await prisma.course.findUnique({
    where: {
      id: courseId
    },
    include: {
      user: true
    }
  });

  if (!courseId) {
    return null;
  }


  return {
    ...course,
    createdAt: course?.createdAt.toString(),
    user: {
      ...course?.user,
      createdAt: course?.user.createdAt.toString(),
      updatedAt: course?.user.updatedAt.toString(),
    }
  };
}
