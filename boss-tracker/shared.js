/* Shared constants + pure helpers used across the boss-tracker hub pages. */

const GAME_STORAGE_KEY = 'secplus-boss-tracker-state';
const SCHEDULE_STORAGE_KEY = 'secplus-watch-schedule-v1';

const BOSSES = [
  {id:'d4', domain:'4.0', title:'GHOST ADMIN', domainLabel:'Domain 4.0 — Security Operations', maxHp:15, color:'var(--dom-4)',
    flavor:"A hijacked administrator account, still carrying valid credentials. It moves through the network like it belongs there — because once, it did."},
  {id:'d2', domain:'2.0', title:'VECTORWRAITH', domainLabel:'Domain 2.0 — Threats, Vulnerabilities & Mitigations', maxHp:8, color:'var(--dom-2)',
    flavor:"It has no fixed form — phishing lure, rogue access point, injected packet. Name the vector before it reshapes into the next one."},
  {id:'d3', domain:'3.0', title:'BASTION PRIME', domainLabel:'Domain 3.0 — Security Architecture', maxHp:8, color:'var(--dom-3)',
    flavor:"A living fortress built from firewalls, zones, and redundant systems. Every wall is a design decision — find the ones that hold."},
  {id:'d5', domain:'5.0', title:'THE AUDITOR-GENERAL', domainLabel:'Domain 5.0 — Security Program Management', maxHp:7, color:'var(--dom-5)',
    flavor:"It carries a risk register in one hand and a compliance checklist in the other. It cannot be intimidated — only satisfied."},
  {id:'d1', domain:'1.0', title:'ROOT WARDEN', domainLabel:'Domain 1.0 — General Security Concepts', maxHp:5, color:'var(--dom-1)',
    flavor:"Guardian of the root of trust. Old, foundational, and unwilling to authenticate anything it doesn't recognize."},
];

const RANKS = [
  {title:'SOC Recruit', floor:0,   next:75,  css:'rank-recruit'},
  {title:'Analyst',     floor:75,  next:200, css:'rank-analyst'},
  {title:'Sentinel',    floor:200, next:400, css:'rank-sentinel'},
  {title:'Full Analyst',floor:400, next:null,css:'rank-full'},
];

function getRank(xp){
  let r = RANKS[0];
  for(const rank of RANKS){ if(xp >= rank.floor) r = rank; }
  return r;
}

function hpColor(pct){
  if(pct >= 60) return 'var(--hp-red)';
  if(pct >= 25) return 'var(--hp-yellow)';
  return 'var(--hp-green)';
}

/** boss.maxHp adjusted for any imported-exam overrides stored in game state. */
function bossMaxHp(boss, maxHpOverrides){
  const override = maxHpOverrides && maxHpOverrides[boss.id];
  return override === undefined ? boss.maxHp : override;
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}

function pad2(n){ return String(n).padStart(2,'0'); }
function ymd(y,m,d){ return `${y}-${pad2(m+1)}-${pad2(d)}`; }
function todayStr(){ const d = new Date(); return ymd(d.getFullYear(), d.getMonth(), d.getDate()); }

/** Read-only load of the game's saved state. Returns null if none saved yet. */
function loadGameStateReadOnly(){
  try{
    const raw = localStorage.getItem(GAME_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  }catch(e){ return null; }
}

/** Read-only load of the watch-schedule state. Returns null if none saved yet. */
function loadScheduleStateReadOnly(){
  try{
    const raw = localStorage.getItem(SCHEDULE_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  }catch(e){ return null; }
}

function showToast(msg){
  const t = document.getElementById('toast');
  if(!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(()=>t.classList.remove('show'), 1700);
}
