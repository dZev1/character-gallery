FROM golang:1.26.0-alpine AS builder
WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -o main ./cmd/main.go

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/

RUN mkdir -p /root/internal/database/postgres_gallery/

COPY --from=builder /app/main .

COPY internal/database/postgres_gallery/schema.sql /root/internal/database/postgres_gallery/schema.sql

COPY item_pool.json .

EXPOSE 8080
CMD ["./main"]