import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  content: string;

  @IsOptional()
  parentId?: string; // Nếu là trả lời comment thì truyền parentId
}