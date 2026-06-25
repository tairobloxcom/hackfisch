# TaiRoblox Fisch - GitHub Pages Static

Bộ code này là bản static dùng cho GitHub Pages, được chuyển từ HTML gốc của bài **Tải Hack Fisch Roblox (Auto Fish, Auto Sell, Teleport, Anti Ban) v1.82.0**.

## Cấu trúc

```txt
tairoblox-fisch-github-pages-fixed/
├── index.html
├── README.md
├── robots.txt
├── sitemap.xml
├── .nojekyll
└── assets/
    ├── github-fix.css
    └── github-fix.js
```

## Cách deploy lên GitHub Pages

1. Tạo repository mới trên GitHub.
2. Upload toàn bộ file trong thư mục này lên repo.
3. Đảm bảo `index.html` nằm ở thư mục gốc của repo.
4. Vào **Settings → Pages**.
5. Chọn **Deploy from a branch**.
6. Chọn branch `main` và folder `/root`.
7. Bấm **Save**.

## Cần sửa sau khi deploy

Trong `robots.txt`, `sitemap.xml` và nếu cần trong `index.html`, đổi:

```txt
USERNAME
```

thành username GitHub thật của bạn.

Ví dụ:

```txt
https://USERNAME.github.io/tairoblox-fisch/
```

## Ghi chú kỹ thuật

- Đã xóa WordPress admin bar.
- Đã gỡ `wp-admin`, `wp-login`, customizer, edit block.
- Đã tắt API tải động để tránh lỗi CORS trên GitHub Pages.
- Đã tắt form comment submit vì GitHub Pages không chạy backend WordPress.
- Đã thêm `.nojekyll` để GitHub Pages không bỏ qua file/thư mục đặc biệt.
- Đã thêm `assets/github-fix.css` và `assets/github-fix.js` để fix responsive, mobile menu, rating sao và nút tải tĩnh.