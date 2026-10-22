// audio.js - Synthesized Web Audio UI sound effects (Zero external dependencies)
(function () {
  let audioCtx = null;
  let isSoundEnabled = localStorage.getItem('jatin_portfolio_sound') === 'true';

  function initAudio() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playTone(freq, type, duration, gainValue = 0.05) {
    if (!isSoundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(gainValue, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio not permitted or context blocked
    }
  }

  window.SoundFX = {
    isEnabled: () => isSoundEnabled,
    toggle: () => {
      isSoundEnabled = !isSoundEnabled;
      localStorage.setItem('jatin_portfolio_sound', isSoundEnabled);
      if (isSoundEnabled) {
        window.SoundFX.playToggle();
      }
      return isSoundEnabled;
    },
    playClick: () => {
      playTone(520, 'sine', 0.08, 0.03);
    },
    playToggle: () => {
      playTone(680, 'triangle', 0.12, 0.04);
      setTimeout(() => playTone(840, 'sine', 0.1, 0.04), 60);
    },
    playSuccess: () => {
      playTone(587.33, 'sine', 0.1, 0.04); // D5
      setTimeout(() => playTone(880, 'sine', 0.2, 0.04), 90); // A5
    },
    playTerminalRun: () => {
      playTone(330, 'sawtooth', 0.08, 0.02);
      setTimeout(() => playTone(440, 'sine', 0.08, 0.025), 50);
      setTimeout(() => playTone(660, 'triangle', 0.15, 0.03), 110);
    }
  };
})();
