FROM alpine:latest
WORKDIR /app

RUN apk add --no-cache unzip curl

# Tải PocketBase bản Linux (phiên bản ổn định mới nhất)
RUN curl -L https://github.com/pocketbase/pocketbase/releases/download/v0.22.14/pocketbase_0.22.14_linux_amd64.zip -o pb.zip && \
    unzip pb.zip && rm pb.zip
EXPOSE 8090
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090"]



