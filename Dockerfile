FROM ubuntu:22.04

# Install dependencies
RUN apt-get update && \
    apt-get install -y wget gnupg ca-certificates xauth xvfb libgtk-3-0 libdbus-glib-1-2 && \
    rm -rf /var/lib/apt/lists/*

# Download and extract the Tor Browser
RUN wget https://www.torproject.org/dist/torbrowser/13.0.14/tor-browser-linux64-13.0.14_ALL.tar.xz && \
    tar -xf tor-browser-linux64-13.0.14_ALL.tar.xz && \
    rm tor-browser-linux64-13.0.14_ALL.tar.xz

WORKDIR /tor-browser

# Start Tor Browser (headless Xvfb, then browser)
CMD ["bash", "-c", "xvfb-run --auto-servernum ./start-tor-browser.desktop"]