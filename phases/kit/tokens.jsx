// Shared design tokens & UI primitives for the Settings Forms redesign.
// All components export to window.
// Wrapped in an IIFE so Babel's per-file `_excluded` helper (used by
// `_objectWithoutProperties` destructures) doesn't leak across script files
// and clobber other files' destructure exclusion lists.
(function () {

// ─── Design tokens ─────────────────────────────────────────────────────
// Every value is a CSS var() reference into Core365's `colors_and_type.css`
// with a hex fallback. That way:
//   • Inside the Core365 design system (where colors_and_type.css is loaded)
//     these resolve to the canonical brand tokens — a single source of truth.
//   • Standalone (when this kit is previewed without Core365 CSS), the
//     fallbacks kick in and the kit still renders correctly.
// Don't add raw hex codes here — extend Core365's CSS variables instead.
const C = {
  // surface
  bg:           'var(--c365-bg, #FAFBFC)',
  surface:      'var(--c365-surface, #FFFFFF)',
  panel:        'var(--c365-panel, #E2E2E2)',
  track:        'var(--c365-track, #F6F4F0)',
  // Sidebar / list-rail fill — matches the kit CSS `.sf-list-col` (var(--c-bg)).
  // FormCard header & footer use this so the chrome reads as one surface.
  listBg:       'var(--c-bg, #FAFBFC)',
  // borders
  border:       'var(--c365-line, #D9DDE3)',
  borderStrong: 'var(--c365-line, #D9DDE3)',
  // text
  ink:          'var(--c365-ink, #1F2433)',
  text:         'var(--c365-ink-2, #3A4151)',
  muted:        'var(--c365-ink-3, #6B7384)',
  subtle:       'var(--c365-ink-4, #99A0AE)',
  // brand (Core365 orange)
  brand:        'var(--c365-orange, #F2691A)',
  brandHover:   'var(--c365-orange-600, #D55812)',
  brandSoft:    'var(--c365-orange-50, #FFF5EE)',
  brandBorder:  'var(--c365-orange-200, #FDD3BB)',
  // action (Steel Blue — Save / Create primary)
  action:       'var(--c365-steel, #5A739F)',
  actionHover:  'var(--c365-steel-600, #485E85)',
  actionBorder: 'var(--c365-steel-600, #485E85)',
  actionSoft:   'var(--c365-steel-50, #F3F6FB)',
  // semantic
  green:        'var(--c365-affirm, #08A742)',
  greenSoft:    'var(--c365-affirm-bg, #E1F4E7)',
  greenBorder:  'var(--c365-affirm-bg, #E1F4E7)',
  red:          'var(--c365-danger, #E7505B)',
  redSoft:      'var(--c365-danger-bg, #FCE6E8)',
  amber:        'var(--c365-hold-fg, #6B5300)',
  amberSoft:    'var(--c365-hold-bg, #FFF4C7)',
  blue:         'var(--c365-info, #578FC7)',
  blueSoft:     'var(--c365-info-bg, #E4EEF8)',
  // depth
  shadowSm:     'var(--shadow-1, 0 1px 0 rgba(20,28,51,0.04), 0 1px 2px rgba(20,28,51,0.06))',
  shadow:       'var(--shadow-2, 0 2px 4px rgba(20,28,51,0.06), 0 4px 12px rgba(20,28,51,0.06))',
  shadowLg:     'var(--shadow-3, 0 8px 16px rgba(20,28,51,0.08), 0 16px 32px rgba(20,28,51,0.08))',
};

// ─── Icons (inline SVG, currentColor) ───────────────────────────────────
const Icon = ({ d, size = 16, stroke = 1.6, fill = 'none', children, style, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flex: '0 0 auto', ...style }}>
    {d ? <path d={d} /> : children}
  </svg>
);
const I = {
  search: (p) => <Icon {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></Icon>,
  plus: (p) => <Icon {...p}><path d="M12 5v14M5 12h14" /></Icon>,
  check: (p) => <Icon {...p}><path d="M4 12.5 9 17.5 20 6.5" /></Icon>,
  x: (p) => <Icon {...p}><path d="M6 6l12 12M18 6 6 18" /></Icon>,
  chevDown: (p) => <Icon {...p}><path d="m6 9 6 6 6-6" /></Icon>,
  chevRight: (p) => <Icon {...p}><path d="m9 6 6 6-6 6" /></Icon>,
  chevLeft: (p) => <Icon {...p}><path d="m15 6-6 6 6 6" /></Icon>,
  dots: (p) => <Icon {...p}><circle cx="5" cy="12" r="1.4" fill="currentColor"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/><circle cx="19" cy="12" r="1.4" fill="currentColor"/></Icon>,
  filter: (p) => <Icon {...p}><path d="M4 5h16M7 12h10M10 19h4" /></Icon>,
  upload: (p) => <Icon {...p}><path d="M12 4v12M7 9l5-5 5 5M5 20h14" /></Icon>,
  download: (p) => <Icon {...p}><path d="M12 4v12M7 11l5 5 5-5M5 20h14" /></Icon>,
  edit: (p) => <Icon {...p}><path d="m4 20 4-1 11-11-3-3L5 16l-1 4Z" /><path d="m14 6 3 3" /></Icon>,
  copy: (p) => <Icon {...p}><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></Icon>,
  archive: (p) => <Icon {...p}><rect x="3" y="4" width="18" height="4" rx="1" /><path d="M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8M10 12h4" /></Icon>,
  trash: (p) => <Icon {...p}><path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13" /></Icon>,
  alert: (p) => <Icon {...p}><path d="M12 4 2 20h20L12 4ZM12 10v5M12 18v.5" /></Icon>,
  info: (p) => <Icon {...p}><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7.5v.5" /></Icon>,
  cog: (p) => <Icon {...p} stroke={1.7}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></Icon>,
  grip: (p) => <Icon {...p}><circle cx="9" cy="7" r="1" fill="currentColor"/><circle cx="15" cy="7" r="1" fill="currentColor"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="17" r="1" fill="currentColor"/><circle cx="15" cy="17" r="1" fill="currentColor"/></Icon>,
  arrowRight: (p) => <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6"/></Icon>,
  arrowLeft: (p) => <Icon {...p}><path d="M19 12H5M11 18 5 12l6-6"/></Icon>,
  save: (p) => <Icon {...p}><path d="M5 4h11l3 3v13H5zM8 4v5h7V4M8 14h8v6H8z"/></Icon>,
  file: (p) => <Icon {...p}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM14 3v6h6"/></Icon>,
  link: (p) => <Icon {...p}><path d="M10 14a4 4 0 0 1 0-5.6l3-3a4 4 0 0 1 5.6 5.6l-1.5 1.5M14 10a4 4 0 0 1 0 5.6l-3 3a4 4 0 0 1-5.6-5.6L7 11.5"/></Icon>,
  history: (p) => <Icon {...p}><path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5M12 7v5l3 2"/></Icon>,
  sheet: (p) => <Icon {...p}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M3 14h18M9 4v16M15 4v16"/></Icon>,
  popout: (p) => <Icon {...p}><path d="M14 4h6v6M20 4l-8 8M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"/></Icon>,
};

// ─── Primitive UI ──────────────────────────────────────────────────────
const Btn = ({ kind = 'ghost', size = 'md', children, leftIcon, rightIcon, onClick, disabled, style, active, type = 'button', className }) => {
  const [hover, setHover] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const sizes = {
    sm: { padding: '5px 9px', fontSize: 12.5, height: 28, gap: 6, iconSize: 14 },
    md: { padding: '7px 12px', fontSize: 13, height: 32, gap: 6, iconSize: 15 },
    lg: { padding: '9px 16px', fontSize: 14, height: 38, gap: 8, iconSize: 16 },
  }[size];
  const kinds = {
    primary: { background: C.brand, color: '#fff', border: `1px solid ${C.brand}`, boxShadow: '0 1px 0 rgba(0,0,0,0.04)' },
    // `action` — Save / Create. Steel Blue per Core365 brand spec; visually
    // balances the orange primary so destructive-looking-orange isn't on
    // every modal footer.
    action: { background: C.action, color: '#fff', border: `1px solid ${C.actionBorder}`, boxShadow: '0 1px 0 rgba(0,0,0,0.04)' },
    secondary: { background: C.surface, color: C.ink, border: `1px solid ${C.borderStrong}`, boxShadow: C.shadowSm },
    ghost: { background: 'transparent', color: C.text, border: `1px solid transparent` },
    soft: { background: C.brandSoft, color: C.brand, border: `1px solid ${C.brandBorder}` },
    danger: { background: 'transparent', color: C.red, border: `1px solid transparent` },
  }[kind];
  // Hover/press treatments. Filled kinds (primary, action, soft) darken via
  // brightness; ghost/secondary lighten their background and lift slightly.
  const filled = kind === 'primary' || kind === 'action' || kind === 'soft';
  const hoverStyle = !disabled && (hover || pressed) ? (
    filled
      ? { filter: pressed ? 'brightness(0.95)' : 'brightness(1.1)', boxShadow: pressed ? '0 0 0 rgba(0,0,0,0)' : '0 2px 6px rgba(20,16,10,0.12), 0 1px 0 rgba(0,0,0,0.04)' }
      : kind === 'secondary'
        ? { background: '#FAFAF7', border: `1px solid ${C.border}`, boxShadow: pressed ? C.shadowSm : '0 2px 6px rgba(20,16,10,0.08), 0 1px 0 rgba(20,16,10,0.03)' }
        : kind === 'danger'
          ? { background: C.redSoft }
          : { background: C.track }
  ) : {};
  return (
    <button type={type} className={className}
      onClick={(e) => { e.currentTarget.blur(); onClick?.(e); }}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onBlur={() => { setHover(false); setPressed(false); }}
      style={{
        ...kinds,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: sizes.gap,
        padding: sizes.padding, height: sizes.height, fontSize: sizes.fontSize, lineHeight: 'normal',
        fontFamily: 'inherit', fontWeight: 500, letterSpacing: '-0.005em',
        borderRadius: 6, cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1, whiteSpace: 'nowrap',
        outline: 'none', WebkitTapHighlightColor: 'transparent',
        transition: 'filter .12s, background .12s, box-shadow .12s, transform .04s',
        transform: pressed && !disabled ? 'translateY(0.5px)' : 'translateY(0)',
        ...(active ? { background: C.brandSoft, color: C.brand, borderColor: C.brandBorder } : {}),
        ...style,
        ...hoverStyle,
      }}>
      {leftIcon && React.cloneElement(leftIcon, { size: sizes.iconSize })}
      {children}
      {rightIcon && React.cloneElement(rightIcon, { size: sizes.iconSize })}
    </button>
  );
};

// LinkBtn — borderless text button with optional leading icon.
// Used for inline actions like bulk-edit Activate/Deactivate where button
// chrome would compete with the row chrome.
const LinkBtn = ({ icon, rightIcon, children, onClick, disabled, muted, style }) => (
  <button type="button" onClick={onClick} disabled={disabled}
    style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: 'transparent', border: 'none', padding: '4px 2px',
      color: disabled ? C.subtle : (muted ? C.muted : C.brand),
      fontFamily: 'inherit', fontSize: 12.5, fontWeight: 600, letterSpacing: '-0.005em',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1, whiteSpace: 'nowrap',
      textDecoration: 'none',
      ...style,
    }}
    onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.textDecoration = 'underline'; }}
    onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}
  >
    {icon}
    {children}
    {rightIcon}
  </button>
);

const Field = ({ label, hint, required, error, children, style, labelStyle, htmlFor }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 5, ...style }}>
    {label && (
      <label htmlFor={htmlFor} style={{ fontSize: 12, fontWeight: 500, color: error ? C.red : '#2A2A2A', letterSpacing: '0.01em', ...labelStyle }}>
        {label}{required && <span style={{ marginLeft: 3 }}>*</span>}
      </label>
    )}
    {children}
    {hint && !error && <div style={{ fontSize: 11.5, color: C.subtle }}>{hint}</div>}
  </div>
);

const Input = ({ value, onChange, placeholder, prefix, suffix, style, error, readOnly, disabled, type = 'text', autoFocus, onKeyDown, onFocus, onBlur }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: 6,
    background: C.surface, border: `1px solid ${error ? C.red : C.border}`, borderRadius: 6,
    padding: '0 10px', height: 34, transition: 'border-color .12s, box-shadow .12s',
    ...(error ? { boxShadow: `0 0 0 3px ${C.redSoft}` } : {}),
    ...(disabled ? { opacity: 0.5 } : {}),
    ...style,
  }}
    onFocus={(e) => { e.currentTarget.style.borderColor = error ? C.red : C.brand; e.currentTarget.style.boxShadow = `0 0 0 3px ${error ? C.redSoft : C.brandSoft}`; }}
    onBlur={(e) => { e.currentTarget.style.borderColor = error ? C.red : C.border; e.currentTarget.style.boxShadow = error ? `0 0 0 3px ${C.redSoft}` : 'none'; }}
  >
    {prefix && <div style={{ color: C.subtle, display: 'flex' }}>{prefix}</div>}
    <input value={value ?? ''} onChange={onChange} placeholder={placeholder}
      readOnly={readOnly ?? (value !== undefined && !onChange)}
      disabled={disabled}
      type={type}
      autoFocus={autoFocus}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
      style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: 13, color: C.ink, fontFamily: 'inherit', minWidth: 0 }}
    />
    {suffix && <div style={{ color: C.subtle, display: 'flex' }}>{suffix}</div>}
  </div>
);

const Select = ({ value, onChange, options, placeholder = 'Select', style }) => (
  <div style={{ position: 'relative', ...style }}>
    <select value={value ?? ''} onChange={onChange}
      style={{ width: '100%', appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none',
        background: C.surface, border: `1px solid ${C.border}`, borderRadius: 6,
        padding: '0 28px 0 10px', height: 34, fontSize: 13, color: value ? C.ink : C.subtle, fontFamily: 'inherit', cursor: 'pointer' }}
    >
      <option value="" disabled>{placeholder}</option>
      {(options || []).map(o => typeof o === 'string'
        ? <option key={o} value={o}>{o}</option>
        : <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
    <div style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', color: C.subtle, pointerEvents: 'none' }}>
      <I.chevDown size={14} />
    </div>
  </div>
);

const Textarea = ({ value, onChange, rows = 4, placeholder, style }) => (
  <textarea value={value ?? ''} onChange={onChange} rows={rows} placeholder={placeholder}
    style={{ width: '100%', background: C.surface, border: `1px solid ${C.border}`, borderRadius: 6,
      padding: '8px 10px', fontSize: 13, color: C.ink, fontFamily: 'inherit', resize: 'vertical',
      outline: 'none', transition: 'border-color .12s, box-shadow .12s', ...style }}
    onFocus={(e) => { e.currentTarget.style.borderColor = C.brand; e.currentTarget.style.boxShadow = `0 0 0 3px ${C.brandSoft}`; }}
    onBlur={(e) => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = 'none'; }}
  />
);

const Toggle = ({ checked, onChange, size = 'md' }) => {
  const w = size === 'sm' ? 28 : 32, h = size === 'sm' ? 16 : 18, k = h - 4;
  return (
    <button type="button" onClick={() => onChange?.(!checked)}
      style={{ width: w, height: h, padding: 0, border: 'none', borderRadius: 999,
        background: checked ? C.brand : C.borderStrong, position: 'relative', cursor: 'pointer',
        transition: 'background .15s', flex: '0 0 auto' }}
    >
      <span style={{ position: 'absolute', top: 2, left: checked ? w - k - 2 : 2, width: k, height: k,
        background: '#fff', borderRadius: '50%', transition: 'left .15s', boxShadow: '0 1px 2px rgba(0,0,0,0.2)' }} />
    </button>
  );
};

const Pill = ({ tone = 'neutral', children, style, onClick }) => {
  const tones = {
    neutral: { bg: '#F1EEE7', color: C.muted, border: '#E2DDD3' },
    active: { bg: C.greenSoft, color: C.green, border: C.greenBorder },
    inactive: { bg: '#F1EEE7', color: C.muted, border: '#E2DDD3' },
    primary: { bg: C.brandSoft, color: C.brand, border: C.brandBorder },
    secondary: { bg: C.blueSoft, color: C.blue, border: '#C3D6F4' },
    warning: { bg: C.amberSoft, color: C.amber, border: '#EBD2A0' },
    danger: { bg: C.redSoft, color: C.red, border: '#EFC7C7' },
  }[tone];
  return (
    <span onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      background: tones.bg, color: tones.color, border: `1px solid ${tones.border}`,
      padding: '2px 8px', borderRadius: 999, fontSize: 11.5, fontWeight: 500, letterSpacing: '0.005em',
      cursor: onClick ? 'pointer' : 'default', whiteSpace: 'nowrap',
      ...style,
    }}>{children}</span>
  );
};

const Tabs = ({ tabs, value, onChange, style }) => (
  <div style={{ display: 'flex', gap: 2, borderBottom: `1px solid ${C.border}`, ...style }}>
    {tabs.map(t => {
      const active = (t.value ?? t) === value;
      return (
        <button key={t.value ?? t} onClick={() => onChange(t.value ?? t)}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '8px 12px',
            fontSize: 13, fontFamily: 'inherit', fontWeight: 500,
            color: active ? C.ink : C.muted,
            borderBottom: active ? `2px solid ${C.brand}` : '2px solid transparent', marginBottom: -1 }}
        >
          {t.label ?? t}{t.count != null && <span style={{ marginLeft: 6, fontSize: 11, color: C.subtle }}>{t.count}</span>}
        </button>
      );
    })}
  </div>
);

const Segmented = ({ options, value, onChange, size = 'md', style, fullWidth }) => {
  const heights = { sm: 24, md: 28, lg: 32 };
  return (
    <div style={{ display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : undefined, background: C.track, border: `1px solid ${C.border}`, borderRadius: 7, padding: 2, height: heights[size], ...style }}>
      {options.map(o => {
        const v = o.value ?? o, l = o.label ?? o, isOn = v === value;
        return (
          <button key={v} onClick={() => onChange(v)}
            style={{ border: 'none', background: isOn ? C.surface : 'transparent', color: isOn ? C.ink : C.muted,
              padding: '0 10px', fontSize: 12, fontWeight: 500, fontFamily: 'inherit', borderRadius: 5,
              cursor: 'pointer', boxShadow: isOn ? '0 1px 2px rgba(0,0,0,.06), 0 0 0 1px rgba(0,0,0,.04)' : 'none',
              transition: 'background .12s', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 5,
              ...(fullWidth ? { flex: 1, minWidth: 0 } : {}) }}>
            {o.icon && o.icon}{l}
          </button>
        );
      })}
    </div>
  );
};

// Modal-style frame that mimics a Core365 settings dialog
// Header close (X) button with a slight hover background.
const FormCardClose = ({ onClick }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ width: 28, height: 28, borderRadius: 6, border: 'none', background: hover ? '#E7E3DC' : 'transparent', color: hover ? C.ink : C.muted, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 120ms, color 120ms' }}
    >
      <I.x size={15} />
    </button>
  );
};

const FormCard = ({ title, subtitle, children, footer, headerExtras, headerStyle, onClose, width = 1200, height, style }) => (
  <div style={{ width, height, background: C.surface, borderRadius: 12, border: `1px solid ${C.border}`,
    boxShadow: C.shadowLg, display: 'flex', flexDirection: 'column', overflow: 'hidden', fontFamily: 'inherit', color: C.ink, ...style }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px', borderBottom: `1px solid ${C.border}`, background: C.listBg, ...headerStyle }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em' }}>{title}</div>
        {subtitle && <div style={{ fontSize: 12.5, color: C.muted, marginTop: 2 }}>{subtitle}</div>}
      </div>
      {headerExtras}
      {headerExtras && <div style={{ width: 1, height: 16, background: C.border, marginLeft: 2, marginRight: 4 }} />}
      <FormCardClose onClick={onClose} />
    </div>
    <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>{children}</div>
    {footer && (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 18px', borderTop: `1px solid ${C.border}`, background: C.listBg }}>
        {footer}
      </div>
    )}
  </div>
);

Object.assign(window, { C, I, Icon, Btn, LinkBtn, Field, Input, Select, Textarea, Toggle, Pill, Tabs, Segmented, FormCard });

})();
