import { mockData } from '@/mockData';
import { NextRequest, NextResponse } from 'next/server';
import { ApodPhotoData } from '../page';

export async function POST(request: NextRequest) {
  // TODO: Add schema validation with zod
  const requestBody = (await request.json()) as ApodPhotoData;

  const isAlreadySaved = mockData.favorites.some((item) => item.url === requestBody.url);

  if (isAlreadySaved) {
    return new NextResponse('The picture is already saved', { status: 400 });
  }

  // We can pass entire object safely because we validated it by zod
  mockData.favorites.push(requestBody);
  console.log('SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS', mockData.favorites);

  return new NextResponse(undefined, { status: 200 });
}