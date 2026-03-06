export const initTerminal = () => {
  const input = document.getElementById('terminalInput');
  const output = document.getElementById('terminalOutput');

  if (!input || !output) return;

  const commands = {
    help: () => {
      return `Available commands:
  show about   - Navigate to About page
  show skill   - Navigate to Skill page
  show project - Navigate to Project page
  show history - Navigate to History page
  show contact - Navigate to Contact page
  clear        - Clear terminal output
  help         - Show this help message`;
    },
    clear: () => {
      output.innerHTML = '';
      return null;
    },
    'show about': () => navigateToPage('about'),
    'show skill': () => navigateToPage('skill'),
    'show project': () => navigateToPage('project'),
    'show history': () => navigateToPage('history'),
    'show contact': () => navigateToPage('contact'),
  };

  const navigateToPage = (page) => {
    addOutput(`Navigating to ${page}...`, 'success');
    setTimeout(() => {
      window.location.href = `/${page}/`;
    }, 500);
    return null;
  };

  const addOutput = (text, type = 'normal') => {
    const line = document.createElement('div');
    line.className = `terminal__line terminal__line--${type}`;
    line.textContent = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  };

  const processCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    addOutput(`$ ${cmd}`, 'input');

    if (!trimmedCmd) return;

    if (commands[trimmedCmd]) {
      const result = commands[trimmedCmd]();
      if (result) {
        addOutput(result, 'normal');
      }
    } else {
      addOutput(`Command not found: ${trimmedCmd}`, 'error');
      addOutput(`Type 'help' for available commands`, 'hint');
    }
  };

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value;
      processCommand(cmd);
      input.value = '';
    }
  });

  addOutput('Welcome! Type "help" to see available commands.', 'success');
};
