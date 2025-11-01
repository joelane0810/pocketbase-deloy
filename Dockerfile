# Sử dụng Alpine Linux nhẹ
FROM alpine:latest

# Thiết lập thư mục làm việc
WORKDIR /app

# Cài unzip và curl để tải PocketBase
RUN apk add --no-cache unzip curl

# Tải PocketBase binary phiên bản ổn định
RUN curl -L https://github.com/pocketbase/pocketbase/releases/download/v0.22.14/pocketbase_0.22.14_linux_amd64.zip -o pb.zip && \
    unzip pb.zip && rm pb.zip

# Mở port (Render sẽ cấp biến môi trường PORT)
EXPOSE 8090

# Chạy PocketBase, dùng biến PORT nếu Render cấp
CMD ["sh", "-c", "./pocketbase serve --http=0.0.0.0:${PORT:-8090}"]
