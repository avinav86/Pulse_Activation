FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy site files
COPY index.html app.js style.css conviva-config.js /usr/share/nginx/html/

# Copy nginx config — uses $PORT env var injected by Railway
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Railway injects $PORT at runtime; nginx-alpine's envsubst picks up templates automatically
EXPOSE $PORT

CMD ["nginx", "-g", "daemon off;"]
