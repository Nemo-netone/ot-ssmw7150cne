# 部署记录

## 稳定资源

| 资源 | 值 |
|---|---|
| GitHub | https://github.com/Nemo-netone/ot-ssmw7150cne |
| 生产分支 | main |
| Cloudflare Pages | $([IO.Path]::GetFileNameWithoutExtension(([uri]System.Collections.Hashtable.url).Host).Replace('.pages','')) |
| 稳定 URL | https://ot-ssmw7150cne.pages.dev |
| 生产目录 | original-site/ |
| API | Pages Worker / original-site/_worker.js |
| Supabase schema | $(System.Collections.Hashtable.schema) |

## 发布命令

`powershell
npx wrangler@3 pages deploy original-site --project-name ot-ssmw7150cne --branch main
`

Cloudflare secrets 沿用既有 Pages 项目配置，真实密钥不写入仓库或文档。

## 2026-07-12 验证

- 稳定 URL：HTTP 200
- 健康检查：service 与 $(System.Collections.Hashtable.schema) 一致
- 登录：$(System.Collections.Hashtable.account) 成功
- 核心列表：活动信息 / 活动分类 有数据
- CRUD：新增、更新、删除成功，临时记录已清理
- 浏览器：桌面和移动端截图已更新
- 不串台：标题、业务数据、schema 均与本项目一致

## 已知边界

原前端的地图组件依赖外部高德脚本；当前核心列表与管理流程不依赖地图。