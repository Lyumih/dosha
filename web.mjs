"use strict";
function require( path ){ return $node[ path ] };

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mam.ts
;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//mol/ambient/ambient.ts
;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));
//mol/delegate/delegate.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//mol/owning/owning.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//mol/fail/fail.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//mol/fail/hidden/hidden.ts
;
"use strict";
//mol/type/writable/writable.ts
;
"use strict";
var $;
(function ($) {
    class $mol_object2 {
        static $ = $;
        [Symbol.toStringTag];
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            if (Symbol.toStringTag in this)
                return this[Symbol.toStringTag];
            return this.name;
        }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//mol/object2/object2.ts
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//mol/object/object.ts
;
"use strict";
var $;
(function ($) {
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));
//mol/wire/cursor/cursor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub extends Object {
        data = [];
        static get [Symbol.species]() {
            return Array;
        }
        sub_from = 0;
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.pop();
            this.data.pop();
            if (this.data.length === this.sub_from)
                this.reap();
        }
        reap() { }
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        fresh() { }
        complete() { }
        get incompleted() {
            return false;
        }
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant);
            }
        }
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));
//mol/wire/pub/pub.ts
;
"use strict";
//mol/wire/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_wire_auto_sub = null;
    function $mol_wire_auto(next = $.$mol_wire_auto_sub) {
        return $.$mol_wire_auto_sub = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    $.$mol_wire_affected = [];
})($ || ($ = {}));
//mol/wire/wire.ts
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] ||= [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object' && typeof obj !== 'function')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', {
            'vertical-align': '8%',
            ...style,
        }, ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//mol/dev/format/format.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0;
        cursor = $mol_wire_cursor.stale;
        get temp() {
            return false;
        }
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                if (this.data[i])
                    res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
                this.data.pop();
                this.data.pop();
            }
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.final;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let tail = 0;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.data.length - 2, cursor);
                    this.data.pop();
                    this.data.pop();
                }
                else {
                    ++tail;
                }
            }
            for (; tail; --tail) {
                this.data.pop();
                this.data.pop();
            }
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                if (pub?.incompleted)
                    return;
            }
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/pub/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_object2 {
        task;
        static _promise = null;
        static get promise() {
            if (this._promise)
                return this._promise;
            return this._promise = new Promise(done => {
                const complete = () => {
                    this._promise = null;
                    done();
                };
                if (typeof requestAnimationFrame === 'function') {
                    requestAnimationFrame(complete);
                }
                else {
                    setTimeout(complete, 16);
                }
            });
        }
        cancelled = false;
        promise;
        constructor(task) {
            super();
            this.task = task;
            this.promise = $mol_after_frame.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//mol/after/frame/frame.web.ts
;
"use strict";
var $;
(function ($) {
    function $mol_promise_like(val) {
        return val && typeof val.then === 'function';
    }
    $.$mol_promise_like = $mol_promise_like;
})($ || ($ = {}));
//mol/promise/like/like.ts
;
"use strict";
var $;
(function ($) {
    const handled = new WeakSet();
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_frame(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        [Symbol.toStringTag];
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if ($mol_promise_like(this.cache))
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        get incompleted() {
            return $mol_promise_like(this.cache);
        }
        field() {
            return this.task.name + '()';
        }
        constructor(id, task, host, args) {
            super();
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
            this[Symbol.toStringTag] = id;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [$mol_wire_cursor.stale]: '🔴',
                [$mol_wire_cursor.doubt]: '🟡',
                [$mol_wire_cursor.fresh]: '🟢',
                [$mol_wire_cursor.final]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(cursor + ' '), $mol_dev_format_auto(this.cache));
        }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if ($mol_promise_like(result)) {
                    const put = (res) => {
                        if (this.cache === result)
                            this.put(res);
                        return res;
                    };
                    result = Object.assign(result.then(put, put), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            catch (error) {
                if (error instanceof Error || $mol_promise_like(error)) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if ($mol_promise_like(result) && !handled.has(result)) {
                    result = Object.assign(result.finally(() => {
                        if (this.cache === result)
                            this.absorb();
                    }), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            if (!$mol_promise_like(result)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if ($mol_promise_like(this.cache)) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        async async() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                await this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    await new Promise(() => { });
                }
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));
//mol/wire/fiber/fiber.ts
;
"use strict";
var $;
(function ($) {
    const named = new WeakSet();
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        if (named.has(func))
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        named.add(func);
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//mol/func/name/name.ts
;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));
//mol/guid/guid.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_key_store = new WeakMap();
    function $mol_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        return JSON.stringify(value, (field, value) => {
            if (!value)
                return value;
            if (typeof value !== 'object' && typeof value !== 'function')
                return value;
            if (Array.isArray(value))
                return value;
            const proto = Reflect.getPrototypeOf(value);
            if (!proto)
                return value;
            if (Reflect.getPrototypeOf(proto) === null)
                return value;
            if ('toJSON' in value)
                return value;
            if (value instanceof RegExp)
                return value.toString();
            let key = $.$mol_key_store.get(value);
            if (key)
                return key;
            key = $mol_guid();
            $.$mol_key_store.set(value, key);
            return key;
        });
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));
//mol/key/key.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right.source && left.flags === right.flags;
        if (left instanceof Error)
            return left.message === right.message && left.stack === right.stack;
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap([[right, true]]);
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        let result;
        try {
            if (!left_proto)
                result = compare_pojo(left, right);
            else if (!Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.iterator in left)
                result = compare_iterator(left[Symbol.iterator](), right[Symbol.iterator]());
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!$mol_compare_deep(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values());
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys())
            && compare_iterator(left.values(), right.values());
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (!compare_array(left_keys, right_keys))
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        const left_syms = Object.getOwnPropertySymbols(left);
        const right_syms = Object.getOwnPropertySymbols(right);
        if (!compare_array(left_syms, right_syms))
            return false;
        for (let key of left_syms) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));
//mol/compare/deep/deep.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const sub = $mol_wire_auto();
                const existen = sub?.track_next();
                reuse: if (existen) {
                    if (!existen.temp)
                        break reuse;
                    if (existen.host !== host)
                        break reuse;
                    if (existen.task !== task)
                        break reuse;
                    if (!$mol_compare_deep(existen.args, args))
                        break reuse;
                    return existen;
                }
                return new $mol_wire_task(`${host?.[Symbol.toStringTag] ?? host}.${task.name}(#)`, task, host, args);
            };
        }
        get temp() {
            return true;
        }
        complete() {
            if ($mol_promise_like(this.cache))
                return;
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if ($mol_promise_like(next)) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));
//mol/wire/task/task.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));
//mol/wire/method/method.ts
;
"use strict";
//mol/type/tail/tail.ts
;
"use strict";
//mol/type/foot/foot.ts
;
"use strict";
var $;
(function ($) {
    const catched = new WeakMap();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if ($mol_promise_like(error))
            $mol_fail_hidden(error);
        if (catched.get(error))
            return false;
        catched.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//mol/fail/catch/catch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if ($mol_promise_like(error))
            return false;
        if (!$mol_fail_catch(error))
            return false;
        console.error(error);
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));
//mol/fail/log/log.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_atom extends $mol_wire_fiber {
        static solo(host, task) {
            const field = task.name + '()';
            const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            if (existen)
                return existen;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key = `${prefix}.${field}`;
            const fiber = new $mol_wire_atom(key, task, host, []);
            (host ?? task)[field] = fiber;
            return fiber;
        }
        static plex(host, task, key) {
            const field = task.name + '()';
            let dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const id = `${prefix}.${task.name}(${$mol_key(key).replace(/^"|"$/g, "'")})`;
            if (dict) {
                const existen = dict.get(id);
                if (existen)
                    return existen;
            }
            else {
                dict = (host ?? task)[field] = new Map();
            }
            const fiber = new $mol_wire_atom(id, task, host, [key]);
            dict.set(id, fiber);
            return fiber;
        }
        static watching = new Set();
        static watcher = null;
        static watch() {
            $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            if (!$mol_wire_atom.watcher) {
                $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            }
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        channel() {
            return Object.assign((next) => {
                if (next !== undefined)
                    return this.resync([...this.args, next]);
                if (!$mol_wire_fiber.warm)
                    return this.result();
                if ($mol_wire_auto()?.temp) {
                    return this.once();
                }
                else {
                    return this.sync();
                }
            }, { atom: this });
        }
        destructor() {
            super.destructor();
            const prev = this.cache;
            if ($mol_owning_check(this, prev)) {
                prev.destructor();
            }
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                ;
                (this.host ?? this.task)[this.field()].delete(this[Symbol.toStringTag]);
            }
        }
        put(next) {
            const prev = this.cache;
            update: if (next !== prev) {
                try {
                    if ($mol_compare_deep(prev, next))
                        break update;
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (!this.sub_empty)
                    this.emit();
            }
            this.cache = next;
            this.cursor = $mol_wire_cursor.fresh;
            if ($mol_promise_like(next))
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
})($ || ($ = {}));
//mol/wire/atom/atom.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solo(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.solo(this, orig);
                if ((args.length === 0) || (args[0] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_solo = $mol_wire_solo;
})($ || ($ = {}));
//mol/wire/solo/solo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_plex(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.plex(this, orig, args[0]);
                if ((args.length === 1) || (args[1] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_plex = $mol_wire_plex;
})($ || ($ = {}));
//mol/wire/plex/plex.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem = $mol_wire_solo;
    $.$mol_mem_key = $mol_wire_plex;
})($ || ($ = {}));
//mol/mem/mem.ts
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            this.resizes();
            return {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
        static resizes(next) { return next; }
    }
    __decorate([
        $mol_mem
    ], $mol_window, "size", null);
    __decorate([
        $mol_mem
    ], $mol_window, "resizes", null);
    $.$mol_window = $mol_window;
    self.addEventListener('resize', event => $mol_window.resizes(event));
})($ || ($ = {}));
//mol/window/window.web.ts
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//mol/dom/context/context.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));
//mol/dom/context/context.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        promise;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//mol/after/tick/tick.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next, notify) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            if (!next || notify)
                return parents;
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//mol/view/selection/selection.ts
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//mol/maybe/maybe.ts
;
"use strict";
var $;
(function ($) {
    if ($mol_dom_context.document) {
        $mol_dom_context.document.documentElement.addEventListener('focus', (event) => {
            $mol_view_selection.focused($mol_maybe($mol_dom_context.document.activeElement), 'notify');
        }, true);
    }
})($ || ($ = {}));
//mol/view/selection/selection.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//mol/wrapper/wrapper.ts
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));
//mol/memo/memo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//mol/dom/qname/qname.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_probe(task, def) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            const res = task();
            if (res === undefined)
                return def;
            return res;
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));
//mol/wire/probe/probe.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is required for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));
//mol/wire/watch/watch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        const getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//mol/const/const.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solid() {
        const current = $mol_wire_auto();
        if (current.reap !== nothing) {
            current?.sub_on(sub, sub.data.length);
        }
        current.reap = nothing;
    }
    $.$mol_wire_solid = $mol_wire_solid;
    const nothing = () => { };
    const sub = new $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/solid/solid.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//mol/dom/render/attributes/attributes.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events, passive = false) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
})($ || ($ = {}));
//mol/dom/render/events/events.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
            if (typeof val === 'number') {
                style.setProperty(kebab(name), `${val}px`);
            }
            else {
                style.setProperty(kebab(name), val);
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//mol/dom/render/styles/styles.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//mol/dom/render/children/children.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//mol/dom/render/fields/fields.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));
//mol/wire/async/async.ts
;
"use strict";
//mol/type/keys/extract/extract.ts
;
"use strict";
//mol/type/pick/pick.ts
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach_force() {
        if (all.length) {
            el.innerHTML += '\n' + all.join('\n\n');
            all = [];
        }
        timer = null;
        return el;
    }
    $.$mol_style_attach_force = $mol_style_attach_force;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $mol_after_tick($mol_style_attach_force);
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//mol/style/attach/attach.ts
;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));
//mol/decor/decor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return `${value}%`; }
        static px(value) { return `${value}px`; }
        static mm(value) { return `${value}mm`; }
        static cm(value) { return `${value}cm`; }
        static Q(value) { return `${value}Q`; }
        static in(value) { return `${value}in`; }
        static pc(value) { return `${value}pc`; }
        static pt(value) { return `${value}pt`; }
        static cap(value) { return `${value}cap`; }
        static ch(value) { return `${value}ch`; }
        static em(value) { return `${value}em`; }
        static rem(value) { return `${value}rem`; }
        static ex(value) { return `${value}ex`; }
        static ic(value) { return `${value}ic`; }
        static lh(value) { return `${value}lh`; }
        static rlh(value) { return `${value}rlh`; }
        static vh(value) { return `${value}vh`; }
        static vw(value) { return `${value}vw`; }
        static vi(value) { return `${value}vi`; }
        static vb(value) { return `${value}vb`; }
        static vmin(value) { return `${value}vmin`; }
        static vmax(value) { return `${value}vmax`; }
        static deg(value) { return `${value}deg`; }
        static rad(value) { return `${value}rad`; }
        static grad(value) { return `${value}grad`; }
        static turn(value) { return `${value}turn`; }
        static s(value) { return `${value}s`; }
        static ms(value) { return `${value}ms`; }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));
//mol/style/unit/unit.ts
;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name, defaultValue) {
            return new $mol_style_func('var', defaultValue ? [name, defaultValue] : name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
        static linear(...breakpoints) {
            return new $mol_style_func("linear", breakpoints.map((e) => Array.isArray(e)
                ? String(e[0]) +
                    " " +
                    (typeof e[1] === "number" ? e[1] + "%" : e[1].toString())
                : String(e)));
        }
        static cubic_bezier(x1, y1, x2, y2) {
            return new $mol_style_func('cubic-bezier', [x1, y1, x2, y2]);
        }
        static steps(value, step_position) {
            return new $mol_style_func('steps', [value, step_position]);
        }
        static blur(value) {
            return new $mol_style_func('blur', value ?? "");
        }
        static brightness(value) {
            return new $mol_style_func('brightness', value ?? "");
        }
        static contrast(value) {
            return new $mol_style_func('contrast', value ?? "");
        }
        static drop_shadow(color, x_offset, y_offset, blur_radius) {
            return new $mol_style_func("drop-shadow", blur_radius
                ? [color, x_offset, y_offset, blur_radius]
                : [color, x_offset, y_offset]);
        }
        static grayscale(value) {
            return new $mol_style_func('grayscale', value ?? "");
        }
        static hue_rotate(value) {
            return new $mol_style_func('hue-rotate', value ?? "");
        }
        static invert(value) {
            return new $mol_style_func('invert', value ?? "");
        }
        static opacity(value) {
            return new $mol_style_func('opacity', value ?? "");
        }
        static sepia(value) {
            return new $mol_style_func('sepia', value ?? "");
        }
        static saturate(value) {
            return new $mol_style_func('saturate', value ?? "");
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));
//mol/style/func/func.ts
;
"use strict";
//mol/type/override/override.ts
;
"use strict";
//mol/style/properties/properties.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_prop(prefix, postfixes) {
        const record = postfixes.reduce((record_obj, postfix) => {
            record_obj[postfix] = $mol_style_func.vary(`--${prefix}_${postfix}`);
            return record_obj;
        }, {});
        return record;
    }
    $.$mol_style_prop = $mol_style_prop;
})($ || ($ = {}));
//mol/style/prop/prop.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_theme = $mol_style_prop('mol_theme', [
        'back',
        'hover',
        'card',
        'current',
        'special',
        'text',
        'control',
        'shade',
        'line',
        'focus',
        'field',
        'image',
    ]);
})($ || ($ = {}));
//mol/theme/theme.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 210deg;\n\t--mol_theme_luma: -1;\n\t--mol_theme_satur: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme] {\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n:where([mol_theme]) {\n\tbackground-color: var(--mol_theme_back);\n}\n\t\n:root, [mol_theme] {\n\t--mol_theme_back: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 20% ), calc( 55% + 45% * var(--mol_theme_luma) ) );\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, calc( 40% - 40% * var(--mol_theme_luma) ) );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 50% ), calc( 54% + 46% * var(--mol_theme_luma) ), .25 );\n\t\n\t--mol_theme_card: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 50% ), calc( 55% + 35% * var(--mol_theme_luma) ), .25 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .2 );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 50%, 1 );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, calc( 55% - 10% * var(--mol_theme_luma) ) );\n\t\n}\n\n[mol_theme=\"$mol_theme_light\"] {\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 50%, 40% );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 60%, 30% );\n\t--mol_theme_current: hsl( var(--mol_theme_hue), 100%, 20% );\n}\n\n[mol_theme=\"$mol_theme_current\"] {\n\tbackground-color: var(--mol_theme_back);\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% + 30% * var(--mol_theme_luma) ) );\n}\n\n[mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_card: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 55% + 35% * var(--mol_theme_luma) ), .25 );\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\tbackground-color: var(--mol_theme_back);\n\t--mol_theme_luma: -2;\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 50%, 95%, .8 );\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + 180deg ), 90%, 50% );\n\t--mol_theme_hover: hsl( calc( var(--mol_theme_hue) + 180deg ), 80%, 35% );\n}\n\n[mol_theme=\"$mol_theme_accent\"] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: black;\n}\n");
})($ || ($ = {}));
//mol/theme/-css/theme.css.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_gap = $mol_style_prop('mol_gap', [
        'block',
        'text',
        'round',
        'space',
        'blur',
    ]);
})($ || ($ = {}));
//mol/gap/gap.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));
//mol/gap/-css/gap.css.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    const error_showed = new WeakMap();
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            try {
                this.dom_tree();
                document.title = this.title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        static autobind() {
            const nodes = $mol_dom_context.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.toString().match(/.*\.(\w+)/)?.[1] ?? this.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($mol_wire_probe(() => this.view_rect()) === undefined) {
                $mol_wire_watch();
                return null;
            }
            else {
                const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
                return { width, height, left, right, top, bottom };
            }
        }
        dom_id() {
            return this.toString();
        }
        dom_node_external(next) {
            const node = next ?? $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            return node;
        }
        dom_node(next) {
            $mol_wire_solid();
            const node = this.dom_node_external(next);
            $mol_dom_render_attributes(node, this.attr_static());
            const events = this.event_async();
            $mol_dom_render_events(node, events);
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            render: try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                const mol_view_error = $mol_promise_like(error) ? 'Promise' : error.name || error.constructor.name;
                $mol_dom_render_attributes(node, { mol_view_error });
                if ($mol_promise_like(error))
                    break render;
                if ((error_showed.get(error) ?? this) !== this)
                    break render;
                try {
                    const message = error.message || error;
                    node.innerText = message.replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
                error_showed.set(error, this);
            }
            try {
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $mol_dom_render_styles(node, this.style_size());
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return null;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                if (current.constructor.name !== classes.at(-1)?.name) {
                    classes.push(current.constructor);
                }
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        static _view_names;
        static view_names(suffix) {
            let cache = Reflect.getOwnPropertyDescriptor(this, '_view_names')?.value;
            if (!cache)
                cache = this._view_names = new Map;
            const cached = cache.get(suffix);
            if (cached)
                return cached;
            const names = [];
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            for (const Class of this.view_classes()) {
                if (suffix in Class.prototype)
                    names.push(this.$.$mol_func_name(Class) + suffix2);
                else
                    break;
            }
            cache.set(suffix, names);
            return names;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (!(owner?.host instanceof $mol_view))
                return names;
            const suffix = owner.task.name.trim();
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            names.push(...owner.host.constructor.view_names(suffix));
            for (let prefix of owner.host.view_names_owned()) {
                names.push(prefix + suffix2);
            }
            return names;
        }
        view_names() {
            const names = new Set();
            for (let name of this.view_names_owned())
                names.add(name);
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (name)
                    names.add(name);
            }
            return names;
        }
        theme(next = null) {
            return next;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {
                mol_theme: this.theme(),
            };
        }
        style_size() {
            return {
                minHeight: this.minimal_height(),
                minWidth: this.minimal_width(),
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return { ...$mol_wire_async(this.event()) };
        }
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        *view_find(check, path = []) {
            if (check(this))
                return yield [...path, this];
            try {
                for (const item of this.sub()) {
                    if (item instanceof $mol_view) {
                        yield* item.view_find(check, [...path, this]);
                    }
                }
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            try {
                this.dom_final();
            }
            catch (err) {
                $mol_fail_log(err);
            }
            view.dom_node().scrollIntoView({ block: align });
        }
        bring() {
            const win = this.$.$mol_dom_context;
            if (win.parent !== win.self && !win.document.hasFocus())
                return;
            new this.$.$mol_after_frame(() => {
                this.dom_node().scrollIntoView({ block: 'start', inline: 'end' });
                this.focused(true);
            });
        }
        destructor() {
            const node = $mol_wire_probe(() => this.dom_node());
            if (!node)
                return;
            const events = $mol_wire_probe(() => this.event_async());
            if (!events)
                return;
            for (let event_name in events) {
                node.removeEventListener(event_name, events[event_name]);
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "theme", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "event_async", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//mol/view/view/view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\tscrollbar-color: var(--mol_theme_line) transparent;\n\tscrollbar-width: thin;\n}\t\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\t\n\n[mol_view]::-webkit-scrollbar {\n\twidth: .25rem;\n\theight: .25rem;\n}\n\n[mol_view]::-webkit-scrollbar-corner {\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mol_view]::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n[mol_view]::-webkit-scrollbar-thumb {\n\tbackground-color: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n\ttab-size: 4;\n}\n\n@media print {\n\t[mol_view_root] {\n\t\theight: auto;\n\t}\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n@keyframes mol_view_wait {\n\tfrom {\n\t\topacity: .25;\n\t}\n\t20% {\n\t\topacity: .75;\n\t}\n\tto {\n\t\topacity: .25;\n\t}\n}\n\n:where([mol_view][mol_view_error=\"Promise\"]) {\n\tbackground: var(--mol_theme_hover);\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait 1s steps( 20, end ) infinite;\n}\n");
})($ || ($ = {}));
//mol/view/view/-css/view.css.ts
;
"use strict";
var $;
(function ($) {
    $mol_dom_context.document?.addEventListener('DOMContentLoaded', () => $mol_view.autobind(), { once: true });
})($ || ($ = {}));
//mol/view/view/view.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_scroll extends $mol_view {
        scroll_top(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        scroll_left(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        event() {
            return {
                ...super.event(),
                scroll: (event) => this.event_scroll(event)
            };
        }
        tabindex() {
            return -1;
        }
        event_scroll(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//mol/scroll/-view.tree/scroll.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));
//mol/dom/listener/listener.ts
;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));
//mol/print/print.ts
;
"use strict";
//mol/style/pseudo/class.ts
;
"use strict";
//mol/style/pseudo/element.ts
;
"use strict";
//mol/type/error/error.ts
;
"use strict";
//mol/style/guard/guard.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $mol_dom_qname($mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                let res = `[${block}_${path.join('_')}]`;
                if (prefix)
                    res = prefix + ' :where(' + res + ')';
                return res;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^(--)?[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix in val) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' :where([' + $mol_dom_qname(key) + '])', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > :where([' + $mol_dom_qname(type) + '])', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + ':where([' + name + '=' + JSON.stringify(val) + '])', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//mol/style/sheet/sheet.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $mol_style_attach(Component.name, $mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//mol/style/define/define.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollTop = next;
                return el.scrollTop;
            }
            scroll_left(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollLeft = next;
                return el.scrollLeft;
            }
            event_scroll(next) {
                const el = this.dom_node();
                this.scroll_left(el.scrollLeft, 'cache');
                this.scroll_top(el.scrollTop, 'cache');
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
            minimal_width() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($mol_scroll, {
            display: 'flex',
            overflow: 'auto',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
            },
            outline: 'none',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            scroll: {
                padding: [rem(.75), 0],
            },
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    transform: 'translateZ(0)',
                },
            },
            '::before': {
                display: 'none',
            },
            '::after': {
                display: 'none',
            },
            '::-webkit-scrollbar': {
                width: rem(.25),
                height: rem(.25),
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_page extends $mol_view {
        dom_name() {
            return "article";
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        sub() {
            return [
                this.Head(),
                this.Body(),
                this.Foot()
            ];
        }
        tabindex() {
            return -1;
        }
        Logo() {
            return null;
        }
        title_content() {
            return [
                this.Logo(),
                this.title()
            ];
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "h1";
            obj.sub = () => this.title_content();
            return obj;
        }
        tools() {
            return [];
        }
        Tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.tools();
            return obj;
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 64;
            obj.dom_name = () => "header";
            obj.sub = () => this.head();
            return obj;
        }
        body() {
            return [];
        }
        body_scroll_top(next) {
            return this.Body().scroll_top(next);
        }
        Body() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => this.body();
            return obj;
        }
        foot() {
            return [];
        }
        Foot() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "footer";
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//mol/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $mol_style_unit;
        const { calc } = $mol_style_func;
        $mol_style_define($mol_page, {
            display: 'flex',
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            color: $mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $mol_gap.block,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 2,
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $mol_gap.text,
                gap: $mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: 'auto',
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 1000,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
                padding: $mol_gap.block,
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 1,
                padding: $mol_gap.block,
                ':empty': {
                    display: 'none',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $mol_view {
        dom_node_external(next) {
            const host = $mol_owning_get(this).host;
            return next ?? host.dom_node();
        }
        attr_static() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//mol/plugin/plugin.ts
;
"use strict";
var $;
(function ($) {
    class $mol_hotkey extends $mol_plugin {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        key() {
            return {};
        }
        mod_ctrl() {
            return false;
        }
        mod_alt() {
            return false;
        }
        mod_shift() {
            return false;
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_hotkey.prototype, "keydown", null);
    $.$mol_hotkey = $mol_hotkey;
})($ || ($ = {}));
//mol/hotkey/-view.tree/hotkey.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));
//mol/keyboard/code/code.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== (event.ctrlKey || event.metaKey))
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/hotkey/hotkey.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_string extends $mol_view {
        dom_name() {
            return "input";
        }
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        autocomplete() {
            return false;
        }
        selection(next) {
            if (next !== undefined)
                return next;
            return [
                0,
                0
            ];
        }
        auto() {
            return [
                this.selection_watcher()
            ];
        }
        field() {
            return {
                ...super.field(),
                disabled: this.disabled(),
                value: this.value_changed(),
                placeholder: this.hint_visible(),
                spellcheck: this.spellcheck(),
                autocomplete: this.autocomplete_native(),
                selectionEnd: this.selection_end(),
                selectionStart: this.selection_start(),
                inputMode: this.keyboard(),
                enterkeyhint: this.enter()
            };
        }
        attr() {
            return {
                ...super.attr(),
                maxlength: this.length_max(),
                type: this.type()
            };
        }
        event() {
            return {
                ...super.event(),
                input: (event) => this.event_change(event)
            };
        }
        plugins() {
            return [
                this.Submit()
            ];
        }
        selection_watcher() {
            return null;
        }
        disabled() {
            return false;
        }
        value(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        value_changed(next) {
            return this.value(next);
        }
        hint() {
            return "";
        }
        hint_visible() {
            return this.hint();
        }
        spellcheck() {
            return true;
        }
        autocomplete_native() {
            return "";
        }
        selection_end() {
            return 0;
        }
        selection_start() {
            return 0;
        }
        keyboard() {
            return "text";
        }
        enter() {
            return "go";
        }
        length_max() {
            return +Infinity;
        }
        type(next) {
            if (next !== undefined)
                return next;
            return "text";
        }
        event_change(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        submit_with_ctrl() {
            return false;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_hotkey();
            obj.mod_ctrl = () => this.submit_with_ctrl();
            obj.key = () => ({
                enter: (event) => this.submit(event)
            });
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "selection", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "event_change", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "Submit", null);
    $.$mol_string = $mol_string;
})($ || ($ = {}));
//mol/string/-view.tree/string.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_layer = $mol_style_prop('mol_layer', [
        'hover',
        'focus',
        'speck',
        'float',
        'popup',
    ]);
})($ || ($ = {}));
//mol/layer/layer.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/layer/layer.css", ":root {\n\t--mol_layer_hover: 1;\n\t--mol_layer_focus: 2;\n\t--mol_layer_speck: 3;\n\t--mol_layer_float: 4;\n\t--mol_layer_popup: 5;\n}\n");
})($ || ($ = {}));
//mol/layer/-css/layer.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                const el = next.target;
                const from = el.selectionStart;
                const to = el.selectionEnd;
                el.value = this.value_changed(el.value);
                if (to === null)
                    return;
                el.selectionEnd = to;
                el.selectionStart = from;
                this.selection_change(next);
            }
            hint_visible() {
                return (this.enabled() ? this.hint() : '') || ' ';
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', $mol_wire_async(event => this.selection_change(event)));
            }
            selection_change(event) {
                const el = this.dom_node();
                if (el !== this.$.$mol_dom_context.document.activeElement)
                    return;
                const [from, to] = this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
                el.selectionEnd = to;
                el.selectionStart = from;
            }
            selection_start() {
                const el = this.dom_node();
                if (el.selectionStart === null)
                    return undefined;
                return this.selection()[0];
            }
            selection_end() {
                const el = this.dom_node();
                if (el.selectionEnd === null)
                    return undefined;
                return this.selection()[1];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/string/string.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tposition: relative;\n\tfont: inherit;\n\tflex: 1 1 auto;\n\tbackground: transparent;\n\tmin-width: 0;\n\tcolor: inherit;\n\tbackground: var(--mol_theme_field);\n}\n\n[mol_string]:disabled:not(:placeholder-shown) {\n\tbackground-color: transparent;\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_string]:where(:not(:disabled)) {\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_string]:where(:not(:disabled)):hover {\n\tbox-shadow: inset 0 0 0 2px var(--mol_theme_line);\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]::placeholder {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//mol/string/-css/string.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $mol_view {
        render_visible_only() {
            return true;
        }
        render_over() {
            return 0;
        }
        sub() {
            return this.rows();
        }
        Empty() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap_before() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_before()
            });
            return obj;
        }
        Gap_after() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_after()
            });
            return obj;
        }
        view_window() {
            return [
                0,
                0
            ];
        }
        rows() {
            return [];
        }
        gap_before() {
            return 0;
        }
        gap_after() {
            return 0;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Empty", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_before", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_after", null);
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//mol/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let cache = null;
    function $mol_support_css_overflow_anchor() {
        return cache ?? (cache = (!/Gecko\//.test(navigator.userAgent)
            && this.$mol_dom_context.CSS?.supports('overflow-anchor:auto')) ?? false);
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));
//mol/support/css/css.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));
//mol/mem/cached/cached.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window(next) {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                const rect = this.view_rect();
                if (next)
                    return next;
                let [min, max] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const gap_before = $mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = kids[min].minimal_height();
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top <= limit_top) && (bottom2 < limit_bottom)) {
                    min2 = Math.max(0, max - 1);
                    top2 = bottom;
                }
                if ((bottom >= limit_bottom) && (top2 >= limit_top)) {
                    max2 = Math.min(min + 1, kids.length);
                    bottom2 = top;
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += kids[max2].minimal_height();
                    ++max2;
                }
                while (anchoring && ((top2 >= limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= kids[min2].minimal_height();
                }
                return [min2, max2];
            }
            gap_before() {
                const skipped = this.sub().slice(0, this.view_window()[0]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            gap_after() {
                const skipped = this.sub().slice(this.view_window()[1]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                return this.sub().reduce((sum, view) => {
                    try {
                        return sum + view.minimal_height();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                        return sum;
                    }
                }, 0);
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        this.view_window([this.render_visible_only() ? index : 0, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: .5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n");
})($ || ($ = {}));
//mol/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_labeler extends $mol_list {
        rows() {
            return [
                this.Label(),
                this.Content()
            ];
        }
        label() {
            return [
                this.title()
            ];
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 32;
            obj.sub = () => this.label();
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 24;
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_labeler.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $mol_labeler.prototype, "Content", null);
    $.$mol_labeler = $mol_labeler;
})($ || ($ = {}));
//mol/labeler/-view.tree/labeler.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/labeler/labeler.view.css", "[mol_labeler] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tcursor: inherit;\n}\n\n[mol_labeler_label] {\n\tmin-height: 2rem;\n\tcolor: var(--mol_theme_shade);\n\tpadding: .5rem .75rem 0;\n\tgap: 0 var(--mol_gap_block);\n\tflex-wrap: wrap;\n}\n\n[mol_labeler_content] {\n\tdisplay: flex;\n\tpadding: var(--mol_gap_text);\n}\n");
})($ || ($ = {}));
//mol/labeler/-css/labeler.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_form_field extends $mol_labeler {
        bids() {
            return [];
        }
        label() {
            return [
                this.name(),
                this.Bid()
            ];
        }
        content() {
            return [
                this.control()
            ];
        }
        name() {
            return "";
        }
        bid() {
            return "";
        }
        Bid() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.bid()
            ];
            return obj;
        }
        control() {
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_form_field.prototype, "Bid", null);
    $.$mol_form_field = $mol_form_field;
})($ || ($ = {}));
//mol/form/field/-view.tree/field.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form_field extends $.$mol_form_field {
            bid() {
                return this.bids().filter(Boolean)[0] ?? '';
            }
        }
        __decorate([
            $mol_mem
        ], $mol_form_field.prototype, "bid", null);
        $$.$mol_form_field = $mol_form_field;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/form/field/field.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/form/field/field.view.css", "[mol_form_field] {\n\talign-items: stretch;\n}\n\n[mol_form_field_bid] {\n\tcolor: var(--mol_theme_focus);\n\tdisplay: inline-block;\n\ttext-shadow: 0 0;\n}\n\n[mol_form_field_content] {\n\tborder-radius: var(--mol_gap_round);\n}\n");
})($ || ($ = {}));
//mol/form/field/-css/field.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_speck extends $mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_theme: this.theme()
            };
        }
        style() {
            return {
                ...super.style(),
                minHeight: "1em"
            };
        }
        sub() {
            return [
                this.value()
            ];
        }
        theme() {
            return "$mol_theme_accent";
        }
        value() {
            return null;
        }
    }
    $.$mol_speck = $mol_speck;
})($ || ($ = {}));
//mol/speck/-view.tree/speck.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .625rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.25rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: var(--mol_layer_speck);\n\ttext-align: center;\n\tline-height: 1;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tuser-select: none;\n}\n");
})($ || ($ = {}));
//mol/speck/-css/speck.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button extends $mol_view {
        enabled() {
            return true;
        }
        click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.event_activate(event),
                dblclick: (event) => this.clicks(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        attr() {
            return {
                ...super.attr(),
                disabled: this.disabled(),
                role: "button",
                tabindex: this.tab_index(),
                title: this.hint_safe()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        Speck() {
            const obj = new this.$.$mol_speck();
            obj.value = () => this.error();
            return obj;
        }
        event_activate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        clicks(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        hint_safe() {
            return this.hint();
        }
        error() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "Speck", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "clicks", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//mol/button/-view.tree/button.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            status(next = [null]) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                try {
                    this.event_click(next);
                    this.click(next);
                    this.status([null]);
                }
                catch (error) {
                    this.status([error]);
                    $mol_fail_hidden(error);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                const [error] = this.status();
                if (!error)
                    return '';
                if (error instanceof Promise) {
                    return $mol_fail_hidden(error);
                }
                return String(error.message ?? error);
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button.prototype, "status", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/button.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_button]:where(:not(:disabled)):hover {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_button]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));
//mol/button/-css/button.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $mol_button {
        minimal_height() {
            return 40;
        }
        minimal_width() {
            return 40;
        }
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
//mol/button/typed/-view.tree/typed.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\talign-content: center;\n\talign-items: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tgap: var(--mol_gap_space);\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n[mol_button_typed][disabled] {\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tbackground-color: var(--mol_theme_hover);\n}\n\n[mol_button_typed]:active {\n\tcolor: var(--mol_theme_focus);\n}\n\n");
})($ || ($ = {}));
//mol/button/typed/-css/typed.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_major extends $mol_button_typed {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
    }
    $.$mol_button_major = $mol_button_major;
})($ || ($ = {}));
//mol/button/major/-view.tree/major.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/major/major.view.css", "[mol_button_major][disabled] {\n\topacity: .5;\n\tfilter: grayscale();\n}\n");
})($ || ($ = {}));
//mol/button/major/-css/major.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_row extends $mol_view {
    }
    $.$mol_row = $mol_row;
})($ || ($ = {}));
//mol/row/-view.tree/row.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/row/row.view.css", "[mol_row] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\talign-content: flex-start;\n\tjustify-content: flex-start;\n\tpadding: var(--mol_gap_block);\n\tgap: var(--mol_gap_block);\n\tflex: 0 0 auto;\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n}\n\n[mol_row] > * {\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/row/-css/row.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_form extends $mol_list {
        submit_allowed() {
            return true;
        }
        submit_blocked() {
            return false;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        rows() {
            return [
                this.Body(),
                this.Foot()
            ];
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        form_fields() {
            return [];
        }
        body() {
            return this.form_fields();
        }
        Body() {
            const obj = new this.$.$mol_list();
            obj.sub = () => this.body();
            return obj;
        }
        buttons() {
            return [];
        }
        foot() {
            return this.buttons();
        }
        Foot() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "keydown", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "Body", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "Foot", null);
    $.$mol_form = $mol_form;
})($ || ($ = {}));
//mol/form/-view.tree/form.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form extends $.$mol_form {
            form_fields() {
                return [...this.view_find(view => view instanceof $mol_form_field)]
                    .map(path => path[path.length - 1]);
            }
            submit_allowed() {
                return this.form_fields().every(field => !field.bid());
            }
            submit_blocked() {
                return !this.submit_allowed();
            }
            keydown(next) {
                if (next.ctrlKey && next.keyCode === $mol_keyboard_code.enter && !this.submit_blocked())
                    this.submit(event);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_form.prototype, "form_fields", null);
        __decorate([
            $mol_mem
        ], $mol_form.prototype, "submit_allowed", null);
        $$.$mol_form = $mol_form;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/form/form.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/form/form.view.css", "[mol_form] {\r\n\tgap: var(--mol_gap_block);\r\n}\r\n\r\n[mol_form_body] {\r\n\tgap: var(--mol_gap_block);\r\n}");
})($ || ($ = {}));
//mol/form/-css/form.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $dosha_client_auth extends $mol_page {
        login_success(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        title() {
            return "🔐 ДоШа";
        }
        body() {
            return [
                this.Login_form()
            ];
        }
        login(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Login_control() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.login(next);
            return obj;
        }
        Login_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Логин";
            obj.Content = () => this.Login_control();
            return obj;
        }
        password(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Password_control() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.password(next);
            obj.type = () => "password";
            return obj;
        }
        Password_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Пароль";
            obj.Content = () => this.Password_control();
            return obj;
        }
        Sign_in() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => "Войти";
            obj.click = (next) => this.login_success(next);
            return obj;
        }
        Login_form() {
            const obj = new this.$.$mol_form();
            obj.form_fields = () => [
                this.Login_field(),
                this.Password_field()
            ];
            obj.buttons = () => [
                this.Sign_in()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $dosha_client_auth.prototype, "login_success", null);
    __decorate([
        $mol_mem
    ], $dosha_client_auth.prototype, "login", null);
    __decorate([
        $mol_mem
    ], $dosha_client_auth.prototype, "Login_control", null);
    __decorate([
        $mol_mem
    ], $dosha_client_auth.prototype, "Login_field", null);
    __decorate([
        $mol_mem
    ], $dosha_client_auth.prototype, "password", null);
    __decorate([
        $mol_mem
    ], $dosha_client_auth.prototype, "Password_control", null);
    __decorate([
        $mol_mem
    ], $dosha_client_auth.prototype, "Password_field", null);
    __decorate([
        $mol_mem
    ], $dosha_client_auth.prototype, "Sign_in", null);
    __decorate([
        $mol_mem
    ], $dosha_client_auth.prototype, "Login_form", null);
    $.$dosha_client_auth = $dosha_client_auth;
})($ || ($ = {}));
//dosha/client/auth/-view.tree/auth.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $dosha_client_auth extends $.$dosha_client_auth {
        }
        $$.$dosha_client_auth = $dosha_client_auth;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dosha/client/auth/auth.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_theme_auto extends $mol_plugin {
        attr() {
            return {
                mol_theme: this.theme()
            };
        }
        theme() {
            return "";
        }
    }
    $.$mol_theme_auto = $mol_theme_auto;
})($ || ($ = {}));
//mol/theme/auto/-view.tree/auto.view.tree.ts
;
"use strict";
//mol/state/arg/arg.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));
//mol/action/action.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $mol_object {
        prefix;
        static href(next) {
            if (next === undefined) {
                next = $mol_dom_context.location.href;
            }
            else if (!/^about:srcdoc/.test(next)) {
                new $mol_after_frame(() => {
                    const next = this.href();
                    const prev = $mol_dom_context.location.href;
                    if (next === prev)
                        return;
                    const history = $mol_dom_context.history;
                    history.replaceState(history.state, $mol_dom_context.document.title, next);
                });
            }
            if ($mol_dom_context.parent !== $mol_dom_context.self) {
                $mol_dom_context.parent.postMessage(['hashchange', next], '*');
            }
            return next;
        }
        static href_normal() {
            return this.link({});
        }
        static href_absolute() {
            return new URL(this.href(), $mol_dom_context.location.href).toString();
        }
        static dict(next) {
            var href = this.href(next && this.make_link(next)).split(/#!?/)[1] || '';
            var chunks = href.split(this.separator);
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static dict_cut(except) {
            const dict = this.dict();
            const cut = {};
            for (const key in dict) {
                if (except.indexOf(key) >= 0)
                    break;
                cut[key] = dict[key];
            }
            return cut;
        }
        static value(key, next) {
            const nextDict = (next === void 0) ? void 0 : { ...this.dict(), [key]: next };
            const next2 = this.dict(nextDict)[key];
            return (next2 == null) ? null : next2;
        }
        static link(next) {
            return this.make_link({
                ...this.dict_cut(Object.keys(next)),
                ...next,
            });
        }
        static prolog = '!';
        static separator = '/';
        static make_link(next) {
            const chunks = [];
            for (let key in next) {
                if (null == next[key])
                    continue;
                const val = next[key];
                chunks.push([key].concat(val ? [val] : []).map(this.encode).join('='));
            }
            return new URL('#' + this.prolog + chunks.join(this.separator), this.href_absolute()).toString();
        }
        static go(next) {
            $mol_dom_context.location.href = this.make_link(next);
        }
        static encode(str) {
            return encodeURIComponent(str).replace(/\(/g, '%28').replace(/\)/g, '%29');
        }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_normal", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_absolute", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "dict_cut", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "make_link", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "go", null);
    $.$mol_state_arg = $mol_state_arg;
    function $mol_state_arg_change() {
        $mol_state_arg.href($mol_dom_context.location.href);
    }
    self.addEventListener('hashchange', $mol_state_arg_change);
})($ || ($ = {}));
//mol/state/arg/arg.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//mol/state/local/local.ts
;
"use strict";
var $;
(function ($) {
    self.addEventListener('storage', event => $.$mol_state_local.changes(event));
})($ || ($ = {}));
//mol/state/local/local.web.ts
;
"use strict";
var $;
(function ($) {
    function parse(theme) {
        if (theme === 'true')
            return true;
        if (theme === 'false')
            return false;
        return null;
    }
    function $mol_lights(next) {
        const arg = parse(this.$mol_state_arg.value('mol_lights'));
        const base = false;
        if (next === undefined) {
            return arg ?? this.$mol_state_local.value('$mol_lights') ?? base;
        }
        else {
            if (arg === null) {
                this.$mol_state_local.value('$mol_lights', next === base ? null : next);
            }
            else {
                this.$mol_state_arg.value('mol_lights', String(next));
            }
            return next;
        }
    }
    $.$mol_lights = $mol_lights;
})($ || ($ = {}));
//mol/lights/lights.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_theme_auto extends $.$mol_theme_auto {
            theme() {
                return this.$.$mol_lights() ? '$mol_theme_light' : '$mol_theme_dark';
            }
        }
        $$.$mol_theme_auto = $mol_theme_auto;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/theme/auto/auto.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link extends $mol_view {
        uri() {
            return "";
        }
        dom_name() {
            return "a";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.uri_toggle(),
                title: this.hint_safe(),
                target: this.target(),
                download: this.file_name(),
                mol_link_current: this.current()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        arg() {
            return {};
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.click(event)
            };
        }
        uri_toggle() {
            return "";
        }
        hint() {
            return "";
        }
        hint_safe() {
            return this.hint();
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        click(event) {
            return this.event_click(event);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//mol/link/-view.tree/link.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri_toggle() {
                return this.current() ? this.uri_off() : this.uri();
            }
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            uri_off() {
                const arg2 = {};
                for (let i in this.arg())
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href_normal();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) != args[key])
                        return false;
                }
                return true;
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 24);
            }
            external() {
                return this.uri_native().origin !== $mol_dom_context.location.origin;
            }
            target() {
                return this.external() ? '_blank' : '_self';
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_toggle", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_off", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/link/link.view.ts
;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($mol_link, {
        textDecoration: 'none',
        color: $mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        gap: $mol_gap.space,
        border: {
            radius: $mol_gap.round,
        },
        ':hover': {
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus-within': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            }
        },
        ':active': {
            color: $mol_theme.focus,
        },
        '@': {
            mol_link_current: {
                'true': {
                    color: $mol_theme.current,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));
//mol/link/link.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        font_size() {
            return 16;
        }
        font_family() {
            return "";
        }
        style_size() {
            return {};
        }
    }
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//mol/svg/-view.tree/svg.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//mol/after/timeout/timeout.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//mol/state/time/time.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $mol_state_time.now(0);
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/svg/svg.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return {
                ...super.attr(),
                viewBox: this.view_box(),
                preserveAspectRatio: this.aspect()
            };
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//mol/svg/root/-view.tree/root.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//mol/svg/root/-css/root.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return {
                ...super.attr(),
                d: this.geometry()
            };
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//mol/svg/path/-view.tree/path.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon extends $mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        sub() {
            return [
                this.Path()
            ];
        }
        path() {
            return "";
        }
        Path() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.path();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//mol/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1.5em;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n\ttransform-origin: center;\n}\n\n[mol_icon_path] {\n\ttransform-origin: center;\n}\n");
})($ || ($ = {}));
//mol/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_forum extends $mol_icon {
        path() {
            return "M17,12V3C17,2.45 16.55,2 16,2H3C2.45,2 2,2.45 2,3V17L6,13H16C16.55,13 17,12.55 17,12M21,6H19V15H6V17C6,17.55 6.45,18 7,18H18L22,22V7C22,6.45 21.55,6 21,6Z";
        }
    }
    $.$mol_icon_forum = $mol_icon_forum;
})($ || ($ = {}));
//mol/icon/forum/-view.tree/forum.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_forum_outline extends $mol_icon {
        path() {
            return "M15,4V11H5.17L4,12.17V4H15M16,2H3C2.45,2 2,2.45 2,3V17L6,13H16C16.55,13 17,12.55 17,12V3C17,2.45 16.55,2 16,2M21,6H19V15H6V17C6,17.55 6.45,18 7,18H18L22,22V7C22,6.45 21.55,6 21,6Z";
        }
    }
    $.$mol_icon_forum_outline = $mol_icon_forum_outline;
})($ || ($ = {}));
//mol/icon/forum/outline/-view.tree/outline.view.tree.ts
;
"use strict";
//mol/charset/encoding/encoding.ts
;
"use strict";
var $;
(function ($) {
    const decoders = {};
    function $mol_charset_decode(buffer, encoding = 'utf8') {
        let decoder = decoders[encoding];
        if (!decoder)
            decoder = decoders[encoding] = new TextDecoder(encoding);
        return decoder.decode(buffer);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));
//mol/charset/decode/decode.ts
;
"use strict";
//node/node.ts
;
"use strict";
var $node = $node || {};
//node/node.web.ts
;
"use strict";
var $;
(function ($) {
    const TextEncoder = globalThis.TextEncoder ?? $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));
//mol/charset/encode/encode.ts
;
"use strict";
var $;
(function ($) {
    class $mol_file_not_found extends Error {
    }
    $.$mol_file_not_found = $mol_file_not_found;
    class $mol_file extends $mol_object {
        static absolute(path) {
            throw new Error('Not implemented yet');
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        static base = '';
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        reset() {
            try {
                this.stat(null);
            }
            catch (error) {
                if (error instanceof $mol_file_not_found)
                    return;
                return $mol_fail_hidden(error);
            }
        }
        version() {
            return this.stat()?.mtime.getTime().toString(36).toUpperCase() ?? '';
        }
        watcher() {
            console.warn('$mol_file_web.watcher() not implemented');
            return {
                destructor() { }
            };
        }
        exists(next) {
            let exists = Boolean(this.stat());
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next)
                this.parent().exists(true);
            this.ensure();
            this.reset();
            return next;
        }
        type() {
            return this.stat()?.type ?? '';
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, virt) {
            if (virt) {
                const now = new Date;
                this.stat({
                    type: 'file',
                    size: 0,
                    atime: now,
                    mtime: now,
                    ctime: now,
                }, 'virt');
                return next;
            }
            if (next === undefined) {
                return $mol_charset_decode(this.buffer(undefined));
            }
            else {
                const buffer = next === undefined ? undefined : $mol_charset_encode(next);
                this.buffer(buffer);
                return next;
            }
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat()?.size ?? 0;
                default: return 0;
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "exists", null);
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//mol/file/file.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                const fiber = temp(self, args);
                return fiber.sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));
//mol/wire/sync/sync.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));
//mol/dom/parse/parse.ts
;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $mol_object2 {
        native;
        constructor(native) {
            super();
            this.native = native;
        }
        status() {
            const types = ['unknown', 'inform', 'success', 'redirect', 'wrong', 'failed'];
            return types[Math.floor(this.native.status / 100)];
        }
        code() {
            return this.native.status;
        }
        message() {
            return this.native.statusText || `HTTP Error ${this.code()}`;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const native = this.native;
            const mime = native.headers.get('content-type') || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            return $mol_wire_sync(this.native).json();
        }
        buffer() {
            return $mol_wire_sync(this.native).arrayBuffer();
        }
        xml() {
            return $mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch extends $mol_object2 {
        static request(input, init = {}) {
            const native = globalThis.fetch ?? $node['undici'].fetch;
            const controller = new AbortController();
            let done = false;
            const promise = native(input, {
                ...init,
                signal: controller.signal,
            }).finally(() => {
                done = true;
            });
            return Object.assign(promise, {
                destructor: () => {
                    if (!done && !controller.signal.aborted)
                        controller.abort();
                },
            });
        }
        static response(input, init) {
            return new $mol_fetch_response($mol_wire_sync(this).request(input, init));
        }
        static success(input, init) {
            const response = this.response(input, init);
            if (response.status() === 'success')
                return response;
            throw new Error(response.message());
        }
        static stream(input, init) {
            return this.success(input, init).stream();
        }
        static text(input, init) {
            return this.success(input, init).text();
        }
        static json(input, init) {
            return this.success(input, init).json();
        }
        static buffer(input, init) {
            return this.success(input, init).buffer();
        }
        static xml(input, init) {
            return this.success(input, init).xml();
        }
        static xhtml(input, init) {
            return this.success(input, init).xhtml();
        }
        static html(input, init) {
            return this.success(input, init).html();
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch, "response", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "success", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "json", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "html", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));
//mol/fetch/fetch.ts
;
"use strict";
var $;
(function ($) {
    class $mol_file_web extends $mol_file {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute(new URL(path, this.base).toString());
        }
        static base = $mol_dom_context.document?.currentScript
            ? new URL('.', $mol_dom_context.document.currentScript['src']).toString()
            : '';
        buffer(next) {
            if (next !== undefined)
                throw new Error(`Saving content not supported: ${this.path}`);
            const response = $mol_fetch.response(this.path());
            if (response.native.status === 404)
                throw new $mol_file_not_found(`File not found: ${this.path()}`);
            return new Uint8Array(response.buffer());
        }
        stat(next, virt) {
            let stat = next;
            if (next === undefined) {
                const content = this.text();
                const ctime = new Date();
                stat = {
                    type: 'file',
                    size: content.length,
                    ctime,
                    atime: ctime,
                    mtime: ctime
                };
            }
            this.parent().watcher();
            return stat;
        }
        resolve(path) {
            let res = this.path() + '/' + path;
            while (true) {
                let prev = res;
                res = res.replace(/\/[^\/.]+\/\.\.\//, '/');
                if (prev === res)
                    break;
            }
            return this.constructor.absolute(res);
        }
        ensure() {
            throw new Error('$mol_file_web.ensure() not implemented');
        }
        sub() {
            throw new Error('$mol_file_web.sub() not implemented');
        }
        relate(base = this.constructor.relative('.')) {
            throw new Error('$mol_file_web.relate() not implemented');
        }
        append(next) {
            throw new Error('$mol_file_web.append() not implemented');
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "buffer", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "sub", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_web, "absolute", null);
    $.$mol_file_web = $mol_file_web;
    $.$mol_file = $mol_file_web;
})($ || ($ = {}));
//mol/file/file.web.ts
;
"use strict";
//hyoo/hyoo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_huggingface_run(space, method, ...data) {
        while (true) {
            try {
                if (typeof method === 'number') {
                    return $mol_wire_sync(this).$mol_huggingface_ws(space, method, ...data);
                }
                else {
                    return this.$mol_huggingface_rest(space, method, ...data);
                }
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                if (error instanceof Error && error.message === `Queue full`) {
                    $mol_fail_log(error);
                    continue;
                }
                $mol_fail_hidden(error);
            }
        }
    }
    $.$mol_huggingface_run = $mol_huggingface_run;
    function $mol_huggingface_rest(space, method, ...data) {
        const uri = `https://${space}.hf.space/run/${method}`;
        const response = $mol_fetch.json(uri, {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data }),
        });
        if ('error' in response) {
            $mol_fail(new Error(response.error ?? 'Unknown API error'));
        }
        return response.data;
    }
    $.$mol_huggingface_rest = $mol_huggingface_rest;
    function $mol_huggingface_ws(space, fn_index, ...data) {
        const session_hash = $mol_guid();
        const socket = new WebSocket(`wss://${space}.hf.space/queue/join`);
        const promise = new Promise((done, fail) => {
            socket.onclose = event => {
                if (event.reason)
                    fail(new Error(event.reason));
            };
            socket.onerror = event => {
                fail(new Error(`Socket error`));
            };
            socket.onmessage = event => {
                const message = JSON.parse(event.data);
                switch (message.msg) {
                    case 'send_hash':
                        return socket.send(JSON.stringify({ session_hash, fn_index }));
                    case 'estimation': return;
                    case 'queue_full':
                        fail(new Error(`Queue full`));
                    case 'send_data':
                        return socket.send(JSON.stringify({ session_hash, fn_index, data }));
                    case 'process_starts': return;
                    case 'process_completed':
                        if (message.success) {
                            return done(message.output.data);
                        }
                        else {
                            return fail(new Error(message.output.error ?? `Unknown API error`));
                        }
                    default:
                        return fail(new Error(`Unknown message type: ${message.msg}`));
                }
            };
        });
        return Object.assign(promise, {
            destructor: () => socket.close()
        });
    }
    $.$mol_huggingface_ws = $mol_huggingface_ws;
})($ || ($ = {}));
//mol/huggingface/huggingface.ts
;
"use strict";
var $;
(function ($) {
    function $hyoo_lingua_translate(lang, text) {
        if (!text.trim())
            return '';
        const cache_key = `$hyoo_lingua_translate(${JSON.stringify(lang)},${JSON.stringify(text)})`;
        const cached = this.$mol_state_local.value(cache_key);
        if (cached)
            return String(cached);
        const translated = this.$mol_huggingface_run('hyoo-translate', 0, lang, text)[0];
        return this.$mol_state_local.value(cache_key, translated);
    }
    $.$hyoo_lingua_translate = $hyoo_lingua_translate;
})($ || ($ = {}));
//hyoo/lingua/translate/translate.ts
;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return this.$.$mol_state_local.value('locale', next) || $mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse(this.$.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ($mol_fail_catch(error)) {
                    const def = this.lang_default();
                    if (lang === def)
                        throw error;
                }
            }
            return {};
        }
        static text(key) {
            const lang = this.lang();
            const target = this.texts(lang)[key];
            if (target)
                return target;
            this.warn(key);
            const en = this.texts('en')[key];
            if (!en)
                return key;
            try {
                return $mol_wire_sync($hyoo_lingua_translate).call(this.$, lang, en);
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return en;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//mol/locale/locale.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_open_in_new extends $mol_icon {
        path() {
            return "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V12H19V19Z";
        }
    }
    $.$mol_icon_open_in_new = $mol_icon_open_in_new;
})($ || ($ = {}));
//mol/icon/open/in/new/-view.tree/new.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_cross extends $mol_icon {
        path() {
            return "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z";
        }
    }
    $.$mol_icon_cross = $mol_icon_cross;
})($ || ($ = {}));
//mol/icon/cross/-view.tree/cross.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_embed_native extends $mol_scroll {
        uri(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        dom_name() {
            return "object";
        }
        window() {
            return null;
        }
        attr() {
            return {
                ...super.attr(),
                data: this.uri(),
                type: this.mime()
            };
        }
        sub() {
            return [
                this.Fallback()
            ];
        }
        message() {
            return {
                hashchange: (next) => this.uri_change(next)
            };
        }
        mime() {
            return "";
        }
        title() {
            return "";
        }
        Fallback() {
            const obj = new this.$.$mol_link();
            obj.uri = () => this.uri();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        uri_change(next) {
            if (next !== undefined)
                return next;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_embed_native.prototype, "uri", null);
    __decorate([
        $mol_mem
    ], $mol_embed_native.prototype, "Fallback", null);
    __decorate([
        $mol_mem
    ], $mol_embed_native.prototype, "uri_change", null);
    $.$mol_embed_native = $mol_embed_native;
})($ || ($ = {}));
//mol/embed/native/-view.tree/native.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_promise() {
        let done;
        let fail;
        const promise = new Promise((d, f) => {
            done = d;
            fail = f;
        });
        return Object.assign(promise, {
            done,
            fail,
        });
    }
    $.$mol_promise = $mol_promise;
})($ || ($ = {}));
//mol/promise/promise/promise.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wait_timeout_async(timeout) {
        const promise = $mol_promise();
        const task = new this.$mol_after_timeout(timeout, () => promise.done());
        return Object.assign(promise, {
            destructor: () => task.destructor()
        });
    }
    $.$mol_wait_timeout_async = $mol_wait_timeout_async;
    function $mol_wait_timeout(timeout) {
        return this.$mol_wire_sync(this).$mol_wait_timeout_async(timeout);
    }
    $.$mol_wait_timeout = $mol_wait_timeout;
})($ || ($ = {}));
//mol/wait/timeout/timeout.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_native extends $.$mol_embed_native {
            window() {
                $mol_wire_solid();
                return $mol_wire_sync(this).load(this.dom_node_actual());
            }
            load(frame) {
                return new Promise((done, fail) => {
                    frame.onload = () => {
                        try {
                            if (frame.contentWindow.location.href === 'about:blank') {
                                return;
                            }
                        }
                        catch { }
                        done(frame.contentWindow);
                    };
                    frame.onerror = (event) => {
                        fail(typeof event === 'string' ? new Error(event) : event.error || event);
                    };
                });
            }
            uri_resource() {
                return this.uri().replace(/#.*/, '');
            }
            message_listener() {
                return new $mol_dom_listener($mol_dom_context, 'message', $mol_wire_async(this).message_receive);
            }
            message_receive(event) {
                if (!event)
                    return;
                if (event.source !== this.window())
                    return;
                if (!Array.isArray(event.data))
                    return;
                this.message()[event.data[0]]?.(event);
            }
            uri_change(event) {
                this.$.$mol_wait_timeout(1000);
                this.uri(event.data[1]);
            }
            auto() {
                return [
                    this.message_listener(),
                    this.window(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "window", null);
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "uri_resource", null);
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "message_listener", null);
        $$.$mol_embed_native = $mol_embed_native;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/embed/native/native.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/embed/native/native.view.css", "[mol_embed_native] {\n\tmax-width: 100%;\n\tmax-height: 100vh;\n\tobject-fit: cover;\n\tdisplay: flex;\n\tflex: 1 1 auto;\n\tobject-position: top left;\n\tborder-radius: var(--mol_gap_round);\n\taspect-ratio: 4/3;\n}\n");
})($ || ($ = {}));
//mol/embed/native/-css/native.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_frame extends $mol_embed_native {
        dom_name() {
            return "iframe";
        }
        attr() {
            return {
                ...super.attr(),
                data: null,
                type: null,
                src: this.uri(),
                srcdoc: this.html(),
                allow: this.allow()
            };
        }
        fullscreen() {
            return true;
        }
        accelerometer() {
            return true;
        }
        autoplay() {
            return true;
        }
        encription() {
            return true;
        }
        gyroscope() {
            return true;
        }
        pip() {
            return true;
        }
        clipboard_read() {
            return true;
        }
        clipboard_write() {
            return true;
        }
        uri(next) {
            if (next !== undefined)
                return next;
            return "about:config";
        }
        html() {
            return null;
        }
        allow() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_frame.prototype, "uri", null);
    $.$mol_frame = $mol_frame;
})($ || ($ = {}));
//mol/frame/-view.tree/frame.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_frame extends $.$mol_frame {
            window() {
                return super.window();
            }
            allow() {
                return [
                    ...this.fullscreen() ? ['fullscreen'] : [],
                    ...this.accelerometer() ? ['accelerometer'] : [],
                    ...this.autoplay() ? ['autoplay'] : [],
                    ...this.encription() ? ['encrypted-media'] : [],
                    ...this.gyroscope() ? ['gyroscope'] : [],
                    ...this.pip() ? ['picture-in-picture'] : [],
                    ...this.clipboard_read() ? [`clipboard-read ${this.uri()}`] : [],
                    ...this.clipboard_write() ? [`clipboard-write ${this.uri()}`] : [],
                ].join('; ');
            }
        }
        $$.$mol_frame = $mol_frame;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/frame/frame.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_define($mol_frame, {
        border: {
            style: 'none',
        },
        maxHeight: $mol_style_unit.vh(100),
    });
})($ || ($ = {}));
//mol/frame/frame.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_chat extends $mol_link {
        seed() {
            return "";
        }
        opened() {
            return false;
        }
        arg() {
            return {
                mol_chat: ""
            };
        }
        hint() {
            return this.title();
        }
        sub() {
            return [
                this.Icon()
            ];
        }
        pages() {
            return [
                this.Page()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_forum_outline();
            return obj;
        }
        title() {
            return this.$.$mol_locale.text('$mol_chat_title');
        }
        standalone() {
            return "";
        }
        Standalone_icon() {
            const obj = new this.$.$mol_icon_open_in_new();
            return obj;
        }
        Esternal() {
            const obj = new this.$.$mol_link();
            obj.uri = () => this.standalone();
            obj.sub = () => [
                this.Standalone_icon()
            ];
            return obj;
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                mol_chat: null
            });
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        embed() {
            return "";
        }
        Embed() {
            const obj = new this.$.$mol_frame();
            obj.uri = () => this.embed();
            return obj;
        }
        Page() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.title();
            obj.tools = () => [
                this.Esternal(),
                this.Close()
            ];
            obj.Body = () => this.Embed();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_chat.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $mol_chat.prototype, "Standalone_icon", null);
    __decorate([
        $mol_mem
    ], $mol_chat.prototype, "Esternal", null);
    __decorate([
        $mol_mem
    ], $mol_chat.prototype, "Close_icon", null);
    __decorate([
        $mol_mem
    ], $mol_chat.prototype, "Close", null);
    __decorate([
        $mol_mem
    ], $mol_chat.prototype, "Embed", null);
    __decorate([
        $mol_mem
    ], $mol_chat.prototype, "Page", null);
    $.$mol_chat = $mol_chat;
})($ || ($ = {}));
//mol/chat/-view.tree/chat.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_chat extends $.$mol_chat {
            opened() {
                return this.$.$mol_state_arg.value('mol_chat') !== null;
            }
            pages() {
                return this.opened() ? [this.Page()] : [];
            }
            standalone() {
                const seed = this.seed();
                const origin = new URL(this.$.$mol_state_arg.href()).origin;
                return `https://talks.hyoo.ru/#!chat=${seed}`;
            }
            embed() {
                const seed = this.seed();
                const lights = String(this.$.$mol_lights());
                const embed = this.$.$mol_state_arg.href();
                return `https://talks.hyoo.ru/#!chat=${encodeURIComponent(seed)}/mol_lights=${lights}`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_chat.prototype, "standalone", null);
        __decorate([
            $mol_mem
        ], $mol_chat.prototype, "embed", null);
        $$.$mol_chat = $mol_chat;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/chat/chat.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/chat/chat.view.css", "[mol_chat_page] {\n\tflex: 1 0 30rem;\n}\n");
})($ || ($ = {}));
//mol/chat/-css/chat.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_minor extends $mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//mol/button/minor/-view.tree/minor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_button_minor][disabled] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));
//mol/button/minor/-css/minor.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check extends $mol_button_minor {
        attr() {
            return {
                ...super.attr(),
                mol_check_checked: this.checked(),
                "aria-checked": this.aria_checked(),
                role: this.aria_role()
            };
        }
        sub() {
            return [
                this.Icon(),
                this.label()
            ];
        }
        checked(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        aria_checked() {
            return "false";
        }
        aria_role() {
            return "checkbox";
        }
        Icon() {
            return null;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        label() {
            return [
                this.Title()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//mol/check/-view.tree/check.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\talign-items: flex-start;\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n\n[mol_check_title] {\n\tflex-shrink: 1;\n}\n");
})($ || ($ = {}));
//mol/check/-css/check.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                if (next?.defaultPrevented)
                    return;
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
            aria_checked() {
                return String(this.checked());
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/check.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_icon extends $mol_check {
    }
    $.$mol_check_icon = $mol_check_icon;
})($ || ($ = {}));
//mol/check/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/icon/icon.view.css", "[mol_check_icon]:where([mol_check_checked]) {\n\tcolor: var(--mol_theme_current);\n}\n");
})($ || ($ = {}));
//mol/check/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_brightness_6 extends $mol_icon {
        path() {
            return "M12,18V6C15.31,6 18,8.69 18,12C18,15.31 15.31,18 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z";
        }
    }
    $.$mol_icon_brightness_6 = $mol_icon_brightness_6;
})($ || ($ = {}));
//mol/icon/brightness/6/-view.tree/6.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_lights_toggle extends $mol_check_icon {
        Icon() {
            return this.Lights_icon();
        }
        hint() {
            return this.$.$mol_locale.text('$mol_lights_toggle_hint');
        }
        checked(next) {
            return this.lights(next);
        }
        Lights_icon() {
            const obj = new this.$.$mol_icon_brightness_6();
            return obj;
        }
        lights(next) {
            if (next !== undefined)
                return next;
            return false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_lights_toggle.prototype, "Lights_icon", null);
    __decorate([
        $mol_mem
    ], $mol_lights_toggle.prototype, "lights", null);
    $.$mol_lights_toggle = $mol_lights_toggle;
})($ || ($ = {}));
//mol/lights/toggle/-view.tree/toggle.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_lights_toggle extends $.$mol_lights_toggle {
            lights(next) {
                return this.$.$mol_lights(next);
            }
        }
        $$.$mol_lights_toggle = $mol_lights_toggle;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/lights/toggle/toggle.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_github_circle extends $mol_icon {
        path() {
            return "M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z";
        }
    }
    $.$mol_icon_github_circle = $mol_icon_github_circle;
})($ || ($ = {}));
//mol/icon/github/circle/-view.tree/circle.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link_source extends $mol_link {
        hint() {
            return this.$.$mol_locale.text('$mol_link_source_hint');
        }
        sub() {
            return [
                this.Icon()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_github_circle();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link_source.prototype, "Icon", null);
    $.$mol_link_source = $mol_link_source;
})($ || ($ = {}));
//mol/link/source/-view.tree/source.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_logout extends $mol_icon {
        path() {
            return "M16,17V14H9V10H16V7L21,12L16,17M14,2C15.1,2 16,2.9 16,4V6H14V4H5V20H14V18H16V20C16,21.1 15.1,22 14,22H5C3.9,22 3,21.1 3,20V4C3,2.9 3.9,2 5,2H14Z";
        }
    }
    $.$mol_icon_logout = $mol_icon_logout;
})($ || ($ = {}));
//mol/icon/logout/-view.tree/logout.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_paragraph extends $mol_view {
        line_height() {
            return 24;
        }
        letter_width() {
            return 7;
        }
        width_limit() {
            return +Infinity;
        }
        row_width() {
            return 0;
        }
        sub() {
            return [
                this.title()
            ];
        }
    }
    $.$mol_paragraph = $mol_paragraph;
})($ || ($ = {}));
//mol/paragraph/-view.tree/paragraph.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return this.letter_width();
            }
            row_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.row_width())) * this.line_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "row_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/paragraph/paragraph.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/paragraph/paragraph.view.css", ":where([mol_paragraph]) {\n\tmargin: 0;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/paragraph/-css/paragraph.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_stack extends $mol_view {
    }
    $.$mol_stack = $mol_stack;
})($ || ($ = {}));
//mol/stack/-view.tree/stack.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/stack/stack.view.css", "[mol_stack] {\n\tdisplay: grid;\n\t/* width: max-content; */\n\t/* height: max-content; */\n\talign-items: flex-start;\n\tjustify-items: flex-start;\n}\n\n[mol_stack] > * {\n\tgrid-area: 1/1;\n}\n");
})($ || ($ = {}));
//mol/stack/-css/stack.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dimmer extends $mol_paragraph {
        haystack() {
            return "";
        }
        needle() {
            return "";
        }
        sub() {
            return this.parts();
        }
        Low(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        High(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        parts() {
            return [];
        }
        string(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    __decorate([
        $mol_mem_key
    ], $mol_dimmer.prototype, "High", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//mol/dimmer/-view.tree/dimmer.view.tree.ts
;
"use strict";
//mol/type/equals/equals.ts
;
"use strict";
//mol/type/merge/merge.ts
;
"use strict";
//mol/type/intersect/intersect.ts
;
"use strict";
//mol/unicode/unicode.ts
;
"use strict";
var $;
(function ($) {
    class $mol_regexp extends RegExp {
        groups;
        constructor(source, flags = 'gsu', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        *[Symbol.matchAll](str) {
            const index = this.lastIndex;
            this.lastIndex = 0;
            try {
                while (this.lastIndex < str.length) {
                    const found = this.exec(str);
                    if (!found)
                        break;
                    yield found;
                }
            }
            finally {
                this.lastIndex = index;
            }
        }
        [Symbol.match](str) {
            const res = [...this[Symbol.matchAll](str)].filter(r => r.groups).map(r => r[0]);
            if (!res.length)
                return null;
            return res;
        }
        [Symbol.split](str) {
            const res = [];
            let token_last = null;
            for (let token of this[Symbol.matchAll](str)) {
                if (token.groups && (token_last ? token_last.groups : true))
                    res.push('');
                res.push(token[0]);
                token_last = token;
            }
            if (!res.length)
                res.push('');
            return res;
        }
        test(str) {
            return Boolean(str.match(this));
        }
        exec(str) {
            const from = this.lastIndex;
            if (from >= str.length)
                return null;
            const res = super.exec(str);
            if (res === null) {
                this.lastIndex = str.length;
                if (!str)
                    return null;
                return Object.assign([str.slice(from)], {
                    index: from,
                    input: str,
                });
            }
            if (from === this.lastIndex) {
                $mol_fail(new Error('Captured empty substring'));
            }
            const groups = {};
            const skipped = str.slice(from, this.lastIndex - res[0].length);
            if (skipped) {
                this.lastIndex = this.lastIndex - res[0].length;
                return Object.assign([skipped], {
                    index: from,
                    input: res.input,
                });
            }
            for (let i = 0; i < this.groups.length; ++i) {
                const group = this.groups[i];
                groups[group] = groups[group] || res[i + 1] || '';
            }
            return Object.assign(res, { groups });
        }
        generate(params) {
            return null;
        }
        get native() {
            return new RegExp(this.source, this.flags);
        }
        static repeat(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}?`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static repeat_greedy(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static vary(sources) {
            const groups = [];
            const chunks = sources.map(source => {
                const regexp = $mol_regexp.from(source);
                groups.push(...regexp.groups);
                return regexp.source;
            });
            return new $mol_regexp(`(?:${chunks.join('|')})`, '', groups);
        }
        static optional(source) {
            return $mol_regexp.repeat_greedy(source, 0, 1);
        }
        static force_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?=${regexp.source})`, regexp.flags, regexp.groups);
        }
        static forbid_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?!${regexp.source})`, regexp.flags, regexp.groups);
        }
        static from(source, { ignoreCase, multiline } = {
            ignoreCase: false,
            multiline: false,
        }) {
            let flags = 'gsu';
            if (multiline)
                flags += 'm';
            if (ignoreCase)
                flags += 'i';
            if (typeof source === 'number') {
                const src = `\\u{${source.toString(16)}}`;
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => src;
                return regexp;
            }
            if (typeof source === 'string') {
                const src = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => source;
                return regexp;
            }
            else if (source instanceof $mol_regexp) {
                const regexp = new $mol_regexp(source.source, flags, source.groups);
                regexp.generate = params => source.generate(params);
                return regexp;
            }
            if (source instanceof RegExp) {
                const test = new RegExp('|' + source.source);
                const groups = Array.from({ length: test.exec('').length - 1 }, (_, i) => String(i + 1));
                const regexp = new $mol_regexp(source.source, source.flags, groups);
                regexp.generate = () => '';
                return regexp;
            }
            if (Array.isArray(source)) {
                const patterns = source.map(src => Array.isArray(src)
                    ? $mol_regexp.optional(src)
                    : $mol_regexp.from(src));
                const chunks = patterns.map(pattern => pattern.source);
                const groups = [];
                let index = 0;
                for (const pattern of patterns) {
                    for (let group of pattern.groups) {
                        if (Number(group) >= 0) {
                            groups.push(String(index++));
                        }
                        else {
                            groups.push(group);
                        }
                    }
                }
                const regexp = new $mol_regexp(chunks.join(''), flags, groups);
                regexp.generate = params => {
                    let res = '';
                    for (const pattern of patterns) {
                        let sub = pattern.generate(params);
                        if (sub === null)
                            return '';
                        res += sub;
                    }
                    return res;
                };
                return regexp;
            }
            else {
                const groups = [];
                const chunks = Object.keys(source).map(name => {
                    groups.push(name);
                    const regexp = $mol_regexp.from(source[name]);
                    groups.push(...regexp.groups);
                    return `(${regexp.source})`;
                });
                const regexp = new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
                const validator = new RegExp('^' + regexp.source + '$', flags);
                regexp.generate = (params) => {
                    for (let option in source) {
                        if (option in params) {
                            if (typeof params[option] === 'boolean') {
                                if (!params[option])
                                    continue;
                            }
                            else {
                                const str = String(params[option]);
                                if (str.match(validator))
                                    return str;
                                $mol_fail(new Error(`Wrong param: ${option}=${str}`));
                            }
                        }
                        else {
                            if (typeof source[option] !== 'object')
                                continue;
                        }
                        const res = $mol_regexp.from(source[option]).generate(params);
                        if (res)
                            return res;
                    }
                    return null;
                };
                return regexp;
            }
        }
        static unicode_only(...category) {
            return new $mol_regexp(`\\p{${category.join('=')}}`);
        }
        static unicode_except(...category) {
            return new $mol_regexp(`\\P{${category.join('=')}}`);
        }
        static char_range(from, to) {
            return new $mol_regexp(`${$mol_regexp.from(from).source}-${$mol_regexp.from(to).source}`);
        }
        static char_only(...allowed) {
            const regexp = allowed.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[${regexp}]`);
        }
        static char_except(...forbidden) {
            const regexp = forbidden.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[^${regexp}]`);
        }
        static decimal_only = $mol_regexp.from(/\d/gsu);
        static decimal_except = $mol_regexp.from(/\D/gsu);
        static latin_only = $mol_regexp.from(/\w/gsu);
        static latin_except = $mol_regexp.from(/\W/gsu);
        static space_only = $mol_regexp.from(/\s/gsu);
        static space_except = $mol_regexp.from(/\S/gsu);
        static word_break_only = $mol_regexp.from(/\b/gsu);
        static word_break_except = $mol_regexp.from(/\B/gsu);
        static tab = $mol_regexp.from(/\t/gsu);
        static slash_back = $mol_regexp.from(/\\/gsu);
        static nul = $mol_regexp.from(/\0/gsu);
        static char_any = $mol_regexp.from(/./gsu);
        static begin = $mol_regexp.from(/^/gsu);
        static end = $mol_regexp.from(/$/gsu);
        static or = $mol_regexp.from(/|/gsu);
        static line_end = $mol_regexp.from({
            win_end: [['\r'], '\n'],
            mac_end: '\r',
        });
    }
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));
//mol/regexp/regexp.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (needle.length < 2)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? this.High(index) : this.Low(index));
                }
                return chunks;
            }
            strings() {
                const options = this.needle().split(/\s+/g).filter(Boolean);
                if (!options.length)
                    return [this.haystack()];
                const variants = { ...options };
                const regexp = $mol_regexp.from({ needle: variants }, { ignoreCase: true });
                return this.haystack().split(regexp);
            }
            string(index) {
                return this.strings()[index];
            }
            *view_find(check, path = []) {
                if (check(this, this.haystack())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/dimmer/dimmer.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.8;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));
//mol/dimmer/-css/dimmer.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_token extends $mol_dimmer {
        attr() {
            return {
                ...super.attr(),
                mol_text_code_token_type: this.type()
            };
        }
        type() {
            return "";
        }
    }
    $.$mol_text_code_token = $mol_text_code_token;
    class $mol_text_code_token_link extends $mol_text_code_token {
        dom_name() {
            return "a";
        }
        type() {
            return "code-link";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.uri(),
                target: "_blank"
            };
        }
        uri() {
            return "";
        }
    }
    $.$mol_text_code_token_link = $mol_text_code_token_link;
})($ || ($ = {}));
//mol/text/code/token/-view.tree/token.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { hsla } = $mol_style_func;
        $mol_style_define($mol_text_code_token, {
            display: 'inline',
            textDecoration: 'none',
            '@': {
                mol_text_code_token_type: {
                    'code-keyword': {
                        color: hsla(0, 70, 60, 1),
                    },
                    'code-field': {
                        color: hsla(300, 70, 50, 1),
                    },
                    'code-tag': {
                        color: hsla(330, 70, 50, 1),
                    },
                    'code-global': {
                        color: hsla(30, 80, 50, 1),
                    },
                    'code-decorator': {
                        color: hsla(180, 40, 50, 1),
                    },
                    'code-punctuation': {
                        color: hsla(0, 0, 50, 1),
                    },
                    'code-string': {
                        color: hsla(90, 40, 50, 1),
                    },
                    'code-number': {
                        color: hsla(55, 65, 45, 1),
                    },
                    'code-call': {
                        color: hsla(270, 60, 50, 1),
                    },
                    'code-link': {
                        color: hsla(210, 60, 50, 1),
                    },
                    'code-comment-inline': {
                        opacity: .5,
                    },
                    'code-comment-block': {
                        opacity: .5,
                    },
                    'code-docs': {
                        opacity: .75,
                    },
                },
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/token/token.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_row extends $mol_paragraph {
        text() {
            return "";
        }
        minimal_height() {
            return 24;
        }
        numb_showed() {
            return true;
        }
        syntax() {
            return null;
        }
        uri_resolve(id) {
            return "";
        }
        Numb() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.numb()
            ];
            return obj;
        }
        Token(id) {
            const obj = new this.$.$mol_text_code_token();
            obj.type = () => this.token_type(id);
            obj.haystack = () => this.token_text(id);
            obj.needle = () => this.highlight();
            return obj;
        }
        Token_link(id) {
            const obj = new this.$.$mol_text_code_token_link();
            obj.haystack = () => this.token_text(id);
            obj.needle = () => this.highlight();
            obj.uri = () => this.token_uri(id);
            return obj;
        }
        find_pos(id) {
            return null;
        }
        numb() {
            return 0;
        }
        token_type(id) {
            return "";
        }
        token_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
        token_uri(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_text_code_row.prototype, "Numb", null);
    __decorate([
        $mol_mem_key
    ], $mol_text_code_row.prototype, "Token", null);
    __decorate([
        $mol_mem_key
    ], $mol_text_code_row.prototype, "Token_link", null);
    $.$mol_text_code_row = $mol_text_code_row;
})($ || ($ = {}));
//mol/text/code/row/-view.tree/row.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_syntax2 {
        lexems;
        constructor(lexems) {
            this.lexems = lexems;
            for (let name in lexems) {
                this.rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            const parts = '(' + this.rules.map(rule => rule.regExp.source).join(')|(') + ')';
            this.regexp = RegExp(`([\\s\\S]*?)(?:(${parts})|$(?![^]))`, 'gmu');
        }
        rules = [];
        regexp;
        tokenize(text, handle) {
            let end = 0;
            lexing: while (end < text.length) {
                const start = end;
                this.regexp.lastIndex = start;
                var found = this.regexp.exec(text);
                end = this.regexp.lastIndex;
                if (start === end)
                    throw new Error('Empty token');
                var prefix = found[1];
                if (prefix)
                    handle('', prefix, [], start);
                var suffix = found[2];
                if (!suffix)
                    continue;
                let offset = 4;
                for (let rule of this.rules) {
                    if (found[offset - 1]) {
                        handle(rule.name, suffix, found.slice(offset, offset + rule.size), start + prefix.length);
                        continue lexing;
                    }
                    offset += rule.size + 1;
                }
                $mol_fail(new Error('$mol_syntax2 is broken'));
            }
        }
        parse(text, handlers) {
            this.tokenize(text, (name, ...args) => handlers[name](...args));
        }
    }
    $.$mol_syntax2 = $mol_syntax2;
})($ || ($ = {}));
//mol/syntax2/syntax2.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_syntax2_md_flow = new $mol_syntax2({
        'quote': /^((?:(?:[>"] )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^([#=]+)(\s+)(.*?)$([\n\r]*)/,
        'list': /^((?:(?: ?([*+-])|(?:\d+[\.\)])+) +(?:[^]*?)$(?:\r?\n?)(?:  (?:[^]*?)$(?:\r?\n?))*)+)((?:\r?\n)*)/,
        'code': /^(```\s*)([\w.-]*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?:  |\t)(?:[^]*?)$\r?\n?)+)([\n\r]*)/,
        'table': /((?:^\|.+?$\r?\n?)+)([\n\r]*)/,
        'grid': /((?:^ *! .*?$\r?\n?)+)([\n\r]*)/,
        'cut': /^--+$((?:\r?\n)*)/,
        'block': /^(.*?)$((?:\r?\n)*)/,
    });
    $.$mol_syntax2_md_line = new $mol_syntax2({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*|\/\/(?!\s)(.+?)\/\//,
        'code': /```(.+?)```|;;(.+?);;|`(.+?)`/,
        'insert': /\+\+(.+?)\+\+/,
        'delete': /~~(.+?)~~|--(.+?)--/,
        'embed': /""(?:(.*?)\\)?(.*?)""/,
        'link': /\\\\(?:(.*?)\\)?(.*?)\\\\/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
        'text-link': /\[(.*?(?:\[[^\[\]]*?\][^\[\]]*?)*)\]\((.*?)\)/,
        'text-link-http': /\b(https?:\/\/[^\s,.;:!?")]+(?:[,.;:!?")][^\s,.;:!?")]+)+)/,
    });
    $.$mol_syntax2_md_code = new $mol_syntax2({
        'code-indent': /\t+/,
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/|<![^]*?>)/,
        'code-link': /(?:\w+:\/\/|#)\S+?(?=\s|\\\\|""|$)/,
        'code-comment-inline': /\/\/.*?(?:$|\/\/)/,
        'code-string': /(?:".*?"|'.*?'|`.*?`|\/.+?\/[dygimsu]*(?!\p{Letter})|(?:^|[ \t])\\[^\n]*\n)/,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-call': /\.?\w+ *(?=\()/,
        'code-sexpr': /\((\w+ )/,
        'code-field': /(?:(?:\.|::|->)\w+|[\w-]+\??\s*:(?!\/\/|:))/,
        'code-keyword': /\b(throw|readonly|unknown|keyof|typeof|never|from|class|struct|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|val|let|const|for|do|while|until|in|out|of|new|if|then|else|switch|case|this|return|async|await|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void|int|float|ref)\b/,
        'code-global': /[$]+\w*|\b[A-Z][a-z0-9]+[A-Z]\w*/,
        'code-word': /\w+/,
        'code-decorator': /@\s*\S+/,
        'code-tag': /<\/?[\w-]+\/?>?|&\w+;/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>~!\?@#%&\*_\+\\\/\|;:\.,\^]+?/,
    });
})($ || ($ = {}));
//mol/syntax2/md/md.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code_row extends $.$mol_text_code_row {
            maximal_width() {
                return this.text().length * this.letter_width();
            }
            syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            tokens(path) {
                const tokens = [];
                const text = (path.length > 0)
                    ? this.tokens(path.slice(0, path.length - 1))[path[path.length - 1]].found.slice(1, -1)
                    : this.text();
                this.syntax().tokenize(text, (name, found, chunks) => {
                    if (name === 'code-sexpr') {
                        tokens.push({ name: 'code-punctuation', found: '(', chunks: [] });
                        tokens.push({ name: 'code-call', found: chunks[0], chunks: [] });
                    }
                    else {
                        tokens.push({ name, found, chunks });
                    }
                });
                return tokens;
            }
            sub() {
                return [
                    ...this.numb_showed() ? [this.Numb()] : [],
                    ...this.row_content([])
                ];
            }
            row_content(path) {
                return this.tokens(path).map((t, i) => this.Token([...path, i]));
            }
            Token(path) {
                return this.token_type(path) === 'code-link' ? this.Token_link(path) : super.Token(path);
            }
            token_type(path) {
                return this.tokens([...path.slice(0, path.length - 1)])[path[path.length - 1]].name;
            }
            token_content(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                switch (token.name) {
                    case 'code-string': return [
                        token.found[0],
                        ...this.row_content(path),
                        token.found[token.found.length - 1],
                    ];
                    default: return [token.found];
                }
            }
            token_text(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                return token.found;
            }
            token_uri(path) {
                const uri = this.token_text(path);
                return this.uri_resolve(uri);
            }
            *view_find(check, path = []) {
                if (check(this, this.text())) {
                    yield [...path, this];
                }
            }
            find_pos(offset) {
                return this.find_token_pos([offset]);
            }
            find_token_pos([offset, ...path]) {
                for (const [index, token] of this.tokens(path).entries()) {
                    if (token.found.length >= offset) {
                        const token = this.Token([...path, index]);
                        return { token, offset };
                    }
                    else {
                        offset -= token.found.length;
                    }
                }
                return null;
            }
        }
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "row_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_type", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_uri", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "find_pos", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "find_token_pos", null);
        $$.$mol_text_code_row = $mol_text_code_row;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/row/row.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($mol_text_code_row, {
            display: 'block',
            position: 'relative',
            font: {
                family: 'monospace',
            },
            Numb: {
                textAlign: 'right',
                color: $mol_theme.shade,
                width: rem(3),
                margin: {
                    left: rem(-4),
                },
                display: 'inline-block',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                position: 'absolute',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/row/row.view.css.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_blob = ($node.buffer?.Blob ?? $mol_dom_context.Blob);
})($ || ($ = {}));
//mol/blob/blob.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_clipboard extends $mol_icon {
        path() {
            return "M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M12,3C12.55,3 13,3.45 13,4C13,4.55 12.55,5 12,5C11.45,5 11,4.55 11,4C11,3.45 11.45,3 12,3";
        }
    }
    $.$mol_icon_clipboard = $mol_icon_clipboard;
})($ || ($ = {}));
//mol/icon/clipboard/-view.tree/clipboard.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_clipboard_outline extends $mol_icon {
        path() {
            return "M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M12,3C12.55,3 13,3.45 13,4C13,4.55 12.55,5 12,5C11.45,5 11,4.55 11,4C11,3.45 11.45,3 12,3M7,7H17V5H19V19H5V5H7V7Z";
        }
    }
    $.$mol_icon_clipboard_outline = $mol_icon_clipboard_outline;
})($ || ($ = {}));
//mol/icon/clipboard/outline/-view.tree/outline.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_copy extends $mol_button_minor {
        blobs() {
            return [
                this.text_blob(),
                this.html_blob()
            ];
        }
        data() {
            return {};
        }
        sub() {
            return [
                this.Icon(),
                this.title()
            ];
        }
        text() {
            return this.title();
        }
        text_blob(next) {
            if (next !== undefined)
                return next;
            const obj = new this.$.$mol_blob([
                this.text()
            ], {
                type: "text/plain"
            });
            return obj;
        }
        html() {
            return "";
        }
        html_blob(next) {
            if (next !== undefined)
                return next;
            const obj = new this.$.$mol_blob([
                this.html()
            ], {
                type: "text/html"
            });
            return obj;
        }
        Icon() {
            const obj = new this.$.$mol_icon_clipboard_outline();
            return obj;
        }
        title() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button_copy.prototype, "text_blob", null);
    __decorate([
        $mol_mem
    ], $mol_button_copy.prototype, "html_blob", null);
    __decorate([
        $mol_mem
    ], $mol_button_copy.prototype, "Icon", null);
    $.$mol_button_copy = $mol_button_copy;
})($ || ($ = {}));
//mol/button/copy/-view.tree/copy.view.tree.ts
;
"use strict";
var $;
(function ($) {
    const mapping = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;',
    };
    function $mol_html_encode(text) {
        return text.replace(/[&<">]/gi, str => mapping[str]);
    }
    $.$mol_html_encode = $mol_html_encode;
})($ || ($ = {}));
//mol/html/encode/encode.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_copy extends $.$mol_button_copy {
            data() {
                return Object.fromEntries(this.blobs().map(blob => [blob.type, blob]));
            }
            html() {
                return $mol_html_encode(this.text());
            }
            attachments() {
                return [new ClipboardItem(this.data())];
            }
            click(event) {
                const cb = $mol_wire_sync(this.$.$mol_dom_context.navigator.clipboard);
                cb.writeText(this.text());
                cb.write(this.attachments());
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button_copy.prototype, "html", null);
        __decorate([
            $mol_mem
        ], $mol_button_copy.prototype, "attachments", null);
        $$.$mol_button_copy = $mol_button_copy;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/copy/copy.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_code extends $mol_stack {
        attr() {
            return {
                ...super.attr(),
                mol_text_code_sidebar_showed: this.sidebar_showed()
            };
        }
        text() {
            return "";
        }
        text_lines() {
            return [];
        }
        find_pos(id) {
            return null;
        }
        uri_base() {
            return "";
        }
        sub() {
            return [
                this.Rows(),
                this.Copy()
            ];
        }
        sidebar_showed() {
            return false;
        }
        render_visible_only() {
            return false;
        }
        row_numb(id) {
            return 0;
        }
        row_text(id) {
            return "";
        }
        syntax() {
            return null;
        }
        uri_resolve(id) {
            return "";
        }
        highlight() {
            return "";
        }
        Row(id) {
            const obj = new this.$.$mol_text_code_row();
            obj.numb_showed = () => this.sidebar_showed();
            obj.numb = () => this.row_numb(id);
            obj.text = () => this.row_text(id);
            obj.syntax = () => this.syntax();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.highlight = () => this.highlight();
            return obj;
        }
        rows() {
            return [
                this.Row("0")
            ];
        }
        Rows() {
            const obj = new this.$.$mol_list();
            obj.render_visible_only = () => this.render_visible_only();
            obj.rows = () => this.rows();
            return obj;
        }
        text_export() {
            return "";
        }
        Copy() {
            const obj = new this.$.$mol_button_copy();
            obj.hint = () => this.$.$mol_locale.text('$mol_text_code_Copy_hint');
            obj.text = () => this.text_export();
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_text_code.prototype, "Row", null);
    __decorate([
        $mol_mem
    ], $mol_text_code.prototype, "Rows", null);
    __decorate([
        $mol_mem
    ], $mol_text_code.prototype, "Copy", null);
    $.$mol_text_code = $mol_text_code;
})($ || ($ = {}));
//mol/text/code/-view.tree/code.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code extends $.$mol_text_code {
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            text_lines() {
                return this.text().split('\n');
            }
            rows() {
                return this.text_lines().map((_, index) => this.Row(index + 1));
            }
            row_text(index) {
                return this.text_lines()[index - 1];
            }
            row_numb(index) {
                return index;
            }
            find_pos(offset) {
                for (const [index, line] of this.text_lines().entries()) {
                    if (line.length >= offset) {
                        return this.Row(index + 1).find_pos(offset);
                    }
                    else {
                        offset -= line.length + 1;
                    }
                }
                return null;
            }
            sub() {
                return [
                    this.Rows(),
                    ...this.sidebar_showed() ? [this.Copy()] : []
                ];
            }
            syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            uri_base() {
                return $mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                if (/^(\w+script+:)+/.test(uri))
                    return null;
                try {
                    const url = new URL(uri, this.uri_base());
                    return url.toString();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return null;
                }
            }
            text_export() {
                return this.text() + '\n';
            }
        }
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "text_lines", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "row_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "find_pos", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "sub", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "uri_resolve", null);
        $$.$mol_text_code = $mol_text_code;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/code.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, px } = $mol_style_unit;
        $mol_style_define($mol_text_code, {
            whiteSpace: 'pre-wrap',
            font: {
                family: 'monospace',
            },
            Rows: {
                padding: $mol_gap.text,
            },
            Row: {
                font: {
                    family: 'inherit',
                },
            },
            Copy: {
                alignSelf: 'flex-start',
                justifySelf: 'flex-start',
            },
            '@': {
                'mol_text_code_sidebar_showed': {
                    true: {
                        $mol_text_code_row: {
                            margin: {
                                left: rem(1.75),
                            },
                        },
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/code.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_float extends $mol_view {
        style() {
            return {
                ...super.style(),
                minHeight: "auto"
            };
        }
    }
    $.$mol_float = $mol_float;
})($ || ($ = {}));
//mol/float/-view.tree/float.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/float/float.view.css", "[mol_float] {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tz-index: var(--mol_layer_float);\n\topacity: 1;\n\ttransition: opacity .25s ease-in;\n\tdisplay: block;\n\tbackground: linear-gradient( var(--mol_theme_card), var(--mol_theme_card) ), var(--mol_theme_back);\n\tbox-shadow: 0 0 .5rem hsla(0,0%,0%,.25);\n}\n\n");
})($ || ($ = {}));
//mol/float/-css/float.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron extends $mol_icon {
        path() {
            return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
        }
    }
    $.$mol_icon_chevron = $mol_icon_chevron;
})($ || ($ = {}));
//mol/icon/chevron/-view.tree/chevron.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_expand extends $mol_check {
        Icon() {
            const obj = new this.$.$mol_icon_chevron();
            return obj;
        }
        level() {
            return 0;
        }
        style() {
            return {
                ...super.style(),
                paddingLeft: this.level_style()
            };
        }
        checked(next) {
            return this.expanded(next);
        }
        enabled() {
            return this.expandable();
        }
        level_style() {
            return "0px";
        }
        expanded(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        expandable() {
            return false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check_expand.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $mol_check_expand.prototype, "expanded", null);
    $.$mol_check_expand = $mol_check_expand;
})($ || ($ = {}));
//mol/check/expand/-view.tree/expand.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/expand/expand.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/expand/expand.view.css", "[mol_check_expand] {\n\tmin-width: 20px;\n}\n\n:where([mol_check_expand][disabled]) [mol_check_expand_icon] {\n\tvisibility: hidden;\n}\n\n[mol_check_expand_icon] {\n\tbox-shadow: none;\n}\n[mol_check_expand_icon] {\n\ttransform: rotateZ(0deg);\n}\n\n:where([mol_check_checked]) [mol_check_expand_icon] {\n\ttransform: rotateZ(90deg);\n}\n\n[mol_check_expand_icon] {\n\tvertical-align: text-top;\n}\n\n[mol_check_expand_label] {\n\tmargin-left: 0;\n}\n");
})($ || ($ = {}));
//mol/check/expand/-css/expand.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_grid extends $mol_view {
        row_height() {
            return 32;
        }
        row_ids() {
            return [];
        }
        row_id(id) {
            return null;
        }
        col_ids() {
            return [];
        }
        records() {
            return {};
        }
        record(id) {
            return null;
        }
        hierarchy() {
            return null;
        }
        hierarchy_col() {
            return "";
        }
        minimal_width() {
            return 0;
        }
        sub() {
            return [
                this.Head(),
                this.Table()
            ];
        }
        Head() {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.head_cells();
            return obj;
        }
        Row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.minimal_height = () => this.row_height();
            obj.minimal_width = () => this.minimal_width();
            obj.cells = () => this.cells(id);
            return obj;
        }
        Cell(id) {
            const obj = new this.$.$mol_view();
            return obj;
        }
        cell(id) {
            return null;
        }
        Cell_text(id) {
            const obj = new this.$.$mol_grid_cell();
            obj.sub = () => this.cell_content_text(id);
            return obj;
        }
        Cell_number(id) {
            const obj = new this.$.$mol_grid_number();
            obj.sub = () => this.cell_content_number(id);
            return obj;
        }
        Col_head(id) {
            const obj = new this.$.$mol_float();
            obj.dom_name = () => "th";
            obj.sub = () => this.col_head_content(id);
            return obj;
        }
        Cell_branch(id) {
            const obj = new this.$.$mol_check_expand();
            obj.level = () => this.cell_level(id);
            obj.label = () => this.cell_content(id);
            obj.expanded = (next) => this.cell_expanded(id, next);
            return obj;
        }
        Cell_content(id) {
            return [
                this.Cell_dimmer(id)
            ];
        }
        rows() {
            return [];
        }
        Table() {
            const obj = new this.$.$mol_grid_table();
            obj.sub = () => this.rows();
            return obj;
        }
        head_cells() {
            return [];
        }
        cells(id) {
            return [];
        }
        cell_content(id) {
            return [];
        }
        cell_content_text(id) {
            return this.cell_content(id);
        }
        cell_content_number(id) {
            return this.cell_content(id);
        }
        col_head_content(id) {
            return [];
        }
        cell_level(id) {
            return 0;
        }
        cell_expanded(id, next) {
            if (next !== undefined)
                return next;
            return false;
        }
        needle() {
            return "";
        }
        cell_value(id) {
            return "";
        }
        Cell_dimmer(id) {
            const obj = new this.$.$mol_dimmer();
            obj.needle = () => this.needle();
            obj.haystack = () => this.cell_value(id);
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_grid.prototype, "Head", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Row", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_text", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_number", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Col_head", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_branch", null);
    __decorate([
        $mol_mem
    ], $mol_grid.prototype, "Table", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "cell_expanded", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_dimmer", null);
    $.$mol_grid = $mol_grid;
    class $mol_grid_table extends $mol_list {
    }
    $.$mol_grid_table = $mol_grid_table;
    class $mol_grid_row extends $mol_view {
        sub() {
            return this.cells();
        }
        cells() {
            return [];
        }
    }
    $.$mol_grid_row = $mol_grid_row;
    class $mol_grid_cell extends $mol_view {
        minimal_height() {
            return 40;
        }
    }
    $.$mol_grid_cell = $mol_grid_cell;
    class $mol_grid_number extends $mol_grid_cell {
    }
    $.$mol_grid_number = $mol_grid_number;
})($ || ($ = {}));
//mol/grid/-view.tree/grid.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//mol/state/session/session.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid extends $.$mol_grid {
            head_cells() {
                return this.col_ids().map(colId => this.Col_head(colId));
            }
            col_head_content(colId) {
                return [colId];
            }
            rows() {
                return this.row_ids().map(id => this.Row(id));
            }
            cells(row_id) {
                return this.col_ids().map(col_id => this.Cell({ row: row_id, col: col_id }));
            }
            col_type(col_id) {
                if (col_id === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col_id];
                if (typeof val === 'number')
                    return 'number';
                return 'text';
            }
            Cell(id) {
                switch (this.col_type(id.col).valueOf()) {
                    case 'branch': return this.Cell_branch(id);
                    case 'number': return this.Cell_number(id);
                }
                return this.Cell_text(id);
            }
            cell_content(id) {
                return [this.record(id.row[id.row.length - 1])[id.col]];
            }
            cell_content_text(id) {
                return this.cell_content(id).map(val => typeof val === 'object' ? JSON.stringify(val) : val);
            }
            records() {
                return [];
            }
            record(id) {
                return this.records()[id];
            }
            record_ids() {
                return Object.keys(this.records());
            }
            row_id(index) {
                return this.row_ids().slice(index, index + 1).valueOf()[0];
            }
            col_ids() {
                const rowFirst = this.row_id(0);
                if (rowFirst === void 0)
                    return [];
                const record = this.record(rowFirst[rowFirst.length - 1]);
                if (!record)
                    return [];
                return Object.keys(record);
            }
            hierarchy() {
                const hierarchy = {};
                const root = hierarchy[''] = {
                    id: '',
                    parent: null,
                    sub: [],
                };
                this.record_ids().map(id => {
                    root.sub.push(hierarchy[id] = {
                        id,
                        parent: root,
                        sub: [],
                    });
                });
                return hierarchy;
            }
            row_sub_ids(row) {
                return this.hierarchy()[row[row.length - 1]].sub.map(child => row.concat(child.id));
            }
            row_root_id() {
                return [''];
            }
            cell_level(id) {
                return id.row.length - 1;
            }
            row_ids() {
                const next = [];
                const add = (row) => {
                    next.push(row);
                    if (this.row_expanded(row)) {
                        this.row_sub_ids(row).forEach(child => add(child));
                    }
                };
                this.row_sub_ids(this.row_root_id()).forEach(child => add(child));
                return next;
            }
            row_expanded(row_id, next) {
                if (!this.row_sub_ids(row_id).length)
                    return null;
                const key = `row_expanded(${JSON.stringify(row_id)})`;
                const next2 = $mol_state_session.value(key, next);
                return (next2 == null) ? this.row_expanded_default(row_id) : next2;
            }
            row_expanded_default(row_id) {
                return true;
            }
            cell_expanded(id, next) {
                return this.row_expanded(id.row, next);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/grid/grid.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/grid/grid.view.css", "[mol_grid] {\n\tdisplay: block;\n\tflex: 0 1 auto;\n\tposition: relative;\n\toverflow-x: auto;\n}\n\n[mol_grid_gap] {\n\tposition: absolute;\n\tpadding: .1px;\n\ttop: 0;\n\ttransform: translateZ(0);\n}\n\n[mol_grid_table] {\n\tborder-spacing: 0;\n\tdisplay: table-row-group;\n\tposition: relative;\n}\n\n[mol_grid_table] > * {\n\tdisplay: table-row;\n\ttransition: none;\n}\n\n[mol_grid_head] > *,\n[mol_grid_table] > * > * {\n\tdisplay: table-cell;\n\tpadding: var(--mol_gap_text);\n\twhite-space: nowrap;\n\tvertical-align: middle;\n\tbox-shadow: inset 1px 1px 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_row]:where(:first-child) > * {\n\tbox-shadow: inset 1px 0 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_table] > * > *:where(:first-child) {\n\tbox-shadow: inset 0px 1px 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_head] > * {\n\tbox-shadow: inset 1px -1px 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_head] > *:where(:first-child) {\n\tbox-shadow: inset 0px -1px 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_table] > [mol_grid_row]:where(:first-child) > *:where(:first-child) {\n\tbox-shadow: none;\n}\t\n\n[mol_grid_head] {\n\tdisplay: table-row;\n\ttransform: none !important;\n}\n\n/* [mol_grid_cell_number] {\n\ttext-align: right;\n} */\n\n[mol_grid_col_head] {\n\tfont-weight: inherit;\n\ttext-align: inherit;\n\tdisplay: table-cell;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_grid_cell_dimmer] {\n\tdisplay: inline-block;\n\tvertical-align: inherit;\n}\n");
})($ || ($ = {}));
//mol/grid/-css/grid.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_image extends $mol_view {
        dom_name() {
            return "img";
        }
        field() {
            return {
                ...super.field(),
                src: this.uri(),
                alt: this.title(),
                loading: this.loading(),
                decoding: this.decoding(),
                crossOrigin: this.cors()
            };
        }
        attr() {
            return {
                ...super.attr(),
                width: this.natural_width(),
                height: this.natural_height()
            };
        }
        event() {
            return {
                load: (next) => this.load(next)
            };
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        uri() {
            return "";
        }
        loading() {
            return "eager";
        }
        decoding() {
            return "async";
        }
        cors() {
            return null;
        }
        natural_width(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        natural_height(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        load(next) {
            if (next !== undefined)
                return next;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_image.prototype, "natural_width", null);
    __decorate([
        $mol_mem
    ], $mol_image.prototype, "natural_height", null);
    __decorate([
        $mol_mem
    ], $mol_image.prototype, "load", null);
    $.$mol_image = $mol_image;
})($ || ($ = {}));
//mol/image/-view.tree/image.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_image extends $.$mol_image {
            natural_width(next) {
                const dom = this.dom_node();
                if (dom.naturalWidth)
                    return dom.naturalWidth;
                const found = this.uri().match(/\bwidth=(\d+)/);
                return found ? Number(found[1]) : null;
            }
            natural_height(next) {
                const dom = this.dom_node();
                if (dom.naturalHeight)
                    return dom.naturalHeight;
                const found = this.uri().match(/\bheight=(\d+)/);
                return found ? Number(found[1]) : null;
            }
            load() {
                this.natural_width(null);
                this.natural_height(null);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_image.prototype, "natural_width", null);
        __decorate([
            $mol_mem
        ], $mol_image.prototype, "natural_height", null);
        $$.$mol_image = $mol_image;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/image/image.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/image/image.view.css", "[mol_image] {\n\tborder-radius: var(--mol_gap_round);\n\toverflow: hidden;\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n\tobject-fit: cover;\n\theight: fit-content;\n}\n");
})($ || ($ = {}));
//mol/image/-css/image.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link_iconed extends $mol_link {
        sub() {
            return [
                this.Icon()
            ];
        }
        content() {
            return [
                this.title()
            ];
        }
        host() {
            return "";
        }
        icon() {
            return "";
        }
        Icon() {
            const obj = new this.$.$mol_image();
            obj.uri = () => this.icon();
            obj.title = () => "";
            return obj;
        }
        title() {
            return this.uri();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link_iconed.prototype, "Icon", null);
    $.$mol_link_iconed = $mol_link_iconed;
})($ || ($ = {}));
//mol/link/iconed/-view.tree/iconed.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link_iconed extends $.$mol_link_iconed {
            icon() {
                return `https://favicon.yandex.net/favicon/${this.host()}?color=0,0,0,0&size=32&stub=1`;
            }
            host() {
                const base = this.$.$mol_state_arg.href();
                const url = new URL(this.uri(), base);
                return url.hostname;
            }
            title() {
                const uri = this.uri();
                const host = this.host();
                const suffix = (host ? uri.split(this.host(), 2)[1] : uri)?.replace(/^[\/\?#!]+/, '');
                return decodeURIComponent(suffix || host).replace(/^\//, ' ');
            }
            sub() {
                return [
                    ...this.host() ? [this.Icon()] : [],
                    ...this.content() ? [' ', ...this.content()] : [],
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "icon", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "host", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "title", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "sub", null);
        $$.$mol_link_iconed = $mol_link_iconed;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/link/iconed/iconed.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/link/iconed/iconed.view.css", "[mol_link_iconed] {\n\talign-items: baseline;\n\tdisplay: inline-flex;\n\tpadding: var(--mol_gap_text);\n}\n\n[mol_link_iconed_icon] {\n\tbox-shadow: none;\n\theight: 1.5em;\n\twidth: 1em;\n\tflex: 0 0 auto;\n\tdisplay: inline-block;\n\talign-self: normal;\n\tvertical-align: top;\n\tborder-radius: 0;\n\tobject-fit: scale-down;\n\topacity: .75;\n}\n\n[mol_theme=\"$mol_theme_dark\"] [mol_link_iconed_icon] {\n\tfilter: var(--mol_theme_image);\n}\n");
})($ || ($ = {}));
//mol/link/iconed/-css/iconed.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_youtube extends $mol_icon {
        path() {
            return "M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z";
        }
    }
    $.$mol_icon_youtube = $mol_icon_youtube;
})($ || ($ = {}));
//mol/icon/youtube/-view.tree/youtube.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_embed_youtube extends $mol_check {
        uri() {
            return "";
        }
        video_preview() {
            return "";
        }
        video_id() {
            return "";
        }
        checked(next) {
            return this.active(next);
        }
        sub() {
            return [
                this.Image(),
                this.Hint(),
                this.Frame()
            ];
        }
        active(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        title() {
            return "";
        }
        Image() {
            const obj = new this.$.$mol_image();
            obj.title = () => this.title();
            obj.uri = () => this.video_preview();
            return obj;
        }
        Hint() {
            const obj = new this.$.$mol_icon_youtube();
            return obj;
        }
        video_embed() {
            return "";
        }
        Frame() {
            const obj = new this.$.$mol_frame();
            obj.title = () => this.title();
            obj.uri = () => this.video_embed();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_embed_youtube.prototype, "active", null);
    __decorate([
        $mol_mem
    ], $mol_embed_youtube.prototype, "Image", null);
    __decorate([
        $mol_mem
    ], $mol_embed_youtube.prototype, "Hint", null);
    __decorate([
        $mol_mem
    ], $mol_embed_youtube.prototype, "Frame", null);
    $.$mol_embed_youtube = $mol_embed_youtube;
})($ || ($ = {}));
//mol/embed/youtube/-view.tree/youtube.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_youtube extends $.$mol_embed_youtube {
            video_embed() {
                return `https://www.youtube.com/embed/${encodeURIComponent(this.video_id())}?autoplay=1&loop=1`;
            }
            video_id() {
                return this.uri().match(/^https\:\/\/www\.youtube\.com\/(?:embed\/|watch\?v=)([^\/&?#]+)/)?.[1]
                    ?? this.uri().match(/^https\:\/\/youtu\.be\/([^\/&?#]+)/)?.[1]
                    ?? 'about:blank';
            }
            video_preview() {
                return `https://i.ytimg.com/vi/${this.video_id()}/sddefault.jpg`;
            }
            sub() {
                return this.active()
                    ? [this.Frame()]
                    : [this.Image(), this.Hint()];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_embed", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_id", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_preview", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "sub", null);
        $$.$mol_embed_youtube = $mol_embed_youtube;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/embed/youtube/youtube.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/embed/youtube/youtube.view.css", "[mol_embed_youtube] {\n\tpadding: 0;\n\tmax-width: 100%;\n}\n\n[mol_embed_youtube_image] {\n\tflex: auto 1 1;\n}\n\n[mol_embed_youtube_hint] {\n\tposition: absolute;\n    left: 50%;\n    top: 50%;\n    width: 50%;\n    height: 50%;\n    opacity: 0.3;\n    transform: translate(-50%, -50%);\n}\n\n[mol_embed_youtube]:hover [mol_embed_youtube_hint] {\n\topacity: .6;\n}\n");
})($ || ($ = {}));
//mol/embed/youtube/-css/youtube.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_embed_any extends $mol_view {
        Image() {
            const obj = new this.$.$mol_image();
            obj.title = () => this.title();
            obj.uri = () => this.uri();
            return obj;
        }
        Object() {
            const obj = new this.$.$mol_embed_native();
            obj.title = () => this.title();
            obj.uri = () => this.uri();
            return obj;
        }
        Youtube() {
            const obj = new this.$.$mol_embed_youtube();
            obj.title = () => this.title();
            obj.uri = () => this.uri();
            return obj;
        }
        title() {
            return "";
        }
        uri() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_embed_any.prototype, "Image", null);
    __decorate([
        $mol_mem
    ], $mol_embed_any.prototype, "Object", null);
    __decorate([
        $mol_mem
    ], $mol_embed_any.prototype, "Youtube", null);
    $.$mol_embed_any = $mol_embed_any;
})($ || ($ = {}));
//mol/embed/any/-view.tree/any.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_any extends $.$mol_embed_any {
            type() {
                try {
                    const uri = this.uri();
                    if (/\b(png|gif|jpg|jpeg|jfif|webp|svg)\b/.test(uri))
                        return 'image';
                    if (/^https:\/\/www\.youtube\.com\//.test(uri))
                        return 'youtube';
                    if (/^https:\/\/youtu\.be\//.test(uri))
                        return 'youtube';
                }
                catch (error) {
                    $mol_fail_log(error);
                    return 'image';
                }
                return 'object';
            }
            sub() {
                switch (this.type()) {
                    case 'image': return [this.Image()];
                    case 'youtube': return [this.Youtube()];
                    default: return [this.Object()];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_any.prototype, "type", null);
        __decorate([
            $mol_mem
        ], $mol_embed_any.prototype, "sub", null);
        $$.$mol_embed_any = $mol_embed_any;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/embed/any/any.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text extends $mol_list {
        uri_base() {
            return "";
        }
        text() {
            return "";
        }
        param() {
            return "";
        }
        flow_tokens() {
            return [];
        }
        auto() {
            return [
                this.auto_scroll()
            ];
        }
        Paragraph(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => this.block_content(id);
            return obj;
        }
        Quote(id) {
            const obj = new this.$.$mol_text();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.text = () => this.quote_text(id);
            obj.highlight = () => this.highlight();
            obj.auto_scroll = () => null;
            return obj;
        }
        List(id) {
            const obj = new this.$.$mol_text_list();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.type = () => this.list_type(id);
            obj.text = () => this.list_text(id);
            obj.highlight = () => this.highlight();
            return obj;
        }
        item_index(id) {
            return 0;
        }
        Header(id) {
            const obj = new this.$.$mol_text_header();
            obj.minimal_height = () => 40;
            obj.level = () => this.header_level(id);
            obj.content = () => this.block_content(id);
            obj.arg = () => this.header_arg(id);
            return obj;
        }
        Pre(id) {
            const obj = new this.$.$mol_text_code();
            obj.text = () => this.pre_text(id);
            obj.highlight = () => this.highlight();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.sidebar_showed = () => this.pre_sidebar_showed();
            return obj;
        }
        Cut(id) {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "hr";
            return obj;
        }
        Table(id) {
            const obj = new this.$.$mol_grid();
            obj.head_cells = () => this.table_head_cells(id);
            obj.rows = () => this.table_rows(id);
            return obj;
        }
        Table_row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.table_cells(id);
            return obj;
        }
        Table_cell(id) {
            const obj = new this.$.$mol_text();
            obj.auto_scroll = () => null;
            obj.highlight = () => this.highlight();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.text = () => this.table_cell_text(id);
            return obj;
        }
        Grid(id) {
            const obj = new this.$.$mol_grid();
            obj.rows = () => this.grid_rows(id);
            return obj;
        }
        Grid_row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.grid_cells(id);
            return obj;
        }
        Grid_cell(id) {
            const obj = new this.$.$mol_text();
            obj.auto_scroll = () => null;
            obj.highlight = () => this.highlight();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.text = () => this.grid_cell_text(id);
            return obj;
        }
        String(id) {
            const obj = new this.$.$mol_dimmer();
            obj.dom_name = () => "span";
            obj.needle = () => this.highlight();
            obj.haystack = () => this.line_text(id);
            return obj;
        }
        Span(id) {
            const obj = new this.$.$mol_text_span();
            obj.dom_name = () => "span";
            obj.type = () => this.line_type(id);
            obj.sub = () => this.line_content(id);
            return obj;
        }
        Code_line(id) {
            const obj = new this.$.$mol_text_code_row();
            obj.numb_showed = () => false;
            obj.highlight = () => this.highlight();
            obj.text = () => this.line_text(id);
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.syntax = () => this.code_syntax();
            return obj;
        }
        Link(id) {
            const obj = new this.$.$mol_link_iconed();
            obj.uri = () => this.link_uri(id);
            obj.content = () => this.line_content(id);
            return obj;
        }
        Link_http(id) {
            const obj = new this.$.$mol_link_iconed();
            obj.uri = () => this.link_uri(id);
            obj.content = () => [
                this.link_host(id)
            ];
            return obj;
        }
        Embed(id) {
            const obj = new this.$.$mol_embed_any();
            obj.uri = () => this.link_uri(id);
            obj.title = () => this.line_text(id);
            return obj;
        }
        auto_scroll() {
            return null;
        }
        block_content(id) {
            return [];
        }
        uri_resolve(id) {
            return "";
        }
        quote_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
        list_type(id) {
            return "-";
        }
        list_text(id) {
            return "";
        }
        header_level(id) {
            return 1;
        }
        header_arg(id) {
            return {};
        }
        pre_text(id) {
            return "";
        }
        code_sidebar_showed() {
            return true;
        }
        pre_sidebar_showed() {
            return this.code_sidebar_showed();
        }
        table_head_cells(id) {
            return [];
        }
        table_rows(id) {
            return [];
        }
        table_cells(id) {
            return [];
        }
        table_cell_text(id) {
            return "";
        }
        grid_rows(id) {
            return [];
        }
        grid_cells(id) {
            return [];
        }
        grid_cell_text(id) {
            return "";
        }
        line_text(id) {
            return "";
        }
        line_type(id) {
            return "";
        }
        line_content(id) {
            return [];
        }
        code_syntax() {
            return null;
        }
        link_uri(id) {
            return "";
        }
        link_host(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Paragraph", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Quote", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "List", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Header", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Pre", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Cut", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Table", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Table_row", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Table_cell", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Grid", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Grid_row", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Grid_cell", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "String", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Span", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Code_line", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Link", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Link_http", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Embed", null);
    $.$mol_text = $mol_text;
    class $mol_text_header extends $mol_paragraph {
        level() {
            return 1;
        }
        sub() {
            return [
                this.Link()
            ];
        }
        arg() {
            return {};
        }
        content() {
            return [];
        }
        Link() {
            const obj = new this.$.$mol_link();
            obj.arg = () => this.arg();
            obj.hint = () => this.$.$mol_locale.text('$mol_text_header_Link_hint');
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_text_header.prototype, "Link", null);
    $.$mol_text_header = $mol_text_header;
    class $mol_text_span extends $mol_paragraph {
        dom_name() {
            return "span";
        }
        attr() {
            return {
                ...super.attr(),
                mol_text_type: this.type()
            };
        }
        type() {
            return "";
        }
    }
    $.$mol_text_span = $mol_text_span;
})($ || ($ = {}));
//mol/text/text/-view.tree/text.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text extends $.$mol_text {
            flow_tokens() {
                const tokens = [];
                this.$.$mol_syntax2_md_flow.tokenize(this.text(), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            block_type(index) {
                return this.flow_tokens()[index].name;
            }
            rows() {
                return this.flow_tokens().map(({ name }, index) => {
                    switch (name) {
                        case 'quote': return this.Quote(index);
                        case 'header': return this.Header(index);
                        case 'list': return this.List(index);
                        case 'code': return this.Pre(index);
                        case 'code-indent': return this.Pre(index);
                        case 'table': return this.Table(index);
                        case 'grid': return this.Grid(index);
                        case 'cut': return this.Cut(index);
                        default: return this.Paragraph(index);
                    }
                });
            }
            param() {
                return this.toString().replace(/^.*?\)\./, '').replace(/[()]/g, '');
            }
            header_level(index) {
                return this.flow_tokens()[index].chunks[0].length;
            }
            header_arg(index) {
                return {
                    [this.param()]: this.block_text(index)
                };
            }
            list_type(index) {
                return this.flow_tokens()[index].chunks[1] ?? '';
            }
            item_index(index) {
                return this.flow_tokens().slice(0, index).filter(token => token.name === 'block').length + 1;
            }
            pre_text(index) {
                const token = this.flow_tokens()[index];
                return (token.chunks[2] ?? token.chunks[0].replace(/^(\t|  (?:\+\+|--|\*\*|  ))/gm, '')).replace(/[\n\r]*$/, '');
            }
            quote_text(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^[>"] /mg, '');
            }
            list_text(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^([-*+]|(?:\d+[\.\)])+) ?/mg, '').replace(/^  ?/mg, '');
            }
            cell_content(indexBlock) {
                return this.flow_tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_content(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_content(blockId)[0]
                    .map((cell, cellId) => this.Table_cell({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_content(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_text(id) {
                return this.cell_content(id.block)[id.row][id.cell];
            }
            grid_content(indexBlock) {
                return [...this.flow_tokens()[indexBlock].chunks[0].match(/(?:^! .*?$\r?\n?)+(?:^ +! .*?$\r?\n?)*/gm)]
                    .map((row, rowId) => {
                    const cells = [];
                    for (const line of row.trim().split(/\r?\n/)) {
                        const [_, indent, content] = /^( *)! (.*)/.exec(line);
                        const col = Math.ceil(indent.length / 2);
                        cells[col] = (cells[col] ? cells[col] + '\n' : '') + content;
                    }
                    return cells;
                });
            }
            grid_rows(blockId) {
                return this.grid_content(blockId)
                    .map((row, rowId) => this.Grid_row({ block: blockId, row: rowId }));
            }
            grid_cells(id) {
                return this.grid_content(id.block)[id.row]
                    .map((cell, cellId) => this.Grid_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            grid_cell_text(id) {
                return this.grid_content(id.block)[id.row][id.cell];
            }
            uri_base() {
                return $mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                if (/^(\w+script+:)+/.test(uri))
                    return null;
                if (/^#\!/.test(uri)) {
                    const params = {};
                    for (const chunk of uri.slice(2).split(this.$.$mol_state_arg.separator)) {
                        if (!chunk)
                            continue;
                        const vals = chunk.split('=').map(decodeURIComponent);
                        params[vals.shift()] = vals.join('=');
                    }
                    return this.$.$mol_state_arg.link(params);
                }
                try {
                    const url = new URL(uri, this.uri_base());
                    return url.toString();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return null;
                }
            }
            code_syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            block_text(index) {
                const token = this.flow_tokens()[index];
                switch (token.name) {
                    case 'header': return token.chunks[2];
                    default: return token.chunks[0];
                }
            }
            block_content(index) {
                return this.line_content([index]);
            }
            line_tokens(path) {
                const tokens = [];
                this.$.$mol_syntax2_md_line.tokenize(this.line_text(path), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            line_token(path) {
                const tokens = this.line_tokens(path.slice(0, path.length - 1));
                return tokens[path[path.length - 1]];
            }
            line_type(path) {
                return this.line_token(path).name;
            }
            line_text(path) {
                if (path.length === 1)
                    return this.block_text(path[0]);
                const { name, found, chunks } = this.line_token(path);
                switch (name) {
                    case 'link': return chunks[0] || chunks[1].replace(/^.*?\/\/|\/.*$/g, '');
                    case 'text-link': return chunks[0] || chunks[1].replace(/^.*?\/\/|\/.*$/g, '');
                    default: return (chunks[0] || chunks[1] || chunks[2]) ?? found;
                }
            }
            line_content(path) {
                return this.line_tokens(path).map(({ name, chunks }, index) => {
                    const path2 = [...path, index];
                    switch (name) {
                        case 'embed': return this.Embed(path2);
                        case 'link': return this.Link(path2);
                        case 'text-link-http': return this.Link_http(path2);
                        case 'text-link': return this.Link(path2);
                        case 'image-link': return this.Embed(path2);
                        case 'code': return this.Code_line(path2);
                        case '': return this.String(path2);
                        default: return this.Span(path2);
                    }
                });
            }
            link_uri(path) {
                const token = this.line_token(path);
                const uri = this.uri_resolve(token.chunks[1] ?? token.found);
                if (!uri)
                    throw new Error('Bad link');
                return uri;
            }
            link_host(path) {
                return this.link_uri(path).replace(/^.*?\/\/|\/.*$/g, '');
            }
            auto_scroll() {
                for (const [index, token] of this.flow_tokens().entries()) {
                    if (token.name !== 'header')
                        continue;
                    const header = this.Header(index);
                    if (!header.Link().current())
                        continue;
                    new $mol_after_tick(() => this.ensure_visible(header));
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "flow_tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "block_type", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "rows", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "param", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "header_level", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "header_arg", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "pre_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "quote_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "list_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "cell_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_head_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_cell_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_cell_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "uri_resolve", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "block_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_token", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_type", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "link_uri", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "link_host", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "auto_scroll", null);
        $$.$mol_text = $mol_text;
        class $mol_text_header extends $.$mol_text_header {
            dom_name() {
                return 'h' + this.level();
            }
        }
        $$.$mol_text_header = $mol_text_header;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/text/text.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/text/text/text.view.css", "[mol_text] {\n\tline-height: 1.5em;\n\tbox-sizing: border-box;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 0 0 auto;\n\ttab-size: 4;\n}\n\n[mol_text_paragraph] {\n\tpadding: var(--mol_gap_text);\n\toverflow: auto;\n\toverflow-x: overlay;\n\tmax-width: 100%;\n\tdisplay: block;\n\tmax-width: 60rem;\n}\n\n[mol_text_span] {\n\tdisplay: inline;\n}\n\n[mol_text_string] {\n\tdisplay: inline;\n\tflex: 0 1 auto;\n\twhite-space: normal;\n}\n\n[mol_text_quote] {\n\tmargin: var(--mol_gap_block);\n\tpadding: var(--mol_gap_block);\n\tbackground: var(--mol_theme_card);\n\tbox-shadow: 0 0 0 1px var(--mol_theme_back);\n}\n\n[mol_text_header] {\n\tdisplay: block;\n\ttext-shadow: 0 0;\n\tfont-weight: normal;\n}\n\n* + [mol_text_header] {\n\tmargin-top: 0.75rem;\n}\n\nh1[mol_text_header] {\n\tfont-size: 1.5rem;\n}\n\nh2[mol_text_header] {\n\tfont-size: 1.5rem;\n\tfont-style: italic;\n}\n\nh3[mol_text_header] {\n\tfont-size: 1.25rem;\n}\n\nh4[mol_text_header] {\n\tfont-size: 1.25em;\n\tfont-style: italic;\n}\n\nh5[mol_text_header] {\n\tfont-size: 1rem;\n}\n\nh6[mol_text_header] {\n\tfont-size: 1rem;\n\tfont-style: italic;\n}\n\n[mol_text_header_link] {\n\tcolor: inherit;\n}\n\n[mol_text_table_cell] {\n\twidth: auto;\n\tdisplay: table-cell;\n\tvertical-align: baseline;\n\tpadding: 0;\n\tborder-radius: 0;\n}\n\n[mol_text_grid_cell] {\n\twidth: auto;\n\tdisplay: table-cell;\n\tvertical-align: top;\n\tpadding: 0;\n\tborder-radius: 0;\n}\n\n[mol_text_cut] {\n\tborder: none;\n\twidth: 100%;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_text_link_http],\n[mol_text_link] {\n\tpadding: 0;\n\tdisplay: inline;\n\twhite-space: nowrap;\n}\n\n[mol_text_link_icon] + [mol_text_embed] {\n\tmargin-left: -1.5rem;\n}\n\n[mol_text_embed_youtube] {\n\tdisplay: inline;\n}\n\n[mol_text_embed_youtube_image],\n[mol_text_embed_youtube_frame],\n[mol_text_embed_object] {\n\tobject-fit: contain;\n\tobject-position: center;\n\tdisplay: inline;\n\twidth: 100vw;\n\tmax-height: calc( 100vh - 6rem );\n\tvertical-align: top;\n}\n[mol_text_embed_object_fallback] {\n\tpadding: 0;\n}\n[mol_text_embed_image] {\n\tobject-fit: contain;\n\tobject-position: center;\n\tdisplay: inline;\n\t/* max-height: calc( 100vh - 6rem ); */\n\tvertical-align: top;\n}\n\n[mol_text_pre] {\n\twhite-space: pre;\n\toverflow-x: auto;\n\toverflow-x: overlay;\n\ttab-size: 2;\n}\n\n[mol_text_code_line] {\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n}\n\n[mol_text_type=\"strong\"] {\n\ttext-shadow: 0 0;\n\tfilter: contrast(1.5);\n}\n\n[mol_text_type=\"emphasis\"] {\n\tfont-style: italic;\n}\n\n[mol_text_type=\"insert\"] {\n\tcolor: var(--mol_theme_special);\n}\n\n[mol_text_type=\"delete\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"remark\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"quote\"] {\n\tfont-style: italic;\n}\n");
})($ || ($ = {}));
//mol/text/text/-css/text.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_minus extends $mol_icon {
        path() {
            return "M19,13H5V11H19V13Z";
        }
    }
    $.$mol_icon_minus = $mol_icon_minus;
})($ || ($ = {}));
//mol/icon/minus/-view.tree/minus.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_plus extends $mol_icon {
        path() {
            return "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
        }
    }
    $.$mol_icon_plus = $mol_icon_plus;
})($ || ($ = {}));
//mol/icon/plus/-view.tree/plus.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_number extends $mol_view {
        precision_view() {
            return this.precision();
        }
        precision_change() {
            return this.precision();
        }
        value_min() {
            return -Infinity;
        }
        value_max() {
            return +Infinity;
        }
        value(next) {
            if (next !== undefined)
                return next;
            return +NaN;
        }
        enabled() {
            return true;
        }
        sub() {
            return [
                this.String(),
                this.Dec(),
                this.Inc()
            ];
        }
        precision() {
            return 1;
        }
        type() {
            return "tel";
        }
        value_string(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        hint() {
            return " ";
        }
        string_enabled() {
            return this.enabled();
        }
        submit(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        String() {
            const obj = new this.$.$mol_string();
            obj.type = () => this.type();
            obj.value = (next) => this.value_string(next);
            obj.hint = () => this.hint();
            obj.enabled = () => this.string_enabled();
            obj.submit = (next) => this.submit(next);
            return obj;
        }
        event_dec(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        dec_enabled() {
            return this.enabled();
        }
        dec_icon() {
            const obj = new this.$.$mol_icon_minus();
            return obj;
        }
        Dec() {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (next) => this.event_dec(next);
            obj.enabled = () => this.dec_enabled();
            obj.sub = () => [
                this.dec_icon()
            ];
            return obj;
        }
        event_inc(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        inc_enabled() {
            return this.enabled();
        }
        inc_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Inc() {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (next) => this.event_inc(next);
            obj.enabled = () => this.inc_enabled();
            obj.sub = () => [
                this.inc_icon()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "value_string", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "String", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "event_dec", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "dec_icon", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "Dec", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "event_inc", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "inc_icon", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "Inc", null);
    $.$mol_number = $mol_number;
})($ || ($ = {}));
//mol/number/-view.tree/number.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/number/number.css", "[mol_number] {\n\tdisplay: flex;\n\tflex: 0 1 auto;\n\tposition: relative;\n\talign-items: stretch;\n\tmax-width: 100%;\n}\n\n[mol_number_string] {\n\tappearance: textfield;\n\tflex: 1 1 7rem;\n\twidth: 7rem;\n}\n\n[mol_number_string]::-webkit-inner-spin-button {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//mol/number/-css/number.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_number extends $.$mol_number {
            value_limited(next) {
                if (next === undefined)
                    return this.value();
                if (next === '')
                    return this.value(Number.NaN);
                const min = this.value_min();
                const max = this.value_max();
                const val = Number(next);
                if (val < min)
                    return this.value(min);
                if (val > max)
                    return this.value(max);
                return this.value(val);
            }
            event_dec(next) {
                this.value_limited((this.value_limited() || 0) - this.precision_change());
            }
            event_inc(next) {
                this.value_limited((this.value_limited() || 0) + this.precision_change());
            }
            value_string(next) {
                const next_num = this.value_limited(next);
                const precisionView = this.precision_view();
                if (next_num === 0)
                    return '0';
                if (!next_num)
                    return '';
                if (precisionView >= 1) {
                    return (next_num / precisionView).toFixed();
                }
                else {
                    const fixedNumber = Math.log10(1 / precisionView);
                    return next_num.toFixed(Math.ceil(fixedNumber));
                }
            }
            dec_enabled() {
                return this.enabled() && (!((this.value() || 0) <= this.value_min()));
            }
            inc_enabled() {
                return this.enabled() && (!((this.value() || 0) >= this.value_max()));
            }
        }
        __decorate([
            $mol_mem
        ], $mol_number.prototype, "dec_enabled", null);
        __decorate([
            $mol_mem
        ], $mol_number.prototype, "inc_enabled", null);
        $$.$mol_number = $mol_number;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/number/number.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_list extends $mol_text {
        auto_scroll() {
            return null;
        }
        attr() {
            return {
                ...super.attr(),
                mol_text_list_type: this.type()
            };
        }
        Paragraph(id) {
            const obj = new this.$.$mol_text_list_item();
            obj.index = () => this.item_index(id);
            obj.sub = () => this.block_content(id);
            return obj;
        }
        type() {
            return "";
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_text_list.prototype, "Paragraph", null);
    $.$mol_text_list = $mol_text_list;
    class $mol_text_list_item extends $mol_paragraph {
        attr() {
            return {
                ...super.attr(),
                mol_text_list_item_index: this.index()
            };
        }
        index() {
            return 0;
        }
    }
    $.$mol_text_list_item = $mol_text_list_item;
})($ || ($ = {}));
//mol/text/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/text/list/list.view.css", "[mol_text_list] {\r\n\tpadding-left: 1.75rem;\r\n}\r\n\r\n[mol_text_list_item] {\r\n\tcontain: none;\r\n\tdisplay: list-item;\r\n}\r\n\r\n[mol_text_list_item]::before {\r\n\tcontent: attr( mol_text_list_item_index ) \".\";\r\n\twidth: 1.25rem;\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\tmargin-left: -1.75rem;\r\n\ttext-align: end;\r\n}\r\n\r\n[mol_text_list_type=\"-\"] > [mol_text_list_item]::before,\r\n[mol_text_list_type=\"*\"] > [mol_text_list_item]::before {\r\n\tcontent: \"•\";\r\n}\r\n");
})($ || ($ = {}));
//mol/text/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $dosha_client_steps extends $mol_page {
        dosha_value(next) {
            if (next !== undefined)
                return next;
            return 10000;
        }
        title() {
            return "👟 Шаги";
        }
        body() {
            return [
                this.All_dosha(),
                this.Add_dosha(),
                this.Add_dosha_save()
            ];
        }
        all_dosha_label() {
            return "";
        }
        All_dosha() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.all_dosha_label();
            return obj;
        }
        add_dosha(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        Add_dosha() {
            const obj = new this.$.$mol_number();
            obj.value = (next) => this.add_dosha(next);
            obj.value_max = () => 40000;
            return obj;
        }
        add_today_steps(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Add_dosha_save() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => "Добавить шаги за сегодня";
            obj.click = (next) => this.add_today_steps();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $dosha_client_steps.prototype, "dosha_value", null);
    __decorate([
        $mol_mem
    ], $dosha_client_steps.prototype, "All_dosha", null);
    __decorate([
        $mol_mem
    ], $dosha_client_steps.prototype, "add_dosha", null);
    __decorate([
        $mol_mem
    ], $dosha_client_steps.prototype, "Add_dosha", null);
    __decorate([
        $mol_mem
    ], $dosha_client_steps.prototype, "add_today_steps", null);
    __decorate([
        $mol_mem
    ], $dosha_client_steps.prototype, "Add_dosha_save", null);
    $.$dosha_client_steps = $dosha_client_steps;
})($ || ($ = {}));
//dosha/client/steps/-view.tree/steps.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $dosha_client_steps extends $.$dosha_client_steps {
            add_today_steps() {
                if (this.add_dosha() > 0)
                    this.dosha_value(this.dosha_value() + this.add_dosha());
            }
            all_dosha_label() {
                return `### Всего активных шагов: *${this.dosha_value()}*`;
            }
        }
        $$.$dosha_client_steps = $dosha_client_steps;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dosha/client/steps/steps.view.ts
;
"use strict";
var $;
(function ($) {
    class $dosha_client_history extends $mol_page {
        title() {
            return "📅 История";
        }
    }
    $.$dosha_client_history = $dosha_client_history;
})($ || ($ = {}));
//dosha/client/history/-view.tree/history.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $dosha_client_profile extends $mol_page {
        title() {
            return "🧢 Профиль";
        }
        body() {
            return [
                this.Profile_form()
            ];
        }
        full_name(next) {
            if (next !== undefined)
                return next;
            return "Иванов Михаил Павлович";
        }
        Full_name() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.full_name(next);
            return obj;
        }
        Full_name_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "ФИО";
            obj.Content = () => this.Full_name();
            return obj;
        }
        Profile_form_save() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => "Сохранить";
            return obj;
        }
        Profile_form() {
            const obj = new this.$.$mol_form();
            obj.form_fields = () => [
                this.Full_name_field()
            ];
            obj.buttons = () => [
                this.Profile_form_save()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $dosha_client_profile.prototype, "full_name", null);
    __decorate([
        $mol_mem
    ], $dosha_client_profile.prototype, "Full_name", null);
    __decorate([
        $mol_mem
    ], $dosha_client_profile.prototype, "Full_name_field", null);
    __decorate([
        $mol_mem
    ], $dosha_client_profile.prototype, "Profile_form_save", null);
    __decorate([
        $mol_mem
    ], $dosha_client_profile.prototype, "Profile_form", null);
    $.$dosha_client_profile = $dosha_client_profile;
})($ || ($ = {}));
//dosha/client/profile/-view.tree/profile.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $dosha_client_found extends $mol_page {
        title() {
            return "🏥 Фонды";
        }
        body() {
            return [
                this.You_found(),
                this.Make_auto(),
                this.Active_founds_label(),
                this.Active_founds(),
                this.Waiting_founds_label(),
                this.New_founds(),
                this.New_found_form()
            ];
        }
        you_found() {
            return "# Ваш фонд: **Лиза Алерт**";
        }
        You_found() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.you_found();
            return obj;
        }
        Make_auto() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => "Выбирать фонд автоматически?";
            return obj;
        }
        Active_founds_label() {
            const obj = new this.$.$mol_text();
            obj.text = () => "# Фонды, с которыми мы уже работаем";
            return obj;
        }
        found_active_title(id) {
            return "";
        }
        found_active_uri(id) {
            return "";
        }
        Found_active(id) {
            const obj = new this.$.$mol_link_iconed();
            obj.title = () => this.found_active_title(id);
            obj.uri = () => this.found_active_uri(id);
            return obj;
        }
        active_founds() {
            return [
                this.Found_active("0")
            ];
        }
        Active_founds() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.active_founds();
            return obj;
        }
        Waiting_founds_label() {
            const obj = new this.$.$mol_text();
            obj.text = () => "# Фонды, которые скоро добавим в работу";
            return obj;
        }
        found_new_title(id) {
            return "";
        }
        found_new_uri(id) {
            return "";
        }
        Found_new(id) {
            const obj = new this.$.$mol_link_iconed();
            obj.title = () => this.found_new_title(id);
            obj.uri = () => this.found_new_uri(id);
            return obj;
        }
        new_founds() {
            return [
                this.Found_new("0")
            ];
        }
        New_founds() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.new_founds();
            return obj;
        }
        new_found_title(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        New_found_title() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.new_found_title(next);
            return obj;
        }
        New_found_title_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Имя нового фонда";
            obj.Content = () => this.New_found_title();
            return obj;
        }
        new_found_uri(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        New_found_uri() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.new_found_uri(next);
            return obj;
        }
        New_found_uri_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Ссылка на фонд";
            obj.Content = () => this.New_found_uri();
            return obj;
        }
        add_new_found(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        New_found_add() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => "Предложить новый фонд";
            obj.click = (next) => this.add_new_found(next);
            return obj;
        }
        New_found_form() {
            const obj = new this.$.$mol_form();
            obj.form_fields = () => [
                this.New_found_title_field(),
                this.New_found_uri_field()
            ];
            obj.buttons = () => [
                this.New_found_add()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "You_found", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "Make_auto", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "Active_founds_label", null);
    __decorate([
        $mol_mem_key
    ], $dosha_client_found.prototype, "Found_active", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "Active_founds", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "Waiting_founds_label", null);
    __decorate([
        $mol_mem_key
    ], $dosha_client_found.prototype, "Found_new", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "New_founds", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "new_found_title", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "New_found_title", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "New_found_title_field", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "new_found_uri", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "New_found_uri", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "New_found_uri_field", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "add_new_found", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "New_found_add", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "New_found_form", null);
    $.$dosha_client_found = $dosha_client_found;
})($ || ($ = {}));
//dosha/client/found/-view.tree/found.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $dosha_client_found extends $.$dosha_client_found {
            founds() {
                const url = 'https://dosha-api-default-rtdb.firebaseio.com/founds.json';
                const data = $mol_fetch.json(url);
                console.log(data, [...Object.values(data)]);
                return [...Object.values(data)] ?? [];
            }
            active_founds() {
                console.log('active_founds');
                return this.founds().filter((f) => f.active).map((found) => this.Found_active(found.uri)) || [];
            }
            new_founds() {
                return this.founds().filter((f) => f.uri && f.active !== true).map((found) => this.Found_new(found.uri)) || [];
            }
            found_active_title(id) {
                return this.founds().find((found) => found.uri === id)?.title || '';
            }
            found_active_uri(id) {
                return this.founds().find((found) => found.uri === id)?.uri || '';
            }
            found_new_title(id) {
                return this.founds().find((found) => found.uri === id)?.title || '';
            }
            found_new_uri(id) {
                return this.founds().find((found) => found.uri === id)?.uri || '';
            }
            add_new_found(next) {
                console.log('test', next);
                if (this.new_found_title() && this.new_found_uri()) {
                    this.add_new_found_fetch(this.new_found_title(), this.new_found_uri());
                }
            }
            add_new_found_fetch(title, uri) {
                const url = 'https://dosha-api-default-rtdb.firebaseio.com/founds.json';
                const data = $mol_fetch.json(url, {
                    method: 'POST',
                    body: JSON.stringify({ title, uri }),
                });
            }
        }
        __decorate([
            $mol_mem
        ], $dosha_client_found.prototype, "founds", null);
        $$.$dosha_client_found = $dosha_client_found;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dosha/client/found/found.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_group extends $mol_svg {
        dom_name() {
            return "g";
        }
    }
    $.$mol_svg_group = $mol_svg_group;
})($ || ($ = {}));
//mol/svg/group/-view.tree/group.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_vector extends Array {
        get length() {
            return super.length;
        }
        constructor(...values) { super(...values); }
        map(convert, self) {
            return super.map(convert, self);
        }
        merged(patches, combine) {
            return this.map((value, index) => combine(value, patches[index]));
        }
        limited(limits) {
            return this.merged(limits, (value, [min, max]) => (value < min) ? min : (value > max) ? max : value);
        }
        added0(diff) {
            return this.map(value => value + diff);
        }
        added1(diff) {
            return this.merged(diff, (a, b) => a + b);
        }
        multed0(mult) {
            return this.map(value => value * mult);
        }
        multed1(mults) {
            return this.merged(mults, (a, b) => a * b);
        }
        powered0(mult) {
            return this.map(value => value ** mult);
        }
        expanded1(point) {
            return this.merged(point, (range, value) => range.expanded0(value));
        }
        expanded2(point) {
            return this.merged(point, (range1, range2) => {
                let next = range1;
                const Range = range1.constructor;
                if (range1[0] > range2[0])
                    next = new Range(range2[0], next.max);
                if (range1[1] < range2[1])
                    next = new Range(next.min, range2[1]);
                return next;
            });
        }
        center() {
            const Result = this[0].constructor;
            return new Result(...this[0].map((_, i) => this.reduce((sum, point) => sum + point[i], 0) / this.length));
        }
        distance() {
            let distance = 0;
            for (let i = 1; i < this.length; ++i) {
                distance += this[i - 1].reduce((sum, min, j) => sum + (min - this[i][j]) ** 2, 0) ** (1 / this[i].length);
            }
            return distance;
        }
        transponed() {
            return this[0].map((_, i) => this.map(row => row[i]));
        }
        get x() { return this[0]; }
        set x(next) { this[0] = next; }
        get y() { return this[1]; }
        set y(next) { this[1] = next; }
        get z() { return this[2]; }
        set z(next) { this[2] = next; }
    }
    $.$mol_vector = $mol_vector;
    class $mol_vector_1d extends $mol_vector {
    }
    $.$mol_vector_1d = $mol_vector_1d;
    class $mol_vector_2d extends $mol_vector {
    }
    $.$mol_vector_2d = $mol_vector_2d;
    class $mol_vector_3d extends $mol_vector {
    }
    $.$mol_vector_3d = $mol_vector_3d;
    class $mol_vector_range extends $mol_vector {
        0;
        1;
        constructor(min, max = min) {
            super(min, max);
            this[0] = min;
            this[1] = max;
        }
        get min() { return this[0]; }
        set min(next) { this[0] = next; }
        get max() { return this[1]; }
        set max(next) { this[1] = next; }
        get inversed() {
            return new this.constructor(this.max, this.min);
        }
        expanded0(value) {
            const Range = this.constructor;
            let range = this;
            if (value > range.max)
                range = new Range(range.min, value);
            if (value < range.min)
                range = new Range(value, range.max);
            return range;
        }
    }
    $.$mol_vector_range = $mol_vector_range;
    $.$mol_vector_range_full = new $mol_vector_range(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    class $mol_vector_matrix extends $mol_vector {
        added2(diff) {
            return this.merged(diff, (a, b) => a.map((a2, index) => a2 + b[index]));
        }
        multed2(diff) {
            return this.merged(diff, (a, b) => a.map((a2, index) => a2 * b[index]));
        }
    }
    $.$mol_vector_matrix = $mol_vector_matrix;
})($ || ($ = {}));
//mol/vector/vector.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_title extends $mol_svg {
        dom_name() {
            return "title";
        }
        sub() {
            return [
                this.title()
            ];
        }
    }
    $.$mol_svg_title = $mol_svg_title;
})($ || ($ = {}));
//mol/svg/title/-view.tree/title.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plot_graph extends $mol_svg_group {
        series_x() {
            return [];
        }
        series_y() {
            return [];
        }
        attr() {
            return {
                ...super.attr(),
                mol_plot_graph_type: this.type()
            };
        }
        style() {
            return {
                ...super.style(),
                color: this.color()
            };
        }
        viewport() {
            const obj = new this.$.$mol_vector_2d(this.viewport_x(), this.viewport_y());
            return obj;
        }
        shift() {
            return [
                0,
                0
            ];
        }
        scale() {
            return [
                1,
                1
            ];
        }
        cursor_position() {
            const obj = new this.$.$mol_vector_2d(NaN, NaN);
            return obj;
        }
        dimensions_pane() {
            const obj = new this.$.$mol_vector_2d(this.dimensions_pane_x(), this.dimensions_pane_y());
            return obj;
        }
        dimensions() {
            const obj = new this.$.$mol_vector_2d(this.dimensions_x(), this.dimensions_y());
            return obj;
        }
        size_real() {
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        gap() {
            const obj = new this.$.$mol_vector_2d(this.gap_x(), this.gap_y());
            return obj;
        }
        repos_x(id) {
            return 0;
        }
        repos_y(id) {
            return 0;
        }
        indexes() {
            return [];
        }
        points() {
            return [];
        }
        front() {
            return [];
        }
        back() {
            return [];
        }
        Hint() {
            const obj = new this.$.$mol_svg_title();
            obj.title = () => this.hint();
            return obj;
        }
        hue() {
            return +NaN;
        }
        Sample() {
            return null;
        }
        type() {
            return "solid";
        }
        color() {
            return "";
        }
        viewport_x() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        viewport_y() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_pane_x() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_pane_y() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_x() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_y() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        gap_x() {
            const obj = new this.$.$mol_vector_range(0, 0);
            return obj;
        }
        gap_y() {
            const obj = new this.$.$mol_vector_range(0, 0);
            return obj;
        }
        title() {
            return "";
        }
        hint() {
            return this.title();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "viewport", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "cursor_position", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "dimensions_pane", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "dimensions", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "size_real", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "gap", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "Hint", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "viewport_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "viewport_y", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "dimensions_pane_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "dimensions_pane_y", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "dimensions_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "dimensions_y", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "gap_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_graph.prototype, "gap_y", null);
    $.$mol_plot_graph = $mol_plot_graph;
    class $mol_plot_graph_sample extends $mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_plot_graph_type: this.type()
            };
        }
        style() {
            return {
                ...super.style(),
                color: this.color()
            };
        }
        type() {
            return "solid";
        }
        color() {
            return "black";
        }
    }
    $.$mol_plot_graph_sample = $mol_plot_graph_sample;
})($ || ($ = {}));
//mol/plot/graph/-view.tree/graph.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_graph extends $.$mol_plot_graph {
            viewport() {
                const size = this.size_real();
                return new this.$.$mol_vector_2d(new this.$.$mol_vector_range(0, size.x), new this.$.$mol_vector_range(0, size.y));
            }
            indexes() {
                return this.series_x().map((_, i) => i);
            }
            repos_x(val) {
                return val;
            }
            repos_y(val) {
                return val;
            }
            points() {
                const [shift_x, shift_y] = this.shift();
                const [scale_x, scale_y] = this.scale();
                const series_x = this.series_x();
                const series_y = this.series_y();
                return this.indexes().map(index => {
                    let point_x = Math.round(shift_x + this.repos_x(series_x[index]) * scale_x);
                    let point_y = Math.round(shift_y + this.repos_y(series_y[index]) * scale_y);
                    point_x = Math.max(Number.MIN_SAFE_INTEGER, Math.min(point_x, Number.MAX_SAFE_INTEGER));
                    point_y = Math.max(Number.MIN_SAFE_INTEGER, Math.min(point_y, Number.MAX_SAFE_INTEGER));
                    return [point_x, point_y];
                });
            }
            series_x() {
                return this.series_y().map((val, index) => index);
            }
            dimensions() {
                let next = new this.$.$mol_vector_2d($mol_vector_range_full.inversed, $mol_vector_range_full.inversed);
                const series_x = this.series_x();
                const series_y = this.series_y();
                for (let i = 0; i < series_x.length; i++) {
                    if (series_x[i] > next.x.max)
                        next.x.max = series_x[i];
                    if (series_x[i] < next.x.min)
                        next.x.min = series_x[i];
                    if (series_y[i] > next.y.max)
                        next.y.max = series_y[i];
                    if (series_y[i] < next.y.min)
                        next.y.min = series_y[i];
                }
                return next;
            }
            color() {
                const hue = this.hue();
                return hue ? `hsl( ${hue} , 100% , 35% )` : '';
            }
            front() {
                return [this];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_plot_graph.prototype, "indexes", null);
        __decorate([
            $mol_mem
        ], $mol_plot_graph.prototype, "series_x", null);
        __decorate([
            $mol_mem
        ], $mol_plot_graph.prototype, "dimensions", null);
        $$.$mol_plot_graph = $mol_plot_graph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/plot/graph/graph.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/graph/graph.view.css", "[mol_plot_graph] {\n\tstroke: currentColor;\n}\n\n[mol_plot_graph_sample] {\n\tborder-width: 0;\n\tborder-style: solid;\n}\n\n[mol_plot_graph_type=\"dashed\"] {\n\tstroke-dasharray: 4 4;\n\tborder-style: dashed;\n}\n");
})($ || ($ = {}));
//mol/plot/graph/-css/graph.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plot_bar extends $mol_plot_graph {
        style() {
            return {
                ...super.style(),
                "stroke-width": this.stroke_width()
            };
        }
        sub() {
            return [
                this.Hint(),
                this.Curve()
            ];
        }
        Sample() {
            const obj = new this.$.$mol_plot_graph_sample();
            obj.color = () => this.color();
            return obj;
        }
        stroke_width() {
            return "1rem";
        }
        curve() {
            return "";
        }
        Curve() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.curve();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plot_bar.prototype, "Sample", null);
    __decorate([
        $mol_mem
    ], $mol_plot_bar.prototype, "Curve", null);
    $.$mol_plot_bar = $mol_plot_bar;
})($ || ($ = {}));
//mol/plot/bar/-view.tree/bar.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_bar extends $.$mol_plot_bar {
            indexes() {
                const { x: { min: viewport_left, max: viewport_right }, y: { min: viewport_bottom, max: viewport_top }, } = this.viewport();
                const [shift_x, shift_y] = this.shift();
                const [scale_x, scale_y] = this.scale();
                const indexes = [];
                const series_x = this.series_x();
                const series_y = this.series_y();
                let first_x = null;
                let last_x = null;
                for (let i = 0; i < series_x.length; i++) {
                    const scaled = [
                        Math.round(shift_x + series_x[i] * scale_x),
                        Math.round(shift_y + series_y[i] * scale_y),
                    ];
                    if (scaled[0] < viewport_left) {
                        first_x = i;
                        continue;
                    }
                    if (scaled[0] > viewport_right) {
                        if (last_x === null)
                            last_x = i;
                        continue;
                    }
                    if (scaled[1] < viewport_bottom)
                        continue;
                    if (scaled[1] > viewport_top)
                        continue;
                    if (first_x !== null)
                        indexes.push(first_x);
                    indexes.push(i);
                    if (last_x !== null)
                        indexes.push(last_x);
                    first_x = last_x = null;
                }
                if (first_x !== null)
                    indexes.push(first_x);
                if (last_x !== null)
                    indexes.push(last_x);
                return indexes;
            }
            curve() {
                const points = this.points();
                if (points.length === 0)
                    return '';
                const [, shift_y] = this.shift();
                return points.map(point => `M ${point[0]} ${shift_y} V ${point[1]}`).join(' ');
            }
            stroke_width() {
                return (8 / Math.sqrt(this.indexes().length)).toPrecision(2) + '%';
            }
            color() {
                return `hsl( ${this.hue()} , 70% , 85% )`;
            }
            dimensions() {
                let next = new this.$.$mol_vector_2d($mol_vector_range_full.inversed, new this.$.$mol_vector_range(0, 0));
                const series_x = this.series_x();
                const series_y = this.series_y();
                for (let i = 0; i < series_x.length; i++) {
                    next = next.expanded1([series_x[i], series_y[i]]);
                }
                const gap = (next.x.max - next.x.min) / series_x.length || 0.00000001;
                next[0] = next.x.added1([-gap, gap]);
                return next;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_plot_bar.prototype, "indexes", null);
        __decorate([
            $mol_mem
        ], $mol_plot_bar.prototype, "dimensions", null);
        $$.$mol_plot_bar = $mol_plot_bar;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/plot/bar/bar.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/bar/bar.view.css", "[mol_plot_bar] {\n\tstroke-linecap: butt;\n\tstroke-width: 1rem;\n}\n\n[mol_plot_bar_sample] {\n\tbackground: currentColor;\n\tposition: absolute;\n\ttop:0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n}\n");
})($ || ($ = {}));
//mol/plot/bar/-css/bar.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plot_line extends $mol_plot_graph {
        threshold() {
            return 1;
        }
        spacing() {
            return 2;
        }
        color_fill() {
            return "none";
        }
        dom_name() {
            return "path";
        }
        attr() {
            return {
                ...super.attr(),
                d: this.curve()
            };
        }
        sub() {
            return [
                this.Hint()
            ];
        }
        Sample() {
            const obj = new this.$.$mol_plot_graph_sample();
            obj.color = () => this.color();
            obj.type = () => this.type();
            return obj;
        }
        curve() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plot_line.prototype, "Sample", null);
    $.$mol_plot_line = $mol_plot_line;
})($ || ($ = {}));
//mol/plot/line/-view.tree/line.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_line extends $.$mol_plot_line {
            sub() {
                return this.hint() ? super.sub() : [];
            }
            indexes() {
                const threshold = this.threshold();
                const { x: { min: viewport_left, max: viewport_right }, y: { min: viewport_bottom, max: viewport_top }, } = this.viewport();
                const [shift_x, shift_y] = this.shift();
                const [scale_x, scale_y] = this.scale();
                const indexes = [];
                let last = new $mol_vector_2d(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
                let last_zone = new $mol_vector_2d(0, 0);
                const series_x = this.series_x();
                const series_y = this.series_y();
                const zone_of = (point) => new $mol_vector_2d(point.x < viewport_left ? -1
                    : point.x > viewport_right ? 1
                        : 0, point.y < viewport_bottom ? -1
                    : point.y > viewport_top ? 1
                        : 0);
                for (let i = 0; i < series_x.length - 1; i++) {
                    const scaled = new $mol_vector_2d(Math.round(shift_x + this.repos_x(series_x[i]) * scale_x), Math.round(shift_y + this.repos_y(series_y[i]) * scale_y));
                    if (Math.abs(scaled.x - last.x) < threshold
                        && Math.abs(scaled.y - last.y) < threshold)
                        continue;
                    const zone = zone_of(scaled);
                    last = scaled;
                    if (zone.x !== 0 && zone.x === last_zone.x || zone.y !== 0 && zone.y === last_zone.y) {
                        continue;
                    }
                    if (last_zone.x !== 0 || last_zone.y !== 0) {
                        indexes.push(i - 1);
                    }
                    last_zone = zone;
                    indexes.push(i);
                }
                indexes.push(series_x.length - 1);
                return indexes;
            }
            curve() {
                const points = this.points();
                if (points.length === 0)
                    return '';
                const main = points.map(point => `L ${point.join(' ')}`).join(' ');
                return `M ${points[0].join(' ')} ${main}`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_plot_line.prototype, "indexes", null);
        $$.$mol_plot_line = $mol_plot_line;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/plot/line/line.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/line/line.view.css", "[mol_plot_line] {\n\tfill: none;\n\tstroke-linejoin: round;\n}\n\n[mol_plot_line_sample] {\n\theight: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tborder-width: 2px 0 0;\n\tposition: absolute;\n\ttop: .75em;\n\ttransform: translateY(-50%);\n}\n");
})($ || ($ = {}));
//mol/plot/line/-css/line.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plot_dot extends $mol_plot_graph {
        points_max() {
            return +Infinity;
        }
        aspect() {
            return 1;
        }
        style() {
            return {
                ...super.style(),
                "stroke-width": this.diameter()
            };
        }
        sub() {
            return [
                this.Hint(),
                this.Curve()
            ];
        }
        Sample() {
            const obj = new this.$.$mol_plot_graph_sample();
            obj.color = () => this.color();
            return obj;
        }
        diameter() {
            return 8;
        }
        curve() {
            return "";
        }
        Curve() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.curve();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plot_dot.prototype, "Sample", null);
    __decorate([
        $mol_mem
    ], $mol_plot_dot.prototype, "Curve", null);
    $.$mol_plot_dot = $mol_plot_dot;
})($ || ($ = {}));
//mol/plot/dot/-view.tree/dot.view.tree.ts
;
"use strict";
var $;
(function ($) {
    const mask = 0b11111_11111_11111;
    function $mol_coord_pack(high, low) {
        return (high << 17 >>> 2) | (low & mask);
    }
    $.$mol_coord_pack = $mol_coord_pack;
    function $mol_coord_high(pack) {
        return pack << 2 >> 17;
    }
    $.$mol_coord_high = $mol_coord_high;
    function $mol_coord_low(pack) {
        return (pack << 17) >> 17;
    }
    $.$mol_coord_low = $mol_coord_low;
})($ || ($ = {}));
//mol/coord/coord.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_dot extends $.$mol_plot_dot {
            filled() {
                return new Set();
            }
            indexes() {
                const radius = this.diameter() / 2;
                const points_max = this.points_max();
                const viewport = this.viewport();
                const viewport_left = viewport.x.min - radius;
                const viewport_right = viewport.x.max + radius;
                const viewport_bottom = viewport.y.min - radius;
                const viewport_top = viewport.y.max + radius;
                const [shift_x, shift_y] = this.shift();
                const [scale_x, scale_y] = this.scale();
                let last_x = Number.NEGATIVE_INFINITY;
                let last_y = Number.NEGATIVE_INFINITY;
                let spacing = 0;
                let filled = this.filled();
                let indexes;
                const series_x = this.series_x();
                const series_y = this.series_y();
                do {
                    indexes = [];
                    for (let i = 0; i < series_x.length; i++) {
                        const point_x = this.repos_x(series_x[i]);
                        const point_y = this.repos_y(series_y[i]);
                        const scaled_x = Math.round(shift_x + point_x * scale_x);
                        const scaled_y = Math.round(shift_y + point_y * scale_y);
                        if (Math.abs(scaled_x - last_x) < radius
                            && Math.abs(scaled_y - last_y) < radius)
                            continue;
                        last_x = scaled_x;
                        last_y = scaled_y;
                        if (scaled_x < viewport_left)
                            continue;
                        if (scaled_y < viewport_bottom)
                            continue;
                        if (scaled_x > viewport_right)
                            continue;
                        if (scaled_y > viewport_top)
                            continue;
                        if (spacing !== 0) {
                            const key = $mol_coord_pack(Math.round(point_x * scale_x / spacing) * spacing, Math.round(point_y * scale_y / spacing) * spacing);
                            if (filled.has(key))
                                continue;
                            filled.add(key);
                        }
                        indexes.push(i);
                        if (indexes.length > points_max)
                            break;
                    }
                    spacing += Math.ceil(radius);
                    filled.clear();
                } while (indexes.length > points_max);
                return indexes;
            }
            curve() {
                const points = this.points();
                if (points.length === 0)
                    return '';
                const diameter = this.diameter();
                const aspect = this.aspect();
                const shift_y = Math.max(0, Math.floor((aspect - 1) * diameter / 2));
                const shift_x = Math.max(0, Math.floor((1 / aspect - 1) * diameter / 2));
                const size_y = Math.max(0, Math.ceil((aspect - 1) * diameter));
                const size_x = Math.max(0, Math.ceil((1 / aspect - 1) * diameter));
                return points.map(point => `M ${point[0] - shift_x} ${point[1] - shift_y} l ${size_x} ${size_y}`).join(' ');
            }
        }
        __decorate([
            $mol_mem
        ], $mol_plot_dot.prototype, "filled", null);
        __decorate([
            $mol_mem
        ], $mol_plot_dot.prototype, "indexes", null);
        $$.$mol_plot_dot = $mol_plot_dot;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/plot/dot/dot.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/dot/dot.view.css", "[mol_plot_dot] {\n\tstroke-linecap: round;\n\tfill: none;\n}\n\n[mol_plot_dot_sample] {\n\twidth: .5rem;\n\theight: .5rem;\n\tborder-radius: 1rem;\n\tbackground: currentColor;\n\tposition: absolute;\n\ttop: .75em;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n}\n");
})($ || ($ = {}));
//mol/plot/dot/-css/dot.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plot_group extends $mol_plot_graph {
        sub() {
            return this.graphs_enriched();
        }
        Sample() {
            const obj = new this.$.$mol_plot_graph_sample();
            obj.sub = () => this.graph_samples();
            return obj;
        }
        graphs() {
            return [];
        }
        graphs_enriched() {
            return this.graphs();
        }
        graph_samples() {
            return [];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plot_group.prototype, "Sample", null);
    $.$mol_plot_group = $mol_plot_group;
})($ || ($ = {}));
//mol/plot/group/-view.tree/group.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_group extends $.$mol_plot_group {
            graphs_enriched() {
                const graphs = this.graphs();
                for (let graph of graphs) {
                    graph.shift = () => this.shift();
                    graph.scale = () => this.scale();
                    graph.size_real = () => this.size_real();
                    graph.hue = () => this.hue();
                    graph.series_x = () => this.series_x();
                    graph.series_y = () => this.series_y();
                    graph.dimensions_pane = () => this.dimensions_pane();
                    graph.viewport = () => this.viewport();
                    graph.cursor_position = () => this.cursor_position();
                    graph.gap = () => this.gap();
                    graph.title = () => this.title();
                    graph.repos_x = val => this.repos_x(val);
                    graph.repos_y = val => this.repos_y(val);
                }
                return graphs;
            }
            dimensions() {
                const graphs = this.graphs_enriched();
                let next = new this.$.$mol_vector_2d($mol_vector_range_full.inversed, $mol_vector_range_full.inversed);
                for (let graph of graphs) {
                    next = next.expanded2(graph.dimensions());
                }
                return next;
            }
            graph_samples() {
                return this.graphs_enriched().map(graph => graph.Sample());
            }
            back() {
                const graphs = this.graphs_enriched();
                const next = [];
                for (let graph of graphs)
                    next.push(...graph.back());
                return next;
            }
            front() {
                const graphs = this.graphs_enriched();
                const next = [];
                for (let graph of graphs)
                    next.push(...graph.front());
                return next;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_plot_group.prototype, "graphs_enriched", null);
        __decorate([
            $mol_mem
        ], $mol_plot_group.prototype, "dimensions", null);
        __decorate([
            $mol_mem
        ], $mol_plot_group.prototype, "graph_samples", null);
        $$.$mol_plot_group = $mol_plot_group;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/plot/group/group.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_text extends $mol_svg {
        dom_name() {
            return "text";
        }
        pos() {
            return [];
        }
        attr() {
            return {
                ...super.attr(),
                x: this.pos_x(),
                y: this.pos_y(),
                "text-anchor": this.align()
            };
        }
        sub() {
            return [
                this.text()
            ];
        }
        pos_x() {
            return "";
        }
        pos_y() {
            return "";
        }
        align() {
            return "middle";
        }
        text() {
            return "";
        }
    }
    $.$mol_svg_text = $mol_svg_text;
})($ || ($ = {}));
//mol/svg/text/-view.tree/text.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg_text extends $.$mol_svg_text {
            pos_x() {
                return this.pos()[0];
            }
            pos_y() {
                return this.pos()[1];
            }
        }
        $$.$mol_svg_text = $mol_svg_text;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/svg/text/text.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/text/text.view.css", "[mol_svg_text] {\n\tfill: currentColor;\n\tstroke: none;\n}\n");
})($ || ($ = {}));
//mol/svg/text/-css/text.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_rect extends $mol_svg {
        dom_name() {
            return "rect";
        }
        pos() {
            return [];
        }
        attr() {
            return {
                ...super.attr(),
                width: this.width(),
                height: this.height(),
                x: this.pos_x(),
                y: this.pos_y()
            };
        }
        width() {
            return "0";
        }
        height() {
            return "0";
        }
        pos_x() {
            return "";
        }
        pos_y() {
            return "";
        }
    }
    $.$mol_svg_rect = $mol_svg_rect;
})($ || ($ = {}));
//mol/svg/rect/-view.tree/rect.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg_rect extends $.$mol_svg_rect {
            pos_x() {
                return this.pos()[0];
            }
            pos_y() {
                return this.pos()[1];
            }
        }
        $$.$mol_svg_rect = $mol_svg_rect;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/svg/rect/rect.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plot_ruler extends $mol_plot_graph {
        step() {
            return 0;
        }
        scale_axis() {
            return 1;
        }
        scale_step() {
            return 1;
        }
        shift_axis() {
            return 1;
        }
        dimensions_axis() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        viewport_axis() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        axis_points() {
            return [];
        }
        normalize(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        precision() {
            return 1;
        }
        sub() {
            return [
                this.Background(),
                this.Curve(),
                this.labels_formatted(),
                this.Title()
            ];
        }
        Label(id) {
            const obj = new this.$.$mol_svg_text();
            obj.pos = () => this.label_pos(id);
            obj.text = () => this.label_text(id);
            obj.align = () => this.label_align();
            return obj;
        }
        background_x() {
            return "0";
        }
        background_y() {
            return "0";
        }
        background_width() {
            return "100%";
        }
        background_height() {
            return "14";
        }
        Background() {
            const obj = new this.$.$mol_svg_rect();
            obj.pos_x = () => this.background_x();
            obj.pos_y = () => this.background_y();
            obj.width = () => this.background_width();
            obj.height = () => this.background_height();
            return obj;
        }
        curve() {
            return "";
        }
        Curve() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.curve();
            return obj;
        }
        labels_formatted() {
            return [];
        }
        title_pos_x() {
            return "0";
        }
        title_pos_y() {
            return "100%";
        }
        title_align() {
            return "start";
        }
        Title() {
            const obj = new this.$.$mol_svg_text();
            obj.pos_x = () => this.title_pos_x();
            obj.pos_y = () => this.title_pos_y();
            obj.align = () => this.title_align();
            obj.text = () => this.title();
            return obj;
        }
        label_pos_x(id) {
            return "";
        }
        label_pos_y(id) {
            return "";
        }
        label_pos(id) {
            return [
                this.label_pos_x(id),
                this.label_pos_y(id)
            ];
        }
        label_text(id) {
            return "";
        }
        label_align() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plot_ruler.prototype, "dimensions_axis", null);
    __decorate([
        $mol_mem
    ], $mol_plot_ruler.prototype, "viewport_axis", null);
    __decorate([
        $mol_mem
    ], $mol_plot_ruler.prototype, "normalize", null);
    __decorate([
        $mol_mem_key
    ], $mol_plot_ruler.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $mol_plot_ruler.prototype, "Background", null);
    __decorate([
        $mol_mem
    ], $mol_plot_ruler.prototype, "Curve", null);
    __decorate([
        $mol_mem
    ], $mol_plot_ruler.prototype, "Title", null);
    $.$mol_plot_ruler = $mol_plot_ruler;
})($ || ($ = {}));
//mol/plot/ruler/-view.tree/ruler.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_math_round_expand(val, gap = 1) {
        if (val === 0)
            return 0;
        const val_abs = Math.abs(val);
        const val_sign = val ? Math.round(val / val_abs) : 0;
        const digits = Math.floor(Math.log(val_abs) / Math.log(10));
        const precission = Math.pow(10, digits - gap);
        const val_expanded = precission * Math.ceil(val_abs / precission);
        return val_sign * val_expanded;
    }
    $.$mol_math_round_expand = $mol_math_round_expand;
})($ || ($ = {}));
//mol/math/round/expand/expand.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_ruler extends $.$mol_plot_ruler {
            labels_formatted() {
                return this.axis_points().map((point, index) => this.Label(index));
            }
            step() {
                const scale = Math.abs(this.scale_step());
                const dims = this.dimensions_axis();
                const range = dims.max - dims.min;
                const min_width = (Math.abs(Math.log10(range)) + 2) * 15;
                const size = $mol_math_round_expand(range, -1);
                const count = Math.max(1, Math.pow(10, Math.floor(Math.log(size * scale / min_width) / Math.log(10))));
                let step = size / count;
                const step_max = min_width * 2 / scale;
                if (step > step_max)
                    step /= 2;
                if (step > step_max)
                    step /= 2;
                return Math.max(step, Math.abs(dims.min) / 1e10, Math.abs(dims.max) / 1e10);
            }
            snap_to_grid(coord) {
                const viewport = this.viewport_axis();
                const scale = this.scale_axis();
                const shift = this.shift_axis();
                const step = this.step();
                const val = Math.round(coord / step) * step;
                if (scale == 0)
                    return val;
                const step_scaled = step * scale;
                const scaled = val * scale + shift;
                let count = 0;
                if (scaled < viewport.min)
                    count = (scaled - viewport.min) / step_scaled;
                if (scaled > viewport.max)
                    count = (scaled - viewport.max) / step_scaled;
                return val - Math.floor(count) * step;
            }
            axis_points() {
                const dims = this.dimensions_axis();
                const start = this.snap_to_grid(dims.min);
                const end = this.snap_to_grid(dims.max);
                const step = this.step();
                const next = [];
                for (let val = start; val <= end; val += step) {
                    next.push(val);
                }
                return next;
            }
            precision() {
                const step = this.step();
                return Math.max(0, Math.min(15, (step - Math.floor(step)).toString().length - 2));
            }
            label_text(index) {
                const point = this.axis_points()[index];
                return point.toFixed(this.precision());
            }
            font_size() {
                return this.Background().font_size();
            }
            back() {
                return [this.Curve()];
            }
            front() {
                return [
                    ...this.labels_formatted(),
                    this.Title()
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_plot_ruler.prototype, "step", null);
        __decorate([
            $mol_mem
        ], $mol_plot_ruler.prototype, "axis_points", null);
        __decorate([
            $mol_mem
        ], $mol_plot_ruler.prototype, "precision", null);
        $$.$mol_plot_ruler = $mol_plot_ruler;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/plot/ruler/ruler.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/ruler/ruler.view.css", "[mol_plot_ruler_curve] {\n\tcolor: var(--mol_theme_line);\n\tstroke-width: 1px;\n\tstroke: currentColor;\n}\n\n[mol_plot_ruler_label] {\n\tcolor: var(--mol_theme_text);\n\ttext-shadow: 0 -1px var(--mol_theme_back), 0px 1px var(--mol_theme_back);\n}\n\n[mol_plot_ruler_title] {\n\tcolor: var(--mol_theme_shade);\n\tbackground-color: var(--mol_theme_back);\n\ttext-shadow: 0 -1px var(--mol_theme_back), 0px 1px var(--mol_theme_back);\n}\n\n[mol_plot_ruler_background] {\n\tstroke: none;\n\tfill: var(--mol_theme_back);\n\topacity: 0.8;\n}\n");
})($ || ($ = {}));
//mol/plot/ruler/-css/ruler.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plot_ruler_vert extends $mol_plot_ruler {
        title_align() {
            return "end";
        }
        label_align() {
            return "end";
        }
        title_pos_y() {
            return "14";
        }
        label_pos_x(id) {
            return this.title_pos_x();
        }
        background_height() {
            return "100%";
        }
        background_width() {
            return this.title_pos_x();
        }
    }
    $.$mol_plot_ruler_vert = $mol_plot_ruler_vert;
})($ || ($ = {}));
//mol/plot/ruler/vert/-view.tree/vert.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_ruler_vert extends $.$mol_plot_ruler_vert {
            dimensions_axis() {
                return this.dimensions_pane().y;
            }
            viewport_axis() {
                return new this.$.$mol_vector_range(0, this.size_real().y);
            }
            scale_axis() {
                return this.scale()[1];
            }
            scale_step() {
                return -this.scale()[1];
            }
            shift_axis() {
                return this.shift()[1];
            }
            curve() {
                const [, shift] = this.shift();
                const [, scale] = this.scale();
                return this.axis_points().map(point => {
                    let scaled = Math.round(point * scale + shift);
                    scaled = Math.max(Number.MIN_SAFE_INTEGER, Math.min(scaled, Number.MAX_SAFE_INTEGER));
                    return `M 0 ${scaled} H 2000`;
                }).join(' ');
            }
            title_pos_x() {
                return String(this.gap().x.min);
            }
            label_pos_y(index) {
                return (this.axis_points()[index] * this.scale()[1] + this.shift()[1]).toFixed(3);
            }
        }
        $$.$mol_plot_ruler_vert = $mol_plot_ruler_vert;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/plot/ruler/vert/vert.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/ruler/vert/vert.view.css", "[mol_plot_ruler_vert_label] {\n\ttransform: translateY( 4px );\n}\n");
})($ || ($ = {}));
//mol/plot/ruler/vert/-css/vert.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plot_ruler_hor extends $mol_plot_ruler {
        title_align() {
            return "start";
        }
        label_align() {
            return "middle";
        }
        title_pos_x() {
            return "0";
        }
        title_pos_y() {
            return "100%";
        }
        label_pos_y(id) {
            return this.title_pos_y();
        }
        background_width() {
            return "100%";
        }
    }
    $.$mol_plot_ruler_hor = $mol_plot_ruler_hor;
})($ || ($ = {}));
//mol/plot/ruler/hor/-view.tree/hor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_ruler_hor extends $.$mol_plot_ruler_hor {
            dimensions_axis() {
                return this.dimensions_pane().x;
            }
            viewport_axis() {
                return new this.$.$mol_vector_range(0, this.size_real().x);
            }
            scale_axis() {
                return this.scale()[0];
            }
            scale_step() {
                return this.scale()[0];
            }
            shift_axis() {
                return this.shift()[0];
            }
            curve() {
                const [shift] = this.shift();
                const [scale] = this.scale();
                return this.axis_points().map(point => {
                    let scaled = Math.round(point * scale + shift);
                    scaled = Math.max(Number.MIN_SAFE_INTEGER, Math.min(scaled, Number.MAX_SAFE_INTEGER));
                    return `M ${scaled} 1000 V 0`;
                }).join(' ');
            }
            label_pos_x(index) {
                return (this.axis_points()[index] * this.scale()[0] + this.shift()[0]).toFixed(3);
            }
            background_y() {
                return String(this.size_real()[1] - this.font_size());
            }
            title_pos_y() {
                return String(this.size_real()[1]);
            }
            background_height() {
                return String(this.font_size());
            }
        }
        $$.$mol_plot_ruler_hor = $mol_plot_ruler_hor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/plot/ruler/hor/hor.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/ruler/hor/hor.view.css", "[mol_plot_ruler_hor_label] {\n\ttransform: translateY( -4px );\n}\n\n[mol_plot_ruler_hor_title] {\n\ttransform: translateY( -4px );\n}\n");
})($ || ($ = {}));
//mol/plot/ruler/hor/-css/hor.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plot_mark_hor extends $mol_plot_ruler_hor {
        labels() {
            return [];
        }
    }
    $.$mol_plot_mark_hor = $mol_plot_mark_hor;
})($ || ($ = {}));
//mol/plot/mark/hor/-view.tree/hor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_mark_hor extends $.$mol_plot_mark_hor {
            series_x() {
                return this.labels().map((val, index) => index);
            }
            labels() {
                return this.series_x().map(val => String(val));
            }
            visible_indexes() {
                const series_x = this.series_x();
                const labels = this.labels();
                const [shift_x,] = this.shift();
                const [scale_x,] = this.scale();
                let step = this.step() * scale_x;
                const [[viewport_left, viewport_right]] = this.viewport();
                const size_x = viewport_right - viewport_left;
                const font_size = this.font_size();
                let indexes;
                let labels_width;
                do {
                    indexes = [];
                    labels_width = 0;
                    let last = 0;
                    let current = 0;
                    for (let i = 0; i < series_x.length; i++) {
                        const point_x = series_x[i];
                        const scaled_x = (shift_x + point_x * scale_x);
                        if (scaled_x < viewport_left)
                            continue;
                        if (scaled_x > viewport_right)
                            continue;
                        if (current === 0)
                            current = scaled_x;
                        if (scaled_x < current) {
                            last = i;
                            continue;
                        }
                        indexes.push(i);
                        current += step;
                        last = 0;
                        labels_width += font_size * (labels[i].length + 1);
                        if (labels_width > size_x)
                            break;
                    }
                    if (last !== 0) {
                        indexes.push(last);
                        labels_width += font_size * (labels[last].length + 1);
                    }
                    step *= 1.5;
                } while (labels_width > size_x && indexes.length > 2);
                return indexes;
            }
            curve() {
                const [shift] = this.shift();
                const [scale] = this.scale();
                const series_x = this.series_x();
                return this.visible_indexes().map(index => {
                    const scaled = series_x[index] * scale + shift;
                    return `M ${scaled.toFixed(3)} 1000 V 0`;
                }).join(' ');
            }
            label_text(index) {
                return this.labels()[index];
            }
            labels_formatted() {
                return this.visible_indexes().map(index => this.Label(index));
            }
            label_pos_x(index) {
                return (this.series_x()[index] * this.scale()[0] + this.shift()[0]).toFixed(3);
            }
            label_pos_y(index) {
                return this.title_pos_y();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_plot_mark_hor.prototype, "series_x", null);
        __decorate([
            $mol_mem
        ], $mol_plot_mark_hor.prototype, "labels", null);
        __decorate([
            $mol_mem
        ], $mol_plot_mark_hor.prototype, "visible_indexes", null);
        $$.$mol_plot_mark_hor = $mol_plot_mark_hor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/plot/mark/hor/hor.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/mark/hor/hor.view.css", "[mol_plot_mark_hor_curve] {\n\tcolor: var(--mol_theme_line);\n\tstroke-width: .1%;\n\tstroke: currentColor;\n\tpointer-events: none;\n}\n\n[mol_plot_mark_hor_label] {\n\tcolor: var(--mol_theme_text);\n\ttransform: translateY( -4px );\n}\n\n[mol_plot_mark_hor_title] {\n\tcolor: var(--mol_theme_shade);\n\ttransform: translateY( -4px );\n}\n");
})($ || ($ = {}));
//mol/plot/mark/hor/-css/hor.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_text_box extends $mol_svg_group {
        font_size() {
            return 16;
        }
        width() {
            return 0;
        }
        sub() {
            return [
                this.Back(),
                this.Text()
            ];
        }
        box_width() {
            return "0.5rem";
        }
        box_height() {
            return "1rem";
        }
        box_pos_x() {
            return this.pos_x();
        }
        box_pos_y() {
            return "0";
        }
        Back() {
            const obj = new this.$.$mol_svg_rect();
            obj.width = () => this.box_width();
            obj.height = () => this.box_height();
            obj.pos = () => [
                this.box_pos_x(),
                this.box_pos_y()
            ];
            return obj;
        }
        pos_x() {
            return "0";
        }
        pos_y() {
            return "100%";
        }
        align() {
            return "start";
        }
        text() {
            return "";
        }
        Text() {
            const obj = new this.$.$mol_svg_text();
            obj.pos = () => [
                this.pos_x(),
                this.pos_y()
            ];
            obj.align = () => this.align();
            obj.sub = () => [
                this.text()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_svg_text_box.prototype, "Back", null);
    __decorate([
        $mol_mem
    ], $mol_svg_text_box.prototype, "Text", null);
    $.$mol_svg_text_box = $mol_svg_text_box;
})($ || ($ = {}));
//mol/svg/text/box/-view.tree/box.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let canvas;
    function $mol_font_canvas(next = canvas) {
        if (!next)
            next = $mol_dom_context.document.createElement('canvas').getContext('2d');
        return canvas = next;
    }
    $.$mol_font_canvas = $mol_font_canvas;
})($ || ($ = {}));
//mol/font/canvas/canvas.ts
;
"use strict";
var $;
(function ($) {
    function $mol_font_measure(font, text) {
        const canvas = $mol_font_canvas();
        canvas.font = font;
        return canvas.measureText(text).width;
    }
    $.$mol_font_measure = $mol_font_measure;
})($ || ($ = {}));
//mol/font/measure/measure.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg_text_box extends $.$mol_svg_text_box {
            box_width() {
                return `${this.width()}px`;
            }
            width() {
                return $mol_font_measure(this.font_size() + 'px ' + this.font_family(), this.text());
            }
            box_pos_x() {
                const align = this.align();
                if (align === 'end')
                    return `calc(${this.pos_x()} - ${this.width()})`;
                if (align === 'middle')
                    return `calc(${this.pos_x()} - ${Math.round(this.width() / 2)})`;
                return this.pos_x();
            }
            box_pos_y() {
                return `calc(${this.pos_y()} - ${this.font_size() - 2})`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg_text_box.prototype, "width", null);
        $$.$mol_svg_text_box = $mol_svg_text_box;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/svg/text/box/box.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/text/box/box.view.css", "[mol_svg_text_box_back] {\n\tstroke: none;\n\tfill: var(--mol_theme_back);\n}\n");
})($ || ($ = {}));
//mol/svg/text/box/-css/box.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plot_mark_cross extends $mol_plot_graph {
        labels() {
            return [];
        }
        title_x_gap() {
            return 4;
        }
        threshold() {
            return 16;
        }
        graphs() {
            return [];
        }
        dimensions() {
            const obj = new this.$.$mol_vector_2d(this.dimensions_x(), this.dimensions_y());
            return obj;
        }
        sub() {
            return [
                this.Curve(),
                this.Label_x(),
                this.Label_y()
            ];
        }
        dimensions_x() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_y() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        curve() {
            return "";
        }
        Curve() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.curve();
            return obj;
        }
        title_x_pos_x() {
            return "0";
        }
        title_x_pos_y() {
            return "100%";
        }
        title_x() {
            return "";
        }
        Label_x() {
            const obj = new this.$.$mol_svg_text_box();
            obj.pos_x = () => this.title_x_pos_x();
            obj.pos_y = () => this.title_x_pos_y();
            obj.text = () => this.title_x();
            return obj;
        }
        title_y_pos_x() {
            return "0";
        }
        title_y_pos_y() {
            return "0";
        }
        title_y() {
            return "";
        }
        Label_y() {
            const obj = new this.$.$mol_svg_text_box();
            obj.pos_x = () => this.title_y_pos_x();
            obj.pos_y = () => this.title_y_pos_y();
            obj.text = () => this.title_y();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plot_mark_cross.prototype, "dimensions", null);
    __decorate([
        $mol_mem
    ], $mol_plot_mark_cross.prototype, "dimensions_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_mark_cross.prototype, "dimensions_y", null);
    __decorate([
        $mol_mem
    ], $mol_plot_mark_cross.prototype, "Curve", null);
    __decorate([
        $mol_mem
    ], $mol_plot_mark_cross.prototype, "Label_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_mark_cross.prototype, "Label_y", null);
    $.$mol_plot_mark_cross = $mol_plot_mark_cross;
})($ || ($ = {}));
//mol/plot/mark/cross/-view.tree/cross.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_mark_cross extends $.$mol_plot_mark_cross {
            nearest() {
                let delta = this.threshold() ** 2;
                const [cursor_x, cursor_y] = this.cursor_position();
                if (Number.isNaN(cursor_x) || Number.isNaN(cursor_y))
                    return null;
                const graphs = this.graphs();
                let index = 0;
                let graph = null;
                const [shift_x, shift_y] = this.shift();
                const [scale_x, scale_y] = this.scale();
                for (let current of graphs) {
                    const indexes = current.indexes();
                    const series_x = current.series_x();
                    const series_y = current.series_y();
                    for (let i of indexes) {
                        const point_x = shift_x + series_x[i] * scale_x;
                        const point_y = shift_y + series_y[i] * scale_y;
                        const diff = (point_x - cursor_x) ** 2 + (point_y - cursor_y) ** 2;
                        if (diff < delta) {
                            delta = diff;
                            index = i;
                            graph = current;
                        }
                    }
                }
                if (!graph)
                    return null;
                const value = new $mol_vector_2d(graph.series_x()[index], graph.series_y()[index]);
                const scaled = new $mol_vector_2d(shift_x + value.x * scale_x, shift_y + value.y * scale_y);
                return { value, scaled, index };
            }
            curve() {
                const nearest = this.nearest();
                if (!nearest)
                    return '';
                return `M ${nearest.scaled.x.toFixed(3)} 1000 V 0 M 0 ${nearest.scaled.y.toFixed(3)} H 2000`;
            }
            title_x() {
                const nearest = this.nearest();
                if (!nearest)
                    return '';
                const labels = this.labels();
                if (labels.length > nearest.index)
                    return labels[nearest.index];
                return String(nearest.value.x);
            }
            title_x_pos_x() {
                const nearest = this.nearest();
                if (!nearest)
                    return '0';
                const width = this.Label_x().width();
                return (nearest.scaled.x - width / 2).toFixed(3);
            }
            title_x_pos_y() {
                const nearest = this.nearest();
                if (!nearest)
                    return '0';
                const pos = this.size_real().y - this.title_x_gap();
                return pos.toFixed(3);
            }
            title_y() {
                const nearest = this.nearest();
                if (!nearest)
                    return '';
                return String(nearest.value.y);
            }
            title_y_pos_y() {
                const nearest = this.nearest();
                if (!nearest)
                    return '0';
                return nearest.scaled.y.toFixed(3);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_plot_mark_cross.prototype, "nearest", null);
        $$.$mol_plot_mark_cross = $mol_plot_mark_cross;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/plot/mark/cross/cross.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/mark/cross/cross.view.css", "[mol_plot_mark_cross_curve] {\n\tcolor: var(--mol_theme_focus);\n\tstroke-width: 1px;\n\tstroke: currentColor;\n\tpointer-events: none;\n}\n\n[mol_plot_mark_cross_label_x], [mol_plot_mark_cross_label_y] {\n\tcolor: var(--mol_theme_focus);\n\tfont-weight: bold;\n\tpointer-events: none;\n}\n\n[mol_plot_mark_cross_label_y] {\n\ttransform: translateY( 4px );\n}\n");
})($ || ($ = {}));
//mol/plot/mark/cross/-css/cross.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_chart_legend extends $mol_scroll {
        graphs() {
            return [];
        }
        graphs_front() {
            return [];
        }
        sub() {
            return this.graph_legends();
        }
        Graph_legend(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Graph_sample_box(id),
                this.Graph_title(id)
            ];
            return obj;
        }
        graph_legends() {
            return [];
        }
        Graph_sample(id) {
            return null;
        }
        Graph_sample_box(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Graph_sample(id)
            ];
            return obj;
        }
        graph_title(id) {
            return "";
        }
        Graph_title(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.graph_title(id)
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_chart_legend.prototype, "Graph_legend", null);
    __decorate([
        $mol_mem_key
    ], $mol_chart_legend.prototype, "Graph_sample_box", null);
    __decorate([
        $mol_mem_key
    ], $mol_chart_legend.prototype, "Graph_title", null);
    $.$mol_chart_legend = $mol_chart_legend;
})($ || ($ = {}));
//mol/chart/legend/-view.tree/legend.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_chart_legend extends $.$mol_chart_legend {
            graphs_front() {
                return this.graphs().filter(graph => graph.Sample());
            }
            graph_legends() {
                return this.graphs_front().map((graph, index) => this.Graph_legend(index));
            }
            graph_title(index) {
                return this.graphs_front()[index].title();
            }
            Graph_sample(index) {
                return this.graphs_front()[index].Sample();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_chart_legend.prototype, "graphs_front", null);
        $$.$mol_chart_legend = $mol_chart_legend;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/chart/legend/legend.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/chart/legend/legend.view.css", "[mol_chart_legend] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex-direction: row;\n\tpadding: .5rem;\n\tmargin: .5rem;\n\tflex: 0 1 auto;\n}\n\n[mol_chart_legend_graph_legend] {\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tflex: 1 1 8rem;\n\tpadding: .5rem;\n}\n\n[mol_chart_legend_graph_title] {\n\tmargin: 0 .25rem;\n\tflex: 1 1 auto;\n}\n\n[mol_chart_legend_graph_sample_box] {\n\tposition: relative;\n\twidth: 1.5rem;\n\tflex: none;\n}\n");
})($ || ($ = {}));
//mol/chart/legend/-css/legend.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_touch extends $mol_plugin {
        start_zoom(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        start_distance(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        zoom(next) {
            if (next !== undefined)
                return next;
            return 1;
        }
        allow_draw() {
            return true;
        }
        allow_pan() {
            return true;
        }
        allow_zoom() {
            return true;
        }
        action_type(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        action_point(next) {
            if (next !== undefined)
                return next;
            const obj = new this.$.$mol_vector_2d(NaN, NaN);
            return obj;
        }
        start_pan(next) {
            if (next !== undefined)
                return next;
            return [
                0,
                0
            ];
        }
        pan(next) {
            if (next !== undefined)
                return next;
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        pointer_center() {
            const obj = new this.$.$mol_vector_2d(NaN, NaN);
            return obj;
        }
        start_pos(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        swipe_precision() {
            return 16;
        }
        swipe_right(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        swipe_bottom(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        swipe_left(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        swipe_top(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        swipe_from_right(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        swipe_from_bottom(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        swipe_from_left(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        swipe_from_top(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        swipe_to_right(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        swipe_to_bottom(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        swipe_to_left(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        swipe_to_top(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        draw_start(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        draw(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        draw_end(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        style() {
            return {
                ...super.style(),
                "touch-action": "none",
                "overscroll-behavior": "none"
            };
        }
        event() {
            return {
                ...super.event(),
                pointerdown: (event) => this.event_start(event),
                pointermove: (event) => this.event_move(event),
                pointerup: (event) => this.event_end(event),
                pointerleave: (event) => this.event_leave(event),
                wheel: (event) => this.event_wheel(event)
            };
        }
        event_start(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_move(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_end(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_leave(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_wheel(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "start_zoom", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "start_distance", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "zoom", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "action_type", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "action_point", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "start_pan", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "pan", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "pointer_center", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "start_pos", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_right", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_bottom", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_left", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_top", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_from_right", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_from_bottom", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_from_left", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_from_top", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_to_right", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_to_bottom", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_to_left", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_to_top", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "draw_start", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "draw", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "draw_end", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "event_start", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "event_move", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "event_end", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "event_leave", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "event_wheel", null);
    $.$mol_touch = $mol_touch;
})($ || ($ = {}));
//mol/touch/-view.tree/touch.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_touch extends $.$mol_touch {
            auto() {
                this.pointer_events();
                this.start_pan();
                this.start_pos();
                this.start_distance();
                this.start_zoom();
                this.action_type();
                this.view_rect();
            }
            pointer_events(next = []) {
                return next;
            }
            pointer_coords() {
                const events = this.pointer_events();
                const touches = events.filter(e => e.pointerType === 'touch');
                const pens = events.filter(e => e.pointerType === 'pen');
                const mouses = events.filter(e => !e.pointerType || e.pointerType === 'mouse');
                const choosen = touches.length ? touches : pens.length ? pens : mouses;
                return new $mol_vector(...choosen.map(event => this.event_coords(event)));
            }
            pointer_center() {
                const coords = this.pointer_coords();
                return coords.length ? coords.center() : new $mol_vector_2d(NaN, NaN);
            }
            event_coords(event) {
                const { left, top } = this.view_rect();
                return new $mol_vector_2d(Math.round(event.pageX - left), Math.round(event.pageY - top));
            }
            action_point() {
                const coord = this.pointer_center();
                if (!coord)
                    return null;
                const zoom = this.zoom();
                const pan = this.pan();
                return new $mol_vector_2d((coord.x - pan.x) / zoom, (coord.y - pan.y) / zoom);
            }
            event_eat(event) {
                if (event instanceof PointerEvent) {
                    const events = this.pointer_events()
                        .filter(e => e instanceof PointerEvent)
                        .filter(e => e.pointerId !== event.pointerId);
                    if (event.type !== 'pointerup' && event.type !== 'pointerleave')
                        events.push(event);
                    this.pointer_events(events);
                    const touch_count = events.filter(e => e.pointerType === 'touch').length;
                    if (this.allow_zoom() && touch_count === 2) {
                        return this.action_type('zoom');
                    }
                    if (this.action_type() === 'zoom' && touch_count === 1) {
                        return this.action_type('zoom');
                    }
                    let button;
                    (function (button) {
                        button[button["left"] = 1] = "left";
                        button[button["right"] = 2] = "right";
                        button[button["middle"] = 4] = "middle";
                    })(button || (button = {}));
                    if (events.length > 0) {
                        if (event.ctrlKey && this.allow_zoom())
                            return this.action_type('zoom');
                        if (event.buttons === button.left && this.allow_draw())
                            return this.action_type('draw');
                        if (event.buttons && this.allow_pan())
                            return this.action_type('pan');
                    }
                    return this.action_type('');
                }
                if (event instanceof WheelEvent) {
                    this.pointer_events([event]);
                    if (event.shiftKey)
                        return this.action_type('pan');
                    return this.action_type('zoom');
                }
                return this.action_type('');
            }
            event_start(event) {
                if (event.defaultPrevented)
                    return;
                this.start_pan(this.pan());
                const action_type = this.event_eat(event);
                if (!action_type)
                    return;
                const coords = this.pointer_coords();
                this.start_pos(coords.center());
                if (action_type === 'draw') {
                    this.draw_start(event);
                    return;
                }
                this.start_distance(coords.distance());
                this.start_zoom(this.zoom());
            }
            event_move(event) {
                if (event.defaultPrevented)
                    return;
                const rect = this.view_rect();
                if (!rect)
                    return;
                const start_pan = this.start_pan();
                const action_type = this.event_eat(event);
                const start_pos = this.start_pos();
                let pos = this.pointer_center();
                if (!action_type)
                    return;
                if (!start_pos)
                    return;
                if (action_type === 'draw') {
                    const distance = new $mol_vector(start_pos, pos).distance();
                    if (distance >= 4) {
                        this.draw(event);
                    }
                    return;
                }
                if (action_type === 'pan') {
                    this.dom_node().setPointerCapture(event.pointerId);
                    this.pan(new $mol_vector_2d(start_pan[0] + pos[0] - start_pos[0], start_pan[1] + pos[1] - start_pos[1]));
                }
                const precision = this.swipe_precision();
                if ((this.swipe_right !== $mol_touch.prototype.swipe_right
                    || this.swipe_from_left !== $mol_touch.prototype.swipe_from_left
                    || this.swipe_to_right !== $mol_touch.prototype.swipe_to_right)
                    && pos[0] - start_pos[0] > precision * 2
                    && Math.abs(pos[1] - start_pos[1]) < precision) {
                    this.swipe_right(event);
                }
                if ((this.swipe_left !== $mol_touch.prototype.swipe_left
                    || this.swipe_from_right !== $mol_touch.prototype.swipe_from_right
                    || this.swipe_to_left !== $mol_touch.prototype.swipe_to_left)
                    && start_pos[0] - pos[0] > precision * 2
                    && Math.abs(pos[1] - start_pos[1]) < precision) {
                    this.swipe_left(event);
                }
                if ((this.swipe_bottom !== $mol_touch.prototype.swipe_bottom
                    || this.swipe_from_top !== $mol_touch.prototype.swipe_from_top
                    || this.swipe_to_bottom !== $mol_touch.prototype.swipe_to_bottom)
                    && pos[1] - start_pos[1] > precision * 2
                    && Math.abs(pos[0] - start_pos[0]) < precision) {
                    this.swipe_bottom(event);
                }
                if ((this.swipe_top !== $mol_touch.prototype.swipe_top
                    || this.swipe_from_bottom !== $mol_touch.prototype.swipe_from_bottom
                    || this.swipe_to_top !== $mol_touch.prototype.swipe_to_top)
                    && start_pos[1] - pos[1] > precision * 2
                    && Math.abs(pos[0] - start_pos[0]) < precision) {
                    this.swipe_top(event);
                }
                if (action_type === 'zoom') {
                    const coords = this.pointer_coords();
                    const distance = coords.distance();
                    const start_distance = this.start_distance();
                    const center = coords.center();
                    const start_zoom = this.start_zoom();
                    let mult = Math.abs(distance - start_distance) < 32 ? 1 : distance / start_distance;
                    this.zoom(start_zoom * mult);
                    const pan = new $mol_vector_2d((start_pan[0] - center[0] + pos[0] - start_pos[0]) * mult + center[0], (start_pan[1] - center[1] + pos[1] - start_pos[1]) * mult + center[1]);
                    this.pan(pan);
                }
            }
            event_end(event) {
                const action = this.action_type();
                if (action === 'draw') {
                    this.draw_end(event);
                }
                this.event_leave(event);
            }
            event_leave(event) {
                this.event_eat(event);
                this.dom_node().releasePointerCapture(event.pointerId);
                this.start_pos(null);
            }
            swipe_left(event) {
                if (this.view_rect().right - this.start_pos()[0] < this.swipe_precision() * 2)
                    this.swipe_from_right(event);
                else
                    this.swipe_to_left(event);
                this.event_end(event);
            }
            swipe_right(event) {
                if (this.start_pos()[0] - this.view_rect().left < this.swipe_precision() * 2)
                    this.swipe_from_left(event);
                else
                    this.swipe_to_right(event);
                this.event_end(event);
            }
            swipe_top(event) {
                if (this.view_rect().bottom - this.start_pos()[1] < this.swipe_precision() * 2)
                    this.swipe_from_bottom(event);
                else
                    this.swipe_to_top(event);
                this.event_end(event);
            }
            swipe_bottom(event) {
                if (this.start_pos()[1] - this.view_rect().top < this.swipe_precision() * 2)
                    this.swipe_from_top(event);
                else
                    this.swipe_to_bottom(event);
                this.event_end(event);
            }
            event_wheel(event) {
                if (event.defaultPrevented)
                    return;
                if (this.pan === $mol_touch.prototype.pan && this.zoom === $mol_touch.prototype.zoom)
                    return;
                if (this.pan !== $mol_touch.prototype.pan) {
                    event.preventDefault();
                }
                const action_type = this.event_eat(event);
                if (action_type === 'zoom') {
                    const zoom_prev = this.zoom() || 0.001;
                    const zoom_next = zoom_prev * (1 - .001 * Math.min(event.deltaY, 100));
                    const mult = zoom_next / zoom_prev;
                    this.zoom(zoom_next);
                    const pan_prev = this.pan();
                    const center = this.pointer_center();
                    const pan_next = pan_prev.multed0(mult).added1(center.multed0(1 - mult));
                    this.pan(pan_next);
                }
                if (action_type === 'pan') {
                    const pan_prev = this.pan();
                    const pan_next = new $mol_vector_2d(pan_prev.x - event.deltaX, pan_prev.y - event.deltaY);
                    this.pan(pan_next);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_touch.prototype, "pointer_events", null);
        __decorate([
            $mol_mem
        ], $mol_touch.prototype, "pointer_coords", null);
        __decorate([
            $mol_mem
        ], $mol_touch.prototype, "pointer_center", null);
        __decorate([
            $mol_mem
        ], $mol_touch.prototype, "action_point", null);
        $$.$mol_touch = $mol_touch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/touch/touch.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plot_pane extends $mol_svg_root {
        aspect() {
            return "none";
        }
        hue_base(next) {
            if (next !== undefined)
                return next;
            return +NaN;
        }
        hue_shift(next) {
            if (next !== undefined)
                return next;
            return 111;
        }
        gap_hor() {
            return 48;
        }
        gap_vert() {
            return 24;
        }
        gap_left() {
            return this.gap_hor();
        }
        gap_right() {
            return this.gap_hor();
        }
        gap_top() {
            return this.gap_vert();
        }
        gap_bottom() {
            return this.gap_vert();
        }
        gap() {
            const obj = new this.$.$mol_vector_2d(this.gap_x(), this.gap_y());
            return obj;
        }
        shift_limit() {
            const obj = new this.$.$mol_vector_2d(this.shift_limit_x(), this.shift_limit_y());
            return obj;
        }
        shift_default() {
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        shift(next) {
            if (next !== undefined)
                return next;
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        scale_limit() {
            const obj = new this.$.$mol_vector_2d(this.scale_limit_x(), this.scale_limit_y());
            return obj;
        }
        scale_default() {
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        scale(next) {
            if (next !== undefined)
                return next;
            const obj = new this.$.$mol_vector_2d(1, -1);
            return obj;
        }
        scale_x(next) {
            if (next !== undefined)
                return next;
            return 1;
        }
        scale_y(next) {
            if (next !== undefined)
                return next;
            return -1;
        }
        size() {
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        size_real() {
            const obj = new this.$.$mol_vector_2d(1, 1);
            return obj;
        }
        dimensions() {
            const obj = new this.$.$mol_vector_2d(this.dimensions_x(), this.dimensions_y());
            return obj;
        }
        dimensions_viewport() {
            const obj = new this.$.$mol_vector_2d(this.dimensions_viewport_x(), this.dimensions_viewport_y());
            return obj;
        }
        sub() {
            return this.graphs_sorted();
        }
        graphs_colored() {
            return this.graphs_visible();
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Touch()
            ];
        }
        gap_x() {
            const obj = new this.$.$mol_vector_range(this.gap_left(), this.gap_right());
            return obj;
        }
        gap_y() {
            const obj = new this.$.$mol_vector_range(this.gap_bottom(), this.gap_top());
            return obj;
        }
        shift_limit_x() {
            const obj = new this.$.$mol_vector_range(0, 0);
            return obj;
        }
        shift_limit_y() {
            const obj = new this.$.$mol_vector_range(0, 0);
            return obj;
        }
        scale_limit_x() {
            const obj = new this.$.$mol_vector_range(0, Infinity);
            return obj;
        }
        scale_limit_y() {
            const obj = new this.$.$mol_vector_range(0, -Infinity);
            return obj;
        }
        dimensions_x() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_y() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_viewport_x() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_viewport_y() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        graphs_sorted() {
            return [];
        }
        graphs() {
            return [];
        }
        graphs_positioned() {
            return this.graphs();
        }
        graphs_visible() {
            return this.graphs_positioned();
        }
        zoom(next) {
            if (next !== undefined)
                return next;
            return 1;
        }
        allow_draw() {
            return true;
        }
        allow_pan() {
            return true;
        }
        allow_zoom() {
            return true;
        }
        draw_start(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        draw(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        draw_end(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        cursor_position() {
            return this.Touch().pointer_center();
        }
        action_type() {
            return this.Touch().action_type();
        }
        action_point() {
            return this.Touch().action_point();
        }
        Touch() {
            const obj = new this.$.$mol_touch();
            obj.zoom = (next) => this.zoom(next);
            obj.pan = (next) => this.shift(next);
            obj.allow_draw = () => this.allow_draw();
            obj.allow_pan = () => this.allow_pan();
            obj.allow_zoom = () => this.allow_zoom();
            obj.draw_start = (event) => this.draw_start(event);
            obj.draw = (event) => this.draw(event);
            obj.draw_end = (event) => this.draw_end(event);
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "hue_base", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "hue_shift", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "gap", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "shift_limit", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "shift_default", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "shift", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "scale_limit", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "scale_default", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "scale", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "scale_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "scale_y", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "size", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "size_real", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "dimensions", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "dimensions_viewport", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "gap_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "gap_y", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "shift_limit_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "shift_limit_y", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "scale_limit_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "scale_limit_y", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "dimensions_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "dimensions_y", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "dimensions_viewport_x", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "dimensions_viewport_y", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "zoom", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "draw_start", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "draw", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "draw_end", null);
    __decorate([
        $mol_mem
    ], $mol_plot_pane.prototype, "Touch", null);
    $.$mol_plot_pane = $mol_plot_pane;
})($ || ($ = {}));
//mol/plot/pane/-view.tree/pane.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_pane extends $.$mol_plot_pane {
            dimensions() {
                const graphs = this.graphs();
                let next = new this.$.$mol_vector_2d($mol_vector_range_full.inversed, $mol_vector_range_full.inversed);
                for (let graph of graphs) {
                    next = next.expanded2(graph.dimensions());
                }
                return next;
            }
            size() {
                const dims = this.dimensions();
                return new this.$.$mol_vector_2d((dims.x.max - dims.x.min) || 1, (dims.y.max - dims.y.min) || 1);
            }
            graph_hue(index) {
                return (360 + (this.hue_base() + this.hue_shift() * index) % 360) % 360;
            }
            graphs_colored() {
                const graphs = this.graphs_visible();
                for (let index = 0; index < graphs.length; index++) {
                    graphs[index].hue = () => this.graph_hue(index);
                }
                return graphs;
            }
            size_real() {
                const rect = this.view_rect();
                if (!rect)
                    return new this.$.$mol_vector_2d(1, 1);
                return new this.$.$mol_vector_2d(rect.width, rect.height);
            }
            view_box() {
                const size = this.size_real();
                return `0 0 ${size.x} ${size.y}`;
            }
            scale_limit() {
                const { x: { max: right }, y: { max: top } } = super.scale_limit();
                const gap = this.gap();
                const size = this.size();
                const real = this.size_real();
                const left = +(real.x - gap.x.min - gap.x.max) / size.x;
                const bottom = -(real.y - gap.y.max - gap.y.min) / size.y;
                return new this.$.$mol_vector_2d(new this.$.$mol_vector_range(left, right), new this.$.$mol_vector_range(top, bottom));
            }
            scale_default() {
                const limits = this.scale_limit();
                return new $mol_vector_2d(limits.x.min, limits.y.max);
            }
            scale(next) {
                if (next === undefined) {
                    if (!this.graph_touched)
                        return this.scale_default();
                    next = $mol_mem_cached(() => this.scale()) ?? this.scale_default();
                }
                this.graph_touched = true;
                return next.limited(this.scale_limit());
            }
            scale_x(next) {
                return this.scale(next === undefined
                    ? undefined
                    : new $mol_vector_2d(next, this.scale().y)).x;
            }
            scale_y(next) {
                return this.scale(next === undefined
                    ? undefined
                    : new $mol_vector_2d(this.scale().x, next)).y;
            }
            shift_limit() {
                const dims = this.dimensions();
                const [scale_x, scale_y] = this.scale();
                const size = this.size_real();
                const gap = this.gap();
                const left = gap.x.min - dims.x.min * scale_x;
                const right = size.x - gap.x.max - dims.x.max * scale_x;
                const top = gap.y.max - dims.y.max * scale_y;
                const bottom = size.y - gap.y.min - dims.y.min * scale_y;
                return new this.$.$mol_vector_2d(new this.$.$mol_vector_range(right, left), new this.$.$mol_vector_range(bottom, top));
            }
            shift_default() {
                const limits = this.shift_limit();
                return new $mol_vector_2d(limits.x.min, limits.y.min);
            }
            graph_touched = false;
            shift(next) {
                if (next === undefined) {
                    if (!this.graph_touched)
                        return this.shift_default();
                    next = $mol_mem_cached(() => this.shift()) ?? this.shift_default();
                }
                this.graph_touched = true;
                return next.limited(this.shift_limit());
            }
            reset(event) {
                this.graph_touched = false;
                this.scale(this.scale_default());
                this.shift(this.shift_default());
            }
            graphs_visible() {
                const viewport = this.dimensions_viewport();
                const size_real = this.size_real();
                const max_x = (viewport.x.max - viewport.x.min) / size_real.x;
                const max_y = (viewport.y.max - viewport.y.min) / size_real.y;
                return this.graphs_positioned().filter(graph => {
                    const dims = graph.dimensions();
                    if (dims.x.min > dims.x.max)
                        return true;
                    if (dims.y.min > dims.y.max)
                        return true;
                    const size_x = dims.x.max - dims.x.min;
                    const size_y = dims.y.max - dims.y.min;
                    if ((size_x || size_y) && size_x < max_x && size_y < max_y)
                        return false;
                    if (dims.x.min > viewport.x.max)
                        return false;
                    if (dims.x.max < viewport.x.min)
                        return false;
                    if (dims.y.min > viewport.y.max)
                        return false;
                    if (dims.y.max < viewport.y.min)
                        return false;
                    return true;
                });
            }
            graphs_positioned() {
                const graphs = this.graphs();
                for (let graph of graphs) {
                    graph.shift = () => this.shift();
                    graph.scale = () => this.scale();
                    graph.dimensions_pane = () => this.dimensions_viewport();
                    graph.viewport = () => this.viewport();
                    graph.size_real = () => this.size_real();
                    graph.cursor_position = () => this.cursor_position();
                    graph.gap = () => this.gap();
                }
                return graphs;
            }
            dimensions_viewport() {
                const shift = this.shift().multed0(-1);
                const scale = this.scale().powered0(-1);
                return this.viewport().map((range, i) => range.added0(shift[i]).multed0(scale[i]).sort((a, b) => a - b));
            }
            viewport() {
                const size = this.size_real();
                return new this.$.$mol_vector_2d(new this.$.$mol_vector_range(0, size.x), new this.$.$mol_vector_range(0, size.y));
            }
            graphs_sorted() {
                const graphs = this.graphs_colored();
                const sorted = [];
                for (let graph of graphs)
                    sorted.push(...graph.back());
                for (let graph of graphs)
                    sorted.push(...graph.front());
                return sorted;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "dimensions", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "size", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "graphs_colored", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "scale_limit", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "scale", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "shift_limit", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "shift_default", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "shift", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "graphs_visible", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "graphs_positioned", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "dimensions_viewport", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "viewport", null);
        __decorate([
            $mol_mem
        ], $mol_plot_pane.prototype, "graphs_sorted", null);
        $$.$mol_plot_pane = $mol_plot_pane;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/plot/pane/pane.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/plot/pane/pane.view.css", "[mol_plot_pane] {\n\tcolor: var(--mol_theme_control);\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tstroke-width: 2px;\n\tuser-select: none;\n}\n");
})($ || ($ = {}));
//mol/plot/pane/-css/pane.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_chart extends $mol_view {
        gap_hor() {
            return 48;
        }
        gap_vert() {
            return 24;
        }
        gap_left() {
            return this.gap_hor();
        }
        gap_right() {
            return this.gap_hor();
        }
        gap_bottom() {
            return this.gap_vert();
        }
        gap_top() {
            return this.gap_vert();
        }
        graphs() {
            return [];
        }
        sub() {
            return [
                this.Legend(),
                this.Plot()
            ];
        }
        Legend() {
            const obj = new this.$.$mol_chart_legend();
            obj.graphs = () => this.graphs_colored();
            return obj;
        }
        hue_base() {
            return 140;
        }
        hue_shift() {
            return 111;
        }
        zoom(next) {
            return this.Plot().scale_x(next);
        }
        graphs_colored() {
            return this.Plot().graphs_colored();
        }
        Plot() {
            const obj = new this.$.$mol_plot_pane();
            obj.zoom = (next) => this.zoom(next);
            obj.gap_left = () => this.gap_left();
            obj.gap_right = () => this.gap_right();
            obj.gap_bottom = () => this.gap_bottom();
            obj.gap_top = () => this.gap_top();
            obj.graphs = () => this.graphs();
            obj.hue_base = () => this.hue_base();
            obj.hue_shift = () => this.hue_shift();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_chart.prototype, "Legend", null);
    __decorate([
        $mol_mem
    ], $mol_chart.prototype, "Plot", null);
    $.$mol_chart = $mol_chart;
})($ || ($ = {}));
//mol/chart/-view.tree/chart.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/chart/chart.view.css", "[mol_chart] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-self: stretch;\n\tflex: 1 1 auto;\n}\n\n[mol_chart_plot] {\n\tflex: 1 0 50%;\n\tmargin: .5rem;\n}\n");
})($ || ($ = {}));
//mol/chart/-css/chart.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $dosha_client_rating extends $mol_page {
        title() {
            return "🏅 Рейтинг";
        }
        body() {
            return [
                this.Month_title(),
                this.Chart()
            ];
        }
        Month_title() {
            const obj = new this.$.$mol_text();
            obj.text = () => "Рейтинг людей за месяц";
            return obj;
        }
        plan_title() {
            return "Plan";
        }
        plan() {
            return [
                10,
                20,
                30,
                40
            ];
        }
        Plan() {
            const obj = new this.$.$mol_plot_bar();
            obj.title = () => this.plan_title();
            obj.series_y = () => this.plan();
            return obj;
        }
        fact_title() {
            return "Fact";
        }
        facts() {
            return [
                5,
                10,
                30
            ];
        }
        Fact_line() {
            const obj = new this.$.$mol_plot_line();
            return obj;
        }
        Fact_dots() {
            const obj = new this.$.$mol_plot_dot();
            return obj;
        }
        Fact() {
            const obj = new this.$.$mol_plot_group();
            obj.title = () => this.fact_title();
            obj.series_y = () => this.facts();
            obj.graphs = () => [
                this.Fact_line(),
                this.Fact_dots()
            ];
            return obj;
        }
        vert_title() {
            return "pcs";
        }
        Vert_ruler() {
            const obj = new this.$.$mol_plot_ruler_vert();
            obj.title = () => this.vert_title();
            return obj;
        }
        marker_hor_title() {
            return "Months";
        }
        months() {
            return [
                "January",
                "February",
                "March",
                "April"
            ];
        }
        Marker_hor() {
            const obj = new this.$.$mol_plot_mark_hor();
            obj.title = () => this.marker_hor_title();
            obj.labels = () => this.months();
            return obj;
        }
        Marker_cross() {
            const obj = new this.$.$mol_plot_mark_cross();
            obj.labels = () => this.months();
            obj.graphs = () => [
                this.Plan(),
                this.Fact_dots()
            ];
            return obj;
        }
        Chart() {
            const obj = new this.$.$mol_chart();
            obj.graphs = () => [
                this.Plan(),
                this.Fact(),
                this.Vert_ruler(),
                this.Marker_hor(),
                this.Marker_cross()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $dosha_client_rating.prototype, "Month_title", null);
    __decorate([
        $mol_mem
    ], $dosha_client_rating.prototype, "Plan", null);
    __decorate([
        $mol_mem
    ], $dosha_client_rating.prototype, "Fact_line", null);
    __decorate([
        $mol_mem
    ], $dosha_client_rating.prototype, "Fact_dots", null);
    __decorate([
        $mol_mem
    ], $dosha_client_rating.prototype, "Fact", null);
    __decorate([
        $mol_mem
    ], $dosha_client_rating.prototype, "Vert_ruler", null);
    __decorate([
        $mol_mem
    ], $dosha_client_rating.prototype, "Marker_hor", null);
    __decorate([
        $mol_mem
    ], $dosha_client_rating.prototype, "Marker_cross", null);
    __decorate([
        $mol_mem
    ], $dosha_client_rating.prototype, "Chart", null);
    $.$dosha_client_rating = $dosha_client_rating;
})($ || ($ = {}));
//dosha/client/rating/-view.tree/rating.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $dosha_client_city extends $mol_page {
        title() {
            return "🏓 Ваш город";
        }
        body() {
            return [
                this.City_label()
            ];
        }
        City_label() {
            const obj = new this.$.$mol_text();
            obj.text = () => "Найдите совместные увлечения в вашем городе";
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $dosha_client_city.prototype, "City_label", null);
    $.$dosha_client_city = $dosha_client_city;
})($ || ($ = {}));
//dosha/client/city/-view.tree/city.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_book2 extends $mol_scroll {
        menu_title() {
            return "";
        }
        sub() {
            return this.pages();
        }
        minimal_width() {
            return 0;
        }
        Placeholder() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap(id) {
            const obj = new this.$.$mol_view();
            obj.title = () => "";
            return obj;
        }
        pages() {
            return [];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_book2.prototype, "Placeholder", null);
    __decorate([
        $mol_mem_key
    ], $mol_book2.prototype, "Gap", null);
    $.$mol_book2 = $mol_book2;
})($ || ($ = {}));
//mol/book2/-view.tree/book2.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2 extends $.$mol_book2 {
            title() {
                return this.pages().map(page => {
                    try {
                        return page?.title();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                    }
                }).reverse().filter(Boolean).join(' | ');
            }
            menu_title() {
                return this.pages()[0]?.title() || this.title();
            }
            sub() {
                const next = [...this.pages(), this.Placeholder()];
                const prev = $mol_mem_cached(() => this.sub()) ?? [];
                for (let i = 1; i++;) {
                    const p = prev[prev.length - i];
                    const n = next[next.length - i];
                    if (!n)
                        break;
                    if (p === n)
                        continue;
                    n.bring();
                    break;
                }
                return next;
            }
            bring() {
                const pages = this.pages();
                if (pages.length)
                    pages[pages.length - 1].bring();
                else
                    super.bring();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_book2.prototype, "sub", null);
        $$.$mol_book2 = $mol_book2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/book2/book2.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/book2/book2.view.css", "[mol_book2] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n\t/* transform: translateZ(0); */\n\ttransition: none;\n\toverflow: overlay;\n\tscroll-snap-type: x mandatory;\n\tpadding: 0 1px;\n\tscroll-padding: 0 1px;\n\tgap: 1px;\n}\n\n[mol_book2] > * {\n/* \tflex: none; */\n\tscroll-snap-stop: always;\n\tscroll-snap-align: end;\n\tposition: relative;\n\tmin-height: 100%;\n\tmax-height: 100%;\n\tmax-width: 100%;\n\tflex-shrink: 0;\n}\n\n[mol_book2] > *:not(:first-of-type):before,\n[mol_book2] > *:not(:last-of-type)::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 1.5rem;\n\twidth: 1px;\n\theight: 1rem;\n\tbackground: var(--mol_theme_focus);\n\tborder-radius: var(--mol_gap_round);\n\topacity: .5;\n}\n[mol_book2] > *:not(:first-of-type):before {\n\tleft: -1px;\n}\n[mol_book2] > *:not(:last-of-type)::after {\n\tright: -1px;\n}\n\n:where([mol_book2]) > * {\n\tbackground-color: var(--mol_theme_card);\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_back); */\n}\n\n[mol_book2] > [mol_book2] {\n\tdisplay: contents;\n}\n\n[mol_book2] > *:first-child {\n\tscroll-snap-align: start;\n}\n\n[mol_book2] > [mol_view] {\n\ttransform: none; /* prevent content clipping */\n}\n\n[mol_book2_placeholder] {\n\tflex: 1 1 0;\n\tbackground: none;\n}\n\n[mol_book2_gap] {\n\tbackground: none;\n\tflex-grow: 1;\n\tscroll-snap-align: none;\n\tmargin-right: -1px;\n\tbox-shadow: none;\n}\n\n[mol_book2_gap]::before,\n[mol_book2_gap]::after {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//mol/book2/-css/book2.view.css.ts
;
"use strict";
let $hyoo_sync_revision = "bccfe4d";
//hyoo/sync/-meta.tree/revision.meta.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_int62_string_ensure(str) {
        if (typeof str !== 'string')
            return null;
        return $mol_int62_from_string(str) && str;
    }
    $.$mol_int62_string_ensure = $mol_int62_string_ensure;
    $.$mol_int62_max = (2 ** 30) - 1;
    $.$mol_int62_min = -(2 ** 30);
    $.$mol_int62_range = $.$mol_int62_max - $.$mol_int62_min + 1;
    function $mol_int62_to_string({ lo, hi }) {
        lo = (lo + $.$mol_int62_range) % $.$mol_int62_range;
        hi = (hi + $.$mol_int62_range) % $.$mol_int62_range;
        return lo.toString(36) + '_' + hi.toString(36);
    }
    $.$mol_int62_to_string = $mol_int62_to_string;
    function $mol_int62_from_string(str) {
        const [str_lo, str_hi] = str.split('_');
        const int_lo = parseInt(str_lo, 36);
        const int_hi = parseInt(str_hi, 36);
        if (int_lo.toString(36) !== str_lo || int_hi.toString(36) !== str_hi) {
            return null;
        }
        return {
            lo: (int_lo - $.$mol_int62_min) % $.$mol_int62_range + $.$mol_int62_min,
            hi: (int_hi - $.$mol_int62_min) % $.$mol_int62_range + $.$mol_int62_min,
        };
    }
    $.$mol_int62_from_string = $mol_int62_from_string;
    function $mol_int62_compare(left_lo, left_hi, right_lo, right_hi) {
        return (right_hi - left_hi) || (right_lo - left_lo);
    }
    $.$mol_int62_compare = $mol_int62_compare;
    function $mol_int62_inc(lo, hi, max = $.$mol_int62_max) {
        if (lo === max) {
            return { lo: -max, hi: hi + 1 };
        }
        else {
            return { lo: lo + 1, hi };
        }
    }
    $.$mol_int62_inc = $mol_int62_inc;
    function $mol_int62_random() {
        return {
            lo: Math.floor(Math.random() * $.$mol_int62_range + $.$mol_int62_min),
            hi: Math.floor(Math.random() * $.$mol_int62_range + $.$mol_int62_min),
        };
    }
    $.$mol_int62_random = $mol_int62_random;
    function $mol_int62_hash_string(str) {
        return $mol_int62_to_string($mol_int62_hash_buffer($mol_charset_encode(str)));
    }
    $.$mol_int62_hash_string = $mol_int62_hash_string;
    function $mol_int62_hash_buffer(buf, seed = { lo: 0, hi: 0 }) {
        let h1 = 0xdeadbeef ^ seed.lo;
        let h2 = 0x41c6ce57 ^ seed.hi;
        for (const byte of buf) {
            h1 = Math.imul(h1 ^ byte, 2654435761);
            h2 = Math.imul(h2 ^ byte, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        return { lo: h1 << 1 >> 1, hi: h2 << 1 >> 1 };
    }
    $.$mol_int62_hash_buffer = $mol_int62_hash_buffer;
})($ || ($ = {}));
//mol/int62/int62.ts
;
"use strict";
//mol/data/value/value.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_setup(value, config) {
        return Object.assign(value, {
            config,
            Value: null
        });
    }
    $.$mol_data_setup = $mol_data_setup;
})($ || ($ = {}));
//mol/data/setup/setup.ts
;
"use strict";
var $;
(function ($) {
    function $mol_diff_path(...paths) {
        const limit = Math.min(...paths.map(path => path.length));
        lookup: for (var i = 0; i < limit; ++i) {
            const first = paths[0][i];
            for (let j = 1; j < paths.length; ++j) {
                if (paths[j][i] !== first)
                    break lookup;
            }
        }
        return {
            prefix: paths[0].slice(0, i),
            suffix: paths.map(path => path.slice(i)),
        };
    }
    $.$mol_diff_path = $mol_diff_path;
})($ || ($ = {}));
//mol/diff/path/path.ts
;
"use strict";
var $;
(function ($) {
    class $mol_error_mix extends Error {
        errors;
        constructor(message, ...errors) {
            super(message);
            this.errors = errors;
            if (errors.length) {
                const stacks = [...errors.map(error => error.stack), this.stack];
                const diff = $mol_diff_path(...stacks.map(stack => {
                    if (!stack)
                        return [];
                    return stack.split('\n').reverse();
                }));
                const head = diff.prefix.reverse().join('\n');
                const tails = diff.suffix.map(path => path.reverse().map(line => line.replace(/^(?!\s+at)/, '\tat (.) ')).join('\n')).join('\n\tat (.) -----\n');
                this.stack = `Error: ${this.constructor.name}\n\tat (.) /"""\\\n${tails}\n\tat (.) \\___/\n${head}`;
                this.message += errors.map(error => '\n' + error.message).join('');
            }
        }
        toJSON() {
            return this.message;
        }
    }
    $.$mol_error_mix = $mol_error_mix;
})($ || ($ = {}));
//mol/error/mix/mix.ts
;
"use strict";
var $;
(function ($) {
    class $mol_data_error extends $mol_error_mix {
    }
    $.$mol_data_error = $mol_data_error;
})($ || ($ = {}));
//mol/data/error/error.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_enum(name, dict) {
        const index = {};
        for (let key in dict) {
            if (Number.isNaN(Number(key))) {
                index[dict[key]] = key;
            }
        }
        return $mol_data_setup((value) => {
            if (typeof index[value] !== 'string') {
                return $mol_fail(new $mol_data_error(`${value} is not value of ${name} enum`));
            }
            return value;
        }, { name, dict });
    }
    $.$mol_data_enum = $mol_data_enum;
})($ || ($ = {}));
//mol/data/enum/enum.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_crypto_native = crypto;
})($ || ($ = {}));
//mol/crypto/native/native.web.ts
;
"use strict";
var $;
(function ($) {
    const algorithm = {
        name: 'ECDSA',
        hash: 'SHA-256',
        namedCurve: "P-256",
    };
    async function $mol_crypto_auditor_pair() {
        const pair = await $mol_crypto_native.subtle.generateKey(algorithm, true, ['sign', 'verify']);
        return {
            public: new $mol_crypto_auditor_public(pair.publicKey),
            private: new $mol_crypto_auditor_private(pair.privateKey),
        };
    }
    $.$mol_crypto_auditor_pair = $mol_crypto_auditor_pair;
    class $mol_crypto_auditor_public extends Object {
        native;
        static size = 86;
        constructor(native) {
            super();
            this.native = native;
        }
        static async from(serial) {
            return new this(await $mol_crypto_native.subtle.importKey('jwk', {
                crv: "P-256",
                ext: true,
                key_ops: ['verify'],
                kty: "EC",
                x: serial.slice(0, 43),
                y: serial.slice(43, 86),
            }, algorithm, true, ['verify']));
        }
        async serial() {
            const { x, y } = await $mol_crypto_native.subtle.exportKey('jwk', this.native);
            return x + y;
        }
        async verify(data, sign) {
            return await $mol_crypto_native.subtle.verify(algorithm, this.native, sign, data);
        }
    }
    $.$mol_crypto_auditor_public = $mol_crypto_auditor_public;
    class $mol_crypto_auditor_private extends Object {
        native;
        static size = 129;
        constructor(native) {
            super();
            this.native = native;
        }
        static async from(serial) {
            return new this(await $mol_crypto_native.subtle.importKey('jwk', {
                crv: "P-256",
                ext: true,
                key_ops: ['sign'],
                kty: "EC",
                x: serial.slice(0, 43),
                y: serial.slice(43, 86),
                d: serial.slice(86, 129),
            }, algorithm, true, ['sign']));
        }
        async serial() {
            const { x, y, d } = await $mol_crypto_native.subtle.exportKey('jwk', this.native);
            return x + y + d;
        }
        async sign(data) {
            return await $mol_crypto_native.subtle.sign(algorithm, this.native, data);
        }
        async public() {
            return await $mol_crypto_auditor_public.from($mol_crypto_auditor_private_to_public(await this.serial()));
        }
    }
    $.$mol_crypto_auditor_private = $mol_crypto_auditor_private;
    $.$mol_crypto_auditor_sign_size = 64;
    function $mol_crypto_auditor_private_to_public(serial) {
        return serial.slice(0, 86);
    }
    $.$mol_crypto_auditor_private_to_public = $mol_crypto_auditor_private_to_public;
})($ || ($ = {}));
//mol/crypto/auditor/auditor.ts
;
"use strict";
var $;
(function ($) {
    let $hyoo_crowd_peer_level;
    (function ($hyoo_crowd_peer_level) {
        $hyoo_crowd_peer_level[$hyoo_crowd_peer_level["get"] = 0] = "get";
        $hyoo_crowd_peer_level[$hyoo_crowd_peer_level["add"] = 1] = "add";
        $hyoo_crowd_peer_level[$hyoo_crowd_peer_level["mod"] = 2] = "mod";
        $hyoo_crowd_peer_level[$hyoo_crowd_peer_level["law"] = 3] = "law";
    })($hyoo_crowd_peer_level = $.$hyoo_crowd_peer_level || ($.$hyoo_crowd_peer_level = {}));
    class $hyoo_crowd_peer extends Object {
        key_public;
        key_public_serial;
        key_private;
        key_private_serial;
        id;
        constructor(key_public, key_public_serial, key_private, key_private_serial) {
            super();
            this.key_public = key_public;
            this.key_public_serial = key_public_serial;
            this.key_private = key_private;
            this.key_private_serial = key_private_serial;
            this.id = $mol_int62_hash_string(this.key_public_serial);
        }
        static async generate() {
            const pair = await $$.$mol_crypto_auditor_pair();
            const serial = await pair.private.serial();
            return new this(pair.public, $mol_crypto_auditor_private_to_public(serial), pair.private, serial);
        }
        static async restore(serial) {
            return new this(await $$.$mol_crypto_auditor_public.from(serial), $mol_crypto_auditor_private_to_public(serial), await $$.$mol_crypto_auditor_private.from(serial), serial);
        }
    }
    $.$hyoo_crowd_peer = $hyoo_crowd_peer;
})($ || ($ = {}));
//hyoo/crowd/peer/peer.ts
;
"use strict";
var $;
(function ($) {
    const level = $mol_data_enum('level', $hyoo_crowd_peer_level);
    let $hyoo_crowd_unit_kind;
    (function ($hyoo_crowd_unit_kind) {
        $hyoo_crowd_unit_kind[$hyoo_crowd_unit_kind["grab"] = 0] = "grab";
        $hyoo_crowd_unit_kind[$hyoo_crowd_unit_kind["join"] = 1] = "join";
        $hyoo_crowd_unit_kind[$hyoo_crowd_unit_kind["give"] = 2] = "give";
        $hyoo_crowd_unit_kind[$hyoo_crowd_unit_kind["data"] = 3] = "data";
    })($hyoo_crowd_unit_kind = $.$hyoo_crowd_unit_kind || ($.$hyoo_crowd_unit_kind = {}));
    let $hyoo_crowd_unit_group;
    (function ($hyoo_crowd_unit_group) {
        $hyoo_crowd_unit_group[$hyoo_crowd_unit_group["auth"] = 0] = "auth";
        $hyoo_crowd_unit_group[$hyoo_crowd_unit_group["data"] = 1] = "data";
    })($hyoo_crowd_unit_group = $.$hyoo_crowd_unit_group || ($.$hyoo_crowd_unit_group = {}));
    class $hyoo_crowd_unit extends Object {
        land;
        auth;
        head;
        self;
        next;
        prev;
        time;
        data;
        bin;
        constructor(land, auth, head, self, next, prev, time, data, bin) {
            super();
            this.land = land;
            this.auth = auth;
            this.head = head;
            this.self = self;
            this.next = next;
            this.prev = prev;
            this.time = time;
            this.data = data;
            this.bin = bin;
        }
        kind() {
            if (this.head === this.self && this.auth === this.self) {
                if (this.head === this.land) {
                    return $hyoo_crowd_unit_kind.grab;
                }
                else {
                    return $hyoo_crowd_unit_kind.join;
                }
            }
            if (this.head === this.land) {
                return $hyoo_crowd_unit_kind.give;
            }
            return $hyoo_crowd_unit_kind.data;
        }
        group() {
            return this.kind() === $hyoo_crowd_unit_kind.data
                ? $hyoo_crowd_unit_group.data
                : $hyoo_crowd_unit_group.auth;
        }
        level() {
            switch (this.kind()) {
                case $hyoo_crowd_unit_kind.grab: return $hyoo_crowd_peer_level.law;
                case $hyoo_crowd_unit_kind.give: return level(this.data);
                default: $mol_fail(new Error(`Wrong unit kind for getting level: ${this.kind()}`));
            }
        }
        [Symbol.toPrimitive]() {
            return JSON.stringify(this);
        }
        [$mol_dev_format_head]() {
            switch (this.kind()) {
                case $hyoo_crowd_unit_kind.grab:
                    return $mol_dev_format_div({}, $mol_dev_format_native(this), ' 👑');
                case $hyoo_crowd_unit_kind.join:
                    return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(' 🔑 ', this.self));
                case $hyoo_crowd_unit_kind.give:
                    return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(' 🏅 ', this.self, ' '), $mol_dev_format_native($hyoo_crowd_peer_level[this.data] ?? this.data));
                case $hyoo_crowd_unit_kind.data:
                    return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(' 📦 ', this.head, '!', this.self, ' '), $mol_dev_format_native(this.data));
            }
        }
    }
    $.$hyoo_crowd_unit = $hyoo_crowd_unit;
    const offset = {
        land_lo: 0,
        land_hi: 4,
        auth_lo: 8,
        auth_hi: 12,
        head_lo: 16,
        head_hi: 20,
        self_lo: 24,
        self_hi: 28,
        next_lo: 32,
        next_hi: 36,
        prev_lo: 40,
        prev_hi: 44,
        time: 48,
        size: 54,
        data: 56,
    };
    class $hyoo_crowd_unit_bin extends DataView {
        static from_buffer(buffer) {
            const size = Math.ceil(Math.abs(buffer[offset.size / 2]) / 8) * 8 + offset.data + $mol_crypto_auditor_sign_size;
            return new this(buffer.slice(0, size / 2).buffer);
        }
        static from_unit(unit) {
            if (unit.bin)
                return unit.bin;
            const type = unit.data === null
                ? 0
                : unit.data instanceof Uint8Array
                    ? -1
                    : 1;
            const buff = type === 0 ? null
                : type > 0 ? $mol_charset_encode(JSON.stringify(unit.data))
                    : unit.data;
            const size = buff?.byteLength ?? 0;
            if (type > 0 && size > 2 ** 15 - 1)
                throw new Error(`Too large json data: ${size} > ${2 ** 15 - 1}`);
            if (type < 0 && size > 2 ** 15)
                throw new Error(`Too large binary data: ${size} > ${2 ** 15}`);
            const total = offset.data + Math.ceil(size / 8) * 8 + $mol_crypto_auditor_sign_size;
            const mem = new Uint8Array(total);
            const bin = new $hyoo_crowd_unit_bin(mem.buffer);
            const land = $mol_int62_from_string(unit.land);
            bin.setInt32(offset.land_lo, land.lo, true);
            bin.setInt32(offset.land_hi, land.hi, true);
            const auth = $mol_int62_from_string(unit.auth);
            bin.setInt32(offset.auth_lo, auth.lo, true);
            bin.setInt32(offset.auth_hi, auth.hi, true);
            const head = $mol_int62_from_string(unit.head);
            bin.setInt32(offset.head_lo, head.lo, true);
            bin.setInt32(offset.head_hi, head.hi, true);
            const self = $mol_int62_from_string(unit.self);
            bin.setInt32(offset.self_lo, self.lo, true);
            bin.setInt32(offset.self_hi, self.hi, true);
            const next = $mol_int62_from_string(unit.next);
            bin.setInt32(offset.next_lo, next.lo, true);
            bin.setInt32(offset.next_hi, next.hi, true);
            const prev = $mol_int62_from_string(unit.prev);
            bin.setInt32(offset.prev_lo, prev.lo, true);
            bin.setInt32(offset.prev_hi, prev.hi, true);
            bin.setInt32(offset.time, unit.time, true);
            bin.setInt16(offset.size, type * size, true);
            if (buff)
                mem.set(buff, offset.data);
            return bin;
        }
        sign(next) {
            const sign_offset = this.byteOffset + this.byteLength - $mol_crypto_auditor_sign_size;
            const buff = new Uint8Array(this.buffer, sign_offset, $mol_crypto_auditor_sign_size);
            if (!next)
                return buff;
            buff.set(next);
            return buff;
        }
        size() {
            return Math.ceil(Math.abs(this.getInt16(offset.size, true)) / 8) * 8 + offset.data + $mol_crypto_auditor_sign_size;
        }
        sens() {
            return new Uint8Array(this.buffer, this.byteOffset, this.size() - $mol_crypto_auditor_sign_size);
        }
        unit() {
            const land = $mol_int62_to_string({
                lo: this.getInt32(offset.land_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.land_hi, true) << 1 >> 1,
            });
            const auth = $mol_int62_to_string({
                lo: this.getInt32(offset.auth_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.auth_hi, true) << 1 >> 1,
            });
            const head = $mol_int62_to_string({
                lo: this.getInt32(offset.head_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.head_hi, true) << 1 >> 1,
            });
            const self = $mol_int62_to_string({
                lo: this.getInt32(offset.self_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.self_hi, true) << 1 >> 1,
            });
            const next = $mol_int62_to_string({
                lo: this.getInt32(offset.next_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.next_hi, true) << 1 >> 1,
            });
            const prev = $mol_int62_to_string({
                lo: this.getInt32(offset.prev_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.prev_hi, true) << 1 >> 1,
            });
            const time = this.getInt32(offset.time, true) << 1 >> 1;
            const type_size = this.getInt16(offset.size, true);
            let data = null;
            if (type_size) {
                try {
                    var buff = new Uint8Array(this.buffer, this.byteOffset + offset.data, Math.abs(type_size));
                }
                catch (error) {
                    error['message'] += `\nhead=${head};self=${self}`;
                    $mol_fail_hidden(error);
                }
                if (type_size < 0)
                    data = buff;
                else
                    data = JSON.parse($mol_charset_decode(buff));
            }
            return new $hyoo_crowd_unit(land, auth, head, self, next, prev, time, data, this);
        }
    }
    $.$hyoo_crowd_unit_bin = $hyoo_crowd_unit_bin;
    function $hyoo_crowd_unit_compare(left, right) {
        return (left.group() - right.group())
            || (left.time - right.time)
            || ((left.auth > right.auth) ? 1 : (left.auth < right.auth) ? -1 : 0)
            || ((left.self > right.self) ? 1 : (left.self < right.self) ? -1 : 0)
            || ((left.head > right.head) ? 1 : (left.head < right.head) ? -1 : 0)
            || ((left.prev > right.prev) ? 1 : (left.prev < right.prev) ? -1 : 0)
            || ((left.next > right.next) ? 1 : (left.next < right.next) ? -1 : 0)
            || ((left.land > right.land) ? 1 : (left.land < right.land) ? -1 : 0);
    }
    $.$hyoo_crowd_unit_compare = $hyoo_crowd_unit_compare;
})($ || ($ = {}));
//hyoo/crowd/unit/unit.ts
;
"use strict";
//mol/type/partial/deep/deep.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_jsx_prefix = '';
    $.$mol_jsx_crumbs = '';
    $.$mol_jsx_booked = null;
    $.$mol_jsx_document = {
        getElementById: () => null,
        createElementNS: (space, name) => $mol_dom_context.document.createElementNS(space, name),
        createDocumentFragment: () => $mol_dom_context.document.createDocumentFragment(),
    };
    $.$mol_jsx_frag = '';
    function $mol_jsx(Elem, props, ...childNodes) {
        const id = props && props.id || '';
        const guid = id ? $.$mol_jsx_prefix ? $.$mol_jsx_prefix + '/' + id : id : $.$mol_jsx_prefix;
        const crumbs_self = id ? $.$mol_jsx_crumbs.replace(/(\S+)/g, `$1_${id.replace(/\/.*/i, '')}`) : $.$mol_jsx_crumbs;
        if (Elem && $.$mol_jsx_booked) {
            if ($.$mol_jsx_booked.has(id)) {
                $mol_fail(new Error(`JSX already has tag with id ${JSON.stringify(guid)}`));
            }
            else {
                $.$mol_jsx_booked.add(id);
            }
        }
        let node = guid ? $.$mol_jsx_document.getElementById(guid) : null;
        if ($.$mol_jsx_prefix) {
            const prefix_ext = $.$mol_jsx_prefix;
            const booked_ext = $.$mol_jsx_booked;
            const crumbs_ext = $.$mol_jsx_crumbs;
            for (const field in props) {
                const func = props[field];
                if (typeof func !== 'function')
                    continue;
                const wrapper = function (...args) {
                    const prefix = $.$mol_jsx_prefix;
                    const booked = $.$mol_jsx_booked;
                    const crumbs = $.$mol_jsx_crumbs;
                    try {
                        $.$mol_jsx_prefix = prefix_ext;
                        $.$mol_jsx_booked = booked_ext;
                        $.$mol_jsx_crumbs = crumbs_ext;
                        return func.call(this, ...args);
                    }
                    finally {
                        $.$mol_jsx_prefix = prefix;
                        $.$mol_jsx_booked = booked;
                        $.$mol_jsx_crumbs = crumbs;
                    }
                };
                $mol_func_name_from(wrapper, func);
                props[field] = wrapper;
            }
        }
        if (typeof Elem !== 'string') {
            if ('prototype' in Elem) {
                const view = node && node[String(Elem)] || new Elem;
                Object.assign(view, props);
                view[Symbol.toStringTag] = guid;
                view.childNodes = childNodes;
                if (!view.ownerDocument)
                    view.ownerDocument = $.$mol_jsx_document;
                view.className = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                node = view.valueOf();
                node[String(Elem)] = view;
                return node;
            }
            else {
                const prefix = $.$mol_jsx_prefix;
                const booked = $.$mol_jsx_booked;
                const crumbs = $.$mol_jsx_crumbs;
                try {
                    $.$mol_jsx_prefix = guid;
                    $.$mol_jsx_booked = new Set;
                    $.$mol_jsx_crumbs = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                    return Elem(props, ...childNodes);
                }
                finally {
                    $.$mol_jsx_prefix = prefix;
                    $.$mol_jsx_booked = booked;
                    $.$mol_jsx_crumbs = crumbs;
                }
            }
        }
        if (!node) {
            node = Elem
                ? $.$mol_jsx_document.createElementNS(props?.xmlns ?? 'http://www.w3.org/1999/xhtml', Elem)
                : $.$mol_jsx_document.createDocumentFragment();
        }
        $mol_dom_render_children(node, [].concat(...childNodes));
        if (!Elem)
            return node;
        if (guid)
            node.id = guid;
        for (const key in props) {
            if (key === 'id')
                continue;
            if (typeof props[key] === 'string') {
                if (typeof node[key] === 'string')
                    node[key] = props[key];
                node.setAttribute(key, props[key]);
            }
            else if (props[key] &&
                typeof props[key] === 'object' &&
                Reflect.getPrototypeOf(props[key]) === Reflect.getPrototypeOf({})) {
                if (typeof node[key] === 'object') {
                    Object.assign(node[key], props[key]);
                    continue;
                }
            }
            else {
                node[key] = props[key];
            }
        }
        if ($.$mol_jsx_crumbs)
            node.className = (props?.['class'] ? props['class'] + ' ' : '') + crumbs_self;
        return node;
    }
    $.$mol_jsx = $mol_jsx;
})($ || ($ = {}));
//mol/jsx/jsx.ts
;
"use strict";
var $;
(function ($) {
    async function $hyoo_sync_peer(path, next) {
        let serial = $mol_state_local.value('$hyoo_sync_peer', next);
        if (typeof serial === 'string') {
            return await $hyoo_crowd_peer.restore(serial);
        }
        else {
            serial = $mol_state_local.value(path);
            if (typeof serial === 'string') {
                $mol_state_local.value('$hyoo_sync_peer', serial);
                $mol_state_local.value(path, null);
            }
        }
        const frame = $mol_jsx("iframe", { src: "https://sync.hyoo.ru/auth/" });
        frame.style.display = 'none';
        await new Promise((done, fail) => {
            frame.onload = done;
            frame.onerror = fail;
            frame.onabort = fail;
            document.body.appendChild(frame);
        });
        const serial_ext = await new Promise((done, fail) => {
            window.addEventListener('message', event => {
                if (!Array.isArray(event.data))
                    return;
                if (event.data[0] !== '$hyoo_sync_peer')
                    return;
                done(event.data[1]);
            });
            frame.contentWindow.postMessage(['$hyoo_sync_peer', serial], '*');
            setTimeout(() => done(serial), 5000);
        });
        document.body.removeChild(frame);
        if (typeof serial_ext === 'string') {
            if (!serial)
                $mol_state_local.value('$hyoo_sync_peer', serial_ext);
            return await $hyoo_crowd_peer.restore(serial_ext);
        }
        const peer = await $hyoo_crowd_peer.generate();
        $mol_state_local.value('$hyoo_sync_peer', peer.key_private_serial);
        return peer;
    }
    $.$hyoo_sync_peer = $hyoo_sync_peer;
})($ || ($ = {}));
//hyoo/sync/peer/peer.web.tsx
;
"use strict";
var $;
(function ($) {
    function $hyoo_crowd_time_now() {
        return Math.floor(Date.now() / 100) - 1767e7;
    }
    $.$hyoo_crowd_time_now = $hyoo_crowd_time_now;
    function $hyoo_crowd_time_stamp(time) {
        return 1767e9 + time * 100;
    }
    $.$hyoo_crowd_time_stamp = $hyoo_crowd_time_stamp;
})($ || ($ = {}));
//hyoo/crowd/time/time.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_clock extends Map {
        static begin = -1 * 2 ** 30;
        last_time = $hyoo_crowd_clock.begin;
        constructor(entries) {
            super(entries);
            if (!entries)
                return;
            for (const [peer, time] of entries) {
                this.see_time(time);
            }
        }
        sync(right) {
            for (const [peer, time] of right) {
                this.see_peer(peer, time);
            }
        }
        see_time(time) {
            if (time < this.last_time)
                return;
            this.last_time = time;
        }
        see_peer(peer, time) {
            if (!this.fresh(peer, time))
                return;
            this.set(peer, time);
            this.see_time(time);
        }
        see_bin(bin, group) {
            for (let cursor = offset.clocks; cursor < bin.byteLength; cursor += 16) {
                this.see_peer($mol_int62_to_string({
                    lo: bin.getInt32(cursor + 0, true) << 1 >> 1,
                    hi: bin.getInt32(cursor + 4, true) << 1 >> 1,
                }), bin.getInt32(cursor + 8 + 4 * group, true));
            }
        }
        fresh(peer, time) {
            return time > this.time(peer);
        }
        ahead(clock) {
            for (const [peer, time] of this) {
                if (clock.fresh(peer, time))
                    return true;
            }
            return false;
        }
        time(peer) {
            return this.get(peer) ?? $hyoo_crowd_clock.begin;
        }
        now() {
            return $hyoo_crowd_time_now();
        }
        last_stamp() {
            return $hyoo_crowd_time_stamp(this.last_time);
        }
        tick(peer) {
            let time = this.now();
            if (time <= this.last_time) {
                time = this.last_time + 1;
            }
            this.see_peer(peer, time);
            return time;
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), $mol_dev_format_shade(' ' + new Date(this.last_stamp()).toISOString().replace('T', ' ')));
        }
    }
    $.$hyoo_crowd_clock = $hyoo_crowd_clock;
    const offset = {
        land_lo: 0,
        land_hi: 4,
        count: 8,
        clocks: 16,
    };
    class $hyoo_crowd_clock_bin extends DataView {
        static from(land_id, clocks, count) {
            const size = offset.clocks + clocks[0].size * 16;
            const mem = new Uint8Array(size);
            const bin = new $hyoo_crowd_clock_bin(mem.buffer);
            const land = $mol_int62_from_string(land_id);
            bin.setInt32(offset.land_lo, land.lo ^ (1 << 31), true);
            bin.setInt32(offset.land_hi, land.hi, true);
            bin.setInt32(offset.count, count, true);
            let cursor = offset.clocks;
            for (const [peer_id, time] of clocks[0]) {
                const peer = $mol_int62_from_string(peer_id);
                bin.setInt32(cursor + 0, peer.lo, true);
                bin.setInt32(cursor + 4, peer.hi, true);
                bin.setInt32(cursor + 8, time, true);
                bin.setInt32(cursor + 12, clocks[1].get(peer_id) ?? $hyoo_crowd_clock.begin, true);
                cursor += 16;
            }
            return bin;
        }
        land() {
            return $mol_int62_to_string({
                lo: this.getInt32(offset.land_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.land_hi, true) << 1 >> 1,
            });
        }
        count() {
            return this.getInt32(offset.count, true);
        }
    }
    $.$hyoo_crowd_clock_bin = $hyoo_crowd_clock_bin;
})($ || ($ = {}));
//hyoo/crowd/clock/clock.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_node extends $mol_object2 {
        land;
        head;
        constructor(land = new $hyoo_crowd_land, head = '0_0') {
            super();
            this.land = land;
            this.head = head;
        }
        static for(land, head) {
            return new this(land, head);
        }
        static toJSON() {
            return this.name;
        }
        id() {
            return this.head === '0_0'
                ? this.land.id()
                : `${this.land.id()}!${this.head}`;
        }
        world() {
            return this.land.world();
        }
        as(Node) {
            return this.world()?.Fund(Node).Item(`${this.land.id()}!${this.head}`) ?? new Node(this.land, this.head);
        }
        units() {
            return this.land.unit_alives(this.head);
        }
        nodes(Node) {
            const fund = this.world()?.Fund(Node);
            return this.units().map(unit => fund?.Item(`${this.land.id()}!${unit.self}`) ?? new Node(this.land, unit.self));
        }
        virgin() {
            return this.land.unit_list(this.head).length === 0;
        }
        [Symbol.toPrimitive]() {
            return `${this.constructor.name}("${this.land.id()}","${this.head}")`;
        }
        toJSON() {
            return this.id();
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), $mol_dev_format_shade(':'), $mol_dev_format_auto(this.land.unit_list(this.head)));
        }
    }
    __decorate([
        $mol_mem_key
    ], $hyoo_crowd_node.prototype, "nodes", null);
    $.$hyoo_crowd_node = $hyoo_crowd_node;
})($ || ($ = {}));
//hyoo/crowd/node/node.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_reg extends $hyoo_crowd_node {
        value(next) {
            const unit = this.units().at(-1);
            if (next === undefined)
                return unit?.data ?? null;
            if ($mol_compare_deep(unit?.data, next))
                return next;
            this.land.put(this.head, unit?.self ?? this.land.id_new(), '0_0', next);
            return next;
        }
        str(next) {
            return String(this.value(next) ?? '');
        }
        numb(next) {
            return Number(this.value(next));
        }
        bool(next) {
            return Boolean(this.value(next));
        }
        yoke(law = [''], mod = [], add = []) {
            const world = this.world();
            let land_id = $mol_int62_string_ensure(this.value());
            if (land_id)
                return world.land_sync(land_id);
            if (!this.land.allowed_add())
                return null;
            const land = $mol_wire_sync(world).grab(law, mod, add);
            this.value(land.id());
            world.land_init(land);
            return land;
        }
    }
    $.$hyoo_crowd_reg = $hyoo_crowd_reg;
})($ || ($ = {}));
//hyoo/crowd/reg/reg.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_struct extends $hyoo_crowd_node {
        sub(key, Node) {
            const head = $mol_int62_hash_string(key + '\n' + this.head);
            return this.world()?.Fund(Node).Item(`${this.land.id()}!${head}`) ?? new Node(this.land, head);
        }
        yoke(key, Node, law = [''], mod = [], add = []) {
            const land = this.sub(key, $hyoo_crowd_reg).yoke(law, mod, add);
            return land?.chief.sub(key, Node) ?? null;
        }
    }
    $.$hyoo_crowd_struct = $hyoo_crowd_struct;
})($ || ($ = {}));
//hyoo/crowd/struct/struct.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_land extends $mol_object {
        id() {
            return $mol_int62_to_string($mol_int62_random());
        }
        toJSON() {
            return this.id();
        }
        peer() {
            return this.world()?.peer;
        }
        peer_id() {
            return this.peer()?.id ?? '0_0';
        }
        world() {
            return null;
        }
        get clock_auth() {
            this.pub.promote();
            return this._clocks[$hyoo_crowd_unit_group.auth];
        }
        get clock_data() {
            this.pub.promote();
            return this._clocks[$hyoo_crowd_unit_group.data];
        }
        get clocks() {
            this.pub.promote();
            return this._clocks;
        }
        get clocks_bin() {
            return new Uint8Array($hyoo_crowd_clock_bin.from(this.id(), this._clocks, this._unit_all.size).buffer);
        }
        pub = new $mol_wire_pub;
        _clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock];
        _unit_all = new Map();
        unit(head, self) {
            return this._unit_all.get(`${head}!${self}`);
        }
        _unit_lists = new Map();
        _unit_alives = new Map();
        size() {
            return this._unit_all.size;
        }
        unit_list(head) {
            let kids = this._unit_lists.get(head);
            if (!kids)
                this._unit_lists.set(head, kids = Object.assign([], { dirty: false }));
            return kids;
        }
        unit_alives(head) {
            this.pub.promote();
            let kids = this._unit_alives.get(head);
            if (!kids) {
                const all = this.unit_list(head);
                if (all.dirty)
                    this.resort(head);
                kids = all.filter(kid => kid.data !== null);
                this._unit_alives.set(head, kids);
            }
            return kids;
        }
        node(head, Node) {
            return new Node(this, head);
        }
        chief = this.node('0_0', $hyoo_crowd_struct);
        id_new() {
            for (let i = 0; i < 1000; ++i) {
                const id = $mol_int62_to_string($mol_int62_random());
                if (id === '0_0')
                    continue;
                if (id === this.id())
                    continue;
                if (this._unit_lists.has(id))
                    continue;
                return id;
            }
            throw new Error(`Can't generate ID after 1000 times`);
        }
        fork(auth) {
            const fork = $hyoo_crowd_land.make({
                id: $mol_const(this.id()),
                peer: $mol_const(auth),
            });
            return fork.apply(this.delta());
        }
        delta(clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock]) {
            this.pub.promote();
            const delta = [];
            for (const unit of this._unit_all.values()) {
                const time = clocks[unit.group()].time(unit.auth);
                if (unit.time <= time)
                    continue;
                delta.push(unit);
            }
            delta.sort($hyoo_crowd_unit_compare);
            return delta;
        }
        resort(head) {
            const kids = this._unit_lists.get(head);
            if (!kids.dirty)
                return kids;
            if (kids.length < 2) {
                kids.dirty = true;
                return kids;
            }
            const queue = kids.splice(0).sort((left, right) => -$hyoo_crowd_unit_compare(left, right));
            const locate = (self) => {
                for (let i = kids.length - 1; i >= 0; --i) {
                    if (kids[i].self === self)
                        return i;
                }
                return -1;
            };
            while (queue.length) {
                kids.push(queue.pop());
                for (let cursor = queue.length - 1; cursor >= 0; --cursor) {
                    const kid = queue[cursor];
                    let index = 0;
                    if (kid.prev !== '0_0') {
                        index = locate(kid.prev) + 1;
                        if (!index)
                            continue;
                    }
                    while (kids[index] && ($hyoo_crowd_unit_compare(kids[index], kid) > 0))
                        ++index;
                    const exists = locate(kid.self);
                    if (index === exists) {
                        if (cursor === queue.length - 1)
                            queue.pop();
                        continue;
                    }
                    if (exists >= 0) {
                        kids.splice(exists, 1);
                        if (exists < index)
                            --index;
                    }
                    kids.splice(index, 0, kid);
                    if (cursor === queue.length - 1)
                        queue.pop();
                    cursor = queue.length;
                }
            }
            kids.dirty = false;
            return kids;
        }
        apply(delta) {
            for (const next of delta) {
                this._clocks[next.group()].see_peer(next.auth, next.time);
                const kids = this.unit_list(next.head);
                const next_id = `${next.head}!${next.self}`;
                let prev = this._unit_all.get(next_id);
                if (prev) {
                    if ($hyoo_crowd_unit_compare(prev, next) > 0)
                        continue;
                    kids[kids.indexOf(prev)] = next;
                }
                else {
                    kids.push(next);
                }
                this._unit_all.set(next_id, next);
                if (kids.length > 1)
                    kids.dirty = true;
                this._unit_alives.set(next.head, undefined);
            }
            this.pub.emit();
            return this;
        }
        _joined = false;
        join() {
            if (this._joined)
                return;
            const auth = this.peer();
            if (!auth)
                return;
            if (!auth.key_public_serial)
                return;
            const auth_id = `${auth.id}!${auth.id}`;
            const auth_unit = this._unit_all.get(auth_id);
            if (auth_unit?.data)
                return this._joined = true;
            const time = this._clocks[$hyoo_crowd_unit_group.auth].tick(auth.id);
            const join_unit = new $hyoo_crowd_unit(this.id(), auth.id, auth.id, auth.id, '0_0', '0_0', time, auth.key_public_serial, null);
            this._unit_all.set(auth_id, join_unit);
            this._joined = true;
            this.pub.emit();
        }
        leave() {
            const auth = this.peer();
            if (!auth)
                return;
            if (!auth.key_public_serial)
                return;
            const auth_id = `${auth.id}!${auth.id}`;
            const auth_unit = this._unit_all.get(auth_id);
            if (!auth_unit || !auth_unit.data)
                return this._joined = false;
            const time = this._clocks[$hyoo_crowd_unit_group.auth].tick(auth.id);
            const join_unit = new $hyoo_crowd_unit(this.id(), auth.id, auth.id, auth.id, '0_0', '0_0', time, null, null);
            this._unit_all.set(auth_id, join_unit);
            this._joined = false;
            this.pub.emit();
        }
        allowed_add(peer = this.peer().id) {
            return this.level(peer) >= $hyoo_crowd_peer_level.add;
        }
        allowed_mod(peer = this.peer().id) {
            return this.level(peer) >= $hyoo_crowd_peer_level.mod;
        }
        allowed_law(peer = this.peer().id) {
            return this.level(peer) >= $hyoo_crowd_peer_level.law;
        }
        level_base(next) {
            this.level('0_0', next);
        }
        level(peer, next) {
            if (next)
                this.join();
            else
                this.pub.promote();
            if (!peer)
                peer = this.peer_id();
            const level_id = `${this.id()}!${peer}`;
            const prev = this._unit_all.get(level_id)?.level()
                ?? this._unit_all.get(`${this.id()}!0_0`)?.level()
                ?? (this.id() === peer ? $hyoo_crowd_peer_level.law : $hyoo_crowd_peer_level.get);
            if (next === undefined)
                return prev;
            if (next <= prev)
                return prev;
            if (!this.allowed_law())
                return prev;
            const time = this._clocks[$hyoo_crowd_unit_group.auth].tick(peer);
            const auth = this.peer_id();
            const level_unit = new $hyoo_crowd_unit(this.id(), auth, this.id(), peer, '0_0', '0_0', time, next, null);
            this._unit_all.set(level_id, level_unit);
            this.pub.emit();
            return next;
        }
        grabbed() {
            if (this.id() === this.peer_id())
                return true;
            this.pub.promote();
            return this._unit_all.size > 0;
        }
        peers() {
            this.pub.promote();
            const lords = [];
            for (const unit of this._unit_all.values()) {
                switch (unit.kind()) {
                    case $hyoo_crowd_unit_kind.data: continue;
                    case $hyoo_crowd_unit_kind.join: continue;
                    default: lords.push(unit.self);
                }
            }
            return lords;
        }
        residents() {
            this.pub.promote();
            const lords = [];
            for (const unit of this._unit_all.values()) {
                if (unit.data === null)
                    continue;
                if (unit.kind() !== $hyoo_crowd_unit_kind.join)
                    continue;
                lords.push(unit.self);
            }
            return lords;
        }
        authors() {
            this.pub.promote();
            const authors = new Set();
            for (const unit of this._unit_all.values()) {
                if (unit.kind() !== $hyoo_crowd_unit_kind.data)
                    continue;
                if (unit.data === null)
                    continue;
                authors.add(unit.auth);
            }
            return authors;
        }
        steal_rights(donor) {
            if (!this.allowed_law())
                return;
            for (const peer of donor.peers()) {
                this.level(peer, donor.level(peer));
            }
        }
        first_stamp() {
            this.pub.promote();
            const grab_unit = this._unit_all.get(`${this.id()}!${this.id()}`);
            return (grab_unit && $hyoo_crowd_time_stamp(grab_unit.time)) ?? null;
        }
        last_stamp() {
            this.pub.promote();
            return this.clock_data.last_stamp();
        }
        selection(peer) {
            return this.world().land_sync(peer).chief.sub('$hyoo_crowd_land..selection', $hyoo_crowd_reg);
        }
        put(head, self, prev, data) {
            this.join();
            const old_id = `${head}!${self}`;
            let unit_old = this._unit_all.get(old_id);
            let unit_prev = prev !== '0_0'
                ? this._unit_all.get(`${head}!${prev}`)
                : null;
            const unit_list = this.unit_list(head);
            if (unit_old)
                unit_list.splice(unit_list.indexOf(unit_old), 1);
            const seat = unit_prev ? unit_list.indexOf(unit_prev) + 1 : 0;
            const next = unit_list[seat]?.self ?? '0_0';
            const auth = this.peer_id();
            const time = this._clocks[$hyoo_crowd_unit_group.data].tick(auth);
            const unit_new = new $hyoo_crowd_unit(this.id(), auth, head, self, next, prev, time, data, null);
            this._unit_all.set(old_id, unit_new);
            unit_list.splice(seat, 0, unit_new);
            this._unit_alives.set(head, undefined);
            this.pub.emit();
            return unit_new;
        }
        wipe(unit) {
            if (unit.data === null)
                return unit;
            const unit_list = this.unit_list(unit.head);
            const seat = unit_list.indexOf(unit);
            const prev = seat > 0 ? unit_list[seat - 1].self : seat < 0 ? unit.prev : '0_0';
            return this.put(unit.head, unit.self, prev, null);
        }
        move(unit, head, prev) {
            const unit_list = this.unit_list(unit.head);
            const seat = unit_list.indexOf(unit);
            const next = unit_list[seat + 1];
            this.wipe(unit);
            if (next)
                this.put(next.head, next.self, unit_list[unit_list.indexOf(next) - 2]?.self ?? '0_0', next.data);
            this.put(head, unit.self, prev, unit.data);
        }
        insert(unit, head, seat) {
            const list = this.unit_list(head);
            const prev = seat ? list[seat - 1].self : '0_0';
            return this.move(unit, head, prev);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
    }
    __decorate([
        $mol_memo.method
    ], $hyoo_crowd_land.prototype, "id", null);
    $.$hyoo_crowd_land = $hyoo_crowd_land;
})($ || ($ = {}));
//hyoo/crowd/land/land.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_fund extends $mol_object {
        world;
        Node;
        constructor(world, Node) {
            super();
            this.world = world;
            this.Node = Node;
        }
        Item(id) {
            const [land, head] = id.split('!');
            if (!head)
                return this.Item(`${land}!0_0`);
            return this.world.land_sync(land).node(head, this.Node);
        }
        make(law = [''], mod = [], add = []) {
            const land = $mol_wire_sync(this.world).grab(law, mod, add);
            return this.Item(land.id());
        }
    }
    __decorate([
        $mol_mem_key
    ], $hyoo_crowd_fund.prototype, "Item", null);
    __decorate([
        $mol_action
    ], $hyoo_crowd_fund.prototype, "make", null);
    $.$hyoo_crowd_fund = $hyoo_crowd_fund;
})($ || ($ = {}));
//hyoo/crowd/fund/fund.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_dict_key = $mol_key;
    class $mol_dict extends Map {
        get(key) {
            return super.get($mol_key(key));
        }
        has(key) {
            return super.has($mol_key(key));
        }
        set(key, value) {
            return super.set($mol_key(key), value);
        }
        delete(key) {
            return super.delete($mol_key(key));
        }
        forEach(back, context) {
            return super.forEach((val, key, dict) => {
                if (typeof key === 'string')
                    key = JSON.parse(key);
                return back.call(this, val, key, dict);
            }, context);
        }
        keys() {
            const iterator = super.keys();
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    const iteration = iterator.next();
                    if (iteration.done)
                        return iteration;
                    iteration.value = JSON.parse(iteration.value);
                    return iteration;
                }
            };
        }
        entries() {
            const iterator = super.entries();
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    const iteration = iterator.next();
                    if (iteration.done)
                        return iteration;
                    iteration.value = [JSON.parse(iteration.value[0]), iteration.value[1]];
                    return iteration;
                }
            };
        }
        [Symbol.iterator]() {
            return this.entries();
        }
    }
    $.$mol_dict = $mol_dict;
})($ || ($ = {}));
//mol/dict/dict.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_world extends $mol_object {
        peer;
        constructor(peer) {
            super();
            this.peer = peer;
            if (peer)
                this._knights.set(peer.id, peer);
        }
        lands_pub = new $mol_wire_pub;
        _lands = new Map();
        get lands() {
            this.lands_pub.promote();
            return this._lands;
        }
        land_init(id) { }
        land(id) {
            const exists = this._lands.get(id);
            if (exists)
                return exists;
            const land = $hyoo_crowd_land.make({
                id: $mol_const(id),
                world: $mol_const(this),
            });
            this._lands.set(id, land);
            this.lands_pub.emit();
            return land;
        }
        land_sync(id) {
            const land = this.land(id);
            this.land_init(land);
            return land;
        }
        Fund(Item) {
            return new $hyoo_crowd_fund(this, Item);
        }
        home() {
            return this.land_sync(this.peer.id);
        }
        _knights = new $mol_dict();
        _signs = new WeakMap();
        async grab(law = [''], mod = [], add = []) {
            const knight = await $hyoo_crowd_peer.generate();
            this._knights.set(knight.id, knight);
            const land_inner = this.land(knight.id);
            const land_outer = $hyoo_crowd_land.make({
                id: $mol_const(knight.id),
                peer: $mol_const(knight),
            });
            land_outer.join();
            for (const peer of law)
                land_outer.level(peer || this.peer.id, $hyoo_crowd_peer_level.law);
            for (const peer of mod)
                land_outer.level(peer || this.peer.id, $hyoo_crowd_peer_level.mod);
            for (const peer of add)
                land_outer.level(peer || this.peer.id, $hyoo_crowd_peer_level.add);
            land_inner.apply(land_outer.delta());
            return land_inner;
        }
        sign_units(units) {
            return Promise.all(units.map(async (unit) => {
                if (unit.bin)
                    return unit;
                const bin = $hyoo_crowd_unit_bin.from_unit(unit);
                let sign = this._signs.get(unit);
                if (!sign) {
                    const knight = this._knights.get(unit.auth);
                    sign = new Uint8Array(await knight.key_private.sign(bin.sens()));
                }
                bin.sign(sign);
                unit.bin = bin;
                this._signs.set(unit, sign);
                return unit;
            }));
        }
        delta_land(land, clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock]) {
            return this.sign_units(land.delta(clocks));
        }
        async delta_batch(land, clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock]) {
            const units = await this.delta_land(land, clocks);
            let size = 0;
            const bins = [];
            for (const unit of units) {
                const bin = unit.bin;
                bins.push(bin);
                size += bin.byteLength;
            }
            const batch = new Uint8Array(size);
            let offset = 0;
            for (const bin of bins) {
                batch.set(new Uint8Array(bin.buffer, bin.byteOffset, bin.byteLength), offset);
                offset += bin.byteLength;
            }
            return batch;
        }
        async *delta(clocks = new Map()) {
            for (const land of this.lands.values()) {
                const batch = await this.delta_batch(land, clocks.get(land.id()));
                if (batch.length)
                    yield batch;
            }
        }
        async merge(donor) {
            for await (const batch of donor.delta())
                await this.apply(batch);
        }
        async apply(delta) {
            const units = [];
            let bin_offset = 0;
            while (bin_offset < delta.byteLength) {
                const buf = new Int16Array(delta.buffer, delta.byteOffset + bin_offset);
                const bin = $hyoo_crowd_unit_bin.from_buffer(buf);
                units.push(bin.unit());
                bin_offset += bin.size();
            }
            const land = this.land(units[0].land);
            const report = await this.audit_delta(land, units);
            land.apply(report.allow);
            return report;
        }
        async audit_delta(land, delta) {
            const all = new Map();
            const desync = 60 * 60 * 10;
            const deadline = land.clock_data.now() + desync;
            const get_unit = (id) => {
                return all.get(id) ?? land._unit_all.get(id);
            };
            const get_level = (head, self) => {
                return get_unit(`${head}!${self}`)?.level()
                    ?? get_unit(`${head}!0_0`)?.level()
                    ?? $hyoo_crowd_peer_level.get;
            };
            const check_unit = async (unit) => {
                const bin = unit.bin;
                if (unit.time > deadline)
                    return 'Far future';
                const auth_unit = get_unit(`${unit.auth}!${unit.auth}`);
                const kind = unit.kind();
                switch (kind) {
                    case $hyoo_crowd_unit_kind.grab:
                    case $hyoo_crowd_unit_kind.join: {
                        const key_str = auth_unit?.data ?? unit.data;
                        if (typeof key_str !== 'string')
                            return 'No join key';
                        const self = $mol_int62_hash_string(key_str);
                        if (unit.self !== self)
                            return 'Alien join key';
                        const key = await $mol_crypto_auditor_public.from(key_str);
                        const sign = bin.sign();
                        const valid = await key.verify(bin.sens(), sign);
                        if (!valid)
                            return 'Wrong join sign';
                        all.set(`${unit.head}!${unit.auth}`, unit);
                        this._signs.set(unit, sign);
                        return '';
                    }
                    case $hyoo_crowd_unit_kind.give: {
                        const lord_level = get_level(land.id(), unit.auth);
                        if (lord_level < $hyoo_crowd_peer_level.law)
                            return `Level too low`;
                        const peer_level = get_level(land.id(), unit.self);
                        if (peer_level > unit.level())
                            return `Cancel unsupported`;
                        break;
                    }
                    case $hyoo_crowd_unit_kind.data: {
                        const level = get_level(land.id(), unit.auth);
                        if (level >= $hyoo_crowd_peer_level.mod)
                            break;
                        if (level === $hyoo_crowd_peer_level.add) {
                            const exists = get_unit(`${unit.head}!${unit.self}`);
                            if (!exists)
                                break;
                            if (exists.auth === unit.auth)
                                break;
                        }
                        return `Level too low`;
                    }
                }
                const key_str = auth_unit?.data;
                if (typeof key_str !== 'string')
                    return 'No auth key';
                const key = await $mol_crypto_auditor_public.from(key_str);
                const sign = bin.sign();
                const valid = await key.verify(bin.sens(), sign);
                if (!valid)
                    return 'Wrong auth sign';
                all.set(`${unit.head}!${unit.self}`, unit);
                this._signs.set(unit, sign);
                return '';
            };
            const allow = [];
            const forbid = new Map();
            const proceed_unit = async (unit) => {
                const error = await check_unit(unit);
                if (error)
                    forbid.set(unit, error);
                else
                    allow.push(unit);
            };
            const tasks = [];
            for (const unit of delta) {
                const task = proceed_unit(unit);
                tasks.push(task);
                if (unit.group() === $hyoo_crowd_unit_group.auth)
                    await task;
            }
            await Promise.all(tasks);
            return { allow, forbid };
        }
    }
    __decorate([
        $mol_mem_key
    ], $hyoo_crowd_world.prototype, "Fund", null);
    $.$hyoo_crowd_world = $hyoo_crowd_world;
})($ || ($ = {}));
//hyoo/crowd/world/world.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_race(...tasks) {
        const results = tasks.map(task => {
            try {
                return task();
            }
            catch (error) {
                return error;
            }
        });
        const promises = results.filter(res => $mol_promise_like(res));
        if (promises.length)
            $mol_fail(Promise.race(promises));
        const error = results.find(res => res instanceof Error);
        if (error)
            $mol_fail(error);
        return results;
    }
    $.$mol_wire_race = $mol_wire_race;
})($ || ($ = {}));
//mol/wire/race/race.ts
;
"use strict";
var $;
(function ($) {
    function $mol_log3_area_lazy(event) {
        const self = this;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));
//mol/log3/log3.ts
;
"use strict";
var $;
(function ($) {
    function $mol_log3_web_make(level, color) {
        return function $mol_log3_logger(event) {
            const pending = this.$mol_log3_stack.pop();
            if (pending)
                pending();
            let tpl = '%c';
            const chunks = Object.values(event);
            for (let i = 0; i < chunks.length; ++i) {
                tpl += (typeof chunks[i] === 'string') ? ' ⦙ %s' : ' ⦙ %o';
            }
            const style = `color:${color};font-weight:bolder`;
            this.console[level](tpl, style, ...chunks);
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_web_make = $mol_log3_web_make;
    $.$mol_log3_come = $mol_log3_web_make('info', 'royalblue');
    $.$mol_log3_done = $mol_log3_web_make('info', 'forestgreen');
    $.$mol_log3_fail = $mol_log3_web_make('error', 'orangered');
    $.$mol_log3_warn = $mol_log3_web_make('warn', 'goldenrod');
    $.$mol_log3_rise = $mol_log3_web_make('log', 'magenta');
    $.$mol_log3_area = $mol_log3_web_make('group', 'cyan');
})($ || ($ = {}));
//mol/log3/log3.web.ts
;
"use strict";
var $;
(function ($) {
    $.$hyoo_sync_masters = [
        `sync.hyoo.ru`,
        `crowd.up.railway.app`,
        `crowd2.up.railway.app`,
    ];
})($ || ($ = {}));
//hyoo/sync/masters/masters.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sync_yard extends $mol_object2 {
        db_unit_persisted = new WeakSet();
        log_pack(data) {
            return data;
        }
        peer(next) {
            return $mol_wire_sync($hyoo_sync_peer)(this + '.peer()', next);
        }
        world() {
            $mol_wire_solid();
            const world = new this.$.$hyoo_crowd_world(this.peer());
            world.land_init = land => this.land_init(land);
            return world;
        }
        land_init(land) {
            this.db_land_init(land);
            try {
                this.land_sync(land);
            }
            catch (error) {
                $mol_fail_log(error);
            }
            if (!land.grabbed())
                this.$.$mol_wait_timeout(10_000);
        }
        land(id) {
            return this.world().land_sync(id);
        }
        land_grab(law = [''], mod = [], add = []) {
            return $mol_wire_sync(this.world()).grab(law, mod, add);
        }
        home() {
            return this.land(this.peer().id);
        }
        land_search(query) {
            const stat = new Map();
            for (const prefix of query.match(/\p{Letter}{2,}/gu) ?? []) {
                const caps = prefix.slice(0, 1).toUpperCase() + prefix.slice(1);
                const prefs = new Set([
                    caps, ' ' + caps,
                    prefix, ' ' + prefix,
                ]);
                const lands = new Set();
                const founds = $mol_wire_race(...[...prefs].map(pref => () => $mol_wire_sync(this).db_land_search(pref)));
                for (const found of founds) {
                    for (const land of [...found].reverse())
                        lands.add(land);
                }
                for (const land of lands) {
                    stat.set(land, (stat.get(land) ?? 0) + 1);
                }
            }
            return [...stat].sort((left, right) => right[1] - left[1]).map(pair => pair[0]);
        }
        sync() {
            this.server();
            for (const land of this.world().lands.values()) {
                this.db_land_sync(land);
            }
            $mol_wire_race(...this.slaves().map(line => () => this.line_sync(line)));
            try {
                const master = this.master();
                if (master)
                    $mol_wire_race(...[...this.world().lands.values()].map(land => () => this.line_land_sync({ line: master, land })));
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        land_sync(land) {
            this.db_land_init(land);
            try {
                this.db_land_sync(land);
            }
            catch (error) {
                $mol_fail_log(error);
            }
            try {
                const master = this.master();
                if (master)
                    this.line_land_sync({ line: master, land });
            }
            catch (error) {
                $mol_fail_log(error);
            }
            try {
                $mol_wire_race(...this.slaves()
                    .filter(line => this.line_lands(line).includes(land))
                    .map(line => () => this.line_land_sync({ line, land })));
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        db_land_clocks(land, next) {
            $mol_wire_solid();
            return next;
        }
        db_land_sync(land) {
            this.db_land_init(land);
            land.clocks;
            const units = [];
            for (const unit of land._unit_all.values()) {
                if (this.db_unit_persisted.has(unit))
                    continue;
                units.push(unit);
            }
            if (!units.length)
                return;
            $mol_wire_sync(this.world()).sign_units(units);
            $mol_wire_sync(this).db_land_save(land, units);
            for (const unit of units)
                this.db_unit_persisted.add(unit);
        }
        db_land_init(land) {
            try {
                var units = $mol_wire_sync(this).db_land_load(land);
            }
            catch (error) {
                if (!(error instanceof Error))
                    $mol_fail_hidden(error);
                this.$.$mol_log3_fail({
                    place: this,
                    land: land.id(),
                    message: error.message,
                });
                units = [];
            }
            for (const unit of units)
                this.db_unit_persisted.add(unit);
            units.sort($hyoo_crowd_unit_compare);
            land.apply(units);
        }
        async db_land_load(land) {
            return [];
        }
        async db_land_search(from, to = from) {
            return new Set();
        }
        async db_land_save(land, units) { }
        master_cursor(next = 0) {
            return next;
        }
        master_list() {
            const scheme = this.$.$mol_dom_context.document.location.protocol.replace(/^http/, 'ws');
            return this.$.$hyoo_sync_masters.map(host => `${scheme}//${host}`);
        }
        master_link() {
            return this.master_list()[this.master_cursor()];
        }
        master() {
            return null;
        }
        server() {
            return null;
        }
        slaves(next = []) {
            return next;
        }
        line_lands(line, next = []) {
            return next;
        }
        line_land_clocks({ line, land }, next) {
            $mol_wire_solid();
            return next;
        }
        line_sync(line) {
            $mol_wire_race(...this.line_lands(line).map(land => () => this.line_land_sync({ line, land })));
        }
        line_land_sync({ line, land }) {
            this.line_land_init({ line, land });
            let clocks = this.line_land_clocks({ line, land });
            if (!clocks)
                return;
            const units = land.delta(clocks);
            if (!units.length)
                return;
            this.line_send_units(line, units);
            this.$.$mol_log3_rise({
                place: this,
                land: land.id(),
                message: 'Sync Sent',
                line: $mol_key(line),
                units: this.log_pack(units),
            });
            for (const unit of units) {
                clocks[unit.group()].see_peer(unit.auth, unit.time);
            }
        }
        line_land_init({ line, land }) {
            this.db_land_init(land);
            this.line_send_clocks(line, land);
        }
        line_land_neck({ line, land }, next = []) {
            return next;
        }
        async line_receive(line, message) {
            if (!message.byteLength)
                return;
            const view = new DataView(message.buffer, message.byteOffset, message.byteLength);
            const int0 = view.getInt32(0, true);
            const int1 = view.getInt32(4, true);
            const land_id = $mol_int62_to_string({
                lo: int0 << 1 >> 1,
                hi: int1 << 1 >> 1,
            });
            const handle = async (prev) => {
                if (prev)
                    await prev;
                const world = this.world();
                const land = await $mol_wire_async(world).land(land_id);
                let clocks = this.line_land_clocks({ line, land });
                if (!clocks)
                    this.line_land_clocks({ line, land }, clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock]);
                if (int0 << 1 >> 1 ^ int0) {
                    const bin = new $hyoo_crowd_clock_bin(message.buffer, message.byteOffset, message.byteLength);
                    for (let group = 0; group < clocks.length; ++group) {
                        clocks[group].see_bin(bin, group);
                    }
                    if (bin.count() + land.delta(clocks).length < land._unit_all.size) {
                        this.line_land_clocks({ line, land }, clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock]);
                    }
                    const lands = this.line_lands(line);
                    if (lands.includes(land)) {
                        this.$.$mol_log3_warn({
                            place: this,
                            land: land.id(),
                            message: 'Already syncing',
                            hint: 'Bug at $hyoo_sync_yard',
                            line: $mol_key(line),
                            clocks,
                        });
                    }
                    else {
                        this.line_lands(line, [...lands, land]);
                    }
                    return;
                }
                const { allow, forbid } = await world.apply(message);
                for (const [{ bin, ...unit }, error] of forbid) {
                    this.$.$mol_log3_fail({
                        place: this,
                        land: land.id(),
                        message: error,
                        line: $mol_key(line),
                        unit,
                    });
                }
                if (!allow.length)
                    return;
                for (const unit of allow) {
                    clocks[unit.group()].see_peer(unit.auth, unit.time);
                }
                this.$.$mol_log3_rise({
                    place: this,
                    land: land.id(),
                    message: 'Sync Gain',
                    line: $mol_key(line),
                    units: this.log_pack(allow),
                });
            };
            this.line_land_neck({ line, land: land_id }, [
                handle(this.line_land_neck({ line, land: land_id })[0])
                    .catch(error => {
                    this.$.$mol_log3_fail({
                        place: this,
                        land: land_id,
                        message: String(error?.message ?? error),
                    });
                })
            ]);
        }
        line_send_clocks(line, land) { }
        async line_send_units(line, units) { }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sync_yard.prototype, "peer", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_yard.prototype, "world", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "land_init", null);
    __decorate([
        $mol_action
    ], $hyoo_sync_yard.prototype, "land_search", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_yard.prototype, "sync", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "land_sync", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "db_land_clocks", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "db_land_sync", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "db_land_init", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_yard.prototype, "master_cursor", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_yard.prototype, "master_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_yard.prototype, "slaves", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_lands", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_land_clocks", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_sync", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_land_sync", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_land_init", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_land_neck", null);
    $.$hyoo_sync_yard = $hyoo_sync_yard;
})($ || ($ = {}));
//hyoo/sync/yard/yard.ts
;
"use strict";
var $;
(function ($) {
    function $mol_db_response(request) {
        return new Promise((done, fail) => {
            request.onerror = () => fail(new Error(request.error.message));
            request.onsuccess = () => done(request.result);
        });
    }
    $.$mol_db_response = $mol_db_response;
})($ || ($ = {}));
//mol/db/response/response.ts
;
"use strict";
var $;
(function ($) {
    class $mol_db_store {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get path() {
            return this.native.keyPath;
        }
        get incremental() {
            return this.native.autoIncrement;
        }
        get indexes() {
            return new Proxy({}, {
                ownKeys: () => [...this.native.indexNames],
                has: (_, name) => this.native.indexNames.contains(name),
                get: (_, name) => new $mol_db_index(this.native.index(name))
            });
        }
        index_make(name, path = [], unique = false, multiEntry = false) {
            return this.native.createIndex(name, path, { multiEntry, unique });
        }
        index_drop(name) {
            this.native.deleteIndex(name);
            return this;
        }
        get transaction() {
            return new $mol_db_transaction(this.native.transaction);
        }
        get db() {
            return this.transaction.db;
        }
        clear() {
            return $mol_db_response(this.native.clear());
        }
        count(keys) {
            return $mol_db_response(this.native.count(keys));
        }
        put(doc, key) {
            return $mol_db_response(this.native.put(doc, key));
        }
        get(key) {
            return $mol_db_response(this.native.get(key));
        }
        select(key, count) {
            return $mol_db_response(this.native.getAll(key, count));
        }
        drop(keys) {
            return $mol_db_response(this.native.delete(keys));
        }
    }
    $.$mol_db_store = $mol_db_store;
})($ || ($ = {}));
//mol/db/store/store.ts
;
"use strict";
//mol/db/store/store_schema.ts
;
"use strict";
var $;
(function ($) {
    class $mol_db_index {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get paths() {
            return this.native.keyPath;
        }
        get unique() {
            return this.native.unique;
        }
        get multiple() {
            return this.native.multiEntry;
        }
        get store() {
            return new $mol_db_store(this.native.objectStore);
        }
        get transaction() {
            return this.store.transaction;
        }
        get db() {
            return this.store.db;
        }
        count(keys) {
            return $mol_db_response(this.native.count(keys));
        }
        get(key) {
            return $mol_db_response(this.native.get(key));
        }
        select(key, count) {
            return $mol_db_response(this.native.getAll(key, count));
        }
    }
    $.$mol_db_index = $mol_db_index;
})($ || ($ = {}));
//mol/db/index/index.ts
;
"use strict";
//mol/db/index/index_schema.ts
;
"use strict";
var $;
(function ($) {
    async function $mol_db(name, ...migrations) {
        const request = this.$mol_dom_context.indexedDB.open(name, migrations.length ? migrations.length + 1 : undefined);
        request.onupgradeneeded = event => {
            migrations.splice(0, event.oldVersion - 1);
            const transaction = new $mol_db_transaction(request.transaction);
            for (const migrate of migrations)
                migrate(transaction);
        };
        const db = await $mol_db_response(request);
        return new $mol_db_database(db);
    }
    $.$mol_db = $mol_db;
})($ || ($ = {}));
//mol/db/db.ts
;
"use strict";
//mol/db/db_schema.ts
;
"use strict";
var $;
(function ($) {
    class $mol_db_database {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get version() {
            return this.native.version;
        }
        get stores() {
            return [...this.native.objectStoreNames];
        }
        read(...names) {
            return new $mol_db_transaction(this.native.transaction(names, 'readonly')).stores;
        }
        change(...names) {
            return new $mol_db_transaction(this.native.transaction(names, 'readwrite'));
        }
        kill() {
            this.native.close();
            const request = $mol_dom_context.indexedDB.deleteDatabase(this.name);
            request.onblocked = console.warn;
            return $mol_db_response(request);
        }
        destructor() {
            this.native.close();
        }
    }
    $.$mol_db_database = $mol_db_database;
})($ || ($ = {}));
//mol/db/database/database.ts
;
"use strict";
var $;
(function ($) {
    class $mol_db_transaction {
        native;
        constructor(native) {
            this.native = native;
        }
        get stores() {
            return new Proxy({}, {
                ownKeys: () => [...this.native.objectStoreNames],
                has: (_, name) => this.native.objectStoreNames.contains(name),
                get: (_, name) => new $mol_db_store(this.native.objectStore(name)),
            });
        }
        store_make(name) {
            return this.native.db.createObjectStore(name, { autoIncrement: true });
        }
        store_drop(name) {
            this.native.db.deleteObjectStore(name);
            return this;
        }
        abort() {
            if (this.native.error)
                return;
            this.native.abort();
        }
        commit() {
            this.native.commit?.();
            return new Promise((done, fail) => {
                this.native.onerror = () => fail(new Error(this.native.error.message));
                this.native.oncomplete = () => done();
            });
        }
        get db() {
            return new $mol_db_database(this.native.db);
        }
    }
    $.$mol_db_transaction = $mol_db_transaction;
})($ || ($ = {}));
//mol/db/transaction/transaction.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sync_client extends $hyoo_sync_yard {
        async db() {
            const db1 = await this.$.$mol_db('$hyoo_sync_client_db');
            await db1.kill();
            return await this.$.$mol_db('$hyoo_sync_client_db2', mig => mig.store_make('Unit'), mig => mig.stores.Unit.index_make('Land', ['land']), mig => mig.stores.Unit.index_make('Data', ['data']));
        }
        async db_land_load(land) {
            try {
                var db = await this.db();
            }
            catch (error) {
                $mol_fail_log(error);
                return [];
            }
            const Unit = db.read('Unit').Unit;
            const recs = await Unit.indexes.Land.select([land.id()]);
            if (!recs)
                return [];
            const units = recs.map(rec => new $hyoo_crowd_unit(rec.land, rec.auth, rec.head, rec.self, rec.next, rec.prev, rec.time, rec.data, new $hyoo_crowd_unit_bin(rec.bin.buffer)));
            return units;
        }
        async db_land_search(from, to = from + '\uFFFF') {
            try {
                var db = await this.db();
            }
            catch (error) {
                $mol_fail_log(error);
                return new Set();
            }
            const Unit = db.read('Unit').Unit;
            const query = IDBKeyRange.bound([from], [to]);
            const recs = await Unit.indexes.Data.select(query);
            return new Set(recs.map(rec => rec.land));
        }
        async db_land_save(land, units) {
            try {
                var db = await this.db();
            }
            catch (error) {
                $mol_fail_log(error);
                return;
            }
            const trans = db.change('Unit');
            const Unit = trans.stores.Unit;
            for (const unit of units) {
                Unit.put(unit, [unit.land, unit.head, unit.self]);
            }
            await trans.commit();
        }
        reconnects(reset) {
            return ($mol_wire_probe(() => this.reconnects()) ?? 0) + 1;
        }
        master() {
            this.reconnects();
            const link = this.master_link();
            const line = new $mol_dom_context.WebSocket(link, ['$hyoo_sync_protocol_1']);
            line.binaryType = 'arraybuffer';
            line.onmessage = async (event) => {
                if (event.data instanceof ArrayBuffer) {
                    await this.line_receive(line, new Uint8Array(event.data));
                }
                else {
                    this.$.$mol_log3_fail({
                        place: this,
                        message: 'Wrong data',
                        data: event.data
                    });
                }
            };
            let interval;
            line.onclose = () => {
                clearInterval(interval);
                setTimeout(() => this.reconnects(null), 1000);
            };
            Object.assign(line, {
                destructor: () => {
                    line.onclose = () => { };
                    clearInterval(interval);
                    line.close();
                }
            });
            return new Promise((done, fail) => {
                line.onopen = () => {
                    this.$.$mol_log3_come({
                        place: this,
                        message: 'Connected to Master',
                        line: $mol_key(line),
                        server: link,
                    });
                    interval = setInterval(() => line.send(new Uint8Array), 30000);
                    done(line);
                };
                line.onerror = () => {
                    line.onclose = event => {
                        fail(new Error(`Master is unavailable (${event.code})`));
                    };
                    clearInterval(interval);
                    this.master_cursor((this.master_cursor() + 1) % this.$.$hyoo_sync_masters.length);
                };
            });
        }
        line_send_clocks(line, land) {
            if (line instanceof WebSocket) {
                line.send(land.clocks_bin);
            }
            else {
                line.postMessage(['hyoo_sync_clocks', land.id(), land._clocks]);
            }
        }
        async line_send_units(line, units) {
            if (line instanceof WebSocket) {
                await this.world().sign_units(units);
                const message = new Blob(units.map(unit => unit.bin));
                line.send(message);
            }
            else {
                line.postMessage(['hyoo_sync_units', units[0].land, units]);
            }
        }
    }
    __decorate([
        $mol_memo.method
    ], $hyoo_sync_client.prototype, "db", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_client.prototype, "reconnects", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_client.prototype, "master", null);
    $.$hyoo_sync_client = $hyoo_sync_client;
})($ || ($ = {}));
//hyoo/sync/client/client.ts
;
"use strict";
var $;
(function ($) {
    function $mol_reconcile({ prev, from, to, next, equal, drop, insert, update, }) {
        if (!update)
            update = (next, prev, lead) => insert(next, drop(prev, lead));
        let p = from;
        let n = 0;
        let lead = p ? prev[p - 1] : null;
        if (to > prev.length)
            $mol_fail(new RangeError(`To(${to}) greater then length(${prev.length})`));
        if (from > to)
            $mol_fail(new RangeError(`From(${to}) greater then to(${to})`));
        while (p < to || n < next.length) {
            if (p < to && n < next.length && equal(next[n], prev[p])) {
                lead = prev[p];
                ++p;
                ++n;
            }
            else if (next.length - n > to - p) {
                lead = insert(next[n], lead);
                ++n;
            }
            else if (next.length - n < to - p) {
                lead = drop(prev[p], lead);
                ++p;
            }
            else {
                lead = update(next[n], prev[p], lead);
                ++p;
                ++n;
            }
        }
    }
    $.$mol_reconcile = $mol_reconcile;
})($ || ($ = {}));
//mol/reconcile/reconcile.ts
;
"use strict";
var $;
(function ($) {
    const { unicode_only, line_end, tab, repeat_greedy, optional, forbid_after, force_after, char_only, char_except } = $mol_regexp;
    $.$hyoo_crowd_tokenizer = $mol_regexp.from({
        token: {
            'line-break': line_end,
            'indents': repeat_greedy(tab, 1),
            'emoji': [
                unicode_only('Extended_Pictographic'),
                optional(unicode_only('Emoji_Modifier')),
                repeat_greedy([
                    unicode_only('Emoji_Component'),
                    unicode_only('Extended_Pictographic'),
                    optional(unicode_only('Emoji_Modifier')),
                ]),
            ],
            'link': /\b(https?:\/\/[^\s,.;:!?")]+(?:[,.;:!?")][^\s,.;:!?")]+)+)/,
            'Word': [
                [
                    forbid_after(line_end),
                    unicode_only('White_Space'),
                ],
                repeat_greedy(char_only([
                    unicode_only('General_Category', 'Uppercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                ]), 1),
                repeat_greedy(char_only([
                    unicode_only('General_Category', 'Lowercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                ])),
            ],
            'word': [
                [
                    forbid_after(line_end),
                    unicode_only('White_Space'),
                ],
                repeat_greedy(char_only([
                    unicode_only('General_Category', 'Lowercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                ]), 1),
            ],
            'spaces': [
                forbid_after(line_end),
                repeat_greedy(unicode_only('White_Space'), 1),
                force_after(unicode_only('White_Space')),
            ],
            'space': [
                forbid_after(line_end),
                unicode_only('White_Space'),
                forbid_after([
                    unicode_only('White_Space'),
                    unicode_only('General_Category', 'Uppercase_Letter'),
                    unicode_only('General_Category', 'Lowercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                ]),
            ],
            'others': [
                repeat_greedy(char_except([
                    unicode_only('General_Category', 'Uppercase_Letter'),
                    unicode_only('General_Category', 'Lowercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                    unicode_only('White_Space'),
                ]), 1),
            ],
        },
    }).native;
})($ || ($ = {}));
//hyoo/crowd/tokenizer/tokenizer.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_list extends $hyoo_crowd_node {
        list(next) {
            const units = this.units();
            if (next === undefined) {
                return units.map(unit => unit.data);
            }
            else {
                this.insert(next, 0, units.length);
                return next;
            }
        }
        set(next) {
            return new Set(this.list(next && [...next]));
        }
        insert(next, from = this.units().length, to = from) {
            $mol_reconcile({
                prev: this.units(),
                from,
                to,
                next,
                equal: (next, prev) => $mol_compare_deep(prev.data, next),
                drop: (prev, lead) => this.land.wipe(prev),
                insert: (next, lead) => this.land.put(this.head, this.land.id_new(), lead?.self ?? '0_0', next),
                update: (next, prev, lead) => this.land.put(prev.head, prev.self, lead?.self ?? '0_0', next),
            });
        }
        move(from, to) {
            const units = this.units();
            const lead = to ? units[to - 1] : null;
            this.land.move(units[from], this.head, lead?.self ?? '0_0');
        }
        cut(seat) {
            return this.land.wipe(this.units()[seat]);
        }
        has(val, next) {
            if (next === undefined) {
                for (const unit of this.units()) {
                    if (unit.data === val)
                        return true;
                }
                return false;
            }
            if (next)
                this.add(val);
            else
                this.drop(val);
            return next;
        }
        add(val) {
            if (this.has(val))
                return;
            this.insert([val]);
        }
        drop(val) {
            for (const unit of this.units()) {
                if (unit.data !== val)
                    continue;
                this.land.wipe(unit);
            }
        }
        node_make(val, Node) {
            this.insert([val]);
            const unit = this.units().at(-1);
            return this.land.node(unit.self, Node);
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_crowd_list.prototype, "set", null);
    $.$hyoo_crowd_list = $hyoo_crowd_list;
})($ || ($ = {}));
//hyoo/crowd/list/list.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_text extends $hyoo_crowd_node {
        text(next) {
            if (next === undefined) {
                return this.str();
            }
            else {
                const prev = this.units();
                const lines = next.match(/.*\n|.+$/g) ?? [];
                $mol_reconcile({
                    prev,
                    from: 0,
                    to: prev.length,
                    next: lines,
                    equal: (next, prev) => {
                        if (typeof prev.data === 'string')
                            return false;
                        return this.land.node(prev.self, $hyoo_crowd_text).str() === next;
                    },
                    drop: (prev, lead) => this.land.wipe(prev),
                    insert: (next, lead) => {
                        const unit = this.land.put(this.head, this.land.id_new(), lead?.self ?? '0_0', []);
                        this.land.node(unit.self, $hyoo_crowd_text).str(next);
                        return unit;
                    },
                    update: (next, prev, lead) => {
                        this.land.node(prev.self, $hyoo_crowd_text).str(next);
                        return prev;
                    },
                });
                return next;
            }
        }
        str(next) {
            if (next === undefined) {
                let str = '';
                for (const unit of this.units()) {
                    if (typeof unit.data === 'string')
                        str += unit.data;
                    else
                        str += this.land.node(unit.self, $hyoo_crowd_text).str();
                }
                return str;
            }
            else {
                this.write(next, 0, -1);
                return next;
            }
        }
        write(next, str_from = -1, str_to = str_from) {
            const list = this.units();
            let from = str_from < 0 ? list.length : 0;
            let word = '';
            while (from < list.length) {
                word = String(list[from].data);
                if (str_from <= word.length) {
                    next = word.slice(0, str_from) + next;
                    break;
                }
                str_from -= word.length;
                if (str_to > 0)
                    str_to -= word.length;
                from++;
            }
            let to = str_to < 0 ? list.length : from;
            while (to < list.length) {
                word = String(list[to].data);
                to++;
                if (str_to < word.length) {
                    next = next + word.slice(str_to);
                    break;
                }
                str_to -= word.length;
            }
            if (from && from === list.length) {
                --from;
                next = String(list[from].data) + next;
            }
            const words = next.match($hyoo_crowd_tokenizer) ?? [];
            this.as($hyoo_crowd_list).insert(words, from, to);
            return this;
        }
        point_by_offset(offset) {
            let off = offset;
            for (const unit of this.units()) {
                if (typeof unit.data === 'string') {
                    const len = String(unit.data).length;
                    if (off <= len)
                        return [unit.self, off];
                    else
                        off -= len;
                }
                else {
                    const found = this.land.node(unit.self, $hyoo_crowd_text).point_by_offset(off);
                    if (found[0] !== '0_0')
                        return found;
                    off = found[1];
                }
            }
            return ['0_0', off];
        }
        offset_by_point([self, offset]) {
            for (const unit of this.units()) {
                if (unit.self === self)
                    return [self, offset];
                if (typeof unit.data === 'string') {
                    offset += unit.data.length;
                }
                else {
                    const found = this.land.node(unit.self, $hyoo_crowd_text).offset_by_point([self, offset]);
                    if (found[0] !== '0_0')
                        return [self, found[1]];
                    offset = found[1];
                }
            }
            return ['0_0', offset];
        }
        selection(peer, next) {
            const reg = this.land.selection(peer);
            if (next) {
                reg.value(next.map(offset => this.point_by_offset(offset)));
                return next;
            }
            else {
                this.units();
                return reg.value()
                    ?.map(point => this.offset_by_point(point)[1]) ?? [0, 0];
            }
        }
    }
    $.$hyoo_crowd_text = $hyoo_crowd_text;
})($ || ($ = {}));
//hyoo/crowd/text/text.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_meta_model extends $hyoo_crowd_struct {
        editable() {
            return this.land.allowed_mod();
        }
        editors() {
            return this.land.peers();
        }
        title_node() {
            return this.sub('title', $hyoo_crowd_text);
        }
        title(next) {
            return this.title_node().str(next);
        }
        title_selection(next) {
            return this.title_node().selection(this.land.peer().id, next);
        }
        steal_rights(node) {
            this.land.steal_rights(node.land);
        }
        whole(next) {
            const reg = this.sub('$hyoo_meta_whole', $hyoo_crowd_reg);
            const id = $mol_int62_string_ensure(reg.str(next?.id()));
            return id ? this.world().Fund($hyoo_meta_model).Item(id) : this;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_meta_model.prototype, "editable", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_model.prototype, "editors", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_model.prototype, "title_node", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_model.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_model.prototype, "title_selection", null);
    __decorate([
        $mol_action
    ], $hyoo_meta_model.prototype, "steal_rights", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_model.prototype, "whole", null);
    $.$hyoo_meta_model = $hyoo_meta_model;
})($ || ($ = {}));
//hyoo/meta/model/model.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_dict extends $hyoo_crowd_node {
        keys(next) {
            const prev = this.units();
            if (!next)
                return prev.map(unit => String(unit.data));
            $mol_reconcile({
                prev,
                from: 0,
                to: prev.length,
                next,
                equal: (next, prev) => prev.data === next,
                drop: (prev, lead) => this.land.wipe(prev),
                insert: (next, lead) => this.land.put(this.head, $mol_int62_hash_string(next + '\n' + this.head), lead?.self ?? '0_0', next),
            });
            return next;
        }
        sub(key, Node) {
            this.add(key);
            return new Node(this.land, $mol_int62_hash_string(key + '\n' + this.head));
        }
        has(key) {
            for (const unit of this.units()) {
                if (unit.data === key)
                    return true;
            }
            return false;
        }
        add(key) {
            if (this.has(key))
                return;
            this.keys([...this.keys(), key]);
        }
        drop(key) {
            for (const unit of this.units()) {
                if (unit.data !== key)
                    continue;
                this.land.wipe(unit);
            }
        }
    }
    $.$hyoo_crowd_dict = $hyoo_crowd_dict;
})($ || ($ = {}));
//hyoo/crowd/dict/dict.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_blob extends $hyoo_crowd_list {
        uri() {
            return URL.createObjectURL(this.blob());
        }
        type(next) {
            return this.as($hyoo_crowd_struct).sub('type', $hyoo_crowd_reg).str(next);
        }
        blob(next) {
            if (next) {
                this.buffer(new Uint8Array($mol_wire_sync(next).arrayBuffer()), next.type);
                return next;
            }
            return new $mol_blob(this.list(), {
                type: this.type(),
            });
        }
        buffer(next, type = 'application/octet-stream') {
            if (next) {
                const chunks = [];
                let offset = 0;
                while (offset < next.byteLength) {
                    const cut = offset + 2 ** 15;
                    chunks.push(next.slice(offset, cut));
                    offset = cut;
                }
                this.list(chunks);
                this.type(type);
                return next;
            }
            else {
                const chunks = this.list();
                const size = chunks.reduce((sum, chunk) => sum + chunk.byteLength, 0);
                const res = new Uint8Array(size);
                let offset = 0;
                for (const chunk of chunks) {
                    res.set(chunk, offset);
                    offset += chunk.byteLength;
                }
                return res;
            }
        }
        str(next, type = 'text/plain') {
            if (next === undefined) {
                return $mol_charset_decode(this.buffer());
            }
            else {
                this.buffer($mol_charset_encode(next));
                this.type(type);
                return next;
            }
        }
        json(next, type = 'application/json') {
            if (next === undefined) {
                return JSON.parse(this.str());
            }
            else {
                this.str(JSON.stringify(next), type);
                return next;
            }
        }
    }
    $.$hyoo_crowd_blob = $hyoo_crowd_blob;
})($ || ($ = {}));
//hyoo/crowd/blob/blob.ts
;
"use strict";
var $;
(function ($) {
    class $mol_time_base {
        static patterns = {};
        static formatter(pattern) {
            if (this.patterns[pattern])
                return this.patterns[pattern];
            var tokens = Object.keys(this.patterns)
                .sort()
                .reverse()
                .map((token) => token.replace(/([-+*.\[\]()\^])/g, '\\$1'));
            var lexer = RegExp('(.*?)(' + tokens.join('|') + '|$)', 'g');
            var funcs = [];
            pattern.replace(lexer, (str, text, token) => {
                if (text)
                    funcs.push(() => text);
                if (token)
                    funcs.push(this.patterns[token]);
                return str;
            });
            return this.patterns[pattern] = (arg) => {
                return funcs.reduce((res, func) => res + func(arg), '');
            };
        }
        toString(pattern) {
            const Base = this.constructor;
            const formatter = Base.formatter(pattern);
            return formatter(this);
        }
    }
    $.$mol_time_base = $mol_time_base;
})($ || ($ = {}));
//mol/time/base/base.ts
;
"use strict";
var $;
(function ($) {
    class $mol_time_duration extends $mol_time_base {
        constructor(config = 0) {
            super();
            if (typeof config === 'number') {
                this.second = config / 1000;
                return;
            }
            if (typeof config === 'string') {
                if (config === 'Z') {
                    this.hour = 0;
                    this.minute = 0;
                    return;
                }
                duration: {
                    const parser = /^P(?:([+-]?\d+(?:\.\d+)?)Y)?(?:([+-]?\d+(?:\.\d+)?)M)?(?:([+-]?\d+(?:\.\d+)?)D)?(?:T(?:([+-]?\d+(?:\.\d+)?)h)?(?:([+-]?\d+(?:\.\d+)?)m)?(?:([+-]?\d+(?:\.\d+)?)s)?)?$/i;
                    const found = parser.exec(config);
                    if (!found)
                        break duration;
                    if (found[1])
                        this.year = Number(found[1]);
                    if (found[2])
                        this.month = Number(found[2]);
                    if (found[3])
                        this.day = Number(found[3]);
                    if (found[4])
                        this.hour = Number(found[4]);
                    if (found[5])
                        this.minute = Number(found[5]);
                    if (found[6])
                        this.second = Number(found[6]);
                    return;
                }
                offset: {
                    var parser = /^[+-](\d\d)(?::?(\d\d))?$/i;
                    var found = parser.exec(config);
                    if (!found)
                        break offset;
                    if (found[1])
                        this.hour = Number(found[1]);
                    if (found[2])
                        this.minute = Number(found[2]);
                    return;
                }
                throw new Error(`Can not parse time duration (${config})`);
            }
            this.year = config.year || 0;
            this.month = config.month || 0;
            this.day = config.day || 0;
            this.hour = config.hour || 0;
            this.minute = config.minute || 0;
            this.second = config.second || 0;
        }
        year = 0;
        month = 0;
        day = 0;
        hour = 0;
        minute = 0;
        second = 0;
        summ(config) {
            const duration = new $mol_time_duration(config);
            return new $mol_time_duration({
                year: this.year + duration.year,
                month: this.month + duration.month,
                day: this.day + duration.day,
                hour: this.hour + duration.hour,
                minute: this.minute + duration.minute,
                second: this.second + duration.second,
            });
        }
        mult(numb) {
            return new $mol_time_duration({
                year: this.year && this.year * numb,
                month: this.month && this.month * numb,
                day: this.day && this.day * numb,
                hour: this.hour && this.hour * numb,
                minute: this.minute && this.minute * numb,
                second: this.second && this.second * numb,
            });
        }
        count(config) {
            const duration = new $mol_time_duration(config);
            return this.valueOf() / duration.valueOf();
        }
        valueOf() {
            var day = this.year * 365 + this.month * 30.4 + this.day;
            var second = ((day * 24 + this.hour) * 60 + this.minute) * 60 + this.second;
            return second * 1000;
        }
        toJSON() { return this.toString(); }
        toString(pattern = 'P#Y#M#DT#h#m#s') {
            return super.toString(pattern);
        }
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        static patterns = {
            '#Y': (duration) => {
                if (!duration.year)
                    return '';
                return duration.year + 'Y';
            },
            '#M': (duration) => {
                if (!duration.month)
                    return '';
                return duration.month + 'M';
            },
            '#D': (duration) => {
                if (!duration.day)
                    return '';
                return duration.day + 'D';
            },
            '#h': (duration) => {
                if (!duration.hour)
                    return '';
                return duration.hour + 'H';
            },
            '#m': (duration) => {
                if (!duration.minute)
                    return '';
                return duration.minute + 'M';
            },
            '#s': (duration) => {
                if (!duration.second)
                    return '';
                return duration.second + 'S';
            },
        };
    }
    $.$mol_time_duration = $mol_time_duration;
})($ || ($ = {}));
//mol/time/duration/duration.ts
;
"use strict";
var $;
(function ($) {
    let $mol_time_moment_weekdays;
    (function ($mol_time_moment_weekdays) {
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["monday"] = 0] = "monday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["tuesday"] = 1] = "tuesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["wednesday"] = 2] = "wednesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["thursday"] = 3] = "thursday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["friday"] = 4] = "friday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["saturday"] = 5] = "saturday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["sunday"] = 6] = "sunday";
    })($mol_time_moment_weekdays = $.$mol_time_moment_weekdays || ($.$mol_time_moment_weekdays = {}));
    function numb(str, max) {
        const numb = Number(str);
        if (numb < max)
            return numb;
        $mol_fail(new Error(`Wrong time component ${str}`));
    }
    class $mol_time_moment extends $mol_time_base {
        constructor(config = new Date) {
            super();
            if (typeof config === 'number')
                config = new Date(config);
            if (typeof config === 'string') {
                const parsed = /^(?:(\d\d?\d?\d?)(?:-?(\d\d?)(?:-?(\d\d?))?)?)?(?:[T ](?:(\d\d?)(?::?(\d\d?)(?::?(\d\d?(?:\.\d+)?))?)?)?(Z|[\+\-]\d\d?(?::?(?:\d\d?)?)?)?)?$/.exec(config);
                if (!parsed)
                    throw new Error(`Can not parse time moment (${config})`);
                if (parsed[1])
                    this.year = numb(parsed[1], 9999);
                if (parsed[2])
                    this.month = numb(parsed[2], 13) - 1;
                if (parsed[3])
                    this.day = numb(parsed[3], 32) - 1;
                if (parsed[4])
                    this.hour = numb(parsed[4], 60);
                if (parsed[5])
                    this.minute = numb(parsed[5], 60);
                if (parsed[6])
                    this.second = numb(parsed[6], 60);
                if (parsed[7])
                    this.offset = new $mol_time_duration(parsed[7]);
                return;
            }
            if (config instanceof Date) {
                this.year = config.getFullYear();
                this.month = config.getMonth();
                this.day = config.getDate() - 1;
                this.hour = config.getHours();
                this.minute = config.getMinutes();
                this.second = config.getSeconds() + config.getMilliseconds() / 1000;
                const offset = -config.getTimezoneOffset();
                this.offset = new $mol_time_duration({
                    hour: (offset < 0) ? Math.ceil(offset / 60) : Math.floor(offset / 60),
                    minute: offset % 60
                });
                return;
            }
            this.year = config.year;
            this.month = config.month;
            this.day = config.day;
            this.hour = config.hour;
            this.minute = config.minute;
            this.second = config.second;
            this.offset = config.offset == null ? config.offset : new $mol_time_duration(config.offset);
        }
        year;
        month;
        day;
        hour;
        minute;
        second;
        offset;
        get weekday() {
            return (this.native.getDay() + 6) % 7;
        }
        _native;
        get native() {
            if (this._native)
                return this._native;
            const utc = this.toOffset('Z');
            return this._native = new Date(Date.UTC(utc.year ?? 0, utc.month ?? 0, (utc.day ?? 0) + 1, utc.hour ?? 0, utc.minute ?? 0, utc.second != undefined ? Math.floor(utc.second) : 0, utc.second != undefined ? Math.floor((utc.second - Math.floor(utc.second)) * 1000) : 0));
        }
        _normal;
        get normal() {
            if (this._normal)
                return this._normal;
            const moment = new $mol_time_moment(this.native);
            return this._normal = new $mol_time_moment({
                year: this.year === undefined ? undefined : moment.year,
                month: this.month === undefined ? undefined : moment.month,
                day: this.day === undefined ? undefined : moment.day,
                hour: this.hour === undefined ? undefined : moment.hour,
                minute: this.minute === undefined ? undefined : moment.minute,
                second: this.second === undefined ? undefined : moment.second,
                offset: this.offset === undefined ? undefined : moment.offset,
            });
        }
        merge(config) {
            const moment = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: moment.year === undefined ? this.year : moment.year,
                month: moment.month === undefined ? this.month : moment.month,
                day: moment.day === undefined ? this.day : moment.day,
                hour: moment.hour === undefined ? this.hour : moment.hour,
                minute: moment.minute === undefined ? this.minute : moment.minute,
                second: moment.second === undefined ? this.second : moment.second,
                offset: moment.offset === undefined ? this.offset : moment.offset,
            });
        }
        shift(config) {
            const duration = new $mol_time_duration(config);
            const moment = new $mol_time_moment().merge({
                year: this.year,
                month: this.month,
                day: this.day,
                hour: this.hour ?? 0,
                minute: this.minute ?? 0,
                second: this.second ?? 0,
                offset: this.offset ?? 0
            });
            const second = moment.second + (duration.second ?? 0);
            const native = new Date(moment.year + (duration.year ?? 0), moment.month + (duration.month ?? 0), moment.day + 1 + (duration.day ?? 0), moment.hour + (duration.hour ?? 0), moment.minute + (duration.minute ?? 0), Math.floor(second), (second - Math.floor(second)) * 1000);
            if (isNaN(native.valueOf()))
                throw new Error('Wrong time');
            return new $mol_time_moment({
                year: this.year === undefined ? undefined : native.getFullYear(),
                month: this.month === undefined ? undefined : native.getMonth(),
                day: this.day === undefined ? undefined : native.getDate() - 1,
                hour: this.hour === undefined ? undefined : native.getHours(),
                minute: this.minute === undefined ? undefined : native.getMinutes(),
                second: this.second === undefined ? undefined : native.getSeconds() + native.getMilliseconds() / 1000,
                offset: this.offset,
            });
        }
        mask(config) {
            const mask = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: mask.year === undefined ? undefined : this.year,
                month: mask.month === undefined ? undefined : this.month,
                day: mask.day === undefined ? undefined : this.day,
                hour: mask.hour === undefined ? undefined : this.hour,
                minute: mask.minute === undefined ? undefined : this.minute,
                second: mask.second === undefined ? undefined : this.second,
                offset: mask.offset === undefined ? undefined : this.offset,
            });
        }
        toOffset(config = new $mol_time_moment().offset) {
            const duration = new $mol_time_duration(config);
            const offset = this.offset || new $mol_time_moment().offset;
            let with_time = new $mol_time_moment('T00:00:00').merge(this);
            const moment = with_time.shift(duration.summ(offset.mult(-1)));
            return moment.merge({ offset: duration });
        }
        valueOf() { return this.native.getTime(); }
        toJSON() { return this.toString(); }
        toString(pattern = 'YYYY-MM-DDThh:mm:ss.sssZ') {
            return super.toString(pattern);
        }
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        static patterns = {
            'YYYY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year);
            },
            'AD': (moment) => {
                if (moment.year == null)
                    return '';
                return String(Math.floor(moment.year / 100) + 1);
            },
            'YY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year % 100);
            },
            'Month': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'long' })),
            'DD Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'long' })),
            'D Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'long' })),
            'Mon': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'short' })),
            'DD Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'short' })),
            'D Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short' })),
            '-MM': (moment) => {
                if (moment.month == null)
                    return '';
                return '-' + $mol_time_moment.patterns['MM'](moment);
            },
            'MM': (moment) => {
                if (moment.month == null)
                    return '';
                return String(100 + moment.month + 1).slice(1);
            },
            'M': (moment) => {
                if (moment.month == null)
                    return '';
                return String(moment.month + 1);
            },
            'WeekDay': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'long' })),
            'WD': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'short' })),
            '-DD': (moment) => {
                if (moment.day == null)
                    return '';
                return '-' + $mol_time_moment.patterns['DD'](moment);
            },
            'DD': (moment) => {
                if (moment.day == null)
                    return '';
                return String(100 + moment.day + 1).slice(1);
            },
            'D': (moment) => {
                if (moment.day == null)
                    return '';
                return String(moment.day + 1);
            },
            'Thh': (moment) => {
                if (moment.hour == null)
                    return '';
                return 'T' + $mol_time_moment.patterns['hh'](moment);
            },
            'hh': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(100 + moment.hour).slice(1);
            },
            'h': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(moment.hour);
            },
            ':mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return ':' + $mol_time_moment.patterns['mm'](moment);
            },
            'mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(100 + moment.minute).slice(1);
            },
            'm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(moment.minute);
            },
            ':ss': (moment) => {
                if (moment.second == null)
                    return '';
                return ':' + $mol_time_moment.patterns['ss'](moment);
            },
            'ss': (moment) => {
                if (moment.second == null)
                    return '';
                return String(100 + moment.second | 0).slice(1);
            },
            's': (moment) => {
                if (moment.second == null)
                    return '';
                return String(moment.second | 0);
            },
            '.sss': (moment) => {
                if (moment.second == null)
                    return '';
                if (moment.second === (moment.second | 0))
                    return '';
                return '.' + $mol_time_moment.patterns['sss'](moment);
            },
            'sss': (moment) => {
                if (moment.second == null)
                    return '';
                const millisecond = Math.floor((moment.second - Math.floor(moment.second)) * 1000);
                return String(1000 + millisecond).slice(1);
            },
            'Z': (moment) => {
                const offset = moment.offset;
                if (!offset)
                    return '';
                let hour = offset.hour;
                let sign = '+';
                if (hour < 0) {
                    sign = '-';
                    hour = -hour;
                }
                return sign + String(100 + hour).slice(1) + ':' + String(100 + offset.minute).slice(1);
            }
        };
    }
    $.$mol_time_moment = $mol_time_moment;
})($ || ($ = {}));
//mol/time/moment/moment.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_page_side extends $hyoo_meta_model {
            referrers_node() {
                return this.yoke('referrers', $hyoo_crowd_dict, [''], [], ['0_0']);
            }
            referrers_list() {
                return this.referrers_node()?.keys() ?? [];
            }
            referrers_stat(uri) {
                return this.referrers_node()?.sub(uri, $hyoo_crowd_list).list().length ?? 0;
            }
            referrers_track(uri) {
                return this.referrers_node()?.sub(uri, $hyoo_crowd_list).add(this.land.peer().id);
            }
            details_node() {
                const details = this.yoke('details', $hyoo_crowd_text);
                if (!details)
                    return details;
                const land = details.land;
                const meta = this.world().Fund($hyoo_meta_model).Item(land.id());
                if (land.allowed_mod())
                    meta.whole(this);
                meta.steal_rights(this);
                return details;
            }
            details(next) {
                return this.details_node()?.text(next) ?? '';
            }
            details_selection(next) {
                return this.details_node()?.selection(this.land.peer().id, next) ?? [0, 0];
            }
            release_node() {
                const release = this.yoke('release', $hyoo_crowd_blob);
                release?.land.steal_rights(this.land);
                return release;
            }
            release(next) {
                return this.release_node()?.str(next) ?? '';
            }
            released() {
                const book = this.book();
                if (book && !book.pages_node().has(this.id()))
                    return false;
                return this.release_node() && (this.release() === this.details()) || false;
            }
            publish() {
                this.release(this.details());
                this.book()?.pages_node().add(this.id());
            }
            content() {
                return this.release() || this.details();
            }
            changed_moment() {
                return new $mol_time_moment((this.release_node() ?? this.details_node())?.land.last_stamp());
            }
            book(next) {
                const book_node = this.sub('book', $hyoo_crowd_reg);
                const id = $mol_int62_string_ensure(book_node.str(next?.id() ?? (next === null ? '' : undefined)));
                if (id === this.id())
                    return null;
                return id ? this.world().Fund($hyoo_page_side).Item(id) : null;
            }
            books() {
                const books = [];
                let book = this.book();
                while (book) {
                    books.push(book);
                    book = book.book();
                }
                return books;
            }
            bookmarks_node(next) {
                const fresh = this.yoke('$hyoo_page_side:bookmarks', $hyoo_crowd_list);
                if (!fresh)
                    return fresh;
                const old = this.sub('bookmarks', $hyoo_crowd_list);
                for (const mark of old.list()) {
                    const id = $mol_int62_string_ensure(mark);
                    if (id)
                        fresh.add(id);
                    old.drop(id);
                }
                if (fresh.virgin())
                    fresh.add('iy8wtn_tky6pc');
                return fresh;
            }
            bookmarks(next) {
                const node = this.bookmarks_node();
                if (!node)
                    return [];
                const ids = node.list(next?.map(side => side.id()));
                const Fund = this.world().Fund($hyoo_page_side);
                return ids.map(id => Fund.Item(id));
            }
            pages_node() {
                const pages = this.sub('pages', $hyoo_crowd_list);
                return pages;
            }
            pages(next) {
                const node = this.pages_node();
                const ids = node.list(next?.map(side => side.id()));
                const Fund = this.world().Fund($hyoo_page_side);
                return ids.map(id => Fund.Item(id));
            }
            following() {
                return this.following_in() ?? this.following_out();
            }
            following_in() {
                return this.pages().at(-1) ?? null;
            }
            following_out() {
                const book = this.book();
                if (!book)
                    return null;
                const pages = book.pages();
                return pages[pages.indexOf(this) - 1] ?? book.following_out();
            }
            bookmarked(id, next) {
                const node = this.bookmarks_node();
                if (!node)
                    return false;
                if (next === undefined)
                    return node.list().includes(id);
                if (next)
                    node.add(id);
                else
                    node.drop(id);
                return next;
            }
            authors() {
                return [...(this.release_node() ?? this.details_node())?.land.authors() ?? []];
            }
            aura(next) {
                return this.sub('aura', $hyoo_crowd_reg).str(next);
            }
            aura_effective() {
                return this.aura() || (this.book()?.aura_effective() ?? '');
            }
            history_node() {
                return this.yoke('$hyoo_page_side:history', $hyoo_crowd_list);
            }
            history() {
                return this.history_node().set();
            }
            history_add(id) {
                this.history_node().add(id);
            }
            news() {
                const history = this.history();
                const visited = new Set();
                const found = [];
                const pages = [];
                const users = [this];
                while (found.length < 10 && (pages.length || users.length)) {
                    while (users.length) {
                        const user = users.shift();
                        if (visited.has(user))
                            continue;
                        visited.add(user);
                        for (const page of user.pages().slice().reverse()) {
                            if (visited.has(page))
                                continue;
                            pages.push(page);
                        }
                        for (const mark of user.bookmarks().slice().reverse()) {
                            if (visited.has(mark))
                                continue;
                            pages.push(mark);
                        }
                        break;
                    }
                    while (pages.length) {
                        const side = pages.shift();
                        if (visited.has(side))
                            continue;
                        if (!side.title())
                            continue;
                        if (!side.release())
                            continue;
                        if (history.has(side.id())) {
                            for (const page of side.pages().slice().reverse()) {
                                if (visited.has(page))
                                    continue;
                                pages.push(page);
                            }
                        }
                        else {
                            visited.add(side);
                            found.push(side);
                            break;
                        }
                    }
                }
                return found;
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_page_side.prototype, "referrers_node", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side.prototype, "referrers_list", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_page_side.prototype, "referrers_stat", null);
        __decorate([
            $mol_action
        ], $hyoo_page_side.prototype, "referrers_track", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side.prototype, "details_node", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side.prototype, "details", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side.prototype, "details_selection", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side.prototype, "release_node", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side.prototype, "release", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side.prototype, "released", null);
        __decorate([
            $mol_action
        ], $hyoo_page_side.prototype, "publish", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side.prototype, "content", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side.prototype, "changed_moment", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side.prototype, "book", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side.prototype, "books", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side.prototype, "bookmarks_node", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side.prototype, "bookmarks", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side.prototype, "pages_node", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side.prototype, "pages", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side.prototype, "following_in", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side.prototype, "following_out", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_page_side.prototype, "bookmarked", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side.prototype, "authors", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side.prototype, "aura", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side.prototype, "aura_effective", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side.prototype, "history_node", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side.prototype, "news", null);
        $$.$hyoo_page_side = $hyoo_page_side;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/page/side/side.ts
;
"use strict";
var $;
(function ($) {
    class $mol_avatar extends $mol_icon {
        view_box() {
            return "0 0 24 24";
        }
        id() {
            return "";
        }
        path() {
            return "M 12 12 l 0 0 M 0 0 l 0 0 M 24 24 l 0 0 M 0 24 l 0 0 M 24 0 l 0 0";
        }
    }
    $.$mol_avatar = $mol_avatar;
})($ || ($ = {}));
//mol/avatar/-view.tree/avatar.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_hash_string(str, seed = 0) {
        let h1 = 0xdeadbeef ^ seed;
        let h2 = 0x41c6ce57 ^ seed;
        for (let i = 0; i < str.length; i++) {
            const ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        return 4294967296 * (((1 << 16) - 1) & h2) + (h1 >>> 0);
    }
    $.$mol_hash_string = $mol_hash_string;
})($ || ($ = {}));
//mol/hash/string/string.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_avatar extends $.$mol_avatar {
            path() {
                const id = $mol_hash_string(this.id());
                const p = 2.1;
                const m = 2.7;
                let path = '';
                for (let x = 0; x < 4; ++x) {
                    for (let y = 0; y < 8; ++y) {
                        if ((id >> (x + y * 7)) & 1) {
                            const mxp = Math.ceil(m * x + p);
                            const myp = Math.ceil(m * y + p);
                            path += `M ${mxp} ${myp} l 0 0 ` + `M ${24 - mxp} ${myp} l 0 0 `;
                        }
                    }
                }
                return path;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_avatar.prototype, "path", null);
        $$.$mol_avatar = $mol_avatar;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/avatar/avatar.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/avatar/avatar.view.css", "[mol_avatar] {\n\tstroke-linecap: round;\n\tstroke-width: 3.5px;\n\tfill: none;\n\tstroke: currentColor;\n\t/* width: 1.5rem;\n\theight: 1.5rem;\n\tmargin: 0 -.25rem; */\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n}\n");
})($ || ($ = {}));
//mol/avatar/-css/avatar.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_meta_link extends $mol_link {
        minimal_height() {
            return 40;
        }
        id() {
            return this.meta().id();
        }
        title() {
            return this.meta().title();
        }
        meta() {
            const obj = new this.$.$hyoo_meta_model();
            return obj;
        }
        param() {
            return "";
        }
        all_title() {
            return this.$.$mol_locale.text('$hyoo_meta_link_all_title');
        }
        sub() {
            return [
                this.Avatar(),
                this.Title()
            ];
        }
        Avatar() {
            const obj = new this.$.$mol_avatar();
            obj.id = () => this.id();
            return obj;
        }
        highlight() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.title();
            obj.needle = () => this.highlight();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_meta_link.prototype, "meta", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_link.prototype, "Avatar", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_link.prototype, "Title", null);
    $.$hyoo_meta_link = $hyoo_meta_link;
})($ || ($ = {}));
//hyoo/meta/link/-view.tree/link.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_meta_link extends $.$hyoo_meta_link {
            title() {
                return (this.id() === '0_0' ? this.all_title() : super.title()) || (this.Avatar() ? '' : '...');
            }
            uri() {
                return this.$.$mol_state_arg.link({
                    [this.param()]: this.id(),
                });
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_meta_link.prototype, "title", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_link.prototype, "uri", null);
        $$.$hyoo_meta_link = $hyoo_meta_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/meta/link/link.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_define($hyoo_meta_link, {
        Title: {
            flex: {
                shrink: 1,
            },
        },
    });
})($ || ($ = {}));
//hyoo/meta/link/link.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_page_side_news extends $mol_page {
        news() {
            return this.side().news();
        }
        side() {
            const obj = new this.$.$hyoo_page_side();
            return obj;
        }
        title() {
            return this.$.$mol_locale.text('$hyoo_page_side_news_title');
        }
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_special"
            };
        }
        body() {
            return [
                this.Section_list()
            ];
        }
        item(id) {
            const obj = new this.$.$hyoo_page_side();
            return obj;
        }
        item_title(id) {
            return "";
        }
        Item(id) {
            const obj = new this.$.$hyoo_meta_link();
            obj.meta = () => this.item(id);
            obj.title = () => this.item_title(id);
            obj.Avatar = () => null;
            return obj;
        }
        items() {
            return [
                this.Item("0")
            ];
        }
        Section_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.items();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_page_side_news.prototype, "side", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_page_side_news.prototype, "item", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_page_side_news.prototype, "Item", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_news.prototype, "Section_list", null);
    $.$hyoo_page_side_news = $hyoo_page_side_news;
})($ || ($ = {}));
//hyoo/page/side/news/-view.tree/news.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_page_side_news extends $.$hyoo_page_side_news {
            items() {
                return this.news().map(item => this.Item(item));
            }
            item(side) {
                return side;
            }
            item_title(side) {
                return [side, ...side.books()].reverse().map(side => side.title()).join(' / ');
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_page_side_news.prototype, "items", null);
        $$.$hyoo_page_side_news = $hyoo_page_side_news;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/page/side/news/news.view.ts
;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($hyoo_page_side_news, {
        flex: {
            basis: rem(20),
            grow: 0,
        },
    });
})($ || ($ = {}));
//hyoo/page/side/news/news.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_pop extends $mol_view {
        showed(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        align_vert() {
            return "";
        }
        align_hor() {
            return "";
        }
        prefer() {
            return "vert";
        }
        sub() {
            return [
                this.Anchor()
            ];
        }
        sub_visible() {
            return [
                this.Anchor(),
                this.Bubble()
            ];
        }
        Anchor() {
            return null;
        }
        align() {
            return "bottom_center";
        }
        bubble_content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        Bubble() {
            const obj = new this.$.$mol_pop_bubble();
            obj.align = () => this.align();
            obj.content = () => this.bubble_content();
            obj.height_max = () => this.height_max();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_pop.prototype, "showed", null);
    __decorate([
        $mol_mem
    ], $mol_pop.prototype, "Bubble", null);
    $.$mol_pop = $mol_pop;
    class $mol_pop_bubble extends $mol_view {
        sub() {
            return this.content();
        }
        style() {
            return {
                ...super.style(),
                maxHeight: this.height_max()
            };
        }
        attr() {
            return {
                ...super.attr(),
                mol_pop_align: this.align(),
                tabindex: 0
            };
        }
        content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        align() {
            return "";
        }
    }
    $.$mol_pop_bubble = $mol_pop_bubble;
})($ || ($ = {}));
//mol/pop/-view.tree/pop.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop extends $.$mol_pop {
            showed(next = false) {
                this.focused();
                return next;
            }
            sub_visible() {
                return [
                    this.Anchor(),
                    ...this.showed() ? [this.Bubble()] : [],
                ];
            }
            height_max() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                const align = this.align_vert();
                if (align === 'bottom')
                    return (viewport.height - rect_bubble.bottom) * .66;
                if (align === 'top')
                    return rect_bubble.top * .66;
                return 0;
            }
            align() {
                switch (this.prefer()) {
                    case 'hor': return `${this.align_hor()}_${this.align_vert()}`;
                    case 'vert': return `${this.align_vert()}_${this.align_hor()}`;
                    default: return this.prefer();
                }
            }
            align_vert() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.top > (viewport.top + viewport.height / 2) ? 'top' : 'bottom';
            }
            align_hor() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.left > (viewport.left + viewport.width / 2) ? 'left' : 'right';
            }
            View_port() {
                const view = new $mol_view;
                view.dom_node = () => {
                    let node = this.dom_node();
                    while (node = node.offsetParent) {
                        if (this.$.$mol_dom_context.getComputedStyle(node).overflow !== 'visible')
                            return node;
                    }
                    return this.$.$mol_dom_context.document.documentElement;
                };
                return view;
            }
            view_port() {
                return this.View_port().view_rect() ?? { ...this.$.$mol_window.size(), left: 0, top: 0 };
            }
        }
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "showed", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "height_max", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_vert", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_hor", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "View_port", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "view_port", null);
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/pop/pop.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pop/pop.view.css", "[mol_pop] {\n\tposition: relative;\n\tdisplay: inline-flex;\n}\n\n[mol_pop_bubble] {\n\tbox-shadow: 0 0 1rem hsla(0,0%,0%,.5);\n\tborder-radius: var(--mol_gap_round);\n\tposition: absolute;\n\tz-index: var(--mol_layer_popup);\n\tbackground: var(--mol_theme_back);\n\tmax-width: none;\n\tmax-height: none;\n\t/* overflow: hidden;\n\toverflow-y: scroll;\n\toverflow-y: overlay; */\n\tword-break: normal;\n\twidth: max-content;\n\theight: max-content;\n\tflex-direction: column;\n\tmax-width: 80vw;\n\tmax-height: 80vw;\n}\n\n:where( [mol_pop_bubble] > * ) {\n\tbackground: var(--mol_theme_card);\n}\n\n[mol_pop_bubble][mol_scroll] {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_pop_bubble]:focus {\n\toutline: none;\n}\n\n[mol_pop_align=\"suspense_suspense\"] {\n\topacity: 0;\n}\n\n[mol_pop_align=\"left_top\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"left_center\"] {\n\ttransform: translate(-100%, -50%);\n\tleft: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"left_bottom\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"right_top\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"right_center\"] {\n\ttransform: translate(100%, -50%);\n\tright: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"right_bottom\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"center\"] {\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n}\n\n[mol_pop_align=\"top_left\"] {\n\tright: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_right\"] {\n\tleft: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"bottom_left\"] {\n\tright: 0;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_right\"] {\n\tleft: 0;\n\ttop: 100%;\n}\n");
})($ || ($ = {}));
//mol/pop/-css/pop.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_nav extends $mol_plugin {
        cycle(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        mod_ctrl() {
            return false;
        }
        mod_shift() {
            return false;
        }
        mod_alt() {
            return false;
        }
        keys_x(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        keys_y(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        current_x(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        current_y(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        event_up(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_down(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_left(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_right(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.event_key(event)
            };
        }
        event_key(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "cycle", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "keys_x", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "keys_y", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "current_x", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "current_y", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_up", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_down", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_left", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_right", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_key", null);
    $.$mol_nav = $mol_nav;
})($ || ($ = {}));
//mol/nav/-view.tree/nav.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (!event)
                    return event;
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case $mol_keyboard_code.up: return this.event_up(event);
                    case $mol_keyboard_code.down: return this.event_down(event);
                    case $mol_keyboard_code.left: return this.event_left(event);
                    case $mol_keyboard_code.right: return this.event_right(event);
                    case $mol_keyboard_code.pageUp: return this.event_up(event);
                    case $mol_keyboard_code.pageDown: return this.event_down(event);
                }
            }
            event_up(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/nav/nav.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_search extends $mol_pop {
        query(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        suggests() {
            return [];
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Hotkey(),
                this.Nav()
            ];
        }
        showed(next) {
            return this.suggests_showed(next);
        }
        align_hor() {
            return "right";
        }
        Anchor() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.anchor_content();
            return obj;
        }
        bubble_content() {
            return [
                this.Menu()
            ];
        }
        Suggest(id) {
            const obj = new this.$.$mol_button_minor();
            obj.click = (event) => this.suggest_select(id, event);
            obj.sub = () => this.suggest_content(id);
            return obj;
        }
        clear(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Hotkey() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                escape: (next) => this.clear(next)
            });
            return obj;
        }
        nav_components() {
            return [];
        }
        nav_focused(component) {
            if (component !== undefined)
                return component;
            return null;
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.keys_y = () => this.nav_components();
            obj.current_y = (component) => this.nav_focused(component);
            return obj;
        }
        suggests_showed(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        hint() {
            return this.$.$mol_locale.text('$mol_search_hint');
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
        keyboard() {
            return "search";
        }
        enter() {
            return "search";
        }
        bring() {
            return this.Query().bring();
        }
        Query() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.query(next);
            obj.hint = () => this.hint();
            obj.submit = (event) => this.submit(event);
            obj.enabled = () => this.enabled();
            obj.keyboard = () => this.keyboard();
            obj.enter = () => this.enter();
            return obj;
        }
        Clear_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Clear() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$mol_search_Clear_hint');
            obj.click = (event) => this.clear(event);
            obj.sub = () => [
                this.Clear_icon()
            ];
            return obj;
        }
        anchor_content() {
            return [
                this.Query(),
                this.Clear()
            ];
        }
        menu_items() {
            return [];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_items();
            return obj;
        }
        suggest_select(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        suggest_label(id) {
            return "";
        }
        Suggest_label(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.suggest_label(id);
            obj.needle = () => this.query();
            return obj;
        }
        suggest_content(id) {
            return [
                this.Suggest_label(id)
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "query", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Anchor", null);
    __decorate([
        $mol_mem_key
    ], $mol_search.prototype, "Suggest", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "clear", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Hotkey", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "nav_focused", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Nav", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "suggests_showed", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Query", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Clear_icon", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Clear", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Menu", null);
    __decorate([
        $mol_mem_key
    ], $mol_search.prototype, "suggest_select", null);
    __decorate([
        $mol_mem_key
    ], $mol_search.prototype, "Suggest_label", null);
    $.$mol_search = $mol_search;
})($ || ($ = {}));
//mol/search/-view.tree/search.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_search extends $.$mol_search {
            anchor_content() {
                return [
                    this.Query(),
                    ...this.query() ? [this.Clear()] : [],
                ];
            }
            suggests_showed(next = true) {
                this.query();
                if (!this.focused())
                    return false;
                return next;
            }
            suggest_selected(next) {
                if (next === undefined)
                    return;
                this.query(next);
                this.Query().focused(true);
            }
            nav_components() {
                return [
                    this.Query(),
                    ...this.menu_items(),
                ];
            }
            nav_focused(component) {
                if (!this.focused())
                    return null;
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.suggests_showed()) {
                    this.ensure_visible(component, "center");
                    component.focused(true);
                }
                return component;
            }
            suggest_label(key) {
                return key;
            }
            menu_items() {
                return this.suggests().map((suggest) => this.Suggest(suggest));
            }
            suggest_select(id, event) {
                this.query(id);
                this.Query().selection([id.length, id.length]);
                this.Query().focused(true);
            }
            clear(event) {
                this.query('');
            }
        }
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "anchor_content", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "suggests_showed", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "nav_focused", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "menu_items", null);
        $$.$mol_search = $mol_search;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/search/search.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/search/search.view.css", "[mol_search] {\n\talign-self: flex-start;\n\tflex: auto;\n}\n\n[mol_search_anchor] {\n\tflex: 1 1 auto;\n}\n\n[mol_search_query] {\n\tflex-grow: 1;\n}\n\n[mol_search_menu] {\n\tmin-height: .75rem;\n\tdisplay: flex;\n}\n\n[mol_search_suggest] {\n\ttext-align: left;\n}\n\n[mol_search_suggest_label_high] {\n\tcolor: var(--mol_theme_shade);\n\ttext-shadow: none;\n}\n");
})($ || ($ = {}));
//mol/search/-css/search.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_magnify extends $mol_icon {
        path() {
            return "M9.5,3C13.09,3 16,5.91 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16C5.91,16 3,13.09 3,9.5C3,5.91 5.91,3 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z";
        }
    }
    $.$mol_icon_magnify = $mol_icon_magnify;
})($ || ($ = {}));
//mol/icon/magnify/-view.tree/magnify.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_pencil extends $mol_icon {
        path() {
            return "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z";
        }
    }
    $.$mol_icon_pencil = $mol_icon_pencil;
})($ || ($ = {}));
//mol/icon/pencil/-view.tree/pencil.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_pencil_outline extends $mol_icon {
        path() {
            return "M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z";
        }
    }
    $.$mol_icon_pencil_outline = $mol_icon_pencil_outline;
})($ || ($ = {}));
//mol/icon/pencil/outline/-view.tree/outline.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_ghost extends $mol_view {
        Sub() {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_ghost.prototype, "Sub", null);
    $.$mol_ghost = $mol_ghost;
})($ || ($ = {}));
//mol/ghost/-view.tree/ghost.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_ghost extends $.$mol_ghost {
            dom_node_external(next) {
                return this.Sub().dom_node(next);
            }
            dom_node_actual() {
                this.dom_node();
                const node = this.Sub().dom_node_actual();
                const attr = this.attr();
                const style = this.style();
                const fields = this.field();
                $mol_dom_render_attributes(node, attr);
                $mol_dom_render_styles(node, style);
                $mol_dom_render_fields(node, fields);
                return node;
            }
            dom_tree() {
                const Sub = this.Sub();
                const node = Sub.dom_tree();
                try {
                    this.dom_node_actual();
                    this.auto();
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                return node;
            }
            title() {
                return this.Sub().title();
            }
            minimal_width() {
                return this.Sub().minimal_width();
            }
            minimal_height() {
                return this.Sub().minimal_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_ghost.prototype, "dom_node_actual", null);
        $$.$mol_ghost = $mol_ghost;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/ghost/ghost.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_drag extends $mol_ghost {
        event() {
            return {
                dragstart: (event) => this.drag_start(event),
                drag: (event) => this.drag_move(event),
                dragend: (event) => this.drag_end(event)
            };
        }
        attr() {
            return {
                draggable: true,
                mol_drag_status: this.status()
            };
        }
        transfer() {
            return {
                "text/plain": "",
                "text/html": "",
                "text/uri-list": ""
            };
        }
        allow_copy() {
            return true;
        }
        allow_link() {
            return true;
        }
        allow_move() {
            return true;
        }
        image() {
            return this.dom_node();
        }
        start(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        drag_start(event) {
            return this.start(event);
        }
        move(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        drag_move(event) {
            return this.move(event);
        }
        end(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        drag_end(event) {
            return this.end(event);
        }
        status(next) {
            if (next !== undefined)
                return next;
            return "ready";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_drag.prototype, "start", null);
    __decorate([
        $mol_mem
    ], $mol_drag.prototype, "move", null);
    __decorate([
        $mol_mem
    ], $mol_drag.prototype, "end", null);
    __decorate([
        $mol_mem
    ], $mol_drag.prototype, "status", null);
    $.$mol_drag = $mol_drag;
})($ || ($ = {}));
//mol/drag/-view.tree/drag.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_drag extends $.$mol_drag {
            status(next = 'ready') { return next; }
            drag_start(event) {
                setTimeout(() => this.status('drag'));
                const transfer = this.transfer();
                for (let type in transfer) {
                    event.dataTransfer.setData(type, transfer[type]);
                }
                event.dataTransfer.setDragImage(this.image(), 0, -32);
                const effects = [];
                if (this.allow_copy())
                    effects.push('Copy');
                if (this.allow_link())
                    effects.push('Link');
                if (this.allow_move())
                    effects.push('Move');
                let effectAllowed = effects[0].toLowerCase() + effects.slice(1).join('');
                if (effectAllowed === 'copyLinkMove')
                    effectAllowed = 'all';
                event.dataTransfer.effectAllowed = effectAllowed;
                this.start(event);
            }
            drag_end(event) {
                setTimeout(() => this.status('ready'));
                this.end(event);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_drag.prototype, "status", null);
        $$.$mol_drag = $mol_drag;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/drag/drag.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_drop extends $mol_ghost {
        enabled(next) {
            if (next !== undefined)
                return next;
            return true;
        }
        event() {
            return {
                dragenter: (event) => this.enter(event),
                dragover: (event) => this.move(event),
                dragleave: (event) => this.leave(event),
                drop: (event) => this.drop(event)
            };
        }
        attr() {
            return {
                mol_drop_status: this.status()
            };
        }
        adopt(transfer) {
            if (transfer !== undefined)
                return transfer;
            return {};
        }
        receive(transfer) {
            if (transfer !== undefined)
                return transfer;
            return null;
        }
        allow() {
            return [
                "copy",
                "move",
                "link"
            ];
        }
        enter(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        move(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        leave(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        drop(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        status(next) {
            if (next !== undefined)
                return next;
            return "ready";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_drop.prototype, "enabled", null);
    __decorate([
        $mol_mem
    ], $mol_drop.prototype, "adopt", null);
    __decorate([
        $mol_mem
    ], $mol_drop.prototype, "receive", null);
    __decorate([
        $mol_mem
    ], $mol_drop.prototype, "enter", null);
    __decorate([
        $mol_mem
    ], $mol_drop.prototype, "move", null);
    __decorate([
        $mol_mem
    ], $mol_drop.prototype, "leave", null);
    __decorate([
        $mol_mem
    ], $mol_drop.prototype, "drop", null);
    __decorate([
        $mol_mem
    ], $mol_drop.prototype, "status", null);
    $.$mol_drop = $mol_drop;
})($ || ($ = {}));
//mol/drop/-view.tree/drop.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_drop extends $.$mol_drop {
            status(next = 'ready') { return next; }
            _target = null;
            enter(event) {
                if (event.defaultPrevented)
                    return;
                if (!this.enabled())
                    return;
                const action = this.decide_action(event);
                event.dataTransfer.dropEffect = action;
                if (action !== 'none')
                    this.status('drag');
                this._target = event.target;
                event.preventDefault();
            }
            move(event) {
                if (event.defaultPrevented)
                    return;
                if (!this.enabled())
                    return;
                event.dataTransfer.dropEffect = this.decide_action(event);
                event.preventDefault();
            }
            decide_action(event) {
                const allow = this.allow();
                if (allow.includes('move') && event.shiftKey)
                    return 'move';
                else if (allow.includes('copy') && event.ctrlKey)
                    return 'copy';
                else if (allow.includes('link') && event.altKey)
                    return 'link';
                else
                    return allow[0];
            }
            leave(event) {
                if (this._target === event.target) {
                    this.status('ready');
                }
            }
            receive(transfer) {
                return transfer;
            }
            drop(event) {
                if (event.defaultPrevented)
                    return;
                event.preventDefault();
                setTimeout(() => this.status('ready'));
                const obj = this.adopt(event.dataTransfer);
                if (!obj)
                    return;
                this.receive(obj);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_drop.prototype, "status", null);
        $$.$mol_drop = $mol_drop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/drop/drop.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_pin extends $mol_icon {
        path() {
            return "M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z";
        }
    }
    $.$mol_icon_pin = $mol_icon_pin;
})($ || ($ = {}));
//mol/icon/pin/-view.tree/pin.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_pin_outline extends $mol_icon {
        path() {
            return "M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12M8.8,14L10,12.8V4H14V12.8L15.2,14H8.8Z";
        }
    }
    $.$mol_icon_pin_outline = $mol_icon_pin_outline;
})($ || ($ = {}));
//mol/icon/pin/outline/-view.tree/outline.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_meta_menu_items extends $mol_list {
        id() {
            return "";
        }
        editing() {
            return false;
        }
        drop_allow() {
            return [
                "move",
                "link"
            ];
        }
        ids() {
            return this.list().list();
        }
        list() {
            const obj = new this.$.$hyoo_crowd_list();
            return obj;
        }
        item_title(id) {
            return this.item(id).title();
        }
        item(id) {
            const obj = new this.$.$hyoo_meta_model();
            return obj;
        }
        item_list(id) {
            const obj = new this.$.$hyoo_crowd_list();
            return obj;
        }
        item_moved(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        rows() {
            return this.items();
        }
        item_expandable(id) {
            return false;
        }
        item_expanded(id, next) {
            if (next !== undefined)
                return next;
            return true;
        }
        Item_expand(id) {
            const obj = new this.$.$mol_check_expand();
            obj.expandable = () => this.item_expandable(id);
            obj.expanded = (next) => this.item_expanded(id, next);
            return obj;
        }
        editable() {
            return false;
        }
        transfer_adopt(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        receive_after(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        item_drag_end(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        item_text(id) {
            return "";
        }
        item_html(id) {
            return "";
        }
        item_uri(id) {
            return "";
        }
        param() {
            return "";
        }
        highlight() {
            return "";
        }
        Item_link(id) {
            const obj = new this.$.$hyoo_meta_link();
            obj.meta = () => this.item(id);
            obj.param = () => this.param();
            obj.highlight = () => this.highlight();
            obj.Avatar = () => null;
            return obj;
        }
        Item_drag(id) {
            const obj = new this.$.$mol_drag();
            obj.end = (next) => this.item_drag_end(id, next);
            obj.transfer = () => ({
                "text/plain": this.item_text(id),
                "text/html": this.item_html(id),
                "text/uri-list": this.item_uri(id)
            });
            obj.Sub = () => this.Item_link(id);
            return obj;
        }
        Item_drop_after(id) {
            const obj = new this.$.$mol_drop();
            obj.enabled = () => this.editable();
            obj.adopt = (next) => this.transfer_adopt(next);
            obj.receive = (next) => this.receive_after(id, next);
            obj.allow = () => this.drop_allow();
            obj.Sub = () => this.Item_drag(id);
            return obj;
        }
        item_remove(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Item_remove_icon(id) {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Item_remove(id) {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_meta_menu_items_Item_remove_hint');
            obj.click = (next) => this.item_remove(id, next);
            obj.sub = () => [
                this.Item_remove_icon(id)
            ];
            return obj;
        }
        item_pin(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Item_pin_icon(id) {
            const obj = new this.$.$mol_icon_pin_outline();
            return obj;
        }
        Item_pin(id) {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_meta_menu_items_Item_pin_hint');
            obj.click = (next) => this.item_pin(id, next);
            obj.sub = () => [
                this.Item_pin_icon(id)
            ];
            return obj;
        }
        receive_inside(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        item_add(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Item_add_icon(id) {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Item_add(id) {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_meta_menu_items_Item_add_hint');
            obj.click = (next) => this.item_add(id, next);
            obj.sub = () => [
                this.Item_add_icon(id)
            ];
            return obj;
        }
        Item_drop_inside(id) {
            const obj = new this.$.$mol_drop();
            obj.enabled = () => this.editable();
            obj.adopt = (next) => this.transfer_adopt(next);
            obj.receive = (next) => this.receive_inside(id, next);
            obj.allow = () => this.drop_allow();
            obj.Sub = () => this.Item_add(id);
            return obj;
        }
        item_row(id) {
            return [
                this.Item_expand(id),
                this.Item_drop_after(id),
                this.Item_remove(id),
                this.Item_pin(id),
                this.Item_drop_inside(id)
            ];
        }
        Item_row(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.item_row(id);
            return obj;
        }
        Item_items(id) {
            const obj = new this.$.$hyoo_meta_menu_items();
            obj.editing = () => this.editing();
            obj.list = () => this.item_list(id);
            obj.item = (id) => this.item(id);
            obj.item_moved = (id, next) => this.item_moved(id, next);
            obj.item_expanded = (id, next) => this.item_expanded(id, next);
            obj.item_list = (id) => this.item_list(id);
            obj.item_uri = (id) => this.item_uri(id);
            obj.highlight = () => this.highlight();
            obj.item_add = (id, next) => this.item_add(id, next);
            return obj;
        }
        item_content(id) {
            return [
                this.Item_row(id),
                this.Item_items(id)
            ];
        }
        Item(id) {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.item_content(id);
            return obj;
        }
        items() {
            return [
                this.Item("0_0")
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_meta_menu_items.prototype, "list", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "item", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "item_list", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "item_moved", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "item_expanded", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "Item_expand", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_menu_items.prototype, "transfer_adopt", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "receive_after", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "item_drag_end", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "Item_link", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "Item_drag", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "Item_drop_after", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "item_remove", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "Item_remove_icon", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "Item_remove", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "item_pin", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "Item_pin_icon", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "Item_pin", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "receive_inside", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "item_add", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "Item_add_icon", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "Item_add", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "Item_drop_inside", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "Item_row", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "Item_items", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu_items.prototype, "Item", null);
    $.$hyoo_meta_menu_items = $hyoo_meta_menu_items;
})($ || ($ = {}));
//hyoo/meta/menu/items/-view.tree/items.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_meta_menu_items extends $.$hyoo_meta_menu_items {
            id() {
                return this.list().land.id();
            }
            editable() {
                return this.list().land.allowed_mod();
            }
            item_editable(id) {
                return this.item(id).land.allowed_mod();
            }
            ids() {
                return super.ids().slice().reverse();
            }
            items() {
                return this.ids().map(id => this.Item(id));
            }
            item(id) {
                return this.list().world().Fund($hyoo_meta_model).Item(id);
            }
            item_expandable(id) {
                return this.item_list(id).list().length > 0;
            }
            item_content(id) {
                return [
                    this.Item_row(id),
                    ...this.item_expanded(id)
                        ? [this.Item_items(id)]
                        : []
                ];
            }
            item_row(id) {
                return [
                    this.Item_expand(id),
                    this.Item_drop_after(id),
                    ...this.editable()
                        ? this.list().has(id)
                            ? this.editing()
                                ? [this.Item_remove(id)]
                                : this.item_editable(id)
                                    ? [this.Item_drop_inside(id)]
                                    : []
                            : [this.Item_pin(id)]
                        : [],
                ];
            }
            item_remove(id) {
                this.list().drop(id);
            }
            item_pin(id) {
                this.list().add(id);
                this.item_moved(id, this.id());
            }
            add() {
                return this.item_add(this.id());
            }
            item_html(id) {
                return ($mol_jsx("a", { href: this.item_uri(id) }, this.item_title(id))).outerHTML;
            }
            item_text(id) {
                return `\\\\${this.item_title(id)}\\${this.item_uri(id)}\\\\`;
            }
            transfer_adopt(transfer) {
                const uri = transfer.getData("text/uri-list");
                if (!uri)
                    return;
                return $mol_int62_string_ensure(uri.match(/[0-9a-z]+_[0-9a-z]+/)?.[0] ?? '');
            }
            receive_after(anchor, dropped) {
                if (anchor === dropped)
                    return;
                const list = this.list();
                const exists = list.has(dropped);
                list.drop(dropped);
                const index = list.list().indexOf(anchor);
                list.insert([dropped], Math.min(list.list().length, index + 1));
                if (!exists)
                    this.item_moved(dropped, list.land.id());
            }
            receive_inside(anchor, dropped) {
                if (anchor === dropped)
                    return;
                const list = this.item_list(anchor);
                const exists = list.has(dropped);
                list.drop(dropped);
                list.insert([dropped], 0);
                if (!exists)
                    this.item_moved(dropped, list.land.id());
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_meta_menu_items.prototype, "items", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_meta_menu_items.prototype, "item", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_meta_menu_items.prototype, "item_content", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_meta_menu_items.prototype, "item_row", null);
        __decorate([
            $mol_action
        ], $hyoo_meta_menu_items.prototype, "item_remove", null);
        __decorate([
            $mol_action
        ], $hyoo_meta_menu_items.prototype, "item_pin", null);
        __decorate([
            $mol_action
        ], $hyoo_meta_menu_items.prototype, "add", null);
        __decorate([
            $mol_action
        ], $hyoo_meta_menu_items.prototype, "receive_after", null);
        __decorate([
            $mol_action
        ], $hyoo_meta_menu_items.prototype, "receive_inside", null);
        $$.$hyoo_meta_menu_items = $hyoo_meta_menu_items;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/meta/menu/items/items.view.tsx
;
"use strict";
var $;
(function ($) {
    const { rem, px } = $mol_style_unit;
    $mol_style_define($hyoo_meta_menu_items, {
        Item_expand: {
            position: 'absolute',
            zIndex: $mol_layer.float,
            margin: {
                left: rem(-1.25),
            },
        },
        Item_drop_after: {
            '@': {
                'mol_drop_status': {
                    'drag': {
                        box: {
                            shadow: [{
                                    inset: false,
                                    x: 0,
                                    y: px(-1),
                                    blur: 0,
                                    spread: 0,
                                    color: $mol_theme.focus,
                                }]
                        },
                    },
                },
            },
        },
        Item_add: {
            opacity: 0.5,
            ':hover': {
                opacity: 1,
            },
        },
        Item_drop_inside: {
            '@': {
                'mol_drop_status': {
                    'drag': {
                        box: {
                            shadow: [{
                                    inset: false,
                                    x: px(1),
                                    y: px(1),
                                    blur: 0,
                                    spread: 0,
                                    color: $mol_theme.focus,
                                }]
                        },
                        opacity: 1,
                    },
                },
            },
        },
        Item_row: {
            justifyContent: 'space-between',
            alignItems: 'flex-start',
        },
        Item_link: {
            flex: {
                grow: 1,
                shrink: 1,
            },
        },
        Item_items: {
            margin: {
                left: rem(.75),
                bottom: rem(.75),
            },
            padding: {
                left: rem(.75),
            },
            box: {
                shadow: [{
                        inset: true,
                        x: px(1),
                        y: 0,
                        blur: 0,
                        spread: 0,
                        color: $mol_theme.line,
                    }],
            },
        },
    });
})($ || ($ = {}));
//hyoo/meta/menu/items/items.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_meta_menu extends $mol_page {
        editable() {
            return true;
        }
        item_moved(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        yard() {
            const obj = new this.$.$hyoo_sync_yard();
            return obj;
        }
        item_title(id) {
            return this.item(id).title();
        }
        item(id) {
            const obj = new this.$.$hyoo_meta_model();
            return obj;
        }
        ids() {
            return this.list().list();
        }
        world() {
            return this.list().world();
        }
        list() {
            const obj = new this.$.$hyoo_crowd_list();
            return obj;
        }
        item_list(id) {
            const obj = new this.$.$hyoo_crowd_list();
            return obj;
        }
        drop_allow() {
            return [
                "move",
                "link"
            ];
        }
        Logo() {
            const obj = new this.$.$mol_avatar();
            obj.id = () => this.id();
            return obj;
        }
        tools_ext() {
            return [];
        }
        head() {
            return [
                this.Title(),
                this.Tools(),
                this.Search()
            ];
        }
        tools() {
            return [
                this.Search_toggle(),
                this.Editing(),
                this.Add(),
                ...this.tools_ext()
            ];
        }
        body() {
            return [
                this.Found(),
                this.Content(),
                this.Drop_end()
            ];
        }
        id() {
            return "";
        }
        search(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Search() {
            const obj = new this.$.$mol_search();
            obj.query = (next) => this.search(next);
            return obj;
        }
        search_show(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Search_icon() {
            const obj = new this.$.$mol_icon_magnify();
            return obj;
        }
        Search_toggle() {
            const obj = new this.$.$mol_check_icon();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_meta_menu_Search_toggle_hint');
            obj.checked = (next) => this.search_show(next);
            obj.Icon = () => this.Search_icon();
            return obj;
        }
        editing(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Editing_icon() {
            const obj = new this.$.$mol_icon_pencil_outline();
            return obj;
        }
        Editing() {
            const obj = new this.$.$mol_check_icon();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_meta_menu_Editing_hint');
            obj.checked = (next) => this.editing(next);
            obj.Icon = () => this.Editing_icon();
            return obj;
        }
        add(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Add_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Add() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_meta_menu_Add_hint');
            obj.click = (next) => this.add(next);
            obj.sub = () => [
                this.Add_icon()
            ];
            return obj;
        }
        found() {
            return [];
        }
        item_uri(id) {
            return "";
        }
        item_add(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Found() {
            const obj = new this.$.$hyoo_meta_menu_items();
            obj.editing = () => this.editing();
            obj.drop_allow = () => [];
            obj.list = () => this.list();
            obj.ids = () => this.found();
            obj.highlight = () => this.search();
            obj.item_uri = (id) => this.item_uri(id);
            obj.item_moved = (id, next) => this.item_moved(id, next);
            obj.item_add = (id, next) => this.item_add(id, next);
            return obj;
        }
        item_expanded(id, next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Content() {
            const obj = new this.$.$hyoo_meta_menu_items();
            obj.editing = () => this.editing();
            obj.drop_allow = () => this.drop_allow();
            obj.list = () => this.list();
            obj.item_uri = (id) => this.item_uri(id);
            obj.item_expanded = (id, next) => this.item_expanded(id, next);
            obj.item_moved = (id, next) => this.item_moved(id, next);
            obj.item_list = (id) => this.item_list(id);
            obj.item_add = (id, next) => this.item_add(id, next);
            return obj;
        }
        transfer_adopt(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        receive_end(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Drop_zone() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Drop_end() {
            const obj = new this.$.$mol_drop();
            obj.enabled = () => this.editable();
            obj.adopt = (next) => this.transfer_adopt(next);
            obj.receive = (next) => this.receive_end(next);
            obj.Sub = () => this.Drop_zone();
            obj.allow = () => this.drop_allow();
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu.prototype, "item_moved", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_menu.prototype, "yard", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu.prototype, "item", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_menu.prototype, "list", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu.prototype, "item_list", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_menu.prototype, "Logo", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_menu.prototype, "search", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_menu.prototype, "Search", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_menu.prototype, "search_show", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_menu.prototype, "Search_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_menu.prototype, "Search_toggle", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_menu.prototype, "editing", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_menu.prototype, "Editing_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_menu.prototype, "Editing", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_menu.prototype, "add", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_menu.prototype, "Add_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_menu.prototype, "Add", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu.prototype, "item_add", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_menu.prototype, "Found", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_menu.prototype, "item_expanded", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_menu.prototype, "Content", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_menu.prototype, "transfer_adopt", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_menu.prototype, "receive_end", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_menu.prototype, "Drop_zone", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_menu.prototype, "Drop_end", null);
    $.$hyoo_meta_menu = $hyoo_meta_menu;
})($ || ($ = {}));
//hyoo/meta/menu/-view.tree/menu.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_meta_menu extends $.$hyoo_meta_menu {
            id() {
                return this.list().land.id();
            }
            head() {
                return [
                    this.Title(),
                    this.Tools(),
                    ...this.search_show() ? [this.Search()] : [],
                ];
            }
            editable() {
                return this.list().land.allowed_mod();
            }
            item_editable(id) {
                return this.item(id).land.allowed_mod();
            }
            tools() {
                return this.editable() ? super.tools() : [this.Search_toggle(), ...this.tools_ext()];
            }
            body() {
                return this.search().trim()
                    ? [this.Found()]
                    : [this.Content(), this.Drop_end()];
            }
            search_show(next = false) {
                if (next === true)
                    this.Search().bring();
                if (next === false)
                    this.search('');
                return next;
            }
            item(id) {
                return this.list().world().Fund($hyoo_meta_model).Item(id);
            }
            found() {
                if (!this.search().trim())
                    return [];
                return this.yard()
                    .land_search(this.search())
                    .map(id => this.item(id).whole())
                    .filter(meta => meta.title().trim())
                    .map(meta => meta.id());
            }
            add() {
                return this.item_add(this.id());
            }
            transfer_adopt(transfer) {
                const uri = transfer.getData("text/uri-list");
                if (!uri)
                    return;
                return $mol_int62_string_ensure(uri.match(/[0-9a-z]+_[0-9a-z]+/)?.[0] ?? '');
            }
            receive_end(dropped) {
                const list = this.list();
                const exists = list.has(dropped);
                list.drop(dropped);
                this.list().insert([dropped], 0);
                if (!exists)
                    this.item_moved(dropped, this.id());
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_meta_menu.prototype, "head", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_menu.prototype, "body", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_menu.prototype, "search_show", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_meta_menu.prototype, "item", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_menu.prototype, "found", null);
        __decorate([
            $mol_action
        ], $hyoo_meta_menu.prototype, "add", null);
        __decorate([
            $mol_action
        ], $hyoo_meta_menu.prototype, "receive_end", null);
        $$.$hyoo_meta_menu = $hyoo_meta_menu;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/meta/menu/menu.view.tsx
;
"use strict";
var $;
(function ($) {
    const { rem, px } = $mol_style_unit;
    $mol_style_define($hyoo_meta_menu, {
        flex: {
            basis: rem(20),
            grow: 0,
        },
        Drop_end: {
            flex: {
                grow: 1,
                basis: rem(1.5),
            },
            '@': {
                'mol_drop_status': {
                    'drag': {
                        box: {
                            shadow: [{
                                    inset: false,
                                    x: 0,
                                    y: px(-1),
                                    blur: 0,
                                    spread: 0,
                                    color: $mol_theme.focus,
                                }]
                        },
                    },
                },
            },
        },
    });
})($ || ($ = {}));
//hyoo/meta/menu/menu.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_page_side_menu extends $hyoo_meta_menu {
        side_current() {
            const obj = new this.$.$hyoo_page_side();
            return obj;
        }
        Title() {
            const obj = new this.$.$hyoo_meta_link();
            obj.meta = () => this.side();
            return obj;
        }
        title() {
            return this.side().title();
        }
        side() {
            const obj = new this.$.$hyoo_page_side();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_page_side_menu.prototype, "side_current", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_menu.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_menu.prototype, "side", null);
    $.$hyoo_page_side_menu = $hyoo_page_side_menu;
})($ || ($ = {}));
//hyoo/page/side/menu/-view.tree/menu.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_page_side_menu extends $.$hyoo_page_side_menu {
            item_expanded(id, next) {
                const cur = this.side_current();
                const path = [...cur.books()];
                if (cur.pages().length)
                    path.unshift(cur);
                return next ?? ($mol_mem_cached(() => this.item_expanded(id)) || path.some(book => book.id() === id));
            }
            item_moved(what, where) {
                const page = this.item(what).as($hyoo_page_side);
                const book_next = where ? this.item(where).as($hyoo_page_side) : null;
                const book_prev = page.book();
                if (book_prev !== book_next)
                    book_prev?.pages_node().drop(what);
                page.book(book_next);
            }
        }
        __decorate([
            $mol_mem_key
        ], $hyoo_page_side_menu.prototype, "item_expanded", null);
        __decorate([
            $mol_action
        ], $hyoo_page_side_menu.prototype, "item_moved", null);
        $$.$hyoo_page_side_menu = $hyoo_page_side_menu;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/page/side/menu/menu.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_bar extends $mol_view {
    }
    $.$mol_bar = $mol_bar;
})($ || ($ = {}));
//mol/bar/-view.tree/bar.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/bar/bar.view.css", "[mol_bar] {\n\tdisplay: flex;\n\t/* box-shadow: inset 0 0 0 1px var(--mol_theme_line); */\n\tborder-radius: var(--mol_gap_round);\n}\n");
})($ || ($ = {}));
//mol/bar/-css/bar.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron_left extends $mol_icon {
        path() {
            return "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";
        }
    }
    $.$mol_icon_chevron_left = $mol_icon_chevron_left;
})($ || ($ = {}));
//mol/icon/chevron/left/-view.tree/left.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron_right extends $mol_icon {
        path() {
            return "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";
        }
    }
    $.$mol_icon_chevron_right = $mol_icon_chevron_right;
})($ || ($ = {}));
//mol/icon/chevron/right/-view.tree/right.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_paginator extends $mol_bar {
        sub() {
            return [
                this.Backward(),
                this.Value(),
                this.Forward()
            ];
        }
        backward_hint() {
            return this.$.$mol_locale.text('$mol_paginator_backward_hint');
        }
        backward(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Backward_icon() {
            const obj = new this.$.$mol_icon_chevron_left();
            return obj;
        }
        Backward() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.backward_hint();
            obj.click = (event) => this.backward(event);
            obj.sub = () => [
                this.Backward_icon()
            ];
            return obj;
        }
        value(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        Value() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.value()
            ];
            return obj;
        }
        forward_hint() {
            return this.$.$mol_locale.text('$mol_paginator_forward_hint');
        }
        forward(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Forward_icon() {
            const obj = new this.$.$mol_icon_chevron_right();
            return obj;
        }
        Forward() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.forward_hint();
            obj.click = (event) => this.forward(event);
            obj.sub = () => [
                this.Forward_icon()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_paginator.prototype, "backward", null);
    __decorate([
        $mol_mem
    ], $mol_paginator.prototype, "Backward_icon", null);
    __decorate([
        $mol_mem
    ], $mol_paginator.prototype, "Backward", null);
    __decorate([
        $mol_mem
    ], $mol_paginator.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_paginator.prototype, "Value", null);
    __decorate([
        $mol_mem
    ], $mol_paginator.prototype, "forward", null);
    __decorate([
        $mol_mem
    ], $mol_paginator.prototype, "Forward_icon", null);
    __decorate([
        $mol_mem
    ], $mol_paginator.prototype, "Forward", null);
    $.$mol_paginator = $mol_paginator;
})($ || ($ = {}));
//mol/paginator/-view.tree/paginator.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paginator extends $.$mol_paginator {
            backward(event) {
                if (event.defaultPrevented)
                    return;
                event.preventDefault();
                this.value(this.value() - 1);
            }
            forward(event) {
                if (event.defaultPrevented)
                    return;
                event.preventDefault();
                this.value(this.value() + 1);
            }
        }
        $$.$mol_paginator = $mol_paginator;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/paginator/paginator.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/paginator/paginator.view.css", "[mol_paginator] {\n\talign-items: flex-start;\n}\n\n[mol_paginator_value] {\n\tpadding: .5rem 0;\n}\n");
})($ || ($ = {}));
//mol/paginator/-css/paginator.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_search_jumper extends $mol_search {
        Root() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        forward(event) {
            return this.Index().forward(event);
        }
        backward(event) {
            return this.Index().backward(event);
        }
        Index() {
            const obj = new this.$.$mol_paginator();
            obj.value = (next) => this.index(next);
            return obj;
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Backward(),
                this.Forward()
            ];
        }
        index(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        Backward() {
            const obj = new this.$.$mol_hotkey();
            obj.mod_shift = () => true;
            obj.key = () => ({
                enter: (event) => this.backward(event)
            });
            return obj;
        }
        escape(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Forward() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                enter: (event) => this.forward(event),
                escape: (next) => this.escape(next)
            });
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_search_jumper.prototype, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_search_jumper.prototype, "Index", null);
    __decorate([
        $mol_mem
    ], $mol_search_jumper.prototype, "index", null);
    __decorate([
        $mol_mem
    ], $mol_search_jumper.prototype, "Backward", null);
    __decorate([
        $mol_mem
    ], $mol_search_jumper.prototype, "escape", null);
    __decorate([
        $mol_mem
    ], $mol_search_jumper.prototype, "Forward", null);
    $.$mol_search_jumper = $mol_search_jumper;
})($ || ($ = {}));
//mol/search/jumper/-view.tree/jumper.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_search_jumper extends $.$mol_search_jumper {
            results() {
                const needle = this.query();
                if (needle.length < 2)
                    return [];
                const root = this.Root();
                if (!root)
                    return [];
                const regexp = $mol_regexp.from({ needle }, { ignoreCase: true });
                try {
                    return [...root.view_find((_, text = '') => regexp.test(text))];
                }
                catch (error) {
                    if (!(error instanceof Promise))
                        $mol_fail_hidden(error);
                    return [];
                }
            }
            index(next) {
                this.query();
                const all = this.results();
                if (all.length == 0)
                    return 0;
                let index = next ?? super.index();
                if (index > all.length)
                    index = 1;
                if (index <= 0)
                    index = all.length;
                if (next !== undefined) {
                    const path = all[index - 1];
                    this.Root().ensure_visible(path[path.length - 1]);
                }
                return index;
            }
            anchor_content() {
                return [
                    this.Query(),
                    ...(this.query().length > 0) ? [
                        this.Clear(),
                        this.Index(),
                    ] : [],
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_search_jumper.prototype, "results", null);
        __decorate([
            $mol_mem
        ], $mol_search_jumper.prototype, "index", null);
        $$.$mol_search_jumper = $mol_search_jumper;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/search/jumper/jumper.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_information extends $mol_icon {
        path() {
            return "M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z";
        }
    }
    $.$mol_icon_information = $mol_icon_information;
})($ || ($ = {}));
//mol/icon/information/-view.tree/information.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_information_outline extends $mol_icon {
        path() {
            return "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M11,17H13V11H11V17Z";
        }
    }
    $.$mol_icon_information_outline = $mol_icon_information_outline;
})($ || ($ = {}));
//mol/icon/information/outline/-view.tree/outline.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_bookmark extends $mol_icon {
        path() {
            return "M17,3H7C5.9,3 5,3.9 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z";
        }
    }
    $.$mol_icon_bookmark = $mol_icon_bookmark;
})($ || ($ = {}));
//mol/icon/bookmark/-view.tree/bookmark.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_bookmark_outline extends $mol_icon {
        path() {
            return "M17,18L12,15.82L7,18V5H17M17,3H7C5.9,3 5,3.9 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z";
        }
    }
    $.$mol_icon_bookmark_outline = $mol_icon_bookmark_outline;
})($ || ($ = {}));
//mol/icon/bookmark/outline/-view.tree/outline.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_pick extends $mol_pop {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        Anchor() {
            return this.Trigger();
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        trigger_enabled() {
            return true;
        }
        trigger_content() {
            return [
                this.title()
            ];
        }
        hint() {
            return "";
        }
        Trigger() {
            const obj = new this.$.$mol_check();
            obj.minimal_width = () => 40;
            obj.minimal_height = () => 40;
            obj.enabled = () => this.trigger_enabled();
            obj.checked = (next) => this.showed(next);
            obj.sub = () => this.trigger_content();
            obj.hint = () => this.hint();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_pick.prototype, "keydown", null);
    __decorate([
        $mol_mem
    ], $mol_pick.prototype, "Trigger", null);
    $.$mol_pick = $mol_pick;
})($ || ($ = {}));
//mol/pick/-view.tree/pick.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pick extends $.$mol_pick {
            keydown(event) {
                if (!this.trigger_enabled())
                    return;
                if (event.defaultPrevented)
                    return;
                if (event.keyCode === $mol_keyboard_code.escape) {
                    if (!this.showed())
                        return;
                    event.preventDefault();
                    this.showed(false);
                }
            }
        }
        $$.$mol_pick = $mol_pick;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/pick/pick.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pick/pick.view.css", "[mol_pick_trigger] {\n\talign-items: center;\n\tflex-grow: 1;\n}\n");
})($ || ($ = {}));
//mol/pick/-css/pick.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_calendar extends $mol_icon {
        path() {
            return "M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z";
        }
    }
    $.$mol_icon_calendar = $mol_icon_calendar;
})($ || ($ = {}));
//mol/icon/calendar/-view.tree/calendar.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_calendar_today extends $mol_icon {
        path() {
            return "M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3Z";
        }
    }
    $.$mol_icon_calendar_today = $mol_icon_calendar_today;
})($ || ($ = {}));
//mol/icon/calendar/today/-view.tree/today.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_format extends $mol_string {
        allow() {
            return "0123456789";
        }
        hint() {
            return this.mask("0");
        }
        keyboard() {
            return "numeric";
        }
        mask(id) {
            return "";
        }
    }
    $.$mol_format = $mol_format;
})($ || ($ = {}));
//mol/format/-view.tree/format.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_format extends $.$mol_format {
            selection([from, to] = [0, 0]) {
                const prev = $mol_wire_probe(() => this.selection());
                if (!prev)
                    return [0, 100];
                if (from !== to)
                    return [from, to];
                const allow = this.allow();
                const value = this.value_changed();
                const filtered = [...value].filter(letter => allow.includes(letter)).join('');
                const mask = this.mask(filtered);
                if ((prev?.[0] ?? 0) >= from)
                    return [from, to];
                const lastAllow = (value.length - [...value].reverse().findIndex(letter => allow.includes(letter))) % (value.length + 1);
                if (lastAllow < from) {
                    from = to = lastAllow;
                }
                while (mask[from] && mask[from] !== '_') {
                    ++from;
                    ++to;
                }
                return [from, to];
            }
            value_changed(next) {
                const allow = this.allow();
                const normalize = (val) => {
                    val = [...val].filter(letter => allow.includes(letter)).join('');
                    const letters = [...val].reverse();
                    return this.mask(val).replace(/_/gu, () => letters.pop() ?? '_') + letters.reverse().join('');
                };
                if (next !== undefined) {
                    next = normalize(next);
                    if ([...next].filter(letter => allow.includes(letter)).join('')) {
                        if (next.includes('_'))
                            return next;
                    }
                    else {
                        next = '';
                    }
                }
                return normalize(this.value(next));
            }
        }
        __decorate([
            $mol_mem
        ], $mol_format.prototype, "selection", null);
        __decorate([
            $mol_mem
        ], $mol_format.prototype, "value_changed", null);
        $$.$mol_format = $mol_format;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/format/format.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/format/format.view.css", "[mol_format] {\n\tfont-family: monospace;\n}\n");
})($ || ($ = {}));
//mol/format/-css/format.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_trash_can extends $mol_icon {
        path() {
            return "M9,3V4H4V6H5V19C5,20.1 5.9,21 7,21H17C18.1,21 19,20.1 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z";
        }
    }
    $.$mol_icon_trash_can = $mol_icon_trash_can;
})($ || ($ = {}));
//mol/icon/trash/can/-view.tree/can.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_trash_can_outline extends $mol_icon {
        path() {
            return "M9,3V4H4V6H5V19C5,20.1 5.9,21 7,21H17C18.1,21 19,20.1 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z";
        }
    }
    $.$mol_icon_trash_can_outline = $mol_icon_trash_can_outline;
})($ || ($ = {}));
//mol/icon/trash/can/outline/-view.tree/outline.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_hor extends $mol_view {
    }
    $.$mol_hor = $mol_hor;
})($ || ($ = {}));
//mol/hor/-view.tree/hor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hor extends $.$mol_hor {
            minimal_width() {
                let min = 0;
                for (const view of this.sub()) {
                    if (!(view instanceof $mol_view))
                        continue;
                    min += view.minimal_width();
                }
                return min;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_hor.prototype, "minimal_width", null);
        $$.$mol_hor = $mol_hor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/hor/hor.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_define($mol_hor, {
        display: 'flex',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        flex: {
            grow: 1,
            shrink: 0,
            basis: 'auto',
        },
    });
})($ || ($ = {}));
//mol/hor/hor.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_calendar extends $mol_list {
        sub() {
            return [
                this.Head(),
                this.Weekdays()
            ];
        }
        weeks() {
            return [];
        }
        weeks_count() {
            return 6;
        }
        Weekday(id) {
            const obj = new this.$.$mol_calendar_day();
            obj.holiday = () => this.weekend(id);
            obj.sub = () => [
                this.weekday(id)
            ];
            return obj;
        }
        Week(id) {
            const obj = new this.$.$mol_hor();
            obj.sub = () => this.week_days(id);
            return obj;
        }
        Day(id) {
            const obj = new this.$.$mol_calendar_day();
            obj.ghost = () => this.day_ghost(id);
            obj.holiday = () => this.day_holiday(id);
            obj.selected = () => this.day_selected(id);
            obj.theme = () => this.day_theme(id);
            obj.sub = () => this.day_content(id);
            return obj;
        }
        month_string() {
            return "";
        }
        month_moment() {
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 24;
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        head() {
            return [
                this.Title()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.head();
            return obj;
        }
        weekdays() {
            return [];
        }
        Weekdays() {
            const obj = new this.$.$mol_hor();
            obj.sub = () => this.weekdays();
            return obj;
        }
        weekend(id) {
            return false;
        }
        weekday(id) {
            return "";
        }
        week_days(id) {
            return [];
        }
        day_ghost(id) {
            return false;
        }
        day_holiday(id) {
            return false;
        }
        day_selected(id) {
            return false;
        }
        day_theme(id) {
            return null;
        }
        day_text(id) {
            return "";
        }
        day_content(id) {
            return [
                this.day_text(id)
            ];
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_calendar.prototype, "Weekday", null);
    __decorate([
        $mol_mem_key
    ], $mol_calendar.prototype, "Week", null);
    __decorate([
        $mol_mem_key
    ], $mol_calendar.prototype, "Day", null);
    __decorate([
        $mol_mem
    ], $mol_calendar.prototype, "month_moment", null);
    __decorate([
        $mol_mem
    ], $mol_calendar.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $mol_calendar.prototype, "Head", null);
    __decorate([
        $mol_mem
    ], $mol_calendar.prototype, "Weekdays", null);
    $.$mol_calendar = $mol_calendar;
    class $mol_calendar_day extends $mol_view {
        minimal_height() {
            return 24;
        }
        minimal_width() {
            return 36;
        }
        attr() {
            return {
                mol_calendar_holiday: this.holiday(),
                mol_calendar_ghost: this.ghost(),
                mol_calendar_selected: this.selected(),
                mol_theme: this.theme()
            };
        }
        holiday() {
            return false;
        }
        ghost() {
            return false;
        }
        selected() {
            return false;
        }
        theme() {
            return null;
        }
    }
    $.$mol_calendar_day = $mol_calendar_day;
})($ || ($ = {}));
//mol/calendar/-view.tree/calendar.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_calendar extends $.$mol_calendar {
            month_moment() {
                const moment = new $mol_time_moment(this.month_string() || undefined);
                return new $mol_time_moment({ year: moment.year, month: moment.month });
            }
            title() {
                return this.month_moment().toString('Month YYYY');
            }
            day_first() {
                return this.month_moment().merge({ day: 0 });
            }
            day_last() {
                return this.day_first().shift('P1M');
            }
            day_draw_from() {
                let weekday = this.day_first().weekday;
                return this.day_first().shift({ day: -weekday });
            }
            weekdays() {
                const next = [];
                for (let index = 0; index < 7; ++index) {
                    next.push(this.Weekday(index));
                }
                return next;
            }
            weekday(index) {
                return this.day_draw_from().shift({ day: index }).toString('WD');
            }
            weekend(index) {
                return [5, 6].indexOf(index) >= 0;
            }
            sub() {
                return [
                    ...super.sub(),
                    ...this.weeks(),
                ];
            }
            weeks() {
                const weeks = [];
                let count = this.weeks_count();
                for (let i = 0; i < count; ++i) {
                    weeks.push(this.Week(i));
                }
                return weeks;
            }
            week_days(index) {
                const days = [];
                let start = this.day_draw_from().shift({ day: index * 7 });
                for (let i = 0; i < 7; ++i) {
                    days.push(this.Day(start.shift({ day: i }).toString('YYYY-MM-DD')));
                }
                return days;
            }
            day_text(day) {
                return new $mol_time_moment(day).toString("D");
            }
            day_holiday(day) {
                return this.weekend(new $mol_time_moment(day).weekday);
            }
            day_ghost(day) {
                return new $mol_time_moment(day).toString('YYYY-MM') !== this.day_first().toString('YYYY-MM');
            }
            day_selected(day) {
                return new $mol_time_moment().toString('YYYY-MM-DD') === day;
            }
            day_theme(day) {
                return this.day_selected(day) ? '$mol_theme_current' : super.day_theme(day);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "month_moment", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "day_first", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "day_last", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "day_draw_from", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "weekdays", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "weekday", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "weeks", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "week_days", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "day_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "day_holiday", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "day_ghost", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "day_selected", null);
        $$.$mol_calendar = $mol_calendar;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/calendar/calendar.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/calendar/calendar.view.css", "[mol_calendar] {\n\tdisplay: table;\n\tfont-family: monospace;\n}\n\n[mol_calendar_head] {\n\tdisplay: table-caption;\n\tbackground: inherit;\n}\n\n[mol_calendar_title] {\n\tjustify-content: center;\n}\n\n[mol_calendar_weekdays] ,\n[mol_calendar_week] {\n\tdisplay: table-row;\n\tpadding: 0;\n}\n\n[mol_calendar_day] {\n\tdisplay: table-cell;\n\tpadding: .25rem .5rem;\n\ttext-align: center;\n\tword-break: normal;\n\tbox-shadow: none;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_calendar_weekday] {\n\tcolor: var(--mol_theme_shade);\n\tborder-bottom: 1px solid var(--mol_theme_line);\n}\n\n[mol_calendar_holiday] {\n\tcolor: var(--mol_theme_special);\n}\n\n[mol_calendar_ghost] {\n\topacity: .2;\n}\n");
})($ || ($ = {}));
//mol/calendar/-css/calendar.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_date extends $mol_pick {
        Icon() {
            const obj = new this.$.$mol_icon_calendar();
            return obj;
        }
        bubble_content() {
            return [
                this.Input_row(),
                this.Calendar()
            ];
        }
        value_number(next) {
            if (next !== undefined)
                return next;
            return +NaN;
        }
        value_moment(next) {
            if (next !== undefined)
                return next;
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        enabled() {
            return true;
        }
        today_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Today_icon() {
            const obj = new this.$.$mol_icon_calendar_today();
            return obj;
        }
        Today() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$mol_date_Today_hint');
            obj.enabled = () => this.enabled();
            obj.click = (event) => this.today_click(event);
            obj.sub = () => [
                this.Today_icon()
            ];
            return obj;
        }
        value(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        input_mask(id) {
            return "";
        }
        Input() {
            const obj = new this.$.$mol_format();
            obj.value = (next) => this.value(next);
            obj.mask = (id) => this.input_mask(id);
            obj.enabled = () => this.enabled();
            return obj;
        }
        clear(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Clear_icon() {
            const obj = new this.$.$mol_icon_trash_can_outline();
            return obj;
        }
        Clear() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$mol_date_Clear_hint');
            obj.enabled = () => this.enabled();
            obj.click = (event) => this.clear(event);
            obj.sub = () => [
                this.Clear_icon()
            ];
            return obj;
        }
        input_content() {
            return [
                this.Today(),
                this.Input(),
                this.Clear()
            ];
        }
        Input_row() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.input_content();
            return obj;
        }
        month_moment() {
            return this.value_moment();
        }
        day_selected(id) {
            return false;
        }
        day_click(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        prev_hint() {
            return this.$.$mol_locale.text('$mol_date_prev_hint');
        }
        prev(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Prev_icon() {
            const obj = new this.$.$mol_icon_chevron_left();
            return obj;
        }
        Prev() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.prev_hint();
            obj.click = (event) => this.prev(event);
            obj.sub = () => [
                this.Prev_icon()
            ];
            return obj;
        }
        next_hint() {
            return this.$.$mol_locale.text('$mol_date_next_hint');
        }
        next(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Next_icon() {
            const obj = new this.$.$mol_icon_chevron_right();
            return obj;
        }
        Next() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.next_hint();
            obj.click = (event) => this.next(event);
            obj.sub = () => [
                this.Next_icon()
            ];
            return obj;
        }
        Calendar_tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Prev(),
                this.Calendar_title(),
                this.Next()
            ];
            return obj;
        }
        Calendar_title() {
            return this.Calendar().Title();
        }
        Calendar() {
            const obj = new this.$.$mol_date_calendar();
            obj.enabled = () => this.enabled();
            obj.month_moment = () => this.month_moment();
            obj.day_selected = (id) => this.day_selected(id);
            obj.day_click = (id, event) => this.day_click(id, event);
            obj.head = () => [
                this.Calendar_tools()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "value_number", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "value_moment", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "today_click", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Today_icon", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Today", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Input", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "clear", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Clear_icon", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Clear", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Input_row", null);
    __decorate([
        $mol_mem_key
    ], $mol_date.prototype, "day_click", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "prev", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Prev_icon", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Prev", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "next", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Next_icon", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Next", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Calendar_tools", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Calendar", null);
    $.$mol_date = $mol_date;
    class $mol_date_calendar extends $mol_calendar {
        day_content(id) {
            return [
                this.Day_button(id)
            ];
        }
        day_click(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
        Day_button(id) {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.day_text(id);
            obj.event_click = (event) => this.day_click(id, event);
            obj.minimal_height = () => 24;
            obj.enabled = () => this.enabled();
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_date_calendar.prototype, "day_click", null);
    __decorate([
        $mol_mem_key
    ], $mol_date_calendar.prototype, "Day_button", null);
    $.$mol_date_calendar = $mol_date_calendar;
})($ || ($ = {}));
//mol/date/-view.tree/date.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let error;
    let result;
    let handler;
    function $mol_try(handler2) {
        handler = handler2;
        error = undefined;
        result = undefined;
        window.dispatchEvent(new Event('$mol_try'));
        const error2 = error;
        const result2 = result;
        error = undefined;
        result = undefined;
        return error2 || result2;
    }
    $.$mol_try = $mol_try;
    self.addEventListener('$mol_try', (event) => {
        result = handler();
    }, true);
    self.addEventListener('error', (event) => {
        error = event.error;
    }, true);
})($ || ($ = {}));
//mol/try/try.web.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_date extends $.$mol_date {
            trigger_content() {
                return [this.value() || this.Icon()];
            }
            input_mask(val) {
                return val.length > 8 ? '____-__-__ __:__' : '____-__-__ ';
            }
            input_content() {
                return [
                    this.Today(),
                    this.Input(),
                    ...this.value() ? [this.Clear()] : [],
                ];
            }
            value(val) {
                const moment = this.value_moment();
                if (val === undefined)
                    return moment?.toString('YYYY-MM-DD hh:mm') ?? '';
                const moment2 = $mol_try(() => val && new $mol_time_moment(val)) || null;
                if (moment2 instanceof Error)
                    return val;
                this.value_moment(moment2);
                return val;
            }
            value_moment(next) {
                const stamp = this.value_number();
                if (next === undefined) {
                    return isNaN(stamp) ? null : new $mol_time_moment(stamp);
                }
                this.value_number(next?.valueOf() ?? NaN);
                return next;
            }
            value_number(next) {
                const value = this.value();
                if (next === undefined) {
                    if (!value)
                        return NaN;
                    const moment = $mol_try(() => new $mol_time_moment(value));
                    if (moment instanceof Error)
                        return NaN;
                    return moment.valueOf() ?? NaN;
                }
                const moment = $mol_try(() => new $mol_time_moment(next));
                this.value(moment.toString(value.length > 12 ? 'YYYY-MM-DD hh:mm' : 'YYYY-MM-DD'));
                return next;
            }
            value_moment_today() {
                return this.value()
                    ? new $mol_time_moment().mask(this.value())
                    : new $mol_time_moment();
            }
            clear() {
                this.value('');
                this.Input().focused(true);
                this.Input().selection([0, 0]);
            }
            month_moment(next) {
                if (next)
                    return next;
                let moment = $mol_try(() => new $mol_time_moment(this.value()));
                if (moment instanceof Error || !moment.year)
                    return new $mol_time_moment;
                if (moment.month === undefined) {
                    moment = moment.merge({ month: 0 });
                }
                return moment;
            }
            day_selected(day) {
                return this.value_moment()?.toString('YYYY-MM-DD') === day;
            }
            day_click(day) {
                const moment = new $mol_time_moment(day);
                this.value_moment(this.value_moment()?.merge(moment) ?? moment);
                this.showed(false);
            }
            prev() {
                this.month_moment(this.month_moment().shift({ month: -1 }));
            }
            next() {
                this.month_moment(this.month_moment().shift({ month: +1 }));
            }
            today_click() {
                this.value_moment(this.value_moment_today());
            }
        }
        __decorate([
            $mol_mem
        ], $mol_date.prototype, "value", null);
        __decorate([
            $mol_mem
        ], $mol_date.prototype, "value_moment", null);
        __decorate([
            $mol_mem
        ], $mol_date.prototype, "value_number", null);
        __decorate([
            $mol_mem
        ], $mol_date.prototype, "value_moment_today", null);
        __decorate([
            $mol_mem
        ], $mol_date.prototype, "month_moment", null);
        $$.$mol_date = $mol_date;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/date/date.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/date/date.view.css", "/* [mol_date_bubble] {\n\tpadding: .5rem;\n} */\n\n[mol_date_input] {\n\tflex-shrink: 0;\n}\n\n[mol_date_prev] ,\n[mol_date_next] {\n\tflex-grow: 1;\n}\n[mol_date_prev] {\n\tjustify-content: flex-end;\n}\n\n[mol_date_calendar_title] {\n\tpadding: var(--mol_gap_text);\n}\n\n[mol_date_calendar_day] {\n\tpadding: 0;\n}\n\n[mol_date_calendar_day_button] {\n\twidth: 100%;\n\t/* padding: .25rem .5rem; */\n\tjustify-content: center;\n\tcursor: pointer;\n\tcolor: inherit;\n}\n");
})($ || ($ = {}));
//mol/date/-css/date.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_page_side_view extends $mol_page {
        profile() {
            const obj = new this.$.$hyoo_page_side();
            return obj;
        }
        peer(id) {
            const obj = new this.$.$hyoo_page_side();
            return obj;
        }
        book() {
            const obj = new this.$.$hyoo_page_side();
            return obj;
        }
        highlight() {
            return "";
        }
        id() {
            return this.side().id();
        }
        editable() {
            return this.side().editable();
        }
        title(next) {
            return this.side().title(next);
        }
        side_details(next) {
            return this.side().details(next);
        }
        released() {
            return this.side().released();
        }
        side_release() {
            return this.side().release();
        }
        changed_moment() {
            return this.side().changed_moment();
        }
        authors() {
            return this.side().authors();
        }
        following() {
            return this.side().following();
        }
        side() {
            const obj = new this.$.$hyoo_page_side();
            return obj;
        }
        plugins() {
            return [
                this.Search_start()
            ];
        }
        auto() {
            return [
                this.slides_send(),
                this.history_mark()
            ];
        }
        Logo() {
            return this.Menu_toggle();
        }
        head() {
            return [
                this.Title(),
                this.Tools(),
                this.Search()
            ];
        }
        tools() {
            return [
                this.Edit_toggle(),
                this.Search_toggle(),
                this.Info_toggle(),
                this.Bookmark_toggle()
            ];
        }
        slides_content() {
            return "# {title}\n{details}";
        }
        body() {
            return [
                this.Details(),
                this.Signature()
            ];
        }
        search_start(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Search_start() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                F: (next) => this.search_start(next)
            });
            obj.mod_ctrl = () => true;
            return obj;
        }
        slides_send() {
            return null;
        }
        history_mark() {
            return null;
        }
        menu_showed(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Avatar() {
            const obj = new this.$.$mol_avatar();
            obj.id = () => this.id();
            return obj;
        }
        Menu_toggle() {
            const obj = new this.$.$mol_check();
            obj.checked = (next) => this.menu_showed(next);
            obj.hint = () => this.$.$mol_locale.text('$hyoo_page_side_view_Menu_toggle_hint');
            obj.sub = () => [
                this.Avatar()
            ];
            return obj;
        }
        search_query(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        search_stop(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Search() {
            const obj = new this.$.$mol_search_jumper();
            obj.query = (val) => this.search_query(val);
            obj.Root = () => this.Details();
            obj.clear = (next) => this.search_stop(next);
            return obj;
        }
        editing(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Edit_icon() {
            const obj = new this.$.$mol_icon_pencil_outline();
            return obj;
        }
        Unreleased() {
            const obj = new this.$.$mol_speck();
            return obj;
        }
        edit_toggle_label() {
            return [
                this.Unreleased()
            ];
        }
        Edit_toggle() {
            const obj = new this.$.$mol_check_icon();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_page_side_view_Edit_toggle_hint');
            obj.checked = (next) => this.editing(next);
            obj.Icon = () => this.Edit_icon();
            obj.label = () => this.edit_toggle_label();
            return obj;
        }
        search_show(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Search_icon() {
            const obj = new this.$.$mol_icon_magnify();
            return obj;
        }
        Search_toggle() {
            const obj = new this.$.$mol_check_icon();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_page_side_view_Search_toggle_hint');
            obj.checked = (next) => this.search_show(next);
            obj.Icon = () => this.Search_icon();
            return obj;
        }
        info(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Info_icon() {
            const obj = new this.$.$mol_icon_information_outline();
            return obj;
        }
        Info_toggle() {
            const obj = new this.$.$mol_check_icon();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_page_side_view_Info_toggle_hint');
            obj.checked = (next) => this.info(next);
            obj.Icon = () => this.Info_icon();
            return obj;
        }
        bookmark(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Bookmark_icon() {
            const obj = new this.$.$mol_icon_bookmark_outline();
            return obj;
        }
        Bookmark_toggle() {
            const obj = new this.$.$mol_check_icon();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_page_side_view_Bookmark_toggle_hint');
            obj.checked = (next) => this.bookmark(next);
            obj.Icon = () => this.Bookmark_icon();
            return obj;
        }
        details() {
            return "";
        }
        Details() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.details();
            obj.highlight = () => this.search_query();
            return obj;
        }
        Changed() {
            const obj = new this.$.$mol_date();
            obj.value_moment = () => this.changed_moment();
            return obj;
        }
        Author_link(id) {
            const obj = new this.$.$hyoo_meta_link();
            obj.meta = () => this.peer(id);
            return obj;
        }
        author_list() {
            return [
                this.Author_link("0_0")
            ];
        }
        Author_list() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.author_list();
            return obj;
        }
        Following() {
            const obj = new this.$.$hyoo_meta_link();
            obj.meta = () => this.following();
            return obj;
        }
        Signature() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Changed(),
                this.Author_list(),
                this.Following()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "profile", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_page_side_view.prototype, "peer", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "book", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "side", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "search_start", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "Search_start", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "menu_showed", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "Avatar", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "Menu_toggle", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "search_query", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "search_stop", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "Search", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "editing", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "Edit_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "Unreleased", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "Edit_toggle", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "search_show", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "Search_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "Search_toggle", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "info", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "Info_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "Info_toggle", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "bookmark", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "Bookmark_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "Bookmark_toggle", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "Details", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "Changed", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_page_side_view.prototype, "Author_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "Author_list", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "Following", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_view.prototype, "Signature", null);
    $.$hyoo_page_side_view = $hyoo_page_side_view;
})($ || ($ = {}));
//hyoo/page/side/view/-view.tree/view.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_persist = $mol_wire_solid;
})($ || ($ = {}));
//mol/mem/persist/persist.ts
;
"use strict";
var $;
(function ($) {
    class $mol_storage extends $mol_object2 {
        static native() {
            return $mol_wire_sync(this.$.$mol_dom_context.navigator.storage);
        }
        static persisted(next) {
            $mol_mem_persist();
            const native = this.native();
            const prev = $mol_mem_cached(() => this.persisted()) ?? native.persisted();
            if (next && !prev)
                native.persist();
            return next ?? prev;
        }
        static estimate() {
            return this.native().estimate();
        }
        static dir() {
            return this.native().getDirectory();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_storage, "native", null);
    __decorate([
        $mol_mem
    ], $mol_storage, "persisted", null);
    $.$mol_storage = $mol_storage;
})($ || ($ = {}));
//mol/storage/storage.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_page_side_view extends $.$hyoo_page_side_view {
            head() {
                return [
                    this.Title(),
                    this.Tools(),
                    ...this.search_show() ? [this.Search()] : [],
                ];
            }
            bookmark(next) {
                if (next)
                    this.$.$mol_storage.persisted(true);
                return this.profile().bookmarked(this.side().id(), next);
            }
            public(next) {
                return this.side().book()?.bookmarked(this.side().id(), next);
            }
            Edit_toggle() {
                return this.editable() ? super.Edit_toggle() : null;
            }
            edit_toggle_label() {
                return this.released() ? [] : [this.Unreleased()];
            }
            search_show(next = false) {
                if (next === true) {
                    this.search_query(this.highlight());
                    this.Search().bring();
                }
                if (next === false)
                    this.search_query('');
                return next;
            }
            search_start(event) {
                this.search_show(true);
                event?.preventDefault();
            }
            search_stop(event) {
                this.search_show(false);
                this.Search_toggle().focused(true);
                event?.preventDefault();
            }
            details() {
                return this.editing() ? this.side_details() : this.side_release();
            }
            Following() {
                return this.following() ? super.Following() : null;
            }
            author_list() {
                return [...this.authors()].map(peer => this.Author_link(peer));
            }
            slides_content() {
                return super.slides_content()
                    .replace('{title}', this.title() || '{title}')
                    .replace('{details}', this.details() || '{description}');
            }
            slides_send() {
                const parent = this.$.$mol_dom_context.parent;
                if (parent === this.$.$mol_dom_context.self)
                    return;
                parent.postMessage(['done', this.slides_content()], { targetOrigin: 'https://slides.hyoo.ru' });
            }
            history_mark() {
                this.profile().history_add(this.side().id());
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_page_side_view.prototype, "head", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_view.prototype, "edit_toggle_label", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_view.prototype, "search_show", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_view.prototype, "author_list", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_view.prototype, "slides_content", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_view.prototype, "slides_send", null);
        __decorate([
            $mol_action
        ], $hyoo_page_side_view.prototype, "history_mark", null);
        $$.$hyoo_page_side_view = $hyoo_page_side_view;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/page/side/view/view.view.ts
;
"use strict";
var $;
(function ($) {
    const { rem, per } = $mol_style_unit;
    $mol_style_define($hyoo_page_side_view, {
        flex: {
            basis: rem(50),
            grow: 0,
        },
        Menu_toggle: {
            margin: [rem(-.5), rem(-.75)],
        },
        Body: {
            padding: $mol_gap.block,
            justifyContent: 'space-between',
        },
        Search: {
            flex: {
                basis: per(100),
            },
        },
        Signature: {
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            flex: {
                direction: 'row-reverse',
                wrap: 'wrap',
            },
        },
        Following: {
            flex: {
                grow: 1,
                shrink: 1,
            },
            color: $mol_theme.special,
        },
    });
})($ || ($ = {}));
//hyoo/page/side/view/view.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_string_button extends $mol_string {
    }
    $.$mol_string_button = $mol_string_button;
})($ || ($ = {}));
//mol/string/button/-view.tree/button.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/button/button.view.css", "[mol_string_button]:not(:placeholder-shown):not(:focus):not(:hover):not(:disabled) {\n\tcolor: var(--mol_theme_control);\n\tbackground: transparent;\n\tbox-shadow: none;\n}\n");
})($ || ($ = {}));
//mol/string/button/-css/button.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_publish extends $mol_icon {
        path() {
            return "M5,4V6H19V4H5M5,14H9V20H15V14H19L12,7L5,14Z";
        }
    }
    $.$mol_icon_publish = $mol_icon_publish;
})($ || ($ = {}));
//mol/icon/publish/-view.tree/publish.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_export extends $mol_icon {
        path() {
            return "M23,12L19,8V11H10V13H19V16M1,18V6C1,4.89 1.9,4 3,4H15C16.1,4 17,4.9 17,6V9H15V6H3V18H15V15H17V18C17,19.1 16.1,20 15,20H3C1.9,20 1,19.1 1,18Z";
        }
    }
    $.$mol_icon_export = $mol_icon_export;
})($ || ($ = {}));
//mol/icon/export/-view.tree/export.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_download extends $mol_icon {
        path() {
            return "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z";
        }
    }
    $.$mol_icon_download = $mol_icon_download;
})($ || ($ = {}));
//mol/icon/download/-view.tree/download.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_download extends $mol_button_minor {
        blob() {
            return null;
        }
        uri() {
            return "";
        }
        file_name() {
            return "blob.bin";
        }
        sub() {
            return [
                this.Icon(),
                this.title()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_download();
            return obj;
        }
        title() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button_download.prototype, "Icon", null);
    $.$mol_button_download = $mol_button_download;
})($ || ($ = {}));
//mol/button/download/-view.tree/download.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_download extends $.$mol_button_download {
            uri() {
                return URL.createObjectURL(this.blob());
            }
            click() {
                const a = $mol_jsx("a", { href: this.uri(), download: this.file_name() });
                a.click();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button_download.prototype, "uri", null);
        $$.$mol_button_download = $mol_button_download;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/download/download.view.tsx
;
"use strict";
var $;
(function ($) {
    class $mol_icon_shield extends $mol_icon {
        path() {
            return "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z";
        }
    }
    $.$mol_icon_shield = $mol_icon_shield;
})($ || ($ = {}));
//mol/icon/shield/-view.tree/shield.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_shield_account extends $mol_icon {
        path() {
            return "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5C13.66,5 15,6.34 15,8C15,9.66 13.66,11 12,11C10.34,11 9,9.66 9,8C9,6.34 10.34,5 12,5M17.13,17C15.92,18.85 14.11,20.24 12,20.92C9.89,20.24 8.08,18.85 6.87,17C6.53,16.5 6.24,16 6,15.47C6,13.82 8.71,12.47 12,12.47C15.29,12.47 18,13.79 18,15.47C17.76,16 17.47,16.5 17.13,17Z";
        }
    }
    $.$mol_icon_shield_account = $mol_icon_shield_account;
})($ || ($ = {}));
//mol/icon/shield/account/-view.tree/account.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_textarea extends $mol_stack {
        attr() {
            return {
                ...super.attr(),
                mol_textarea_clickable: this.clickable(),
                mol_textarea_sidebar_showed: this.sidebar_showed()
            };
        }
        event() {
            return {
                keydown: (event) => this.press(event),
                pointermove: (event) => this.hover(event)
            };
        }
        sub() {
            return [
                this.Edit(),
                this.View()
            ];
        }
        symbols_alt() {
            return {
                comma: "<",
                period: ">",
                dash: "−",
                equals: "≈",
                graveAccent: "́",
                forwardSlash: "÷",
                E: "€",
                X: "×",
                C: "©",
                P: "§",
                H: "₽",
                key0: "°",
                key8: "•",
                key2: "@",
                key3: "#",
                key4: "$",
                key6: "^",
                key7: "&",
                bracketOpen: "[",
                bracketClose: "]",
                slashBack: "|"
            };
        }
        symbols_alt_shift() {
            return {
                V: "✅",
                X: "❌",
                O: "⭕",
                key1: "❗",
                key4: "💲",
                key7: "❓",
                comma: "«",
                period: "»",
                semicolon: "“",
                quoteSingle: "”",
                dash: "—",
                equals: "≠",
                graveAccent: "̱",
                bracketOpen: "{",
                bracketClose: "}"
            };
        }
        clickable(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        sidebar_showed() {
            return false;
        }
        press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        hover(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        value(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        hint() {
            return " ";
        }
        enabled() {
            return true;
        }
        spellcheck() {
            return true;
        }
        length_max() {
            return +Infinity;
        }
        selection(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        submit(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        submit_with_ctrl() {
            return true;
        }
        bring() {
            return this.Edit().bring();
        }
        Edit() {
            const obj = new this.$.$mol_textarea_edit();
            obj.value = (next) => this.value(next);
            obj.hint = () => this.hint();
            obj.enabled = () => this.enabled();
            obj.spellcheck = () => this.spellcheck();
            obj.length_max = () => this.length_max();
            obj.selection = (next) => this.selection(next);
            obj.submit = (next) => this.submit(next);
            obj.submit_with_ctrl = () => this.submit_with_ctrl();
            return obj;
        }
        row_numb(id) {
            return 0;
        }
        highlight() {
            return "";
        }
        View() {
            const obj = new this.$.$mol_text_code();
            obj.text = () => this.value();
            obj.render_visible_only = () => false;
            obj.row_numb = (id) => this.row_numb(id);
            obj.sidebar_showed = () => this.sidebar_showed();
            obj.highlight = () => this.highlight();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "clickable", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "press", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "hover", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "selection", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "Edit", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "View", null);
    $.$mol_textarea = $mol_textarea;
    class $mol_textarea_edit extends $mol_string {
        dom_name() {
            return "textarea";
        }
        enter() {
            return "enter";
        }
        field() {
            return {
                ...super.field(),
                scrollTop: 0
            };
        }
    }
    $.$mol_textarea_edit = $mol_textarea_edit;
})($ || ($ = {}));
//mol/textarea/-view.tree/textarea.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_textarea extends $.$mol_textarea {
            indent_inc() {
                let text = this.value();
                let [from, to] = this.selection();
                const rows = text.split('\n');
                let start = 0;
                for (let i = 0; i < rows.length; ++i) {
                    let end = start + rows[i].length;
                    if (end >= from && start <= to) {
                        if (to === from || start !== to) {
                            rows[i] = '\t' + rows[i];
                            to += 1;
                            end += 1;
                        }
                    }
                    start = end + 1;
                }
                this.value(rows.join('\n'));
                this.selection([from + 1, to]);
            }
            indent_dec() {
                let text = this.value();
                let [from, to] = this.selection();
                const rows = text.split('\n');
                let start = 0;
                for (let i = 0; i < rows.length; ++i) {
                    const end = start + rows[i].length;
                    if (end >= from && start <= to && rows[i].startsWith('\t')) {
                        rows[i] = rows[i].slice(1);
                        to -= 1;
                        if (start < from)
                            from -= 1;
                    }
                    start = end + 1;
                }
                this.value(rows.join('\n'));
                this.selection([from, to]);
            }
            symbol_insert(event) {
                const symbol = event.shiftKey
                    ? this.symbols_alt_shift()[$mol_keyboard_code[event.keyCode]]
                    : this.symbols_alt()[$mol_keyboard_code[event.keyCode]];
                if (!symbol)
                    return;
                document.execCommand('insertText', false, symbol);
            }
            hover(event) {
                this.clickable(event.ctrlKey);
            }
            press(event) {
                if (event.altKey && !event.ctrlKey) {
                    this.symbol_insert(event);
                }
                else {
                    switch (event.keyCode) {
                        case !event.shiftKey && $mol_keyboard_code.tab:
                            this.indent_inc();
                            break;
                        case event.shiftKey && $mol_keyboard_code.tab:
                            this.indent_dec();
                            break;
                        default: return;
                    }
                }
                event.preventDefault();
            }
            row_numb(index) {
                return index;
            }
        }
        $$.$mol_textarea = $mol_textarea;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/textarea/textarea.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/textarea/textarea.view.css", "[mol_textarea] {\n\tflex: 1 0 auto;\n\tflex-direction: column;\n\tvertical-align: top;\n\tmin-height: max-content;\n\twhite-space: pre-wrap;\n\tword-break: break-word;\n\tborder-radius: var(--mol_gap_round);\n\tfont-family: monospace;\n\tposition: relative;\n\ttab-size: 4;\n}\n\n[mol_textarea_view] {\n\tpointer-events: none;\n\twhite-space: inherit;\n\tfont-family: inherit;\n\ttab-size: inherit;\n}\n\n[mol_textarea_view_copy] {\n\tpointer-events: all;\n}\n\n[mol_textarea_clickable] > [mol_textarea_view] {\n\tpointer-events: all;\n}\n\n[mol_textarea_edit] {\n\tfont-family: inherit;\n\tpadding: var(--mol_gap_text);\n\tcolor: transparent !important;\n\tcaret-color: var(--mol_theme_text);\n\tresize: none;\n\ttext-align: inherit;\n\twhite-space: inherit;\n\tborder-radius: inherit;\n\toverflow-anchor: none;\n\tposition: absolute;\n\theight: 100%;\n\twidth: 100%;\n\ttab-size: inherit;\n}\n\n[mol_textarea_sidebar_showed] [mol_textarea_edit] {\n\tleft: 1.75rem;\n\twidth: calc( 100% - 1.75rem );\n}\n\n[mol_textarea_edit]:hover + [mol_textarea_view] {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_textarea_edit]:focus + [mol_textarea_view] {\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));
//mol/textarea/-css/textarea.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_page_side_edit extends $mol_page {
        title(next) {
            return this.side().title(next);
        }
        details(next) {
            return this.side().details(next);
        }
        details_selection(next) {
            return this.side().details_selection(next);
        }
        aura(next) {
            return this.side().aura(next);
        }
        editable() {
            return this.side().editable();
        }
        released() {
            return this.side().released();
        }
        side() {
            const obj = new this.$.$hyoo_page_side();
            return obj;
        }
        Title() {
            const obj = new this.$.$mol_string_button();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_page_side_edit_Title_hint');
            obj.value = (next) => this.title(next);
            obj.enabled = () => this.editable();
            return obj;
        }
        export_sign() {
            return this.$.$mol_locale.text('$hyoo_page_side_edit_export_sign');
        }
        tools() {
            return [
                this.Syntax(),
                this.Publish(),
                this.Export(),
                this.Rights_toggle(),
                this.Close()
            ];
        }
        body() {
            return [
                this.Details_edit(),
                this.Aura_field()
            ];
        }
        Syntax() {
            const obj = new this.$.$mol_link_iconed();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_page_side_edit_Syntax_hint');
            obj.uri = () => "https://marked.hyoo.ru/";
            obj.icon = () => "https://marked.hyoo.ru/hyoo/marked/logo/logo.svg";
            obj.title = () => "";
            return obj;
        }
        publish(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Publish_icon() {
            const obj = new this.$.$mol_icon_publish();
            return obj;
        }
        Publish() {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.publish(next);
            obj.disabled = () => this.released();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_page_side_edit_Publish_hint');
            obj.sub = () => [
                this.Publish_icon()
            ];
            return obj;
        }
        Export_icon() {
            const obj = new this.$.$mol_icon_export();
            return obj;
        }
        download_name() {
            return "{filename}.mt";
        }
        download_blob() {
            const obj = new this.$.$mol_blob();
            return obj;
        }
        Download() {
            const obj = new this.$.$mol_button_download();
            obj.title = () => this.$.$mol_locale.text('$hyoo_page_side_edit_Download_title');
            obj.file_name = () => this.download_name();
            obj.blob = () => this.download_blob();
            return obj;
        }
        copy_text() {
            return "";
        }
        copy_html() {
            return "";
        }
        Copy_html() {
            const obj = new this.$.$mol_button_copy();
            obj.title = () => this.$.$mol_locale.text('$hyoo_page_side_edit_Copy_html_title');
            obj.text = () => this.copy_text();
            obj.html = () => this.copy_html();
            return obj;
        }
        Export() {
            const obj = new this.$.$mol_pick();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_page_side_edit_Export_hint');
            obj.trigger_content = () => [
                this.Export_icon()
            ];
            obj.bubble_content = () => [
                this.Download(),
                this.Copy_html()
            ];
            return obj;
        }
        rights(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Rights_icon() {
            const obj = new this.$.$mol_icon_shield_account();
            return obj;
        }
        Rights_toggle() {
            const obj = new this.$.$mol_check_icon();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_page_side_edit_Rights_toggle_hint');
            obj.checked = (next) => this.rights(next);
            obj.Icon = () => this.Rights_icon();
            return obj;
        }
        close(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.close(next);
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        Details_edit() {
            const obj = new this.$.$mol_textarea();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_page_side_edit_Details_edit_hint');
            obj.value = (next) => this.details(next);
            obj.selection = (next) => this.details_selection(next);
            obj.enabled = () => this.editable();
            return obj;
        }
        Aura() {
            const obj = new this.$.$mol_string_button();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_page_side_edit_Aura_hint');
            obj.value = (next) => this.aura(next);
            obj.enabled = () => this.editable();
            return obj;
        }
        Aura_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_page_side_edit_Aura_field_name');
            obj.Content = () => this.Aura();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_page_side_edit.prototype, "side", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_edit.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_edit.prototype, "Syntax", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_edit.prototype, "publish", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_edit.prototype, "Publish_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_edit.prototype, "Publish", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_edit.prototype, "Export_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_edit.prototype, "download_blob", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_edit.prototype, "Download", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_edit.prototype, "Copy_html", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_edit.prototype, "Export", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_edit.prototype, "rights", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_edit.prototype, "Rights_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_edit.prototype, "Rights_toggle", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_edit.prototype, "close", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_edit.prototype, "Close_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_edit.prototype, "Close", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_edit.prototype, "Details_edit", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_edit.prototype, "Aura", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_edit.prototype, "Aura_field", null);
    $.$hyoo_page_side_edit = $hyoo_page_side_edit;
})($ || ($ = {}));
//hyoo/page/side/edit/-view.tree/edit.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $.$hyoo_marked_cut = $mol_regexp.from([
        '--',
        $mol_regexp.line_end,
    ]);
})($ || ($ = {}));
//hyoo/marked/cut/cut.ts
;
"use strict";
var $;
(function ($) {
    const { optional, slash_back, char_any, char_except, repeat } = $mol_regexp;
    $.$hyoo_marked_line_content = repeat(char_except('\r\n'), 1);
    const uri = repeat(char_except(slash_back));
    const content = { content: $.$hyoo_marked_line_content };
    const strong = $mol_regexp.from([{ marker: '**' }, content, '**']);
    const emphasis = $mol_regexp.from([{ marker: '//' }, content, '//']);
    const insertion = $mol_regexp.from([{ marker: '++' }, content, '++']);
    const deletion = $mol_regexp.from([{ marker: '--' }, content, '--']);
    const code = $mol_regexp.from([{ marker: ';;' }, content, ';;']);
    const with_uri = $mol_regexp.from([
        optional([
            { content: $.$hyoo_marked_line_content },
            slash_back
        ]),
        { uri },
    ]);
    const link = $mol_regexp.from([{ marker: '\\\\' }, with_uri, '\\\\']);
    const embed = $mol_regexp.from([{ marker: '""' }, with_uri, '""']);
    const inline = $mol_regexp.from({ strong, emphasis, insertion, deletion, code, link, embed });
    $.$hyoo_marked_line = $mol_regexp.from({ inline });
})($ || ($ = {}));
//hyoo/marked/line/line.ts
;
"use strict";
var $;
(function ($) {
    $.$hyoo_marked_header = $mol_regexp.from([
        { marker: $mol_regexp.repeat_greedy('=', 1, 6) },
        ' ',
        { content: $hyoo_marked_line_content },
        $mol_regexp.line_end,
    ]);
})($ || ($ = {}));
//hyoo/marked/header/header.ts
;
"use strict";
var $;
(function ($) {
    $.$hyoo_marked_list_line = $mol_regexp.from([
        { indent: $mol_regexp.repeat('  ') },
        { marker: ['-', $mol_regexp.or, '+'] },
        ' ',
        { content: $hyoo_marked_line_content },
        $mol_regexp.line_end,
    ]);
    $.$hyoo_marked_list_item = $mol_regexp.from([
        $.$hyoo_marked_list_line,
        { kids: $mol_regexp.repeat_greedy([
                '  ',
                $hyoo_marked_line_content,
                $mol_regexp.line_end,
            ]) },
    ]);
    $.$hyoo_marked_list = $mol_regexp.repeat_greedy($.$hyoo_marked_list_item, 1);
})($ || ($ = {}));
//hyoo/marked/list/list.ts
;
"use strict";
var $;
(function ($) {
    $.$hyoo_marked_quote_line = $mol_regexp.from([
        { marker: '"' },
        ' ',
        { content: $hyoo_marked_line_content },
        $mol_regexp.line_end,
    ]);
    $.$hyoo_marked_quote = $mol_regexp.repeat_greedy($.$hyoo_marked_quote_line, 1);
})($ || ($ = {}));
//hyoo/marked/quote/quote.ts
;
"use strict";
var $;
(function ($) {
    $.$hyoo_marked_table_line = $mol_regexp.from([
        { indent: $mol_regexp.repeat('  ') },
        { marker: '!' },
        ' ',
        { content: $hyoo_marked_line_content },
        $mol_regexp.line_end,
    ]);
    $.$hyoo_marked_table_row = $mol_regexp.from({ content: [
            $.$hyoo_marked_table_line,
            $mol_regexp.repeat_greedy([
                '  ',
                $hyoo_marked_line_content,
                $mol_regexp.line_end,
            ]),
        ] });
    $.$hyoo_marked_table = $mol_regexp.repeat_greedy($.$hyoo_marked_table_line, 1);
})($ || ($ = {}));
//hyoo/marked/table/table.ts
;
"use strict";
var $;
(function ($) {
    const { or, tab, char_any, repeat, line_end, vary } = $mol_regexp;
    $.$hyoo_marked_script_line = $mol_regexp.from([
        vary([
            tab,
            ['  ', { marker: ['  ', or, '++', or, '--', or, '**'] }],
        ]),
        { content: repeat(char_any) },
        line_end,
    ]);
    $.$hyoo_marked_script = $mol_regexp.repeat_greedy($.$hyoo_marked_script_line, 1);
})($ || ($ = {}));
//hyoo/marked/script/script.ts
;
"use strict";
var $;
(function ($) {
    $.$hyoo_marked_paragraph = $mol_regexp.from([
        { content: $mol_regexp.repeat($mol_regexp.char_any) },
        $mol_regexp.line_end,
    ]);
})($ || ($ = {}));
//hyoo/marked/paragraph/paragraph.ts
;
"use strict";
var $;
(function ($) {
    $.$hyoo_marked_flow = $mol_regexp.from([
        $mol_regexp.begin,
        {
            cut: $hyoo_marked_cut,
            header: $hyoo_marked_header,
            list: $hyoo_marked_list,
            quote: $hyoo_marked_quote,
            table: $hyoo_marked_table,
            script: $hyoo_marked_script,
            paragraph: $hyoo_marked_paragraph,
        },
    ], { multiline: true });
})($ || ($ = {}));
//hyoo/marked/flow/flow.ts
;
"use strict";
var $;
(function ($) {
    const NL = '\n';
    function flow(marked) {
        return [...marked.matchAll($hyoo_marked_flow)].map(found => {
            const token = found.groups;
            if (!token)
                return found[0];
            if (token.cut) {
                return $mol_jsx("hr", null);
            }
            if (token.header) {
                const level = token.marker.length;
                const Tag = `h${level}`;
                return $mol_jsx(Tag, null,
                    NL,
                    line(token.content),
                    NL);
            }
            if (token.list) {
                const Tag = token.list[0] === '+' ? 'ol' : 'ul';
                return $mol_jsx(Tag, null,
                    NL,
                    list_items(token.list),
                    NL);
            }
            if (token.table) {
                return $mol_jsx("table", null,
                    NL,
                    table_rows(token.table),
                    NL);
            }
            if (token.script) {
                return $mol_jsx("pre", null,
                    NL,
                    script_lines(token.script),
                    NL);
            }
            if (token.quote) {
                return $mol_jsx("blockquote", null,
                    NL,
                    flow(token.quote.replace(/^" /gm, '')),
                    NL);
            }
            if (token.paragraph) {
                if (!token.content)
                    return '';
                const content = line(token.content);
                if (content.length !== 1)
                    return $mol_jsx("p", null,
                        NL,
                        content,
                        NL);
                if (typeof content[0] === 'string')
                    return $mol_jsx("p", null,
                        NL,
                        content,
                        NL);
                switch (content[0].localName) {
                    case 'object': return content[0];
                    default: return $mol_jsx("p", null,
                        NL,
                        content,
                        NL);
                }
            }
            return $mol_fail(new SyntaxError(`Unknown token`));
        }).filter(Boolean);
    }
    function table_cells(marked) {
        const tokens = [...marked.matchAll($hyoo_marked_table_line)];
        const cols = [];
        for (const token of tokens) {
            const index = Math.ceil(token.groups.indent.length / 2);
            const col = cols[index] || (cols[index] = []);
            col.push(token);
        }
        return cols.map(col => {
            const lines = col.map(line => line.groups.content);
            return $mol_jsx("td", null,
                NL,
                flow(lines.join('\n') + '\n'),
                NL);
        });
    }
    function table_rows(marked) {
        return [...marked.matchAll($hyoo_marked_table_row)].map(token => {
            return $mol_jsx("tr", null,
                NL,
                table_cells(token.groups.content),
                NL);
        }).filter(Boolean);
    }
    function list_items(marked) {
        return [...marked.matchAll($hyoo_marked_list_item)].map(token => {
            const kids = token.groups.kids.replace(/^  /gm, '');
            return $mol_jsx("li", null,
                NL,
                flow(token.groups.content.replace(/^  /gm, '') + '\n'),
                flow(kids),
                NL);
        }).filter(Boolean);
    }
    function script_lines(marked) {
        return [...marked.matchAll($hyoo_marked_script_line)].map(token => {
            if (token.groups.marker === '++')
                return $mol_jsx("ins", null,
                    "$",
                    token.groups.content,
                    NL);
            if (token.groups.marker === '--')
                return $mol_jsx("del", null,
                    "$",
                    token.groups.content,
                    NL);
            if (token.groups.marker === '**')
                return $mol_jsx("strong", null,
                    "$",
                    token.groups.content,
                    NL);
            return $mol_jsx("span", null,
                token.groups.content,
                NL);
        }).filter(Boolean);
    }
    function line(marked) {
        return [...marked.matchAll($hyoo_marked_line)].map(found => {
            const token = found.groups;
            if (!token)
                return $mol_jsx("span", null, found[0]);
            if (token.strong) {
                return $mol_jsx("strong", null, line(token.content));
            }
            if (token.emphasis) {
                return $mol_jsx("em", null, line(token.content));
            }
            if (token.insertion) {
                return $mol_jsx("ins", null, line(token.content));
            }
            if (token.deletion) {
                return $mol_jsx("del", null, line(token.content));
            }
            if (token.code) {
                return $mol_jsx("code", null, token.content);
            }
            if (token.link) {
                return $mol_jsx("a", { href: token.uri }, line(token.content || token.uri));
            }
            if (token.embed) {
                if (/\b(png|gif|jpg|jpeg|jfif|webp|svg)\b/.test(token.uri)) {
                    return $mol_jsx("img", { src: token.uri, alt: token.content });
                }
                return ($mol_jsx("object", { data: token.uri },
                    NL,
                    $mol_jsx("iframe", { src: token.uri }, token.uri),
                    NL));
            }
            return token[0];
        }).filter(Boolean);
    }
    function $hyoo_marked_to_dom(marked) {
        return $mol_jsx("body", null, flow(marked + '\n'));
    }
    $.$hyoo_marked_to_dom = $hyoo_marked_to_dom;
})($ || ($ = {}));
//hyoo/marked/to/dom/dom.tsx
;
"use strict";
var $;
(function ($) {
    function $hyoo_marked_to_html(marked) {
        return this.$hyoo_marked_to_dom(marked).innerHTML;
    }
    $.$hyoo_marked_to_html = $hyoo_marked_to_html;
})($ || ($ = {}));
//hyoo/marked/to/html/html.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_page_side_edit extends $.$hyoo_page_side_edit {
            publish() {
                this.side().publish();
            }
            permalink() {
                return this.$.$mol_state_arg.make_link({ '': this.side().id() });
            }
            export_sign() {
                return super.export_sign().replace('{link}', this.permalink());
            }
            download_name() {
                return super.download_name().replace('{filename}', this.title());
            }
            copy_text() {
                const view = this.Details_edit().View();
                const normalize = (text) => text
                    .replaceAll(/\\\\(?:([^\\]+?)\\)?([^\\]+?)\\\\/gm, (whole, title, link) => title
                    ? `\\\\${title}\\${view.uri_resolve(link)}\\\\`
                    : `\\\\${view.uri_resolve(link)}\\\\`);
                let details = `= ${this.title()}\n\n${normalize(this.details())}\n`;
                const visit = (book) => {
                    details += '--\n\n';
                    details += '= ' + book.title() + '\n\n';
                    details += normalize(book.details()).replace(/^(=+) /gm, '=$1 ') + '\n';
                    for (const page of book.pages().slice().reverse())
                        visit(page);
                };
                for (const page of this.side().pages().slice().reverse())
                    visit(page);
                return `${details}--\n\n${this.export_sign()}`;
            }
            download_blob() {
                return new $mol_dom_context.Blob([this.copy_text()], { type: 'text/x-marked' });
            }
            copy_html() {
                return this.$.$hyoo_marked_to_html(this.copy_text());
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_page_side_edit.prototype, "permalink", null);
        $$.$hyoo_page_side_edit = $hyoo_page_side_edit;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/page/side/edit/edit.view.ts
;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($hyoo_page_side_edit, {
        margin: [0, 'auto'],
        flex: {
            basis: rem(50),
            grow: 0,
        },
        Tools: {
            flex: {
                grow: 0,
            },
        },
        Body: {
            padding: $mol_gap.block,
        },
    });
})($ || ($ = {}));
//hyoo/page/side/edit/edit.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_expander extends $mol_list {
        rows() {
            return [
                this.Label(),
                this.Content()
            ];
        }
        expanded(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        expandable() {
            return true;
        }
        label() {
            return [
                this.title()
            ];
        }
        Trigger() {
            const obj = new this.$.$mol_check_expand();
            obj.checked = (next) => this.expanded(next);
            obj.expandable = () => this.expandable();
            obj.label = () => this.label();
            return obj;
        }
        Tools() {
            return null;
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Trigger(),
                this.Tools()
            ];
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_expander.prototype, "expanded", null);
    __decorate([
        $mol_mem
    ], $mol_expander.prototype, "Trigger", null);
    __decorate([
        $mol_mem
    ], $mol_expander.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $mol_expander.prototype, "Content", null);
    $.$mol_expander = $mol_expander;
})($ || ($ = {}));
//mol/expander/-view.tree/expander.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_expander extends $.$mol_expander {
            rows() {
                return [
                    this.Label(),
                    ...this.expanded() ? [this.Content()] : []
                ];
            }
            expandable() {
                return this.content().length > 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_expander.prototype, "rows", null);
        $$.$mol_expander = $mol_expander;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/expander/expander.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/expander/expander.view.css", "[mol_expander] {\n\tflex-direction: column;\n}\n\n[mol_expander_label] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_expander_trigger] {\n\tflex: auto;\n\tposition: relative;\n}\n");
})($ || ($ = {}));
//mol/expander/-css/expander.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_page_side_info extends $mol_page {
        text_tokens() {
            return this.Text().flow_tokens();
        }
        text_header_title(id) {
            return this.Text().block_text(id);
        }
        section_arg(id) {
            return this.Text().header_arg(id);
        }
        section_level(id) {
            return this.Text().header_level(id);
        }
        Text() {
            const obj = new this.$.$mol_text();
            return obj;
        }
        details() {
            return this.side().details();
        }
        details_node() {
            return this.side().details_node();
        }
        referrers_list() {
            return this.side().referrers_list();
        }
        referrers_stat(id) {
            return this.side().referrers_stat(id);
        }
        side() {
            const obj = new this.$.$hyoo_page_side();
            return obj;
        }
        title() {
            return this.$.$mol_locale.text('$hyoo_page_side_info_title');
        }
        tools() {
            return [
                this.Slides(),
                this.Close()
            ];
        }
        body() {
            return [
                this.Stat(),
                this.Section_list(),
                this.Ref_list(),
                this.Word_list()
            ];
        }
        slides_uri() {
            return "https://slides.hyoo.ru/#!slides={source}";
        }
        Slides() {
            const obj = new this.$.$mol_link_iconed();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_page_side_info_Slides_hint');
            obj.uri = () => this.slides_uri();
            obj.title = () => "";
            return obj;
        }
        close(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.close(next);
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        size() {
            return "0";
        }
        Size() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.$.$mol_locale.text('$hyoo_page_side_info_Size_title');
            obj.content = () => [
                this.size()
            ];
            return obj;
        }
        chars() {
            return "0";
        }
        Chars() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.$.$mol_locale.text('$hyoo_page_side_info_Chars_title');
            obj.content = () => [
                this.chars()
            ];
            return obj;
        }
        words() {
            return "0";
        }
        Words() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.$.$mol_locale.text('$hyoo_page_side_info_Words_title');
            obj.content = () => [
                this.words()
            ];
            return obj;
        }
        weight() {
            return "0B";
        }
        Weight() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.$.$mol_locale.text('$hyoo_page_side_info_Weight_title');
            obj.content = () => [
                this.weight()
            ];
            return obj;
        }
        Stat() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Size(),
                this.Chars(),
                this.Words(),
                this.Weight()
            ];
            return obj;
        }
        section_expanded(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        section_title(id) {
            return "";
        }
        Section_link(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => this.section_arg(id);
            obj.title = () => this.section_title(id);
            return obj;
        }
        section_list() {
            return [
                this.Section_link("0")
            ];
        }
        Section_list() {
            const obj = new this.$.$mol_expander();
            obj.title = () => this.$.$mol_locale.text('$hyoo_page_side_info_Section_list_title');
            obj.expanded = (next) => this.section_expanded(next);
            obj.content = () => this.section_list();
            return obj;
        }
        ref_expanded(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        ref_uri(id) {
            return "";
        }
        Ref_item_link(id) {
            const obj = new this.$.$mol_link_iconed();
            obj.uri = () => this.ref_uri(id);
            return obj;
        }
        ref_stat(id) {
            return 0;
        }
        Ref_item_stat(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.ref_stat(id)
            ];
            return obj;
        }
        Ref_item(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Ref_item_link(id),
                this.Ref_item_stat(id)
            ];
            return obj;
        }
        ref_list() {
            return [
                this.Ref_item("0_0")
            ];
        }
        Ref_list() {
            const obj = new this.$.$mol_expander();
            obj.title = () => this.$.$mol_locale.text('$hyoo_page_side_info_Ref_list_title');
            obj.expanded = (next) => this.ref_expanded(next);
            obj.content = () => this.ref_list();
            return obj;
        }
        word_item_text(id) {
            return "";
        }
        Word_item_text(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.word_item_text(id)
            ];
            return obj;
        }
        word_item_stat(id) {
            return 0;
        }
        Word_item_stat(id) {
            const obj = new this.$.$mol_speck();
            obj.value = () => this.word_item_stat(id);
            obj.theme = () => "$mol_theme_special";
            return obj;
        }
        Word_item(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Word_item_text(id),
                this.Word_item_stat(id)
            ];
            return obj;
        }
        word_list_items() {
            return [
                this.Word_item("0_0")
            ];
        }
        Word_list_items() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.word_list_items();
            return obj;
        }
        Word_list() {
            const obj = new this.$.$mol_expander();
            obj.title = () => this.$.$mol_locale.text('$hyoo_page_side_info_Word_list_title');
            obj.content = () => [
                this.Word_list_items()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_page_side_info.prototype, "Text", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_info.prototype, "side", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_info.prototype, "Slides", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_info.prototype, "close", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_info.prototype, "Close_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_info.prototype, "Close", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_info.prototype, "Size", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_info.prototype, "Chars", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_info.prototype, "Words", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_info.prototype, "Weight", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_info.prototype, "Stat", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_info.prototype, "section_expanded", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_page_side_info.prototype, "Section_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_info.prototype, "Section_list", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_info.prototype, "ref_expanded", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_page_side_info.prototype, "Ref_item_link", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_page_side_info.prototype, "Ref_item_stat", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_page_side_info.prototype, "Ref_item", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_info.prototype, "Ref_list", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_page_side_info.prototype, "Word_item_text", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_page_side_info.prototype, "Word_item_stat", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_page_side_info.prototype, "Word_item", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_info.prototype, "Word_list_items", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side_info.prototype, "Word_list", null);
    $.$hyoo_page_side_info = $hyoo_page_side_info;
})($ || ($ = {}));
//hyoo/page/side/info/-view.tree/info.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let $mol_si_prefix;
    (function ($mol_si_prefix) {
        $mol_si_prefix[$mol_si_prefix["y"] = -8] = "y";
        $mol_si_prefix[$mol_si_prefix["z"] = -7] = "z";
        $mol_si_prefix[$mol_si_prefix["a"] = -6] = "a";
        $mol_si_prefix[$mol_si_prefix["f"] = -5] = "f";
        $mol_si_prefix[$mol_si_prefix["p"] = -4] = "p";
        $mol_si_prefix[$mol_si_prefix["n"] = -3] = "n";
        $mol_si_prefix[$mol_si_prefix["\u00B5"] = -2] = "\u00B5";
        $mol_si_prefix[$mol_si_prefix["m"] = -1] = "m";
        $mol_si_prefix[$mol_si_prefix[""] = 0] = "";
        $mol_si_prefix[$mol_si_prefix["k"] = 1] = "k";
        $mol_si_prefix[$mol_si_prefix["M"] = 2] = "M";
        $mol_si_prefix[$mol_si_prefix["G"] = 3] = "G";
        $mol_si_prefix[$mol_si_prefix["T"] = 4] = "T";
        $mol_si_prefix[$mol_si_prefix["P"] = 5] = "P";
        $mol_si_prefix[$mol_si_prefix["E"] = 6] = "E";
        $mol_si_prefix[$mol_si_prefix["Z"] = 7] = "Z";
        $mol_si_prefix[$mol_si_prefix["Y"] = 8] = "Y";
    })($mol_si_prefix = $.$mol_si_prefix || ($.$mol_si_prefix = {}));
})($ || ($ = {}));
//mol/si/prefix.ts
;
"use strict";
var $;
(function ($) {
    function $mol_si_short(numb, unit = '') {
        let magnitude = Math.floor(Math.log10(Math.abs(numb)) / 3);
        if (!Number.isFinite(magnitude)) {
            const prefix = isNaN(numb) ? `∅` : numb.toLocaleString();
            const suffix = unit ? ' ' + unit : '';
            return prefix + suffix;
        }
        let normal = numb / 10 ** (3 * magnitude);
        if (Math.round(Math.abs(normal)) === 1000) {
            normal /= 1000;
            ++magnitude;
        }
        const prefix = normal.toPrecision(3);
        if (unit) {
            return prefix + ' ' + $mol_si_prefix[magnitude] + unit;
        }
        else {
            return prefix + $mol_si_prefix[magnitude];
        }
    }
    $.$mol_si_short = $mol_si_short;
})($ || ($ = {}));
//mol/si/short/short.ts
;
"use strict";
var $;
(function ($) {
    function $mol_text_profile(text) {
        text = '\n\n' + text + '\n\n';
        const key = new Map();
        for (let i = 0; i < text.length - 2; ++i) {
            const trigram = text.slice(i, i + 3);
            const count = key.get(trigram) ?? 0;
            key.set(trigram, count + 1);
        }
        return key;
    }
    $.$mol_text_profile = $mol_text_profile;
})($ || ($ = {}));
//mol/text/profile/profile.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_page_side_info extends $.$hyoo_page_side_info {
            slides_uri() {
                const source = this.$.$mol_state_arg.href() + '/';
                return super.slides_uri().replace('{source}', encodeURIComponent(source));
            }
            section_indexes() {
                return [...this.text_tokens().entries()]
                    .filter(([index, token]) => token.name === 'header')
                    .map(([index]) => index);
            }
            section_list() {
                return this.section_indexes().map(index => this.Section_link(index));
            }
            section_title(index) {
                const prefix = ''.padEnd(2 * this.section_level(index), '− ');
                return prefix + this.text_header_title(index);
            }
            ref_list() {
                return this.referrers_list().map(uri => this.Ref_item(uri));
            }
            ref_uri(uri) {
                return uri;
            }
            ref_stat(uri) {
                return this.referrers_stat(uri);
            }
            weight() {
                const units = this.details_node()?.land.delta();
                const weight = units?.reduce((sum, unit) => {
                    return sum + $hyoo_crowd_unit_bin.from_unit(unit).byteLength;
                }, 0) ?? 0;
                return $mol_si_short(weight, 'B');
            }
            word_stat() {
                const stat = new Map();
                const text = this.details().toLowerCase()
                    .replace(/\]\(.*?\)/g, '')
                    .replace(/""(?:(.*?)\\)?.*?""/g, '$1')
                    .replace(/\\\\(?:(.*?)\\)?.*?\\\\/g, '$1');
                for (const match of text.matchAll(/\p{Letter}{2,}(?=((?:\P{Letter}\p{Letter}{2,})*))/ug) ?? []) {
                    const parts = match.join('').match(/\P{Letter}?\p{Letter}{2,}/gu) ?? [];
                    for (let i = 1; i <= parts.length; ++i) {
                        const word = parts.slice(0, i).join('');
                        if (word.length < 3)
                            continue;
                        stat.set(word, (stat.get(word) ?? 0) + 1);
                    }
                }
                return stat;
            }
            word_list_items() {
                const raw = [...this.word_stat()];
                const max = raw.reduce((max, [word, stat]) => Math.max(max, stat), 1);
                const min = Math.max(3, max ** .5);
                const filtered = raw.filter(([word, stat]) => stat >= min);
                filtered.sort((left, right) => right[0].length ** 1.6 - left[0].length ** 1.6 + right[1] - left[1]);
                return filtered.map(([word]) => this.Word_item(word));
            }
            word_item_text(word) {
                return word;
            }
            word_item_stat(word) {
                return this.word_stat().get(word);
            }
            size() {
                return $mol_si_short($mol_text_profile(this.details()).size, '');
            }
            chars() {
                return $mol_si_short(this.details().length, '');
            }
            words() {
                return $mol_si_short(this.details().match(/\p{Letter}+/ug)?.length ?? 0, '');
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_page_side_info.prototype, "slides_uri", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_info.prototype, "section_indexes", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_info.prototype, "section_list", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_page_side_info.prototype, "section_title", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_info.prototype, "ref_list", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_page_side_info.prototype, "ref_stat", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_info.prototype, "weight", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_info.prototype, "word_stat", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_info.prototype, "word_list_items", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_info.prototype, "size", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_info.prototype, "chars", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_info.prototype, "words", null);
        $$.$hyoo_page_side_info = $hyoo_page_side_info;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/page/side/info/info.view.ts
;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($hyoo_page_side_info, {
        flex: {
            basis: rem(20),
            grow: 0,
        },
        Section_list: {
            Content: {
                padding: {
                    left: rem(1.25),
                },
            },
        },
        Stat: {
            justifyContent: 'space-between',
            flex: {
                wrap: 'wrap',
            },
        },
        Ref_item_link: {
            flex: {
                shrink: 1,
                grow: 1,
            },
            wordBreak: 'break-word',
        },
        Ref_item_stat: {
            padding: $mol_gap.text,
        },
        Word_item_text: {
            flex: {
                grow: 1,
                shrink: 1,
            },
        },
    });
})($ || ($ = {}));
//hyoo/page/side/info/info.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_meta_person extends $hyoo_meta_model {
    }
    $.$hyoo_meta_person = $hyoo_meta_person;
})($ || ($ = {}));
//hyoo/meta/person/person.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_meta_rights extends $mol_page {
        title() {
            return this.$.$mol_locale.text('$hyoo_meta_rights_title');
        }
        editors() {
            return this.meta().editors();
        }
        meta() {
            const obj = new this.$.$hyoo_meta_model();
            return obj;
        }
        body() {
            return [
                this.Content()
            ];
        }
        peer(id) {
            const obj = new this.$.$hyoo_meta_person();
            return obj;
        }
        Editor_link(id) {
            const obj = new this.$.$hyoo_meta_link();
            obj.meta = () => this.peer(id);
            return obj;
        }
        editor_list() {
            return [
                this.Editor_link("0_0")
            ];
        }
        Editor_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.editor_list();
            return obj;
        }
        editor_add_bid() {
            return this.$.$mol_locale.text('$hyoo_meta_rights_editor_add_bid');
        }
        editor_add_id(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        editable() {
            return false;
        }
        Editor_add_id() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_meta_rights_Editor_add_id_hint');
            obj.value = (next) => this.editor_add_id(next);
            obj.enabled = () => this.editable();
            return obj;
        }
        editor_add_allowed() {
            return false;
        }
        editor_add_submit(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Editor_add_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Editor_add_submit() {
            const obj = new this.$.$mol_button_major();
            obj.enabled = () => this.editor_add_allowed();
            obj.click = (next) => this.editor_add_submit(next);
            obj.sub = () => [
                this.Editor_add_icon()
            ];
            return obj;
        }
        Editor_add_bar() {
            const obj = new this.$.$mol_bar();
            obj.sub = () => [
                this.Editor_add_id(),
                this.Editor_add_submit()
            ];
            return obj;
        }
        editor_add_preview() {
            const obj = new this.$.$hyoo_meta_model();
            return obj;
        }
        Editor_add_preview() {
            const obj = new this.$.$hyoo_meta_link();
            obj.meta = () => this.editor_add_preview();
            return obj;
        }
        editor_fill_all(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Editor_fill_all() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.$.$mol_locale.text('$hyoo_meta_rights_Editor_fill_all_title');
            obj.click = (next) => this.editor_fill_all(next);
            return obj;
        }
        editor_add_rows() {
            return [
                this.Editor_add_bar(),
                this.Editor_add_preview(),
                this.Editor_fill_all()
            ];
        }
        Editor_add_form() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.editor_add_rows();
            return obj;
        }
        Editor_add() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_meta_rights_Editor_add_name');
            obj.bid = () => this.editor_add_bid();
            obj.Content = () => this.Editor_add_form();
            return obj;
        }
        blocks() {
            return [
                this.Editor_list(),
                this.Editor_add()
            ];
        }
        Content() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.blocks();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_meta_rights.prototype, "meta", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_rights.prototype, "peer", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_meta_rights.prototype, "Editor_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_rights.prototype, "Editor_list", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_rights.prototype, "editor_add_id", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_rights.prototype, "Editor_add_id", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_rights.prototype, "editor_add_submit", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_rights.prototype, "Editor_add_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_rights.prototype, "Editor_add_submit", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_rights.prototype, "Editor_add_bar", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_rights.prototype, "editor_add_preview", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_rights.prototype, "Editor_add_preview", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_rights.prototype, "editor_fill_all", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_rights.prototype, "Editor_fill_all", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_rights.prototype, "Editor_add_form", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_rights.prototype, "Editor_add", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_rights.prototype, "Content", null);
    $.$hyoo_meta_rights = $hyoo_meta_rights;
})($ || ($ = {}));
//hyoo/meta/rights/-view.tree/rights.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_meta_rights extends $.$hyoo_meta_rights {
            editable() {
                return this.meta().land.allowed_law();
            }
            blocks() {
                return [
                    this.Editor_list(),
                    ...this.editable() ? [this.Editor_add()] : [],
                ];
            }
            editor_list() {
                const meta = this.meta().id();
                return this.editors()
                    .filter(peer => peer !== meta)
                    .map(peer => this.Editor_link(peer));
            }
            editor_add_rows() {
                return [
                    this.Editor_add_bar(),
                    this.editor_add_id() ? this.Editor_add_preview() : this.Editor_fill_all(),
                ];
            }
            editor_add_id(next = '') {
                return (next.trim().match(/^(?:.*=)?([0-9a-z]+_[0-9a-z]+)/)?.[1] ?? '');
            }
            editor_add_allowed() {
                if (!this.editable())
                    return false;
                return Boolean(this.editor_add_id());
            }
            editor_add_bid() {
                return Boolean(this.editor_add_id()) ? super.editor_add_bid() : '';
            }
            editor_fill_all() {
                this.editor_add_id('0_0');
            }
            editor_add_submit() {
                const peer = this.editor_add_id();
                this.meta().land.level(peer, $hyoo_crowd_peer_level.mod);
                this.editor_add_id('');
            }
            editor_add_preview() {
                return this.peer(this.editor_add_id());
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_meta_rights.prototype, "blocks", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_rights.prototype, "editor_list", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_rights.prototype, "editor_add_rows", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_rights.prototype, "editor_add_id", null);
        $$.$hyoo_meta_rights = $hyoo_meta_rights;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/meta/rights/rights.view.ts
;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($hyoo_meta_rights, {
        flex: {
            basis: rem(20),
            grow: 0,
        },
        Editor_add: {
            Content: {
                flex: {
                    wrap: 'wrap',
                },
            },
        },
    });
})($ || ($ = {}));
//hyoo/meta/rights/rights.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_eye extends $mol_icon {
        path() {
            return "M12,9C10.34,9 9,10.34 9,12C9,13.66 10.34,15 12,15C13.66,15 15,13.66 15,12C15,10.34 13.66,9 12,9M12,17C9.24,17 7,14.76 7,12C7,9.24 9.24,7 12,7C14.76,7 17,9.24 17,12C17,14.76 14.76,17 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z";
        }
    }
    $.$mol_icon_eye = $mol_icon_eye;
})($ || ($ = {}));
//mol/icon/eye/-view.tree/eye.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_password extends $mol_view {
        type(next) {
            if (next !== undefined)
                return next;
            return "password";
        }
        sub() {
            return this.content();
        }
        hint() {
            return "";
        }
        value(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
        Pass() {
            const obj = new this.$.$mol_string();
            obj.type = () => this.type();
            obj.hint = () => this.hint();
            obj.value = (next) => this.value(next);
            obj.submit = (event) => this.submit(event);
            obj.enabled = () => this.enabled();
            return obj;
        }
        checked(next) {
            if (next !== undefined)
                return next;
            return true;
        }
        Show_icon() {
            const obj = new this.$.$mol_icon_eye();
            return obj;
        }
        Show() {
            const obj = new this.$.$mol_check_icon();
            obj.checked = (next) => this.checked(next);
            obj.Icon = () => this.Show_icon();
            return obj;
        }
        content() {
            return [
                this.Pass(),
                this.Show()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_password.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_password.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_password.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_password.prototype, "Pass", null);
    __decorate([
        $mol_mem
    ], $mol_password.prototype, "checked", null);
    __decorate([
        $mol_mem
    ], $mol_password.prototype, "Show_icon", null);
    __decorate([
        $mol_mem
    ], $mol_password.prototype, "Show", null);
    $.$mol_password = $mol_password;
})($ || ($ = {}));
//mol/password/-view.tree/password.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_password extends $.$mol_password {
            checked(next) {
                this.type(next ? 'text' : 'password');
                return next ?? false;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_password.prototype, "checked", null);
        $$.$mol_password = $mol_password;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/password/password.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_meta_safe extends $mol_page {
        title() {
            return this.$.$mol_locale.text('$hyoo_meta_safe_title');
        }
        yard() {
            const obj = new this.$.$hyoo_sync_yard();
            return obj;
        }
        bid_pass_long() {
            return this.$.$mol_locale.text('$hyoo_meta_safe_bid_pass_long');
        }
        key_size() {
            return 133;
        }
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_special"
            };
        }
        body() {
            return [
                this.Content()
            ];
        }
        Expot_bid() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.$.$mol_locale.text('$hyoo_meta_safe_Expot_bid_text');
            return obj;
        }
        password_bid() {
            return "";
        }
        password(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Password() {
            const obj = new this.$.$mol_password();
            obj.value = (next) => this.password(next);
            return obj;
        }
        Password_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_meta_safe_Password_field_name');
            obj.bids = () => [
                this.password_bid()
            ];
            obj.Content = () => this.Password();
            return obj;
        }
        recall_enabled() {
            return true;
        }
        recall(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Recall() {
            const obj = new this.$.$mol_string();
            obj.enabled = () => this.recall_enabled();
            obj.value = (next) => this.recall(next);
            return obj;
        }
        Recall_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_meta_safe_Recall_field_name');
            obj.Content = () => this.Recall();
            return obj;
        }
        Export_pass() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Password_field(),
                this.Recall_field()
            ];
            return obj;
        }
        export_link() {
            return "";
        }
        Export_link() {
            const obj = new this.$.$mol_link();
            obj.uri = () => this.export_link();
            obj.title = () => this.$.$mol_locale.text('$hyoo_meta_safe_Export_link_title');
            return obj;
        }
        export_rows() {
            return [
                this.Expot_bid(),
                this.Export_pass(),
                this.Export_link()
            ];
        }
        Export_block() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.export_rows();
            return obj;
        }
        Iport_descr() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.$.$mol_locale.text('$hyoo_meta_safe_Iport_descr_text');
            return obj;
        }
        Import_pass() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Recall_field(),
                this.Password_field()
            ];
            return obj;
        }
        import_switch(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        peer_new() {
            return "";
        }
        Peer_new() {
            const obj = new this.$.$mol_avatar();
            obj.id = () => this.peer_new();
            return obj;
        }
        impot_switch_title() {
            return this.$.$mol_locale.text('$hyoo_meta_safe_impot_switch_title');
        }
        Import_switch() {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.import_switch(next);
            obj.sub = () => [
                this.Peer_new(),
                this.impot_switch_title()
            ];
            return obj;
        }
        import_rows() {
            return [
                this.Iport_descr(),
                this.Import_pass(),
                this.Import_switch()
            ];
        }
        Import_block() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.import_rows();
            return obj;
        }
        content() {
            return [
                this.Export_block(),
                this.Import_block()
            ];
        }
        Content() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_meta_safe.prototype, "yard", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_safe.prototype, "Expot_bid", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_safe.prototype, "password", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_safe.prototype, "Password", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_safe.prototype, "Password_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_safe.prototype, "recall", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_safe.prototype, "Recall", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_safe.prototype, "Recall_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_safe.prototype, "Export_pass", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_safe.prototype, "Export_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_safe.prototype, "Export_block", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_safe.prototype, "Iport_descr", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_safe.prototype, "Import_pass", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_safe.prototype, "import_switch", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_safe.prototype, "Peer_new", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_safe.prototype, "Import_switch", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_safe.prototype, "Import_block", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_safe.prototype, "Content", null);
    $.$hyoo_meta_safe = $hyoo_meta_safe;
})($ || ($ = {}));
//hyoo/meta/safe/-view.tree/safe.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode(base64) {
        throw new Error('Not implemented');
    }
    $.$mol_base64_decode = $mol_base64_decode;
})($ || ($ = {}));
//mol/base64/decode/decode.ts
;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode_web(base64Str) {
        return new Uint8Array($mol_dom_context.atob(base64Str).split('').map(c => c.charCodeAt(0)));
    }
    $.$mol_base64_decode_web = $mol_base64_decode_web;
    $.$mol_base64_decode = $mol_base64_decode_web;
})($ || ($ = {}));
//mol/base64/decode/decode.web.ts
;
"use strict";
var $;
(function ($) {
    const algorithm = {
        name: 'AES-GCM',
        length: 128,
        tagLength: 32,
    };
    class $mol_crypto_secret extends Object {
        native;
        static size = 16;
        static extra = 4;
        constructor(native) {
            super();
            this.native = native;
        }
        static async generate() {
            return new this(await $mol_crypto_native.subtle.generateKey(algorithm, true, ['encrypt', 'decrypt']));
        }
        static async from(serial) {
            if (typeof serial === 'string') {
                serial = $mol_charset_encode(serial);
                serial = await $mol_crypto_native.subtle.digest('SHA-256', serial);
            }
            return new this(await $mol_crypto_native.subtle.importKey('raw', serial, algorithm, true, ['encrypt', 'decrypt']));
        }
        static async derive(private_serial, public_serial) {
            const ecdh = { name: "ECDH", namedCurve: "P-256" };
            const jwk = { crv: 'P-256', ext: true, kty: 'EC' };
            const private_key = await $mol_crypto_native.subtle.importKey('jwk', {
                ...jwk,
                key_ops: ['deriveKey'],
                x: private_serial.slice(0, 43),
                y: private_serial.slice(43, 86),
                d: private_serial.slice(86, 129),
            }, ecdh, true, ['deriveKey']);
            const public_key = await $mol_crypto_native.subtle.importKey('jwk', {
                ...jwk,
                key_ops: [],
                x: public_serial.slice(0, 43),
                y: public_serial.slice(43, 86),
            }, ecdh, true, []);
            const secret = await $mol_crypto_native.subtle.deriveKey({
                name: "ECDH",
                public: public_key,
            }, private_key, algorithm, true, ["encrypt", "decrypt"]);
            return new this(secret);
        }
        async serial() {
            return await $mol_crypto_native.subtle.exportKey('raw', this.native);
        }
        async encrypt(open, salt) {
            return await $mol_crypto_native.subtle.encrypt({
                ...algorithm,
                iv: salt,
            }, this.native, open);
        }
        async decrypt(closed, salt) {
            return await $mol_crypto_native.subtle.decrypt({
                ...algorithm,
                iv: salt,
            }, this.native, closed);
        }
    }
    $.$mol_crypto_secret = $mol_crypto_secret;
})($ || ($ = {}));
//mol/crypto/secret/secret.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_work extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = requestIdleCallback(task, { timeout: delay });
        }
        destructor() {
            cancelIdleCallback(this.id);
        }
    }
    $.$mol_after_work = $mol_after_work;
    if (typeof requestIdleCallback !== 'function') {
        $.$mol_after_work = $mol_after_timeout;
    }
})($ || ($ = {}));
//mol/after/work/work.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wait_rest_async() {
        return new Promise(done => {
            new this.$mol_after_work(16, () => done(null));
        });
    }
    $.$mol_wait_rest_async = $mol_wait_rest_async;
    function $mol_wait_rest() {
        return this.$mol_wire_sync(this).$mol_wait_rest_async();
    }
    $.$mol_wait_rest = $mol_wait_rest;
})($ || ($ = {}));
//mol/wait/rest/rest.ts
;
"use strict";
var $;
(function ($) {
    function $mol_base64_encode(src) {
        throw new Error('Not implemented');
    }
    $.$mol_base64_encode = $mol_base64_encode;
})($ || ($ = {}));
//mol/base64/encode/encode.ts
;
"use strict";
var $;
(function ($) {
    function binary_string(bytes) {
        let binary = '';
        if (typeof bytes !== 'string') {
            for (const byte of bytes)
                binary += String.fromCharCode(byte);
        }
        else {
            binary = unescape(encodeURIComponent(bytes));
        }
        return binary;
    }
    function $mol_base64_encode_web(str) {
        return $mol_dom_context.btoa(binary_string(str));
    }
    $.$mol_base64_encode_web = $mol_base64_encode_web;
    $.$mol_base64_encode = $mol_base64_encode_web;
})($ || ($ = {}));
//mol/base64/encode/encode.web.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_meta_safe extends $.$hyoo_meta_safe {
            password_bid() {
                const pass = this.password();
                if (pass.length <= 7)
                    return this.bid_pass_long();
                return '';
            }
            content() {
                return [
                    this.key_import()
                        ? this.Import_block()
                        : this.Export_block()
                ];
            }
            recall(next) {
                const serial = this.key_import();
                if (!serial)
                    return next ?? '';
                const pack = $mol_base64_decode(serial);
                return $mol_charset_decode(pack.slice(this.key_size()));
            }
            recall_enabled() {
                return !this.key_import();
            }
            peer_current() {
                return this.yard().peer().id;
            }
            peer_new() {
                return $mol_int62_hash_string(this.$.$mol_crypto_auditor_private_to_public(this.key_new()));
            }
            key_import(next) {
                return this.$.$mol_state_arg.value('hyoo_meta_key', next) ?? null;
            }
            key_new() {
                const serial = this.key_import();
                if (!serial)
                    return null;
                try {
                    const pack = $mol_base64_decode(serial);
                    const closed = pack.slice(0, this.key_size());
                    const salt = pack.slice(this.key_size());
                    const pass = this.password();
                    const secret = $mol_wire_sync(this.$.$mol_crypto_secret).from(pass);
                    const opened = $mol_wire_sync(secret).decrypt(closed, salt);
                    return $mol_charset_decode(opened);
                }
                catch (error) {
                    $mol_fail_log(error);
                    return null;
                }
            }
            import_switch() {
                this.yard().peer(this.key_new());
                this.password('');
                this.key_import(null);
                this.$.$mol_wait_rest();
                this.$.$mol_dom_context.location.reload();
            }
            key_export() {
                const pass = this.password();
                const recall = this.recall() || '...';
                const secret = $mol_wire_sync(this.$.$mol_crypto_secret).from(pass);
                const salt = $mol_charset_encode(recall);
                const open = this.$.$mol_charset_encode(this.yard().peer().key_private_serial);
                const closed = new Uint8Array($mol_wire_sync(secret).encrypt(open, salt));
                const pack = new Uint8Array(this.key_size() + salt.byteLength);
                pack.set(closed, 0);
                pack.set(salt, this.key_size());
                return this.$.$mol_base64_encode(pack);
            }
            export_rows() {
                return [
                    this.Expot_bid(),
                    this.Export_pass(),
                    ...this.password_bid() ? [] : [this.Export_link()],
                ];
            }
            import_rows() {
                return [
                    this.Iport_descr(),
                    this.Import_pass(),
                    ...this.key_new() ? [this.Import_switch()] : [],
                ];
            }
            export_link() {
                return this.$.$mol_state_arg.link({
                    hyoo_meta_key: this.key_export(),
                });
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_meta_safe.prototype, "password_bid", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_safe.prototype, "content", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_safe.prototype, "recall", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_safe.prototype, "peer_current", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_safe.prototype, "peer_new", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_safe.prototype, "key_new", null);
        __decorate([
            $mol_action
        ], $hyoo_meta_safe.prototype, "import_switch", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_safe.prototype, "key_export", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_safe.prototype, "export_link", null);
        $$.$hyoo_meta_safe = $hyoo_meta_safe;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/meta/safe/safe.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($hyoo_meta_safe, {
            flex: {
                basis: `20rem`,
            },
            Export_block: {
                gap: $mol_gap.block,
            },
            Import_block: {
                gap: $mol_gap.block,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/meta/safe/safe.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_dots_vertical extends $mol_icon {
        path() {
            return "M12,16C13.1,16 14,16.9 14,18C14,19.1 13.1,20 12,20C10.9,20 10,19.1 10,18C10,16.9 10.9,16 12,16M12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12C10,10.9 10.9,10 12,10M12,4C13.1,4 14,4.9 14,6C14,7.1 13.1,8 12,8C10.9,8 10,7.1 10,6C10,4.9 10.9,4 12,4Z";
        }
    }
    $.$mol_icon_dots_vertical = $mol_icon_dots_vertical;
})($ || ($ = {}));
//mol/icon/dots/vertical/-view.tree/vertical.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_select extends $mol_pick {
        dictionary(next) {
            if (next !== undefined)
                return next;
            return {};
        }
        options() {
            return [];
        }
        value(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        option_label_default() {
            return "";
        }
        Option_row(id) {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (event) => this.event_select(id, event);
            obj.sub = () => this.option_content(id);
            return obj;
        }
        No_options() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.no_options_message()
            ];
            return obj;
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Nav()
            ];
        }
        hint() {
            return this.$.$mol_locale.text('$mol_select_hint');
        }
        bubble_content() {
            return [
                this.Filter(),
                this.Bubble_pane()
            ];
        }
        Filter() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.filter_pattern(next);
            obj.hint = () => this.$.$mol_locale.text('$mol_select_Filter_hint');
            obj.submit = (event) => this.submit(event);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Trigger_icon() {
            const obj = new this.$.$mol_icon_dots_vertical();
            return obj;
        }
        event_select(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        option_label(id) {
            return "";
        }
        filter_pattern(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Option_label(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.option_label(id);
            obj.needle = () => this.filter_pattern();
            return obj;
        }
        option_content(id) {
            return [
                this.Option_label(id)
            ];
        }
        no_options_message() {
            return this.$.$mol_locale.text('$mol_select_no_options_message');
        }
        nav_components() {
            return [];
        }
        option_focused(component) {
            if (component !== undefined)
                return component;
            return null;
        }
        nav_cycle(next) {
            if (next !== undefined)
                return next;
            return true;
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.keys_y = () => this.nav_components();
            obj.current_y = (component) => this.option_focused(component);
            obj.cycle = (next) => this.nav_cycle(next);
            return obj;
        }
        menu_content() {
            return [];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_content();
            return obj;
        }
        Bubble_pane() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => [
                this.Menu()
            ];
            return obj;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "dictionary", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "Option_row", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "No_options", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Filter", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Trigger_icon", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "event_select", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "filter_pattern", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "Option_label", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "option_focused", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "nav_cycle", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Nav", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Menu", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Bubble_pane", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "submit", null);
    $.$mol_select = $mol_select;
})($ || ($ = {}));
//mol/select/-view.tree/select.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_match_text(query, values) {
        const tags = query.toLowerCase().trim().split(/\s+/).filter(tag => tag);
        if (tags.length === 0)
            return () => true;
        return (variant) => {
            const vals = values(variant);
            return tags.every(tag => vals.some(val => val.toLowerCase().indexOf(tag) >= 0));
        };
    }
    $.$mol_match_text = $mol_match_text;
})($ || ($ = {}));
//mol/match/text.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select extends $.$mol_select {
            filter_pattern(next) {
                this.focused();
                return next || '';
            }
            open() {
                this.showed(true);
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_filtered() {
                let options = this.options();
                options = options.filter($mol_match_text(this.filter_pattern(), (id) => [this.option_label(id)]));
                const index = options.indexOf(this.value());
                if (index >= 0)
                    options = [...options.slice(0, index), ...options.slice(index + 1)];
                return options;
            }
            option_label(id) {
                const value = this.dictionary()[id];
                return (value == null ? id : value) || this.option_label_default();
            }
            option_rows() {
                return this.options_filtered().map((option) => this.Option_row(option));
            }
            option_focused(component) {
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.showed()) {
                    component.focused(true);
                }
                return component;
            }
            event_select(id, event) {
                this.value(id);
                this.showed(false);
                event?.preventDefault();
            }
            nav_components() {
                if (this.options().length > 1 && this.Filter()) {
                    return [this.Filter(), ...this.option_rows()];
                }
                else {
                    return this.option_rows();
                }
            }
            trigger_content() {
                return [
                    ...this.option_content(this.value()),
                    this.Trigger_icon(),
                ];
            }
            menu_content() {
                return [
                    ...this.option_rows(),
                    ...(this.options_filtered().length === 0) ? [this.No_options()] : []
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "filter_pattern", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options_filtered", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "option_focused", null);
        $$.$mol_select = $mol_select;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/select/select.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/select/select.view.css", "[mol_select] {\n\tdisplay: flex;\n\tword-break: normal;\n\talign-self: flex-start;\n}\n\n[mol_select_option_row] {\n\tmin-width: 100%;\n\tpadding: 0;\n\tjustify-content: flex-start;\n}\n\n[mol_select_bubble] {\n\tmin-width: 100%;\n}\n\n[mol_select_filter] {\n\tflex: 1 0 auto;\n\talign-self: stretch;\n}\n\n[mol_select_option_label] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tmin-height: 1.5em;\n\tdisplay: block;\n\twhite-space: nowrap;\n}\n\n[mol_select_clear_option_content] {\n\tpadding: .5em 1rem .5rem 0;\n\ttext-align: left;\n\tbox-shadow: var(--mol_theme_line);\n\tflex: 1 0 auto;\n}\n\n[mol_select_no_options] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tdisplay: block;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_select_trigger] {\n\tpadding: 0;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n}\n\n[mol_select_trigger] > * {\n\tmargin-right: -1rem;\n}\n\n[mol_select_trigger] > *:last-child {\n\tmargin-right: 0;\n}\n\n[mol_select_menu] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n");
})($ || ($ = {}));
//mol/select/-css/select.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_sync extends $mol_icon {
        path() {
            return "M12,18C8.69,18 6,15.31 6,12C6,11 6.25,10.03 6.7,9.2L5.24,7.74C4.46,8.97 4,10.43 4,12C4,16.42 7.58,20 12,20V23L16,19L12,15M12,4V1L8,5L12,9V6C15.31,6 18,8.69 18,12C18,13 17.75,13.97 17.3,14.8L18.76,16.26C19.54,15.03 20,13.57 20,12C20,7.58 16.42,4 12,4Z";
        }
    }
    $.$mol_icon_sync = $mol_icon_sync;
})($ || ($ = {}));
//mol/icon/sync/-view.tree/sync.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_sync_off extends $mol_icon {
        path() {
            return "M20,4H14V10L16.24,7.76C17.32,8.85 18,10.34 18,12C18,13 17.75,13.94 17.32,14.77L18.78,16.23C19.55,15 20,13.56 20,12C20,9.79 19.09,7.8 17.64,6.36L20,4M2.86,5.41L5.22,7.77C4.45,9 4,10.44 4,12C4,14.21 4.91,16.2 6.36,17.64L4,20H10V14L7.76,16.24C6.68,15.15 6,13.66 6,12C6,11 6.25,10.06 6.68,9.23L14.76,17.31C14.5,17.44 14.26,17.56 14,17.65V19.74C14.79,19.53 15.54,19.2 16.22,18.78L18.58,21.14L19.85,19.87L4.14,4.14L2.86,5.41M10,6.35V4.26C9.2,4.47 8.45,4.8 7.77,5.22L9.23,6.68C9.5,6.56 9.73,6.44 10,6.35Z";
        }
    }
    $.$mol_icon_sync_off = $mol_icon_sync_off;
})($ || ($ = {}));
//mol/icon/sync/off/-view.tree/off.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sync_online extends $mol_select {
        minimal_width() {
            return 40;
        }
        minimal_height() {
            return 40;
        }
        dictionary() {
            return this.yard().master_list();
        }
        master_cursor(next) {
            return this.yard().master_cursor(next);
        }
        yard() {
            const obj = new this.$.$hyoo_sync_yard();
            return obj;
        }
        Filter() {
            return null;
        }
        option_content(id) {
            return [
                this.Option_logo(id),
                this.option_label(id)
            ];
        }
        trigger_content() {
            return [
                this.Link()
            ];
        }
        master_id(id) {
            return "";
        }
        Option_logo(id) {
            const obj = new this.$.$mol_avatar();
            obj.id = () => this.master_id(id);
            return obj;
        }
        master_link() {
            return "";
        }
        Well() {
            const obj = new this.$.$mol_avatar();
            obj.id = () => this.master_link();
            return obj;
        }
        Fail() {
            const obj = new this.$.$mol_icon_sync_off();
            return obj;
        }
        link_content() {
            return [
                this.Well(),
                this.Fail()
            ];
        }
        hint() {
            return "$hyoo_sync";
        }
        message() {
            return this.hint();
        }
        Link() {
            const obj = new this.$.$mol_link();
            obj.uri = () => this.master_link();
            obj.sub = () => this.link_content();
            obj.hint = () => this.message();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sync_online.prototype, "yard", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_online.prototype, "Option_logo", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_online.prototype, "Well", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_online.prototype, "Fail", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_online.prototype, "Link", null);
    $.$hyoo_sync_online = $hyoo_sync_online;
})($ || ($ = {}));
//hyoo/sync/online/-view.tree/online.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sync_online extends $.$hyoo_sync_online {
            message() {
                try {
                    this.yard().sync();
                    return this.hint();
                }
                catch (error) {
                    if (error instanceof Promise)
                        $mol_fail_hidden(error);
                    $mol_fail_log(error);
                    return String(error);
                }
            }
            link_content() {
                try {
                    this.yard().sync();
                    return [this.Well()];
                }
                catch (error) {
                    if (error instanceof Promise)
                        $mol_fail_hidden(error);
                    $mol_fail_log(error);
                    return [this.Fail()];
                }
            }
            hint() {
                return super.hint() + ' ' + $hyoo_sync_revision;
            }
            master_link() {
                return this.yard().master_link().replace(/^ws(s?):/, 'http$1:');
            }
            master_id(index) {
                return this.dictionary()[index].replace(/^ws(s?):/, 'http$1:');
            }
            option_label(index) {
                return this.dictionary()[index].replace(/^ws(s?):\/\//, '');
            }
            value(next) {
                return String(this.master_cursor(next == undefined ? undefined : Number(next)));
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_sync_online.prototype, "message", null);
        __decorate([
            $mol_mem
        ], $hyoo_sync_online.prototype, "link_content", null);
        __decorate([
            $mol_mem
        ], $hyoo_sync_online.prototype, "hint", null);
        __decorate([
            $mol_mem
        ], $hyoo_sync_online.prototype, "master_link", null);
        $$.$hyoo_sync_online = $hyoo_sync_online;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sync/online/online.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/sync/online/online.view.css", "[hyoo_sync_online_option_row] {\n\tpadding: var(--mol_gap_text);\n}\n\n[hyoo_sync_online_well] {\n\tcolor: var(--mol_theme_current);\n}\n\n[hyoo_sync_online_fail] {\n\tcolor: var(--mol_theme_focus);\n}\n\n[hyoo_sync_online][mol_view_error=\"Promise\"] {\n\tanimation: hyoo_sync_online_wait 1s linear infinite;\n}\n\n@keyframes hyoo_sync_online_wait {\n\tfrom {\n\t\topacity: 1;\n\t}\n\tto {\n\t\topacity: .5;\n\t}\n}\n");
})($ || ($ = {}));
//hyoo/sync/online/-css/online.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_key extends $mol_icon {
        path() {
            return "M7,14C5.9,14 5,13.1 5,12C5,10.9 5.9,10 7,10C8.1,10 9,10.9 9,12C9,13.1 8.1,14 7,14M12.65,10C11.83,7.67 9.61,6 7,6C3.69,6 1,8.69 1,12C1,15.31 3.69,18 7,18C9.61,18 11.83,16.33 12.65,14H17V18H21V14H23V10H12.65Z";
        }
    }
    $.$mol_icon_key = $mol_icon_key;
})($ || ($ = {}));
//mol/icon/key/-view.tree/key.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_key_variant extends $mol_icon {
        path() {
            return "M22,18V22H18V19H15V16H12L9.74,13.74C9.19,13.91 8.61,14 8,14C4.69,14 2,11.31 2,8C2,4.69 4.69,2 8,2C11.31,2 14,4.69 14,8C14,8.61 13.91,9.19 13.74,9.74L22,18M7,5C5.9,5 5,5.9 5,7C5,8.1 5.9,9 7,9C8.1,9 9,8.1 9,7C9,5.9 8.1,5 7,5Z";
        }
    }
    $.$mol_icon_key_variant = $mol_icon_key_variant;
})($ || ($ = {}));
//mol/icon/key/variant/-view.tree/variant.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_image extends $mol_icon {
        path() {
            return "M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19Z";
        }
    }
    $.$mol_icon_image = $mol_icon_image;
})($ || ($ = {}));
//mol/icon/image/-view.tree/image.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_page_menu extends $hyoo_meta_menu {
        title() {
            return this.$.$mol_locale.text('$hyoo_page_menu_title');
        }
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_special"
            };
        }
        head() {
            return [
                this.Profile(),
                this.Title(),
                this.Tools()
            ];
        }
        Logo() {
            return null;
        }
        foot() {
            return [
                this.Online(),
                this.Safe_showing(),
                this.About(),
                this.Aura_showing(),
                this.Lights()
            ];
        }
        side() {
            const obj = new this.$.$hyoo_page_side();
            return obj;
        }
        Profile() {
            const obj = new this.$.$hyoo_meta_link();
            obj.meta = () => this.side();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_page_menu_Profile_hint');
            obj.Title = () => null;
            return obj;
        }
        Online() {
            const obj = new this.$.$hyoo_sync_online();
            obj.yard = () => this.yard();
            return obj;
        }
        Safe_icon() {
            const obj = new this.$.$mol_icon_key_variant();
            return obj;
        }
        safe_showing(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Safe_showing() {
            const obj = new this.$.$mol_check_icon();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_page_menu_Safe_showing_hint');
            obj.Icon = () => this.Safe_icon();
            obj.checked = (next) => this.safe_showing(next);
            return obj;
        }
        About() {
            const obj = new this.$.$mol_link_iconed();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_page_menu_About_hint');
            obj.title = () => "";
            obj.uri = () => "http://page.hyoo.ru/";
            return obj;
        }
        Aura_icon() {
            const obj = new this.$.$mol_icon_image();
            return obj;
        }
        aura_showing(next) {
            if (next !== undefined)
                return next;
            return true;
        }
        Aura_showing() {
            const obj = new this.$.$mol_check_icon();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_page_menu_Aura_showing_hint');
            obj.Icon = () => this.Aura_icon();
            obj.checked = (next) => this.aura_showing(next);
            return obj;
        }
        Lights() {
            const obj = new this.$.$mol_lights_toggle();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_page_menu.prototype, "side", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_menu.prototype, "Profile", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_menu.prototype, "Online", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_menu.prototype, "Safe_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_menu.prototype, "safe_showing", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_menu.prototype, "Safe_showing", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_menu.prototype, "About", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_menu.prototype, "Aura_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_menu.prototype, "aura_showing", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_menu.prototype, "Aura_showing", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_menu.prototype, "Lights", null);
    $.$hyoo_page_menu = $hyoo_page_menu;
})($ || ($ = {}));
//hyoo/page/menu/-view.tree/menu.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_page_menu extends $.$hyoo_page_menu {
        }
        $$.$hyoo_page_menu = $hyoo_page_menu;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/page/menu/menu.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_page extends $mol_book2 {
        side_main_id() {
            return "iy8wtn_tky6pc";
        }
        yard() {
            const obj = new this.$.$hyoo_sync_client();
            return obj;
        }
        side_title(id) {
            return this.side(id).title();
        }
        pages_node(id) {
            return this.side(id).pages_node();
        }
        side(id) {
            const obj = new this.$.$hyoo_page_side();
            return obj;
        }
        side_current() {
            const obj = new this.$.$hyoo_page_side();
            return obj;
        }
        bookmarks_node() {
            return this.profile().bookmarks_node();
        }
        profile() {
            const obj = new this.$.$hyoo_page_side();
            return obj;
        }
        style() {
            return {
                ...super.style(),
                backgroundImage: this.aura_image()
            };
        }
        plugins() {
            return [
                this.Theme()
            ];
        }
        auto() {
            return [
                this.ref_track()
            ];
        }
        pages() {
            return [
                this.News(),
                this.Side_menu(),
                this.View("0_0"),
                this.Edit("0_0"),
                this.Info("0_0"),
                this.Rights("0_0"),
                this.Safe()
            ];
        }
        Placeholder() {
            return this.Menu();
        }
        aura_image() {
            return "";
        }
        Theme() {
            const obj = new this.$.$mol_theme_auto();
            return obj;
        }
        ref_track() {
            return null;
        }
        News() {
            const obj = new this.$.$hyoo_page_side_news();
            obj.side = () => this.profile();
            return obj;
        }
        book_side() {
            const obj = new this.$.$hyoo_page_side();
            return obj;
        }
        book_pages_node() {
            return null;
        }
        side_uri(id) {
            return "";
        }
        side_add(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        tools_ext() {
            return [];
        }
        Side_menu() {
            const obj = new this.$.$hyoo_page_side_menu();
            obj.yard = () => this.yard();
            obj.side = () => this.book_side();
            obj.side_current = () => this.side_current();
            obj.list = () => this.book_pages_node();
            obj.item_list = (id) => this.pages_node(id);
            obj.item_uri = (id) => this.side_uri(id);
            obj.item_add = (id, next) => this.side_add(id, next);
            obj.tools_ext = () => this.tools_ext();
            return obj;
        }
        side_menu_showed(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        editing(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        info(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        View_details(id) {
            return this.View(id).Details();
        }
        View(id) {
            const obj = new this.$.$hyoo_page_side_view();
            obj.side = () => this.side(id);
            obj.peer = (id) => this.side(id);
            obj.profile = () => this.profile();
            obj.menu_showed = (next) => this.side_menu_showed(next);
            obj.editing = (next) => this.editing(next);
            obj.info = (next) => this.info(next);
            obj.highlight = () => this.search();
            return obj;
        }
        rights(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        edit_close(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Edit(id) {
            const obj = new this.$.$hyoo_page_side_edit();
            obj.side = () => this.side(id);
            obj.rights = (next) => this.rights(next);
            obj.close = (next) => this.edit_close(id, next);
            return obj;
        }
        info_close(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Info(id) {
            const obj = new this.$.$hyoo_page_side_info();
            obj.side = () => this.side(id);
            obj.close = (next) => this.info_close(id, next);
            obj.Text = () => this.View_details(id);
            return obj;
        }
        rights_close(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Сlose_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Rights_close() {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.rights_close(next);
            obj.sub = () => [
                this.Сlose_icon()
            ];
            return obj;
        }
        Rights(id) {
            const obj = new this.$.$hyoo_meta_rights();
            obj.meta = () => this.side(id);
            obj.peer = (id) => this.side(id);
            obj.tools = () => [
                this.Rights_close()
            ];
            return obj;
        }
        safe_close(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Safe_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Safe_close() {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.safe_close(next);
            obj.sub = () => [
                this.Safe_icon()
            ];
            return obj;
        }
        Safe() {
            const obj = new this.$.$hyoo_meta_safe();
            obj.yard = () => this.yard();
            obj.tools = () => [
                this.Safe_close()
            ];
            return obj;
        }
        page_add(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        aura_showing(next) {
            if (next !== undefined)
                return next;
            return true;
        }
        safe(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        search() {
            return this.Menu().search();
        }
        Menu() {
            const obj = new this.$.$hyoo_page_menu();
            obj.yard = () => this.yard();
            obj.side = () => this.profile();
            obj.list = () => this.bookmarks_node();
            obj.item_uri = (id) => this.side_uri(id);
            obj.add = (next) => this.page_add(next);
            obj.item_add = (id, next) => this.side_add(id, next);
            obj.aura_showing = (next) => this.aura_showing(next);
            obj.safe_showing = (next) => this.safe(next);
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_page.prototype, "yard", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_page.prototype, "side", null);
    __decorate([
        $mol_mem
    ], $hyoo_page.prototype, "side_current", null);
    __decorate([
        $mol_mem
    ], $hyoo_page.prototype, "profile", null);
    __decorate([
        $mol_mem
    ], $hyoo_page.prototype, "Theme", null);
    __decorate([
        $mol_mem
    ], $hyoo_page.prototype, "News", null);
    __decorate([
        $mol_mem
    ], $hyoo_page.prototype, "book_side", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_page.prototype, "side_add", null);
    __decorate([
        $mol_mem
    ], $hyoo_page.prototype, "Side_menu", null);
    __decorate([
        $mol_mem
    ], $hyoo_page.prototype, "side_menu_showed", null);
    __decorate([
        $mol_mem
    ], $hyoo_page.prototype, "editing", null);
    __decorate([
        $mol_mem
    ], $hyoo_page.prototype, "info", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_page.prototype, "View", null);
    __decorate([
        $mol_mem
    ], $hyoo_page.prototype, "rights", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_page.prototype, "edit_close", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_page.prototype, "Edit", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_page.prototype, "info_close", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_page.prototype, "Info", null);
    __decorate([
        $mol_mem
    ], $hyoo_page.prototype, "rights_close", null);
    __decorate([
        $mol_mem
    ], $hyoo_page.prototype, "\u0421lose_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_page.prototype, "Rights_close", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_page.prototype, "Rights", null);
    __decorate([
        $mol_mem
    ], $hyoo_page.prototype, "safe_close", null);
    __decorate([
        $mol_mem
    ], $hyoo_page.prototype, "Safe_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_page.prototype, "Safe_close", null);
    __decorate([
        $mol_mem
    ], $hyoo_page.prototype, "Safe", null);
    __decorate([
        $mol_mem
    ], $hyoo_page.prototype, "page_add", null);
    __decorate([
        $mol_mem
    ], $hyoo_page.prototype, "aura_showing", null);
    __decorate([
        $mol_mem
    ], $hyoo_page.prototype, "safe", null);
    __decorate([
        $mol_mem
    ], $hyoo_page.prototype, "Menu", null);
    $.$hyoo_page = $hyoo_page;
})($ || ($ = {}));
//hyoo/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_stale(task) {
        try {
            return task();
        }
        catch (error) {
            if (!$mol_promise_like(error))
                return $mol_fail_hidden(error);
            const fiber = $mol_wire_auto();
            if (!(fiber instanceof $mol_wire_fiber))
                return;
            return $mol_wire_probe(() => fiber.result());
        }
    }
    $.$mol_wire_stale = $mol_wire_stale;
})($ || ($ = {}));
//mol/wire/stale/stale.ts
;
"use strict";
var $;
(function ($) {
    const blacklist = new Set([
        '//cse.google.com/adsense/search/async-ads.js'
    ]);
    function $mol_offline() {
        if (typeof window === 'undefined') {
            self.addEventListener('install', (event) => {
                ;
                self.skipWaiting();
            });
            self.addEventListener('activate', (event) => {
                caches.delete('v1');
                caches.delete('$mol_offline');
                self.clients.claim();
                console.info('$mol_offline activated');
            });
            self.addEventListener('fetch', (event) => {
                const request = event.request;
                if (blacklist.has(request.url.replace(/^https?:/, ''))) {
                    return event.respondWith(new Response(null, {
                        status: 418,
                        statusText: 'Blocked'
                    }));
                }
                if (request.method !== 'GET' || !/^https?:/.test(request.url)) {
                    return event.respondWith(fetch(request));
                }
                const fresh = fetch(event.request).then(response => {
                    event.waitUntil(caches.open('$mol_offline').then(cache => cache.put(event.request, response)));
                    return response.clone();
                });
                event.waitUntil(fresh);
                event.respondWith(caches.match(event.request).then(response => response || fresh));
            });
            self.addEventListener('beforeinstallprompt', (event) => {
                console.log(event);
                event.prompt();
            });
        }
        else if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
            console.warn('HTTPS or localhost is required for service workers.');
        }
        else if (!navigator.serviceWorker) {
            console.warn('Service Worker is not supported.');
        }
        else {
            navigator.serviceWorker.register('web.js');
        }
    }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));
//mol/offline/offline.web.ts
;
"use strict";
var $;
(function ($) {
    try {
        $mol_offline();
    }
    catch (error) {
        console.error(error);
    }
})($ || ($ = {}));
//mol/offline/install/install.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_page extends $.$hyoo_page {
            profile() {
                return this.side(this.yard().home().id());
            }
            title() {
                const side = this.side_current();
                const book = this.side_current_book();
                return book === side ? side.title() : `${side.title()} | ${book.title()}`;
            }
            aura_showing(next) {
                const key = `aura_showing:${this.book_id()}`;
                return this.$.$mol_state_local.value(key, next?.toString()) !== 'false';
            }
            aura_image() {
                return $mol_wire_stale(() => {
                    if (!this.aura_showing())
                        return '';
                    const side = this.side_current();
                    const aura = side.aura_effective();
                    if (!aura)
                        return '';
                    const shade = 'hsla( 0deg, 0%, calc( 50% + var(--mol_theme_luma) * 50% ), .666 )';
                    return `linear-gradient( ${shade}, ${shade} ), url("${aura}")`;
                }) ?? '';
            }
            editing(next) {
                if (next)
                    this.$.$mol_storage.persisted(true);
                return this.$.$mol_state_session.value('edit', next) ?? false;
            }
            rights(next) {
                return this.$.$mol_state_session.value('rights', next) ?? false;
            }
            info(next) {
                return this.$.$mol_state_session.value('info', next) ?? false;
            }
            safe(next) {
                const arg = next == undefined ? undefined : next ? '' : null;
                return this.$.$mol_state_arg.value('hyoo_meta_key', arg) !== null;
            }
            edit_close() {
                this.editing(false);
            }
            rights_close() {
                this.rights(false);
            }
            info_close() {
                this.info(false);
            }
            safe_close() {
                this.safe(false);
            }
            side(id) {
                return this.yard().world().Fund($hyoo_page_side).Item(id);
            }
            side_uri(id) {
                return this.$.$mol_state_arg.make_link({ '': id });
            }
            side_current_id() {
                return (this.$.$mol_state_arg.value('') || this.side_main_id());
            }
            side_current() {
                return this.side(this.side_current_id());
            }
            side_current_book() {
                return this.side_current().book() ?? this.side_current();
            }
            book_id() {
                return $mol_wire_stale(() => {
                    if (!this.side_menu_showed())
                        return '';
                    const side = this.side_current();
                    const books = side.books().slice().reverse();
                    if (side.pages().length || this.side_menu_showed())
                        books.push(side);
                    return books[0]?.id() ?? '';
                }) ?? this.side_current_id();
            }
            book_side() {
                const id = this.book_id();
                return id ? this.side(id) : null;
            }
            book_pages_node() {
                return this.pages_node(this.book_id());
            }
            side_menu_showed(next) {
                return next ?? Boolean(this.side_current().book() || this.side_current().pages().length > 0);
            }
            pages() {
                const id = this.side_current_id();
                const book = this.book_id();
                return [
                    this.Gap('left'),
                    ...book ? [this.Side_menu()] : [],
                    this.View(id),
                    ...this.info() ? [this.Info(id)] : [],
                    ...this.editing() ? [this.Edit(id)] : [],
                    ...this.rights() ? [this.Rights(id)] : [],
                    this.Gap('right'),
                    ...this.safe() ? [this.Safe()] : [],
                ];
            }
            page_add() {
                const land = this.yard().land_grab();
                this.$.$mol_dom_context.location.href = this.$.$mol_state_arg.link({ '': land.id() });
                this.bookmarks_node().add(land.id());
                this.editing(true);
            }
            side_add(id) {
                const book = this.side(id);
                const page = book.world().Fund($hyoo_page_side).make();
                this.$.$mol_dom_context.location.href = this.$.$mol_state_arg.link({ '': page.id() });
                page.steal_rights(book);
                page.book(book);
                this.bookmarks_node().add(page.id());
                this.editing(true);
            }
            ref_track() {
                const ref = this.$.$mol_dom_context.document.referrer;
                if (!ref)
                    return;
                const key = `${this}.ref_track`;
                if (this.$.$mol_state_session.value(key))
                    return;
                this.side_current().referrers_track(ref);
                this.$.$mol_state_session.value(key, true);
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_page.prototype, "profile", null);
        __decorate([
            $mol_mem
        ], $hyoo_page.prototype, "aura_showing", null);
        __decorate([
            $mol_mem
        ], $hyoo_page.prototype, "aura_image", null);
        __decorate([
            $mol_mem
        ], $hyoo_page.prototype, "editing", null);
        __decorate([
            $mol_mem
        ], $hyoo_page.prototype, "rights", null);
        __decorate([
            $mol_mem
        ], $hyoo_page.prototype, "info", null);
        __decorate([
            $mol_mem
        ], $hyoo_page.prototype, "safe", null);
        __decorate([
            $mol_mem
        ], $hyoo_page.prototype, "side_current_id", null);
        __decorate([
            $mol_mem
        ], $hyoo_page.prototype, "book_id", null);
        __decorate([
            $mol_mem
        ], $hyoo_page.prototype, "side_menu_showed", null);
        __decorate([
            $mol_mem
        ], $hyoo_page.prototype, "pages", null);
        __decorate([
            $mol_action
        ], $hyoo_page.prototype, "page_add", null);
        __decorate([
            $mol_action
        ], $hyoo_page.prototype, "side_add", null);
        __decorate([
            $mol_mem,
            $mol_action
        ], $hyoo_page.prototype, "ref_track", null);
        $$.$hyoo_page = $hyoo_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/page/page.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_define($hyoo_page, {
        background: {
            size: ['cover'],
            position: 'center',
        },
    });
})($ || ($ = {}));
//hyoo/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $dosha_client_partners extends $mol_page {
        title() {
            return "🎁 Партнёры";
        }
    }
    $.$dosha_client_partners = $dosha_client_partners;
})($ || ($ = {}));
//dosha/client/partners/-view.tree/partners.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_book2_catalog extends $mol_book2 {
        param() {
            return "";
        }
        spread(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        spreads() {
            return {};
        }
        Spread(id) {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Spread_default() {
            return null;
        }
        spread_ids() {
            return [];
        }
        menu_filter_enabled() {
            return false;
        }
        spread_ids_filtered() {
            return [];
        }
        pages() {
            return [
                this.Menu()
            ];
        }
        Spread_close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => this.spread_close_arg();
            obj.sub = () => [
                this.Spread_close_icon()
            ];
            return obj;
        }
        menu_title() {
            return "";
        }
        menu_tools() {
            return [];
        }
        menu_head() {
            return [
                this.Menu_title(),
                this.Menu_tools()
            ];
        }
        menu_filter(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Menu_filter() {
            const obj = new this.$.$mol_search();
            obj.query = (next) => this.menu_filter(next);
            return obj;
        }
        arg(id) {
            return {};
        }
        spread_title(id) {
            return "";
        }
        Menu_link_title(id) {
            const obj = new this.$.$mol_dimmer();
            obj.needle = () => this.menu_filter();
            obj.haystack = () => this.spread_title(id);
            return obj;
        }
        menu_link_content(id) {
            return [
                this.Menu_link_title(id)
            ];
        }
        Menu_link(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => this.arg(id);
            obj.sub = () => this.menu_link_content(id);
            return obj;
        }
        menu_links() {
            return [
                this.Menu_link("0")
            ];
        }
        Menu_links() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_links();
            return obj;
        }
        menu_body() {
            return [
                this.Menu_filter(),
                this.Menu_links()
            ];
        }
        menu_foot() {
            return [];
        }
        Menu_title() {
            return this.Menu().Title();
        }
        Menu_tools() {
            return this.Menu().Tools();
        }
        Menu() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.menu_title();
            obj.tools = () => this.menu_tools();
            obj.head = () => this.menu_head();
            obj.body = () => this.menu_body();
            obj.foot = () => this.menu_foot();
            return obj;
        }
        spread_close_arg() {
            return {};
        }
        Spread_close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_book2_catalog.prototype, "spread", null);
    __decorate([
        $mol_mem_key
    ], $mol_book2_catalog.prototype, "Spread", null);
    __decorate([
        $mol_mem
    ], $mol_book2_catalog.prototype, "Spread_close", null);
    __decorate([
        $mol_mem
    ], $mol_book2_catalog.prototype, "menu_filter", null);
    __decorate([
        $mol_mem
    ], $mol_book2_catalog.prototype, "Menu_filter", null);
    __decorate([
        $mol_mem_key
    ], $mol_book2_catalog.prototype, "Menu_link_title", null);
    __decorate([
        $mol_mem_key
    ], $mol_book2_catalog.prototype, "Menu_link", null);
    __decorate([
        $mol_mem
    ], $mol_book2_catalog.prototype, "Menu_links", null);
    __decorate([
        $mol_mem
    ], $mol_book2_catalog.prototype, "Menu", null);
    __decorate([
        $mol_mem
    ], $mol_book2_catalog.prototype, "Spread_close_icon", null);
    $.$mol_book2_catalog = $mol_book2_catalog;
})($ || ($ = {}));
//mol/book2/catalog/-view.tree/catalog.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2_catalog extends $.$mol_book2_catalog {
            pages() {
                const spread = this.spread() === '' ? this.Spread_default() : this.Spread(this.spread());
                return [
                    this.Menu(),
                    ...spread
                        ? spread instanceof $mol_book2
                            ? spread.pages()
                            : [spread]
                        : [],
                ];
            }
            spread_ids() {
                return Object.keys(this.spreads());
            }
            menu_body() {
                return [
                    ...this.menu_filter_enabled() ? [this.Menu_filter()] : [],
                    this.Menu_links(),
                ];
            }
            menu_filter_enabled() {
                return this.spread_ids().length >= 10;
            }
            menu_links() {
                return this.spread_ids_filtered()
                    .map(spread => this.Menu_link(spread));
            }
            spread_ids_filtered() {
                return this.spread_ids()
                    .filter($mol_match_text(this.menu_filter(), spread => [this.spread_title(spread)]));
            }
            Spread(id) {
                return this.spreads()[id];
            }
            Spread_default() {
                return this.spreads()[''];
            }
            spread(next) {
                return this.$.$mol_state_arg.value(this.param(), next) ?? '';
            }
            arg(spread) {
                return { [this.param()]: spread || null };
            }
            spread_close_arg() {
                return { [this.param()]: null };
            }
            spread_title(spread) {
                const page = this.Spread(spread);
                return page instanceof $mol_book2
                    && page.menu_title()
                    || page.title();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "pages", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "spread_ids", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "menu_body", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "menu_links", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "spread_ids_filtered", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "spread", null);
        $$.$mol_book2_catalog = $mol_book2_catalog;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/book2/catalog/catalog.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/book2/catalog/catalog.view.css", "[mol_book2_catalog_menu_filter] {\n\tflex-shrink: 0;\n\tflex-grow: 0;\n\talign-self: stretch;\n}\n\n");
})($ || ($ = {}));
//mol/book2/catalog/-css/catalog.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $dosha_company_report extends $mol_page {
        title() {
            return "Отчёт";
        }
        body() {
            return [
                this.Download_report()
            ];
        }
        download() {
            const obj = new this.$.$mol_blob();
            return obj;
        }
        Download_report() {
            const obj = new this.$.$mol_button_download();
            obj.file_name = () => "dosha_report.txt";
            obj.title = () => "Скачать отчёт для оплаты";
            obj.blob = () => this.download();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $dosha_company_report.prototype, "download", null);
    __decorate([
        $mol_mem
    ], $dosha_company_report.prototype, "Download_report", null);
    $.$dosha_company_report = $dosha_company_report;
})($ || ($ = {}));
//dosha/company/report/-view.tree/report.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $dosha_company_report extends $.$dosha_company_report {
            download() {
                console.log('Скачать отчёт');
                const report_content = 'Отчёт для оплаты. Контент';
                return new $mol_dom_context.Blob([report_content], { type: 'text/x-marked' });
            }
        }
        $$.$dosha_company_report = $dosha_company_report;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dosha/company/report/report.view.ts
;
"use strict";
var $;
(function ($) {
    class $dosha_company extends $mol_book2_catalog {
        menu_title() {
            return "ДоШа Компания";
        }
        param() {
            return "company";
        }
        spreads() {
            return {
                people_page: this.People_page(),
                report_page: this.Report_page()
            };
        }
        People_page() {
            const obj = new this.$.$mol_page();
            obj.title = () => "Пользователи";
            return obj;
        }
        Report_page() {
            const obj = new this.$.$dosha_company_report();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $dosha_company.prototype, "People_page", null);
    __decorate([
        $mol_mem
    ], $dosha_company.prototype, "Report_page", null);
    $.$dosha_company = $dosha_company;
})($ || ($ = {}));
//dosha/company/-view.tree/company.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $dosha_client extends $mol_view {
        dosha(next) {
            if (next !== undefined)
                return next;
            return 10000;
        }
        auth(next) {
            if (next !== undefined)
                return next;
            return true;
        }
        title() {
            return "👣 ДоШа";
        }
        sub() {
            return [
                this.Auth_page(),
                this.Secure()
            ];
        }
        login(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Auth_page() {
            const obj = new this.$.$dosha_client_auth();
            obj.login_success = (next) => this.login(next);
            return obj;
        }
        Theme() {
            const obj = new this.$.$mol_theme_auto();
            return obj;
        }
        chat_pages() {
            return this.Chat().pages();
        }
        Chat() {
            const obj = new this.$.$mol_chat();
            obj.seed = () => "dosha_chat_v1";
            return obj;
        }
        Lights() {
            const obj = new this.$.$mol_lights_toggle();
            return obj;
        }
        GitHub() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => "https://github.com/Lyumih/dosha";
            return obj;
        }
        logout(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Logout_icon() {
            const obj = new this.$.$mol_icon_logout();
            return obj;
        }
        Logout() {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.logout(next);
            obj.sub = () => [
                this.Logout_icon()
            ];
            return obj;
        }
        Steps_page() {
            const obj = new this.$.$dosha_client_steps();
            obj.dosha_value = (next) => this.dosha(next);
            return obj;
        }
        History_page() {
            const obj = new this.$.$dosha_client_history();
            return obj;
        }
        Profile_page() {
            const obj = new this.$.$dosha_client_profile();
            return obj;
        }
        Found_page() {
            const obj = new this.$.$dosha_client_found();
            return obj;
        }
        Rating_page() {
            const obj = new this.$.$dosha_client_rating();
            return obj;
        }
        City_page() {
            const obj = new this.$.$dosha_client_city();
            return obj;
        }
        Chat_page() {
            const obj = new this.$.$mol_view();
            obj.title = () => "🎭 Чат";
            obj.sub = () => this.chat_pages();
            return obj;
        }
        Persentation_page() {
            const obj = new this.$.$hyoo_page();
            obj.title = () => "📽 Презентация";
            return obj;
        }
        Partners_page() {
            const obj = new this.$.$dosha_client_partners();
            return obj;
        }
        Company_page() {
            const obj = new this.$.$dosha_company();
            obj.menu_title = () => "🧮 Компания *";
            return obj;
        }
        Secure() {
            const obj = new this.$.$mol_book2_catalog();
            obj.menu_title = () => "👣 ДоШа";
            obj.param = () => "client";
            obj.menu_filter_enabled = () => false;
            obj.plugins = () => [
                this.Theme()
            ];
            obj.menu_tools = () => [
                this.Chat()
            ];
            obj.menu_foot = () => [
                this.Lights(),
                this.GitHub(),
                this.Logout()
            ];
            obj.spreads = () => ({
                steps: this.Steps_page(),
                history: this.History_page(),
                profile: this.Profile_page(),
                found: this.Found_page(),
                rating: this.Rating_page(),
                city: this.City_page(),
                chat: this.Chat_page(),
                presentation: this.Persentation_page(),
                partners: this.Partners_page(),
                company_page: this.Company_page()
            });
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "dosha", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "auth", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "login", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "Auth_page", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "Theme", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "Chat", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "Lights", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "GitHub", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "logout", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "Logout_icon", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "Logout", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "Steps_page", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "History_page", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "Profile_page", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "Found_page", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "Rating_page", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "City_page", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "Chat_page", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "Persentation_page", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "Partners_page", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "Company_page", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "Secure", null);
    $.$dosha_client = $dosha_client;
})($ || ($ = {}));
//dosha/client/-view.tree/client.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $dosha_client extends $.$dosha_client {
            sub() {
                return this.auth() ? [this.Secure()] : [this.Auth_page()];
            }
            logout(next) {
                this.auth(false);
            }
            login(next) {
                this.auth(true);
            }
        }
        $$.$dosha_client = $dosha_client;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dosha/client/client.view.ts

export default $
//# sourceMappingURL=web.js.map