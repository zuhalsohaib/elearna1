import { ICONS } from "../data/data";

export const Chev = ({ className = "" }) => (
  <svg className={className} width="10" height="6" viewBox="0 0 10 6" fill="none">
    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Icon = ({ n }) => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0f2227" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d={ICONS[n]} />
  </svg>
);
