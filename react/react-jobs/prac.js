// # Install nvm using Homebrew
// brew install nvm

// # Add these lines to your shell profile file (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc)
// echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bash_profile
// echo '[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm' >> ~/.bash_profile
// echo '[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion' >> ~/.bash_profile

// # Reload your shell
// source ~/.bash_profile

// # Install the required Node.js version
// nvm install 18.0.0

// # Use the installed version in your current shell
// nvm use 18.0.0

// # Set the default Node.js version for your project directory
// echo "18.0.0" > .nvmrc