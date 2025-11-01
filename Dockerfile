FROM alpine:latest
WORKDIR /app

# Cài unzip và curl
RUN apk add --no-cache unzip curl

# Tải PocketBase binary
RUN curl -L https://github.com/pocketbase/pocketbase/releases/download/v0.22.14/pocketbase_0.22.14_linux_amd64.zip -o pb.zip && \
    unzip pb.zip && rm pb.zip

# Expose port mà Render sẽ dùng
EXPOSE 8090

# Lệnh chạy PocketBase
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090"]
