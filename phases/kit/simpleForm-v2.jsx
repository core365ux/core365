// Simple form — Project Management Queue Settings.
// Two column groups (Active / On Hold) of "days without contact" thresholds.

const sfcx = (...names) => names.filter(Boolean).join(' ');

const SF_GROUPS = [
  { key: 'customer', label: 'Customer' },
  { key: 'pm',       label: 'Project Manager' },
  { key: 'rep',      label: 'Sales Rep' },
  { key: 'assigned', label: 'Assigned Users' },
];

const SF_DEFAULTS = { customer: false, pm: true, rep: false, assigned: true };

function GroupRow({ label, checked, onChange, last }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onClick={() => onChange(!checked)}
      role="switch" aria-checked={checked}
      style={{
        display: 'flex', alignItems: 'center', gap: 16, padding: '12px 14px', cursor: 'pointer',
        borderBottom: last ? 'none' : `1px solid ${C.divider || C.border}`,
        background: hover ? C.bg3 || '#F1F3F6' : 'transparent',
      }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: C.ink }}>{label}</div>
      </div>
      <div onClick={e => e.stopPropagation()} style={{ width: 64, display: 'flex', justifyContent: 'flex-start', flex: '0 0 auto' }}>
        <Toggle checked={checked} onChange={onChange} />
      </div>
    </div>
  );
}

function SimpleFormPrototypeV2() {
  const [showLog, setShowLog] = React.useState(false);
  const [vals, setVals] = React.useState(SF_DEFAULTS);
  const [dirty, setDirty] = React.useState(false);

  const setVal = (key, v) => {
    setVals(s => ({ ...s, [key]: v }));
    setDirty(true);
  };
  const handleSave = () => setDirty(false);

  const headerExtras = (
    <div className="sf-header-extras">
      <span className="sf-header-meta">Last edited by Marlee K. · Apr 22, 2026</span>
      <div className="sf-header-divider" />
      <LinkBtn icon={<I.history size={13} />} muted onClick={() => setShowLog(true)}>Change Log</LinkBtn>
    </div>
  );

  const footer = (
    <>
      <div className="sf-footer-spacer" style={{ flex: 1 }} />
      {dirty && <span style={{ fontSize: 12, color: C.subtle, marginRight: 4 }}>Unsaved changes</span>}
      <Btn key="close" size="md" kind="secondary" leftIcon={<I.x />} style={{ minWidth: 116 }}>Close</Btn>
      <Btn key="save" size="md" kind="action" leftIcon={<I.save />} onClick={handleSave} style={{ minWidth: 116 }}>Save</Btn>
    </>
  );

  return (
    <FormCard
      title="General Phase Settings"
      width={640} height={560}
      headerExtras={headerExtras}
      footer={footer}
    >
      {showLog && <ChangeLogModal onClose={() => setShowLog(false)} />}
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
        {/* Form body */}
        <div style={{ flex: 1, minHeight: 0, overflow: 'auto', padding: '20px 18px' }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: C.subtle, marginBottom: 8 }}>
            Notify on Out-of-Sequence Phases
          </div>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, lineHeight: 1.55, color: C.muted, marginBottom: 14, textWrap: 'pretty' }}>
            When a phase is completed after a later phase in the sequence has already been
            completed, it can still send notifications. Turn a group off to suppress notifications
            for those out-of-sequence phases.
          </div>
          <div style={{ border: `1px solid ${C.border}`, borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ background: C.panel, borderBottom: `1px solid ${C.border}`, padding: '9px 14px', display: 'flex', alignItems: 'center', gap: 16, fontSize: 12, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: C.muted }}>
              <div style={{ flex: 1, minWidth: 0 }}>User Group</div>
              <div style={{ width: 64, flex: '0 0 auto' }}>Notify</div>
            </div>
            {SF_GROUPS.map((g, i) => (
              <GroupRow key={g.key} label={g.label}
                checked={!!vals[g.key]} onChange={v => setVal(g.key, v)}
                last={i === SF_GROUPS.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </FormCard>
  );
}

window.SimpleFormPrototypeV2 = SimpleFormPrototypeV2;
