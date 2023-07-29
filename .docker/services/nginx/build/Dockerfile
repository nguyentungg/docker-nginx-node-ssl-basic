FROM nginx:1.25

LABEL maintainer="thanhtung4693@gmail.com"

# Tạo thư mục cho file log
RUN mkdir -p /var/www/app/.docker/services/nginx/logs/
RUN mkdir -p /var/www/app/.docker/services/nginx/certs/

# Install modules
RUN apt-get update && apt-get install -y \
    g++ \
    zip \
    vim \
    curl \
    openssl \
    libssl-dev \
    --no-install-recommends apt-utils \
    && rm -r /var/lib/apt/lists/*

WORKDIR /var/www/app
