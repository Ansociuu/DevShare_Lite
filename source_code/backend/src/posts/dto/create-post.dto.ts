import { IsNotEmpty, IsOptional, IsArray, IsEnum } from 'class-validator';

export enum PostStatus {
  Draft = 'Draft',
  Published = 'Published',
}

export class CreatePostDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;

  @IsArray()
  @IsOptional()
  tags?: string[]; // danh sách tên tag

  @IsEnum(PostStatus)
  @IsOptional()
  status?: PostStatus;
}