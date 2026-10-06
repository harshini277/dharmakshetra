// Native Web Audio API Generative Synthesizer for Dharmakshetra Graphic Novel Game
// Provides atmospheric D-minor drone, tanpura harmonic resonance, and comic sound triggers.

class AudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private droneGain: GainNode | null = null;
  private droneOscillators: OscillatorNode[] = [];
  private lfoOsc: OscillatorNode | null = null;
  private isInitialized = false;
  private isMuted = false;
  private masterVolume = 0.4;
  private activePreset: string = 'embers';

  public init() {
    if (this.isInitialized) return;

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.masterVolume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.isInitialized = true;
      this.startDrone();
    } catch (e) {
      console.warn("Web Audio API not supported or blocked", e);
    }
  }

  public resumeContext() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private startDrone() {
    if (!this.ctx || !this.masterGain) return;

    this.stopDrone();

    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.2, this.ctx.currentTime);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(280, this.ctx.currentTime);

    // D-minor frequencies (D2, A2, D3, F3, A3)
    const freqs = [73.42, 110.00, 146.83, 174.61, 220.00];

    freqs.forEach((freq, idx) => {
      if (!this.ctx || !this.droneGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      const detuneAmount = (idx - 2) * 2.5;
      osc.detune.setValueAtTime(detuneAmount, this.ctx.currentTime);

      const vol = idx === 0 ? 0.35 : 0.15 / (idx + 1);
      gain.gain.setValueAtTime(vol, this.ctx.currentTime);

      osc.connect(gain);
      gain.connect(filter);
      osc.start();
      this.droneOscillators.push(osc);
    });

    this.lfoOsc = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    this.lfoOsc.frequency.setValueAtTime(0.15, this.ctx.currentTime);
    lfoGain.gain.setValueAtTime(80, this.ctx.currentTime);

    this.lfoOsc.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    this.lfoOsc.start();

    filter.connect(this.droneGain);
    this.droneGain.connect(this.masterGain);
  }

  private stopDrone() {
    this.droneOscillators.forEach(osc => {
      try { osc.stop(); osc.disconnect(); } catch {}
    });
    this.droneOscillators = [];

    if (this.lfoOsc) {
      try { this.lfoOsc.stop(); this.lfoOsc.disconnect(); } catch {}
      this.lfoOsc = null;
    }

    if (this.droneGain) {
      try { this.droneGain.disconnect(); } catch {}
      this.droneGain = null;
    }
  }

  public setAtmospherePreset(preset: 'embers' | 'divine' | 'forest' | 'ink') {
    this.activePreset = preset;
    if (!this.ctx || !this.droneGain) return;

    if (this.activePreset === 'divine') {
      this.droneGain.gain.setTargetAtTime(0.25, this.ctx.currentTime, 1);
    } else if (this.activePreset === 'embers') {
      this.droneGain.gain.setTargetAtTime(0.3, this.ctx.currentTime, 1);
    } else {
      this.droneGain.gain.setTargetAtTime(0.18, this.ctx.currentTime, 1);
    }
  }

  public playSoundFx(type: 'bell' | 'gong' | 'thunder' | 'divine' | 'click' | 'slash' | 'thwack') {
    if (!this.isInitialized || this.isMuted || !this.ctx || !this.masterGain) return;
    this.resumeContext();

    const now = this.ctx.currentTime;

    switch (type) {
      case 'slash': { // SHING! Sword slash sound
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(1400, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.15);

        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now);
        osc.stop(now + 0.15);
        break;
      }

      case 'thwack': { // THWACK! Heavy mace impact
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.exponentialRampToValueAtTime(30, now + 0.2);

        gain.gain.setValueAtTime(0.5, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now);
        osc.stop(now + 0.2);
        break;
      }

      case 'click': {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(120, now + 0.05);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now);
        osc.stop(now + 0.05);
        break;
      }

      case 'bell': {
        const frequencies = [587.33, 880, 1174.66, 1760];
        frequencies.forEach((f, i) => {
          if (!this.ctx || !this.masterGain) return;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, now);

          const vol = 0.2 / (i + 1);
          gain.gain.setValueAtTime(vol, now);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5 - i * 0.4);

          osc.connect(gain);
          gain.connect(this.masterGain);
          osc.start(now);
          osc.stop(now + 2.5);
        });
        break;
      }

      case 'gong': {
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc1.type = 'sine';
        osc2.type = 'triangle';

        osc1.frequency.setValueAtTime(110, now);
        osc2.frequency.setValueAtTime(113.5, now);

        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.0);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.masterGain);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 4.0);
        osc2.stop(now + 4.0);
        break;
      }

      case 'thunder': {
        const bufferSize = this.ctx.sampleRate * 1.5;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = this.ctx.createBufferSource();
        whiteNoise.buffer = buffer;

        const noiseFilter = this.ctx.createBiquadFilter();
        noiseFilter.type = 'lowpass';
        noiseFilter.frequency.setValueAtTime(800, now);
        noiseFilter.frequency.exponentialRampToValueAtTime(40, now + 1.2);

        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(0.5, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 1.5);

        const subOsc = this.ctx.createOscillator();
        subOsc.type = 'sawtooth';
        subOsc.frequency.setValueAtTime(90, now);
        subOsc.frequency.exponentialRampToValueAtTime(20, now + 1.0);

        const subGain = this.ctx.createGain();
        subGain.gain.setValueAtTime(0.5, now);
        subGain.gain.exponentialRampToValueAtTime(0.001, now + 1.0);

        whiteNoise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(this.masterGain);

        subOsc.connect(subGain);
        subGain.connect(this.masterGain);

        whiteNoise.start(now);
        subOsc.start(now);
        whiteNoise.stop(now + 1.5);
        subOsc.stop(now + 1.0);
        break;
      }

      case 'divine': {
        const notes = [440, 554.37, 659.25, 880, 1108.73];
        notes.forEach((freq, idx) => {
          if (!this.ctx || !this.masterGain) return;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);

          gain.gain.setValueAtTime(0, now + idx * 0.08);
          gain.gain.linearRampToValueAtTime(0.2, now + idx * 0.08 + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 2.0);

          osc.connect(gain);
          gain.connect(this.masterGain);

          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 2.0);
        });
        break;
      }
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.masterVolume, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public setVolume(vol: number) {
    this.masterVolume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx && !this.isMuted) {
      this.masterGain.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
    }
  }

  public getVolume(): number {
    return this.masterVolume;
  }
}

export const audioEngine = new AudioEngine();
