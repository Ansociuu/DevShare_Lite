import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, postId: string, dto: CreateCommentDto) {
    // Kiểm tra post tồn tại
    const post = await this.prisma.post.findUnique({ where: { id: postId } });
    if (!post) throw new NotFoundException('Post not found');

    // Nếu có parentId thì kiểm tra comment cha tồn tại
    if (dto.parentId) {
      const parent = await this.prisma.comment.findUnique({ where: { id: dto.parentId } });
      if (!parent) throw new NotFoundException('Parent comment not found');
    }

    return this.prisma.comment.create({
      data: {
        content: dto.content,
        postId,
        userId,
        parentId: dto.parentId || null,
      },
      include: { user: true, replies: true },
    });
  }

  async findByPost(postId: string) {
    // Lấy tất cả comment gốc và replies (có thể phân trang nếu muốn)
    return this.prisma.comment.findMany({
      where: { postId, parentId: null },
      include: {
        user: true,
        replies: {
          include: { user: true },
        },
      },
      orderBy: { createdAt: 'asc' },
    });
  }
}