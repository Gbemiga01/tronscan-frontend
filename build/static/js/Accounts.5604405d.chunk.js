(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1105:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(14),r=a(15),c=a(23),l=a(22),o=a(24),s=a(0),i=a.n(s),d=a(149),u=a(12),m=a(3),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={open:!1,id:Object(d.a)(24)},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.open,n=t.id,r=this.props,c=r.text,l=r.placement,o=r.testSecond,s=void 0===o?"":o,d=r.className,p=void 0===d?"":d,f=r.info,b=void 0===f?"":f;return i.a.createElement("div",{className:"d-inline-block"},i.a.createElement("div",{className:"question-mark",id:n,onMouseOver:function(){return e.setState({open:!0})},onMouseOut:function(){return e.setState({open:!1})}},i.a.createElement("i",null,"?")),i.a.createElement(u.h,{placement:l,isOpen:a,target:n,className:p,innerClassName:"w-100"},c?Object(m.b)(c):"",s?i.a.createElement("span",null,i.a.createElement("br",null)," ",Object(m.b)(s)):"",b||""))}}]),t}(i.a.Component)},1107:function(e,t,a){"use strict";a.d(t,"a",function(){return N});var n=a(1133),r=a.n(n),c=a(124),l=a.n(c),o=a(1108),s=a.n(o),i=a(1116),d=a.n(i),u=a(2),m=a.n(u),p=a(7),f=a(5),b=a(14),h=a(15),g=a(23),v=a(22),E=a(24),w=a(0),O=a.n(w),j=a(3),y=a(16),N=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(g.a)(this,Object(v.a)(t).call(this,e))).loadDatas=Object(f.a)(m.a.mark(function e(){var t,n,r,c,l=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:1,n=l.length>1&&void 0!==l[1]?l[1]:40,r=a.state.filter,e.next=5,y.a.getTokens(Object(p.a)({sort:"rank",limit:n,start:(t-1)*n},r));case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}},e)})),a.handleTableChange=function(e,t,n){var r=Object(p.a)({},a.state.pagination);r.current=e.current,a.setState({pagination:r}),a.fetch(Object(p.a)({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},t))},a.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),a.props.onPageChange?(a.props.onPageChange(e.page,e.pageSize),a.setState({loading:!1})):a.setState({loading:!1})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.props.tableData,t=a.state.searchText,n=new RegExp(t,"gi");a.setState({filterDropdownVisible:!1,filtered:!!t,data:e.map(function(e){return e.name.match(n)?Object(p.a)({},e,{name:O.a.createElement("span",null,e.name.split(new RegExp("(?<=".concat(t,")|(?=").concat(t,")"),"i")).map(function(e,a){return e.toLowerCase()===t.toLowerCase()?O.a.createElement("span",{key:a,className:"highlight"},e):e}))}):null}).filter(function(e){return!!e})})},a.setColumn=function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var n={filterDropdown:O.a.createElement("div",{className:"custom-filter-dropdown"},O.a.createElement(d.a,{ref:function(e){return a.searchInput=e},placeholder:"Search name",value:a.state.searchText,onChange:a.onInputChange,onPressEnter:a.onSearch}),O.a.createElement(s.a,{type:"primary",onClick:a.onSearch},Object(j.c)("search")),O.a.createElement(s.a,{className:"btn-secondary ml-1",onClick:a.onReset},Object(j.c)("reset"))),filterIcon:O.a.createElement(l.a,{type:"filter",style:{color:a.state.filtered?"#108ee9":"#aaa"}}),filterDropdownVisible:a.state.filterDropdownVisible,onFilterDropdownVisibleChange:function(e){a.setState({filterDropdownVisible:e},function(){a.searchInput&&a.searchInput.focus()})}},r=[],c=!0,o=!1,i=void 0;try{for(var u,m=e[Symbol.iterator]();!(c=(u=m.next()).done);c=!0){var f=u.value;if(f.sorter&&!f.filterDropdown){var b={sorter:t(f.key)};r.push(Object(p.a)({},f,b))}else if(!f.sorter&&f.filterDropdown){var h=Object(p.a)({},n);r.push(Object(p.a)({},f,h))}else if(f.sorter&&f.filterDropdown){var g=Object(p.a)({sorter:t(f.key)},n);r.push(Object(p.a)({},f,g))}else r.push(f)}}catch(v){o=!0,i=v}finally{try{c||null==m.return||m.return()}finally{if(o)throw i}}return r},a.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:"both",showSizeChanger:!0,defaultPageSize:20},loading:!1},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.loading,n=e.data,c=e.column,l=e.bordered,o=e.pagination,s=void 0===o||o,i=e.scroll,d=e.locale,u=e.addr,m=e.transfers,f=(e.contractAddress,this.setColumn(c)),b=s?Object(p.a)({total:t},this.state.pagination):s;return O.a.createElement("div",null,u?O.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==m?" transfer-mt-100":" transfer-pt-100")},O.a.createElement(r.a,{bordered:l,columns:f,rowKey:function(e,t){return t},dataSource:n,locale:d,scroll:i,pagination:b,loading:a,onChange:this.handleTableChange})," "):O.a.createElement("div",{className:"card table_pos"},O.a.createElement(r.a,{bordered:l,columns:f,rowKey:function(e,t){return t},dataSource:n,locale:d,scroll:i,pagination:b,loading:a,onChange:this.handleTableChange})))}}]),t}(w.Component)},3117:function(e,t,a){"use strict";a.r(t);var n=a(105),r=a.n(n),c=a(1147),l=a.n(c),o=a(2),s=a.n(o),i=a(197),d=a.n(i),u=a(5),m=a(14),p=a(15),f=a(23),b=a(22),h=a(24),g=a(0),v=a.n(g),E=a(30),w=a(20),O=a(3),j=a(11),y=a(18),N=a(9),k=a(148),S=a(1107),C=a(81),_=a(1105),x=(a(21),a(16)),D=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(f.a)(this,Object(b.a)(t).call(this))).loadAccounts=Object(u.a)(s.a.mark(function t(){var a,n,r,c,l,o,i,u=arguments;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=u.length>0&&void 0!==u[0]?u[0]:1,n=u.length>1&&void 0!==u[1]?u[1]:20,e.setState({loading:!0}),t.next=5,x.a.getAccounts({sort:"-balance",limit:n,start:(a-1)*n});case 5:return r=t.sent,c=r.accounts,l=r.total,o=r.rangeTotal,t.next=11,x.a.getTagNameList();case 11:i=t.sent,c.map(function(e){e.tagName="",i.map(function(t){Object.keys(t.addressList).map(function(a){1==t.addressList[a].length?t.addressList[a][0]===e.address&&(e.tagName="".concat(d()(t.name)).concat("default"!==a?"-".concat(a):"")):t.addressList[a].length>1&&t.addressList[a].map(function(n,r){n===e.address&&(e.tagName="".concat(d()(t.name)).concat("default"!==a?"-".concat(a," ").concat(r+1):" ".concat(r+1)))})})})}),e.setState({loading:!1,accounts:c,total:l,rangeTotal:o});case 14:case"end":return t.stop()}},t)})),e.onChange=function(t,a){e.loadAccounts(t,a)},e.onSearchFieldChangeHandler=function(t){e.setState({searchString:t.target.value})},e.customizedColumn=function(){var t=e.props.intl;return[{title:d()(t.formatMessage({id:"address"})),dataIndex:"address",key:"address",align:"left",className:"ant_table",width:"40%",render:function(e,a,n){return 2==a.accountType?v.a.createElement("span",{className:"d-flex"},v.a.createElement(l.a,{placement:"top",title:t.formatMessage({id:"contracts"})},v.a.createElement("span",null,v.a.createElement("i",{className:"far fa-file mr-1"}))),v.a.createElement(y.a,{address:e,isContract:2==a.toAddressType})):v.a.createElement(y.a,{address:e})}},{title:"Name Tag",dataIndex:"tagName",key:"tagName",align:"left"},{title:d()(t.formatMessage({id:"supply"})),dataIndex:"balance",key:"supply",align:"left",className:"ant_table",render:function(e,t,a){return v.a.createElement("div",null,v.a.createElement(j.c,{value:parseInt(e)/N.o/N.g*100,minimumFractionDigits:8,maximumFractionDigits:8})," %")}},{title:d()(t.formatMessage({id:"power"})),dataIndex:"power",key:"power",align:"center",render:function(e,t,a){return v.a.createElement(j.c,{value:parseInt(e)/N.o})}},{title:d()(t.formatMessage({id:"balance"})),dataIndex:"balance",key:"balance",align:"right",className:"ant_table",render:function(e,t,a){return v.a.createElement(k.b,{amount:parseInt(e)/N.o})}}]},e.state={loading:!0,searchString:"",accounts:[],total:0,exchangeFlag:[{name:"binance",addressList:{Cold:["TMuA6YqfCeX8EhbfYEg5y7S4DqzSJireY9","TWd4WrZ9wn84f5x1hZhL4DHvk738ns5jwb"],Hot:["TAUN6FwrnwwmaEqYcckffC7wYmbaS6cBiX"]}}]},e}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.loadAccounts()}},{key:"componentDidUpdate",value:function(){}},{key:"filteredAccounts",value:function(){var e=this.props.accounts,t=this.state.searchString;return(t=t.toUpperCase()).length>0&&(e=r()(e,function(e){return-1!==e.address.toUpperCase().indexOf(t)})),e}},{key:"renderAccounts",value:function(){var e=this.state.accounts;if(0!==e.length)return v.a.createElement(g.Fragment,null,v.a.createElement("div",{className:"table-responsive"},v.a.createElement("table",{className:"table table-striped m-0"},v.a.createElement("thead",{className:"thead-dark"},v.a.createElement("tr",null,v.a.createElement("th",null,Object(O.c)("address")),v.a.createElement("th",{className:"d-md-table-cell"},Object(O.c)("supply")),v.a.createElement("th",{className:"d-md-table-cell"},Object(O.c)("power")),v.a.createElement("th",null,Object(O.c)("balance")))),v.a.createElement("tbody",null,e.map(function(e,t){return v.a.createElement("tr",{key:e.address},v.a.createElement("th",null,v.a.createElement(y.a,{address:e.address})),v.a.createElement("td",{className:"d-md-table-cell text-nowrap"},v.a.createElement(j.c,{value:e.balance/N.o/N.g*100,minimumFractionDigits:8,maximumFractionDigits:8})," %"),v.a.createElement("td",{className:"text-nowrap d-md-table-cell"},v.a.createElement(j.c,{value:e.power/N.o})),v.a.createElement("td",{className:"text-nowrap"},v.a.createElement(k.b,{amount:e.balance/N.o})))})))))}},{key:"render",value:function(){var e=this,t=this.props,a=(t.match,t.intl),n=this.state,r=n.total,c=n.loading,l=n.rangeTotal,o=void 0===l?0:l,s=n.accounts,i=this.customizedColumn(),d=(a.formatMessage({id:"view_total"}),a.formatMessage({id:"account_unit"}),a.formatMessage({id:"table_info_big"}),a.formatMessage({id:"table_info_account_tip1"})+" "+o+" "+a.formatMessage({id:"table_info_account_tip2"}));return v.a.createElement("main",{className:"container header-overlap pb-3 token_black"},v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"col-md-12"},v.a.createElement("div",{className:"card h-100 text-center widget-icon accout_unit"},v.a.createElement("div",{className:"card-body"},v.a.createElement("h3",{className:"text-primary"},v.a.createElement(j.c,{value:o})),Object(O.c)("total_accounts"))))),c&&v.a.createElement("div",{className:"loading-style"},v.a.createElement(C.b,null)),v.a.createElement("div",{className:"row mt-2"},v.a.createElement("div",{className:"col-md-12 table_pos"},r?v.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},v.a.createElement("div",null,Object(O.c)("view_total")," ",o," ",Object(O.c)("account_unit")," ",v.a.createElement(_.a,{placement:"top",info:d})," ",v.a.createElement("br",null)," ",v.a.createElement("span",null,"(",Object(O.c)("table_info_big1"),"10000",Object(O.c)("table_info_big2"),")"))):"",v.a.createElement(S.a,{bordered:!0,loading:c,column:i,data:s,total:r,onPageChange:function(t,a){e.loadAccounts(t,a)}}))))}}]),t}(g.Component);var T={loadAccounts:w.p};t.default=Object(E.connect)(function(e){return{accounts:e.app.accounts}},T)(Object(j.h)(D))}}]);