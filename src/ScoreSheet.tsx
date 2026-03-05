import { useState, useRef, useEffect, useCallback } from 'react'
import {
  DancerArabesque,
  DancerPirouette,
  DancerJete,
  DancerPlie,
  FlowingRibbon,
  MusicNotes,
  Sparkle,
} from './DancerSVGs'

// Shared mouse position
const mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
let mouseListenerAdded = false
function ensureMouseListener() {
  if (mouseListenerAdded) return
  mouseListenerAdded = true
  window.addEventListener('mousemove', (e) => {
    mousePos.x = e.clientX
    mousePos.y = e.clientY
  })
}

const PROXIMITY_THRESHOLD = 120

function MouseFollower({
  children, startX, startY, lag = 0.02, radius = 60,
}: {
  children: React.ReactNode
  startX: number; startY: number; lag?: number; radius?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: startX, y: startY })
  const activated = useRef(false)
  const raf = useRef(0)

  const animate = useCallback(() => {
    if (!ref.current) return
    const dx = mousePos.x - pos.current.x
    const dy = mousePos.y - pos.current.y
    const dist = Math.sqrt(dx * dx + dy * dy)

    if (!activated.current) {
      if (dist < PROXIMITY_THRESHOLD) activated.current = true
      else {
        ref.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
        raf.current = requestAnimationFrame(animate)
        return
      }
    }

    const targetX = mousePos.x + radius
    const targetY = mousePos.y + radius
    pos.current.x += (targetX - pos.current.x) * lag
    pos.current.y += (targetY - pos.current.y) * lag
    const rot = (targetX - pos.current.x) * 0.12
    ref.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) rotate(${rot}deg)`
    raf.current = requestAnimationFrame(animate)
  }, [lag, radius])

  useEffect(() => {
    ensureMouseListener()
    raf.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf.current)
  }, [animate])

  return (
    <div ref={ref} className="fixed top-0 left-0 pointer-events-none" style={{ willChange: 'transform' }}>
      {children}
    </div>
  )
}

function vw(pct: number) { return window.innerWidth * pct / 100 }
function vh(pct: number) { return window.innerHeight * pct / 100 }

const RED = '#c0392b'

function BackgroundFollowers() {
  const dancers = [
    { C: DancerArabesque, x: 5, y: 8, w: 'w-32', o: 0.2, lag: 0.018, r: -80 },
    { C: DancerPirouette, x: 85, y: 5, w: 'w-28', o: 0.18, lag: 0.012, r: 70 },
    { C: DancerJete, x: 12, y: 38, w: 'w-36', o: 0.22, lag: 0.025, r: -50 },
    { C: DancerPlie, x: 82, y: 32, w: 'w-28', o: 0.18, lag: 0.015, r: 90 },
    { C: DancerPirouette, x: 6, y: 62, w: 'w-30', o: 0.2, lag: 0.022, r: -100 },
    { C: DancerArabesque, x: 88, y: 58, w: 'w-26', o: 0.17, lag: 0.01, r: 60 },
    { C: DancerJete, x: 45, y: 12, w: 'w-28', o: 0.16, lag: 0.02, r: -60 },
    { C: DancerPlie, x: 55, y: 78, w: 'w-26', o: 0.18, lag: 0.014, r: 75 },
    { C: DancerArabesque, x: 10, y: 85, w: 'w-30', o: 0.2, lag: 0.02, r: -45 },
    { C: DancerPirouette, x: 90, y: 82, w: 'w-24', o: 0.16, lag: 0.016, r: 85 },
  ]

  const ribbons = [
    { x: 8, y: 22, lag: 0.008, r: -120 },
    { x: 78, y: 48, lag: 0.01, r: 130 },
    { x: 42, y: 90, lag: 0.012, r: -90 },
  ]

  const notes = [
    { x: 38, y: 5, lag: 0.035, r: -30 },
    { x: 18, y: 48, lag: 0.04, r: 40 },
    { x: 72, y: 68, lag: 0.03, r: -50 },
  ]

  const sparkles = [
    { x: 25, y: 12, lag: 0.05, r: -20 },
    { x: 70, y: 20, lag: 0.06, r: 25 },
    { x: 10, y: 48, lag: 0.045, r: -35 },
    { x: 90, y: 52, lag: 0.055, r: 15 },
    { x: 50, y: 85, lag: 0.04, r: 20 },
    { x: 30, y: 70, lag: 0.05, r: -15 },
  ]

  return (
    <>
      {dancers.map((d, i) => (
        <MouseFollower key={`d${i}`} startX={vw(d.x)} startY={vh(d.y)} lag={d.lag} radius={d.r}>
          <d.C className={d.w} style={{ opacity: d.o }} color={RED} />
        </MouseFollower>
      ))}
      {ribbons.map((r, i) => (
        <MouseFollower key={`r${i}`} startX={vw(r.x)} startY={vh(r.y)} lag={r.lag} radius={r.r}>
          <FlowingRibbon className="w-40 animate-ribbon-wave" style={{ opacity: 0.2, '--ribbon-duration': `${3 + i}s` } as React.CSSProperties} color={RED} />
        </MouseFollower>
      ))}
      {notes.map((n, i) => (
        <MouseFollower key={`n${i}`} startX={vw(n.x)} startY={vh(n.y)} lag={n.lag} radius={n.r}>
          <MusicNotes className="w-14 animate-note-rise" style={{ opacity: 0.2, '--note-duration': `${2.5 + i * 0.5}s` } as React.CSSProperties} color={RED} />
        </MouseFollower>
      ))}
      {sparkles.map((s, i) => (
        <MouseFollower key={`s${i}`} startX={vw(s.x)} startY={vh(s.y)} lag={s.lag} radius={s.r}>
          <Sparkle className="w-8 animate-twinkle" style={{ '--twinkle-duration': `${3 + i * 0.5}s` } as React.CSSProperties} color={RED} />
        </MouseFollower>
      ))}
    </>
  )
}

const EMOTIONS = [
  { emoji: '\u{1F604}', label: 'Glädje' },
  { emoji: '\u{1F621}', label: 'Ilska' },
  { emoji: '\u{1F60C}', label: 'Lugn' },
  { emoji: '\u{1F622}', label: 'Sorg' },
  { emoji: '\u{1F92A}', label: 'Galen' },
  { emoji: '\u{1F60D}', label: 'Kärlek' },
]

const DANCE_MOVES = [
  'Pirouette', 'Chassé', 'Plié', 'Arabesque',
  'Jeté', 'Rond', 'Pas de deux', 'Fouetté',
  'Sauté', 'Glissade', 'Battement', 'Assemblé',
]

const LEVELS = ['Låg', 'Mellan', 'Hög'] as const
const GROUPS = [0, 1, 2] as const

type CellKey = string
type PickerSide = 'move' | 'emotion'
interface CellData { move: string | null; emotion: string | null }
interface Selections { [key: CellKey]: CellData }
const emptyCell: CellData = { move: null, emotion: null }

// Original design palette
const ACCENT = '#c0392b'
const ACCENT_LIGHT = '#e74c3c'
const GRID_LIGHT = '#f0d0cc'
const BG_PAPER = '#fdfaf6'
const TEXT_DARK = '#4a2020'
const TEXT_DIM = '#d4b5b5'

export default function ScoreSheet() {
  const [selections, setSelections] = useState<Selections>({})
  const [activePicker, setActivePicker] = useState<{ key: CellKey; side: PickerSide } | null>(null)
  const [flashCell, setFlashCell] = useState<CellKey | null>(null)
  const pickerRef = useRef<HTMLDivElement>(null)

  const cellKey = (group: number, level: number, col: 'slow' | 'fast') =>
    `${group}-${level}-${col}`

  const handleSelectMove = (key: CellKey, move: string) => {
    setSelections((prev) => {
      const current = prev[key] ?? emptyCell
      return { ...prev, [key]: { ...current, move: current.move === move ? null : move } }
    })
    setFlashCell(key)
    setTimeout(() => setFlashCell(null), 400)
    setActivePicker(null)
  }

  const handleSelectEmotion = (key: CellKey, emoji: string) => {
    setSelections((prev) => {
      const current = prev[key] ?? emptyCell
      return { ...prev, [key]: { ...current, emotion: current.emotion === emoji ? null : emoji } }
    })
    setFlashCell(key)
    setTimeout(() => setFlashCell(null), 400)
    setActivePicker(null)
  }

  const handleReset = () => {
    setSelections({})
    setActivePicker(null)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (pickerRef.current?.contains(target)) return
      if (target.closest('[data-cell-trigger]')) return
      setActivePicker(null)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      <BackgroundFollowers />

      <div className="w-full max-w-lg relative z-10">
        {/* Title */}
        <h1 className="text-center text-7xl mb-2 tracking-wide flex justify-center" style={{ fontFamily: "'Permanent Marker', cursive" }}>
          {'SCORE!'.split('').map((char, i) => (
            <span
              key={i}
              className="animate-letter-dance"
              style={{
                color: ACCENT,
                textShadow: '2px 2px 0 rgba(0,0,0,0.08)',
                '--bounce-y': `${-5 - (i % 3) * 2}px`,
                '--bounce-rot': `${(i % 2 === 0 ? 1 : -1) * (2 + i)}deg`,
                '--letter-duration': `${2 + i * 0.2}s`,
                '--letter-delay': `${i * 0.15}s`,
              } as React.CSSProperties}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <DancerPirouette
            className="w-7 h-7 animate-sway"
            style={{ '--sway-from': '-12deg', '--sway-to': '12deg', '--sway-duration': '2s' } as React.CSSProperties}
            color={ACCENT}
          />
          <p className="text-lg" style={{ fontFamily: "'Caveat', cursive", color: TEXT_DARK, fontWeight: 700 }}>
            {'rörelse + känsla'}
          </p>
          <DancerJete
            className="w-9 h-7 animate-sway"
            style={{ '--sway-from': '10deg', '--sway-to': '-10deg', '--sway-duration': '2.5s', animationDelay: '0.3s' } as React.CSSProperties}
            color={ACCENT}
          />
        </div>

        {/* Table */}
        <div
          className="relative rounded-sm"
          style={{
            border: `3px solid ${ACCENT}`,
            boxShadow: '3px 3px 0 rgba(0,0,0,0.06)',
            backgroundColor: BG_PAPER,
          }}
        >
          {/* Header */}
          <div className="grid grid-cols-[90px_1fr_1fr]" style={{ borderBottom: `3px solid ${ACCENT}` }}>
            <div className="p-2 text-center text-lg" style={{ fontFamily: "'Permanent Marker', cursive", color: ACCENT, borderRight: `2px solid ${ACCENT}` }}>
              {'Nivå'}
            </div>
            <div className="col-span-2 p-2 text-center text-xl" style={{ fontFamily: "'Permanent Marker', cursive", color: ACCENT }}>
              Hastighet
            </div>
          </div>

          {/* Sub-header */}
          <div className="grid grid-cols-[90px_1fr_1fr]" style={{ borderBottom: `3px solid ${ACCENT}` }}>
            <div style={{ borderRight: `2px solid ${ACCENT}` }} />
            <div className="p-2 text-center text-lg" style={{ fontFamily: "'Permanent Marker', cursive", color: '#7f1d1d', borderRight: `2px solid ${ACCENT}` }}>
              {'Långsam'}
            </div>
            <div className="p-2 text-center text-lg" style={{ fontFamily: "'Permanent Marker', cursive", color: '#7f1d1d' }}>
              Snabb
            </div>
          </div>

          {/* Rows */}
          {GROUPS.map((group) => (
            <div key={group}>
              {LEVELS.map((level, levelIdx) => {
                const slowKey = cellKey(group, levelIdx, 'slow')
                const fastKey = cellKey(group, levelIdx, 'fast')
                const isLastInGroup = levelIdx === 2
                const isLastGroup = group === 2

                return (
                  <div
                    key={`${group}-${levelIdx}`}
                    className="grid grid-cols-[90px_1fr_1fr]"
                    style={{
                      borderBottom:
                        isLastGroup && isLastInGroup ? 'none'
                          : isLastInGroup ? `4px solid ${ACCENT}`
                          : `1.5px solid ${GRID_LIGHT}`,
                    }}
                  >
                    <div
                      className="p-3 flex items-center justify-center text-xl"
                      style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, color: TEXT_DARK, borderRight: `2px solid ${ACCENT}` }}
                    >
                      {level}
                    </div>

                    <DualCell
                      cellKey={slowKey}
                      data={selections[slowKey] ?? emptyCell}
                      activePicker={activePicker}
                      isFlashing={flashCell === slowKey}
                      onActivate={(side) => setActivePicker(activePicker?.key === slowKey && activePicker?.side === side ? null : { key: slowKey, side })}
                      onSelectMove={(m) => handleSelectMove(slowKey, m)}
                      onSelectEmotion={(e) => handleSelectEmotion(slowKey, e)}
                      pickerRef={activePicker?.key === slowKey ? pickerRef : undefined}
                      borderRight
                    />
                    <DualCell
                      cellKey={fastKey}
                      data={selections[fastKey] ?? emptyCell}
                      activePicker={activePicker}
                      isFlashing={flashCell === fastKey}
                      onActivate={(side) => setActivePicker(activePicker?.key === fastKey && activePicker?.side === side ? null : { key: fastKey, side })}
                      onSelectMove={(m) => handleSelectMove(fastKey, m)}
                      onSelectEmotion={(e) => handleSelectEmotion(fastKey, e)}
                      pickerRef={activePicker?.key === fastKey ? pickerRef : undefined}
                    />
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        {/* Reset */}
        <div className="flex justify-center mt-5">
          <button
            onClick={handleReset}
            className="px-6 py-2 text-lg cursor-pointer snap-hover"
            style={{
              fontFamily: "'Permanent Marker', cursive",
              color: ACCENT,
              background: 'transparent',
              border: `2px solid ${ACCENT}`,
              borderRadius: '6px',
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

function DualCell({
  cellKey: key, data, activePicker, isFlashing, onActivate, onSelectMove, onSelectEmotion, pickerRef, borderRight,
}: {
  cellKey: string; data: CellData; activePicker: { key: string; side: PickerSide } | null; isFlashing: boolean
  onActivate: (side: PickerSide) => void; onSelectMove: (move: string) => void; onSelectEmotion: (emoji: string) => void
  pickerRef?: React.RefObject<HTMLDivElement | null>; borderRight?: boolean
}) {
  const isMoveActive = activePicker?.key === key && activePicker?.side === 'move'
  const isEmotionActive = activePicker?.key === key && activePicker?.side === 'emotion'

  return (
    <div
      className={`relative flex min-h-[52px] ${isFlashing ? 'animate-cell-flash' : ''}`}
      style={{ borderRight: borderRight ? `2px solid ${ACCENT}` : undefined }}
    >
      {/* Move */}
      <div
        data-cell-trigger
        className="flex-1 flex items-center justify-center cursor-pointer p-1"
        style={{ borderRight: `1px dashed ${GRID_LIGHT}`, backgroundColor: isMoveActive ? 'rgba(192,57,43,0.05)' : 'transparent' }}
        onClick={() => onActivate('move')}
      >
        {data.move && !isMoveActive && (
          <span className="text-sm font-bold px-2 py-0.5 rounded animate-selected-pulse" style={{ fontFamily: "'Caveat', cursive", color: TEXT_DARK, backgroundColor: 'rgba(192,57,43,0.08)' }}>
            {data.move}
          </span>
        )}
        {!data.move && !isMoveActive && (
          <span className="text-sm" style={{ color: TEXT_DIM, fontFamily: "'Caveat', cursive" }}>...</span>
        )}
        {isMoveActive && (
          <div ref={pickerRef} className="absolute z-10 left-0 top-full mt-1 flex flex-wrap gap-1.5 p-3 rounded-lg min-w-[220px] animate-pop-in" style={{ backgroundColor: BG_PAPER, border: `2px solid ${ACCENT}`, boxShadow: '3px 3px 0 rgba(0,0,0,0.08)' }}>
            {DANCE_MOVES.map((move, i) => (
              <button
                key={move}
                onClick={(e) => { e.stopPropagation(); onSelectMove(move) }}
                className="px-2 py-0.5 rounded text-sm font-bold cursor-pointer animate-chip-pop snap-hover"
                style={{
                  fontFamily: "'Caveat', cursive", color: TEXT_DARK,
                  backgroundColor: data.move === move ? 'rgba(192,57,43,0.12)' : 'transparent',
                  border: `1.5px solid ${data.move === move ? ACCENT : GRID_LIGHT}`,
                  '--chip-rot': `${(i % 3 - 1) * 2}deg`, '--chip-delay': `${i * 0.03}s`,
                } as React.CSSProperties}
              >
                {move}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Emotion */}
      <div
        data-cell-trigger
        className="w-[44px] flex items-center justify-center cursor-pointer p-1"
        style={{ backgroundColor: isEmotionActive ? 'rgba(192,57,43,0.05)' : 'transparent' }}
        onClick={() => onActivate('emotion')}
      >
        {data.emotion && !isEmotionActive && <span className="text-xl animate-selected-pulse">{data.emotion}</span>}
        {!data.emotion && !isEmotionActive && <span className="text-sm" style={{ color: TEXT_DIM }}>{'~'}</span>}
        {isEmotionActive && (
          <div ref={pickerRef} className="absolute z-10 right-0 top-full mt-1 flex flex-wrap gap-1 p-2 rounded-lg animate-pop-in" style={{ backgroundColor: BG_PAPER, border: `2px solid ${ACCENT}`, boxShadow: '3px 3px 0 rgba(0,0,0,0.08)' }}>
            {EMOTIONS.map((opt, i) => (
              <button
                key={opt.emoji} title={opt.label}
                onClick={(e) => { e.stopPropagation(); onSelectEmotion(opt.emoji) }}
                className="text-xl p-1 rounded-lg cursor-pointer animate-chip-pop snap-hover"
                style={{ background: data.emotion === opt.emoji ? 'rgba(192,57,43,0.1)' : 'transparent', border: 'none', '--chip-delay': `${i * 0.04}s`, '--chip-rot': '0deg' } as React.CSSProperties}
              >
                {opt.emoji}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
