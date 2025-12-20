const i=(r,n)=>{if(r==null)return"—";const t=typeof r=="bigint"?Number(r):r;return Number.isFinite(t)?new Intl.NumberFormat(void 0,n).format(t):"—"};export{i as f};
