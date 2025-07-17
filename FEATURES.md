# Tính năng của "DevShare Lite"

## 1. Chức năng chính

### 1.1 Xác thực Người dùng
- **Đăng ký tài khoản**: Người dùng có thể tạo tài khoản mới bằng cách cung cấp email và mật khẩu. Email phải là duy nhất.
- **Đăng nhập**: Người dùng có thể đăng nhập vào hệ thống sử dụng email và mật khẩu.
- **Đăng xuất**: Người dùng có thể đăng xuất khỏi hệ thống khi không còn cần sử dụng.

### 1.2 Quản lý Bài viết (Posts)
- **Tạo bài viết mới**: Người dùng đã đăng nhập có thể tạo bài viết mới, bao gồm tiêu đề, nội dung (Markdown cơ bản), và gắn thẻ.
- **Chỉnh sửa và xóa bài viết**: Người tạo bài viết có thể chỉnh sửa nội dung bài viết của mình hoặc xóa bài viết.
- **Trạng thái bài viết**: Bài viết có thể lưu ở trạng thái **Draft** (Nháp) hoặc **Published** (Công khai).
- **Xem danh sách bài viết**: Người dùng có thể xem tất cả các bài viết, có phân trang và tìm kiếm.
- **Xem chi tiết bài viết**: Người dùng có thể xem chi tiết từng bài viết.

### 1.3 Bình luận
- **Bình luận bài viết**: Người dùng có thể bình luận dưới các bài viết.
- **Trả lời bình luận**: Người dùng có thể trả lời các bình luận bên dưới bài viết.

### 1.4 Tìm kiếm bài viết
- **Tìm kiếm cơ bản**: Người dùng có thể tìm kiếm bài viết và câu hỏi dựa trên tiêu đề hoặc nội dung.

### 1.5 Trang Cá nhân Người dùng
- **Thông tin người dùng**: Hiển thị thông tin cơ bản của người dùng (tên, email).
- **Danh sách bài viết**: Hiển thị danh sách các bài viết của người dùng, bao gồm bài viết đã đăng và bài viết đang ở trạng thái nháp.

### 1.6 Quản lý thẻ (Tags)
- **Gắn thẻ bài viết**: Người dùng có thể gắn các thẻ (tags) vào bài viết của mình, giúp phân loại các bài viết dễ dàng hơn.

> **Chú thích**: Các tính năng trên đều đã được triển khai theo yêu cầu ban đầu của dự án và có thể kiểm tra thông qua các ảnh chụp màn hình dưới đây.

## 2. Chức năng nâng cao

### 2.1 Tính năng Markdown
- **Hỗ trợ Markdown cơ bản**: Các bài viết hỗ trợ định dạng Markdown cho phép người dùng dễ dàng tạo các bài viết có định dạng như tiêu đề, danh sách, liên kết, in đậm, in nghiêng, v.v.
  
### 2.2 Hệ thống quản lý người dùng
- **Xác thực với JWT (JSON Web Tokens)**: Để đảm bảo an toàn, hệ thống sử dụng JWT cho việc xác thực người dùng sau khi đăng nhập, giúp bảo mật các thao tác của người dùng.
  
### 2.3 Tối ưu hóa tìm kiếm
- **Tìm kiếm nâng cao**: Tính năng tìm kiếm không chỉ dựa vào tiêu đề mà còn có thể tìm kiếm trong nội dung bài viết và thẻ đi kèm.
  
### 2.4 Quản lý trạng thái bài viết
- **Quản lý trạng thái bài viết (Draft/Published)**: Người dùng có thể chọn trạng thái bài viết là nháp hoặc công khai. Các bài viết ở trạng thái **Draft** không thể nhìn thấy công khai cho người khác, chỉ hiển thị với người tạo bài viết.

## 3. Các vấn đề gặp phải và giải pháp

### 3.1 Vấn đề: Tốc độ tải trang
- **Mô tả**: Một số trang, đặc biệt là trang danh sách bài viết, tải khá chậm khi có quá nhiều bài viết trong cơ sở dữ liệu.
- **Giải pháp**: 
  - Sử dụng **pagination** (phân trang) để giảm tải khi người dùng xem các bài viết.
  - Tối ưu các truy vấn SQL với **Indexing** để tăng tốc độ truy vấn dữ liệu.

### 3.2 Vấn đề: Xử lý bất đồng bộ khi đăng bài viết hoặc bình luận
- **Mô tả**: Khi người dùng đăng bài viết hoặc bình luận, có thể gặp tình trạng dữ liệu không được lưu kịp thời, dẫn đến cảm giác bất tiện.
- **Giải pháp**: 
  - Sử dụng cơ chế **async/await** trong backend để xử lý các thao tác bất đồng bộ như lưu trữ bài viết và bình luận một cách đồng bộ.
  - Kiểm tra kỹ lưỡng các lỗi hệ thống và thêm thông báo lỗi rõ ràng cho người dùng.

### 3.3 Vấn đề: Xử lý thẻ (tags)
- **Mô tả**: Quản lý thẻ đôi khi gây nhầm lẫn khi có nhiều thẻ trùng tên.
- **Giải pháp**: 
  - Thêm cơ chế kiểm tra trùng lặp thẻ khi người dùng tạo thẻ mới, và yêu cầu người dùng chọn từ danh sách các thẻ có sẵn hoặc tạo thẻ mới nếu cần.

## 4. Các giới hạn đã biết của sản phẩm

### 4.1 Hạn chế trong việc quản lý ảnh
- **Mô tả**: Hệ thống hiện không hỗ trợ tải lên và lưu trữ ảnh cho bài viết. Các bài viết chỉ có thể chứa nội dung văn bản thuần túy.
- **Giải pháp**: Đây là một tính năng có thể được thêm vào trong các bản phát triển tiếp theo để hỗ trợ người dùng thêm hình ảnh vào bài viết của họ.

### 4.2 Hạn chế trong việc phân quyền người dùng
- **Mô tả**: Hiện tại, hệ thống không có phân quyền chi tiết cho người dùng (admin, moderator, v.v.), mọi người đều có quyền tương tự nhau trong việc tạo và chỉnh sửa bài viết.
- **Giải pháp**: Thêm tính năng phân quyền trong các bản phát triển tiếp theo, cho phép quản lý quyền hạn của các loại người dùng khác nhau.

### 4.3 Hạn chế trong việc thông báo
- **Mô tả**: Hệ thống không có tính năng thông báo cho người dùng về các hoạt động mới như bài viết mới, bình luận mới, v.v.
- **Giải pháp**: Tính năng thông báo có thể được phát triển trong tương lai để cải thiện trải nghiệm người dùng.

### 4.4 Hạn chế về frontend 
- **Mô tả**: Chưa hoàn thiện frontend
- **Giải pháp**: Cần phát triển giao diện người dùng đầy đủ trong tương lai

### 4.5 Hạn chế về cấu trúc thư mục 
- **Mô tả**: Cấu trúc thư mục hiện tại chưa được tổ chức theo yêu cầu về backend
- **Giải pháp**: Cần tái cấu trúc lại thư mục để phù hợp với yêu cầu, bao gồm việc tách biệt rõ ràng giữa các thành phần như models, controllers, routes, v.v.

## 5. Các định hướng phát triển trong tương lai

### 5.1 Tính năng quản lý ảnh
- **Mô tả**: Hệ thống sẽ hỗ trợ người dùng tải lên và hiển thị hình ảnh trong bài viết, giúp làm phong phú nội dung chia sẻ.

### 5.2 Phân quyền người dùng
- **Mô tả**: Thêm tính năng phân quyền cho người dùng, cho phép tạo các vai trò khác nhau như quản trị viên, người điều hành, và người dùng thông thường. Điều này sẽ giúp quản lý hệ thống dễ dàng hơn và phân chia công việc hợp lý.

### 5.3 Tính năng thông báo
- **Mô tả**: Tích hợp hệ thống thông báo để người dùng nhận thông báo về các hoạt động như bài viết mới, bình luận, hay thông báo hệ thống.

### 5.4 Tìm kiếm nâng cao
- **Mô tả**: Tính năng tìm kiếm sẽ được cải thiện, cho phép tìm kiếm bài viết theo nhiều tiêu chí khác nhau như thẻ, người viết, ngày đăng, v.v.

### 5.5 Thêm chức năng theo dõi (Follow)
- **Mô tả**: Người dùng có thể theo dõi các tác giả hoặc bài viết yêu thích để nhận thông báo khi có bài viết mới.

---

## Chú thích ảnh chụp màn hình

