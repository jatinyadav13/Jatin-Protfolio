// command-palette.js - Quick Command & Navigation Menu (Ctrl+K)
(function () {
  const backdrop = document.getElementById('cmd-palette-backdrop');
  const input = document.getElementById('cmd-palette-input');
  const list = document.getElementById('cmd-palette-results');
  if (!backdrop || !input || !list) return;

  const commands = [
    {
      id: 'proj',
      title: 'Jump to Projects Showcase',
      category: 'Navigation',
      icon: 'folder-code',
      action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      id: 'skills',
      title: 'Jump to Skills & Technologies',
      category: 'Navigation',
      icon: 'cpu',
      action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      id: 'exp',
      title: 'Jump to Internship & Experience',
      category: 'Navigation',
      icon: 'briefcase',
      action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      id: 'certs',
      title: 'Jump to Certifications',
      category: 'Navigation',
      icon: 'award',
      action: () => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      id: 'about',
      title: 'Jump to About Me & Education',
      category: 'Navigation',
      icon: 'user',
      action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      id: 'contact',
      title: 'Jump to Contact Details',
      category: 'Navigation',
      icon: 'mail',
      action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      id: 'email',
      title: 'Copy Email: jy13july@gmail.com',
      category: 'Quick Action',
      icon: 'copy',
      action: () => {
        navigator.clipboard.writeText('jy13july@gmail.com');
        window.showToast?.('Email copied to clipboard: jy13july@gmail.com');
      }
    },
    {
      id: 'phone',
      title: 'Copy Phone: +91 9610704095',
      category: 'Quick Action',
      icon: 'phone',
      action: () => {
        navigator.clipboard.writeText('+919610704095');
        window.showToast?.('Phone copied to clipboard: +91 9610704095');
      }
    },
    {
      id: 'linkedin',
      title: 'Visit LinkedIn: linkedin.com/in/jatin713',
      category: 'Social Link',
      icon: 'external-link',
      action: () => window.open('https://linkedin.com/in/jatin713', '_blank')
    },
    {
      id: 'resume',
      title: 'View & Download Resume',
      category: 'Document',
      icon: 'file-text',
      action: () => window.openResumeModal?.()
    },
    {
      id: 'theme',
      title: 'Toggle Dark / Light Theme',
      category: 'Preferences',
      icon: 'sun-moon',
      action: () => window.toggleTheme?.()
    },
    {
      id: 'sound',
      title: 'Toggle UI Sound Effects',
      category: 'Preferences',
      icon: 'volume-2',
      action: () => {
        const enabled = window.SoundFX?.toggle();
        window.showToast?.(enabled ? 'UI Sound Effects Enabled 🔔' : 'UI Sound Effects Muted 🔕');
      }
    }
  ];

  let selectedIndex = 0;
  let filteredCommands = [...commands];

  function renderList() {
    list.innerHTML = '';
    if (filteredCommands.length === 0) {
      list.innerHTML = `<div class="p-4 text-center text-sm text-slate-400">No matching actions found. Try "email", "java", "project", or "resume".</div>`;
      return;
    }

    filteredCommands.forEach((cmd, idx) => {
      const item = document.createElement('div');
      item.className = `cmd-item ${idx === selectedIndex ? 'selected' : ''}`;
      item.innerHTML = `
        <i data-lucide="${cmd.icon}" class="w-4 h-4 text-indigo-400 flex-shrink-0"></i>
        <div class="flex-1 flex items-center justify-between">
          <span class="font-medium text-sm">${cmd.title}</span>
          <span class="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">${cmd.category}</span>
        </div>
      `;
      item.addEventListener('click', () => {
        executeCommand(cmd);
      });
      list.appendChild(item);
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function executeCommand(cmd) {
    window.SoundFX?.playClick();
    closePalette();
    cmd.action();
  }

  function openPalette() {
    window.SoundFX?.playClick();
    backdrop.classList.add('active');
    input.value = '';
    filteredCommands = [...commands];
    selectedIndex = 0;
    renderList();
    setTimeout(() => input.focus(), 50);
  }

  function closePalette() {
    backdrop.classList.remove('active');
  }

  // Keyboard shortcut listener
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (backdrop.classList.contains('active')) {
        closePalette();
      } else {
        openPalette();
      }
    } else if (e.key === 'Escape' && backdrop.classList.contains('active')) {
      closePalette();
    } else if (backdrop.classList.contains('active')) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % filteredCommands.length;
        renderList();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + filteredCommands.length) % filteredCommands.length;
        renderList();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          executeCommand(filteredCommands[selectedIndex]);
        }
      }
    }
  });

  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    filteredCommands = commands.filter(c => 
      c.title.toLowerCase().includes(query) || 
      c.category.toLowerCase().includes(query)
    );
    selectedIndex = 0;
    renderList();
  });

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closePalette();
    }
  });

  window.openCommandPalette = openPalette;
  window.closeCommandPalette = closePalette;
})();
