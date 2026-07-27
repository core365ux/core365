// Change & Access Log modal. Triggered by the "Change Log" header link.
// Anchored absolutely inside the FormCard so it stays within the artboard.

const LOG_ROWS = [
  { table: 'AccountStatus',           parent: 'AccountStatus',         prop: 'AccountStatus',           before: 'Active - None',  after: 'Completed - None',     date: '04/14/2026', time: '08:33 PM', user: 'Kelsie Self' },
  { table: 'AccountPhaseDateChanges', parent: 'Activate System',       prop: 'End Date',                before: '',               after: '04/10/2026',           date: '04/14/2026', time: '08:33 PM', user: 'Kelsie Self' },
  { table: 'AccountPhaseDateChanges', parent: 'Activate System',       prop: 'Start Date',              before: '04/09/2026',     after: '04/09/2026',           date: '04/14/2026', time: '08:33 PM', user: 'Kelsie Self' },
  { table: 'AccountPhaseDateChanges', parent: 'PTO - Approved',        prop: 'End Date',                before: '04/09/2026',     after: '04/09/2026',           date: '04/14/2026', time: '08:32 PM', user: 'Kelsie Self' },
  { table: 'AccountPhaseDateChanges', parent: 'PTO - Approved',        prop: 'Start Date',              before: '',               after: '04/01/2026',           date: '04/14/2026', time: '08:32 PM', user: 'Kelsie Self' },
  { table: 'RenewableEnergyAccount',  parent: 'ProjectDateDetails',    prop: 'Activation',              before: '',               after: '04/10/2026',           date: '04/14/2026', time: '08:32 PM', user: 'Kelsie Self' },
  { table: 'RenewableEnergyAccount',  parent: 'ProjectDateDetails',    prop: 'PTO',                     before: '04/08/2026',     after: '04/08/2026',           date: '04/14/2026', time: '08:32 PM', user: 'Kelsie Self' },
  { table: 'RenewableEnergyAccount',  parent: 'ProjectDateDetails',    prop: 'Site Survey',             before: '08/13/2025',     after: '',                     date: '04/14/2026', time: '08:32 PM', user: 'Kelsie Self' },
  { table: 'AccountPhaseDateChanges', parent: 'Activate System',       prop: 'Start Date',              before: '',               after: '04/09/2026',           date: '04/09/2026', time: '09:56 AM', user: 'Kelsie Self' },
  { table: 'AccountPhaseDateChanges', parent: 'PTO - Pending',         prop: 'End Date',                before: '',               after: '04/09/2026',           date: '04/09/2026', time: '09:56 AM', user: 'Brynli Clausse' },
  { table: 'AccountPhaseDateChanges', parent: 'PTO - Approved',        prop: 'End Date',                before: '',               after: '04/09/2026',           date: '04/09/2026', time: '09:56 AM', user: 'Brynli Clausse' },
  { table: 'AccountDocuments',        parent: 'PTO',                   prop: 'Uploaded DocumentType',   before: '',               after: 'PTO Approval',         date: '04/09/2026', time: '09:55 AM', user: 'Brynli Clausse' },
  { table: 'AccountDocuments',        parent: 'PTO',                   prop: 'Uploaded Label',          before: '',               after: 'PTO.pdf',              date: '04/09/2026', time: '09:55 AM', user: 'Brynli Clausse' },
  { table: 'AccountPhaseDateChanges', parent: 'PTO - In Review',       prop: 'End Date',                before: '',               after: '04/02/2026',           date: '04/02/2026', time: '12:15 PM', user: 'Kelsie Self' },
  { table: 'AccountPhaseDateChanges', parent: 'PTO - In Review',       prop: 'Start Date',              before: '',               after: '04/02/2026',           date: '04/02/2026', time: '12:15 PM', user: 'Kelsie Self' },
  { table: 'AccountPhaseDateChanges', parent: 'Inspection - Scheduled',prop: 'End Date',                before: '',               after: '04/02/2026',           date: '04/02/2026', time: '12:11 PM', user: 'Kelsie Self' },
  { table: 'AccountPhaseDateChanges', parent: 'Inspection - Pending',  prop: 'End Date',                before: '02/09/2026',     after: '04/02/2026',           date: '04/02/2026', time: '12:11 PM', user: 'Kelsie Self' },
  { table: 'AccountPhaseDateChanges', parent: 'PTO - Pending',         prop: 'Start Date',              before: '01/16/2026',     after: '04/02/2026',           date: '04/02/2026', time: '12:11 PM', user: 'Kelsie Self' },
  { table: 'AccountPhaseDateChanges', parent: 'Inspection',            prop: 'End Date',                before: '03/31/2026',     after: '04/02/2026',           date: '04/02/2026', time: '12:11 PM', user: 'Kelsie Self' },
  { table: 'AccountPhaseDateChanges', parent: 'Inspection',            prop: 'End Date',                before: '03/31/2026',     after: '03/31/2026',           date: '04/02/2026', time: '12:11 PM', user: 'Kelsie Self' },
  { table: 'AccountPhaseDateChanges', parent: 'Inspection',            prop: 'Start Date',              before: '03/31/2026',     after: '03/31/2026',           date: '04/02/2026', time: '12:11 PM', user: 'Kelsie Self' },
  { table: 'AccountDocuments',        parent: 'Inspection',            prop: 'Uploaded DocumentType',   before: '',               after: 'Final Inspection Card',date: '04/02/2026', time: '12:11 PM', user: 'Kelsie Self' },
  { table: 'AccountDocuments',        parent: 'Inspection',            prop: 'Uploaded Label',          before: '',               after: 'Waters FIC.pdf',       date: '04/02/2026', time: '12:11 PM', user: 'Kelsie Self' },
  { table: 'AccountPhaseDateChanges', parent: 'Inspection',            prop: 'End Date',                before: '',               after: '03/31/2026',           date: '03/31/2026', time: '09:33 AM', user: 'Ryan Fagan' },
];

const LogColHeader = ({ label, last }) => (
  <th style={{
    textAlign: 'left', padding: '10px 14px', height: 38,
    fontSize: 12.5, fontWeight: 600, color: C.ink, letterSpacing: '-0.005em',
    background: C.bg,
    borderBottom: `1px solid ${C.border}`,
    borderRight: last ? 'none' : `1px solid ${C.border}`,
    whiteSpace: 'nowrap',
    position: 'sticky', top: 0, zIndex: 1,
  }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
      <span>{label}</span>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: C.subtle }}>
        <I.cog size={12} />
        <svg width="8" height="10" viewBox="0 0 8 10" style={{ display: 'block' }}>
          <path d="M4 0 L8 4 L0 4 Z" fill={C.subtle} />
          <path d="M4 10 L0 6 L8 6 Z" fill={C.subtle} opacity="0.5" />
        </svg>
        <I.dots size={12} />
      </span>
    </div>
  </th>
);

function ChangeLogModal({ onClose }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 10,
      background: 'rgba(20,16,10,0.28)',
      display: 'flex', alignItems: 'stretch', justifyContent: 'stretch',
    }} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={{
        position: 'absolute', inset: 8,
        background: C.surface, border: `1px solid ${C.border}`, borderRadius: 6,
        boxShadow: C.shadowLg,
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
        fontFamily: 'inherit', color: C.ink,
      }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '12px 18px', borderBottom: `1px solid ${C.border}`, background: C.bg }}>
          <div style={{ flex: 1, fontSize: 15, fontWeight: 600, color: C.ink, letterSpacing: '-0.01em' }}>Change Log</div>
          <button onClick={onClose} style={{ width: 28, height: 28, borderRadius: 6, border: 'none', background: 'transparent', color: C.muted, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <I.x size={16} />
          </button>
        </div>

        {/* Tabs removed — Change Log only */}


        {/* Toolbar removed */}

        {/* Table */}
        <div style={{ flex: 1, minHeight: 0, overflow: 'auto', background: C.surface }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12.5, color: C.text }}>
            <thead>
              <tr>
                <LogColHeader label="Table Name" />
                <LogColHeader label="Parent Name" />
                <LogColHeader label="Property Name" />
                <LogColHeader label="Before Value" />
                <LogColHeader label="After Value" />
                <LogColHeader label="Date Changed" />
                <LogColHeader label="Time" />
                <LogColHeader label="Changed By" last />
              </tr>
            </thead>
            <tbody>
              {LOG_ROWS.map((r, i) => (
                <tr key={i} style={{ background: i % 2 === 1 ? '#FAFAF7' : C.surface }}>
                  <LogCell>{r.table}</LogCell>
                  <LogCell>{r.parent}</LogCell>
                  <LogCell>{r.prop}</LogCell>
                  <LogCell>{r.before}</LogCell>
                  <LogCell>{r.after}</LogCell>
                  <LogCell>{r.date}</LogCell>
                  <LogCell>{r.time}</LogCell>
                  <LogCell last>{r.user}</LogCell>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '10px 18px', borderTop: `1px solid ${C.border}`, background: C.bg }}>
          <Btn size="md" kind="secondary" leftIcon={<I.x style={{ transform: 'translateY(1px)' }} />} onClick={onClose} style={{ minWidth: 85 }}>Close</Btn>
        </div>
      </div>
    </div>
  );
}

const LogCell = ({ children, last }) => (
  <td style={{
    padding: '8px 14px', height: 32,
    borderBottom: `1px solid ${C.border}`,
    borderRight: last ? 'none' : `1px solid ${C.border}`,
    fontSize: 12.5, color: C.text, whiteSpace: 'nowrap',
  }}>{children}</td>
);

window.ChangeLogModal = ChangeLogModal;
