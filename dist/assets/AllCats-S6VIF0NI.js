import{r as n,g as i,j as t}from"./index-lFaU75vF.js";import{a as o,u as l,s as a,C as d}from"./AllCats.module-lSRAaDjc.js";const u=()=>{const s=n.useRef(null),r=o();return n.useEffect(()=>{const e=new IntersectionObserver(c=>{c[0].isIntersecting&&r(i())});return s.current&&e.observe(s.current),()=>{e.disconnect()}},[]),{lastElement:s}};function f(){const s=l(e=>e.cats.allCats),{lastElement:r}=u();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:a.container,children:s==null?void 0:s.map(e=>t.jsx(d,{cat:e},e.id))}),t.jsx("div",{ref:r,className:a.loading,children:t.jsx("div",{children:"... загружаем еще котиков ..."})})]})}export{f as default};