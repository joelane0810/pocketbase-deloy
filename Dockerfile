# 1. Dùng image Alpine cơ bản
FROM alpine:latest

# 2. Tạo thư mục làm việc
WORKDIR /app

# 3. Cài unzip, curl để tải PocketBase
RUN apk add --no-cache unzip curl

# 4. Tạo thư mục dữ liệu persist và cấp quyền ghi
RUN mkdir -p /app/pb_data && chmod -R 777 /app/pb_data

# 5. Tải PocketBase stable Linux version
RUN curl -L https://github.com/pocketbase/pocketbase/releases/download/v0.22.14/pocketbase_0.22.14_linux_amd64.zip -o pb.zip && \
    unzip pb.zip && rm pb.zip

# 6. Expose port (Render sẽ dùng biến $PORT nếu cần)
EXPOSE 8090

# 7. Chạy PocketBase với thư mục dữ liệu persist
CMD ["sh", "-c", "./pocketbase serve --http=0.0.0.0:${PORT:-8090} --dir=/app/pb_data"]
