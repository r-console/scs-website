"use strict";(self.webpackChunksreechakra=self.webpackChunksreechakra||[]).push([[164],{9915:function(n,r){r.Z={BACKEND_IP:function(){return"http://13.127.123.145:9000/v2"},PORT:function(){return"9000"},VERSION:function(){return"1.0.8"}}},7067:function(n,r,i){i.r(r),i.d(r,{default:function(){return X}});var t=i(885),e=i(1413),s=i(4942),o=i(2791),a=i(6934),c=i(3967),l=i(6871),u=i(4554),d=i(9953),h=i(4395),x=i(4663),Z=i(493),f=i(4708),j=i(890),p=i(4721),v=i(3400),m=i(8008),g=i(1009),b=i(8996),w=i(4852),k=i(7064),C=i(9900),y=i(5083),P=i(9568),z=i(1084),M=i(7680),S=i(4642),H=i(5229),B=i(2216),A=i(7608),V=i(441),I=i(9915),N=i(184),D=240,L=(0,H.Z)({menuItem:{backgroundColor:"#fff"}}),R=function(n){return{width:D,transition:n.transitions.create("width",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.enteringScreen}),overflowX:"hidden"}},E=function(n){return(0,s.Z)({transition:n.transitions.create("width",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingScreen}),overflowX:"hidden",width:"calc(".concat(n.spacing(7)," + 1px)")},n.breakpoints.up("sm"),{width:"calc(".concat(n.spacing(9)," + 1px)")})},O=(0,a.ZP)("div")((function(n){var r=n.theme;return(0,e.Z)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:r.spacing(0,1)},r.mixins.toolbar)})),F=(0,a.ZP)(h.Z,{shouldForwardProp:function(n){return"open"!==n}})((function(n){var r=n.theme,i=n.open;return(0,e.Z)({zIndex:r.zIndex.drawer+1,transition:r.transitions.create(["width","margin"],{easing:r.transitions.easing.sharp,duration:r.transitions.duration.leavingScreen})},i&&{marginLeft:D,width:"calc(100% - ".concat(D,"px)"),transition:r.transitions.create(["width","margin"],{easing:r.transitions.easing.sharp,duration:r.transitions.duration.enteringScreen})})})),G=(0,a.ZP)(d.ZP,{shouldForwardProp:function(n){return"open"!==n}})((function(n){var r=n.theme,i=n.open;return(0,e.Z)((0,e.Z)({width:D,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box"},i&&(0,e.Z)((0,e.Z)({},R(r)),{},{"& .MuiDrawer-paper":R(r)})),!i&&(0,e.Z)((0,e.Z)({},E(r)),{},{"& .MuiDrawer-paper":E(r)}))}));function X(n){var r=n.children,i=(L(),(0,c.Z)()),s=(0,o.useState)(!1),a=(0,t.Z)(s,2),d=a[0],h=a[1],H=(0,l.s0)(),D=(0,o.useState)(!1),R=(0,t.Z)(D,2),E=(R[0],R[1],(0,o.useContext)(V.V)),X=E.user,K=E.currentMenu,T=E.setCurrentMenu,U=E.currentMenuName,W=E.setCurrentMenuName,_=E.setUser,q=function(n,r,i){T(i),H("".concat(n)),W(r)};return(0,N.jsxs)(u.Z,{style:{display:"flex",minHeight:"100%"},children:[(0,N.jsx)(f.ZP,{}),(0,N.jsx)(F,{position:"fixed",open:d,children:(0,N.jsxs)(x.Z,{children:[(0,N.jsx)(v.Z,{color:"inherit","aria-label":"open drawer",onClick:function(){h(!0)},edge:"start",sx:(0,e.Z)({marginRight:"36px"},d&&{display:"none"}),children:(0,N.jsx)(m.Z,{})}),(0,N.jsx)(j.Z,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1},children:U}),(0,N.jsx)(j.Z,{children:X.name})]})}),(0,N.jsxs)(G,{variant:"permanent",open:d,children:[(0,N.jsx)(O,{children:(0,N.jsx)(v.Z,{onClick:function(){h(!1)},children:"rtl"===i.direction?(0,N.jsx)(b.Z,{}):(0,N.jsx)(g.Z,{})})}),(0,N.jsx)(p.Z,{}),(0,N.jsxs)(Z.Z,{style:{height:"100%"},children:[(0,N.jsxs)(w.ZP,{button:!0,style:{backgroundColor:2===K?"#fff":null},onClick:function(){return q("/","All Bills",2)},children:[(0,N.jsx)(k.Z,{children:(0,N.jsx)(P.Z,{})}),(0,N.jsx)(C.Z,{primary:"All Bills"})]}),(0,N.jsxs)(w.ZP,{button:!0,style:{backgroundColor:3===K?"#fff":null},onClick:function(){return q("/totalamount","Bills Amount",3)},children:[(0,N.jsx)(k.Z,{children:(0,N.jsx)(z.Z,{})}),(0,N.jsx)(C.Z,{primary:"Amount"})]}),(0,N.jsxs)(w.ZP,{button:!0,style:{backgroundColor:0===K?"#fff":null},onClick:function(){return q("/addbranch","Add Branch",0)},children:[(0,N.jsx)(k.Z,{children:(0,N.jsx)(M.Z,{})}),(0,N.jsx)(C.Z,{primary:"Add Branch"})]}),(0,N.jsxs)(w.ZP,{button:!0,style:{backgroundColor:4===K?"#fff":null},onClick:function(){return q("/branch","Branches",4)},children:[(0,N.jsx)(k.Z,{children:(0,N.jsx)(y.Z,{})}),(0,N.jsx)(C.Z,{primary:"Branch"})]}),(0,N.jsxs)(w.ZP,{button:!0,style:{backgroundColor:1===K?"#fff":null},onClick:function(){return q("/viewmanagers","View Branch Admins",1)},children:[(0,N.jsx)(k.Z,{children:(0,N.jsx)(B.Z,{})}),(0,N.jsx)(C.Z,{primary:"View Branch Admins"})]}),(0,N.jsxs)(w.ZP,{button:!0,style:{backgroundColor:5===K?"#fff":null},onClick:function(){return q("/map","Map",5)},children:[(0,N.jsx)(k.Z,{children:(0,N.jsx)(S.Z,{})}),(0,N.jsx)(C.Z,{primary:"Map"})]}),(0,N.jsx)(p.Z,{}),(0,N.jsxs)(w.ZP,{button:!0,component:"a",onClick:function(){_({}),localStorage.clear(),window.location="/login"},children:[(0,N.jsx)(k.Z,{children:(0,N.jsx)(A.Z,{})}),(0,N.jsx)(C.Z,{primary:"Logout"})]}),(0,N.jsx)(w.ZP,{style:{position:"absolute",bottom:0},children:(0,N.jsx)(k.Z,{children:(0,N.jsxs)("b",{children:["V ",I.Z.VERSION()]})})})]})]}),(0,N.jsxs)(u.Z,{component:"main",sx:{flexGrow:1,p:3},children:[(0,N.jsx)(O,{}),(0,N.jsx)(u.Z,{children:r})]}),(0,N.jsx)("br",{}),(0,N.jsx)("br",{}),(0,N.jsx)("br",{}),(0,N.jsx)("br",{})]})}},7680:function(n,r,i){var t=i(4836);r.Z=void 0;var e=t(i(5649)),s=i(184),o=(0,e.default)([(0,s.jsx)("path",{d:"M15 17h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4v3zm-6 1H4v-4h5v4zM2 4h15v2H2z"},"0"),(0,s.jsx)("path",{d:"M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"},"1")],"AddBusiness");r.Z=o},9568:function(n,r,i){var t=i(4836);r.Z=void 0;var e=t(i(5649)),s=i(184),o=(0,e.default)((0,s.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"Description");r.Z=o},5083:function(n,r,i){var t=i(4836);r.Z=void 0;var e=t(i(5649)),s=i(184),o=(0,e.default)((0,s.jsx)("path",{d:"M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"}),"Store");r.Z=o}}]);
//# sourceMappingURL=164.82d6f8a4.chunk.js.map