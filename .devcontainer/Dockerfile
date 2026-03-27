FROM mcr.microsoft.com/devcontainers/base:noble
RUN apt-get update && apt-get install -y git-lfs
USER vscode
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash