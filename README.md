# DevShare Lite

## 1. Thông tin tác giả
- **Tên trường**: ĐH Phenikaa
- **MSSV**: 23010163
- **Họ tên**: Nguyễn Văn An

## 2. Tổng quan dự án

**DevShare Lite** là một diễn đàn trực tuyến nhỏ gọn, nơi người dùng có thể đăng tải bài viết chia sẻ kiến thức, đặt câu hỏi về các vấn đề kỹ thuật, và tham gia trả lời/bình luận. Mục tiêu của dự án là xây dựng một cộng đồng nhỏ, tập trung vào việc trao đổi thông tin trong lĩnh vực Công nghệ Thông tin (CNTT).

Các chức năng chính của **DevShare Lite** bao gồm:
- **Đăng ký, đăng nhập và đăng xuất**: Người dùng có thể tạo tài khoản, đăng nhập và đăng xuất khỏi hệ thống.
- **Quản lý bài viết**: Người dùng có thể tạo bài viết, chỉnh sửa, xóa bài viết, và chia sẻ bài viết dưới dạng công khai hoặc nháp.
- **Bình luận và trả lời bình luận**: Người dùng có thể bình luận dưới bài viết và trả lời bình luận của người khác.
- **Tìm kiếm bài viết**: Tính năng tìm kiếm giúp người dùng tìm nhanh các bài viết hoặc câu hỏi theo tiêu đề hoặc nội dung.
- **Trang cá nhân người dùng**: Hiển thị thông tin người dùng, cùng với danh sách các bài viết của họ.

## 3. Công nghệ sử dụng

### 3.1 Frontend
- **React.js**: Được sử dụng để xây dựng giao diện người dùng với các thành phần (components) tương tác.
- **Next.js**: Framework của React.js giúp tối ưu hóa việc rendering, hỗ trợ cả Server-Side Rendering (SSR) và Static Site Generation (SSG), giúp tăng tốc độ tải trang và tối ưu SEO.
- **CSS/SCSS**: Để thiết kế giao diện đẹp mắt, dễ dàng tùy chỉnh, sử dụng CSS hoặc SCSS cho các thành phần giao diện.

### 3.2 Backend
- **Node.js**: Sử dụng Node.js với framework **Nest.js** để xây dựng API RESTful cho hệ thống. Nest.js giúp tổ chức mã nguồn dễ dàng hơn và có cấu trúc rõ ràng.
- **Prisma**: ORM để quản lý cơ sở dữ liệu MySQL, giúp giảm thiểu việc viết SQL thủ công và hỗ trợ các thao tác CRUD dễ dàng hơn.
- **MySQL**: Cơ sở dữ liệu quan hệ, sử dụng MySQL để lưu trữ thông tin người dùng, bài viết, bình luận và thẻ.
- **JWT (JSON Web Tokens)**: Được sử dụng để xác thực người dùng và bảo mật các API yêu cầu quyền truy cập.

### 3.3 Thư viện và công cụ
- **Axios**: Được sử dụng để thực hiện các yêu cầu HTTP từ frontend đến backend.
- **bcryptjs**: Để mã hóa mật khẩu người dùng trước khi lưu trữ trong cơ sở dữ liệu.
- **jsonwebtoken**: Thư viện để tạo và xác thực JSON Web Tokens trong backend.
- **TypeScript**: Được sử dụng với Nest.js để giúp mã nguồn rõ ràng và dễ bảo trì hơn.
- **Prisma Client**: Prisma giúp bạn dễ dàng tương tác với cơ sở dữ liệu, tạo mô hình dữ liệu và thực hiện các thao tác CRUD nhanh chóng.

## 4. Cấu trúc thư mục dự án
Dưới đây là cấu trúc thư mục của dự án **DevShare Lite**:

```DevShare-Lite/source_code
├── frontend/                # Thư mục chứa mã nguồn frontend
│   ├── public/              # Thư mục chứa các tài nguyên tĩnh (hình ảnh, favicon, v.v.)
│   ├── components/          # Thư mục chứa các thành phần giao diện (components)
│   ├── pages/               # Thư mục chứa các trang (pages) của ứng dụng
│   ├── styles/              # Thư mục chứa các tệp CSS/SCSS     
│   ├── package.json         # Tệp cấu hình npm cho frontend
│   ├── ...
│   └── tsconfig.json        # Tệp cấu hình TypeScript cho frontend
├── backend/                 # Thư mục chứa mã nguồn backend
│   ├── src/                 # Thư mục chứa mã nguồn chính của ứng dụng
│   │   ├── auth/            #Xử lí xác thực người dùng
│   │   ├── comments/        # Xử lí bình luận
│   │   ├── posts/           # Xử lí bài viết
│   │   ├── prisma/          # Xử lí cơ sở dữ liệu
│   │   ├── users/           # Xử lí người dùng
│   │   ├── app.module.ts    # Tệp module chính của ứng dụng Nest.js
│   │   ├── main.ts          # Tệp entry point của ứng dụng Nest.js
│   ├── prisma/              # Thư mục chứa các tệp cấu hình Prisma
│   │   ├── schema.prisma    # Tệp định nghĩa schema của Prisma
│   ├── .env                 # Tệp cấu hình biến môi trường
│   ├── package.json         # Tệp cấu hình npm cho backend
│   └── tsconfig.json        # Tệp cấu hình TypeScript cho backend
└── README.md                # Tệp hướng dẫn sử dụng dự án
```

## 5. Hướng dẫn cài đặt và chạy dự án
### 5.1 Yêu cầu hệ thống
- Node.js (phiên bản 14 trở lên)
- MySQL (phiên bản 5.7 trở lên)
### 5.2 Cài đặt
1. **Clone repository**:
    ```bash
    git clone https://github.com/Ansociuu/DevShare_Lite.git
    cd DevShare_Lite
    ```
2. **Cài đặt dependencies cho frontend**:
    ```bash
    cd frontend
    npm install
    ```
3. **Cài đặt dependencies cho backend**:
    ```bash
    cd ../backend
    npm install
    ```
4. **Cấu hình cơ sở dữ liệu**:
   - Tạo một cơ sở dữ liệu MySQL mới.
   - Cập nhật tệp `.env` trong thư mục `backend` với thông tin kết nối đến cơ sở dữ liệu của bạn:
     ```plaintext
     DATABASE_URL="mysql://username:password@localhost:3306/database_name"
     ```
5. **Chạy migration Prisma**:
   ```bash
   npx prisma migrate dev --name init
   ```
6. **Chạy backend**:
   ```bash
   npm run start:dev
   ```
7. **Chạy frontend**:   
   ```bash
   cd ../frontend
   npm run dev
   ```      
8. **Truy cập ứng dụng**: Mở trình duyệt và truy cập `http://localhost:3000` để xem ứng dụng.   

## 6. Tài liệu tham khảo
- [Nest.js Documentation](https://docs.nestjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [Axios Documentation](https://axios-http.com/docs/intro)


