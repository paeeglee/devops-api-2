FROM oven/bun:latest

EXPOSE 3000

WORKDIR /app

COPY . .

RUN bun install

CMD ["bun", "run", "src/index.ts"]