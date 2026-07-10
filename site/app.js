const PAGES_API_BASE = "https://ot-ssmw7150cne.pages.dev";
const API_BASE = location.hostname.endsWith("pages.dev") ? location.origin : PAGES_API_BASE;

const modules = [
  {
    key: "yonghu",
    name: "用户管理",
    summary: "维护普通用户账号、姓名、联系方式和地址信息。",
    pk: "id",
    columns: [["id", "编号"], ["yonghuzhanghao", "用户账号"], ["yonghuxingming", "用户姓名"], ["xingbie", "性别"], ["shoujihao", "手机号"], ["dizhi", "地址"]],
    fields: [["yonghuzhanghao", "用户账号", "text"], ["mima", "密码", "text"], ["yonghuxingming", "用户姓名", "text"], ["xingbie", "性别", "select", ["男", "女"]], ["nianling", "年龄", "number"], ["shoujihao", "手机号", "text"], ["shenfenzheng", "身份证", "text"], ["dizhi", "地址", "text"], ["touxiang", "头像路径", "text"]],
  },
  {
    key: "huodongguanliyuan",
    name: "活动管理员",
    summary: "维护活动管理员账号、姓名、电话、邮箱和头像。",
    pk: "id",
    columns: [["id", "编号"], ["guanlizhanghao", "管理账号"], ["guanlixingming", "管理姓名"], ["xingbie", "性别"], ["shoujihao", "手机号"], ["youxiang", "邮箱"]],
    fields: [["guanlizhanghao", "管理账号", "text"], ["mima", "密码", "text"], ["guanlixingming", "管理姓名", "text"], ["xingbie", "性别", "select", ["男", "女"]], ["nianling", "年龄", "text"], ["youxiang", "邮箱", "email"], ["shoujihao", "手机号", "text"], ["shenfenzheng", "身份证", "text"], ["touxiang", "头像路径", "text"]],
  },
  {
    key: "huodongfenlei",
    name: "活动分类",
    summary: "维护活动分类，用于活动发布和筛选。",
    pk: "id",
    columns: [["id", "编号"], ["huodongfenlei", "活动分类"], ["addtime", "创建时间"]],
    fields: [["huodongfenlei", "活动分类", "text"]],
  },
  {
    key: "huodongxinxi",
    name: "活动信息",
    summary: "维护活动名称、分类、地点、时间、人数、报名要求和描述。",
    pk: "id",
    columns: [["id", "编号"], ["huodongmingcheng", "活动名称"], ["huodongfenlei", "分类"], ["huodongdidian", "地点"], ["kecanyurenshu", "名额"], ["clicknum", "浏览"]],
    fields: [["huodongmingcheng", "活动名称", "text"], ["huodongfenlei", "活动分类", "text"], ["huodongtupian", "活动图片", "text"], ["huodongdidian", "活动地点", "text"], ["kaishishijian", "开始时间", "datetime-local"], ["jieshushijian", "结束时间", "datetime-local"], ["kecanyurenshu", "可参与人数", "number"], ["baomingyaoqiu", "报名要求", "textarea"], ["huodongmiaoshu", "活动描述", "textarea"], ["thumbsupnum", "赞", "number"], ["crazilynum", "踩", "number"], ["clicknum", "浏览量", "number"]],
  },
  {
    key: "baomingxinxi",
    name: "报名信息",
    summary: "维护用户报名、审核状态、审核回复和活动关联。",
    pk: "id",
    columns: [["id", "编号"], ["huodongmingcheng", "活动名称"], ["yonghuzhanghao", "用户账号"], ["yonghuxingming", "用户姓名"], ["sfsh", "审核"], ["shhf", "回复"]],
    fields: [["huodongmingcheng", "活动名称", "text"], ["huodongfenlei", "活动分类", "text"], ["huodongtupian", "活动图片", "text"], ["huodongdidian", "活动地点", "text"], ["kaishishijian", "开始时间", "text"], ["jieshushijian", "结束时间", "text"], ["kecanyurenshu", "报名人数", "number"], ["baomingshijian", "报名时间", "datetime-local"], ["yonghuzhanghao", "用户账号", "text"], ["yonghuxingming", "用户姓名", "text"], ["sfsh", "审核状态", "select", ["待审核", "是", "否"]], ["shhf", "审核回复", "textarea"]],
  },
  {
    key: "huodonggenzong",
    name: "活动跟踪",
    summary: "维护活动执行状态、地点、时间和图片。",
    pk: "id",
    columns: [["id", "编号"], ["huodongmingcheng", "活动名称"], ["huodongfenlei", "分类"], ["huodongdidian", "地点"], ["huodongzhuangtai", "状态"]],
    fields: [["huodongmingcheng", "活动名称", "text"], ["huodongfenlei", "活动分类", "text"], ["huodongtupian", "活动图片", "text"], ["huodongdidian", "活动地点", "text"], ["kaishishijian", "开始时间", "text"], ["jieshushijian", "结束时间", "text"], ["huodongzhuangtai", "活动状态", "select", ["报名中", "进行中", "已结束"]]],
  },
  {
    key: "tongzhixinxi",
    name: "通知信息",
    summary: "维护用户通知、封面、时间和通知内容。",
    pk: "id",
    columns: [["id", "编号"], ["yonghuzhanghao", "用户账号"], ["yonghuxingming", "用户姓名"], ["tongzhibiaoti", "通知标题"], ["tongzhishijian", "通知时间"]],
    fields: [["yonghuzhanghao", "用户账号", "text"], ["yonghuxingming", "用户姓名", "text"], ["tongzhibiaoti", "通知标题", "text"], ["fengmian", "封面", "text"], ["tongzhishijian", "通知时间", "datetime-local"], ["tongzhineirong", "通知内容", "textarea"]],
  },
  {
    key: "news",
    name: "公告资讯",
    summary: "维护公告资讯标题、简介、分类、发布人和封面。",
    pk: "id",
    columns: [["id", "编号"], ["title", "标题"], ["typename", "分类"], ["name", "发布人"], ["clicknum", "浏览"]],
    fields: [["title", "标题", "text"], ["introduction", "简介", "textarea"], ["typename", "分类", "text"], ["name", "发布人", "text"], ["picture", "封面", "text"], ["content", "内容", "textarea"], ["thumbsupnum", "赞", "number"], ["crazilynum", "踩", "number"], ["clicknum", "浏览量", "number"]],
  },
  {
    key: "storeup",
    name: "收藏管理",
    summary: "维护用户收藏活动或资讯的记录。",
    pk: "id",
    columns: [["id", "编号"], ["userid", "用户ID"], ["refid", "关联ID"], ["name", "收藏名称"], ["type", "类型"]],
    fields: [["userid", "用户ID", "number"], ["refid", "关联ID", "number"], ["tablename", "来源表", "text"], ["name", "收藏名称", "text"], ["picture", "图片", "text"], ["type", "类型", "text"], ["inteltype", "推荐类型", "text"]],
  },
];

const state = {
  user: JSON.parse(localStorage.getItem("ssmw7150cne_user") || "null"),
  current: "dashboard",
  data: {},
  editing: null,
};

const $ = (selector) => document.querySelector(selector);
const publicView = $("#publicView");
const appView = $("#appView");
const moduleNav = $("#moduleNav");
const dashboard = $("#dashboard");
const modulePanel = $("#modulePanel");
const searchInput = $("#searchInput");
const editDialog = $("#editDialog");
const editForm = $("#editForm");

init();

async function init() {
  renderNav();
  bindEvents();
  await handleAutoLogin();
  if (state.user) await showApp();
}

function bindEvents() {
  $("#role").addEventListener("change", () => {
    const role = $("#role").value;
    if (role === "admin") {
      $("#username").value = "admin";
      $("#password").value = "admin";
    } else if (role === "manager") {
      $("#username").value = "管理账号1";
      $("#password").value = "123456";
    } else {
      $("#username").value = "用户账号1";
      $("#password").value = "123456";
    }
  });

  $("#loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    $("#loginMessage").textContent = "";
    try {
      const response = await api("login", { role: $("#role").value, username: $("#username").value.trim(), password: $("#password").value.trim() });
      if (!response.status) {
        $("#loginMessage").textContent = response.message || "登录失败";
        return;
      }
      state.user = response.data;
      localStorage.setItem("ssmw7150cne_user", JSON.stringify(state.user));
      await showApp();
    } catch (error) {
      $("#loginMessage").textContent = error.message;
    }
  });

  document.querySelectorAll("[data-login]").forEach((button) => {
    button.addEventListener("click", () => {
      const [role, username, password] = button.dataset.login.split("/");
      $("#role").value = role;
      $("#username").value = username;
      $("#password").value = password;
      document.querySelector("#login").scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });

  $("#logoutButton").addEventListener("click", () => {
    localStorage.removeItem("ssmw7150cne_user");
    state.user = null;
    appView.hidden = true;
    publicView.hidden = false;
  });

  $("#refreshButton").addEventListener("click", () => loadCurrent(true));
  $("#addButton").addEventListener("click", () => openEditor());
  $("#closeDialogButton").addEventListener("click", () => editDialog.close());
  $("#cancelEditButton").addEventListener("click", () => editDialog.close());
  searchInput.addEventListener("input", () => renderTable());
  editForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    await saveEditor();
  });
}

async function handleAutoLogin() {
  const auto = new URLSearchParams(location.search).get("auto");
  if (!auto || state.user) return;
  const presets = {
    admin: { role: "admin", username: "admin", password: "admin" },
    manager: { role: "manager", username: "管理账号1", password: "123456" },
    user: { role: "user", username: "用户账号1", password: "123456" },
  };
  const preset = presets[auto] || presets.admin;
  $("#role").value = preset.role;
  $("#username").value = preset.username;
  $("#password").value = preset.password;
  const response = await api("login", preset);
  if (response.status) {
    state.user = response.data;
    localStorage.setItem("ssmw7150cne_user", JSON.stringify(state.user));
  }
}

function renderNav() {
  moduleNav.innerHTML = "";
  moduleNav.appendChild(navButton("dashboard", "仪表盘", "总览"));
  modules.forEach((item) => moduleNav.appendChild(navButton(item.key, item.name, "数据维护")));
}

function navButton(key, label, meta) {
  const button = document.createElement("button");
  button.type = "button";
  button.dataset.module = key;
  button.innerHTML = `<span>${escapeHtml(label)}</span><small>${escapeHtml(meta)}</small>`;
  button.addEventListener("click", () => switchModule(key));
  return button;
}

async function showApp() {
  publicView.hidden = true;
  appView.hidden = false;
  $("#roleText").textContent = `${state.user.displayName || state.user.username} · ${state.user.roleName}`;
  await switchModule("dashboard");
}

async function switchModule(key) {
  state.current = key;
  searchInput.value = "";
  document.querySelectorAll("#moduleNav button").forEach((button) => button.classList.toggle("active", button.dataset.module === key));
  await loadCurrent();
}

async function loadCurrent(force = false) {
  $("#addButton").hidden = state.current === "dashboard";
  searchInput.hidden = state.current === "dashboard";
  if (state.current === "dashboard") {
    $("#pageTitle").textContent = "仪表盘";
    modulePanel.hidden = true;
    dashboard.hidden = false;
    await renderDashboard();
    return;
  }

  const mod = getModule(state.current);
  $("#pageTitle").textContent = mod.name;
  $("#moduleTitle").textContent = mod.name;
  $("#moduleSummary").textContent = mod.summary;
  dashboard.hidden = true;
  modulePanel.hidden = false;
  if (force || !state.data[state.current]) await fetchModule(state.current);
  renderTable();
}

async function renderDashboard() {
  const response = await api("summary");
  if (!response.status) throw new Error(response.message || "加载统计失败");
  const data = response.data;
  dashboard.innerHTML = `
    <section class="stats">
      ${stat("用户", data.users)}
      ${stat("活动管理员", data.managers)}
      ${stat("活动", data.activities)}
      ${stat("报名", data.registrations)}
      ${stat("通知", data.notices)}
    </section>
    <section class="flow-card">
      <h2>核心活动流程</h2>
      <p>从活动发布、用户报名、审核通知到活动跟踪，展示活动运营平台的主要业务链路。</p>
      <div class="flow-columns">
        <article>
          <h3>最新活动</h3>
          ${items(data.latestActivities, "huodongmingcheng", (item) => `${item.huodongfenlei || "未分类"} · ${item.huodongdidian || "地点未定"}`)}
        </article>
        <article>
          <h3>报名审核</h3>
          ${items(data.latestRegistrations, "huodongmingcheng", (item) => `${item.yonghuzhanghao || "用户"} · ${item.sfsh || "待审核"}`)}
        </article>
        <article>
          <h3>通知信息</h3>
          ${items(data.latestNotices, "tongzhibiaoti", (item) => `${item.yonghuzhanghao || "用户"} · ${formatDate(item.tongzhishijian)}`)}
        </article>
      </div>
    </section>
  `;
}

function stat(label, value) {
  return `<div class="stat-card"><strong>${Number(value || 0)}</strong><span>${escapeHtml(label)}</span></div>`;
}

function items(rows = [], titleKey, subtitle) {
  if (!rows.length) return `<p class="flow-item">暂无数据</p>`;
  return rows.slice(0, 4).map((row) => `
    <div class="flow-item">
      <strong>${escapeHtml(row[titleKey] || "未命名")}</strong>
      <span>${escapeHtml(subtitle(row))}</span>
    </div>
  `).join("");
}

async function fetchModule(key) {
  const response = await api(`${key}/list`);
  if (!response.status) throw new Error(response.message || "加载列表失败");
  state.data[key] = response.data || [];
}

function renderTable() {
  const mod = getModule(state.current);
  const rows = (state.data[state.current] || []).filter((row) => JSON.stringify(row).toLowerCase().includes(searchInput.value.trim().toLowerCase()));
  $("#recordCount").textContent = `${rows.length} 条记录`;
  $("#tableHead").innerHTML = `<tr>${mod.columns.map(([, label]) => `<th>${escapeHtml(label)}</th>`).join("")}<th>操作</th></tr>`;
  $("#tableBody").innerHTML = rows.map((row) => `
    <tr>
      ${mod.columns.map(([key]) => `<td>${formatCell(row[key])}</td>`).join("")}
      <td class="actions">
        <button type="button" data-edit="${row[mod.pk]}">编辑</button>
        <button type="button" data-delete="${row[mod.pk]}">删除</button>
      </td>
    </tr>
  `).join("");

  document.querySelectorAll("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.edit;
      const row = rows.find((item) => String(item[mod.pk]) === String(id));
      openEditor(row);
    });
  });
  document.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", async () => deleteRow(button.dataset.delete));
  });
}

function openEditor(row = null) {
  const mod = getModule(state.current);
  state.editing = row;
  $("#dialogTitle").textContent = row ? `编辑${mod.name}` : `新增${mod.name}`;
  $("#formFields").innerHTML = mod.fields.map(([key, label, type, options]) => fieldTemplate(key, label, type, options, row?.[key])).join("");
  editDialog.showModal();
}

function fieldTemplate(key, label, type, options, value) {
  const current = value ?? "";
  if (type === "textarea") {
    return `<label class="full">${escapeHtml(label)}<textarea name="${key}">${escapeHtml(current)}</textarea></label>`;
  }
  if (type === "select") {
    return `<label>${escapeHtml(label)}<select name="${key}">${options.map((option) => `<option value="${escapeHtml(option)}" ${String(option) === String(current) ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select></label>`;
  }
  const inputValue = type === "datetime-local" ? toDateTimeLocal(current) : current;
  return `<label>${escapeHtml(label)}<input name="${key}" type="${type}" value="${escapeHtml(inputValue)}" /></label>`;
}

async function saveEditor() {
  const mod = getModule(state.current);
  const payload = Object.fromEntries(new FormData(editForm).entries());
  if (state.editing) payload[mod.pk] = state.editing[mod.pk];
  const response = await api(`${state.current}/${state.editing ? "update" : "add"}`, payload);
  if (!response.status) throw new Error(response.message || "保存失败");
  editDialog.close();
  await fetchModule(state.current);
  renderTable();
}

async function deleteRow(id) {
  const mod = getModule(state.current);
  const response = await api(`${state.current}/delete`, { [mod.pk]: id });
  if (!response.status) throw new Error(response.message || "删除失败");
  await fetchModule(state.current);
  renderTable();
}

async function api(path, body = null) {
  const response = await fetch(`${API_BASE}/api/${path}`, {
    method: body ? "POST" : "GET",
    headers: body ? { "Content-Type": "application/json" } : {},
    body: body ? JSON.stringify(body) : undefined,
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.message || `请求失败: ${response.status}`);
  return payload;
}

function getModule(key) {
  return modules.find((item) => item.key === key);
}

function formatCell(value) {
  if (value === null || value === undefined || value === "") return "-";
  if (typeof value === "string" && value.length > 80) return `${escapeHtml(value.slice(0, 80))}...`;
  return escapeHtml(formatDate(value));
}

function formatDate(value) {
  if (!value || typeof value !== "string") return value ?? "";
  if (/^\d{4}-\d{2}-\d{2}T/.test(value)) return value.slice(0, 16).replace("T", " ");
  return value;
}

function toDateTimeLocal(value) {
  if (!value || typeof value !== "string") return "";
  if (value.includes("T")) return value.slice(0, 16);
  return value.replace(" ", "T").slice(0, 16);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

