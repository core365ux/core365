/* @ds-bundle: {"format":4,"namespace":"Core365DesignSystem_dbcf5c","components":[{"name":"Avatar","sourcePath":"components/Avatar.jsx"},{"name":"Badge","sourcePath":"components/Badge.jsx"},{"name":"Button","sourcePath":"components/Button.jsx"},{"name":"Card","sourcePath":"components/Card.jsx"},{"name":"Field","sourcePath":"components/Field.jsx"},{"name":"Input","sourcePath":"components/Input.jsx"}],"sourceHashes":{"components/Avatar.jsx":"2e31a7be3f2b","components/Badge.jsx":"14247c70dfd1","components/Button.jsx":"a5561fd363ce","components/Card.jsx":"ef818afbb1c5","components/Field.jsx":"dfe78d83009f","components/Input.jsx":"911ac594805a","ui_kits/core365-app/Dashboard.jsx":"461a701238e5","ui_kits/core365-app/DocumentCenter.jsx":"5be6d677749a","ui_kits/core365-app/Icon.jsx":"e3a10486572b","ui_kits/core365-app/JobDetail.jsx":"26ce39db2509","ui_kits/core365-app/JobsList.jsx":"ba32477faad3","ui_kits/core365-app/Primitives.jsx":"59e16da35d58","ui_kits/core365-app/Shell.jsx":"b7e2a4857d6c","ui_kits/core365-app/data.js":"ac9c62813ea4","ui_kits/core365-settings/app.jsx":"b05d904a2090","ui_kits/core365-settings/changeLog.jsx":"d432d7b26c3e","ui_kits/core365-settings/complexForm.jsx":"e529e821b4bc","ui_kits/core365-settings/design-canvas.jsx":"fb642362a04d","ui_kits/core365-settings/importFlow.jsx":"7d60887c3df9","ui_kits/core365-settings/naming.jsx":"669686071fab","ui_kits/core365-settings/simpleForm-v2-2col.jsx":"b29b63980e90","ui_kits/core365-settings/simpleForm-v2-3col.jsx":"b82f2b87d1cb","ui_kits/core365-settings/simpleForm-v2-6col.jsx":"5a8f113b1894","ui_kits/core365-settings/simpleForm-v2-inventory.jsx":"319df631ff77","ui_kits/core365-settings/simpleForm-v2-responsive.jsx":"bd345882c2f2","ui_kits/core365-settings/simpleForm-v2-tree.jsx":"7989de14852d","ui_kits/core365-settings/simpleForm-v2.jsx":"e99772dd637f","ui_kits/core365-settings/simpleForm-v3.jsx":"409d8f5d1cdb","ui_kits/core365-settings/simpleForm.jsx":"cd905ba319cb","ui_kits/core365-settings/statusControls.jsx":"2e516f315b69","ui_kits/core365-settings/tokens.jsx":"d2df32be2231"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Core365DesignSystem_dbcf5c = window.Core365DesignSystem_dbcf5c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Avatar.jsx
try { (() => {
/**
 * Avatar — circular initials chip, or a photo when `src` is given. Initials are
 * derived from the first two words of `name`.
 */
function Avatar({
  name,
  color = "#5A739F",
  size = 28,
  src
}) {
  const initials = (name || "?").split(" ").map(s => s[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      background: src ? `center/cover url(${src})` : color,
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 600,
      fontSize: Math.round(size * 0.4),
      flexShrink: 0
    }
  }, !src && initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/Badge.jsx
try { (() => {
const BADGE_VARIANTS = {
  lead: {
    bg: "#FFF5EE",
    fg: "#A8430C",
    dot: "#F2691A"
  },
  quoted: {
    bg: "#E5ECF4",
    fg: "#36486A",
    dot: "#5A739F"
  },
  pending: {
    bg: "#FBEFD4",
    fg: "#8C5C0F",
    dot: "#E89B1E"
  },
  scheduled: {
    bg: "#E2ECF9",
    fg: "#2A5BA6",
    dot: "#3D7DD9"
  },
  installed: {
    bg: "#E6F5EE",
    fg: "#1F7A56",
    dot: "#2BA67A"
  },
  overdue: {
    bg: "#FCE6E8",
    fg: "#B73642",
    dot: "#E7505B"
  },
  neutral: {
    bg: "#F1F3F6",
    fg: "#6B7384",
    dot: "#99A0AE"
  },
  brand: {
    bg: "#FFF5EE",
    fg: "#A8430C",
    dot: "#F2691A"
  }
};

/**
 * Status badge — an uppercase pill with an optional leading status dot. Use the
 * semantic variants for job/document states so color stays consistent.
 */
function Badge({
  variant = "neutral",
  dot = true,
  children,
  style = {}
}) {
  const v = BADGE_VARIANTS[variant] || BADGE_VARIANTS.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Manrope', sans-serif",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      padding: "4px 10px",
      borderRadius: 999,
      background: v.bg,
      color: v.fg,
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      whiteSpace: "nowrap",
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: v.dot
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Badge.jsx", error: String((e && e.message) || e) }); }

// components/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BTN_BASE = {
  fontFamily: "'Manrope', sans-serif",
  fontWeight: 600,
  borderRadius: 6,
  border: "1px solid transparent",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  transition: "background 120ms, color 120ms, border-color 120ms, box-shadow 120ms",
  whiteSpace: "nowrap",
  userSelect: "none"
};
const BTN_VARIANTS = {
  primary: {
    base: {
      background: "#F2691A",
      color: "#fff"
    },
    hover: {
      background: "#D55812"
    }
  },
  save: {
    base: {
      background: "#5A739F",
      color: "#fff"
    },
    hover: {
      background: "#485E85"
    }
  },
  secondary: {
    base: {
      background: "#fff",
      color: "#1F2433",
      borderColor: "#D9DDE3"
    },
    hover: {
      background: "#F1F3F6"
    }
  },
  ghost: {
    base: {
      background: "transparent",
      color: "#3A4151"
    },
    hover: {
      background: "#F1F3F6"
    }
  },
  danger: {
    base: {
      background: "#fff",
      color: "#C8404A",
      borderColor: "#E7505B"
    },
    hover: {
      background: "#FCE6E8"
    }
  },
  "danger-solid": {
    base: {
      background: "#E7505B",
      color: "#fff"
    },
    hover: {
      background: "#C8404A"
    }
  }
};
const BTN_SIZES = {
  sm: {
    padding: "4px 10px",
    fontSize: 13,
    lineHeight: "18px"
  },
  md: {
    padding: "8px 16px",
    fontSize: 14,
    lineHeight: "20px"
  },
  lg: {
    padding: "12px 22px",
    fontSize: 16,
    lineHeight: "24px"
  },
  icon: {
    padding: 8,
    width: 36,
    height: 36
  }
};

/**
 * Core365 Button. Orange `primary` is THE action on a screen; `save` (steel
 * blue) for save / secondary submit; `secondary` for everything else; `ghost`
 * for low-priority; `danger-solid` only for destructive actions in modals.
 * `icon` / `iconRight` accept any node (render the kit's <Icon> or an SVG).
 */
function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  children,
  disabled,
  onClick,
  style = {},
  ...props
}) {
  const [hover, setHover] = React.useState(false);
  const v = BTN_VARIANTS[variant] || BTN_VARIANTS.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      ...BTN_BASE,
      ...BTN_SIZES[size],
      ...v.base,
      ...(hover && !disabled ? v.hover : {}),
      ...(disabled ? {
        opacity: 0.45,
        cursor: "not-allowed"
      } : {}),
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: disabled ? undefined : onClick,
    disabled: disabled
  }, props), icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button.jsx", error: String((e && e.message) || e) }); }

// components/Card.jsx
try { (() => {
/**
 * Surface card — white fill, hairline border, soft shadow. Pass `hover` to lift
 * the shadow and tint the border on mouse-over (use for clickable cards).
 */
function Card({
  children,
  padding = 16,
  hover,
  onClick,
  style = {}
}) {
  const [hovered, setHovered] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onClick: onClick,
    style: {
      background: "#fff",
      border: `1px solid ${hover && hovered ? "rgba(90, 115, 159, 0.3)" : "#D9DDE3"}`,
      borderRadius: 8,
      boxShadow: hover && hovered ? "0 2px 4px rgba(20,28,51,0.06), 0 4px 12px rgba(20,28,51,0.06)" : "0 1px 0 rgba(20,28,51,0.04), 0 1px 2px rgba(20,28,51,0.06)",
      padding,
      cursor: onClick ? "pointer" : "default",
      transition: "box-shadow 120ms, border-color 120ms",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Card.jsx", error: String((e && e.message) || e) }); }

// components/Field.jsx
try { (() => {
/**
 * Form field wrapper — label (with optional required asterisk) above the
 * control, and a help or error line below. Pass the input/select as children.
 */
function Field({
  label,
  help,
  error,
  required,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "'Manrope', sans-serif",
      fontSize: 13,
      fontWeight: 600,
      color: "#3A4151"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#E7505B",
      marginLeft: 4
    }
  }, "*")), children, (help || error) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Manrope', sans-serif",
      fontSize: 12,
      color: error ? "#C8404A" : "#6B7384"
    }
  }, error || help));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Field.jsx", error: String((e && e.message) || e) }); }

// components/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input — brand focus ring (orange, or red when `error`). `prefix` and
 * `suffix` accept any node (icon, unit, button) and sit inside the border.
 */
function Input({
  value,
  onChange,
  placeholder,
  error,
  disabled,
  prefix,
  suffix,
  style = {},
  ...props
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      background: disabled ? "#F7F8FA" : "#fff",
      border: `1px solid ${error ? "#E7505B" : focus ? "#F2691A" : "#D9DDE3"}`,
      borderRadius: 6,
      boxShadow: focus ? error ? "0 0 0 3px rgba(231, 80, 91, 0.28)" : "0 0 0 3px rgba(242, 105, 26, 0.28)" : "none",
      transition: "border-color 120ms, box-shadow 120ms",
      ...style
    }
  }, prefix && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 10,
      display: "flex",
      alignItems: "center",
      color: "#6B7384"
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    value: value ?? "",
    onChange: onChange || (() => {}),
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      fontFamily: "'Manrope', sans-serif",
      fontSize: 14,
      padding: "8px 12px",
      paddingLeft: prefix ? 6 : 12,
      paddingRight: suffix ? 6 : 12,
      border: "none",
      outline: "none",
      background: "transparent",
      color: "#1F2433",
      height: 34
    }
  }, props)), suffix && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingRight: 10,
      display: "flex",
      alignItems: "center",
      color: "#6B7384"
    }
  }, suffix));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-app/Dashboard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// ============================================================
// Core365 — Dashboard
// Today's view: KPIs + action queue + recent activity.
// ============================================================

function KpiCard({
  label,
  value,
  trend,
  trendUp,
  color
}) {
  return /*#__PURE__*/React.createElement(Card, {
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(IconTile, {
    icon: color === 'orange' ? 'briefcase' : color === 'steel' ? 'dollar' : color === 'amber' ? 'shieldCheck' : 'truck',
    color: color,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#6B7384',
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      color: '#1F2433',
      letterSpacing: '-0.01em',
      marginTop: 2
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: trendUp ? '#1F7A56' : '#B73642',
      marginTop: 4,
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, trendUp ? '▲' : '▼', " ", trend))));
}
function ActionItem({
  icon,
  color,
  title,
  meta,
  badge,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      borderRadius: 8,
      cursor: 'pointer',
      transition: 'background 120ms'
    },
    onMouseEnter: e => e.currentTarget.style.background = '#F7F8FA',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement(IconTile, {
    icon: icon,
    color: color,
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: '#1F2433'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#6B7384',
      marginTop: 2
    }
  }, meta)), badge, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 16,
    color: "#99A0AE"
  }));
}
function TimelineEntry({
  entry
}) {
  const team = window.C365_DATA.TEAM;
  const author = entry.who === 'system' ? null : team.find(t => t.id === entry.who);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      padding: '10px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, author ? /*#__PURE__*/React.createElement(Avatar, {
    name: author.name,
    color: author.color,
    size: 28
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: '#F1F3F6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6B7384'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#1F2433',
      lineHeight: '20px'
    }
  }, author && /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, author.name.split(' ')[0], " "), entry.text), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#6B7384'
    }
  }, entry.t), entry.tag && /*#__PURE__*/React.createElement(Badge, {
    variant: window.C365_DATA.STATUS[entry.tag].variant
  }, window.C365_DATA.STATUS[entry.tag].label))));
}
function Dashboard({
  navigate
}) {
  const {
    KPIS,
    JOBS,
    TIMELINE,
    STATUS
  } = window.C365_DATA;
  const queue = JOBS.filter(j => ['pending', 'overdue', 'lead'].includes(j.status)).slice(0, 4);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    style: {
      color: '#F2691A',
      marginBottom: 6
    }
  }, "Tuesday \xB7 May 27"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: '-0.01em'
    }
  }, "Good morning, Maya"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontFamily: "'Jost',sans-serif",
      fontSize: 16,
      color: '#3A4151'
    }
  }, "8 open jobs need attention today. 2 permits are awaiting AHJ review.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 14,
      marginBottom: 24
    }
  }, KPIS.map((k, i) => /*#__PURE__*/React.createElement(KpiCard, _extends({
    key: i
  }, k)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px',
      borderBottom: '1px solid #E6E9EE',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: '#E2E2E2'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: '#1F2433'
    }
  }, "Action queue"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconRight: "arrowRight",
    onClick: () => navigate('jobs')
  }, "View all")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 6
    }
  }, /*#__PURE__*/React.createElement(ActionItem, {
    icon: "alertCircle",
    color: "red",
    title: "Westcott Roofing \u2014 final inspection overdue",
    meta: "JOB-2026-00414 \xB7 Owner: Devon Cho",
    badge: /*#__PURE__*/React.createElement(Badge, {
      variant: "overdue"
    }, "Overdue 2d"),
    onClick: () => navigate('job/JOB-2026-00414')
  }), /*#__PURE__*/React.createElement(ActionItem, {
    icon: "shieldCheck",
    color: "amber",
    title: "Reyes Family \u2014 review plan check submission",
    meta: "JOB-2026-00417 \xB7 NEM 3.0 + 2 docs",
    badge: /*#__PURE__*/React.createElement(Badge, {
      variant: "pending"
    }, "Permit pending"),
    onClick: () => navigate('job/JOB-2026-00417')
  }), /*#__PURE__*/React.createElement(ActionItem, {
    icon: "send",
    color: "orange",
    title: "Beltran, Anna \u2014 send proposal",
    meta: "JOB-2026-00415 \xB7 7.2 kW + Powerwall 3",
    badge: /*#__PURE__*/React.createElement(Badge, {
      variant: "lead"
    }, "Lead"),
    onClick: () => navigate('job/JOB-2026-00415')
  }), /*#__PURE__*/React.createElement(ActionItem, {
    icon: "truck",
    color: "steel",
    title: "Iglesia Vida \u2014 install Tuesday 8:00 AM",
    meta: "JOB-2026-00413 \xB7 Crew: Tomas K., Devon C.",
    badge: /*#__PURE__*/React.createElement(Badge, {
      variant: "scheduled"
    }, "Scheduled"),
    onClick: () => navigate('job/JOB-2026-00413')
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px',
      borderBottom: '1px solid #E6E9EE',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: '#E2E2E2'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: '#1F2433'
    }
  }, "Recent activity"), /*#__PURE__*/React.createElement(Icon, {
    name: "moreH",
    size: 16,
    color: "#6B7384"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 18px 14px'
    }
  }, TIMELINE.slice(0, 6).map((e, i) => /*#__PURE__*/React.createElement(TimelineEntry, {
    key: i,
    entry: e
  }))))));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-app/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-app/DocumentCenter.jsx
try { (() => {
// ============================================================
// Core365 — Document Center
// Folders + file list with status pills and owners.
// ============================================================
function DocumentCenter({
  navigate
}) {
  const {
    DOCS,
    STATUS,
    TEAM
  } = window.C365_DATA;
  const [folder, setFolder] = React.useState('all');
  const folders = [{
    id: 'all',
    label: 'All documents',
    count: DOCS.length,
    icon: 'folder'
  }, {
    id: 'Permits',
    label: 'Permits',
    count: DOCS.filter(d => d.folder === 'Permits').length,
    icon: 'shieldCheck'
  }, {
    id: 'Proposals',
    label: 'Proposals',
    count: DOCS.filter(d => d.folder === 'Proposals').length,
    icon: 'fileText'
  }, {
    id: 'Site visit',
    label: 'Site visits',
    count: DOCS.filter(d => d.folder === 'Site visit').length,
    icon: 'mapPin'
  }, {
    id: 'Engineering',
    label: 'Engineering',
    count: DOCS.filter(d => d.folder === 'Engineering').length,
    icon: 'zap'
  }];
  const visible = folder === 'all' ? DOCS : DOCS.filter(d => d.folder === folder);
  const owner = id => TEAM.find(t => t.id === id);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      maxWidth: 1400,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '240px 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "upload",
    style: {
      width: '100%'
    }
  }, "Upload document")), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      background: '#E2E2E2',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: '#3A4151'
    }
  }, "Folders"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 6
    }
  }, folders.map(f => {
    const on = folder === f.id;
    return /*#__PURE__*/React.createElement("div", {
      key: f.id,
      onClick: () => setFolder(f.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 10px',
        borderRadius: 6,
        cursor: 'pointer',
        background: on ? '#FFF5EE' : 'transparent',
        color: on ? '#A8430C' : '#3A4151',
        fontFamily: "'Manrope',sans-serif",
        fontSize: 13,
        fontWeight: on ? 600 : 500
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = '#F7F8FA';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: f.icon,
      size: 16
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, f.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        color: on ? '#A8430C' : '#6B7384'
      }
    }, f.count));
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: '-0.01em'
    }
  }, folders.find(f => f.id === folder).label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: '#6B7384'
    }
  }, visible.length, " documents")), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      borderBottom: '1px solid #E6E9EE',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search documents\u2026",
    prefix: "search"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "filter"
  }, "Filter"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "download"
  }, "Export")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: "'Manrope',sans-serif",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ['Name', 'Folder', 'Size', 'Status', 'Owner', 'Updated', ''].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: 'left',
      background: '#E2E2E2',
      color: '#3A4151',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      padding: '10px 14px',
      borderBottom: '1px solid #D9DDE3'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, visible.map(d => {
    const st = STATUS[d.status];
    const ow = owner(d.owner);
    const kindColor = d.kind === 'pdf' ? 'red' : d.kind === 'zip' ? 'amber' : 'steel';
    return /*#__PURE__*/React.createElement("tr", {
      key: d.id,
      style: {
        borderBottom: '1px solid #E6E9EE',
        cursor: 'pointer'
      },
      onMouseEnter: e => e.currentTarget.style.background = '#F7F8FA',
      onMouseLeave: e => e.currentTarget.style.background = 'transparent'
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '12px 14px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(IconTile, {
      icon: d.kind === 'zip' ? 'folder' : 'fileText',
      color: kindColor,
      size: 28
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: '#1F2433'
      }
    }, d.name))), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '12px 14px',
        color: '#3A4151'
      }
    }, d.folder), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '12px 14px',
        color: '#6B7384',
        fontFamily: 'ui-monospace, Menlo, monospace',
        fontSize: 12
      }
    }, d.size), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '12px 14px'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: st.variant
    }, st.label)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '12px 14px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: ow.name,
      color: ow.color,
      size: 24
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#1F2433'
      }
    }, ow.name.split(' ')[0]))), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '12px 14px',
        color: '#6B7384'
      }
    }, d.updated), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '12px 14px',
        width: 50
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "moreV"
    })));
  }))))));
}
window.DocumentCenter = DocumentCenter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-app/DocumentCenter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-app/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// ============================================================
// Core365 — Icon set (inline SVG, Lucide-style)
// Stroke 1.75, 24px viewBox, currentColor.
// Substituted set — flagged in design system README.
// ============================================================
const ICONS = {
  home: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 9l9-6 9 6v11a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2V9z"
  })),
  briefcase: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
  })),
  fileText: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v6h6M16 13H8M16 17H8M10 9H8"
  })),
  users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
  })),
  calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 2v4M8 2v4M3 10h18"
  })),
  chart: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 3v18h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 14l4-4 4 4 5-5"
  })),
  inbox: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 12h-6l-2 3h-4l-2-3H2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
  })),
  settings: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
  })),
  search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4.35-4.35"
  })),
  bell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
  })),
  plus: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })),
  check: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  })),
  x: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12"
  })),
  chevronDown: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  })),
  chevronRight: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6"
  })),
  chevronLeft: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M15 6l-6 6 6 6"
  })),
  mapPin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "3"
  })),
  zap: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z"
  })),
  sun: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
  })),
  folder: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
  })),
  filter: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z"
  })),
  moreH: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1.5"
  })),
  moreV: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "5",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "19",
    r: "1.5"
  })),
  arrowUp: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 19V5M5 12l7-7 7 7"
  })),
  arrowRight: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M12 5l7 7-7 7"
  })),
  clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 6v6l4 2"
  })),
  download: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
  })),
  upload: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"
  })),
  paperclip: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
  })),
  send: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
  })),
  shieldCheck: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12l2 2 4-4"
  })),
  alertCircle: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v4M12 16h.01"
  })),
  star: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
  })),
  building: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "2",
    width: "16",
    height: "20",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 22v-4h6v4M8 6h.01M8 10h.01M8 14h.01M12 6h.01M12 10h.01M12 14h.01M16 6h.01M16 10h.01M16 14h.01"
  })),
  truck: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "3",
    width: "15",
    height: "13",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 8h4l3 3v5h-7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "19",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "19",
    r: "2.5"
  })),
  phone: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
  })),
  mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 7l-10 6L2 7"
  })),
  dollar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
  })),
  externalLink: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
  })),
  refresh: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M23 4v6h-6M1 20v-6h6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
  })),
  trash: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"
  })),
  edit: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
  }))
};
function Icon({
  name,
  size = 20,
  stroke = 1.75,
  color,
  style = {},
  ...props
}) {
  const path = ICONS[name];
  if (!path) return /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#E7505B',
      fontSize: 10
    }
  }, "?", name);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color || 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0,
      ...style
    }
  }, props), path);
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-app/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-app/JobDetail.jsx
try { (() => {
// ============================================================
// Core365 — Job Detail
// Header + tabs + overview / docs / timeline.
// ============================================================

function DocRow({
  doc
}) {
  const team = window.C365_DATA.TEAM;
  const {
    STATUS
  } = window.C365_DATA;
  const owner = team.find(t => t.id === doc.owner);
  const st = STATUS[doc.status];
  const kindColor = doc.kind === 'pdf' ? 'red' : doc.kind === 'zip' ? 'amber' : 'steel';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 14px',
      borderBottom: '1px solid #E6E9EE'
    }
  }, /*#__PURE__*/React.createElement(IconTile, {
    icon: doc.kind === 'zip' ? 'folder' : 'fileText',
    color: kindColor,
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: '#1F2433'
    }
  }, doc.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#6B7384',
      marginTop: 2
    }
  }, doc.folder, " \xB7 ", doc.size, " \xB7 Updated ", doc.updated)), /*#__PURE__*/React.createElement(Badge, {
    variant: st.variant
  }, st.label), /*#__PURE__*/React.createElement(Avatar, {
    name: owner.name,
    color: owner.color,
    size: 24
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "moreV",
    tooltip: "More"
  }));
}
function JobDetail({
  jobId,
  navigate
}) {
  const {
    JOBS,
    STATUS,
    TEAM,
    TIMELINE,
    DOCS
  } = window.C365_DATA;
  const job = JOBS.find(j => j.id === jobId) || JOBS[0];
  const st = STATUS[job.status];
  const owner = TEAM.find(t => t.id === job.owner);
  const [tab, setTab] = React.useState('overview');
  const tabs = [{
    id: 'overview',
    label: 'Overview'
  }, {
    id: 'documents',
    label: 'Documents',
    count: DOCS.length
  }, {
    id: 'permits',
    label: 'Permits',
    count: 2
  }, {
    id: 'schedule',
    label: 'Schedule'
  }, {
    id: 'financials',
    label: 'Financials'
  }, {
    id: 'activity',
    label: 'Activity'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: "'Manrope',sans-serif",
      fontSize: 13,
      color: '#6B7384',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => navigate('jobs'),
    style: {
      cursor: 'pointer'
    }
  }, "Jobs"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 12,
    color: "#99A0AE"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#1F2433',
      fontWeight: 600
    }
  }, job.id)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: '-0.01em'
    }
  }, job.customer), /*#__PURE__*/React.createElement(Badge, {
    variant: st.variant
  }, st.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginTop: 8,
      color: '#3A4151',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mapPin",
    size: 14,
    color: "#6B7384"
  }), job.address), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 14,
    color: "#6B7384"
  }), job.system), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "building",
    size: 14,
    color: "#6B7384"
  }), job.ahj))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "phone"
  }, "Call customer"), /*#__PURE__*/React.createElement(Button, {
    variant: "save",
    icon: "check"
  }, "Save"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "moreH",
    variant: "secondary"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid #E6E9EE',
      marginBottom: 18
    }
  }, tabs.map(t => {
    const on = t.id === tab;
    return /*#__PURE__*/React.createElement("div", {
      key: t.id,
      onClick: () => setTab(t.id),
      style: {
        fontFamily: "'Manrope',sans-serif",
        fontSize: 14,
        fontWeight: on ? 600 : 500,
        color: on ? '#1F2433' : '#6B7384',
        padding: '10px 14px',
        borderBottom: '2px solid ' + (on ? '#F2691A' : 'transparent'),
        marginBottom: -1,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }
    }, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        background: on ? '#FFF5EE' : '#F1F3F6',
        color: on ? '#A8430C' : '#6B7384',
        padding: '1px 6px',
        borderRadius: 999
      }
    }, t.count));
  })), tab === 'overview' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 18px',
      borderBottom: '1px solid #E6E9EE',
      background: '#E2E2E2',
      fontWeight: 700,
      fontSize: 13
    }
  }, "Progress"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, job.progress, "% complete"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#6B7384'
    }
  }, "Next: ", job.nextAction)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: '#F1F3F6',
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: job.progress + '%',
      height: '100%',
      borderRadius: 999,
      background: job.status === 'overdue' ? '#E7505B' : job.status === 'installed' ? '#2BA67A' : '#F2691A'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 8,
      marginTop: 18
    }
  }, [{
    l: 'Lead',
    done: true
  }, {
    l: 'Quoted',
    done: true
  }, {
    l: 'Permit',
    done: job.progress >= 50,
    active: job.status === 'pending'
  }, {
    l: 'Install',
    done: job.progress >= 80,
    active: job.status === 'scheduled'
  }, {
    l: 'Done',
    done: job.status === 'installed'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      margin: '0 auto',
      background: s.done ? '#F2691A' : s.active ? '#FFF5EE' : '#F1F3F6',
      border: s.active ? '2px solid #F2691A' : 'none',
      color: s.done ? '#fff' : s.active ? '#F2691A' : '#99A0AE',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 700
    }
  }, s.done ? '✓' : i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      marginTop: 6,
      color: s.active ? '#1F2433' : '#6B7384',
      fontWeight: s.active ? 600 : 500
    }
  }, s.l)))))), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 18px',
      borderBottom: '1px solid #E6E9EE',
      background: '#E2E2E2'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13
    }
  }, "Documents"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "upload"
  }, "Upload")), /*#__PURE__*/React.createElement("div", null, DOCS.slice(0, 4).map(d => /*#__PURE__*/React.createElement(DocRow, {
    key: d.id,
    doc: d
  })))), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 18px',
      borderBottom: '1px solid #E6E9EE',
      background: '#E2E2E2',
      fontWeight: 700,
      fontSize: 13
    }
  }, "Activity"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 18px 14px'
    }
  }, TIMELINE.slice(0, 5).map((e, i) => /*#__PURE__*/React.createElement(TimelineEntry, {
    key: i,
    entry: e
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 18px',
      borderBottom: '1px solid #E6E9EE',
      background: '#E2E2E2',
      fontWeight: 700,
      fontSize: 13
    }
  }, "Job summary"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(KV, {
    label: "Job ID",
    value: job.id,
    mono: true
  }), /*#__PURE__*/React.createElement(KV, {
    label: "Type",
    value: job.type
  }), /*#__PURE__*/React.createElement(KV, {
    label: "System",
    value: job.system
  }), /*#__PURE__*/React.createElement(KV, {
    label: "Job value",
    value: job.value ? '$' + job.value.toLocaleString() : 'Not quoted',
    bold: true
  }), /*#__PURE__*/React.createElement(KV, {
    label: "AHJ",
    value: job.ahj
  }), /*#__PURE__*/React.createElement(KV, {
    label: "Created",
    value: "3 days ago"
  }), /*#__PURE__*/React.createElement(KV, {
    label: "Last updated",
    value: job.updatedAt
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 18px',
      borderBottom: '1px solid #E6E9EE',
      background: '#E2E2E2',
      fontWeight: 700,
      fontSize: 13
    }
  }, "Team"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 0'
    }
  }, [owner, ...job.crew.map(c => TEAM.find(t => t.id === c))].filter(Boolean).map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 18px'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    color: p.color,
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: '#1F2433'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#6B7384'
    }
  }, p.role)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 18px 14px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "plus"
  }, "Add team member")))), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 18px',
      borderBottom: '1px solid #E6E9EE',
      background: '#E2E2E2',
      fontWeight: 700,
      fontSize: 13
    }
  }, "Customer"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: '#3A4151'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 14,
    color: "#6B7384"
  }), " (951) 555-0182"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: '#3A4151'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 14,
    color: "#6B7384"
  }), " reyes.family@email.com"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: '#3A4151'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mapPin",
    size: 14,
    color: "#6B7384"
  }), " ", job.address))))), tab === 'documents' && /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 18px',
      borderBottom: '1px solid #E6E9EE',
      background: '#E2E2E2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13
    }
  }, "All documents (", DOCS.length, ")"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    icon: "upload"
  }, "Upload document")), /*#__PURE__*/React.createElement("div", null, DOCS.map(d => /*#__PURE__*/React.createElement(DocRow, {
    key: d.id,
    doc: d
  })))), tab === 'activity' && /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 18px',
      borderBottom: '1px solid #E6E9EE',
      background: '#E2E2E2',
      fontWeight: 700,
      fontSize: 13
    }
  }, "Activity feed"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 18px 14px'
    }
  }, TIMELINE.map((e, i) => /*#__PURE__*/React.createElement(TimelineEntry, {
    key: i,
    entry: e
  })))), (tab === 'permits' || tab === 'schedule' || tab === 'financials') && /*#__PURE__*/React.createElement(Card, {
    padding: 36,
    style: {
      textAlign: 'center',
      color: '#6B7384'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Jost',sans-serif",
      fontSize: 15
    }
  }, "The ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#1F2433'
    }
  }, tabs.find(t => t.id === tab).label), " tab is part of Core365 but isn't recreated in this kit.")));
}
function KV({
  label,
  value,
  mono,
  bold
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#6B7384'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: bold ? 700 : 500,
      color: '#1F2433',
      fontFamily: mono ? 'ui-monospace, Menlo, monospace' : "'Manrope',sans-serif",
      textAlign: 'right'
    }
  }, value));
}
window.JobDetail = JobDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-app/JobDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-app/JobsList.jsx
try { (() => {
// ============================================================
// Core365 — Jobs List
// Pipeline table with filters, status pills, owner avatars.
// ============================================================

function JobsList({
  navigate
}) {
  const {
    JOBS,
    STATUS,
    TEAM
  } = window.C365_DATA;
  const [filter, setFilter] = React.useState('all');
  const [search, setSearch] = React.useState('');
  const filters = [{
    id: 'all',
    label: 'All jobs',
    count: JOBS.length
  }, {
    id: 'mine',
    label: 'My team',
    count: JOBS.filter(j => j.owner === 'mr').length
  }, {
    id: 'pending',
    label: 'Permit pending',
    count: JOBS.filter(j => j.status === 'pending').length
  }, {
    id: 'scheduled',
    label: 'Install scheduled',
    count: JOBS.filter(j => j.status === 'scheduled').length
  }, {
    id: 'overdue',
    label: 'Overdue',
    count: JOBS.filter(j => j.status === 'overdue').length
  }];
  const visible = JOBS.filter(j => {
    if (filter === 'mine' && j.owner !== 'mr') return false;
    if (filter === 'pending' && j.status !== 'pending') return false;
    if (filter === 'scheduled' && j.status !== 'scheduled') return false;
    if (filter === 'overdue' && j.status !== 'overdue') return false;
    if (search) {
      const q = search.toLowerCase();
      return j.customer.toLowerCase().includes(q) || j.id.toLowerCase().includes(q) || j.address.toLowerCase().includes(q);
    }
    return true;
  });
  const owner = id => TEAM.find(t => t.id === id);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      maxWidth: 1400,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: '-0.01em'
    }
  }, "Jobs"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Manrope',sans-serif",
      fontSize: 14,
      color: '#6B7384'
    }
  }, visible.length, " of ", JOBS.length), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "download"
  }, "Export"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "plus"
  }, "New job"))), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '10px 12px',
      borderBottom: '1px solid #E6E9EE'
    }
  }, filters.map(f => {
    const on = filter === f.id;
    return /*#__PURE__*/React.createElement("button", {
      key: f.id,
      onClick: () => setFilter(f.id),
      style: {
        fontFamily: "'Manrope',sans-serif",
        fontSize: 13,
        fontWeight: on ? 600 : 500,
        padding: '6px 12px',
        borderRadius: 6,
        border: '1px solid ' + (on ? '#F2691A' : '#D9DDE3'),
        background: on ? '#FFF5EE' : '#fff',
        color: on ? '#A8430C' : '#3A4151',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }
    }, f.label, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        background: on ? '#fff' : '#F1F3F6',
        color: on ? '#A8430C' : '#6B7384',
        padding: '1px 6px',
        borderRadius: 999
      }
    }, f.count));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      width: 240
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search this view\u2026",
    prefix: "search",
    value: search,
    onChange: e => setSearch(e.target.value)
  })), /*#__PURE__*/React.createElement(IconButton, {
    icon: "filter",
    tooltip: "More filters",
    variant: "secondary"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: "'Manrope',sans-serif",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ['Job', 'Customer', 'Type', 'Status', 'Owner', 'Crew', 'Progress', 'Value'].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: 'left',
      background: '#E2E2E2',
      color: '#3A4151',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      padding: '10px 14px',
      borderBottom: '1px solid #D9DDE3',
      whiteSpace: 'nowrap'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, visible.map(j => {
    const st = STATUS[j.status];
    const ow = owner(j.owner);
    return /*#__PURE__*/React.createElement("tr", {
      key: j.id,
      onClick: () => navigate('job/' + j.id),
      style: {
        borderBottom: '1px solid #E6E9EE',
        cursor: 'pointer',
        transition: 'background 100ms'
      },
      onMouseEnter: e => e.currentTarget.style.background = '#F7F8FA',
      onMouseLeave: e => e.currentTarget.style.background = 'transparent'
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '12px 14px',
        fontFamily: 'ui-monospace, Menlo, monospace',
        fontSize: 12,
        color: '#3A4151',
        whiteSpace: 'nowrap'
      }
    }, j.id), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '12px 14px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        color: '#1F2433'
      }
    }, j.customer), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: '#6B7384',
        marginTop: 1
      }
    }, j.address)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '12px 14px',
        color: '#3A4151',
        whiteSpace: 'nowrap'
      }
    }, j.type), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '12px 14px'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: st.variant
    }, st.label)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '12px 14px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: ow.name,
      color: ow.color,
      size: 24
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#1F2433',
        fontWeight: 500
      }
    }, ow.name))), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '12px 14px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, j.crew.length === 0 ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#99A0AE'
      }
    }, "\u2014") : j.crew.map((c, i) => /*#__PURE__*/React.createElement("div", {
      key: c,
      style: {
        marginLeft: i === 0 ? 0 : -8,
        border: '2px solid #fff',
        borderRadius: '50%'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: owner(c).name,
      color: owner(c).color,
      size: 24
    }))))), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '12px 14px',
        width: 140
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 110,
        height: 6,
        background: '#F1F3F6',
        borderRadius: 999
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: j.progress + '%',
        height: '100%',
        borderRadius: 999,
        background: j.status === 'overdue' ? '#E7505B' : j.status === 'installed' ? '#2BA67A' : '#F2691A'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: '#6B7384',
        marginTop: 4
      }
    }, j.progress, "% \xB7 ", j.nextAction)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '12px 14px',
        fontWeight: 600,
        whiteSpace: 'nowrap'
      }
    }, j.value ? '$' + j.value.toLocaleString() : /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#99A0AE',
        fontWeight: 400
      }
    }, "\u2014")));
  }))))));
}
window.JobsList = JobsList;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-app/JobsList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-app/Primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// ============================================================
// Core365 — Primitives
// Button, Input, Field, Badge, Card, Avatar, IconTile, StatusDot
// All visuals come from --c365-* tokens in colors_and_type.css.
// ============================================================

const primStyles = {
  // Buttons
  btnBase: {
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: '20px',
    padding: '8px 16px',
    borderRadius: 6,
    border: '1px solid transparent',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    transition: 'background 120ms, color 120ms, border-color 120ms, box-shadow 120ms',
    whiteSpace: 'nowrap',
    userSelect: 'none'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  children,
  disabled,
  onClick,
  style = {},
  ...props
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    primary: {
      base: {
        background: '#F2691A',
        color: '#fff'
      },
      hover: {
        background: '#D55812'
      }
    },
    save: {
      base: {
        background: '#5A739F',
        color: '#fff'
      },
      hover: {
        background: '#485E85'
      }
    },
    secondary: {
      base: {
        background: '#fff',
        color: '#1F2433',
        borderColor: '#D9DDE3'
      },
      hover: {
        background: '#F1F3F6'
      }
    },
    ghost: {
      base: {
        background: 'transparent',
        color: '#3A4151'
      },
      hover: {
        background: '#F1F3F6'
      }
    },
    danger: {
      base: {
        background: '#fff',
        color: '#C8404A',
        borderColor: '#E7505B'
      },
      hover: {
        background: '#FCE6E8'
      }
    },
    'danger-solid': {
      base: {
        background: '#E7505B',
        color: '#fff'
      },
      hover: {
        background: '#C8404A'
      }
    }
  };
  const sizes = {
    sm: {
      padding: '4px 10px',
      fontSize: 13,
      lineHeight: '18px'
    },
    md: {
      padding: '8px 16px',
      fontSize: 14,
      lineHeight: '20px'
    },
    lg: {
      padding: '12px 22px',
      fontSize: 16,
      lineHeight: '24px'
    },
    icon: {
      padding: 8,
      width: 36,
      height: 36
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      ...primStyles.btnBase,
      ...sizes[size],
      ...v.base,
      ...(hover && !disabled ? v.hover : {}),
      ...(disabled ? {
        opacity: 0.45,
        cursor: 'not-allowed'
      } : {}),
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: disabled ? undefined : onClick,
    disabled: disabled
  }, props), icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size === 'lg' ? 18 : 16
  }), children, iconRight && /*#__PURE__*/React.createElement(Icon, {
    name: iconRight,
    size: size === 'lg' ? 18 : 16
  }));
}
function IconButton({
  icon,
  variant = 'ghost',
  size = 16,
  tooltip,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement(Button, _extends({
    variant: variant,
    size: "icon",
    style: style,
    title: tooltip
  }, props), /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size
  }));
}
function Input({
  value,
  onChange,
  placeholder,
  error,
  disabled,
  prefix,
  suffix,
  style = {},
  ...props
}) {
  const [focus, setFocus] = React.useState(false);
  const wrapper = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    background: disabled ? '#F7F8FA' : '#fff',
    border: `1px solid ${error ? '#E7505B' : focus ? '#F2691A' : '#D9DDE3'}`,
    borderRadius: 6,
    boxShadow: focus ? error ? '0 0 0 3px rgba(231, 80, 91, 0.28)' : '0 0 0 3px rgba(242, 105, 26, 0.28)' : 'none',
    transition: 'border-color 120ms, box-shadow 120ms',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrapper
  }, prefix && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 10,
      display: 'flex',
      alignItems: 'center',
      color: '#6B7384'
    }
  }, typeof prefix === 'string' ? /*#__PURE__*/React.createElement(Icon, {
    name: prefix,
    size: 16
  }) : prefix), /*#__PURE__*/React.createElement("input", _extends({
    value: value ?? '',
    onChange: onChange || (() => {}),
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      fontFamily: "'Manrope', sans-serif",
      fontSize: 14,
      padding: '8px 12px',
      paddingLeft: prefix ? 6 : 12,
      paddingRight: suffix ? 6 : 12,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      color: '#1F2433',
      height: 34
    }
  }, props)), suffix && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingRight: 10,
      display: 'flex',
      alignItems: 'center',
      color: '#6B7384'
    }
  }, suffix));
}
function Field({
  label,
  help,
  error,
  required,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "'Manrope',sans-serif",
      fontSize: 13,
      fontWeight: 600,
      color: '#3A4151'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#E7505B',
      marginLeft: 4
    }
  }, "*")), children, (help || error) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Manrope',sans-serif",
      fontSize: 12,
      color: error ? '#C8404A' : '#6B7384'
    }
  }, error || help));
}
const BADGE_VARIANTS = {
  lead: {
    bg: '#FFF5EE',
    fg: '#A8430C',
    dot: '#F2691A'
  },
  quoted: {
    bg: '#E5ECF4',
    fg: '#36486A',
    dot: '#5A739F'
  },
  pending: {
    bg: '#FBEFD4',
    fg: '#8C5C0F',
    dot: '#E89B1E'
  },
  scheduled: {
    bg: '#E2ECF9',
    fg: '#2A5BA6',
    dot: '#3D7DD9'
  },
  installed: {
    bg: '#E6F5EE',
    fg: '#1F7A56',
    dot: '#2BA67A'
  },
  overdue: {
    bg: '#FCE6E8',
    fg: '#B73642',
    dot: '#E7505B'
  },
  neutral: {
    bg: '#F1F3F6',
    fg: '#6B7384',
    dot: '#99A0AE'
  },
  brand: {
    bg: '#FFF5EE',
    fg: '#A8430C',
    dot: '#F2691A'
  }
};
function Badge({
  variant = 'neutral',
  dot = true,
  children,
  style = {}
}) {
  const v = BADGE_VARIANTS[variant] || BADGE_VARIANTS.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Manrope',sans-serif",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 999,
      background: v.bg,
      color: v.fg,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: v.dot
    }
  }), children);
}
function Card({
  children,
  padding = 16,
  hover,
  onClick,
  style = {}
}) {
  const [hovered, setHovered] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onClick: onClick,
    style: {
      background: '#fff',
      border: `1px solid ${hover && hovered ? 'rgba(90, 115, 159, 0.3)' : '#D9DDE3'}`,
      borderRadius: 8,
      boxShadow: hover && hovered ? '0 2px 4px rgba(20,28,51,0.06), 0 4px 12px rgba(20,28,51,0.06)' : '0 1px 0 rgba(20,28,51,0.04), 0 1px 2px rgba(20,28,51,0.06)',
      padding,
      cursor: onClick ? 'pointer' : 'default',
      transition: 'box-shadow 120ms, border-color 120ms',
      ...style
    }
  }, children);
}
function Avatar({
  name,
  color = '#5A739F',
  size = 28,
  src
}) {
  const initials = (name || '?').split(' ').map(s => s[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: src ? `center/cover url(${src})` : color,
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Manrope',sans-serif",
      fontWeight: 600,
      fontSize: Math.round(size * 0.4),
      flexShrink: 0
    }
  }, !src && initials);
}
function IconTile({
  icon,
  color = 'orange',
  size = 36
}) {
  const colors = {
    orange: {
      bg: '#FFF5EE',
      fg: '#F2691A'
    },
    steel: {
      bg: '#E5ECF4',
      fg: '#485E85'
    },
    green: {
      bg: '#E6F5EE',
      fg: '#1F7A56'
    },
    red: {
      bg: '#FCE6E8',
      fg: '#B73642'
    },
    amber: {
      bg: '#FBEFD4',
      fg: '#8C5C0F'
    },
    neutral: {
      bg: '#F1F3F6',
      fg: '#3A4151'
    }
  };
  const c = colors[color] || colors.orange;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 8,
      background: c.bg,
      color: c.fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: Math.round(size * 0.5)
  }));
}
function Divider({
  vertical,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#E6E9EE',
      ...(vertical ? {
        width: 1,
        alignSelf: 'stretch'
      } : {
        height: 1,
        width: '100%'
      }),
      ...style
    }
  });
}
function SectionLabel({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Manrope',sans-serif",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: '#6B7384',
      ...style
    }
  }, children);
}
Object.assign(window, {
  Button,
  IconButton,
  Input,
  Field,
  Badge,
  Card,
  Avatar,
  IconTile,
  Divider,
  SectionLabel,
  BADGE_VARIANTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-app/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-app/Shell.jsx
try { (() => {
// ============================================================
// Core365 — App Shell
// Left sidebar (240px) + top header (56px) + scrolling content area.
// ============================================================

function SidebarItem({
  icon,
  label,
  active,
  count,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const bg = active ? '#FFF5EE' : hover ? '#F1F3F6' : 'transparent';
  const fg = active ? '#A8430C' : '#3A4151';
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 12px',
      margin: '0 8px',
      borderRadius: 6,
      background: bg,
      color: fg,
      cursor: 'pointer',
      fontFamily: "'Manrope',sans-serif",
      fontSize: 14,
      fontWeight: active ? 600 : 500,
      position: 'relative',
      transition: 'background 120ms, color 120ms'
    }
  }, active && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -8,
      top: 8,
      bottom: 8,
      width: 3,
      background: '#F2691A',
      borderRadius: '0 3px 3px 0'
    }
  }), /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    stroke: active ? 2 : 1.75
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      background: active ? '#fff' : '#E6E9EE',
      color: active ? '#A8430C' : '#6B7384',
      padding: '1px 7px',
      borderRadius: 999
    }
  }, count));
}
function Sidebar({
  route,
  navigate
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      background: '#fff',
      borderRight: '1px solid #E6E9EE',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      display: 'flex',
      alignItems: 'center',
      padding: '0 18px',
      borderBottom: '1px solid #E6E9EE'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/core365-logo-dark.png",
    alt: "Core365",
    style: {
      height: 26
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 0 8px'
    }
  }, /*#__PURE__*/React.createElement(SidebarItem, {
    icon: "home",
    label: "Dashboard",
    active: route === 'dashboard',
    onClick: () => navigate('dashboard')
  }), /*#__PURE__*/React.createElement(SidebarItem, {
    icon: "briefcase",
    label: "Jobs",
    count: "142",
    active: route.startsWith('job'),
    onClick: () => navigate('jobs')
  }), /*#__PURE__*/React.createElement(SidebarItem, {
    icon: "users",
    label: "Customers",
    onClick: () => navigate('customers'),
    active: route === 'customers'
  }), /*#__PURE__*/React.createElement(SidebarItem, {
    icon: "calendar",
    label: "Schedule",
    onClick: () => navigate('schedule'),
    active: route === 'schedule'
  }), /*#__PURE__*/React.createElement(SidebarItem, {
    icon: "fileText",
    label: "Documents",
    count: "86",
    active: route === 'documents',
    onClick: () => navigate('documents')
  }), /*#__PURE__*/React.createElement(SidebarItem, {
    icon: "shieldCheck",
    label: "Permits",
    count: "17",
    onClick: () => navigate('permits'),
    active: route === 'permits'
  }), /*#__PURE__*/React.createElement(SidebarItem, {
    icon: "chart",
    label: "Reports",
    onClick: () => navigate('reports'),
    active: route === 'reports'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 8px'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Workspace")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SidebarItem, {
    icon: "inbox",
    label: "Inbox",
    count: "4",
    onClick: () => navigate('inbox'),
    active: route === 'inbox'
  }), /*#__PURE__*/React.createElement(SidebarItem, {
    icon: "settings",
    label: "Settings",
    onClick: () => navigate('settings'),
    active: route === 'settings'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 16,
      borderTop: '1px solid #E6E9EE'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Maya Rivera",
    color: "#5A739F",
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Manrope',sans-serif",
      fontSize: 13,
      fontWeight: 600,
      color: '#1F2433'
    }
  }, "Maya Rivera"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Manrope',sans-serif",
      fontSize: 11,
      color: '#6B7384'
    }
  }, "SunPeak Ops \xB7 Admin")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronDown",
    size: 14,
    color: "#6B7384"
  }))));
}
function TopBar({
  title,
  breadcrumbs,
  actions
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 56,
      borderBottom: '1px solid #E6E9EE',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 24px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minWidth: 0
    }
  }, breadcrumbs ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: "'Manrope',sans-serif",
      fontSize: 14
    }
  }, breadcrumbs.map((b, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    onClick: b.onClick,
    style: {
      cursor: b.onClick ? 'pointer' : 'default',
      color: i === breadcrumbs.length - 1 ? '#1F2433' : '#6B7384',
      fontWeight: i === breadcrumbs.length - 1 ? 600 : 500
    }
  }, b.label), i < breadcrumbs.length - 1 && /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 14,
    color: "#99A0AE"
  })))) : /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "'Manrope',sans-serif",
      fontSize: 18,
      fontWeight: 700,
      color: '#1F2433',
      letterSpacing: '-0.01em'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search jobs, customers, docs\u2026",
    prefix: "search"
  })), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    tooltip: "Notifications"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "plus",
    variant: "primary",
    tooltip: "New"
  }), actions));
}
function Shell({
  route,
  navigate,
  topbar,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      background: '#FAFBFC',
      fontFamily: "'Manrope', sans-serif",
      color: '#1F2433'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    route: route,
    navigate: navigate
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, topbar, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children)));
}
Object.assign(window, {
  Shell,
  TopBar,
  Sidebar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-app/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-app/data.js
try { (() => {
// ============================================================
// Core365 — Seed data for the UI kit prototype
// ============================================================
const TEAM = [{
  id: 'mr',
  name: 'Maya Rivera',
  color: '#5A739F',
  role: 'Project Manager'
}, {
  id: 'dc',
  name: 'Devon Cho',
  color: '#F2691A',
  role: 'Install Lead'
}, {
  id: 'sh',
  name: 'Sam Huerta',
  color: '#2BA67A',
  role: 'Sales'
}, {
  id: 'ap',
  name: 'Aisha Powell',
  color: '#3D7DD9',
  role: 'Permitting'
}, {
  id: 'tk',
  name: 'Tomas Kane',
  color: '#8C5C0F',
  role: 'Crew Lead'
}];
const STATUS = {
  lead: {
    label: 'Lead',
    variant: 'lead'
  },
  quoted: {
    label: 'Quoted',
    variant: 'quoted'
  },
  pending: {
    label: 'Permit pending',
    variant: 'pending'
  },
  scheduled: {
    label: 'Install scheduled',
    variant: 'scheduled'
  },
  installed: {
    label: 'Installed',
    variant: 'installed'
  },
  overdue: {
    label: 'Overdue',
    variant: 'overdue'
  }
};
const JOBS = [{
  id: 'JOB-2026-00417',
  customer: 'Reyes Family',
  address: '4218 Magnolia Ct, Riverside, CA 92506',
  type: 'Solar — Residential',
  system: '9.6 kW · 24 panels',
  value: 38400,
  status: 'pending',
  owner: 'mr',
  crew: ['tk', 'dc'],
  ahj: 'Riverside County',
  updatedAt: '4 min ago',
  progress: 55,
  nextAction: 'Plan check (avg 9 days)'
}, {
  id: 'JOB-2026-00416',
  customer: 'Northgate HVAC',
  address: '1900 Industrial Blvd, Ontario, CA 91761',
  type: 'Roofing — Commercial',
  system: 'TPO recover · 18,400 sqft',
  value: 74900,
  status: 'installed',
  owner: 'dc',
  crew: ['dc', 'tk'],
  ahj: 'San Bernardino Co.',
  updatedAt: '1 h ago',
  progress: 100,
  nextAction: 'Final payment due'
}, {
  id: 'JOB-2026-00415',
  customer: 'Beltran, Anna',
  address: '772 Oakview Ln, Corona, CA 92879',
  type: 'Solar + Battery — Residential',
  system: '7.2 kW · Powerwall 3',
  value: null,
  status: 'lead',
  owner: 'sh',
  crew: [],
  ahj: 'Riverside County',
  updatedAt: '2 h ago',
  progress: 10,
  nextAction: 'Send proposal'
}, {
  id: 'JOB-2026-00414',
  customer: 'Westcott Roofing',
  address: '3120 Front St, Temecula, CA 92590',
  type: 'Roofing — Residential',
  system: 'Asphalt re-roof · 2,800 sqft',
  value: 18200,
  status: 'overdue',
  owner: 'dc',
  crew: ['tk'],
  ahj: 'Riverside County',
  updatedAt: '6 h ago',
  progress: 70,
  nextAction: 'Reschedule final inspection'
}, {
  id: 'JOB-2026-00413',
  customer: 'Iglesia Vida',
  address: '1018 Mission Ave, Moreno Valley, CA 92553',
  type: 'Solar — Commercial',
  system: '48 kW · 120 panels',
  value: 112000,
  status: 'scheduled',
  owner: 'mr',
  crew: ['dc', 'tk'],
  ahj: 'Riverside County',
  updatedAt: '1 d ago',
  progress: 80,
  nextAction: 'Install Tuesday'
}, {
  id: 'JOB-2026-00412',
  customer: 'Holbrook, Ed & Lisa',
  address: '514 Sage Hill, Hemet, CA 92543',
  type: 'HVAC — Replacement',
  system: '4-ton heat pump',
  value: 14800,
  status: 'quoted',
  owner: 'sh',
  crew: [],
  ahj: 'Riverside County',
  updatedAt: '1 d ago',
  progress: 25,
  nextAction: 'Follow up on quote'
}, {
  id: 'JOB-2026-00411',
  customer: 'Cedar Park HOA',
  address: '88 Cedar Park Dr, Murrieta, CA 92562',
  type: 'Solar — Multi-unit',
  system: '180 kW · 7 buildings',
  value: 412000,
  status: 'quoted',
  owner: 'mr',
  crew: [],
  ahj: 'Riverside County',
  updatedAt: '2 d ago',
  progress: 20,
  nextAction: 'Stakeholder review'
}];
const DOCS = [{
  id: 'd1',
  name: 'NEM 3.0 Interconnection Application',
  size: '2.4 MB',
  kind: 'pdf',
  folder: 'Permits',
  status: 'pending',
  updated: '4 min ago',
  owner: 'ap'
}, {
  id: 'd2',
  name: 'Site Plan — Reyes Residence',
  size: '1.1 MB',
  kind: 'pdf',
  folder: 'Permits',
  status: 'pending',
  updated: '4 min ago',
  owner: 'ap'
}, {
  id: 'd3',
  name: 'Customer Signed Proposal',
  size: '480 KB',
  kind: 'pdf',
  folder: 'Proposals',
  status: 'installed',
  updated: '6 d ago',
  owner: 'sh'
}, {
  id: 'd4',
  name: 'Change Order #2 — Add Tesla Wall Charger',
  size: '120 KB',
  kind: 'doc',
  folder: 'Proposals',
  status: 'quoted',
  updated: '2 d ago',
  owner: 'sh'
}, {
  id: 'd5',
  name: 'Roof Inspection Photos',
  size: '14.8 MB',
  kind: 'zip',
  folder: 'Site visit',
  status: 'installed',
  updated: '2 wk ago',
  owner: 'tk'
}, {
  id: 'd6',
  name: 'Electrical Single-Line Diagram',
  size: '780 KB',
  kind: 'pdf',
  folder: 'Engineering',
  status: 'pending',
  updated: '5 d ago',
  owner: 'ap'
}];
const TIMELINE = [{
  t: 'now',
  who: 'system',
  text: 'Permit submitted to Riverside County AHJ.',
  tag: 'pending'
}, {
  t: '4 m ago',
  who: 'mr',
  text: 'Uploaded Site Plan — Reyes Residence.'
}, {
  t: '6 m ago',
  who: 'ap',
  text: 'Generated NEM 3.0 application from job record using Smart Forms.'
}, {
  t: '32 m ago',
  who: 'sh',
  text: 'Customer countersigned proposal.',
  tag: 'quoted'
}, {
  t: '1 h ago',
  who: 'mr',
  text: 'Scheduled site survey for Friday.'
}, {
  t: '2 d ago',
  who: 'sh',
  text: 'Sent proposal to customer.'
}, {
  t: '3 d ago',
  who: 'system',
  text: 'Job created from web lead.',
  tag: 'lead'
}];
const KPIS = [{
  label: 'Open jobs',
  value: '142',
  trend: '+18',
  trendUp: true,
  color: 'orange'
}, {
  label: 'Pipeline value',
  value: '$2.4M',
  trend: '+$412k',
  trendUp: true,
  color: 'steel'
}, {
  label: 'Awaiting permit',
  value: '17',
  trend: '−3',
  trendUp: false,
  color: 'amber'
}, {
  label: 'Installs this wk',
  value: '8',
  trend: 'on track',
  trendUp: true,
  color: 'green'
}];
window.C365_DATA = {
  TEAM,
  STATUS,
  JOBS,
  DOCS,
  TIMELINE,
  KPIS
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/core365-settings/app.jsx
try { (() => {
// Main app — orchestrates the design canvas with all sections.

const {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
} = window;
function App() {
  // A single section so every artboard sits in one continuous horizontal row.
  // Tallest artboard sets the row height; shorter ones align to it.
  const H = 920;
  return /*#__PURE__*/React.createElement(DesignCanvas, null, /*#__PURE__*/React.createElement(DCSection, {
    id: "all",
    title: "Settings Forms \u2014 Redesign Exploration",
    subtitle: "Drag any artboard to reorder \xB7 click \u2922 to focus \xB7 arrow keys to flip."
  }, /*#__PURE__*/React.createElement(DCArtboard, {
    id: "simple-form-v2",
    label: "03b \xB7 Simple form + bulk",
    width: 1280,
    height: H
  }, /*#__PURE__*/React.createElement(SimpleFormPrototypeV2, null)), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "resp-phone-list",
    label: "03b \xB7 Phone \u2014 List",
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(SimpleFormV2_PhoneList, null)), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "resp-phone-edit",
    label: "03b \xB7 Phone \u2014 Edit",
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(SimpleFormV2_PhoneEdit, null)), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "resp-tablet",
    label: "03b \xB7 Tablet \u2014 Portrait",
    width: 768,
    height: 1024
  }, /*#__PURE__*/React.createElement(SimpleFormV2_TabletPortrait, null))));
}
function Hello() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1180,
      padding: 40,
      background: C.surface,
      borderRadius: 12,
      border: `1px solid ${C.border}`,
      boxShadow: C.shadow,
      fontFamily: 'inherit',
      display: 'flex',
      gap: 32,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.12em',
      color: C.brand,
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, "Core365 \xB7 design exploration"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Instrument Serif", serif',
      fontSize: 56,
      lineHeight: 1,
      color: C.ink,
      letterSpacing: '-0.02em',
      marginBottom: 16
    }
  }, "Settings Forms,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: C.brand
    }
  }, "reconsidered.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: C.text,
      lineHeight: 1.55,
      maxWidth: 720
    }
  }, "A look at the pattern behind Core365's configuration screens \u2014 from the dual-list shuffle that drives Active/Inactive, to the tiny Name + Description forms, to the 30+ field beasts like Service Problem Codes and Email & SMS Templates. Four design questions, answered in order:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 14,
      marginTop: 24
    }
  }, [{
    n: '01',
    t: 'A name',
    s: 'Six options. Recommended: Catalogs.'
  }, {
    n: '02',
    t: 'Active / Inactive',
    s: 'Three variations + Primary/Secondary.'
  }, {
    n: '03–05',
    t: 'Forms',
    s: 'Simple, complex, and P/S — same chrome.'
  }, {
    n: '06',
    t: 'Import / Export',
    s: 'CSV/XLSX with full dry-run.'
  }].map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: 14,
      background: C.bg,
      border: `1px solid ${C.border}`,
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      color: C.brand,
      letterSpacing: '0.08em',
      marginBottom: 4
    }
  }, b.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: C.ink,
      marginBottom: 3
    }
  }, b.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: C.muted,
      lineHeight: 1.5
    }
  }, b.s))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260,
      padding: 16,
      background: C.brandSoft,
      border: `1px solid ${C.brandBorder}`,
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: C.brand,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "How to read this"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 16,
      fontSize: 12.5,
      color: C.text,
      lineHeight: 1.55
    }
  }, /*#__PURE__*/React.createElement("li", null, "Scroll, pan, or pinch-zoom the canvas."), /*#__PURE__*/React.createElement("li", null, "Hover any artboard to drag or focus it."), /*#__PURE__*/React.createElement("li", null, "Click \u2922 to enter fullscreen, \u2190/\u2192 to flip, Esc to exit."), /*#__PURE__*/React.createElement("li", null, "Switches, pills, tabs, and segmented controls are ", /*#__PURE__*/React.createElement("em", null, "live"), " \u2014 toggle to feel them."))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-settings/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-settings/changeLog.jsx
try { (() => {
// Change & Access Log modal. Triggered by the "Change Log" header link.
// Anchored absolutely inside the FormCard so it stays within the artboard.

const LOG_ROWS = [{
  table: 'AccountStatus',
  parent: 'AccountStatus',
  prop: 'AccountStatus',
  before: 'Active - None',
  after: 'Completed - None',
  date: '04/14/2026',
  time: '08:33 PM',
  user: 'Kelsie Self'
}, {
  table: 'AccountPhaseDateChanges',
  parent: 'Activate System',
  prop: 'End Date',
  before: '',
  after: '04/10/2026',
  date: '04/14/2026',
  time: '08:33 PM',
  user: 'Kelsie Self'
}, {
  table: 'AccountPhaseDateChanges',
  parent: 'Activate System',
  prop: 'Start Date',
  before: '04/09/2026',
  after: '04/09/2026',
  date: '04/14/2026',
  time: '08:33 PM',
  user: 'Kelsie Self'
}, {
  table: 'AccountPhaseDateChanges',
  parent: 'PTO - Approved',
  prop: 'End Date',
  before: '04/09/2026',
  after: '04/09/2026',
  date: '04/14/2026',
  time: '08:32 PM',
  user: 'Kelsie Self'
}, {
  table: 'AccountPhaseDateChanges',
  parent: 'PTO - Approved',
  prop: 'Start Date',
  before: '',
  after: '04/01/2026',
  date: '04/14/2026',
  time: '08:32 PM',
  user: 'Kelsie Self'
}, {
  table: 'RenewableEnergyAccount',
  parent: 'ProjectDateDetails',
  prop: 'Activation',
  before: '',
  after: '04/10/2026',
  date: '04/14/2026',
  time: '08:32 PM',
  user: 'Kelsie Self'
}, {
  table: 'RenewableEnergyAccount',
  parent: 'ProjectDateDetails',
  prop: 'PTO',
  before: '04/08/2026',
  after: '04/08/2026',
  date: '04/14/2026',
  time: '08:32 PM',
  user: 'Kelsie Self'
}, {
  table: 'RenewableEnergyAccount',
  parent: 'ProjectDateDetails',
  prop: 'Site Survey',
  before: '08/13/2025',
  after: '',
  date: '04/14/2026',
  time: '08:32 PM',
  user: 'Kelsie Self'
}, {
  table: 'AccountPhaseDateChanges',
  parent: 'Activate System',
  prop: 'Start Date',
  before: '',
  after: '04/09/2026',
  date: '04/09/2026',
  time: '09:56 AM',
  user: 'Kelsie Self'
}, {
  table: 'AccountPhaseDateChanges',
  parent: 'PTO - Pending',
  prop: 'End Date',
  before: '',
  after: '04/09/2026',
  date: '04/09/2026',
  time: '09:56 AM',
  user: 'Brynli Clausse'
}, {
  table: 'AccountPhaseDateChanges',
  parent: 'PTO - Approved',
  prop: 'End Date',
  before: '',
  after: '04/09/2026',
  date: '04/09/2026',
  time: '09:56 AM',
  user: 'Brynli Clausse'
}, {
  table: 'AccountDocuments',
  parent: 'PTO',
  prop: 'Uploaded DocumentType',
  before: '',
  after: 'PTO Approval',
  date: '04/09/2026',
  time: '09:55 AM',
  user: 'Brynli Clausse'
}, {
  table: 'AccountDocuments',
  parent: 'PTO',
  prop: 'Uploaded Label',
  before: '',
  after: 'PTO.pdf',
  date: '04/09/2026',
  time: '09:55 AM',
  user: 'Brynli Clausse'
}, {
  table: 'AccountPhaseDateChanges',
  parent: 'PTO - In Review',
  prop: 'End Date',
  before: '',
  after: '04/02/2026',
  date: '04/02/2026',
  time: '12:15 PM',
  user: 'Kelsie Self'
}, {
  table: 'AccountPhaseDateChanges',
  parent: 'PTO - In Review',
  prop: 'Start Date',
  before: '',
  after: '04/02/2026',
  date: '04/02/2026',
  time: '12:15 PM',
  user: 'Kelsie Self'
}, {
  table: 'AccountPhaseDateChanges',
  parent: 'Inspection - Scheduled',
  prop: 'End Date',
  before: '',
  after: '04/02/2026',
  date: '04/02/2026',
  time: '12:11 PM',
  user: 'Kelsie Self'
}, {
  table: 'AccountPhaseDateChanges',
  parent: 'Inspection - Pending',
  prop: 'End Date',
  before: '02/09/2026',
  after: '04/02/2026',
  date: '04/02/2026',
  time: '12:11 PM',
  user: 'Kelsie Self'
}, {
  table: 'AccountPhaseDateChanges',
  parent: 'PTO - Pending',
  prop: 'Start Date',
  before: '01/16/2026',
  after: '04/02/2026',
  date: '04/02/2026',
  time: '12:11 PM',
  user: 'Kelsie Self'
}, {
  table: 'AccountPhaseDateChanges',
  parent: 'Inspection',
  prop: 'End Date',
  before: '03/31/2026',
  after: '04/02/2026',
  date: '04/02/2026',
  time: '12:11 PM',
  user: 'Kelsie Self'
}, {
  table: 'AccountPhaseDateChanges',
  parent: 'Inspection',
  prop: 'End Date',
  before: '03/31/2026',
  after: '03/31/2026',
  date: '04/02/2026',
  time: '12:11 PM',
  user: 'Kelsie Self'
}, {
  table: 'AccountPhaseDateChanges',
  parent: 'Inspection',
  prop: 'Start Date',
  before: '03/31/2026',
  after: '03/31/2026',
  date: '04/02/2026',
  time: '12:11 PM',
  user: 'Kelsie Self'
}, {
  table: 'AccountDocuments',
  parent: 'Inspection',
  prop: 'Uploaded DocumentType',
  before: '',
  after: 'Final Inspection Card',
  date: '04/02/2026',
  time: '12:11 PM',
  user: 'Kelsie Self'
}, {
  table: 'AccountDocuments',
  parent: 'Inspection',
  prop: 'Uploaded Label',
  before: '',
  after: 'Waters FIC.pdf',
  date: '04/02/2026',
  time: '12:11 PM',
  user: 'Kelsie Self'
}, {
  table: 'AccountPhaseDateChanges',
  parent: 'Inspection',
  prop: 'End Date',
  before: '',
  after: '03/31/2026',
  date: '03/31/2026',
  time: '09:33 AM',
  user: 'Ryan Fagan'
}];
const LogColHeader = ({
  label,
  last
}) => /*#__PURE__*/React.createElement("th", {
  style: {
    textAlign: 'left',
    padding: '10px 14px',
    height: 38,
    fontSize: 12.5,
    fontWeight: 600,
    color: C.ink,
    letterSpacing: '-0.005em',
    background: C.bg,
    borderBottom: `1px solid ${C.border}`,
    borderRight: last ? 'none' : `1px solid ${C.border}`,
    whiteSpace: 'nowrap',
    position: 'sticky',
    top: 0,
    zIndex: 1
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8
  }
}, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
  style: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    color: C.subtle
  }
}, /*#__PURE__*/React.createElement(I.cog, {
  size: 12
}), /*#__PURE__*/React.createElement("svg", {
  width: "8",
  height: "10",
  viewBox: "0 0 8 10",
  style: {
    display: 'block'
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M4 0 L8 4 L0 4 Z",
  fill: C.subtle
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 10 L0 6 L8 6 Z",
  fill: C.subtle,
  opacity: "0.5"
})), /*#__PURE__*/React.createElement(I.dots, {
  size: 12
}))));
function ChangeLogModal({
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 10,
      background: 'rgba(20,16,10,0.28)',
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'stretch'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      inset: 8,
      background: C.surface,
      border: `1px solid ${C.border}`,
      borderRadius: 6,
      boxShadow: C.shadowLg,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      fontFamily: 'inherit',
      color: C.ink
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 18px',
      borderBottom: `1px solid ${C.border}`,
      background: C.bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 15,
      fontWeight: 600,
      color: C.ink,
      letterSpacing: '-0.01em'
    }
  }, "Change Log"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      width: 28,
      height: 28,
      borderRadius: 6,
      border: 'none',
      background: 'transparent',
      color: C.muted,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(I.x, {
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflow: 'auto',
      background: C.surface
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 12.5,
      color: C.text
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(LogColHeader, {
    label: "Table Name"
  }), /*#__PURE__*/React.createElement(LogColHeader, {
    label: "Parent Name"
  }), /*#__PURE__*/React.createElement(LogColHeader, {
    label: "Property Name"
  }), /*#__PURE__*/React.createElement(LogColHeader, {
    label: "Before Value"
  }), /*#__PURE__*/React.createElement(LogColHeader, {
    label: "After Value"
  }), /*#__PURE__*/React.createElement(LogColHeader, {
    label: "Date Changed"
  }), /*#__PURE__*/React.createElement(LogColHeader, {
    label: "Time"
  }), /*#__PURE__*/React.createElement(LogColHeader, {
    label: "Changed By",
    last: true
  }))), /*#__PURE__*/React.createElement("tbody", null, LOG_ROWS.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      background: i % 2 === 1 ? '#FAFAF7' : C.surface
    }
  }, /*#__PURE__*/React.createElement(LogCell, null, r.table), /*#__PURE__*/React.createElement(LogCell, null, r.parent), /*#__PURE__*/React.createElement(LogCell, null, r.prop), /*#__PURE__*/React.createElement(LogCell, null, r.before), /*#__PURE__*/React.createElement(LogCell, null, r.after), /*#__PURE__*/React.createElement(LogCell, null, r.date), /*#__PURE__*/React.createElement(LogCell, null, r.time), /*#__PURE__*/React.createElement(LogCell, {
    last: true
  }, r.user)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '10px 18px',
      borderTop: `1px solid ${C.border}`,
      background: C.bg
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    size: "md",
    kind: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(I.x, {
      style: {
        transform: 'translateY(1px)'
      }
    }),
    onClick: onClose,
    style: {
      minWidth: 85
    }
  }, "Close"))));
}
const LogCell = ({
  children,
  last
}) => /*#__PURE__*/React.createElement("td", {
  style: {
    padding: '8px 14px',
    height: 32,
    borderBottom: `1px solid ${C.border}`,
    borderRight: last ? 'none' : `1px solid ${C.border}`,
    fontSize: 12.5,
    color: C.text,
    whiteSpace: 'nowrap'
  }
}, children);
window.ChangeLogModal = ChangeLogModal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-settings/changeLog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-settings/complexForm.jsx
try { (() => {
// Complex form prototypes:
//  1. ComplexFormPrototype       — Email & SMS template (many fields, rich body)
//  2. PrimarySecondaryFormPrototype — Service Problem Code (primary/secondary lists)

// ─── Helpers ────────────────────────────────────────────────────────────
function Section({
  title,
  subtitle,
  icon,
  defaultOpen = true,
  children,
  accent
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: `1px solid ${C.border}`,
      borderRadius: 10,
      background: C.surface,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 14px',
      background: C.bg,
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'inherit',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 5,
      background: accent ? C.brandSoft : '#ECE9E1',
      color: accent ? C.brand : C.muted,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: C.ink,
      letterSpacing: '-0.005em'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: C.subtle,
      marginTop: 1
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.subtle,
      transform: open ? 'rotate(0)' : 'rotate(-90deg)',
      transition: 'transform .15s'
    }
  }, /*#__PURE__*/React.createElement(I.chevDown, {
    size: 16
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, children));
}
function Check({
  checked,
  onChange,
  label
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      cursor: 'pointer',
      fontSize: 13,
      color: C.text
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: e => onChange?.(e.target.checked),
    style: {
      accentColor: C.brand,
      margin: 0
    }
  }), label);
}

// ─── Complex form: Email & SMS Template ─────────────────────────────────
const EMAIL_ITEMS = [{
  id: 'e1',
  name: '*Homeowner Unresponsive',
  usage: 142,
  active: true,
  system: true
}, {
  id: 'e2',
  name: '*Leave Us A Review',
  usage: 88,
  active: true,
  system: true
}, {
  id: 'e3',
  name: '*Test Template',
  usage: 3,
  active: true,
  system: true
}, {
  id: 'e4',
  name: '3rd Party EPC - Out of Business',
  usage: 31,
  active: true
}, {
  id: 'e5',
  name: 'Activation: Completed Enphase',
  usage: 67,
  active: true,
  current: true
}, {
  id: 'e6',
  name: 'Activation: Completed LightReach',
  usage: 124,
  active: true
}, {
  id: 'e7',
  name: 'Activation: Completed SolarEdge',
  usage: 56,
  active: true
}, {
  id: 'e8',
  name: 'Activation: No Call Answer',
  usage: 18,
  active: true
}, {
  id: 'e9',
  name: 'Activation: Sonnen Access',
  usage: 9,
  active: true
}, {
  id: 'e10',
  name: 'AI Agent: Hail Alert',
  usage: 4,
  active: true
}, {
  id: 'e11',
  name: 'Auto-Reply: Received Your Email',
  usage: 312,
  active: true
}, {
  id: 'e12',
  name: 'CAD: Layout Approval Attempt 1',
  usage: 89,
  active: true
}, {
  id: 'e13',
  name: 'Compliance: Need HOA Info (ES)',
  usage: 12,
  active: false
}, {
  id: 'e14',
  name: 'Compliance: Xcel DIC (Spanish)',
  usage: 7,
  active: false
}, {
  id: 'e15',
  name: 'Follow Up',
  usage: 0,
  active: false
}, {
  id: 'e16',
  name: 'HO: Interconnection Submitted',
  usage: 22,
  active: false
}, {
  id: 'e17',
  name: 'PTO: Follow Up on Meter Swap',
  usage: 41,
  active: false
}];
function ComplexFormPrototype() {
  const [items, setItems] = React.useState(EMAIL_ITEMS);
  const [filter, setFilter] = React.useState('all');
  const [q, setQ] = React.useState('');
  const [name, setName] = React.useState('Activation: Completed Enphase');
  const [language, setLanguage] = React.useState('English');
  const [category, setCategory] = React.useState('Activation');
  const [type, setType] = React.useState('Email');
  const [bindTo, setBindTo] = React.useState('Project');
  const [docType, setDocType] = React.useState('');
  const [subject, setSubject] = React.useState('Your system is live — welcome to clean energy! 🌞');
  const [body, setBody] = React.useState("Hi {{customer.first_name}},\n\nGreat news — we just received confirmation that your Enphase system is fully activated and producing power.\n\nYou can monitor production any time in your Enphase App. Your installer team will follow up in 30 days for a check-in.\n\nWelcome to the family,\n{{user.first_name}} at {{company.name}}");
  const [systemTpl, setSystemTpl] = React.useState(false);
  const [excludeNotes, setExcludeNotes] = React.useState(false);
  const [copyRep, setCopyRep] = React.useState(true);
  const [copyPM, setCopyPM] = React.useState(false);
  const filtered = items.filter(i => filter === 'all' || (filter === 'active' ? i.active : !i.active)).filter(i => !q || i.name.toLowerCase().includes(q.toLowerCase()));
  const counts = {
    all: items.length,
    active: items.filter(i => i.active).length,
    inactive: items.filter(i => !i.active).length
  };
  return /*#__PURE__*/React.createElement(FormCard, {
    title: "Email & SMS Templates",
    subtitle: "Catalog \xB7 142 templates \xB7 Renewable Energy",
    width: 1680,
    height: 920,
    headerExtras: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Btn, {
      size: "sm",
      kind: "ghost",
      leftIcon: /*#__PURE__*/React.createElement(I.download, null)
    }, "Template"), /*#__PURE__*/React.createElement(Btn, {
      size: "sm",
      kind: "ghost",
      leftIcon: /*#__PURE__*/React.createElement(I.upload, null)
    }, "Import"), /*#__PURE__*/React.createElement(Btn, {
      size: "sm",
      kind: "ghost",
      leftIcon: /*#__PURE__*/React.createElement(I.download, null)
    }, "Export"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        height: 18,
        background: C.border,
        margin: '0 4px'
      }
    }), /*#__PURE__*/React.createElement(Btn, {
      size: "sm",
      kind: "ghost",
      leftIcon: /*#__PURE__*/React.createElement(I.history, null)
    }, "Change log")),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Btn, {
      size: "md",
      kind: "ghost",
      leftIcon: /*#__PURE__*/React.createElement(I.copy, null)
    }, "Copy from existing\u2026"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Btn, {
      size: "md",
      kind: "secondary"
    }, "Cancel"), /*#__PURE__*/React.createElement(Btn, {
      size: "md",
      kind: "primary",
      leftIcon: /*#__PURE__*/React.createElement(I.save, null)
    }, "Save"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 460px',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      background: C.bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 22px',
      borderBottom: `1px solid ${C.border}`,
      background: C.surface,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Segmented, {
    size: "md",
    value: "edit",
    onChange: () => {},
    options: [{
      value: 'edit',
      label: 'Edit',
      icon: /*#__PURE__*/React.createElement(I.edit, {
        size: 13
      })
    }, {
      value: 'preview',
      label: 'Preview'
    }, {
      value: 'test',
      label: 'Send test'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Pill, {
    tone: "active"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: C.green
    }
  }), "Active"), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "ghost",
    leftIcon: /*#__PURE__*/React.createElement(I.copy, null)
  }, "Duplicate"), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "ghost"
  }, /*#__PURE__*/React.createElement(I.dots, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Section, {
    title: "Identity",
    subtitle: "How this template is named and categorized",
    icon: /*#__PURE__*/React.createElement(I.file, {
      size: 13
    }),
    accent: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '120px 1fr 200px 200px',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Type"
  }, /*#__PURE__*/React.createElement(Select, {
    value: type,
    onChange: e => setType(e.target.value),
    options: ['Email', 'SMS']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: name,
    onChange: e => setName(e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Language"
  }, /*#__PURE__*/React.createElement(Select, {
    value: language,
    onChange: e => setLanguage(e.target.value),
    options: ['English', 'Spanish', 'French', 'Portuguese']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Category"
  }, /*#__PURE__*/React.createElement(Select, {
    value: category,
    onChange: e => setCategory(e.target.value),
    options: ['Activation', 'Compliance', 'CAD', 'Sales', 'Service']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 200px 200px',
      gap: 14,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "For roles"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "All roles",
    prefix: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: C.muted
      }
    }, "\uFF0B")
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Bind to"
  }, /*#__PURE__*/React.createElement(Select, {
    value: bindTo,
    onChange: e => setBindTo(e.target.value),
    options: ['Project', 'Customer', 'Service Ticket']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Document type"
  }, /*#__PURE__*/React.createElement(Select, {
    value: docType,
    onChange: e => setDocType(e.target.value),
    options: ['None', 'Contract', 'Permit', 'Invoice'],
    placeholder: "None"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      marginTop: 14,
      paddingTop: 14,
      borderTop: `1px dashed ${C.border}`
    }
  }, /*#__PURE__*/React.createElement(Check, {
    checked: systemTpl,
    onChange: setSystemTpl,
    label: "System template"
  }), /*#__PURE__*/React.createElement(Check, {
    checked: excludeNotes,
    onChange: setExcludeNotes,
    label: "Exclude from activity notes"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      fontSize: 12,
      color: C.subtle
    }
  }, /*#__PURE__*/React.createElement(Check, {
    checked: false,
    onChange: () => {},
    label: "Sign"
  }), /*#__PURE__*/React.createElement(Check, {
    checked: true,
    onChange: () => {},
    label: "Completed"
  }), /*#__PURE__*/React.createElement(Check, {
    checked: false,
    onChange: () => {},
    label: "Void"
  }), /*#__PURE__*/React.createElement(Check, {
    checked: false,
    onChange: () => {},
    label: "Resend"
  })))), /*#__PURE__*/React.createElement(Section, {
    title: "Recipients",
    subtitle: "Who receives it, who's CC'd, how to forward replies",
    icon: /*#__PURE__*/React.createElement(I.arrowRight, {
      size: 13
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Recipient for custom forms"
  }, /*#__PURE__*/React.createElement(Select, {
    value: "Customer",
    onChange: () => {},
    options: ['Customer', 'Installer', 'Both']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Other email address"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "e.g. ops@callpilot.io"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email CC"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "ops-team@\u2026"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email to forward replies"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "support@\u2026"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "From email address"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "hello@"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "From email domain"
  }, /*#__PURE__*/React.createElement(Input, {
    prefix: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: C.muted
      }
    }, "@"),
    placeholder: "callpilot.io"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      marginTop: 14,
      paddingTop: 14,
      borderTop: `1px dashed ${C.border}`
    }
  }, /*#__PURE__*/React.createElement(Check, {
    checked: copyRep,
    onChange: setCopyRep,
    label: "Copy Sales Rep on send"
  }), /*#__PURE__*/React.createElement(Check, {
    checked: copyPM,
    onChange: setCopyPM,
    label: "Copy Project Manager on send"
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "Content",
    subtitle: "Subject line and body \u2014 supports merge variables",
    icon: /*#__PURE__*/React.createElement(I.edit, {
      size: 13
    }),
    accent: true
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Email subject",
    required: true,
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: subject,
    onChange: e => setSubject(e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email body",
    required: true,
    hint: "5000 character limit \xB7 234 used"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: `1px solid ${C.border}`,
      borderRadius: 8,
      background: C.surface,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      padding: 6,
      borderBottom: `1px solid ${C.border}`,
      background: C.bg,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    value: "Normal",
    onChange: () => {},
    options: ['Normal', 'Heading 1', 'Heading 2'],
    style: {
      width: 110
    }
  }), /*#__PURE__*/React.createElement(Select, {
    value: "Manrope",
    onChange: () => {},
    options: ['Manrope', 'Inter', 'Arial', 'Georgia'],
    style: {
      width: 110
    }
  }), /*#__PURE__*/React.createElement(ToolbarGroup, null, /*#__PURE__*/React.createElement(ToolBtn, null, /*#__PURE__*/React.createElement("strong", null, "B")), /*#__PURE__*/React.createElement(ToolBtn, null, /*#__PURE__*/React.createElement("em", null, "I")), /*#__PURE__*/React.createElement(ToolBtn, null, /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: 'underline'
    }
  }, "U"))), /*#__PURE__*/React.createElement(ToolbarGroup, null, /*#__PURE__*/React.createElement(ToolBtn, null, "\u2261"), /*#__PURE__*/React.createElement(ToolBtn, null, "\u2AF6"), /*#__PURE__*/React.createElement(ToolBtn, null, "\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "soft",
    leftIcon: /*#__PURE__*/React.createElement(I.plus, null)
  }, "Merge variable")), /*#__PURE__*/React.createElement(Textarea, {
    value: body,
    onChange: e => setBody(e.target.value),
    rows: 10,
    style: {
      border: 'none',
      borderRadius: 0,
      fontFamily: 'inherit',
      resize: 'none'
    }
  })))))), /*#__PURE__*/React.createElement(ListPanel, {
    items: items,
    filtered: filtered,
    counts: counts,
    filter: filter,
    setFilter: setFilter,
    q: q,
    setQ: setQ,
    onToggle: id => setItems(s => s.map(i => i.id === id ? {
      ...i,
      active: !i.active
    } : i))
  })));
}
function ToolbarGroup({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 6,
      background: C.surface,
      border: `1px solid ${C.border}`
    }
  }, children);
}
function ToolBtn({
  children
}) {
  return /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '4px 9px',
      fontSize: 13,
      color: C.text,
      fontFamily: 'inherit'
    }
  }, children);
}
function ListPanel({
  items,
  filtered,
  counts,
  filter,
  setFilter,
  q,
  setQ,
  onToggle,
  currentId = 'e5'
}) {
  const [sel, setSel] = React.useState(new Set());
  const toggleSel = id => setSel(s => {
    const n = new Set(s);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  });
  const bulkAct = () => {
    if (sel.size === 0) return;
    sel.forEach(id => onToggle(id));
    setSel(new Set());
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: `1px solid ${C.border}`,
      display: 'flex',
      flexDirection: 'column',
      background: C.surface
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      borderBottom: `1px solid ${C.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search templates\u2026",
    prefix: /*#__PURE__*/React.createElement(I.search, {
      size: 14
    }),
    style: {
      flex: 1,
      height: 30
    }
  }), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "primary",
    leftIcon: /*#__PURE__*/React.createElement(I.plus, null)
  }, "New")), /*#__PURE__*/React.createElement(Segmented, {
    size: "sm",
    value: filter,
    onChange: setFilter,
    options: [{
      value: 'all',
      label: `All ${counts.all}`
    }, {
      value: 'active',
      label: `Active ${counts.active}`
    }, {
      value: 'inactive',
      label: `Inactive ${counts.inactive}`
    }]
  })), sel.size > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 14px',
      background: C.brandSoft,
      borderBottom: `1px solid ${C.brandBorder}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: C.brand,
      fontWeight: 500
    }
  }, sel.size, " selected"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "soft",
    onClick: bulkAct
  }, "Toggle status"), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "ghost",
    onClick: () => setSel(new Set())
  }, "Clear")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, filtered.map((it, idx) => {
    const isSel = it.id === currentId;
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '9px 14px',
        borderBottom: idx < filtered.length - 1 ? `1px solid ${C.border}` : 'none',
        background: isSel ? C.brandSoft : sel.has(it.id) ? '#FFF8F2' : C.surface,
        borderLeft: isSel ? `2px solid ${C.brand}` : '2px solid transparent',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: sel.has(it.id),
      onChange: () => toggleSel(it.id),
      style: {
        accentColor: C.brand
      },
      onClick: e => e.stopPropagation()
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: it.active ? C.ink : C.muted,
        fontWeight: isSel ? 600 : 500,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, it.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: C.subtle,
        marginTop: 1
      }
    }, it.usage, " uses", it.system ? ' · system' : '')), /*#__PURE__*/React.createElement(Pill, {
      tone: it.active ? 'active' : 'inactive',
      style: {
        fontSize: 10,
        padding: '1px 7px'
      },
      onClick: () => onToggle(it.id)
    }, it.active ? 'On' : 'Off'));
  })));
}

// ─── Primary/Secondary form: Service Problem Code ──────────────────────
// Hierarchy: each Primary form is a parent; Secondary forms are children of a Primary.
const SERVICE_TREE = [{
  id: 'sf1',
  name: 'Installation',
  usage: 312,
  active: true,
  expanded: true,
  children: [{
    id: 'sf1a',
    name: 'Installation Corrections',
    usage: 28,
    active: true
  }, {
    id: 'sf1b',
    name: 'Battery Add-on',
    usage: 18,
    active: true
  }, {
    id: 'sf1c',
    name: 'Re-roof Coordination',
    usage: 7,
    active: false
  }]
}, {
  id: 'sf2',
  name: 'Inspection',
  usage: 67,
  active: true,
  expanded: true,
  children: [{
    id: 'sf2a',
    name: 'Quality Audit',
    usage: 41,
    active: true
  }, {
    id: 'sf2b',
    name: 'Final Inspection',
    usage: 234,
    active: true
  }]
}, {
  id: 'sf3',
  name: 'Service',
  usage: 95,
  active: true,
  expanded: false,
  children: [{
    id: 'sf3a',
    name: 'Site Survey',
    usage: 234,
    active: true
  }, {
    id: 'sf3b',
    name: 'Structural Reinforcement',
    usage: 8,
    active: true
  }]
}, {
  id: 'sf4',
  name: 'Home Efficiency',
  usage: 145,
  active: true,
  expanded: false,
  children: [{
    id: 'sf4a',
    name: 'EWOS',
    usage: 89,
    active: true
  }, {
    id: 'sf4b',
    name: 'MPU',
    usage: 12,
    active: true
  }]
}, {
  id: 'sf5',
  name: 'Sales Appointment',
  usage: 178,
  active: true,
  expanded: false,
  children: []
}, {
  id: 'sf6',
  name: 'HVAC',
  usage: 2,
  active: false,
  expanded: false,
  children: [{
    id: 'sf6a',
    name: 'Mini-Split Install',
    usage: 2,
    active: false
  }]
}];
function PrimarySecondaryFormPrototype() {
  const [tree, setTree] = React.useState(SERVICE_TREE);
  const [q, setQ] = React.useState('');
  const TreeRow = window.TreeRow;
  const toggleExpanded = id => setTree(t => t.map(p => p.id === id ? {
    ...p,
    expanded: !p.expanded
  } : p));
  const toggleActive = (parentId, childId) => setTree(t => t.map(p => {
    if (childId == null && p.id === parentId) return {
      ...p,
      active: !p.active
    };
    if (p.id === parentId) return {
      ...p,
      children: p.children.map(c => c.id === childId ? {
        ...c,
        active: !c.active
      } : c)
    };
    return p;
  }));
  const promote = (parentId, childId) => setTree(t => {
    const parent = t.find(p => p.id === parentId);
    const child = parent?.children.find(c => c.id === childId);
    if (!child) return t;
    const newParent = {
      ...child,
      expanded: true,
      children: []
    };
    return t.map(p => p.id === parentId ? {
      ...p,
      children: p.children.filter(c => c.id !== childId)
    } : p).concat(newParent);
  });
  const visible = tree.filter(p => !q || p.name.toLowerCase().includes(q.toLowerCase()) || p.children.some(c => c.name.toLowerCase().includes(q.toLowerCase())));
  const totals = {
    primary: tree.length,
    secondary: tree.reduce((n, p) => n + p.children.length, 0)
  };
  return /*#__PURE__*/React.createElement(FormCard, {
    title: "Service Problem Codes",
    subtitle: "Catalog \xB7 Primary forms own Secondary forms (hierarchical)",
    width: 1680,
    height: 920,
    headerExtras: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Btn, {
      size: "sm",
      kind: "ghost",
      leftIcon: /*#__PURE__*/React.createElement(I.download, null)
    }, "Template"), /*#__PURE__*/React.createElement(Btn, {
      size: "sm",
      kind: "ghost",
      leftIcon: /*#__PURE__*/React.createElement(I.upload, null)
    }, "Import"), /*#__PURE__*/React.createElement(Btn, {
      size: "sm",
      kind: "ghost",
      leftIcon: /*#__PURE__*/React.createElement(I.download, null)
    }, "Export"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        height: 18,
        background: C.border,
        margin: '0 4px'
      }
    }), /*#__PURE__*/React.createElement(Btn, {
      size: "sm",
      kind: "ghost",
      leftIcon: /*#__PURE__*/React.createElement(I.history, null)
    }, "Change log")),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Btn, {
      size: "md",
      kind: "ghost",
      leftIcon: /*#__PURE__*/React.createElement(I.cog, null)
    }, "Service Ticket Status"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Btn, {
      size: "md",
      kind: "secondary"
    }, "Cancel"), /*#__PURE__*/React.createElement(Btn, {
      size: "md",
      kind: "primary",
      leftIcon: /*#__PURE__*/React.createElement(I.save, null)
    }, "Save"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 500px',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      background: C.bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 22px',
      borderBottom: `1px solid ${C.border}`,
      background: C.surface,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: C.subtle,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      marginBottom: 4
    }
  }, "Editing"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      color: C.ink,
      letterSpacing: '-0.01em'
    }
  }, "Panel Replacement \u2014 Tier 2")), /*#__PURE__*/React.createElement(Pill, {
    tone: "primary"
  }, "Primary form"), /*#__PURE__*/React.createElement(Pill, {
    tone: "active"
  }, "\u25CF Active"), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "ghost",
    leftIcon: /*#__PURE__*/React.createElement(I.copy, null)
  }, "Duplicate")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Section, {
    title: "Code & description",
    icon: /*#__PURE__*/React.createElement(I.file, {
      size: 13
    }),
    accent: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 200px',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Code",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: "PANEL-T2",
    onChange: () => {}
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Display name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: "Panel Replacement \u2014 Tier 2",
    onChange: () => {}
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Hierarchy level"
  }, /*#__PURE__*/React.createElement(Select, {
    value: "Primary",
    onChange: () => {},
    options: ['Primary', 'Secondary (under…)']
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Description",
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 3,
    value: "Tier-2 module replacement \u2014 requires roof access, two installers, and panel-by-panel inspection.",
    onChange: () => {}
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "Scheduling",
    subtitle: "Duration & buffer time",
    icon: /*#__PURE__*/React.createElement(I.history, {
      size: 13
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Minutes before"
  }, /*#__PURE__*/React.createElement(Input, {
    value: "15"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Duration (hrs)",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: "2.5"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Minutes after"
  }, /*#__PURE__*/React.createElement(Input, {
    value: "30"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Service ticket type",
    required: true
  }, /*#__PURE__*/React.createElement(Select, {
    value: "On-site",
    onChange: () => {},
    options: ['On-site', 'Remote', 'Phone']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Bind to"
  }, /*#__PURE__*/React.createElement(Select, {
    value: "Project",
    onChange: () => {},
    options: ['Project', 'Customer']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Combo"
  }, /*#__PURE__*/React.createElement(Select, {
    value: "",
    onChange: () => {},
    options: ['Standalone', 'Combo A', 'Combo B'],
    placeholder: "Select"
  })))), /*#__PURE__*/React.createElement(Section, {
    title: "Phase completion",
    icon: /*#__PURE__*/React.createElement(I.link, {
      size: 13
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Complete phase (on ticket creation)"
  }, /*#__PURE__*/React.createElement(Select, {
    value: "",
    onChange: () => {},
    options: ['None', 'Installation', 'Service'],
    placeholder: "None"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Complete phase (on ticket completion)"
  }, /*#__PURE__*/React.createElement(Select, {
    value: "Installation",
    onChange: () => {},
    options: ['None', 'Installation', 'Service']
  })))), /*#__PURE__*/React.createElement(Section, {
    title: "Reminders",
    subtitle: "Notifications to customer, assigned user, and roles",
    icon: /*#__PURE__*/React.createElement(I.info, {
      size: 13
    }),
    defaultOpen: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontSize: 12.5,
      color: C.muted
    }
  }, /*#__PURE__*/React.createElement(Check, {
    checked: true,
    onChange: () => {},
    label: "Customer reminders"
  }), /*#__PURE__*/React.createElement(Check, {
    checked: true,
    onChange: () => {},
    label: "Assigned user reminders"
  }), /*#__PURE__*/React.createElement(Check, {
    checked: false,
    onChange: () => {},
    label: "Role reminders"
  }), /*#__PURE__*/React.createElement(Check, {
    checked: true,
    onChange: () => {},
    label: "Verification reminder"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: `1px solid ${C.border}`,
      display: 'flex',
      flexDirection: 'column',
      background: C.surface
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px',
      borderBottom: `1px solid ${C.border}`,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: C.ink
    }
  }, "Form hierarchy"), /*#__PURE__*/React.createElement(Pill, {
    tone: "primary",
    style: {
      fontSize: 10
    }
  }, totals.primary, " primary"), /*#__PURE__*/React.createElement(Pill, {
    tone: "secondary",
    style: {
      fontSize: 10
    }
  }, totals.secondary, " secondary")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: C.muted,
      lineHeight: 1.5
    }
  }, "Primary forms own Secondary children. Drag a row to re-parent. Toggle activates either level."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search forms\u2026",
    prefix: /*#__PURE__*/React.createElement(I.search, {
      size: 14
    }),
    style: {
      flex: 1,
      height: 30
    }
  }), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(I.plus, null)
  }, "Primary"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, visible.map((parent, pi) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: parent.id
  }, /*#__PURE__*/React.createElement(TreeRow, {
    level: 0,
    expanded: parent.expanded,
    hasChildren: parent.children.length > 0,
    onExpand: () => toggleExpanded(parent.id),
    name: parent.name,
    meta: `${parent.children.length} sub-items · ${parent.usage} uses`,
    active: parent.active,
    onToggle: () => toggleActive(parent.id),
    kind: "primary"
  }), parent.expanded && parent.children.map(child => /*#__PURE__*/React.createElement(TreeRow, {
    key: child.id,
    level: 1,
    name: child.name,
    meta: `${child.usage} uses`,
    active: child.active,
    onToggle: () => toggleActive(parent.id, child.id),
    onPromote: () => promote(parent.id, child.id),
    kind: "secondary"
  })), parent.expanded && /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 14px 6px 56px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: 11.5,
      color: C.subtle,
      width: '100%',
      textAlign: 'left',
      borderBottom: `1px solid ${C.border}`
    }
  }, /*#__PURE__*/React.createElement(I.plus, {
    size: 12
  }), " Add Secondary form to ", parent.name)))))));
}
window.ComplexFormPrototype = ComplexFormPrototype;
window.PrimarySecondaryFormPrototype = PrimarySecondaryFormPrototype;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-settings/complexForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-settings/design-canvas.jsx
try { (() => {
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Artboards are reorderable (grip-drag), deletable, labels/titles are
// inline-editable, and any artboard can be opened in a fullscreen focus
// overlay (←/→/Esc). State persists to a .design-canvas.state.json sidecar
// via the host bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}',
  // isolation:isolate contains artboard content's z-indexes so a
  // z-indexed child (sticky navbar etc.) can't paint over .dc-header or
  // the .dc-menu popover that drops into the top of the card.
  '.dc-card{isolation:isolate;transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}',
  // Per-artboard header: grip + label on the left, delete/expand on the
  // right. Single flex row; when the artboard's on-screen width is too
  // narrow for both the label yields (ellipsis, then hidden entirely below
  // ~4ch via the container query) and the buttons stay on the row.
  '.dc-header{position:absolute;bottom:100%;left:-4px;margin-bottom:calc(4px * var(--dc-inv-zoom,1));z-index:2;', '  display:flex;align-items:center;container-type:inline-size}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px;flex:1 1 auto;min-width:0}', '.dc-grip{flex:0 0 auto;cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s,opacity .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{flex:1 1 auto;min-width:0;cursor:pointer;border-radius:4px;padding:3px 6px;', '  display:flex;align-items:center;transition:background .12s;overflow:hidden}',
  // Below ~4ch of label room: hide the label entirely, and drop the grip to
  // hover-only (same reveal rule as .dc-btns) so a narrow header is clean
  // until the card is moused.
  '@container (max-width: 110px){', '  .dc-labeltext{display:none}', '  .dc-grip{opacity:0}', '  [data-dc-slot]:hover .dc-grip{opacity:1}', '}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-labeltext .dc-editable{overflow:hidden;text-overflow:ellipsis;max-width:100%}', '.dc-labeltext .dc-editable:focus{overflow:visible;text-overflow:clip}', '.dc-btns{flex:0 0 auto;margin-left:auto;display:flex;gap:2px;opacity:0;transition:opacity .12s}', '[data-dc-slot]:hover .dc-btns,.dc-btns:has(.dc-menu){opacity:1}', '.dc-expand,.dc-kebab{width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center;', '  font:inherit;transition:background .12s,color .12s}', '.dc-expand:hover,.dc-kebab:hover{background:rgba(0,0,0,.06);color:#2a251f}',
  // Slot hosting an open menu floats above later siblings (which otherwise
  // paint on top — same z-index:auto, later DOM order) so the popup isn't
  // clipped by the next card.
  '[data-dc-slot]:has(.dc-menu){z-index:10}', '.dc-menu{position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border-radius:8px;', '  box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.05);padding:4px;min-width:160px;z-index:10}', '.dc-menu button{display:block;width:100%;padding:7px 10px;border:0;background:transparent;', '  border-radius:5px;font-family:inherit;font-size:13px;font-weight:500;line-height:1.2;', '  color:#29261b;cursor:pointer;text-align:left;transition:background .12s;white-space:nowrap}', '.dc-menu button:hover{background:rgba(0,0,0,.05)}', '.dc-menu hr{border:0;border-top:1px solid rgba(0,0,0,.08);margin:4px 2px}', '.dc-menu .dc-danger{color:#c96442}', '.dc-menu .dc-danger:hover{background:rgba(201,100,66,.1)}',
  // Chrome (titles / labels / buttons) counter-scales against the viewport
  // zoom so it stays a constant on-screen size. --dc-inv-zoom is set by
  // DCViewport on every transform update and inherits to all descendants —
  // any overlay inside the world (e.g. a TweaksPanel on an artboard) can use
  // it the same way.
  //
  // The header uses transform:scale (out-of-flow, so layout impact doesn't
  // matter) with its world-space width set to card-width / inv-zoom so that
  // after counter-scaling its on-screen width exactly matches the card's —
  // that's what lets the container query + text-overflow behave against the
  // card's visible edge at every zoom level.
  //
  // The section head uses CSS zoom instead of transform so its layout box
  // grows with the counter-scale, pushing the card row down — otherwise the
  // constant-screen-size title would overflow into the (shrinking) world-
  // space gap and overlap the artboard headers at low zoom.
  '.dc-header{width:calc((100% + 4px) / var(--dc-inv-zoom,1));', '  transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left}', '.dc-sectionhead{zoom:var(--dc-inv-zoom,1)}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// Recursively unwrap React.Fragment so <>…</> grouping doesn't hide
// DCSection/DCArtboard children from the type-based walks below.
function dcFlatten(children) {
  const out = [];
  React.Children.forEach(children, c => {
    if (c && c.type === React.Fragment) out.push(...dcFlatten(c.props.children));else out.push(c);
  });
  return out;
}

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, hidden
// artboards, focused artboard). Order/titles/labels/hidden persist to a
// .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Fragments are flattened; wrapping in other
  // elements still opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  dcFlatten(children).forEach(sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const abs = [];
    dcFlatten(sec.props.children).forEach(ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (aid) abs.push([aid, ab]);
    });
    // hidden is scoped to one source revision — when the agent regenerates
    // (artboard-ID set changes), prior deletes don't apply to new content.
    const srcKey = abs.map(([k]) => k).join('\x1f');
    const hidden = persisted.srcKey === srcKey ? persisted.hidden || [] : [];
    const srcIds = [];
    abs.forEach(([aid, ab]) => {
      if (hidden.includes(aid)) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  // Persist viewport across reloads so the user lands back where they were
  // after an agent edit or browser refresh. The sandbox origin is already
  // per-project; pathname keeps multiple canvas files in one project apart.
  const tfKey = 'dc-viewport:' + location.pathname;
  const saveT = React.useRef(0);
  const lastPostedScale = React.useRef();
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    // Exposed for zoom-invariant chrome (labels, buttons, TweaksPanel).
    el.style.setProperty('--dc-inv-zoom', String(1 / scale));
    // Keep the host toolbar's % readout in sync with the canvas scale. Pan
    // ticks leave scale unchanged — skip the cross-frame post for those.
    if (lastPostedScale.current !== scale) {
      lastPostedScale.current = scale;
      window.parent.postMessage({
        type: '__dc_zoom',
        scale
      }, '*');
    }
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => {
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    }, 200);
  }, [tfKey]);
  React.useLayoutEffect(() => {
    const flush = () => {
      clearTimeout(saveT.current);
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    };
    try {
      const s = JSON.parse(localStorage.getItem(tfKey) || 'null');
      if (s && Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.scale)) {
        tf.current = {
          x: s.x,
          y: s.y,
          scale: Math.min(maxScale, Math.max(minScale, s.scale))
        };
        apply();
      }
    } catch {}
    // Flush on pagehide and unmount so a reload within the 200ms debounce
    // window doesn't drop the last pan/zoom.
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // --dc-inv-zoom consumers (.dc-sectionhead's CSS zoom, each section's
      // marginBottom) reflow on every scale change, vertically shifting the
      // world layout — so a world point mathematically pinned under the cursor
      // drifts as you zoom (content creeps up on zoom-in, down on zoom-out).
      // Anchor the DOM element under the cursor instead: record its screen Y,
      // apply the transform + --dc-inv-zoom, then cancel whatever vertical
      // drift the reflow introduced so it stays put on screen.
      let marker = null,
        markerY0 = 0;
      if (k !== 1) {
        const hit = document.elementFromPoint(cx, cy);
        marker = hit && hit.closest ? hit.closest('[data-dc-slot],[data-dc-section]') : null;
        if (marker) markerY0 = marker.getBoundingClientRect().top;
      }
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
      if (marker) {
        // A pure zoom around (cx, cy) maps screen Y → cy + (Y - cy) * k. Any
        // departure after the --dc-inv-zoom reflow is the layout drift.
        const drift = marker.getBoundingClientRect().top - (cy + (markerY0 - cy) * k);
        if (Math.abs(drift) > 0.1) {
          t.y -= drift;
          apply();
        }
      }
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if ((e.ctrlKey || e.metaKey) && !isMouseWheel(e)) {
        // trackpad pinch, or ctrl/cmd + smooth-scroll mouse. Notched
        // wheels fall through to the fixed-step branch below.
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };

    // Host-driven zoom (toolbar % menu). Zooms around viewport centre so the
    // visible midpoint stays fixed — matching the host's iframe-zoom feel.
    const onHostMsg = e => {
      const d = e.data;
      if (d && d.type === '__dc_set_zoom' && typeof d.scale === 'number') {
        const r = vp.getBoundingClientRect();
        zoomAt(r.left + r.width / 2, r.top + r.height / 2, d.scale / tf.current.scale);
      } else if (d && d.type === '__dc_probe') {
        // Host's [readyGen] reset asks whether a canvas is present; it
        // fires on the iframe's native 'load', which for canvases with
        // images/fonts is after our mount-time announce, so re-announce.
        // Clear the pan-tick guard so apply() re-posts the current scale
        // even if it's unchanged — the host just reset dcScale to 1.
        window.parent.postMessage({
          type: '__dc_present'
        }, '*');
        lastPostedScale.current = undefined;
        apply();
      }
    };
    window.addEventListener('message', onHostMsg);
    // Announce canvas mode so the host toolbar proxies its % control here
    // instead of scaling the iframe element (which would just shrink the
    // viewport window of an infinite canvas). The apply() that follows emits
    // the initial __dc_zoom so the toolbar % is correct before first pinch.
    // lastPostedScale reset mirrors the __dc_probe handler: the layout
    // effect's restore-path apply() may already have posted the restored
    // scale (before __dc_present), so clear the guard to re-post it in order.
    window.parent.postMessage({
      type: '__dc_present'
    }, '*');
    lastPostedScale.current = undefined;
    apply();
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('message', onHostMsg);
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(dcFlatten(children));
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const sec = ctx && sid && ctx.section(sid) || {};
  // Must match DesignCanvas's srcKey computation exactly (it filters falsy
  // IDs), or onDelete persists a srcKey that DesignCanvas never recognizes.
  const allIds = artboards.map(a => a.props.id ?? a.props.label).filter(Boolean);
  const srcKey = allIds.join('\x1f');
  const hidden = sec.srcKey === srcKey ? sec.hidden || [] : [];
  const srcOrder = allIds.filter(k => !hidden.includes(k));
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));

  // marginBottom counter-scales so the on-screen gap between sections stays
  // constant — otherwise at low zoom the (world-space) gap collapses while
  // the screen-constant sectionhead below it doesn't, and the title reads as
  // belonging to the section above. paddingBottom below is just enough for
  // the 24px artboard-header (abs-positioned above each card) plus ~8px, so
  // the title sits tight against its own row at every zoom.
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 'calc(80px * var(--dc-inv-zoom, 1))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-sectionhead",
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onDelete: () => ctx && ctx.patchSection(sid, x => ({
      hidden: [...(x.srcKey === srcKey ? x.hidden || [] : []), k],
      srcKey
    })),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}

// Per-artboard export (kind: 'png' | 'html'). Both paths share the same
// self-contained clone: computed styles baked in, @font-face / <img> /
// inline-style background-image urls inlined as data URIs. PNG wraps the
// clone in foreignObject→canvas at 3× the artboard's natural width×height
// (same pipeline the host uses for page captures); HTML wraps it in a
// minimal standalone document. Both are independent of viewport zoom.
async function dcExport(node, w, h, name, kind) {
  try {
    await document.fonts.ready;
  } catch {}
  const toDataURL = url => fetch(url).then(r => r.blob()).then(b => new Promise(res => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = () => res(url);
    fr.readAsDataURL(b);
  })).catch(() => url);

  // Collect @font-face rules. ss.cssRules throws SecurityError on
  // cross-origin sheets (e.g. fonts.googleapis.com) — in that case fetch
  // the CSS text directly (those endpoints send ACAO:*) and regex-extract
  // the blocks. @import and @media/@supports are walked so nested
  // @font-face rules aren't missed.
  const fontRules = [],
    pending = [],
    seen = new Set();
  const scrapeCss = href => {
    if (seen.has(href)) return;
    seen.add(href);
    pending.push(fetch(href).then(r => r.text()).then(css => {
      for (const m of css.match(/@font-face\s*{[^}]*}/g) || []) fontRules.push({
        css: m,
        base: href
      });
      for (const m of css.matchAll(/@import\s+(?:url\()?['"]?([^'")\s;]+)/g)) scrapeCss(new URL(m[1], href).href);
    }).catch(() => {}));
  };
  const walk = (rules, base) => {
    for (const r of rules) {
      if (r.type === CSSRule.FONT_FACE_RULE) fontRules.push({
        css: r.cssText,
        base
      });else if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) {
        const ibase = r.styleSheet.href || base;
        try {
          walk(r.styleSheet.cssRules, ibase);
        } catch {
          scrapeCss(ibase);
        }
      } else if (r.cssRules) walk(r.cssRules, base);
    }
  };
  for (const ss of document.styleSheets) {
    const base = ss.href || location.href;
    try {
      walk(ss.cssRules, base);
    } catch {
      if (ss.href) scrapeCss(ss.href);
    }
  }
  while (pending.length) await pending.shift();
  const fontCss = (await Promise.all(fontRules.map(async rule => {
    let out = rule.css,
      m;
    const re = /url\((['"]?)([^'")]+)\1\)/g;
    while (m = re.exec(rule.css)) {
      if (m[2].indexOf('data:') === 0) continue;
      let abs;
      try {
        abs = new URL(m[2], rule.base).href;
      } catch {
        continue;
      }
      out = out.split(m[0]).join('url("' + (await toDataURL(abs)) + '")');
    }
    return out;
  }))).join('\n');
  const cloneStyled = src => {
    if (src.nodeType === 8 || src.nodeType === 1 && src.tagName === 'SCRIPT') return document.createTextNode('');
    const dst = src.cloneNode(false);
    if (src.nodeType === 1) {
      const cs = getComputedStyle(src);
      let txt = '';
      for (let i = 0; i < cs.length; i++) txt += cs[i] + ':' + cs.getPropertyValue(cs[i]) + ';';
      dst.setAttribute('style', txt + 'animation:none;transition:none;');
      if (src.tagName === 'CANVAS') try {
        const im = document.createElement('img');
        im.src = src.toDataURL();
        im.setAttribute('style', txt);
        return im;
      } catch {}
    }
    for (let c = src.firstChild; c; c = c.nextSibling) dst.appendChild(cloneStyled(c));
    return dst;
  };
  const clone = cloneStyled(node);
  clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  // Drop the card's own shadow/radius so the export is a flush w×h rect;
  // the artboard's own background (if any) is already in the computed style.
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';
  const jobs = [];
  clone.querySelectorAll('img').forEach(el => {
    const s = el.getAttribute('src');
    if (s && s.indexOf('data:') !== 0) jobs.push(toDataURL(el.src).then(d => el.setAttribute('src', d)));
  });
  [clone, ...clone.querySelectorAll('*')].forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg) return;
    let m;
    const re = /url\(["']?([^"')]+)["']?\)/g;
    while (m = re.exec(bg)) {
      const tok = m[0],
        url = m[1];
      if (url.indexOf('data:') === 0) continue;
      jobs.push(toDataURL(url).then(d => {
        el.style.backgroundImage = el.style.backgroundImage.split(tok).join('url("' + d + '")');
      }));
    }
  });
  await Promise.all(jobs);
  const xml = new XMLSerializer().serializeToString(clone);
  const save = (blob, ext) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name + '.' + ext;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  if (kind === 'html') {
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>' + name + '</title>' + (fontCss ? '<style>' + fontCss + '</style>' : '') + '</head><body style="margin:0">' + xml + '</body></html>';
    return save(new Blob([html], {
      type: 'text/html'
    }), 'html');
  }

  // PNG: the SVG's own width/height must be the output resolution — an
  // <img>-loaded SVG rasterizes at its intrinsic size, so sizing it at 1×
  // and ctx.scale()-ing up would just upscale a 1× bitmap. viewBox maps the
  // w×h foreignObject onto the px·w × px·h SVG canvas so the browser renders
  // the HTML at full resolution.
  const px = 3;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w * px + '" height="' + h * px + '" viewBox="0 0 ' + w + ' ' + h + '"><foreignObject width="' + w + '" height="' + h + '">' + (fontCss ? '<style><![CDATA[' + fontCss + ']]></style>' : '') + xml + '</foreignObject></svg>';
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = () => rej(new Error('svg load failed'));
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
  const cv = document.createElement('canvas');
  cv.width = w * px;
  cv.height = h * px;
  cv.getContext('2d').drawImage(img, 0, 0);
  cv.toBlob(blob => save(blob, 'png'), 'image/png');
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus,
  onDelete
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);

  // ⋯ menu: close on any outside pointerdown. Two-click delete lives inside
  // the menu — first click arms the row, second commits; closing disarms.
  React.useEffect(() => {
    if (!menuOpen) {
      setConfirming(false);
      return;
    }
    const off = e => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [menuOpen]);
  const doExport = kind => {
    setMenuOpen(false);
    if (!cardRef.current) return;
    const name = String(label || id || 'artboard').replace(/[^\w\s.-]+/g, '_');
    dcExport(cardRef.current, width, height, name, kind).catch(e => console.error('[design-canvas] export failed:', e));
  };

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-header",
    style: {
      color: DC.label
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-btns"
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dc-kebab",
    title: "More",
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2.5",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "6",
    r: "1.1"
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "dc-menu",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('png')
  }, "Download PNG"), /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('html')
  }, "Download HTML"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "dc-danger",
    onClick: () => {
      if (confirming) {
        setMenuOpen(false);
        onDelete();
      } else setConfirming(true);
    }
  }, confirming ? 'Click again to delete' : 'Delete'))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    // Sections whose artboards are all deleted have slotIds:[] — step past
    // them to the next non-empty section so ↑/↓ doesn't dead-end.
    const n = sectionOrder.length;
    for (let i = 1; i < n; i++) {
      const ns = sectionOrder[((secIdx + d * i) % n + n) % n];
      const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
      if (first) {
        ctx.setFocus(`${ns}/${first}`);
        return;
      }
    }
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.filter(sid => sectionMeta[sid].slotIds.length).map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-settings/design-canvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-settings/importFlow.jsx
try { (() => {
// Import flow — 4-step wizard. Shown as a sequence of states.

function Stepper({
  steps,
  current
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      padding: '14px 18px',
      borderBottom: `1px solid ${C.border}`,
      background: C.bg
    }
  }, steps.map((s, i) => {
    const done = i < current;
    const active = i === current;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 22,
        height: 22,
        borderRadius: '50%',
        background: done ? C.green : active ? C.brand : C.panel,
        color: done || active ? '#fff' : C.muted,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 11.5,
        fontWeight: 600,
        border: !done && !active ? `1px solid ${C.border}` : 'none'
      }
    }, done ? /*#__PURE__*/React.createElement(I.check, {
      size: 12,
      stroke: 2.5
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: active ? 600 : 500,
        color: active ? C.ink : done ? C.text : C.subtle
      }
    }, s)), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: done ? C.greenBorder : C.border,
        margin: '0 12px'
      }
    }));
  }));
}

// ─── Step 1: Source ────────────────────────────────────────────────────
function StepSource() {
  return /*#__PURE__*/React.createElement(FormCard, {
    title: "Import templates",
    width: 780,
    height: 620,
    subtitle: "Bulk-add or update Email & SMS templates from a spreadsheet"
  }, /*#__PURE__*/React.createElement(Stepper, {
    steps: ['Source', 'Map columns', 'Validate', 'Confirm'],
    current: 0
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: C.text,
      lineHeight: 1.55
    }
  }, "Start from a fresh template or upload an existing spreadsheet. Required columns vary by Catalog \u2014 the template you download will match this form exactly."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      border: `1px solid ${C.border}`,
      borderRadius: 10,
      background: C.bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: C.brandSoft,
      color: C.brand,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(I.download, {
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: C.ink,
      marginBottom: 4
    }
  }, "Download blank template"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: C.muted,
      lineHeight: 1.5,
      marginBottom: 12
    }
  }, "Pre-filled headers, sample row, and dropdown lists for enum fields."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "secondary"
  }, "CSV"), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "secondary"
  }, "XLSX"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      border: `1px solid ${C.border}`,
      borderRadius: 10,
      background: C.bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: C.greenSoft,
      color: C.green,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(I.copy, {
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: C.ink,
      marginBottom: 4
    }
  }, "Export current 142 items"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: C.muted,
      lineHeight: 1.5,
      marginBottom: 12
    }
  }, "Round-trip: edit existing rows in Excel and re-upload to update."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "secondary"
  }, "CSV"), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "secondary"
  }, "XLSX")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center',
      margin: '4px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: 0,
      right: 0,
      height: 1,
      background: C.border
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      background: C.surface,
      padding: '0 12px',
      fontSize: 11,
      color: C.subtle,
      letterSpacing: '0.05em',
      textTransform: 'uppercase'
    }
  }, "Then upload your file")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: `2px dashed ${C.brandBorder}`,
      borderRadius: 10,
      padding: 28,
      background: '#FFFBF7',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: C.brandSoft,
      color: C.brand,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(I.upload, {
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: C.ink
    }
  }, "Drop CSV or XLSX here"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: C.muted
    }
  }, "or ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.brand,
      fontWeight: 500,
      cursor: 'pointer'
    }
  }, "browse files"), " \xB7 max 10 MB"))), /*#__PURE__*/React.createElement(ImportFooter, {
    step: 0
  }));
}

// ─── Step 2: Map columns ───────────────────────────────────────────────
function StepMap() {
  const mappings = [{
    col: 'Template Name',
    sample: 'Activation: Completed Enphase',
    field: 'name',
    required: true,
    match: 'exact'
  }, {
    col: 'language',
    sample: 'English',
    field: 'language',
    required: false,
    match: 'fuzzy'
  }, {
    col: 'For Roles',
    sample: 'Sales, Install',
    field: 'roles',
    required: false,
    match: 'exact'
  }, {
    col: 'Body',
    sample: 'Hi {{name}}, your system…',
    field: 'email_body',
    required: true,
    match: 'fuzzy'
  }, {
    col: 'Subject Line',
    sample: 'Your system is live',
    field: 'email_subject',
    required: true,
    match: 'fuzzy'
  }, {
    col: 'Active?',
    sample: 'TRUE',
    field: 'active',
    required: false,
    match: 'fuzzy'
  }, {
    col: 'Notes',
    sample: 'Internal only',
    field: '',
    required: false,
    match: 'skip'
  }, {
    col: 'Old Reference',
    sample: 'TMPL-22a',
    field: '',
    required: false,
    match: 'skip'
  }];
  return /*#__PURE__*/React.createElement(FormCard, {
    title: "Import templates",
    width: 780,
    height: 620,
    subtitle: "templates-master-v3.xlsx \xB7 47 rows \xB7 8 columns detected"
  }, /*#__PURE__*/React.createElement(Stepper, {
    steps: ['Source', 'Map columns', 'Validate', 'Confirm'],
    current: 1
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px',
      borderBottom: `1px solid ${C.border}`,
      background: C.bg,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(I.info, {
    size: 14,
    style: {
      color: C.blue
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: C.text
    }
  }, "We auto-matched 5 of 8 columns. Review and adjust below \u2014 2 unmapped columns will be skipped."), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "ghost"
  }, "Reset")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 16px 1fr 80px',
      gap: 0,
      padding: '10px 18px',
      borderBottom: `1px solid ${C.border}`,
      fontSize: 11,
      fontWeight: 600,
      color: C.subtle,
      letterSpacing: '0.04em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("div", null, "Spreadsheet column"), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null, "Maps to field"), /*#__PURE__*/React.createElement("div", null)), mappings.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 16px 1fr 80px',
      gap: 0,
      padding: '10px 18px',
      alignItems: 'center',
      borderBottom: i < mappings.length - 1 ? `1px solid ${C.border}` : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: C.ink
    }
  }, m.col), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: C.subtle,
      marginTop: 1
    }
  }, "e.g. ", m.sample)), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.subtle,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(I.arrowRight, {
    size: 14
  })), /*#__PURE__*/React.createElement(Select, {
    value: m.field,
    onChange: () => {},
    options: [{
      value: '',
      label: '— Skip this column —'
    }, {
      value: 'name',
      label: 'Name'
    }, {
      value: 'language',
      label: 'Language'
    }, {
      value: 'category',
      label: 'Category'
    }, {
      value: 'roles',
      label: 'For roles'
    }, {
      value: 'email_subject',
      label: 'Email subject'
    }, {
      value: 'email_body',
      label: 'Email body'
    }, {
      value: 'active',
      label: 'Active'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, m.match === 'exact' && /*#__PURE__*/React.createElement(Pill, {
    tone: "active",
    style: {
      fontSize: 10
    }
  }, "\u25CF auto"), m.match === 'fuzzy' && /*#__PURE__*/React.createElement(Pill, {
    tone: "warning",
    style: {
      fontSize: 10
    }
  }, "\u2248 fuzzy"), m.match === 'skip' && /*#__PURE__*/React.createElement(Pill, {
    tone: "inactive",
    style: {
      fontSize: 10
    }
  }, "skip"))))), /*#__PURE__*/React.createElement(ImportFooter, {
    step: 1
  }));
}

// ─── Step 3: Validate (errors + preview) ───────────────────────────────
function StepValidate() {
  return /*#__PURE__*/React.createElement(FormCard, {
    title: "Import templates",
    width: 780,
    height: 620,
    subtitle: "Dry-run \xB7 no changes saved yet"
  }, /*#__PURE__*/React.createElement(Stepper, {
    steps: ['Source', 'Map columns', 'Validate', 'Confirm'],
    current: 2
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 0,
      padding: '14px 18px',
      borderBottom: `1px solid ${C.border}`,
      background: C.bg
    }
  }, [{
    label: 'New rows',
    value: 38,
    color: C.green
  }, {
    label: 'Updates',
    value: 6,
    color: C.blue
  }, {
    label: 'Skipped',
    value: 1,
    color: C.muted
  }, {
    label: 'Errors',
    value: 2,
    color: C.red
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      padding: '0 8px',
      borderLeft: i ? `1px solid ${C.border}` : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      color: C.subtle,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      color: s.color,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.01em'
    }
  }, s.value)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 18px',
      borderBottom: `1px solid ${C.border}`,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: C.redSoft,
      borderLeftWidth: 0,
      color: C.red
    }
  }, /*#__PURE__*/React.createElement(I.alert, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: C.red,
      fontWeight: 500
    }
  }, "2 errors must be fixed before import can run."), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "ghost",
    style: {
      color: C.red
    }
  }, "Download error report")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, [{
    row: 4,
    name: 'Activation: SolarEdge',
    status: 'error',
    msg: 'Duplicate name — already exists as Active',
    field: 'Name'
  }, {
    row: 7,
    name: 'Compliance: HOA',
    status: 'error',
    msg: 'Required field “Email subject” is empty',
    field: 'Email subject'
  }, {
    row: 11,
    name: 'AI Agent: Hail Alert',
    status: 'update',
    msg: 'Will replace existing draft (last edited Apr 2)',
    field: '—'
  }, {
    row: 13,
    name: 'Auto-Reply: New Lead',
    status: 'new',
    msg: 'Will be created · 3 merge vars detected',
    field: '—'
  }, {
    row: 14,
    name: 'CAD: Layout v2',
    status: 'new',
    msg: 'Will be created',
    field: '—'
  }, {
    row: 15,
    name: 'Sales: Follow-Up 3d',
    status: 'skip',
    msg: 'Identical to existing row, no change',
    field: '—'
  }].map((r, i, a) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '40px 1fr 90px',
      alignItems: 'center',
      gap: 10,
      padding: '10px 18px',
      borderBottom: i < a.length - 1 ? `1px solid ${C.border}` : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: C.subtle,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "row ", r.row), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: C.ink,
      fontWeight: 500
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: r.status === 'error' ? C.red : C.muted,
      marginTop: 1
    }
  }, r.status === 'error' && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.red,
      fontWeight: 500
    }
  }, r.field, ": "), r.msg)), r.status === 'error' && /*#__PURE__*/React.createElement(Pill, {
    tone: "danger",
    style: {
      fontSize: 10
    }
  }, "\u25CF error"), r.status === 'new' && /*#__PURE__*/React.createElement(Pill, {
    tone: "active",
    style: {
      fontSize: 10
    }
  }, "+ new"), r.status === 'update' && /*#__PURE__*/React.createElement(Pill, {
    tone: "secondary",
    style: {
      fontSize: 10
    }
  }, "\u21BB update"), r.status === 'skip' && /*#__PURE__*/React.createElement(Pill, {
    tone: "inactive",
    style: {
      fontSize: 10
    }
  }, "skip")))), /*#__PURE__*/React.createElement(ImportFooter, {
    step: 2
  }));
}

// ─── Step 4: Confirm ────────────────────────────────────────────────────
function StepConfirm() {
  return /*#__PURE__*/React.createElement(FormCard, {
    title: "Import templates",
    width: 780,
    height: 620,
    subtitle: "Ready to commit \xB7 this can be undone within 24h"
  }, /*#__PURE__*/React.createElement(Stepper, {
    steps: ['Source', 'Map columns', 'Validate', 'Confirm'],
    current: 3
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: 16,
      border: `1px solid ${C.greenBorder}`,
      background: C.greenSoft,
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: C.green,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(I.check, {
    size: 16,
    stroke: 2.5
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: C.green,
      marginBottom: 4
    }
  }, "2 errors resolved \xB7 ready to import"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: C.text,
      lineHeight: 1.5
    }
  }, "You're about to apply 44 changes to the ", /*#__PURE__*/React.createElement("strong", null, "Email & SMS Templates"), " catalog. Changes are reversible from the Change Log for 24 hours."))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: `1px solid ${C.border}`,
      borderRadius: 10,
      background: C.surface,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      background: C.bg,
      borderBottom: `1px solid ${C.border}`,
      fontSize: 12,
      fontWeight: 600,
      color: C.text
    }
  }, "Summary of changes"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Row, {
    label: "New templates created",
    value: "38",
    tone: "active"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Existing templates updated",
    value: "6",
    tone: "secondary"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Unchanged / skipped",
    value: "1",
    tone: "inactive"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Rows excluded due to errors",
    value: "0",
    tone: "inactive"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: C.border,
      margin: '4px 0'
    }
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Total to commit",
    value: "44",
    tone: "primary",
    bold: true
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Note (optional)",
    hint: "Saved to the Change Log so others know what this batch did"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "e.g. Q2 template refresh from marketing"
  })), /*#__PURE__*/React.createElement(Check, {
    checked: false,
    onChange: () => {},
    label: "Send me an email when import completes"
  })), /*#__PURE__*/React.createElement(ImportFooter, {
    step: 3
  }));
}
function Row({
  label,
  value,
  tone,
  bold
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: bold ? C.ink : C.text,
      fontWeight: bold ? 600 : 400,
      flex: 1
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: C.ink,
      fontVariantNumeric: 'tabular-nums'
    }
  }, value));
}
function ImportFooter({
  step
}) {
  const last = step === 3;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 18px',
      borderTop: `1px solid ${C.border}`,
      background: C.bg
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    size: "md",
    kind: "ghost",
    leftIcon: /*#__PURE__*/React.createElement(I.chevLeft, null),
    disabled: step === 0
  }, "Back"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Btn, {
    size: "md",
    kind: "secondary"
  }, "Cancel"), /*#__PURE__*/React.createElement(Btn, {
    size: "md",
    kind: "primary",
    leftIcon: last ? /*#__PURE__*/React.createElement(I.check, null) : null,
    rightIcon: !last ? /*#__PURE__*/React.createElement(I.chevRight, null) : null
  }, last ? 'Commit 44 changes' : 'Continue'));
}
window.StepSource = StepSource;
window.StepMap = StepMap;
window.StepValidate = StepValidate;
window.StepConfirm = StepConfirm;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-settings/importFlow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-settings/naming.jsx
try { (() => {
// Naming proposals — curated set with reasoning, presented designer-style

const NAME_PROPOSALS = [{
  name: 'Catalogs',
  kind: 'Concept',
  rec: true,
  sub: 'Curated collections of items used throughout the platform.',
  why: 'Short, friendly, and reads naturally in nav ("Settings › Catalogs › Project Phases"). Catalog-as-noun signals “authoritative list” without being technical.'
}, {
  name: 'Reference Data',
  kind: 'Domain',
  sub: 'Industry-standard term for shared lookup values.',
  why: 'Familiar to admins coming from ERP / Salesforce / NetSuite. Slightly heavier but precise.'
}, {
  name: 'Lookups',
  kind: 'Technical',
  sub: 'The classic name for picklist-style values.',
  why: 'Short, technical, slightly dev-flavored. Good for power users; weaker for first-time admins.'
}, {
  name: 'Configuration Lists',
  kind: 'Functional',
  sub: 'Says exactly what they are.',
  why: 'Zero ambiguity. Longer in nav and a touch utilitarian.'
}, {
  name: 'Master Lists',
  kind: 'Functional',
  sub: 'Standard enterprise term for canonical lists.',
  why: '“Master data” lineage. Works if naming should match accounting / ERP norms.'
}, {
  name: 'Picklists',
  kind: 'Technical',
  sub: 'Salesforce-native term, widely understood.',
  why: 'Recognizable to anyone from Salesforce. Less accurate for forms that aren\'t feeding a picklist field.'
}];
const KIND_TONE = {
  Concept: C.brandSoft,
  Domain: C.blueSoft,
  Technical: C.greenSoft,
  Functional: '#F1EEE7'
};
const KIND_TEXT = {
  Concept: C.brand,
  Domain: C.blue,
  Technical: C.green,
  Functional: C.muted
};
function NamingBoard() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1180,
      padding: 32,
      background: C.surface,
      borderRadius: 12,
      border: `1px solid ${C.border}`,
      boxShadow: C.shadow,
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 24,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.12em',
      color: C.brand,
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "01 \xB7 Naming"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Instrument Serif", serif',
      fontSize: 44,
      lineHeight: 1.05,
      color: C.ink,
      letterSpacing: '-0.015em'
    }
  }, "What do we call these ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, "Settings Forms?")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: C.muted,
      marginTop: 10,
      maxWidth: 640,
      lineHeight: 1.55
    }
  }, "\u201CSettings Form Template\u201D is functional but loaded \u2014 \u201Csettings\u201D already names the area they live in, and \u201Cform template\u201D suggests a forms-builder. Six options, hierarchy intentional.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 4,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.subtle
    }
  }, "Recommendation"), /*#__PURE__*/React.createElement(Pill, {
    tone: "primary"
  }, "Catalogs"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, NAME_PROPOSALS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      position: 'relative',
      background: p.rec ? '#FFFCF8' : C.bg,
      border: p.rec ? `1.5px solid ${C.brand}` : `1px solid ${C.border}`,
      borderRadius: 10,
      padding: 18,
      minHeight: 168
    }
  }, p.rec && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -10,
      right: 14,
      background: C.brand,
      color: '#fff',
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '0.05em',
      padding: '3px 8px',
      borderRadius: 999,
      textTransform: 'uppercase'
    }
  }, "Recommended"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '-0.015em',
      color: C.ink
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      background: KIND_TONE[p.kind],
      color: KIND_TEXT[p.kind],
      fontSize: 10.5,
      fontWeight: 500,
      padding: '2px 7px',
      borderRadius: 4,
      letterSpacing: '0.02em'
    }
  }, p.kind)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: C.text,
      marginBottom: 10,
      lineHeight: 1.45
    }
  }, p.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: C.muted,
      lineHeight: 1.5,
      fontStyle: 'italic'
    }
  }, p.why)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      padding: 16,
      background: C.bg,
      border: `1px dashed ${C.borderStrong}`,
      borderRadius: 8,
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.brand,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(I.info, {
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: C.text,
      lineHeight: 1.55
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: C.ink
    }
  }, "How this reads in the nav:"), " Today, the menu jumps from broad areas (\u201CEmail & SMS Templates\u201D) to a generic label (\u201CSettings Form Template\u201D). Renaming to ", /*#__PURE__*/React.createElement("em", null, "Catalogs"), " lets each sub-item carry its own name (\u201CProject Phases\u201D, \u201CService Codes\u201D) while the parent provides shared metadata \u2014 Status, Change Log, Import/Export \u2014 for free.")));
}
window.NamingBoard = NamingBoard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-settings/naming.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-settings/simpleForm-v2-2col.jsx
try { (() => {
// 03b-A · Simple form + bulk — TWO-COLUMN list (Name + Category).
// Design idea: at 2 columns, the second column is a *tag* on the name.
// Soft neutral pill, right-aligned. Light column-header strip with a sort
// affordance (chevron, dim until active).

const SIMPLE_V2_2COL_CATS = ['Pre-Sales', 'Design', 'Compliance', 'Operations', 'Closing'];
const SIMPLE_V2_2COL_SAMPLE = [{
  id: '1',
  name: 'Discovery',
  category: 'Pre-Sales',
  usage: 142,
  active: true
}, {
  id: '2',
  name: 'Design',
  category: 'Design',
  usage: 88,
  active: true
}, {
  id: '3',
  name: 'Permitting',
  category: 'Compliance',
  usage: 31,
  active: true
}, {
  id: '4',
  name: 'Installation',
  category: 'Operations',
  usage: 312,
  active: true
}, {
  id: '5',
  name: 'Commissioning',
  category: 'Operations',
  usage: 67,
  active: true
}, {
  id: '6',
  name: 'Final Inspection',
  category: 'Compliance',
  usage: 124,
  active: true
}, {
  id: '7',
  name: 'Closeout',
  category: 'Closing',
  usage: 56,
  active: true
}, {
  id: '8',
  name: 'Pre-Sales',
  category: 'Pre-Sales',
  usage: 4,
  active: false
}, {
  id: '9',
  name: 'Lead Qualification',
  category: 'Pre-Sales',
  usage: 0,
  active: false
}];

// Tiny header cell with sort affordance (click to cycle none → asc → desc).
function ColHeader({
  label,
  sortKey,
  sort,
  onSort,
  filterable,
  onFilter,
  filterActive,
  align = 'left',
  style
}) {
  const active = sort && sort.key === sortKey;
  const dir = active ? sort.dir : null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => onSort && onSort(sortKey),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      fontSize: 10.5,
      fontWeight: 600,
      color: active ? C.ink : C.muted,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      cursor: onSort ? 'pointer' : 'default',
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, label), onSort && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "10",
    viewBox: "0 0 8 10",
    style: {
      display: 'block',
      opacity: active ? 1 : 0.45
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 0 L8 4 L0 4 Z",
    fill: dir === 'asc' ? C.ink : C.subtle
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 10 L0 6 L8 6 Z",
    fill: dir === 'desc' ? C.ink : C.subtle
  })), filterable && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onFilter && onFilter();
    },
    style: {
      background: filterActive ? C.brandSoft : 'transparent',
      border: 'none',
      padding: 2,
      marginLeft: 2,
      borderRadius: 3,
      cursor: 'pointer',
      color: filterActive ? C.brand : C.muted,
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4h16l-6 9v6l-4-2v-4z"
  }))));
}
function SimpleFormPrototypeV2_2Col() {
  const [items, setItems] = React.useState(SIMPLE_V2_2COL_SAMPLE);
  const [sort, setSort] = React.useState({
    key: 'name',
    dir: 'asc'
  });
  const [catFilter, setCatFilter] = React.useState(new Set()); // empty = all
  const [catPopOpen, setCatPopOpen] = React.useState(false);
  const catPopRef = React.useRef(null);
  React.useEffect(() => {
    if (!catPopOpen) return;
    const onDown = e => {
      if (catPopRef.current && !catPopRef.current.contains(e.target)) setCatPopOpen(false);
    };
    window.addEventListener('mousedown', onDown);
    return () => window.removeEventListener('mousedown', onDown);
  }, [catPopOpen]);
  const cycleSort = key => setSort(s => s.key !== key ? {
    key,
    dir: 'asc'
  } : s.dir === 'asc' ? {
    key,
    dir: 'desc'
  } : {
    key: 'name',
    dir: 'asc'
  });
  const [selected, setSelected] = React.useState('4');
  const [filter, setFilter] = React.useState('all');
  const [q, setQ] = React.useState('');
  const [sel, setSel] = React.useState(new Set());
  const [isNew, setIsNew] = React.useState(false);
  const [draftName, setDraftName] = React.useState('');
  const [draftDesc, setDraftDesc] = React.useState('');
  const [draftCat, setDraftCat] = React.useState('Pre-Sales');
  const [draftActive, setDraftActive] = React.useState(true);
  const [showErrors, setShowErrors] = React.useState(false);
  const [saveErrors, setSaveErrors] = React.useState(false);
  const [showLog, setShowLog] = React.useState(false);
  const [hoverId, setHoverId] = React.useState(null);
  const [importOpen, setImportOpen] = React.useState(false);
  const importRef = React.useRef(null);
  const [exportOpen, setExportOpen] = React.useState(false);
  const exportRef = React.useRef(null);
  React.useEffect(() => {
    if (!importOpen) return;
    const onDown = e => {
      if (importRef.current && !importRef.current.contains(e.target)) setImportOpen(false);
    };
    window.addEventListener('mousedown', onDown);
    return () => window.removeEventListener('mousedown', onDown);
  }, [importOpen]);
  React.useEffect(() => {
    if (!exportOpen) return;
    const onDown = e => {
      if (exportRef.current && !exportRef.current.contains(e.target)) setExportOpen(false);
    };
    window.addEventListener('mousedown', onDown);
    return () => window.removeEventListener('mousedown', onDown);
  }, [exportOpen]);
  const current = items.find(i => i.id === selected) || items[0];
  const INITIAL_DESCS = {
    '4': 'Standard residential installation item covering panel mounting, electrical work, and inverter setup.'
  };
  const [descs, setDescs] = React.useState(INITIAL_DESCS); // saved descriptions by id
  const [drafts, setDrafts] = React.useState({}); // id -> { name, desc } — only present while dirty

  const canonicalName = id => items.find(i => i.id === id)?.name ?? '';
  const canonicalCat = id => items.find(i => i.id === id)?.category ?? '';
  const canonicalDesc = id => descs[id] ?? '';
  const isDirtyId = id => !!drafts[id];
  const name = drafts[selected]?.name ?? canonicalName(selected);
  const desc = drafts[selected]?.desc ?? canonicalDesc(selected);
  const cat = drafts[selected]?.category ?? canonicalCat(selected);
  const isDirty = isDirtyId(selected);
  const updateDraft = patch => {
    setDrafts(s => {
      const cN = canonicalName(selected);
      const cD = canonicalDesc(selected);
      const cC = canonicalCat(selected);
      const cur = s[selected] ?? {
        name: cN,
        desc: cD,
        category: cC
      };
      const next = {
        ...cur,
        ...patch
      };
      if (next.name === cN && next.desc === cD && next.category === cC) {
        const {
          [selected]: _,
          ...rest
        } = s;
        return rest;
      }
      return {
        ...s,
        [selected]: next
      };
    });
  };
  const setName = v => updateDraft({
    name: v
  });
  const setDesc = v => updateDraft({
    desc: v
  });
  const setCat = v => updateDraft({
    category: v
  });
  React.useEffect(() => {
    setSaveErrors(false);
  }, [selected]);
  const saveNameError = saveErrors && !name.trim() ? 'Name is required' : null;
  const handleSave = () => {
    const dirtyIds = Object.keys(drafts);
    if (dirtyIds.length === 0) return;
    // Validate every dirty row has a non-empty name
    const badId = dirtyIds.find(id => !(drafts[id].name ?? '').trim());
    if (badId) {
      if (selected !== badId) setSelected(badId);
      setSaveErrors(true);
      return;
    }
    setItems(s => s.map(i => drafts[i.id] ? {
      ...i,
      name: drafts[i.id].name.trim(),
      category: drafts[i.id].category
    } : i));
    setDescs(s => {
      const next = {
        ...s
      };
      for (const id of dirtyIds) next[id] = drafts[id].desc;
      return next;
    });
    setDrafts({});
    setSaveErrors(false);
  };
  const startNew = () => {
    setIsNew(true);
    setDraftName('');
    setDraftDesc('');
    setDraftCat('Pre-Sales');
    setDraftActive(true);
    setShowErrors(false);
    setSel(new Set());
  };
  const cancelNew = () => {
    setIsNew(false);
    setDraftName('');
    setDraftDesc('');
    setShowErrors(false);
  };
  const createNew = () => {
    const trimmed = draftName.trim();
    if (!trimmed || dupName) {
      setShowErrors(true);
      return;
    }
    const newId = String(Date.now());
    setItems(s => [...s, {
      id: newId,
      name: trimmed,
      category: draftCat,
      usage: 0,
      active: draftActive
    }]);
    setDescs(s => ({
      ...s,
      [newId]: draftDesc
    }));
    setSelected(newId);
    setIsNew(false);
    setShowErrors(false);
  };
  const canCreate = draftName.trim().length > 0;
  const dupName = isNew && draftName.trim() && items.some(i => i.name.toLowerCase() === draftName.trim().toLowerCase());
  const nameError = isNew && showErrors ? !canCreate ? 'Name is required' : dupName ? `"${draftName.trim()}" already exists` : null : null;
  const filtered = items.filter(i => filter === 'all' || (filter === 'active' ? i.active : !i.active)).filter(i => !q || i.name.toLowerCase().includes(q.toLowerCase())).filter(i => catFilter.size === 0 || catFilter.has(i.category)).slice().sort((a, b) => {
    // Active rows first regardless of sort key.
    if (a.active !== b.active) return a.active ? -1 : 1;
    const k = sort.key;
    const av = (a[k] ?? '').toString().toLowerCase();
    const bv = (b[k] ?? '').toString().toLowerCase();
    const cmp = av < bv ? -1 : av > bv ? 1 : 0;
    return sort.dir === 'desc' ? -cmp : cmp;
  });
  const counts = {
    all: items.length,
    active: items.filter(i => i.active).length,
    inactive: items.filter(i => !i.active).length
  };
  const toggle = id => setItems(s => s.map(i => i.id === id ? {
    ...i,
    active: !i.active
  } : i));
  const toggleSel = id => setSel(s => {
    const n = new Set(s);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  });
  const allFilteredSelected = filtered.length > 0 && filtered.every(i => sel.has(i.id));
  const selectAllFiltered = () => setSel(s => {
    const n = new Set(s);
    if (allFilteredSelected) filtered.forEach(i => n.delete(i.id));else filtered.forEach(i => n.add(i.id));
    return n;
  });
  const bulk = active => {
    setItems(s => s.map(i => sel.has(i.id) ? {
      ...i,
      active
    } : i));
    setSel(new Set());
  };
  const selectedRows = items.filter(i => sel.has(i.id));
  const allSelectedActive = selectedRows.every(i => i.active);
  const allSelectedInactive = selectedRows.every(i => !i.active);
  return /*#__PURE__*/React.createElement(FormCard, {
    title: "Standard Template",
    width: 1280,
    height: 720,
    style: {
      borderRadius: 6
    },
    headerStyle: {
      padding: '0 18px',
      height: 45,
      background: C.bg
    },
    headerExtras: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: C.subtle
      }
    }, "Last edited by Marlee K. \xB7 Apr 22, 2026"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        height: 16,
        background: C.border
      }
    }), /*#__PURE__*/React.createElement(LinkBtn, {
      icon: /*#__PURE__*/React.createElement(I.history, {
        size: 13
      }),
      muted: true,
      onClick: () => setShowLog(true)
    }, "Change Log"), /*#__PURE__*/React.createElement("div", {
      ref: importRef,
      style: {
        position: 'relative',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(LinkBtn, {
      icon: /*#__PURE__*/React.createElement(I.upload, {
        size: 13
      }),
      muted: true,
      onClick: () => setImportOpen(o => !o),
      rightIcon: /*#__PURE__*/React.createElement(I.chevDown, {
        size: 11
      })
    }, "Import"), importOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 'calc(100% + 6px)',
        right: 0,
        zIndex: 20,
        minWidth: 200,
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 6,
        boxShadow: C.shadowLg,
        overflow: 'hidden',
        fontFamily: 'inherit'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setImportOpen(false),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        padding: '9px 12px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'inherit',
        fontSize: 12.5,
        color: C.ink
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = C.bg;
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(I.download, {
      size: 14,
      style: {
        color: C.muted
      }
    }), "Download Import Template"), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: C.border
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => setImportOpen(false),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        padding: '9px 12px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'inherit',
        fontSize: 12.5,
        color: C.ink
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = C.bg;
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(I.upload, {
      size: 14,
      style: {
        color: C.muted
      }
    }), "Import from XLS"))), /*#__PURE__*/React.createElement("div", {
      ref: exportRef,
      style: {
        position: 'relative',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(LinkBtn, {
      icon: /*#__PURE__*/React.createElement(I.download, {
        size: 13
      }),
      muted: true,
      onClick: () => setExportOpen(o => !o),
      rightIcon: /*#__PURE__*/React.createElement(I.chevDown, {
        size: 11
      })
    }, "Export"), exportOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 'calc(100% + 6px)',
        right: 0,
        zIndex: 20,
        minWidth: 200,
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 6,
        boxShadow: C.shadowLg,
        overflow: 'hidden',
        fontFamily: 'inherit'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setExportOpen(false),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        padding: '9px 12px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'inherit',
        fontSize: 12.5,
        color: C.ink
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = C.bg;
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(I.sheet, {
      size: 14,
      style: {
        color: C.muted
      }
    }), "Export to XLS"), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: C.border
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => setExportOpen(false),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        padding: '9px 12px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'inherit',
        fontSize: 12.5,
        color: C.ink
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = C.bg;
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(I.file, {
      size: 14,
      style: {
        color: C.muted
      }
    }), "Export to CSV")))),
    footer: isNew ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Btn, {
      key: "cancel",
      size: "md",
      kind: "secondary",
      leftIcon: /*#__PURE__*/React.createElement(I.x, {
        style: {
          transform: 'translateY(1px)'
        }
      }),
      onClick: cancelNew,
      style: {
        minWidth: 85
      }
    }, "Cancel"), /*#__PURE__*/React.createElement(Btn, {
      key: "create",
      size: "md",
      kind: "action",
      leftIcon: /*#__PURE__*/React.createElement(I.plus, null),
      onClick: createNew,
      style: {
        minWidth: 85
      }
    }, "Create")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), Object.keys(drafts).length > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: C.subtle
      }
    }, "Unsaved changes"), /*#__PURE__*/React.createElement(Btn, {
      key: "close",
      size: "md",
      kind: "secondary",
      leftIcon: /*#__PURE__*/React.createElement(I.x, {
        style: {
          transform: 'translateY(1px)'
        }
      }),
      style: {
        minWidth: 85
      }
    }, "Close"), /*#__PURE__*/React.createElement(Btn, {
      key: "save",
      size: "md",
      kind: "action",
      leftIcon: /*#__PURE__*/React.createElement(I.save, null),
      onClick: handleSave,
      style: {
        minWidth: 85
      }
    }, "Save"))
  }, showLog && /*#__PURE__*/React.createElement(ChangeLogModal, {
    onClose: () => setShowLog(false)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '500px 1fr',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: `1px solid ${C.border}`,
      display: 'flex',
      flexDirection: 'column',
      background: C.bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      borderBottom: `1px solid ${C.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search\u2026",
    prefix: /*#__PURE__*/React.createElement(I.search, {
      size: 14
    }),
    style: {
      flex: 1,
      height: 30
    },
    disabled: isNew
  }), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "primary",
    leftIcon: /*#__PURE__*/React.createElement(I.plus, null),
    onClick: startNew,
    disabled: isNew,
    style: {
      minWidth: 85
    }
  }, "New")), /*#__PURE__*/React.createElement(Segmented, {
    size: "sm",
    value: filter,
    onChange: setFilter,
    options: [{
      value: 'all',
      label: `All ${counts.all}`
    }, {
      value: 'active',
      label: `Active ${counts.active}`
    }, {
      value: 'inactive',
      label: `Inactive ${counts.inactive}`
    }]
  })), isNew ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 14px 4px 16px',
      height: 32,
      background: C.brandSoft,
      borderBottom: `1px solid ${C.brandBorder}`
    }
  }, /*#__PURE__*/React.createElement(I.plus, {
    size: 13,
    style: {
      color: C.brand
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: C.brand,
      fontWeight: 600
    }
  }, "Creating new item"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(LinkBtn, {
    onClick: cancelNew,
    muted: true
  }, "Cancel")) : sel.size > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 14px 4px 16px',
      height: 32,
      background: C.brandSoft,
      borderBottom: `1px solid ${C.brandBorder}`
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: allFilteredSelected,
    ref: el => {
      if (el) el.indeterminate = !allFilteredSelected && sel.size > 0;
    },
    onChange: selectAllFiltered,
    style: {
      accentColor: C.brand
    }
  }), /*#__PURE__*/React.createElement("span", {
    onClick: () => setSel(new Set()),
    style: {
      fontSize: 12,
      color: C.brand,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, sel.size, " Selected"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(LinkBtn, {
    icon: /*#__PURE__*/React.createElement(I.check, {
      size: 13
    }),
    onClick: () => bulk(true),
    disabled: allSelectedActive
  }, "Activate"), /*#__PURE__*/React.createElement(LinkBtn, {
    icon: /*#__PURE__*/React.createElement(I.archive, {
      size: 13
    }),
    onClick: () => bulk(false),
    disabled: allSelectedInactive
  }, "Deactivate"), /*#__PURE__*/React.createElement(LinkBtn, {
    onClick: () => setSel(new Set()),
    muted: true
  }, "Clear")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 14px 4px 16px',
      height: 32,
      background: C.bg,
      borderBottom: `1px solid ${C.border}`,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: false,
    onChange: selectAllFiltered,
    style: {
      accentColor: C.brand
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    label: "Name",
    sortKey: "name",
    sort: sort,
    onSort: cycleSort
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 130,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: catPopRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    label: "Category",
    sortKey: "category",
    sort: sort,
    onSort: cycleSort,
    filterable: true,
    filterActive: catFilter.size > 0,
    onFilter: () => setCatPopOpen(o => !o)
  }), catPopOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 6px)',
      left: -8,
      zIndex: 30,
      minWidth: 180,
      background: C.surface,
      border: `1px solid ${C.border}`,
      borderRadius: 6,
      boxShadow: C.shadowLg,
      overflow: 'hidden',
      padding: 6,
      fontFamily: 'inherit'
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      color: C.muted,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '4px 6px 6px'
    }
  }, "Filter by category"), SIMPLE_V2_2COL_CATS.map(c => {
    const on = catFilter.has(c);
    return /*#__PURE__*/React.createElement("label", {
      key: c,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 8px',
        borderRadius: 4,
        cursor: 'pointer',
        fontSize: 12.5,
        color: C.ink
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = C.bg;
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: on,
      onChange: () => setCatFilter(s => {
        const n = new Set(s);
        n.has(c) ? n.delete(c) : n.add(c);
        return n;
      }),
      style: {
        accentColor: C.brand
      }
    }), c);
  }), catFilter.size > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: C.border,
      margin: '4px 0'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCatFilter(new Set()),
    style: {
      width: '100%',
      textAlign: 'left',
      background: 'transparent',
      border: 'none',
      padding: '6px 8px',
      fontSize: 12,
      color: C.brand,
      fontFamily: 'inherit',
      cursor: 'pointer',
      fontWeight: 600
    }
  }, "Clear filter"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28 + 14 + 10
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, isNew && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 14px',
      borderLeft: `2px dashed ${C.brand}`,
      borderBottom: `1px solid ${C.brandBorder}`,
      background: C.brandSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 13,
      height: 13,
      borderRadius: 3,
      border: `1px dashed ${C.brandBorder}`,
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: draftName ? C.ink : C.brand,
      fontWeight: 600,
      fontStyle: draftName ? 'normal' : 'italic',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, draftName || 'New item…'))), filtered.map((it, idx) => {
    const isSel = !isNew && it.id === selected;
    const isChecked = sel.has(it.id);
    const isHover = !isNew && hoverId === it.id && !isSel;
    const dimmed = isNew;
    const showUnsaved = !isNew && isDirtyId(it.id);
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      onMouseEnter: () => setHoverId(it.id),
      onMouseLeave: () => setHoverId(s => s === it.id ? null : s),
      onClick: () => !isNew && setSelected(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 14px',
        borderBottom: `1px solid ${C.border}`,
        background: isSel ? C.brandSoft : isChecked ? '#FFF8F2' : isHover ? C.surface : 'transparent',
        boxShadow: isSel ? `inset 3px 0 0 ${C.brand}, inset 0 0 0 1px ${C.brandBorder}, inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(242,105,26,0.08), 0 1px 0 rgba(20,16,10,0.04)` : isHover ? C.shadowSm : 'none',
        cursor: isNew ? 'default' : 'pointer',
        opacity: dimmed ? 0.45 : 1,
        pointerEvents: isNew ? 'none' : 'auto',
        position: 'relative',
        transition: 'background .08s, box-shadow .08s'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: isChecked,
      onChange: () => toggleSel(it.id),
      onClick: e => e.stopPropagation(),
      style: {
        accentColor: C.brand
      },
      disabled: isNew
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: isSel ? C.ink : it.active ? C.ink : C.muted,
        fontWeight: isSel ? 600 : 500,
        letterSpacing: isSel ? '-0.005em' : '0',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, it.name), showUnsaved && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        color: C.amber,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        padding: '2px 6px',
        background: C.amberSoft,
        border: `1px solid #EBD2A0`,
        borderRadius: 3,
        lineHeight: 1,
        flex: '0 0 auto'
      }
    }, "Unsaved")), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 130,
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      tone: "neutral"
    }, it.category)), /*#__PURE__*/React.createElement(Toggle, {
      checked: it.active,
      onChange: () => toggle(it.id),
      size: "sm"
    }), /*#__PURE__*/React.createElement(I.chevRight, {
      size: 14,
      style: {
        color: isSel ? C.brand : C.muted,
        flex: '0 0 auto',
        visibility: isSel || isHover ? 'visible' : 'hidden'
      }
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 22px',
      borderBottom: `1px solid ${C.border}`,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: isNew ? C.brand : C.subtle,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      marginBottom: 4,
      fontWeight: isNew ? 700 : 500
    }
  }, isNew ? 'New item' : 'Editing'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: isNew && !draftName ? C.subtle : C.ink,
      fontStyle: isNew && !draftName ? 'italic' : 'normal'
    }
  }, isNew ? draftName || 'Untitled item' : name || 'Untitled item')), isNew ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: C.subtle,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("kbd", {
    style: {
      background: C.panel,
      border: `1px solid ${C.border}`,
      borderRadius: 4,
      padding: '1px 5px',
      fontSize: 11,
      fontFamily: 'ui-monospace, monospace',
      color: C.muted
    }
  }, "Enter"), " to create \xB7 ", /*#__PURE__*/React.createElement("kbd", {
    style: {
      background: C.panel,
      border: `1px solid ${C.border}`,
      borderRadius: 4,
      padding: '1px 5px',
      fontSize: 11,
      fontFamily: 'ui-monospace, monospace',
      color: C.muted
    }
  }, "Esc"), " to cancel"), /*#__PURE__*/React.createElement(Pill, {
    tone: "primary"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: C.brand
    }
  }), "Draft")) : /*#__PURE__*/React.createElement(Pill, {
    tone: current.active ? 'active' : 'inactive'
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: current.active ? C.green : C.subtle
    }
  }), current.active ? 'Active' : 'Inactive')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '22px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, isNew ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    required: true,
    error: nameError
  }, /*#__PURE__*/React.createElement(Input, {
    value: draftName,
    onChange: e => {
      setDraftName(e.target.value);
      if (showErrors) setShowErrors(false);
    },
    autoFocus: true,
    error: !!nameError,
    onKeyDown: e => {
      if (e.key === 'Enter') createNew();
      if (e.key === 'Escape') cancelNew();
    }
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Category"
  }, /*#__PURE__*/React.createElement(Select, {
    value: draftCat,
    onChange: e => setDraftCat(e.target.value),
    options: SIMPLE_V2_2COL_CATS
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Description"
  }, /*#__PURE__*/React.createElement(Textarea, {
    value: draftDesc,
    onChange: e => setDraftDesc(e.target.value),
    rows: 4
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    required: true,
    error: saveNameError
  }, /*#__PURE__*/React.createElement(Input, {
    value: name,
    onChange: e => {
      setName(e.target.value);
      if (saveErrors) setSaveErrors(false);
    },
    error: !!saveNameError
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Category"
  }, /*#__PURE__*/React.createElement(Select, {
    value: cat,
    onChange: e => setCat(e.target.value),
    options: SIMPLE_V2_2COL_CATS
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Description"
  }, /*#__PURE__*/React.createElement(Textarea, {
    value: desc,
    onChange: e => setDesc(e.target.value),
    rows: 4
  })))))));
}
window.SimpleFormPrototypeV2_2Col = SimpleFormPrototypeV2_2Col;
window.ColHeader = window.ColHeader || ColHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-settings/simpleForm-v2-2col.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-settings/simpleForm-v2-3col.jsx
try { (() => {
// 03b-B · Simple form + bulk — THREE-COLUMN list (Name + Category + Usage).
// Design idea: real tabular structure begins paying off. Persistent column
// header with sort indicators on every column + funnel-icon filters on
// the columns where it makes sense (Category multi-select, Usage range).
// List pane widens; the form pane gets correspondingly tighter.

const SIMPLE_V2_3COL_CATS = ['Pre-Sales', 'Design', 'Compliance', 'Operations', 'Closing'];
const SIMPLE_V2_3COL_SAMPLE = [{
  id: '1',
  name: 'Discovery',
  category: 'Pre-Sales',
  usage: 142,
  active: true
}, {
  id: '2',
  name: 'Design',
  category: 'Design',
  usage: 88,
  active: true
}, {
  id: '3',
  name: 'Permitting',
  category: 'Compliance',
  usage: 31,
  active: true
}, {
  id: '4',
  name: 'Installation',
  category: 'Operations',
  usage: 312,
  active: true
}, {
  id: '5',
  name: 'Commissioning',
  category: 'Operations',
  usage: 67,
  active: true
}, {
  id: '6',
  name: 'Final Inspection',
  category: 'Compliance',
  usage: 124,
  active: true
}, {
  id: '7',
  name: 'Closeout',
  category: 'Closing',
  usage: 56,
  active: true
}, {
  id: '8',
  name: 'Pre-Sales',
  category: 'Pre-Sales',
  usage: 4,
  active: false
}, {
  id: '9',
  name: 'Lead Qualification',
  category: 'Pre-Sales',
  usage: 0,
  active: false
}];
function SimpleFormPrototypeV2_3Col() {
  const [items, setItems] = React.useState(SIMPLE_V2_3COL_SAMPLE);
  const [sort, setSort] = React.useState({
    key: 'name',
    dir: 'asc'
  });
  const [catFilter, setCatFilter] = React.useState(new Set());
  const [catPopOpen, setCatPopOpen] = React.useState(false);
  const catPopRef = React.useRef(null);
  const [usagePopOpen, setUsagePopOpen] = React.useState(false);
  const usagePopRef = React.useRef(null);
  const [usageMin, setUsageMin] = React.useState(''); // string for input
  const [usageMax, setUsageMax] = React.useState('');
  React.useEffect(() => {
    if (!catPopOpen) return;
    const onDown = e => {
      if (catPopRef.current && !catPopRef.current.contains(e.target)) setCatPopOpen(false);
    };
    window.addEventListener('mousedown', onDown);
    return () => window.removeEventListener('mousedown', onDown);
  }, [catPopOpen]);
  React.useEffect(() => {
    if (!usagePopOpen) return;
    const onDown = e => {
      if (usagePopRef.current && !usagePopRef.current.contains(e.target)) setUsagePopOpen(false);
    };
    window.addEventListener('mousedown', onDown);
    return () => window.removeEventListener('mousedown', onDown);
  }, [usagePopOpen]);
  const cycleSort = key => setSort(s => s.key !== key ? {
    key,
    dir: 'asc'
  } : s.dir === 'asc' ? {
    key,
    dir: 'desc'
  } : {
    key: 'name',
    dir: 'asc'
  });
  const [selected, setSelected] = React.useState('4');
  const [filter, setFilter] = React.useState('all');
  const [q, setQ] = React.useState('');
  const [sel, setSel] = React.useState(new Set());
  const [isNew, setIsNew] = React.useState(false);
  const [draftName, setDraftName] = React.useState('');
  const [draftDesc, setDraftDesc] = React.useState('');
  const [draftCat, setDraftCat] = React.useState('Pre-Sales');
  const [draftActive, setDraftActive] = React.useState(true);
  const [showErrors, setShowErrors] = React.useState(false);
  const [saveErrors, setSaveErrors] = React.useState(false);
  const [showLog, setShowLog] = React.useState(false);
  const [hoverId, setHoverId] = React.useState(null);
  const [importOpen, setImportOpen] = React.useState(false);
  const importRef = React.useRef(null);
  const [exportOpen, setExportOpen] = React.useState(false);
  const exportRef = React.useRef(null);
  React.useEffect(() => {
    if (!importOpen) return;
    const onDown = e => {
      if (importRef.current && !importRef.current.contains(e.target)) setImportOpen(false);
    };
    window.addEventListener('mousedown', onDown);
    return () => window.removeEventListener('mousedown', onDown);
  }, [importOpen]);
  React.useEffect(() => {
    if (!exportOpen) return;
    const onDown = e => {
      if (exportRef.current && !exportRef.current.contains(e.target)) setExportOpen(false);
    };
    window.addEventListener('mousedown', onDown);
    return () => window.removeEventListener('mousedown', onDown);
  }, [exportOpen]);
  const current = items.find(i => i.id === selected) || items[0];
  const INITIAL_DESCS = {
    '4': 'Standard residential installation item covering panel mounting, electrical work, and inverter setup.'
  };
  const [descs, setDescs] = React.useState(INITIAL_DESCS); // saved descriptions by id
  const [drafts, setDrafts] = React.useState({}); // id -> { name, desc } — only present while dirty

  const canonicalName = id => items.find(i => i.id === id)?.name ?? '';
  const canonicalCat = id => items.find(i => i.id === id)?.category ?? '';
  const canonicalDesc = id => descs[id] ?? '';
  const isDirtyId = id => !!drafts[id];
  const name = drafts[selected]?.name ?? canonicalName(selected);
  const desc = drafts[selected]?.desc ?? canonicalDesc(selected);
  const cat = drafts[selected]?.category ?? canonicalCat(selected);
  const isDirty = isDirtyId(selected);
  const updateDraft = patch => {
    setDrafts(s => {
      const cN = canonicalName(selected);
      const cD = canonicalDesc(selected);
      const cC = canonicalCat(selected);
      const cur = s[selected] ?? {
        name: cN,
        desc: cD,
        category: cC
      };
      const next = {
        ...cur,
        ...patch
      };
      if (next.name === cN && next.desc === cD && next.category === cC) {
        const {
          [selected]: _,
          ...rest
        } = s;
        return rest;
      }
      return {
        ...s,
        [selected]: next
      };
    });
  };
  const setName = v => updateDraft({
    name: v
  });
  const setDesc = v => updateDraft({
    desc: v
  });
  const setCat = v => updateDraft({
    category: v
  });
  React.useEffect(() => {
    setSaveErrors(false);
  }, [selected]);
  const saveNameError = saveErrors && !name.trim() ? 'Name is required' : null;
  const handleSave = () => {
    const dirtyIds = Object.keys(drafts);
    if (dirtyIds.length === 0) return;
    // Validate every dirty row has a non-empty name
    const badId = dirtyIds.find(id => !(drafts[id].name ?? '').trim());
    if (badId) {
      if (selected !== badId) setSelected(badId);
      setSaveErrors(true);
      return;
    }
    setItems(s => s.map(i => drafts[i.id] ? {
      ...i,
      name: drafts[i.id].name.trim(),
      category: drafts[i.id].category
    } : i));
    setDescs(s => {
      const next = {
        ...s
      };
      for (const id of dirtyIds) next[id] = drafts[id].desc;
      return next;
    });
    setDrafts({});
    setSaveErrors(false);
  };
  const startNew = () => {
    setIsNew(true);
    setDraftName('');
    setDraftDesc('');
    setDraftCat('Pre-Sales');
    setDraftActive(true);
    setShowErrors(false);
    setSel(new Set());
  };
  const cancelNew = () => {
    setIsNew(false);
    setDraftName('');
    setDraftDesc('');
    setShowErrors(false);
  };
  const createNew = () => {
    const trimmed = draftName.trim();
    if (!trimmed || dupName) {
      setShowErrors(true);
      return;
    }
    const newId = String(Date.now());
    setItems(s => [...s, {
      id: newId,
      name: trimmed,
      category: draftCat,
      usage: 0,
      active: draftActive
    }]);
    setDescs(s => ({
      ...s,
      [newId]: draftDesc
    }));
    setSelected(newId);
    setIsNew(false);
    setShowErrors(false);
  };
  const canCreate = draftName.trim().length > 0;
  const dupName = isNew && draftName.trim() && items.some(i => i.name.toLowerCase() === draftName.trim().toLowerCase());
  const nameError = isNew && showErrors ? !canCreate ? 'Name is required' : dupName ? `"${draftName.trim()}" already exists` : null : null;
  const usageMinN = usageMin === '' ? null : Number(usageMin);
  const usageMaxN = usageMax === '' ? null : Number(usageMax);
  const usageFilterActive = usageMinN != null || usageMaxN != null;
  const filtered = items.filter(i => filter === 'all' || (filter === 'active' ? i.active : !i.active)).filter(i => !q || i.name.toLowerCase().includes(q.toLowerCase())).filter(i => catFilter.size === 0 || catFilter.has(i.category)).filter(i => (usageMinN == null || i.usage >= usageMinN) && (usageMaxN == null || i.usage <= usageMaxN)).slice().sort((a, b) => {
    if (a.active !== b.active) return a.active ? -1 : 1;
    const k = sort.key;
    const av = a[k],
      bv = b[k];
    const cmp = typeof av === 'number' && typeof bv === 'number' ? av - bv : (av ?? '').toString().toLowerCase() < (bv ?? '').toString().toLowerCase() ? -1 : (av ?? '').toString().toLowerCase() > (bv ?? '').toString().toLowerCase() ? 1 : 0;
    return sort.dir === 'desc' ? -cmp : cmp;
  });
  const counts = {
    all: items.length,
    active: items.filter(i => i.active).length,
    inactive: items.filter(i => !i.active).length
  };
  const toggle = id => setItems(s => s.map(i => i.id === id ? {
    ...i,
    active: !i.active
  } : i));
  const toggleSel = id => setSel(s => {
    const n = new Set(s);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  });
  const allFilteredSelected = filtered.length > 0 && filtered.every(i => sel.has(i.id));
  const selectAllFiltered = () => setSel(s => {
    const n = new Set(s);
    if (allFilteredSelected) filtered.forEach(i => n.delete(i.id));else filtered.forEach(i => n.add(i.id));
    return n;
  });
  const bulk = active => {
    setItems(s => s.map(i => sel.has(i.id) ? {
      ...i,
      active
    } : i));
    setSel(new Set());
  };
  const selectedRows = items.filter(i => sel.has(i.id));
  const allSelectedActive = selectedRows.every(i => i.active);
  const allSelectedInactive = selectedRows.every(i => !i.active);
  return /*#__PURE__*/React.createElement(FormCard, {
    title: "Standard Template",
    width: 1280,
    height: 720,
    style: {
      borderRadius: 6
    },
    headerStyle: {
      padding: '0 18px',
      height: 45,
      background: C.bg
    },
    headerExtras: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: C.subtle
      }
    }, "Last edited by Marlee K. \xB7 Apr 22, 2026"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        height: 16,
        background: C.border
      }
    }), /*#__PURE__*/React.createElement(LinkBtn, {
      icon: /*#__PURE__*/React.createElement(I.history, {
        size: 13
      }),
      muted: true,
      onClick: () => setShowLog(true)
    }, "Change Log"), /*#__PURE__*/React.createElement("div", {
      ref: importRef,
      style: {
        position: 'relative',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(LinkBtn, {
      icon: /*#__PURE__*/React.createElement(I.upload, {
        size: 13
      }),
      muted: true,
      onClick: () => setImportOpen(o => !o),
      rightIcon: /*#__PURE__*/React.createElement(I.chevDown, {
        size: 11
      })
    }, "Import"), importOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 'calc(100% + 6px)',
        right: 0,
        zIndex: 20,
        minWidth: 200,
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 6,
        boxShadow: C.shadowLg,
        overflow: 'hidden',
        fontFamily: 'inherit'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setImportOpen(false),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        padding: '9px 12px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'inherit',
        fontSize: 12.5,
        color: C.ink
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = C.bg;
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(I.download, {
      size: 14,
      style: {
        color: C.muted
      }
    }), "Download Import Template"), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: C.border
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => setImportOpen(false),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        padding: '9px 12px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'inherit',
        fontSize: 12.5,
        color: C.ink
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = C.bg;
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(I.upload, {
      size: 14,
      style: {
        color: C.muted
      }
    }), "Import from XLS"))), /*#__PURE__*/React.createElement("div", {
      ref: exportRef,
      style: {
        position: 'relative',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(LinkBtn, {
      icon: /*#__PURE__*/React.createElement(I.download, {
        size: 13
      }),
      muted: true,
      onClick: () => setExportOpen(o => !o),
      rightIcon: /*#__PURE__*/React.createElement(I.chevDown, {
        size: 11
      })
    }, "Export"), exportOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 'calc(100% + 6px)',
        right: 0,
        zIndex: 20,
        minWidth: 200,
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 6,
        boxShadow: C.shadowLg,
        overflow: 'hidden',
        fontFamily: 'inherit'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setExportOpen(false),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        padding: '9px 12px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'inherit',
        fontSize: 12.5,
        color: C.ink
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = C.bg;
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(I.sheet, {
      size: 14,
      style: {
        color: C.muted
      }
    }), "Export to XLS"), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: C.border
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => setExportOpen(false),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        padding: '9px 12px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'inherit',
        fontSize: 12.5,
        color: C.ink
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = C.bg;
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(I.file, {
      size: 14,
      style: {
        color: C.muted
      }
    }), "Export to CSV")))),
    footer: isNew ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Btn, {
      key: "cancel",
      size: "md",
      kind: "secondary",
      leftIcon: /*#__PURE__*/React.createElement(I.x, {
        style: {
          transform: 'translateY(1px)'
        }
      }),
      onClick: cancelNew,
      style: {
        minWidth: 85
      }
    }, "Cancel"), /*#__PURE__*/React.createElement(Btn, {
      key: "create",
      size: "md",
      kind: "action",
      leftIcon: /*#__PURE__*/React.createElement(I.plus, null),
      onClick: createNew,
      style: {
        minWidth: 85
      }
    }, "Create")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), Object.keys(drafts).length > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: C.subtle
      }
    }, "Unsaved changes"), /*#__PURE__*/React.createElement(Btn, {
      key: "close",
      size: "md",
      kind: "secondary",
      leftIcon: /*#__PURE__*/React.createElement(I.x, {
        style: {
          transform: 'translateY(1px)'
        }
      }),
      style: {
        minWidth: 85
      }
    }, "Close"), /*#__PURE__*/React.createElement(Btn, {
      key: "save",
      size: "md",
      kind: "action",
      leftIcon: /*#__PURE__*/React.createElement(I.save, null),
      onClick: handleSave,
      style: {
        minWidth: 85
      }
    }, "Save"))
  }, showLog && /*#__PURE__*/React.createElement(ChangeLogModal, {
    onClose: () => setShowLog(false)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '620px 1fr',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: `1px solid ${C.border}`,
      display: 'flex',
      flexDirection: 'column',
      background: C.bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      borderBottom: `1px solid ${C.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search\u2026",
    prefix: /*#__PURE__*/React.createElement(I.search, {
      size: 14
    }),
    style: {
      flex: 1,
      height: 30
    },
    disabled: isNew
  }), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "primary",
    leftIcon: /*#__PURE__*/React.createElement(I.plus, null),
    onClick: startNew,
    disabled: isNew,
    style: {
      minWidth: 85
    }
  }, "New")), /*#__PURE__*/React.createElement(Segmented, {
    size: "sm",
    value: filter,
    onChange: setFilter,
    options: [{
      value: 'all',
      label: `All ${counts.all}`
    }, {
      value: 'active',
      label: `Active ${counts.active}`
    }, {
      value: 'inactive',
      label: `Inactive ${counts.inactive}`
    }]
  })), isNew ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 14px 4px 16px',
      height: 32,
      background: C.brandSoft,
      borderBottom: `1px solid ${C.brandBorder}`
    }
  }, /*#__PURE__*/React.createElement(I.plus, {
    size: 13,
    style: {
      color: C.brand
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: C.brand,
      fontWeight: 600
    }
  }, "Creating new item"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(LinkBtn, {
    onClick: cancelNew,
    muted: true
  }, "Cancel")) : sel.size > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 14px 4px 16px',
      height: 32,
      background: C.brandSoft,
      borderBottom: `1px solid ${C.brandBorder}`
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: allFilteredSelected,
    ref: el => {
      if (el) el.indeterminate = !allFilteredSelected && sel.size > 0;
    },
    onChange: selectAllFiltered,
    style: {
      accentColor: C.brand
    }
  }), /*#__PURE__*/React.createElement("span", {
    onClick: () => setSel(new Set()),
    style: {
      fontSize: 12,
      color: C.brand,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, sel.size, " Selected"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(LinkBtn, {
    icon: /*#__PURE__*/React.createElement(I.check, {
      size: 13
    }),
    onClick: () => bulk(true),
    disabled: allSelectedActive
  }, "Activate"), /*#__PURE__*/React.createElement(LinkBtn, {
    icon: /*#__PURE__*/React.createElement(I.archive, {
      size: 13
    }),
    onClick: () => bulk(false),
    disabled: allSelectedInactive
  }, "Deactivate"), /*#__PURE__*/React.createElement(LinkBtn, {
    onClick: () => setSel(new Set()),
    muted: true
  }, "Clear")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 14px 4px 16px',
      height: 32,
      background: C.bg,
      borderBottom: `1px solid ${C.border}`,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: false,
    onChange: selectAllFiltered,
    style: {
      accentColor: C.brand
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    label: "Name",
    sortKey: "name",
    sort: sort,
    onSort: cycleSort
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: catPopRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    label: "Category",
    sortKey: "category",
    sort: sort,
    onSort: cycleSort,
    filterable: true,
    filterActive: catFilter.size > 0,
    onFilter: () => setCatPopOpen(o => !o)
  }), catPopOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 6px)',
      left: -8,
      zIndex: 30,
      minWidth: 180,
      background: C.surface,
      border: `1px solid ${C.border}`,
      borderRadius: 6,
      boxShadow: C.shadowLg,
      overflow: 'hidden',
      padding: 6,
      fontFamily: 'inherit'
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      color: C.muted,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '4px 6px 6px'
    }
  }, "Filter by category"), SIMPLE_V2_3COL_CATS.map(c => {
    const on = catFilter.has(c);
    return /*#__PURE__*/React.createElement("label", {
      key: c,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 8px',
        borderRadius: 4,
        cursor: 'pointer',
        fontSize: 12.5,
        color: C.ink
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = C.bg;
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: on,
      onChange: () => setCatFilter(s => {
        const n = new Set(s);
        n.has(c) ? n.delete(c) : n.add(c);
        return n;
      }),
      style: {
        accentColor: C.brand
      }
    }), c);
  }), catFilter.size > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: C.border,
      margin: '4px 0'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCatFilter(new Set()),
    style: {
      width: '100%',
      textAlign: 'left',
      background: 'transparent',
      border: 'none',
      padding: '6px 8px',
      fontSize: 12,
      color: C.brand,
      fontFamily: 'inherit',
      cursor: 'pointer',
      fontWeight: 600
    }
  }, "Clear filter"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 90,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: usagePopRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(ColHeader, {
    label: "Usage",
    sortKey: "usage",
    sort: sort,
    onSort: cycleSort,
    align: "right",
    filterable: true,
    filterActive: usageFilterActive,
    onFilter: () => setUsagePopOpen(o => !o)
  }), usagePopOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 6px)',
      right: -8,
      zIndex: 30,
      minWidth: 200,
      background: C.surface,
      border: `1px solid ${C.border}`,
      borderRadius: 6,
      boxShadow: C.shadowLg,
      padding: 10,
      fontFamily: 'inherit'
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      color: C.muted,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "Filter usage range"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: usageMin,
    onChange: e => setUsageMin(e.target.value.replace(/[^0-9]/g, '')),
    placeholder: "Min",
    style: {
      flex: 1,
      height: 28
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: C.muted
    }
  }, "\u2013"), /*#__PURE__*/React.createElement(Input, {
    value: usageMax,
    onChange: e => setUsageMax(e.target.value.replace(/[^0-9]/g, '')),
    placeholder: "Max",
    style: {
      flex: 1,
      height: 28
    }
  })), usageFilterActive && /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setUsageMin('');
      setUsageMax('');
    },
    style: {
      marginTop: 8,
      width: '100%',
      textAlign: 'left',
      background: 'transparent',
      border: 'none',
      padding: '4px 0 0',
      fontSize: 12,
      color: C.brand,
      fontFamily: 'inherit',
      cursor: 'pointer',
      fontWeight: 600
    }
  }, "Clear filter")))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28 + 14 + 10
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, isNew && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 14px',
      borderLeft: `2px dashed ${C.brand}`,
      borderBottom: `1px solid ${C.brandBorder}`,
      background: C.brandSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 13,
      height: 13,
      borderRadius: 3,
      border: `1px dashed ${C.brandBorder}`,
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: draftName ? C.ink : C.brand,
      fontWeight: 600,
      fontStyle: draftName ? 'normal' : 'italic',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, draftName || 'New item…'))), filtered.map((it, idx) => {
    const isSel = !isNew && it.id === selected;
    const isChecked = sel.has(it.id);
    const isHover = !isNew && hoverId === it.id && !isSel;
    const dimmed = isNew;
    const showUnsaved = !isNew && isDirtyId(it.id);
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      onMouseEnter: () => setHoverId(it.id),
      onMouseLeave: () => setHoverId(s => s === it.id ? null : s),
      onClick: () => !isNew && setSelected(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 14px',
        borderBottom: `1px solid ${C.border}`,
        background: isSel ? C.brandSoft : isChecked ? '#FFF8F2' : isHover ? C.surface : 'transparent',
        boxShadow: isSel ? `inset 3px 0 0 ${C.brand}, inset 0 0 0 1px ${C.brandBorder}, inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(242,105,26,0.08), 0 1px 0 rgba(20,16,10,0.04)` : isHover ? C.shadowSm : 'none',
        cursor: isNew ? 'default' : 'pointer',
        opacity: dimmed ? 0.45 : 1,
        pointerEvents: isNew ? 'none' : 'auto',
        position: 'relative',
        transition: 'background .08s, box-shadow .08s'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: isChecked,
      onChange: () => toggleSel(it.id),
      onClick: e => e.stopPropagation(),
      style: {
        accentColor: C.brand
      },
      disabled: isNew
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: isSel ? C.ink : it.active ? C.ink : C.muted,
        fontWeight: isSel ? 600 : 500,
        letterSpacing: isSel ? '-0.005em' : '0',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, it.name), showUnsaved && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        color: C.amber,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        padding: '2px 6px',
        background: C.amberSoft,
        border: `1px solid #EBD2A0`,
        borderRadius: 3,
        lineHeight: 1,
        flex: '0 0 auto'
      }
    }, "Unsaved")), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 140,
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      tone: "neutral"
    }, it.category)), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        fontVariantNumeric: 'tabular-nums',
        fontSize: 13,
        color: it.active ? C.text : C.subtle
      }
    }, it.usage.toLocaleString()), /*#__PURE__*/React.createElement(Toggle, {
      checked: it.active,
      onChange: () => toggle(it.id),
      size: "sm"
    }), /*#__PURE__*/React.createElement(I.chevRight, {
      size: 14,
      style: {
        color: isSel ? C.brand : C.muted,
        flex: '0 0 auto',
        visibility: isSel || isHover ? 'visible' : 'hidden'
      }
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 22px',
      borderBottom: `1px solid ${C.border}`,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: isNew ? C.brand : C.subtle,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      marginBottom: 4,
      fontWeight: isNew ? 700 : 500
    }
  }, isNew ? 'New item' : 'Editing'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: isNew && !draftName ? C.subtle : C.ink,
      fontStyle: isNew && !draftName ? 'italic' : 'normal'
    }
  }, isNew ? draftName || 'Untitled item' : name || 'Untitled item')), isNew ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: C.subtle,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("kbd", {
    style: {
      background: C.panel,
      border: `1px solid ${C.border}`,
      borderRadius: 4,
      padding: '1px 5px',
      fontSize: 11,
      fontFamily: 'ui-monospace, monospace',
      color: C.muted
    }
  }, "Enter"), " to create \xB7 ", /*#__PURE__*/React.createElement("kbd", {
    style: {
      background: C.panel,
      border: `1px solid ${C.border}`,
      borderRadius: 4,
      padding: '1px 5px',
      fontSize: 11,
      fontFamily: 'ui-monospace, monospace',
      color: C.muted
    }
  }, "Esc"), " to cancel"), /*#__PURE__*/React.createElement(Pill, {
    tone: "primary"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: C.brand
    }
  }), "Draft")) : /*#__PURE__*/React.createElement(Pill, {
    tone: current.active ? 'active' : 'inactive'
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: current.active ? C.green : C.subtle
    }
  }), current.active ? 'Active' : 'Inactive')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '22px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, isNew ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    required: true,
    error: nameError
  }, /*#__PURE__*/React.createElement(Input, {
    value: draftName,
    onChange: e => {
      setDraftName(e.target.value);
      if (showErrors) setShowErrors(false);
    },
    autoFocus: true,
    error: !!nameError,
    onKeyDown: e => {
      if (e.key === 'Enter') createNew();
      if (e.key === 'Escape') cancelNew();
    }
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Category"
  }, /*#__PURE__*/React.createElement(Select, {
    value: draftCat,
    onChange: e => setDraftCat(e.target.value),
    options: SIMPLE_V2_3COL_CATS
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Description"
  }, /*#__PURE__*/React.createElement(Textarea, {
    value: draftDesc,
    onChange: e => setDraftDesc(e.target.value),
    rows: 4
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    required: true,
    error: saveNameError
  }, /*#__PURE__*/React.createElement(Input, {
    value: name,
    onChange: e => {
      setName(e.target.value);
      if (saveErrors) setSaveErrors(false);
    },
    error: !!saveNameError
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Category"
  }, /*#__PURE__*/React.createElement(Select, {
    value: cat,
    onChange: e => setCat(e.target.value),
    options: SIMPLE_V2_3COL_CATS
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Description"
  }, /*#__PURE__*/React.createElement(Textarea, {
    value: desc,
    onChange: e => setDesc(e.target.value),
    rows: 4
  })))))));
}
window.SimpleFormPrototypeV2_3Col = SimpleFormPrototypeV2_3Col;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-settings/simpleForm-v2-3col.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-settings/simpleForm-v2-6col.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// 03b-C · Six-column list — breaks master-detail.
// Design idea: at six columns the list pane can no longer share width with a
// form. The list goes FULL-WIDTH; selecting a row opens a slide-over drawer
// from the right for editing. Every column has sort + (where useful) filter
// affordances. The Active toggle stays inline for instant on/off; full edit
// happens in the drawer.

const SIMPLE_V2_6COL_CATS = ['Pre-Sales', 'Design', 'Compliance', 'Operations', 'Closing'];
const SIMPLE_V2_6COL_OWNERS = ['Marlee K.', 'Brynli C.', 'Ryan F.', 'Kelsie S.'];
const SIMPLE_V2_6COL_SAMPLE = [{
  id: '1',
  name: 'Discovery',
  category: 'Pre-Sales',
  owner: 'Marlee K.',
  usage: 142,
  modified: '2026-04-22',
  active: true
}, {
  id: '2',
  name: 'Design',
  category: 'Design',
  owner: 'Brynli C.',
  usage: 88,
  modified: '2026-04-18',
  active: true
}, {
  id: '3',
  name: 'Permitting',
  category: 'Compliance',
  owner: 'Ryan F.',
  usage: 31,
  modified: '2026-04-14',
  active: true
}, {
  id: '4',
  name: 'Installation',
  category: 'Operations',
  owner: 'Marlee K.',
  usage: 312,
  modified: '2026-04-22',
  active: true
}, {
  id: '5',
  name: 'Commissioning',
  category: 'Operations',
  owner: 'Kelsie S.',
  usage: 67,
  modified: '2026-04-11',
  active: true
}, {
  id: '6',
  name: 'Final Inspection',
  category: 'Compliance',
  owner: 'Ryan F.',
  usage: 124,
  modified: '2026-04-02',
  active: true
}, {
  id: '7',
  name: 'Closeout',
  category: 'Closing',
  owner: 'Brynli C.',
  usage: 56,
  modified: '2026-03-29',
  active: true
}, {
  id: '8',
  name: 'Pre-Sales',
  category: 'Pre-Sales',
  owner: 'Marlee K.',
  usage: 4,
  modified: '2026-02-17',
  active: false
}, {
  id: '9',
  name: 'Lead Qualification',
  category: 'Pre-Sales',
  owner: 'Kelsie S.',
  usage: 0,
  modified: '2026-01-08',
  active: false
}];
const fmtDate = iso => {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

// Small popover wrapper — anchors below the trigger, closes on outside-click.
function Popover({
  open,
  onClose,
  anchorRef,
  align = 'left',
  width = 200,
  children
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDown = e => {
      if (ref.current && ref.current.contains(e.target)) return;
      if (anchorRef?.current && anchorRef.current.contains(e.target)) return;
      onClose();
    };
    window.addEventListener('mousedown', onDown);
    return () => window.removeEventListener('mousedown', onDown);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 'calc(100% + 6px)',
      [align === 'right' ? 'right' : 'left']: -8,
      zIndex: 30,
      minWidth: width,
      background: C.surface,
      border: `1px solid ${C.border}`,
      borderRadius: 6,
      boxShadow: C.shadowLg,
      padding: 6,
      fontFamily: 'inherit'
    }
  }, children);
}
function MultiFilter({
  title,
  options,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      color: C.muted,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '4px 6px 6px'
    }
  }, title), options.map(o => {
    const on = value.has(o);
    return /*#__PURE__*/React.createElement("label", {
      key: o,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 8px',
        borderRadius: 4,
        cursor: 'pointer',
        fontSize: 12.5,
        color: C.ink
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = C.bg;
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: on,
      onChange: () => {
        const n = new Set(value);
        n.has(o) ? n.delete(o) : n.add(o);
        onChange(n);
      },
      style: {
        accentColor: C.brand
      }
    }), o);
  }), value.size > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: C.border,
      margin: '4px 0'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(new Set()),
    style: {
      width: '100%',
      textAlign: 'left',
      background: 'transparent',
      border: 'none',
      padding: '6px 8px',
      fontSize: 12,
      color: C.brand,
      fontFamily: 'inherit',
      cursor: 'pointer',
      fontWeight: 600
    }
  }, "Clear filter")));
}

// Column header cell — title, sort cycle, optional filter funnel.
function ColH({
  label,
  sortKey,
  sort,
  onSort,
  filterable,
  filterActive,
  onFilter,
  align = 'left',
  width,
  flex
}) {
  const active = sort && sort.key === sortKey;
  const dir = active ? sort.dir : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      flex,
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      padding: '0 4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onSort && onSort(sortKey),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 10.5,
      fontWeight: 600,
      color: active ? C.ink : C.muted,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      cursor: onSort ? 'pointer' : 'default',
      userSelect: 'none'
    }
  }, label, onSort && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "10",
    viewBox: "0 0 8 10",
    style: {
      display: 'block',
      opacity: active ? 1 : 0.45
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 0 L8 4 L0 4 Z",
    fill: dir === 'asc' ? C.ink : C.subtle
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 10 L0 6 L8 6 Z",
    fill: dir === 'desc' ? C.ink : C.subtle
  }))), filterable && /*#__PURE__*/React.createElement("button", {
    onClick: onFilter,
    style: {
      background: filterActive ? C.brandSoft : 'transparent',
      border: 'none',
      padding: 2,
      borderRadius: 3,
      cursor: 'pointer',
      color: filterActive ? C.brand : C.muted,
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4h16l-6 9v6l-4-2v-4z"
  }))));
}

// Column widths (used by both header row and body rows so they stay aligned).
const COL = {
  check: {
    width: 36
  },
  name: {
    flex: 1.4,
    minWidth: 180
  },
  category: {
    width: 140
  },
  owner: {
    width: 130
  },
  usage: {
    width: 80,
    align: 'right'
  },
  modified: {
    width: 120
  },
  active: {
    width: 80,
    align: 'right'
  }
};
function SimpleFormPrototypeV2_6Col() {
  const [items, setItems] = React.useState(SIMPLE_V2_6COL_SAMPLE);
  const [editingId, setEditingId] = React.useState(null); // null = drawer closed
  const [filter, setFilter] = React.useState('all');
  const [q, setQ] = React.useState('');
  const [sel, setSel] = React.useState(new Set());
  const [sort, setSort] = React.useState({
    key: 'name',
    dir: 'asc'
  });
  const [catFilter, setCatFilter] = React.useState(new Set());
  const [ownerFilter, setOwnerFilter] = React.useState(new Set());
  const [usageMin, setUsageMin] = React.useState('');
  const [usageMax, setUsageMax] = React.useState('');
  const [openPop, setOpenPop] = React.useState(null); // 'cat' | 'owner' | 'usage' | null

  const catAnchor = React.useRef(null);
  const ownerAnchor = React.useRef(null);
  const usageAnchor = React.useRef(null);
  const [drafts, setDrafts] = React.useState({}); // id -> { name, desc, category, owner }
  const INITIAL_DESCS = {
    '4': 'Standard residential installation item covering panel mounting, electrical work, and inverter setup.'
  };
  const [descs, setDescs] = React.useState(INITIAL_DESCS);
  const [showLog, setShowLog] = React.useState(false);
  const [hoverId, setHoverId] = React.useState(null);
  const cycleSort = key => setSort(s => s.key !== key ? {
    key,
    dir: 'asc'
  } : s.dir === 'asc' ? {
    key,
    dir: 'desc'
  } : {
    key: 'name',
    dir: 'asc'
  });
  const usageMinN = usageMin === '' ? null : Number(usageMin);
  const usageMaxN = usageMax === '' ? null : Number(usageMax);
  const usageFilterActive = usageMinN != null || usageMaxN != null;
  const counts = {
    all: items.length,
    active: items.filter(i => i.active).length,
    inactive: items.filter(i => !i.active).length
  };
  const filtered = items.filter(i => filter === 'all' || (filter === 'active' ? i.active : !i.active)).filter(i => !q || i.name.toLowerCase().includes(q.toLowerCase())).filter(i => catFilter.size === 0 || catFilter.has(i.category)).filter(i => ownerFilter.size === 0 || ownerFilter.has(i.owner)).filter(i => (usageMinN == null || i.usage >= usageMinN) && (usageMaxN == null || i.usage <= usageMaxN)).slice().sort((a, b) => {
    const k = sort.key;
    const av = a[k],
      bv = b[k];
    let cmp;
    if (k === 'active') cmp = av === bv ? 0 : av ? -1 : 1;else if (typeof av === 'number' && typeof bv === 'number') cmp = av - bv;else cmp = (av ?? '').toString().toLowerCase() < (bv ?? '').toString().toLowerCase() ? -1 : (av ?? '').toString().toLowerCase() > (bv ?? '').toString().toLowerCase() ? 1 : 0;
    return sort.dir === 'desc' ? -cmp : cmp;
  });
  const toggle = id => setItems(s => s.map(i => i.id === id ? {
    ...i,
    active: !i.active
  } : i));
  const toggleSel = id => setSel(s => {
    const n = new Set(s);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  });
  const allFilteredSelected = filtered.length > 0 && filtered.every(i => sel.has(i.id));
  const selectAllFiltered = () => setSel(s => {
    const n = new Set(s);
    if (allFilteredSelected) filtered.forEach(i => n.delete(i.id));else filtered.forEach(i => n.add(i.id));
    return n;
  });
  const bulk = active => {
    setItems(s => s.map(i => sel.has(i.id) ? {
      ...i,
      active
    } : i));
    setSel(new Set());
  };
  const selectedRows = items.filter(i => sel.has(i.id));
  const allSelectedActive = selectedRows.every(i => i.active);
  const allSelectedInactive = selectedRows.every(i => !i.active);

  // Drawer state for editing
  const editing = items.find(i => i.id === editingId);
  const canonicalName = id => items.find(i => i.id === id)?.name ?? '';
  const canonicalCat = id => items.find(i => i.id === id)?.category ?? '';
  const canonicalOwn = id => items.find(i => i.id === id)?.owner ?? '';
  const canonicalDesc = id => descs[id] ?? '';
  const isDirtyId = id => !!drafts[id];
  const eName = editingId ? drafts[editingId]?.name ?? canonicalName(editingId) : '';
  const eDesc = editingId ? drafts[editingId]?.desc ?? canonicalDesc(editingId) : '';
  const eCat = editingId ? drafts[editingId]?.category ?? canonicalCat(editingId) : '';
  const eOwn = editingId ? drafts[editingId]?.owner ?? canonicalOwn(editingId) : '';
  const updateDraft = patch => {
    if (!editingId) return;
    setDrafts(s => {
      const cN = canonicalName(editingId);
      const cD = canonicalDesc(editingId);
      const cC = canonicalCat(editingId);
      const cO = canonicalOwn(editingId);
      const cur = s[editingId] ?? {
        name: cN,
        desc: cD,
        category: cC,
        owner: cO
      };
      const next = {
        ...cur,
        ...patch
      };
      if (next.name === cN && next.desc === cD && next.category === cC && next.owner === cO) {
        const {
          [editingId]: _,
          ...rest
        } = s;
        return rest;
      }
      return {
        ...s,
        [editingId]: next
      };
    });
  };
  const handleSave = () => {
    const dirtyIds = Object.keys(drafts);
    if (dirtyIds.length === 0) return;
    setItems(s => s.map(i => drafts[i.id] ? {
      ...i,
      name: drafts[i.id].name.trim() || i.name,
      category: drafts[i.id].category,
      owner: drafts[i.id].owner,
      modified: new Date().toISOString().slice(0, 10)
    } : i));
    setDescs(s => {
      const next = {
        ...s
      };
      for (const id of dirtyIds) next[id] = drafts[id].desc;
      return next;
    });
    setDrafts({});
    setEditingId(null);
  };
  return /*#__PURE__*/React.createElement(FormCard, {
    title: "Standard Template",
    width: 1280,
    height: 720,
    style: {
      borderRadius: 6
    },
    headerStyle: {
      padding: '0 18px',
      height: 45,
      background: C.bg
    },
    headerExtras: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: C.subtle
      }
    }, "Last edited by Marlee K. \xB7 Apr 22, 2026"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        height: 16,
        background: C.border
      }
    }), /*#__PURE__*/React.createElement(LinkBtn, {
      icon: /*#__PURE__*/React.createElement(I.history, {
        size: 13
      }),
      muted: true,
      onClick: () => setShowLog(true)
    }, "Change Log"), /*#__PURE__*/React.createElement(LinkBtn, {
      icon: /*#__PURE__*/React.createElement(I.upload, {
        size: 13
      }),
      muted: true
    }, "Import"), /*#__PURE__*/React.createElement(LinkBtn, {
      icon: /*#__PURE__*/React.createElement(I.download, {
        size: 13
      }),
      muted: true
    }, "Export")),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: C.subtle
      }
    }, filtered.length, " of ", items.length, " items"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), Object.keys(drafts).length > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: C.amber,
        fontWeight: 600
      }
    }, "\xB7 Unsaved changes in ", Object.keys(drafts).length, " row", Object.keys(drafts).length === 1 ? '' : 's'), /*#__PURE__*/React.createElement(Btn, {
      size: "md",
      kind: "secondary",
      leftIcon: /*#__PURE__*/React.createElement(I.x, {
        style: {
          transform: 'translateY(1px)'
        }
      }),
      style: {
        minWidth: 85
      }
    }, "Close"), /*#__PURE__*/React.createElement(Btn, {
      size: "md",
      kind: "action",
      leftIcon: /*#__PURE__*/React.createElement(I.save, null),
      onClick: handleSave,
      disabled: Object.keys(drafts).length === 0,
      style: {
        minWidth: 85
      }
    }, "Save"))
  }, showLog && /*#__PURE__*/React.createElement(ChangeLogModal, {
    onClose: () => setShowLog(false)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      background: C.bg,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      borderBottom: `1px solid ${C.border}`,
      background: C.surface
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search items\u2026",
    prefix: /*#__PURE__*/React.createElement(I.search, {
      size: 14
    }),
    style: {
      width: 280,
      height: 32
    }
  }), /*#__PURE__*/React.createElement(Segmented, {
    size: "sm",
    value: filter,
    onChange: setFilter,
    options: [{
      value: 'all',
      label: `All ${counts.all}`
    }, {
      value: 'active',
      label: `Active ${counts.active}`
    }, {
      value: 'inactive',
      label: `Inactive ${counts.inactive}`
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Btn, {
    size: "md",
    kind: "action",
    leftIcon: /*#__PURE__*/React.createElement(I.plus, null)
  }, "New")), sel.size > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '0 18px',
      height: 38,
      background: C.brandSoft,
      borderBottom: `1px solid ${C.brandBorder}`
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: allFilteredSelected,
    ref: el => {
      if (el) el.indeterminate = !allFilteredSelected && sel.size > 0;
    },
    onChange: selectAllFiltered,
    style: {
      accentColor: C.brand
    }
  }), /*#__PURE__*/React.createElement("span", {
    onClick: () => setSel(new Set()),
    style: {
      fontSize: 12,
      color: C.brand,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, sel.size, " Selected"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(LinkBtn, {
    icon: /*#__PURE__*/React.createElement(I.check, {
      size: 13
    }),
    onClick: () => bulk(true),
    disabled: allSelectedActive
  }, "Activate"), /*#__PURE__*/React.createElement(LinkBtn, {
    icon: /*#__PURE__*/React.createElement(I.archive, {
      size: 13
    }),
    onClick: () => bulk(false),
    disabled: allSelectedInactive
  }, "Deactivate"), /*#__PURE__*/React.createElement(LinkBtn, {
    onClick: () => setSel(new Set()),
    muted: true
  }, "Clear")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 18px',
      height: 38,
      background: '#FAFAF7',
      borderBottom: `1px solid ${C.border}`,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: COL.check.width,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: false,
    onChange: selectAllFiltered,
    style: {
      accentColor: C.brand
    }
  })), /*#__PURE__*/React.createElement(ColH, _extends({
    label: "Name"
  }, COL.name, {
    sortKey: "name",
    sort: sort,
    onSort: cycleSort
  })), /*#__PURE__*/React.createElement("div", {
    ref: catAnchor,
    style: {
      position: 'relative',
      ...COL.category,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(ColH, _extends({
    label: "Category"
  }, COL.category, {
    sortKey: "category",
    sort: sort,
    onSort: cycleSort,
    filterable: true,
    filterActive: catFilter.size > 0,
    onFilter: () => setOpenPop(openPop === 'cat' ? null : 'cat')
  })), /*#__PURE__*/React.createElement(Popover, {
    open: openPop === 'cat',
    onClose: () => setOpenPop(null),
    anchorRef: catAnchor,
    width: 180
  }, /*#__PURE__*/React.createElement(MultiFilter, {
    title: "Filter by category",
    options: SIMPLE_V2_6COL_CATS,
    value: catFilter,
    onChange: setCatFilter
  }))), /*#__PURE__*/React.createElement("div", {
    ref: ownerAnchor,
    style: {
      position: 'relative',
      ...COL.owner,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(ColH, _extends({
    label: "Owner"
  }, COL.owner, {
    sortKey: "owner",
    sort: sort,
    onSort: cycleSort,
    filterable: true,
    filterActive: ownerFilter.size > 0,
    onFilter: () => setOpenPop(openPop === 'owner' ? null : 'owner')
  })), /*#__PURE__*/React.createElement(Popover, {
    open: openPop === 'owner',
    onClose: () => setOpenPop(null),
    anchorRef: ownerAnchor,
    width: 180
  }, /*#__PURE__*/React.createElement(MultiFilter, {
    title: "Filter by owner",
    options: SIMPLE_V2_6COL_OWNERS,
    value: ownerFilter,
    onChange: setOwnerFilter
  }))), /*#__PURE__*/React.createElement("div", {
    ref: usageAnchor,
    style: {
      position: 'relative',
      ...COL.usage,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(ColH, _extends({
    label: "Usage"
  }, COL.usage, {
    sortKey: "usage",
    sort: sort,
    onSort: cycleSort,
    filterable: true,
    filterActive: usageFilterActive,
    onFilter: () => setOpenPop(openPop === 'usage' ? null : 'usage')
  })), /*#__PURE__*/React.createElement(Popover, {
    open: openPop === 'usage',
    onClose: () => setOpenPop(null),
    anchorRef: usageAnchor,
    align: "right",
    width: 220
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 4px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      color: C.muted,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      marginBottom: 8,
      padding: '4px 6px 0'
    }
  }, "Usage range"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      padding: '0 4px 4px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: usageMin,
    onChange: e => setUsageMin(e.target.value.replace(/[^0-9]/g, '')),
    placeholder: "Min",
    style: {
      flex: 1,
      height: 28
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: C.muted
    }
  }, "\u2013"), /*#__PURE__*/React.createElement(Input, {
    value: usageMax,
    onChange: e => setUsageMax(e.target.value.replace(/[^0-9]/g, '')),
    placeholder: "Max",
    style: {
      flex: 1,
      height: 28
    }
  })), usageFilterActive && /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setUsageMin('');
      setUsageMax('');
    },
    style: {
      width: '100%',
      textAlign: 'left',
      background: 'transparent',
      border: 'none',
      padding: '6px 10px',
      fontSize: 12,
      color: C.brand,
      fontFamily: 'inherit',
      cursor: 'pointer',
      fontWeight: 600
    }
  }, "Clear filter")))), /*#__PURE__*/React.createElement(ColH, _extends({
    label: "Modified"
  }, COL.modified, {
    sortKey: "modified",
    sort: sort,
    onSort: cycleSort
  })), /*#__PURE__*/React.createElement(ColH, _extends({
    label: "Active"
  }, COL.active, {
    sortKey: "active",
    sort: sort,
    onSort: cycleSort,
    align: "right"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 14
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      background: C.surface
    }
  }, filtered.map(it => {
    const isSel = editingId === it.id;
    const isChecked = sel.has(it.id);
    const isHover = hoverId === it.id && !isSel;
    const showUnsaved = isDirtyId(it.id);
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      onMouseEnter: () => setHoverId(it.id),
      onMouseLeave: () => setHoverId(s => s === it.id ? null : s),
      onClick: () => setEditingId(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '0 18px',
        height: 42,
        borderBottom: `1px solid ${C.border}`,
        background: isSel ? C.brandSoft : isChecked ? '#FFF8F2' : isHover ? '#FAFAF7' : 'transparent',
        boxShadow: isSel ? `inset 3px 0 0 ${C.brand}` : 'none',
        cursor: 'pointer',
        transition: 'background .08s'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: COL.check.width,
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: isChecked,
      onChange: () => toggleSel(it.id),
      onClick: e => e.stopPropagation(),
      style: {
        accentColor: C.brand
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        ...COL.name,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '0 4px',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: isSel ? C.ink : it.active ? C.ink : C.muted,
        fontWeight: isSel ? 600 : 500,
        letterSpacing: isSel ? '-0.005em' : '0',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, it.name), showUnsaved && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        color: C.amber,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        padding: '2px 6px',
        background: C.amberSoft,
        border: `1px solid #EBD2A0`,
        borderRadius: 3,
        lineHeight: 1,
        flex: '0 0 auto'
      }
    }, "Unsaved")), /*#__PURE__*/React.createElement("div", {
      style: {
        ...COL.category,
        display: 'flex',
        alignItems: 'center',
        padding: '0 4px'
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      tone: "neutral"
    }, it.category)), /*#__PURE__*/React.createElement("div", {
      style: {
        ...COL.owner,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '0 4px',
        fontSize: 12.5,
        color: it.active ? C.text : C.subtle
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        borderRadius: '50%',
        background: C.brandSoft,
        color: C.brand,
        fontSize: 10.5,
        fontWeight: 700,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        letterSpacing: 0,
        flex: '0 0 auto'
      }
    }, it.owner.split(' ').map(p => p[0]).join('').slice(0, 2)), /*#__PURE__*/React.createElement("span", {
      style: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, it.owner)), /*#__PURE__*/React.createElement("div", {
      style: {
        ...COL.usage,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 4px',
        fontVariantNumeric: 'tabular-nums',
        fontSize: 13,
        color: it.active ? C.text : C.subtle
      }
    }, it.usage.toLocaleString()), /*#__PURE__*/React.createElement("div", {
      style: {
        ...COL.modified,
        display: 'flex',
        alignItems: 'center',
        padding: '0 4px',
        fontSize: 12.5,
        color: C.muted
      }
    }, fmtDate(it.modified)), /*#__PURE__*/React.createElement("div", {
      style: {
        ...COL.active,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 4px'
      },
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement(Toggle, {
      checked: it.active,
      onChange: () => toggle(it.id),
      size: "sm"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 14,
        display: 'flex',
        justifyContent: 'flex-end',
        color: isSel ? C.brand : C.muted,
        visibility: isSel || isHover ? 'visible' : 'hidden'
      }
    }, /*#__PURE__*/React.createElement(I.chevRight, {
      size: 14
    })));
  }), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 18px',
      textAlign: 'center',
      fontSize: 13,
      color: C.subtle
    }
  }, "No items match the current filters.")), editing && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: 480,
      background: C.surface,
      borderLeft: `1px solid ${C.border}`,
      boxShadow: '-12px 0 32px rgba(20,16,10,0.10), -2px 0 6px rgba(20,16,10,0.06)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 5,
      animation: 'slideIn 0.18s ease-out'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes slideIn { from { transform: translateX(20px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 22px',
      borderBottom: `1px solid ${C.border}`,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: C.subtle,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      marginBottom: 4,
      fontWeight: 500
    }
  }, "Editing"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: C.ink,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, eName || 'Untitled item')), /*#__PURE__*/React.createElement(Pill, {
    tone: editing.active ? 'active' : 'inactive'
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: editing.active ? C.green : C.subtle
    }
  }), editing.active ? 'Active' : 'Inactive'), /*#__PURE__*/React.createElement("button", {
    onClick: () => setEditingId(null),
    style: {
      width: 28,
      height: 28,
      borderRadius: 6,
      border: 'none',
      background: 'transparent',
      color: C.muted,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(I.x, {
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '22px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: eName,
    onChange: e => updateDraft({
      name: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Category"
  }, /*#__PURE__*/React.createElement(Select, {
    value: eCat,
    onChange: e => updateDraft({
      category: e.target.value
    }),
    options: SIMPLE_V2_6COL_CATS
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Owner"
  }, /*#__PURE__*/React.createElement(Select, {
    value: eOwn,
    onChange: e => updateDraft({
      owner: e.target.value
    }),
    options: SIMPLE_V2_6COL_OWNERS
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Description"
  }, /*#__PURE__*/React.createElement(Textarea, {
    value: eDesc,
    onChange: e => updateDraft({
      desc: e.target.value
    }),
    rows: 5
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14,
      paddingTop: 8,
      borderTop: `1px solid ${C.border}`
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Usage"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 34,
      display: 'flex',
      alignItems: 'center',
      fontSize: 13,
      color: C.muted,
      fontVariantNumeric: 'tabular-nums'
    }
  }, editing.usage.toLocaleString(), " references")), /*#__PURE__*/React.createElement(Field, {
    label: "Last modified"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 34,
      display: 'flex',
      alignItems: 'center',
      fontSize: 13,
      color: C.muted
    }
  }, fmtDate(editing.modified))))))));
}
window.SimpleFormPrototypeV2_6Col = SimpleFormPrototypeV2_6Col;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-settings/simpleForm-v2-6col.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-settings/simpleForm-v2-inventory.jsx
try { (() => {
// 03b-D · Inventory Settings — 03b-C with a wider drawer and the screenshot's
// columns/data + larger form.
//
// Design: keeps 03b-C's pattern intact — full-width data table; slide-over
// drawer from the right for editing. The drawer is widened to ~760px so the
// 20-field Inventory form fits comfortably in two columns without scrolling.

const INV_CATEGORIES = ['Racking', 'Electrical & Misc', 'Optimizer', 'Battery', 'Inverter', 'Module'];
const INV_VENDOR_OPTS = ['GreenTech - Dallas', 'GreenTech - Houston', 'GreenTech - Denver', 'GreenTech - Colorado Springs', 'GreenTech - Fort Collins', 'GreenTech - Pueblo', 'GreenTech - Ohio', 'Solrite', 'ABC Supply - Dallas', 'ABC Supply - Houston'];
const INV_MFRS = ['SnapNRack', 'Unirac', 'Enphase', 'SolarEdge', 'Duracell', 'GreenTech', 'Tesla', 'Generac'];
const INV_SAMPLE = [{
  id: '1',
  name: 'DOMESTIC UNIVERSAL END CLAMP',
  partNumber: 'SNRAC 242-02215-USA',
  vendor: ['GreenTech - Dallas', 'GreenTech - Colorado Springs', 'GreenTech - Denver', 'GreenTech - Fort Collins', 'GreenTech - Houston', 'GreenTech - Ohio', 'GreenTech - Pueblo'],
  category: 'Racking',
  active: true
}, {
  id: '2',
  name: 'DOMESTIC UNIVERSAL MLPE MOUNT',
  partNumber: 'UNIRC MLPEMNT-US',
  vendor: ['GreenTech - Colorado Springs', 'GreenTech - Dallas', 'GreenTech - Denver', 'GreenTech - Fort Collins', 'GreenTech - Houston', 'GreenTech - Ohio', 'GreenTech - Pueblo'],
  category: 'Racking',
  active: true
}, {
  id: '3',
  name: 'DOMESTIC UR-45 RAIL 172" – MILL',
  partNumber: 'SNRAC 232-10095-USA',
  vendor: ['GreenTech - Colorado Springs', 'GreenTech - Dallas', 'GreenTech - Denver', 'GreenTech - Fort Collins', 'GreenTech - Houston', 'GreenTech - Ohio', 'GreenTech - Pueblo'],
  category: 'Racking',
  active: true
}, {
  id: '4',
  name: 'DOMESTICNXT MLPE & GROUND LUG CLAMP',
  partNumber: 'UNIRC NULGMLP1',
  vendor: ['GreenTech - Denver', 'GreenTech - Dallas', 'GreenTech - Colorado Springs', 'GreenTech - Fort Collins', 'GreenTech - Houston', 'GreenTech - Ohio', 'GreenTech - Pueblo'],
  category: 'Racking',
  active: true
}, {
  id: '5',
  name: 'DU222RBUP',
  partNumber: 'DU222RBUP',
  vendor: ['GreenTech - Denver', 'GreenTech - Dallas', 'GreenTech - Colorado Springs', 'GreenTech - Fort Collins', 'GreenTech - Houston', 'GreenTech - Ohio', 'GreenTech - Pueblo'],
  category: 'Electrical & Misc',
  active: true
}, {
  id: '6',
  name: 'Duracell Cable End Cap',
  partNumber: 'Duracell Cable End Cap',
  vendor: ['Solrite', 'ABC Supply - Dallas', 'ABC Supply - Houston'],
  category: 'Electrical & Misc',
  active: true
}, {
  id: '7',
  name: 'DURACELL DTU PRO CELLULAR PC-PRO-C',
  partNumber: '111DCPCPC',
  vendor: ['ABC Supply - Dallas', 'ABC Supply - Houston'],
  category: 'Electrical & Misc',
  active: true
}, {
  id: '8',
  name: 'Duracell Dual Microinverter',
  partNumber: 'Duracell Dual Microinverter',
  vendor: ['Solrite', 'ABC Supply - Dallas', 'ABC Supply - Houston'],
  category: 'Optimizer',
  active: true
}, {
  id: '9',
  name: 'Duracell Meter & Comms (RGM)',
  partNumber: 'Duracell Meter & Comms (RGM)',
  vendor: ['Solrite', 'ABC Supply - Dallas', 'ABC Supply - Houston'],
  category: 'Electrical & Misc',
  active: true
}, {
  id: '10',
  name: 'Duracell Single Microinverter',
  partNumber: 'Duracell Single Microinverter',
  vendor: ['Solrite', 'ABC Supply - Dallas', 'ABC Supply - Houston'],
  category: 'Optimizer',
  active: true
}, {
  id: '11',
  name: 'Duracell Trunk Cable',
  partNumber: 'Duracell Trunk Cable',
  vendor: ['Solrite', 'ABC Supply - Dallas', 'ABC Supply - Houston'],
  category: 'Electrical & Misc',
  active: false
}, {
  id: '12',
  name: 'Duracell Wifi-DTU',
  partNumber: 'Duracell Wifi-DTU',
  vendor: ['Solrite', 'ABC Supply - Dallas', 'ABC Supply - Houston'],
  category: 'Electrical & Misc',
  active: false
}, {
  id: '13',
  name: "EMT 3/4\" x 10' Conduit",
  partNumber: 'COND EMT-3/4',
  vendor: ['GreenTech - Denver', 'GreenTech - Dallas', 'GreenTech - Colorado Springs', 'GreenTech - Fort Collins', 'GreenTech - Houston', 'GreenTech - Ohio', 'GreenTech - Pueblo'],
  category: 'Electrical & Misc',
  active: true
}, {
  id: '14',
  name: 'ENERGY BANK 10 KWH BATTERY',
  partNumber: 'SOLED BAT-10K1PS0B-02',
  vendor: ['GreenTech - Colorado Springs', 'GreenTech - Dallas', 'GreenTech - Denver', 'GreenTech - Fort Collins', 'GreenTech - Houston', 'GreenTech - Ohio', 'GreenTech - Pueblo'],
  category: 'Battery',
  active: true
}, {
  id: '15',
  name: 'ENPHASE FIELD WIREABLE PLUG TYPE CONNECTOR',
  partNumber: 'Q-CONN-10M',
  vendor: ['GreenTech - Denver', 'GreenTech - Fort Collins', 'GreenTech - Colorado Springs', 'GreenTech - Pueblo'],
  category: 'Electrical & Misc',
  active: true
}, {
  id: '16',
  name: 'ENPHASE FIELD WIREABLE SOCKET CONNECTOR',
  partNumber: 'Q-CONN-10F',
  vendor: ['GreenTech - Denver', 'GreenTech - Colorado Springs', 'GreenTech - Fort Collins', 'GreenTech - Pueblo'],
  category: 'Electrical & Misc',
  active: true
}, {
  id: '17',
  name: 'ENPHASE IQ BATTERY 5P',
  partNumber: 'ENP IQBATTERY-5P-1P-NA',
  vendor: ['GreenTech - Colorado Springs', 'GreenTech - Denver', 'GreenTech - Fort Collins', 'GreenTech - Pueblo'],
  category: 'Battery',
  active: true
}, {
  id: '18',
  name: 'ENPHASE IQ COMBINER 5C HDK',
  partNumber: 'X-IQ-AM1-240-5C-HDK',
  vendor: ['GreenTech - Colorado Springs', 'GreenTech - Dallas', 'GreenTech - Denver', 'GreenTech - Fort Collins', 'GreenTech - Houston', 'GreenTech - Ohio', 'GreenTech - Pueblo'],
  category: 'Battery',
  active: true
}, {
  id: '19',
  name: 'ENPHASE IQ SYSTEM CONTROLLER 3',
  partNumber: 'ENP SC200D111C240US01',
  vendor: ['GreenTech - Colorado Springs', 'GreenTech - Dallas', 'GreenTech - Denver', 'GreenTech - Fort Collins', 'GreenTech - Houston', 'GreenTech - Ohio', 'GreenTech - Pueblo'],
  category: 'Battery',
  active: true
}, {
  id: '20',
  name: 'ENPHASE Q-TERM-01 TERMINATOR CAP FOR Q CABLE ENDS',
  partNumber: 'Q-TERM-10',
  vendor: ['GreenTech - Colorado Springs', 'GreenTech - Dallas', 'GreenTech - Denver', 'GreenTech - Fort Collins', 'GreenTech - Houston', 'GreenTech - Ohio', 'GreenTech - Pueblo'],
  category: 'Electrical & Misc',
  active: false
}];

// ─── Popover + MultiFilter (local copies — scoped to this script) ─────
function InvPopover({
  open,
  onClose,
  anchorRef,
  align = 'left',
  width = 220,
  children
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDown = e => {
      if (ref.current && ref.current.contains(e.target)) return;
      if (anchorRef?.current && anchorRef.current.contains(e.target)) return;
      onClose();
    };
    window.addEventListener('mousedown', onDown);
    return () => window.removeEventListener('mousedown', onDown);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 'calc(100% + 6px)',
      [align === 'right' ? 'right' : 'left']: 0,
      zIndex: 30,
      minWidth: width,
      maxHeight: 320,
      overflow: 'auto',
      background: C.surface,
      border: `1px solid ${C.border}`,
      borderRadius: 6,
      boxShadow: C.shadowLg,
      padding: 6,
      fontFamily: 'inherit'
    }
  }, children);
}
function InvMultiFilter({
  title,
  options,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      color: C.muted,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '4px 6px 6px'
    }
  }, title), options.map(o => {
    const on = value.has(o);
    return /*#__PURE__*/React.createElement("label", {
      key: o,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 8px',
        borderRadius: 4,
        cursor: 'pointer',
        fontSize: 12.5,
        color: C.ink
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = C.bg;
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: on,
      onChange: () => {
        const n = new Set(value);
        n.has(o) ? n.delete(o) : n.add(o);
        onChange(n);
      },
      style: {
        accentColor: C.brand
      }
    }), o);
  }), value.size > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: C.border,
      margin: '4px 0'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(new Set()),
    style: {
      width: '100%',
      textAlign: 'left',
      background: 'transparent',
      border: 'none',
      padding: '6px 8px',
      fontSize: 12,
      color: C.brand,
      fontFamily: 'inherit',
      cursor: 'pointer',
      fontWeight: 600
    }
  }, "Clear filter")));
}

// Column header matching the screenshot: title, gear, sort arrows, filter dots.
function InvColH({
  label,
  sortKey,
  sort,
  onSort,
  filterable,
  filterActive,
  onFilter,
  width,
  flex,
  align = 'left'
}) {
  const active = sort && sort.key === sortKey;
  const dir = active ? sort.dir : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      flex,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 12px',
      justifyContent: align === 'right' ? 'flex-end' : 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onSort && onSort(sortKey),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12.5,
      fontWeight: 600,
      color: C.ink,
      letterSpacing: '-0.005em',
      cursor: onSort ? 'pointer' : 'default',
      userSelect: 'none'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: C.subtle
    }
  }, /*#__PURE__*/React.createElement(I.cog, {
    size: 12
  }), onSort && /*#__PURE__*/React.createElement("span", {
    onClick: () => onSort(sortKey),
    style: {
      cursor: 'pointer',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "10",
    viewBox: "0 0 8 10",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 0 L8 4 L0 4 Z",
    fill: dir === 'asc' ? C.ink : C.subtle,
    opacity: dir === 'asc' ? 1 : 0.65
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 10 L0 6 L8 6 Z",
    fill: dir === 'desc' ? C.ink : C.subtle,
    opacity: dir === 'desc' ? 1 : 0.65
  }))), filterable ? /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onFilter && onFilter();
    },
    style: {
      background: filterActive ? C.brandSoft : 'transparent',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      color: filterActive ? C.brand : C.subtle,
      display: 'inline-flex',
      borderRadius: 3
    }
  }, /*#__PURE__*/React.createElement(I.dots, {
    size: 12
  })) : /*#__PURE__*/React.createElement(I.dots, {
    size: 12
  })));
}

// Column widths (header + body kept aligned). Vendor flexes to fill the rest;
// rows truncate with ellipsis if the list is longer than the column.
const INV_COL = {
  check: 36,
  name: 420,
  part: 260,
  category: 140,
  active: 80
};
function SimpleFormPrototypeInventory() {
  const [items, setItems] = React.useState(INV_SAMPLE);
  const [editingId, setEditingId] = React.useState(null);
  const [drawerMode, setDrawerMode] = React.useState('add'); // 'add' | 'edit' | 'copy'
  // Drawer animation state: `mounted` keeps it in the tree during the slide-out;
  // `open` toggles the transform that drives the transition.
  const [drawerMounted, setDrawerMounted] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [q, setQ] = React.useState('');
  const [filter, setFilter] = React.useState('all'); // 'all' | 'active' | 'inactive'
  const [sel, setSel] = React.useState(new Set());
  const [sort, setSort] = React.useState({
    key: 'name',
    dir: 'asc'
  });
  const [showLog, setShowLog] = React.useState(false);
  const [hoverId, setHoverId] = React.useState(null);
  const [importOpen, setImportOpen] = React.useState(false);
  const importRef = React.useRef(null);
  const [exportOpen, setExportOpen] = React.useState(false);
  const exportRef = React.useRef(null);
  React.useEffect(() => {
    if (!importOpen) return;
    const onDown = e => {
      if (importRef.current && !importRef.current.contains(e.target)) setImportOpen(false);
    };
    window.addEventListener('mousedown', onDown);
    return () => window.removeEventListener('mousedown', onDown);
  }, [importOpen]);
  React.useEffect(() => {
    if (!exportOpen) return;
    const onDown = e => {
      if (exportRef.current && !exportRef.current.contains(e.target)) setExportOpen(false);
    };
    window.addEventListener('mousedown', onDown);
    return () => window.removeEventListener('mousedown', onDown);
  }, [exportOpen]);
  const [catFilter, setCatFilter] = React.useState(new Set());
  const [vendorFilter, setVendorFilter] = React.useState(new Set());
  const [openPop, setOpenPop] = React.useState(null); // 'cat' | 'vendor' | null
  const catAnchor = React.useRef(null);
  const vendorAnchor = React.useRef(null);
  const cycleSort = key => setSort(s => s.key !== key ? {
    key,
    dir: 'asc'
  } : s.dir === 'asc' ? {
    key,
    dir: 'desc'
  } : {
    key: 'name',
    dir: 'asc'
  });
  const counts = {
    all: items.length,
    active: items.filter(i => i.active).length,
    inactive: items.filter(i => !i.active).length
  };
  const toggleActive = id => setItems(s => s.map(i => i.id === id ? {
    ...i,
    active: !i.active
  } : i));
  const filtered = items.filter(i => filter === 'all' || (filter === 'active' ? i.active : !i.active)).filter(i => !q || i.name.toLowerCase().includes(q.toLowerCase()) || i.partNumber.toLowerCase().includes(q.toLowerCase())).filter(i => catFilter.size === 0 || catFilter.has(i.category)).filter(i => vendorFilter.size === 0 || i.vendor.some(v => vendorFilter.has(v))).slice().sort((a, b) => {
    // Inactive rows always sink to the bottom regardless of the chosen sort.
    if (a.active !== b.active) return a.active ? -1 : 1;
    const k = sort.key;
    let av = a[k],
      bv = b[k];
    if (k === 'active') {
      const cmp = av === bv ? 0 : av ? -1 : 1;
      return sort.dir === 'desc' ? -cmp : cmp;
    }
    if (Array.isArray(av)) av = av.join(', ');
    if (Array.isArray(bv)) bv = bv.join(', ');
    const cmp = (av ?? '').toString().toLowerCase() < (bv ?? '').toString().toLowerCase() ? -1 : (av ?? '').toString().toLowerCase() > (bv ?? '').toString().toLowerCase() ? 1 : 0;
    return sort.dir === 'desc' ? -cmp : cmp;
  });
  const toggleSel = id => setSel(s => {
    const n = new Set(s);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  });
  const allFilteredSelected = filtered.length > 0 && filtered.every(i => sel.has(i.id));
  const selectAllFiltered = () => setSel(s => {
    const n = new Set(s);
    if (allFilteredSelected) filtered.forEach(i => n.delete(i.id));else filtered.forEach(i => n.add(i.id));
    return n;
  });
  const openAdd = () => {
    setEditingId('__new__');
    setDrawerMode('add');
    openDrawerAnim();
  };
  const openEdit = id => {
    setEditingId(id);
    setDrawerMode('edit');
    openDrawerAnim();
  };
  const openDrawerAnim = () => {
    setDrawerMounted(true);
    // Two rAFs ensure the element renders at translateX(100%) first,
    // then transitions to translateX(0) so the slide-in is visible.
    requestAnimationFrame(() => requestAnimationFrame(() => setDrawerOpen(true)));
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
    setTimeout(() => {
      setDrawerMounted(false);
      setEditingId(null);
    }, 240);
  };
  const duplicateCurrent = () => {
    if (!editingId || editingId === '__new__') return;
    const src = items.find(i => i.id === editingId);
    if (!src) return;
    const newId = 'd' + Date.now();
    const newItem = {
      ...src,
      id: newId,
      name: src.name + ' (Copy)'
    };
    setItems(s => [newItem, ...s]);
    setEditingId(newId);
    setDrawerMode('edit');
  };
  const editing = items.find(i => i.id === editingId);
  return /*#__PURE__*/React.createElement(FormCard, {
    title: "Inventory Settings - Renewable Energy",
    width: 1680,
    height: 920,
    style: {
      borderRadius: 6
    },
    headerStyle: {
      padding: '0 18px',
      height: 48,
      background: C.bg
    },
    headerExtras: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: C.subtle
      }
    }, "Last edited by Marlee K. \xB7 Apr 22, 2026"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        height: 16,
        background: C.border
      }
    }), /*#__PURE__*/React.createElement(LinkBtn, {
      icon: /*#__PURE__*/React.createElement(I.history, {
        size: 13
      }),
      muted: true,
      onClick: () => setShowLog(true)
    }, "Change Log"), /*#__PURE__*/React.createElement("div", {
      ref: importRef,
      style: {
        position: 'relative',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(LinkBtn, {
      icon: /*#__PURE__*/React.createElement(I.upload, {
        size: 13
      }),
      muted: true,
      onClick: () => setImportOpen(o => !o),
      rightIcon: /*#__PURE__*/React.createElement(I.chevDown, {
        size: 11
      })
    }, "Import"), importOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 'calc(100% + 6px)',
        right: 0,
        zIndex: 20,
        minWidth: 200,
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 6,
        boxShadow: C.shadowLg,
        overflow: 'hidden',
        fontFamily: 'inherit'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setImportOpen(false),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        padding: '9px 12px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'inherit',
        fontSize: 12.5,
        color: C.ink
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = C.bg;
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(I.download, {
      size: 14,
      style: {
        color: C.muted
      }
    }), "Download Import Template"), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: C.border
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => setImportOpen(false),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        padding: '9px 12px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'inherit',
        fontSize: 12.5,
        color: C.ink
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = C.bg;
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(I.upload, {
      size: 14,
      style: {
        color: C.muted
      }
    }), "Import from XLS"))), /*#__PURE__*/React.createElement("div", {
      ref: exportRef,
      style: {
        position: 'relative',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(LinkBtn, {
      icon: /*#__PURE__*/React.createElement(I.download, {
        size: 13
      }),
      muted: true,
      onClick: () => setExportOpen(o => !o),
      rightIcon: /*#__PURE__*/React.createElement(I.chevDown, {
        size: 11
      })
    }, "Export"), exportOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 'calc(100% + 6px)',
        right: 0,
        zIndex: 20,
        minWidth: 200,
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 6,
        boxShadow: C.shadowLg,
        overflow: 'hidden',
        fontFamily: 'inherit'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setExportOpen(false),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        padding: '9px 12px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'inherit',
        fontSize: 12.5,
        color: C.ink
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = C.bg;
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(I.sheet, {
      size: 14,
      style: {
        color: C.muted
      }
    }), "Export to XLS"), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: C.border
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => setExportOpen(false),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        padding: '9px 12px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'inherit',
        fontSize: 12.5,
        color: C.ink
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = C.bg;
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(I.file, {
      size: 14,
      style: {
        color: C.muted
      }
    }), "Export to CSV"))))
  }, showLog && /*#__PURE__*/React.createElement(ChangeLogModal, {
    onClose: () => setShowLog(false)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      background: C.bg,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      borderBottom: `1px solid ${C.border}`,
      background: C.surface
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search\u2026",
    prefix: /*#__PURE__*/React.createElement(I.search, {
      size: 14
    }),
    style: {
      width: 446,
      height: 32
    }
  }), /*#__PURE__*/React.createElement(Btn, {
    size: "md",
    kind: "primary",
    leftIcon: /*#__PURE__*/React.createElement(I.plus, null),
    onClick: openAdd,
    style: {
      background: C.brand,
      border: `1px solid ${C.brandHover}`,
      minWidth: 85
    }
  }, "New")), /*#__PURE__*/React.createElement(Segmented, {
    size: "sm",
    value: filter,
    onChange: setFilter,
    options: [{
      value: 'all',
      label: `All ${counts.all}`
    }, {
      value: 'active',
      label: `Active ${counts.active}`
    }, {
      value: 'inactive',
      label: `Inactive ${counts.inactive}`
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: C.muted,
      fontWeight: 600
    }
  }, "DCR: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.ink,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "0%"))), sel.size > 0 ? (() => {
    const selectedRows = items.filter(i => sel.has(i.id));
    const allSelectedActive = selectedRows.every(i => i.active);
    const allSelectedInactive = selectedRows.every(i => !i.active);
    const bulk = active => {
      setItems(s => s.map(i => sel.has(i.id) ? {
        ...i,
        active
      } : i));
      setSel(new Set());
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '0 16px',
        height: 40,
        background: C.brandSoft,
        borderBottom: `1px solid ${C.brandBorder}`
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: allFilteredSelected,
      ref: el => {
        if (el) el.indeterminate = !allFilteredSelected && sel.size > 0;
      },
      onChange: selectAllFiltered,
      style: {
        accentColor: C.brand
      }
    }), /*#__PURE__*/React.createElement("span", {
      onClick: () => setSel(new Set()),
      style: {
        fontSize: 12,
        color: C.brand,
        fontWeight: 600,
        cursor: 'pointer'
      }
    }, sel.size, " Selected"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(LinkBtn, {
      icon: /*#__PURE__*/React.createElement(I.check, {
        size: 13
      }),
      onClick: () => bulk(true),
      disabled: allSelectedActive
    }, "Activate"), /*#__PURE__*/React.createElement(LinkBtn, {
      icon: /*#__PURE__*/React.createElement(I.archive, {
        size: 13
      }),
      onClick: () => bulk(false),
      disabled: allSelectedInactive
    }, "Deactivate"), /*#__PURE__*/React.createElement(LinkBtn, {
      onClick: () => setSel(new Set()),
      muted: true
    }, "Clear"));
  })() : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      height: 40,
      background: '#FAFAF7',
      borderBottom: `1px solid ${C.border}`,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: INV_COL.check,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: false,
    onChange: selectAllFiltered,
    style: {
      accentColor: C.brand
    }
  })), /*#__PURE__*/React.createElement(InvColH, {
    label: "Name",
    width: INV_COL.name,
    sortKey: "name",
    sort: sort,
    onSort: cycleSort
  }), /*#__PURE__*/React.createElement(InvColH, {
    label: "Part Number",
    width: INV_COL.part,
    sortKey: "partNumber",
    sort: sort,
    onSort: cycleSort
  }), /*#__PURE__*/React.createElement("div", {
    ref: vendorAnchor,
    style: {
      position: 'relative',
      flex: 1,
      display: 'flex',
      minWidth: 120
    }
  }, /*#__PURE__*/React.createElement(InvColH, {
    label: "Vendor",
    flex: 1,
    sortKey: "vendor",
    sort: sort,
    onSort: cycleSort,
    filterable: true,
    filterActive: vendorFilter.size > 0,
    onFilter: () => setOpenPop(openPop === 'vendor' ? null : 'vendor')
  }), /*#__PURE__*/React.createElement(InvPopover, {
    open: openPop === 'vendor',
    onClose: () => setOpenPop(null),
    anchorRef: vendorAnchor,
    width: 240
  }, /*#__PURE__*/React.createElement(InvMultiFilter, {
    title: "Filter by vendor",
    options: INV_VENDOR_OPTS,
    value: vendorFilter,
    onChange: setVendorFilter
  }))), /*#__PURE__*/React.createElement("div", {
    ref: catAnchor,
    style: {
      position: 'relative',
      width: INV_COL.category,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(InvColH, {
    label: "Category",
    width: INV_COL.category,
    sortKey: "category",
    sort: sort,
    onSort: cycleSort,
    filterable: true,
    filterActive: catFilter.size > 0,
    onFilter: () => setOpenPop(openPop === 'cat' ? null : 'cat')
  }), /*#__PURE__*/React.createElement(InvPopover, {
    open: openPop === 'cat',
    onClose: () => setOpenPop(null),
    anchorRef: catAnchor,
    align: "right",
    width: 200
  }, /*#__PURE__*/React.createElement(InvMultiFilter, {
    title: "Filter by category",
    options: INV_CATEGORIES,
    value: catFilter,
    onChange: setCatFilter
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: INV_COL.active,
      padding: '0 12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: C.ink,
      letterSpacing: '-0.005em'
    }
  }, "Active")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      background: C.surface
    }
  }, filtered.map(it => {
    const isSel = editingId === it.id;
    const isCh = sel.has(it.id);
    const isHov = hoverId === it.id && !isSel;
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      onMouseEnter: () => setHoverId(it.id),
      onMouseLeave: () => setHoverId(s => s === it.id ? null : s),
      onClick: () => openEdit(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        padding: '12px 16px',
        borderBottom: `1px solid ${C.border}`,
        background: isSel ? C.brandSoft : isCh ? '#FFF8F2' : isHov ? '#FAFAF7' : 'transparent',
        boxShadow: isSel ? `inset 3px 0 0 ${C.brand}` : 'none',
        cursor: 'pointer',
        transition: 'background .08s'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: INV_COL.check,
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: isCh,
      onChange: () => toggleSel(it.id),
      onClick: e => e.stopPropagation(),
      style: {
        accentColor: C.brand
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: INV_COL.name,
        padding: '0 12px',
        fontSize: 13,
        color: C.ink,
        fontWeight: isSel ? 600 : 500,
        letterSpacing: isSel ? '-0.005em' : 0,
        lineHeight: 1.45
      }
    }, it.name), /*#__PURE__*/React.createElement("div", {
      style: {
        width: INV_COL.part,
        padding: '0 12px',
        fontSize: 12.5,
        color: C.text,
        fontFamily: 'ui-monospace, monospace',
        lineHeight: 1.45,
        letterSpacing: 0
      }
    }, it.partNumber), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 120,
        padding: '0 12px',
        fontSize: 12,
        color: C.muted,
        lineHeight: 1.45,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      },
      title: it.vendor.join(', ')
    }, it.vendor.length === 0 ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.subtle
      }
    }, "\u2014") : it.vendor.join(', ')), /*#__PURE__*/React.createElement("div", {
      style: {
        width: INV_COL.category,
        padding: '0 12px',
        fontSize: 12.5,
        color: C.text,
        lineHeight: 1.45,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, it.category), /*#__PURE__*/React.createElement("div", {
      style: {
        width: INV_COL.active,
        padding: '0 12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
      },
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement(Toggle, {
      checked: it.active,
      onChange: () => toggleActive(it.id),
      size: "sm"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 22,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement(I.chevRight, {
      size: 14,
      style: {
        color: isSel ? C.brand : C.muted,
        visibility: isSel || isHov ? 'visible' : 'hidden'
      }
    })));
  }), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 16px',
      textAlign: 'center',
      fontSize: 13,
      color: C.subtle
    }
  }, "No items match.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 18px',
      borderTop: `1px solid ${C.border}`,
      background: C.bg,
      flexShrink: 0
    }
  }, ['Category', 'Vendor', 'Inventory Kits'].map((label, i) => /*#__PURE__*/React.createElement(Btn, {
    key: i,
    size: "md",
    kind: "primary",
    style: {
      background: C.brand,
      border: `1px solid ${C.brandHover}`,
      minWidth: 120
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Btn, {
    size: "md",
    kind: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(I.x, {
      style: {
        transform: 'translateY(1px)'
      }
    }),
    style: {
      minWidth: 96
    }
  }, "Close"), /*#__PURE__*/React.createElement(Btn, {
    size: "md",
    kind: "action",
    leftIcon: /*#__PURE__*/React.createElement(I.save, null),
    style: {
      minWidth: 96
    }
  }, "Save")), drawerMounted && /*#__PURE__*/React.createElement(InvDrawer, {
    open: drawerOpen,
    mode: drawerMode,
    setMode: setDrawerMode,
    item: editing,
    onClose: closeDrawer,
    onDuplicate: duplicateCurrent,
    categories: INV_CATEGORIES,
    mfrs: INV_MFRS,
    vendors: INV_VENDOR_OPTS
  })));
}

// ─── Drawer (slide-over from right, wide enough for the 2-col form) ────
function InvDrawer({
  open,
  mode,
  setMode,
  item,
  onClose,
  onDuplicate,
  categories,
  mfrs,
  vendors
}) {
  // Local form state — the prototype doesn't round-trip into items
  const seed = mode === 'edit' && item ? {
    name: item.name,
    states: '',
    lenders: '',
    partName: item.partNumber,
    vendorPart: '',
    description: '',
    mfr: '',
    category: item.category,
    vendor: '',
    cost: '',
    effDate: '',
    count: '',
    watt: '',
    invType: '',
    microRatio: '',
    solo: '',
    lightfusion: '',
    aurora: '',
    openSolar: '',
    pctNonFEOC: '',
    dcPct: '',
    domestic: false,
    nonFEOC: false,
    isDefault: false,
    batteryComp: false,
    speciality: false,
    allowNew: true
  } : {
    name: '',
    states: '',
    lenders: '',
    partName: '',
    vendorPart: '',
    description: '',
    mfr: '',
    category: '',
    vendor: '',
    cost: '',
    effDate: '',
    count: '',
    watt: '',
    invType: '',
    microRatio: '',
    solo: '',
    lightfusion: '',
    aurora: '',
    openSolar: '',
    pctNonFEOC: '',
    dcPct: '',
    domestic: false,
    nonFEOC: false,
    isDefault: false,
    batteryComp: false,
    speciality: false,
    allowNew: false
  };
  const [f, setF] = React.useState(seed);
  React.useEffect(() => {
    setF(seed); /* eslint-disable-next-line */
  }, [item?.id, mode]);
  const upd = k => e => setF(s => ({
    ...s,
    [k]: e && e.target ? e.target.type === 'checkbox' ? e.target.checked : e.target.value : e
  }));

  // Track the close gesture so the arrow can rotate in sync with the slide-out.
  const [closing, setClosing] = React.useState(false);
  React.useEffect(() => {
    if (open) setClosing(false);
  }, [open]);
  const handleClose = () => {
    if (closing) return;
    setClosing(true);
    onClose();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: 1208,
      background: C.surface,
      boxShadow: open ? '-12px 0 32px rgba(20,16,10,0.10), -2px 0 6px rgba(20,16,10,0.06)' : 'none',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 5,
      transform: open ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.24s cubic-bezier(.32,.72,0,1), box-shadow 0.24s ease-out',
      willChange: 'transform'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 16px',
      gap: 12,
      borderBottom: `1px solid ${C.border}`,
      background: '#EAEAEA'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleClose,
    "aria-label": "Close drawer",
    style: {
      width: 32,
      height: 32,
      borderRadius: 6,
      border: `1px solid ${C.borderStrong}`,
      background: C.surface,
      color: C.ink,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: closing ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.24s cubic-bezier(.32,.72,0,1), background .12s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = C.bg;
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = C.surface;
    }
  }, /*#__PURE__*/React.createElement(I.chevRight, {
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      fontSize: 14,
      fontWeight: 600,
      color: C.ink,
      letterSpacing: '-0.005em',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, mode === 'add' ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      color: C.brand,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '3px 7px',
      background: C.brandSoft,
      border: `1px solid ${C.brandBorder}`,
      borderRadius: 3,
      lineHeight: 1
    }
  }, "Create"), /*#__PURE__*/React.createElement("span", null, "New Inventory Item")) : /*#__PURE__*/React.createElement("span", null, item ? item.name : 'Edit Item')), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(I.upload, null),
    disabled: mode === 'add'
  }, "Upload Photo"), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(I.upload, null),
    disabled: mode === 'add'
  }, "Upload Spec Sheet"), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(I.file, null),
    disabled: mode === 'add'
  }, "View Spec Sheet"), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(I.copy, null),
    onClick: onDuplicate,
    disabled: mode === 'add' || !item
  }, "Duplicate")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'hidden',
      padding: '16px 22px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      columnGap: 16,
      rowGap: 10
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Equipment Photo",
    style: {
      gridRow: 'span 4'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 220,
      border: `1px dashed ${C.borderStrong}`,
      borderRadius: 6,
      background: C.bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: C.subtle,
      fontSize: 12,
      textAlign: 'center',
      padding: 10
    }
  }, "Drop image or click to upload")), /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.name,
    onChange: upd('name')
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Part # / Name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.partName,
    onChange: upd('partName')
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Vendor Part #"
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.vendorPart,
    onChange: upd('vendorPart')
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Manufacturer",
    required: true
  }, /*#__PURE__*/React.createElement(Select, {
    value: f.mfr,
    onChange: upd('mfr'),
    options: mfrs,
    placeholder: "Select"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Category",
    required: true
  }, /*#__PURE__*/React.createElement(Select, {
    value: f.category,
    onChange: upd('category'),
    options: categories,
    placeholder: "Select"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Vendors"
  }, /*#__PURE__*/React.createElement(Select, {
    value: f.vendor,
    onChange: upd('vendor'),
    options: vendors,
    placeholder: "Select"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "State(s)"
  }, /*#__PURE__*/React.createElement(Select, {
    value: f.states,
    onChange: upd('states'),
    options: ['All', 'CA', 'TX', 'CO', 'OH'],
    placeholder: "Select"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Lenders"
  }, /*#__PURE__*/React.createElement(Select, {
    value: f.lenders,
    onChange: upd('lenders'),
    options: ['Sungage', 'GoodLeap', 'Mosaic', 'Sunlight'],
    placeholder: "Select"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Cost",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.cost,
    onChange: upd('cost'),
    prefix: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: C.subtle
      }
    }, "$")
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Effective Date",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.effDate,
    onChange: upd('effDate'),
    placeholder: "mm/dd/yyyy",
    prefix: /*#__PURE__*/React.createElement("svg", {
      width: "13",
      height: "13",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: C.brand,
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "16",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 9h18M8 3v4M16 3v4"
    }))
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Content Count",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.count,
    onChange: upd('count')
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Watt"
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.watt,
    onChange: upd('watt')
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Inverter Type"
  }, /*#__PURE__*/React.createElement(Select, {
    value: f.invType,
    onChange: upd('invType'),
    options: ['String', 'Micro', 'Hybrid'],
    placeholder: "Select"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Micro Inverter Ratio"
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.microRatio,
    onChange: upd('microRatio')
  })), /*#__PURE__*/React.createElement(Field, {
    label: "SOLO Mapping"
  }, /*#__PURE__*/React.createElement(Select, {
    value: f.solo,
    onChange: upd('solo'),
    options: ['Tier 1', 'Tier 2', 'Tier 3'],
    placeholder: "Select"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Lightfusion Mapping"
  }, /*#__PURE__*/React.createElement(Select, {
    value: f.lightfusion,
    onChange: upd('lightfusion'),
    options: ['Standard', 'Premium'],
    placeholder: "Select"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Aurora Mapping"
  }, /*#__PURE__*/React.createElement(Select, {
    value: f.aurora,
    onChange: upd('aurora'),
    options: ['Standard', 'Premium'],
    placeholder: "Select"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Open Solar Mapping"
  }, /*#__PURE__*/React.createElement(Select, {
    value: f.openSolar,
    onChange: upd('openSolar'),
    options: ['Standard', 'Premium'],
    placeholder: "Select"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "% Non-FEOC"
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.pctNonFEOC,
    onChange: upd('pctNonFEOC')
  })), /*#__PURE__*/React.createElement(Field, {
    label: "DC %"
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.dcPct,
    onChange: upd('dcPct')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Description",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.description,
    onChange: upd('description')
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      columnGap: 16,
      paddingTop: 10,
      borderTop: `1px solid ${C.border}`
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: '#2A2A2A',
      letterSpacing: '0.01em',
      marginBottom: 6
    }
  }, "Compliance"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 12.5,
      color: C.ink,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: f.domestic,
    onChange: upd('domestic'),
    style: {
      accentColor: C.brand
    }
  }), "Domestic Content"), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 12.5,
      color: C.ink,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: f.nonFEOC,
    onChange: upd('nonFEOC'),
    style: {
      accentColor: C.brand
    }
  }), "Non-FEOC"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: '#2A2A2A',
      letterSpacing: '0.01em',
      marginBottom: 6
    }
  }, "Flags"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      columnGap: 12,
      rowGap: 7
    }
  }, [{
    label: 'Default',
    v: f.isDefault,
    k: 'isDefault'
  }, {
    label: 'Battery Compatible',
    v: f.batteryComp,
    k: 'batteryComp'
  }, {
    label: 'Speciality',
    v: f.speciality,
    k: 'speciality'
  }, {
    label: 'Allow In New Deals',
    v: f.allowNew,
    k: 'allowNew'
  }].map(c => /*#__PURE__*/React.createElement("label", {
    key: c.k,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 12.5,
      color: C.ink,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: c.v,
    onChange: upd(c.k),
    style: {
      accentColor: C.brand
    }
  }), c.label)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 18px',
      borderTop: `1px solid ${C.border}`,
      background: '#EAEAEA',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Btn, {
    size: "md",
    kind: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(I.x, {
      style: {
        transform: 'translateY(1px)'
      }
    }),
    onClick: handleClose,
    style: {
      minWidth: 96
    }
  }, "Cancel"), /*#__PURE__*/React.createElement(Btn, {
    size: "md",
    kind: "action",
    leftIcon: /*#__PURE__*/React.createElement(I.save, null),
    style: {
      minWidth: 96
    }
  }, "Save")));
}
window.SimpleFormPrototypeInventory = SimpleFormPrototypeInventory;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-settings/simpleForm-v2-inventory.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-settings/simpleForm-v2-responsive.jsx
try { (() => {
// 03b · Responsive — phone (list + edit) and small tablet portrait.
// Derived from SimpleFormPrototypeV2 in simpleForm-v2.jsx. All visual styles
// live in simpleForm-v2-responsive.css; this file is structure + behavior only.
//
// Three artboards:
//   • Phone — List          (390 × 844, iPhone 14 portrait)
//   • Phone — Edit          (390 × 844)
//   • Tablet — Portrait     (768 × 1024, iPad mini portrait)

const SIMPLE_V2_RESP_SAMPLE = [{
  id: '1',
  name: 'Discovery',
  usage: 142,
  active: true
}, {
  id: '2',
  name: 'Design',
  usage: 88,
  active: true
}, {
  id: '3',
  name: 'Permitting',
  usage: 31,
  active: true
}, {
  id: '4',
  name: 'Installation',
  usage: 312,
  active: true
}, {
  id: '5',
  name: 'Commissioning',
  usage: 67,
  active: true
}, {
  id: '6',
  name: 'Final Inspection',
  usage: 124,
  active: true
}, {
  id: '7',
  name: 'Closeout',
  usage: 56,
  active: true
}, {
  id: '8',
  name: 'Pre-Sales',
  usage: 4,
  active: false
}, {
  id: '9',
  name: 'Lead Qualification',
  usage: 0,
  active: false
}];

// Helper: concatenate truthy class names.
const cx = (...names) => names.filter(Boolean).join(' ');

// Phone-tuned input — larger text + thumb target. CSS-driven, no inline styles.
const PhoneInput = ({
  value,
  onChange,
  placeholder,
  prefix,
  error,
  disabled,
  type = 'text',
  autoFocus,
  onKeyDown,
  onFocus,
  onBlur
}) => /*#__PURE__*/React.createElement("div", {
  className: cx('r-phone-input', error && 'r-phone-input--error')
}, prefix && /*#__PURE__*/React.createElement("div", {
  className: "r-phone-input-prefix"
}, prefix), /*#__PURE__*/React.createElement("input", {
  className: "r-phone-input-input",
  value: value ?? '',
  onChange: onChange,
  placeholder: placeholder,
  disabled: disabled,
  type: type,
  autoFocus: autoFocus,
  onKeyDown: onKeyDown,
  onFocus: onFocus,
  onBlur: onBlur
}));

// ───────────────────────────────────────────────────────────────────────
// Shared row used by phone list + tablet list panel.
// ───────────────────────────────────────────────────────────────────────
function MobileListRow({
  item,
  selected,
  checked,
  onTap,
  onCheck,
  onToggle,
  density = 'phone'
}) {
  const isTablet = density === 'tablet';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onTap,
    className: cx('r-list-row', isTablet ? 'r-list-row--tablet' : 'r-list-row--phone', selected && 'r-list-row--selected', !selected && checked && 'r-list-row--checked')
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "r-row-checkbox",
    checked: !!checked,
    onChange: e => {
      e.stopPropagation();
      onCheck?.();
    },
    onClick: e => e.stopPropagation()
  }), /*#__PURE__*/React.createElement("div", {
    className: "r-row-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: cx('r-row-name', isTablet ? 'r-row-name--tablet' : 'r-row-name--phone', !item.active && 'r-row-name--inactive', selected && 'r-row-name--selected')
  }, item.name)), /*#__PURE__*/React.createElement(Toggle, {
    checked: item.active,
    onChange: () => onToggle?.(),
    size: isTablet ? 'sm' : 'md'
  }), isTablet && /*#__PURE__*/React.createElement(I.chevRight, {
    size: 14,
    className: cx('r-row-chev', selected && 'r-row-chev--visible')
  }));
}

// ───────────────────────────────────────────────────────────────────────
// PHONE — LIST
// ───────────────────────────────────────────────────────────────────────
function SimpleFormV2_PhoneList() {
  const [items, setItems] = React.useState(SIMPLE_V2_RESP_SAMPLE);
  const [filter, setFilter] = React.useState('all');
  const [q, setQ] = React.useState('');
  const [sel, setSel] = React.useState(new Set());
  const counts = {
    all: items.length,
    active: items.filter(i => i.active).length,
    inactive: items.filter(i => !i.active).length
  };
  const filtered = items.filter(i => filter === 'all' || (filter === 'active' ? i.active : !i.active)).filter(i => !q || i.name.toLowerCase().includes(q.toLowerCase())).slice().sort((a, b) => a.active === b.active ? a.name.localeCompare(b.name) : a.active ? -1 : 1);
  const toggle = id => setItems(s => s.map(i => i.id === id ? {
    ...i,
    active: !i.active
  } : i));
  const toggleSel = id => setSel(s => {
    const n = new Set(s);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  });
  const bulk = active => {
    setItems(s => s.map(i => sel.has(i.id) ? {
      ...i,
      active
    } : i));
    setSel(new Set());
  };
  const selectedRows = items.filter(i => sel.has(i.id));
  const allSelectedActive = selectedRows.every(i => i.active);
  const allSelectedInactive = selectedRows.every(i => !i.active);
  const allFilteredSelected = filtered.length > 0 && filtered.every(i => sel.has(i.id));
  const selectAllFiltered = () => setSel(s => {
    const n = new Set(s);
    if (allFilteredSelected) filtered.forEach(i => n.delete(i.id));else filtered.forEach(i => n.add(i.id));
    return n;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "r-phone-frame"
  }, /*#__PURE__*/React.createElement(PhoneStatusBar, null), /*#__PURE__*/React.createElement("div", {
    className: "r-app-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-app-bar-title-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-app-bar-title"
  }, "Standard Template")), /*#__PURE__*/React.createElement("button", {
    className: "r-icon-btn",
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(I.x, {
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "r-search-row"
  }, /*#__PURE__*/React.createElement(PhoneInput, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search\u2026",
    prefix: /*#__PURE__*/React.createElement(I.search, {
      size: 16
    })
  }), /*#__PURE__*/React.createElement("button", {
    className: "r-icon-btn r-icon-btn-primary r-icon-btn-primary--phone",
    "aria-label": "New"
  }, /*#__PURE__*/React.createElement(I.plus, {
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "r-filter-row"
  }, /*#__PURE__*/React.createElement(Segmented, {
    size: "md",
    fullWidth: true,
    value: filter,
    onChange: setFilter,
    options: [{
      value: 'all',
      label: `All ${counts.all}`
    }, {
      value: 'active',
      label: `Active ${counts.active}`
    }, {
      value: 'inactive',
      label: `Inactive ${counts.inactive}`
    }]
  })), sel.size > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "r-bulk-bar"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "r-checkbox",
    checked: allFilteredSelected,
    ref: el => {
      if (el) el.indeterminate = !allFilteredSelected && sel.size > 0;
    },
    onChange: selectAllFiltered
  }), /*#__PURE__*/React.createElement("span", {
    className: "r-bulk-count",
    onClick: () => setSel(new Set())
  }, sel.size, " Selected"), /*#__PURE__*/React.createElement("div", {
    className: "r-spacer"
  }), /*#__PURE__*/React.createElement("button", {
    className: "r-mini-link",
    onClick: () => bulk(true),
    disabled: allSelectedActive
  }, "Activate"), /*#__PURE__*/React.createElement("button", {
    className: "r-mini-link",
    onClick: () => bulk(false),
    disabled: allSelectedInactive
  }, "Deactivate"), /*#__PURE__*/React.createElement("button", {
    className: "r-mini-link r-mini-link--muted",
    onClick: () => setSel(new Set())
  }, "Clear")) : /*#__PURE__*/React.createElement("div", {
    className: "r-select-all-bar"
  }, /*#__PURE__*/React.createElement("label", {
    className: "r-select-all-label"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "r-checkbox",
    checked: false,
    onChange: selectAllFiltered
  }), /*#__PURE__*/React.createElement("span", null, "Select All"))), /*#__PURE__*/React.createElement("div", {
    className: "r-list r-list--phone"
  }, filtered.map(it => /*#__PURE__*/React.createElement(MobileListRow, {
    key: it.id,
    item: it,
    checked: sel.has(it.id),
    onCheck: () => toggleSel(it.id),
    onToggle: () => toggle(it.id),
    onTap: () => {},
    density: "phone"
  }))), /*#__PURE__*/React.createElement(HomeIndicator, null));
}

// ───────────────────────────────────────────────────────────────────────
// PHONE — EDIT
// ───────────────────────────────────────────────────────────────────────
function SimpleFormV2_PhoneEdit() {
  const [name, setName] = React.useState('Installation');
  const [desc, setDesc] = React.useState('Standard residential installation item covering panel mounting, electrical work, and inverter setup.');
  const [active, setActive] = React.useState(true);
  const dirty = name !== 'Installation' || desc !== 'Standard residential installation item covering panel mounting, electrical work, and inverter setup.';
  return /*#__PURE__*/React.createElement("div", {
    className: "r-phone-frame"
  }, /*#__PURE__*/React.createElement(PhoneStatusBar, null), /*#__PURE__*/React.createElement("div", {
    className: "r-app-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-app-bar-title-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-app-bar-title"
  }, name || 'Untitled item'), /*#__PURE__*/React.createElement(Pill, {
    tone: active ? 'active' : 'inactive'
  }, /*#__PURE__*/React.createElement("span", {
    className: cx('r-pill-dot', active ? 'r-pill-dot--active' : 'r-pill-dot--inactive')
  }), active ? 'Active' : 'Inactive')), /*#__PURE__*/React.createElement("button", {
    className: "r-icon-btn",
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(I.x, {
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "r-form"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "r-form-field-label"
  }, "Name", /*#__PURE__*/React.createElement("span", {
    className: "r-form-required"
  }, "*")), /*#__PURE__*/React.createElement(PhoneInput, {
    value: name,
    onChange: e => setName(e.target.value)
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "r-form-field-label"
  }, "Description"), /*#__PURE__*/React.createElement("textarea", {
    className: "r-form-textarea",
    value: desc,
    onChange: e => setDesc(e.target.value),
    rows: 6
  }))), /*#__PURE__*/React.createElement("div", {
    className: "r-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-spacer"
  }), /*#__PURE__*/React.createElement(Btn, {
    size: "md",
    kind: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(I.x, null)
  }, "Close"), /*#__PURE__*/React.createElement(Btn, {
    size: "md",
    kind: "action",
    leftIcon: /*#__PURE__*/React.createElement(I.save, null)
  }, "Save")), /*#__PURE__*/React.createElement(HomeIndicator, null));
}

// ───────────────────────────────────────────────────────────────────────
// TABLET — PORTRAIT (split view)
// ───────────────────────────────────────────────────────────────────────
function SimpleFormV2_TabletPortrait() {
  const [items, setItems] = React.useState(SIMPLE_V2_RESP_SAMPLE);
  const [selected, setSelected] = React.useState('4');
  const [filter, setFilter] = React.useState('all');
  const [q, setQ] = React.useState('');
  const [sel, setSel] = React.useState(new Set());
  const counts = {
    all: items.length,
    active: items.filter(i => i.active).length,
    inactive: items.filter(i => !i.active).length
  };
  const current = items.find(i => i.id === selected) || items[0];
  const [name, setName] = React.useState(current.name);
  const [desc, setDesc] = React.useState('Standard residential installation item covering panel mounting, electrical work, and inverter setup.');
  React.useEffect(() => {
    const c = items.find(i => i.id === selected) || items[0];
    setName(c.name);
    setDesc(selected === '4' ? 'Standard residential installation item covering panel mounting, electrical work, and inverter setup.' : '');
  }, [selected]);
  const filtered = items.filter(i => filter === 'all' || (filter === 'active' ? i.active : !i.active)).filter(i => !q || i.name.toLowerCase().includes(q.toLowerCase())).slice().sort((a, b) => a.active === b.active ? a.name.localeCompare(b.name) : a.active ? -1 : 1);
  const toggle = id => setItems(s => s.map(i => i.id === id ? {
    ...i,
    active: !i.active
  } : i));
  const toggleSel = id => setSel(s => {
    const n = new Set(s);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "r-tablet-frame"
  }, /*#__PURE__*/React.createElement(PhoneStatusBar, {
    wide: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "r-app-bar r-app-bar--tablet"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-app-bar-title-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-app-bar-title"
  }, "Standard Template")), /*#__PURE__*/React.createElement("span", {
    className: "r-app-bar-meta"
  }, "Last edited by Marlee K. \xB7 Apr 22, 2026"), /*#__PURE__*/React.createElement("button", {
    className: "r-icon-btn",
    title: "Change log"
  }, /*#__PURE__*/React.createElement(I.history, {
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    className: "r-icon-btn",
    title: "Import"
  }, /*#__PURE__*/React.createElement(I.upload, {
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    className: "r-icon-btn",
    title: "Export"
  }, /*#__PURE__*/React.createElement(I.download, {
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    className: "r-icon-btn",
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(I.x, {
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "r-tablet-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-tablet-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-tablet-list-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-search-row r-search-row--tablet"
  }, /*#__PURE__*/React.createElement(Input, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search\u2026",
    prefix: /*#__PURE__*/React.createElement(I.search, {
      size: 14
    })
  }), /*#__PURE__*/React.createElement("button", {
    className: "r-icon-btn r-icon-btn-primary r-icon-btn-primary--tablet",
    "aria-label": "New"
  }, /*#__PURE__*/React.createElement(I.plus, {
    size: 16
  }))), /*#__PURE__*/React.createElement(Segmented, {
    size: "sm",
    value: filter,
    onChange: setFilter,
    options: [{
      value: 'all',
      label: `All ${counts.all}`
    }, {
      value: 'active',
      label: `Active ${counts.active}`
    }, {
      value: 'inactive',
      label: `Inactive ${counts.inactive}`
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "r-select-all-bar r-select-all-bar--tablet"
  }, /*#__PURE__*/React.createElement("label", {
    className: "r-select-all-label"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "r-checkbox",
    readOnly: true
  }), /*#__PURE__*/React.createElement("span", null, "Select All"))), /*#__PURE__*/React.createElement("div", {
    className: "r-list"
  }, filtered.map(it => /*#__PURE__*/React.createElement(MobileListRow, {
    key: it.id,
    item: it,
    selected: it.id === selected,
    checked: sel.has(it.id),
    onCheck: () => toggleSel(it.id),
    onToggle: () => toggle(it.id),
    onTap: () => setSelected(it.id),
    density: "tablet"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "r-tablet-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-tablet-right-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-tablet-right-header-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-editing-overline"
  }, "Editing"), /*#__PURE__*/React.createElement("div", {
    className: "r-editing-title"
  }, name || 'Untitled item')), /*#__PURE__*/React.createElement(Pill, {
    tone: current.active ? 'active' : 'inactive'
  }, /*#__PURE__*/React.createElement("span", {
    className: cx('r-pill-dot', current.active ? 'r-pill-dot--active' : 'r-pill-dot--inactive')
  }), current.active ? 'Active' : 'Inactive')), /*#__PURE__*/React.createElement("div", {
    className: "r-tablet-form"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: name,
    onChange: e => setName(e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Description"
  }, /*#__PURE__*/React.createElement(Textarea, {
    value: desc,
    onChange: e => setDesc(e.target.value),
    rows: 6
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "r-footer r-footer--tablet"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-spacer"
  }), /*#__PURE__*/React.createElement(Btn, {
    size: "md",
    kind: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(I.x, null)
  }, "Close"), /*#__PURE__*/React.createElement(Btn, {
    size: "md",
    kind: "action",
    leftIcon: /*#__PURE__*/React.createElement(I.save, null)
  }, "Save")), /*#__PURE__*/React.createElement(HomeIndicator, {
    wide: true
  }));
}

// ───────────────────────────────────────────────────────────────────────
// Phone chrome bits (status bar + home indicator)
// ───────────────────────────────────────────────────────────────────────
function PhoneStatusBar({
  wide = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: cx('r-status-bar', wide && 'r-status-bar--wide')
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("div", {
    className: "r-status-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-status-bars"
  }, [4, 6, 8, 10].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "r-status-bar-tick",
    style: {
      height: h
    }
  }))), /*#__PURE__*/React.createElement("svg", {
    className: "r-status-wifi",
    width: "14",
    height: "10",
    viewBox: "0 0 16 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 12 L10 9 a3 3 0 0 0 -4 0 Z M8 8 a5 5 0 0 1 4 1.4 l1.5 -2.1 a8 8 0 0 0 -11 0 L4 9.4 A5 5 0 0 1 8 8 Z M8 4 a9 9 0 0 1 7.5 3 l1.5 -2.1 a12 12 0 0 0 -18 0 L0.5 7 A9 9 0 0 1 8 4 Z"
  })), /*#__PURE__*/React.createElement("div", {
    className: "r-status-battery-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-status-battery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-status-battery-fill"
  })), /*#__PURE__*/React.createElement("div", {
    className: "r-status-battery-tip"
  }))));
}
function HomeIndicator({
  wide = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: cx('r-home-indicator', wide && 'r-home-indicator--wide')
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-home-indicator-pill"
  }));
}
Object.assign(window, {
  SimpleFormV2_PhoneList,
  SimpleFormV2_PhoneEdit,
  SimpleFormV2_TabletPortrait
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-settings/simpleForm-v2-responsive.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-settings/simpleForm-v2-tree.jsx
try { (() => {
// Simple form v2 — TREE CONTROL variant.
// Same chrome as SimpleFormPrototypeV2 (Standard Template: search + New,
// All/Active/Inactive segmented, Select All + bulk activate/deactivate,
// Change Log, Import/Export, master/detail editing) — but the list rail is a
// HIERARCHY: top-level parents own child rows. Parents show a child count in
// parens and an expand/collapse chevron; children render indented under an
// expanded parent. Reuses simpleForm-v2.css for all shared row/header/footer
// styling; only tree-specific bits (indent, chevron, count) are inline.

const TREE_V2_SAMPLE = [{
  id: '1',
  name: 'Closeout',
  active: true,
  expanded: false,
  children: []
}, {
  id: '2',
  name: 'Design',
  active: true,
  expanded: true,
  children: [{
    id: '2a',
    name: 'Permitting',
    active: true
  }]
}, {
  id: '3',
  name: 'Discovery',
  active: true,
  expanded: false,
  children: []
}, {
  id: '4',
  name: 'Installation',
  active: true,
  expanded: true,
  children: [{
    id: '4a',
    name: 'Commissioning',
    active: true
  }, {
    id: '4b',
    name: 'Final Inspection',
    active: true
  }]
}, {
  id: '5',
  name: 'Pre-Sales',
  active: false,
  expanded: false,
  children: [{
    id: '5a',
    name: 'Lead Qualification',
    active: false
  }]
}];
const tcx = (...names) => names.filter(Boolean).join(' ');
function SimpleFormPrototypeV2Tree() {
  const [tree, setTree] = React.useState(TREE_V2_SAMPLE);
  const [selected, setSelected] = React.useState('4');
  const [filter, setFilter] = React.useState('all');
  const [q, setQ] = React.useState('');
  const [sel, setSel] = React.useState(new Set());
  const [isNew, setIsNew] = React.useState(false);
  const [draftName, setDraftName] = React.useState('');
  const [draftDesc, setDraftDesc] = React.useState('');
  const [draftActive, setDraftActive] = React.useState(true);
  const [showErrors, setShowErrors] = React.useState(false);
  const [saveErrors, setSaveErrors] = React.useState(false);
  const [showLog, setShowLog] = React.useState(false);
  const [hoverId, setHoverId] = React.useState(null);
  const [importOpen, setImportOpen] = React.useState(false);
  const importRef = React.useRef(null);
  const [exportOpen, setExportOpen] = React.useState(false);
  const exportRef = React.useRef(null);
  // New-item modal (tree control creates a sub-item under a chosen category)
  const [showNew, setShowNew] = React.useState(false);
  const [newCategory, setNewCategory] = React.useState('4');
  const [newName, setNewName] = React.useState('');
  const [newErr, setNewErr] = React.useState(false);
  React.useEffect(() => {
    if (!importOpen) return;
    const onDown = e => {
      if (importRef.current && !importRef.current.contains(e.target)) setImportOpen(false);
    };
    window.addEventListener('mousedown', onDown);
    return () => window.removeEventListener('mousedown', onDown);
  }, [importOpen]);
  React.useEffect(() => {
    if (!exportOpen) return;
    const onDown = e => {
      if (exportRef.current && !exportRef.current.contains(e.target)) setExportOpen(false);
    };
    window.addEventListener('mousedown', onDown);
    return () => window.removeEventListener('mousedown', onDown);
  }, [exportOpen]);

  // ─── Tree helpers ──────────────────────────────────────────────────────
  const allNodes = t => t.flatMap(p => [p, ...(p.children || [])]);
  const nodes = allNodes(tree);
  const findNode = id => nodes.find(n => n.id === id);
  const mapNode = (t, id, fn) => t.map(p => {
    if (p.id === id) return fn(p);
    if ((p.children || []).some(c => c.id === id)) return {
      ...p,
      children: p.children.map(c => c.id === id ? fn(c) : c)
    };
    return p;
  });
  const toggleActive = id => setTree(t => mapNode(t, id, n => ({
    ...n,
    active: !n.active
  })));
  const toggleExpanded = id => setTree(t => t.map(p => p.id === id ? {
    ...p,
    expanded: !p.expanded
  } : p));
  const current = findNode(selected) || tree[0];
  const INITIAL_DESCS = {
    '4': 'Standard residential installation item covering panel mounting, electrical work, and inverter setup.'
  };
  const [descs, setDescs] = React.useState(INITIAL_DESCS);
  const [drafts, setDrafts] = React.useState({});
  const canonicalName = id => findNode(id)?.name ?? '';
  const canonicalDesc = id => descs[id] ?? '';
  const isDirtyId = id => !!drafts[id];
  const name = drafts[selected]?.name ?? canonicalName(selected);
  const desc = drafts[selected]?.desc ?? canonicalDesc(selected);
  const setName = newName => {
    setDrafts(s => {
      const cN = canonicalName(selected),
        cD = canonicalDesc(selected);
      const curDesc = s[selected]?.desc ?? cD;
      if (newName === cN && curDesc === cD) {
        const {
          [selected]: _,
          ...rest
        } = s;
        return rest;
      }
      return {
        ...s,
        [selected]: {
          name: newName,
          desc: curDesc
        }
      };
    });
  };
  const setDesc = newDesc => {
    setDrafts(s => {
      const cN = canonicalName(selected),
        cD = canonicalDesc(selected);
      const curName = s[selected]?.name ?? cN;
      if (curName === cN && newDesc === cD) {
        const {
          [selected]: _,
          ...rest
        } = s;
        return rest;
      }
      return {
        ...s,
        [selected]: {
          name: curName,
          desc: newDesc
        }
      };
    });
  };
  React.useEffect(() => {
    setSaveErrors(false);
  }, [selected]);
  const saveNameError = saveErrors && !name.trim() ? 'Name is required' : null;
  const handleSave = () => {
    const dirtyIds = Object.keys(drafts);
    if (dirtyIds.length === 0) return;
    const badId = dirtyIds.find(id => !(drafts[id].name ?? '').trim());
    if (badId) {
      if (selected !== badId) setSelected(badId);
      setSaveErrors(true);
      return;
    }
    setTree(t => {
      let next = t;
      for (const id of dirtyIds) next = mapNode(next, id, n => ({
        ...n,
        name: drafts[id].name.trim()
      }));
      return next;
    });
    setDescs(s => {
      const next = {
        ...s
      };
      for (const id of dirtyIds) next[id] = drafts[id].desc;
      return next;
    });
    setDrafts({});
    setSaveErrors(false);
  };
  const startNew = () => {
    setIsNew(true);
    setDraftName('');
    setDraftDesc('');
    setDraftActive(true);
    setShowErrors(false);
    setSel(new Set());
  };
  const openNew = () => {
    const parentOfSel = tree.find(p => p.id === selected || (p.children || []).some(c => c.id === selected));
    setNewCategory((parentOfSel || tree[0]).id);
    setNewName('');
    setNewErr(false);
    setShowNew(true);
  };
  const createSubItem = () => {
    if (!newName.trim()) {
      setNewErr(true);
      return;
    }
    const newId = String(Date.now());
    setTree(t => t.map(p => p.id === newCategory ? {
      ...p,
      expanded: true,
      children: [...(p.children || []), {
        id: newId,
        name: newName.trim(),
        active: true
      }]
    } : p));
    setSelected(newId);
    setSel(new Set());
    setShowNew(false);
    setNewName('');
    setNewErr(false);
  };
  const duplicateCurrent = () => {
    setIsNew(true);
    setDraftName(`${name} Copy`);
    setDraftDesc(descs[current.id] ?? '');
    setDraftActive(current.active);
    setShowErrors(false);
    setSel(new Set());
  };
  const cancelNew = () => {
    setIsNew(false);
    setDraftName('');
    setDraftDesc('');
    setShowErrors(false);
  };
  const createNew = () => {
    const trimmed = draftName.trim();
    if (!trimmed || dupName) {
      setShowErrors(true);
      return;
    }
    const newId = String(Date.now());
    setTree(t => [...t, {
      id: newId,
      name: trimmed,
      active: draftActive,
      expanded: false,
      children: []
    }]);
    setDescs(s => ({
      ...s,
      [newId]: draftDesc
    }));
    setSelected(newId);
    setIsNew(false);
    setShowErrors(false);
  };
  const canCreate = draftName.trim().length > 0;
  const dupName = isNew && draftName.trim() && nodes.some(n => n.name.toLowerCase() === draftName.trim().toLowerCase());
  const nameError = isNew && showErrors ? !canCreate ? 'Name is required' : dupName ? `"${draftName.trim()}" already exists` : null : null;

  // ─── Filtering → visible flat rows ──────────────────────────────────────
  const matches = n => (filter === 'all' || (filter === 'active' ? n.active : !n.active)) && (!q || n.name.toLowerCase().includes(q.toLowerCase()));
  const rows = [];
  tree.forEach(p => {
    const kids = p.children || [];
    const visKids = kids.filter(matches);
    const parentSelfMatch = matches(p);
    if (!parentSelfMatch && visKids.length === 0) return;
    rows.push({
      node: p,
      level: 0,
      hasChildren: kids.length > 0,
      expanded: p.expanded,
      childCount: kids.length
    });
    if (p.expanded) {
      // when searching/filtering, only show matching children; otherwise all
      const show = q || filter !== 'all' ? visKids : kids;
      show.forEach((c, ci) => rows.push({
        node: c,
        level: 1,
        hasChildren: false,
        childCount: 0,
        parentId: p.id,
        isLast: ci === show.length - 1
      }));
    }
  });
  const counts = {
    all: nodes.length,
    active: nodes.filter(n => n.active).length,
    inactive: nodes.filter(n => !n.active).length
  };
  const toggleSel = id => setSel(s => {
    const n = new Set(s);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  });
  const visibleIds = rows.map(r => r.node.id);
  const allVisibleSelected = visibleIds.length > 0 && visibleIds.every(id => sel.has(id));
  const selectAllVisible = () => setSel(s => {
    const n = new Set(s);
    if (allVisibleSelected) visibleIds.forEach(id => n.delete(id));else visibleIds.forEach(id => n.add(id));
    return n;
  });
  const bulk = active => {
    setTree(t => t.map(p => ({
      ...p,
      active: sel.has(p.id) ? active : p.active,
      children: (p.children || []).map(c => sel.has(c.id) ? {
        ...c,
        active
      } : c)
    })));
    setSel(new Set());
  };
  const selectedNodes = nodes.filter(n => sel.has(n.id));
  const allSelectedActive = selectedNodes.every(n => n.active);
  const allSelectedInactive = selectedNodes.every(n => !n.active);
  const headerExtras = /*#__PURE__*/React.createElement("div", {
    className: "sf-header-extras"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sf-header-meta"
  }, "Last edited by Marlee K. \xB7 Apr 22, 2026"), /*#__PURE__*/React.createElement("div", {
    className: "sf-header-divider"
  }), /*#__PURE__*/React.createElement(LinkBtn, {
    icon: /*#__PURE__*/React.createElement(I.history, {
      size: 13
    }),
    muted: true,
    onClick: () => setShowLog(true)
  }, "Change Log"), /*#__PURE__*/React.createElement("div", {
    ref: importRef,
    className: "sf-dropdown-anchor"
  }, /*#__PURE__*/React.createElement(LinkBtn, {
    icon: /*#__PURE__*/React.createElement(I.upload, {
      size: 13
    }),
    muted: true,
    onClick: () => setImportOpen(o => !o),
    rightIcon: /*#__PURE__*/React.createElement(I.chevDown, {
      size: 11
    })
  }, "Import"), importOpen && /*#__PURE__*/React.createElement("div", {
    className: "sf-dropdown-menu"
  }, /*#__PURE__*/React.createElement("button", {
    className: "sf-dropdown-item",
    onClick: () => setImportOpen(false)
  }, /*#__PURE__*/React.createElement(I.download, {
    size: 14,
    className: "sf-dropdown-item-icon"
  }), "Download Import Template"), /*#__PURE__*/React.createElement("div", {
    className: "sf-dropdown-divider"
  }), /*#__PURE__*/React.createElement("button", {
    className: "sf-dropdown-item",
    onClick: () => setImportOpen(false)
  }, /*#__PURE__*/React.createElement(I.upload, {
    size: 14,
    className: "sf-dropdown-item-icon"
  }), "Import from XLS"))), /*#__PURE__*/React.createElement("div", {
    ref: exportRef,
    className: "sf-dropdown-anchor"
  }, /*#__PURE__*/React.createElement(LinkBtn, {
    icon: /*#__PURE__*/React.createElement(I.download, {
      size: 13
    }),
    muted: true,
    onClick: () => setExportOpen(o => !o),
    rightIcon: /*#__PURE__*/React.createElement(I.chevDown, {
      size: 11
    })
  }, "Export"), exportOpen && /*#__PURE__*/React.createElement("div", {
    className: "sf-dropdown-menu"
  }, /*#__PURE__*/React.createElement("button", {
    className: "sf-dropdown-item",
    onClick: () => setExportOpen(false)
  }, /*#__PURE__*/React.createElement(I.sheet, {
    size: 14,
    className: "sf-dropdown-item-icon"
  }), "Export to XLS"), /*#__PURE__*/React.createElement("div", {
    className: "sf-dropdown-divider"
  }), /*#__PURE__*/React.createElement("button", {
    className: "sf-dropdown-item",
    onClick: () => setExportOpen(false)
  }, /*#__PURE__*/React.createElement(I.file, {
    size: 14,
    className: "sf-dropdown-item-icon"
  }), "Export to CSV"))));
  const footer = isNew ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Btn, {
    key: "popout",
    size: "md",
    kind: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(I.popout, null),
    style: {
      minWidth: 116
    }
  }, "Popout"), /*#__PURE__*/React.createElement(Btn, {
    key: "settings",
    size: "md",
    kind: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(I.cog, null),
    style: {
      minWidth: 116
    }
  }, "Settings"), /*#__PURE__*/React.createElement("div", {
    className: "sf-footer-spacer"
  }), /*#__PURE__*/React.createElement(Btn, {
    key: "cancel",
    size: "md",
    kind: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(I.x, null),
    onClick: cancelNew,
    style: {
      minWidth: 116
    }
  }, "Cancel"), /*#__PURE__*/React.createElement(Btn, {
    key: "create",
    size: "md",
    kind: "action",
    leftIcon: /*#__PURE__*/React.createElement(I.plus, null),
    onClick: createNew,
    style: {
      minWidth: 116
    }
  }, "Create")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Btn, {
    key: "popout",
    size: "md",
    kind: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(I.popout, null),
    style: {
      minWidth: 116
    }
  }, "Popout"), /*#__PURE__*/React.createElement(Btn, {
    key: "settings",
    size: "md",
    kind: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(I.cog, null),
    style: {
      minWidth: 116
    }
  }, "Settings"), /*#__PURE__*/React.createElement("div", {
    className: "sf-footer-spacer"
  }), Object.keys(drafts).length > 0 && /*#__PURE__*/React.createElement("span", {
    className: "sf-footer-unsaved"
  }, "Unsaved changes"), /*#__PURE__*/React.createElement(Btn, {
    key: "close",
    size: "md",
    kind: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(I.x, null),
    style: {
      minWidth: 116
    }
  }, "Close"), /*#__PURE__*/React.createElement(Btn, {
    key: "save",
    size: "md",
    kind: "action",
    leftIcon: /*#__PURE__*/React.createElement(I.save, null),
    onClick: handleSave,
    style: {
      minWidth: 116
    }
  }, "Save"));
  return /*#__PURE__*/React.createElement(FormCard, {
    title: "Form with Tree Control",
    width: 1280,
    height: 720,
    headerExtras: headerExtras,
    footer: footer
  }, showLog && /*#__PURE__*/React.createElement(ChangeLogModal, {
    onClose: () => setShowLog(false)
  }), showNew && /*#__PURE__*/React.createElement(NewItemModal, {
    categories: tree.map(p => ({
      value: p.id,
      label: p.name
    })),
    category: newCategory,
    onCategory: setNewCategory,
    name: newName,
    onName: v => {
      setNewName(v);
      if (newErr) setNewErr(false);
    },
    error: newErr,
    onCancel: () => setShowNew(false),
    onCreate: createSubItem
  }), /*#__PURE__*/React.createElement("div", {
    className: "sf-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sf-list-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sf-list-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sf-list-head-row"
  }, /*#__PURE__*/React.createElement(Input, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search\u2026",
    prefix: /*#__PURE__*/React.createElement(I.search, {
      size: 14
    }),
    disabled: isNew
  }), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "primary",
    leftIcon: /*#__PURE__*/React.createElement(I.plus, null),
    onClick: openNew,
    disabled: isNew,
    style: {
      height: 34
    }
  }, "New")), /*#__PURE__*/React.createElement(Segmented, {
    size: "sm",
    value: filter,
    onChange: setFilter,
    options: [{
      value: 'all',
      label: `All ${counts.all}`
    }, {
      value: 'active',
      label: `Active ${counts.active}`
    }, {
      value: 'inactive',
      label: `Inactive ${counts.inactive}`
    }]
  })), isNew ? /*#__PURE__*/React.createElement("div", {
    className: "sf-bar sf-bar--brand"
  }, /*#__PURE__*/React.createElement(I.plus, {
    size: 13,
    className: "sf-bar-icon"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sf-bar-label--brand"
  }, "Creating new item"), /*#__PURE__*/React.createElement("div", {
    className: "sf-bar-spacer"
  }), /*#__PURE__*/React.createElement(LinkBtn, {
    onClick: cancelNew,
    muted: true
  }, "Cancel")) : sel.size > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "sf-bar sf-bar--brand"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "sf-bar-checkbox",
    checked: allVisibleSelected,
    ref: el => {
      if (el) el.indeterminate = !allVisibleSelected && sel.size > 0;
    },
    onChange: selectAllVisible
  }), /*#__PURE__*/React.createElement("span", {
    className: "sf-bar-label--brand sf-bar-label--clickable",
    onClick: () => setSel(new Set())
  }, sel.size, " Selected"), /*#__PURE__*/React.createElement("div", {
    className: "sf-bar-spacer"
  }), /*#__PURE__*/React.createElement(LinkBtn, {
    icon: /*#__PURE__*/React.createElement(I.check, {
      size: 13
    }),
    onClick: () => bulk(true),
    disabled: allSelectedActive
  }, "Activate"), /*#__PURE__*/React.createElement(LinkBtn, {
    icon: /*#__PURE__*/React.createElement(I.archive, {
      size: 13
    }),
    onClick: () => bulk(false),
    disabled: allSelectedInactive
  }, "Deactivate"), /*#__PURE__*/React.createElement(LinkBtn, {
    onClick: () => setSel(new Set()),
    muted: true
  }, "Clear")) : /*#__PURE__*/React.createElement("div", {
    className: "sf-bar sf-bar--plain"
  }, /*#__PURE__*/React.createElement("label", {
    className: "sf-select-all-label"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "sf-bar-checkbox",
    checked: false,
    onChange: selectAllVisible
  }), /*#__PURE__*/React.createElement("span", null, "Select All"))), /*#__PURE__*/React.createElement("div", {
    className: "sf-list-scroll"
  }, isNew && /*#__PURE__*/React.createElement("div", {
    className: "sf-draft-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sf-draft-placeholder-box"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sf-draft-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: tcx('sf-draft-name', draftName && 'sf-draft-name--has-value')
  }, draftName || 'New item…'))), rows.map(({
    node: it,
    level,
    hasChildren,
    expanded,
    childCount,
    isLast
  }) => {
    const isSel = !isNew && it.id === selected;
    const isChecked = sel.has(it.id);
    const isHover = !isNew && hoverId === it.id && !isSel;
    const showUnsaved = !isNew && isDirtyId(it.id);
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      className: tcx('sf-row', isNew && 'sf-row--dimmed', isSel && 'sf-row--selected', !isSel && isChecked && 'sf-row--checked', !isSel && !isChecked && isHover && 'sf-row--hover'),
      style: {
        paddingLeft: 14 + level * 24
      },
      onMouseEnter: () => setHoverId(it.id),
      onMouseLeave: () => setHoverId(s => s === it.id ? null : s),
      onClick: () => !isNew && setSelected(it.id)
    }, level === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 25,
        top: 0,
        height: isLast ? '50%' : '100%',
        width: 1,
        background: C.border,
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 25,
        top: '50%',
        width: 15,
        height: 1,
        background: C.border,
        pointerEvents: 'none'
      }
    })), level === 0 ? hasChildren ? /*#__PURE__*/React.createElement("button", {
      onClick: e => {
        e.stopPropagation();
        if (!isNew) toggleExpanded(it.id);
      },
      disabled: isNew,
      "aria-label": expanded ? 'Collapse' : 'Expand',
      style: {
        width: 22,
        height: 22,
        padding: 0,
        marginRight: 6,
        flex: '0 0 auto',
        border: `1px solid ${C.border}`,
        borderRadius: 6,
        background: C.surface,
        color: C.ink,
        cursor: isNew ? 'default' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 1px 1px rgba(20,16,10,0.03)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        transform: expanded ? 'rotate(0deg)' : 'rotate(-90deg)',
        transition: 'transform .12s'
      }
    }, /*#__PURE__*/React.createElement(I.chevDown, {
      size: 14
    }))) : /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        marginRight: 6,
        flex: '0 0 auto'
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        flex: '0 0 auto'
      }
    }), /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      className: "sf-row-checkbox",
      checked: isChecked,
      onChange: () => toggleSel(it.id),
      onClick: e => e.stopPropagation(),
      disabled: isNew
    }), /*#__PURE__*/React.createElement("div", {
      className: "sf-row-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: tcx('sf-row-name', isSel && 'sf-row-name--selected', !it.active && !isSel && 'sf-row-name--inactive')
    }, it.name, level === 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        fontSize: 12,
        fontWeight: 500,
        color: C.subtle
      }
    }, "(", childCount, ")")), showUnsaved && /*#__PURE__*/React.createElement("span", {
      className: "sf-row-unsaved-tag"
    }, "Unsaved")), /*#__PURE__*/React.createElement(Toggle, {
      checked: it.active,
      onChange: () => toggleActive(it.id),
      size: "sm"
    }), /*#__PURE__*/React.createElement(I.chevRight, {
      size: 14,
      className: "sf-row-chev"
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sf-form-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sf-form-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sf-form-header-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: tcx('sf-form-overline', isNew && 'sf-form-overline--new')
  }, isNew ? 'New item' : 'Editing'), /*#__PURE__*/React.createElement("div", {
    className: tcx('sf-form-title', isNew && !draftName && 'sf-form-title--placeholder')
  }, isNew ? draftName || 'Untitled item' : name || 'Untitled item')), isNew ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "sf-keyhint"
  }, /*#__PURE__*/React.createElement("kbd", null, "Enter"), " to create \xB7 ", /*#__PURE__*/React.createElement("kbd", null, "Esc"), " to cancel"), /*#__PURE__*/React.createElement(Pill, {
    tone: "primary"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sf-pill-dot sf-pill-dot--brand"
  }), "Draft")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Btn, {
    kind: "ghost",
    size: "sm",
    leftIcon: /*#__PURE__*/React.createElement(I.copy, null),
    onClick: duplicateCurrent
  }, "Duplicate"), /*#__PURE__*/React.createElement(Pill, {
    tone: current.active ? 'active' : 'inactive'
  }, /*#__PURE__*/React.createElement("span", {
    className: tcx('sf-pill-dot', current.active ? 'sf-pill-dot--active' : 'sf-pill-dot--inactive')
  }), current.active ? 'Active' : 'Inactive'))), /*#__PURE__*/React.createElement("div", {
    className: "sf-form-body"
  }, isNew ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    required: true,
    error: nameError
  }, /*#__PURE__*/React.createElement(Input, {
    value: draftName,
    onChange: e => {
      setDraftName(e.target.value);
      if (showErrors) setShowErrors(false);
    },
    autoFocus: true,
    error: !!nameError,
    onKeyDown: e => {
      if (e.key === 'Enter') createNew();
      if (e.key === 'Escape') cancelNew();
    }
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Description"
  }, /*#__PURE__*/React.createElement(Textarea, {
    value: draftDesc,
    onChange: e => setDraftDesc(e.target.value),
    rows: 4
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    required: true,
    error: saveNameError
  }, /*#__PURE__*/React.createElement(Input, {
    value: name,
    onChange: e => {
      setName(e.target.value);
      if (saveErrors) setSaveErrors(false);
    },
    error: !!saveNameError
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Description"
  }, /*#__PURE__*/React.createElement(Textarea, {
    value: desc,
    onChange: e => setDesc(e.target.value),
    rows: 4
  })))))));
}
function NewItemModal({
  categories,
  category,
  onCategory,
  name,
  onName,
  error,
  onCancel,
  onCreate
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onCancel,
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 12,
      background: 'rgba(20,16,10,0.28)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 380,
      maxWidth: '100%',
      background: C.surface,
      border: `1px solid ${C.border}`,
      borderRadius: 10,
      boxShadow: C.shadowLg,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      fontFamily: 'inherit',
      color: C.ink
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '14px 18px',
      borderBottom: `1px solid ${C.border}`,
      background: C.listBg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: '-0.01em'
    }
  }, "New item"), /*#__PURE__*/React.createElement("button", {
    onClick: onCancel,
    style: {
      width: 28,
      height: 28,
      borderRadius: 6,
      border: 'none',
      background: 'transparent',
      color: C.muted,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(I.x, {
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Category",
    required: true,
    labelStyle: {
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(Select, {
    value: category,
    onChange: e => onCategory(e.target.value),
    options: categories
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Sub-item name",
    required: true,
    error: error ? 'Name is required' : null,
    labelStyle: {
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: name,
    onChange: e => onName(e.target.value),
    placeholder: "e.g. Panel Cleaning",
    autoFocus: true,
    error: !!error,
    onKeyDown: e => {
      if (e.key === 'Enter') onCreate();
      if (e.key === 'Escape') onCancel();
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 10,
      padding: '12px 18px',
      borderTop: `1px solid ${C.border}`,
      background: C.listBg
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    size: "md",
    kind: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(I.x, null),
    onClick: onCancel,
    style: {
      minWidth: 104
    }
  }, "Cancel"), /*#__PURE__*/React.createElement(Btn, {
    size: "md",
    kind: "action",
    leftIcon: /*#__PURE__*/React.createElement(I.plus, null),
    onClick: onCreate,
    style: {
      minWidth: 104
    }
  }, "Create"))));
}
window.SimpleFormPrototypeV2Tree = SimpleFormPrototypeV2Tree;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-settings/simpleForm-v2-tree.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-settings/simpleForm-v2.jsx
try { (() => {
// Simple form v2 — toggle per row + bulk activate/deactivate via checkboxes.
// All visual styling lives in simpleForm-v2.css; this file is structure + behavior.

const SIMPLE_V2_SAMPLE = [{
  id: '1',
  name: 'Discovery',
  usage: 142,
  active: true
}, {
  id: '2',
  name: 'Design',
  usage: 88,
  active: true
}, {
  id: '3',
  name: 'Permitting',
  usage: 31,
  active: true
}, {
  id: '4',
  name: 'Installation',
  usage: 312,
  active: true
}, {
  id: '5',
  name: 'Commissioning',
  usage: 67,
  active: true
}, {
  id: '6',
  name: 'Final Inspection',
  usage: 124,
  active: true
}, {
  id: '7',
  name: 'Closeout',
  usage: 56,
  active: true
}, {
  id: '8',
  name: 'Pre-Sales',
  usage: 4,
  active: false
}, {
  id: '9',
  name: 'Lead Qualification',
  usage: 0,
  active: false
}];

// Helper: concatenate truthy class names.
const sfcx = (...names) => names.filter(Boolean).join(' ');
function SimpleFormPrototypeV2() {
  const [items, setItems] = React.useState(SIMPLE_V2_SAMPLE);
  const [selected, setSelected] = React.useState('4');
  const [filter, setFilter] = React.useState('all');
  const [q, setQ] = React.useState('');
  const [sel, setSel] = React.useState(new Set());
  const [isNew, setIsNew] = React.useState(false);
  const [draftName, setDraftName] = React.useState('');
  const [draftDesc, setDraftDesc] = React.useState('');
  const [draftActive, setDraftActive] = React.useState(true);
  const [showErrors, setShowErrors] = React.useState(false);
  const [saveErrors, setSaveErrors] = React.useState(false);
  const [showLog, setShowLog] = React.useState(false);
  const [hoverId, setHoverId] = React.useState(null);
  const [importOpen, setImportOpen] = React.useState(false);
  const importRef = React.useRef(null);
  const [exportOpen, setExportOpen] = React.useState(false);
  const exportRef = React.useRef(null);
  React.useEffect(() => {
    if (!importOpen) return;
    const onDown = e => {
      if (importRef.current && !importRef.current.contains(e.target)) setImportOpen(false);
    };
    window.addEventListener('mousedown', onDown);
    return () => window.removeEventListener('mousedown', onDown);
  }, [importOpen]);
  React.useEffect(() => {
    if (!exportOpen) return;
    const onDown = e => {
      if (exportRef.current && !exportRef.current.contains(e.target)) setExportOpen(false);
    };
    window.addEventListener('mousedown', onDown);
    return () => window.removeEventListener('mousedown', onDown);
  }, [exportOpen]);
  const current = items.find(i => i.id === selected) || items[0];
  const INITIAL_DESCS = {
    '4': 'Standard residential installation item covering panel mounting, electrical work, and inverter setup.'
  };
  const [descs, setDescs] = React.useState(INITIAL_DESCS); // saved descriptions by id
  const [drafts, setDrafts] = React.useState({}); // id -> { name, desc } — only present while dirty

  const canonicalName = id => items.find(i => i.id === id)?.name ?? '';
  const canonicalDesc = id => descs[id] ?? '';
  const isDirtyId = id => !!drafts[id];
  const name = drafts[selected]?.name ?? canonicalName(selected);
  const desc = drafts[selected]?.desc ?? canonicalDesc(selected);
  const isDirty = isDirtyId(selected);
  const setName = newName => {
    setDrafts(s => {
      const cN = canonicalName(selected);
      const cD = canonicalDesc(selected);
      const curDesc = s[selected]?.desc ?? cD;
      if (newName === cN && curDesc === cD) {
        const {
          [selected]: _,
          ...rest
        } = s;
        return rest;
      }
      return {
        ...s,
        [selected]: {
          name: newName,
          desc: curDesc
        }
      };
    });
  };
  const setDesc = newDesc => {
    setDrafts(s => {
      const cN = canonicalName(selected);
      const cD = canonicalDesc(selected);
      const curName = s[selected]?.name ?? cN;
      if (curName === cN && newDesc === cD) {
        const {
          [selected]: _,
          ...rest
        } = s;
        return rest;
      }
      return {
        ...s,
        [selected]: {
          name: curName,
          desc: newDesc
        }
      };
    });
  };
  React.useEffect(() => {
    setSaveErrors(false);
  }, [selected]);
  const saveNameError = saveErrors && !name.trim() ? 'Name is required' : null;
  const handleSave = () => {
    const dirtyIds = Object.keys(drafts);
    if (dirtyIds.length === 0) return;
    const badId = dirtyIds.find(id => !(drafts[id].name ?? '').trim());
    if (badId) {
      if (selected !== badId) setSelected(badId);
      setSaveErrors(true);
      return;
    }
    setItems(s => s.map(i => drafts[i.id] ? {
      ...i,
      name: drafts[i.id].name.trim()
    } : i));
    setDescs(s => {
      const next = {
        ...s
      };
      for (const id of dirtyIds) next[id] = drafts[id].desc;
      return next;
    });
    setDrafts({});
    setSaveErrors(false);
  };
  const startNew = () => {
    setIsNew(true);
    setDraftName('');
    setDraftDesc('');
    setDraftActive(true);
    setShowErrors(false);
    setSel(new Set());
  };
  const duplicateCurrent = () => {
    setIsNew(true);
    setDraftName(`${name} Copy`);
    setDraftDesc(descs[current.id] ?? '');
    setDraftActive(current.active);
    setShowErrors(false);
    setSel(new Set());
  };
  const cancelNew = () => {
    setIsNew(false);
    setDraftName('');
    setDraftDesc('');
    setShowErrors(false);
  };
  const createNew = () => {
    const trimmed = draftName.trim();
    if (!trimmed || dupName) {
      setShowErrors(true);
      return;
    }
    const newId = String(Date.now());
    setItems(s => [...s, {
      id: newId,
      name: trimmed,
      usage: 0,
      active: draftActive
    }]);
    setDescs(s => ({
      ...s,
      [newId]: draftDesc
    }));
    setSelected(newId);
    setIsNew(false);
    setShowErrors(false);
  };
  const canCreate = draftName.trim().length > 0;
  const dupName = isNew && draftName.trim() && items.some(i => i.name.toLowerCase() === draftName.trim().toLowerCase());
  const nameError = isNew && showErrors ? !canCreate ? 'Name is required' : dupName ? `"${draftName.trim()}" already exists` : null : null;
  const filtered = items.filter(i => filter === 'all' || (filter === 'active' ? i.active : !i.active)).filter(i => !q || i.name.toLowerCase().includes(q.toLowerCase())).slice().sort((a, b) => a.active === b.active ? a.name.localeCompare(b.name) : a.active ? -1 : 1);
  const counts = {
    all: items.length,
    active: items.filter(i => i.active).length,
    inactive: items.filter(i => !i.active).length
  };
  const toggle = id => setItems(s => s.map(i => i.id === id ? {
    ...i,
    active: !i.active
  } : i));
  const toggleSel = id => setSel(s => {
    const n = new Set(s);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  });
  const allFilteredSelected = filtered.length > 0 && filtered.every(i => sel.has(i.id));
  const selectAllFiltered = () => setSel(s => {
    const n = new Set(s);
    if (allFilteredSelected) filtered.forEach(i => n.delete(i.id));else filtered.forEach(i => n.add(i.id));
    return n;
  });
  const bulk = active => {
    setItems(s => s.map(i => sel.has(i.id) ? {
      ...i,
      active
    } : i));
    setSel(new Set());
  };
  const selectedRows = items.filter(i => sel.has(i.id));
  const allSelectedActive = selectedRows.every(i => i.active);
  const allSelectedInactive = selectedRows.every(i => !i.active);
  const headerExtras = /*#__PURE__*/React.createElement("div", {
    className: "sf-header-extras"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sf-header-meta"
  }, "Last edited by Marlee K. \xB7 Apr 22, 2026"), /*#__PURE__*/React.createElement("div", {
    className: "sf-header-divider"
  }), /*#__PURE__*/React.createElement(LinkBtn, {
    icon: /*#__PURE__*/React.createElement(I.history, {
      size: 13
    }),
    muted: true,
    onClick: () => setShowLog(true)
  }, "Change Log"), /*#__PURE__*/React.createElement("div", {
    ref: importRef,
    className: "sf-dropdown-anchor"
  }, /*#__PURE__*/React.createElement(LinkBtn, {
    icon: /*#__PURE__*/React.createElement(I.upload, {
      size: 13
    }),
    muted: true,
    onClick: () => setImportOpen(o => !o),
    rightIcon: /*#__PURE__*/React.createElement(I.chevDown, {
      size: 11
    })
  }, "Import"), importOpen && /*#__PURE__*/React.createElement("div", {
    className: "sf-dropdown-menu"
  }, /*#__PURE__*/React.createElement("button", {
    className: "sf-dropdown-item",
    onClick: () => setImportOpen(false)
  }, /*#__PURE__*/React.createElement(I.download, {
    size: 14,
    className: "sf-dropdown-item-icon"
  }), "Download Import Template"), /*#__PURE__*/React.createElement("div", {
    className: "sf-dropdown-divider"
  }), /*#__PURE__*/React.createElement("button", {
    className: "sf-dropdown-item",
    onClick: () => setImportOpen(false)
  }, /*#__PURE__*/React.createElement(I.upload, {
    size: 14,
    className: "sf-dropdown-item-icon"
  }), "Import from XLS"))), /*#__PURE__*/React.createElement("div", {
    ref: exportRef,
    className: "sf-dropdown-anchor"
  }, /*#__PURE__*/React.createElement(LinkBtn, {
    icon: /*#__PURE__*/React.createElement(I.download, {
      size: 13
    }),
    muted: true,
    onClick: () => setExportOpen(o => !o),
    rightIcon: /*#__PURE__*/React.createElement(I.chevDown, {
      size: 11
    })
  }, "Export"), exportOpen && /*#__PURE__*/React.createElement("div", {
    className: "sf-dropdown-menu"
  }, /*#__PURE__*/React.createElement("button", {
    className: "sf-dropdown-item",
    onClick: () => setExportOpen(false)
  }, /*#__PURE__*/React.createElement(I.sheet, {
    size: 14,
    className: "sf-dropdown-item-icon"
  }), "Export to XLS"), /*#__PURE__*/React.createElement("div", {
    className: "sf-dropdown-divider"
  }), /*#__PURE__*/React.createElement("button", {
    className: "sf-dropdown-item",
    onClick: () => setExportOpen(false)
  }, /*#__PURE__*/React.createElement(I.file, {
    size: 14,
    className: "sf-dropdown-item-icon"
  }), "Export to CSV"))));
  const footer = isNew ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Btn, {
    key: "popout",
    size: "md",
    kind: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(I.popout, null),
    style: {
      minWidth: 116
    }
  }, "Popout"), /*#__PURE__*/React.createElement(Btn, {
    key: "settings",
    size: "md",
    kind: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(I.cog, null),
    style: {
      minWidth: 116
    }
  }, "Settings"), /*#__PURE__*/React.createElement("div", {
    className: "sf-footer-spacer"
  }), /*#__PURE__*/React.createElement(Btn, {
    key: "cancel",
    size: "md",
    kind: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(I.x, null),
    onClick: cancelNew,
    style: {
      minWidth: 116
    }
  }, "Cancel"), /*#__PURE__*/React.createElement(Btn, {
    key: "create",
    size: "md",
    kind: "action",
    leftIcon: /*#__PURE__*/React.createElement(I.plus, null),
    onClick: createNew,
    style: {
      minWidth: 116
    }
  }, "Create")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Btn, {
    key: "popout",
    size: "md",
    kind: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(I.popout, null),
    style: {
      minWidth: 116
    }
  }, "Popout"), /*#__PURE__*/React.createElement(Btn, {
    key: "settings",
    size: "md",
    kind: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(I.cog, null),
    style: {
      minWidth: 116
    }
  }, "Settings"), /*#__PURE__*/React.createElement("div", {
    className: "sf-footer-spacer"
  }), Object.keys(drafts).length > 0 && /*#__PURE__*/React.createElement("span", {
    className: "sf-footer-unsaved"
  }, "Unsaved changes"), /*#__PURE__*/React.createElement(Btn, {
    key: "close",
    size: "md",
    kind: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(I.x, null),
    style: {
      minWidth: 116
    }
  }, "Close"), /*#__PURE__*/React.createElement(Btn, {
    key: "save",
    size: "md",
    kind: "action",
    leftIcon: /*#__PURE__*/React.createElement(I.save, null),
    onClick: handleSave,
    style: {
      minWidth: 116
    }
  }, "Save"));
  return /*#__PURE__*/React.createElement(FormCard, {
    title: "Standard Template",
    width: 1280,
    height: 720,
    headerExtras: headerExtras,
    footer: footer
  }, showLog && /*#__PURE__*/React.createElement(ChangeLogModal, {
    onClose: () => setShowLog(false)
  }), /*#__PURE__*/React.createElement("div", {
    className: "sf-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sf-list-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sf-list-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sf-list-head-row"
  }, /*#__PURE__*/React.createElement(Input, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search\u2026",
    prefix: /*#__PURE__*/React.createElement(I.search, {
      size: 14
    }),
    disabled: isNew
  }), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "primary",
    leftIcon: /*#__PURE__*/React.createElement(I.plus, null),
    onClick: startNew,
    disabled: isNew,
    style: {
      height: 34
    }
  }, "New")), /*#__PURE__*/React.createElement(Segmented, {
    size: "sm",
    value: filter,
    onChange: setFilter,
    options: [{
      value: 'all',
      label: `All ${counts.all}`
    }, {
      value: 'active',
      label: `Active ${counts.active}`
    }, {
      value: 'inactive',
      label: `Inactive ${counts.inactive}`
    }]
  })), isNew ? /*#__PURE__*/React.createElement("div", {
    className: "sf-bar sf-bar--brand"
  }, /*#__PURE__*/React.createElement(I.plus, {
    size: 13,
    className: "sf-bar-icon"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sf-bar-label--brand"
  }, "Creating new item"), /*#__PURE__*/React.createElement("div", {
    className: "sf-bar-spacer"
  }), /*#__PURE__*/React.createElement(LinkBtn, {
    onClick: cancelNew,
    muted: true
  }, "Cancel")) : sel.size > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "sf-bar sf-bar--brand"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "sf-bar-checkbox",
    checked: allFilteredSelected,
    ref: el => {
      if (el) el.indeterminate = !allFilteredSelected && sel.size > 0;
    },
    onChange: selectAllFiltered
  }), /*#__PURE__*/React.createElement("span", {
    className: "sf-bar-label--brand sf-bar-label--clickable",
    onClick: () => setSel(new Set())
  }, sel.size, " Selected"), /*#__PURE__*/React.createElement("div", {
    className: "sf-bar-spacer"
  }), /*#__PURE__*/React.createElement(LinkBtn, {
    icon: /*#__PURE__*/React.createElement(I.check, {
      size: 13
    }),
    onClick: () => bulk(true),
    disabled: allSelectedActive
  }, "Activate"), /*#__PURE__*/React.createElement(LinkBtn, {
    icon: /*#__PURE__*/React.createElement(I.archive, {
      size: 13
    }),
    onClick: () => bulk(false),
    disabled: allSelectedInactive
  }, "Deactivate"), /*#__PURE__*/React.createElement(LinkBtn, {
    onClick: () => setSel(new Set()),
    muted: true
  }, "Clear")) : /*#__PURE__*/React.createElement("div", {
    className: "sf-bar sf-bar--plain"
  }, /*#__PURE__*/React.createElement("label", {
    className: "sf-select-all-label"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "sf-bar-checkbox",
    checked: false,
    onChange: selectAllFiltered
  }), /*#__PURE__*/React.createElement("span", null, "Select All"))), /*#__PURE__*/React.createElement("div", {
    className: "sf-list-scroll"
  }, isNew && /*#__PURE__*/React.createElement("div", {
    className: "sf-draft-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sf-draft-placeholder-box"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sf-draft-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: sfcx('sf-draft-name', draftName && 'sf-draft-name--has-value')
  }, draftName || 'New item…'))), filtered.map(it => {
    const isSel = !isNew && it.id === selected;
    const isChecked = sel.has(it.id);
    const isHover = !isNew && hoverId === it.id && !isSel;
    const showUnsaved = !isNew && isDirtyId(it.id);
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      className: sfcx('sf-row', isNew && 'sf-row--dimmed', isSel && 'sf-row--selected', !isSel && isChecked && 'sf-row--checked', !isSel && !isChecked && isHover && 'sf-row--hover'),
      onMouseEnter: () => setHoverId(it.id),
      onMouseLeave: () => setHoverId(s => s === it.id ? null : s),
      onClick: () => !isNew && setSelected(it.id)
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      className: "sf-row-checkbox",
      checked: isChecked,
      onChange: () => toggleSel(it.id),
      onClick: e => e.stopPropagation(),
      disabled: isNew
    }), /*#__PURE__*/React.createElement("div", {
      className: "sf-row-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: sfcx('sf-row-name', isSel && 'sf-row-name--selected', !it.active && !isSel && 'sf-row-name--inactive')
    }, it.name), showUnsaved && /*#__PURE__*/React.createElement("span", {
      className: "sf-row-unsaved-tag"
    }, "Unsaved")), /*#__PURE__*/React.createElement(Toggle, {
      checked: it.active,
      onChange: () => toggle(it.id),
      size: "sm"
    }), /*#__PURE__*/React.createElement(I.chevRight, {
      size: 14,
      className: "sf-row-chev"
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sf-form-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sf-form-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sf-form-header-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: sfcx('sf-form-overline', isNew && 'sf-form-overline--new')
  }, isNew ? 'New item' : 'Editing'), /*#__PURE__*/React.createElement("div", {
    className: sfcx('sf-form-title', isNew && !draftName && 'sf-form-title--placeholder')
  }, isNew ? draftName || 'Untitled item' : name || 'Untitled item')), isNew ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "sf-keyhint"
  }, /*#__PURE__*/React.createElement("kbd", null, "Enter"), " to create \xB7 ", /*#__PURE__*/React.createElement("kbd", null, "Esc"), " to cancel"), /*#__PURE__*/React.createElement(Pill, {
    tone: "primary"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sf-pill-dot sf-pill-dot--brand"
  }), "Draft")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Btn, {
    kind: "ghost",
    size: "sm",
    leftIcon: /*#__PURE__*/React.createElement(I.copy, null),
    onClick: duplicateCurrent
  }, "Duplicate"), /*#__PURE__*/React.createElement(Pill, {
    tone: current.active ? 'active' : 'inactive'
  }, /*#__PURE__*/React.createElement("span", {
    className: sfcx('sf-pill-dot', current.active ? 'sf-pill-dot--active' : 'sf-pill-dot--inactive')
  }), current.active ? 'Active' : 'Inactive'))), /*#__PURE__*/React.createElement("div", {
    className: "sf-form-body"
  }, isNew ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    required: true,
    error: nameError
  }, /*#__PURE__*/React.createElement(Input, {
    value: draftName,
    onChange: e => {
      setDraftName(e.target.value);
      if (showErrors) setShowErrors(false);
    },
    autoFocus: true,
    error: !!nameError,
    onKeyDown: e => {
      if (e.key === 'Enter') createNew();
      if (e.key === 'Escape') cancelNew();
    }
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Description"
  }, /*#__PURE__*/React.createElement(Textarea, {
    value: draftDesc,
    onChange: e => setDraftDesc(e.target.value),
    rows: 4
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    required: true,
    error: saveNameError
  }, /*#__PURE__*/React.createElement(Input, {
    value: name,
    onChange: e => {
      setName(e.target.value);
      if (saveErrors) setSaveErrors(false);
    },
    error: !!saveNameError
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Description"
  }, /*#__PURE__*/React.createElement(Textarea, {
    value: desc,
    onChange: e => setDesc(e.target.value),
    rows: 4
  })))))));
}
window.SimpleFormPrototypeV2 = SimpleFormPrototypeV2;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-settings/simpleForm-v2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-settings/simpleForm-v3.jsx
try { (() => {
// Simple form v3 — full UX revision pass over v2.
// Changes (numbered to the review):
//  1. Selected row contrast (carried from v2) + 3 — clearer row affordance:
//     stronger hover, "click to edit" chevron, toggle has its own hover lift.
//  2. Search: wider, bolder border, stronger icon, contextual placeholder.
//  4. Bulk-edit entry: helper text replaced with a quiet "Select all"
//     toolbar; selected-state transforms into the action bar (kept).
//  5+8. Right panel: cards, section headers, metadata strip, dividers.
//  6. Save state: sticky amber dirty banner + dot indicator on list row
//     and editing header. Save button surfaces dirty count.
//  7. Active badge linked to the toggle: header now hosts the
//     authoritative Active toggle; no second pill.

const SIMPLE_V3_SAMPLE = [{
  id: '1',
  name: 'Discovery',
  usage: 142,
  active: true,
  created: 'Jan 8, 2026',
  updated: 'Apr 12, 2026'
}, {
  id: '2',
  name: 'Design',
  usage: 88,
  active: true,
  created: 'Jan 8, 2026',
  updated: 'Mar 30, 2026'
}, {
  id: '3',
  name: 'Permitting',
  usage: 31,
  active: true,
  created: 'Jan 8, 2026',
  updated: 'Feb 14, 2026'
}, {
  id: '4',
  name: 'Installation',
  usage: 312,
  active: true,
  created: 'Jan 8, 2026',
  updated: 'Apr 22, 2026'
}, {
  id: '5',
  name: 'Commissioning',
  usage: 67,
  active: true,
  created: 'Jan 8, 2026',
  updated: 'Mar 03, 2026'
}, {
  id: '6',
  name: 'Final Inspection',
  usage: 124,
  active: true,
  created: 'Jan 8, 2026',
  updated: 'Apr 17, 2026'
}, {
  id: '7',
  name: 'Closeout',
  usage: 56,
  active: true,
  created: 'Jan 8, 2026',
  updated: 'Apr 05, 2026'
}, {
  id: '8',
  name: 'Pre-Sales',
  usage: 4,
  active: false,
  created: 'Feb 2, 2026',
  updated: 'Mar 18, 2026'
}, {
  id: '9',
  name: 'Lead Qualification',
  usage: 0,
  active: false,
  created: 'Mar 1, 2026',
  updated: 'Mar 19, 2026'
}];
const V3_DEFAULT_DESCRIPTIONS = {
  '4': 'Standard residential installation item covering panel mounting, electrical work, and inverter setup.'
};
function SimpleFormPrototypeV3() {
  const [items, setItems] = React.useState(SIMPLE_V3_SAMPLE);
  const [selected, setSelected] = React.useState('4');
  const [filter, setFilter] = React.useState('all');
  const [q, setQ] = React.useState('');
  const [sel, setSel] = React.useState(new Set());
  const [hoverId, setHoverId] = React.useState(null);
  const [isNew, setIsNew] = React.useState(false);
  const [draftName, setDraftName] = React.useState('');
  const [draftDesc, setDraftDesc] = React.useState('');
  const [draftActive, setDraftActive] = React.useState(true);
  const [showErrors, setShowErrors] = React.useState(false);
  const [saveErrors, setSaveErrors] = React.useState(false);
  const [showLog, setShowLog] = React.useState(false);
  const current = items.find(i => i.id === selected) || items[0];
  const baseDesc = V3_DEFAULT_DESCRIPTIONS[current.id] ?? '';
  const [name, setName] = React.useState(current.name);
  const [desc, setDesc] = React.useState(baseDesc);
  const [origDesc, setOrigDesc] = React.useState(baseDesc);
  React.useEffect(() => {
    setName(current.name);
    const d = V3_DEFAULT_DESCRIPTIONS[current.id] ?? '';
    setDesc(d);
    setOrigDesc(d);
    setSaveErrors(false);
  }, [current.id]);
  const isDirty = !isNew && (name.trim() !== current.name || desc !== origDesc);
  const saveNameError = saveErrors && !name.trim() ? 'Name is required' : null;
  const handleSave = () => {
    if (!name.trim()) {
      setSaveErrors(true);
      return;
    }
    setItems(s => s.map(i => i.id === current.id ? {
      ...i,
      name: name.trim(),
      updated: 'Just now'
    } : i));
    setOrigDesc(desc);
    setSaveErrors(false);
  };
  const handleDiscard = () => {
    setName(current.name);
    setDesc(origDesc);
    setSaveErrors(false);
  };
  const startNew = () => {
    setIsNew(true);
    setDraftName('');
    setDraftDesc('');
    setDraftActive(true);
    setShowErrors(false);
    setSel(new Set());
  };
  const cancelNew = () => {
    setIsNew(false);
    setDraftName('');
    setDraftDesc('');
    setShowErrors(false);
  };
  const createNew = () => {
    const trimmed = draftName.trim();
    if (!trimmed || dupName) {
      setShowErrors(true);
      return;
    }
    const newId = String(Date.now());
    setItems(s => [...s, {
      id: newId,
      name: trimmed,
      usage: 0,
      active: draftActive,
      created: 'Just now',
      updated: 'Just now'
    }]);
    setSelected(newId);
    V3_DEFAULT_DESCRIPTIONS[newId] = draftDesc;
    setIsNew(false);
    setShowErrors(false);
  };
  const canCreate = draftName.trim().length > 0;
  const dupName = isNew && draftName.trim() && items.some(i => i.name.toLowerCase() === draftName.trim().toLowerCase());
  const nameError = isNew && showErrors ? !canCreate ? 'Name is required' : dupName ? `"${draftName.trim()}" already exists` : null : null;
  const filtered = items.filter(i => filter === 'all' || (filter === 'active' ? i.active : !i.active)).filter(i => !q || i.name.toLowerCase().includes(q.toLowerCase())).slice().sort((a, b) => a.active === b.active ? a.name.localeCompare(b.name) : a.active ? -1 : 1);
  const counts = {
    all: items.length,
    active: items.filter(i => i.active).length,
    inactive: items.filter(i => !i.active).length
  };
  const toggle = id => setItems(s => s.map(i => i.id === id ? {
    ...i,
    active: !i.active
  } : i));
  const toggleSel = id => setSel(s => {
    const n = new Set(s);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  });
  const allFilteredSelected = filtered.length > 0 && filtered.every(i => sel.has(i.id));
  const selectAllFiltered = () => setSel(s => {
    const n = new Set(s);
    if (allFilteredSelected) filtered.forEach(i => n.delete(i.id));else filtered.forEach(i => n.add(i.id));
    return n;
  });
  const bulk = active => {
    setItems(s => s.map(i => sel.has(i.id) ? {
      ...i,
      active
    } : i));
    setSel(new Set());
  };
  const selectedRows = items.filter(i => sel.has(i.id));
  const allSelectedActive = selectedRows.every(i => i.active);
  const allSelectedInactive = selectedRows.every(i => !i.active);
  return /*#__PURE__*/React.createElement(FormCard, {
    title: "Standard Template",
    width: 1280,
    height: 720,
    style: {
      borderRadius: 6
    },
    headerStyle: {
      padding: '0 18px',
      height: 45,
      background: C.bg
    },
    headerExtras: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: C.subtle
      }
    }, "Last edited by Marlee K. \xB7 Apr 22, 2026"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        height: 16,
        background: C.border
      }
    }), /*#__PURE__*/React.createElement(LinkBtn, {
      icon: /*#__PURE__*/React.createElement(I.history, {
        size: 13
      }),
      muted: true,
      onClick: () => setShowLog(true)
    }, "Change Log"), /*#__PURE__*/React.createElement(LinkBtn, {
      icon: /*#__PURE__*/React.createElement(I.upload, {
        size: 13
      }),
      muted: true
    }, "Import"), /*#__PURE__*/React.createElement(LinkBtn, {
      icon: /*#__PURE__*/React.createElement(I.download, {
        size: 13
      }),
      muted: true
    }, "Export")),
    footer: isNew ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Btn, {
      size: "md",
      kind: "secondary",
      leftIcon: /*#__PURE__*/React.createElement(I.x, {
        style: {
          color: C.red
        }
      }),
      onClick: cancelNew,
      style: {
        minWidth: 85
      }
    }, "Cancel"), /*#__PURE__*/React.createElement(Btn, {
      size: "md",
      kind: "primary",
      leftIcon: /*#__PURE__*/React.createElement(I.plus, null),
      onClick: createNew,
      style: {
        minWidth: 85,
        background: '#08A742',
        border: '1px solid #08A742'
      }
    }, "Create")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, isDirty && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: C.amber,
        boxShadow: `0 0 0 3px ${C.amberSoft}`
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: C.amber,
        fontWeight: 600
      }
    }, "Unsaved changes"), /*#__PURE__*/React.createElement(LinkBtn, {
      onClick: handleDiscard,
      muted: true,
      style: {
        fontSize: 12
      }
    }, "Discard"))), /*#__PURE__*/React.createElement(Btn, {
      size: "md",
      kind: "secondary",
      leftIcon: /*#__PURE__*/React.createElement(I.x, {
        style: {
          color: C.red
        }
      }),
      style: {
        minWidth: 85
      }
    }, "Close"), /*#__PURE__*/React.createElement(Btn, {
      size: "md",
      kind: "primary",
      leftIcon: /*#__PURE__*/React.createElement(I.save, null),
      onClick: handleSave,
      disabled: !isDirty,
      style: {
        minWidth: 85,
        background: isDirty ? '#08A742' : '#9FCDB0',
        border: `1px solid ${isDirty ? '#08A742' : '#9FCDB0'}`
      }
    }, "Save"))
  }, showLog && /*#__PURE__*/React.createElement(ChangeLogModal, {
    onClose: () => setShowLog(false)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '440px 1fr',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: `1px solid ${C.border}`,
      display: 'flex',
      flexDirection: 'column',
      background: C.bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      borderBottom: `1px solid ${C.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search items",
    prefix: /*#__PURE__*/React.createElement(I.search, {
      size: 15,
      style: {
        color: C.muted
      }
    }),
    style: {
      flex: 1,
      height: 36,
      borderColor: C.borderStrong,
      boxShadow: C.shadowSm,
      background: C.surface
    },
    disabled: isNew
  }), /*#__PURE__*/React.createElement(Btn, {
    size: "md",
    kind: "primary",
    leftIcon: /*#__PURE__*/React.createElement(I.plus, null),
    onClick: startNew,
    disabled: isNew,
    style: {
      height: 36
    }
  }, "New")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Segmented, {
    size: "sm",
    value: filter,
    onChange: setFilter,
    options: [{
      value: 'all',
      label: `All ${counts.all}`
    }, {
      value: 'active',
      label: `Active ${counts.active}`
    }, {
      value: 'inactive',
      label: `Inactive ${counts.inactive}`
    }]
  }), /*#__PURE__*/React.createElement("button", {
    onClick: selectAllFiltered,
    disabled: isNew || filtered.length === 0,
    style: {
      background: 'transparent',
      border: 'none',
      padding: 0,
      color: C.muted,
      fontFamily: 'inherit',
      fontSize: 11.5,
      fontWeight: 500,
      cursor: isNew ? 'not-allowed' : 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      opacity: isNew ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    readOnly: true,
    checked: allFilteredSelected,
    style: {
      accentColor: C.brand,
      pointerEvents: 'none'
    }
  }), allFilteredSelected ? 'Clear all' : 'Select all'))), isNew ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 16px',
      height: 38,
      background: C.brandSoft,
      borderBottom: `1px solid ${C.brandBorder}`
    }
  }, /*#__PURE__*/React.createElement(I.plus, {
    size: 13,
    style: {
      color: C.brand
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: C.brand,
      fontWeight: 600
    }
  }, "Creating new item"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(LinkBtn, {
    onClick: cancelNew,
    muted: true
  }, "Cancel")) : sel.size > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 16px',
      height: 38,
      background: C.brandSoft,
      borderBottom: `1px solid ${C.brandBorder}`
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: allFilteredSelected,
    ref: el => {
      if (el) el.indeterminate = !allFilteredSelected && sel.size > 0;
    },
    onChange: selectAllFiltered,
    style: {
      accentColor: C.brand
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: C.brand,
      fontWeight: 700
    }
  }, sel.size, " selected"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(LinkBtn, {
    icon: /*#__PURE__*/React.createElement(I.check, {
      size: 13
    }),
    onClick: () => bulk(true),
    disabled: allSelectedActive
  }, "Activate"), /*#__PURE__*/React.createElement(LinkBtn, {
    icon: /*#__PURE__*/React.createElement(I.archive, {
      size: 13
    }),
    onClick: () => bulk(false),
    disabled: allSelectedInactive
  }, "Deactivate"), /*#__PURE__*/React.createElement(LinkBtn, {
    onClick: () => setSel(new Set()),
    muted: true
  }, "Clear")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '4px 0'
    }
  }, isNew && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      margin: '0 8px 4px',
      padding: '10px 12px',
      borderRadius: 6,
      border: `1px dashed ${C.brandBorder}`,
      background: C.brandSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 13,
      height: 13,
      borderRadius: 3,
      border: `1px dashed ${C.brandBorder}`,
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: draftName ? C.ink : C.brand,
      fontWeight: 600,
      fontStyle: draftName ? 'normal' : 'italic',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, draftName || 'New item…'))), filtered.map(it => {
    const isSel = !isNew && it.id === selected;
    const isChecked = sel.has(it.id);
    const isHover = !isNew && hoverId === it.id && !isSel;
    const dimmed = isNew;
    const showDirty = isSel && isDirty;
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      onMouseEnter: () => setHoverId(it.id),
      onMouseLeave: () => setHoverId(s => s === it.id ? null : s),
      onClick: () => !isNew && setSelected(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        margin: '0 8px 3px',
        padding: '10px 12px',
        borderRadius: 6,
        border: isSel ? `1px solid ${C.brandBorder}` : `1px solid transparent`,
        background: isSel ? C.brandSoft : isChecked ? '#FFF6EE' : isHover ? C.surface : 'transparent',
        boxShadow: isSel ? `inset 3px 0 0 ${C.brand}, 0 1px 0 rgba(20,16,10,0.04), 0 1px 2px rgba(20,16,10,0.06)` : isHover ? C.shadowSm : 'none',
        cursor: isNew ? 'default' : 'pointer',
        opacity: dimmed ? 0.45 : 1,
        pointerEvents: isNew ? 'none' : 'auto',
        transition: 'background .08s, box-shadow .08s',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: isChecked,
      onChange: () => toggleSel(it.id),
      onClick: e => e.stopPropagation(),
      style: {
        accentColor: C.brand
      },
      disabled: isNew
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: isSel ? C.ink : it.active ? C.ink : C.muted,
        fontWeight: isSel ? 700 : 500,
        letterSpacing: isSel ? '-0.005em' : '0',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, it.name), showDirty && /*#__PURE__*/React.createElement("span", {
      title: "Unsaved changes",
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: C.amber,
        boxShadow: `0 0 0 2.5px ${C.amberSoft}`,
        flex: '0 0 auto'
      }
    }), isSel && !showDirty && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9.5,
        fontWeight: 700,
        color: C.brand,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        padding: '2px 6px',
        background: C.surface,
        border: `1px solid ${C.brandBorder}`,
        borderRadius: 3,
        lineHeight: 1,
        flex: '0 0 auto'
      }
    }, "Editing")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: C.subtle,
        fontVariantNumeric: 'tabular-nums',
        flex: '0 0 auto'
      }
    }, it.usage), /*#__PURE__*/React.createElement("div", {
      onClick: e => e.stopPropagation(),
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4px',
        borderRadius: 6,
        transition: 'background .08s',
        cursor: 'pointer'
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = 'rgba(20,16,10,0.06)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(Toggle, {
      checked: it.active,
      onChange: () => toggle(it.id),
      size: "sm"
    })), /*#__PURE__*/React.createElement(I.chevRight, {
      size: 14,
      style: {
        color: isSel ? C.brand : isHover ? C.muted : 'transparent',
        flex: '0 0 auto',
        transition: 'color .08s'
      }
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      background: C.bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 22px',
      borderBottom: `1px solid ${C.border}`,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: C.surface
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: isNew ? C.brand : C.subtle,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      marginBottom: 4,
      fontWeight: isNew ? 700 : 500
    }
  }, isNew ? 'New item' : 'Editing'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: '-0.01em',
      color: isNew && !draftName ? C.subtle : C.ink,
      fontStyle: isNew && !draftName ? 'italic' : 'normal'
    }
  }, isNew ? draftName || 'Untitled item' : name || 'Untitled item'), isDirty && !isNew && /*#__PURE__*/React.createElement("span", {
    title: "Unsaved changes",
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: C.amber,
      boxShadow: `0 0 0 3px ${C.amberSoft}`
    }
  }))), isNew ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: C.subtle,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("kbd", {
    style: {
      background: C.panel,
      border: `1px solid ${C.border}`,
      borderRadius: 4,
      padding: '1px 5px',
      fontSize: 11,
      fontFamily: 'ui-monospace, monospace',
      color: C.muted
    }
  }, "Enter"), " to create \xB7 ", /*#__PURE__*/React.createElement("kbd", {
    style: {
      background: C.panel,
      border: `1px solid ${C.border}`,
      borderRadius: 4,
      padding: '1px 5px',
      fontSize: 11,
      fontFamily: 'ui-monospace, monospace',
      color: C.muted
    }
  }, "Esc"), " to cancel"), /*#__PURE__*/React.createElement(Pill, {
    tone: "primary"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: C.brand
    }
  }), "Draft")) :
  /*#__PURE__*/
  // Status linked to toggle (7) — authoritative control lives here.
  React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 12px',
      background: current.active ? C.greenSoft : C.panel,
      border: `1px solid ${current.active ? C.greenBorder : C.border}`,
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement(Toggle, {
    checked: current.active,
    onChange: () => toggle(current.id),
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: current.active ? C.green : C.muted,
      letterSpacing: '0.005em'
    }
  }, current.active ? 'Active' : 'Inactive'))), !isNew && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 22px',
      borderBottom: `1px solid ${C.border}`,
      background: C.surface,
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      fontSize: 11.5,
      color: C.muted
    }
  }, /*#__PURE__*/React.createElement(Meta, {
    label: "Usage",
    value: `${current.usage} jobs`
  }), /*#__PURE__*/React.createElement(Meta, {
    label: "Created",
    value: current.created
  }), /*#__PURE__*/React.createElement(Meta, {
    label: "Last updated",
    value: current.updated
  }), /*#__PURE__*/React.createElement(Meta, {
    label: "ID",
    value: `#${current.id.padStart(4, '0')}`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '20px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, isNew ? /*#__PURE__*/React.createElement(Section, {
    title: "Basics"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    required: true,
    error: nameError
  }, /*#__PURE__*/React.createElement(Input, {
    value: draftName,
    onChange: e => {
      setDraftName(e.target.value);
      if (showErrors) setShowErrors(false);
    },
    autoFocus: true,
    error: !!nameError,
    onKeyDown: e => {
      if (e.key === 'Enter') createNew();
      if (e.key === 'Escape') cancelNew();
    }
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Description"
  }, /*#__PURE__*/React.createElement(Textarea, {
    value: draftDesc,
    onChange: e => setDraftDesc(e.target.value),
    rows: 4
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    title: "Basics",
    subtitle: "The name and description that appears in pickers across the system."
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    required: true,
    error: saveNameError
  }, /*#__PURE__*/React.createElement(Input, {
    value: name,
    onChange: e => {
      setName(e.target.value);
      if (saveErrors) setSaveErrors(false);
    },
    error: !!saveNameError
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Description"
  }, /*#__PURE__*/React.createElement(Textarea, {
    value: desc,
    onChange: e => setDesc(e.target.value),
    rows: 4
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "Visibility",
    subtitle: "Inactive items stay searchable in reports but disappear from pickers."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 12px',
      background: C.bg,
      border: `1px solid ${C.border}`,
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement(Toggle, {
    checked: current.active,
    onChange: () => toggle(current.id),
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: C.ink
    }
  }, current.active ? 'Active' : 'Inactive'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: C.muted,
      marginTop: 1
    }
  }, current.active ? 'Available across jobs, scheduling, and reports.' : 'Hidden from pickers; still visible in historical jobs.')))))))), isDirty && !isNew && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 53,
      padding: '8px 22px',
      background: C.amberSoft,
      borderTop: `1px solid #EBD2A0`,
      borderBottom: `1px solid #EBD2A0`,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 12.5,
      color: C.amber,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(I.alert, {
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, "You have unsaved changes to \"", current.name, "\"."), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(LinkBtn, {
    onClick: handleDiscard,
    style: {
      color: C.amber
    }
  }, "Discard"), /*#__PURE__*/React.createElement("button", {
    onClick: handleSave,
    style: {
      background: '#08A742',
      color: '#fff',
      border: '1px solid #08A742',
      borderRadius: 6,
      padding: '4px 12px',
      height: 26,
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inherit',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement(I.save, {
    size: 12
  }), " Save now")));
}

// Small helpers for v3
const Meta = ({
  label,
  value
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    minWidth: 0
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 10,
    fontWeight: 600,
    color: C.subtle,
    letterSpacing: '0.06em',
    textTransform: 'uppercase'
  }
}, label), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 12.5,
    color: C.ink,
    fontWeight: 500
  }
}, value));
const Section = ({
  title,
  subtitle,
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: C.surface,
    border: `1px solid ${C.border}`,
    borderRadius: 8,
    boxShadow: C.shadowSm,
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '12px 16px 10px',
    borderBottom: `1px solid ${C.border}`
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    fontWeight: 700,
    color: C.ink,
    letterSpacing: '-0.005em'
  }
}, title), subtitle && /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11.5,
    color: C.muted,
    marginTop: 2
  }
}, subtitle)), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '14px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: 14
  }
}, children));
window.SimpleFormPrototypeV3 = SimpleFormPrototypeV3;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-settings/simpleForm-v3.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-settings/simpleForm.jsx
try { (() => {
// Simple form prototype — Name + Description, with new status control.
// This is the "low-end" example: a form with only 2 inputs but the same
// chrome (status control, change log, import/export) as complex forms.

const SIMPLE_SAMPLE = [{
  id: '1',
  name: 'Discovery',
  usage: 142,
  active: true
}, {
  id: '2',
  name: 'Design',
  usage: 88,
  active: true
}, {
  id: '3',
  name: 'Permitting',
  usage: 31,
  active: true
}, {
  id: '4',
  name: 'Installation',
  usage: 312,
  active: true
}, {
  id: '5',
  name: 'Commissioning',
  usage: 67,
  active: true
}, {
  id: '6',
  name: 'Final Inspection',
  usage: 124,
  active: true
}, {
  id: '7',
  name: 'Closeout',
  usage: 56,
  active: true
}, {
  id: '8',
  name: 'Pre-Sales',
  usage: 4,
  active: false
}, {
  id: '9',
  name: 'Lead Qualification',
  usage: 0,
  active: false
}];
function SimpleFormPrototype() {
  const [items, setItems] = React.useState(SIMPLE_SAMPLE);
  const [selected, setSelected] = React.useState('4');
  const [tab, setTab] = React.useState('items');
  const [filter, setFilter] = React.useState('all');
  const [q, setQ] = React.useState('');
  const current = items.find(i => i.id === selected) || items[0];
  const [name, setName] = React.useState(current.name);
  const [desc, setDesc] = React.useState('Standard residential installation phase covering panel mounting, electrical work, and inverter setup.');
  React.useEffect(() => {
    setName(current.name);
  }, [current.name]);
  const filtered = items.filter(i => filter === 'all' || (filter === 'active' ? i.active : !i.active)).filter(i => !q || i.name.toLowerCase().includes(q.toLowerCase()));
  const counts = {
    all: items.length,
    active: items.filter(i => i.active).length,
    inactive: items.filter(i => !i.active).length
  };
  const toggle = id => setItems(s => s.map(i => i.id === id ? {
    ...i,
    active: !i.active
  } : i));
  return /*#__PURE__*/React.createElement(FormCard, {
    title: "Project Phases",
    subtitle: "Catalog \xB7 9 items \xB7 last edited by Marlee K. \xB7 Apr 22, 2026",
    width: 1280,
    height: 720,
    headerExtras: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Btn, {
      size: "sm",
      kind: "ghost",
      leftIcon: /*#__PURE__*/React.createElement(I.download, null)
    }, "Template"), /*#__PURE__*/React.createElement(Btn, {
      size: "sm",
      kind: "ghost",
      leftIcon: /*#__PURE__*/React.createElement(I.upload, null)
    }, "Import"), /*#__PURE__*/React.createElement(Btn, {
      size: "sm",
      kind: "ghost",
      leftIcon: /*#__PURE__*/React.createElement(I.download, null)
    }, "Export"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        height: 18,
        background: C.border,
        margin: '0 4px'
      }
    }), /*#__PURE__*/React.createElement(Btn, {
      size: "sm",
      kind: "ghost",
      leftIcon: /*#__PURE__*/React.createElement(I.history, null)
    }, "Change log")),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: C.subtle
      }
    }, "Unsaved changes"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Btn, {
      size: "md",
      kind: "secondary"
    }, "Cancel"), /*#__PURE__*/React.createElement(Btn, {
      size: "md",
      kind: "primary",
      leftIcon: /*#__PURE__*/React.createElement(I.save, null)
    }, "Save"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '380px 1fr',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: `1px solid ${C.border}`,
      display: 'flex',
      flexDirection: 'column',
      background: C.bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      borderBottom: `1px solid ${C.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search phases\u2026",
    prefix: /*#__PURE__*/React.createElement(I.search, {
      size: 14
    }),
    style: {
      flex: 1,
      height: 30
    }
  }), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "primary",
    leftIcon: /*#__PURE__*/React.createElement(I.plus, null)
  }, "New")), /*#__PURE__*/React.createElement(Segmented, {
    size: "sm",
    value: filter,
    onChange: setFilter,
    options: [{
      value: 'all',
      label: `All ${counts.all}`
    }, {
      value: 'active',
      label: `Active ${counts.active}`
    }, {
      value: 'inactive',
      label: `Inactive ${counts.inactive}`
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, filtered.map(it => {
    const isSel = it.id === selected;
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      onClick: () => setSelected(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 14px',
        borderLeft: isSel ? `2px solid ${C.brand}` : '2px solid transparent',
        background: isSel ? C.surface : 'transparent',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: it.active ? C.ink : C.muted,
        fontWeight: isSel ? 600 : 500
      }
    }, it.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: C.subtle,
        marginTop: 1
      }
    }, it.usage, " ", it.usage === 1 ? 'use' : 'uses')), /*#__PURE__*/React.createElement(Toggle, {
      checked: it.active,
      onChange: () => toggle(it.id),
      size: "sm"
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 22px',
      borderBottom: `1px solid ${C.border}`,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: C.subtle,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      marginBottom: 4
    }
  }, "Editing"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      color: C.ink,
      letterSpacing: '-0.01em'
    }
  }, name || 'Untitled phase')), /*#__PURE__*/React.createElement(Pill, {
    tone: current.active ? 'active' : 'inactive'
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: current.active ? C.green : C.subtle
    }
  }), current.active ? 'Active' : 'Inactive'), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "ghost",
    leftIcon: /*#__PURE__*/React.createElement(I.copy, null)
  }, "Duplicate"), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "ghost"
  }, /*#__PURE__*/React.createElement(I.dots, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '22px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "e.g. Installation"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Description",
    hint: "Shown in tooltips and reports. Markdown supported."
  }, /*#__PURE__*/React.createElement(Textarea, {
    value: desc,
    onChange: e => setDesc(e.target.value),
    rows: 4,
    placeholder: "What happens during this phase\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      padding: 14,
      background: C.bg,
      border: `1px solid ${C.border}`,
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(I.link, {
    size: 14,
    style: {
      color: C.muted
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: C.text,
      letterSpacing: '0.01em'
    }
  }, "Where this is used"), /*#__PURE__*/React.createElement(Pill, {
    tone: "neutral",
    style: {
      marginLeft: 'auto'
    }
  }, current.usage, " references")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 6,
      fontSize: 12,
      color: C.muted
    }
  }, /*#__PURE__*/React.createElement("div", null, "\xB7 312 projects in this phase"), /*#__PURE__*/React.createElement("div", null, "\xB7 18 automations"), /*#__PURE__*/React.createElement("div", null, "\xB7 7 dashboards"), /*#__PURE__*/React.createElement("div", null, "\xB7 4 templates")))))));
}
window.SimpleFormPrototype = SimpleFormPrototype;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-settings/simpleForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-settings/statusControls.jsx
try { (() => {
// Active/Inactive status control — 3 variations + Primary/Secondary case.

const SAMPLE_ITEMS = [{
  id: '1',
  name: 'Homeowner Unresponsive',
  usage: 142,
  system: true,
  active: true
}, {
  id: '2',
  name: 'Leave Us A Review',
  usage: 88,
  system: true,
  active: true
}, {
  id: '3',
  name: '3rd Party EPC',
  usage: 31,
  active: true
}, {
  id: '4',
  name: 'Activation: Enphase',
  usage: 67,
  active: true
}, {
  id: '5',
  name: 'Activation: SolarEdge',
  usage: 124,
  active: true
}, {
  id: '6',
  name: 'CAD: Layout Approval 1',
  usage: 56,
  active: true
}, {
  id: '7',
  name: 'Compliance: HOA Info',
  usage: 18,
  active: false
}, {
  id: '8',
  name: 'Compliance: Xcel DIC',
  usage: 9,
  active: false
}, {
  id: '9',
  name: 'HO: Project Update',
  usage: 0,
  active: false
}, {
  id: '10',
  name: 'PTO: Meter Swap',
  usage: 4,
  active: false
}];

// Hierarchical sample: top-level parents (Primary) contain child rows (Secondary).
const SAMPLE_HIERARCHY = [{
  id: 'h1',
  name: 'Installation',
  usage: 312,
  active: true,
  expanded: true,
  children: [{
    id: 'h1a',
    name: 'Panel Mount',
    usage: 89,
    active: true
  }, {
    id: 'h1b',
    name: 'Wiring & Conduit',
    usage: 124,
    active: true
  }, {
    id: 'h1c',
    name: 'Inverter Setup',
    usage: 67,
    active: true
  }, {
    id: 'h1d',
    name: 'Battery Backup',
    usage: 18,
    active: false
  }]
}, {
  id: 'h2',
  name: 'Inspection',
  usage: 178,
  active: true,
  expanded: true,
  children: [{
    id: 'h2a',
    name: 'Pre-Install',
    usage: 145,
    active: true
  }, {
    id: 'h2b',
    name: 'Mid-Install',
    usage: 22,
    active: true
  }, {
    id: 'h2c',
    name: 'Final',
    usage: 234,
    active: true
  }]
}, {
  id: 'h3',
  name: 'Service',
  usage: 95,
  active: true,
  expanded: false,
  children: [{
    id: 'h3a',
    name: 'Repair',
    usage: 41,
    active: true
  }, {
    id: 'h3b',
    name: 'Maintenance',
    usage: 28,
    active: true
  }, {
    id: 'h3c',
    name: 'Diagnostic',
    usage: 12,
    active: true
  }]
}, {
  id: 'h4',
  name: 'Sales Appointment',
  usage: 178,
  active: true,
  expanded: false,
  children: [{
    id: 'h4a',
    name: 'In-Home Consult',
    usage: 102,
    active: true
  }, {
    id: 'h4b',
    name: 'Virtual Consult',
    usage: 76,
    active: true
  }]
}, {
  id: 'h5',
  name: 'HVAC',
  usage: 2,
  active: false,
  expanded: false,
  children: [{
    id: 'h5a',
    name: 'Mini-Split Install',
    usage: 2,
    active: false
  }]
}];

// Kept for any legacy use
const SAMPLE_PRIMARY = SAMPLE_HIERARCHY.flatMap(p => [{
  id: p.id,
  name: p.name,
  usage: p.usage,
  role: p.active ? 'primary' : 'inactive'
}, ...p.children.map(c => ({
  id: c.id,
  name: c.name,
  usage: c.usage,
  role: c.active ? 'secondary' : 'inactive'
}))]);

// ─── Variation A: Single list with toggle + bulk select ─────────────────
function VariationA() {
  const [items, setItems] = React.useState(SAMPLE_ITEMS);
  const [filter, setFilter] = React.useState('all');
  const [q, setQ] = React.useState('');
  const [sel, setSel] = React.useState(new Set());
  const filtered = items.filter(i => filter === 'all' || (filter === 'active' ? i.active : !i.active)).filter(i => !q || i.name.toLowerCase().includes(q.toLowerCase()));
  const counts = {
    all: items.length,
    active: items.filter(i => i.active).length,
    inactive: items.filter(i => !i.active).length
  };
  const toggle = id => setItems(s => s.map(i => i.id === id ? {
    ...i,
    active: !i.active
  } : i));
  const toggleSel = id => setSel(s => {
    const n = new Set(s);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  });
  const allFilteredSelected = filtered.length > 0 && filtered.every(i => sel.has(i.id));
  const selectAllFiltered = () => setSel(s => {
    const n = new Set(s);
    if (allFilteredSelected) filtered.forEach(i => n.delete(i.id));else filtered.forEach(i => n.add(i.id));
    return n;
  });
  const bulk = active => {
    setItems(s => s.map(i => sel.has(i.id) ? {
      ...i,
      active
    } : i));
    setSel(new Set());
  };
  const selectedItems = items.filter(i => sel.has(i.id));
  const allSelectedActive = selectedItems.every(i => i.active);
  const allSelectedInactive = selectedItems.every(i => !i.active);
  return /*#__PURE__*/React.createElement(VariationFrame, {
    letter: "A",
    title: "Toggle per row + bulk select",
    recommended: true,
    bullet: "Default per-row toggle for one-off changes. Checkbox a few rows to activate/deactivate them in bulk. Same control covers both cases.",
    pros: ['Direct: state IS the control', 'Bulk handled without a separate UI', 'Filter chips for fast triage'],
    cons: ['Per-row checkbox adds a column of chrome']
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 14px',
      borderBottom: `1px solid ${C.border}`
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search items\u2026",
    prefix: /*#__PURE__*/React.createElement(I.search, {
      size: 14
    }),
    style: {
      flex: 1,
      height: 30
    }
  }), /*#__PURE__*/React.createElement(Segmented, {
    size: "sm",
    value: filter,
    onChange: setFilter,
    options: [{
      value: 'all',
      label: `All ${counts.all}`
    }, {
      value: 'active',
      label: `Active ${counts.active}`
    }, {
      value: 'inactive',
      label: `Inactive ${counts.inactive}`
    }]
  })), sel.size > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '6px 14px',
      height: 38,
      background: C.brandSoft,
      borderBottom: `1px solid ${C.brandBorder}`
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: allFilteredSelected,
    ref: el => {
      if (el) el.indeterminate = !allFilteredSelected && sel.size > 0;
    },
    onChange: selectAllFiltered,
    style: {
      accentColor: C.brand
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: C.brand,
      fontWeight: 600
    }
  }, sel.size, " selected"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(LinkBtn, {
    icon: /*#__PURE__*/React.createElement(I.check, {
      size: 13
    }),
    onClick: () => bulk(true),
    disabled: allSelectedActive
  }, "Activate"), /*#__PURE__*/React.createElement(LinkBtn, {
    icon: /*#__PURE__*/React.createElement(I.archive, {
      size: 13
    }),
    onClick: () => bulk(false),
    disabled: allSelectedInactive
  }, "Deactivate"), /*#__PURE__*/React.createElement(LinkBtn, {
    onClick: () => setSel(new Set()),
    muted: true
  }, "Clear")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 14px',
      height: 38,
      background: C.bg,
      borderBottom: `1px solid ${C.border}`
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: false,
    onChange: selectAllFiltered,
    style: {
      accentColor: C.brand
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: C.subtle
    }
  }, "Select rows to bulk-edit")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, filtered.map((it, idx) => {
    const checked = sel.has(it.id);
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 14px',
        borderBottom: idx < filtered.length - 1 ? `1px solid ${C.border}` : 'none',
        background: checked ? '#FFF8F2' : it.active ? C.surface : '#FBFAF7'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: checked,
      onChange: () => toggleSel(it.id),
      style: {
        accentColor: C.brand
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: it.active ? C.ink : C.muted,
        fontWeight: 500,
        opacity: it.active ? 1 : 0.85
      }
    }, it.name), it.system && /*#__PURE__*/React.createElement(Pill, {
      tone: "warning",
      style: {
        fontSize: 10,
        padding: '1px 6px'
      }
    }, "System")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: C.subtle,
        fontVariantNumeric: 'tabular-nums'
      }
    }, it.usage, " uses"), /*#__PURE__*/React.createElement(Toggle, {
      checked: it.active,
      onChange: () => toggle(it.id),
      size: "sm"
    }));
  })));
}

// ─── Variation B: Status pill (click to flip) ────────────────────────────
function VariationB() {
  const [items, setItems] = React.useState(SAMPLE_ITEMS);
  const [filter, setFilter] = React.useState('all');
  const [q, setQ] = React.useState('');
  const filtered = items.filter(i => filter === 'all' || (filter === 'active' ? i.active : !i.active)).filter(i => !q || i.name.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement(VariationFrame, {
    letter: "B",
    title: "Status pill, click to flip",
    bullet: "Same single list, but state shows as a colored pill. Clicking the pill flips it (with confirmation for deactivate).",
    pros: ['Highest-density status read', 'Color encodes state — works in scan view', 'Pill space later supports more states (Draft, Archived)'],
    cons: ['Slightly less obvious affordance than a toggle']
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 14px',
      borderBottom: `1px solid ${C.border}`
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search items\u2026",
    prefix: /*#__PURE__*/React.createElement(I.search, {
      size: 14
    }),
    style: {
      flex: 1,
      height: 30
    }
  }), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "ghost",
    leftIcon: /*#__PURE__*/React.createElement(I.filter, null)
  }, "Filter")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 84px 80px 40px',
      padding: '8px 14px',
      borderBottom: `1px solid ${C.border}`,
      fontSize: 11,
      fontWeight: 600,
      color: C.subtle,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      background: C.bg
    }
  }, /*#__PURE__*/React.createElement("div", null, "Item"), /*#__PURE__*/React.createElement("div", null, "Status"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, "Usage"), /*#__PURE__*/React.createElement("div", null)), filtered.map((it, idx) => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 84px 80px 40px',
      alignItems: 'center',
      gap: 8,
      padding: '10px 14px',
      borderBottom: idx < filtered.length - 1 ? `1px solid ${C.border}` : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: C.ink,
      fontWeight: 500,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, it.name), it.system && /*#__PURE__*/React.createElement(Pill, {
    tone: "warning",
    style: {
      fontSize: 10,
      padding: '1px 6px'
    }
  }, "System")), /*#__PURE__*/React.createElement(Pill, {
    tone: it.active ? 'active' : 'inactive',
    onClick: () => setItems(s => s.map(x => x.id === it.id ? {
      ...x,
      active: !x.active
    } : x))
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: it.active ? C.green : C.subtle
    }
  }), it.active ? 'Active' : 'Inactive'), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontSize: 12,
      color: C.subtle,
      fontVariantNumeric: 'tabular-nums'
    }
  }, it.usage), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'transparent',
      border: 'none',
      color: C.subtle,
      cursor: 'pointer',
      padding: 4,
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement(I.dots, {
    size: 16
  }))))));
}

// ─── Variation C: Tabs + bulk actions ────────────────────────────────────
function VariationC() {
  const [items, setItems] = React.useState(SAMPLE_ITEMS);
  const [tab, setTab] = React.useState('active');
  const [sel, setSel] = React.useState(new Set());
  const visible = items.filter(i => tab === 'active' ? i.active : !i.active);
  const toggleSel = id => setSel(s => {
    const n = new Set(s);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  });
  const move = () => {
    setItems(s => s.map(i => sel.has(i.id) ? {
      ...i,
      active: !i.active
    } : i));
    setSel(new Set());
  };
  return /*#__PURE__*/React.createElement(VariationFrame, {
    letter: "C",
    title: "Tabs + bulk move",
    bullet: "Closest to today's mental model. Active and Inactive are tabs; select + \u201CDeactivate\u201D moves rows across in one action.",
    pros: ['Bulk-friendly — natural fit for users used to current dual-list', 'Selection state is obvious', 'Familiar transition path'],
    cons: ['Two clicks to see all items at once', 'Selection feels heavier for single-item flips']
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 14px',
      borderBottom: `1px solid ${C.border}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      value: 'active',
      label: 'Active',
      count: items.filter(i => i.active).length
    }, {
      value: 'inactive',
      label: 'Inactive',
      count: items.filter(i => !i.active).length
    }],
    style: {
      border: 'none'
    }
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search\u2026",
    prefix: /*#__PURE__*/React.createElement(I.search, {
      size: 14
    }),
    style: {
      width: 220,
      height: 28
    }
  })), sel.size > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 14px',
      background: C.brandSoft,
      borderBottom: `1px solid ${C.brandBorder}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: C.brand,
      fontWeight: 500
    }
  }, sel.size, " selected"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "soft",
    leftIcon: tab === 'active' ? /*#__PURE__*/React.createElement(I.archive, null) : /*#__PURE__*/React.createElement(I.check, null),
    onClick: move
  }, tab === 'active' ? 'Deactivate' : 'Activate'), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    kind: "ghost",
    onClick: () => setSel(new Set())
  }, "Clear")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, visible.map((it, idx) => /*#__PURE__*/React.createElement("label", {
    key: it.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 14px',
      borderBottom: idx < visible.length - 1 ? `1px solid ${C.border}` : 'none',
      cursor: 'pointer',
      background: sel.has(it.id) ? C.brandSoft : C.surface
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: sel.has(it.id),
    onChange: () => toggleSel(it.id),
    style: {
      accentColor: C.brand
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 13.5,
      color: C.ink,
      fontWeight: 500
    }
  }, it.name), it.system && /*#__PURE__*/React.createElement(Pill, {
    tone: "warning",
    style: {
      fontSize: 10,
      padding: '1px 6px'
    }
  }, "System"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: C.subtle,
      fontVariantNumeric: 'tabular-nums'
    }
  }, it.usage, " uses")))));
}

// ─── Variation D: Hierarchical (Primary → Secondary tree) ───────────────
// Primary items are top-level. Secondary items are children of a Primary.
// Both can be Active or Inactive. Drag handle re-parents; chevron expands.
function VariationPrimarySecondary() {
  const [tree, setTree] = React.useState(SAMPLE_HIERARCHY);
  const [q, setQ] = React.useState('');
  const toggleExpanded = id => setTree(t => t.map(p => p.id === id ? {
    ...p,
    expanded: !p.expanded
  } : p));
  const toggleActive = (parentId, childId) => setTree(t => t.map(p => {
    if (childId == null && p.id === parentId) return {
      ...p,
      active: !p.active
    };
    if (p.id === parentId) return {
      ...p,
      children: p.children.map(c => c.id === childId ? {
        ...c,
        active: !c.active
      } : c)
    };
    return p;
  }));
  const promote = (parentId, childId) => setTree(t => {
    const parent = t.find(p => p.id === parentId);
    const child = parent?.children.find(c => c.id === childId);
    if (!child) return t;
    const newParent = {
      ...child,
      expanded: true,
      children: []
    };
    return t.map(p => p.id === parentId ? {
      ...p,
      children: p.children.filter(c => c.id !== childId)
    } : p).concat(newParent);
  });
  const visible = tree.filter(p => !q || p.name.toLowerCase().includes(q.toLowerCase()) || p.children.some(c => c.name.toLowerCase().includes(q.toLowerCase())));
  const counts = {
    primary: tree.length,
    secondary: tree.reduce((n, p) => n + p.children.length, 0),
    active: tree.filter(p => p.active).length + tree.reduce((n, p) => n + p.children.filter(c => c.active).length, 0)
  };
  return /*#__PURE__*/React.createElement(VariationFrame, {
    letter: "P/S",
    title: "Hierarchy \u2014 Primary parents, Secondary children",
    bullet: "Primary items are top-level; each owns 0+ Secondary children. Drag a row to re-parent; chevron expands/collapses; toggle activates either level independently.",
    pros: ['Matches the actual data model (Primary owns Secondaries)', 'Tree view lets you scan grouping and status together', 'Drag-to-reparent replaces four separate widgets'],
    cons: ['Slightly more complex than a flat list', 'Drag affordance needs onboarding hint first time'],
    width: 620
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 14px',
      borderBottom: `1px solid ${C.border}`
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search\u2026",
    prefix: /*#__PURE__*/React.createElement(I.search, {
      size: 14
    }),
    style: {
      flex: 1,
      height: 30
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: C.subtle,
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "primary"
  }, counts.primary, " primary"), /*#__PURE__*/React.createElement(Pill, {
    tone: "secondary"
  }, counts.secondary, " secondary"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, visible.map((parent, pi) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: parent.id
  }, /*#__PURE__*/React.createElement(TreeRow, {
    level: 0,
    expanded: parent.expanded,
    hasChildren: parent.children.length > 0,
    onExpand: () => toggleExpanded(parent.id),
    name: parent.name,
    meta: `${parent.children.length} sub-items · ${parent.usage} uses`,
    active: parent.active,
    onToggle: () => toggleActive(parent.id),
    kind: "primary"
  }), parent.expanded && parent.children.map(child => /*#__PURE__*/React.createElement(TreeRow, {
    key: child.id,
    level: 1,
    name: child.name,
    meta: `${child.usage} uses`,
    active: child.active,
    onToggle: () => toggleActive(parent.id, child.id),
    onPromote: () => promote(parent.id, child.id),
    kind: "secondary"
  })), parent.expanded && /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 14px 6px 52px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: 11.5,
      color: C.subtle,
      width: '100%',
      textAlign: 'left',
      borderBottom: pi < visible.length - 1 ? `1px solid ${C.border}` : 'none'
    }
  }, /*#__PURE__*/React.createElement(I.plus, {
    size: 12
  }), " Add sub-item to ", parent.name)))));
}
function TreeRow({
  level,
  expanded,
  hasChildren,
  onExpand,
  name,
  meta,
  active,
  onToggle,
  onPromote,
  kind
}) {
  const indent = 14 + level * 22;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 14px',
      paddingLeft: indent,
      position: 'relative',
      background: active ? C.surface : '#FBFAF7',
      borderBottom: `1px solid ${C.border}`
    }
  }, level > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 22,
      top: 0,
      bottom: 0,
      width: 1,
      background: C.border
    }
  }), level > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 22,
      top: '50%',
      width: 12,
      height: 1,
      background: C.border
    }
  }), level === 0 && /*#__PURE__*/React.createElement("button", {
    onClick: onExpand,
    disabled: !hasChildren,
    style: {
      width: 18,
      height: 18,
      padding: 0,
      border: 'none',
      background: 'transparent',
      color: hasChildren ? C.muted : 'transparent',
      cursor: hasChildren ? 'pointer' : 'default',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      transform: expanded ? 'rotate(0)' : 'rotate(-90deg)',
      transition: 'transform .12s'
    }
  }, /*#__PURE__*/React.createElement(I.chevDown, {
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.subtle,
      opacity: 0.4,
      cursor: 'grab',
      display: 'flex',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(I.grip, {
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: kind === 'primary' ? 13.5 : 12.5,
      fontWeight: kind === 'primary' ? 600 : 500,
      color: active ? C.ink : C.muted,
      letterSpacing: kind === 'primary' ? '-0.005em' : 0
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: C.subtle
    }
  }, meta)), kind === 'secondary' && /*#__PURE__*/React.createElement("button", {
    onClick: onPromote,
    title: "Promote to Primary",
    style: {
      background: 'transparent',
      border: 'none',
      color: C.subtle,
      cursor: 'pointer',
      fontSize: 11,
      padding: '2px 6px',
      borderRadius: 4,
      fontFamily: 'inherit',
      opacity: 0.7
    }
  }, "\u2191 Promote"), /*#__PURE__*/React.createElement(Pill, {
    tone: kind,
    style: {
      fontSize: 10,
      padding: '1px 7px'
    }
  }, kind === 'primary' ? 'Primary' : 'Secondary'), /*#__PURE__*/React.createElement(Toggle, {
    checked: active,
    onChange: onToggle,
    size: "sm"
  }));
}

// ─── Frame wrapper (artboard-ready) ──────────────────────────────────────
function VariationFrame({
  letter,
  title,
  bullet,
  pros,
  cons,
  children,
  width = 460,
  height = 580,
  recommended
}) {
  const padding = 24;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: width + padding * 2,
      padding,
      background: C.surface,
      borderRadius: 12,
      border: `1.5px solid ${recommended ? C.brand : C.border}`,
      boxShadow: C.shadow,
      fontFamily: 'inherit',
      position: 'relative'
    }
  }, recommended && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -10,
      left: 24,
      background: C.brand,
      color: '#fff',
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '0.05em',
      padding: '3px 8px',
      borderRadius: 999,
      textTransform: 'uppercase'
    }
  }, "Recommended"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 6,
      background: recommended ? C.brand : C.ink,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 600
    }
  }, letter), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: C.ink,
      letterSpacing: '-0.01em'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: C.muted,
      lineHeight: 1.5,
      marginLeft: 38
    }
  }, bullet)), /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      background: C.surface,
      borderRadius: 10,
      border: `1px solid ${C.border}`,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      color: C.green,
      letterSpacing: '0.06em',
      marginBottom: 4,
      textTransform: 'uppercase'
    }
  }, "Pros"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 14,
      fontSize: 11.5,
      color: C.text,
      lineHeight: 1.55
    }
  }, pros.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, p)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      color: C.amber,
      letterSpacing: '0.06em',
      marginBottom: 4,
      textTransform: 'uppercase'
    }
  }, "Trade-offs"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 14,
      fontSize: 11.5,
      color: C.text,
      lineHeight: 1.55
    }
  }, cons.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, p))))));
}

// ─── Standalone intro card for the status section ───────────────────────
function StatusIntroCard() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 460,
      height: 812,
      padding: 32,
      background: C.surface,
      borderRadius: 12,
      border: `1px solid ${C.border}`,
      boxShadow: C.shadow,
      fontFamily: 'inherit',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.12em',
      color: C.brand,
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, "02 \xB7 Active / Inactive"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Instrument Serif", serif',
      fontSize: 42,
      lineHeight: 1.05,
      color: C.ink,
      letterSpacing: '-0.015em',
      marginBottom: 16
    }
  }, "Replace the", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: C.brand
    }
  }, "dual-list"), " shuffle."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: C.text,
      lineHeight: 1.6,
      marginBottom: 24
    }
  }, "Today: two columns, arrow buttons, no bulk action, no scan. Items can't be deleted \u2014 only deactivated \u2014 so this control is the spine of every Catalog. Three approaches, plus a Primary/Secondary variant."), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, [{
    l: 'A',
    t: 'Toggle per row',
    d: 'Direct, scannable. Recommended default.',
    rec: true
  }, {
    l: 'B',
    t: 'Status pill, click flips',
    d: 'High-density. Best for long lists.'
  }, {
    l: 'C',
    t: 'Tabs + bulk move',
    d: 'Closest to today\'s mental model.'
  }, {
    l: 'P/S',
    t: 'Hierarchy · Primary → Secondary',
    d: 'Tree of parents and children for P/S forms.'
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: 12,
      background: r.rec ? '#FFFBF7' : C.bg,
      border: `1px solid ${r.rec ? C.brandBorder : C.border}`,
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 32,
      height: 28,
      padding: '0 8px',
      borderRadius: 6,
      background: r.rec ? C.brand : C.ink,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 600
    }
  }, r.l), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: C.ink
    }
  }, r.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: C.muted,
      marginTop: 1
    }
  }, r.d)), r.rec && /*#__PURE__*/React.createElement(Pill, {
    tone: "primary",
    style: {
      fontSize: 10
    }
  }, "Recommended")))));
}
function _StatusControlsBoard_unused() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1480,
      padding: 32,
      background: C.surface,
      borderRadius: 12,
      border: `1px solid ${C.border}`,
      boxShadow: C.shadow,
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28,
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.12em',
      color: C.brand,
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "02 \xB7 Active / Inactive control"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Instrument Serif", serif',
      fontSize: 38,
      lineHeight: 1.1,
      color: C.ink,
      letterSpacing: '-0.015em'
    }
  }, "Replace the dual-list shuffle."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: C.muted,
      marginTop: 10,
      lineHeight: 1.55
    }
  }, "Today: two columns, arrow buttons, no bulk action, no scan. Items can't be deleted \u2014 only deactivated \u2014 which means this control is the spine of every Catalog. Three approaches, plus a Primary/Secondary variant for forms that need it.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(VariationA, null), /*#__PURE__*/React.createElement(VariationB, null), /*#__PURE__*/React.createElement(VariationC, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      padding: '24px 0 0 0',
      borderTop: `1px dashed ${C.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.12em',
      color: C.muted,
      textTransform: 'uppercase',
      marginBottom: 14
    }
  }, "Special case \xB7 Primary / Secondary"), /*#__PURE__*/React.createElement(VariationPrimarySecondary, null)));
}
Object.assign(window, {
  StatusIntroCard,
  VariationA,
  VariationB,
  VariationC,
  VariationPrimarySecondary,
  TreeRow,
  SAMPLE_ITEMS,
  SAMPLE_PRIMARY,
  SAMPLE_HIERARCHY
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-settings/statusControls.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core365-settings/tokens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
    bg: 'var(--c365-bg, #FAFBFC)',
    surface: 'var(--c365-surface, #FFFFFF)',
    panel: 'var(--c365-panel, #E2E2E2)',
    track: 'var(--c365-track, #F6F4F0)',
    // Sidebar / list-rail fill — matches the kit CSS `.sf-list-col` (var(--c-bg)).
    // FormCard header & footer use this so the chrome reads as one surface.
    listBg: 'var(--c-bg, #FAFBFC)',
    // borders
    border: 'var(--c365-line, #D9DDE3)',
    borderStrong: 'var(--c365-line, #D9DDE3)',
    // text
    ink: 'var(--c365-ink, #1F2433)',
    text: 'var(--c365-ink-2, #3A4151)',
    muted: 'var(--c365-ink-3, #6B7384)',
    subtle: 'var(--c365-ink-4, #99A0AE)',
    // brand (Core365 orange)
    brand: 'var(--c365-orange, #F2691A)',
    brandHover: 'var(--c365-orange-600, #D55812)',
    brandSoft: 'var(--c365-orange-50, #FFF5EE)',
    brandBorder: 'var(--c365-orange-200, #FDD3BB)',
    // action (Steel Blue — Save / Create primary)
    action: 'var(--c365-steel, #5A739F)',
    actionHover: 'var(--c365-steel-600, #485E85)',
    actionBorder: 'var(--c365-steel-600, #485E85)',
    actionSoft: 'var(--c365-steel-50, #F3F6FB)',
    // semantic
    green: 'var(--c365-affirm, #08A742)',
    greenSoft: 'var(--c365-affirm-bg, #E1F4E7)',
    greenBorder: 'var(--c365-affirm-bg, #E1F4E7)',
    red: 'var(--c365-danger, #E7505B)',
    redSoft: 'var(--c365-danger-bg, #FCE6E8)',
    amber: 'var(--c365-hold-fg, #6B5300)',
    amberSoft: 'var(--c365-hold-bg, #FFF4C7)',
    blue: 'var(--c365-info, #578FC7)',
    blueSoft: 'var(--c365-info-bg, #E4EEF8)',
    // depth
    shadowSm: 'var(--shadow-1, 0 1px 0 rgba(20,28,51,0.04), 0 1px 2px rgba(20,28,51,0.06))',
    shadow: 'var(--shadow-2, 0 2px 4px rgba(20,28,51,0.06), 0 4px 12px rgba(20,28,51,0.06))',
    shadowLg: 'var(--shadow-3, 0 8px 16px rgba(20,28,51,0.08), 0 16px 32px rgba(20,28,51,0.08))'
  };

  // ─── Icons (inline SVG, currentColor) ───────────────────────────────────
  const Icon = ({
    d,
    size = 16,
    stroke = 1.6,
    fill = 'none',
    children,
    style,
    className
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flex: '0 0 auto',
      ...style
    }
  }, d ? /*#__PURE__*/React.createElement("path", {
    d: d
  }) : children);
  const I = {
    search: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m20 20-3.5-3.5"
    })),
    plus: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12h14"
    })),
    check: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9 17.5 20 6.5"
    })),
    x: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "M6 6l12 12M18 6 6 18"
    })),
    chevDown: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "m6 9 6 6 6-6"
    })),
    chevRight: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "m9 6 6 6-6 6"
    })),
    chevLeft: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "m15 6-6 6 6 6"
    })),
    dots: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
      cx: "5",
      cy: "12",
      r: "1.4",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "1.4",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "19",
      cy: "12",
      r: "1.4",
      fill: "currentColor"
    })),
    filter: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "M4 5h16M7 12h10M10 19h4"
    })),
    upload: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "M12 4v12M7 9l5-5 5 5M5 20h14"
    })),
    download: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "M12 4v12M7 11l5 5 5-5M5 20h14"
    })),
    edit: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "m4 20 4-1 11-11-3-3L5 16l-1 4Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m14 6 3 3"
    })),
    copy: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
      x: "8",
      y: "8",
      width: "12",
      height: "12",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"
    })),
    archive: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "4",
      rx: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8M10 12h4"
    })),
    trash: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"
    })),
    alert: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "M12 4 2 20h20L12 4ZM12 10v5M12 18v.5"
    })),
    info: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 11v6M12 7.5v.5"
    })),
    cog: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
      stroke: 1.7
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    })),
    grip: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "1",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "15",
      cy: "7",
      r: "1",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "12",
      r: "1",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "15",
      cy: "12",
      r: "1",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "17",
      r: "1",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "15",
      cy: "17",
      r: "1",
      fill: "currentColor"
    })),
    arrowRight: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    })),
    arrowLeft: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "M19 12H5M11 18 5 12l6-6"
    })),
    save: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "M5 4h11l3 3v13H5zM8 4v5h7V4M8 14h8v6H8z"
    })),
    file: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM14 3v6h6"
    })),
    link: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "M10 14a4 4 0 0 1 0-5.6l3-3a4 4 0 0 1 5.6 5.6l-1.5 1.5M14 10a4 4 0 0 1 0 5.6l-3 3a4 4 0 0 1-5.6-5.6L7 11.5"
    })),
    history: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "M3 12a9 9 0 1 0 3-6.7M3 4v5h5M12 7v5l3 2"
    })),
    sheet: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "16",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 9h18M3 14h18M9 4v16M15 4v16"
    })),
    popout: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "M14 4h6v6M20 4l-8 8M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"
    }))
  };

  // ─── Primitive UI ──────────────────────────────────────────────────────
  const Btn = ({
    kind = 'ghost',
    size = 'md',
    children,
    leftIcon,
    rightIcon,
    onClick,
    disabled,
    style,
    active,
    type = 'button',
    className
  }) => {
    const [hover, setHover] = React.useState(false);
    const [pressed, setPressed] = React.useState(false);
    const sizes = {
      sm: {
        padding: '5px 9px',
        fontSize: 12.5,
        height: 28,
        gap: 6,
        iconSize: 14
      },
      md: {
        padding: '7px 12px',
        fontSize: 13,
        height: 32,
        gap: 6,
        iconSize: 15
      },
      lg: {
        padding: '9px 16px',
        fontSize: 14,
        height: 38,
        gap: 8,
        iconSize: 16
      }
    }[size];
    const kinds = {
      primary: {
        background: C.brand,
        color: '#fff',
        border: `1px solid ${C.brand}`,
        boxShadow: '0 1px 0 rgba(0,0,0,0.04)'
      },
      // `action` — Save / Create. Steel Blue per Core365 brand spec; visually
      // balances the orange primary so destructive-looking-orange isn't on
      // every modal footer.
      action: {
        background: C.action,
        color: '#fff',
        border: `1px solid ${C.actionBorder}`,
        boxShadow: '0 1px 0 rgba(0,0,0,0.04)'
      },
      secondary: {
        background: C.surface,
        color: C.ink,
        border: `1px solid ${C.borderStrong}`,
        boxShadow: C.shadowSm
      },
      ghost: {
        background: 'transparent',
        color: C.text,
        border: `1px solid transparent`
      },
      soft: {
        background: C.brandSoft,
        color: C.brand,
        border: `1px solid ${C.brandBorder}`
      },
      danger: {
        background: 'transparent',
        color: C.red,
        border: `1px solid transparent`
      }
    }[kind];
    // Hover/press treatments. Filled kinds (primary, action, soft) darken via
    // brightness; ghost/secondary lighten their background and lift slightly.
    const filled = kind === 'primary' || kind === 'action' || kind === 'soft';
    const hoverStyle = !disabled && (hover || pressed) ? filled ? {
      filter: pressed ? 'brightness(0.95)' : 'brightness(1.1)',
      boxShadow: pressed ? '0 0 0 rgba(0,0,0,0)' : '0 2px 6px rgba(20,16,10,0.12), 0 1px 0 rgba(0,0,0,0.04)'
    } : kind === 'secondary' ? {
      background: '#FAFAF7',
      border: `1px solid ${C.border}`,
      boxShadow: pressed ? C.shadowSm : '0 2px 6px rgba(20,16,10,0.08), 0 1px 0 rgba(20,16,10,0.03)'
    } : kind === 'danger' ? {
      background: C.redSoft
    } : {
      background: C.track
    } : {};
    return /*#__PURE__*/React.createElement("button", {
      type: type,
      className: className,
      onClick: e => {
        e.currentTarget.blur();
        onClick?.(e);
      },
      disabled: disabled,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => {
        setHover(false);
        setPressed(false);
      },
      onMouseDown: () => setPressed(true),
      onMouseUp: () => setPressed(false),
      onBlur: () => {
        setHover(false);
        setPressed(false);
      },
      style: {
        ...kinds,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: sizes.gap,
        padding: sizes.padding,
        height: sizes.height,
        fontSize: sizes.fontSize,
        lineHeight: 'normal',
        fontFamily: 'inherit',
        fontWeight: 500,
        letterSpacing: '-0.005em',
        borderRadius: 6,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        whiteSpace: 'nowrap',
        outline: 'none',
        WebkitTapHighlightColor: 'transparent',
        transition: 'filter .12s, background .12s, box-shadow .12s, transform .04s',
        transform: pressed && !disabled ? 'translateY(0.5px)' : 'translateY(0)',
        ...(active ? {
          background: C.brandSoft,
          color: C.brand,
          borderColor: C.brandBorder
        } : {}),
        ...style,
        ...hoverStyle
      }
    }, leftIcon && React.cloneElement(leftIcon, {
      size: sizes.iconSize
    }), children, rightIcon && React.cloneElement(rightIcon, {
      size: sizes.iconSize
    }));
  };

  // LinkBtn — borderless text button with optional leading icon.
  // Used for inline actions like bulk-edit Activate/Deactivate where button
  // chrome would compete with the row chrome.
  const LinkBtn = ({
    icon,
    rightIcon,
    children,
    onClick,
    disabled,
    muted,
    style
  }) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'transparent',
      border: 'none',
      padding: '4px 2px',
      color: disabled ? C.subtle : muted ? C.muted : C.brand,
      fontFamily: 'inherit',
      fontSize: 12.5,
      fontWeight: 600,
      letterSpacing: '-0.005em',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      whiteSpace: 'nowrap',
      textDecoration: 'none',
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.textDecoration = 'underline';
    },
    onMouseLeave: e => {
      e.currentTarget.style.textDecoration = 'none';
    }
  }, icon, children, rightIcon);
  const Field = ({
    label,
    hint,
    required,
    error,
    children,
    style,
    labelStyle,
    htmlFor
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: error ? C.red : '#2A2A2A',
      letterSpacing: '0.01em',
      ...labelStyle
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 3
    }
  }, "*")), children, hint && !error && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: C.subtle
    }
  }, hint));
  const Input = ({
    value,
    onChange,
    placeholder,
    prefix,
    suffix,
    style,
    error,
    readOnly,
    disabled,
    type = 'text',
    autoFocus,
    onKeyDown,
    onFocus,
    onBlur
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: C.surface,
      border: `1px solid ${error ? C.red : C.border}`,
      borderRadius: 6,
      padding: '0 10px',
      height: 34,
      transition: 'border-color .12s, box-shadow .12s',
      ...(error ? {
        boxShadow: `0 0 0 3px ${C.redSoft}`
      } : {}),
      ...(disabled ? {
        opacity: 0.5
      } : {}),
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = error ? C.red : C.brand;
      e.currentTarget.style.boxShadow = `0 0 0 3px ${error ? C.redSoft : C.brandSoft}`;
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = error ? C.red : C.border;
      e.currentTarget.style.boxShadow = error ? `0 0 0 3px ${C.redSoft}` : 'none';
    }
  }, prefix && /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.subtle,
      display: 'flex'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", {
    value: value ?? '',
    onChange: onChange,
    placeholder: placeholder,
    readOnly: readOnly ?? (value !== undefined && !onChange),
    disabled: disabled,
    type: type,
    autoFocus: autoFocus,
    onKeyDown: onKeyDown,
    onFocus: onFocus,
    onBlur: onBlur,
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontSize: 13,
      color: C.ink,
      fontFamily: 'inherit',
      minWidth: 0
    }
  }), suffix && /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.subtle,
      display: 'flex'
    }
  }, suffix));
  const Select = ({
    value,
    onChange,
    options,
    placeholder = 'Select',
    style
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value ?? '',
    onChange: onChange,
    style: {
      width: '100%',
      appearance: 'none',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      background: C.surface,
      border: `1px solid ${C.border}`,
      borderRadius: 6,
      padding: '0 28px 0 10px',
      height: 34,
      fontSize: 13,
      color: value ? C.ink : C.subtle,
      fontFamily: 'inherit',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), (options || []).map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 8,
      top: '50%',
      transform: 'translateY(-50%)',
      color: C.subtle,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(I.chevDown, {
    size: 14
  })));
  const Textarea = ({
    value,
    onChange,
    rows = 4,
    placeholder,
    style
  }) => /*#__PURE__*/React.createElement("textarea", {
    value: value ?? '',
    onChange: onChange,
    rows: rows,
    placeholder: placeholder,
    style: {
      width: '100%',
      background: C.surface,
      border: `1px solid ${C.border}`,
      borderRadius: 6,
      padding: '8px 10px',
      fontSize: 13,
      color: C.ink,
      fontFamily: 'inherit',
      resize: 'vertical',
      outline: 'none',
      transition: 'border-color .12s, box-shadow .12s',
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = C.brand;
      e.currentTarget.style.boxShadow = `0 0 0 3px ${C.brandSoft}`;
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = C.border;
      e.currentTarget.style.boxShadow = 'none';
    }
  });
  const Toggle = ({
    checked,
    onChange,
    size = 'md'
  }) => {
    const w = size === 'sm' ? 28 : 32,
      h = size === 'sm' ? 16 : 18,
      k = h - 4;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => onChange?.(!checked),
      style: {
        width: w,
        height: h,
        padding: 0,
        border: 'none',
        borderRadius: 999,
        background: checked ? C.brand : C.borderStrong,
        position: 'relative',
        cursor: 'pointer',
        transition: 'background .15s',
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 2,
        left: checked ? w - k - 2 : 2,
        width: k,
        height: k,
        background: '#fff',
        borderRadius: '50%',
        transition: 'left .15s',
        boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
      }
    }));
  };
  const Pill = ({
    tone = 'neutral',
    children,
    style,
    onClick
  }) => {
    const tones = {
      neutral: {
        bg: '#F1EEE7',
        color: C.muted,
        border: '#E2DDD3'
      },
      active: {
        bg: C.greenSoft,
        color: C.green,
        border: C.greenBorder
      },
      inactive: {
        bg: '#F1EEE7',
        color: C.muted,
        border: '#E2DDD3'
      },
      primary: {
        bg: C.brandSoft,
        color: C.brand,
        border: C.brandBorder
      },
      secondary: {
        bg: C.blueSoft,
        color: C.blue,
        border: '#C3D6F4'
      },
      warning: {
        bg: C.amberSoft,
        color: C.amber,
        border: '#EBD2A0'
      },
      danger: {
        bg: C.redSoft,
        color: C.red,
        border: '#EFC7C7'
      }
    }[tone];
    return /*#__PURE__*/React.createElement("span", {
      onClick: onClick,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        background: tones.bg,
        color: tones.color,
        border: `1px solid ${tones.border}`,
        padding: '2px 8px',
        borderRadius: 999,
        fontSize: 11.5,
        fontWeight: 500,
        letterSpacing: '0.005em',
        cursor: onClick ? 'pointer' : 'default',
        whiteSpace: 'nowrap',
        ...style
      }
    }, children);
  };
  const Tabs = ({
    tabs,
    value,
    onChange,
    style
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      borderBottom: `1px solid ${C.border}`,
      ...style
    }
  }, tabs.map(t => {
    const active = (t.value ?? t) === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value ?? t,
      onClick: () => onChange(t.value ?? t),
      style: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '8px 12px',
        fontSize: 13,
        fontFamily: 'inherit',
        fontWeight: 500,
        color: active ? C.ink : C.muted,
        borderBottom: active ? `2px solid ${C.brand}` : '2px solid transparent',
        marginBottom: -1
      }
    }, t.label ?? t, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        fontSize: 11,
        color: C.subtle
      }
    }, t.count));
  }));
  const Segmented = ({
    options,
    value,
    onChange,
    size = 'md',
    style,
    fullWidth
  }) => {
    const heights = {
      sm: 24,
      md: 28,
      lg: 32
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
        background: C.track,
        border: `1px solid ${C.border}`,
        borderRadius: 7,
        padding: 2,
        height: heights[size],
        ...style
      }
    }, options.map(o => {
      const v = o.value ?? o,
        l = o.label ?? o,
        isOn = v === value;
      return /*#__PURE__*/React.createElement("button", {
        key: v,
        onClick: () => onChange(v),
        style: {
          border: 'none',
          background: isOn ? C.surface : 'transparent',
          color: isOn ? C.ink : C.muted,
          padding: '0 10px',
          fontSize: 12,
          fontWeight: 500,
          fontFamily: 'inherit',
          borderRadius: 5,
          cursor: 'pointer',
          boxShadow: isOn ? '0 1px 2px rgba(0,0,0,.06), 0 0 0 1px rgba(0,0,0,.04)' : 'none',
          transition: 'background .12s',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 5,
          ...(fullWidth ? {
            flex: 1,
            minWidth: 0
          } : {})
        }
      }, o.icon && o.icon, l);
    }));
  };

  // Modal-style frame that mimics a Core365 settings dialog
  // Header close (X) button with a slight hover background.
  const FormCardClose = ({
    onClick
  }) => {
    const [hover, setHover] = React.useState(false);
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        width: 28,
        height: 28,
        borderRadius: 6,
        border: 'none',
        background: hover ? '#E7E3DC' : 'transparent',
        color: hover ? C.ink : C.muted,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 120ms, color 120ms'
      }
    }, /*#__PURE__*/React.createElement(I.x, {
      size: 15
    }));
  };
  const FormCard = ({
    title,
    subtitle,
    children,
    footer,
    headerExtras,
    headerStyle,
    onClose,
    width = 1200,
    height,
    style
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      background: C.surface,
      borderRadius: 12,
      border: `1px solid ${C.border}`,
      boxShadow: C.shadowLg,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      fontFamily: 'inherit',
      color: C.ink,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 18px',
      borderBottom: `1px solid ${C.border}`,
      background: C.listBg,
      ...headerStyle
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: '-0.01em'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: C.muted,
      marginTop: 2
    }
  }, subtitle)), headerExtras, headerExtras && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 16,
      background: C.border,
      marginLeft: 2,
      marginRight: 4
    }
  }), /*#__PURE__*/React.createElement(FormCardClose, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 18px',
      borderTop: `1px solid ${C.border}`,
      background: C.listBg
    }
  }, footer));
  Object.assign(window, {
    C,
    I,
    Icon,
    Btn,
    LinkBtn,
    Field,
    Input,
    Select,
    Textarea,
    Toggle,
    Pill,
    Tabs,
    Segmented,
    FormCard
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core365-settings/tokens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

})();
