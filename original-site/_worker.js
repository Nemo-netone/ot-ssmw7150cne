const RESOURCES = {
  users: { table: "users", pk: "id", label: "管理员" },
  yonghu: { table: "yonghu", pk: "id", label: "用户" },
  huodongguanliyuan: { table: "huodongguanliyuan", pk: "id", label: "活动管理员" },
  huodongfenlei: { table: "huodongfenlei", pk: "id", label: "活动分类" },
  huodongxinxi: { table: "huodongxinxi", pk: "id", label: "活动信息" },
  baomingxinxi: { table: "baomingxinxi", pk: "id", label: "报名信息" },
  huodonggenzong: { table: "huodonggenzong", pk: "id", label: "活动跟踪" },
  tongzhixinxi: { table: "tongzhixinxi", pk: "id", label: "通知信息" },
  news: { table: "news", pk: "id", label: "公告资讯" },
  storeup: { table: "storeup", pk: "id", label: "收藏" },
  discusshuodongxinxi: { table: "discusshuodongxinxi", pk: "id", label: "活动评论" },
};

export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders(request, env) });
      if (url.pathname.startsWith("/ssmw7150cne/")) return legacyResponse(request, env, url);
      if (env.ASSETS && !url.pathname.startsWith("/api/") && url.pathname !== "/health") return env.ASSETS.fetch(request);

      if (url.pathname === "/health") {
        return json(request, env, result(true, "ok", { service: "ot-ssmw7150cne-api", schema: schema(env), time: new Date().toISOString() }));
      }

      if (!url.pathname.startsWith("/api/")) return json(request, env, result(false, "API path not found", null), 404);
      const body = await parseBody(request);
      const parts = url.pathname.replace(/^\/api\/?/, "").split("/").filter(Boolean);
      if (parts[0] === "login") return json(request, env, await login(body, env));
      if (parts[0] === "summary") return json(request, env, await summary(env));

      const [resourceName, action = "list"] = parts;
      const resource = RESOURCES[resourceName];
      if (!resource) return json(request, env, result(false, "业务模块不存在", null), 404);
      return json(request, env, await handleResource(resourceName, resource, action, body, env));
    } catch (error) {
      return json(request, env, result(false, error.message || "服务异常", null), 500);
    }
  },
};

async function legacyResponse(request, env, url) {
  const parts = url.pathname.replace(/^\/ssmw7150cne\/?/, "").split("/").filter(Boolean), resourceName = parts[0], action = parts[1] || "list";
  const parsed = await parseBody(request), body = { ...Object.fromEntries(url.searchParams), ...(Array.isArray(parsed) ? {} : parsed) };
  if (action === "login") { const role = resourceName === "users" ? "admin" : resourceName === "huodongguanliyuan" ? "manager" : "user"; const auth = await login({ role, username: body.username, password: body.password }, env); return json(request, env, auth.status ? { code: 0, token: `demo-${role}`, data: auth.data } : { code: 1, msg: auth.message }); }
  if (action === "session") return json(request, env, { code: 0, data: { id: 1, username: "admin", role: "admin" } });
  const resource = RESOURCES[resourceName]; if (!resource) return json(request, env, { code: 0, data: [] });
  if (action === "list" || action === "page") { const rows = sanitizeRows(resourceName, await listRows(env, resource)); return json(request, env, { code: 0, data: { list: rows, total: rows.length, pageSize: Number(body.limit || 20), totalPage: 1, currPage: Number(body.page || 1) } }); }
  if (action === "info" || action === "detail") { const changed = await handleResource(resourceName, resource, "get", { id: parts[2] || body.id }, env); return json(request, env, { code: changed.status ? 0 : 1, msg: changed.message, data: changed.data }); }
  const mappedAction = action === "save" ? "add" : action; const changed = await handleResource(resourceName, resource, mappedAction, action === "delete" && Array.isArray(parsed) ? { id: parsed[0] } : body, env);
  return json(request, env, { code: changed.status ? 0 : 1, msg: changed.message || "ok", data: changed.data });
}

async function login(body, env) {
  const role = String(body.role || "admin").trim();
  const username = String(body.username || "").trim();
  const password = String(body.password || "").trim();
  if (!username || !password) return result(false, "请输入账号和密码", null);

  if (role === "user") {
    const rows = await requestSupabase(env, "yonghu", { yonghuzhanghao: `eq.${username}`, mima: `eq.${password}`, limit: "1" });
    if (!rows.length) return result(false, "登录失败，请检查用户账号或密码", null);
    const user = sanitize("yonghu", rows[0]);
    return result(true, null, { ...user, username: user.yonghuzhanghao, displayName: user.yonghuxingming, role: "user", roleName: "普通用户" });
  }

  if (role === "manager") {
    const rows = await requestSupabase(env, "huodongguanliyuan", { guanlizhanghao: `eq.${username}`, mima: `eq.${password}`, limit: "1" });
    if (!rows.length) return result(false, "登录失败，请检查活动管理员账号或密码", null);
    const user = sanitize("huodongguanliyuan", rows[0]);
    return result(true, null, { ...user, username: user.guanlizhanghao, displayName: user.guanlixingming, role: "manager", roleName: "活动管理员" });
  }

  const rows = await requestSupabase(env, "users", { username: `eq.${username}`, password: `eq.${password}`, limit: "1" });
  if (!rows.length) return result(false, "登录失败，请检查管理员账号或密码", null);
  const user = sanitize("users", rows[0]);
  return result(true, null, { ...user, username: user.username, displayName: user.role || "管理员", role: "admin", roleName: "管理员" });
}

async function summary(env) {
  const [users, managers, categories, activities, registrations, tracks, notices, news, storeup] = await Promise.all([
    listRows(env, RESOURCES.yonghu),
    listRows(env, RESOURCES.huodongguanliyuan),
    listRows(env, RESOURCES.huodongfenlei),
    listRows(env, RESOURCES.huodongxinxi),
    listRows(env, RESOURCES.baomingxinxi),
    listRows(env, RESOURCES.huodonggenzong),
    listRows(env, RESOURCES.tongzhixinxi),
    listRows(env, RESOURCES.news),
    listRows(env, RESOURCES.storeup),
  ]);
  return result(true, null, {
    users: users.length,
    managers: managers.length,
    categories: categories.length,
    activities: activities.length,
    registrations: registrations.length,
    tracks: tracks.length,
    notices: notices.length,
    news: news.length,
    storeup: storeup.length,
    latestActivities: activities.slice(-4).reverse(),
    latestRegistrations: registrations.slice(-4).reverse(),
    latestNotices: notices.slice(-4).reverse(),
  });
}

async function handleResource(resourceName, resource, action, body, env) {
  if (action === "list") return result(true, null, sanitizeRows(resourceName, await listRows(env, resource)));
  if (action === "get") {
    const id = body[resource.pk] ?? body.id;
    const rows = await requestSupabase(env, resource.table, { [resource.pk]: `eq.${id}`, limit: "1" });
    return result(!!rows.length, rows.length ? null : `${resource.label}不存在`, sanitize(resourceName, rows[0] || null));
  }
  if (action === "add") {
    const payload = normalize(resourceName, resource, body, "add");
    const rows = await requestSupabase(env, resource.table, {}, { method: "POST", body: payload });
    return result(true, `添加${resource.label}成功`, sanitize(resourceName, rows[0] || null));
  }
  if (action === "update" || action === "edit") {
    const id = body[resource.pk] ?? body.id;
    if (id === undefined || id === null || id === "") return result(false, `${resource.label}编号不能为空`, null);
    const payload = normalize(resourceName, resource, body, "update");
    delete payload[resource.pk];
    const rows = await requestSupabase(env, resource.table, { [resource.pk]: `eq.${id}` }, { method: "PATCH", body: payload });
    return result(true, `修改${resource.label}成功`, sanitize(resourceName, rows[0] || null));
  }
  if (action === "delete" || action === "remove") {
    const id = body[resource.pk] ?? body.id;
    if (id === undefined || id === null || id === "") return result(false, `${resource.label}编号不能为空`, null);
    await requestSupabase(env, resource.table, { [resource.pk]: `eq.${id}` }, { method: "DELETE" });
    return result(true, `删除${resource.label}成功`, null);
  }
  return result(false, "动作不存在", null);
}

async function listRows(env, resource) {
  return requestSupabase(env, resource.table, { order: `${resource.pk}.asc` });
}

function normalize(resourceName, resource, body, mode) {
  const payload = { ...body };
  if (mode === "add") delete payload[resource.pk];
  payload.addtime ||= new Date().toISOString();
  if (resourceName === "yonghu") {
    payload.mima ||= "123456";
    payload.xingbie ||= "男";
    payload.nianling = Number(payload.nianling || 1);
  }
  if (resourceName === "huodongguanliyuan") {
    payload.mima ||= "123456";
    payload.xingbie ||= "男";
  }
  if (resourceName === "huodongxinxi") {
    payload.kecanyurenshu = Number(payload.kecanyurenshu || 0);
    payload.thumbsupnum = Number(payload.thumbsupnum || 0);
    payload.crazilynum = Number(payload.crazilynum || 0);
    payload.clicknum = Number(payload.clicknum || 0);
    payload.clicktime ||= new Date().toISOString();
    payload.discussnum = Number(payload.discussnum || 0);
    payload.storeupnum = Number(payload.storeupnum || 0);
  }
  if (resourceName === "baomingxinxi") {
    payload.kecanyurenshu = Number(payload.kecanyurenshu || 1);
    payload.baomingshijian ||= new Date().toISOString();
    payload.crossuserid = Number(payload.crossuserid || 11);
    payload.crossrefid = Number(payload.crossrefid || 1);
    payload.sfsh ||= "待审核";
  }
  if (resourceName === "tongzhixinxi") {
    payload.tongzhishijian ||= new Date().toISOString();
  }
  if (resourceName === "news") {
    payload.thumbsupnum = Number(payload.thumbsupnum || 0);
    payload.crazilynum = Number(payload.crazilynum || 0);
    payload.clicknum = Number(payload.clicknum || 0);
    payload.istop = Number(payload.istop || 0);
  }
  if (resourceName === "storeup") {
    payload.userid = Number(payload.userid || 11);
    payload.refid = Number(payload.refid || 1);
    payload.type ||= "1";
  }
  if (resourceName === "discusshuodongxinxi") {
    payload.refid = Number(payload.refid || 1);
    payload.userid = Number(payload.userid || 11);
    payload.thumbsupnum = Number(payload.thumbsupnum || 0);
    payload.crazilynum = Number(payload.crazilynum || 0);
    payload.istop = Number(payload.istop || 0);
  }
  return payload;
}

async function requestSupabase(env, table, query = {}, options = {}) {
  const base = cleanEnv(env.SUPABASE_URL);
  const key = cleanEnv(env.SUPABASE_SERVICE_ROLE_KEY);
  if (!base || !key) throw new Error("Worker 缺少 Supabase 环境变量");
  const response = await fetch(`${base.replace(/\/$/, "")}/rest/v1/rpc/ot_ssmw7150cne_rest`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify({
      p_table_name: table,
      p_method: options.method || "GET",
      p_query: query,
      p_payload: options.body || {},
    }),
  });
  if (!response.ok) throw new Error(`Supabase 请求失败: ${response.status} ${await response.text()}`);
  const payload = await response.json();
  return Array.isArray(payload) ? payload : [];
}

function sanitizeRows(resourceName, rows) {
  return rows.map((row) => sanitize(resourceName, row));
}

function sanitize(resourceName, row) {
  if (!row) return row;
  const safe = { ...row };
  if (resourceName === "users") delete safe.password;
  if (resourceName === "yonghu") delete safe.mima;
  if (resourceName === "huodongguanliyuan") delete safe.mima;
  return safe;
}

function schema(env) {
  return cleanEnv(env.SUPABASE_SCHEMA) || "ot_ssmw7150cne";
}

function cleanEnv(value) {
  return String(value || "").replace(/^\uFEFF/, "").trim();
}

async function parseBody(request) {
  if (request.method === "GET" || request.method === "HEAD") return {};
  const text = await request.text();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return {};
  }
}

function result(status, message, data) {
  return { status, message, data };
}

function json(request, env, payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...corsHeaders(request, env) },
  });
}

function corsHeaders(request, env) {
  const origin = request.headers.get("Origin") || "";
  const allowed = String(env.CORS_ALLOWED_ORIGINS || "").split(",").map((item) => item.trim()).filter(Boolean);
  const allowOrigin = allowed.includes(origin) ? origin : allowed[0] || "*";
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,Authorization",
    "Access-Control-Max-Age": "86400",
  };
}
