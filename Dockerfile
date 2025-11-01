# Dùng Alpine Linux siêu nhẹ
FROM alpine:latest
WORKDIR /app

# Cài công cụ cần thiết
RUN apk add --no-cache unzip curl

# Tải PocketBase bản Linux tự động
RUN RUN curl -L https://github.com/pocketbase/pocketbase/releases/download/v0.22.14/pocketbase_0.22.14_linux_amd64.zip -o pb.zip && \
    unzip pb.zip && rm pb.zip

# Copy các thư mục hỗ trợ (nếu có)
COPY pb_migrations ./pb_migrations

# Mở port cho Render
EXPOSE 8090

# Chạy PocketBase server
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090"]


