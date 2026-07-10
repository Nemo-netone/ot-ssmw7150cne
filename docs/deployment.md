# 部署记录

## 稳定资源

| 资源 | 值 |
|---|---|
| GitHub 仓库 | `https://github.com/Nemo-netone/ot-ssmw7150cne` |
| 生产分支 | `main` |
| Cloudflare Pages 项目 | `ot-ssmw7150cne` |
| 稳定演示地址 | `https://ot-ssmw7150cne.pages.dev` |
| API 运行时 | Cloudflare Pages Functions / `site/_worker.js` |
| Supabase schema | `ot_ssmw7150cne` |

首次生产部署使用 `main` 分支。后续重新发布继续使用同一个 GitHub 仓库、同一个 Pages 项目和同一个分支，保持演示地址不变。

## 部署架构

```text
site/
  -> Cloudflare Pages
  -> /api/* 由 Pages Functions / Worker 处理
  -> Supabase RPC public.ot_ssmw7150cne_rest
  -> ot_ssmw7150cne schema
```

原始项目位于 `src/`，保留 SSM、MyBatis、Vue 2 前后台和 MySQL 初始化脚本。线上演示不直接运行 Java/Tomcat 后端。

## 环境变量

Cloudflare Pages / Worker 配置：

```text
SUPABASE_URL=<supabase-url>
SUPABASE_SERVICE_ROLE_KEY=<supabase-service-role-key>
SUPABASE_SCHEMA=ot_ssmw7150cne
CORS_ALLOWED_ORIGINS=https://ot-ssmw7150cne.pages.dev
```

真实密钥只放在 Cloudflare secrets、平台 CLI 或本机受控环境中，不能提交到仓库。

## 数据库初始化

初始化脚本：

```text
supabase/schema.sql
```

该脚本只创建和写入：

```text
ot_ssmw7150cne
```

不会创建、删除、重置或覆盖 `public` schema 及其他项目 schema。

## 发布命令

```powershell
supabase db query --linked --file supabase/schema.sql
npx wrangler@3 pages deploy site --project-name ot-ssmw7150cne --branch main
```

Worker 兼容文件独立调试：

```powershell
Set-Location worker
npx wrangler@3 deploy
```

当前公开演示使用 Pages Functions 同域 API，稳定 API base 为 `https://ot-ssmw7150cne.pages.dev/api/*`。`worker/` 目录保留同一份接口逻辑，便于后续需要时切换为独立 Worker 服务。

## 验证清单

- [x] Pages 地址返回 200。
- [x] `/health` 返回服务和 schema 信息。
- [x] 管理员账号可登录。
- [x] 普通用户账号可登录。
- [x] 活动管理员账号可登录。
- [x] 活动、报名、通知至少一个列表接口可返回数据。
- [x] 新增、编辑、删除演示流程可用。
- [x] README 演示地址、账号、截图和限制说明准确。
- [x] GitHub 仓库公开可访问。
- [x] `main` 分支已推送。
- [x] secret scan 不包含真实平台密钥。

## 已知限制

- 演示版不接入真实短信、支付、地图或验证码服务。
- 上传图片为静态演示资源，不作为长期文件存储。
- 权限控制以公开演示账号区分，不等同生产级鉴权。
