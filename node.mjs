"use strict";
var exports = void 0;

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
    class $mol_window extends $mol_object {
        static size() {
            return {
                width: 1024,
                height: 768,
            };
        }
    }
    $.$mol_window = $mol_window;
})($ || ($ = {}));
//mol/window/window.node.ts
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
    class $mol_after_frame extends $mol_after_timeout {
        task;
        constructor(task) {
            super(16, task);
            this.task = task;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//mol/after/frame/frame.node.ts
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
})($ || ($ = {}));
//mol/dom/context/context.ts
;
"use strict";
//node/node.ts
;
"use strict";
var $node = new Proxy({ require }, {
    get(target, name, wrapper) {
        if (target[name])
            return target[name];
        const mod = target.require('module');
        if (mod.builtinModules.indexOf(name) >= 0)
            return target.require(name);
        if (name[0] === '.')
            return target.require(name);
        const path = target.require('path');
        const fs = target.require('fs');
        let dir = path.resolve('.');
        const suffix = `./node_modules/${name}`;
        const $$ = $;
        while (!fs.existsSync(path.join(dir, suffix))) {
            const parent = path.resolve(dir, '..');
            if (parent === dir) {
                $$.$mol_exec('.', 'npm', 'install', '--omit=dev', name);
                try {
                    $$.$mol_exec('.', 'npm', 'install', '--omit=dev', '@types/' + name);
                }
                catch { }
                break;
            }
            else {
                dir = parent;
            }
        }
        return target.require(name);
    },
    set(target, name, value) {
        target[name] = value;
        return true;
    },
});
require = (req => Object.assign(function require(name) {
    return $node[name];
}, req))(require);
//node/node.node.ts
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
    class $mol_span extends $mol_object2 {
        uri;
        source;
        row;
        col;
        length;
        constructor(uri, source, row, col, length) {
            super();
            this.uri = uri;
            this.source = source;
            this.row = row;
            this.col = col;
            this.length = length;
            this[Symbol.toStringTag] = `${this.uri}#${this.row}:${this.col}/${this.length}`;
        }
        static unknown = $mol_span.begin('?');
        static begin(uri, source = '') {
            return new $mol_span(uri, source, 1, 1, 0);
        }
        static end(uri, source) {
            return new $mol_span(uri, source, 1, source.length + 1, length);
        }
        static entire(uri, source) {
            return new $mol_span(uri, source, 1, 1, source.length);
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return {
                uri: this.uri,
                row: this.row,
                col: this.col,
                length: this.length
            };
        }
        error(message, Class = Error) {
            return new Class(`${message}${this}`);
        }
        span(row, col, length) {
            return new $mol_span(this.uri, this.source, row, col, length);
        }
        after(length = 0) {
            return new $mol_span(this.uri, this.source, this.row, this.col + this.length, length);
        }
        slice(begin, end = -1) {
            let len = this.length;
            if (begin < 0)
                begin += len;
            if (end < 0)
                end += len;
            if (begin < 0 || begin > len)
                this.$.$mol_fail(`Begin value '${begin}' out of range ${this}`);
            if (end < 0 || end > len)
                this.$.$mol_fail(`End value '${end}' out of range ${this}`);
            if (end < begin)
                this.$.$mol_fail(`End value '${end}' can't be less than begin value ${this}`);
            return this.span(this.row, this.col + begin, end - begin);
        }
    }
    $.$mol_span = $mol_span;
})($ || ($ = {}));
//mol/span/span.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_to_string(tree) {
        let output = [];
        function dump(tree, prefix = '') {
            if (tree.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output.push(tree.type);
                if (tree.kids.length == 1) {
                    output.push(' ');
                    dump(tree.kids[0], prefix);
                    return;
                }
                output.push("\n");
            }
            else if (tree.value.length || prefix.length) {
                output.push("\\" + tree.value + "\n");
            }
            for (const kid of tree.kids) {
                output.push(prefix);
                dump(kid, prefix + "\t");
            }
        }
        dump(tree);
        return output.join('');
    }
    $.$mol_tree2_to_string = $mol_tree2_to_string;
})($ || ($ = {}));
//mol/tree2/to/string/string.ts
;
"use strict";
var $;
(function ($) {
    class $mol_tree2 extends Object {
        type;
        value;
        kids;
        span;
        constructor(type, value, kids, span) {
            super();
            this.type = type;
            this.value = value;
            this.kids = kids;
            this.span = span;
            this[Symbol.toStringTag] = type || '\\' + value;
        }
        static list(kids, span = $mol_span.unknown) {
            return new $mol_tree2('', '', kids, span);
        }
        list(kids) {
            return $mol_tree2.list(kids, this.span);
        }
        static data(value, kids = [], span = $mol_span.unknown) {
            const chunks = value.split('\n');
            if (chunks.length > 1) {
                let kid_span = span.span(span.row, span.col, 0);
                const data = chunks.map(chunk => {
                    kid_span = kid_span.after(chunk.length);
                    return new $mol_tree2('', chunk, [], kid_span);
                });
                kids = [...data, ...kids];
                value = '';
            }
            return new $mol_tree2('', value, kids, span);
        }
        data(value, kids = []) {
            return $mol_tree2.data(value, kids, this.span);
        }
        static struct(type, kids = [], span = $mol_span.unknown) {
            if (/[ \n\t\\]/.test(type)) {
                $$.$mol_fail(span.error(`Wrong type ${JSON.stringify(type)}`));
            }
            return new $mol_tree2(type, '', kids, span);
        }
        struct(type, kids = []) {
            return $mol_tree2.struct(type, kids, this.span);
        }
        clone(kids, span = this.span) {
            return new $mol_tree2(this.type, this.value, kids, span);
        }
        text() {
            var values = [];
            for (var kid of this.kids) {
                if (kid.type)
                    continue;
                values.push(kid.value);
            }
            return this.value + values.join('\n');
        }
        static fromString(str, uri = 'unknown') {
            return $$.$mol_tree2_from_string(str, uri);
        }
        toString() {
            return $$.$mol_tree2_to_string(this);
        }
        insert(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.kids.map((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.insert(value, ...path.slice(1));
                }).filter(Boolean);
                if (!replaced && value) {
                    sub.push(this.struct(type, []).insert(value, ...path.slice(1)));
                }
                return this.clone(sub);
            }
            else if (typeof type === 'number') {
                const sub = this.kids.slice();
                sub[type] = (sub[type] || this.list([]))
                    .insert(value, ...path.slice(1));
                return this.clone(sub.filter(Boolean));
            }
            else {
                const kids = ((this.kids.length === 0) ? [this.list([])] : this.kids)
                    .map(item => item.insert(value, ...path.slice(1)))
                    .filter(Boolean);
                return this.clone(kids);
            }
        }
        select(...path) {
            let next = [this];
            for (const type of path) {
                if (!next.length)
                    break;
                const prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.kids) {
                                if (child.type == type) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.kids.length)
                                next.push(item.kids[type]);
                            break;
                        default: next.push(...item.kids);
                    }
                }
            }
            return this.list(next);
        }
        filter(path, value) {
            const sub = this.kids.filter(item => {
                var found = item.select(...path);
                if (value === undefined) {
                    return Boolean(found.kids.length);
                }
                else {
                    return found.kids.some(child => child.value == value);
                }
            });
            return this.clone(sub);
        }
        hack(belt, context = {}) {
            return [].concat(...this.kids.map(child => {
                let handle = belt[child.type] || belt[''];
                if (!handle || handle === Object.prototype[child.type]) {
                    handle = (input, belt, context) => [
                        input.clone(input.hack(belt, context), context.span)
                    ];
                }
                try {
                    return handle(child, belt, context);
                }
                catch (error) {
                    error.message += `\n${child.clone([])}${child.span}`;
                    $mol_fail_hidden(error);
                }
            }));
        }
        error(message, Class = Error) {
            return this.span.error(`${message}\n${this.clone([])}`, Class);
        }
    }
    $.$mol_tree2 = $mol_tree2;
    class $mol_tree2_empty extends $mol_tree2 {
        constructor() {
            super('', '', [], $mol_span.unknown);
        }
    }
    $.$mol_tree2_empty = $mol_tree2_empty;
})($ || ($ = {}));
//mol/tree2/tree2.ts
;
"use strict";
var $;
(function ($) {
    class $mol_error_syntax extends SyntaxError {
        reason;
        line;
        span;
        constructor(reason, line, span) {
            super(`${reason}\n${span}\n${line.substring(0, span.col - 1).replace(/\S/g, ' ')}${''.padEnd(span.length, '!')}\n${line}`);
            this.reason = reason;
            this.line = line;
            this.span = span;
        }
    }
    $.$mol_error_syntax = $mol_error_syntax;
})($ || ($ = {}));
//mol/error/syntax/syntax.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_string(str, uri = '?') {
        const span = $mol_span.entire(uri, str);
        var root = $mol_tree2.list([], span);
        var stack = [root];
        var pos = 0, row = 0, min_indent = 0;
        while (str.length > pos) {
            var indent = 0;
            var line_start = pos;
            row++;
            while (str.length > pos && str[pos] == '\t') {
                indent++;
                pos++;
            }
            if (!root.kids.length) {
                min_indent = indent;
            }
            indent -= min_indent;
            if (indent < 0 || indent >= stack.length) {
                const sp = span.span(row, 1, pos - line_start);
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                if (indent < 0) {
                    if (str.length > pos) {
                        this.$mol_fail(new this.$mol_error_syntax(`Too few tabs`, str.substring(line_start, pos), sp));
                    }
                }
                else {
                    this.$mol_fail(new this.$mol_error_syntax(`Too many tabs`, str.substring(line_start, pos), sp));
                }
            }
            stack.length = indent + 1;
            var parent = stack[indent];
            while (str.length > pos && str[pos] != '\\' && str[pos] != '\n') {
                var error_start = pos;
                while (str.length > pos && (str[pos] == ' ' || str[pos] == '\t')) {
                    pos++;
                }
                if (pos > error_start) {
                    let line_end = str.indexOf('\n', pos);
                    if (line_end === -1)
                        line_end = str.length;
                    const sp = span.span(row, error_start - line_start + 1, pos - error_start);
                    this.$mol_fail(new this.$mol_error_syntax(`Wrong nodes separator`, str.substring(line_start, line_end), sp));
                }
                var type_start = pos;
                while (str.length > pos &&
                    str[pos] != '\\' &&
                    str[pos] != ' ' &&
                    str[pos] != '\t' &&
                    str[pos] != '\n') {
                    pos++;
                }
                if (pos > type_start) {
                    let next = new $mol_tree2(str.slice(type_start, pos), '', [], span.span(row, type_start - line_start + 1, pos - type_start));
                    const parent_kids = parent.kids;
                    parent_kids.push(next);
                    parent = next;
                }
                if (str.length > pos && str[pos] == ' ') {
                    pos++;
                }
            }
            if (str.length > pos && str[pos] == '\\') {
                var data_start = pos;
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                let next = new $mol_tree2('', str.slice(data_start + 1, pos), [], span.span(row, data_start - line_start + 2, pos - data_start - 1));
                const parent_kids = parent.kids;
                parent_kids.push(next);
                parent = next;
            }
            if (str.length === pos && stack.length > 0) {
                const sp = span.span(row, pos - line_start + 1, 1);
                this.$mol_fail(new this.$mol_error_syntax(`Unexpected EOF, LF required`, str.substring(line_start, str.length), sp));
            }
            stack.push(parent);
            pos++;
        }
        return root;
    }
    $.$mol_tree2_from_string = $mol_tree2_from_string;
})($ || ($ = {}));
//mol/tree2/from/string/string.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_json(json, span = $mol_span.unknown) {
        if (typeof json === 'boolean' || typeof json === 'number' || json === null) {
            return new $mol_tree2(String(json), '', [], span);
        }
        if (typeof json === 'string') {
            return $mol_tree2.data(json, [], span);
        }
        if (Array.isArray(json)) {
            const sub = json.map(json => $mol_tree2_from_json(json, span));
            return new $mol_tree2('/', '', sub, span);
        }
        if (ArrayBuffer.isView(json)) {
            const buf = new Uint8Array(json.buffer, json.byteOffset, json.byteLength);
            return $mol_tree2.data(String.fromCharCode(...buf), [], span);
        }
        if (json instanceof Date) {
            return new $mol_tree2('', json.toISOString(), [], span);
        }
        if (typeof json.toJSON === 'function') {
            return $mol_tree2_from_json(json.toJSON());
        }
        if (json instanceof Error) {
            const { name, message, stack } = json;
            json = { ...json, name, message, stack };
        }
        const sub = [];
        for (var key in json) {
            const val = json[key];
            if (val === undefined)
                continue;
            const subsub = $mol_tree2_from_json(val, span);
            if (/^[^\n\t\\ ]+$/.test(key)) {
                sub.push(new $mol_tree2(key, '', [subsub], span));
            }
            else {
                sub.push($mol_tree2.data(key, [subsub], span));
            }
        }
        return new $mol_tree2('*', '', sub, span);
    }
    $.$mol_tree2_from_json = $mol_tree2_from_json;
})($ || ($ = {}));
//mol/tree2/from/json/json.ts
;
"use strict";
var $;
(function ($) {
    class $mol_term_color {
        static reset = this.ansi(0, 0);
        static bold = this.ansi(1, 22);
        static italic = this.ansi(3, 23);
        static underline = this.ansi(4, 24);
        static inverse = this.ansi(7, 27);
        static hidden = this.ansi(8, 28);
        static strike = this.ansi(9, 29);
        static gray = this.ansi(90, 39);
        static red = this.ansi(91, 39);
        static green = this.ansi(92, 39);
        static yellow = this.ansi(93, 39);
        static blue = this.ansi(94, 39);
        static magenta = this.ansi(95, 39);
        static cyan = this.ansi(96, 39);
        static Gray = (str) => this.inverse(this.gray(str));
        static Red = (str) => this.inverse(this.red(str));
        static Green = (str) => this.inverse(this.green(str));
        static Yellow = (str) => this.inverse(this.yellow(str));
        static Blue = (str) => this.inverse(this.blue(str));
        static Magenta = (str) => this.inverse(this.magenta(str));
        static Cyan = (str) => this.inverse(this.cyan(str));
        static ansi(open, close) {
            if (typeof process === 'undefined')
                return String;
            if (!process.stdout.isTTY)
                return String;
            const prefix = `\x1b[${open}m`;
            const postfix = `\x1b[${close}m`;
            const suffix_regexp = new RegExp(postfix.replace('[', '\\['), 'g');
            return function colorer(str) {
                str = String(str);
                if (str === '')
                    return str;
                const suffix = str.replace(suffix_regexp, prefix);
                return prefix + suffix + postfix;
            };
        }
    }
    $.$mol_term_color = $mol_term_color;
})($ || ($ = {}));
//mol/term/color/color.ts
;
"use strict";
var $;
(function ($) {
    function $mol_log3_node_make(level, output, type, color) {
        return function $mol_log3_logger(event) {
            if (!event.time)
                event = { time: new Date().toISOString(), ...event };
            let tree = this.$mol_tree2_from_json(event);
            tree = tree.struct(type, tree.kids);
            let str = color(tree.toString());
            this.console[level](str);
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_node_make = $mol_log3_node_make;
    $.$mol_log3_come = $mol_log3_node_make('info', 'stdout', 'come', $mol_term_color.blue);
    $.$mol_log3_done = $mol_log3_node_make('info', 'stdout', 'done', $mol_term_color.green);
    $.$mol_log3_fail = $mol_log3_node_make('error', 'stderr', 'fail', $mol_term_color.red);
    $.$mol_log3_warn = $mol_log3_node_make('warn', 'stderr', 'warn', $mol_term_color.yellow);
    $.$mol_log3_rise = $mol_log3_node_make('log', 'stdout', 'rise', $mol_term_color.magenta);
    $.$mol_log3_area = $mol_log3_node_make('log', 'stdout', 'area', $mol_term_color.cyan);
})($ || ($ = {}));
//mol/log3/log3.node.ts
;
"use strict";
var $;
(function ($) {
    function $mol_env() {
        return {};
    }
    $.$mol_env = $mol_env;
})($ || ($ = {}));
//mol/env/env.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_env = function $mol_env() {
        return this.process.env;
    };
})($ || ($ = {}));
//mol/env/env.node.ts
;
"use strict";
var $;
(function ($) {
    function $mol_exec(dir, command, ...args) {
        let [app, ...args0] = command.split(' ');
        args = [...args0, ...args];
        this.$mol_log3_come({
            place: '$mol_exec',
            dir: $node.path.relative('', dir),
            message: 'Run',
            command: `${app} ${args.join(' ')}`,
        });
        var res = $node['child_process'].spawnSync(app, args, {
            cwd: $node.path.resolve(dir),
            shell: true,
            env: this.$mol_env(),
        });
        if (res.status || res.error)
            return $mol_fail(res.error || new Error(res.stderr.toString()));
        if (!res.stdout)
            res.stdout = Buffer.from([]);
        return res;
    }
    $.$mol_exec = $mol_exec;
})($ || ($ = {}));
//mol/exec/exec.node.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = new $node.jsdom.JSDOM('', { url: 'https://localhost/' }).window;
})($ || ($ = {}));
//mol/dom/context/context.node.ts
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
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));
//mol/mem/cached/cached.ts
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
        static prolog = '';
        static separator = ' ';
        static href(next) {
            return next || process.argv.slice(2).join(' ');
        }
        static href_normal() {
            return this.link({});
        }
        static dict(next) {
            if (next !== void 0)
                this.href(this.make_link(next));
            var href = this.href();
            var chunks = href.split(' ');
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static value(key, next) {
            if (next === void 0)
                return this.dict()[key] ?? null;
            this.href(this.link({ [key]: next }));
            return next;
        }
        static link(next) {
            const params = {};
            var prev = this.dict();
            for (var key in prev) {
                params[key] = prev[key];
            }
            for (var key in next) {
                params[key] = next[key];
            }
            return this.make_link(params);
        }
        static make_link(next) {
            const chunks = [];
            for (const key in next) {
                if (next[key] !== null) {
                    chunks.push([key, next[key]].map(encodeURIComponent).join('='));
                }
            }
            return chunks.join(' ');
        }
        static go(next) {
            this.href(this.make_link(next));
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
            const prefix = this.prefix;
            const dict = {};
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
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "go", null);
    $.$mol_state_arg = $mol_state_arg;
})($ || ($ = {}));
//mol/state/arg/arg.node.ts
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
    function $mol_compare_array(a, b) {
        if (a === b)
            return true;
        if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
            return false;
        if (a.length !== b.length)
            return false;
        for (let i = 0; i < a.length; i++)
            if (a[i] !== b[i])
                return false;
        return true;
    }
    $.$mol_compare_array = $mol_compare_array;
})($ || ($ = {}));
//mol/compare/array/array.ts
;
"use strict";
var $;
(function ($) {
    function stat_convert(stat) {
        if (!stat)
            return null;
        let type;
        if (stat.isDirectory())
            type = 'dir';
        if (stat.isFile())
            type = 'file';
        if (stat.isSymbolicLink())
            type = 'link';
        if (!type)
            return $mol_fail(new Error(`Unsupported file type`));
        return {
            type,
            size: Number(stat.size),
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime
        };
    }
    function buffer_normalize(buf) {
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    class $mol_file_node extends $mol_file {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute($node.path.resolve(this.base, path).replace(/\\/g, '/'));
        }
        watcher() {
            const watcher = $node.chokidar.watch(this.path(), {
                persistent: true,
                ignored: /(^\.|___$)/,
                depth: 0,
                ignoreInitial: true,
                awaitWriteFinish: {
                    stabilityThreshold: 100,
                },
            });
            watcher
                .on('all', (type, path) => {
                const file = $mol_file.relative(path.replace(/\\/g, '/'));
                file.reset();
                if (type === 'change') {
                    this.stat(null);
                }
                else {
                    file.parent().reset();
                }
            })
                .on('error', $mol_fail_log);
            return {
                destructor() {
                    watcher.close();
                }
            };
        }
        stat(next, virt) {
            let stat = next;
            const path = this.path();
            this.parent().watcher();
            if (virt)
                return next;
            try {
                stat = next ?? stat_convert($node.fs.statSync(path, { throwIfNoEntry: false }));
            }
            catch (error) {
                if (error.code === 'ENOENT')
                    error = new $mol_file_not_found(`File not found`);
                error.message += '\n' + path;
                return this.$.$mol_fail_hidden(error);
            }
            return stat;
        }
        ensure() {
            const path = this.path();
            try {
                $node.fs.mkdirSync(path);
            }
            catch (e) {
                e.message += '\n' + path;
                this.$.$mol_fail_hidden(e);
            }
        }
        buffer(next) {
            const path = this.path();
            if (next === undefined) {
                if (!this.stat())
                    return new Uint8Array;
                try {
                    const prev = $mol_mem_cached(() => this.buffer());
                    next = buffer_normalize($node.fs.readFileSync(path));
                    if (prev !== undefined && !$mol_compare_array(prev, next)) {
                        this.$.$mol_log3_rise({
                            place: `$mol_file_node..buffer()`,
                            message: 'Changed',
                            path: this.relate(),
                        });
                    }
                    return next;
                }
                catch (error) {
                    error.message += '\n' + path;
                    return this.$.$mol_fail_hidden(error);
                }
            }
            this.parent().exists(true);
            const now = new Date;
            this.stat({
                type: 'file',
                size: next.length,
                atime: now,
                mtime: now,
                ctime: now,
            }, 'virt');
            try {
                $node.fs.writeFileSync(path, next);
            }
            catch (error) {
                error.message += '\n' + path;
                return this.$.$mol_fail_hidden(error);
            }
            return next;
        }
        sub() {
            if (!this.exists())
                return [];
            if (this.type() !== 'dir')
                return [];
            const path = this.path();
            this.stat();
            try {
                return $node.fs.readdirSync(path)
                    .filter(name => !/^\.+$/.test(name))
                    .map(name => this.resolve(name));
            }
            catch (e) {
                e.message += '\n' + path;
                return this.$.$mol_fail_hidden(e);
            }
        }
        resolve(path) {
            return this.constructor.relative($node.path.join(this.path(), path));
        }
        relate(base = this.constructor.relative('.')) {
            return $node.path.relative(base.path(), this.path()).replace(/\\/g, '/');
        }
        append(next) {
            const path = this.path();
            try {
                $node.fs.appendFileSync(path, next);
            }
            catch (e) {
                e.message += '\n' + path;
                return this.$.$mol_fail_hidden(e);
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "watcher", null);
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "ensure", null);
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "buffer", null);
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "sub", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_node, "absolute", null);
    $.$mol_file_node = $mol_file_node;
    $.$mol_file = $mol_file_node;
})($ || ($ = {}));
//mol/file/file.node.ts
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
//hyoo/hyoo.ts
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
                this.Offer_found_form()
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
        Liza_alert() {
            const obj = new this.$.$mol_link_iconed();
            obj.title = () => "Лиза Алерт";
            obj.uri = () => "https://lizaalert.org/";
            return obj;
        }
        Shag_v_zhizn() {
            const obj = new this.$.$mol_link_iconed();
            obj.title = () => "Шаг в жизнь";
            obj.uri = () => "https://shag-v-zhizn.ru/";
            return obj;
        }
        Active_founds() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Liza_alert(),
                this.Shag_v_zhizn()
            ];
            return obj;
        }
        Waiting_founds_label() {
            const obj = new this.$.$mol_text();
            obj.text = () => "# Фонды, которые скоро добавим в работу";
            return obj;
        }
        Chance() {
            const obj = new this.$.$mol_link_iconed();
            obj.title = () => "Подари Шанс";
            obj.uri = () => "https://chance.su/";
            return obj;
        }
        New_founds() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Chance()
            ];
            return obj;
        }
        Offer_found_name() {
            const obj = new this.$.$mol_string();
            return obj;
        }
        Offer_found_name_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Имя нового фонда";
            obj.Content = () => this.Offer_found_name();
            return obj;
        }
        Offer_found_link() {
            const obj = new this.$.$mol_string();
            return obj;
        }
        Offer_found_link_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Ссылка на фонд";
            obj.Content = () => this.Offer_found_link();
            return obj;
        }
        Offer_found_add() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => "Предложить новый фонд";
            return obj;
        }
        Offer_found_form() {
            const obj = new this.$.$mol_form();
            obj.form_fields = () => [
                this.Offer_found_name_field(),
                this.Offer_found_link_field()
            ];
            obj.buttons = () => [
                this.Offer_found_add()
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
        $mol_mem
    ], $dosha_client_found.prototype, "Liza_alert", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "Shag_v_zhizn", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "Active_founds", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "Waiting_founds_label", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "Chance", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "New_founds", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "Offer_found_name", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "Offer_found_name_field", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "Offer_found_link", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "Offer_found_link_field", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "Offer_found_add", null);
    __decorate([
        $mol_mem
    ], $dosha_client_found.prototype, "Offer_found_form", null);
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
        }
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
    class $dosha_client extends $mol_book2_catalog {
        dosha(next) {
            if (next !== undefined)
                return next;
            return 10000;
        }
        menu_title() {
            return "👣 ДоШа";
        }
        param() {
            return "client";
        }
        plugins() {
            return [
                this.Theme()
            ];
        }
        menu_tools() {
            return [
                this.Chat()
            ];
        }
        menu_foot() {
            return [
                this.Lights(),
                this.GitHub()
            ];
        }
        spreads() {
            return {
                steps: this.Steps_page(),
                profile: this.Profile_page(),
                found: this.Found_page(),
                chat: this.Chat_page(),
                rating: this.Rating_page(),
                company_page: this.Company_page()
            };
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
        Steps_page() {
            const obj = new this.$.$dosha_client_steps();
            obj.dosha_value = (next) => this.dosha(next);
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
        Chat_page() {
            const obj = new this.$.$mol_view();
            obj.title = () => "🎭 Чат";
            obj.sub = () => this.chat_pages();
            return obj;
        }
        Rating_page() {
            const obj = new this.$.$dosha_client_rating();
            return obj;
        }
        Company_page() {
            const obj = new this.$.$dosha_company();
            obj.menu_title = () => "🧮 Компания *";
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "dosha", null);
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
    ], $dosha_client.prototype, "Steps_page", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "Profile_page", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "Found_page", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "Chat_page", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "Rating_page", null);
    __decorate([
        $mol_mem
    ], $dosha_client.prototype, "Company_page", null);
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
        }
        $$.$dosha_client = $dosha_client;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dosha/client/client.view.ts

export default $
//# sourceMappingURL=node.js.map
