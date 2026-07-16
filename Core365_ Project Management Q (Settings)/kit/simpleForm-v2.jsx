// Simple form — Project Management Queue: Contact Settings.
// A project stays in the queue while it has gone without contact (by a given
// method) for at least N days. Thresholds differ for Active vs On Hold
// projects, and each method can be toggled in/out of the calculation.

// ─── Method-specific icons (inherit currentColor) ───────────────────────
const MI = {
  email: (p) => <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></Icon>,
  sms:   (p) => <Icon {...p}><path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.2A8 8 0 1 1 21 12Z" /><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" /></Icon>,
  phone: (p) => <Icon {...p}><path d="M6 3h3l1.5 5-2 1.5a11 11 0 0 0 5 5l1.5-2 5 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z" /></Icon>,
  note:  (p) => <Icon {...p}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M8 13h6M8 17h4" /></Icon>,
};

const SF_FIELDS = [
  { key: 'email', label: 'Email',       desc: 'No email exchanged',   icon: MI.email },
  { key: 'sms',   label: 'SMS',         desc: 'No text message',      icon: MI.sms },
  { key: 'phone', label: 'Phone Call',  desc: 'No logged call',       icon: MI.phone },
  { key: 'note',  label: 'System Note', desc: 'No note added',        icon: MI.note },
];

const SF_DEFAULTS = {
  active: {
    email: { on: true,  days: 7 },
    sms:   { on: true,  days: 7 },
    phone: { on: true,  days: 7 },
    note:  { on: false, days: 0 },
  },
  hold: {
    email: { on: true,  days: 14 },
    sms:   { on: true,  days: 14 },
    phone: { on: true,  days: 14 },
    note:  { on: false, days: 0 },
  },
};

// Compact −/+ day stepper. Reads muted + non-interactive when its condition
// is toggled off. `fill` stretches it to its container (mobile).
function DayStepper({ value, onChange, disabled, fill }) {
  const clamp = (n) => Math.max(0, Math.min(365, n));
  const step = (delta) => onChange(clamp((parseInt(value, 10) || 0) + delta));
  const StepBtn = ({ label, onClick, wide }) => {
    const [h, setH] = React.useState(false);
    return (
      <button type="button" onClick={onClick} disabled={disabled}
        onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{
          width: wide ? 44 : 30, alignSelf: 'stretch', border: 'none', background: h && !disabled ? C.track : 'transparent',
          color: disabled ? C.subtle : C.muted, fontSize: wide ? 20 : 16, lineHeight: 1, cursor: disabled ? 'default' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .12s',
        }}>{label}</button>
    );
  };
  return (
    <div style={{
      display: 'flex', alignItems: 'stretch', height: fill ? 44 : 38, width: fill ? '100%' : undefined, borderRadius: 6,
      border: `1px solid ${C.border}`, background: disabled ? C.track : C.surface,
      opacity: disabled ? 0.6 : 1, overflow: 'hidden', transition: 'opacity .12s, background .12s',
    }}>
      <StepBtn label="−" onClick={() => step(-1)} wide={fill} />
      <div style={{ width: 1, background: C.border }} />
      <input type="number" value={value} disabled={disabled}
        onChange={(e) => onChange(clamp(parseInt(e.target.value, 10) || 0))}
        style={{
          width: fill ? undefined : 44, flex: fill ? 1 : undefined, minWidth: 0,
          border: 'none', outline: 'none', background: 'transparent', textAlign: fill ? 'right' : 'center',
          padding: fill ? '0 4px 0 12px' : 0,
          fontSize: fill ? 16 : 14, fontWeight: 600, fontFamily: 'inherit', color: disabled ? C.subtle : C.ink,
          MozAppearance: 'textfield',
        }} />
      <span style={{ display: 'flex', alignItems: 'center', paddingRight: fill ? 14 : 10, paddingLeft: fill ? 4 : 0, fontSize: 12, color: C.subtle }}>days</span>
      <div style={{ width: 1, background: C.border }} />
      <StepBtn label="+" onClick={() => step(1)} wide={fill} />
    </div>
  );
}

// One status column header (Active / On Hold).
function StatusHead({ label, tone }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
      <Pill tone={tone} style={{ fontSize: 12, fontWeight: 600, padding: '3px 12px' }}>{label}</Pill>
      <span style={{ fontSize: 11, color: C.subtle, letterSpacing: '0.02em' }}>Days without contact</span>
    </div>
  );
}

// A single Active/On-Hold cell: toggle in/out + the threshold stepper.
function ConditionCell({ state, onToggle, onDays }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Toggle checked={state.on} onChange={onToggle} />
        <span style={{ fontSize: 11.5, fontWeight: 600, color: state.on ? C.ink : C.subtle, width: 58 }}>
          {state.on ? 'Counted' : 'Ignored'}
        </span>
      </div>
      <DayStepper value={state.days} onChange={onDays} disabled={!state.on} />
    </div>
  );
}

// ─── Mobile: one status block (Active / On Hold) inside a method card ────
function MobileStatusBlock({ label, tone, state, onToggle, onDays }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Pill tone={tone} style={{ fontSize: 12, fontWeight: 600, padding: '3px 12px' }}>{label}</Pill>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <span style={{ fontSize: 12.5, fontWeight: 600, color: state.on ? C.ink : C.subtle }}>
            {state.on ? 'Counted' : 'Ignored'}
          </span>
          <Toggle checked={state.on} onChange={onToggle} />
        </div>
      </div>
      <DayStepper value={state.days} onChange={onDays} disabled={!state.on} fill />
    </div>
  );
}

// ─── Mobile: one contact-method card ────────────────────────────────────
function MobileMethodCard({ field, active, hold, patch }) {
  return (
    <div style={{
      background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10,
      boxShadow: C.shadowSm, overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 14px', borderBottom: `1px solid ${C.border}`, background: C.listBg }}>
        <div style={{
          width: 38, height: 38, borderRadius: 8, background: C.brandSoft, color: C.brand,
          border: `1px solid ${C.brandBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto',
        }}>{field.icon({ size: 19 })}</div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 14.5, fontWeight: 600, color: C.ink }}>{field.label}</div>
          <div style={{ fontSize: 11.5, color: C.subtle, marginTop: 1 }}>{field.desc}</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '14px' }}>
        <MobileStatusBlock label="Active" tone="active" state={active}
          onToggle={(on) => patch('active', field.key, { on })}
          onDays={(days) => patch('active', field.key, { days })} />
        <div style={{ height: 1, background: C.border }} />
        <MobileStatusBlock label="On Hold" tone="warning" state={hold}
          onToggle={(on) => patch('hold', field.key, { on })}
          onDays={(days) => patch('hold', field.key, { days })} />
      </div>
    </div>
  );
}

function SimpleFormPrototypeV2() {
  const [showLog, setShowLog] = React.useState(false);
  const [vals, setVals] = React.useState(SF_DEFAULTS);
  const [dirty, setDirty] = React.useState(false);
  const [view, setView] = React.useState('desktop'); // 'desktop' | 'mobile'
  const mobile = view === 'mobile';

  const patch = (group, key, part) => {
    setVals(s => ({ ...s, [group]: { ...s[group], [key]: { ...s[group][key], ...part } } }));
    setDirty(true);
  };

  const headerExtras = mobile ? null : (
    <div className="sf-header-extras">
      <span className="sf-header-meta">Last edited by Marlee K. · Apr 22, 2026</span>
      <div className="sf-header-divider" />
      <LinkBtn icon={<I.history size={13} />} muted onClick={() => setShowLog(true)}>Change Log</LinkBtn>
    </div>
  );

  const footer = (
    <>
      <div style={{ flex: 1 }} />
      {dirty && !mobile && <span style={{ fontSize: 12, color: C.subtle, marginRight: 4 }}>Unsaved changes</span>}
      <Btn key="close" size={mobile ? 'lg' : 'md'} kind="secondary" leftIcon={<I.x />} style={{ minWidth: mobile ? 0 : 116, flex: mobile ? 1 : undefined }}>Close</Btn>
      <Btn key="save" size={mobile ? 'lg' : 'md'} kind="action" leftIcon={<I.save />} onClick={() => setDirty(false)} style={{ minWidth: mobile ? 0 : 116, flex: mobile ? 1 : undefined }}>Save</Btn>
    </>
  );

  const cols = '1.5fr 1fr 1fr';

  const explainer = (
    <div style={{
      display: 'flex', gap: 10, alignItems: 'flex-start', background: C.blueSoft,
      border: `1px solid ${C.border}`, borderRadius: 8, padding: '11px 13px', marginBottom: mobile ? 16 : 20,
    }}>
      <span style={{ color: C.blue, flex: '0 0 auto', marginTop: 1 }}><I.info size={16} /></span>
      <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.5, color: C.text }}>
        A project stays in your queue once it has gone without contact — by a counted method — for at least the
        set number of days. Set separate thresholds for <strong>Active</strong> and <strong>On Hold</strong> projects,
        and toggle any method off to leave it out of the calculation.
      </p>
    </div>
  );

  const card = (
    <FormCard
      title="Queue Settings"
      width={mobile ? '100%' : 760}
      height={mobile ? '100%' : undefined}
      headerExtras={headerExtras}
      footer={footer}
      style={mobile ? { borderRadius: 0, border: 'none', boxShadow: 'none' } : undefined}
    >
      {showLog && <ChangeLogModal onClose={() => setShowLog(false)} />}
      {mobile ? (
        <div style={{ flex: 1, minHeight: 0, overflow: 'auto', padding: '16px 14px 20px', background: C.bg }}>
          {explainer}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {SF_FIELDS.map(f => (
              <MobileMethodCard key={f.key} field={f} active={vals.active[f.key]} hold={vals.hold[f.key]} patch={patch} />
            ))}
          </div>
        </div>
      ) : (
        <div style={{ flex: 1, minHeight: 0, overflow: 'auto', padding: '20px 22px 24px' }}>
          {explainer}
          {/* Matrix header */}
          <div style={{ display: 'grid', gridTemplateColumns: cols, alignItems: 'end', gap: 12, paddingBottom: 12 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: C.subtle }}>
              Contact Method
            </span>
            <StatusHead label="Active" tone="active" />
            <StatusHead label="On Hold" tone="warning" />
          </div>
          {/* Method rows */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {SF_FIELDS.map((f, i) => {
              const a = vals.active[f.key], h = vals.hold[f.key];
              return (
                <div key={f.key} style={{
                  display: 'grid', gridTemplateColumns: cols, alignItems: 'center', gap: 12,
                  padding: '16px 0', borderTop: i === 0 ? `1px solid ${C.border}` : 'none',
                  borderBottom: i === SF_FIELDS.length - 1 ? 'none' : `1px solid ${C.border}`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: 8, background: C.brandSoft, color: C.brand,
                      border: `1px solid ${C.brandBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto',
                    }}>{f.icon({ size: 19 })}</div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: C.ink }}>{f.label}</div>
                      <div style={{ fontSize: 11.5, color: C.subtle, marginTop: 1 }}>{f.desc}</div>
                    </div>
                  </div>
                  <ConditionCell state={a}
                    onToggle={(on) => patch('active', f.key, { on })}
                    onDays={(days) => patch('active', f.key, { days })} />
                  <ConditionCell state={h}
                    onToggle={(on) => patch('hold', f.key, { on })}
                    onDays={(days) => patch('hold', f.key, { days })} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </FormCard>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
      {/* View switcher — preview desktop vs. mobile layout */}
      <Segmented
        value={view}
        onChange={setView}
        size="lg"
        options={[
          { value: 'desktop', label: 'Desktop', icon: <I.sheet size={14} style={{ marginRight: 2 }} /> },
          { value: 'mobile', label: 'Mobile', icon: <PhoneIcon size={14} style={{ marginRight: 2 }} /> },
        ]}
      />
      {mobile ? <PhoneFrame>{card}</PhoneFrame> : card}
    </div>
  );
}

// Small phone glyph for the view switcher.
function PhoneIcon(p) {
  return <Icon {...p}><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" /></Icon>;
}

// Device frame that wraps the mobile card so the phone context is obvious.
function PhoneFrame({ children }) {
  return (
    <div style={{
      width: 390, height: 780, background: '#1F2433', borderRadius: 44, padding: 12,
      boxShadow: '0 24px 60px rgba(20,28,51,0.28)', flex: '0 0 auto',
    }}>
      <div style={{ position: 'relative', width: '100%', height: '100%', background: C.surface, borderRadius: 33, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {/* status bar */}
        <div style={{ height: 38, flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 22px', background: C.listBg, fontSize: 12.5, fontWeight: 600, color: C.ink }}>
          <span>9:41</span>
          <div style={{ position: 'absolute', left: '50%', top: 8, transform: 'translateX(-50%)', width: 96, height: 22, background: '#1F2433', borderRadius: 999 }} />
          <span style={{ display: 'flex', gap: 5, alignItems: 'center', color: C.muted }}>
            <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="1"/><rect x="4.5" y="5" width="3" height="6" rx="1"/><rect x="9" y="3" width="3" height="8" rx="1"/><rect x="13.5" y="1" width="2.5" height="10" rx="1"/></svg>
            <svg width="22" height="11" viewBox="0 0 22 11" fill="none" stroke="currentColor" strokeWidth="1"><rect x="0.5" y="0.5" width="18" height="10" rx="2.5"/><rect x="2" y="2" width="13" height="7" rx="1" fill="currentColor" stroke="none"/><path d="M20.5 3.5v4" strokeLinecap="round"/></svg>
          </span>
        </div>
        <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>{children}</div>
      </div>
    </div>
  );
}

window.SimpleFormPrototypeV2 = SimpleFormPrototypeV2;
