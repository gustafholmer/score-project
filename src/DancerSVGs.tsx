interface DancerProps {
  className?: string
  style?: React.CSSProperties
  color?: string
}

export function DancerArabesque({ className, style, color = '#c0392b' }: DancerProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="12" r="7" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M40 19 L40 50" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M40 28 Q25 22 12 18" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M40 28 Q55 22 68 15" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M40 50 Q42 65 44 80" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M40 50 Q55 48 72 42" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path className="motion-line" d="M8 15 Q5 19 3 13" stroke={color} strokeWidth="2" opacity="0.4" />
      <path className="motion-line" d="M5 22 Q2 25 1 20" stroke={color} strokeWidth="1.5" opacity="0.3" style={{ animationDelay: '0.2s' }} />
      <path className="motion-line" d="M74 38 Q78 41 80 35" stroke={color} strokeWidth="2" opacity="0.4" style={{ animationDelay: '0.4s' }} />
      <path className="motion-line" d="M76 44 Q80 46 81 40" stroke={color} strokeWidth="1.5" opacity="0.3" style={{ animationDelay: '0.6s' }} />
    </svg>
  )
}

export function DancerPirouette({ className, style, color = '#c0392b' }: DancerProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="10" r="6" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M30 16 L30 52" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M30 26 Q18 14 24 4" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M30 26 Q42 14 36 4" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M30 52 L30 82" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M30 52 Q40 58 38 68" stroke={color} strokeWidth="3" strokeLinecap="round" />
      {/* Spin circle lines */}
      <path className="motion-line" d="M16 28 Q12 30 10 25" stroke={color} strokeWidth="2" opacity="0.4" />
      <path className="motion-line" d="M44 28 Q48 30 50 25" stroke={color} strokeWidth="2" opacity="0.4" style={{ animationDelay: '0.3s' }} />
      <path className="motion-line" d="M14 34 Q10 36 8 31" stroke={color} strokeWidth="1.5" opacity="0.3" style={{ animationDelay: '0.6s' }} />
      <path className="motion-line" d="M46 34 Q50 36 52 31" stroke={color} strokeWidth="1.5" opacity="0.3" style={{ animationDelay: '0.9s' }} />
      <path className="motion-line" d="M12 40 Q8 42 6 37" stroke={color} strokeWidth="1" opacity="0.2" style={{ animationDelay: '1.2s' }} />
    </svg>
  )
}

export function DancerJete({ className, style, color = '#c0392b' }: DancerProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="10" r="6" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M50 16 L50 42" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M50 24 Q35 18 22 22" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M50 24 Q62 16 74 12" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M50 42 Q62 44 78 38" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M50 42 Q38 48 22 52" stroke={color} strokeWidth="3" strokeLinecap="round" />
      {/* Air lines - showing height */}
      <path className="motion-line" d="M30 62 Q38 58 46 62" stroke={color} strokeWidth="2" opacity="0.4" />
      <path className="motion-line" d="M38 66 Q46 62 54 66" stroke={color} strokeWidth="1.5" opacity="0.3" style={{ animationDelay: '0.3s' }} />
      <path className="motion-line" d="M34 70 Q42 66 50 70" stroke={color} strokeWidth="1" opacity="0.2" style={{ animationDelay: '0.6s' }} />
      <path className="motion-line" d="M54 62 Q62 58 70 62" stroke={color} strokeWidth="1.5" opacity="0.3" style={{ animationDelay: '0.15s' }} />
    </svg>
  )
}

export function DancerPlie({ className, style, color = '#c0392b' }: DancerProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 70 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35" cy="12" r="6" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M35 18 L35 48" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M35 28 Q22 24 14 30" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M35 28 Q48 24 56 30" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M35 48 Q22 56 18 72" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M35 48 Q48 56 52 72" stroke={color} strokeWidth="3" strokeLinecap="round" />
      {/* Grace lines at hands */}
      <path className="motion-line" d="M10 28 Q8 32 6 27" stroke={color} strokeWidth="1.5" opacity="0.3" />
      <path className="motion-line" d="M60 28 Q62 32 64 27" stroke={color} strokeWidth="1.5" opacity="0.3" style={{ animationDelay: '0.4s' }} />
    </svg>
  )
}

export function FlowingRibbon({ className, style, color = '#c0392b' }: DancerProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 20 Q20 5 40 18 Q60 32 80 15 Q100 0 115 20"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d="M5 25 Q25 10 45 22 Q65 35 85 18 Q105 2 115 25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.2"
      />
      <path
        d="M10 30 Q30 15 50 26 Q70 38 90 20 Q110 5 115 28"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.15"
      />
    </svg>
  )
}

export function MusicNotes({ className, style, color = '#c0392b' }: DancerProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="32" rx="5" ry="3.5" transform="rotate(-20 12 32)" fill={color} opacity="0.25" />
      <path d="M16 30 L16 10" stroke={color} strokeWidth="2" opacity="0.25" />
      <path d="M16 10 Q22 8 20 14" stroke={color} strokeWidth="2" opacity="0.25" />
      <ellipse cx="34" cy="26" rx="4.5" ry="3" transform="rotate(-15 34 26)" fill={color} opacity="0.2" />
      <path d="M38 24 L38 6" stroke={color} strokeWidth="2" opacity="0.2" />
      <path d="M38 6 Q44 4 42 10" stroke={color} strokeWidth="2" opacity="0.2" />
      {/* Connecting beam */}
      <path d="M16 12 L38 8" stroke={color} strokeWidth="2" opacity="0.18" />
    </svg>
  )
}

export function Sparkle({ className, style, color = '#c0392b' }: DancerProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 3 L15 27" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      <path d="M3 15 L27 15" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      <path d="M7 7 L23 23" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
      <path d="M23 7 L7 23" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
      <circle cx="15" cy="15" r="2" fill={color} opacity="0.2" />
    </svg>
  )
}
