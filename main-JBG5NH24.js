var TM=Object.defineProperty,AM=Object.defineProperties;var RM=Object.getOwnPropertyDescriptors;var ny=Object.getOwnPropertySymbols;var kM=Object.prototype.hasOwnProperty,NM=Object.prototype.propertyIsEnumerable;var iy=(t,n,e)=>n in t?TM(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,b=(t,n)=>{for(var e in n||={})kM.call(n,e)&&iy(t,e,n[e]);if(ny)for(var e of ny(n))NM.call(n,e)&&iy(t,e,n[e]);return t},Y=(t,n)=>AM(t,RM(n));var Tt=null,lc=!1,Eh=1,OM=null,Ze=Symbol("SIGNAL");function G(t){let n=Tt;return Tt=t,n}function cc(){return Tt}var Ui={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function gi(t){if(lc)throw new Error("");if(Tt===null)return;Tt.consumerOnSignalRead(t);let n=Tt.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=Tt.recomputing;if(i&&(e=n!==void 0?n.nextProducer:Tt.producers,e!==void 0&&e.producer===t)){Tt.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===Tt&&(!i||PM(r,Tt)))return;let o=Oo(Tt),a={producer:t,consumer:Tt,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};Tt.producersTail=a,n!==void 0?n.nextProducer=a:Tt.producers=a,o&&sy(t,a)}function ry(){Eh++}function Or(t){if(!(Oo(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Eh)){if(!t.producerMustRecompute(t)&&!No(t)){ko(t);return}t.producerRecomputeValue(t),ko(t)}}function Ih(t){if(t.consumers===void 0)return;let n=lc;lc=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||FM(i)}}finally{lc=n}}function xh(){return Tt?.consumerAllowSignalWrites!==!1}function FM(t){t.dirty=!0,Ih(t),t.consumerMarkedDirty?.(t)}function ko(t){t.dirty=!1,t.lastCleanEpoch=Eh}function _i(t){return t&&oy(t),G(t)}function oy(t){t.producersTail=void 0,t.recomputing=!0}function zi(t,n){G(n),t&&ay(t)}function ay(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Oo(t))do e=Mh(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function No(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(Or(e),i!==e.version))return!0}return!1}function $i(t){if(Oo(t)){let n=t.producers;for(;n!==void 0;)n=Mh(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function sy(t,n){let e=t.consumersTail,i=Oo(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)sy(r.producer,r)}function Mh(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!Oo(n)){let o=n.producers;for(;o!==void 0;)o=Mh(o)}return e}function Oo(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function es(t){OM?.(t)}function PM(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function ts(t,n){return Object.is(t,n)}function ns(t,n){let e=Object.create(LM);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(Or(e),gi(e),e.value===qn)throw e.error;return e.value};return i[Ze]=e,es(e),i}var kr=Symbol("UNSET"),Nr=Symbol("COMPUTING"),qn=Symbol("ERRORED"),LM=Y(b({},Ui),{value:kr,dirty:!0,error:null,equal:ts,kind:"computed",producerMustRecompute(t){return t.value===kr||t.value===Nr},producerRecomputeValue(t){if(t.value===Nr)throw new Error("");let n=t.value;t.value=Nr;let e=_i(t),i,r=!1;try{i=t.computation(),G(null),r=n!==kr&&n!==qn&&i!==qn&&t.equal(n,i)}catch(o){i=qn,t.error=o}finally{zi(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function VM(){throw new Error}var ly=VM;function cy(t){ly(t)}function Sh(t){ly=t}var BM=null;function Th(t,n){let e=Object.create(is);e.value=t,n!==void 0&&(e.equal=n);let i=()=>dy(e);return i[Ze]=e,es(e),[i,a=>Gi(e,a),a=>dc(e,a)]}function dy(t){return gi(t),t.value}function Gi(t,n){xh()||cy(t),t.equal(t.value,n)||(t.value=n,jM(t))}function dc(t,n){xh()||cy(t),Gi(t,n(t.value))}var is=Y(b({},Ui),{equal:ts,value:void 0,kind:"signal"});function jM(t){t.version++,ry(),Ih(t),BM?.(t)}var Ah=Y(b({},Ui),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Rh(t){if(t.dirty=!1,t.version>0&&!No(t))return;t.version++;let n=_i(t);try{t.cleanup(),t.fn()}finally{zi(t,n)}}function oe(t){return typeof t=="function"}function Fo(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var uc=Fo(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Fr(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var se=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(oe(i))try{i()}catch(o){n=o instanceof uc?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{uy(o)}catch(a){n=n??[],a instanceof uc?n=[...n,...a.errors]:n.push(a)}}if(n)throw new uc(n)}}add(n){var e;if(n&&n!==this)if(this.closed)uy(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Fr(e,n)}remove(n){let{_finalizers:e}=this;e&&Fr(e,n),n instanceof t&&n._removeParent(this)}};se.EMPTY=(()=>{let t=new se;return t.closed=!0,t})();var kh=se.EMPTY;function fc(t){return t instanceof se||t&&"closed"in t&&oe(t.remove)&&oe(t.add)&&oe(t.unsubscribe)}function uy(t){oe(t)?t():t.unsubscribe()}var In={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Po={setTimeout(t,n,...e){let{delegate:i}=Po;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=Po;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function hc(t){Po.setTimeout(()=>{let{onUnhandledError:n}=In;if(n)n(t);else throw t})}function rs(){}var fy=Nh("C",void 0,void 0);function hy(t){return Nh("E",void 0,t)}function py(t){return Nh("N",t,void 0)}function Nh(t,n,e){return{kind:t,value:n,error:e}}var Pr=null;function Lo(t){if(In.useDeprecatedSynchronousErrorHandling){let n=!Pr;if(n&&(Pr={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=Pr;if(Pr=null,e)throw i}}else t()}function my(t){In.useDeprecatedSynchronousErrorHandling&&Pr&&(Pr.errorThrown=!0,Pr.error=t)}var Lr=class extends se{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,fc(n)&&n.add(this)):this.destination=zM}static create(n,e,i){return new vi(n,e,i)}next(n){this.isStopped?Fh(py(n),this):this._next(n)}error(n){this.isStopped?Fh(hy(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Fh(fy,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},HM=Function.prototype.bind;function Oh(t,n){return HM.call(t,n)}var Ph=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){pc(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){pc(i)}else pc(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){pc(e)}}},vi=class extends Lr{constructor(n,e,i){super();let r;if(oe(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&In.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&Oh(n.next,o),error:n.error&&Oh(n.error,o),complete:n.complete&&Oh(n.complete,o)}):r=n}this.destination=new Ph(r)}};function pc(t){In.useDeprecatedSynchronousErrorHandling?my(t):hc(t)}function UM(t){throw t}function Fh(t,n){let{onStoppedNotification:e}=In;e&&Po.setTimeout(()=>e(t,n))}var zM={closed:!0,next:rs,error:UM,complete:rs};var Vo=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Wt(t){return t}function Lh(...t){return Vh(t)}function Vh(t){return t.length===0?Wt:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var ie=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=GM(e)?e:new vi(e,i,r);return Lo(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=gy(i),new i((r,o)=>{let a=new vi({next:s=>{try{e(s)}catch(l){o(l),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[Vo](){return this}pipe(...e){return Vh(e)(this)}toPromise(e){return e=gy(e),new e((i,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>i(o))})}}return t.create=n=>new t(n),t})();function gy(t){var n;return(n=t??In.Promise)!==null&&n!==void 0?n:Promise}function $M(t){return t&&oe(t.next)&&oe(t.error)&&oe(t.complete)}function GM(t){return t&&t instanceof Lr||$M(t)&&fc(t)}function Bh(t){return oe(t?.lift)}function le(t){return n=>{if(Bh(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function ae(t,n,e,i,r){return new jh(t,n,e,i,r)}var jh=class extends Lr{constructor(n,e,i,r,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(l){n.error(l)}}:super._next,this._error=r?function(s){try{r(s)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};function _y(){return le((t,n)=>{let e=null;t._refCount++;let i=ae(n,void 0,void 0,void 0,()=>{if(!t||t._refCount<=0||0<--t._refCount){e=null;return}let r=t._connection,o=e;e=null,r&&(!o||r===o)&&r.unsubscribe(),n.unsubscribe()});t.subscribe(i),i.closed||(e=t.connect())})}var os=class extends ie{constructor(n,e){super(),this.source=n,this.subjectFactory=e,this._subject=null,this._refCount=0,this._connection=null,Bh(n)&&(this.lift=n.lift)}_subscribe(n){return this.getSubject().subscribe(n)}getSubject(){let n=this._subject;return(!n||n.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:n}=this;this._subject=this._connection=null,n?.unsubscribe()}connect(){let n=this._connection;if(!n){n=this._connection=new se;let e=this.getSubject();n.add(this.source.subscribe(ae(e,void 0,()=>{this._teardown(),e.complete()},i=>{this._teardown(),e.error(i)},()=>this._teardown()))),n.closed&&(this._connection=null,n=se.EMPTY)}return n}refCount(){return _y()(this)}};var Bo={schedule(t){let n=requestAnimationFrame,e=cancelAnimationFrame,{delegate:i}=Bo;i&&(n=i.requestAnimationFrame,e=i.cancelAnimationFrame);let r=n(o=>{e=void 0,t(o)});return new se(()=>e?.(r))},requestAnimationFrame(...t){let{delegate:n}=Bo;return(n?.requestAnimationFrame||requestAnimationFrame)(...t)},cancelAnimationFrame(...t){let{delegate:n}=Bo;return(n?.cancelAnimationFrame||cancelAnimationFrame)(...t)},delegate:void 0};var vy=Fo(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var E=(()=>{class t extends ie{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new mc(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new vy}next(e){Lo(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){Lo(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){Lo(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?kh:(this.currentObservers=null,o.push(e),new se(()=>{this.currentObservers=null,Fr(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new ie;return e.source=this,e}}return t.create=(n,e)=>new mc(n,e),t})(),mc=class extends E{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:kh}};var Xe=class extends E{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var as={now(){return(as.delegate||Date).now()},delegate:void 0};var Wi=class extends E{constructor(n=1/0,e=1/0,i=as){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(i.push(n),!r&&i.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!n.closed;a+=i?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let a=e.now(),s=0;for(let l=1;l<i.length&&i[l]<=a;l+=2)s=l;s&&i.splice(0,s+1)}}};var gc=class extends se{constructor(n,e){super()}schedule(n,e=0){return this}};var ss={setInterval(t,n,...e){let{delegate:i}=ss;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=ss;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var qi=class extends gc{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return ss.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&ss.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Fr(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var WM=1,Hh,Uh={};function yy(t){return t in Uh?(delete Uh[t],!0):!1}var by={setImmediate(t){let n=WM++;return Uh[n]=!0,Hh||(Hh=Promise.resolve()),Hh.then(()=>yy(n)&&t()),n},clearImmediate(t){yy(t)}};var{setImmediate:qM,clearImmediate:YM}=by,ls={setImmediate(...t){let{delegate:n}=ls;return(n?.setImmediate||qM)(...t)},clearImmediate(t){let{delegate:n}=ls;return(n?.clearImmediate||YM)(t)},delegate:void 0};var _c=class extends qi{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}requestAsyncId(n,e,i=0){return i!==null&&i>0?super.requestAsyncId(n,e,i):(n.actions.push(this),n._scheduled||(n._scheduled=ls.setImmediate(n.flush.bind(n,void 0))))}recycleAsyncId(n,e,i=0){var r;if(i!=null?i>0:this.delay>0)return super.recycleAsyncId(n,e,i);let{actions:o}=n;e!=null&&((r=o[o.length-1])===null||r===void 0?void 0:r.id)!==e&&(ls.clearImmediate(e),n._scheduled===e&&(n._scheduled=void 0))}};var jo=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};jo.now=as.now;var Yi=class extends jo{constructor(n,e=jo.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var vc=class extends Yi{flush(n){this._active=!0;let e=this._scheduled;this._scheduled=void 0;let{actions:i}=this,r;n=n||i.shift();do if(r=n.execute(n.state,n.delay))break;while((n=i[0])&&n.id===e&&i.shift());if(this._active=!1,r){for(;(n=i[0])&&n.id===e&&i.shift();)n.unsubscribe();throw r}}};var yc=new vc(_c);var cs=new Yi(qi),Dy=cs;var bc=class extends qi{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}requestAsyncId(n,e,i=0){return i!==null&&i>0?super.requestAsyncId(n,e,i):(n.actions.push(this),n._scheduled||(n._scheduled=Bo.requestAnimationFrame(()=>n.flush(void 0))))}recycleAsyncId(n,e,i=0){var r;if(i!=null?i>0:this.delay>0)return super.recycleAsyncId(n,e,i);let{actions:o}=n;e!=null&&e===n._scheduled&&((r=o[o.length-1])===null||r===void 0?void 0:r.id)!==e&&(Bo.cancelAnimationFrame(e),n._scheduled=void 0)}};var Dc=class extends Yi{flush(n){this._active=!0;let e;n?e=n.id:(e=this._scheduled,this._scheduled=void 0);let{actions:i}=this,r;n=n||i.shift();do if(r=n.execute(n.state,n.delay))break;while((n=i[0])&&n.id===e&&i.shift());if(this._active=!1,r){for(;(n=i[0])&&n.id===e&&i.shift();)n.unsubscribe();throw r}}};var Cc=new Dc(bc);var Je=new ie(t=>t.complete());function wc(t){return t&&oe(t.schedule)}function zh(t){return t[t.length-1]}function Ec(t){return oe(zh(t))?t.pop():void 0}function Yn(t){return wc(zh(t))?t.pop():void 0}function Cy(t,n){return typeof zh(t)=="number"?t.pop():n}function Ey(t,n,e,i){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(u){try{c(i.next(u))}catch(f){a(f)}}function l(u){try{c(i.throw(u))}catch(f){a(f)}}function c(u){u.done?o(u.value):r(u.value).then(s,l)}c((i=i.apply(t,n||[])).next())})}function wy(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Vr(t){return this instanceof Vr?(this.v=t,this):new Vr(t)}function Iy(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(p){return function(v){return Promise.resolve(v).then(p,f)}}function s(p,v){i[p]&&(r[p]=function(I){return new Promise(function(x,T){o.push([p,I,x,T])>1||l(p,I)})},v&&(r[p]=v(r[p])))}function l(p,v){try{c(i[p](v))}catch(I){h(o[0][3],I)}}function c(p){p.value instanceof Vr?Promise.resolve(p.value.v).then(u,f):h(o[0][2],p)}function u(p){l("next",p)}function f(p){l("throw",p)}function h(p,v){p(v),o.shift(),o.length&&l(o[0][0],o[0][1])}}function xy(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof wy=="function"?wy(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(a){return new Promise(function(s,l){a=t[o](a),r(s,l,a.done,a.value)})}}function r(o,a,s,l){Promise.resolve(l).then(function(c){o({value:c,done:s})},a)}}var Ic=t=>t&&typeof t.length=="number"&&typeof t!="function";function xc(t){return oe(t?.then)}function Mc(t){return oe(t[Vo])}function Sc(t){return Symbol.asyncIterator&&oe(t?.[Symbol.asyncIterator])}function Tc(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function ZM(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ac=ZM();function Rc(t){return oe(t?.[Ac])}function kc(t){return Iy(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield Vr(e.read());if(r)return yield Vr(void 0);yield yield Vr(i)}}finally{e.releaseLock()}})}function Nc(t){return oe(t?.getReader)}function Pe(t){if(t instanceof ie)return t;if(t!=null){if(Mc(t))return KM(t);if(Ic(t))return QM(t);if(xc(t))return XM(t);if(Sc(t))return My(t);if(Rc(t))return JM(t);if(Nc(t))return eS(t)}throw Tc(t)}function KM(t){return new ie(n=>{let e=t[Vo]();if(oe(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function QM(t){return new ie(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function XM(t){return new ie(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,hc)})}function JM(t){return new ie(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function My(t){return new ie(n=>{tS(t,n).catch(e=>n.error(e))})}function eS(t){return My(kc(t))}function tS(t,n){var e,i,r,o;return Ey(this,void 0,void 0,function*(){try{for(e=xy(t);i=yield e.next(),!i.done;){let a=i.value;if(n.next(a),n.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function Ut(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function Oc(t,n=0){return le((e,i)=>{e.subscribe(ae(i,r=>Ut(i,t,()=>i.next(r),n),()=>Ut(i,t,()=>i.complete(),n),r=>Ut(i,t,()=>i.error(r),n)))})}function Fc(t,n=0){return le((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function Sy(t,n){return Pe(t).pipe(Fc(n),Oc(n))}function Ty(t,n){return Pe(t).pipe(Fc(n),Oc(n))}function Ay(t,n){return new ie(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function Ry(t,n){return new ie(e=>{let i;return Ut(e,n,()=>{i=t[Ac](),Ut(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>oe(i?.return)&&i.return()})}function Pc(t,n){if(!t)throw new Error("Iterable cannot be null");return new ie(e=>{Ut(e,n,()=>{let i=t[Symbol.asyncIterator]();Ut(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function ky(t,n){return Pc(kc(t),n)}function Ny(t,n){if(t!=null){if(Mc(t))return Sy(t,n);if(Ic(t))return Ay(t,n);if(xc(t))return Ty(t,n);if(Sc(t))return Pc(t,n);if(Rc(t))return Ry(t,n);if(Nc(t))return ky(t,n)}throw Tc(t)}function Le(t,n){return n?Ny(t,n):Pe(t)}function W(...t){let n=Yn(t);return Le(t,n)}function $h(t,n){let e=oe(t)?t:()=>t,i=r=>r.error(e());return new ie(n?r=>n.schedule(i,0,r):i)}function Br(t){return!!t&&(t instanceof ie||oe(t.lift)&&oe(t.subscribe))}var jr=Fo(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function Oy(t){return t instanceof Date&&!isNaN(t)}function me(t,n){return le((e,i)=>{let r=0;e.subscribe(ae(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:nS}=Array;function iS(t,n){return nS(n)?t(...n):t(n)}function Lc(t){return me(n=>iS(t,n))}var{isArray:rS}=Array,{getPrototypeOf:oS,prototype:aS,keys:sS}=Object;function Vc(t){if(t.length===1){let n=t[0];if(rS(n))return{args:n,keys:null};if(lS(n)){let e=sS(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function lS(t){return t&&typeof t=="object"&&oS(t)===aS}function Bc(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function Zn(...t){let n=Yn(t),e=Ec(t),{args:i,keys:r}=Vc(t);if(i.length===0)return Le([],n);let o=new ie(cS(i,n,r?a=>Bc(r,a):Wt));return e?o.pipe(Lc(e)):o}function cS(t,n,e=Wt){return i=>{Fy(n,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let l=0;l<r;l++)Fy(n,()=>{let c=Le(t[l],n),u=!1;c.subscribe(ae(i,f=>{o[l]=f,u||(u=!0,s--),s||i.next(e(o.slice()))},()=>{--a||i.complete()}))},i)},i)}}function Fy(t,n,e){t?Ut(e,t,n):n()}function Py(t,n,e,i,r,o,a,s){let l=[],c=0,u=0,f=!1,h=()=>{f&&!l.length&&!c&&n.complete()},p=I=>c<i?v(I):l.push(I),v=I=>{o&&n.next(I),c++;let x=!1;Pe(e(I,u++)).subscribe(ae(n,T=>{r?.(T),o?p(T):n.next(T)},()=>{x=!0},void 0,()=>{if(x)try{for(c--;l.length&&c<i;){let T=l.shift();a?Ut(n,a,()=>v(T)):v(T)}h()}catch(T){n.error(T)}}))};return t.subscribe(ae(n,p,()=>{f=!0,h()})),()=>{s?.()}}function wt(t,n,e=1/0){return oe(n)?wt((i,r)=>me((o,a)=>n(i,o,r,a))(Pe(t(i,r))),e):(typeof n=="number"&&(e=n),le((i,r)=>Py(i,r,t,e)))}function Zi(t=1/0){return wt(Wt,t)}function Ly(){return Zi(1)}function Ki(...t){return Ly()(Le(t,Yn(t)))}function yi(t){return new ie(n=>{Pe(t()).subscribe(n)})}function Gh(...t){let n=Ec(t),{args:e,keys:i}=Vc(t),r=new ie(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),l=a,c=a;for(let u=0;u<a;u++){let f=!1;Pe(e[u]).subscribe(ae(o,h=>{f||(f=!0,c--),s[u]=h},()=>l--,void 0,()=>{(!l||!f)&&(c||o.next(i?Bc(i,s):s),o.complete())}))}});return n?r.pipe(Lc(n)):r}function Vy(t=0,n,e=Dy){let i=-1;return n!=null&&(wc(n)?e=n:i=n),new ie(r=>{let o=Oy(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function ln(...t){let n=Yn(t),e=Cy(t,1/0),i=t;return i.length?i.length===1?Pe(i[0]):Zi(e)(Le(i,n)):Je}function be(t,n){return le((e,i)=>{let r=0;e.subscribe(ae(i,o=>t.call(n,o,r++)&&i.next(o)))})}function By(t){return le((n,e)=>{let i=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let c=r;r=null,e.next(c)}a&&e.complete()},l=()=>{o=null,a&&e.complete()};n.subscribe(ae(e,c=>{i=!0,r=c,o||Pe(t(c)).subscribe(o=ae(e,s,l))},()=>{a=!0,(!i||!o||o.closed)&&e.complete()}))})}function Ho(t,n=cs){return By(()=>Vy(t,n))}function Uo(t){return le((n,e)=>{let i=null,r=!1,o;i=n.subscribe(ae(e,void 0,void 0,a=>{o=Pe(t(a,Uo(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function Qi(t,n){return oe(n)?wt(t,n,1):wt(t,1)}function ds(t,n=cs){return le((e,i)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let c=o;o=null,i.next(c)}};function l(){let c=a+t,u=n.now();if(u<c){r=this.schedule(void 0,c-u),i.add(r);return}s()}e.subscribe(ae(i,c=>{o=c,a=n.now(),r||(r=n.schedule(l,t),i.add(r))},()=>{s(),i.complete()},void 0,()=>{o=r=null}))})}function jy(t){return le((n,e)=>{let i=!1;n.subscribe(ae(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function ft(t){return t<=0?()=>Je:le((n,e)=>{let i=0;n.subscribe(ae(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function jc(t,n=Wt){return t=t??dS,le((e,i)=>{let r,o=!0;e.subscribe(ae(i,a=>{let s=n(a);(o||!t(r,s))&&(o=!1,r=s,i.next(a))}))})}function dS(t,n){return t===n}function Hy(t=uS){return le((n,e)=>{let i=!1;n.subscribe(ae(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function uS(){return new jr}function us(t){return le((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function bi(t,n){let e=arguments.length>=2;return i=>i.pipe(t?be((r,o)=>t(r,o,i)):Wt,ft(1),e?jy(n):Hy(()=>new jr))}function Hc(t){return t<=0?()=>Je:le((n,e)=>{let i=[];n.subscribe(ae(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function Uc(){return le((t,n)=>{let e,i=!1;t.subscribe(ae(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function Uy(t={}){let{connector:n=()=>new E,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,l,c=0,u=!1,f=!1,h=()=>{s?.unsubscribe(),s=void 0},p=()=>{h(),a=l=void 0,u=f=!1},v=()=>{let I=a;p(),I?.unsubscribe()};return le((I,x)=>{c++,!f&&!u&&h();let T=l=l??n();x.add(()=>{c--,c===0&&!f&&!u&&(s=Wh(v,r))}),T.subscribe(x),!a&&c>0&&(a=new vi({next:_e=>T.next(_e),error:_e=>{f=!0,h(),s=Wh(p,e,_e),T.error(_e)},complete:()=>{u=!0,h(),s=Wh(p,i),T.complete()}}),Pe(I).subscribe(a))})(o)}}function Wh(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new vi({next:()=>{i.unsubscribe(),t()}});return Pe(n(...e)).subscribe(i)}function zc(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,Uy({connector:()=>new Wi(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function fs(t){return be((n,e)=>t<=e)}function ot(...t){let n=Yn(t);return le((e,i)=>{(n?Ki(t,e,n):Ki(t,e)).subscribe(i)})}function Et(t,n){return le((e,i)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&i.complete();e.subscribe(ae(i,l=>{r?.unsubscribe();let c=0,u=o++;Pe(t(l,u)).subscribe(r=ae(i,f=>i.next(n?n(l,f,u,c++):f),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function ve(t){return le((n,e)=>{Pe(t).subscribe(ae(e,()=>e.complete(),rs)),!e.closed&&n.subscribe(e)})}function zt(t,n,e){let i=oe(t)||n||e?{next:t,error:n,complete:e}:t;return i?le((r,o)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let s=!0;r.subscribe(ae(o,l=>{var c;(c=i.next)===null||c===void 0||c.call(i,l),o.next(l)},()=>{var l;s=!1,(l=i.complete)===null||l===void 0||l.call(i),o.complete()},l=>{var c;s=!1,(c=i.error)===null||c===void 0||c.call(i,l),o.error(l)},()=>{var l,c;s&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):Wt}var qh;function $c(){return qh}function Kn(t){let n=qh;return qh=t,n}var zy=Symbol("NotFound");function zo(t){return t===zy||t?.name==="\u0275NotFound"}function Yh(t,n,e){let i=Object.create(fS);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(Or(i),gi(i),i.value===qn)throw i.error;return i.value};return o[Ze]=i,es(i),o}function $y(t,n){Or(t),Gi(t,n),ko(t)}function Gy(t,n){if(Or(t),t.value===qn)throw t.error;dc(t,n),ko(t)}var fS=Y(b({},Ui),{value:kr,dirty:!0,error:null,equal:ts,kind:"linkedSignal",producerMustRecompute(t){return t.value===kr||t.value===Nr},producerRecomputeValue(t){if(t.value===Nr)throw new Error("");let n=t.value;t.value=Nr;let e=_i(t),i,r=!1;try{let o=t.source(),a=n!==kr&&n!==qn,s=a?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,s),t.sourceValue=o,G(null),r=a&&i!==qn&&t.equal(n,i)}catch(o){i=qn,t.error=o}finally{zi(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function Wy(t){let n=G(null);try{return t()}finally{G(n)}}var Qc="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",M=class extends Error{code;constructor(n,e){super(xn(n,e)),this.code=n}};function hS(t){return`NG0${Math.abs(t)}`}function xn(t,n){return`${hS(t)}${n?": "+n:""}`}var Ci=globalThis;function xe(t){for(let n in t)if(t[n]===xe)return n;throw Error("")}function Qy(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function ys(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(ys).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function Xc(t,n){return t?n?`${t} ${n}`:t:n||""}var pS=xe({__forward_ref__:xe});function Ot(t){return t.__forward_ref__=Ot,t}function ht(t){return sp(t)?t():t}function sp(t){return typeof t=="function"&&t.hasOwnProperty(pS)&&t.__forward_ref__===Ot}function D(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function L(t){return{providers:t.providers||[],imports:t.imports||[]}}function bs(t){return mS(t,Jc)}function lp(t){return bs(t)!==null}function mS(t,n){return t.hasOwnProperty(n)&&t[n]||null}function gS(t){let n=t?.[Jc]??null;return n||null}function Kh(t){return t&&t.hasOwnProperty(Wc)?t[Wc]:null}var Jc=xe({\u0275prov:xe}),Wc=xe({\u0275inj:xe}),y=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=D({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function cp(t){return t&&!!t.\u0275providers}var dp=xe({\u0275cmp:xe}),up=xe({\u0275dir:xe}),fp=xe({\u0275pipe:xe}),hp=xe({\u0275mod:xe}),ps=xe({\u0275fac:xe}),Gr=xe({__NG_ELEMENT_ID__:xe}),qy=xe({__NG_ENV_ID__:xe});function pp(t){return td(t,"@NgModule"),t[hp]||null}function Xn(t){return td(t,"@Component"),t[dp]||null}function ed(t){return td(t,"@Directive"),t[up]||null}function Xy(t){return td(t,"@Pipe"),t[fp]||null}function td(t,n){if(t==null)throw new M(-919,!1)}function Go(t){return typeof t=="string"?t:t==null?"":String(t)}var Jy=xe({ngErrorCode:xe}),_S=xe({ngErrorMessage:xe}),vS=xe({ngTokenPath:xe});function mp(t,n){return eb("",-200,n)}function nd(t,n){throw new M(-201,!1)}function eb(t,n,e){let i=new M(n,t);return i[Jy]=n,i[_S]=t,e&&(i[vS]=e),i}function yS(t){return t[Jy]}var Qh;function tb(){return Qh}function Nt(t){let n=Qh;return Qh=t,n}function gp(t,n,e){let i=bs(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;nd(t,"")}var bS={},Hr=bS,DS="__NG_DI_FLAG__",Xh=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=Ur(e)||0;try{return this.injector.get(n,i&8?null:Hr,i)}catch(r){if(zo(r))return r;throw r}}};function CS(t,n=0){let e=$c();if(e===void 0)throw new M(-203,!1);if(e===null)return gp(t,void 0,n);{let i=wS(n),r=e.retrieve(t,i);if(zo(r)){if(i.optional)return null;throw r}return r}}function B(t,n=0){return(tb()||CS)(ht(t),n)}function d(t,n){return B(t,Ur(n))}function Ur(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function wS(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function Jh(t){let n=[];for(let e=0;e<t.length;e++){let i=ht(t[e]);if(Array.isArray(i)){if(i.length===0)throw new M(900,!1);let r,o=0;for(let a=0;a<i.length;a++){let s=i[a],l=ES(s);typeof l=="number"?l===-1?r=s.token:o|=l:r=s}n.push(B(r,o))}else n.push(B(i))}return n}function ES(t){return t[DS]}function Xi(t,n){let e=t.hasOwnProperty(ps);return e?t[ps]:null}function nb(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function ib(t){return t.flat(Number.POSITIVE_INFINITY)}function id(t,n){t.forEach(e=>Array.isArray(e)?id(e,n):n(e))}function _p(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Ds(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function rb(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function ob(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function rd(t,n,e){let i=Wo(t,n);return i>=0?t[i|1]=e:(i=~i,ob(t,i,n,e)),i}function od(t,n){let e=Wo(t,n);if(e>=0)return t[e|1]}function Wo(t,n){return IS(t,n,1)}function IS(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),a=t[o<<e];if(n===a)return o<<e;a>n?r=o:i=o+1}return~(r<<e)}var Mn={},At=[],Wr=new y(""),vp=new y("",-1),yp=new y(""),ms=class{get(n,e=Hr){if(e===Hr){let r=eb("",-201);throw r.name="\u0275NotFound",r}return e}};function tr(t){return{\u0275providers:t}}function ab(t){return tr([{provide:Wr,multi:!0,useValue:t}])}function sb(...t){return{\u0275providers:bp(!0,t),\u0275fromNgModule:!0}}function bp(t,...n){let e=[],i=new Set,r,o=a=>{e.push(a)};return id(n,a=>{let s=a;qc(s,o,[],i)&&(r||=[],r.push(s))}),r!==void 0&&lb(r,o),e}function lb(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];Dp(r,o=>{n(o,i)})}}function qc(t,n,e,i){if(t=ht(t),!t)return!1;let r=null,o=Kh(t),a=!o&&Xn(t);if(!o&&!a){let l=t.ngModule;if(o=Kh(l),o)r=l;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=i.has(r);if(a){if(s)return!1;if(i.add(r),a.dependencies){let l=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let c of l)qc(c,n,e,i)}}else if(o){if(o.imports!=null&&!s){i.add(r);let c;id(o.imports,u=>{qc(u,n,e,i)&&(c||=[],c.push(u))}),c!==void 0&&lb(c,n)}if(!s){let c=Xi(r)||(()=>new r);n({provide:r,useFactory:c,deps:At},r),n({provide:yp,useValue:r,multi:!0},r),n({provide:Wr,useValue:()=>B(r),multi:!0},r)}let l=o.providers;if(l!=null&&!s){let c=t;Dp(l,u=>{n(u,c)})}}else return!1;return r!==t&&t.providers!==void 0}function Dp(t,n){for(let e of t)cp(e)&&(e=e.\u0275providers),Array.isArray(e)?Dp(e,n):n(e)}var xS=xe({provide:String,useValue:xe});function cb(t){return t!==null&&typeof t=="object"&&xS in t}function MS(t){return!!(t&&t.useExisting)}function SS(t){return!!(t&&t.useFactory)}function zr(t){return typeof t=="function"}function db(t){return!!t.useClass}var Cs=new y(""),Gc={},Yy={},Zh;function qo(){return Zh===void 0&&(Zh=new ms),Zh}var Me=class{},$r=class extends Me{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,tp(n,a=>this.processProvider(a)),this.records.set(vp,$o(void 0,this)),r.has("environment")&&this.records.set(Me,$o(void 0,this));let o=this.records.get(Cs);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(yp,At,{self:!0}))}retrieve(n,e){let i=Ur(e)||0;try{return this.get(n,Hr,i)}catch(r){if(zo(r))return r;throw r}}destroy(){hs(this),this._destroyed=!0;let n=G(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),G(n)}}onDestroy(n){return hs(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){hs(this);let e=Kn(this),i=Nt(void 0),r;try{return n()}finally{Kn(e),Nt(i)}}get(n,e=Hr,i){if(hs(this),n.hasOwnProperty(qy))return n[qy](this);let r=Ur(i),o,a=Kn(this),s=Nt(void 0);try{if(!(r&4)){let c=this.records.get(n);if(c===void 0){let u=NS(n)&&bs(n);u&&this.injectableDefInScope(u)?c=$o(ep(n),Gc):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,r)}let l=r&2?qo():this.parent;return e=r&8&&e===Hr?null:e,l.get(n,e)}catch(l){let c=yS(l);throw c===-200||c===-201?new M(c,null):l}finally{Nt(s),Kn(a)}}resolveInjectorInitializers(){let n=G(null),e=Kn(this),i=Nt(void 0),r;try{let o=this.get(Wr,At,{self:!0});for(let a of o)a()}finally{Kn(e),Nt(i),G(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=ht(n);let e=zr(n)?n:ht(n&&n.provide),i=AS(n);if(!zr(n)&&n.multi===!0){let r=this.records.get(e);r||(r=$o(void 0,Gc,!0),r.factory=()=>Jh(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=G(null);try{if(e.value===Yy)throw mp("");return e.value===Gc&&(e.value=Yy,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&kS(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{G(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=ht(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function ep(t){let n=bs(t),e=n!==null?n.factory:Xi(t);if(e!==null)return e;if(t instanceof y)throw new M(-204,!1);if(t instanceof Function)return TS(t);throw new M(-204,!1)}function TS(t){if(t.length>0)throw new M(-204,!1);let e=gS(t);return e!==null?()=>e.factory(t):()=>new t}function AS(t){if(cb(t))return $o(void 0,t.useValue);{let n=Cp(t);return $o(n,Gc)}}function Cp(t,n,e){let i;if(zr(t)){let r=ht(t);return Xi(r)||ep(r)}else if(cb(t))i=()=>ht(t.useValue);else if(SS(t))i=()=>t.useFactory(...Jh(t.deps||[]));else if(MS(t))i=(r,o)=>B(ht(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=ht(t&&(t.useClass||t.provide));if(RS(t))i=()=>new r(...Jh(t.deps));else return Xi(r)||ep(r)}return i}function hs(t){if(t.destroyed)throw new M(-205,!1)}function $o(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function RS(t){return!!t.deps}function kS(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function NS(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function tp(t,n){for(let e of t)Array.isArray(e)?tp(e,n):e&&cp(e)?tp(e.\u0275providers,n):n(e)}function mt(t,n){let e;t instanceof $r?(hs(t),e=t):e=new Xh(t);let i,r=Kn(e),o=Nt(void 0);try{return n()}finally{Kn(r),Nt(o)}}function ub(){return tb()!==void 0||$c()!=null}var Sn=0,q=1,ee=2,pt=3,dn=4,Ft=5,qr=6,Yo=7,et=8,wi=9,Tn=10,Ne=11,Zo=12,wp=13,Yr=14,Pt=15,nr=16,Zr=17,Jn=18,Ei=19,Ep=20,Di=21,ad=22,Ji=23,qt=24,Kr=25,ir=26,ze=27,fb=1,Ip=6,rr=7,ws=8,Qr=9,Ke=10;function Ii(t){return Array.isArray(t)&&typeof t[fb]=="object"}function An(t){return Array.isArray(t)&&t[fb]===!0}function xp(t){return(t.flags&4)!==0}function xi(t){return t.componentOffset>-1}function Ko(t){return(t.flags&1)===1}function Rn(t){return!!t.template}function Qo(t){return(t[ee]&512)!==0}function Xr(t){return(t[ee]&256)===256}var Mp="svg",hb="math";function un(t){for(;Array.isArray(t);)t=t[Sn];return t}function Sp(t,n){return un(n[t])}function kn(t,n){return un(n[t.index])}function sd(t,n){return t.data[n]}function Tp(t,n){return t[n]}function Ap(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function fn(t,n){let e=n[t];return Ii(e)?e:e[Sn]}function pb(t){return(t[ee]&4)===4}function ld(t){return(t[ee]&128)===128}function mb(t){return An(t[pt])}function hn(t,n){return n==null?null:t[n]}function Rp(t){t[Zr]=0}function kp(t){t[ee]&1024||(t[ee]|=1024,ld(t)&&Jr(t))}function gb(t,n){for(;t>0;)n=n[Yr],t--;return n}function Es(t){return!!(t[ee]&9216||t[qt]?.dirty)}function cd(t){t[Tn].changeDetectionScheduler?.notify(8),t[ee]&64&&(t[ee]|=1024),Es(t)&&Jr(t)}function Jr(t){t[Tn].changeDetectionScheduler?.notify(0);let n=er(t);for(;n!==null&&!(n[ee]&8192||(n[ee]|=8192,!ld(n)));)n=er(n)}function Np(t,n){if(Xr(t))throw new M(911,!1);t[Di]===null&&(t[Di]=[]),t[Di].push(n)}function _b(t,n){if(t[Di]===null)return;let e=t[Di].indexOf(n);e!==-1&&t[Di].splice(e,1)}function er(t){let n=t[pt];return An(n)?n[pt]:n}function Op(t){return t[Yo]??=[]}function Fp(t){return t.cleanup??=[]}function vb(t,n,e,i){let r=Op(n);r.push(e),t.firstCreatePass&&Fp(t).push(i,r.length-1)}var ce={lFrame:Ab(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var np=!1;function yb(){return ce.lFrame.elementDepthCount}function bb(){ce.lFrame.elementDepthCount++}function Pp(){ce.lFrame.elementDepthCount--}function dd(){return ce.bindingsEnabled}function Lp(){return ce.skipHydrationRootTNode!==null}function Vp(t){return ce.skipHydrationRootTNode===t}function Bp(){ce.skipHydrationRootTNode=null}function Q(){return ce.lFrame.lView}function je(){return ce.lFrame.tView}function Dt(t){return ce.lFrame.contextLView=t,t[et]}function Ct(t){return ce.lFrame.contextLView=null,t}function at(){let t=jp();for(;t!==null&&t.type===64;)t=t.parent;return t}function jp(){return ce.lFrame.currentTNode}function Db(){let t=ce.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function Xo(t,n){let e=ce.lFrame;e.currentTNode=t,e.isParent=n}function Hp(){return ce.lFrame.isParent}function Up(){ce.lFrame.isParent=!1}function Cb(){return ce.lFrame.contextLView}function zp(){return np}function gs(t){let n=np;return np=t,n}function $p(){let t=ce.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function wb(){return ce.lFrame.bindingIndex}function Eb(t){return ce.lFrame.bindingIndex=t}function or(){return ce.lFrame.bindingIndex++}function ud(t){let n=ce.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function Ib(){return ce.lFrame.inI18n}function xb(t,n){let e=ce.lFrame;e.bindingIndex=e.bindingRootIndex=t,fd(n)}function Mb(){return ce.lFrame.currentDirectiveIndex}function fd(t){ce.lFrame.currentDirectiveIndex=t}function Sb(t){let n=ce.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function hd(){return ce.lFrame.currentQueryIndex}function Is(t){ce.lFrame.currentQueryIndex=t}function OS(t){let n=t[q];return n.type===2?n.declTNode:n.type===1?t[Ft]:null}function Gp(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=OS(o),r===null||(o=o[Yr],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=ce.lFrame=Tb();return i.currentTNode=n,i.lView=t,!0}function pd(t){let n=Tb(),e=t[q];ce.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function Tb(){let t=ce.lFrame,n=t===null?null:t.child;return n===null?Ab(t):n}function Ab(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function Rb(){let t=ce.lFrame;return ce.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Wp=Rb;function md(){let t=Rb();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function kb(t){return(ce.lFrame.contextLView=gb(t,ce.lFrame.contextLView))[et]}function ei(){return ce.lFrame.selectedIndex}function ar(t){ce.lFrame.selectedIndex=t}function xs(){let t=ce.lFrame;return sd(t.tView,t.selectedIndex)}function Yt(){ce.lFrame.currentNamespace=Mp}function eo(){FS()}function FS(){ce.lFrame.currentNamespace=null}function Nb(){return ce.lFrame.currentNamespace}var Ob=!0;function gd(){return Ob}function Ms(t){Ob=t}function ip(t,n=null,e=null,i){let r=qp(t,n,e,i);return r.resolveInjectorInitializers(),r}function qp(t,n=null,e=null,i,r=new Set){let o=[e||At,sb(t)],a;return new $r(o,n||qo(),a||null,r)}var j=class t{static THROW_IF_NOT_FOUND=Hr;static NULL=new ms;static create(n,e){if(Array.isArray(n))return ip({name:""},e,n,"");{let i=n.name??"";return ip({name:i},n.parent,n.providers,i)}}static \u0275prov=D({token:t,providedIn:"any",factory:()=>B(vp)});static __NG_ELEMENT_ID__=-1},H=new y(""),It=(()=>{class t{static __NG_ELEMENT_ID__=PS;static __NG_ENV_ID__=e=>e}return t})(),Yc=class extends It{_lView;constructor(n){super(),this._lView=n}get destroyed(){return Xr(this._lView)}onDestroy(n){let e=this._lView;return Np(e,n),()=>_b(e,n)}};function PS(){return new Yc(Q())}var Fb=!1,Pb=new y(""),Mi=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Xe(!1);debugTaskTracker=d(Pb,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new ie(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=D({token:t,providedIn:"root",factory:()=>new t})}return t})(),rp=class extends E{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,ub()&&(this.destroyRef=d(It,{optional:!0})??void 0,this.pendingTasks=d(Mi,{optional:!0})??void 0)}emit(n){let e=G(null);try{super.next(n)}finally{G(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),a=i;if(n&&typeof n=="object"){let l=n;r=l.next?.bind(l),o=l.error?.bind(l),a=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return n instanceof se&&n.add(s),s}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},N=rp;function Zc(...t){}function Yp(t){let n,e;function i(){t=Zc;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function Lb(t){return queueMicrotask(()=>t()),()=>{t=Zc}}var Zp="isAngularZone",_s=Zp+"_ID",LS=0,P=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new N(!1);onMicrotaskEmpty=new N(!1);onStable=new N(!1);onError=new N(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=Fb}=n;if(typeof Zone>"u")throw new M(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&i,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,jS(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Zp)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new M(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new M(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,n,VS,Zc,Zc);try{return o.runTask(a,e,i)}finally{o.cancelTask(a)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},VS={};function Kp(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function BS(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Yp(()=>{t.callbackScheduled=!1,op(t),t.isCheckStableRunning=!0,Kp(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),op(t)}function jS(t){let n=()=>{BS(t)},e=LS++;t._inner=t._inner.fork({name:"angular",properties:{[Zp]:!0,[_s]:e,[_s+e]:!0},onInvokeTask:(i,r,o,a,s,l)=>{if(HS(l))return i.invokeTask(o,a,s,l);try{return Zy(t),i.invokeTask(o,a,s,l)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),Ky(t)}},onInvoke:(i,r,o,a,s,l,c)=>{try{return Zy(t),i.invoke(o,a,s,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!US(l)&&n(),Ky(t)}},onHasTask:(i,r,o,a)=>{i.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,op(t),Kp(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(i,r,o,a)=>(i.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function op(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Zy(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Ky(t){t._nesting--,Kp(t)}var vs=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new N;onMicrotaskEmpty=new N;onStable=new N;onError=new N;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function HS(t){return Vb(t,"__ignore_ng_zone__")}function US(t){return Vb(t,"__scheduler_tick__")}function Vb(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var cn=class{_console=console;handleError(n){this._console.error("ERROR",n)}},Zt=new y("",{factory:()=>{let t=d(P),n=d(Me),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(cn),e.handleError(i))})}}}),Bb={provide:Wr,useValue:()=>{let t=d(cn,{optional:!0})},multi:!0},zS=new y("",{factory:()=>{let t=d(H).defaultView;if(!t)return;let n=d(Zt),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),d(It).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function Qp(){return tr([ab(()=>{d(zS)})])}function O(t,n){let[e,i,r]=Th(t,n?.equal),o=e,a=o[Ze];return o.set=i,o.update=r,o.asReadonly=Ss.bind(o),o}function Ss(){let t=this[Ze];if(t.readonlyFn===void 0){let n=()=>this();n[Ze]=t,t.readonlyFn=n}return t.readonlyFn}var Jo=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=$S}return t})();function $S(){return new Jo(Q(),at())}var Qn=class{},Ts=new y("",{factory:()=>!0});var Xp=new y(""),As=(()=>{class t{internalPendingTasks=d(Mi);scheduler=d(Qn);errorHandler=d(Zt);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=D({token:t,providedIn:"root",factory:()=>new t})}return t})(),_d=(()=>{class t{static \u0275prov=D({token:t,providedIn:"root",factory:()=>new ap})}return t})(),ap=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},Kc=class{[Ze];constructor(n){this[Ze]=n}destroy(){this[Ze].destroy()}};function Kt(t,n){let e=n?.injector??d(j),i=n?.manualCleanup!==!0?e.get(It):null,r,o=e.get(Jo,null,{optional:!0}),a=e.get(Qn);return o!==null?(r=qS(o.view,a,t),i instanceof Yc&&i._lView===o.view&&(i=null)):r=YS(t,e.get(_d),a),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new Kc(r)}var jb=Y(b({},Ah),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=gs(!1);try{Rh(this)}finally{gs(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=G(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],G(t)}}}),GS=Y(b({},jb),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if($i(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),WS=Y(b({},jb),{consumerMarkedDirty(){this.view[ee]|=8192,Jr(this.view),this.notifier.notify(13)},destroy(){if($i(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[Ji]?.delete(this)}});function qS(t,n,e){let i=Object.create(WS);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=Hb(i,e),t[Ji]??=new Set,t[Ji].add(i),i.consumerMarkedDirty(i),i}function YS(t,n,e){let i=Object.create(GS);return i.fn=Hb(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function Hb(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function Us(t){return{toString:t}.toString()}function eT(t){return typeof t=="function"}function yD(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var Id=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},Te=(()=>{let t=()=>bD;return t.ngInherit=!0,t})();function bD(t){return t.type.prototype.ngOnChanges&&(t.setInput=nT),tT}function tT(){let t=CD(this),n=t?.current;if(n){let e=t.previous;if(e===Mn)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function nT(t,n,e,i,r){let o=this.declaredInputs[i],a=CD(t)||iT(t,{previous:Mn,current:null}),s=a.current||(a.current={}),l=a.previous,c=l[o];s[o]=new Id(c&&c.currentValue,e,l===Mn),yD(t,n,r,e)}var DD="__ngSimpleChanges__";function CD(t){return t[DD]||null}function iT(t,n){return t[DD]=n}var Ub=[];var Se=function(t,n=null,e){for(let i=0;i<Ub.length;i++){let r=Ub[i];r(t,n,e)}},ye=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(ye||{});function rT(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let a=bD(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function wD(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:u}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),u!=null&&(t.destroyHooks??=[]).push(e,u)}}function bd(t,n,e){ED(t,n,3,e)}function Dd(t,n,e,i){(t[ee]&3)===e&&ED(t,n,e,i)}function Jp(t,n){let e=t[ee];(e&3)===n&&(e&=16383,e+=1,t[ee]=e)}function ED(t,n,e,i){let r=i!==void 0?t[Zr]&65535:0,o=i??-1,a=n.length-1,s=0;for(let l=r;l<a;l++)if(typeof n[l+1]=="number"){if(s=n[l],i!=null&&s>=i)break}else n[l]<0&&(t[Zr]+=65536),(s<o||o==-1)&&(oT(t,e,n,l),t[Zr]=(t[Zr]&4294901760)+l+2),l++}function zb(t,n){Se(ye.LifecycleHookStart,t,n);let e=G(null);try{n.call(t)}finally{G(e),Se(ye.LifecycleHookEnd,t,n)}}function oT(t,n,e,i){let r=e[i]<0,o=e[i+1],a=r?-e[i]:e[i],s=t[a];r?t[ee]>>14<t[Zr]>>16&&(t[ee]&3)===n&&(t[ee]+=16384,zb(s,o)):zb(s,o)}var ta=-1,no=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function aT(t){return(t.flags&8)!==0}function sT(t){return(t.flags&16)!==0}function lT(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],a=e[i++],s=e[i++];t.setAttribute(n,a,s,o)}else{let o=r,a=e[++i];cT(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),i++}}return i}function ID(t){return t===3||t===4||t===6}function cT(t){return t.charCodeAt(0)===64}function na(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?$b(t,e,r,null,n[++i]):$b(t,e,r,null,null))}}return t}function $b(t,n,e,i,r){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function xD(t){return t!==ta}function xd(t){return t&32767}function dT(t){return t>>16}function Md(t,n){let e=dT(t),i=n;for(;e>0;)i=i[Yr],e--;return i}var dm=!0;function Sd(t){let n=dm;return dm=t,n}var uT=256,MD=uT-1,SD=5,fT=0,ti={};function hT(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(Gr)&&(i=e[Gr]),i==null&&(i=e[Gr]=fT++);let r=i&MD,o=1<<r;n.data[t+(r>>SD)]|=o}function Td(t,n){let e=TD(t,n);if(e!==-1)return e;let i=n[q];i.firstCreatePass&&(t.injectorIndex=n.length,em(i.data,t),em(n,null),em(i.blueprint,null));let r=Bm(t,n),o=t.injectorIndex;if(xD(r)){let a=xd(r),s=Md(r,n),l=s[q].data;for(let c=0;c<8;c++)n[o+c]=s[a+c]|l[a+c]}return n[o+8]=r,o}function em(t,n){t.push(0,0,0,0,0,0,0,0,n)}function TD(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Bm(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=OD(r),i===null)return ta;if(e++,r=r[Yr],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return ta}function um(t,n,e){hT(t,n,e)}function pT(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(ID(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function AD(t,n,e){if(e&8||t!==void 0)return t;nd(n,"NodeInjector")}function RD(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[wi],o=Nt(void 0);try{return r?r.get(n,i,e&8):gp(n,i,e&8)}finally{Nt(o)}}return AD(i,n,e)}function kD(t,n,e,i=0,r){if(t!==null){if(n[ee]&2048&&!(i&2)){let a=vT(t,n,e,i,ti);if(a!==ti)return a}let o=ND(t,n,e,i,ti);if(o!==ti)return o}return RD(n,e,i,r)}function ND(t,n,e,i,r){let o=gT(e);if(typeof o=="function"){if(!Gp(n,t,i))return i&1?AD(r,e,i):RD(n,e,i,r);try{let a;if(a=o(i),a==null&&!(i&8))nd(e);else return a}finally{Wp()}}else if(typeof o=="number"){let a=null,s=TD(t,n),l=ta,c=i&1?n[Pt][Ft]:null;for((s===-1||i&4)&&(l=s===-1?Bm(t,n):n[s+8],l===ta||!Wb(i,!1)?s=-1:(a=n[q],s=xd(l),n=Md(l,n)));s!==-1;){let u=n[q];if(Gb(o,s,u.data)){let f=mT(s,n,e,a,i,c);if(f!==ti)return f}l=n[s+8],l!==ta&&Wb(i,n[q].data[s+8]===c)&&Gb(o,s,n)?(a=u,s=xd(l),n=Md(l,n)):s=-1}}return r}function mT(t,n,e,i,r,o){let a=n[q],s=a.data[t+8],l=i==null?xi(s)&&dm:i!=a&&(s.type&3)!==0,c=r&1&&o===s,u=Cd(s,a,e,l,c);return u!==null?Fs(n,a,u,s,r):ti}function Cd(t,n,e,i,r){let o=t.providerIndexes,a=n.data,s=o&1048575,l=t.directiveStart,c=t.directiveEnd,u=o>>20,f=i?s:s+u,h=r?s+u:c;for(let p=f;p<h;p++){let v=a[p];if(p<l&&e===v||p>=l&&v.type===e)return p}if(r){let p=a[l];if(p&&Rn(p)&&p.type===e)return l}return null}function Fs(t,n,e,i,r){let o=t[e],a=n.data;if(o instanceof no){let s=o;if(s.resolving)throw mp("");let l=Sd(s.canSeeViewProviders);s.resolving=!0;let c=a[e].type||a[e],u,f=s.injectImpl?Nt(s.injectImpl):null,h=Gp(t,i,0);try{o=t[e]=s.factory(void 0,r,a,t,i),n.firstCreatePass&&e>=i.directiveStart&&rT(e,a[e],n)}finally{f!==null&&Nt(f),Sd(l),s.resolving=!1,Wp()}}return o}function gT(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(Gr)?t[Gr]:void 0;return typeof n=="number"?n>=0?n&MD:_T:n}function Gb(t,n,e){let i=1<<t;return!!(e[n+(t>>SD)]&i)}function Wb(t,n){return!(t&2)&&!(t&1&&n)}var to=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return kD(this._tNode,this._lView,n,Ur(i),e)}};function _T(){return new to(at(),Q())}function De(t){return Us(()=>{let n=t.prototype.constructor,e=n[ps]||fm(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[ps]||fm(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function fm(t){return sp(t)?()=>{let n=fm(ht(t));return n&&n()}:Xi(t)}function vT(t,n,e,i,r){let o=t,a=n;for(;o!==null&&a!==null&&a[ee]&2048&&!Qo(a);){let s=ND(o,a,e,i|2,ti);if(s!==ti)return s;let l=o.parent;if(!l){let c=a[Ep];if(c){let u=c.get(e,ti,i&-5);if(u!==ti)return u}l=OD(a),a=a[Yr]}o=l}return r}function OD(t){let n=t[q],e=n.type;return e===2?n.declTNode:e===1?t[Ft]:null}function zs(t){return pT(at(),t)}function yT(){return aa(at(),Q())}function aa(t,n){return new R(kn(t,n))}var R=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=yT}return t})();function FD(t){return t instanceof R?t.nativeElement:t}function bT(){return this._results[Symbol.iterator]()}var Si=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new E}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=ib(n);(this._changesDetected=!nb(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=bT};function PD(t){return(t.flags&128)===128}var jm=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(jm||{}),LD=new Map,DT=0;function CT(){return DT++}function wT(t){LD.set(t[Ei],t)}function hm(t){LD.delete(t[Ei])}var qb="__ngContext__";function ia(t,n){Ii(n)?(t[qb]=n[Ei],wT(n)):t[qb]=n}function VD(t){return jD(t[Zo])}function BD(t){return jD(t[dn])}function jD(t){for(;t!==null&&!An(t);)t=t[dn];return t}var ET;function Hm(t){ET=t}var cr=new y("",{factory:()=>IT}),IT="ng";var zd=new y(""),oo=new y("",{providedIn:"platform",factory:()=>"unknown"}),$s=new y(""),ao=new y("",{factory:()=>d(H).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var HD="r";var UD="di";var zD=!1,$D=new y("",{factory:()=>zD});var Um=new y("");var xT=(t,n,e,i)=>{};function MT(t,n,e,i){xT(t,n,e,i)}function $d(t){return(t.flags&32)===32}var ST=()=>null;function GD(t,n,e=!1){return ST(t,n,e)}function WD(t,n){let e=t.contentQueries;if(e!==null){let i=G(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];Is(o),s.contentQueries(2,n[a],a)}}}finally{G(i)}}}function pm(t,n,e){Is(0);let i=G(null);try{n(t,e)}finally{G(i)}}function zm(t,n,e){if(xp(n)){let i=G(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let l=e[a];s.contentQueries(1,l,a)}}}finally{G(i)}}}var Fn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(Fn||{});var vd;function TT(){if(vd===void 0&&(vd=null,Ci.trustedTypes))try{vd=Ci.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return vd}function Yb(t){return TT()?.createScriptURL(t)||t}var Ad=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Qc})`}};function sa(t){return t instanceof Ad?t.changingThisBreaksApplicationSecurity:t}function $m(t,n){let e=qD(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${Qc})`)}return e===n}function qD(t){return t instanceof Ad&&t.getTypeName()||null}var AT=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function YD(t){return t=String(t),t.match(AT)?t:"unsafe:"+t}var RT=/^>|^->|<!--|-->|--!>|<!-$/g,kT=/(<|>)/g,NT="\u200B$1\u200B";function OT(t){return t.replace(RT,n=>n.replace(kT,NT))}function FT(t,n){return t.createText(n)}function PT(t,n,e){t.setValue(n,e)}function LT(t,n){return t.createComment(OT(n))}function ZD(t,n,e){return t.createElement(n,e)}function Rd(t,n,e,i,r){t.insertBefore(n,e,i,r)}function KD(t,n,e){t.appendChild(n,e)}function Zb(t,n,e,i,r){i!==null?Rd(t,n,e,i,r):KD(t,n,e)}function QD(t,n,e,i){t.removeChild(null,n,e,i)}function VT(t,n,e){t.setAttribute(n,"style",e)}function BT(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function XD(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&lT(t,n,i),r!==null&&BT(t,n,r),o!==null&&VT(t,n,o)}var Gd=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(Gd||{});function JD(t){let n=tC();return n?n.sanitize(Gd.URL,t)||"":$m(t,"URL")?sa(t):YD(Go(t))}function eC(t){let n=tC();if(n)return Yb(n.sanitize(Gd.RESOURCE_URL,t)||"");if($m(t,"ResourceURL"))return Yb(sa(t));throw new M(904,!1)}var jT={embed:{src:!0},frame:{src:!0},iframe:{src:!0},media:{src:!0},script:{src:!0,href:!0,"xlink:href":!0},base:{href:!0},link:{href:!0},object:{data:!0,codebase:!0}};function HT(t,n){return jT[t]?.[n]===!0?eC:JD}function Gm(t,n,e){return HT(n,e)(t)}function tC(){let t=Q();return t&&t[Tn].sanitizer}function nC(t){return t instanceof Function?t():t}function UT(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var iC="ng-template";function zT(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&UT(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(Wm(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Wm(t){return t.type===4&&t.value!==iC}function $T(t,n,e){let i=t.type===4&&!e?iC:t.value;return n===i}function GT(t,n,e){let i=4,r=t.attrs,o=r!==null?YT(r):0,a=!1;for(let s=0;s<n.length;s++){let l=n[s];if(typeof l=="number"){if(!a&&!Nn(i)&&!Nn(l))return!1;if(a&&Nn(l))continue;a=!1,i=l|i&1;continue}if(!a)if(i&4){if(i=2|i&1,l!==""&&!$T(t,l,e)||l===""&&n.length===1){if(Nn(i))return!1;a=!0}}else if(i&8){if(r===null||!zT(t,r,l,e)){if(Nn(i))return!1;a=!0}}else{let c=n[++s],u=WT(l,r,Wm(t),e);if(u===-1){if(Nn(i))return!1;a=!0;continue}if(c!==""){let f;if(u>o?f="":f=r[u+1].toLowerCase(),i&2&&c!==f){if(Nn(i))return!1;a=!0}}}}return Nn(i)||a}function Nn(t){return(t&1)===0}function WT(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let a=n[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++r];for(;typeof s=="string";)s=n[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return ZT(n,t)}function rC(t,n,e=!1){for(let i=0;i<n.length;i++)if(GT(t,n[i],e))return!0;return!1}function qT(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function YT(t){for(let n=0;n<t.length;n++){let e=t[n];if(ID(e))return n}return t.length}function ZT(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function KT(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function Kb(t,n){return t?":not("+n.trim()+")":n}function QT(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(i&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!Nn(a)&&(n+=Kb(o,r),r=""),i=a,o=o||!Nn(i);e++}return r!==""&&(n+=Kb(o,r)),n}function XT(t){return t.map(QT).join(",")}function JT(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!Nn(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var Lt={};function qm(t,n,e,i,r,o,a,s,l,c,u){let f=ze+i,h=f+r,p=eA(f,h),v=typeof c=="function"?c():c;return p[q]={type:t,blueprint:p,template:e,queries:null,viewQuery:s,declTNode:n,data:p.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:l,consts:v,incompleteFirstPass:!1,ssrId:u}}function eA(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:Lt);return e}function tA(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=qm(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function Ym(t,n,e,i,r,o,a,s,l,c,u){let f=n.blueprint.slice();return f[Sn]=r,f[ee]=i|4|128|8|64|1024,(c!==null||t&&t[ee]&2048)&&(f[ee]|=2048),Rp(f),f[pt]=f[Yr]=t,f[et]=e,f[Tn]=a||t&&t[Tn],f[Ne]=s||t&&t[Ne],f[wi]=l||t&&t[wi]||null,f[Ft]=o,f[Ei]=CT(),f[qr]=u,f[Ep]=c,f[Pt]=n.type==2?t[Pt]:f,f}function nA(t,n,e){let i=kn(n,t),r=tA(e),o=t[Tn].rendererFactory,a=Zm(t,Ym(t,r,null,oC(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=a}function oC(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function aC(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function Zm(t,n){return t[Zo]?t[wp][dn]=n:t[Zo]=n,t[wp]=n,n}function _(t=1){sC(je(),Q(),ei()+t,!1)}function sC(t,n,e,i){if(!i)if((n[ee]&3)===3){let o=t.preOrderCheckHooks;o!==null&&bd(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Dd(n,o,0,e)}ar(e)}var Wd=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(Wd||{});function mm(t,n,e,i){let r=G(null);try{let[o,a,s]=t.inputs[e],l=null;(a&Wd.SignalBased)!==0&&(l=n[o][Ze]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):s!==null&&(i=s.call(n,i)),t.setInput!==null?t.setInput(n,l,i,e,o):yD(n,l,o,i)}finally{G(r)}}var ni=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(ni||{}),iA;function Km(t,n){return iA(t,n)}var v4=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var gm=new WeakMap,ks=new WeakSet;function rA(t,n){let e=gm.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===n?(e.splice(o,1),ks.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&i&&s!==i)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function oA(t,n){let e=gm.get(t);e?e.includes(n)||e.push(n):gm.set(t,[n])}var io=new Set,qd=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(qd||{}),Ln=new y(""),Qb=new Set;function ri(t){Qb.has(t)||(Qb.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var Yd=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=D({token:t,providedIn:"root",factory:()=>new t})}return t})(),Qm=[0,1,2,3],Xm=(()=>{class t{ngZone=d(P);scheduler=d(Qn);errorHandler=d(cn,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){d(Ln,{optional:!0})}execute(){let e=this.sequences.size>0;e&&Se(ye.AfterRenderHooksStart),this.executing=!0;for(let i of Qm)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&Se(ye.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[Kr]??=[]).push(e),Jr(i),i[ee]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(qd.AFTER_NEXT_RENDER,e):e()}static \u0275prov=D({token:t,providedIn:"root",factory:()=>new t})}return t})(),Ps=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,a=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[Kr];n&&(this.view[Kr]=n.filter(e=>e!==this))}};function Ve(t,n){let e=n?.injector??d(j);return ri("NgAfterNextRender"),sA(t,e,n,!0)}function aA(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function sA(t,n,e,i){let r=n.get(Yd);r.impl??=n.get(Xm);let o=n.get(Ln,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get(It):null,s=n.get(Jo,null,{optional:!0}),l=new Ps(r.impl,aA(t),s?.view,i,a,o?.snapshot(null));return r.impl.register(l),l}var lC=new y("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:d(Me)})});function cC(t,n,e){let i=t.get(lC);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function lA(t,n){let e=t.get(lC);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function cA(t,n){for(let[e,i]of n)cC(t,i.animateFns)}function Xb(t,n,e,i){let r=t?.[ir]?.enter;n!==null&&r&&r.has(e.index)&&cA(i,r)}function ea(t,n,e,i,r,o,a,s){if(r!=null){let l,c=!1;An(r)?l=r:Ii(r)&&(c=!0,r=r[Sn]);let u=un(r);t===0&&i!==null?(Xb(s,i,o,e),a==null?KD(n,i,u):Rd(n,i,u,a||null,!0)):t===1&&i!==null?(Xb(s,i,o,e),Rd(n,i,u,a||null,!0),rA(o,u)):t===2?(s?.[ir]?.leave?.has(o.index)&&oA(o,u),ks.delete(u),Jb(s,o,e,f=>{if(ks.has(u)){ks.delete(u);return}QD(n,u,c,f)})):t===3&&(ks.delete(u),Jb(s,o,e,()=>{n.destroyNode(u)})),l!=null&&bA(n,t,e,l,o,i,a)}}function dA(t,n){dC(t,n),n[Sn]=null,n[Ft]=null}function uA(t,n,e,i,r,o){i[Sn]=r,i[Ft]=n,Kd(t,i,e,1,r,o)}function dC(t,n){n[Tn].changeDetectionScheduler?.notify(9),Kd(t,n,n[Ne],2,null,null)}function fA(t){let n=t[Zo];if(!n)return tm(t[q],t);for(;n;){let e=null;if(Ii(n))e=n[Zo];else{let i=n[Ke];i&&(e=i)}if(!e){for(;n&&!n[dn]&&n!==t;)Ii(n)&&tm(n[q],n),n=n[pt];n===null&&(n=t),Ii(n)&&tm(n[q],n),e=n&&n[dn]}n=e}}function Jm(t,n){let e=t[Qr],i=e.indexOf(n);e.splice(i,1)}function Zd(t,n){if(Xr(n))return;let e=n[Ne];e.destroyNode&&Kd(t,n,e,3,null,null),fA(n)}function tm(t,n){if(Xr(n))return;let e=G(null);try{n[ee]&=-129,n[ee]|=256,n[qt]&&$i(n[qt]),mA(t,n),pA(t,n),n[q].type===1&&n[Ne].destroy();let i=n[nr];if(i!==null&&An(n[pt])){i!==n[pt]&&Jm(i,n);let r=n[Jn];r!==null&&r.detachView(t)}hm(n)}finally{G(e)}}function Jb(t,n,e,i){let r=t?.[ir];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&io.add(t[Ei]),cC(e,()=>{if(r.leave&&r.leave.has(n.index)){let a=r.leave.get(n.index),s=[];if(a){for(let l=0;l<a.animateFns.length;l++){let c=a.animateFns[l],{promise:u}=c();s.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),hA(t,i)}else t&&io.delete(t[Ei]),i(!1)},r)}function hA(t,n){let e=t[ir]?.running;if(e){e.then(()=>{t[ir].running=void 0,io.delete(t[Ei]),n(!0)});return}n(!1)}function pA(t,n){let e=t.cleanup,i=n[Yo];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?i[s]():i[-s].unsubscribe(),a+=2}else{let s=i[e[a+1]];e[a].call(s)}i!==null&&(n[Yo]=null);let r=n[Di];if(r!==null){n[Di]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=n[Ji];if(o!==null){n[Ji]=null;for(let a of o)a.destroy()}}function mA(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof no)){let o=e[i+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],l=o[a+1];Se(ye.LifecycleHookStart,s,l);try{l.call(s)}finally{Se(ye.LifecycleHookEnd,s,l)}}else{Se(ye.LifecycleHookStart,r,o);try{o.call(r)}finally{Se(ye.LifecycleHookEnd,r,o)}}}}}function uC(t,n,e){return gA(t,n.parent,e)}function gA(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[Sn];if(xi(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===Fn.None||r===Fn.Emulated)return null}return kn(i,e)}function fC(t,n,e){return vA(t,n,e)}function _A(t,n,e){return t.type&40?kn(t,e):null}var vA=_A,eD;function eg(t,n,e,i){let r=uC(t,i,n),o=n[Ne],a=i.parent||n[Ft],s=fC(a,i,n);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)Zb(o,r,e[l],s,!1);else Zb(o,r,e,s,!1);eD!==void 0&&eD(o,i,n,e,r)}function Ns(t,n){if(n!==null){let e=n.type;if(e&3)return kn(n,t);if(e&4)return _m(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return Ns(t,i);{let r=t[n.index];return An(r)?_m(-1,r):un(r)}}else{if(e&128)return Ns(t,n.next);if(e&32)return Km(n,t)()||un(t[n.index]);{let i=hC(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=er(t[Pt]);return Ns(r,i)}else return Ns(t,n.next)}}}return null}function hC(t,n){if(n!==null){let i=t[Pt][Ft],r=n.projection;return i.projection[r]}return null}function _m(t,n){let e=Ke+t+1;if(e<n.length){let i=n[e],r=i[q].firstChild;if(r!==null)return Ns(i,r)}return n[rr]}function tg(t,n,e,i,r,o,a){for(;e!=null;){let s=i[wi];if(e.type===128){e=e.next;continue}let l=i[e.index],c=e.type;if(a&&n===0&&(l&&ia(un(l),i),e.flags|=2),!$d(e))if(c&8)tg(t,n,e.child,i,r,o,!1),ea(n,t,s,r,l,e,o,i);else if(c&32){let u=Km(e,i),f;for(;f=u();)ea(n,t,s,r,f,e,o,i);ea(n,t,s,r,l,e,o,i)}else c&16?pC(t,n,i,e,r,o):ea(n,t,s,r,l,e,o,i);e=a?e.projectionNext:e.next}}function Kd(t,n,e,i,r,o){tg(e,i,t.firstChild,n,r,o,!1)}function yA(t,n,e){let i=n[Ne],r=uC(t,e,n),o=e.parent||n[Ft],a=fC(o,e,n);pC(i,0,n,e,r,a)}function pC(t,n,e,i,r,o){let a=e[Pt],l=a[Ft].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let u=l[c];ea(n,t,e[wi],r,u,i,o,e)}else{let c=l,u=a[pt];PD(i)&&(c.flags|=128),tg(t,n,c,u,r,o,!0)}}function bA(t,n,e,i,r,o,a){let s=i[rr],l=un(i);s!==l&&ea(n,t,e,o,s,r,a);for(let c=Ke;c<i.length;c++){let u=i[c];Kd(u[q],u,t,n,o,s)}}function DA(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:ni.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=ni.Important),t.setStyle(e,i,r,o))}}function mC(t,n,e,i,r){let o=ei(),a=i&2;try{ar(-1),a&&n.length>ze&&sC(t,n,ze,!1);let s=a?ye.TemplateUpdateStart:ye.TemplateCreateStart;Se(s,r,e),e(i,r)}finally{ar(o);let s=a?ye.TemplateUpdateEnd:ye.TemplateCreateEnd;Se(s,r,e)}}function Qd(t,n,e){MA(t,n,e),(e.flags&64)===64&&SA(t,n,e)}function Gs(t,n,e=kn){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let a=i[o+1],s=a===-1?e(n,t):t[a];t[r++]=s}}}function CA(t,n,e,i){let o=i.get($D,zD)||e===Fn.ShadowDom||e===Fn.ExperimentalIsolatedShadowDom,a=t.selectRootElement(n,o);return wA(a),a}function wA(t){EA(t)}var EA=()=>null;function IA(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function gC(t,n,e,i,r,o){let a=n[q];if(og(t,a,n,e,i)){xi(t)&&xA(n,t.index);return}t.type&3&&(e=IA(e)),_C(t,n,e,i,r,o)}function _C(t,n,e,i,r,o){if(t.type&3){let a=kn(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(a,e,i)}else t.type&12}function xA(t,n){let e=fn(n,t);e[ee]&16||(e[ee]|=64)}function MA(t,n,e){let i=e.directiveStart,r=e.directiveEnd;xi(e)&&nA(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||Td(e,n);let o=e.initialInputs;for(let a=i;a<r;a++){let s=t.data[a],l=Fs(n,t,a,e);if(ia(l,n),o!==null&&kA(n,a-i,l,s,e,o),Rn(s)){let c=fn(e.index,n);c[et]=Fs(n,t,a,e)}}}function SA(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,a=Mb();try{ar(o);for(let s=i;s<r;s++){let l=t.data[s],c=n[s];fd(s),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&TA(l,c)}}finally{ar(-1),fd(a)}}function TA(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function ng(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];rC(n,o.selectors,!1)&&(i??=[],Rn(o)?i.unshift(o):i.push(o))}return i}function AA(t,n,e,i,r,o){let a=kn(t,n);RA(n[Ne],a,o,t.value,e,i,r)}function RA(t,n,e,i,r,o,a){if(o==null)t.removeAttribute(n,r,e);else{let s=a==null?Go(o):a(o,i||"",r);t.setAttribute(n,r,s,e)}}function kA(t,n,e,i,r,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let l=a[s],c=a[s+1];mm(i,e,l,c)}}function ig(t,n,e,i,r){let o=ze+e,a=n[q],s=r(a,n,t,i,e);n[o]=s,Xo(t,!0);let l=t.type===2;return l?(XD(n[Ne],s,t),(yb()===0||Ko(t))&&ia(s,n),bb()):ia(s,n),gd()&&(!l||!$d(t))&&eg(a,n,s,t),t}function rg(t){let n=t;return Hp()?Up():(n=n.parent,Xo(n,!1)),n}function NA(t,n){let e=t[wi];if(!e)return;let i;try{i=e.get(Zt,null)}catch{i=null}i?.(n)}function og(t,n,e,i,r){let o=t.inputs?.[i],a=t.hostDirectiveInputs?.[i],s=!1;if(a)for(let l=0;l<a.length;l+=2){let c=a[l],u=a[l+1],f=n.data[c];mm(f,e[c],u,r),s=!0}if(o)for(let l of o){let c=e[l],u=n.data[l];mm(u,c,i,r),s=!0}return s}function OA(t,n){let e=fn(n,t),i=e[q];FA(i,e);let r=e[Sn];r!==null&&e[qr]===null&&(e[qr]=GD(r,e[wi])),Se(ye.ComponentStart);try{ag(i,e,e[et])}finally{Se(ye.ComponentEnd,e[et])}}function FA(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function ag(t,n,e){pd(n);try{let i=t.viewQuery;i!==null&&pm(1,i,e);let r=t.template;r!==null&&mC(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[Jn]?.finishViewCreation(t),t.staticContentQueries&&WD(t,n),t.staticViewQueries&&pm(2,t.viewQuery,e);let o=t.components;o!==null&&PA(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[ee]&=-5,md()}}function PA(t,n){for(let e=0;e<n.length;e++)OA(t,n[e])}function Ws(t,n,e,i){let r=G(null);try{let o=n.tView,s=t[ee]&4096?4096:16,l=Ym(t,o,e,s,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),c=t[n.index];l[nr]=c;let u=t[Jn];return u!==null&&(l[Jn]=u.createEmbeddedView(o)),ag(o,l,e),l}finally{G(r)}}function ra(t,n){return!n||n.firstChild===null||PD(t)}function Ls(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(un(o)),An(o)&&vC(o,i);let a=e.type;if(a&8)Ls(t,n,e.child,i);else if(a&32){let s=Km(e,n),l;for(;l=s();)i.push(l)}else if(a&16){let s=hC(n,e);if(Array.isArray(s))i.push(...s);else{let l=er(n[Pt]);Ls(l[q],l,s,i,!0)}}e=r?e.projectionNext:e.next}return i}function vC(t,n){for(let e=Ke;e<t.length;e++){let i=t[e],r=i[q].firstChild;r!==null&&Ls(i[q],i,r,n)}t[rr]!==t[Sn]&&n.push(t[rr])}function yC(t){if(t[Kr]!==null){for(let n of t[Kr])n.impl.addSequence(n);t[Kr].length=0}}var bC=[];function LA(t){return t[qt]??VA(t)}function VA(t){let n=bC.pop()??Object.create(jA);return n.lView=t,n}function BA(t){t.lView[qt]!==t&&(t.lView=null,bC.push(t))}var jA=Y(b({},Ui),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Jr(t.lView)},consumerOnSignalRead(){this.lView[qt]=this}});function HA(t){let n=t[qt]??Object.create(UA);return n.lView=t,n}var UA=Y(b({},Ui),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=er(t.lView);for(;n&&!DC(n[q]);)n=er(n);n&&kp(n)},consumerOnSignalRead(){this.lView[qt]=this}});function DC(t){return t.type!==2}function CC(t){if(t[Ji]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[Ji])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[ee]&8192)}}var zA=100;function wC(t,n=0){let i=t[Tn].rendererFactory,r=!1;r||i.begin?.();try{$A(t,n)}finally{r||i.end?.()}}function $A(t,n){let e=zp();try{gs(!0),vm(t,n);let i=0;for(;Es(t);){if(i===zA)throw new M(103,!1);i++,vm(t,1)}}finally{gs(e)}}function GA(t,n,e,i){if(Xr(n))return;let r=n[ee],o=!1,a=!1;pd(n);let s=!0,l=null,c=null;o||(DC(t)?(c=LA(n),l=_i(c)):cc()===null?(s=!1,c=HA(n),l=_i(c)):n[qt]&&($i(n[qt]),n[qt]=null));try{Rp(n),Eb(t.bindingStartIndex),e!==null&&mC(t,n,e,2,i);let u=(r&3)===3;if(!o)if(u){let p=t.preOrderCheckHooks;p!==null&&bd(n,p,null)}else{let p=t.preOrderHooks;p!==null&&Dd(n,p,0,null),Jp(n,0)}if(a||WA(n),CC(n),EC(n,0),t.contentQueries!==null&&WD(t,n),!o)if(u){let p=t.contentCheckHooks;p!==null&&bd(n,p)}else{let p=t.contentHooks;p!==null&&Dd(n,p,1),Jp(n,1)}YA(t,n);let f=t.components;f!==null&&xC(n,f,0);let h=t.viewQuery;if(h!==null&&pm(2,h,i),!o)if(u){let p=t.viewCheckHooks;p!==null&&bd(n,p)}else{let p=t.viewHooks;p!==null&&Dd(n,p,2),Jp(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[ad]){for(let p of n[ad])p();n[ad]=null}o||(yC(n),n[ee]&=-73)}catch(u){throw o||Jr(n),u}finally{c!==null&&(zi(c,l),s&&BA(c)),md()}}function EC(t,n){for(let e=VD(t);e!==null;e=BD(e))for(let i=Ke;i<e.length;i++){let r=e[i];IC(r,n)}}function WA(t){for(let n=VD(t);n!==null;n=BD(n)){if(!(n[ee]&2))continue;let e=n[Qr];for(let i=0;i<e.length;i++){let r=e[i];kp(r)}}}function qA(t,n,e){Se(ye.ComponentStart);let i=fn(n,t);try{IC(i,e)}finally{Se(ye.ComponentEnd,i[et])}}function IC(t,n){ld(t)&&vm(t,n)}function vm(t,n){let i=t[q],r=t[ee],o=t[qt],a=!!(n===0&&r&16);if(a||=!!(r&64&&n===0),a||=!!(r&1024),a||=!!(o?.dirty&&No(o)),a||=!1,o&&(o.dirty=!1),t[ee]&=-9217,a)GA(i,t,i.template,t[et]);else if(r&8192){let s=G(null);try{CC(t),EC(t,1);let l=i.components;l!==null&&xC(t,l,1),yC(t)}finally{G(s)}}}function xC(t,n,e){for(let i=0;i<n.length;i++)qA(t,n[i],e)}function YA(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)ar(~r);else{let o=r,a=e[++i],s=e[++i];xb(a,o);let l=n[o];Se(ye.HostBindingsUpdateStart,l);try{s(2,l)}finally{Se(ye.HostBindingsUpdateEnd,l)}}}}finally{ar(-1)}}function sg(t,n){let e=zp()?64:1088;for(t[Tn].changeDetectionScheduler?.notify(n);t;){t[ee]|=e;let i=er(t);if(Qo(t)&&!i)return t;t=i}return null}function MC(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function SC(t,n){let e=Ke+n;if(e<t.length)return t[e]}function qs(t,n,e,i=!0){let r=n[q];if(ZA(r,n,t,e),i){let a=_m(e,t),s=n[Ne],l=s.parentNode(t[rr]);l!==null&&uA(r,t[Ft],s,n,l,a)}let o=n[qr];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function TC(t,n){let e=Vs(t,n);return e!==void 0&&Zd(e[q],e),e}function Vs(t,n){if(t.length<=Ke)return;let e=Ke+n,i=t[e];if(i){let r=i[nr];r!==null&&r!==t&&Jm(r,i),n>0&&(t[e-1][dn]=i[dn]);let o=Ds(t,Ke+n);dA(i[q],i);let a=o[Jn];a!==null&&a.detachView(o[q]),i[pt]=null,i[dn]=null,i[ee]&=-129}return i}function ZA(t,n,e,i){let r=Ke+i,o=e.length;i>0&&(e[r-1][dn]=n),i<o-Ke?(n[dn]=e[r],_p(e,Ke+i,n)):(e.push(n),n[dn]=null),n[pt]=e;let a=n[nr];a!==null&&e!==a&&AC(a,n);let s=n[Jn];s!==null&&s.insertView(t),cd(n),n[ee]|=128}function AC(t,n){let e=t[Qr],i=n[pt];if(Ii(i))t[ee]|=2;else{let r=i[pt][Pt];n[Pt]!==r&&(t[ee]|=2)}e===null?t[Qr]=[n]:e.push(n)}var sr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[q];return Ls(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[et]}set context(n){this._lView[et]=n}get destroyed(){return Xr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[pt];if(An(n)){let e=n[ws],i=e?e.indexOf(this):-1;i>-1&&(Vs(n,i),Ds(e,i))}this._attachedToViewContainer=!1}Zd(this._lView[q],this._lView)}onDestroy(n){Np(this._lView,n)}markForCheck(){sg(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[ee]&=-129}reattach(){cd(this._lView),this._lView[ee]|=128}detectChanges(){this._lView[ee]|=1024,wC(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new M(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Qo(this._lView),e=this._lView[nr];e!==null&&!n&&Jm(e,this._lView),dC(this._lView[q],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new M(902,!1);this._appRef=n;let e=Qo(this._lView),i=this._lView[nr];i!==null&&!e&&AC(i,this._lView),cd(this._lView)}};var tt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=KA;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=Ws(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new sr(o)}}return t})();function KA(){return Xd(at(),Q())}function Xd(t,n){return t.type&4?new tt(n,t,aa(t,n)):null}function la(t,n,e,i,r){let o=t.data[n];if(o===null)o=QA(t,n,e,i,r),Ib()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let a=Db();o.injectorIndex=a===null?-1:a.injectorIndex}return Xo(o,!0),o}function QA(t,n,e,i,r){let o=jp(),a=Hp(),s=a?o:o&&o.parent,l=t.data[n]=JA(t,s,e,n,i,r);return XA(t,l,o,a),l}function XA(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function JA(t,n,e,i,r,o){let a=n?n.injectorIndex:-1,s=0;return Lp()&&(s|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function eR(t){let n=t[Ip]??[],i=t[pt][Ne],r=[];for(let o of n)o.data[UD]!==void 0?r.push(o):tR(o,i);t[Ip]=r}function tR(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[HD];for(;e<r;){let o=i.nextSibling;QD(n,i,!1),i=o,e++}}}var nR=()=>null,iR=()=>null;function kd(t,n){return nR(t,n)}function RC(t,n,e){return iR(t,n,e)}var kC=class{},Jd=class{},ym=class{resolveComponentFactory(n){throw new M(917,!1)}},Ys=class{static NULL=new ym},st=class{},Ae=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>rR()}return t})();function rR(){let t=Q(),n=at(),e=fn(n.index,t);return(Ii(e)?e:t)[Ne]}var NC=(()=>{class t{static \u0275prov=D({token:t,providedIn:"root",factory:()=>null})}return t})();var wd={},bm=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,wd,i);return r!==wd||e===wd?r:this.parentInjector.get(n,e,i)}};function Nd(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)r=Xc(r,s);else if(o==2){let l=s,c=n[++a];i=Xc(i,l+": "+c+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function de(t,n=0){let e=Q();if(e===null)return B(t,n);let i=at();return kD(i,e,ht(t),n)}function Zs(){let t="invalid";throw new Error(t)}function OC(t,n,e,i,r){let o=i===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,l=null,c=null;for(let u of a)if(u.resolveHostDirectives!==null){[s,l,c]=u.resolveHostDirectives(a);break}sR(t,n,e,s,o,l,c)}o!==null&&i!==null&&oR(e,i,o)}function oR(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new M(-301,!1);i.push(n[r],o)}}function aR(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function sR(t,n,e,i,r,o,a){let s=i.length,l=null;for(let h=0;h<s;h++){let p=i[h];l===null&&Rn(p)&&(l=p,aR(t,e,h)),um(Td(e,n),t,p.type)}hR(e,t.data.length,s),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let h=0;h<s;h++){let p=i[h];p.providersResolver&&p.providersResolver(p)}let c=!1,u=!1,f=aC(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let h=0;h<s;h++){let p=i[h];if(e.mergedAttrs=na(e.mergedAttrs,p.hostAttrs),cR(t,e,n,f,p),fR(f,p,r),a!==null&&a.has(p)){let[I,x]=a.get(p);e.directiveToIndex.set(p.type,[f,I+e.directiveStart,x+e.directiveStart])}else(o===null||!o.has(p))&&e.directiveToIndex.set(p.type,f);p.contentQueries!==null&&(e.flags|=4),(p.hostBindings!==null||p.hostAttrs!==null||p.hostVars!==0)&&(e.flags|=64);let v=p.type.prototype;!c&&(v.ngOnChanges||v.ngOnInit||v.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!u&&(v.ngOnChanges||v.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),u=!0),f++}lR(t,e,o)}function lR(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))tD(0,n,r,i),tD(1,n,r,i),iD(n,i,!1);else{let o=e.get(r);nD(0,n,o,i),nD(1,n,o,i),iD(n,i,!0)}}}function tD(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(i),FC(n,o)}}function nD(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(i,o),FC(n,a)}}function FC(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function iD(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||Wm(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<i.length;){let l=i[s];if(l===0){s+=4;continue}else if(l===5){s+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let c=r[l];for(let u of c)if(u===n){a??=[],a.push(l,i[s+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let u=0;u<c.length;u+=2)if(c[u]===n){a??=[],a.push(c[u+1],i[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function cR(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=Xi(r.type,!0)),a=new no(o,Rn(r),de,null);t.blueprint[i]=a,e[i]=a,dR(t,n,i,aC(t,e,r.hostVars,Lt),r)}function dR(t,n,e,i,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;uR(a)!=s&&a.push(s),a.push(e,i,o)}}function uR(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function fR(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;Rn(n)&&(e[""]=t)}}function hR(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function lg(t,n,e,i,r,o,a,s){let l=n[q],c=l.consts,u=hn(c,a),f=la(l,t,e,i,u);return o&&OC(l,n,f,hn(c,s),r),f.mergedAttrs=na(f.mergedAttrs,f.attrs),f.attrs!==null&&Nd(f,f.attrs,!1),f.mergedAttrs!==null&&Nd(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function cg(t,n){wD(t,n),xp(n)&&t.queries.elementEnd(n)}function pR(t,n,e,i,r,o){let a=n.consts,s=hn(a,r),l=la(n,t,e,i,s);if(l.mergedAttrs=na(l.mergedAttrs,l.attrs),o!=null){let c=hn(a,o);l.localNames=[];for(let u=0;u<c.length;u+=2)l.localNames.push(c[u],-1)}return l.attrs!==null&&Nd(l,l.attrs,!1),l.mergedAttrs!==null&&Nd(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function dg(t){return LC(t)?Array.isArray(t)||!(t instanceof Map)&&Symbol.iterator in t:!1}function PC(t,n){if(Array.isArray(t))for(let e=0;e<t.length;e++)n(t[e]);else{let e=t[Symbol.iterator](),i;for(;!(i=e.next()).done;)n(i.value)}}function LC(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function VC(t,n,e){return t[n]=e}function mR(t,n){return t[n]}function Pn(t,n,e){if(e===Lt)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function BC(t,n,e,i){let r=Pn(t,n,e);return Pn(t,n+1,i)||r}function Ed(t,n,e){return function i(r){let o=xi(t)?fn(t.index,n):n;sg(o,5);let a=n[et],s=rD(n,a,e,r),l=i.__ngNextListenerFn__;for(;l;)s=rD(n,a,l,r)&&s,l=l.__ngNextListenerFn__;return s}}function rD(t,n,e,i){let r=G(null);try{return Se(ye.OutputStart,n,e),e(i)!==!1}catch(o){return NA(t,o),!1}finally{Se(ye.OutputEnd,n,e),G(r)}}function jC(t,n,e,i,r,o,a,s){let l=Ko(t),c=!1,u=null;if(!i&&l&&(u=_R(n,e,o,t.index)),u!==null){let f=u.__ngLastListenerFn__||u;f.__ngNextListenerFn__=a,u.__ngLastListenerFn__=a,c=!0}else{let f=kn(t,e),h=i?i(f):f;MT(e,h,o,s);let p=r.listen(h,o,s);if(!gR(o)){let v=i?I=>i(un(I[t.index])):t.index;HC(v,n,e,o,s,p,!1)}}return c}function gR(t){return t.startsWith("animation")||t.startsWith("transition")}function _R(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===i){let s=n[Yo],l=r[o+2];return s&&s.length>l?s[l]:null}typeof a=="string"&&(o+=2)}return null}function HC(t,n,e,i,r,o,a){let s=n.firstCreatePass?Fp(n):null,l=Op(e),c=l.length;l.push(r,o),s&&s.push(i,t,c,(c+1)*(a?-1:1))}function oD(t,n,e,i,r,o){let a=n[e],s=n[q],c=s.data[e].outputs[i],f=a[c].subscribe(o);HC(t.index,s,n,r,o,f,!0)}var Dm=Symbol("BINDING");function UC(t){return t.debugInfo?.className||t.type.name||null}var Od=class extends Ys{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=Xn(n);return new lr(e,this.ngModule)}};function vR(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&Wd.SignalBased)!==0};return r&&(o.transform=r),o})}function yR(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function bR(t,n,e){let i=n instanceof Me?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new bm(e,i):e}function DR(t){let n=t.get(st,null);if(n===null)throw new M(407,!1);let e=t.get(NC,null),i=t.get(Qn,null),r=t.get(Ln,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function CR(t,n){let e=zC(t);return ZD(n,e,e==="svg"?Mp:e==="math"?hb:null)}function zC(t){return(t.selectors[0][0]||"div").toLowerCase()}var lr=class extends Jd{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=vR(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=yR(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=XT(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,a){Se(ye.DynamicComponentStart);let s=G(null);try{let l=this.componentDef,c=bR(l,r||this.ngModule,n),u=DR(c),f=u.tracingService;return f&&f.componentCreate?f.componentCreate(UC(l),()=>this.createComponentRef(u,c,e,i,o,a)):this.createComponentRef(u,c,e,i,o,a)}finally{G(s)}}createComponentRef(n,e,i,r,o,a){let s=this.componentDef,l=wR(r,s,a,o),c=n.rendererFactory.createRenderer(null,s),u=r?CA(c,r,s.encapsulation,e):CR(s,c),f=a?.some(aD)||o?.some(v=>typeof v!="function"&&v.bindings.some(aD)),h=Ym(null,l,null,512|oC(s),null,null,n,c,e,null,GD(u,e,!0));h[ze]=u,pd(h);let p=null;try{let v=lg(ze,h,2,"#host",()=>l.directiveRegistry,!0,0);XD(c,u,v),ia(u,h),Qd(l,h,v),zm(l,v,h),cg(l,v),i!==void 0&&IR(v,this.ngContentSelectors,i),p=fn(v.index,h),h[et]=p[et],ag(l,h,null)}catch(v){throw p!==null&&hm(p),hm(h),v}finally{Se(ye.DynamicComponentEnd),md()}return new Fd(this.componentType,h,!!f)}};function wR(t,n,e,i){let r=t?["ng-version","21.2.9"]:JT(n.selectors[0]),o=null,a=null,s=0;if(e)for(let u of e)s+=u[Dm].requiredVars,u.create&&(u.targetIdx=0,(o??=[]).push(u)),u.update&&(u.targetIdx=0,(a??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let f=i[u];if(typeof f!="function")for(let h of f.bindings){s+=h[Dm].requiredVars;let p=u+1;h.create&&(h.targetIdx=p,(o??=[]).push(h)),h.update&&(h.targetIdx=p,(a??=[]).push(h))}}let l=[n];if(i)for(let u of i){let f=typeof u=="function"?u:u.type,h=ed(f);l.push(h)}return qm(0,null,ER(o,a),1,s,l,null,null,null,[r],null)}function ER(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function aD(t){let n=t[Dm].kind;return n==="input"||n==="twoWay"}var Fd=class extends kC{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=sd(e[q],ze),this.location=aa(this._tNode,e),this.instance=fn(this._tNode.index,e)[et],this.hostView=this.changeDetectorRef=new sr(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=og(i,r[q],r,n,e);this.previousInputValues.set(n,e);let a=fn(i.index,r);sg(a,1)}get injector(){return new to(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function IR(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var $e=(()=>{class t{static __NG_ELEMENT_ID__=xR}return t})();function xR(){let t=at();return $C(t,Q())}var Cm=class t extends $e{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return aa(this._hostTNode,this._hostLView)}get injector(){return new to(this._hostTNode,this._hostLView)}get parentInjector(){let n=Bm(this._hostTNode,this._hostLView);if(xD(n)){let e=Md(n,this._hostLView),i=xd(n),r=e[q].data[i+8];return new to(r,e)}else return new to(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=sD(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-Ke}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let a=kd(this._lContainer,n.ssrId),s=n.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,ra(this._hostTNode,a)),s}createComponent(n,e,i,r,o,a,s){let l=n&&!eT(n),c;if(l)c=e;else{let x=e||{};c=x.index,i=x.injector,r=x.projectableNodes,o=x.environmentInjector||x.ngModuleRef,a=x.directives,s=x.bindings}let u=l?n:new lr(Xn(n)),f=i||this.parentInjector;if(!o&&u.ngModule==null){let T=(l?f:this.parentInjector).get(Me,null);T&&(o=T)}let h=Xn(u.componentType??{}),p=kd(this._lContainer,h?.id??null),v=p?.firstChild??null,I=u.create(f,r,v,o,a,s);return this.insertImpl(I.hostView,c,ra(this._hostTNode,p)),I}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(mb(r)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let l=r[pt],c=new t(l,l[Ft],l[pt]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return qs(a,r,o,i),n.attachToViewContainerRef(),_p(nm(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=sD(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=Vs(this._lContainer,e);i&&(Ds(nm(this._lContainer),e),Zd(i[q],i))}detach(n){let e=this._adjustIndex(n,-1),i=Vs(this._lContainer,e);return i&&Ds(nm(this._lContainer),e)!=null?new sr(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function sD(t){return t[ws]}function nm(t){return t[ws]||(t[ws]=[])}function $C(t,n){let e,i=n[t.index];return An(i)?e=i:(e=MC(i,n,null,t),n[t.index]=e,Zm(n,e)),SR(e,n,t,i),new Cm(e,t,n)}function MR(t,n){let e=t[Ne],i=e.createComment(""),r=kn(n,t),o=e.parentNode(r);return Rd(e,o,i,e.nextSibling(r),!1),i}var SR=RR,TR=()=>!1;function AR(t,n,e){return TR(t,n,e)}function RR(t,n,e,i){if(t[rr])return;let r;e.type&8?r=un(i):r=MR(n,e),t[rr]=r}var wm=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Em=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)fg(n,e).matches!==null&&this.queries[e].setDirty()}},Pd=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=PR(n):this.predicate=n}},Im=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},xm=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,kR(e,o)),this.matchTNodeWithReadOption(n,e,Cd(e,n,o,!1,!1))}else i===tt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Cd(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===R||r===$e||r===tt&&e.type&4)this.addMatch(e.index,-2);else{let o=Cd(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function kR(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function NR(t,n){return t.type&11?aa(t,n):t.type&4?Xd(t,n):null}function OR(t,n,e,i){return e===-1?NR(n,t):e===-2?FR(t,n,i):Fs(t,t[q],e,n)}function FR(t,n,e){if(e===R)return aa(n,t);if(e===tt)return Xd(n,t);if(e===$e)return $C(n,t)}function GC(t,n,e,i){let r=n[Jn].queries[i];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let l=0;a!==null&&l<a.length;l+=2){let c=a[l];if(c<0)s.push(null);else{let u=o[c];s.push(OR(n,u,a[l+1],e.metadata.read))}}r.matches=s}return r.matches}function Mm(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=GC(t,n,r,e);for(let s=0;s<o.length;s+=2){let l=o[s];if(l>0)i.push(a[s/2]);else{let c=o[s+1],u=n[-l];for(let f=Ke;f<u.length;f++){let h=u[f];h[nr]===h[pt]&&Mm(h[q],h,c,i)}if(u[Qr]!==null){let f=u[Qr];for(let h=0;h<f.length;h++){let p=f[h];Mm(p[q],p,c,i)}}}}}return i}function ug(t,n){return t[Jn].queries[n].queryList}function WC(t,n,e){let i=new Si((e&4)===4);return vb(t,n,i,i.destroy),(n[Jn]??=new Em).queries.push(new wm(i))-1}function qC(t,n,e){let i=je();return i.firstCreatePass&&(ZC(i,new Pd(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),WC(i,Q(),n)}function YC(t,n,e,i){let r=je();if(r.firstCreatePass){let o=at();ZC(r,new Pd(n,e,i),o.index),LR(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return WC(r,Q(),e)}function PR(t){return t.split(",").map(n=>n.trim())}function ZC(t,n,e){t.queries===null&&(t.queries=new Im),t.queries.track(new xm(n,e))}function LR(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function fg(t,n){return t.queries.getByIndex(n)}function KC(t,n){let e=t[q],i=fg(e,n);return i.crossesNgTemplate?Mm(e,t,n,[]):GC(e,t,i,n)}function hg(t,n,e){let i,r=ns(()=>{i._dirtyCounter();let o=VR(i,t);if(n&&o===void 0)throw new M(-951,!1);return o});return i=r[Ze],i._dirtyCounter=O(0),i._flatValue=void 0,r}function pg(t){return hg(!0,!1,t)}function mg(t){return hg(!0,!0,t)}function QC(t){return hg(!1,!1,t)}function XC(t,n){let e=t[Ze];e._lView=Q(),e._queryIndex=n,e._queryList=ug(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function VR(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[ee]&4)return n?void 0:At;let r=ug(e,i),o=KC(e,i);return r.reset(o,FD),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var ii=class{},eu=class{};var Ld=class extends ii{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Od(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=pp(n);this._bootstrapComponents=nC(o.bootstrap),this._r3Injector=qp(n,e,[{provide:ii,useValue:this},{provide:Ys,useValue:this.componentFactoryResolver},...i],ys(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},Vd=class extends eu{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new Ld(this.moduleType,n,[])}};var Bs=class extends ii{injector;componentFactoryResolver=new Od(this);instance=null;constructor(n){super();let e=new $r([...n.providers,{provide:ii,useValue:this},{provide:Ys,useValue:this.componentFactoryResolver}],n.parent||qo(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function ca(t,n,e=null){return new Bs({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var BR=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=bp(!1,e.type),r=i.length>0?ca([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=D({token:t,providedIn:"environment",factory:()=>new t(B(Me))})}return t})();function S(t){return Us(()=>{let n=JC(t),e=Y(b({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===jm.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(BR).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Fn.Emulated,styles:t.styles||At,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&ri("NgStandalone"),e0(e);let i=t.dependencies;return e.directiveDefs=lD(i,jR),e.pipeDefs=lD(i,Xy),e.id=zR(e),e})}function jR(t){return Xn(t)||ed(t)}function V(t){return Us(()=>({type:t.type,bootstrap:t.bootstrap||At,declarations:t.declarations||At,imports:t.imports||At,exports:t.exports||At,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function HR(t,n){if(t==null)return Mn;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,a,s,l;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,l=r[3]||null):(o=r,a=r,s=Wd.None,l=null),e[o]=[i,s,l],n[o]=a}return e}function UR(t){if(t==null)return Mn;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function w(t){return Us(()=>{let n=JC(t);return e0(n),n})}function gg(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function JC(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||Mn,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||At,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:HR(t.inputs,n),outputs:UR(t.outputs),debugInfo:null}}function e0(t){t.features?.forEach(n=>n(t))}function lD(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function zR(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function _g(t){let n=e=>{let i=Array.isArray(t);e.hostDirectives===null?(e.resolveHostDirectives=$R,e.hostDirectives=i?t.map(Sm):[t]):i?e.hostDirectives.unshift(...t.map(Sm)):e.hostDirectives.unshift(t)};return n.ngInherit=!0,n}function $R(t){let n=[],e=!1,i=null,r=null;for(let o=0;o<t.length;o++){let a=t[o];if(a.hostDirectives!==null){let s=n.length;i??=new Map,r??=new Map,t0(a,n,i),r.set(a,[s,n.length-1])}o===0&&Rn(a)&&(e=!0,n.push(a))}for(let o=e?1:0;o<t.length;o++)n.push(t[o]);return[n,i,r]}function t0(t,n,e){if(t.hostDirectives!==null)for(let i of t.hostDirectives)if(typeof i=="function"){let r=i();for(let o of r)cD(Sm(o),n,e)}else cD(i,n,e)}function cD(t,n,e){let i=ed(t.directive);GR(i.declaredInputs,t.inputs),t0(i,n,e),e.set(i,t),n.push(i)}function Sm(t){return typeof t=="function"?{directive:ht(t),inputs:Mn,outputs:Mn}:{directive:ht(t.directive),inputs:dD(t.inputs),outputs:dD(t.outputs)}}function dD(t){if(t===void 0||t.length===0)return Mn;let n={};for(let e=0;e<t.length;e+=2)n[t[e]]=t[e+1];return n}function GR(t,n){for(let e in n)if(n.hasOwnProperty(e)){let i=n[e],r=t[e];t[i]=r}}function WR(t){return Object.getPrototypeOf(t.prototype).constructor}function te(t){let n=WR(t.type),e=!0,i=[t];for(;n;){let r;if(Rn(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new M(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let a=t;a.inputs=im(t.inputs),a.declaredInputs=im(t.declaredInputs),a.outputs=im(t.outputs);let s=r.hostBindings;s&&QR(t,s);let l=r.viewQuery,c=r.contentQueries;if(l&&ZR(t,l),c&&KR(t,c),qR(t,r),Qy(t.outputs,r.outputs),Rn(r)&&r.data.animation){let u=t.data;u.animation=(u.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===te&&(e=!1)}}n=Object.getPrototypeOf(n)}YR(i)}function qR(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function YR(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=na(r.hostAttrs,e=na(e,r.hostAttrs))}}function im(t){return t===Mn?{}:t===At?[]:t}function ZR(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function KR(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function QR(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function n0(t,n,e,i,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=na(t.mergedAttrs,t.attrs);let u=t.tView=qm(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),u.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),Xo(t,!1);let l=JR(e,n,t,i);gd()&&eg(e,n,l,t),ia(l,n);let c=MC(l,n,l,t);n[i+ze]=c,Zm(n,c),AR(c,t,n)}function XR(t,n,e,i,r,o,a,s,l,c,u){let f=e+ze,h;return n.firstCreatePass?(h=la(n,f,4,a||null,s||null),dd()&&OC(n,t,h,hn(n.consts,c),ng),wD(n,h)):h=n.data[f],n0(h,t,n,e,i,r,o,l),Ko(h)&&Qd(n,t,h),c!=null&&Gs(t,h,u),h}function js(t,n,e,i,r,o,a,s,l,c,u){let f=e+ze,h;if(n.firstCreatePass){if(h=la(n,f,4,a||null,s||null),c!=null){let p=hn(n.consts,c);h.localNames=[];for(let v=0;v<p.length;v+=2)h.localNames.push(p[v],-1)}}else h=n.data[f];return n0(h,t,n,e,i,r,o,l),c!=null&&Gs(t,h,u),h}function Ce(t,n,e,i,r,o,a,s){let l=Q(),c=je(),u=hn(c.consts,o);return XR(l,c,t,n,e,i,r,u,void 0,a,s),Ce}var JR=ek;function ek(t,n,e,i){return Ms(!0),n[Ne].createComment("")}var vg=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function oi(t){return typeof t=="function"&&t[Ze]!==void 0}function yg(t){return oi(t)&&typeof t.set=="function"}var bg=new y("");function dr(t){return!!t&&typeof t.then=="function"}function Dg(t){return!!t&&typeof t.subscribe=="function"}var Cg=new y("");function tu(t){return tr([{provide:Cg,multi:!0,useValue:t}])}var wg=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=d(Cg,{optional:!0})??[];injector=d(j);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=mt(this.injector,r);if(dr(o))e.push(o);else if(Dg(o)){let a=new Promise((s,l)=>{o.subscribe({complete:s,error:l})});e.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ks=new y("");function i0(){Sh(()=>{let t="";throw new M(600,t)})}function r0(t){return t.isBoundToModule}var tk=10;var pn=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=d(Zt);afterRenderManager=d(Yd);zonelessEnabled=d(Ts);rootEffectScheduler=d(_d);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new E;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=d(Mi);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(me(e=>!e))}constructor(){d(Ln,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=d(Me);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=j.NULL){return this._injector.get(P).run(()=>{Se(ye.BootstrapComponentStart);let a=e instanceof Jd;if(!this._injector.get(wg).done){let v="";throw new M(405,v)}let l;a?l=e:l=this._injector.get(Ys).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=r0(l)?void 0:this._injector.get(ii),u=i||l.selector,f=l.create(r,[],u,c),h=f.location.nativeElement,p=f.injector.get(bg,null);return p?.registerApplication(h),f.onDestroy(()=>{this.detachView(f.hostView),Os(this.components,f),p?.unregisterApplication(h)}),this._loadComponent(f),Se(ye.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Se(ye.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(qd.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Se(ye.ChangeDetectionEnd),new M(101,!1);let e=G(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,G(e),this.afterTick.next(),Se(ye.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(st,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<tk;){Se(ye.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Se(ye.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!Es(r))continue;let o=i&&!this.zonelessEnabled?0:1;wC(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>Es(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;Os(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Ks,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Os(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new M(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Os(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Z(t,n,e,i){let r=Q(),o=or();if(Pn(r,o,n)){let a=je(),s=xs();AA(s,r,t,n,e,i)}return Z}var Tm=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let a=this.detach(i);this.attach(i,o),this.attach(r,a)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function rm(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function nk(t,n,e,i){let r,o,a=0,s=t.length-1,l=void 0;if(Array.isArray(n)){G(i);let c=n.length-1;for(G(null);a<=s&&a<=c;){let u=t.at(a),f=n[a],h=rm(a,u,a,f,e);if(h!==0){h<0&&t.updateValue(a,f),a++;continue}let p=t.at(s),v=n[c],I=rm(s,p,c,v,e);if(I!==0){I<0&&t.updateValue(s,v),s--,c--;continue}let x=e(a,u),T=e(s,p),_e=e(a,f);if(Object.is(_e,T)){let yt=e(c,v);Object.is(yt,x)?(t.swap(a,s),t.updateValue(s,v),c--,s--):t.move(s,a),t.updateValue(a,f),a++;continue}if(r??=new Bd,o??=fD(t,a,s,e),Am(t,r,a,_e))t.updateValue(a,f),a++,s++;else if(o.has(_e))r.set(x,t.detach(a)),s--;else{let yt=t.create(a,n[a]);t.attach(a,yt),a++,s++}}for(;a<=c;)uD(t,r,e,a,n[a]),a++}else if(n!=null){G(i);let c=n[Symbol.iterator]();G(null);let u=c.next();for(;!u.done&&a<=s;){let f=t.at(a),h=u.value,p=rm(a,f,a,h,e);if(p!==0)p<0&&t.updateValue(a,h),a++,u=c.next();else{r??=new Bd,o??=fD(t,a,s,e);let v=e(a,h);if(Am(t,r,a,v))t.updateValue(a,h),a++,s++,u=c.next();else if(!o.has(v))t.attach(a,t.create(a,h)),a++,s++,u=c.next();else{let I=e(a,f);r.set(I,t.detach(a)),s--}}}for(;!u.done;)uD(t,r,e,t.length,u.value),u=c.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(c=>{t.destroy(c)})}function Am(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function uD(t,n,e,i,r){if(Am(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function fD(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var Bd=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function fe(t,n,e,i,r,o,a,s){ri("NgControlFlow");let l=Q(),c=je(),u=hn(c.consts,o);return js(l,c,t,n,e,i,r,u,256,a,s),Eg}function Eg(t,n,e,i,r,o,a,s){ri("NgControlFlow");let l=Q(),c=je(),u=hn(c.consts,o);return js(l,c,t,n,e,i,r,u,512,a,s),Eg}function he(t,n){ri("NgControlFlow");let e=Q(),i=or(),r=e[i]!==Lt?e[i]:-1,o=r!==-1?jd(e,ze+r):void 0,a=0;if(Pn(e,i,t)){let s=G(null);try{if(o!==void 0&&TC(o,a),t!==-1){let l=ze+t,c=jd(e,l),u=Om(e[q],l),f=RC(c,u,e),h=Ws(e,u,n,{dehydratedView:f});qs(c,h,a,ra(u,f))}}finally{G(s)}}else if(o!==void 0){let s=SC(o,a);s!==void 0&&(s[et]=n)}}var Rm=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-Ke}};function so(t){return t}var km=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function Qt(t,n,e,i,r,o,a,s,l,c,u,f,h){ri("NgControlFlow");let p=Q(),v=je(),I=l!==void 0,x=Q(),T=s?a.bind(x[Pt][et]):a,_e=new km(I,T);x[ze+t]=_e,js(p,v,t+1,n,e,i,r,hn(v.consts,o),256),I&&js(p,v,t+2,l,c,u,f,hn(v.consts,h),512)}var Nm=class extends Tm{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-Ke}at(n){return this.getLView(n)[et].$implicit}attach(n,e){let i=e[qr];this.needsIndexUpdate||=n!==this.length,qs(this.lContainer,e,n,ra(this.templateTNode,i)),ik(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,rk(this.lContainer,n),ok(this.lContainer,n)}create(n,e){let i=kd(this.lContainer,this.templateTNode.tView.ssrId);return Ws(this.hostLView,this.templateTNode,new Rm(this.lContainer,e,n),{dehydratedView:i})}destroy(n){Zd(n[q],n)}updateValue(n,e){this.getLView(n)[et].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[et].$index=n}getLView(n){return ak(this.lContainer,n)}};function Xt(t){let n=G(null),e=ei();try{let i=Q(),r=i[q],o=i[e],a=e+1,s=jd(i,a);if(o.liveCollection===void 0){let c=Om(r,a);o.liveCollection=new Nm(s,i,c)}else o.liveCollection.reset();let l=o.liveCollection;if(nk(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=or(),u=l.length===0;if(Pn(i,c,u)){let f=e+2,h=jd(i,f);if(u){let p=Om(r,f),v=RC(h,p,i),I=Ws(i,p,void 0,{dehydratedView:v});qs(h,I,0,ra(p,v))}else r.firstUpdatePass&&eR(h),TC(h,0)}}}finally{G(n)}}function jd(t,n){return t[n]}function ik(t,n){if(t.length<=Ke)return;let e=Ke+n,i=t[e],r=i?i[ir]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[wi];lA(o,r),io.delete(i[Ei]),r.detachedLeaveAnimationFns=void 0}}function rk(t,n){if(t.length<=Ke)return;let e=Ke+n,i=t[e],r=i?i[ir]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function ok(t,n){return Vs(t,n)}function ak(t,n){return SC(t,n)}function Om(t,n){return sd(t,n)}function k(t,n,e){let i=Q(),r=or();if(Pn(i,r,n)){let o=je(),a=xs();gC(a,i,t,n,i[Ne],e)}return k}function Fm(t,n,e,i,r){og(n,t,e,r?"class":"style",i)}function g(t,n,e,i){let r=Q(),o=r[q],a=t+ze,s=o.firstCreatePass?lg(a,r,2,n,ng,dd(),e,i):o.data[a];if(xi(s)){let l=r[Tn].tracingService;if(l&&l.componentCreate){let c=o.data[s.directiveStart+s.componentOffset];return l.componentCreate(UC(c),()=>(hD(t,n,r,s,i),g))}}return hD(t,n,r,s,i),g}function hD(t,n,e,i,r){if(ig(i,e,t,n,o0),Ko(i)){let o=e[q];Qd(o,e,i),zm(o,i,e)}r!=null&&Gs(e,i)}function m(){let t=je(),n=at(),e=rg(n);return t.firstCreatePass&&cg(t,e),Vp(e)&&Bp(),Pp(),e.classesWithoutHost!=null&&aT(e)&&Fm(t,e,Q(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&sT(e)&&Fm(t,e,Q(),e.stylesWithoutHost,!1),m}function A(t,n,e,i){return g(t,n,e,i),m(),A}function Re(t,n,e,i){let r=Q(),o=r[q],a=t+ze,s=o.firstCreatePass?pR(a,o,2,n,e,i):o.data[a];return ig(s,r,t,n,o0),i!=null&&Gs(r,s),Re}function Oe(){let t=at(),n=rg(t);return Vp(n)&&Bp(),Pp(),Oe}function Vt(t,n,e,i){return Re(t,n,e,i),Oe(),Vt}var o0=(t,n,e,i,r)=>(Ms(!0),ZD(n[Ne],i,Nb()));function Bt(t,n,e){let i=Q(),r=i[q],o=t+ze,a=r.firstCreatePass?lg(o,i,8,"ng-container",ng,dd(),n,e):r.data[o];if(ig(a,i,t,"ng-container",sk),Ko(a)){let s=i[q];Qd(s,i,a),zm(s,a,i)}return e!=null&&Gs(i,a),Bt}function jt(){let t=je(),n=at(),e=rg(n);return t.firstCreatePass&&cg(t,e),jt}function lt(t,n,e){return Bt(t,n,e),jt(),lt}var sk=(t,n,e,i,r)=>(Ms(!0),LT(n[Ne],""));function Ti(){return Q()}function Qe(t,n,e){let i=Q(),r=or();if(Pn(i,r,n)){let o=je(),a=xs();_C(a,i,t,n,i[Ne],e)}return Qe}var Rs=void 0;function lk(t){let n=Math.floor(Math.abs(t)),e=t.toString().replace(/^[^.]*\.?/,"").length;return n===1&&e===0?1:5}var ck=["en",[["a","p"],["AM","PM"]],[["AM","PM"]],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Rs,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Rs,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm\u202Fa","h:mm:ss\u202Fa","h:mm:ss\u202Fa z","h:mm:ss\u202Fa zzzz"],["{1}, {0}",Rs,Rs,Rs],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",lk],om={};function Jt(t){let n=dk(t),e=pD(n);if(e)return e;let i=n.split("-")[0];if(e=pD(i),e)return e;if(i==="en")return ck;throw new M(701,!1)}function pD(t){return t in om||(om[t]=Ci.ng&&Ci.ng.common&&Ci.ng.common.locales&&Ci.ng.common.locales[t]),om[t]}var nt=(function(t){return t[t.LocaleId=0]="LocaleId",t[t.DayPeriodsFormat=1]="DayPeriodsFormat",t[t.DayPeriodsStandalone=2]="DayPeriodsStandalone",t[t.DaysFormat=3]="DaysFormat",t[t.DaysStandalone=4]="DaysStandalone",t[t.MonthsFormat=5]="MonthsFormat",t[t.MonthsStandalone=6]="MonthsStandalone",t[t.Eras=7]="Eras",t[t.FirstDayOfWeek=8]="FirstDayOfWeek",t[t.WeekendRange=9]="WeekendRange",t[t.DateFormat=10]="DateFormat",t[t.TimeFormat=11]="TimeFormat",t[t.DateTimeFormat=12]="DateTimeFormat",t[t.NumberSymbols=13]="NumberSymbols",t[t.NumberFormats=14]="NumberFormats",t[t.CurrencyCode=15]="CurrencyCode",t[t.CurrencySymbol=16]="CurrencySymbol",t[t.CurrencyName=17]="CurrencyName",t[t.Currencies=18]="Currencies",t[t.Directionality=19]="Directionality",t[t.PluralCase=20]="PluralCase",t[t.ExtraData=21]="ExtraData",t})(nt||{});function dk(t){return t.toLowerCase().replace(/_/g,"-")}var Qs="en-US";var uk=Qs;function a0(t){typeof t=="string"&&(uk=t.toLowerCase().replace(/_/g,"-"))}function ne(t,n,e){let i=Q(),r=je(),o=at();return s0(r,i,i[Ne],o,t,n,e),ne}function da(t,n,e){let i=Q(),r=je(),o=at();return(o.type&3||e)&&jC(o,r,i,e,i[Ne],t,n,Ed(o,i,n)),da}function s0(t,n,e,i,r,o,a){let s=!0,l=null;if((i.type&3||a)&&(l??=Ed(i,n,o),jC(i,t,n,a,e,r,o,l)&&(s=!1)),s){let c=i.outputs?.[r],u=i.hostDirectiveOutputs?.[r];if(u&&u.length)for(let f=0;f<u.length;f+=2){let h=u[f],p=u[f+1];l??=Ed(i,n,o),oD(i,n,h,p,r,l)}if(c&&c.length)for(let f of c)l??=Ed(i,n,o),oD(i,n,f,r,r,l)}}function J(t=1){return kb(t)}function fk(t,n){let e=null,i=qT(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?rC(t,o,!0):KT(i,o))return r}return e}function ke(t){let n=Q()[Pt][Ft];if(!n.projection){let e=t?t.length:1,i=n.projection=rb(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?fk(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:i[a]=o,r[a]=o)}o=o.next}}}function X(t,n=0,e,i,r,o){let a=Q(),s=je(),l=i?t+1:null;l!==null&&js(a,s,l,i,r,o,null,e);let c=la(s,ze+t,16,null,e||null);c.projection===null&&(c.projection=n),Up();let f=!a[qr]||Lp();a[Pt][Ft].projection[c.projection]===null&&l!==null?hk(a,s,l):f&&!$d(c)&&yA(s,a,c)}function hk(t,n,e){let i=ze+e,r=n.data[i],o=t[i],a=kd(o,r.tView.ssrId),s=Ws(t,r,void 0,{dehydratedView:a});qs(o,s,0,ra(r,a))}function Ht(t,n,e,i){return YC(t,n,e,i),Ht}function Ge(t,n,e){return qC(t,n,e),Ge}function U(t){let n=Q(),e=je(),i=hd();Is(i+1);let r=fg(e,i);if(t.dirty&&pb(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=KC(n,i);t.reset(o,FD),t.notifyOnChanges()}return!0}return!1}function z(){return ug(Q(),hd())}function nu(t,n,e,i,r){return XC(n,YC(t,e,i,r)),nu}function ua(t,n,e,i){return XC(t,qC(n,e,i)),ua}function fa(t=1){Is(hd()+t)}function gt(t){let n=Cb();return Tp(n,ze+t)}function yd(t,n){return t<<17|n<<2}function ro(t){return t>>17&32767}function pk(t){return(t&2)==2}function mk(t,n){return t&131071|n<<17}function Pm(t){return t|2}function oa(t){return(t&131068)>>2}function am(t,n){return t&-131069|n<<2}function gk(t){return(t&1)===1}function Lm(t){return t|1}function _k(t,n,e,i,r,o){let a=o?n.classBindings:n.styleBindings,s=ro(a),l=oa(a);t[i]=e;let c=!1,u;if(Array.isArray(e)){let f=e;u=f[1],(u===null||Wo(f,u)>0)&&(c=!0)}else u=e;if(r)if(l!==0){let h=ro(t[s+1]);t[i+1]=yd(h,s),h!==0&&(t[h+1]=am(t[h+1],i)),t[s+1]=mk(t[s+1],i)}else t[i+1]=yd(s,0),s!==0&&(t[s+1]=am(t[s+1],i)),s=i;else t[i+1]=yd(l,0),s===0?s=i:t[l+1]=am(t[l+1],i),l=i;c&&(t[i+1]=Pm(t[i+1])),mD(t,u,i,!0),mD(t,u,i,!1),vk(n,u,t,i,o),a=yd(s,l),o?n.classBindings=a:n.styleBindings=a}function vk(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&Wo(o,n)>=0&&(e[i+1]=Lm(e[i+1]))}function mD(t,n,e,i){let r=t[e+1],o=n===null,a=i?ro(r):oa(r),s=!1;for(;a!==0&&(s===!1||o);){let l=t[a],c=t[a+1];yk(l,n)&&(s=!0,t[a+1]=i?Lm(c):Pm(c)),a=i?ro(c):oa(c)}s&&(t[e+1]=i?Pm(r):Lm(r))}function yk(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?Wo(t,n)>=0:!1}var On={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function bk(t){return t.substring(On.key,On.keyEnd)}function Dk(t){return Ck(t),l0(t,c0(t,0,On.textEnd))}function l0(t,n){let e=On.textEnd;return e===n?-1:(n=On.keyEnd=wk(t,On.key=n,e),c0(t,n,e))}function Ck(t){On.key=0,On.keyEnd=0,On.value=0,On.valueEnd=0,On.textEnd=t.length}function c0(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function wk(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function $t(t,n,e){return d0(t,n,e,!1),$t}function $(t,n){return d0(t,n,null,!0),$}function xt(t){Ik(Rk,Ek,t,!0)}function Ek(t,n){for(let e=Dk(n);e>=0;e=l0(n,e))rd(t,bk(n),!0)}function d0(t,n,e,i){let r=Q(),o=je(),a=ud(2);if(o.firstUpdatePass&&f0(o,t,a,i),n!==Lt&&Pn(r,a,n)){let s=o.data[ei()];h0(o,s,r,r[Ne],t,r[a+1]=Nk(n,e),i,a)}}function Ik(t,n,e,i){let r=je(),o=ud(2);r.firstUpdatePass&&f0(r,null,o,i);let a=Q();if(e!==Lt&&Pn(a,o,e)){let s=r.data[ei()];if(p0(s,i)&&!u0(r,o)){let l=i?s.classesWithoutHost:s.stylesWithoutHost;l!==null&&(e=Xc(l,e||"")),Fm(r,s,a,e,i)}else kk(r,s,a,a[Ne],a[o+1],a[o+1]=Ak(t,n,e),i,o)}}function u0(t,n){return n>=t.expandoStartIndex}function f0(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[ei()],a=u0(t,e);p0(o,i)&&n===null&&!a&&(n=!1),n=xk(r,o,n,i),_k(r,o,n,e,a,i)}}function xk(t,n,e,i){let r=Sb(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=sm(null,t,n,e,i),e=Hs(e,n.attrs,i),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==r)if(e=sm(r,t,n,e,i),o===null){let l=Mk(t,n,i);l!==void 0&&Array.isArray(l)&&(l=sm(null,t,n,l[1],i),l=Hs(l,n.attrs,i),Sk(t,n,i,l))}else o=Tk(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function Mk(t,n,e){let i=e?n.classBindings:n.styleBindings;if(oa(i)!==0)return t[ro(i)]}function Sk(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[ro(r)]=i}function Tk(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;i=Hs(i,a,e)}return Hs(i,n.attrs,e)}function sm(t,n,e,i,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],i=Hs(i,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),i}function Hs(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?r=a:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),rd(t,a,e?!0:n[++o]))}return t===void 0?null:t}function Ak(t,n,e){if(e==null||e==="")return At;let i=[],r=sa(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function Rk(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&rd(t,i,e)}function kk(t,n,e,i,r,o,a,s){r===Lt&&(r=At);let l=0,c=0,u=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;u!==null||f!==null;){let h=l<r.length?r[l+1]:void 0,p=c<o.length?o[c+1]:void 0,v=null,I;u===f?(l+=2,c+=2,h!==p&&(v=f,I=p)):f===null||u!==null&&u<f?(l+=2,v=u):(c+=2,v=f,I=p),v!==null&&h0(t,n,e,i,v,I,a,s),u=l<r.length?r[l]:null,f=c<o.length?o[c]:null}}function h0(t,n,e,i,r,o,a,s){if(!(n.type&3))return;let l=t.data,c=l[s+1],u=gk(c)?gD(l,n,e,r,oa(c),a):void 0;if(!Hd(u)){Hd(o)||pk(c)&&(o=gD(l,null,e,r,s,a));let f=Sp(ei(),e);DA(i,a,f,r,o)}}function gD(t,n,e,i,r,o){let a=n===null,s;for(;r>0;){let l=t[r],c=Array.isArray(l),u=c?l[1]:l,f=u===null,h=e[r+1];h===Lt&&(h=f?At:void 0);let p=f?od(h,i):u===i?h:void 0;if(c&&!Hd(p)&&(p=od(l,i)),Hd(p)&&(s=p,a))return s;let v=t[r+1];r=a?ro(v):oa(v)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(s=od(l,i))}return s}function Hd(t){return t!==void 0}function Nk(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=ys(sa(t)))),t}function p0(t,n){return(t.flags&(n?8:16))!==0}function C(t,n=""){let e=Q(),i=je(),r=t+ze,o=i.firstCreatePass?la(i,r,1,n,null):i.data[r],a=Ok(i,e,o,n);e[r]=a,gd()&&eg(i,e,a,o),Xo(o,!1)}var Ok=(t,n,e,i)=>(Ms(!0),FT(n[Ne],i));function Fk(t,n,e,i=""){return Pn(t,or(),e)?n+Go(e)+i:Lt}function Pk(t,n,e,i,r,o=""){let a=wb(),s=BC(t,a,e,r);return ud(2),s?n+Go(e)+i+Go(r)+o:Lt}function Mt(t){return He("",t),Mt}function He(t,n,e){let i=Q(),r=Fk(i,t,n,e);return r!==Lt&&m0(i,ei(),r),He}function ur(t,n,e,i,r){let o=Q(),a=Pk(o,t,n,e,i,r);return a!==Lt&&m0(o,ei(),a),ur}function m0(t,n,e){let i=Sp(n,t);PT(t[Ne],i,e)}function ha(t,n,e){yg(n)&&(n=n());let i=Q(),r=or();if(Pn(i,r,n)){let o=je(),a=xs();gC(a,i,t,n,i[Ne],e)}return ha}function Xs(t,n){let e=yg(t);return e&&t.set(n),e}function pa(t,n){let e=Q(),i=je(),r=at();return s0(i,e,e[Ne],r,t,n),pa}function _D(t,n,e){let i=je();i.firstCreatePass&&g0(n,i.data,i.blueprint,Rn(t),e)}function g0(t,n,e,i,r){if(t=ht(t),Array.isArray(t))for(let o=0;o<t.length;o++)g0(t[o],n,e,i,r);else{let o=je(),a=Q(),s=at(),l=zr(t)?t:ht(t.provide),c=Cp(t),u=s.providerIndexes&1048575,f=s.directiveStart,h=s.providerIndexes>>20;if(zr(t)||!t.multi){let p=new no(c,r,de,null),v=cm(l,n,r?u:u+h,f);v===-1?(um(Td(s,a),o,l),lm(o,t,n.length),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(p),a.push(p)):(e[v]=p,a[v]=p)}else{let p=cm(l,n,u+h,f),v=cm(l,n,u,u+h),I=p>=0&&e[p],x=v>=0&&e[v];if(r&&!x||!r&&!I){um(Td(s,a),o,l);let T=Bk(r?Vk:Lk,e.length,r,i,c,t);!r&&x&&(e[v].providerFactory=T),lm(o,t,n.length,0),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(T),a.push(T)}else{let T=_0(e[r?v:p],c,!r&&i);lm(o,t,p>-1?p:v,T)}!r&&i&&x&&e[v].componentProviders++}}}function lm(t,n,e,i){let r=zr(n),o=db(n);if(r||o){let l=(o?ht(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let u=c.indexOf(e);u===-1?c.push(e,[i,l]):c[u+1].push(i,l)}else c.push(e,l)}}}function _0(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function cm(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function Lk(t,n,e,i,r){return Vm(this.multi,[])}function Vk(t,n,e,i,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,l=Fs(i,i[q],this.providerFactory.index,r);a=l.slice(0,s),Vm(o,a);for(let c=s;c<l.length;c++)a.push(l[c])}else a=[],Vm(o,a);return a}function Vm(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function Bk(t,n,e,i,r,o){let a=new no(t,e,de,null);return a.multi=[],a.index=n,a.componentProviders=0,_0(a,r,i&&!e),a}function pe(t,n){return e=>{e.providersResolver=(i,r)=>_D(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>_D(i,r?r(n):n,!0))}}function Ig(t,n){let e=$p()+t,i=Q();return i[e]===Lt?VC(i,e,n()):mR(i,e)}function jk(t,n){let e=t[n];return e===Lt?void 0:e}function Hk(t,n,e,i,r,o,a){let s=n+e;return BC(t,s,r,o)?VC(t,s+2,a?i.call(a,r,o):i(r,o)):jk(t,s+2)}function iu(t,n){let e=je(),i,r=t+ze;e.firstCreatePass?(i=Uk(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=Xi(i.type,!0)),a,s=Nt(de);try{let l=Sd(!1),c=o();return Sd(l),Ap(e,Q(),r,c),c}finally{Nt(s)}}function Uk(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function ru(t,n,e,i){let r=t+ze,o=Q(),a=Tp(o,r);return zk(o,r)?Hk(o,$p(),n,a.transform,e,i,a):a.transform(e,i)}function zk(t,n){return t[q].data[n].pure}function lo(t,n){return Xd(t,n)}var Ud=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},xg=(()=>{class t{compileModuleSync(e){return new Vd(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=pp(e),o=nC(r.declarations).reduce((a,s)=>{let l=Xn(s);return l&&a.push(new lr(l)),a},[]);return new Ud(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var v0=(()=>{class t{applicationErrorHandler=d(Zt);appRef=d(pn);taskService=d(Mi);ngZone=d(P);zonelessEnabled=d(Ts);tracing=d(Ln,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new se;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(_s):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(d(Xp,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?Lb:Yp;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(_s+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function y0(){return[{provide:Qn,useExisting:v0},{provide:P,useClass:vs},{provide:Ts,useValue:!0}]}function $k(){return typeof $localize<"u"&&$localize.locale||Qs}var co=new y("",{factory:()=>d(co,{optional:!0,skipSelf:!0})||$k()});var Js=class{destroyed=!1;listeners=null;errorHandler=d(cn,{optional:!0});destroyRef=d(It);constructor(){this.destroyRef.onDestroy(()=>{this.destroyed=!0,this.listeners=null})}subscribe(n){if(this.destroyed)throw new M(953,!1);return(this.listeners??=[]).push(n),{unsubscribe:()=>{let e=this.listeners?.indexOf(n);e!==void 0&&e!==-1&&this.listeners?.splice(e,1)}}}emit(n){if(this.destroyed){console.warn(xn(953,!1));return}if(this.listeners===null)return;let e=G(null);try{for(let i of this.listeners)try{i(n)}catch(r){this.errorHandler?.handleError(r)}}finally{G(e)}}};function ge(t){return Wy(t)}function it(t,n){return ns(t,n?.equal)}var Gk=t=>t;function Mg(t,n){if(typeof t=="function"){let e=Yh(t,Gk,n?.equal);return b0(e,n?.debugName)}else{let e=Yh(t.source,t.computation,t.equal);return b0(e,t.debugName)}}function b0(t,n){let e=t[Ze],i=t;return i.set=r=>$y(e,r),i.update=r=>Gy(e,r),i.asReadonly=Ss.bind(t),i}var su=Symbol("InputSignalNode#UNSET"),T0=Y(b({},is),{transformFn:void 0,applyValueToInputSignal(t,n){Gi(t,n)}});function A0(t,n){let e=Object.create(T0);e.value=t,e.transformFn=n?.transform;function i(){if(gi(e),e.value===su){let r=null;throw new M(-950,r)}return e.value}return i[Ze]=e,i}var ai=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>zs(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}},R0=(()=>{let t=new y("");return t.__NG_ELEMENT_ID__=n=>{let e=at();if(e===null)throw new M(-204,!1);if(e.type&2)return e.value;if(n&8)return null;throw new M(-204,!1)},t})();function lu(t){return new Js}function D0(t,n){return A0(t,n)}function rN(t){return A0(su,t)}var ct=(D0.required=rN,D0);function C0(t,n){return pg(n)}function oN(t,n){return mg(n)}var fo=(C0.required=oN,C0);function k0(t,n){return QC(n)}function w0(t,n){return pg(n)}function aN(t,n){return mg(n)}var N0=(w0.required=aN,w0);function O0(t,n){let e=Object.create(T0),i=new Js;e.value=t;function r(){return gi(e),E0(e.value),e.value}return r[Ze]=e,r.asReadonly=Ss.bind(r),r.set=o=>{e.equal(e.value,o)||(Gi(e,o),i.emit(o))},r.update=o=>{E0(e.value),r.set(o(e.value))},r.subscribe=i.subscribe.bind(i),r.destroyRef=i.destroyRef,r}function E0(t){if(t===su)throw new M(952,!1)}function I0(t,n){return O0(t,n)}function sN(t){return O0(su,t)}var F0=(I0.required=sN,I0);var Tg=new y(""),lN=new y("");function el(t){return!t.moduleRef}function cN(t){let n=el(t)?t.r3Injector:t.moduleRef.injector,e=n.get(P);return e.run(()=>{el(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(Zt),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),el(t)){let o=()=>n.destroy(),a=t.platformInjector.get(Tg);a.add(o),n.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(Tg);a.add(o),t.moduleRef.onDestroy(()=>{Os(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return uN(i,e,()=>{let o=n.get(Mi),a=o.add(),s=n.get(wg);return s.runInitializers(),s.donePromise.then(()=>{let l=n.get(co,Qs);if(a0(l||Qs),!n.get(lN,!0))return el(t)?n.get(pn):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(el(t)){let u=n.get(pn);return t.rootComponent!==void 0&&u.bootstrap(t.rootComponent),u}else return dN?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var dN;function uN(t,n,e){try{let i=e();return dr(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var ou=null;function fN(t=[],n){return j.create({name:n,providers:[{provide:Cs,useValue:"platform"},{provide:Tg,useValue:new Set([()=>ou=null])},...t]})}function hN(t=[]){if(ou)return ou;let n=fN(t);return ou=n,i0(),pN(n),n}function pN(t){let n=t.get(zd,null);mt(t,()=>{n?.forEach(e=>e())})}var mN=1e4;var mY=mN-1e3;var we=(()=>{class t{static __NG_ELEMENT_ID__=gN}return t})();function gN(t){return _N(at(),Q(),(t&16)===16)}function _N(t,n,e){if(xi(t)&&!e){let i=fn(t.index,n);return new sr(i,i)}else if(t.type&175){let i=n[Pt];return new sr(i,n)}return null}var Ag=class{supports(n){return dg(n)}create(n){return new Rg(n)}},vN=(t,n)=>n,Rg=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(n){this._trackByFn=n||vN}forEachItem(n){let e;for(e=this._itHead;e!==null;e=e._next)n(e)}forEachOperation(n){let e=this._itHead,i=this._removalsHead,r=0,o=null;for(;e||i;){let a=!i||e&&e.currentIndex<x0(i,r,o)?e:i,s=x0(a,r,o),l=a.currentIndex;if(a===i)r--,i=i._nextRemoved;else if(e=e._next,a.previousIndex==null)r++;else{o||(o=[]);let c=s-r,u=l-r;if(c!=u){for(let h=0;h<c;h++){let p=h<o.length?o[h]:o[h]=0,v=p+h;u<=v&&v<c&&(o[h]=p+1)}let f=a.previousIndex;o[f]=u-c}}s!==l&&n(a,s,l)}}forEachPreviousItem(n){let e;for(e=this._previousItHead;e!==null;e=e._nextPrevious)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachMovedItem(n){let e;for(e=this._movesHead;e!==null;e=e._nextMoved)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}forEachIdentityChange(n){let e;for(e=this._identityChangesHead;e!==null;e=e._nextIdentityChange)n(e)}diff(n){if(n==null&&(n=[]),!dg(n))throw new M(900,!1);return this.check(n)?this:null}onDestroy(){}check(n){this._reset();let e=this._itHead,i=!1,r,o,a;if(Array.isArray(n)){this.length=n.length;for(let s=0;s<this.length;s++)o=n[s],a=this._trackByFn(s,o),e===null||!Object.is(e.trackById,a)?(e=this._mismatch(e,o,a,s),i=!0):(i&&(e=this._verifyReinsertion(e,o,a,s)),Object.is(e.item,o)||this._addIdentityChange(e,o)),e=e._next}else r=0,PC(n,s=>{a=this._trackByFn(r,s),e===null||!Object.is(e.trackById,a)?(e=this._mismatch(e,s,a,r),i=!0):(i&&(e=this._verifyReinsertion(e,s,a,r)),Object.is(e.item,s)||this._addIdentityChange(e,s)),e=e._next,r++}),this.length=r;return this._truncate(e),this.collection=n,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let n;for(n=this._previousItHead=this._itHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._additionsHead;n!==null;n=n._nextAdded)n.previousIndex=n.currentIndex;for(this._additionsHead=this._additionsTail=null,n=this._movesHead;n!==null;n=n._nextMoved)n.previousIndex=n.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(n,e,i,r){let o;return n===null?o=this._itTail:(o=n._prev,this._remove(n)),n=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),n!==null?(Object.is(n.item,e)||this._addIdentityChange(n,e),this._reinsertAfter(n,o,r)):(n=this._linkedRecords===null?null:this._linkedRecords.get(i,r),n!==null?(Object.is(n.item,e)||this._addIdentityChange(n,e),this._moveAfter(n,o,r)):n=this._addAfter(new kg(e,i),o,r)),n}_verifyReinsertion(n,e,i,r){let o=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return o!==null?n=this._reinsertAfter(o,n._prev,r):n.currentIndex!=r&&(n.currentIndex=r,this._addToMoves(n,r)),n}_truncate(n){for(;n!==null;){let e=n._next;this._addToRemovals(this._unlink(n)),n=e}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(n,e,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(n);let r=n._prevRemoved,o=n._nextRemoved;return r===null?this._removalsHead=o:r._nextRemoved=o,o===null?this._removalsTail=r:o._prevRemoved=r,this._insertAfter(n,e,i),this._addToMoves(n,i),n}_moveAfter(n,e,i){return this._unlink(n),this._insertAfter(n,e,i),this._addToMoves(n,i),n}_addAfter(n,e,i){return this._insertAfter(n,e,i),this._additionsTail===null?this._additionsTail=this._additionsHead=n:this._additionsTail=this._additionsTail._nextAdded=n,n}_insertAfter(n,e,i){let r=e===null?this._itHead:e._next;return n._next=r,n._prev=e,r===null?this._itTail=n:r._prev=n,e===null?this._itHead=n:e._next=n,this._linkedRecords===null&&(this._linkedRecords=new au),this._linkedRecords.put(n),n.currentIndex=i,n}_remove(n){return this._addToRemovals(this._unlink(n))}_unlink(n){this._linkedRecords!==null&&this._linkedRecords.remove(n);let e=n._prev,i=n._next;return e===null?this._itHead=i:e._next=i,i===null?this._itTail=e:i._prev=e,n}_addToMoves(n,e){return n.previousIndex===e||(this._movesTail===null?this._movesTail=this._movesHead=n:this._movesTail=this._movesTail._nextMoved=n),n}_addToRemovals(n){return this._unlinkedRecords===null&&(this._unlinkedRecords=new au),this._unlinkedRecords.put(n),n.currentIndex=null,n._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=n,n._prevRemoved=null):(n._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=n),n}_addIdentityChange(n,e){return n.item=e,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=n:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=n,n}},kg=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(n,e){this.item=n,this.trackById=e}},Ng=class{_head=null;_tail=null;add(n){this._head===null?(this._head=this._tail=n,n._nextDup=null,n._prevDup=null):(this._tail._nextDup=n,n._prevDup=this._tail,n._nextDup=null,this._tail=n)}get(n,e){let i;for(i=this._head;i!==null;i=i._nextDup)if((e===null||e<=i.currentIndex)&&Object.is(i.trackById,n))return i;return null}remove(n){let e=n._prevDup,i=n._nextDup;return e===null?this._head=i:e._nextDup=i,i===null?this._tail=e:i._prevDup=e,this._head===null}},au=class{map=new Map;put(n){let e=n.trackById,i=this.map.get(e);i||(i=new Ng,this.map.set(e,i)),i.add(n)}get(n,e){let i=n,r=this.map.get(i);return r?r.get(n,e):null}remove(n){let e=n.trackById;return this.map.get(e).remove(n)&&this.map.delete(e),n}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function x0(t,n,e){let i=t.previousIndex;if(i===null)return i;let r=0;return e&&i<e.length&&(r=e[i]),i+n+r}function M0(){return new Ai([new Ag])}var Ai=(()=>{class t{factories;static \u0275prov=D({token:t,providedIn:"root",factory:M0});constructor(e){this.factories=e}static create(e,i){if(i!=null){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=d(t,{optional:!0,skipSelf:!0});return t.create(e,i||M0())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i!=null)return i;throw new M(901,!1)}}return t})();function P0(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;Se(ye.BootstrapApplicationStart);try{let o=r?.injector??hN(i),a=[y0(),Bb,...e||[]],s=new Bs({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return cN({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{Se(ye.BootstrapApplicationEnd)}}function K(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function si(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var Sg=Symbol("NOT_SET"),L0=new Set,yN=Y(b({},is),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Sg,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Sg&&!No(this))return this.signal;try{for(let r of this.cleanup??L0)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=_i(this),i;try{i=this.userFn.apply(null,n)}finally{zi(this,e)}return(this.value===Sg||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),Og=class extends Ps{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,a=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(It),a),this.scheduler=r;for(let s of Qm){let l=e[s];if(l===void 0)continue;let c=Object.create(yN);c.sequence=this,c.phase=s,c.userFn=l,c.dirty=!0,c.signal=()=>(gi(c),c.value),c.signal[Ze]=c,c.registerCleanupFn=u=>(c.cleanup??=new Set).add(u),this.nodes[s]=c,this.hooks[s]=u=>c.phaseFn(u)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??L0)e()}finally{$i(n)}}};function V0(t,n){let e=n?.injector??d(j),i=e.get(Qn),r=e.get(Yd),o=e.get(Ln,null,{optional:!0});r.impl??=e.get(Xm);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(Jo,null,{optional:!0}),l=new Og(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,i,e,o?.snapshot(null));return r.impl.register(l),l}function cu(t,n){let e=Xn(t),i=n.elementInjector||qo();return new lr(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}function B0(t){let n=Xn(t);if(!n)return null;let e=new lr(n);return{get selector(){return e.selector},get type(){return e.componentType},get inputs(){return e.inputs},get outputs(){return e.outputs},get ngContentSelectors(){return e.ngContentSelectors},get isStandalone(){return n.standalone},get isSignal(){return n.signals}}}var j0=null;function mn(){return j0}function Pg(t){j0??=t}var tl=class{},ho=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:()=>d(H0),providedIn:"platform"})}return t})(),Lg=new y(""),H0=(()=>{class t extends ho{_location;_history;_doc=d(H);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return mn().getBaseHref(this._doc)}onPopState(e){let i=mn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=mn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function du(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function U0(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function Vn(t){return t&&t[0]!=="?"?`?${t}`:t}var Bn=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:()=>d(fu),providedIn:"root"})}return t})(),uu=new y(""),fu=(()=>{class t extends Bn{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??d(H).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return du(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+Vn(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+Vn(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+Vn(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(B(ho),B(uu,8))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var li=(()=>{class t{_subject=new E;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=CN(U0(z0(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+Vn(i))}normalize(e){return t.stripTrailingSlash(DN(this._basePath,z0(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Vn(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Vn(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Vn;static joinWithSlash=du;static stripTrailingSlash=U0;static \u0275fac=function(i){return new(i||t)(B(Bn))};static \u0275prov=D({token:t,factory:()=>bN(),providedIn:"root"})}return t})();function bN(){return new li(B(Bn))}function DN(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function z0(t){return t.replace(/\/index.html$/,"")}function CN(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Hg=(()=>{class t extends Bn{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(e){let i=du(this._baseHref,e);return i.length>0?"#"+i:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+Vn(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+Vn(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(B(ho),B(uu,8))};static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var Rt=(function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t})(Rt||{}),Fe=(function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t})(Fe||{}),Gt=(function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t})(Gt||{}),ki={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function G0(t){return Jt(t)[nt.LocaleId]}function W0(t,n,e){let i=Jt(t),r=[i[nt.DayPeriodsFormat],i[nt.DayPeriodsStandalone]],o=gn(r,n);return gn(o,e)}function q0(t,n,e){let i=Jt(t),r=[i[nt.DaysFormat],i[nt.DaysStandalone]],o=gn(r,n);return gn(o,e)}function Y0(t,n,e){let i=Jt(t),r=[i[nt.MonthsFormat],i[nt.MonthsStandalone]],o=gn(r,n);return gn(o,e)}function Z0(t,n){let i=Jt(t)[nt.Eras];return gn(i,n)}function nl(t,n){let e=Jt(t);return gn(e[nt.DateFormat],n)}function il(t,n){let e=Jt(t);return gn(e[nt.TimeFormat],n)}function rl(t,n){let i=Jt(t)[nt.DateTimeFormat];return gn(i,n)}function ol(t,n){let e=Jt(t),i=e[nt.NumberSymbols][n];if(typeof i>"u"){if(n===ki.CurrencyDecimal)return e[nt.NumberSymbols][ki.Decimal];if(n===ki.CurrencyGroup)return e[nt.NumberSymbols][ki.Group]}return i}function K0(t){if(!t[nt.ExtraData])throw new M(2303,!1)}function Q0(t){let n=Jt(t);return K0(n),(n[nt.ExtraData][2]||[]).map(i=>typeof i=="string"?Vg(i):[Vg(i[0]),Vg(i[1])])}function X0(t,n,e){let i=Jt(t);K0(i);let r=[i[nt.ExtraData][0],i[nt.ExtraData][1]],o=gn(r,n)||[];return gn(o,e)||[]}function gn(t,n){for(let e=n;e>-1;e--)if(typeof t[e]<"u")return t[e];throw new M(2304,!1)}function Vg(t){let[n,e]=t.split(":");return{hours:+n,minutes:+e}}var wN=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,hu={},EN=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function J0(t,n,e,i){let r=NN(t);n=Ri(e,n)||n;let a=[],s;for(;n;)if(s=EN.exec(n),s){a=a.concat(s.slice(1));let u=a.pop();if(!u)break;n=u}else{a.push(n);break}let l=r.getTimezoneOffset();i&&(l=tw(i,l),r=kN(r,i));let c="";return a.forEach(u=>{let f=AN(u);c+=f?f(r,e,l):u==="''"?"'":u.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),c}function vu(t,n,e){let i=new Date(0);return i.setFullYear(t,n,e),i.setHours(0,0,0),i}function Ri(t,n){let e=G0(t);if(hu[e]??={},hu[e][n])return hu[e][n];let i="";switch(n){case"shortDate":i=nl(t,Gt.Short);break;case"mediumDate":i=nl(t,Gt.Medium);break;case"longDate":i=nl(t,Gt.Long);break;case"fullDate":i=nl(t,Gt.Full);break;case"shortTime":i=il(t,Gt.Short);break;case"mediumTime":i=il(t,Gt.Medium);break;case"longTime":i=il(t,Gt.Long);break;case"fullTime":i=il(t,Gt.Full);break;case"short":let r=Ri(t,"shortTime"),o=Ri(t,"shortDate");i=pu(rl(t,Gt.Short),[r,o]);break;case"medium":let a=Ri(t,"mediumTime"),s=Ri(t,"mediumDate");i=pu(rl(t,Gt.Medium),[a,s]);break;case"long":let l=Ri(t,"longTime"),c=Ri(t,"longDate");i=pu(rl(t,Gt.Long),[l,c]);break;case"full":let u=Ri(t,"fullTime"),f=Ri(t,"fullDate");i=pu(rl(t,Gt.Full),[u,f]);break}return i&&(hu[e][n]=i),i}function pu(t,n){return n&&(t=t.replace(/\{([^}]+)}/g,function(e,i){return n!=null&&i in n?n[i]:e})),t}function jn(t,n,e="-",i,r){let o="";(t<0||r&&t<=0)&&(r?t=-t+1:(t=-t,o=e));let a=String(t);for(;a.length<n;)a="0"+a;return i&&(a=a.slice(a.length-n)),o+a}function IN(t,n){return jn(t,3).substring(0,n)}function dt(t,n,e=0,i=!1,r=!1){return function(o,a){let s=xN(t,o);if((e>0||s>-e)&&(s+=e),t===3)s===0&&e===-12&&(s=12);else if(t===6)return IN(s,n);let l=ol(a,ki.MinusSign);return jn(s,n,l,i,r)}}function xN(t,n){switch(t){case 0:return n.getFullYear();case 1:return n.getMonth();case 2:return n.getDate();case 3:return n.getHours();case 4:return n.getMinutes();case 5:return n.getSeconds();case 6:return n.getMilliseconds();case 7:return n.getDay();default:throw new M(2301,!1)}}function Be(t,n,e=Rt.Format,i=!1){return function(r,o){return MN(r,o,t,n,e,i)}}function MN(t,n,e,i,r,o){switch(e){case 2:return Y0(n,r,i)[t.getMonth()];case 1:return q0(n,r,i)[t.getDay()];case 0:let a=t.getHours(),s=t.getMinutes();if(o){let c=Q0(n),u=X0(n,r,i),f=c.findIndex(h=>{if(Array.isArray(h)){let[p,v]=h,I=a>=p.hours&&s>=p.minutes,x=a<v.hours||a===v.hours&&s<v.minutes;if(p.hours<v.hours){if(I&&x)return!0}else if(I||x)return!0}else if(h.hours===a&&h.minutes===s)return!0;return!1});if(f!==-1)return u[f]}return W0(n,r,i)[a<12?0:1];case 3:return Z0(n,i)[t.getFullYear()<=0?0:1];default:let l=e;throw new M(2302,!1)}}function mu(t){return function(n,e,i){let r=-1*i,o=ol(e,ki.MinusSign),a=r>0?Math.floor(r/60):Math.ceil(r/60);switch(t){case 0:return(r>=0?"+":"")+jn(a,2,o)+jn(Math.abs(r%60),2,o);case 1:return"GMT"+(r>=0?"+":"")+jn(a,1,o);case 2:return"GMT"+(r>=0?"+":"")+jn(a,2,o)+":"+jn(Math.abs(r%60),2,o);case 3:return i===0?"Z":(r>=0?"+":"")+jn(a,2,o)+":"+jn(Math.abs(r%60),2,o);default:throw new M(2310,!1)}}}var SN=0,_u=4;function TN(t){let n=vu(t,SN,1).getDay();return vu(t,0,1+(n<=_u?_u:_u+7)-n)}function ew(t){let n=t.getDay(),e=n===0?-3:_u-n;return vu(t.getFullYear(),t.getMonth(),t.getDate()+e)}function Bg(t,n=!1){return function(e,i){let r;if(n){let o=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,a=e.getDate();r=1+Math.floor((a+o)/7)}else{let o=ew(e),a=TN(o.getFullYear()),s=o.getTime()-a.getTime();r=1+Math.round(s/6048e5)}return jn(r,t,ol(i,ki.MinusSign))}}function gu(t,n=!1){return function(e,i){let o=ew(e).getFullYear();return jn(o,t,ol(i,ki.MinusSign),n)}}var jg={};function AN(t){if(jg[t])return jg[t];let n;switch(t){case"G":case"GG":case"GGG":n=Be(3,Fe.Abbreviated);break;case"GGGG":n=Be(3,Fe.Wide);break;case"GGGGG":n=Be(3,Fe.Narrow);break;case"y":n=dt(0,1,0,!1,!0);break;case"yy":n=dt(0,2,0,!0,!0);break;case"yyy":n=dt(0,3,0,!1,!0);break;case"yyyy":n=dt(0,4,0,!1,!0);break;case"Y":n=gu(1);break;case"YY":n=gu(2,!0);break;case"YYY":n=gu(3);break;case"YYYY":n=gu(4);break;case"M":case"L":n=dt(1,1,1);break;case"MM":case"LL":n=dt(1,2,1);break;case"MMM":n=Be(2,Fe.Abbreviated);break;case"MMMM":n=Be(2,Fe.Wide);break;case"MMMMM":n=Be(2,Fe.Narrow);break;case"LLL":n=Be(2,Fe.Abbreviated,Rt.Standalone);break;case"LLLL":n=Be(2,Fe.Wide,Rt.Standalone);break;case"LLLLL":n=Be(2,Fe.Narrow,Rt.Standalone);break;case"w":n=Bg(1);break;case"ww":n=Bg(2);break;case"W":n=Bg(1,!0);break;case"d":n=dt(2,1);break;case"dd":n=dt(2,2);break;case"c":case"cc":n=dt(7,1);break;case"ccc":n=Be(1,Fe.Abbreviated,Rt.Standalone);break;case"cccc":n=Be(1,Fe.Wide,Rt.Standalone);break;case"ccccc":n=Be(1,Fe.Narrow,Rt.Standalone);break;case"cccccc":n=Be(1,Fe.Short,Rt.Standalone);break;case"E":case"EE":case"EEE":n=Be(1,Fe.Abbreviated);break;case"EEEE":n=Be(1,Fe.Wide);break;case"EEEEE":n=Be(1,Fe.Narrow);break;case"EEEEEE":n=Be(1,Fe.Short);break;case"a":case"aa":case"aaa":n=Be(0,Fe.Abbreviated);break;case"aaaa":n=Be(0,Fe.Wide);break;case"aaaaa":n=Be(0,Fe.Narrow);break;case"b":case"bb":case"bbb":n=Be(0,Fe.Abbreviated,Rt.Standalone,!0);break;case"bbbb":n=Be(0,Fe.Wide,Rt.Standalone,!0);break;case"bbbbb":n=Be(0,Fe.Narrow,Rt.Standalone,!0);break;case"B":case"BB":case"BBB":n=Be(0,Fe.Abbreviated,Rt.Format,!0);break;case"BBBB":n=Be(0,Fe.Wide,Rt.Format,!0);break;case"BBBBB":n=Be(0,Fe.Narrow,Rt.Format,!0);break;case"h":n=dt(3,1,-12);break;case"hh":n=dt(3,2,-12);break;case"H":n=dt(3,1);break;case"HH":n=dt(3,2);break;case"m":n=dt(4,1);break;case"mm":n=dt(4,2);break;case"s":n=dt(5,1);break;case"ss":n=dt(5,2);break;case"S":n=dt(6,1);break;case"SS":n=dt(6,2);break;case"SSS":n=dt(6,3);break;case"Z":case"ZZ":case"ZZZ":n=mu(0);break;case"ZZZZZ":n=mu(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":n=mu(1);break;case"OOOO":case"ZZZZ":case"zzzz":n=mu(2);break;default:return null}return jg[t]=n,n}function tw(t,n){t=t.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(e)?n:e}function RN(t,n){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+n),t}function kN(t,n,e){let r=t.getTimezoneOffset(),o=tw(n,r);return RN(t,-1*(o-r))}function NN(t){if($0(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[r,o=1,a=1]=t.split("-").map(s=>+s);return vu(r,o-1,a)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let i;if(i=t.match(wN))return ON(i)}let n=new Date(t);if(!$0(n))throw new M(2311,!1);return n}function ON(t){let n=new Date(0),e=0,i=0,r=t[8]?n.setUTCFullYear:n.setFullYear,o=t[8]?n.setUTCHours:n.setHours;t[9]&&(e=Number(t[9]+t[10]),i=Number(t[9]+t[11])),r.call(n,Number(t[1]),Number(t[2])-1,Number(t[3]));let a=Number(t[4]||0)-e,s=Number(t[5]||0)-i,l=Number(t[6]||0),c=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return o.call(n,a,s,l,c),n}function $0(t){return t instanceof Date&&!isNaN(t.valueOf())}var al=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=d(j);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(de($e))};static \u0275dir=w({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Te]})}return t})();function FN(t,n){return new M(2100,!1)}var PN="mediumDate",nw=new y(""),iw=new y(""),Ug=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,i,r){this.locale=e,this.defaultTimezone=i,this.defaultOptions=r}transform(e,i,r,o){if(e==null||e===""||e!==e)return null;try{let a=i??this.defaultOptions?.dateFormat??PN,s=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return J0(e,a,o||this.locale,s)}catch(a){throw FN(t,a.message)}}static \u0275fac=function(i){return new(i||t)(de(co,16),de(nw,24),de(iw,24))};static \u0275pipe=gg({name:"date",type:t,pure:!0})}return t})();function yu(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var po=class{};var $g="browser";function rw(t){return t===$g}var Gg=(()=>{class t{static \u0275prov=D({token:t,providedIn:"root",factory:()=>new zg(d(H),window)})}return t})(),zg=class{document;window;offset=()=>[0,0];constructor(n,e){this.document=n,this.window=e}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n,e){this.window.scrollTo(Y(b({},e),{left:n[0],top:n[1]}))}scrollToAnchor(n,e){let i=BN(this.document,n);i&&(this.scrollToElement(i,e),i.focus())}setHistoryScrollRestoration(n){try{this.window.history.scrollRestoration=n}catch{console.warn(xn(2400,!1))}}scrollToElement(n,e){let i=n.getBoundingClientRect(),r=i.left+this.window.pageXOffset,o=i.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(Y(b({},e),{left:r-a[0],top:o-a[1]}))}};function BN(t,n){let e=t.getElementById(n)||t.getElementsByName(n)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let i=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let o=r.shadowRoot;if(o){let a=o.getElementById(n)||o.querySelector(`[name="${n}"]`);if(a)return a}r=i.nextNode()}}return null}var sl=class{_doc;constructor(n){this._doc=n}manager},bu=(()=>{class t extends sl{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(B(H))};static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})(),wu=new y(""),Zg=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof bu));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof bu);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new M(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(B(wu),B(P))};static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})(),Wg="ng-app-id";function ow(t){for(let n of t)n.remove()}function aw(t,n){let e=n.createElement("style");return e.textContent=t,e}function HN(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Wg}="${n}"],link[${Wg}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Wg),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Yg(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Kg=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,HN(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,aw);i?.forEach(r=>this.addUsage(r,this.external,Yg))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(ow(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])ow(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,aw(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Yg(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(B(H),B(cr),B(ao,8),B(oo))};static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})(),qg={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Qg=/%COMP%/g;var lw="%COMP%",UN=`_nghost-${lw}`,zN=`_ngcontent-${lw}`,$N=!0,GN=new y("",{factory:()=>$N});function WN(t){return zN.replace(Qg,t)}function qN(t){return UN.replace(Qg,t)}function cw(t,n){return n.map(e=>e.replace(Qg,t))}var Xg=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,l=null,c=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=c,this.defaultRenderer=new ll(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Cu?r.applyToHost(e):r instanceof cl&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case Fn.Emulated:o=new Cu(l,c,i,this.appId,u,a,s,f);break;case Fn.ShadowDom:return new Du(l,e,i,a,s,this.nonce,f,c);case Fn.ExperimentalIsolatedShadowDom:return new Du(l,e,i,a,s,this.nonce,f);default:o=new cl(l,c,i,u,a,s,f);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(B(Zg),B(Kg),B(cr),B(GN),B(H),B(P),B(ao),B(Ln,8))};static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})(),ll=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(qg[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(sw(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(sw(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new M(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=qg[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=qg[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(ni.DashCase|ni.Important)?n.style.setProperty(e,i,r&ni.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&ni.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=mn().getGlobalEventTarget(this.doc,n),!n))throw new M(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function sw(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Du=class extends ll{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,l){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=i.styles;c=cw(i.id,c);for(let f of c){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=f,this.shadowRoot.appendChild(h)}let u=i.getExternalStyles?.();if(u)for(let f of u){let h=Yg(f,r);a&&h.setAttribute("nonce",a),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},cl=class extends ll{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,l){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=i.styles;this.styles=l?cw(l,c):c,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&io.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Cu=class extends cl{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,l){let c=r+"-"+i.id;super(n,e,i,o,a,s,l,c),this.contentAttr=WN(c),this.hostAttr=qN(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var Eu=class t extends tl{supportsDOMEvents=!0;static makeCurrent(){Pg(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=YN();return e==null?null:ZN(e)}resetBaseElement(){dl=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return yu(document.cookie,n)}},dl=null;function YN(){return dl=dl||document.head.querySelector("base"),dl?dl.getAttribute("href"):null}function ZN(t){return new URL(t,document.baseURI).pathname}var KN=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})(),dw=["alt","control","meta","shift"],QN={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},XN={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},uw=(()=>{class t extends sl{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>mn().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),dw.forEach(c=>{let u=i.indexOf(c);u>-1&&(i.splice(u,1),a+=c+".")}),a+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,i){let r=QN[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),dw.forEach(a=>{if(a!==r){let s=XN[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(B(H))};static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();async function Jg(t,n,e){let i=b({rootComponent:t},JN(n,e));return P0(i)}function JN(t,n){return{platformRef:n?.platformRef,appProviders:[...rO,...t?.providers??[]],platformProviders:iO}}function eO(){Eu.makeCurrent()}function tO(){return new cn}function nO(){return Hm(document),document}var iO=[{provide:oo,useValue:$g},{provide:zd,useValue:eO,multi:!0},{provide:H,useFactory:nO}];var rO=[{provide:Cs,useValue:"root"},{provide:cn,useFactory:tO},{provide:wu,useClass:bu,multi:!0},{provide:wu,useClass:uw,multi:!0},Xg,Kg,Zg,{provide:st,useExisting:Xg},{provide:po,useClass:KN},[]];var fr=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var t_=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},n_=class{encodeKey(n){return fw(n)}encodeValue(n){return fw(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function oO(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var aO=/%(\d[a-f0-9])/gi,sO={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function fw(t){return encodeURIComponent(t).replace(aO,(n,e)=>sO[e]??n)}function Iu(t){return`${t}`}var Ni=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new n_,n.fromString){if(n.fromObject)throw new M(2805,!1);this.map=oO(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(Iu):[Iu(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Iu(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(Iu(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function lO(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function hw(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function pw(t){return typeof Blob<"u"&&t instanceof Blob}function mw(t){return typeof FormData<"u"&&t instanceof FormData}function cO(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var gw="Content-Type",_w="Accept",vw="text/plain",yw="application/json",dO=`${yw}, ${vw}, */*`,ma=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(lO(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new M(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new fr,this.context??=new t_,!this.params)this.params=new Ni,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||hw(this.body)||pw(this.body)||mw(this.body)||cO(this.body)?this.body:this.body instanceof Ni?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||mw(this.body)?null:pw(this.body)?this.body.type||null:hw(this.body)?null:typeof this.body=="string"?vw:this.body instanceof Ni?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?yw:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,u=n.credentials||this.credentials,f=n.referrer||this.referrer,h=n.integrity||this.integrity,p=n.referrerPolicy||this.referrerPolicy,v=n.transferCache??this.transferCache,I=n.timeout??this.timeout,x=n.body!==void 0?n.body:this.body,T=n.withCredentials??this.withCredentials,_e=n.reportProgress??this.reportProgress,yt=n.headers||this.headers,bt=n.params||this.params,Xa=n.context??this.context;return n.setHeaders!==void 0&&(yt=Object.keys(n.setHeaders).reduce((Ja,Rr)=>Ja.set(Rr,n.setHeaders[Rr]),yt)),n.setParams&&(bt=Object.keys(n.setParams).reduce((Ja,Rr)=>Ja.set(Rr,n.setParams[Rr]),bt)),new t(e,i,x,{params:bt,headers:yt,context:Xa,reportProgress:_e,responseType:r,withCredentials:T,transferCache:v,keepalive:o,cache:s,priority:a,timeout:I,mode:l,redirect:c,credentials:u,referrer:f,integrity:h,referrerPolicy:p})}},mo=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(mo||{}),ul=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new fr,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},i_=class t extends ul{constructor(n={}){super(n)}type=mo.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},fl=class t extends ul{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=mo.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},ga=class extends ul{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},uO=200,fO=204;var hO=/^\)\]\}',?\n/;var pO=(()=>{class t{xhrFactory;tracingService=d(Ln,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new M(-2800,!1);let i=this.xhrFactory;return W(null).pipe(Et(()=>new ie(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((x,T)=>a.setRequestHeader(x,T.join(","))),e.headers.has(_w)||a.setRequestHeader(_w,dO),!e.headers.has(gw)){let x=e.detectContentTypeHeader();x!==null&&a.setRequestHeader(gw,x)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let x=e.responseType.toLowerCase();a.responseType=x!=="json"?x:"text"}let s=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let x=a.statusText||"OK",T=new fr(a.getAllResponseHeaders()),_e=a.responseURL||e.url;return l=new i_({headers:T,status:a.status,statusText:x,url:_e}),l},u=this.maybePropagateTrace(()=>{let{headers:x,status:T,statusText:_e,url:yt}=c(),bt=null;T!==fO&&(bt=typeof a.response>"u"?a.responseText:a.response),T===0&&(T=bt?uO:0);let Xa=T>=200&&T<300;if(e.responseType==="json"&&typeof bt=="string"){let Ja=bt;bt=bt.replace(hO,"");try{bt=bt!==""?JSON.parse(bt):null}catch(Rr){bt=Ja,Xa&&(Xa=!1,bt={error:Rr,text:bt})}}Xa?(o.next(new fl({body:bt,headers:x,status:T,statusText:_e,url:yt||void 0})),o.complete()):o.error(new ga({error:bt,headers:x,status:T,statusText:_e,url:yt||void 0}))}),f=this.maybePropagateTrace(x=>{let{url:T}=c(),_e=new ga({error:x,status:a.status||0,statusText:a.statusText||"Unknown Error",url:T||void 0});o.error(_e)}),h=f;e.timeout&&(h=this.maybePropagateTrace(x=>{let{url:T}=c(),_e=new ga({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:T||void 0});o.error(_e)}));let p=!1,v=this.maybePropagateTrace(x=>{p||(o.next(c()),p=!0);let T={type:mo.DownloadProgress,loaded:x.loaded};x.lengthComputable&&(T.total=x.total),e.responseType==="text"&&a.responseText&&(T.partialText=a.responseText),o.next(T)}),I=this.maybePropagateTrace(x=>{let T={type:mo.UploadProgress,loaded:x.loaded};x.lengthComputable&&(T.total=x.total),o.next(T)});return a.addEventListener("load",u),a.addEventListener("error",f),a.addEventListener("timeout",h),a.addEventListener("abort",f),e.reportProgress&&(a.addEventListener("progress",v),s!==null&&a.upload&&a.upload.addEventListener("progress",I)),a.send(s),o.next({type:mo.Sent}),()=>{a.removeEventListener("error",f),a.removeEventListener("abort",f),a.removeEventListener("load",u),a.removeEventListener("timeout",h),e.reportProgress&&(a.removeEventListener("progress",v),s!==null&&a.upload&&a.upload.removeEventListener("progress",I)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(B(po))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function mO(t,n){return n(t)}function gO(t,n,e){return(i,r)=>mt(e,()=>n(i,o=>t(o,r)))}var _O=new y("",{factory:()=>[]}),bw=new y(""),vO=new y("",{factory:()=>!0});var yO=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=B(pO),r},providedIn:"root"})}return t})();var bO=(()=>{class t{backend;injector;chain=null;pendingTasks=d(As);contributeToStability=d(vO);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(_O),...this.injector.get(bw,[])]));this.chain=i.reduceRight((r,o)=>gO(r,o,this.injector),mO)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(us(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(B(yO),B(Me))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),DO=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=B(bO),r},providedIn:"root"})}return t})();function e_(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var r_=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof ma)o=e;else{let l;r.headers instanceof fr?l=r.headers:l=new fr(r.headers);let c;r.params&&(r.params instanceof Ni?c=r.params:c=new Ni({fromObject:r.params})),o=new ma(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=W(o).pipe(Qi(l=>this.handler.handle(l)));if(e instanceof ma||r.observe==="events")return a;let s=a.pipe(be(l=>l instanceof fl));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(me(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new M(2806,!1);return l.body}));case"blob":return s.pipe(me(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new M(2807,!1);return l.body}));case"text":return s.pipe(me(l=>{if(l.body!==null&&typeof l.body!="string")throw new M(2808,!1);return l.body}));default:return s.pipe(me(l=>l.body))}case"response":return s;default:throw new M(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new Ni().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,e_(r,i))}post(e,i,r={}){return this.request("POST",e,e_(r,i))}put(e,i,r={}){return this.request("PUT",e,e_(r,i))}static \u0275fac=function(i){return new(i||t)(B(DO))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Dw=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(B(H))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var re="primary",El=Symbol("RouteTitle"),c_=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function _o(t){return new c_(t)}function o_(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Tw(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},c=t.slice(0,i.length);return o_(i,c,l)?{consumed:c,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!o_(o,t.slice(0,o.length),s)||!o_(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function Ru(t){return new Promise((n,e)=>{t.pipe(bi()).subscribe({next:i=>n(i),error:i=>e(i)})})}function EO(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!ci(t[e],n[e]))return!1;return!0}function ci(t,n){let e=t?d_(t):void 0,i=n?d_(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Aw(t[r],n[r]))return!1;return!0}function d_(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Aw(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function IO(t){return t.length>0?t[t.length-1]:null}function yo(t){return Br(t)?t:dr(t)?Le(Promise.resolve(t)):W(t)}function Rw(t){return Br(t)?Ru(t):Promise.resolve(t)}var xO={exact:Ow,subset:Fw},kw={exact:MO,subset:SO,ignored:()=>!0},Nw={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},u_={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Cw(t,n,e){return xO[e.paths](t.root,n.root,e.matrixParams)&&kw[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function MO(t,n){return ci(t,n)}function Ow(t,n,e){if(!go(t.segments,n.segments)||!Su(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!Ow(t.children[i],n.children[i],e))return!1;return!0}function SO(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>Aw(t[e],n[e]))}function Fw(t,n,e){return Pw(t,n,n.segments,e)}function Pw(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!go(r,e)||n.hasChildren()||!Su(r,e,i))}else if(t.segments.length===e.length){if(!go(t.segments,e)||!Su(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!Fw(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!go(t.segments,r)||!Su(t.segments,r,i)||!t.children[re]?!1:Pw(t.children[re],n,o,i)}}function Su(t,n,e){return n.every((i,r)=>kw[e](t[r].parameters,i.parameters))}var tn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new Ee([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=_o(this.queryParams),this._queryParamMap}toString(){return RO.serialize(this)}},Ee=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Tu(this)}},hr=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=_o(this.parameters),this._parameterMap}toString(){return Vw(this)}};function TO(t,n){return go(t,n)&&t.every((e,i)=>ci(e.parameters,n[i].parameters))}function go(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function AO(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===re&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==re&&(e=e.concat(n(r,i)))}),e}var gr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:()=>new Fi,providedIn:"root"})}return t})(),Fi=class{parse(n){let e=new h_(n);return new tn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${hl(n.root,!0)}`,i=OO(n.queryParams),r=typeof n.fragment=="string"?`#${kO(n.fragment)}`:"";return`${e}${i}${r}`}},RO=new Fi;function Tu(t){return t.segments.map(n=>Vw(n)).join("/")}function hl(t,n){if(!t.hasChildren())return Tu(t);if(n){let e=t.children[re]?hl(t.children[re],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==re&&i.push(`${r}:${hl(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=AO(t,(i,r)=>r===re?[hl(t.children[re],!1)]:[`${r}:${hl(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[re]!=null?`${Tu(t)}/${e[0]}`:`${Tu(t)}/(${e.join("//")})`}}function Lw(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function xu(t){return Lw(t).replace(/%3B/gi,";")}function kO(t){return encodeURI(t)}function f_(t){return Lw(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Au(t){return decodeURIComponent(t)}function ww(t){return Au(t.replace(/\+/g,"%20"))}function Vw(t){return`${f_(t.path)}${NO(t.parameters)}`}function NO(t){return Object.entries(t).map(([n,e])=>`;${f_(n)}=${f_(e)}`).join("")}function OO(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${xu(e)}=${xu(r)}`).join("&"):`${xu(e)}=${xu(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var FO=/^[^\/()?;#]+/;function a_(t){let n=t.match(FO);return n?n[0]:""}var PO=/^[^\/()?;=#]+/;function LO(t){let n=t.match(PO);return n?n[0]:""}var VO=/^[^=?&#]+/;function BO(t){let n=t.match(VO);return n?n[0]:""}var jO=/^[^&#]+/;function HO(t){let n=t.match(jO);return n?n[0]:""}var h_=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ee([],{}):new Ee([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new M(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[re]=new Ee(e,i)),r}parseSegment(){let n=a_(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new M(4009,!1);return this.capture(n),new hr(Au(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=LO(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=a_(this.remaining);r&&(i=r,this.capture(i))}n[Au(e)]=Au(i)}parseQueryParam(n){let e=BO(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=HO(this.remaining);a&&(i=a,this.capture(i))}let r=ww(e),o=ww(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=a_(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new M(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=re);let s=this.parseChildren(e+1);i[a??re]=Object.keys(s).length===1&&s[re]?s[re]:new Ee([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new M(4011,!1)}};function Bw(t){return t.segments.length>0?new Ee([],{[re]:t}):t}function jw(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=jw(r);if(i===re&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new Ee(t.segments,n);return UO(e)}function UO(t){if(t.numberOfChildren===1&&t.children[re]){let n=t.children[re];return new Ee(t.segments.concat(n.segments),n.children)}return t}function pr(t){return t instanceof tn}function Hw(t,n,e=null,i=null,r=new Fi){let o=Uw(t);return zw(o,n,e,i,r)}function Uw(t){let n;function e(o){let a={};for(let l of o.children){let c=e(l);a[l.outlet]=c}let s=new Ee(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=Bw(i);return n??r}function zw(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return s_(o,o,o,e,i,r);let a=zO(n);if(a.toRoot())return s_(o,o,new Ee([],{}),e,i,r);let s=$O(a,o,t),l=s.processChildren?ml(s.segmentGroup,s.index,a.commands):Gw(s.segmentGroup,s.index,a.commands);return s_(o,s.segmentGroup,l,e,i,r)}function ku(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function _l(t){return typeof t=="object"&&t!=null&&t.outlets}function Ew(t,n,e){t||="\u0275";let i=new tn;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function s_(t,n,e,i,r,o){let a={};for(let[c,u]of Object.entries(i??{}))a[c]=Array.isArray(u)?u.map(f=>Ew(c,f,o)):Ew(c,u,o);let s;t===n?s=e:s=$w(t,n,e);let l=Bw(jw(s));return new tn(l,a,r)}function $w(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=$w(o,n,e)}),new Ee(t.segments,i)}var Nu=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&ku(i[0]))throw new M(4003,!1);let r=i.find(_l);if(r&&r!==IO(i))throw new M(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function zO(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Nu(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,c])=>{s[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Nu(e,n,i)}var va=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function $O(t,n,e){if(t.isAbsolute)return new va(n,!0,0);if(!e)return new va(n,!1,NaN);if(e.parent===null)return new va(e,!0,0);let i=ku(t.commands[0])?0:1,r=e.segments.length-1+i;return GO(e,r,t.numberOfDoubleDots)}function GO(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new M(4005,!1);r=i.segments.length}return new va(i,!1,r-o)}function WO(t){return _l(t[0])?t[0].outlets:{[re]:t}}function Gw(t,n,e){if(t??=new Ee([],{}),t.segments.length===0&&t.hasChildren())return ml(t,n,e);let i=qO(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new Ee(t.segments.slice(0,i.pathIndex),{});return o.children[re]=new Ee(t.segments.slice(i.pathIndex),t.children),ml(o,0,r)}else return i.match&&r.length===0?new Ee(t.segments,{}):i.match&&!t.hasChildren()?p_(t,n,e):i.match?ml(t,0,r):p_(t,n,e)}function ml(t,n,e){if(e.length===0)return new Ee(t.segments,{});{let i=WO(e),r={};if(Object.keys(i).some(o=>o!==re)&&t.children[re]&&t.numberOfChildren===1&&t.children[re].segments.length===0){let o=ml(t.children[re],n,e);return new Ee(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=Gw(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new Ee(t.segments,r)}}function qO(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if(_l(s))break;let l=`${s}`,c=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!xw(l,c,a))return o;i+=2}else{if(!xw(l,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function p_(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(_l(o)){let l=YO(o.outlets);return new Ee(i,l)}if(r===0&&ku(e[0])){let l=t.segments[n];i.push(new hr(l.path,Iw(e[0]))),r++;continue}let a=_l(o)?o.outlets[re]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&ku(s)?(i.push(new hr(a,Iw(s))),r+=2):(i.push(new hr(a,{})),r++)}return new Ee(i,{})}function YO(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=p_(new Ee([],{}),0,i))}),n}function Iw(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function xw(t,n,e){return t==e.path&&ci(n,e.parameters)}var ya="imperative",_t=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(_t||{}),nn=class{id;url;constructor(n,e){this.id=n,this.url=e}},mr=class extends nn{type=_t.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},vn=class extends nn{urlAfterRedirects;type=_t.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},kt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(kt||{}),Da=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Da||{}),_n=class extends nn{reason;code;type=_t.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Ww(t){return t instanceof _n&&(t.code===kt.Redirect||t.code===kt.SupersededByNewNavigation)}var di=class extends nn{reason;code;type=_t.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},vo=class extends nn{error;target;type=_t.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},vl=class extends nn{urlAfterRedirects;state;type=_t.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ou=class extends nn{urlAfterRedirects;state;type=_t.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Fu=class extends nn{urlAfterRedirects;state;shouldActivate;type=_t.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Pu=class extends nn{urlAfterRedirects;state;type=_t.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Lu=class extends nn{urlAfterRedirects;state;type=_t.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Vu=class{route;type=_t.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Bu=class{route;type=_t.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},ju=class{snapshot;type=_t.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Hu=class{snapshot;type=_t.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Uu=class{snapshot;type=_t.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},zu=class{snapshot;type=_t.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ca=class{routerEvent;position;anchor;scrollBehavior;type=_t.Scroll;constructor(n,e,i,r){this.routerEvent=n,this.position=e,this.anchor=i,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},wa=class{},yl=class{},Ea=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function ZO(t){return!(t instanceof wa)&&!(t instanceof Ea)&&!(t instanceof yl)}var $u=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new bo(this.rootInjector)}},bo=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new $u(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(B(Me))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Gu=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=m_(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=m_(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=g_(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return g_(n,this._root).map(e=>e.value)}};function m_(t,n){if(t===n.value)return n;for(let e of n.children){let i=m_(t,e);if(i)return i}return null}function g_(t,n){if(t===n.value)return[n];for(let e of n.children){let i=g_(t,e);if(i.length)return i.unshift(n),i}return[]}var en=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function _a(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var bl=class extends Gu{snapshot;constructor(n,e){super(n),this.snapshot=e,I_(this,n)}toString(){return this.snapshot.toString()}};function qw(t,n){let e=KO(t,n),i=new Xe([new hr("",{})]),r=new Xe({}),o=new Xe({}),a=new Xe({}),s=new Xe(""),l=new ui(i,r,a,s,o,re,t,e.root);return l.snapshot=e.root,new bl(new en(l,[]),e)}function KO(t,n){let e={},i={},r={},a=new Ia([],e,r,"",i,re,t,null,{},n);return new Dl("",new en(a,[]))}var ui=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(me(c=>c[El]))??W(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(me(n=>_o(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(me(n=>_o(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function E_(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:b(b({},n.params),t.params),data:b(b({},n.data),t.data),resolve:b(b(b(b({},t.data),n.data),r?.data),t._resolvedData)}:i={params:b({},t.params),data:b({},t.data),resolve:b(b({},t.data),t._resolvedData??{})},r&&Zw(r)&&(i.resolve[El]=r.title),i}var Ia=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[El]}constructor(n,e,i,r,o,a,s,l,c,u){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=c,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=_o(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=_o(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Dl=class extends Gu{url;constructor(n,e){super(e),this.url=n,I_(this,e)}toString(){return Yw(this._root)}};function I_(t,n){n.value._routerState=t,n.children.forEach(e=>I_(t,e))}function Yw(t){let n=t.children.length>0?` { ${t.children.map(Yw).join(", ")} } `:"";return`${t.value}${n}`}function l_(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,ci(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),ci(n.params,e.params)||t.paramsSubject.next(e.params),EO(n.url,e.url)||t.urlSubject.next(e.url),ci(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function __(t,n){let e=ci(t.params,n.params)&&TO(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||__(t.parent,n.parent))}function Zw(t){return typeof t.title=="string"||t.title===null}var Kw=new y(""),Il=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=re;activateEvents=new N;deactivateEvents=new N;attachEvents=new N;detachEvents=new N;routerOutletData=ct();parentContexts=d(bo);location=d($e);changeDetector=d(we);inputBinder=d(xl,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new M(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new M(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new M(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new M(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new v_(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Te]})}return t})(),v_=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===ui?this.route:n===bo?this.childContexts:n===Kw?this.outletData:this.parent.get(n,e)}},xl=new y(""),x_=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:i}=e,r=Zn([i.queryParams,i.params,i.data]).pipe(Et(([o,a,s],l)=>(s=b(b(b({},o),a),s),l===0?W(s):Promise.resolve(s)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(e);return}let a=B0(i.component);if(!a){this.unsubscribeFromRouteData(e);return}for(let{templateName:s}of a.inputs)e.activatedComponentRef.setInput(s,o[s])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})(),M_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&A(0,"router-outlet")},dependencies:[Il],encapsulation:2})}return t})();function S_(t){let n=t.children&&t.children.map(S_),e=n?Y(b({},t),{children:n}):b({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==re&&(e.component=M_),e}function QO(t,n,e){let i=Cl(t,n._root,e?e._root:void 0);return new bl(i,n)}function Cl(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=XO(t,n,e);return new en(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>Cl(t,s)),a}}let i=JO(n.value),r=n.children.map(o=>Cl(t,o));return new en(i,r)}}function XO(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return Cl(t,i,r);return Cl(t,i)})}function JO(t){return new ui(new Xe(t.url),new Xe(t.params),new Xe(t.queryParams),new Xe(t.fragment),new Xe(t.data),t.outlet,t.component,t)}var xa=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},Qw="ngNavigationCancelingError";function Wu(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=pr(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=Xw(!1,kt.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function Xw(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[Qw]=!0,e.cancellationCode=n,e}function eF(t){return Jw(t)&&pr(t.url)}function Jw(t){return!!t&&t[Qw]}var y_=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),l_(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=_a(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=_a(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=_a(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=_a(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new zu(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Hu(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(l_(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),l_(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},qu=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},ba=class{component;route;constructor(n,e){this.component=n,this.route=e}};function tF(t,n,e){let i=t._root,r=n?n._root:null;return pl(i,r,e,[i.value])}function nF(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Sa(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!lp(t)?t:n.get(t):i}function pl(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=_a(n);return t.children.forEach(a=>{iF(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>gl(s,e.getContext(a),r)),r}function iF(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=rF(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new qu(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?pl(t,n,s?s.children:null,i,r):pl(t,n,e,i,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new ba(s.outlet.component,a))}else a&&gl(n,s,r),r.canActivateChecks.push(new qu(i)),o.component?pl(t,null,s?s.children:null,i,r):pl(t,null,e,i,r);return r}function rF(t,n,e){if(typeof e=="function")return mt(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!go(t.url,n.url);case"pathParamsOrQueryParamsChange":return!go(t.url,n.url)||!ci(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!__(t,n)||!ci(t.queryParams,n.queryParams);default:return!__(t,n)}}function gl(t,n,e){let i=_a(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?gl(a,n.children.getContext(o),e):gl(a,null,e):gl(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new ba(n.outlet.component,r)):e.canDeactivateChecks.push(new ba(null,r)):e.canDeactivateChecks.push(new ba(null,r))}function Ml(t){return typeof t=="function"}function oF(t){return typeof t=="boolean"}function aF(t){return t&&Ml(t.canLoad)}function sF(t){return t&&Ml(t.canActivate)}function lF(t){return t&&Ml(t.canActivateChild)}function cF(t){return t&&Ml(t.canDeactivate)}function dF(t){return t&&Ml(t.canMatch)}function eE(t){return t instanceof jr||t?.name==="EmptyError"}var Mu=Symbol("INITIAL_VALUE");function Ma(){return Et(t=>Zn(t.map(n=>n.pipe(ft(1),ot(Mu)))).pipe(me(n=>{for(let e of n)if(e!==!0){if(e===Mu)return Mu;if(e===!1||uF(e))return e}return!0}),be(n=>n!==Mu),ft(1)))}function uF(t){return pr(t)||t instanceof xa}function tE(t){return t.aborted?W(void 0).pipe(ft(1)):new ie(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function nE(t){return ve(tE(t))}function fF(t){return wt(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?W(Y(b({},n),{guardsResult:!0})):hF(o,e,i).pipe(wt(a=>a&&oF(a)?pF(e,r,t):W(a)),me(a=>Y(b({},n),{guardsResult:a})))})}function hF(t,n,e){return Le(t).pipe(wt(i=>yF(i.component,i.route,e,n)),bi(i=>i!==!0,!0))}function pF(t,n,e){return Le(n).pipe(Qi(i=>Ki(gF(i.route.parent,e),mF(i.route,e),vF(t,i.path),_F(t,i.route))),bi(i=>i!==!0,!0))}function mF(t,n){return t!==null&&n&&n(new Uu(t)),W(!0)}function gF(t,n){return t!==null&&n&&n(new ju(t)),W(!0)}function _F(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return W(!0);let i=e.map(r=>yi(()=>{let o=n._environmentInjector,a=Sa(r,o),s=sF(a)?a.canActivate(n,t):mt(o,()=>a(n,t));return yo(s).pipe(bi())}));return W(i).pipe(Ma())}function vF(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>nF(o)).filter(o=>o!==null).map(o=>yi(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,c=Sa(s,l),u=lF(c)?c.canActivateChild(e,t):mt(l,()=>c(e,t));return yo(u).pipe(bi())});return W(a).pipe(Ma())}));return W(r).pipe(Ma())}function yF(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return W(!0);let o=r.map(a=>{let s=n._environmentInjector,l=Sa(a,s),c=cF(l)?l.canDeactivate(t,n,e,i):mt(s,()=>l(t,n,e,i));return yo(c).pipe(bi())});return W(o).pipe(Ma())}function bF(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return W(!0);let a=o.map(s=>{let l=Sa(s,t),c=aF(l)?l.canLoad(n,e):mt(t,()=>l(n,e)),u=yo(c);return r?u.pipe(nE(r)):u});return W(a).pipe(Ma(),iE(i))}function iE(t){return Lh(zt(n=>{if(typeof n!="boolean")throw Wu(t,n)}),me(n=>n===!0))}function DF(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return W(!0);let s=a.map(l=>{let c=Sa(l,t),u=dF(c)?c.canMatch(n,e,r):mt(t,()=>c(n,e,r));return yo(u).pipe(nE(o))});return W(s).pipe(Ma(),iE(i))}var Oi=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},wl=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function CF(t){throw new M(4e3,!1)}function wF(t){throw Xw(!1,kt.GuardRejected)}var b_=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[re])throw CF(`${n.redirectTo}`);r=r.children[re]}}async applyRedirectCommands(n,e,i,r,o){let a=await EF(e,r,o);if(a instanceof tn)throw new wl(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new wl(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new tn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(n,l,i,r)}),new Ee(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new M(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function EF(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Ru(yo(mt(e,()=>i(n))))}function IF(t,n){return t.providers&&!t._injector&&(t._injector=ca(t.providers,n,`Route: ${t.path}`)),t._injector??n}function Hn(t){return t.outlet||re}function xF(t,n){let e=t.filter(i=>Hn(i)===n);return e.push(...t.filter(i=>Hn(i)!==n)),e}var D_={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function rE(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function MF(t,n,e,i,r,o,a){let s=oE(t,n,e);if(!s.matched)return W(s);let l=rE(o(s));return i=IF(n,i),DF(i,n,e,r,l,a).pipe(me(c=>c===!0?s:b({},D_)))}function oE(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?b({},D_):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||Tw)(e,t,n);if(!r)return b({},D_);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?b(b({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function Mw(t,n,e,i,r){return e.length>0&&AF(t,e,i,r)?{segmentGroup:new Ee(n,TF(i,new Ee(e,t.children))),slicedSegments:[]}:e.length===0&&RF(t,e,i)?{segmentGroup:new Ee(t.segments,SF(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new Ee(t.segments,t.children),slicedSegments:e}}function SF(t,n,e,i){let r={};for(let o of e)if(Zu(t,n,o)&&!i[Hn(o)]){let a=new Ee([],{});r[Hn(o)]=a}return b(b({},i),r)}function TF(t,n){let e={};e[re]=n;for(let i of t)if(i.path===""&&Hn(i)!==re){let r=new Ee([],{});e[Hn(i)]=r}return e}function AF(t,n,e,i){return e.some(r=>!Zu(t,n,r)||!(Hn(r)!==re)?!1:!(i!==void 0&&Hn(r)===i))}function RF(t,n,e){return e.some(i=>Zu(t,n,i))}function Zu(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function kF(t,n,e){return n.length===0&&!t.children[e]}var C_=class{};async function NF(t,n,e,i,r,o,a="emptyOnly",s){return new w_(t,n,e,i,r,a,o,s).recognize()}var OF=31,w_=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new b_(this.urlSerializer,this.urlTree)}noMatchError(n){return new M(4002,`'${n.segmentGroup}'`)}async recognize(){let n=Mw(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new en(i,e),o=new Dl("",r),a=Hw(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new Ia([],Object.freeze({}),Object.freeze(b({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),re,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,re,e),rootSnapshot:e}}catch(i){if(i instanceof wl)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Oi?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof en?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let c=i.children[l],u=xF(e,l),f=await this.processSegmentGroup(n,u,c,l,r);a.push(...f)}let s=aE(a);return FF(s),s}async processSegment(n,e,i,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,a,s)}catch(c){if(c instanceof Oi||eE(c))continue;throw c}if(kF(i,r,o))return new C_;throw new Oi(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,l){if(Hn(i)!==a&&(a===re||!Zu(r,o,i)))throw new Oi(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,l);throw new Oi(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:l,parameters:c,consumedSegments:u,positionalParamSegments:f,remainingSegments:h}=oE(e,r,o);if(!l)throw new Oi(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>OF&&(this.allowRedirects=!1));let p=this.createSnapshot(n,r,o,c,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let v=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,f,rE(p),n),I=await this.applyRedirects.lineralizeSegments(r,v);return this.processSegment(n,i,e,I.concat(h),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new Ia(i,r,Object.freeze(b({},this.urlTree.queryParams)),this.urlTree.fragment,LF(e),Hn(e),e.component??e._loadedComponent??null,e,VF(e),n),s=E_(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=yt=>this.createSnapshot(n,i,yt.consumedSegments,yt.parameters,a),l=await Ru(MF(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new Oi(e);n=i._injector??n;let{routes:c}=await this.getChildConfig(n,i,r),u=i._loadedInjector??n,{parameters:f,consumedSegments:h,remainingSegments:p}=l,v=this.createSnapshot(n,i,h,f,a),{segmentGroup:I,slicedSegments:x}=Mw(e,h,p,c,o);if(x.length===0&&I.hasChildren()){let yt=await this.processChildren(u,c,I,v);return new en(v,yt)}if(c.length===0&&x.length===0)return new en(v,[]);let T=Hn(i)===o,_e=await this.processSegment(u,c,I,x,T?re:o,!0,v);return new en(v,_e instanceof en?[_e]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Ru(bF(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw wF(e)}return{routes:[],injector:n}}};function FF(t){t.sort((n,e)=>n.value.outlet===re?-1:e.value.outlet===re?1:n.value.outlet.localeCompare(e.value.outlet))}function PF(t){let n=t.value.routeConfig;return n&&n.path===""}function aE(t){let n=[],e=new Set;for(let i of t){if(!PF(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=aE(i.children);n.push(new en(i.value,r))}return n.filter(i=>!e.has(i))}function LF(t){return t.data||{}}function VF(t){return t.resolve||{}}function BF(t,n,e,i,r,o,a){return wt(async s=>{let{state:l,tree:c}=await NF(t,n,e,i,s.extractedUrl,r,o,a);return Y(b({},s),{targetSnapshot:l,urlAfterRedirects:c})})}function jF(t){return wt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return W(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of sE(s))o.add(l);let a=0;return Le(o).pipe(Qi(s=>r.has(s)?HF(s,e,t):(s.data=E_(s,s.parent,t).resolve,W(void 0))),zt(()=>a++),Hc(1),wt(s=>a===o.size?W(n):Je))})}function sE(t){let n=t.children.map(e=>sE(e)).flat();return[t,...n]}function HF(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!Zw(i)&&(r[El]=i.title),yi(()=>(t.data=E_(t,t.parent,e).resolve,UF(r,t,n).pipe(me(o=>(t._resolvedData=o,t.data=b(b({},t.data),o),null)))))}function UF(t,n,e){let i=d_(t);if(i.length===0)return W({});let r={};return Le(i).pipe(wt(o=>zF(t[o],n,e).pipe(bi(),zt(a=>{if(a instanceof xa)throw Wu(new Fi,a);r[o]=a}))),Hc(1),me(()=>r),Uo(o=>eE(o)?Je:$h(o)))}function zF(t,n,e){let i=n._environmentInjector,r=Sa(t,i),o=r.resolve?r.resolve(n,e):mt(i,()=>r(n,e));return yo(o)}function Sw(t){return Et(n=>{let e=t(n);return e?Le(e).pipe(me(()=>n)):W(n)})}var T_=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===re);return i}getResolvedTitleForRoute(e){return e.data[El]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:()=>d(lE),providedIn:"root"})}return t})(),lE=(()=>{class t extends T_{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(B(Dw))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),_r=new y("",{factory:()=>({})}),Do=new y(""),Ku=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(xg);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await Rw(mt(e,()=>i.loadComponent())),a=await uE(dE(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await cE(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function cE(t,n,e,i){let r=await Rw(mt(e,()=>t.loadChildren())),o=await uE(dE(r)),a;o instanceof eu||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,l,c=!1,u;return Array.isArray(a)?(l=a,c=!0):(s=a.create(e).injector,u=a,l=s.get(Do,[],{optional:!0,self:!0}).flat()),{routes:l.map(S_),injector:s,factory:u}}function $F(t){return t&&typeof t=="object"&&"default"in t}function dE(t){return $F(t)?t.default:t}async function uE(t){return t}var Qu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:()=>d(GF),providedIn:"root"})}return t})(),GF=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),A_=new y(""),R_=new y("");function fE(t,n,e){let i=t.get(R_),r=t.get(H);if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(c=>setTimeout(c));let o,a=new Promise(c=>{o=c}),s=r.startViewTransition(()=>(o(),WF(t)));s.updateCallbackDone.catch(c=>{}),s.ready.catch(c=>{}),s.finished.catch(c=>{});let{onViewTransitionCreated:l}=i;return l&&mt(t,()=>l({transition:s,from:n,to:e})),a}function WF(t){return new Promise(n=>{Ve({read:()=>setTimeout(n)},{injector:t})})}var qF=()=>{},k_=new y(""),Xu=(()=>{class t{currentNavigation=O(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=O(null);events=new E;transitionAbortWithErrorSubject=new E;configLoader=d(Ku);environmentInjector=d(Me);destroyRef=d(It);urlSerializer=d(gr);rootContexts=d(bo);location=d(li);inputBindingEnabled=d(xl,{optional:!0})!==null;titleStrategy=d(T_);options=d(_r,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=d(Qu);createViewTransition=d(A_,{optional:!0});navigationErrorHandler=d(k_,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>W(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Vu(r)),i=r=>this.events.next(new Bu(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;ge(()=>{this.transitions?.next(Y(b({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Xe(null),this.transitions.pipe(be(i=>i!==null),Et(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return W(i).pipe(Et(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",kt.SupersededByNewNavigation),Je;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?Y(b({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&u!=="reload")return this.events.next(new di(s.id,this.urlSerializer.serialize(s.rawUrl),"",Da.IgnoredSameUrlNavigation)),s.resolve(!1),Je;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return W(s).pipe(Et(f=>(this.events.next(new mr(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?Je:Promise.resolve(f))),BF(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),zt(f=>{i.targetSnapshot=f.targetSnapshot,i.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(h=>(h.finalUrl=f.urlAfterRedirects,h)),this.events.next(new yl)}),Et(f=>Le(i.routesRecognizeHandler.deferredHandle??W(void 0)).pipe(me(()=>f))),zt(()=>{let f=new vl(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:f,extractedUrl:h,source:p,restoredState:v,extras:I}=s,x=new mr(f,this.urlSerializer.serialize(h),p,v);this.events.next(x);let T=qw(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=Y(b({},s),{targetSnapshot:T,urlAfterRedirects:h,extras:Y(b({},I),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(_e=>(_e.finalUrl=h,_e)),W(i)}else return this.events.next(new di(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Da.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Je}),me(s=>{let l=new Ou(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=i=Y(b({},s),{guards:tF(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),fF(s=>this.events.next(s)),Et(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Wu(this.urlSerializer,s.guardsResult);let l=new Fu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return Je;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",kt.GuardRejected),Je;if(s.guards.canActivateChecks.length===0)return W(s);let c=new Pu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(c),!a())return Je;let u=!1;return W(s).pipe(jF(this.paramsInheritanceStrategy),zt({next:()=>{u=!0;let f=new Lu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)},complete:()=>{u||this.cancelNavigationTransition(s,"",kt.NoDataFromResolver)}}))}),Sw(s=>{let l=u=>{let f=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let h=u._environmentInjector;f.push(this.configLoader.loadComponent(h,u.routeConfig).then(p=>{u.component=p}))}for(let h of u.children)f.push(...l(h));return f},c=l(s.targetSnapshot.root);return c.length===0?W(s):Le(Promise.all(c).then(()=>s))}),Sw(()=>this.afterPreactivation()),Et(()=>{let{currentSnapshot:s,targetSnapshot:l}=i,c=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return c?Le(c).pipe(me(()=>i)):W(i)}),ft(1),Et(s=>{let l=QO(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=Y(b({},s),{targetRouterState:l}),this.currentNavigation.update(u=>(u.targetRouterState=l,u)),this.events.next(new wa);let c=i.beforeActivateHandler.deferredHandle;return c?Le(c.then(()=>s)):W(s)}),zt(s=>{new y_(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=qF,l)),this.lastSuccessfulNavigation.set(ge(this.currentNavigation)),this.events.next(new vn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),ve(tE(o.signal).pipe(be(()=>!r&&!i.targetRouterState),zt(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",kt.Aborted)}))),zt({complete:()=>{r=!0}}),ve(this.transitionAbortWithErrorSubject.pipe(zt(s=>{throw s}))),us(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",kt.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Uo(s=>{if(r=!0,this.destroyed)return i.resolve(!1),Je;if(Jw(s))this.events.next(new _n(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),eF(s)?this.events.next(new Ea(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let l=new vo(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let c=mt(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof xa){let{message:u,cancellationCode:f}=Wu(this.urlSerializer,c);this.events.next(new _n(i.id,this.urlSerializer.serialize(i.extractedUrl),u,f)),this.events.next(new Ea(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return Je}))}))}cancelNavigationTransition(e,i,r){let o=new _n(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=ge(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function YF(t){return t!==ya}var hE=new y("");var pE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:()=>d(ZF),providedIn:"root"})}return t})(),Yu=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},ZF=(()=>{class t extends Yu{static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ju=(()=>{class t{urlSerializer=d(gr);options=d(_r,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(li);urlHandlingStrategy=d(Qu);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new tn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof tn?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=qw(null,d(Me));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:()=>d(KF),providedIn:"root"})}return t})(),KF=(()=>{class t extends Ju{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof mr?this.updateStateMemento():e instanceof di?this.commitTransition(i):e instanceof vl?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof wa?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof _n&&!Ww(e)?this.restoreHistory(i):e instanceof vo?this.restoreHistory(i,!0):e instanceof vn&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:i,id:r}){let{replaceUrl:o,state:a}=i;if(this.location.isCurrentPathEqualTo(e)||o){let s=this.browserPageId,l=b(b({},a),this.generateNgRouterState(r,s));this.location.replaceState(e,"",l)}else{let s=b(b({},a),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:i}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ef(t,n){t.events.pipe(be(e=>e instanceof vn||e instanceof _n||e instanceof vo||e instanceof di),me(e=>e instanceof vn||e instanceof di?0:(e instanceof _n?e.code===kt.Redirect||e.code===kt.SupersededByNewNavigation:!1)?2:1),be(e=>e!==2),ft(1)).subscribe(()=>{n()})}var fi=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(vg);stateManager=d(Ju);options=d(_r,{optional:!0})||{};pendingTasks=d(Mi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(Xu);urlSerializer=d(gr);location=d(li);urlHandlingStrategy=d(Qu);injector=d(Me);_events=new E;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(pE);injectorCleanup=d(hE,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(Do,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(xl,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new se;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=ge(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof _n&&i.code!==kt.Redirect&&i.code!==kt.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof vn)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof Ea){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=b({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||YF(r.source)},a);this.scheduleNavigation(s,ya,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}ZO(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ya,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null;if(r){let l=b({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let s=this.parseUrl(e);this.scheduleNavigation(s,i,a,o).catch(l=>{this.disposed||this.injector.get(Zt)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return ge(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(S_),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=b(b({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let f;try{let h=r?r.snapshot:this.routerState.snapshot.root;f=Uw(h)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return zw(f,e,u,c??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=pr(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,ya,null,i)}navigate(e,i={skipLocationChange:!1}){return QF(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(xn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=b({},Nw):i===!1?r=b({},u_):r=b(b({},u_),i),pr(e))return Cw(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Cw(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,c;a?(s=a.resolve,l=a.reject,c=a.promise):c=new Promise((f,h)=>{s=f,l=h});let u=this.pendingTasks.add();return ef(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function QF(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new M(4008,!1)}var JF=(()=>{class t{router=d(fi);stateManager=d(Ju);fragment=O("");queryParams=O({});path=O("");serializer=d(gr);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof vn&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new tn(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),tf=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=d(new ai("href"),{optional:!0});reactiveHref=Mg(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return ge(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return ge(this._target)}_target=O(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return ge(this._queryParams)}_queryParams=O(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return ge(this._fragment)}_fragment=O(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return ge(this._queryParamsHandling)}_queryParamsHandling=O(void 0);set state(e){this._state.set(e)}get state(){return ge(this._state)}_state=O(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return ge(this._info)}_info=O(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return ge(this._relativeTo)}_relativeTo=O(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return ge(this._preserveFragment)}_preserveFragment=O(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return ge(this._skipLocationChange)}_skipLocationChange=O(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return ge(this._replaceUrl)}_replaceUrl=O(!1);isAnchorElement;onChanges=new E;applicationErrorHandler=d(Zt);options=d(_r,{optional:!0});reactiveRouterState=d(JF);constructor(e,i,r,o,a,s){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=O(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(pr(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||i||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l)?.catch(c=>{this.applicationErrorHandler(c)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=it(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:pr(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return ge(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(de(fi),de(ui),zs("tabindex"),de(Ae),de(R),de(Bn))};static \u0275dir=w({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&ne("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&Z("href",r.reactiveHref(),Gm)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",K],skipLocationChange:[2,"skipLocationChange","skipLocationChange",K],replaceUrl:[2,"replaceUrl","replaceUrl",K],routerLink:"routerLink"},features:[Te]})}return t})();var Sl=class{};var mE=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,i,r,o){this.router=e,this.injector=i,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(be(e=>e instanceof vn),Qi(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,i){let r=[];for(let o of i){o.providers&&!o._injector&&(o._injector=ca(o.providers,e,""));let a=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let s=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(s,o.children??o._loadedRoutes))}return Le(r).pipe(Zi())}preloadConfig(e,i){return this.preloadingStrategy.preload(i,()=>{if(e.destroyed)return W(null);let r;i.loadChildren&&i.canLoad===void 0?r=Le(this.loader.loadChildren(e,i)):r=W(null);let o=r.pipe(wt(a=>a===null?W(void 0):(i._loadedRoutes=a.routes,i._loadedInjector=a.injector,i._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??e,a.routes))));if(i.loadComponent&&!i._loadedComponent){let a=this.loader.loadComponent(e,i);return Le([o,a]).pipe(Zi())}else return o})}static \u0275fac=function(i){return new(i||t)(B(fi),B(Me),B(Sl),B(Ku))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),gE=new y(""),e1=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=ya;restoredId=0;store={};urlSerializer=d(gr);zone=d(P);viewportScroller=d(Gg);transitions=d(Xu);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof mr?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof vn?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof di&&e.code===Da.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Ca)||e.scrollBehavior==="manual")return;let i={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],i):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,i):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,i){let r=ge(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new Ca(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,i,r))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){Zs()};static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();function O_(t,...n){return tr([{provide:Do,multi:!0,useValue:t},[],{provide:ui,useFactory:_E},{provide:Ks,multi:!0,useFactory:vE},n.map(e=>e.\u0275providers)])}function _E(){return d(fi).routerState.root}function Tl(t,n){return{\u0275kind:t,\u0275providers:n}}function vE(){let t=d(j);return n=>{let e=t.get(pn);if(n!==e.components[0])return;let i=t.get(fi),r=t.get(yE);t.get(F_)===1&&i.initialNavigation(),t.get(CE,null,{optional:!0})?.setUpPreloading(),t.get(gE,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var yE=new y("",{factory:()=>new E}),F_=new y("",{factory:()=>1});function bE(){let t=[{provide:Um,useValue:!0},{provide:F_,useValue:0},tu(()=>{let n=d(j);return n.get(Lg,Promise.resolve()).then(()=>new Promise(i=>{let r=n.get(fi),o=n.get(yE);ef(r,()=>{i(!0)}),n.get(Xu).afterPreactivation=()=>(i(!0),o.closed?W(void 0):o),r.initialNavigation()}))})];return Tl(2,t)}function DE(){let t=[tu(()=>{d(fi).setUpLocationChangeListener()}),{provide:F_,useValue:2}];return Tl(3,t)}var CE=new y("");function wE(t){return Tl(0,[{provide:CE,useExisting:mE},{provide:Sl,useExisting:t}])}function EE(){return Tl(8,[x_,{provide:xl,useExisting:x_}])}function IE(t){ri("NgRouterViewTransitions");let n=[{provide:A_,useValue:fE},{provide:R_,useValue:b({skipNextTransition:!!t?.skipInitialTransition},t)}];return Tl(9,n)}var xE=[li,{provide:gr,useClass:Fi},fi,bo,{provide:ui,useFactory:_E},Ku,[]],P_=(()=>{class t{constructor(){}static forRoot(e,i){return{ngModule:t,providers:[xE,[],{provide:Do,multi:!0,useValue:e},[],i?.errorHandler?{provide:k_,useValue:i.errorHandler}:[],{provide:_r,useValue:i||{}},i?.useHash?n1():i1(),t1(),i?.preloadingStrategy?wE(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?r1(i):[],i?.bindToComponentInputs?EE().\u0275providers:[],i?.enableViewTransitions?IE().\u0275providers:[],o1()]}}static forChild(e){return{ngModule:t,providers:[{provide:Do,multi:!0,useValue:e}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({})}return t})();function t1(){return{provide:gE,useFactory:()=>{let t=d(Gg),n=d(_r);return n.scrollOffset&&t.setOffset(n.scrollOffset),new e1(n)}}}function n1(){return{provide:Bn,useClass:Hg}}function i1(){return{provide:Bn,useClass:fu}}function r1(t){return[t.initialNavigation==="disabled"?DE().\u0275providers:[],t.initialNavigation==="enabledBlocking"?bE().\u0275providers:[]]}var N_=new y("");function o1(){return[{provide:N_,useFactory:vE},{provide:Ks,multi:!0,useExisting:N_}]}var nf=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-inicio"]],decls:2,vars:0,template:function(e,i){e&1&&(Re(0,"p"),C(1,"inicio works!"),Oe())},encapsulation:2})};function Al(t){return t.buttons===0||t.detail===0}function Rl(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var L_;function ME(){if(L_==null){let t=typeof document<"u"?document.head:null;L_=!!(t&&(t.createShadowRoot||t.attachShadow))}return L_}function V_(t){if(ME()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function yn(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function St(t){return t.composedPath?t.composedPath()[0]:t.target}var B_;try{B_=typeof Intl<"u"&&Intl.v8BreakIterator}catch{B_=!1}var ue=(()=>{class t{_platformId=d(oo);isBrowser=this._platformId?rw(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||B_)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var kl;function SE(){if(kl==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>kl=!0}))}finally{kl=kl||!1}return kl}function Ta(t){return SE()?t:!!t.capture}function Pi(t,n=0){return TE(t)?Number(t):arguments.length===2?n:0}function TE(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function rn(t){return t instanceof R?t.nativeElement:t}var AE=new y("cdk-input-modality-detector-options"),RE={ignoreKeys:[18,17,224,91,16]},kE=650,j_={passive:!0,capture:!0},NE=(()=>{class t{_platform=d(ue);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Xe(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=St(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<kE||(this._modality.next(Al(e)?"keyboard":"mouse"),this._mostRecentTarget=St(e))};_onTouchstart=e=>{if(Rl(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=St(e)};constructor(){let e=d(P),i=d(H),r=d(AE,{optional:!0});if(this._options=b(b({},RE),r),this.modalityDetected=this._modality.pipe(fs(1)),this.modalityChanged=this.modalityDetected.pipe(jc()),this._platform.isBrowser){let o=d(st).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,j_),o.listen(i,"mousedown",this._onMousedown,j_),o.listen(i,"touchstart",this._onTouchstart,j_)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Nl=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Nl||{}),OE=new y("cdk-focus-monitor-default-options"),rf=Ta({passive:!0,capture:!0}),hi=(()=>{class t{_ngZone=d(P);_platform=d(ue);_inputModalityDetector=d(NE);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(H);_stopInputModalityDetector=new E;constructor(){let e=d(OE,{optional:!0});this._detectionMode=e?.detectionMode||Nl.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=St(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=rn(e);if(!this._platform.isBrowser||r.nodeType!==1)return W();let o=V_(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new E,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=rn(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=rn(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Nl.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===Nl.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?kE:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=St(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,rf),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,rf)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ve(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,rf),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,rf),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),H_=(()=>{class t{_elementRef=d(R);_focusMonitor=d(hi);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new N;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var of=new WeakMap,We=(()=>{class t{_appRef;_injector=d(j);_environmentInjector=d(Me);load(e){let i=this._appRef=this._appRef||this._injector.get(pn),r=of.get(i);r||(r={loaders:new Set,refs:[]},of.set(i,r),i.onDestroy(()=>{of.get(i)?.refs.forEach(o=>o.destroy()),of.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(cu(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var bn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();function Aa(t){return Array.isArray(t)?t:[t]}var FE=new Set,Co,Ra=(()=>{class t{_platform=d(ue);_nonce=d(ao,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):s1}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&a1(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function a1(t,n){if(!FE.has(t))try{Co||(Co=document.createElement("style"),n&&Co.setAttribute("nonce",n),Co.setAttribute("type","text/css"),document.head.appendChild(Co)),Co.sheet&&(Co.sheet.insertRule(`@media ${t} {body{ }}`,0),FE.add(t))}catch(e){console.error(e)}}function s1(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var U_=(()=>{class t{_mediaMatcher=d(Ra);_zone=d(P);_queries=new Map;_destroySubject=new E;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return PE(Aa(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=PE(Aa(e)).map(a=>this._registerQuery(a).observable),o=Zn(r);return o=Ki(o.pipe(ft(1)),o.pipe(fs(1),ds(0))),o.pipe(me(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:c})=>{s.matches=s.matches||l,s.breakpoints[c]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new ie(a=>{let s=l=>this._zone.run(()=>a.next(l));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(ot(i),me(({matches:a})=>({query:e,matches:a})),ve(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function PE(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}var l1=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var af=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({providers:[l1]})}return t})();var G_=(()=>{class t{_platform=d(ue);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return d1(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=c1(v1(e));if(i&&(LE(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=LE(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!g1(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return _1(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function c1(t){try{return t.frameElement}catch{return null}}function d1(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function u1(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function f1(t){return p1(t)&&t.type=="hidden"}function h1(t){return m1(t)&&t.hasAttribute("href")}function p1(t){return t.nodeName.toLowerCase()=="input"}function m1(t){return t.nodeName.toLowerCase()=="a"}function jE(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function LE(t){if(!jE(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function g1(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function _1(t){return f1(t)?!1:u1(t)||h1(t)||t.hasAttribute("contenteditable")||jE(t)}function v1(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var $_=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?Ve(n,{injector:this._injector}):setTimeout(n)}},sf=(()=>{class t{_checker=d(G_);_ngZone=d(P);_document=d(H);_injector=d(j);constructor(){d(We).load(bn)}create(e,i=!1){return new $_(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),W_=(()=>{class t{_elementRef=d(R);_focusTrapFactory=d(sf);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){d(ue).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let i=e.autoCapture;i&&!i.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=yn(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",K],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",K]},exportAs:["cdkTrapFocus"],features:[Te]})}return t})();var vr=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(vr||{}),VE="cdk-high-contrast-black-on-white",BE="cdk-high-contrast-white-on-black",z_="cdk-high-contrast-active",HE=(()=>{class t{_platform=d(ue);_hasCheckedHighContrastMode=!1;_document=d(H);_breakpointSubscription;constructor(){this._breakpointSubscription=d(U_).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return vr.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return vr.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return vr.BLACK_ON_WHITE}return vr.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(z_,VE,BE),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===vr.BLACK_ON_WHITE?e.add(z_,VE):i===vr.WHITE_ON_BLACK&&e.add(z_,BE)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),lf=(()=>{class t{constructor(){d(HE)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({imports:[af]})}return t})();var y1=200,cf=class{_letterKeyStream=new E;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new E;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:y1;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(zt(e=>this._pressedLetters.push(e)),ds(n),be(()=>this._pressedLetters.length>0),me(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function ut(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var ka=class{_items;_activeItemIndex=O(-1);_activeItem=O(null);_wrap=!1;_typeaheadSubscription=se.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof Si?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):oi(n)&&(this._effectRef=Kt(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new E;change=new E;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new cf(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||ut(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return oi(this._items)?this._items():this._items instanceof Si?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var Vl=class extends ka{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var Bl=class extends ka{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var q_={},Ue=class t{_appId=d(cr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),q_.hasOwnProperty(n)||(q_[n]=0),`${n}${e?t._infix+"-":""}${q_[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})};var $E=" ";function b1(t,n,e){let i=hf(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join($E)))}function D1(t,n,e){let i=hf(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join($E)):t.removeAttribute(n)}function hf(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var GE="cdk-describedby-message",ff="cdk-describedby-host",Z_=0,WE=(()=>{class t{_platform=d(ue);_document=d(H);_messageRegistry=new Map;_messagesContainer=null;_id=`${Z_++}`;constructor(){d(We).load(bn),this._id=d(cr)+"-"+Z_++}describe(e,i,r){if(!this._canBeDescribed(e,i))return;let o=Y_(i,r);typeof i!="string"?(zE(i,this._id),this._messageRegistry.set(o,{messageElement:i,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(i,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,i,r){if(!i||!this._isElementNode(e))return;let o=Y_(i,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof i=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${ff}="${this._id}"]`);for(let i=0;i<e.length;i++)this._removeCdkDescribedByReferenceIds(e[i]),e[i].removeAttribute(ff);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,i){let r=this._document.createElement("div");zE(r,this._id),r.textContent=e,i&&r.setAttribute("role",i),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Y_(e,i),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",i=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<i.length;o++)i[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let i=hf(e,"aria-describedby").filter(r=>r.indexOf(GE)!=0);e.setAttribute("aria-describedby",i.join(" "))}_addMessageReference(e,i){let r=this._messageRegistry.get(i);b1(e,"aria-describedby",r.messageElement.id),e.setAttribute(ff,this._id),r.referenceCount++}_removeMessageReference(e,i){let r=this._messageRegistry.get(i);r.referenceCount--,D1(e,"aria-describedby",r.messageElement.id),e.removeAttribute(ff)}_isElementDescribedByMessage(e,i){let r=hf(e,"aria-describedby"),o=this._messageRegistry.get(i),a=o&&o.messageElement.id;return!!a&&r.indexOf(a)!=-1}_canBeDescribed(e,i){if(!this._isElementNode(e))return!1;if(i&&typeof i=="object")return!0;let r=i==null?"":`${i}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Y_(t,n){return typeof t=="string"?`${n||""}/${t}`:t}function zE(t,n){t.id||(t.id=`${GE}-${n}-${Z_++}`)}var Un=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(Un||{}),pf,wo;function mf(){if(wo==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return wo=!1,wo;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)wo=!0;else{let t=Element.prototype.scrollTo;t?wo=!/\{\s*\[native code\]\s*\}/.test(t.toString()):wo=!1}}return wo}function Na(){if(typeof document!="object"||!document)return Un.NORMAL;if(pf==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),pf=Un.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,pf=t.scrollLeft===0?Un.NEGATED:Un.INVERTED),t.remove()}return pf}function K_(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Oa,qE=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Q_(){if(Oa)return Oa;if(typeof document!="object"||!document)return Oa=new Set(qE),Oa;let t=document.createElement("input");return Oa=new Set(qE.filter(n=>(t.setAttribute("type",n),t.type===n))),Oa}var C1=new y("MATERIAL_ANIMATIONS"),YE=null;function X_(){return d(C1,{optional:!0})?.animationsDisabled||d($s,{optional:!0})==="NoopAnimations"?"di-disabled":(YE??=d(Ra).matchMedia("(prefers-reduced-motion)").matches,YE?"reduced-motion":"enabled")}function qe(){return X_()!=="enabled"}function rt(t){return t==null?"":typeof t=="string"?t:`${t}px`}function Li(t){return t!=null&&`${t}`!="false"}function ZE(t,n=/\s+/){let e=[];if(t!=null){let i=Array.isArray(t)?t:`${t}`.split(n);for(let r of i){let o=`${r}`.trim();o&&e.push(o)}}return e}var Dn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Dn||{}),J_=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Dn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},KE=Ta({passive:!0,capture:!0}),ev=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,KE)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,KE)))}_delegateEventHandler=n=>{let e=St(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},jl={enterDuration:225,exitDuration:150},w1=800,QE=Ta({passive:!0,capture:!0}),XE=["mousedown","touchstart"],JE=["mouseup","mouseleave","touchend","touchcancel"],E1=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),Hl=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new ev;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=rn(i)),o&&o.get(We).load(E1)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=b(b({},jl),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||I1(n,e,r),s=n-r.left,l=e-r.top,c=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${l-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,i.color!=null&&(u.style.backgroundColor=i.color),u.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(u);let f=window.getComputedStyle(u),h=f.transitionProperty,p=f.transitionDuration,v=h==="none"||p==="0s"||p==="0s, 0s"||r.width===0&&r.height===0,I=new J_(this,u,i,v);u.style.transform="scale3d(1, 1, 1)",I.state=Dn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=I);let x=null;return!v&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let T=()=>{x&&(x.fallbackTimer=null),clearTimeout(yt),this._finishRippleTransition(I)},_e=()=>this._destroyRipple(I),yt=setTimeout(_e,c+100);u.addEventListener("transitionend",T),u.addEventListener("transitioncancel",_e),x={onTransitionEnd:T,onTransitionCancel:_e,fallbackTimer:yt}}),this._activeRipples.set(I,x),(v||!c)&&this._finishRippleTransition(I),I}fadeOutRipple(n){if(n.state===Dn.FADING_OUT||n.state===Dn.HIDDEN)return;let e=n.element,i=b(b({},jl),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=Dn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=rn(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,XE.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{JE.forEach(e=>{this._triggerElement.addEventListener(e,this,QE)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Dn.FADING_IN?this._startFadeOutTransition(n):n.state===Dn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=Dn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Dn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Al(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+w1;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Rl(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Dn.VISIBLE||n.config.terminateOnPointerUp&&n.state===Dn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(XE.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(JE.forEach(e=>n.removeEventListener(e,this,QE)),this._pointerUpEventsRegistered=!1))}};function I1(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Ul=new y("mat-ripple-global-options"),eI=(()=>{class t{_elementRef=d(R);_animationsDisabled=qe();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=d(P),i=d(ue),r=d(Ul,{optional:!0}),o=d(j);this._globalOptions=r||{},this._rippleRenderer=new Hl(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:b(b(b({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,b(b({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,b(b({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&$("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var x1={capture:!0},M1=["focus","mousedown","mouseenter","touchstart"],tv="mat-ripple-loader-uninitialized",nv="mat-ripple-loader-class-name",tI="mat-ripple-loader-centered",gf="mat-ripple-loader-disabled",_f=(()=>{class t{_document=d(H);_animationsDisabled=qe();_globalRippleOptions=d(Ul,{optional:!0});_platform=d(ue);_ngZone=d(P);_injector=d(j);_eventCleanups;_hosts=new Map;constructor(){let e=d(st).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>M1.map(i=>e.listen(this._document,i,this._onInteraction,x1)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(tv,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(nv))&&e.setAttribute(nv,i.className||""),i.centered&&e.setAttribute(tI,""),i.disabled&&e.setAttribute(gf,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(gf,""):e.removeAttribute(gf)}_onInteraction=e=>{let i=St(e);if(i instanceof HTMLElement){let r=i.closest(`[${tv}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(nv)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??jl.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??jl.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(gf),rippleConfig:{centered:e.hasAttribute(tI),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new Hl(s,this._ngZone,i,this._platform,this._injector),c=!s.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:c}),e.removeAttribute(tv)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Vi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var S1=["mat-icon-button",""],T1=["*"],A1=new y("MAT_BUTTON_CONFIG");function nI(t){return t==null?void 0:si(t)}var iv=(()=>{class t{_elementRef=d(R);_ngZone=d(P);_animationsDisabled=qe();_config=d(A1,{optional:!0});_focusMonitor=d(hi);_cleanupClick;_renderer=d(Ae);_rippleLoader=d(_f);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){d(We).load(Vi);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(Z("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),xt(r.color?"mat-"+r.color:""),$("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",K],disabled:[2,"disabled","disabled",K],ariaDisabled:[2,"aria-disabled","ariaDisabled",K],disabledInteractive:[2,"disabledInteractive","disabledInteractive",K],tabIndex:[2,"tabIndex","tabIndex",nI],_tabindex:[2,"tabindex","_tabindex",nI]}})}return t})(),Fa=(()=>{class t extends iv{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[te],attrs:S1,ngContentSelectors:T1,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ke(),Vt(0,"span",0),X(1),Vt(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var R1=new y("cdk-dir-doc",{providedIn:"root",factory:()=>d(H)}),k1=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function iI(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?k1.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Ye=(()=>{class t{get value(){return this.valueSignal()}valueSignal=O("ltr");change=new N;constructor(){let e=d(R1,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(iI(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ie=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({})}return t})();var vf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({imports:[Ie]})}return t})();var N1=["matButton",""],O1=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],F1=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var rI=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),on=(()=>{class t extends iv{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=P1(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?rI.get(this._appearance):null,o=rI.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[te],attrs:N1,ngContentSelectors:F1,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ke(O1),Vt(0,"span",0),X(1),Re(2,"span",1),X(3,1),Oe(),X(4,2),Vt(5,"span",2)(6,"span",3)),i&2&&$("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function P1(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var Cn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({imports:[vf,Ie]})}return t})();var L1=["*"];var V1=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],B1=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],j1=new y("MAT_CARD_CONFIG"),oI=(()=>{class t{appearance;constructor(){let e=d(j1,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&$("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:L1,decls:1,vars:0,template:function(i,r){i&1&&(ke(),X(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})(),aI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var sI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var lI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:B1,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(ke(V1),X(0),Re(1,"div",0),X(2,1),Oe(),X(3,2))},encapsulation:2,changeDetection:0})}return t})(),cI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["mat-card-footer"]],hostAttrs:[1,"mat-mdc-card-footer"]})}return t})();var dI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({imports:[Ie]})}return t})();var vI=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(de(Ae),de(R))};static \u0275dir=w({type:t})}return t})(),yI=(()=>{class t extends vI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275dir=w({type:t,features:[te]})}return t})(),Eo=new y("");var U1={provide:Eo,useExisting:Ot(()=>Sf),multi:!0};function z1(){let t=mn()?mn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var $1=new y(""),Sf=(()=>{class t extends vI{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!z1())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(de(Ae),de(R),de($1,8))};static \u0275dir=w({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&ne("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[pe([U1]),te]})}return t})();function lv(t){return t==null||cv(t)===0}function cv(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Io=new y(""),dv=new y(""),G1=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,wn=class{static min(n){return W1(n)}static max(n){return q1(n)}static required(n){return Y1(n)}static requiredTrue(n){return Z1(n)}static email(n){return K1(n)}static minLength(n){return Q1(n)}static maxLength(n){return X1(n)}static pattern(n){return J1(n)}static nullValidator(n){return bI()}static compose(n){return xI(n)}static composeAsync(n){return MI(n)}};function W1(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function q1(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function Y1(t){return lv(t.value)?{required:!0}:null}function Z1(t){return t.value===!0?null:{required:!0}}function K1(t){return lv(t.value)||G1.test(t.value)?null:{email:!0}}function Q1(t){return n=>{let e=n.value?.length??cv(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function X1(t){return n=>{let e=n.value?.length??cv(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function J1(t){if(!t)return bI;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(lv(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function bI(t){return null}function DI(t){return t!=null}function CI(t){return dr(t)?Le(t):t}function wI(t){let n={};return t.forEach(e=>{n=e!=null?b(b({},n),e):n}),Object.keys(n).length===0?null:n}function EI(t,n){return n.map(e=>e(t))}function eP(t){return!t.validate}function II(t){return t.map(n=>eP(n)?n:e=>n.validate(e))}function xI(t){if(!t)return null;let n=t.filter(DI);return n.length==0?null:function(e){return wI(EI(e,n))}}function uv(t){return t!=null?xI(II(t)):null}function MI(t){if(!t)return null;let n=t.filter(DI);return n.length==0?null:function(e){let i=EI(e,n).map(CI);return Gh(i).pipe(me(wI))}}function fv(t){return t!=null?MI(II(t)):null}function uI(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function SI(t){return t._rawValidators}function TI(t){return t._rawAsyncValidators}function rv(t){return t?Array.isArray(t)?t:[t]:[]}function Df(t,n){return Array.isArray(t)?t.includes(n):t===n}function fI(t,n){let e=rv(n);return rv(t).forEach(r=>{Df(e,r)||e.push(r)}),e}function hI(t,n){return rv(n).filter(e=>!Df(t,e))}var Cf=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=uv(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=fv(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Bi=class extends Cf{name;get formDirective(){return null}get path(){return null}},Dr=class extends Cf{_parent=null;name=null;valueAccessor=null},wf=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var AI=(()=>{class t extends wf{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(de(Dr,2))};static \u0275dir=w({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&$("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[te]})}return t})(),RI=(()=>{class t extends wf{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(de(Bi,10))};static \u0275dir=w({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&$("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[te]})}return t})();var $l="VALID",yf="INVALID",Pa="PENDING",Gl="DISABLED",Cr=class{},Ef=class extends Cr{value;source;constructor(n,e){super(),this.value=n,this.source=e}},ql=class extends Cr{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Yl=class extends Cr{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},La=class extends Cr{status;source;constructor(n,e){super(),this.status=n,this.source=e}},If=class extends Cr{source;constructor(n){super(),this.source=n}},Zl=class extends Cr{source;constructor(n){super(),this.source=n}};function hv(t){return(Tf(t)?t.validators:t)||null}function tP(t){return Array.isArray(t)?uv(t):t||null}function pv(t,n){return(Tf(n)?n.asyncValidators:t)||null}function nP(t){return Array.isArray(t)?fv(t):t||null}function Tf(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function kI(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new M(1e3,"");if(!i[e])throw new M(1001,"")}function NI(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new M(-1002,"")})}var Va=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return ge(this.statusReactive)}set status(n){ge(()=>this.statusReactive.set(n))}_status=it(()=>this.statusReactive());statusReactive=O(void 0);get valid(){return this.status===$l}get invalid(){return this.status===yf}get pending(){return this.status===Pa}get disabled(){return this.status===Gl}get enabled(){return this.status!==Gl}errors;get pristine(){return ge(this.pristineReactive)}set pristine(n){ge(()=>this.pristineReactive.set(n))}_pristine=it(()=>this.pristineReactive());pristineReactive=O(!0);get dirty(){return!this.pristine}get touched(){return ge(this.touchedReactive)}set touched(n){ge(()=>this.touchedReactive.set(n))}_touched=it(()=>this.touchedReactive());touchedReactive=O(!1);get untouched(){return!this.touched}_events=new E;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(fI(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(fI(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(hI(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(hI(n,this._rawAsyncValidators))}hasValidator(n){return Df(this._rawValidators,n)}hasAsyncValidator(n){return Df(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(Y(b({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Yl(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new Yl(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(Y(b({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new ql(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new ql(!0,i))}markAsPending(n={}){this.status=Pa;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new La(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(Y(b({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Gl,this.errors=null,this._forEachChild(r=>{r.disable(Y(b({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ef(this.value,i)),this._events.next(new La(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Y(b({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=$l,this._forEachChild(i=>{i.enable(Y(b({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(Y(b({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===$l||this.status===Pa)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ef(this.value,e)),this._events.next(new La(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(Y(b({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Gl:$l}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Pa,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=CI(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new La(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new N,this.statusChanges=new N}_calculateStatus(){return this._allControlsDisabled()?Gl:this.errors?yf:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Pa)?Pa:this._anyControlsHaveStatus(yf)?yf:$l}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new ql(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Yl(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Tf(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=tP(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=nP(this._rawAsyncValidators)}},Ba=class extends Va{constructor(n,e,i){super(hv(e),pv(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){NI(this,!0,n),Object.keys(n).forEach(i=>{kI(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,Y(b({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Zl(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var ov=class extends Ba{};var Af=new y("",{factory:()=>Rf}),Rf="always";function iP(t,n){return[...n.path,t]}function av(t,n,e=Rf){mv(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),oP(t,n),sP(t,n),aP(t,n),rP(t,n)}function pI(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),Mf(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function xf(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function rP(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function mv(t,n){let e=SI(t);n.validator!==null?t.setValidators(uI(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=TI(t);n.asyncValidator!==null?t.setAsyncValidators(uI(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();xf(n._rawValidators,r),xf(n._rawAsyncValidators,r)}function Mf(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=SI(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=TI(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return xf(n._rawValidators,i),xf(n._rawAsyncValidators,i),e}function oP(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&OI(t,n)})}function aP(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&OI(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function OI(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function sP(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function FI(t,n){t==null,mv(t,n)}function lP(t,n){return Mf(t,n)}function cP(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function dP(t){return Object.getPrototypeOf(t.constructor)===yI}function PI(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function uP(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===Sf?e=o:dP(o)?i=o:r=o}),r||i||e||null}function fP(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var hP={provide:Bi,useExisting:Ot(()=>kf)},Wl=Promise.resolve(),kf=(()=>{class t extends Bi{callSetDisabledState;get submitted(){return ge(this.submittedReactive)}_submitted=it(()=>this.submittedReactive());submittedReactive=O(!1);_directives=new Set;form;ngSubmit=new N;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new Ba({},uv(e),fv(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Wl.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),av(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Wl.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Wl.then(()=>{let i=this._findContainer(e.path),r=new Ba({});FI(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Wl.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Wl.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),PI(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new If(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(de(Io,10),de(dv,10),de(Af,8))};static \u0275dir=w({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&ne("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[pe([hP]),te]})}return t})();function mI(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function gI(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var bf=class extends Va{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(hv(e),pv(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Tf(e)&&(e.nonNullable||e.initialValueIsDefault)&&(gI(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Zl(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){mI(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){mI(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){gI(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var pP=t=>t instanceof bf;var LI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})(),mP={provide:Eo,useExisting:Ot(()=>gv),multi:!0},gv=(()=>{class t extends yI{writeValue(e){let i=e??"";this.setProperty("value",i)}registerOnChange(e){this.onChange=i=>{e(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,r){i&1&&ne("input",function(a){return r.onChange(a.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[pe([mP]),te]})}return t})();var sv=class extends Va{constructor(n,e,i){super(hv(e),pv(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,e={}){Array.isArray(n)?n.forEach(i=>{this.controls.push(i),this._registerControl(i)}):(this.controls.push(n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,i={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(n,e={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,i={}){let r=this._adjustIndex(n);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){NI(this,!1,n),n.forEach((i,r)=>{kI(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(n.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((i,r)=>{i.reset(n[r],Y(b({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Zl(this))}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((e,i)=>i._syncPendingControls()?!0:e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((e,i)=>{n(e,i)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};var gP=(()=>{class t extends Bi{callSetDisabledState;get submitted(){return ge(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=it(()=>this._submittedReactive());_submittedReactive=O(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Mf(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return av(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){pI(e.control||null,e,!1),fP(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,PI(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new If(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(pI(i||null,e),pP(r)&&(av(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);FI(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&lP(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){mv(this.form,this),this._oldForm&&Mf(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(de(Io,10),de(dv,10),de(Af,8))};static \u0275dir=w({type:t,features:[te,Te]})}return t})();var VI=new y("");var _P={provide:Dr,useExisting:Ot(()=>_v)},_v=(()=>{class t extends Dr{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new N;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=uP(this,o)}ngOnChanges(e){this._added||this._setUpControl(),cP(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return iP(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||t)(de(Bi,13),de(Io,10),de(dv,10),de(Eo,10),de(VI,8))};static \u0275dir=w({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[pe([_P]),te,Te]})}return t})();var vP={provide:Bi,useExisting:Ot(()=>ja)},ja=(()=>{class t extends gP{form=null;ngSubmit=new N;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&ne("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[pe([vP]),te]})}return t})();var BI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({})}return t})();function _I(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var jI=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,i=null){let r=this._reduceControls(e),o={};return _I(i)?o=i:i!==null&&(o.validators=i.validator,o.asyncValidators=i.asyncValidator),new Ba(r,o)}record(e,i=null){let r=this._reduceControls(e);return new ov(r,i)}control(e,i,r){let o={};return this.useNonNullable?(_I(i)?o=i:(o.validators=i,o.asyncValidators=r),new bf(e,Y(b({},o),{nonNullable:!0}))):new bf(e,i,r)}array(e,i,r){let o=e.map(a=>this._createControl(a));return new sv(o,i,r)}_reduceControls(e){let i={};return Object.keys(e).forEach(r=>{i[r]=this._createControl(e[r])}),i}_createControl(e){if(e instanceof bf)return e;if(e instanceof Va)return e;if(Array.isArray(e)){let i=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(i,r,o)}else return this.control(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var HI=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Af,useValue:e.callSetDisabledState??Rf}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({imports:[BI]})}return t})(),UI=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:VI,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Af,useValue:e.callSetDisabledState??Rf}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({imports:[BI]})}return t})();var Nf=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Of=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var vv=class{_box;_destroyed=new E;_resizeSubject=new E;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new ie(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(be(e=>e.some(i=>i.target===n)),zc({bufferSize:1,refCount:!0}),ve(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},zI=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=d(P);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new vv(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var bP=["notch"],DP=["matFormFieldNotchedOutline",""],CP=["*"],$I=["iconPrefixContainer"],GI=["textPrefixContainer"],WI=["iconSuffixContainer"],qI=["textSuffixContainer"],wP=["textField"],EP=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],IP=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function xP(t,n){t&1&&A(0,"span",21)}function MP(t,n){if(t&1&&(g(0,"label",20),X(1,1),fe(2,xP,1,0,"span",21),m()),t&2){let e=J(2);k("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),Z("for",e._control.disableAutomaticLabeling?null:e._control.id),_(2),he(!e.hideRequiredMarker&&e._control.required?2:-1)}}function SP(t,n){if(t&1&&fe(0,MP,3,5,"label",20),t&2){let e=J();he(e._hasFloatingLabel()?0:-1)}}function TP(t,n){t&1&&A(0,"div",7)}function AP(t,n){}function RP(t,n){if(t&1&&Ce(0,AP,0,0,"ng-template",13),t&2){J(2);let e=gt(1);k("ngTemplateOutlet",e)}}function kP(t,n){if(t&1&&(g(0,"div",9),fe(1,RP,1,1,null,13),m()),t&2){let e=J();k("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),_(),he(e._forceDisplayInfixLabel()?-1:1)}}function NP(t,n){t&1&&(g(0,"div",10,2),X(2,2),m())}function OP(t,n){t&1&&(g(0,"div",11,3),X(2,3),m())}function FP(t,n){}function PP(t,n){if(t&1&&Ce(0,FP,0,0,"ng-template",13),t&2){J();let e=gt(1);k("ngTemplateOutlet",e)}}function LP(t,n){t&1&&(g(0,"div",14,4),X(2,4),m())}function VP(t,n){t&1&&(g(0,"div",15,5),X(2,5),m())}function BP(t,n){t&1&&A(0,"div",16)}function jP(t,n){t&1&&(g(0,"div",18),X(1,6),m())}function HP(t,n){if(t&1&&(g(0,"mat-hint",22),C(1),m()),t&2){let e=J(2);k("id",e._hintLabelId),_(),Mt(e.hintLabel)}}function UP(t,n){if(t&1&&(g(0,"div",19),fe(1,HP,2,2,"mat-hint",22),X(2,7),A(3,"div",23),X(4,8),m()),t&2){let e=J();_(),he(e.hintLabel?1:-1)}}var Kl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["mat-label"]]})}return t})(),zP=new y("MatError");var yv=(()=>{class t{align="start";id=d(Ue).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(Qe("id",r.id),Z("align",null),$("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),$P=new y("MatPrefix");var ex=new y("MatSuffix"),bv=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[pe([{provide:ex,useExisting:t}])]})}return t})(),tx=new y("FloatingLabelParent"),YI=(()=>{class t{_elementRef=d(R);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=d(zI);_ngZone=d(P);_parent=d(tx);_resizeSubscription=new se;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return GP(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&$("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function GP(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var ZI="mdc-line-ripple--active",Ff="mdc-line-ripple--deactivating",KI=(()=>{class t{_elementRef=d(R);_cleanupTransitionEnd;constructor(){let e=d(P),i=d(Ae);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ff),e.add(ZI)}deactivate(){this._elementRef.nativeElement.classList.add(Ff)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Ff);e.propertyName==="opacity"&&r&&i.remove(ZI,Ff)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),QI=(()=>{class t{_elementRef=d(R);_ngZone=d(P);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Ge(bP,5),i&2){let o;U(o=z())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&$("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:DP,ngContentSelectors:CP,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(ke(),Vt(0,"div",1),Re(1,"div",2,0),X(3),Oe(),Vt(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),Pf=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t})}return t})();var xo=new y("MatFormField"),WP=new y("MAT_FORM_FIELD_DEFAULT_OPTIONS"),XI="fill",qP="auto",JI="fixed",YP="translateY(-50%)",Lf=(()=>{class t{_elementRef=d(R);_changeDetectorRef=d(we);_platform=d(ue);_idGenerator=d(Ue);_ngZone=d(P);_defaults=d(WP,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=fo("iconPrefixContainer");_textPrefixContainerSignal=fo("textPrefixContainer");_iconSuffixContainerSignal=fo("iconSuffixContainer");_textSuffixContainerSignal=fo("textSuffixContainer");_prefixSuffixContainers=it(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=N0(Kl);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Li(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||qP}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||XI;this._appearanceSignal.set(i)}_appearanceSignal=O(XI);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||JI}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||JI}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new E;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=qe();constructor(){let e=this._defaults,i=d(Ye);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Kt(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=it(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(ot([void 0,void 0]),me(()=>[i.errorState,i.userAriaDescribedBy]),Uc(),be(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(ve(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),ln(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){V0({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=it(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",f=`${a+s}px`,p=`calc(${u} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,v=`var(--mat-mdc-form-field-label-transform, ${YP} translateX(${p}))`,I=a+s+l+c;return[v,I]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(nu(o,r._labelChild,Kl,5),Ht(o,Pf,5)(o,$P,5)(o,ex,5)(o,zP,5)(o,yv,5)),i&2){fa();let a;U(a=z())&&(r._formFieldControl=a.first),U(a=z())&&(r._prefixChildren=a),U(a=z())&&(r._suffixChildren=a),U(a=z())&&(r._errorChildren=a),U(a=z())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(ua(r._iconPrefixContainerSignal,$I,5)(r._textPrefixContainerSignal,GI,5)(r._iconSuffixContainerSignal,WI,5)(r._textSuffixContainerSignal,qI,5),Ge(wP,5)($I,5)(GI,5)(WI,5)(qI,5)(YI,5)(QI,5)(KI,5)),i&2){fa(4);let o;U(o=z())&&(r._textField=o.first),U(o=z())&&(r._iconPrefixContainer=o.first),U(o=z())&&(r._textPrefixContainer=o.first),U(o=z())&&(r._iconSuffixContainer=o.first),U(o=z())&&(r._textSuffixContainer=o.first),U(o=z())&&(r._floatingLabel=o.first),U(o=z())&&(r._notchedOutline=o.first),U(o=z())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&$("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[pe([{provide:xo,useExisting:t},{provide:tx,useExisting:t}])],ngContentSelectors:IP,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(ke(EP),Ce(0,SP,1,1,"ng-template",null,0,lo),g(2,"div",6,1),ne("click",function(a){return r._control.onContainerClick(a)}),fe(4,TP,1,0,"div",7),g(5,"div",8),fe(6,kP,2,2,"div",9),fe(7,NP,3,0,"div",10),fe(8,OP,3,0,"div",11),g(9,"div",12),fe(10,PP,1,1,null,13),X(11),m(),fe(12,LP,3,0,"div",14),fe(13,VP,3,0,"div",15),m(),fe(14,BP,1,0,"div",16),m(),g(15,"div",17),fe(16,jP,2,0,"div",18)(17,UP,5,1,"div",19),m()),i&2){let o;_(2),$("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),_(2),he(!r._hasOutline()&&!r._control.disabled?4:-1),_(2),he(r._hasOutline()?6:-1),_(),he(r._hasIconPrefix?7:-1),_(),he(r._hasTextPrefix?8:-1),_(2),he(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),_(2),he(r._hasTextSuffix?12:-1),_(),he(r._hasIconSuffix?13:-1),_(),he(r._hasOutline()?-1:14),_(),$("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();_(),he((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[YI,QI,al,KI,yv],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var KP=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],QP=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function XP(t,n){t&1&&(g(0,"span",3),X(1,1),m())}function JP(t,n){t&1&&(g(0,"span",6),X(1,2),m())}var eL=["*"];var tL=new y("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),nx=new y("MatChipAvatar"),ix=new y("MatChipTrailingIcon"),rx=new y("MatChipEdit"),ox=new y("MatChipRemove"),ax=new y("MatChip"),sx=(()=>{class t{_elementRef=d(R);_parentChip=d(ax);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){d(We).load(Vi),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(i,r){i&2&&(Z("disabled",r._getDisabledAttribute())("aria-disabled",r.disabled),$("mdc-evolution-chip__action--primary",r._isPrimary)("mdc-evolution-chip__action--secondary",!r._isPrimary)("mdc-evolution-chip__action--trailing",!r._isPrimary&&!r._isLeading))},inputs:{disabled:[2,"disabled","disabled",K],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:si(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return t})(),nL=(()=>{class t extends sx{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(i,r){i&1&&ne("click",function(a){return r._handleClick(a)})("keydown",function(a){return r._handleKeydown(a)}),i&2&&(Z("tabindex",r._getTabindex()),$("mdc-evolution-chip__action--presentational",!1))},features:[te]})}return t})();var iL=(()=>{class t{_changeDetectorRef=d(we);_elementRef=d(R);_tagName=d(R0);_ngZone=d(P);_focusMonitor=d(hi);_globalRippleOptions=d(Ul,{optional:!0});_document=d(H);_onFocus=new E;_onBlur=new E;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=qe();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=d(Ue).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new N;destroyed=new N;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=d(_f);_injector=d(j);constructor(){let e=d(We);e.load(Vi),e.load(bn),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=ln(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(i=>{let r=i._elementRef.nativeElement;return r===e||r.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let i=e!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(i,r,o){if(i&1&&Ht(o,nx,5)(o,rx,5)(o,ix,5)(o,ox,5)(o,nx,5)(o,ix,5)(o,rx,5)(o,ox,5),i&2){let a;U(a=z())&&(r.leadingIcon=a.first),U(a=z())&&(r.editIcon=a.first),U(a=z())&&(r.trailingIcon=a.first),U(a=z())&&(r.removeIcon=a.first),U(a=z())&&(r._allLeadingIcons=a),U(a=z())&&(r._allTrailingIcons=a),U(a=z())&&(r._allEditIcons=a),U(a=z())&&(r._allRemoveIcons=a)}},viewQuery:function(i,r){if(i&1&&Ge(nL,5),i&2){let o;U(o=z())&&(r.primaryAction=o.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(i,r){i&1&&ne("keydown",function(a){return r._handleKeydown(a)}),i&2&&(Qe("id",r.id),Z("role",r.role)("aria-label",r.ariaLabel),xt("mat-"+(r.color||"primary")),$("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",r.leadingIcon)("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-basic-chip",r._isBasicChip)("mat-mdc-standard-chip",!r._isBasicChip)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon())("_mat-animation-noopable",r._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",K],highlighted:[2,"highlighted","highlighted",K],disableRipple:[2,"disableRipple","disableRipple",K],disabled:[2,"disabled","disabled",K]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[pe([{provide:ax,useExisting:t}])],ngContentSelectors:QP,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(i,r){i&1&&(ke(KP),A(0,"span",0),g(1,"span",1)(2,"span",2),fe(3,XP,2,0,"span",3),g(4,"span",4),X(5),A(6,"span",5),m()()(),fe(7,JP,2,0,"span",6)),i&2&&(_(3),he(r.leadingIcon?3:-1),_(4),he(r._hasTrailingIcon()?7:-1))},dependencies:[sx],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var lx=(()=>{class t{_elementRef=d(R);_changeDetectorRef=d(we);_dir=d(Ye,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new E;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Si;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(ot(null),Et(()=>ln(...this._chips.map(e))))}_originatesFromChip(e){let i=e.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains("mat-mdc-chip"))return!0;i=i.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(ot(this._chips)).subscribe(e=>{let i=[];e.forEach(r=>r._getActions().forEach(o=>i.push(o))),this._chipActions.reset(i),this._chipActions.notifyOnChanges()}),this._keyManager=new Bl(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(ve(this._destroyed)).subscribe(({chip:e})=>{let i=e._getSourceAction(document.activeElement);i&&this._keyManager.updateActiveItem(i)}),this._dir?.change.pipe(ve(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(ot(null),ve(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(ve(this._destroyed)).subscribe(e=>{let r=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),a=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),s=o||a;this._isValidIndex(r)&&s&&(this._lastDestroyedFocusedChipIndex=r)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),i=this._chips.toArray()[e];i.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():i.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-chip-set"]],contentQueries:function(i,r,o){if(i&1&&Ht(o,iL,5),i&2){let a;U(a=z())&&(r._chips=a)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(i,r){i&1&&ne("keydown",function(a){return r._handleKeydown(a)}),i&2&&Z("role",r.role)},inputs:{disabled:[2,"disabled","disabled",K],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:si(e)]},ngContentSelectors:eL,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(i,r){i&1&&(ke(),Re(0,"div",0),X(1),Oe())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var cx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({providers:[Nf,{provide:tL,useValue:{separatorKeyCodes:[13]}}],imports:[vf,Ie]})}return t})();var Vf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({imports:[Ie]})}return t})();var Bf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({imports:[Ie]})}return t})();var dx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({imports:[Ie]})}return t})();function jf(t){return t&&typeof t.connect=="function"&&!(t instanceof os)}var zn=(function(t){return t[t.REPLACED=0]="REPLACED",t[t.INSERTED=1]="INSERTED",t[t.MOVED=2]="MOVED",t[t.REMOVED=3]="REMOVED",t})(zn||{}),Hf=class{viewCacheSize=20;_viewCache=[];applyChanges(n,e,i,r,o){n.forEachOperation((a,s,l)=>{let c,u;if(a.previousIndex==null){let f=()=>i(a,s,l);c=this._insertView(f,l,e,r(a)),u=c?zn.INSERTED:zn.REPLACED}else l==null?(this._detachAndCacheView(s,e),u=zn.REMOVED):(c=this._moveView(s,l,e,r(a)),u=zn.MOVED);o&&o({context:c?.context,operation:u,record:a})})}detach(){for(let n of this._viewCache)n.destroy();this._viewCache=[]}_insertView(n,e,i,r){let o=this._insertViewFromCache(e,i);if(o){o.context.$implicit=r;return}let a=n();return i.createEmbeddedView(a.templateRef,a.context,a.index)}_detachAndCacheView(n,e){let i=e.detach(n);this._maybeCacheView(i,e)}_moveView(n,e,i,r){let o=i.get(n);return i.move(o,e),o.context.$implicit=r,o}_maybeCacheView(n,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(n);else{let i=e.indexOf(n);i===-1?n.destroy():e.remove(i)}}_insertViewFromCache(n,e){let i=this._viewCache.pop();return i&&e.insert(i,n),i||null}};var oL=20,So=(()=>{class t{_ngZone=d(P);_platform=d(ue);_renderer=d(st).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new E;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=oL){return this._platform.isBrowser?new ie(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Ho(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):W()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(be(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=rn(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Dv=(()=>{class t{elementRef=d(R);scrollDispatcher=d(So);ngZone=d(P);dir=d(Ye,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new E;_renderer=d(Ae);_cleanupScroll;_elementScrolled=new E;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&Na()!=Un.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),Na()==Un.INVERTED?e.left=e.right:Na()==Un.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;mf()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:i:e=="end"&&(e=a?i:r),a&&Na()==Un.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&Na()==Un.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),aL=20,wr=(()=>{class t{_platform=d(ue);_listeners;_viewportSize=null;_change=new E;_document=d(H);constructor(){let e=d(P),i=d(st).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=aL){return e>0?this._change.pipe(Ho(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ux=new y("CDK_VIRTUAL_SCROLL_VIEWPORT");var Mo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({})}return t})(),Ql=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({imports:[Ie,Mo,Ie,Mo]})}return t})();var Xl=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},$n=class extends Xl{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},Hi=class extends Xl{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Cv=class extends Xl{element;constructor(n){super(),this.element=n instanceof R?n.nativeElement:n}},Ha=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof $n)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Hi)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Cv)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Uf=class extends Ha{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(ii,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||j.NULL,o=r.get(Me,i.injector);e=cu(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var Er=(()=>{class t extends Ha{_moduleRef=d(ii,{optional:!0});_document=d(H);_viewContainerRef=d($e);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new N;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[te]})}return t})(),Ua=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({})}return t})();var fx=mf();function xr(t){return new zf(t.get(wr),t.get(H))}var zf=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=rt(-this._previousScrollPosition.left),n.style.top=rt(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),fx&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),fx&&(i.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function yx(t,n){return new $f(t.get(So),t.get(P),t.get(wr),n)}var $f=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(be(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Jl=class{enable(){}disable(){}attach(){}};function wv(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return i||r||o||a})}function hx(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return i||r||o||a})}function Mr(t,n){return new Gf(t.get(So),t.get(wr),t.get(P),n)}var Gf=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();wv(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},bx=(()=>{class t{_injector=d(j);constructor(){}noop=()=>new Jl;close=e=>yx(this._injector,e);block=()=>xr(this._injector);reposition=e=>Mr(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ir=class{positionStrategy;scrollStrategy=new Jl;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var Wf=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var Dx=(()=>{class t{_attachedOverlays=[];_document=d(H);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Cx=(()=>{class t extends Dx{_ngZone=d(P);_renderer=d(st).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),wx=(()=>{class t extends Dx{_platform=d(ue);_ngZone=d(P);_renderer=d(st).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=St(e)};_clickListener=e=>{let i=St(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(px(s.overlayElement,i)||px(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function px(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var Ex=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),Yf=(()=>{class t{_platform=d(ue);_containerElement;_document=d(H);_styleLoader=d(We);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||K_()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),K_()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(Ex)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ev=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Iv(t){return t&&t.nodeType===1}var za=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new E;_attachments=new E;_detachments=new E;_positionStrategy;_scrollStrategy;_locationChanges=se.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new E;_outsidePointerEvents=new E;_afterNextRenderRef;constructor(n,e,i,r,o,a,s,l,c,u=!1,f,h){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=u,this._injector=f,this._renderer=h,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ve(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=b(b({},this._config),n),this._updateElementSize()}setDirection(n){this._config=Y(b({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=rt(this._config.width),n.height=rt(this._config.height),n.minWidth=rt(this._config.minWidth),n.minHeight=rt(this._config.minHeight),n.maxWidth=rt(this._config.maxWidth),n.maxHeight=rt(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Iv(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Ev(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=Aa(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Ve(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},mx="cdk-overlay-connected-position-bounding-box",lL=/([A-Za-z%]+)$/;function Sr(t,n){return new $a(n,t.get(wr),t.get(H),t.get(ue),t.get(Yf))}var $a=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new E;_resizeSubscription=se.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(mx),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(n,r,s),c=this._getOverlayPoint(l,e,s),u=this._getOverlayFit(c,e,i,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(u,c,i)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:c,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let c of o){let u=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);u>l&&(l=u,s=c)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&To(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(mx),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof R?this._origin.nativeElement:Iv(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=i.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=_x(e),{x:a,y:s}=n,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(a+=l),c&&(s+=c);let u=0-a,f=a+o.width-i.width,h=0-s,p=s+o.height-i.height,v=this._subtractOverflows(o.width,u,f),I=this._subtractOverflows(o.height,h,p),x=v*I;return{visibleArea:x,isCompletelyWithinViewport:o.width*o.height===x,fitsInViewportVertically:I===o.height,fitsInViewportHorizontally:v==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,a=gx(this._overlayRef.getConfig().minHeight),s=gx(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||a!=null&&a<=r,c=n.fitsInViewportHorizontally||s!=null&&s<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=_x(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-i.top-n.y,0),c=Math.max(o.left-i.left-n.x,0),u=0,f=0;return r.width<=o.width?u=c||-a:u=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?f=l||-s:f=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:u,y:f},{x:n.x+u,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!cL(this._lastScrollVisibility,i)){let r=new Wf(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-s+this._getViewportMarginTop();else{let p=Math.min(i.bottom-n.y+i.top,n.y),v=this._lastBoundingBoxSize.height;o=p*2,a=n.y-p,o>v&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-v/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,c=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,f,h;if(c)h=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=n.x-this._getViewportMarginStart();else if(l)f=n.x,u=i.right-n.x-this._getViewportMarginEnd();else{let p=Math.min(i.right-n.x+i.left,n.x),v=this._lastBoundingBoxSize.width;u=p*2,f=n.x-p,u>v&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-v/2)}return{top:a,left:f,bottom:s,right:h,width:u,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=rt(i.width),r.height=rt(i.height),r.top=rt(i.top)||"auto",r.bottom=rt(i.bottom)||"auto",r.left=rt(i.left)||"auto",r.right=rt(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=rt(o)),a&&(r.maxWidth=rt(a))}this._lastBoundingBoxSize=i,To(this._boundingBox.style,r)}_resetBoundingBoxStyles(){To(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){To(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();To(i,this._getExactOverlayY(e,n,u)),To(i,this._getExactOverlayX(e,n,u))}else i.position="static";let s="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),c&&(s+=`translateY(${c}px)`),i.transform=s.trim(),a.maxHeight&&(r?i.maxHeight=rt(a.maxHeight):o&&(i.maxHeight="")),a.maxWidth&&(r?i.maxWidth=rt(a.maxWidth):o&&(i.maxWidth="")),To(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=rt(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=rt(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:hx(n,i),isOriginOutsideView:wv(n,i),isOverlayClipped:hx(e,i),isOverlayOutsideView:wv(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Aa(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof R)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function To(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function gx(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(lL);return!e||e==="px"?parseFloat(n):null}return t||null}function _x(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function cL(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var vx="cdk-global-overlay-wrapper";function Tr(t){return new qf}var qf=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(vx),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=i,l=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),c=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),u=this._xPosition,f=this._xOffset,h=this._overlayRef.getConfig().direction==="rtl",p="",v="",I="";l?I="flex-start":u==="center"?(I="center",h?v=f:p=f):h?u==="left"||u==="end"?(I="flex-end",p=f):(u==="right"||u==="start")&&(I="flex-start",v=f):u==="left"||u==="start"?(I="flex-start",p=f):(u==="right"||u==="end")&&(I="flex-end",v=f),n.position=this._cssPosition,n.marginLeft=l?"0":p,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":v,e.justifyContent=I,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(vx),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},Ix=(()=>{class t{_injector=d(j);constructor(){}global(){return Tr()}flexibleConnectedTo(e){return Sr(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xx=new y("OVERLAY_DEFAULT_CONFIG");function pi(t,n){t.get(We).load(Ex);let e=t.get(Yf),i=t.get(H),r=t.get(Ue),o=t.get(pn),a=t.get(Ye),s=t.get(Ae,null,{optional:!0})||t.get(st).createRenderer(null,null),l=new Ir(n),c=t.get(xx,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in i.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let u=i.createElement("div"),f=i.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),f.appendChild(u),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let h=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return Iv(h)?h.after(f):h?.type==="parent"?h.element.appendChild(f):e.getContainerElement().appendChild(f),new za(new Uf(u,o,t),f,u,l,t.get(P),t.get(Cx),i,t.get(li),t.get(wx),n?.disableAnimations??t.get($s,null,{optional:!0})==="NoopAnimations",t.get(Me),s)}var Mx=(()=>{class t{scrollStrategies=d(bx);_positionBuilder=d(Ix);_injector=d(j);constructor(){}create(e){return pi(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ec=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({providers:[Mx],imports:[Ie,Ua,Ql,Ql]})}return t})();function dL(t,n){}var Ar=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Mv=(()=>{class t extends Ha{_elementRef=d(R);_focusTrapFactory=d(sf);_config;_interactivityChecker=d(G_);_ngZone=d(P);_focusMonitor=d(hi);_renderer=d(Ae);_changeDetectorRef=d(we);_injector=d(j);_platform=d(ue);_document=d(H);_portalOutlet;_focusTrapped=new E;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=d(Ar,{optional:!0})||new Ar,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let i=this._ariaLabelledByQueue.indexOf(e);i>-1&&(this._ariaLabelledByQueue.splice(i,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),i}attachTemplatePortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),i}attachDomPortal=e=>{this._portalOutlet.hasAttached();let i=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),i};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_trapFocus(e){this._isDestroyed||Ve(()=>{let i=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||i.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,i=null;if(typeof e=="string"?i=this._document.querySelector(e):typeof e=="boolean"?i=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(i=e),this._config.restoreFocus&&i&&typeof i.focus=="function"){let r=yn(),o=this._elementRef.nativeElement;(!r||r===this._document.body||r===o||o.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(i,this._closeInteractionType),this._closeInteractionType=null):i.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,i=yn();return e===i||e.contains(i)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=yn()))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["cdk-dialog-container"]],viewQuery:function(i,r){if(i&1&&Ge(Er,7),i&2){let o;U(o=z())&&(r._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(i,r){i&2&&Z("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[te],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(i,r){i&1&&Ce(0,dL,0,0,"ng-template",0)},dependencies:[Er],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return t})(),tc=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new E;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,e){this.overlayRef=n,this.config=e,this.disableClose=e.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(i=>{i.keyCode===27&&!this.disableClose&&!ut(i)&&(i.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(n,e){if(this._canClose(n)){let i=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),i.next(n),i.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",e=""){return this.overlayRef.updateSize({width:n,height:e}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(n,e,this.componentInstance))}},uL=new y("DialogScrollStrategy",{providedIn:"root",factory:()=>{let t=d(j);return()=>xr(t)}}),fL=new y("DialogData"),hL=new y("DefaultDialogConfig");function pL(t){let n=O(t),e=new N;return{valueSignal:n,get value(){return n()},change:e,ngOnDestroy(){e.complete()}}}var Sx=(()=>{class t{_injector=d(j);_defaultOptions=d(hL,{optional:!0});_parentDialog=d(t,{optional:!0,skipSelf:!0});_overlayContainer=d(Yf);_idGenerator=d(Ue);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new E;_afterOpenedAtThisLevel=new E;_ariaHiddenElements=new Map;_scrollStrategy=d(uL);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=yi(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(ot(void 0)));constructor(){}open(e,i){let r=this._defaultOptions||new Ar;i=b(b({},r),i),i.id=i.id||this._idGenerator.getId("cdk-dialog-"),i.id&&this.getDialogById(i.id);let o=this._getOverlayConfig(i),a=pi(this._injector,o),s=new tc(a,i),l=this._attachContainer(a,s,i);if(s.containerInstance=l,!this.openDialogs.length){let c=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(ft(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(c)}):this._hideNonDialogContentFromAssistiveTechnology(c)}return this._attachDialogContent(e,s,l,i),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){xv(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){xv(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),xv(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let i=new Ir({positionStrategy:e.positionStrategy||Tr().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(i.backdropClass=e.backdropClass),i}_attachContainer(e,i,r){let o=r.injector||r.viewContainerRef?.injector,a=[{provide:Ar,useValue:r},{provide:tc,useValue:i},{provide:za,useValue:e}],s;r.container?typeof r.container=="function"?s=r.container:(s=r.container.type,a.push(...r.container.providers(r))):s=Mv;let l=new $n(s,r.viewContainerRef,j.create({parent:o||this._injector,providers:a}));return e.attach(l).instance}_attachDialogContent(e,i,r,o){if(e instanceof tt){let a=this._createInjector(o,i,r,void 0),s={$implicit:o.data,dialogRef:i};o.templateContext&&(s=b(b({},s),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),r.attachTemplatePortal(new Hi(e,null,s,a))}else{let a=this._createInjector(o,i,r,this._injector),s=r.attachComponentPortal(new $n(e,o.viewContainerRef,a));i.componentRef=s,i.componentInstance=s.instance}}_createInjector(e,i,r,o){let a=e.injector||e.viewContainerRef?.injector,s=[{provide:fL,useValue:e.data},{provide:tc,useValue:i}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(i,e,r)):s.push(...e.providers)),e.direction&&(!a||!a.get(Ye,null,{optional:!0}))&&s.push({provide:Ye,useValue:pL(e.direction)}),j.create({parent:a||o,providers:s})}_removeOpenDialog(e,i){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,a)=>{o?a.setAttribute("aria-hidden",o):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),i&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let i=e.parentElement.children;for(let r=i.length-1;r>-1;r--){let o=i[r];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function xv(t,n){let e=t.length;for(;e--;)n(t[e])}function mL(t,n){}var Kf=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Sv="mdc-dialog--open",Tx="mdc-dialog--opening",Ax="mdc-dialog--closing",gL=150,_L=75,vL=(()=>{class t extends Mv{_animationStateChanged=new N;_animationsEnabled=!qe();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?kx(this._config.enterAnimationDuration)??gL:0;_exitAnimationDuration=this._animationsEnabled?kx(this._config.exitAnimationDuration)??_L:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Rx,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Tx,Sv)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Sv),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Sv),this._animationsEnabled?(this._hostElement.style.setProperty(Rx,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ax)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Tx,Ax)}_waitForAnimationToComplete(e,i){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(i,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let i=super.attachComponentPortal(e);return i.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),i}static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275cmp=S({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(i,r){i&2&&(Qe("id",r._config.id),Z("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),$("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[te],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(g(0,"div",0)(1,"div",1),Ce(2,mL,0,0,"ng-template",2),m()())},dependencies:[Er],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return t})(),Rx="--mat-dialog-transition-duration";function kx(t){return t==null?null:typeof t=="number"?t:t.endsWith("ms")?Pi(t.substring(0,t.length-2)):t.endsWith("s")?Pi(t.substring(0,t.length-1))*1e3:t==="0"?0:null}var Zf=(function(t){return t[t.OPEN=0]="OPEN",t[t.CLOSING=1]="CLOSING",t[t.CLOSED=2]="CLOSED",t})(Zf||{}),Ao=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Wi(1);_beforeClosed=new Wi(1);_result;_closeFallbackTimeout;_state=Zf.OPEN;_closeInteractionType;constructor(n,e,i){this._ref=n,this._config=e,this._containerInstance=i,this.disableClose=e.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),i._animationStateChanged.pipe(be(r=>r.state==="opened"),ft(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),i._animationStateChanged.pipe(be(r=>r.state==="closed"),ft(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),ln(this.backdropClick(),this.keydownEvents().pipe(be(r=>r.keyCode===27&&!this.disableClose&&!ut(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),Nx(this,r.type==="keydown"?"keyboard":"mouse"))})}close(n){let e=this._config.closePredicate;e&&!e(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(be(i=>i.state==="closing"),ft(1)).subscribe(i=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),i.totalTime+100)}),this._state=Zf.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let e=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?e.left(n.left):e.right(n.right):e.centerHorizontally(),n&&(n.top||n.bottom)?n.top?e.top(n.top):e.bottom(n.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",e=""){return this._ref.updateSize(n,e),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=Zf.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Nx(t,n,e){return t._closeInteractionType=n,t.close(e)}var yL=new y("MatMdcDialogData"),bL=new y("mat-mdc-dialog-default-options"),DL=new y("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(j);return()=>xr(t)}}),Qf=(()=>{class t{_defaultOptions=d(bL,{optional:!0});_scrollStrategy=d(DL);_parentDialog=d(t,{optional:!0,skipSelf:!0});_idGenerator=d(Ue);_injector=d(j);_dialog=d(Sx);_animationsDisabled=qe();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new E;_afterOpenedAtThisLevel=new E;dialogConfigClass=Kf;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=yi(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(ot(void 0)));constructor(){this._dialogRefConstructor=Ao,this._dialogContainerType=vL,this._dialogDataToken=yL}open(e,i){let r;i=b(b({},this._defaultOptions||new Kf),i),i.id=i.id||this._idGenerator.getId("mat-mdc-dialog-"),i.scrollStrategy=i.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,Y(b({},i),{positionStrategy:Tr(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||i.enterAnimationDuration?.toLocaleString()==="0"||i.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:i},{provide:Ar,useValue:i}]},templateContext:()=>({dialogRef:r}),providers:(a,s,l)=>(r=new this._dialogRefConstructor(a,i,l),r.updatePosition(i?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:r}])}));return r.componentRef=o.componentRef,r.componentInstance=o.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(r);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let i=e.length;for(;i--;)e[i].close()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ox=(()=>{class t{dialogRef=d(Ao,{optional:!0});_elementRef=d(R);_dialog=d(Qf);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=Bx(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let i=e._matDialogClose||e._matDialogCloseResult;i&&(this.dialogResult=i.currentValue)}_onButtonClick(e){Nx(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(i,r){i&1&&ne("click",function(a){return r._onButtonClick(a)}),i&2&&Z("aria-label",r.ariaLabel||null)("type",r.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[Te]})}return t})(),Fx=(()=>{class t{_dialogRef=d(Ao,{optional:!0});_elementRef=d(R);_dialog=d(Qf);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=Bx(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t})}return t})(),Px=(()=>{class t extends Fx{id=d(Ue).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(i,r){i&2&&Qe("id",r.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[te]})}return t})(),Lx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[_g([Dv])]})}return t})(),Vx=(()=>{class t extends Fx{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(i,r){i&2&&$("mat-mdc-dialog-actions-align-start",r.align==="start")("mat-mdc-dialog-actions-align-center",r.align==="center")("mat-mdc-dialog-actions-align-end",r.align==="end")},inputs:{align:"align"},features:[te]})}return t})();function Bx(t,n){let e=t.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?n.find(i=>i.id===e.id):null}var Tv=new y("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>d(co)}),Ga="Method not implemented",vt=class{locale;_localeChanges=new E;localeChanges=this._localeChanges;setTime(n,e,i,r){throw new Error(Ga)}getHours(n){throw new Error(Ga)}getMinutes(n){throw new Error(Ga)}getSeconds(n){throw new Error(Ga)}parseTime(n,e){throw new Error(Ga)}addSeconds(n,e){throw new Error(Ga)}getValidDateOrNull(n){return this.isDateInstance(n)&&this.isValid(n)?n:null}deserialize(n){return n==null||this.isDateInstance(n)&&this.isValid(n)?n:this.invalid()}setLocale(n){this.locale=n,this._localeChanges.next()}compareDate(n,e){return this.getYear(n)-this.getYear(e)||this.getMonth(n)-this.getMonth(e)||this.getDate(n)-this.getDate(e)}compareTime(n,e){return this.getHours(n)-this.getHours(e)||this.getMinutes(n)-this.getMinutes(e)||this.getSeconds(n)-this.getSeconds(e)}sameDate(n,e){if(n&&e){let i=this.isValid(n),r=this.isValid(e);return i&&r?!this.compareDate(n,e):i==r}return n==e}sameTime(n,e){if(n&&e){let i=this.isValid(n),r=this.isValid(e);return i&&r?!this.compareTime(n,e):i==r}return n==e}clampDate(n,e,i){return e&&this.compareDate(n,e)<0?e:i&&this.compareDate(n,i)>0?i:n}},Gn=new y("mat-date-formats");var CL=["tooltip"],wL=20;var EL=new y("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(j);return()=>Mr(t,{scrollThrottle:wL})}}),IL=new y("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var jx="tooltip-panel",xL={passive:!0},ML=8,SL=8,TL=24,AL=200,Hx=(()=>{class t{_elementRef=d(R);_ngZone=d(P);_platform=d(ue);_ariaDescriber=d(WE);_focusMonitor=d(hi);_dir=d(Ye);_injector=d(j);_viewContainerRef=d($e);_mediaMatcher=d(Ra);_document=d(H);_renderer=d(Ae);_animationsDisabled=qe();_defaultOptions=d(IL,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=RL;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Li(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let i=Li(e);this._disabled!==i&&(this._disabled=i,i?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Pi(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Pi(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let i=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(i)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new E;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=ML}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(ve(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(i=>i()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(i);this._detach(),this._portal=this._portal||new $n(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(ve(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let i=this._tooltipInstance;i&&(i.isVisible()?i.hide(e):(i._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof R)return this._overlayRef;this._detach()}let i=this._injector.get(So).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${jx}`,o=Sr(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i).withPopoverLocation("global");return o.positionChanges.pipe(ve(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=pi(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(EL)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(ve(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(ve(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(ve(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(ve(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let i=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();i.withPositions([this._addOffset(b(b({},r.main),o.main)),this._addOffset(b(b({},r.fallback),o.fallback))])}_addOffset(e){let i=SL,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-i:e.originY==="bottom"?e.offsetY=i:e.originX==="start"?e.offsetX=r?-i:i:e.originX==="end"&&(e.offsetX=r?i:-i),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"||i=="below"?r={originX:"center",originY:i=="above"?"top":"bottom"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={originX:"start",originY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:a}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"?r={overlayX:"center",overlayY:"bottom"}:i=="below"?r={overlayX:"center",overlayY:"top"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:a}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Ve(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,i){return this.position==="above"||this.position==="below"?i==="top"?i="bottom":i==="bottom"&&(i="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:i}}_updateCurrentPositionClass(e){let{overlayY:i,originX:r,originY:o}=e,a;if(i==="center"?this._dir&&this._dir.value==="rtl"?a=r==="end"?"left":"right":a=r==="start"?"left":"right":a=i==="bottom"&&o==="top"?"above":"below",a!==this._currentPosition){let s=this._overlayRef;if(s){let l=`${this._cssClassPrefix}-${jx}-`;s.removePanelClass(l+this._currentPosition),s.addPanelClass(l+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let i=e.targetTouches?.[0],r=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let i;e.x!==void 0&&e.y!==void 0&&(i=e),this.show(void 0,i)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let i=e.relatedTarget;(!i||!this._overlayRef?.overlayElement.contains(i))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let i=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;i!==r&&!r.contains(i)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,i){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,i,xL))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let i=this._elementRef.nativeElement,r=i.style;(e==="on"||i.nodeName!=="INPUT"&&i.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!i.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Ve({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!ut(e):!0;static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(i,r){i&2&&$("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return t})(),RL=(()=>{class t{_changeDetectorRef=d(we);_elementRef=d(R);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=qe();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new E;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>TL&&e.width>=AL}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let i=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(i.classList.remove(e?o:r),i.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(i);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(i.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-tooltip-component"]],viewQuery:function(i,r){if(i&1&&Ge(CL,7),i&2){let o;U(o=z())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(i,r){i&1&&ne("mouseleave",function(a){return r._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(i,r){i&1&&(Re(0,"div",1,0),da("animationend",function(a){return r._handleAnimationEnd(a)}),Re(2,"div",2),C(3),Oe()()),i&2&&(xt(r.tooltipClass),$("mdc-tooltip--multiline",r._isMultiline),_(3),Mt(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return t})();var Wa=new y("MAT_INPUT_VALUE_ACCESSOR");var kL=["mat-calendar-body",""];function NL(t,n){return this._trackRow(n)}var Yx=(t,n)=>n.id;function OL(t,n){if(t&1&&(Re(0,"tr",0)(1,"td",3),C(2),Oe()()),t&2){let e=J();_(),$t("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),Z("colspan",e.numCols),_(),He(" ",e.label," ")}}function FL(t,n){if(t&1&&(Re(0,"td",3),C(1),Oe()),t&2){let e=J(2);$t("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),Z("colspan",e._firstRowOffset),_(),He(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function PL(t,n){if(t&1){let e=Ti();Re(0,"td",6)(1,"button",7),da("click",function(r){let o=Dt(e).$implicit,a=J(2);return Ct(a._cellClicked(o,r))})("focus",function(r){let o=Dt(e).$implicit,a=J(2);return Ct(a._emitActiveDateChange(o,r))}),Re(2,"span",8),C(3),Oe(),Vt(4,"span",9),Oe()()}if(t&2){let e=n.$implicit,i=n.$index,r=J().$index,o=J();$t("width",o._cellWidth)("padding-top",o._cellPadding)("padding-bottom",o._cellPadding),Z("data-mat-row",r)("data-mat-col",i),_(),xt(e.cssClasses),$("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",o._isActiveCell(r,i))("mat-calendar-body-range-start",o._isRangeStart(e.compareValue))("mat-calendar-body-range-end",o._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",o._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",o._isComparisonBridgeStart(e.compareValue,r,i))("mat-calendar-body-comparison-bridge-end",o._isComparisonBridgeEnd(e.compareValue,r,i))("mat-calendar-body-comparison-start",o._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",o._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",o._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",o._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",o._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",o._isInPreview(e.compareValue)),Qe("tabIndex",o._isActiveCell(r,i)?0:-1),Z("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",o._isSelected(e.compareValue))("aria-current",o.todayValue===e.compareValue?"date":null)("aria-describedby",o._getDescribedby(e.compareValue)),_(),$("mat-calendar-body-selected",o._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",o._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",o.todayValue===e.compareValue),_(),He(" ",e.displayValue," ")}}function LL(t,n){if(t&1&&(Re(0,"tr",1),fe(1,FL,2,6,"td",4),Qt(2,PL,5,49,"td",5,Yx),Oe()),t&2){let e=n.$implicit,i=n.$index,r=J();_(),he(i===0&&r._firstRowOffset?1:-1),_(),Xt(e)}}function VL(t,n){if(t&1&&(g(0,"th",2)(1,"span",6),C(2),m(),g(3,"span",3),C(4),m()()),t&2){let e=n.$implicit;_(2),Mt(e.long),_(2),Mt(e.narrow)}}var BL=["*"];function jL(t,n){}function HL(t,n){if(t&1){let e=Ti();g(0,"mat-month-view",4),pa("activeDateChange",function(r){Dt(e);let o=J();return Xs(o.activeDate,r)||(o.activeDate=r),Ct(r)}),ne("_userSelection",function(r){Dt(e);let o=J();return Ct(o._dateSelected(r))})("dragStarted",function(r){Dt(e);let o=J();return Ct(o._dragStarted(r))})("dragEnded",function(r){Dt(e);let o=J();return Ct(o._dragEnded(r))}),m()}if(t&2){let e=J();ha("activeDate",e.activeDate),k("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function UL(t,n){if(t&1){let e=Ti();g(0,"mat-year-view",5),pa("activeDateChange",function(r){Dt(e);let o=J();return Xs(o.activeDate,r)||(o.activeDate=r),Ct(r)}),ne("monthSelected",function(r){Dt(e);let o=J();return Ct(o._monthSelectedInYearView(r))})("selectedChange",function(r){Dt(e);let o=J();return Ct(o._goToDateInView(r,"month"))}),m()}if(t&2){let e=J();ha("activeDate",e.activeDate),k("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function zL(t,n){if(t&1){let e=Ti();g(0,"mat-multi-year-view",6),pa("activeDateChange",function(r){Dt(e);let o=J();return Xs(o.activeDate,r)||(o.activeDate=r),Ct(r)}),ne("yearSelected",function(r){Dt(e);let o=J();return Ct(o._yearSelectedInMultiYearView(r))})("selectedChange",function(r){Dt(e);let o=J();return Ct(o._goToDateInView(r,"year"))}),m()}if(t&2){let e=J();ha("activeDate",e.activeDate),k("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function $L(t,n){}var GL=["button"],WL=[[["","matDatepickerToggleIcon",""]]],qL=["[matDatepickerToggleIcon]"];function YL(t,n){t&1&&(Yt(),g(0,"svg",2),A(1,"path",3),m())}var Za=(()=>{class t{changes=new E;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,i){return`${e} \u2013 ${i}`}formatYearRangeLabel(e,i){return`${e} to ${i}`}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ZL=0,ic=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=ZL++;cssClasses;constructor(n,e,i,r,o,a=n,s){this.value=n,this.displayValue=e,this.ariaLabel=i,this.enabled=r,this.compareValue=a,this.rawValue=s,this.cssClasses=o instanceof Set?Array.from(o):o}},KL={passive:!1,capture:!0},Xf={passive:!0,capture:!0},Ux={passive:!0},Ya=(()=>{class t{_elementRef=d(R);_ngZone=d(P);_platform=d(ue);_intl=d(Za);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new N;previewChange=new N;activeDateChange=new N;dragStarted=new N;dragEnded=new N;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=d(j);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=d(Ae),i=d(Ue);this._startDateLabelId=i.getId("mat-calendar-body-start-"),this._endDateLabelId=i.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=i.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=i.getId("mat-calendar-body-comparison-end-"),d(We).load(Vi),this._ngZone.runOutsideAngular(()=>{let r=this._elementRef.nativeElement,o=[e.listen(r,"touchmove",this._touchmoveHandler,KL),e.listen(r,"mouseenter",this._enterHandler,Xf),e.listen(r,"focus",this._enterHandler,Xf),e.listen(r,"mouseleave",this._leaveHandler,Xf),e.listen(r,"blur",this._leaveHandler,Xf),e.listen(r,"mousedown",this._mousedownHandler,Ux),e.listen(r,"touchstart",this._mousedownHandler,Ux)];this._platform.isBrowser&&o.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=o})}_cellClicked(e,i){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:i})}_emitActiveDateChange(e,i){e.enabled&&this.activeDateChange.emit({value:e.value,event:i})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let i=e.numCols,{rows:r,numCols:o}=this;(e.rows||i)&&(this._firstRowOffset=r&&r.length&&r[0].length?o-r[0].length:0),(e.cellAspectRatio||i||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/o}%`),(i||!this._cellWidth)&&(this._cellWidth=`${100/o}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,i){let r=e*this.numCols+i;return e&&(r-=this._firstRowOffset),r==this.activeCell}_focusActiveCell(e=!0){Ve(()=>{setTimeout(()=>{let i=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");i&&(e||(this._skipNextFocus=!0),i.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return kv(e,this.startValue,this.endValue)}_isRangeEnd(e){return Nv(e,this.startValue,this.endValue)}_isInRange(e){return Ov(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return kv(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,i,r){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let o=this.rows[i][r-1];if(!o){let a=this.rows[i-1];o=a&&a[a.length-1]}return o&&!this._isRangeEnd(o.compareValue)}_isComparisonBridgeEnd(e,i,r){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let o=this.rows[i][r+1];if(!o){let a=this.rows[i+1];o=a&&a[0]}return o&&!this._isRangeStart(o.compareValue)}_isComparisonEnd(e){return Nv(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return Ov(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return kv(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Nv(e,this.previewStart,this.previewEnd)}_isInPreview(e){return Ov(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let i=this._getCellFromElement(e.target);i&&this._ngZone.run(()=>this.previewChange.emit({value:i.enabled?i:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let i=zx(e),r=i?this._getCellFromElement(i):null;i!==e.target&&(this._didDragSinceMouseDown=!0),Rv(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:r?.enabled?r:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let i=e.target&&this._getCellFromElement(e.target);!i||!this._isInRange(i.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:i.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let i=Rv(e.target);if(!i){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}i.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let r=this._getCellFromElement(i);this.dragEnded.emit({value:r?.rawValue??null,event:e})})};_touchendHandler=e=>{let i=zx(e);i&&this._mouseupHandler({target:i})};_getCellFromElement(e){let i=Rv(e);if(i){let r=i.getAttribute("data-mat-row"),o=i.getAttribute("data-mat-col");if(r&&o)return this.rows[parseInt(r)]?.[parseInt(o)]||null}return null}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[Te],attrs:kL,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(i,r){i&1&&(fe(0,OL,3,6,"tr",0),Qt(1,LL,4,1,"tr",1,NL,!0),Re(3,"span",2),C(4),Oe(),Re(5,"span",2),C(6),Oe(),Re(7,"span",2),C(8),Oe(),Re(9,"span",2),C(10),Oe()),i&2&&(he(r._firstRowOffset<r.labelMinRequiredCells?0:-1),_(),Xt(r.rows),_(2),Qe("id",r._startDateLabelId),_(),He(" ",r.startDateAccessibleName,`
`),_(),Qe("id",r._endDateLabelId),_(),He(" ",r.endDateAccessibleName,`
`),_(),Qe("id",r._comparisonStartDateLabelId),_(),ur(" ",r.comparisonDateAccessibleName," ",r.startDateAccessibleName,`
`),_(),Qe("id",r._comparisonEndDateLabelId),_(),ur(" ",r.comparisonDateAccessibleName," ",r.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function Av(t){return t?.nodeName==="TD"}function Rv(t){let n;return Av(t)?n=t:Av(t.parentNode)?n=t.parentNode:Av(t.parentNode?.parentNode)&&(n=t.parentNode.parentNode),n?.getAttribute("data-mat-row")!=null?n:null}function kv(t,n,e){return e!==null&&n!==e&&t<e&&t===n}function Nv(t,n,e){return n!==null&&n!==e&&t>=n&&t===e}function Ov(t,n,e,i){return i&&n!==null&&e!==null&&n!==e&&t>=n&&t<=e}function zx(t){let n=t.changedTouches[0];return document.elementFromPoint(n.clientX,n.clientY)}var En=class{start;end;_disableStructuralEquivalency;constructor(n,e){this.start=n,this.end=e}},rc=(()=>{class t{selection;_adapter;_selectionChanged=new E;selectionChanged=this._selectionChanged;constructor(e,i){this.selection=e,this._adapter=i,this.selection=e}updateSelection(e,i){let r=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:i,oldValue:r})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(i){Zs()};static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})(),QL=(()=>{class t extends rc{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new t(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(i){return new(i||t)(B(vt))};static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var Zx={provide:rc,useFactory:()=>d(rc,{optional:!0,skipSelf:!0})||new QL(d(vt))};var Kx=new y("MAT_DATE_RANGE_SELECTION_STRATEGY");var Fv=7,XL=0,$x=(()=>{class t{_changeDetectorRef=d(we);_dateFormats=d(Gn,{optional:!0});_dateAdapter=d(vt,{optional:!0});_dir=d(Ye,{optional:!0});_rangeStrategy=d(Kx,{optional:!0});_rerenderSubscription=se.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let i=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._hasSameMonthAndYear(i,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof En?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new N;_userSelection=new N;dragStarted=new N;dragEnded=new N;activeDateChange=new N;_matCalendarBody;_monthLabel=O("");_weeks=O([]);_firstWeekOffset=O(0);_rangeStart=O(null);_rangeEnd=O(null);_comparisonRangeStart=O(null);_comparisonRangeEnd=O(null);_previewStart=O(null);_previewEnd=O(null);_isRange=O(!1);_todayDate=O(null);_weekdays=O([]);constructor(){d(We).load(bn),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(ot(null)).subscribe(()=>this._init())}ngOnChanges(e){let i=e.comparisonStart||e.comparisonEnd;i&&!i.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let i=e.value,r=this._getDateFromDayOfMonth(i),o,a;this._selected instanceof En?(o=this._getDateInCurrentMonth(this._selected.start),a=this._getDateInCurrentMonth(this._selected.end)):o=a=this._getDateInCurrentMonth(this._selected),(o!==i||a!==i)&&this.selectedChange.emit(r),this._userSelection.emit({value:r,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let i=e.value,r=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(i),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let i=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!ut(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(i,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Fv+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%Fv),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:i}){if(this._rangeStrategy){let r=i?i.rawValue:null,o=this._rangeStrategy.createPreview(r,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)),this.activeDrag&&r){let a=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,r,e);a&&(this._previewStart.set(this._getCellCompareValue(a.start)),this._previewEnd.set(this._getCellCompareValue(a.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let i=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:i??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),i=this._dateAdapter.getDayOfWeekNames("narrow"),o=this._dateAdapter.getDayOfWeekNames("long").map((a,s)=>({long:a,narrow:i[s],id:XL++}));this._weekdays.set(o.slice(e).concat(o.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),i=this._dateAdapter.getDateNames(),r=[[]];for(let o=0,a=this._firstWeekOffset();o<e;o++,a++){a==Fv&&(r.push([]),a=0);let s=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),o+1),l=this._shouldEnableDate(s),c=this._dateAdapter.format(s,this._dateFormats.display.dateA11yLabel),u=this.dateClass?this.dateClass(s,"month"):void 0;r[r.length-1].push(new ic(o+1,i[o],c,l,u,this._getCellCompareValue(s),s))}this._weeks.set(r)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,i){return!!(e&&i&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(i)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(i))}_getCellCompareValue(e){if(e){let i=this._dateAdapter.getYear(e),r=this._dateAdapter.getMonth(e),o=this._dateAdapter.getDate(e);return new Date(i,r,o).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof En?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-month-view"]],viewQuery:function(i,r){if(i&1&&Ge(Ya,5),i&2){let o;U(o=z())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[Te],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(i,r){i&1&&(g(0,"table",0)(1,"thead",1)(2,"tr"),Qt(3,VL,5,2,"th",2,Yx),m(),g(5,"tr",3),A(6,"th",4),m()(),g(7,"tbody",5),ne("selectedValueChange",function(a){return r._dateSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("previewChange",function(a){return r._previewChanged(a)})("dragStarted",function(a){return r.dragStarted.emit(a)})("dragEnded",function(a){return r._dragEnded(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),m()()),i&2&&(_(3),Xt(r._weekdays()),_(4),k("label",r._monthLabel())("rows",r._weeks())("todayValue",r._todayDate())("startValue",r._rangeStart())("endValue",r._rangeEnd())("comparisonStart",r._comparisonRangeStart())("comparisonEnd",r._comparisonRangeEnd())("previewStart",r._previewStart())("previewEnd",r._previewEnd())("isRange",r._isRange())("labelMinRequiredCells",3)("activeCell",r._dateAdapter.getDate(r.activeDate)-1)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName))},dependencies:[Ya],encapsulation:2,changeDetection:0})}return t})(),sn=24,Pv=4,Gx=(()=>{class t{_changeDetectorRef=d(we);_dateAdapter=d(vt,{optional:!0});_dir=d(Ye,{optional:!0});_rerenderSubscription=se.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let i=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),Qx(this._dateAdapter,i,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof En?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new N;yearSelected=new N;activeDateChange=new N;_matCalendarBody;_years=O([]);_todayYear=O(0);_selectedYear=O(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(ot(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let i=this._dateAdapter.getYear(this._activeDate)-nc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),r=[];for(let o=0,a=[];o<sn;o++)a.push(i+o),a.length==Pv&&(r.push(a.map(s=>this._createCellForYear(s))),a=[]);this._years.set(r),this._changeDetectorRef.markForCheck()}_yearSelected(e){let i=e.value,r=this._dateAdapter.createDate(i,0,1),o=this._getDateFromYear(i);this.yearSelected.emit(r),this.selectedChange.emit(o)}_updateActiveDate(e){let i=e.value,r=this._activeDate;this.activeDate=this._getDateFromYear(i),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let i=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Pv);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Pv);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-nc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,sn-nc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-sn*10:-sn);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?sn*10:sn);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return nc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let i=this._dateAdapter.getMonth(this.activeDate),r=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,i,1));return this._dateAdapter.createDate(e,i,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForYear(e){let i=this._dateAdapter.createDate(e,0,1),r=this._dateAdapter.getYearName(i),o=this.dateClass?this.dateClass(i,"multi-year"):void 0;return new ic(e,r,r,this._shouldEnableYear(e),o)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let i=this._dateAdapter.createDate(e,0,1);for(let r=i;this._dateAdapter.getYear(r)==e;r=this._dateAdapter.addCalendarDays(r,1))if(this.dateFilter(r))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof En){let i=e.start||e.end;i&&this._selectedYear.set(this._dateAdapter.getYear(i))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-multi-year-view"]],viewQuery:function(i,r){if(i&1&&Ge(Ya,5),i&2){let o;U(o=z())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(i,r){i&1&&(g(0,"table",0)(1,"thead",1)(2,"tr"),A(3,"th",2),m()(),g(4,"tbody",3),ne("selectedValueChange",function(a){return r._yearSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),m()()),i&2&&(_(4),k("rows",r._years())("todayValue",r._todayYear())("startValue",r._selectedYear())("endValue",r._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",r._getActiveCell()))},dependencies:[Ya],encapsulation:2,changeDetection:0})}return t})();function Qx(t,n,e,i,r){let o=t.getYear(n),a=t.getYear(e),s=Xx(t,i,r);return Math.floor((o-s)/sn)===Math.floor((a-s)/sn)}function nc(t,n,e,i){let r=t.getYear(n);return JL(r-Xx(t,e,i),sn)}function Xx(t,n,e){let i=0;return e?i=t.getYear(e)-sn+1:n&&(i=t.getYear(n)),i}function JL(t,n){return(t%n+n)%n}var Wx=(()=>{class t{_changeDetectorRef=d(we);_dateFormats=d(Gn,{optional:!0});_dateAdapter=d(vt,{optional:!0});_dir=d(Ye,{optional:!0});_rerenderSubscription=se.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let i=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._dateAdapter.getYear(i)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof En?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new N;monthSelected=new N;activeDateChange=new N;_matCalendarBody;_months=O([]);_yearLabel=O("");_todayMonth=O(null);_selectedMonth=O(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(ot(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let i=e.value,r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),i,1);this.monthSelected.emit(r);let o=this._getDateFromMonth(i);this.selectedChange.emit(o)}_updateActiveDate(e){let i=e.value,r=this._activeDate;this.activeDate=this._getDateFromMonth(i),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let i=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(i,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(i=>i.map(r=>this._createCellForMonth(r,e[r])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),r=this._dateAdapter.getNumDaysInMonth(i);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForMonth(e,i){let r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),o=this._dateAdapter.format(r,this._dateFormats.display.monthYearA11yLabel),a=this.dateClass?this.dateClass(r,"year"):void 0;return new ic(e,i.toLocaleUpperCase(),o,this._shouldEnableMonth(e),a)}_shouldEnableMonth(e){let i=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(i,e)||this._isYearAndMonthBeforeMinDate(i,e))return!1;if(!this.dateFilter)return!0;let r=this._dateAdapter.createDate(i,e,1);for(let o=r;this._dateAdapter.getMonth(o)==e;o=this._dateAdapter.addCalendarDays(o,1))if(this.dateFilter(o))return!0;return!1}_isYearAndMonthAfterMaxDate(e,i){if(this.maxDate){let r=this._dateAdapter.getYear(this.maxDate),o=this._dateAdapter.getMonth(this.maxDate);return e>r||e===r&&i>o}return!1}_isYearAndMonthBeforeMinDate(e,i){if(this.minDate){let r=this._dateAdapter.getYear(this.minDate),o=this._dateAdapter.getMonth(this.minDate);return e<r||e===r&&i<o}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof En?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-year-view"]],viewQuery:function(i,r){if(i&1&&Ge(Ya,5),i&2){let o;U(o=z())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(i,r){i&1&&(g(0,"table",0)(1,"thead",1)(2,"tr"),A(3,"th",2),m()(),g(4,"tbody",3),ne("selectedValueChange",function(a){return r._monthSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),m()()),i&2&&(_(4),k("label",r._yearLabel())("rows",r._months())("todayValue",r._todayMonth())("startValue",r._selectedMonth())("endValue",r._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",r._dateAdapter.getMonth(r.activeDate)))},dependencies:[Ya],encapsulation:2,changeDetection:0})}return t})(),Jx=(()=>{class t{_intl=d(Za);calendar=d(Lv);_dateAdapter=d(vt,{optional:!0});_dateFormats=d(Gn,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){d(We).load(bn);let e=d(we);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-sn))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:sn))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,i=this._intl,r=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=i.switchToMultiYearViewLabel,this._prevButtonLabel=i.prevMonthLabel,this._nextButtonLabel=i.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=r.getYearName(e.activeDate),this._periodButtonDescription=r.getYearName(e.activeDate),this._periodButtonLabel=i.switchToMonthViewLabel,this._prevButtonLabel=i.prevYearLabel,this._nextButtonLabel=i.nextYearLabel):(this._periodButtonText=i.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=i.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=i.switchToMonthViewLabel,this._prevButtonLabel=i.prevMultiYearLabel,this._nextButtonLabel=i.nextMultiYearLabel)}_isSameView(e,i){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(i)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(i):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(i):Qx(this._dateAdapter,e,i,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let i=this._dateAdapter.getYear(this.calendar.activeDate)-nc(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),r=i+sn-1,o=this._dateAdapter.getYearName(this._dateAdapter.createDate(i,0,1)),a=this._dateAdapter.getYearName(this._dateAdapter.createDate(r,0,1));return[o,a]}_periodButtonLabelId=d(Ue).getId("mat-calendar-period-label-");static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:BL,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(i,r){i&1&&(ke(),g(0,"div",0)(1,"div",1)(2,"span",2),C(3),m(),g(4,"button",3),ne("click",function(){return r.currentPeriodClicked()}),g(5,"span",4),C(6),m(),Yt(),g(7,"svg",5),A(8,"polygon",6),m()(),eo(),A(9,"div",7),X(10),g(11,"button",8),ne("click",function(){return r.previousClicked()}),Yt(),g(12,"svg",9),A(13,"path",10),m()(),eo(),g(14,"button",11),ne("click",function(){return r.nextClicked()}),Yt(),g(15,"svg",9),A(16,"path",12),m()()()()),i&2&&(_(2),k("id",r._periodButtonLabelId),_(),Mt(r.periodButtonDescription),_(),Z("aria-label",r.periodButtonLabel)("aria-describedby",r._periodButtonLabelId),_(2),Mt(r.periodButtonText),_(),$("mat-calendar-invert",r.calendar.currentView!=="month"),_(4),k("disabled",!r.previousEnabled())("matTooltip",r.prevButtonLabel),Z("aria-label",r.prevButtonLabel),_(3),k("disabled",!r.nextEnabled())("matTooltip",r.nextButtonLabel),Z("aria-label",r.nextButtonLabel))},dependencies:[on,Fa,Hx],encapsulation:2,changeDetection:0})}return t})(),Lv=(()=>{class t{_dateAdapter=d(vt,{optional:!0});_dateFormats=d(Gn,{optional:!0});_changeDetectorRef=d(we);_elementRef=d(R);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof En?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new N;yearSelected=new N;monthSelected=new N;viewChanged=new N(!0);_userSelection=new N;_userDragDrop=new N;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let i=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),i&&(this.stateChanges.next(),this.viewChanged.emit(i))}_currentView;_activeDrag=null;stateChanges=new E;constructor(){this._intlChanges=d(Za).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new $n(this.headerComponent||Jx),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let i=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,r=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,o=i||r||e.dateFilter;if(o&&!o.firstChange){let a=this._getCurrentViewComponent();a&&(this._elementRef.nativeElement.contains(yn())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),a._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let i=e.value;(this.selected instanceof En||i&&!this._dateAdapter.sameDate(i,this.selected))&&this.selectedChange.emit(i),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,i){this.activeDate=e,this.currentView=i}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-calendar"]],viewQuery:function(i,r){if(i&1&&Ge($x,5)(Wx,5)(Gx,5),i&2){let o;U(o=z())&&(r.monthView=o.first),U(o=z())&&(r.yearView=o.first),U(o=z())&&(r.multiYearView=o.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[pe([Zx]),Te],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(i,r){if(i&1&&(Ce(0,jL,0,0,"ng-template",0),g(1,"div",1),fe(2,HL,1,11,"mat-month-view",2)(3,UL,1,6,"mat-year-view",3)(4,zL,1,6,"mat-multi-year-view",3),m()),i&2){let o;k("cdkPortalOutlet",r._calendarHeaderPortal),_(2),he((o=r.currentView)==="month"?2:o==="year"?3:o==="multi-year"?4:-1)}},dependencies:[Er,H_,$x,Wx,Gx],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})(),eV=new y("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(j);return()=>Mr(t)}}),eM=(()=>{class t{_elementRef=d(R);_animationsDisabled=qe();_changeDetectorRef=d(we);_globalModel=d(rc);_dateAdapter=d(vt);_ngZone=d(P);_rangeSelectionStrategy=d(Kx,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new E;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(d(We).load(bn),this._closeButtonText=d(Za).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,i=d(Ae);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[i.listen(e,"animationstart",this._handleAnimationEvent),i.listen(e,"animationend",this._handleAnimationEvent),i.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let i=this._model.selection,r=e.value,o=i instanceof En;if(o&&this._rangeSelectionStrategy){let a=this._rangeSelectionStrategy.selectionFinished(r,i,e.event);this._model.updateSelection(a,this)}else r&&(o||!this._dateAdapter.sameDate(r,i))&&this._model.add(r);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let i=this._elementRef.nativeElement;e.target!==i||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",i.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,i){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,i&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-datepicker-content"]],viewQuery:function(i,r){if(i&1&&Ge(Lv,5),i&2){let o;U(o=z())&&(r._calendar=o.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(i,r){i&2&&(xt(r.color?"mat-"+r.color:""),$("mat-datepicker-content-touch",r.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!r._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(i,r){i&1&&(g(0,"div",0)(1,"mat-calendar",1),ne("yearSelected",function(a){return r.datepicker._selectYear(a)})("monthSelected",function(a){return r.datepicker._selectMonth(a)})("viewChanged",function(a){return r.datepicker._viewChanged(a)})("_userSelection",function(a){return r._handleUserSelection(a)})("_userDragDrop",function(a){return r._handleUserDragDrop(a)}),m(),Ce(2,$L,0,0,"ng-template",2),g(3,"button",3),ne("focus",function(){return r._closeButtonFocused=!0})("blur",function(){return r._closeButtonFocused=!1})("click",function(){return r.datepicker.close()}),C(4),m()()),i&2&&($("mat-datepicker-content-container-with-custom-header",r.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",r._actionsPortal),Z("aria-modal",!0)("aria-labelledby",r._dialogLabelId??void 0),_(),xt(r.datepicker.panelClass),k("id",r.datepicker.id)("startAt",r.datepicker.startAt)("startView",r.datepicker.startView)("minDate",r.datepicker._getMinDate())("maxDate",r.datepicker._getMaxDate())("dateFilter",r.datepicker._getDateFilter())("headerComponent",r.datepicker.calendarHeaderComponent)("selected",r._getSelected())("dateClass",r.datepicker.dateClass)("comparisonStart",r.comparisonStart)("comparisonEnd",r.comparisonEnd)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName),_(),k("cdkPortalOutlet",r._actionsPortal),_(),$("cdk-visually-hidden",!r._closeButtonFocused),k("color",r.color||"primary"),_(),Mt(r._closeButtonText))},dependencies:[W_,Lv,Er,on],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2,changeDetection:0})}return t})(),qx=(()=>{class t{_injector=d(j);_viewContainerRef=d($e);_dateAdapter=d(vt,{optional:!0});_dir=d(Ye,{optional:!0});_model=d(rc);_animationsDisabled=qe();_scrollStrategy=d(eV);_inputStateChanges=se.EMPTY;_document=d(H);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition="start";yPosition="below";restoreFocus=!0;yearSelected=new N;monthSelected=new N;viewChanged=new N(!0);dateClass;openedStream=new N;closedStream=new N;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=ZE(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=d(Ue).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new E;_changeDetectorRef=d(we);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let i=e.xPosition||e.yPosition;if(i&&!i.firstChange&&this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;r instanceof $a&&(this._setConnectedPositions(r),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=yn(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",i=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:r,location:o}=this._componentRef;r._animationDone.pipe(ft(1)).subscribe(()=>{let a=this._document.activeElement;e&&(!a||a===this._document.activeElement||o.nativeElement.contains(a))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),r._startExitAnimation()}e?setTimeout(i):i()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,i=new $n(eM,this._viewContainerRef),r=this._overlayRef=pi(this._injector,new Ir({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?xr(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(r).subscribe(o=>{o&&o.preventDefault(),this.close()}),r.keydownEvents().subscribe(o=>{let a=o.keyCode;(a===38||a===40||a===37||a===39||a===33||a===34)&&o.preventDefault()}),this._componentRef=r.attach(i),this._forwardContentValues(this._componentRef.instance),e||Ve(()=>{r.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return Tr(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=Sr(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let i=this.xPosition==="end"?"end":"start",r=i==="start"?"end":"start",o=this.yPosition==="above"?"bottom":"top",a=o==="top"?"bottom":"top";return e.withPositions([{originX:i,originY:a,overlayX:i,overlayY:o},{originX:i,originY:o,overlayX:i,overlayY:a},{originX:r,originY:a,overlayX:r,overlayY:o},{originX:r,originY:o,overlayX:r,overlayY:a}])}_getCloseStream(e){let i=["ctrlKey","shiftKey","metaKey"];return ln(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(be(r=>r.keyCode===27&&!ut(r)||this.datepickerInput&&ut(r,"altKey")&&r.keyCode===38&&i.every(o=>!ut(r,o)))))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",K],disabled:[2,"disabled","disabled",K],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",K],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",K]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[Te]})}return t})(),tM=(()=>{class t extends qx{static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275cmp=S({type:t,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[pe([Zx,{provide:qx,useExisting:t}]),te],decls:0,vars:0,template:function(i,r){},encapsulation:2,changeDetection:0})}return t})(),qa=class{target;targetElement;value=null;constructor(n,e){this.target=n,this.targetElement=e,this.value=this.target.value}},tV=(()=>{class t{_elementRef=d(R);_dateAdapter=d(vt,{optional:!0});_dateFormats=d(Gn,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let i=e,r=this._elementRef.nativeElement;this._disabled!==i&&(this._disabled=i,this.stateChanges.next(void 0)),i&&this._isInitialized&&r.blur&&r.blur()}_disabled;dateChange=new N;dateInput=new N;stateChanges=new E;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=se.EMPTY;_localeSubscription=se.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!i||this._matchesFilter(i)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),r=this._getMinDate();return!r||!i||this._dateAdapter.compareDate(r,i)<=0?null:{matDatepickerMin:{min:r,actual:i}}};_maxValidator=e=>{let i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),r=this._getMaxDate();return!r||!i||this._dateAdapter.compareDate(r,i)>=0?null:{matDatepickerMax:{max:r,actual:i}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(i=>{if(this._shouldHandleChangeEvent(i)){let r=this._getValueFromModel(i.selection);this._lastValueValid=this._isValidValue(r),this._cvaOnChange(r),this._onTouched(),this._formatValue(r),this.dateInput.emit(new qa(this,this._elementRef.nativeElement)),this.dateChange.emit(new qa(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){nV(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){let i=["ctrlKey","shiftKey","metaKey"];ut(e,"altKey")&&e.keyCode===40&&i.every(o=>!ut(e,o))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let i=e.target.value,r=this._lastValueValid,o=this._dateAdapter.parse(i,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(o),o=this._dateAdapter.getValidDateOrNull(o);let a=!this._dateAdapter.sameDate(o,this.value);!o||a?this._cvaOnChange(o):(i&&!this.value&&this._cvaOnChange(o),r!==this._lastValueValid&&this._validatorOnChange()),a&&(this._assignValue(o),this.dateInput.emit(new qa(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new qa(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):""}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,i){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),i&&this._formatValue(e)}_matchesFilter(e){let i=this._getDateFilter();return!i||i(e)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,inputs:{value:"value",disabled:[2,"disabled","disabled",K]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[Te]})}return t})();function nV(t,n){let e=Object.keys(t);for(let i of e){let{previousValue:r,currentValue:o}=t[i];if(n.isDateInstance(r)&&n.isDateInstance(o)){if(!n.sameDate(r,o))return!0}else return!0}return!1}var iV={provide:Eo,useExisting:Ot(()=>Jf),multi:!0},rV={provide:Io,useExisting:Ot(()=>Jf),multi:!0},Jf=(()=>{class t extends tV{_formField=d(xo,{optional:!0});_closedSubscription=se.EMPTY;_openedSubscription=se.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=O(null);get min(){return this._min}set min(e){let i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(i,this._min)||(this._min=i,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(i,this._max)||(this._max=i,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let i=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==i&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=wn.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(i,r){i&1&&ne("input",function(a){return r._onInput(a)})("change",function(){return r._onChange()})("blur",function(){return r._onBlur()})("keydown",function(a){return r._onKeydown(a)}),i&2&&(Qe("disabled",r.disabled),Z("aria-haspopup",r._datepicker?"dialog":null)("aria-owns",r._ariaOwns())("min",r.min?r._dateAdapter.toIso8601(r.min):null)("max",r.max?r._dateAdapter.toIso8601(r.max):null)("data-mat-calendar",r._datepicker?r._datepicker.id:null))},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[pe([iV,rV,{provide:Wa,useExisting:t}]),te]})}return t})(),oV=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","matDatepickerToggleIcon",""]]})}return t})(),Vv=(()=>{class t{_intl=d(Za);_changeDetectorRef=d(we);_stateChanges=se.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=d(new ai("tabindex"),{optional:!0}),i=Number(e);this.tabIndex=i||i===0?i:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:W(),i=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:W(),r=this.datepicker?ln(this.datepicker.openedStream,this.datepicker.closedStream):W();this._stateChanges.unsubscribe(),this._stateChanges=ln(this._intl.changes,e,i,r).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-datepicker-toggle"]],contentQueries:function(i,r,o){if(i&1&&Ht(o,oV,5),i&2){let a;U(a=z())&&(r._customIcon=a.first)}},viewQuery:function(i,r){if(i&1&&Ge(GL,5),i&2){let o;U(o=z())&&(r._button=o.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(i,r){i&1&&ne("click",function(a){return r._open(a)}),i&2&&(Z("tabindex",null)("data-mat-calendar",r.datepicker?r.datepicker.id:null),$("mat-datepicker-toggle-active",r.datepicker&&r.datepicker.opened)("mat-accent",r.datepicker&&r.datepicker.color==="accent")("mat-warn",r.datepicker&&r.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",K],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[Te],ngContentSelectors:qL,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(i,r){i&1&&(ke(WL),g(0,"button",1,0),fe(2,YL,2,0,":svg:svg",2),X(3),m()),i&2&&(k("tabIndex",r.disabled?-1:r.tabIndex)("disabled",r.disabled)("disableRipple",r.disableRipple),Z("aria-haspopup",r.datepicker?"dialog":null)("aria-label",r.ariaLabel||r._intl.openCalendarLabel)("aria-expanded",r.datepicker?r.datepicker.opened:null),_(2),he(r._customIcon?-1:2))},dependencies:[Fa],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var nM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({providers:[Za],imports:[Cn,ec,lf,Ua,eM,Vv,Jx,Ie,Mo]})}return t})();var oc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({imports:[af,Lf,Ie]})}return t})();var lV=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return t})(),cV={passive:!0},iM=(()=>{class t{_platform=d(ue);_ngZone=d(P);_renderer=d(st).createRenderer(null,null);_styleLoader=d(We);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Je;this._styleLoader.load(lV);let i=rn(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new E,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,cV)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(e){let i=rn(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var rM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({})}return t})();var dV=["button","checkbox","file","hidden","image","radio","range","reset","submit"],uV=new y("MAT_INPUT_CONFIG"),oM=(()=>{class t{_elementRef=d(R);_platform=d(ue);ngControl=d(Dr,{optional:!0,self:!0});_autofillMonitor=d(iM);_ngZone=d(P);_formField=d(xo,{optional:!0});_renderer=d(Ae);_uid=d(Ue).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=d(uV,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new E;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Li(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(wn.required)??!1}set required(e){this._required=Li(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Q_().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Li(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Q_().has(e));constructor(){let e=d(kf,{optional:!0}),i=d(ja,{optional:!0}),r=d(Nf),o=d(Wa,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?oi(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Of(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Kt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){dV.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&ne("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(Qe("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),Z("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),$("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",K]},exportAs:["matInput"],features:[pe([{provide:Pf,useExisting:t}]),Te]})}return t})(),aM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({imports:[oc,oc,rM,Ie]})}return t})();var sM=(()=>{class t{_animationsDisabled=qe();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&$("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return t})();var hV=["text"],pV=[[["mat-icon"]],"*"],mV=["mat-icon","*"];function gV(t,n){if(t&1&&A(0,"mat-pseudo-checkbox",1),t&2){let e=J();k("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function _V(t,n){if(t&1&&A(0,"mat-pseudo-checkbox",3),t&2){let e=J();k("disabled",e.disabled)}}function vV(t,n){if(t&1&&(g(0,"span",4),C(1),m()),t&2){let e=J();_(),He("(",e.group.label,")")}}var jv=new y("MAT_OPTION_PARENT_COMPONENT"),yV=new y("MatOptgroup");var Bv=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},eh=(()=>{class t{_element=d(R);_changeDetectorRef=d(we);_parent=d(jv,{optional:!0});group=d(yV,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=d(Ue).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=O(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new N;_text;_stateChanges=new E;constructor(){let e=d(We);e.load(Vi),e.load(bn),this._signalDisableRipple=!!this._parent&&oi(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!ut(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Bv(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&Ge(hV,7),i&2){let o;U(o=z())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&ne("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),i&2&&(Qe("id",r.id),Z("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),$("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",K]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:mV,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(ke(pV),fe(0,gV,1,2,"mat-pseudo-checkbox",1),X(1),g(2,"span",2,0),X(4,1),m(),fe(5,_V,1,1,"mat-pseudo-checkbox",3),fe(6,vV,2,1,"span",4),A(7,"div",5)),i&2&&(he(r.multiple?0:-1),_(5),he(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),_(),he(r.group&&r.group._inert?6:-1),_(),k("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[sM,eI],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})();var bV=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,DV=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function Hv(t,n){let e=Array(t);for(let i=0;i<t;i++)e[i]=n(i);return e}var CV=(()=>{class t extends vt{_matDateLocale=d(Tv,{optional:!0});constructor(){super();let e=d(Tv,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let i=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return Hv(12,r=>this._format(i,new Date(2017,r,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return Hv(31,i=>this._format(e,new Date(2017,0,i+1)))}getDayOfWeekNames(e){let i=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return Hv(7,r=>this._format(i,new Date(2017,0,r+1)))}getYearName(e){let i=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(i,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),i=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return i===7?0:i}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,i,r){let o=this._createDateWithOverflow(e,i,r);return o.getMonth()!=i,o}today(){return new Date}parse(e,i){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,i){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let r=new Intl.DateTimeFormat(this.locale,Y(b({},i),{timeZone:"utc"}));return this._format(r,e)}addCalendarYears(e,i){return this.addCalendarMonths(e,i*12)}addCalendarMonths(e,i){let r=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+i,this.getDate(e));return this.getMonth(r)!=((this.getMonth(e)+i)%12+12)%12&&(r=this._createDateWithOverflow(this.getYear(r),this.getMonth(r),0)),r}addCalendarDays(e,i){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+i)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(bV.test(e)){let i=new Date(e);if(this.isValid(i))return i}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,i,r,o){let a=this.clone(e);return a.setHours(i,r,o,0),a}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,i){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let r=e.trim();if(r.length===0)return null;let o=this._parseTimeString(r);if(o===null){let a=r.replace(/[^0-9:(AM|PM)]/gi,"").trim();a.length>0&&(o=this._parseTimeString(a))}return o||this.invalid()}addSeconds(e,i){return new Date(e.getTime()+i*1e3)}_createDateWithOverflow(e,i,r){let o=new Date;return o.setFullYear(e,i,r),o.setHours(0,0,0,0),o}_2digit(e){return("00"+e).slice(-2)}_format(e,i){let r=new Date;return r.setUTCFullYear(i.getFullYear(),i.getMonth(),i.getDate()),r.setUTCHours(i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()),e.format(r)}_parseTimeString(e){let i=e.toUpperCase().match(DV);if(i){let r=parseInt(i[1]),o=parseInt(i[2]),a=i[3]==null?void 0:parseInt(i[3]),s=i[4];if(r===12?r=s==="AM"?0:r:s==="PM"&&(r+=12),Uv(r,0,23)&&Uv(o,0,59)&&(a==null||Uv(a,0,59)))return this.setTime(this.today(),r,o,a||0)}return null}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();function Uv(t,n,e){return!isNaN(t)&&t>=n&&t<=e}var wV={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};function lM(t=wV){return[{provide:vt,useClass:CV},{provide:Gn,useValue:t}]}var EV=["panelTemplate"],IV=(t,n)=>n.value;function xV(t,n){if(t&1){let e=Ti();g(0,"mat-option",3),ne("onSelectionChange",function(r){Dt(e);let o=J(2);return Ct(o._selectValue(r.source))}),C(1),m()}if(t&2){let e=n.$implicit;k("value",e.value),_(),Mt(e.label)}}function MV(t,n){if(t&1){let e=Ti();g(0,"div",1),ne("animationend",function(r){Dt(e);let o=J();return Ct(o._handleAnimationEnd(r))}),Qt(1,xV,2,2,"mat-option",2,IV),m()}if(t&2){let e=J();$("mat-timepicker-panel-animations-enabled",!e._animationsDisabled)("mat-timepicker-panel-exit",!e.isOpen()),k("id",e.panelId),Z("aria-label",e.ariaLabel()||null)("aria-labelledby",e._getAriaLabelledby()),_(),Xt(e._timeOptions)}}var SV=[[["","matTimepickerToggleIcon",""]]],TV=["[matTimepickerToggleIcon]"];function AV(t,n){t&1&&(Yt(),g(0,"svg",1),A(1,"path",2),m())}var RV=/^(\d*\.?\d+)\s*(h|hour|hours|m|min|minute|minutes|s|second|seconds)?$/i,dM=new y("MAT_TIMEPICKER_CONFIG");function cM(t){let n;if(t===null)return null;if(typeof t=="number")n=t;else{if(t.trim().length===0)return null;let e=t.match(RV),i=e?parseFloat(e[1]):null,r=e?.[2]?.toLowerCase()||null;if(!e||i===null||isNaN(i))return null;r==="h"||r==="hour"||r==="hours"?n=i*3600:r==="m"||r==="min"||r==="minute"||r==="minutes"?n=i*60:n=i}return n}function kV(t,n,e,i,r){let o=[],a=t.compareTime(e,i)<1?e:i;for(;t.sameDate(a,e)&&t.compareTime(a,i)<1&&t.isValid(a);)o.push({value:a,label:t.format(a,n.display.timeOptionLabel)}),a=t.addSeconds(a,r);return o}var NV=new y("MAT_TIMEPICKER_SCROLL_STRATEGY",{providedIn:"root",factory:()=>{let t=d(j);return()=>Mr(t)}}),$v=(()=>{class t{_dir=d(Ye,{optional:!0});_viewContainerRef=d($e);_injector=d(j);_defaultConfig=d(dM,{optional:!0});_dateAdapter=d(vt,{optional:!0});_dateFormats=d(Gn,{optional:!0});_scrollStrategyFactory=d(NV);_animationsDisabled=qe();_isOpen=O(!1);_activeDescendant=O(null);_input=O(null);_overlayRef=null;_portal=null;_optionsCacheKey=null;_localeChanges;_onOpenRender=null;_panelTemplate=fo.required("panelTemplate");_timeOptions=[];_options=k0(eh);_keyManager=new Vl(this._options,this._injector).withHomeAndEnd(!0).withPageUpDown(!0).withVerticalOrientation(!0);interval=ct(cM(this._defaultConfig?.interval||null),{transform:cM});options=ct(null);isOpen=this._isOpen.asReadonly();selected=lu();opened=lu();closed=lu();activeDescendant=this._activeDescendant.asReadonly();panelId=d(Ue).getId("mat-timepicker-panel-");disableRipple=ct(this._defaultConfig?.disableRipple??!1,{transform:K});ariaLabel=ct(null,{alias:"aria-label"});ariaLabelledby=ct(null,{alias:"aria-labelledby"});disabled=it(()=>!!this._input()?.disabled());panelClass=ct();constructor(){d(R).nativeElement.setAttribute("mat-timepicker-panel-id",this.panelId),this._handleLocaleChanges(),this._handleInputStateChanges(),this._keyManager.change.subscribe(()=>this._activeDescendant.set(this._keyManager.activeItem?.id||null))}open(){let e=this._input();if(!e||(e.focus(),this._isOpen()))return;this._isOpen.set(!0),this._generateOptions();let i=this._getOverlayRef();i.updateSize({width:e.getOverlayOrigin().nativeElement.offsetWidth}),this._portal??=new Hi(this._panelTemplate(),this._viewContainerRef),i.hasAttached()||i.attach(this._portal),this._onOpenRender?.destroy(),this._onOpenRender=Ve(()=>{let r=this._options();this._syncSelectedState(e.value(),r,r[0]),this._onOpenRender=null},{injector:this._injector}),this.opened.emit()}close(){this._isOpen()&&(this._isOpen.set(!1),this.closed.emit(),this._animationsDisabled&&this._overlayRef?.detach())}registerInput(e){let i=this._input();this._input.set(e)}ngOnDestroy(){this._keyManager.destroy(),this._localeChanges?.unsubscribe(),this._onOpenRender?.destroy(),this._overlayRef?.dispose()}_getOverlayHost(){return this._overlayRef?.hostElement}_selectValue(e){this.close(),this._keyManager.setActiveItem(e),this._options().forEach(i=>{i!==e&&i.deselect(!1)}),this._input()?.timepickerValueAssigned(e.value),this.selected.emit({value:e.value,source:this}),this._input()?.focus()}_getAriaLabelledby(){return this.ariaLabel()?null:this.ariaLabelledby()||this._input()?.getLabelId()||null}_handleAnimationEnd(e){e.animationName==="_mat-timepicker-exit"&&this._overlayRef?.detach()}_getOverlayRef(){if(this._overlayRef)return this._overlayRef;let e=Sr(this._injector,this._input().getOverlayOrigin()).withFlexibleDimensions(!1).withPush(!1).withTransformOriginOn(".mat-timepicker-panel").withPopoverLocation("inline").withPositions([{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-timepicker-above"}]);return this._overlayRef=pi(this._injector,{positionStrategy:e,scrollStrategy:this._scrollStrategyFactory(),direction:this._dir||"ltr",hasBackdrop:!1,disableAnimations:this._animationsDisabled,panelClass:this.panelClass()}),this._overlayRef.detachments().subscribe(()=>this.close()),this._overlayRef.keydownEvents().subscribe(i=>this._handleKeydown(i)),this._overlayRef.outsidePointerEvents().subscribe(i=>{let r=St(i),o=this._input()?.getOverlayOrigin().nativeElement;r&&o&&r!==o&&!o.contains(r)&&this.close()}),this._overlayRef}_generateOptions(){let e=this.interval()??1800,i=this.options();if(i!==null)this._timeOptions=i;else{let r=this._input(),o=this._dateAdapter,a=this._dateFormats.display.timeInput,s=r?.min()||o.setTime(o.today(),0,0,0),l=r?.max()||o.setTime(o.today(),23,59,0),c=e+"/"+o.format(s,a)+"/"+o.format(l,a);c!==this._optionsCacheKey&&(this._optionsCacheKey=c,this._timeOptions=kV(o,this._dateFormats,s,l,e))}}_syncSelectedState(e,i,r){let o=!1;for(let a of i)e&&this._dateAdapter.sameTime(a.value,e)?(a.select(!1),zv(a,"center"),ge(()=>this._keyManager.setActiveItem(a)),o=!0):a.deselect(!1);o||(r?(ge(()=>this._keyManager.setActiveItem(r)),zv(r,"center")):ge(()=>this._keyManager.setActiveItem(-1)))}_handleKeydown(e){let i=e.keyCode;if(i===9)this.close();else if(i===27&&!ut(e))e.preventDefault(),this.close();else if(i===13)e.preventDefault(),this._keyManager.activeItem?this._selectValue(this._keyManager.activeItem):this.close();else{let r=this._keyManager.activeItem;this._keyManager.onKeydown(e);let o=this._keyManager.activeItem;o&&o!==r&&zv(o,"nearest")}}_handleLocaleChanges(){this._localeChanges=this._dateAdapter.localeChanges.subscribe(()=>{this._optionsCacheKey=null,this.isOpen()&&this._generateOptions()})}_handleInputStateChanges(){Kt(()=>{let e=this._input(),i=this._options();this._isOpen()&&e&&this._syncSelectedState(e.value(),i,null)})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-timepicker"]],viewQuery:function(i,r){i&1&&ua(r._panelTemplate,EV,5)(r._options,eh,5),i&2&&fa(2)},inputs:{interval:[1,"interval"],options:[1,"options"],disableRipple:[1,"disableRipple"],ariaLabel:[1,"aria-label","ariaLabel"],ariaLabelledby:[1,"aria-labelledby","ariaLabelledby"],panelClass:[1,"panelClass"]},outputs:{selected:"selected",opened:"opened",closed:"closed"},exportAs:["matTimepicker"],features:[pe([{provide:jv,useExisting:t}])],decls:2,vars:0,consts:[["panelTemplate",""],["role","listbox",1,"mat-timepicker-panel",3,"animationend","id"],[3,"value"],[3,"onSelectionChange","value"]],template:function(i,r){i&1&&Ce(0,MV,3,7,"ng-template",null,0,lo)},dependencies:[eh],styles:[`@keyframes _mat-timepicker-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-timepicker-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
mat-timepicker {
  display: none;
}

.mat-timepicker-panel {
  width: 100%;
  max-height: 256px;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-bottom-left-radius: var(--mat-timepicker-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-timepicker-container-shape, var(--mat-sys-corner-extra-small));
  box-shadow: var(--mat-timepicker-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--mat-timepicker-container-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  .mat-timepicker-panel {
    outline: solid 1px;
  }
}
.mat-timepicker-above .mat-timepicker-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-timepicker-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-timepicker-container-shape, var(--mat-sys-corner-extra-small));
}

.mat-timepicker-panel-animations-enabled {
  animation: _mat-timepicker-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-timepicker-panel-animations-enabled.mat-timepicker-panel-exit {
  animation: _mat-timepicker-exit 100ms linear;
}

.mat-timepicker-input[readonly] {
  cursor: pointer;
}

@media (forced-colors: active) {
  .mat-timepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function zv(t,n){t._getHostElement().scrollIntoView({block:n,inline:n})}var uM=(()=>{class t{_elementRef=d(R);_dateAdapter=d(vt,{optional:!0});_dateFormats=d(Gn,{optional:!0});_formField=d(xo,{optional:!0});_onChange;_onTouched;_validatorOnChange;_cleanupClick;_accessorDisabled=O(!1);_localeSubscription;_timepickerSubscription;_validator;_lastValueValid=!0;_minValid=!0;_maxValid=!0;_lastValidDate=null;_ariaActiveDescendant=it(()=>{let e=this.timepicker(),i=e.isOpen(),r=e.activeDescendant();return i&&r?r:null});_ariaExpanded=it(()=>this.timepicker().isOpen()+"");_ariaControls=it(()=>{let e=this.timepicker();return e.isOpen()?e.panelId:null});value=F0(null);timepicker=ct.required({alias:"matTimepicker"});min=ct(null,{alias:"matTimepickerMin",transform:e=>this._transformDateInput(e)});max=ct(null,{alias:"matTimepickerMax",transform:e=>this._transformDateInput(e)});openOnClick=ct(!0,{alias:"matTimepickerOpenOnClick",transform:K});disabled=it(()=>this.disabledInput()||this._accessorDisabled());disabledInput=ct(!1,{transform:K,alias:"disabled"});constructor(){let e=d(Ae);this._validator=this._getValidator(),this._updateFormsState(),this._registerTimepicker(),this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._hasFocus()||this._formatValue(this.value())}),this._cleanupClick=e.listen(this.getOverlayOrigin().nativeElement,"click",this._handleClick)}writeValue(e){let i=this._dateAdapter.deserialize(e);this.value.set(this._dateAdapter.getValidDateOrNull(i))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._accessorDisabled.set(e)}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._validatorOnChange=e}getOverlayOrigin(){return this._formField?.getConnectedOverlayOrigin()||this._elementRef}focus(){this._elementRef.nativeElement.focus()}ngOnDestroy(){this._cleanupClick(),this._timepickerSubscription?.unsubscribe(),this._localeSubscription.unsubscribe()}getLabelId(){return this._formField?.getLabelId()||null}_handleClick=e=>{if(this.disabled()||!this.openOnClick())return;let i=St(e),r=this.timepicker()._getOverlayHost();(!i||!r||!r.contains(i))&&this.timepicker().open()};_handleInput(e){let i=e.target.value,r=this.value(),o=this._dateAdapter.parseTime(i,this._dateFormats.parse.timeInput),a=!this._dateAdapter.sameTime(o,r);!o||a||i&&!r?this._assignUserSelection(o,!0):this._validatorOnChange?.()}_handleBlur(){let e=this.value();e&&this._isValid(e)&&this._formatValue(e),this.timepicker().isOpen()||this._onTouched?.()}_handleKeydown(e){this.timepicker().isOpen()||this.disabled()||(e.keyCode===27&&!ut(e)&&this.value()!==null?(e.preventDefault(),this.value.set(null),this._formatValue(null)):(e.keyCode===40||e.keyCode===38)&&(e.preventDefault(),this.timepicker().open()))}timepickerValueAssigned(e){this._dateAdapter.sameTime(e,this.value())||(this._assignUserSelection(e,!0),this._formatValue(e))}_updateFormsState(){Kt(()=>{let{_dateAdapter:e,_lastValueValid:i,_minValid:r,_maxValid:o}=this,a=e.deserialize(this.value()),s=this.min(),l=this.max(),c=this._lastValueValid=this._isValid(a);this._minValid=!s||!a||!c||e.compareTime(s,a)<=0,this._maxValid=!l||!a||!c||e.compareTime(l,a)>=0;let u=i!==c||r!==this._minValid||o!==this._maxValid;this._hasFocus()||this._formatValue(a),a&&c&&(this._lastValidDate=a),u&&this._validatorOnChange?.()})}_registerTimepicker(){Kt(()=>{let e=this.timepicker();e.registerInput(this),e.closed.subscribe(()=>this._onTouched?.())})}_assignUserSelection(e,i){let r;if(e==null||!this._isValid(e))r=e;else{let o=this._dateAdapter,a=o.getValidDateOrNull(this._lastValidDate||this.value()),s=o.getHours(e),l=o.getMinutes(e),c=o.getSeconds(e);r=a?o.setTime(a,s,l,c):e}i&&this._onChange?.(r),this.value.set(r)}_formatValue(e){e=this._dateAdapter.getValidDateOrNull(e),this._elementRef.nativeElement.value=e==null?"":this._dateAdapter.format(e,this._dateFormats.display.timeInput)}_isValid(e){return!e||this._dateAdapter.isValid(e)}_transformDateInput(e){let i=typeof e=="string"?this._dateAdapter.parseTime(e,this._dateFormats.parse.timeInput):this._dateAdapter.deserialize(e);return i&&this._dateAdapter.isValid(i)?i:null}_hasFocus(){return yn()===this._elementRef.nativeElement}_getValidator(){return wn.compose([()=>this._lastValueValid?null:{matTimepickerParse:{text:this._elementRef.nativeElement.value}},e=>this._minValid?null:{matTimepickerMin:{min:this.min(),actual:this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value))}},e=>this._maxValid?null:{matTimepickerMax:{max:this.max(),actual:this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value))}}])}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["input","matTimepicker",""]],hostAttrs:["role","combobox","type","text","aria-haspopup","listbox",1,"mat-timepicker-input"],hostVars:5,hostBindings:function(i,r){if(i&1&&ne("blur",function(){return r._handleBlur()})("input",function(a){return r._handleInput(a)})("keydown",function(a){return r._handleKeydown(a)}),i&2){let o;Qe("disabled",r.disabled()),Z("aria-activedescendant",r._ariaActiveDescendant())("aria-expanded",r._ariaExpanded())("aria-controls",r._ariaControls())("mat-timepicker-id",(o=r.timepicker())==null?null:o.panelId)}},inputs:{value:[1,"value"],timepicker:[1,"matTimepicker","timepicker"],min:[1,"matTimepickerMin","min"],max:[1,"matTimepickerMax","max"],openOnClick:[1,"matTimepickerOpenOnClick","openOnClick"],disabledInput:[1,"disabled","disabledInput"]},outputs:{value:"valueChange"},exportAs:["matTimepickerInput"],features:[pe([{provide:Eo,useExisting:t,multi:!0},{provide:Io,useExisting:t,multi:!0},{provide:Wa,useExisting:t}])]})}return t})(),Gv=(()=>{class t{_defaultConfig=d(dM,{optional:!0});_defaultTabIndex=(()=>{let e=d(new ai("tabindex"),{optional:!0}),i=Number(e);return isNaN(i)?null:i})();_isDisabled=it(()=>{let e=this.timepicker();return this.disabled()||e.disabled()});timepicker=ct.required({alias:"for"});ariaLabel=ct(void 0,{alias:"aria-label"});ariaLabelledby=ct(void 0,{alias:"aria-labelledby"});_defaultAriaLabel="Open timepicker options";disabled=ct(!1,{transform:K,alias:"disabled"});tabIndex=ct(this._defaultTabIndex);disableRipple=ct(this._defaultConfig?.disableRipple??!1,{transform:K});_open(e){this.timepicker()&&!this._isDisabled()&&(this.timepicker().open(),e.stopPropagation())}getAriaLabel(){return this.ariaLabelledby()?null:this.ariaLabel()||this._defaultAriaLabel}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-timepicker-toggle"]],hostAttrs:[1,"mat-timepicker-toggle"],hostVars:1,hostBindings:function(i,r){i&1&&ne("click",function(a){return r._open(a)}),i&2&&Z("tabindex",null)},inputs:{timepicker:[1,"for","timepicker"],ariaLabel:[1,"aria-label","ariaLabel"],ariaLabelledby:[1,"aria-labelledby","ariaLabelledby"],disabled:[1,"disabled"],tabIndex:[1,"tabIndex"],disableRipple:[1,"disableRipple"]},exportAs:["matTimepickerToggle"],ngContentSelectors:TV,decls:3,vars:6,consts:[["matIconButton","","type","button","aria-haspopup","listbox",3,"tabIndex","disabled","disableRipple"],["height","24px","width","24px","viewBox","0 -960 960 960","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-timepicker-toggle-default-icon"],["d","m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"]],template:function(i,r){i&1&&(ke(SV),g(0,"button",0),X(1,0,null,AV,2,0),m()),i&2&&(k("tabIndex",r._isDisabled()?-1:r.tabIndex())("disabled",r._isDisabled())("disableRipple",r.disableRipple()),Z("aria-label",r.getAriaLabel())("aria-labelledby",r.ariaLabelledby())("aria-expanded",r.timepicker().isOpen()))},dependencies:[Fa],encapsulation:2,changeDetection:0})}return t})(),fM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({imports:[$v,Gv,Mo]})}return t})();var Ka=class t{constructor(n){this.http=n}apikey="02945d48-ec75-43ed-b0b8-1eec056446aa";baseUrl="https://api-pasedelista.onrender.com/api";url=`${this.baseUrl}/grupos?apikey=${this.apikey}`;obtenerTodos(){return this.http.get(this.url)}agregar(n){return this.http.post(this.baseUrl+"/grupos/crear",n)}static \u0275fac=function(e){return new(e||t)(B(r_))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})};var th=class t{constructor(n,e){this.formBuilder=n;this.service=e;this.formGroup=this.formBuilder.group({materia:["",wn.required],fechaInicio:["",wn.required],fechaFin:["",wn.required],horaDeEntrada1:"",horaDeSalida1:"",horaDeEntrada2:"",horaDeSalida2:"",horaDeEntrada3:"",horaDeSalida3:"",horaDeEntrada4:"",horaDeSalida4:"",horaDeEntrada5:"",horaDeSalida5:"",retardo1:"",retardo2:"",retardo3:"",retardo4:"",retardo5:"",corte1:"",corte2:"",corte3:"",corte4:"",corte5:""})}formGroup;dialogRef=d(Ao);guardar(){if(this.formGroup.valid){let n={materia:this.formGroup.value.materia,fechaInicio:this.formGroup.value.fechaInicio,fechaFin:this.formGroup.value.fechaFin,horarios:[{dia:"lunes",horaInicial:this.obtenerHora(this.formGroup.value.horaDeEntrada1),horaFinal:this.obtenerHora(this.formGroup.value.horaDeSalida1),tolerancia:this.formGroup.value.tolerancia1,corte:this.formGroup.value.corte1},{dia:"martes",horaInicial:this.obtenerHora(this.formGroup.value.horaDeEntrada2),horaFinal:this.obtenerHora(this.formGroup.value.horaDeSalida2),tolerancia:this.formGroup.value.tolerancia2,corte:this.formGroup.value.corte2},{dia:"miercoles",horaInicial:this.obtenerHora(this.formGroup.value.horaDeEntrada3),horaFinal:this.obtenerHora(this.formGroup.value.horaDeSalida3),tolerancia:this.formGroup.value.tolerancia3,corte:this.formGroup.value.corte3},{dia:"jueves",horaInicial:this.obtenerHora(this.formGroup.value.horaDeEntrada4),horaFinal:this.obtenerHora(this.formGroup.value.horaDeSalida4),tolerancia:this.formGroup.value.tolerancia4,corte:this.formGroup.value.corte4},{dia:"viernes",horaInicial:this.obtenerHora(this.formGroup.value.horaDeEntrada5),horaFinal:this.obtenerHora(this.formGroup.value.horaDeSalida5),tolerancia:this.formGroup.value.tolerancia5,corte:this.formGroup.value.corte5}]};console.log(n),this.service.agregar(n).subscribe({next:e=>{this.dialogRef.close()}})}}obtenerHora(n){let e=n.getHours().toString().padStart(2,"0"),i=n.getMinutes().toString().padStart(2,"0");return`${e}:${i}`}static \u0275fac=function(e){return new(e||t)(de(jI),de(Ka))};static \u0275cmp=S({type:t,selectors:[["app-formualario-de-materia"]],features:[pe([lM()])],decls:176,vars:25,consts:[["fechaDeInicio",""],["datepicker",""],["horaDeEntradaLunes",""],["horaDeSalidaLunes",""],["horaDeEntradaMartes",""],["horaDeSalidaMartes",""],["horaDeEntradaMiercoles",""],["horaDeSalidaMiercoles",""],["horaDeEntradaJueves",""],["horaDeSalidaJueves",""],["horaDeEntradaViernes",""],["horaDeSalidaViernes",""],[1,"container"],["mat-dialog-title",""],[3,"ngSubmit","formGroup"],["matInput","","placeholder","Programaci\xF3n","formControlName","materia"],["placeholder","inicio","matInput","","formControlName","fechaInicio",3,"matDatepicker"],["matSuffix","",3,"for"],["placeholder","fin","matInput","","formControlName","fechaFin",3,"matDatepicker"],[1,"table"],["matInput","","formControlName","horaDeEntrada1","placeholder","Hora de entrada",3,"matTimepicker"],["matIconSuffix","",3,"for"],["matInput","","placeholder","Hora de salida","formControlName","horaDeSalida1",3,"matTimepicker"],["matInput","","formControlName","horaDeEntrada2","placeholder","Hora de entrada",3,"matTimepicker"],["matInput","","formControlName","horaDeEntrada3","placeholder","Hora de entrada",3,"matTimepicker"],["matInput","","formControlName","horaDeSalida3","placeholder","Hora de salida",3,"matTimepicker"],["matInput","","formControlName","horaDeEntrada4","placeholder","Hora de entrada",3,"matTimepicker"],["matInput","","formControlName","horaDeSalida4","placeholder","Hora de salida",3,"matTimepicker"],["matInput","","formControlName","horaDeEntrada5","placeholder","Hora de entrada",3,"matTimepicker"],["matInput","","formControlName","horaDeSalida5","placeholder","Hora de salida",3,"matTimepicker"],["matInput","","type","number","formControlName","retardo1","placeholder","10"],["matInput","","type","number","formControlName","retardo2","placeholder","10"],["matInput","","type","number","formControlName","retardo3","placeholder","10"],["matInput","","type","number","formControlName","retardo4","placeholder","10"],["matInput","","type","number","formControlName","retardo5","placeholder","10"],["matInput","","type","number","formControlName","corte1","placeholder","70"],["matInput","","type","number","formControlName","corte2","placeholder","70"],["matInput","","type","number","formControlName","corte3","placeholder","70"],["matInput","","type","number","formControlName","corte4","placeholder","70"],["matInput","","type","number","formControlName","corte5","placeholder","70"],["matButton","filled","type","submit"],["matButton","","mat-dialog-close",""]],template:function(e,i){if(e&1&&(g(0,"div",12)(1,"h1",13),C(2,"Agregar nuevo"),m(),g(3,"form",14),ne("ngSubmit",function(){return i.guardar()}),g(4,"mat-dialog-content")(5,"mat-form-field")(6,"mat-label"),C(7,"Nombre de la materia"),m(),A(8,"input",15),m(),A(9,"br"),g(10,"mat-form-field")(11,"mat-label"),C(12,"Fecha de inicio"),m(),A(13,"input",16)(14,"mat-datepicker",null,0)(16,"mat-datepicker-toggle",17),m(),g(17,"mat-form-field")(18,"mat-label"),C(19,"Fecha de finalizaci\xF3n"),m(),A(20,"input",18)(21,"mat-datepicker",null,1)(23,"mat-datepicker-toggle",17),m(),g(24,"table",19)(25,"thead")(26,"tr")(27,"th"),C(28,"Lunes"),m(),g(29,"th"),C(30,"Martes"),m(),g(31,"th"),C(32,"Miercoles"),m(),g(33,"th"),C(34,"Jueves"),m(),g(35,"th"),C(36,"Viernes"),m()()(),g(37,"tbody")(38,"tr")(39,"td")(40,"mat-form-field")(41,"mat-label"),C(42,"Hora de entrada"),m(),A(43,"input",20)(44,"mat-timepicker-toggle",21)(45,"mat-timepicker",null,2),m(),A(47,"br"),g(48,"mat-form-field")(49,"mat-label"),C(50,"Hora de salida"),m(),A(51,"input",22)(52,"mat-timepicker-toggle",21)(53,"mat-timepicker",null,3),m()(),g(55,"td")(56,"mat-form-field")(57,"mat-label"),C(58,"Hora de entrada"),m(),A(59,"input",23)(60,"mat-timepicker-toggle",21)(61,"mat-timepicker",null,4),m(),A(63,"br"),g(64,"mat-form-field")(65,"mat-label"),C(66,"Hora de salida"),m(),A(67,"input",23)(68,"mat-timepicker-toggle",21)(69,"mat-timepicker",null,5),m()(),g(71,"td")(72,"mat-form-field")(73,"mat-label"),C(74,"Hora de entrada"),m(),A(75,"input",24)(76,"mat-timepicker-toggle",21)(77,"mat-timepicker",null,6),m(),A(79,"br"),g(80,"mat-form-field")(81,"mat-label"),C(82,"Hora de salida"),m(),A(83,"input",25)(84,"mat-timepicker-toggle",21)(85,"mat-timepicker",null,7),m()(),g(87,"td")(88,"mat-form-field")(89,"mat-label"),C(90,"Hora de entrada"),m(),A(91,"input",26)(92,"mat-timepicker-toggle",21)(93,"mat-timepicker",null,8),m(),A(95,"br"),g(96,"mat-form-field")(97,"mat-label"),C(98,"Hora de salida"),m(),A(99,"input",27)(100,"mat-timepicker-toggle",21)(101,"mat-timepicker",null,9),m()(),g(103,"td")(104,"mat-form-field")(105,"mat-label"),C(106,"Hora de entrada"),m(),A(107,"input",28)(108,"mat-timepicker-toggle",21)(109,"mat-timepicker",null,10),m(),A(111,"br"),g(112,"mat-form-field")(113,"mat-label"),C(114,"Hora de salida"),m(),A(115,"input",29)(116,"mat-timepicker-toggle",21)(117,"mat-timepicker",null,11),m()()(),g(119,"tr")(120,"td")(121,"mat-form-field")(122,"mat-label"),C(123,"Retardo"),m(),A(124,"input",30),m()(),g(125,"td")(126,"mat-form-field")(127,"mat-label"),C(128,"Retardo"),m(),A(129,"input",31),m()(),g(130,"td")(131,"mat-form-field")(132,"mat-label"),C(133,"Retardo"),m(),A(134,"input",32),m()(),g(135,"td")(136,"mat-form-field")(137,"mat-label"),C(138,"Retardo"),m(),A(139,"input",33),m()(),g(140,"td")(141,"mat-form-field")(142,"mat-label"),C(143,"Retardo"),m(),A(144,"input",34),m()()(),g(145,"tr")(146,"td")(147,"mat-form-field")(148,"mat-label"),C(149,"Falta"),m(),A(150,"input",35),m()(),g(151,"td")(152,"mat-form-field")(153,"mat-label"),C(154,"Falta"),m(),A(155,"input",36),m()(),g(156,"td")(157,"mat-form-field")(158,"mat-label"),C(159,"Falta"),m(),A(160,"input",37),m()(),g(161,"td")(162,"mat-form-field")(163,"mat-label"),C(164,"Falta"),m(),A(165,"input",38),m()(),g(166,"td")(167,"mat-form-field")(168,"mat-label"),C(169,"Falta"),m(),A(170,"input",39),m()()()()()(),g(171,"mat-dialog-actions")(172,"button",40),C(173,"Guardar"),m(),g(174,"button",41),C(175,"Cancelar"),m()()()()),e&2){let r=gt(15),o=gt(22),a=gt(46),s=gt(54),l=gt(62),c=gt(70),u=gt(78),f=gt(86),h=gt(94),p=gt(102),v=gt(110),I=gt(118);_(3),k("formGroup",i.formGroup),_(10),k("matDatepicker",r),_(3),k("for",r),_(4),k("matDatepicker",o),_(3),k("for",o),_(20),k("matTimepicker",a),_(),k("for",a),_(7),k("matTimepicker",s),_(),k("for",s),_(7),k("matTimepicker",l),_(),k("for",l),_(7),k("matTimepicker",c),_(),k("for",c),_(7),k("matTimepicker",u),_(),k("for",u),_(7),k("matTimepicker",f),_(),k("for",f),_(7),k("matTimepicker",h),_(),k("for",h),_(7),k("matTimepicker",p),_(),k("for",p),_(7),k("matTimepicker",v),_(),k("for",v),_(7),k("matTimepicker",I),_(),k("for",I)}},dependencies:[oc,Lf,Kl,bv,aM,oM,HI,LI,Sf,gv,AI,RI,Cn,on,nM,tM,Jf,Vv,fM,$v,uM,Gv,UI,ja,_v,Px,Lx,Vx,Ox],encapsulation:2})};var FV=["determinateSpinner"];function PV(t,n){if(t&1&&(Yt(),g(0,"svg",11),A(1,"circle",12),m()),t&2){let e=J();Z("viewBox",e._viewBox()),_(),$t("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),Z("r",e._circleRadius())}}var LV=new y("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:pM})}),pM=100,VV=10,mM=(()=>{class t{_elementRef=d(R);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=d(LV),i=X_(),r=this._elementRef.nativeElement;this._noopAnimations=i==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&i==="reduced-motion"&&r.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=pM;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-VV)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(i,r){if(i&1&&Ge(FV,5),i&2){let o;U(o=z())&&(r._determinateCircle=o.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(i,r){i&2&&(Z("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),xt("mat-"+r.color),$t("width",r.diameter,"px")("height",r.diameter,"px")("--mat-progress-spinner-size",r.diameter+"px")("--mat-progress-spinner-active-indicator-width",r.diameter+"px"),$("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",si],diameter:[2,"diameter","diameter",si],strokeWidth:[2,"strokeWidth","strokeWidth",si]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(i,r){if(i&1&&(Ce(0,PV,2,8,"ng-template",null,0,lo),g(2,"div",2,1),Yt(),g(4,"svg",3),A(5,"circle",4),m()(),eo(),g(6,"div",5)(7,"div",6)(8,"div",7),lt(9,8),m(),g(10,"div",9),lt(11,8),m(),g(12,"div",10),lt(13,8),m()()()),i&2){let o=gt(1);_(4),Z("viewBox",r._viewBox()),_(),$t("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),Z("r",r._circleRadius()),_(4),k("ngTemplateOutlet",o),_(2),k("ngTemplateOutlet",o),_(2),k("ngTemplateOutlet",o)}},dependencies:[al],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var gM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({imports:[Ie]})}return t})();function jV(t,n){t&1&&A(0,"mat-spinner")}function HV(t,n){if(t&1&&(g(0,"th"),C(1),m()),t&2){let e=n.$implicit;_(),Mt(e.dia)}}function UV(t,n){if(t&1&&(g(0,"td"),C(1),m()),t&2){let e=n.$implicit;_(),ur(" ",e.horaInicial," ",e.horaFinal," ")}}function zV(t,n){if(t&1&&C(0),t&2){let e=J().$implicit,i=J(2);ur(" ",e.horaInicial," - ",i.agregarMinutos(e.horaInicial,e.tolerancia)," ")}}function $V(t,n){if(t&1&&(g(0,"td"),fe(1,zV,1,2),m()),t&2){let e=n.$implicit;_(),he(e.horaInicial!=""?1:-1)}}function GV(t,n){if(t&1&&C(0),t&2){let e=J().$implicit,i=J(2);He(" + ",i.agregarMinutos(e.horaInicial,60)," ")}}function WV(t,n){if(t&1&&(g(0,"td"),fe(1,GV,1,1),m()),t&2){let e=n.$implicit;_(),he(e.horaInicial!=""?1:-1)}}function qV(t,n){if(t&1&&(g(0,"mat-card",1)(1,"mat-card-header")(2,"mat-card-title"),C(3),m()(),g(4,"mat-card-content")(5,"p"),C(6),iu(7,"date"),m(),g(8,"p"),C(9),iu(10,"date"),m(),g(11,"table",2)(12,"thead")(13,"tr")(14,"th"),C(15,"Dias"),m(),Qt(16,HV,2,1,"th",null,so),m()(),g(18,"tbody")(19,"tr")(20,"th"),C(21,"Horario"),m(),Qt(22,UV,2,2,"td",null,so),m(),g(24,"tr")(25,"th"),C(26,"Retardo"),m(),Qt(27,$V,2,1,"td",null,so),m(),g(29,"tr")(30,"th"),C(31,"Falta"),m(),Qt(32,WV,2,1,"td",null,so),m()()()(),g(34,"mat-card-footer",3)(35,"div",4)(36,"mat-chip-set",5)(37,"button",6),C(38,"Editar"),m()()()()()),t&2){let e=n.$implicit;_(3),Mt(e.materia),_(3),He("Fecha de inicio: ",ru(7,3,e.fechaInicio,"dd/MM/yyyy")),_(3),He("Fecha de termino: ",ru(10,6,e.fechaFin,"dd/MM/yyyy")),_(7),Xt(e.horarios),_(6),Xt(e.horarios),_(5),Xt(e.horarios),_(5),Xt(e.horarios)}}var nh=class t{constructor(n,e){this.materiaService=n;this.cdr=e}dialog=d(Qf);agregarMateria(){this.dialog.open(th,{}).afterClosed().subscribe(e=>{this.obtenenerTodos()})}obtenenerTodos(){this.estaCargando=!0,this.materiaService.obtenerTodos().subscribe({next:n=>{this.materias=n,this.materias.forEach(e=>{e.horarios=this.completarSemana(e.horarios)}),console.log(this.materias),this.estaCargando=!1,this.cdr.detectChanges()},error:n=>{console.error("Error al obtener materias:",n),this.estaCargando=!1,this.cdr.detectChanges()}})}semana=["lunes","martes","miercoles","jueves","viernes"];completarSemana(n){return this.semana.map(e=>{let i=n.find(r=>r.dia===e);return i||{dia:e,horaInicial:"",horaFinal:"",tolerancia:0,corte:0}})}ngOnInit(){this.obtenenerTodos()}agregarMinutos(n,e){let[i,r]=n.split(":").map(Number),o=new Date;o.setHours(i,r,0,0),o.setMinutes(o.getMinutes()+e);let a=o.getHours().toString().padStart(2,"0"),s=o.getMinutes().toString().padStart(2,"0");return`${a}:${s}`}estaCargando=!1;materias=[];static \u0275fac=function(e){return new(e||t)(de(Ka),de(we))};static \u0275cmp=S({type:t,selectors:[["app-lista-de-materias"]],decls:13,vars:1,consts:[["matButton","tonal",3,"click"],["appearance","outlined",1,"example-card","mt-3"],[1,"table"],[1,"example-card-footer"],[1,"container-fluid","m-3"],["aria-label","Chihuahua traits"],["matButton","outlined"]],template:function(e,i){e&1&&(g(0,"h1"),C(1,"Lista de materias"),m(),g(2,"div")(3,"button",0),ne("click",function(){return i.agregarMateria()}),C(4,"Agregar"),m(),A(5,"br"),fe(6,jV,1,0,"mat-spinner"),Qt(7,qV,39,9,"mat-card",1,so),A(9,"br")(10,"br")(11,"br")(12,"br"),m()),e&2&&(_(6),he(i.estaCargando?6:-1),_(),Xt(i.materias))},dependencies:[dI,oI,sI,cI,lI,aI,cx,lx,dx,Cn,on,Vf,Bf,gM,mM,Ug],encapsulation:2})};var ih=class{applyChanges(n,e,i,r,o){n.forEachOperation((a,s,l)=>{let c,u;if(a.previousIndex==null){let f=i(a,s,l);c=e.createEmbeddedView(f.templateRef,f.context,f.index),u=zn.INSERTED}else l==null?(e.remove(s),u=zn.REMOVED):(c=e.get(s),e.move(c,l),u=zn.MOVED);o&&o({context:c?.context,operation:u,record:a})})}detach(){}};var YV=[[["caption"]],[["colgroup"],["col"]],"*"],ZV=["caption","colgroup, col","*"];function KV(t,n){t&1&&X(0,2)}function QV(t,n){t&1&&(g(0,"thead",0),lt(1,1),m(),g(2,"tbody",0),lt(3,2)(4,3),m(),g(5,"tfoot",0),lt(6,4),m())}function XV(t,n){t&1&&lt(0,1)(1,2)(2,3)(3,4)}var Wn=new y("CDK_TABLE");var ah=(()=>{class t{template=d(tt);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdkCellDef",""]]})}return t})(),sh=(()=>{class t{template=d(tt);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdkHeaderCellDef",""]]})}return t})(),yM=(()=>{class t{template=d(tt);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdkFooterCellDef",""]]})}return t})(),Qa=(()=>{class t{_table=d(Wn,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdkColumnDef",""]],contentQueries:function(i,r,o){if(i&1&&Ht(o,ah,5)(o,sh,5)(o,yM,5),i&2){let a;U(a=z())&&(r.cell=a.first),U(a=z())&&(r.headerCell=a.first),U(a=z())&&(r.footerCell=a.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",K],stickyEnd:[2,"stickyEnd","stickyEnd",K]}})}return t})(),oh=class{constructor(n,e){e.nativeElement.classList.add(...n._columnCssClassName)}},bM=(()=>{class t extends oh{constructor(){super(d(Qa),d(R))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[te]})}return t})();var DM=(()=>{class t extends oh{constructor(){let e=d(Qa),i=d(R);super(e,i);let r=e._table?._getCellRole();r&&i.nativeElement.setAttribute("role",r)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[te]})}return t})();var qv=(()=>{class t{template=d(tt);_differs=d(Ai);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let i=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(i).create(),this._columnsDiffer.diff(i)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof sc?e.headerCell.template:this instanceof Yv?e.footerCell.template:e.cell.template}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,features:[Te]})}return t})(),sc=(()=>{class t extends qv{_table=d(Wn,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(d(tt),d(Ai))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",K]},features:[te,Te]})}return t})(),Yv=(()=>{class t extends qv{_table=d(Wn,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(d(tt),d(Ai))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",K]},features:[te,Te]})}return t})(),lh=(()=>{class t extends qv{_table=d(Wn,{optional:!0});when;constructor(){super(d(tt),d(Ai))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[te]})}return t})(),Ro=(()=>{class t{_viewContainer=d($e);cells;context;static mostRecentCellOutlet=null;constructor(){t.mostRecentCellOutlet=this}ngOnDestroy(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdkCellOutlet",""]]})}return t})(),Zv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&lt(0,0)},dependencies:[Ro],encapsulation:2})}return t})();var Kv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&lt(0,0)},dependencies:[Ro],encapsulation:2})}return t})(),CM=(()=>{class t{templateRef=d(tt);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["ng-template","cdkNoDataRow",""]]})}return t})(),_M=["top","bottom","left","right"],Wv=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(n=>this._updateCachedSizes(n)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(n,e,i=!0,r=!0,o,a,s){this._isNativeHtmlTable=n,this._stickCellCss=e,this._isBrowser=i,this._needsPositionStickyOnElement=r,this.direction=o,this._positionListener=a,this._tableInjector=s,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(n,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(n);let i=[];for(let r of n)r.nodeType===r.ELEMENT_NODE&&i.push(r,...Array.from(r.children));Ve({write:()=>{for(let r of i)this._removeStickyStyle(r,e)}},{injector:this._tableInjector})}updateStickyColumns(n,e,i,r=!0,o=!0){if(!n.length||!this._isBrowser||!(e.some(x=>x)||i.some(x=>x))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let a=n[0],s=a.children.length,l=this.direction==="rtl",c=l?"right":"left",u=l?"left":"right",f=e.lastIndexOf(!0),h=i.indexOf(!0),p,v,I;o&&this._updateStickyColumnReplayQueue({rows:[...n],stickyStartStates:[...e],stickyEndStates:[...i]}),Ve({earlyRead:()=>{p=this._getCellWidths(a,r),v=this._getStickyStartColumnPositions(p,e),I=this._getStickyEndColumnPositions(p,i)},write:()=>{for(let x of n)for(let T=0;T<s;T++){let _e=x.children[T];e[T]&&this._addStickyStyle(_e,c,v[T],T===f),i[T]&&this._addStickyStyle(_e,u,I[T],T===h)}this._positionListener&&p.some(x=>!!x)&&(this._positionListener.stickyColumnsUpdated({sizes:f===-1?[]:p.slice(0,f+1).map((x,T)=>e[T]?x:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:h===-1?[]:p.slice(h).map((x,T)=>i[T+h]?x:null).reverse()}))}},{injector:this._tableInjector})}stickRows(n,e,i){if(!this._isBrowser)return;let r=i==="bottom"?n.slice().reverse():n,o=i==="bottom"?e.slice().reverse():e,a=[],s=[],l=[];Ve({earlyRead:()=>{for(let c=0,u=0;c<r.length;c++){if(!o[c])continue;a[c]=u;let f=r[c];l[c]=this._isNativeHtmlTable?Array.from(f.children):[f];let h=this._retrieveElementSize(f).height;u+=h,s[c]=h}},write:()=>{let c=o.lastIndexOf(!0);for(let u=0;u<r.length;u++){if(!o[u])continue;let f=a[u],h=u===c;for(let p of l[u])this._addStickyStyle(p,i,f,h)}i==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:s,offsets:a,elements:l}):this._positionListener?.stickyFooterRowsUpdated({sizes:s,offsets:a,elements:l})}},{injector:this._tableInjector})}updateStickyFooterContainer(n,e){this._isNativeHtmlTable&&Ve({write:()=>{let i=n.querySelector("tfoot");i&&(e.some(r=>!r)?this._removeStickyStyle(i,["bottom"]):this._addStickyStyle(i,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(n,e){if(!n.classList.contains(this._stickCellCss))return;for(let r of e)n.style[r]="",n.classList.remove(this._borderCellCss[r]);_M.some(r=>e.indexOf(r)===-1&&n.style[r])?n.style.zIndex=this._getCalculatedZIndex(n):(n.style.zIndex="",this._needsPositionStickyOnElement&&(n.style.position=""),n.classList.remove(this._stickCellCss))}_addStickyStyle(n,e,i,r){n.classList.add(this._stickCellCss),r&&n.classList.add(this._borderCellCss[e]),n.style[e]=`${i}px`,n.style.zIndex=this._getCalculatedZIndex(n),this._needsPositionStickyOnElement&&(n.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(n){let e={top:100,bottom:10,left:1,right:1},i=0;for(let r of _M)n.style[r]&&(i+=e[r]);return i?`${i}`:""}_getCellWidths(n,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let i=[],r=n.children;for(let o=0;o<r.length;o++){let a=r[o];i.push(this._retrieveElementSize(a).width)}return this._cachedCellWidths=i,i}_getStickyStartColumnPositions(n,e){let i=[],r=0;for(let o=0;o<n.length;o++)e[o]&&(i[o]=r,r+=n[o]);return i}_getStickyEndColumnPositions(n,e){let i=[],r=0;for(let o=n.length;o>0;o--)e[o]&&(i[o]=r,r+=n[o]);return i}_retrieveElementSize(n){let e=this._elemSizeCache.get(n);if(e)return e;let i=n.getBoundingClientRect(),r={width:i.width,height:i.height};return this._resizeObserver&&(this._elemSizeCache.set(n,r),this._resizeObserver.observe(n,{box:"border-box"})),r}_updateStickyColumnReplayQueue(n){this._removeFromStickyColumnReplayQueue(n.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(n)}_removeFromStickyColumnReplayQueue(n){let e=new Set(n);for(let i of this._updatedStickyColumnsParamsToReplay)i.rows=i.rows.filter(r=>!e.has(r));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(i=>!!i.rows.length)}_updateCachedSizes(n){let e=!1;for(let i of n){let r=i.borderBoxSize?.length?{width:i.borderBoxSize[0].inlineSize,height:i.borderBoxSize[0].blockSize}:{width:i.contentRect.width,height:i.contentRect.height};r.width!==this._elemSizeCache.get(i.target)?.width&&JV(i.target)&&(e=!0),this._elemSizeCache.set(i.target,r)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let i of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(i.rows,i.stickyStartStates,i.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function JV(t){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(n=>t.classList.contains(n))}var ac=new y("STICKY_POSITIONING_LISTENER");var Qv=(()=>{class t{viewContainer=d($e);elementRef=d(R);constructor(){let e=d(Wn);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","rowOutlet",""]]})}return t})(),Xv=(()=>{class t{viewContainer=d($e);elementRef=d(R);constructor(){let e=d(Wn);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","headerRowOutlet",""]]})}return t})(),Jv=(()=>{class t{viewContainer=d($e);elementRef=d(R);constructor(){let e=d(Wn);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","footerRowOutlet",""]]})}return t})(),ey=(()=>{class t{viewContainer=d($e);elementRef=d(R);constructor(){let e=d(Wn);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","noDataRowOutlet",""]]})}return t})(),ty=(()=>{class t{_differs=d(Ai);_changeDetectorRef=d(we);_elementRef=d(R);_dir=d(Ye,{optional:!0});_platform=d(ue);_viewRepeater;_viewportRuler=d(wr);_injector=d(j);_virtualScrollViewport=d(ux,{optional:!0,host:!0});_positionListener=d(ac,{optional:!0})||d(ac,{optional:!0,skipSelf:!0});_document=d(H);_data;_renderedRange;_onDestroy=new E;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new E;_footerRowStickyUpdates=new E;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new E;_dataStream=new E;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new N;viewChange=new Xe({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){d(new ai("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((i,r)=>this.trackBy?this.trackBy(r.dataIndex,r.data):r)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(ve(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Hf:new ih,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),jf(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let i=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,i,(r,o,a)=>this._getEmbeddedViewArgs(r.item,a),r=>r.item.data,r=>{r.operation===zn.INSERTED&&r.context&&this._renderCellTemplateForItem(r.record.item.rowDef,r.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);o.context.$implicit=r.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let r=vM(this._headerRowOutlet,"thead");r&&(r.style.display=e.length?"":"none")}let i=this._headerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,i,"top"),this._headerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let r=vM(this._footerRowOutlet,"tfoot");r&&(r.style.display=e.length?"":"none")}let i=this._footerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,i,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,i),this._footerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),i=this._getRenderedRows(this._rowOutlet),r=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...i,...r],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,a)=>{this._addStickyColumnStyles([o],this._headerRowDefs[a])}),this._rowDefs.forEach(o=>{let a=[];for(let s=0;s<i.length;s++)this._renderRows[s].rowDef===o&&a.push(i[s]);this._addStickyColumnStyles(a,o)}),r.forEach((o,a)=>{this._addStickyColumnStyles([o],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let i=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||i,this._forceRecalculateCellWidths=i,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],i=Math.min(this._data.length,this._renderedRange.end),r=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<i;o++){let a=this._data[o],s=this._getRenderRowsForData(a,o,r.get(a));this._cachedRenderRowsMap.has(a)||this._cachedRenderRowsMap.set(a,new WeakMap);for(let l=0;l<s.length;l++){let c=s[l],u=this._cachedRenderRowsMap.get(c.data);u.has(c.rowDef)?u.get(c.rowDef).push(c):u.set(c.rowDef,[c]),e.push(c)}}return e}_getRenderRowsForData(e,i,r){return this._getRowDefs(e,i).map(a=>{let s=r&&r.has(a)?r.get(a):[];if(s.length){let l=s.shift();return l.dataIndex=i,l}else return{data:e,rowDef:a,dataIndex:i}})}_cacheColumnDefs(){this._columnDefsByName.clear(),rh(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(i=>{this._columnDefsByName.has(i.name),this._columnDefsByName.set(i.name,i)})}_cacheRowDefs(){this._headerRowDefs=rh(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=rh(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=rh(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(i=>!i.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(a,s)=>{let l=!!s.getColumnsDiff();return a||l},i=this._rowDefs.reduce(e,!1);i&&this._forceRenderDataRows();let r=this._headerRowDefs.reduce(e,!1);r&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),i||r||o}_switchDataSource(e){this._data=[],jf(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;jf(this.dataSource)?e=this.dataSource.connect(this):Br(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=W(this.dataSource)),this._renderChangeSubscription=Zn([e,this.viewChange]).pipe(ve(this._onDestroy)).subscribe(([i,r])=>{this._data=i||[],this._renderedRange=r,this._dataStream.next(i),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,i)=>this._renderRow(this._headerRowOutlet,e,i)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,i)=>this._renderRow(this._footerRowOutlet,e,i)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,i){let r=Array.from(i?.columns||[]).map(s=>{let l=this._columnDefsByName.get(s);return l}),o=r.map(s=>s.sticky),a=r.map(s=>s.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,a,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let i=[];for(let r=0;r<e.viewContainer.length;r++){let o=e.viewContainer.get(r);i.push(o.rootNodes[0])}return i}_getRowDefs(e,i){if(this._rowDefs.length===1)return[this._rowDefs[0]];let r=[];if(this.multiTemplateDataRows)r=this._rowDefs.filter(o=>!o.when||o.when(i,e));else{let o=this._rowDefs.find(a=>a.when&&a.when(i,e))||this._defaultRowDef;o&&r.push(o)}return r.length,r}_getEmbeddedViewArgs(e,i){let r=e.rowDef,o={$implicit:e.data};return{templateRef:r.template,context:o,index:i}}_renderRow(e,i,r,o={}){let a=e.viewContainer.createEmbeddedView(i.template,o,r);return this._renderCellTemplateForItem(i,o),a}_renderCellTemplateForItem(e,i){for(let r of this._getCellTemplates(e))Ro.mostRecentCellOutlet&&Ro.mostRecentCellOutlet._viewContainer.createEmbeddedView(r,i);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let i=0,r=e.length;i<r;i++){let a=e.get(i).context;a.count=r,a.first=i===0,a.last=i===r-1,a.even=i%2===0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[i].dataIndex,a.renderIndex=i):a.index=this._renderRows[i].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,i=>{let r=this._columnDefsByName.get(i);return e.extractCellTemplate(r)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(i,r)=>i||r.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",i=this._injector;this._stickyStyler=new Wv(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,i),(this._dir?this._dir.change:W()).pipe(ve(this._onDestroy)).subscribe(r=>{this._stickyStyler.direction=r,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let i=typeof requestAnimationFrame<"u"?Cc:yc;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Ho(0,i),ve(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(r,o)=>this._measureRangeSize(r,o)}),Zn([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(ve(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let s=o.elements[a];if(s){let l=o.offsets[a],c=r!==0?Math.max(r-l,l):-l;for(let u of s)u.style.top=`${-c}px`}}}),Zn([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(ve(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let s=o.elements[a];if(s)for(let l of s)l.style.bottom=`${r+o.offsets[a]}px`}})}_getOwnDefs(e){return e.filter(i=>!i._table||i._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let i=this._rowOutlet.viewContainer.length===0;if(i===this._isShowingNoDataRow)return;let r=this._noDataRowOutlet.viewContainer;if(i){let o=r.createEmbeddedView(e.templateRef),a=o.rootNodes[0];if(o.rootNodes.length===1&&a?.nodeType===this._document.ELEMENT_NODE){a.setAttribute("role","row"),a.classList.add(...e._contentClassNames);let s=a.querySelectorAll(e._cellSelector);for(let l=0;l<s.length;l++)s[l].classList.add(...e._cellClassNames)}}else r.clear();this._isShowingNoDataRow=i,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,i){if(e.start>=e.end||i!=="vertical")return 0;let r=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<r.start||e.end>r.end;let a=e.start-r.start,s=e.end-e.start,l,c;for(let h=0;h<s;h++){let p=o.get(h+a);if(p&&p.rootNodes.length){l=c=p.rootNodes[0];break}}for(let h=s-1;h>-1;h--){let p=o.get(h+a);if(p&&p.rootNodes.length){c=p.rootNodes[p.rootNodes.length-1];break}}let u=l?.getBoundingClientRect?.(),f=c?.getBoundingClientRect?.();return u&&f?f.bottom-u.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(i,r,o){if(i&1&&Ht(o,CM,5)(o,Qa,5)(o,lh,5)(o,sc,5)(o,Yv,5),i&2){let a;U(a=z())&&(r._noDataRow=a.first),U(a=z())&&(r._contentColumnDefs=a),U(a=z())&&(r._contentRowDefs=a),U(a=z())&&(r._contentHeaderRowDefs=a),U(a=z())&&(r._contentFooterRowDefs=a)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(i,r){i&2&&$("cdk-table-fixed-layout",r.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",K],fixedLayout:[2,"fixedLayout","fixedLayout",K],recycleRows:[2,"recycleRows","recycleRows",K]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[pe([{provide:Wn,useExisting:t},{provide:ac,useValue:null}])],ngContentSelectors:ZV,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(ke(YV),X(0),X(1,1),fe(2,KV,1,0),fe(3,QV,7,0)(4,XV,4,0)),i&2&&(_(2),he(r._isServer?2:-1),_(),he(r._isNativeHtmlTable?3:4))},dependencies:[Xv,Qv,ey,Jv],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return t})();function rh(t,n){return t.concat(Array.from(n))}function vM(t,n){let e=n.toUpperCase(),i=t.viewContainer.element.nativeElement;for(;i;){let r=i.nodeType===1?i.nodeName:null;if(r===e)return i;if(r==="TABLE")break;i=i.parentNode}return null}var wM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({imports:[Ql]})}return t})();var eB=[[["caption"]],[["colgroup"],["col"]],"*"],tB=["caption","colgroup, col","*"];function nB(t,n){t&1&&X(0,2)}function iB(t,n){t&1&&(g(0,"thead",0),lt(1,1),m(),g(2,"tbody",2),lt(3,3)(4,4),m(),g(5,"tfoot",0),lt(6,5),m())}function rB(t,n){t&1&&lt(0,1)(1,3)(2,4)(3,5)}var ch=(()=>{class t extends ty{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275cmp=S({type:t,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(i,r){i&2&&$("mat-table-fixed-layout",r.fixedLayout)},exportAs:["matTable"],features:[pe([{provide:ty,useExisting:t},{provide:Wn,useExisting:t},{provide:ac,useValue:null}]),te],ngContentSelectors:tB,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(ke(eB),X(0),X(1,1),fe(2,nB,1,0),fe(3,iB,7,0)(4,rB,4,0)),i&2&&(_(2),he(r._isServer?2:-1),_(),he(r._isNativeHtmlTable?3:4))},dependencies:[Xv,Qv,ey,Jv],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return t})(),dh=(()=>{class t extends ah{static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["","matCellDef",""]],features:[pe([{provide:ah,useExisting:t}]),te]})}return t})(),uh=(()=>{class t extends sh{static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["","matHeaderCellDef",""]],features:[pe([{provide:sh,useExisting:t}]),te]})}return t})();var fh=(()=>{class t extends Qa{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[pe([{provide:Qa,useExisting:t}]),te]})}return t})(),hh=(()=>{class t extends bM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[te]})}return t})();var ph=(()=>{class t extends DM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[te]})}return t})();var mh=(()=>{class t extends sc{static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",K]},features:[pe([{provide:sc,useExisting:t}]),te]})}return t})();var gh=(()=>{class t extends lh{static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[pe([{provide:lh,useExisting:t}]),te]})}return t})(),_h=(()=>{class t extends Zv{static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275cmp=S({type:t,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[pe([{provide:Zv,useExisting:t}]),te],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&lt(0,0)},dependencies:[Ro],encapsulation:2})}return t})();var vh=(()=>{class t extends Kv{static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275cmp=S({type:t,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[pe([{provide:Kv,useExisting:t}]),te],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&lt(0,0)},dependencies:[Ro],encapsulation:2})}return t})();var yh=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({imports:[wM,Ie]})}return t})();function oB(t,n){t&1&&(g(0,"th",9),C(1," No. "),m())}function aB(t,n){if(t&1&&(g(0,"td",10),C(1),m()),t&2){let e=n.$implicit;_(),He(" ",e.position," ")}}function sB(t,n){t&1&&(g(0,"th",9),C(1," Nombre "),m())}function lB(t,n){if(t&1&&(g(0,"td",10),C(1),m()),t&2){let e=n.$implicit;_(),He(" ",e.name," ")}}function cB(t,n){t&1&&(g(0,"th",9),C(1," Numero de alucnos "),m())}function dB(t,n){if(t&1&&(g(0,"td",10),C(1),m()),t&2){let e=n.$implicit;_(),He(" ",e.symbol," ")}}function uB(t,n){t&1&&(g(0,"th",9),C(1," Acciones "),m())}function fB(t,n){t&1&&(g(0,"td",10)(1,"a",11),C(2,"Detalles"),m(),g(3,"button",12),C(4,"Editar"),m()())}function hB(t,n){t&1&&A(0,"tr",13)}function pB(t,n){t&1&&A(0,"tr",14)}var mB=[{position:1,name:"Programaci\xF3n m\xF3vil",weight:1.0079,symbol:"7"},{position:2,name:"Programaci\xF3n web",weight:4.0026,symbol:"8"}],bh=class t{displayedColumns=["position","name","symbol","acciones"];dataSource=mB;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-lista-de-grupos"]],decls:17,vars:3,consts:[["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","symbol"],["matColumnDef","acciones"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["matButton","","href","/grupos/1"],["matButton",""],["mat-header-row",""],["mat-row",""]],template:function(e,i){e&1&&(g(0,"h1"),C(1,"Lista de grupos"),m(),g(2,"table",0),Bt(3,1),Ce(4,oB,2,0,"th",2)(5,aB,2,1,"td",3),jt(),Bt(6,4),Ce(7,sB,2,0,"th",2)(8,lB,2,1,"td",3),jt(),Bt(9,5),Ce(10,cB,2,0,"th",2)(11,dB,2,1,"td",3),jt(),Bt(12,6),Ce(13,uB,2,0,"th",2)(14,fB,5,0,"td",3),jt(),Ce(15,hB,1,0,"tr",7)(16,pB,1,0,"tr",8),m()),e&2&&(_(2),k("dataSource",i.dataSource),_(13),k("matHeaderRowDef",i.displayedColumns),_(),k("matRowDefColumns",i.displayedColumns))},dependencies:[yh,ch,uh,mh,fh,dh,gh,hh,ph,_h,vh,Cn,on],encapsulation:2})};function gB(t,n){t&1&&(g(0,"th",10),C(1," No. "),m())}function _B(t,n){if(t&1&&(g(0,"td",11),C(1),m()),t&2){let e=n.$implicit;_(),He(" ",e.position," ")}}function vB(t,n){t&1&&(g(0,"th",10),C(1," Nombre "),m())}function yB(t,n){if(t&1&&(g(0,"td",11),C(1),m()),t&2){let e=n.$implicit;_(),He(" ",e.name," ")}}function bB(t,n){t&1&&(g(0,"th",10),C(1," Numero de alucnos "),m())}function DB(t,n){if(t&1&&(g(0,"td",11),C(1),m()),t&2){let e=n.$implicit;_(),He(" ",e.symbol," ")}}function CB(t,n){t&1&&(g(0,"th",10),C(1," Acciones "),m())}function wB(t,n){t&1&&(g(0,"td",11)(1,"button",12),C(2,"Detalles"),m(),g(3,"button",12),C(4,"Eliminar"),m()())}function EB(t,n){t&1&&A(0,"tr",13)}function IB(t,n){t&1&&A(0,"tr",14)}var xB=[{position:1,name:"Carlos",weight:1.0079,symbol:"7"},{position:2,name:"Poncho",weight:4.0026,symbol:"8"},{position:3,name:"La Mariana",weight:6.941,symbol:"Li"},{position:4,name:"El Yoni",weight:9.0122,symbol:"Be"},{position:5,name:"Pablo",weight:10.811,symbol:"B"},{position:6,name:"El Alan",weight:12.0107,symbol:"C"}],Dh=class t{displayedColumns=["position","name","symbol","acciones"];dataSource=xB;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-detalle-del-grupo"]],decls:19,vars:3,consts:[["matButton","elevated"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","symbol"],["matColumnDef","acciones"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["matButton",""],["mat-header-row",""],["mat-row",""]],template:function(e,i){e&1&&(g(0,"h1"),C(1,"Progrmaci\xF3n M\xF3vil"),m(),g(2,"button",0),C(3,"Agregar"),m(),g(4,"table",1),Bt(5,2),Ce(6,gB,2,0,"th",3)(7,_B,2,1,"td",4),jt(),Bt(8,5),Ce(9,vB,2,0,"th",3)(10,yB,2,1,"td",4),jt(),Bt(11,6),Ce(12,bB,2,0,"th",3)(13,DB,2,1,"td",4),jt(),Bt(14,7),Ce(15,CB,2,0,"th",3)(16,wB,5,0,"td",4),jt(),Ce(17,EB,1,0,"tr",8)(18,IB,1,0,"tr",9),m()),e&2&&(_(4),k("dataSource",i.dataSource),_(13),k("matHeaderRowDef",i.displayedColumns),_(),k("matRowDefColumns",i.displayedColumns))},dependencies:[yh,ch,uh,mh,fh,dh,gh,hh,ph,_h,vh,Cn,on],encapsulation:2})};var IM=[{path:"",component:nf},{path:"materias",component:nh},{path:"grupos",component:bh},{path:"grupos/:id",component:Dh}];var xM={providers:[Qp(),O_(IM)]};var MB=["*",[["mat-toolbar-row"]]],SB=["*","mat-toolbar-row"],TB=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),MM=(()=>{class t{_elementRef=d(R);_platform=d(ue);_document=d(H);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-toolbar"]],contentQueries:function(i,r,o){if(i&1&&Ht(o,TB,5),i&2){let a;U(a=z())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,r){i&2&&(xt(r.color?"mat-"+r.color:""),$("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:SB,decls:2,vars:0,template:function(i,r){i&1&&(ke(MB),X(0),X(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var SM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=L({imports:[Ie]})}return t})();var RB=()=>["/","materias"],Ch=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-menu"]],decls:11,vars:2,consts:[["color","primary"],["matButton","","href","/"],["matButton","",3,"routerLink"],["matButton","","disabled",""],["matButton","elevated","disabled",""]],template:function(e,i){e&1&&(g(0,"mat-toolbar",0)(1,"a",1),C(2,"Inicio"),m(),g(3,"a",2),C(4,"Materias"),m(),g(5,"a",3),C(6,"Grupos"),m(),g(7,"button",4),C(8,"Alumnos"),m(),g(9,"button",4),C(10,"Asistencia"),m()()),e&2&&(_(3),k("routerLink",Ig(1,RB)))},dependencies:[Cn,on,Vf,Bf,SM,MM,tf,P_],encapsulation:2})};var wh=class t{title=O("paseDeListaUris");static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-root"]],decls:3,vars:0,consts:[[1,"container","mt-5"]],template:function(e,i){e&1&&(A(0,"app-menu"),g(1,"div",0),A(2,"router-outlet"),m())},dependencies:[Il,Ch],encapsulation:2})};Jg(wh,xM).catch(t=>console.error(t));
